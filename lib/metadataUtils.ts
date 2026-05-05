import exifr from 'exifr';

export async function readMetadata(dataUrl: string) {
    try {
        const response = await fetch(dataUrl);
        const blob = await response.blob();
        const arrayBuffer = await blob.arrayBuffer();
        
        let rawMetadata: any = {};

        // 1. Brute-force scan for JPEG
        if (blob.type === 'image/jpeg') {
            rawMetadata = scanAllJpegSegments(arrayBuffer);
        }

        // 2. Fallback to exifr if nothing found
        if (Object.keys(rawMetadata).length === 0) {
            rawMetadata = await exifr.parse(arrayBuffer, {
                mergeOutput: true,
                tiff: true,
                xmp: true,
                iptc: true,
                icc: true
            }) || {};
        }

        // 3. Parse and structure the extracted data
        return parseExtractedMetadata(rawMetadata);
    } catch (e) {
        console.error("Error reading metadata", e);
        return null;
    }
}

function parseExtractedMetadata(rawSegments: any): any {
    const structured: any = {};
    
    // Find the most likely segment containing the prompt
    let rawText = rawSegments['parameters'] || rawSegments['APP1_Exif_Raw'] || rawSegments['COM_Comment'] || rawSegments['TrailingData_Hidden'];
    
    if (!rawText) {
        // Fallback: clean up binary garbage from other segments
        const cleanFallback: any = {};
        for (const [k, v] of Object.entries(rawSegments)) {
            if (typeof v === 'string') {
                cleanFallback[k] = v.replace(/[\x00-\x09\x0B-\x1F\x7F-\x9F]/g, '').trim();
            } else {
                cleanFallback[k] = v;
            }
        }
        return cleanFallback;
    }

    // Try to parse as the new JSON structure
    try {
        const parsed = JSON.parse(rawText);
        if (parsed && typeof parsed === 'object' && parsed.prompt) {
            structured['Prompt'] = parsed.prompt;
            structured['Prompt Negativo'] = parsed.negativePrompt;
            if (parsed.models) {
                structured['Modelos'] = parsed.models.map((m: any) => `${m.label} (${m.modelFileName})`).join(' | ');
            }
            structured['Configuración'] = {
                'Width': parsed.width,
                'Height': parsed.height,
                'Steps': parsed.steps,
                'CFG Scale': parsed.cfgScale,
                'Seed': parsed.seed,
                'Sampler': parsed.ksamplerName
            };
        }
    } catch(e) {
        // Not the new JSON structure, continue with existing parsing
    }

    // Clean up EXIF/UNICODE headers
    const unicodeIndex = rawText.indexOf('UNICODE');
    if (unicodeIndex !== -1) {
        rawText = rawText.substring(unicodeIndex + 7);
    }
    // Remove non-printable characters (except newlines)
    rawText = rawText.replace(/[\x00-\x09\x0B-\x1F\x7F-\x9F]/g, '').trim();

    // Try to extract Civitai JSONs safely
    const civitaiResourcesMatch = rawText.match(/Civitai resources:\s*(\[.*?\])(?:,\s*Civitai metadata:|$)/);
    if (civitaiResourcesMatch) {
        try { 
            const resources = JSON.parse(civitaiResourcesMatch[1]);
            structured['Recursos (Modelos/LoRAs)'] = resources.map((r: any) => `${r.modelName || r.type} (${r.modelVersionName || 'default'})`).join(' | ');
        } catch(e){}
    }
    
    const civitaiMetadataMatch = rawText.match(/Civitai metadata:\s*(\{.*?\})(?:$|... \[TRUNCATED\])/);
    if (civitaiMetadataMatch) {
        try { 
            const meta = JSON.parse(civitaiMetadataMatch[1]);
            if (meta.workflow) structured['Flujo de trabajo'] = meta.workflow;
            if (meta.ecosystem) structured['Ecosistema'] = meta.ecosystem;
        } catch(e){}
    }

    // Remove everything from "Civitai resources:" onwards for easier parsing
    let cleanText = rawText;
    const civitaiResIndex = cleanText.indexOf('Civitai resources:');
    if (civitaiResIndex !== -1) {
        cleanText = cleanText.substring(0, civitaiResIndex).trim();
        if (cleanText.endsWith(',')) cleanText = cleanText.substring(0, cleanText.length - 1);
    }

    // Split Prompt and Parameters
    const stepsIndex = cleanText.lastIndexOf('Steps:');
    if (stepsIndex !== -1) {
        const promptPart = cleanText.substring(0, stepsIndex).trim();
        let paramsPart = cleanText.substring(stepsIndex).trim();

        // Extract Negative Prompt if exists
        const negPromptMatch = promptPart.match(/Negative prompt:\s*([\s\S]+)$/i);
        if (negPromptMatch) {
            structured['Prompt'] = promptPart.substring(0, negPromptMatch.index).trim();
            structured['Prompt Negativo'] = negPromptMatch[1].trim();
        } else {
            structured['Prompt'] = promptPart;
        }

        // Parse individual parameters
        const paramRegexes = {
            'Pasos (Steps)': /Steps:\s*([\d.]+)/i,
            'Sampler': /Sampler:\s*([^,]+)/i,
            'CFG Scale': /CFG scale:\s*([\d.]+)/i,
            'Semilla (Seed)': /Seed:\s*(\d+)/i,
            'Resolución': /Size:\s*([0-9x]+)/i,
            'Modelo Base': /Model(?: type)?:\s*([^,]+)/i,
            'Fecha de Creación': /Created Date:\s*([^,]+)/i
        };
        
        for (const [key, regex] of Object.entries(paramRegexes)) {
            const match = paramsPart.match(regex);
            if (match) structured[key] = match[1].trim();
        }
        
        const alquimiaMatch = paramsPart.match(/Alquimia Metadata:\s*(\{[\s\S]*\})/);
        if (alquimiaMatch) {
            try {
                const meta = JSON.parse(alquimiaMatch[1]);
                structured['Detalles de Generación (Alquimia)'] = meta;
                // Explicitly extract previews if they exist
                if (meta.secondImage) structured['Preview Imagen 2'] = meta.secondImage;
                if (meta.thirdImage) structured['Preview Imagen 3'] = meta.thirdImage;
                if (meta.effect) structured['Efecto'] = meta.effect;
            } catch(e){}
            paramsPart = paramsPart.replace(alquimiaMatch[0], '').trim();
        }

        structured['Parámetros Crudos'] = paramsPart.length > 5000 ? paramsPart.substring(0, 5000) + '... [TRUNCATED]' : paramsPart;

    } else {
        structured['Prompt o Datos Crudos'] = cleanText.length > 5000 ? cleanText.substring(0, 5000) + '... [TRUNCATED]' : cleanText;
    }

    // Add other useful top-level metadata if present (like from PNGs)
    const basicKeys = ['ImageWidth', 'ImageHeight', 'ColorType', 'Software', 'Artist'];
    for (const key of basicKeys) {
        if (rawSegments[key]) {
            structured[key] = rawSegments[key];
        }
    }

    return structured;
}

/**
 * Escanea TODOS los segmentos de un JPEG buscando texto legible (JSON, XML, Prompts).
 */
function scanAllJpegSegments(arrayBuffer: ArrayBuffer): any {
    const view = new DataView(arrayBuffer);
    const bytes = new Uint8Array(arrayBuffer);
    const results: any = {};

    // Verificar SOI (Start of Image)
    if (view.getUint16(0, false) !== 0xFFD8) return { error: "Not a valid JPEG" };

    let offset = 2;
    let segmentIndex = 0;

    while (offset < view.byteLength - 1) {
        // Buscar el siguiente marcador (debe empezar con FF)
        if (view.getUint8(offset) !== 0xFF) break;
        
        const marker = view.getUint8(offset + 1);

        // EOI (End of Image)
        if (marker === 0xD9) {
            // Revisar si hay datos ocultos DESPUÉS del final de la imagen (Trailing data)
            if (offset + 2 < view.byteLength) {
                const trailingBytes = bytes.slice(offset + 2);
                const trailingText = new TextDecoder('utf-8').decode(trailingBytes).replace(/\0/g, '').trim();
                if (trailingText.length > 5) {
                    results['TrailingData_Hidden'] = trailingText;
                }
            }
            break;
        }

        // SOS (Start of Scan) - Aquí empiezan los píxeles comprimidos, paramos de buscar metadatos
        if (marker === 0xDA) break;

        // Marcadores sin longitud (RSTn, etc)
        if (marker === 0x00 || (marker >= 0xD0 && marker <= 0xD7)) {
            offset += 2;
            continue;
        }

        // Leer longitud del segmento
        const length = view.getUint16(offset + 2, false);
        
        // Extraer los datos del segmento (excluyendo el marcador y la longitud)
        const segmentData = bytes.slice(offset + 4, offset + 2 + length);
        
        // Intentar decodificar como texto UTF-8
        const text = new TextDecoder('utf-8').decode(segmentData).replace(/\0/g, '').trim();

        // Nombres descriptivos para los segmentos conocidos
        let segmentName = `Segment_FF${marker.toString(16).toUpperCase()}_${segmentIndex}`;
        if (marker === 0xFE) segmentName = "COM_Comment";
        if (marker === 0xE1 && text.startsWith("Exif")) segmentName = "APP1_Exif_Raw";
        if (marker === 0xE1 && text.startsWith("http://ns.adobe.com/xap/1.0/")) segmentName = "APP1_XMP_XML";
        if (marker === 0xED) segmentName = "APP13_IPTC";

        // Heurística: Si el texto tiene más de 15 caracteres legibles (letras, llaves JSON, etc.), lo guardamos
        const isReadable = /[a-zA-Z0-9\{\}\[\]":,\.\ \n\r]{15,}/.test(text);

        if (isReadable || marker === 0xFE) {
            // Limpiar un poco el texto para que no rompa la UI si tiene basura binaria al principio
            results[segmentName] = text.length > 5000 ? text.substring(0, 5000) + "... [TRUNCATED]" : text;
        }

        offset += 2 + length;
        segmentIndex++;
    }

    return results;
}

// Helper to resize base64 image to a small thumbnail
async function resizeBase64Image(base64: string, maxWidth: number = 100): Promise<string> {
    return new Promise((resolve) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => {
            const canvas = document.createElement('canvas');
            const scale = maxWidth / img.width;
            canvas.width = maxWidth;
            canvas.height = img.height * scale;
            const ctx = canvas.getContext('2d');
            ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);
            resolve(canvas.toDataURL('image/jpeg', 0.7));
        };
        img.src = base64;
    });
}

export async function writeMetadata(dataUrl: string, mediaData: any): Promise<string> {
    if (!dataUrl.startsWith('data:image/png')) {
        console.warn("Metadata writing currently only supported for PNGs");
        return dataUrl;
    }

    try {
        const prompt = mediaData.promptUsed || mediaData.generationData?.userInput || '';
        const effect = mediaData.generationData?.effectName || mediaData.sourceCaption || '';
        const model = mediaData.generationData?.model || '';
        
        // Include effect in parameters
        let parametersText = prompt;
        
        const params = [];
        if (effect) params.push(`Effect: ${effect}`);
        if (model) params.push(`Model: ${model}`);
        if (mediaData.generationData?.dynamicData?.aspectRatio) {
            params.push(`Size: ${mediaData.generationData.dynamicData.aspectRatio}`);
        }
        
        if (params.length > 0) {
            parametersText += `\nSteps: 1, Sampler: Alquimia Visual, CFG scale: 1, Seed: 0, ${params.join(', ')}`;
        }
        
        // Ensure effect is explicitly in the JSON metadata too
        const cleanMediaData = { 
            ...mediaData,
            effect: effect // Explicitly add effect
        };
        
        // Resize previews to thumbnails to prevent metadata truncation
        if (cleanMediaData.generationData) {
            cleanMediaData.generationData = { ...cleanMediaData.generationData };
            if (cleanMediaData.generationData.secondImage) {
                cleanMediaData.generationData.secondImage = await resizeBase64Image(cleanMediaData.generationData.secondImage);
            }
            if (cleanMediaData.generationData.thirdImage) {
                cleanMediaData.generationData.thirdImage = await resizeBase64Image(cleanMediaData.generationData.thirdImage);
            }
            
            if (cleanMediaData.generationData.dynamicData) {
                cleanMediaData.generationData.dynamicData = { ...cleanMediaData.generationData.dynamicData };
                delete cleanMediaData.generationData.dynamicData.image;
                delete cleanMediaData.generationData.dynamicData.maskImage;
                delete cleanMediaData.generationData.dynamicData.referenceImage;
            }
        }
        
        delete cleanMediaData.mediaUrl;
        delete cleanMediaData.sourceImage;
        
        // Add raw JSON for our own app to read perfectly
        parametersText += `\nAlquimia Metadata: ${JSON.stringify(cleanMediaData)}`;

        // Convert dataUrl to Uint8Array
        const base64 = dataUrl.split(',')[1];
        const binaryString = atob(base64);
        const len = binaryString.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }

        // Check PNG signature
        const signature = [137, 80, 78, 71, 13, 10, 26, 10];
        for (let i = 0; i < 8; i++) {
            if (bytes[i] !== signature[i]) return dataUrl; // Not a valid PNG
        }

        // Create tEXt chunk data
        const keyword = "parameters";
        const textEncoder = new TextEncoder();
        const keywordBytes = textEncoder.encode(keyword);
        const textBytes = textEncoder.encode(parametersText);
        
        const chunkData = new Uint8Array(keywordBytes.length + 1 + textBytes.length);
        chunkData.set(keywordBytes, 0);
        chunkData[keywordBytes.length] = 0; // Null separator
        chunkData.set(textBytes, keywordBytes.length + 1);

        // Create chunk
        const chunkType = textEncoder.encode("tEXt");
        const chunkLength = chunkData.length;
        
        const chunk = new Uint8Array(4 + 4 + chunkLength + 4);
        const dataView = new DataView(chunk.buffer);
        dataView.setUint32(0, chunkLength, false);
        chunk.set(chunkType, 4);
        chunk.set(chunkData, 8);
        
        // Calculate CRC over Type and Data
        const crcInput = new Uint8Array(4 + chunkLength);
        crcInput.set(chunkType, 0);
        crcInput.set(chunkData, 4);
        dataView.setUint32(8 + chunkLength, crc32(crcInput), false);

        // Insert chunk after IHDR (which is always the first chunk, 8 bytes signature + 25 bytes IHDR = 33 bytes)
        const newBytes = new Uint8Array(bytes.length + chunk.length);
        newBytes.set(bytes.subarray(0, 33), 0);
        newBytes.set(chunk, 33);
        newBytes.set(bytes.subarray(33), 33 + chunk.length);

        // Convert back to Data URL
        let newBinaryString = '';
        const chunkSize = 0x8000;
        for (let i = 0; i < newBytes.length; i += chunkSize) {
            newBinaryString += String.fromCharCode.apply(null, Array.from(newBytes.subarray(i, i + chunkSize)));
        }
        
        return `data:image/png;base64,${btoa(newBinaryString)}`;
    } catch (e) {
        console.error("Error writing metadata", e);
        return dataUrl;
    }
}

// CRC32 implementation
const crcTable = new Uint32Array(256);
for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
        c = ((c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1));
    }
    crcTable[n] = c;
}

function crc32(buf: Uint8Array) {
    let crc = 0 ^ (-1);
    for (let i = 0; i < buf.length; i++) {
        crc = (crc >>> 8) ^ crcTable[(crc ^ buf[i]) & 0xFF];
    }
    return (crc ^ (-1)) >>> 0;
}
