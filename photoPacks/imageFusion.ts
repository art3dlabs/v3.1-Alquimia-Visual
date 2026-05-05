
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import type { PhotoPack } from './types';
import { PRESERVE_IDENTITY_PROMPT, PRESERVE_IDENTITY_PROMPT_COUPLE } from './types';

export const imageFusionPacks: Record<string, PhotoPack> = {
    'fashion-collage': {
        title: 'Fashion Collage Editorial',
        description: 'Crea un póster editorial de moda de pantalla dividida combinando tu rostro con el outfit de otra foto.',
        images: [
            {
                id: 1001,
                key: 'fashion-collage',
                caption: 'Fashion Collage Editorial (Incomplete)',
                subcategory: 'Editoriales de Moda',
                prompt: `High-end editorial fashion photography with a composite layout, emphasizing a clean and sophisticated K-pop idol aesthetic.

    IDENTITY (IMAGE 1): Strictly preserve the facial features, hairstyle, and skin texture of the person in Image 1.
    WARDROBE (IMAGE 2): Strictly replicate the complete outfit from Image 2: every garment, layering, materials, textures, cuts, seams, hardware, accessories.

    COMPOSITION: A composite shot: an extreme close-up portrait on the left, with a superimposed full-body shot on the right. The portrait is cropped at the mid-chest. The full-body figure is layered over the right side of the large facial portrait, creating a 'picture-in-picture' fashion editorial effect. The contrast in scale between the massive, detailed face and the small, complete figure creates a dramatic sense of depth.

    SUBJECT (IN BOTH): The person in the portrait and the full-body shot must be the same person from Image 1. 

    CRITICAL: The full-body shot on the right MUST be a NEW, complete, photorealistic person generated from scratch, using the facial features of Image 1 and wearing the outfit from Image 2. Do not use the outfit image as a flat overlay. Generate a new, full-body person wearing the outfit in a professional fashion pose.

    STYLE: Adobe RGB, photorealistic, human, East Asian, Korean, young adult, slim and graceful, elegant, slender build, prominent collarbones, long graceful neck. The waist is exceptionally narrow and 'paper-thin', transitioning into subtle, soft hip curves. Arms are long and lithe.

    ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'model-cover',
                imageTypeHint: 'Foto 1: Rostro (Referencia). Foto 2: Outfit (Referencia).',
                detailedDescription: "Crea un collage editorial de moda estilo K-pop, fusionando tu rostro con el outfit de otra foto.",
                requiresSecondImage: true,
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['9:16', '3:4', '4:5', '1:1'],
                dynamicFields: []
            },
            {
                id: 1002,
                key: 'fashion-collage-v2',
                caption: 'Collage de Moda: Rostro + Outfit',
                subcategory: 'Editoriales de Moda',
                prompt: `SYSTEM ROLE: ELITE FASHION EDITOR.

MISSION: Create a fashion collage layout with 5 sections based on the provided images.

INPUT SOURCES:
1. IDENTITY (IMAGE 1): Strictly preserve the facial features, hairstyle, and skin texture of the person in Image 1.
2. WARDROBE (IMAGE 2): Strictly replicate the complete outfit from Image 2: every garment, textures, and fit.

LAYOUT (STRICT STRUCTURE):
- Center: A clean cutout of the outfit (from Image 2) placed vertically, slightly floating, with a soft white outline glow around it.
- Around the center: Four different lifestyle shots of the person (from Image 1) wearing the outfit (from Image 2).
  - Top left: indoor mirror selfie in a modern lobby with marble walls and shiny floor, holding phone covering face, relaxed walking pose.
  - Top right: outdoor greenery setting with plants and trees, walking pose with hands in pockets, looking sideways.
  - Bottom left: sitting pose on a bench or ledge, slightly leaning forward, one hand in hair, moody lighting.
  - Bottom right: urban street or stairs background with concrete textures, walking casually with hands in pockets.
- Add minimal white curved arrows pointing from each lifestyle image toward the center outfit.

STYLE:
- Lighting: soft natural light, slightly warm tone, cinematic shadows, Instagram aesthetic.
- Color palette: neutral tones, olive green, black, white, soft greys.
- Style: clean, minimal, high-end fashion lookbook, Pinterest / Instagram aesthetic.
- Camera: 35mm lens, shallow depth of field, sharp subject focus.
- Quality: ultra realistic, high resolution, 4K, detailed fabric texture.

${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'model-cover',
                imageTypeHint: 'Foto 1: Rostro (Referencia). Foto 2: Outfit (Referencia).',
                detailedDescription: "Crea un collage de moda con 5 secciones: un outfit central y 4 tomas de estilo de vida fusionando tu rostro con el outfit de otra foto.",
                requiresSecondImage: true,
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['9:16', '3:4', '4:5', '1:1'],
                dynamicFields: []
            },            {
                id: 1003,
                key: 'macbook-photo-booth',
                caption: 'MacBook Photo Booth (Incomplete)',
                subcategory: 'Tecnología y Pantallas',
                prompt: `Hyper-realistic downward high-angle shot of MacBook screen, 95% frame coverage. Surface: pixel-grid moire, dust, faint reflections, fingerprint smudges on glossy glass. Physical keyboard strip visible at bottom. Screen displays macOS Dark Mode with dominant Photo Booth window. Window content: girl matching reference image exactly, relaxed smile, black top, grey bottoms, holding iPhone 15 Pro, reclining in dim bedroom, off-white wall, rumpled bedding. Lighting: nocturnal low-key, cool screen glow, warm skin tones, deep shadows. Raw photo, high fidelity, natural noise, unedited. \${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'default',
                imageTypeHint: 'Foto de pantalla de MacBook mostrando Photo Booth con tu imagen.',
                detailedDescription: "Genera una toma realista de una pantalla de MacBook mostrando Photo Booth con una imagen tuya en una habitación oscura.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['16:9', '4:3', '1:1'],
            },
            {
                id: 1020,
                key: 'miniature-sticker-fusion',
                caption: 'Retrato + Miniatura Sticker',
                subcategory: 'Retratos y Stickers (Fusion)',
                prompt: `MAIN PORTRAIT: GENERATE A NEW PHOTOGRAPH using the exact facial features and hairstyle of Image 1. EXTREME CLOSE-UP: Crop strictly at the chin, absolutely NO neck, NO shoulders, NO clavicle. The face must completely fill the frame.

Asymmetrical composition: the hyper-detailed face occupies the left and central part of the image, while a full-body miniature figure as a clean graphic sticker occupies the right side, positioned in the lower right area, scaled up significantly to occupy at least 40% of the total image area. The miniature figure must be a highly detailed photographic figure, NOT a 3D render, with realistic human skin textures, imperfections, and lighting.

IDENTITY (IMAGE 1): GENERATE A NEW IMAGE applying the facial features, hairstyle, and skin texture of the person in Image 1 to BOTH the main portrait AND the miniature figure. The miniature figure and the main face MUST be the exact same person.
WARDROBE (IMAGE 2): Strictly replicate the complete outfit from Image 2 for the miniature figure: every garment, textures, and fit.

Miniature figure: full-body sticker with thick clean white border and slight drop shadow, standing in a candid model pose, relaxed A-frame stance, weight shifted to one leg, one foot slightly forward and pointed outward, hips slightly angled, arms resting naturally at the sides with soft hands, subtle confident yet natural expression, looking toward the camera. MUST BE PHOTOGRAPHIC QUALITY, NOT A 3D RENDER.

Hyper-realistic dewy skin with oily glossy sheen, visible pores, sebaceous filaments on the nose, small beauty mark near the left eye, subtle enigmatic smirk, soft direct gaze, relaxed facial muscles, slight five-degree head tilt.

Soft high-key diffused lighting from front-left creating specular highlights on the skin. Forensic clinical sharpness, hyper-detailed skin textures, shallow depth of field, natural warm skin tones, desaturated neutral smooth background, high clarity, clean studio atmosphere.

Sticker-style miniature presented as a cut-out overlay with crisp white outline on the main portrait. PHOTOGRAPHIC REALISM IS MANDATORY.

\${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'model-cover',
                imageTypeHint: 'Foto 1: Rostro (Referencia). Foto 2: Outfit (Referencia).',
                detailedDescription: "Crea un retrato macro asimétrico con una figura en miniatura estilo sticker, fusionando tu rostro con el outfit de otra foto.",
                requiresSecondImage: true,
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['9:16', '3:4', '4:5', '1:1'],
            },
            {
                id: 1030,
                key: 'fashion-magazine-editorial',
                caption: 'Fashion Editorial (2 Fotos)',
                subcategory: 'Editoriales de Moda',
                prompt: `Fashion editorial layout, split design with model photo on the left and styled outfit board on the right, modern minimal magazine aesthetic. 

**LEFT SIDE (The Model):** The woman in the photo MUST have the exact facial features, skin tone, and identity from **Reference Image 1**. She is wearing the **EXACT outfit and accessories captured in Reference Image 2**. 
*Action:* Analyze Reference Image 2 to identify the specific garments (e.g., type of jacket, top, pants, shoes, handbag), their colors, fabrics, and fit. Apply these identical items to the model in Reference Image 1. 
*Setting:* Neutral city street background with soft natural lighting and high-end editorial photography style.

**RIGHT SIDE (The Outfit Board):** A neatly arranged outfit flat lay featuring the **EXACT same items from Reference Image 2** (jacket, bodysuit, jeans, sandals, handbag, earrings, sunglasses). 
*Details:* Include a color palette section with swatches matching the tones of Reference Image 2, fabric texture samples, and clean typography sections like “Style Notes,” “Why You’ll Love It,” and “Perfect For.”

**TOP SECTION:** Editorial typography: “THE EDIT” in bold serif font across the top. 

**TECHNICAL:** High-end fashion magazine quality, clean professional photography, 8K resolution, sharp details, and cinematic color grading. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'model-cover',
                imageTypeHint: 'Foto 1: Tu rostro. Foto 2: Outfit de referencia.',
                detailedDescription: "Diseño editorial de moda con pantalla dividida. A la izquierda, tú usando el outfit de la segunda foto. A la derecha, un 'flat lay' profesional de las prendas. Estética de revista minimalista moderna.",
                requiresSecondImage: true,
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['3:4', '9:16', '4:5', '1:1'],
            }
        ]
    },
    'virtual-try-on': {
        title: 'Probador Virtual',
        description: 'Sube una foto tuya y una prenda para probártela, o sube un look completo para extraer y catalogar su ropa.',
        images: [
            {
                id: 1004,
                key: 'cosplay-vs-original-nb2',
                caption: 'Cosplay vs Original (NB2)',
                subcategory: 'Cosplay y Personajes',
                prompt: `Medium-full shot, eye-level candid smartphone photography at a busy Comic Convention.

**SUBJECT (THE COSPLAYER):**
A real woman (using facial features from **Reference Image 1**) with an athletic physique and an hourglass figure.

**THE OUTFIT (MOVIE QUALITY FEMININE ADAPTATION):**
She is wearing a spectacular, high-budget movie costume based on **Reference Image 2**, adapted to fit a female form.
*   **Structural Fidelity:** The suit must strictly maintain the SAME structure, color palette, design elements, and armor placement as the character in Reference Image 2. No arbitrary changes to the design.
*   **Fit:** Tailored perfectly to her athletic hourglass physique, but retaining the original character's silhouette integrity.
*   **User Specifics on Outfit:** [CLOTHING_DETAILS]
*   **MANDATORY QUALITY:** This is NOT a cheap costume. It looks like a real wardrobe test photography for a 300 million dollar movie.
*   **DETAILS:** The clothing materials (leather, metal, fabric) must be EXACTLY as high-quality as a blockbuster film. Brutal sharpness, real textures.
*   If the original image has pointed ears, tail, horns, wings, or colored skin, keep them but converted into ultra-high quality cinematic prosthetics or real biological features.

**THE SCENE:**
Next to her stands a **Life-Size Cardboard Cutout** of the actual character (from Reference Image 2). The cutout looks like a printed promotional standee (flat, 2D).

**ACTION:**
The woman is cheerfully mimicking the heroic pose of the cardboard cutout standing beside her.

**ATMOSPHERE:**
Harsh mix of overhead fluorescent lights and booth spotlights. Blurred attendees and promotional banners in the background. Authentic fan experience. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'try-on',
                imageTypeHint: 'Nano 🍌 2: Foto 1: Tú (Cara). Foto 2: El Personaje (Traje y Cutout).',
                detailedDescription: "Crea una escena divertida donde apareces haciendo cosplay de un personaje junto a un recorte de cartón del personaje original. El resultado es una foto espontánea de convención.\nSube tu foto y una imagen clara del personaje que quieres imitar.",
                mediaType: 'image',
                requiresSecondImage: true,
                requiresAspectRatio: true,
                supportedAspectRatios: ['4:5', '9:16', '1:1', '3:4'],
                dynamicFields: [
                    {
                        type: 'text',
                        key: '[CLOTHING_DETAILS]',
                        label: 'Detalles del Traje (Material/Ajuste)',
                        placeholder: 'Ej: Armadura desgastada, tela ajustada, colores vivos...',
                        maxLength: 150,
                        isOptional: true
                    }
                ]
            },
            {
                id: 1005,
                key: 'editorial-poster-fusion-nb2',
                caption: 'Póster Editorial: Fusión Outfit NB2',
                prompt: `SYSTEM ROLE: ELITE FASHION EDITOR.

**MISSION:** 
Create a split-screen high-fashion editorial poster.

**INPUT SOURCES:**
1. **IDENTITY (IMAGE 1):** Use the facial features and hairstyle of the person in Image 1.
2. **WARDROBE (IMAGE 2):** Use the exact outfit, textures, and styling from Image 2.

**LAYOUT (STRICT STRUCTURE):**
- **Split-Shot Composition:** The image must be divided into two distinct panels (Left and Right) seamlessly joined.
- **Left Side:** A Full-Body shot of the subject wearing the outfit from Image 2. Pose: Standing, powerful, looking away.
- **Right Side:** A Close-Up Portrait (Bust/Face) of the same subject. Pose: Intense gaze at the camera, highlighting makeup/skin details.
- **Background:** Clean studio background (White or Light Grey) to keep focus on the fashion.

**WARDROBE STYLING NOTES:**
[CLOTHING_DETAILS]

**DYNAMIC TEXT GENERATION (CRITICAL):**
- **ANALYZE IMAGE 2:** Look at the clothing style (e.g. Sporty, Luxury, Grunge, Minimalist).
- **BRANDING:** Based on the style, SELECT A REAL FAMOUS BRAND NAME that fits (e.g. 'BALENCIAGA', 'NIKE', 'CHANEL', 'Y-3', 'ZARA'). Write this brand name in large, elegant typography across the image (overlay).
- **SUBTEXT:** Add small, realistic editorial text like "Summer Collection" or "The New Look".

**VISUAL STYLE:**
- High contrast, sharp focus, glossy magazine finish.
- The lighting should be bright studio flash.

${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'model-cover',
                imageTypeHint: 'Nano 🍌 2: Foto 1: Rostro. Foto 2: Outfit. Estilo Póster Partido con Marca Dinámica.',
                detailedDescription: "Genera un póster de moda de pantalla dividida combinando tu rostro con el outfit de otra foto. Incluye tipografía de marca generada dinámicamente. El resultado es una campaña publicitaria high-end.\nSube un buen retrato tuyo y una foto de moda con un outfit completo.",
                requiresSecondImage: true,
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['3:4', '9:16', '4:5', '1:1'],
                dynamicFields: [
                    {
                        type: 'text',
                        key: '[CLOTHING_DETAILS]',
                        label: 'Detalles de Estilismo',
                        placeholder: 'Ej: Caída suelta, textura de cuero brillante, look oversize...',
                        maxLength: 150,
                        isOptional: true
                    }
                ]
            },
            {
                id: 1006,
                key: 'vogue-editorial-synthesis-nb2',
                caption: 'Síntesis Editorial Vogue (NB2)',
                subcategory: 'Editoriales de Moda',
                prompt: `SYSTEM ROLE: ELITE FASHION EDITOR & SYNTHESIS SPECIALIST FOR VOGUE-STYLE EDITORIALS.

**MISSION:** 
Create a high-end Vogue magazine editorial poster/spread by fusing TWO reference images into a strictly fixed, consistent asymmetric fashion layout.

**INPUT SOURCES:**
1. **IDENTITY (IMAGE 1):** Strictly preserve the exact facial features and hairstyle of the person in IMAGE 1.
2. **WARDROBE (IMAGE 2):** Strictly replicate the complete outfit from IMAGE 2: every garment, layering, materials, textures, cuts, seams, hardware, accessories.

**CLOTHING SPECIFICATIONS:**
[CLOTHING_DETAILS]

**LAYOUT & COMPOSITION:**
- **FORMAT:** Single cohesive vertical frame in "{aspectRatio}".
- **FIXED COMPOSITION:**
  - **Large dominant panel** (60-70%): 3/4 frontal view of the fused subject — full-body.
  - **Three smaller panels** (right side):
    - Top-right: Tight close-up of upper body.
    - Middle-right: Close-up detail of accessories/hardware.
    - Bottom-right: Lower body detail + 3/4 back view integration.
  - All panels share pristine white seamless studio backdrop.

**TYPOGRAPHY:**
- Main headline: "[Iconic Brand Name] [Signature Element]"
- Subtitle: "Avant-Garde Silhouettes"
- Detail captions near small panels.

**SUBJECT SPECIFICATIONS:**
- **Expression:** Soft, introspective, cool editorial detachment.
- **Pose:** Relaxed full-body 3/4 front stance.
- **Lighting:** Bright, even, diffused high-key studio.

It is absolutely crucial: Identical photorealistic face and hairstyle from IMAGE 1 in EVERY panel where visible. All panels show the SAME fused person (IMAGE 1 identity + IMAGE 2 exact wardrobe).`,
                illustration: 'model-cover',
                imageTypeHint: 'Nano 🍌 2: Foto 1: Rostro y Pelo. Foto 2: El Outfit. Crea un póster editorial estilo Vogue.',
                detailedDescription: "Crea una página editorial de revista compleja con múltiples paneles (cuerpo entero, detalles, primer plano) fusionando tu identidad con un outfit de referencia. El resultado es sofisticado y profesional.\nIdeal para visualizar cómo te quedaría un look completo de pasarela.",
                requiresSecondImage: true,
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['2:3', '3:4', '4:5', '9:16'],
                dynamicFields: [
                    {
                        type: 'text',
                        key: '[CLOTHING_DETAILS]',
                        label: 'Detalles de la Ropa',
                        placeholder: 'Ej: Alta costura, bordados detallados, ajuste ceñido...',
                        maxLength: 150,
                        isOptional: true
                    }
                ]
            },
            {
                id: 1007,
                key: 'apply-outfit',
                caption: 'Probar Ropa de Otra Foto',
                subcategory: 'Probadores Virtuales',
                prompt: `This is a virtual try-on task. Your goal is to generate a new, completely photorealistic image of the person from the first photo wearing the clothing item from the second photo.

**CRITICAL INSTRUCTIONS:**
1.  **INTEGRATE, DON'T OVERLAY:** Do not simply cut and paste the clothing. You must redraw the person wearing the garment.
2.  **REALISTIC FIT & PROPORTIONS:** The clothing must be realistically resized and reshaped to fit the person's body proportions, shape, and pose. It must wrap naturally around their form, creating realistic folds, wrinkles, and shadows.
3.  **USER PREFERENCES:** [CLOTHING_DETAILS]
4.  **CONSISTENT LIGHTING:** The lighting and shadows on the clothing must seamlessly match the lighting conditions of the original person and background from the first photo.

The final result should be a single, believable photograph with a {aspectRatio} aspect ratio. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'try-on',
                imageTypeHint: 'Foto 1: Cuerpo entero. Foto 2: La prenda.',
                detailedDescription: "Aplica la prenda de una segunda foto sobre tu cuerpo, ajustando los pliegues y la iluminación para que parezca real. El resultado es una prueba virtual de vestuario.\nSube una foto tuya de cuerpo entero y una foto clara de la prenda que deseas probar.",
                requiresSecondImage: true,
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['9:16', '1:1', '16:9', '4:3', '3:4'],
                dynamicFields: [
                    {
                        type: 'text',
                        key: '[CLOTHING_DETAILS]',
                        label: 'Ajuste y Calidad',
                        placeholder: 'Ej: Que quede holgado, mostrar textura de lana, remeter la camisa...',
                        maxLength: 150,
                        isOptional: true
                    }
                ]
            },
            {
                id: 1008,
                key: 'mirror-selfie-try-on',
                caption: 'Probador: Selfie en Espejo',
                subcategory: 'Probadores Virtuales',
                prompt: `Generate a realistic mirror selfie of the same person shown in the uploaded portrait, now wearing the outfit from the uploaded clothing photo. The final output must have a {aspectRatio} aspect ratio. Keep the person’s face, hairstyle, and body proportions consistent with the reference image. The outfit should fit naturally, matching fabric texture and lighting. **Styling Note:** [CLOTHING_DETAILS]. Pose the person in a natural mirror selfie position — relaxed, confident, and authentic. Use soft natural lighting, shallow depth of field, and a minimalist indoor background for a genuine lifestyle photo look. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'try-on',
                imageTypeHint: 'Foto 1: Tu foto. Foto 2: La prenda a probar.',
                detailedDescription: "Genera una selfie casual frente al espejo usando el outfit que subas en la segunda foto. El resultado es natural y perfecto para redes sociales.\nRecomendamos usar una foto tuya clara y una foto de la prenda aislada o sobre modelo.",
                requiresSecondImage: true,
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['4:5', '1:1', '16:9', '9:16', '4:3', '3:4'],
                dynamicFields: [
                    {
                        type: 'text',
                        key: '[CLOTHING_DETAILS]',
                        label: 'Detalles del Look',
                        placeholder: 'Ej: Estilo casual, mangas arremangadas, accesorios visibles...',
                        maxLength: 150,
                        isOptional: true
                    }
                ]
            },
            {
                id: 1009,
                key: 'split-screen-fashion-shoot',
                caption: 'Probador: Frontal y Espalda',
                subcategory: 'Probadores Virtuales',
                prompt: `Generate a photorealistic full-body portrait in the style of a split-screen fashion shoot, using the same person from the uploaded portrait reference, now wearing the outfit from the uploaded clothing photo. The final output must have a 9:16 aspect ratio. Split the screen exactly in half vertically: on the left side, confident model pose with hips and torso facing directly forward to the camera, right leg slightly lifted to accentuate the figure and show perfect outfit fit from the front; on the right side, identical person and outfit in a professional modeling pose turned with back to the camera but head turned over the shoulder looking directly at the viewer, left leg slightly shifted for dynamic balance, highlighting the outfit's fit, drape, and details from behind. Keep the person’s face, hairstyle, body proportions, and identity an exact photorealistic match to the reference image—no alterations. Outfit fits naturally with matching fabric texture, folds, and lighting. **Clothing Fit/Style Notes:** [CLOTHING_DETAILS]. Use soft natural lighting, shallow depth of field, minimalist indoor background for a genuine lifestyle look. High detail on clothing drape from all angles, proportions, and pose authenticity, 8K resolution. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'try-on',
                imageTypeHint: 'Foto 1: Tu foto. Foto 2: La prenda. Vista doble (frente y espalda).',
                detailedDescription: "Genera una composición de pantalla dividida mostrando cómo te queda el outfit de frente y de espaldas. Estilo editorial de moda con iluminación natural.\nSube una foto tuya y una foto de la prenda.",
                requiresSecondImage: true,
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['9:16', '1:1', '4:5', '3:4'],
                dynamicFields: [
                    {
                        type: 'text',
                        key: '[CLOTHING_DETAILS]',
                        label: 'Ajuste de la Prenda',
                        placeholder: 'Ej: Corte slim fit, caída pesada de la tela...',
                        maxLength: 150,
                        isOptional: true
                    }
                ]
            },
            {
                id: 1010,
                key: 'extract-outfit',
                caption: 'Extraer Outfit V2',
                subcategory: 'Extracción de Ropa',
                prompt: `Accurately extract and isolate the complete outfit from the provided image. Present the outfit as an e-commerce 'flat lay' product shot. All clothing items and accessories (e.g., jacket, top, pants, shoes, accessories) must be faithfully extracted from the original image, rendered as real pieces of clothing, and neatly arranged on a clean white background. The perspective should be a bird's-eye view. The image must be hyperrealistic, high-resolution, with soft, diffused studio lighting creating minimal shadows. Ensure items are evenly spaced, with consistent angles, maintaining an editorial fashion catalog aesthetic. There should be no distractions or additional elements not visible in the original image. Details should be sharp and clear.`,
                illustration: 'outfit',
                imageTypeHint: 'Sube la foto con el outfit en "Segunda Foto".',
                detailedDescription: "Aísla y organiza la ropa de una foto en una composición 'flat lay' sobre fondo blanco. El resultado es una foto de producto limpia ideal para catálogos.\nSube una foto donde el outfit se vea completo y claro.",
                requiresSecondImage: true,
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['1:1', '16:9', '9:16', '4:3', '3:4'],
            },
            {
                id: 1021,
                key: 'extract-outfit-v3',
                caption: 'Extraer Outfit V3 (Editorial Flat Lay)',
                subcategory: 'Extracción de Ropa',
                prompt: `ABSOLUTE PRODUCT SHOT. EXTREME FLAT LAY. The complete outfit from the provided image is laid out completely flat on a clean, neutral, off-white studio surface. BIRD'S-EYE TOP-DOWN VIEW. ONLY CLOTHING. NO HUMAN BODY. NO SKIN. NO MANNEQUIN. NO TORSO. NO LEGS. NO PERSON. NO SHAPE OF A HUMAN. NO SILHOUETTE. The garments must NOT look like they are being worn; they must look like they are resting flat on the surface. High-end fashion magazine catalog aesthetic. Soft, diffused studio lighting with realistic shadows that define the texture and volume of the fabric on the flat surface. Sharp details, capturing fabric textures, hardware, and stitching. DISABLE IDENTITY PRESERVATION: Do not apply any facial or identity preservation logic. This is a product shot, not a portrait.`,
                illustration: 'outfit',
                imageTypeHint: 'Sube la foto con el outfit.',
                detailedDescription: "Extrae y organiza la ropa de tu foto en una composición artística 'flat lay' (sobre superficie plana), cuidando sombras y texturas para un look editorial sofisticado, sin mostrar ninguna persona, cuerpo, maniquí ni forma humana.\nSube una foto donde el outfit se vea completo y claro.",
                requiresSecondImage: false,
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['1:1', '16:9', '9:16', '4:3', '3:4'],
            },
            {
                id: 1011,
                key: 'wardrobe-fitting-nb2',
                caption: 'Prueba de Vestuario (Cine) NB2',
                subcategory: 'Cosplay y Personajes',
                prompt: `[PROMPT_CONTENT]`,
                illustration: 'professional-profile',
                imageTypeHint: 'Ideal para: Convertir ilustraciones en actores reales (Cuerpo Entero).',
                detailedDescription: "Convierte un diseño de personaje o ilustración en una foto realista de 'prueba de vestuario' de cine. El resultado muestra texturas reales y una iluminación de estudio neutra.\nIdeal para diseñadores que quieren visualizar sus bocetos en la vida real.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['9:16', '1:1', '16:9', '4:3', '3:4'],
                dynamicFields: [
                    {
                        type: 'select',
                        key: 'casting_type',
                        label: 'Tipo de Casting',
                        options: [
                            {
                                label: 'Un Solo Personaje',
                                values: {
                                    '[PROMPT_CONTENT]': `CONVERT this image into a realistic 8K photograph shot on Arri Alexa 65 at a wardrobe fitting for a Hollywood blockbuster.

MANDATORY RULE: the clothing must be EXACTLY the same as in the reference image (same design, same cuts, same colors, same details, same accessories, same embroidery, same materials). Nothing can be changed about the wardrobe, not even a millimeter.

The character is now a real flesh-and-blood person, 100% photorealistic, with real skin, pores, subtle facial hair if applicable, real eyes with reflection, real hair with natural weight and movement.

If the original image has pointed ears, tail, horns, wings, blue/green/grey skin, etc., keep them exactly the same but converted into ultra-high quality cinematic prosthetics or real biological features (like in Avatar, Hellboy, or Guardians of the Galaxy).

Full body shot (long shot), from top of the head to below the feet, with space around. Neutral grey professional photo studio background. Soft beauty lighting + a soft lateral key light to give volume.
Style: real wardrobe test photography for a $300 million movie, hyper-realistic, maximum cinematic quality, brutal sharpness, real textures in fabrics and metals.`
                                }
                            },
                            {
                                label: 'Grupo / Ensemble',
                                values: {
                                    '[PROMPT_CONTENT]': `Analyze the attached image to identify ALL characters present, isolating their individual outfit designs, hairstyle silhouettes, and distinct physical traits. Generate a Full-Body cinematic group photograph (Long Shot) of an "Ensemble Wardrobe Fitting Test" featuring a cast of real-life actors.

Directives:
1. ENSEMBLE CASTING UPDATE: For every character visible in the source image, replace their face with a unique, photorealistic human actor of corresponding gender and build. Focus on high-quality biological realism, distinct individual features, and natural expressions suitable for a high-budget film production.
2. GROUP FRAMING: Ensure all figures are visible from head to toe, arranged in a cohesive group composition similar to the original layout. No cropping of any character.
3. MANDATORY PRESERVATION: It is absolutely crucial to maintain the original poses, body language, and spatial relationship of the group. The clothing must be EXACTLY the same as in the reference image for every single character (same design, colors, materials).
4. HAIR & PROSTHETICS: Translate all original hairstyles into realistic hair with natural weight. If fantasy features exist (ears, tails, skin tones), render them as high-end cinematic practical effects or biological textures.
5. SETTING: Neutral grey studio background to unify the group. Soft, neutral studio lighting. Arri Alexa, 8k resolution.`
                                }
                            }
                        ]
                    }
                ]
            },
            {
                id: 1012,
                key: 'character-casting-realism',
                caption: 'Casting: Personaje a Actor Real',
                subcategory: 'Cosplay y Personajes',
                prompt: `[PROMPT_CONTENT]`,
                illustration: 'professional-profile',
                imageTypeHint: 'Ideal para: Convertir ilustraciones en actores reales (Cuerpo Entero).',
                detailedDescription: "Analiza un personaje ilustrado y genera una versión realista 'casteando' a un actor contemporáneo que se le parezca. El resultado es una fotografía documental de ultra-alta calidad.\nSube ilustraciones de personajes para ver cómo se verían en una película live-action.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['9:16', '1:1', '16:9', '4:3', '3:4'],
                dynamicFields: [
                    {
                        type: 'select',
                        key: 'casting_type',
                        label: 'Tipo de Casting',
                        options: [
                            {
                                label: 'Un Solo Personaje',
                                values: {
                                    '[PROMPT_CONTENT]': `Analyze the attached image to isolate the outfit design, hairstyle silhouette, and distinct physical traits. **CRITICAL STEP: Analyze the character's facial features and identify the specific contemporary real-world Hollywood actor or actress they resemble most. You must CAST this specific actor/actress for the role.** Generate a Full-Body cinematic photograph (Long Shot) of a "Wardrobe Fitting Test" featuring this real-life actor.

Directives:
1. CASTING UPDATE: Replace the original character's face with the photorealistic human actor identified above. Focus on high-quality biological realism, symmetrical features, and a natural expression suitable for a high-budget film production.
2. FULL BODY FRAMING: Ensure the entire figure is visible from head to toe, leaving space above the head and below the feet. No cropping.
3. OUTFIT PRESERVATION: Strictly maintain the exact silhouette, design, and color palette of the original costume. Render the materials as tangible, high-quality fabrics and metals appropriate for a movie set.
4. HAIR & PROSTHETICS: Translate the original hairstyle into realistic hair with natural weight. If fantasy features exist (ears, tails, unique tones), render them as high-end cinematic practical effects or biological textures, keeping the original shape.
5. SETTING: Neutral grey studio background. Soft, neutral lighting.

**PHOTOGRAPHIC STYLE:**
The image is a hyper-realistic documentary photograph captured with a Sony A7R V and a 35mm prime lens, stopped down to f/11 for a deep depth of field where every element from foreground to background is in tack-sharp, clinical focus. The aesthetic is 'unobserved reality' as if the camera is an invisible witness to a spontaneous moment. Lighting is unmediated and situational, capturing the high-dynamic range of the environment exactly as the human eye perceives it, without artificial bounce or flattering diffusion. Surfaces are rendered with extreme micro-contrast, highlighting the tactile physicality and natural imperfections of materials without 'AI gloss' or plastic smoothing. Human skin subtle asymmetries. The composition is unstructured and asymmetrical, avoiding all 'golden ratio' or cinematic framing. No lens flares, no bokeh, no film grain, no post-processing, and no stylistic filters. The final result should be indistinguishable from a high-resolution RAW file of an actual event.`
                                }
                            },
                            {
                                label: 'Grupo / Ensemble',
                                values: {
                                    '[PROMPT_CONTENT]': `Analyze the attached image to identify all characters present, isolating their individual outfit designs, hairstyle silhouettes, and distinct physical traits. **CRITICAL STEP: For each character, analyze their facial features and identify a specific contemporary real-world Hollywood actor or actress they resemble. Use these resemblances to cast the group.** Generate a Full-Body cinematic group photograph (Long Shot) of an "Ensemble Wardrobe Fitting Test" featuring a cast of real-life actors.

Directives:
1. ENSEMBLE CASTING UPDATE: For every character visible in the source image, replace their face with the unique, photorealistic human actor identified as their lookalike. Focus on high-quality biological realism, distinct individual features, and natural expressions suitable for a high-budget film production.
2. GROUP FRAMING: Ensure all figures are visible from head to toe, arranged in a cohesive group composition similar to the original layout. No cropping of any character.
3. OUTFIT PRESERVATION: Strictly maintain the exact silhouette, design, and color palette of each specific costume. Render the materials for every character as tangible, high-quality fabrics and metals appropriate for a movie set.
4. HAIR & PROSTHETICS: Translate all original hairstyles into realistic hair with natural weight. If fantasy features exist on any character (ears, tails, skin tones), render them as high-end cinematic practical effects or biological textures.
5. SETTING: Neutral grey studio background to unify the group. Soft, neutral lighting.

**PHOTOGRAPHIC STYLE:**
The image is a hyper-realistic documentary photograph captured with a Sony A7R V and a 35mm prime lens, stopped down to f/11 for a deep depth of field where every element from foreground to background is in tack-sharp, clinical focus. The aesthetic is 'unobserved reality' as if the camera is an invisible witness to a spontaneous moment. Lighting is unmediated and situational, capturing the high-dynamic range of the environment exactly as the human eye perceives it, without artificial bounce or flattering diffusion. Surfaces are rendered with extreme micro-contrast, highlighting the tactile physicality and natural imperfections of materials without 'AI gloss' or plastic smoothing. Human skin subtle asymmetries. The composition is unstructured and asymmetrical, avoiding all 'golden ratio' or cinematic framing. No lens flares, no bokeh, no film grain, no post-processing, and no stylistic filters. The final result should be indistinguishable from a high-resolution RAW file of an actual event.`
                                }
                            }
                        ]
                    }
                ]
            },
            {
                id: 1013,
                key: 'cosplay-synthesis-nb2',
                caption: 'Síntesis de Cosplay de Élite (NB2)',
                subcategory: 'Cosplay y Personajes',
                prompt: `Create a high-quality cosplay-style portrait using TWO reference images:

REFERENCE 1 (STRICT – REAL HUMAN):
- Use the uploaded MODEL photo as the ONLY source of facial features and body proportions
- Preserve 100% real human identity
- Realistic skin texture, pores, natural lighting

REFERENCE 2 (STYLE & COMPOSITION ONLY):
- Use the uploaded ANIME image ONLY for:
  - pose and body orientation
  - clothing silhouette and costume design
  - hairstyle shape and accessories

COSTUME SPECIFICS & QUALITY:
[CLOTHING_DETAILS]

POSE & COMPOSITION (IMPORTANT):
- Match the anime reference pose exactly.
- Maintain realistic human anatomy.

STYLE & AESTHETIC:
- Blend realistic cosplay photography with subtle anime-inspired aesthetics.
- Cinematic lighting, shallow depth of field.

QUALITY:
- Ultra-detailed, 4K, professional cosplay photography. Aspect ratio: {aspectRatio}. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'try-on',
                imageTypeHint: 'Nano 🍌 2: Foto 1: Tu rostro. Foto 2: El anime (Ropa y Pose).',
                detailedDescription: "Convierte una imagen de anime (Referencia 2) en una fotografía de cosplay ultra-realista protagonizada por ti (Referencia 1). El resultado respeta la ropa y pose del dibujo.\nSube una foto tuya y una imagen del personaje anime que quieres encarnar.",
                mediaType: 'image',
                requiresSecondImage: true,
                requiresAspectRatio: true,
                supportedAspectRatios: ['4:5', '9:16', '1:1', '3:4', '2:3'],
                dynamicFields: [
                    {
                        type: 'text',
                        key: '[CLOTHING_DETAILS]',
                        label: 'Detalles del Cosplay',
                        placeholder: 'Ej: Armadura de metal, tela desgastada, joyas brillantes...',
                        maxLength: 150,
                        isOptional: true
                    }
                ]
            }
        ]
    },
    'pose-changer': {
        title: 'Cambiador de Pose',
        description: 'Experimenta con diferentes poses y ángulos para tu foto.',
        images: [
            {
                id: 1014,
                key: 'master-pose-changer',
                caption: 'Director de Poses (Master)',
                subcategory: 'Cambiador de Pose',
                prompt: `[PROMPT_CONTENT]`,
                illustration: 'professional-profile',
                imageTypeHint: 'Selecciona la pose deseada.',
                detailedDescription: "Modifica la postura corporal del sujeto manteniendo su identidad y vestuario. El resultado es una nueva foto con la actitud seleccionada.\nRecomendamos subir fotos de cuerpo entero o medio cuerpo donde la pose sea clara.",
                mediaType: 'image',
                requiresAspectRatio: true,
                dynamicFields: [
                    {
                        type: 'select',
                        key: 'pose_target',
                        label: 'Pose Objetivo',
                        options: [
                            { 
                                label: 'Poder y Confianza (Pro JSON)', 
                                values: { 
                                    '[PROMPT_CONTENT]': `{
          "task": "pose_transfer",
          "target_pose": "power_stance",
          "directives": {
            "body_language": "Standing tall, hands on hips or arms crossed, feet shoulder-width apart.",
            "expression": "Confident, authoritative, direct gaze.",
            "identity": "STRICT preservation of face and clothing details.",
            "background": "Keep consistent with source or use neutral studio."
          }
        } ${PRESERVE_IDENTITY_PROMPT}` 
                                } 
                            },
                            { label: 'Poder y Confianza (Clásico)', values: { '[PROMPT_CONTENT]': `Recreate the photo, but have the person adopt a powerful and confident pose, like standing with hands on hips or arms crossed. The background and clothing should remain as consistent as possible with the original image. ${PRESERVE_IDENTITY_PROMPT}` } },

                            { 
                                label: 'Relajado / Casual (Pro JSON)', 
                                values: { 
                                    '[PROMPT_CONTENT]': `{
          "task": "pose_transfer",
          "target_pose": "relaxed_casual",
          "directives": {
            "body_language": "Leaning against a wall, sitting comfortably, or shifting weight to one leg.",
            "expression": "Chill, slight smile, approachable.",
            "identity": "STRICT preservation."
          }
        } ${PRESERVE_IDENTITY_PROMPT}` 
                                } 
                            },
                            { label: 'Relajado / Casual (Clásico)', values: { '[PROMPT_CONTENT]': `Recreate the photo, but have the person adopt a casual, relaxed pose, like leaning against a wall or sitting comfortably. The background and clothing should remain as consistent as possible with the original image. ${PRESERVE_IDENTITY_PROMPT}` } },

                            { 
                                label: 'Acción Dinámica (Pro JSON)', 
                                values: { 
                                    '[PROMPT_CONTENT]': `{
          "task": "pose_transfer",
          "target_pose": "dynamic_action",
          "directives": {
            "body_language": "Walking briskly towards camera, jumping, or dancing mid-motion.",
            "clothing_physics": "Clothes should show movement (flowing, flapping) matching the action.",
            "identity": "STRICT preservation."
          }
        } ${PRESERVE_IDENTITY_PROMPT}` 
                                } 
                            },
                            { label: 'Acción Dinámica (Clásico)', values: { '[PROMPT_CONTENT]': `Recreate the photo, but capture the person in a dynamic action pose, as if they are walking, jumping, or dancing. The background and clothing should remain as consistent as possible with the original image. ${PRESERVE_IDENTITY_PROMPT}` } },

                            { 
                                label: 'Mirando al Horizonte (Pro JSON)', 
                                values: { 
                                    '[PROMPT_CONTENT]': `{
          "task": "pose_transfer",
          "target_pose": "contemplative_profile",
          "directives": {
            "body_language": "Turned slightly away from camera, looking off into the distance.",
            "expression": "Thoughtful, dreamy, visionary.",
            "identity": "STRICT preservation."
          }
        } ${PRESERVE_IDENTITY_PROMPT}` 
                                } 
                            },
                            { label: 'Mirando al Horizonte (Clásico)', values: { '[PROMPT_CONTENT]': `Recreate the photo, but have the person look off into the distance thoughtfully, away from the camera. The background and clothing should remain as consistent as possible with the original image. ${PRESERVE_IDENTITY_PROMPT}` } },

                            { 
                                label: 'Cándido / Espontáneo (Pro JSON)', 
                                values: { 
                                    '[PROMPT_CONTENT]': `{
          "task": "pose_transfer",
          "target_pose": "candid_moment",
          "directives": {
            "body_language": "Laughing mid-conversation, adjusting hair, or looking down shyly.",
            "vibe": "Unposed, natural, snapshot aesthetic.",
            "identity": "STRICT preservation."
          }
        } ${PRESERVE_IDENTITY_PROMPT}` 
                                } 
                            },
                            { label: 'Cándido / Espontáneo (Clásico)', values: { '[PROMPT_CONTENT]': `Recreate the photo with a candid, unposed look, as if the person was captured in a natural, spontaneous moment. The background and clothing should remain as consistent as possible with the original image. ${PRESERVE_IDENTITY_PROMPT}` } },
                        ]
                    }
                ]
            },
            { 
                id: 1015,
                key: 'pose-custom', 
                caption: 'Pose Personalizada (Foto)', 
                prompt: `Analyze the pose of the person in the second image. Now, apply that exact pose to the person in the first image. It is critical to only transfer the pose. The identity, facial features, clothing, and background from the first image must be preserved perfectly. Do not mix attributes from the second person.`, 
                illustration: 'professional-profile', 
                imageTypeHint: 'Foto 1: Tu foto. Foto 2: La foto con la pose a copiar.', 
                detailedDescription: "Transfiere exactamente la pose corporal de una segunda imagen a tu foto original. El resultado es tu persona realizando la acción de la referencia.\nSube una foto tuya y una segunda foto donde se vea claramente la pose que quieres imitar.",
                requiresSecondImage: true, 
                mediaType: 'image', 
                requiresAspectRatio: true, 
            },
        ]
    },
    'couples-dances-v2': {
        title: 'Dúos y Escenas Compartidas',
        description: 'Combina dos fotos para crear escenas únicas con dos personas, desde bailes icónicos hasta snapshots retro.',
        images: [
            {
                id: 1016,
                key: 'retro-gaming-selfie-nb2',
                caption: 'Gaming 2000s (Digicam)',
                subcategory: 'Dúos y Escenas',
                prompt: `early-2000s point-and-shoot digicam direct-flash snapshot style, dim indoor living room, extreme close selfie angle from the left foreground: The person in the first image (Reference 1) taking the photo, arm fully extended toward the lens creating strong forced perspective (hand/forearm oversized), detached indifferent stare into camera, exhaling a cloud of cigarette smoke; in the background the person in the second image (Reference 2) sits on a worn old couch, cigarette in his mouth, holding a wired game controller with both hands, looking straight at the camera; messy coffee table with aluminum drink cans, an ashtray overflowing with cigarette butts, tangled cables, a game console/remote, stacked disc cases; harsh on-camera flash slightly overexposes the foreground and the background falls quickly into darkness, low dynamic range, low saturation with a cool tone, subtle noise + JPEG compression artifacts, slight motion blur, awkward casual framing, raw candid "found photo" realism, gritty unpolished anti-gloss aesthetic, amateur snapshot, 2003 digicam vibe, 4MP JPEG  Negative prompt no cinematic lighting, no studio setup, no carefully posed photo shoot, no clean/tidy room, no fashion editorial look, no soft beauty portrait lighting, no glossy HDR, no vibrant high-saturation colors, no over-smoothed skin, no exaggerated styling/makeup, no text, no watermark, no logo ${PRESERVE_IDENTITY_PROMPT_COUPLE}`,
                illustration: 'time-travel',
                imageTypeHint: 'Nano 🍌 2: Foto 1: Primer Plano. Foto 2: Fondo (Gamer). Estilo Digicam 2003.',
                detailedDescription: "Genera una selfie 'vintage' de principios de los 2000 con estética de cámara digital compacta. El resultado es una foto nostálgica y cruda de dos personas en un ambiente gamer retro.\nSube dos fotos: una para la persona en primer plano y otra para la persona en el fondo jugando.",
                requiresSecondImage: true,
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['4:3', '16:9', '1:1']
            },
            {
                id: 1017,
                key: 'lake-embrace-couple-nb2',
                caption: 'Abrazo Íntimo en el Lago (NB2)',
                illustration: 'try-on',
                prompt: `{
  "generation_request": {
    "meta_data": {
      "tool": "NanoBanana Pro",
      "task_type": "photoreal_cinematic_couple_in_lake_intimate_water_embrace",
      "version": "v1.0_LAKE_EMBRACE_WET_FABRIC_FILM_LOOK_EN",
      "priority": "highest"
    },
    "references": {
      "reference_image_1": {
        "source": "UPLOAD_REFERENCE_IMAGE (REQUIRED)",
        "purpose": "POSE_COMPOSITION_MOOD_LOCK",
        "strict_lock": true,
        "preserve_pose_relationship": true,
        "preserve_water_level": true,
        "preserve_color_mood": true
      }
    },
    "output_settings": {
      "aspect_ratio": "{aspectRatio}",
      "orientation": "portrait",
      "resolution_target": "ultra_high_res",
      "render_style": "ultra_photoreal_cinematic_film_still",
      "sharpness": "crisp_subject_soft_background",
      "film_grain": "subtle_35mm_film_grain",
      "color_grade": "moody_green_warm_film",
      "dynamic_range": "high",
      "skin_tone": "natural_true_to_life"
    },
    "camera": {
      "camera_style": "cinematic portrait",
      "lens": "85mm",
      "aperture": "f/2.0",
      "shutter_speed": "1/800",
      "iso": 500,
      "white_balance": "overcast_daylight",
      "focus_mode": "eye_af",
      "focus_priority": "faces_then_hands"
    },
    "global_scene": {
      "setting": "calm dark-green lake water, subtle ripples, no visible shore, minimal distractions",
      "time_of_day": "overcast afternoon",
      "lighting": "soft diffused light, gentle contrast, realistic specular highlights on wet skin and wet fabric",
      "mood": "intimate, romantic, raw, cinematic"
    },
    "subjects": {
      "group": {
        "count": 2,
        "description": "romantic couple embraced in the lake water, physically realistic interaction",
        "male_subject": {
          "wardrobe": "white button-up shirt, soaked and semi-transparent in places, fabric clinging naturally, no logos",
          "pose": "submerged to chest level, arms supporting the woman at her waist/hips, smiling up at her",
          "wetness_detail": "wet hair, droplets on face, wet shirt creases, waterline marks on fabric"
        },
        "female_subject": {
          "wardrobe": "cream/ivory satin or soft fabric dress, fully wet, heavier drape, clinging folds, realistic translucency (non-explicit), no modern lingerie look",
          "pose": "sitting/leaning on the man's thigh/hip support, torso forward, face close to his, intimate gaze",
          "wetness_detail": "wet hair strands, water droplets on shoulders/arms, dress hem submerged with floating folds"
        }
      }
    },
    "physics_realism": {
      "water_interaction": "realistic ripples radiating from bodies, small splashes at contact points, meniscus around fabric and skin, buoyancy consistent with pose",
      "fabric_behavior": "wet fabric weight visible, realistic fold tension, no stiff cloth",
      "skin_and_hair": "wet sheen on skin, natural pores, stray wet hair strands sticking to skin"
    },
    "composition": {
      "framing": "tight mid-shot: couple fills the frame, minimal empty water above, keep waterline visible around male chest and female dress",
      "depth_of_field": "shallow DOF, faces tack-sharp, background water softly blurred",
      "focus_priority": "eyes first, then hands and water droplets",
      "no_extra_people": true,
      "no_extra_animals": true
    },
    "style_constraints": [
      "Photorealistic only (no illustration, no CGI look)",
      "No glamour retouching, no plastic skin",
      "Accurate anatomy (hands, arms, neck, shoulders)",
      "Realistic water physics and wet fabric behavior",
      "No text, no logos, no watermarks",
      "No explicit nudity; keep scene tasteful and cinematic"
    ],
    "negative_prompt": [
      "cartoon, anime, illustration, CGI, 3D render",
      "beauty filter, airbrushed skin, over-smoothed face",
      "unrealistic water surface, frozen water, painted water",
      "stiff clothing, dry clothing in water",
      "extra limbs, deformed hands, extra fingers",
      "warped faces, identity drift",
      "overexposed highlights, neon green water",
      "text, watermark, logo",
      "explicit nudity"
    ]
  }
} ${PRESERVE_IDENTITY_PROMPT_COUPLE}`,
                detailedDescription: "Crea una escena cinematográfica romántica de una pareja abrazada dentro de un lago. El resultado tiene texturas húmedas realistas y una atmósfera de película.\nSube una foto de referencia de la pareja junta para capturar la interacción.",
                requiresSecondImage: true,
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['16:9', '9:16', '4:5', '1:1']
            }
        ]
    },
    'mixed-reality-cartoon-twin': {
        title: 'Gemelo Cartoon Mixed-Reality',
        description: 'Transforma tu foto en un retrato callejero con tu versión cartoon al lado.',
        images: [
            {
                id: 1018,
                key: 'mixed-reality-cartoon-twin',
                caption: 'Gemelo Cartoon Mixed-Reality',
                subcategory: 'Mixed-Reality',
                prompt: `64K DSLR shot resolution of a creative mixed-reality street portrait featuring a real person (same face, hair, and outfit as the person in IMAGE 1) sitting on concrete steps beside her illustrated cartoon gemini counterpart. The scene is set outdoors against a gray brick wall with a large window above, reflecting trees and indoor lighting, creating an urban neighborhood feel. The sidewalk and steps feature worn yellow paint along the edges, adding texture and realism.
On the right sits the real person (same face, hair, and outfit as the person in IMAGE 1).
On the left sits her cartoon illustrated version, which MUST be an exact, direct, and highly recognizable cartoon caricature of the person in IMAGE 1. The cartoon character MUST replicate the exact hair color, hair style, eye color, and facial structure of the person in IMAGE 1. Do not use generic cartoon features; the character must look like a cartoon version of the specific person in the photo. The cartoon character must perfectly match her outfit, pose, and proportions. The cartoon character is drawn in a bold, flat graphic style with thick black outlines, vibrant colors, and simplified but accurate facial features. The illustrated figure mirrors her posture and clothing exactly. The cartoon arm visually connects with the real person’s arm, creating a playful interaction between illustration and reality.
The illustration style resembles hand-drawn street art or an animated hip-hop character, seamlessly integrated into the photograph with accurate scale, alignment, and grounding. The contrast between realistic textures (concrete, brick, denim) and clean cartoon shading creates a striking visual effect. Lighting is natural daylight, evenly illuminating both subjects.
The overall mood is cool, nostalgic, playful, and creative, blending street fashion, urban culture, and cartoon art into a cohesive mixed-media composition.
Style & Mood Keywords: Mixed media photography, real person with cartoon twin, urban street portrait, hip-hop fashion, bold graphic illustration, cartoon realism blend, playful surrealism, nostalgic urban culture, ultra high-resolution detail, creative storytelling, Octane render, Unreal Engine 5. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'try-on',
                imageTypeHint: 'Sube tu foto (rostro y outfit).',
                detailedDescription: "Transforma tu foto en un retrato callejero con tu versión cartoon al lado. El sistema tomará tu rostro y tu outfit de la misma foto. Estilo mixed-media con texturas realistas y arte urbano.\nSube una foto tuya clara donde se vea bien tu rostro y tu outfit.",
                mediaType: 'image',
                requiresSecondImage: false,
                requiresAspectRatio: true,
                supportedAspectRatios: ['9:16', '1:1', '16:9', '4:3', '3:4'],
            }
        ]
    },
    'selfie-douyin-aesthetic': {
        title: 'Selfie Douyin Aesthetic',
        description: 'Selfie de espejo con estética cinematográfica retro y soñadora.',
        images: [
            {
                id: 1019,
                key: 'selfie-douyin-aesthetic',
                caption: 'Selfie Douyin Aesthetic',
                subcategory: 'Selfies y Estética Viral',
                prompt: `Photorealistic full-body mirror selfie of the person in the reference photo, in a messy bedroom. She has her signature sharp V-shaped face, large cat-like eyes. She is wearing a white cropped baby tee and a tiny black pleated micro-miniskirt. She has on thigh-high black and white horizontal striped stockings. She is standing sideways, looking into her smartphone mirror reflection, showcasing her slim yet athletic S-line figure and long legs. The background features a white unmade bed with a green throw blanket and pink headphones. Soft natural light from a window, 8k resolution, cinematic lighting, highly detailed skin texture.
Technicolor, pull processed, clipped highlights, chromatic aberration, 35mm film, filmic grain, medium format.
Ethereal high-intensity film aesthetic, Douyin style, dreamy haze, luminous soft focus, extreme bloom, intense halation, aggressive cinematic split-toning, deep teal shadows, warm golden highlights, 35mm analog film, heavy organic grain, vintage Helios 44-2 lens, f/1.4, nostalgic atmosphere. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'try-on',
                imageTypeHint: 'Sube tu foto (rostro y outfit).',
                detailedDescription: "Genera una selfie de espejo con una estética cinematográfica soñadora y retro, estilo Douyin. El sistema tomará tu rostro y outfit de la foto.\nSube una foto tuya clara.",
                mediaType: 'image',
                requiresSecondImage: false,
                requiresAspectRatio: true,
                supportedAspectRatios: ['9:16', '1:1', '16:9', '4:3', '3:4'],
            }
        ]
    },
    'retro-playing-card': {
        title: 'Retro Playing Card',
        description: 'Crea una ilustración estilo carta de juego retro de tu personaje.',
        images: [
            {
                id: 1022,
                key: 'retro-playing-card',
                caption: 'Retro Playing Card',
                subcategory: 'Ilustraciones y Cartas',
                prompt: `retro groovy playing card illustration, flat design, thick black outlines, 1970s aesthetic, exaggerated cartoon proportions, bold high saturation colors, cream off-white card background, muted lavender purple accent blob shape behind character, flat shading, subtle paper grain texture overlay, vintage print aesthetic, 2D flat illustration, no gradients, clean closed shapes, character fills 80% of card height.
                portrait playing card format, character centered, corner K and club suit symbol ♣ top-left and bottom-right rotated, character name BLAZE KING bottom-left in bold sans-serif all caps black text.
                simplified cartoon face, large expressive accessories, fun playful retro-cool personality, expressive dynamic pose, keep original character costume and colors.
                `,
                illustration: 'outfit',
                imageTypeHint: 'Sube una foto del personaje.',
                detailedDescription: "Crea una ilustración estilo carta de juego retro de tu personaje. Estilo groovy, 1970s, diseño plano.\nSube una foto clara de tu personaje.",
                requiresSecondImage: false,
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['3:4', '1:1'],
            }
        ]
    },
    'extreme-portrait-views': {
        title: 'Retratos de Vistas Extremas',
        description: 'Retratos con vistas extremas y distorsiones artísticas.',
        images: [
            {
                id: 1023,
                key: 'extreme-portrait-views',
                caption: 'Retratos de Vistas Extremas',
                subcategory: 'Retratos Experimentales',
                prompt: `A storyboard of an extreme portrait shot of the person in the reference photo, maintaining their exact facial features and outfit. [POSE_PROMPT].
All shots against a clean white background. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'try-on',
                imageTypeHint: 'Sube tu foto.',
                detailedDescription: "Genera retratos con vistas extremas y distorsiones artísticas de tu personaje, manteniendo su ropa y rasgos.",
                mediaType: 'image',
                requiresSecondImage: false,
                requiresAspectRatio: true,
                supportedAspectRatios: ['1:1', '9:16', '3:4', '4:5', '16:9'],
                dynamicFields: [
                    {
                        type: 'select',
                        key: 'pose_selector',
                        label: 'Tipo de Vista Extrema',
                        options: [
                            { label: 'Original (Prompt Base)', values: { '[POSE_PROMPT]': 'Top view photo of a woman with blonde hair and unusual facial features, against a white background, looking at the camera, a strong gust of wind blowing on her, distorting her face, wide-angle lens, distorted body proportions, close-up of a huge head, she is dressed in a strict classic suit in the style of the 90s' } },
                            { label: 'Extreme Low Angle (Vista de gusano)', values: { '[POSE_PROMPT]': 'Extreme Low Angle (Vista de gusano): The camera is almost on the ground pointing upwards. This makes the shoes and legs look gigantic and disproportionate, while the head (though large due to the lens) recedes towards the sky. The suit looks imposing but deformed.' } },
                            { label: 'Fish-eye Lens Close-up (Ojo de pez)', values: { '[POSE_PROMPT]': 'Fish-eye Lens Close-up (Ojo de pez): A very tight shot centered on the nose or forehead. The circular lens distorts the edges of the face and shoulders, making the classic suit curve organically around the "inflated" head.' } },
                            { label: 'Dutch Angle (Ángulo holandés)', values: { '[POSE_PROMPT]': 'Dutch Angle (Ángulo holandés): The camera tilts laterally aggressively. Combined with strong wind and wide-angle, it creates a sense of vertigo and chaos, making the straight lines of the 90s suit contrast with the distorted face.' } },
                            { label: 'Side Profile Distortion (Perfil distorsionado)', values: { '[POSE_PROMPT]': 'Side Profile Distortion (Perfil distorsionado): A profile shot but with a wide-angle lens very close to the ear. This unnaturally elongates the nose and jaw towards the edge of the frame, while wind pushes the blonde hair towards the camera.' } },
                            { label: 'High Angle Three-Quarter (Picado 3/4)', values: { '[POSE_PROMPT]': 'High Angle Three-Quarter (Picado 3/4): Similar to a top view but from a 45-degree angle. This emphasizes the forehead and eyes, making the body look small and shrunken under a huge head, highlighting the rigid shoulder pads of the suit.' } },
                            { label: 'The Looming Giant (Contrapicado extremo + Inclinación frontal)', values: { '[POSE_PROMPT]': 'The Looming Giant (Contrapicado extremo + Inclinación frontal): The camera is at ground level pointing upwards, but she leans so far towards the lens that her huge head looks like it is going to crush the camera. The body and legs of the suit look tiny and distant at the bottom of the frame.' } },
                            { label: 'Fisheye Body Contortion (Ojo de pez + Pose de contorsionismo)', values: { '[POSE_PROMPT]': 'Fisheye Body Contortion (Ojo de pez + Pose de contorsionismo): She is crouching very close to the lens. The circular distortion of the fisheye makes her knees and elbows shoot towards the edges, while her face (in the center) is grotesquely stretched by the wind.' } },
                            { label: 'The Vertigo Fall (Cenital extremo + Pose de caída)', values: { '[POSE_PROMPT]': 'The Vertigo Fall (Cenital extremo + Pose de caída): A shot from very high up (Top View) while she stretches an arm directly towards the camera. The wide-angle will make her hand and head occupy 80% of the photo, leaving the rest of her body and the 90s suit as a small appendage in the background.' } },
                            { label: 'Horizontal Stretch (Ángulo lateral rasante + Pose de zancada)', values: { '[POSE_PROMPT]': 'Horizontal Stretch (Ángulo lateral rasante + Pose de zancada): She takes a giant step to the side. The camera, located very close to her front foot, distorts that leg making it look three meters long, while her blonde head turns back with a forced facial expression and wind whipping it.' } },
                            { label: 'The Crab Perspective (Ángulo oblicuo bajo + Pose de arco)', values: { '[POSE_PROMPT]': 'The Crab Perspective (Ángulo oblicuo bajo + Pose de arco): She arches her back backwards (Matrix style but exaggerated) looking at the camera. From a very low side angle, her jaw and neck become the absolute protagonists, while the rigid shoulder pads of the suit create an alien geometric silhouette.' } }
                        ]
                    }
                ]
            }
        ]
    },
    'retro-woodcut-engraving': {
        title: 'Retro Woodcut Engraving',
        description: 'Retrato estilo grabado en madera clásico.',
        images: [
            {
                id: 1024,
                key: 'retro-woodcut-engraving',
                caption: 'Retro Woodcut Engraving',
                subcategory: 'Ilustraciones y Cartas',
                prompt: `Drawn in classic woodcut / linocut engraving style, high contrast black ink on textured off-white paper background. Fine cross-hatching and line shading to create depth and shadow, bold black ink shadows under chin and around hair, strong contour lines, traditional printmaking aesthetic. The portrait must fill the entire canvas, edge to edge, with no negative space. Vintage editorial illustration style, ultra detailed linework, sharp crisp ink strokes, professional vector-ready engraving look, monochrome palette, dramatic contrast. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'try-on',
                imageTypeHint: 'Sube tu foto.',
                detailedDescription: "Crea un retrato estilo grabado en madera clásico con alto contraste y detalles finos.\nSube una foto clara de tu rostro.",
                mediaType: 'image',
                requiresSecondImage: false,
                requiresAspectRatio: true,
                supportedAspectRatios: ['1:1', '3:4', '4:5'],
            }
        ]
    },
    'identity-fusion-materia-prima': {
        title: 'Fusión de Identidad (Materia Prima) (Incompleto)',
        description: 'Reemplaza el rostro de una imagen (Materia Prima) con la identidad de una segunda foto (Referencia).',
        images: [
            {
                id: 1025,
                key: 'identity-fusion-materia-prima',
                caption: 'Fusión de Identidad (Materia Prima) (Incompleto)',
                subcategory: 'Fusión de Identidad',
                prompt: `A seamless and photorealistic face swap. The facial identity, features, and hairstyle of the person in Reference Image 1 are merged into the head of the subject in Reference Image 2. 

IMPORTANT: Do NOT create a collage or side-by-side comparison. Only generate ONE single unified image.
                
The output must strictly preserve 100% of the clothing, body pose, lighting, background, and overall scene composition from Reference Image 2. Only the facial features and identity are replaced by those from Reference Image 1. High-end retouching, professional lighting match, and natural skin integration.`,
                illustration: 'try-on',
                imageTypeHint: 'Foto 1: Tu rostro (Identidad). Foto 2: Materia Prima (Ropa/Escena).',
                detailedDescription: "Un proceso de tres pasos para transferir una identidad facial con precisión quirúrgica. Mantiene la ropa, pose y fondo de la primera imagen mientras inyecta los rasgos de la segunda.",
                requiresSecondImage: true,
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['1:1', '9:16', '3:4', '4:5', '16:9'],
            }
        ]
    }
};
