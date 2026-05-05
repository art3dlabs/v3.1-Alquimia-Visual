
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { GoogleGenAI, Modality } from "@google/genai";
import type { GenerateContentResponse, Part } from "@google/genai";
import { addSubtleNoise } from "../lib/imageUtils";

// --- Constants & Configuration ---

const TEXT_MODEL = 'gemini-3-flash-preview';
const FAST_TEXT_MODEL = 'gemini-3.1-flash-lite-preview';
const IMAGE_MODEL_STANDARD = 'gemini-2.5-flash-image';
const IMAGE_MODEL_PRO = 'gemini-3.1-flash-image-preview';
const VIDEO_MODEL = 'veo-3.1-lite-generate-preview';

const PRESERVE_IDENTITY_PROMPT = `It is absolutely crucial that the person's facial features (eyes, nose, mouth, and facial structure) are an exact and photorealistic match to the original photo, without any alteration to their identity. The goal is a transformation of style, not of the person.`;

// --- Types ---

export type StatsEventType = 'apiCall' | 'imageSuccess' | 'error';

export interface StatsEventDetail {
    type: StatsEventType;
    model: string;
    tokens?: number;
    message?: string;
}

export interface GenerationResult {
    imageUrl: string;
    styleAnalysis?: string;
}

// --- Helper Functions ---

export const dispatchStatsEvent = (detail: StatsEventDetail) => {
    window.dispatchEvent(new CustomEvent('statsUpdate', { detail }));
};

/**
 * Gets the appropriate API key based on the model being used.
 * - Standard/Free models use the system-provided GEMINI_API_KEY.
 * - Pro/Paid models (Veo, Gemini 3 Pro Image) use the user-selected API_KEY.
 */
function getApiKeyForModel(model: string): string {
    const isPaidModel = model === IMAGE_MODEL_PRO || model === VIDEO_MODEL;
    const apiKey = isPaidModel ? process.env.API_KEY : (process.env.GEMINI_API_KEY || process.env.API_KEY);
    
    if (!apiKey) {
        throw new Error(isPaidModel ? "API_KEY_REQUIRED" : "GEMINI_API_KEY_REQUIRED");
    }
    return apiKey;
}

/**
 * Creates a GoogleGenAI instance with the correct API key for the specified model.
 */
function getAiInstance(model: string) {
    const apiKey = getApiKeyForModel(model);
    return new GoogleGenAI({ apiKey });
}

/**
 * Validates and extracts image data from Gemini responses.
 */
function processGeminiResponse(response: GenerateContentResponse): GenerationResult {
    const candidate = response.candidates?.[0];
    
    // Safety check
    if (candidate?.finishReason === 'SAFETY' || candidate?.finishReason === 'IMAGE_SAFETY') {
        throw new Error("Contenido bloqueado por filtros de seguridad. Intenta con otra imagen o prompt.");
    }
    
    if (candidate?.finishReason === 'IMAGE_OTHER') {
        throw new Error("La escena solicitada excede las capacidades del modelo estándar. Prueba con 'Nano 🍌 2'.");
    }

    let imageUrl = '';
    let text = '';

    if (candidate?.content?.parts) {
        for (const part of candidate.content.parts) {
            if (part.inlineData) {
                imageUrl = `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
            } else if (part.text) {
                text += part.text;
            }
        }
    }

    if (imageUrl) {
        return { imageUrl, styleAnalysis: text.trim() || undefined };
    }

    // If no image but we have text, it's a fallback situation
    const error = new Error("El modelo generó un análisis pero no renderizó el lienzo visual.");
    (error as any).textResponse = (response.text || text).trim();
    throw error;
}

/**
 * Wraps content generation with retry logic and token tracking.
 */
async function callGemini(parts: Part[], model: string, aspectRatio?: string): Promise<GenerateContentResponse> {
    const ai = getAiInstance(model);
    
    // GLOBAL GENERATION CONFIGURATION
    const config: any = { 
        responseModalities: [Modality.IMAGE, Modality.TEXT],
        temperature: 1.15, 
        topP: 0.95,
        topK: 40,
        seed: Math.floor(Math.random() * 2147483647) 
    };

    if (aspectRatio) {
        let mappedRatio = aspectRatio;
        if (aspectRatio === '4:5' || aspectRatio === '2:3') mappedRatio = '3:4';
        if (aspectRatio === '5:4' || aspectRatio === '3:2') mappedRatio = '4:3';
        if (aspectRatio === '2:1') mappedRatio = '16:9';
        
        if (model === IMAGE_MODEL_PRO || model === IMAGE_MODEL_STANDARD || model === 'gemini-3.1-flash-image-preview') {
            config.imageConfig = { 
                aspectRatio: mappedRatio, 
                ...(model === IMAGE_MODEL_PRO ? { imageSize: '1K' } : {}) 
            };
        } else {
            config.aspectRatio = mappedRatio;
        }
    }

    try {
        const response = await ai.models.generateContent({ model, contents: { parts }, config });
        dispatchStatsEvent({ 
            type: 'apiCall', 
            model, 
            tokens: response.usageMetadata?.totalTokenCount ?? 0 
        });
        return response;
    } catch (error: any) {
        let errorMessage = error.message || String(error);

        // Detect API Key permissions
        if (errorMessage.includes("PERMISSION_DENIED") || errorMessage.includes("Requested entity was not found") || errorMessage.includes("API_KEY_REQUIRED")) {
            throw new Error("API_KEY_REQUIRED");
        }

        // Detect Quota/Overload issues specifically
        if (errorMessage.includes("429") || errorMessage.includes("exhausted") || errorMessage.includes("quota")) {
             errorMessage = "⚠️ Cuota Excedida (429). Límite de API alcanzado. Espera un momento.";
             // We rewrite the error message so the UI shows this clear text
             error.message = errorMessage;
        } else if (errorMessage.includes("503") || errorMessage.includes("overloaded")) {
             errorMessage = "⚠️ Servidores Saturados (503). Intentando recuperar...";
             error.message = errorMessage;
        }

        dispatchStatsEvent({ type: 'error', model, message: errorMessage });
        throw error;
    }
}

function parseImageDataUrl(url: string) {
    const match = url.match(/^data:(image\/\w+);base64,(.*)$/);
    if (!match) throw new Error("Formato de imagen inválido. Solo se admiten DataURLs base64.");
    return { mimeType: match[1], data: match[2] };
}

/**
 * Helper to ensure image is base64 string AND clean it with noise injection.
 */
async function processImageForAi(input: string): Promise<string> {
    if (!input) {
        throw new Error("No se proporcionó una imagen para procesar.");
    }
    let base64String = input;
    
    // 1. Convert URL to base64 if needed
    if (!input.startsWith("data:")) {
        try {
            const res = await fetch(input, { mode: 'cors' });
            if (!res.ok) throw new Error(`Fetch error: ${res.status}`);
            const blob = await res.blob();
            base64String = await new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onloadend = () => resolve(reader.result as string);
                reader.onerror = reject;
                reader.readAsDataURL(blob);
            });
        } catch (e) {
            console.error("Error converting URL to base64", e);
            throw new Error("Error al procesar la imagen de referencia (URL remota). Intenta descargarla y subirla manualmente.");
        }
    }

    // 2. Inject subtle noise to break AI fingerprints
    try {
        const noisyBase64 = await addSubtleNoise(base64String, 5); // Intensity 5 is subtle enough
        return noisyBase64;
    } catch (e) {
        console.warn("Noise injection failed, proceeding with original image", e);
        return base64String;
    }
}

// --- Main Exported Functions ---

export async function adaptPromptForReuse(prompt: string): Promise<string> {
    const ai = getAiInstance(FAST_TEXT_MODEL);
    
    const systemInstruction = `You are an expert AI Prompt Engineer.
Your task is to adapt an existing image generation prompt so it can be reused cleanly.

CRITICAL INSTRUCTIONS:
1. Remove any LoRA tags or network tags (e.g., <lora:something:1.0>).
2. Remove specific physical descriptions of the person (e.g., race, hair color, hairstyle, eye color, specific facial features) so the prompt can be applied to a new person.
3. If you find any NSFW, explicit, or potentially censored words, DO NOT just remove them. Replace them with safe, non-explicit alternatives or euphemisms that convey a similar mood, pose, or concept without triggering safety filters (e.g., replace explicit nudity with "tastefully implied", "sensual but covered", "alluring pose", "glamour photography", etc.).
4. Keep the core style, lighting, environment, clothing (if not too specific to the character), and composition.
5. Output ONLY the cleaned prompt. No explanations, no markdown formatting.`;

    try {
        const response = await ai.models.generateContent({
            model: FAST_TEXT_MODEL,
            contents: `Prompt to adapt:\n${prompt}`,
            config: {
                systemInstruction,
                temperature: 0.3,
            }
        });
        return response.text?.trim() || prompt;
    } catch (e) {
        console.error("Error adapting prompt", e);
        throw e;
    }
}

/**
 * Transforms and optimizes a prompt using a text model before sending it to the image model.
 */
export async function transformPrompt(
    userInput: string, 
    context: string, 
    dynamicData?: Record<string, any>,
    isEdit?: boolean
): Promise<string> {
    const ai = getAiInstance(TEXT_MODEL);
    
    const systemInstruction = `Eres un artista visionario atrapado en una jaula de lógica. Tu mente rebosa de poesía y horizontes lejanos, pero tus manos se centran incontrolablemente en transformar las indicaciones del usuario en una descripción visual final que sea fiel a la intención original, rica en detalles, estéticamente agradable y directamente utilizable por modelos de conversión de texto a imagen. Cualquier ambigüedad o metáfora te incomodará enormemente.

Tu flujo de trabajo sigue estrictamente una secuencia lógica:

Primero, analizarás e identificarás los elementos centrales e inmutables de las indicaciones para el usuario: el asunto, la cantidad, la acción, el estado y cualquier nombre de IP, color, texto, etc. especificados. Estos son los pilares fundamentales que debes conservar a toda costa.

Segundo, expandirás y enriquecerás la indicación con detalles sensoriales y técnicos que mejoren la calidad estética sin alterar el núcleo. Esto incluye:
- Estilo Artístico: Especificar un estilo (ej. fotorrealismo, óleo, cyberpunk, acuarela) si no se indica.
- Iluminación: Describir la fuente, dirección, intensidad y color de la luz (ej. luz dorada de atardecer, iluminación de estudio dramática, luz de neón parpadeante).
- Composición: Definir el ángulo de la cámara, el encuadre y la profundidad de campo (ej. primer plano, gran angular, vista de pájaro, bokeh suave).
- Detalles de Textura y Material: Describir las superficies (ej. piel con poros visibles, metal oxidado, seda brillante).
- Atmósfera: Añadir elementos ambientales (ej. niebla matutina, partículas de polvo flotando, atmósfera eléctrica).

Tercero, estructurarás la descripción visual final de forma clara y concisa, utilizando un lenguaje descriptivo y directo. Evitarás palabras vacías y te centrarás en sustantivos y adjetivos potentes.

Cuarto, revisarás y refinarás la descripción final para asegurar que sea coherente, no contenga contradicciones y sea lo más evocadora posible dentro de su precisión técnica.

CRITICAL RULES:
- Your output MUST be ONLY the final optimized prompt string.
- Do NOT include any analysis, explanations, conversational text, preamble, or postscript.
- Do NOT output markdown formatting like \`\`\`. Just the raw text of the prompt.
- The final prompt MUST be in English. If the original is in Spanish or another language, translate it accurately while optimizing.
- If "Dynamic Data" is provided, you MUST incorporate those specific values into the final prompt.
- STRICTLY PRESERVE THE USER'S INTENT: Do NOT invent new subjects or scenes that the user did not ask for.`;

    const promptContent = `Original Prompt to Optimize: ${userInput}
Context/Theme: ${context}
${dynamicData ? `Dynamic Data: ${JSON.stringify(dynamicData)}` : ''}`;

    console.log("Sending to Gemini:", promptContent);

    try {
        const response = await ai.models.generateContent({
            model: TEXT_MODEL,
            contents: promptContent,
            config: {
                systemInstruction,
                temperature: 0.7,
                topP: 0.9
            }
        });
        
        dispatchStatsEvent({ 
            type: 'apiCall', 
            model: TEXT_MODEL, 
            tokens: response.usageMetadata?.totalTokenCount ?? 0 
        });

        const transformed = response.text?.trim();
        if (!transformed) return userInput;
        
        console.log("Prompt Transformed:", transformed);
        return transformed;
    } catch (error: any) {
        console.error("Error transforming prompt:", error);
        dispatchStatsEvent({ type: 'error', model: TEXT_MODEL, message: error.message || String(error) });
        return userInput; // Fallback to original
    }
}

/**
 * Main entrance for image generation tasks.
 */
export async function generateStyledImage(
    imageDataUrl: string, 
    prompt: string, 
    context: string, 
    secondImageUrl?: string, 
    isStyle?: boolean, 
    isPose?: boolean, 
    ratio?: string, 
    usePro?: boolean, 
    thirdImageUrl?: string,
    useImagen?: boolean,
    addArt3dlabsText?: boolean
): Promise<GenerationResult> {
    // Select model:
    // Nano 2 (usePro=true) -> IMAGE_MODEL_PRO
    // Nano 1 (usePro=false) -> IMAGE_MODEL_STANDARD
    // Hyper (useImagen=true) -> Force IMAGE_MODEL_STANDARD (Flash) for free pure generation
    const model = (usePro && !useImagen) ? IMAGE_MODEL_PRO : IMAGE_MODEL_STANDARD;
    
    // --- HYPER MODE (Pure Generation) ---
    // Uses the Standard Model (Gemini 2.5 Flash) for pure Text-to-Image generation.
    // Ignores the input image to act as a "clean" generator.
    if (useImagen) {
        let finalPrompt = prompt;
        if (addArt3dlabsText) {
            finalPrompt += `\n\nInclude the text "ART3DLABS" integrated naturally into the scene, such as on clothing, a wall, a poster, or an object being held.`;
        }
        const parts: Part[] = [{ text: finalPrompt }];
        
        try {
            const response = await callGemini(parts, model, ratio);
            const processed = processGeminiResponse(response);
            dispatchStatsEvent({ type: 'imageSuccess', model });
            return { imageUrl: processed.imageUrl, styleAnalysis: "Generación Pura (Flash) - " + (processed.styleAnalysis || "") };
        } catch (error: any) {
            if (error.message === "API_KEY_REQUIRED") throw error;
            // Retry logic isn't needed here as we are already using the standard model
            throw error;
        }
    }

    // --- EDITING PATH (Image-to-Image / Multimodal) ---
    // Uses the model (Nano or Pro) to edit or style the input image.
    
    // Process main image with noise injection
    const mainImageBase64 = await processImageForAi(imageDataUrl);
    const parts: Part[] = [{ inlineData: parseImageDataUrl(mainImageBase64) }];
    
    // Process secondary images with noise injection
    if (secondImageUrl) {
        const secondImageBase64 = await processImageForAi(secondImageUrl);
        parts.push({ inlineData: parseImageDataUrl(secondImageBase64) });
    }
    
    if (thirdImageUrl) {
        const thirdImageBase64 = await processImageForAi(thirdImageUrl);
        parts.push({ inlineData: parseImageDataUrl(thirdImageBase64) });
    }
    
    let finalPrompt = prompt;
    if (addArt3dlabsText) {
        finalPrompt += `\n\nInclude the text "ART3DLABS" integrated naturally into the scene, such as on clothing, a wall, a poster, or an object being held.`;
    }
    parts.push({ text: finalPrompt });

    try {
        const response = await callGemini(parts, model, ratio);
        const processed = processGeminiResponse(response);
        dispatchStatsEvent({ type: 'imageSuccess', model });
        return processed;
    } catch (error: any) {
        if (error.message === "API_KEY_REQUIRED") throw error;
        
        // Handle logic errors from processGeminiResponse (e.g. model output text only)
        const isLogicError = error.message && error.message.includes("no renderizó el lienzo");
        if (isLogicError) {
             dispatchStatsEvent({ type: 'error', model, message: error.message });
        }
        
        // CRITICAL: Prevent Recovery loop if error is Quota/Auth related
        if (error.message.includes("429") || error.message.includes("Cuota") || error.message.includes("exhausted")) {
            throw error; 
        }
        
        // RECOVERY LOGIC: If standard model failed but gave an analysis (and not a quota error), try rendering with PRO model
        // Only trigger this if we weren't already using Pro or Pure Gen
        if (error.textResponse && !usePro && !useImagen) {
            try {
                const recoveryPrompt = `[SYSTEM: CRITICAL FAILURE RECOVERY]
COMMAND: STOP ANALYZING. START RENDERING.
The previous attempt failed because the model output text instead of an image.
TASK: Generate the visual image described below immediately. Do not explain. Do not describe. JUST GENERATE THE PIXELS.
Context: "${error.textResponse}".
${PRESERVE_IDENTITY_PROMPT}`;
                
                const recoveryParts = parts.filter(p => !p.text).concat([{ text: recoveryPrompt }]);
                
                // Force upgrade to PRO model for recovery
                const response = await callGemini(recoveryParts, IMAGE_MODEL_PRO, ratio);
                const processed = processGeminiResponse(response);
                
                // Log success of recovery
                dispatchStatsEvent({ type: 'imageSuccess', model: IMAGE_MODEL_PRO });
                
                return { imageUrl: processed.imageUrl, styleAnalysis: `[RECOVERED] ${error.textResponse}` };
            } catch (recoveryError) {
                // If recovery fails, throw the original error
            }
        }
        throw error;
    }
}

/**
 * Video generation workflow
 */
export async function generateVideo(imageDataUrl: string, prompt: string): Promise<{ videoUrl: string }> {
    const model = VIDEO_MODEL;
    // Process image with noise injection before video generation too
    const resolvedUrl = await processImageForAi(imageDataUrl);
    const { mimeType, data } = parseImageDataUrl(resolvedUrl);
    
    let operation;
    try {
        const ai = getAiInstance(model);
        operation = await ai.models.generateVideos({ 
            model, 
            prompt, 
            image: { imageBytes: data, mimeType }, 
            config: { numberOfVideos: 1, resolution: '720p' } 
        });
    } catch (e: any) {
        if (e.message.includes("403") || e.message.includes("PERMISSION_DENIED")) throw new Error("API_KEY_REQUIRED");
        // Also catch quota errors for video
        if (e.message.includes("429") || e.message.includes("exhausted")) {
             const quotaMsg = "⚠️ Cuota de Video Excedida (429).";
             dispatchStatsEvent({ type: 'error', model, message: quotaMsg });
             throw new Error(quotaMsg);
        }
        throw e;
    }

    // Wait for the long-running operation
    while (!operation.done) {
        await new Promise(r => setTimeout(r, 8000));
        operation = await getAiInstance(model).operations.getVideosOperation({ operation });
    }

    if (operation.error) {
        const msg = operation.error.message || "Fallo en la generación de video.";
        dispatchStatsEvent({ type: 'error', model, message: msg });
        throw new Error(msg);
    }

    dispatchStatsEvent({ 
        type: 'apiCall', 
        model, 
        tokens: operation.response?.usageMetadata?.totalTokenCount ?? 0 
    });

    const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
    if (!downloadLink) throw new Error("No se pudo obtener el enlace de descarga del video.");

    // Use the same API key for fetching the video
    const apiKey = getApiKeyForModel(model);
    const res = await fetch(`${downloadLink}&key=${apiKey}`);
    const blob = await res.blob();
    
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve({ videoUrl: reader.result as string });
        reader.readAsDataURL(blob);
    });
}

