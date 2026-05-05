
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import type { PhotoPack } from './types';
import { PRESERVE_IDENTITY_PROMPT, PRESERVE_OUTFIT_PROMPT } from './types';

export const characterDesignPacks: Record<string, PhotoPack> = {
    'character-design': {
        title: 'Diseño de Personaje',
        description: 'Crea hojas de personaje para tus creaciones en diferentes vistas, poses y expresiones, manteniendo su look original.',
        images: [
            {
                id: 16,
                key: 'cute-childlike-render',
                caption: 'Render 3D Estilizado (Cute)',
                subcategory: 'Avatares y Stickers 3D',
                prompt: `soft, round face, fuller cheeks, small chin, slightly larger, expressive eyes (but still identity-consistent), no beard, no sharp jawline, no adult features. Expression should be innocent, warm, and slightly playful, with a gentle smile and direct eye contact. Body proportions should be cute and childlike (small, slightly chubby body, slightly larger head). Pose: relaxed standing with hands behind the back, with a subtle natural tilt in head and shoulders to avoid stiffness. Hair should match the reference but appear soft, slightly voluminous, and naturally styled, not overly sharp or artificial. Skin should be soft and stylized, with subtle subsurface scattering (SSS) for a warm glow, matte finish (no plastic shine), and gentle natural blush on cheeks. The character wears the exact clothing from the reference image, maintaining all original colors, textures, and details. Lighting should be soft and cinematic: key light from upper-left, gentle fill light, subtle rim light on hair. Background should be a rich blue gradient, brighter behind the subject and darker toward the edges, with smooth depth (not flat). Output should be: mid-length framing (head to waist), high-detail, clean 3D render, film-quality finish (not toy-like, not overly realistic). ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'default',
                imageTypeHint: 'Ideal para: Retratos tipo 3D estilizado.',
                detailedDescription: "Transforma tu foto en un personaje 3D estilizado con proporciones adorables y estilo cinematográfico. Rostro suave, tu propia ropa y una iluminación cálida sobre fondo azul degradado.",
                mediaType: 'image',
                requiresAspectRatio: true,
            },
            {
                id: 41,
                key: 'render-3d-emoji-sticker-text',
                caption: 'Render 3D Emoji Sticker',
                subcategory: 'Avatares y Stickers 3D',
                prompt: `soft, round face, fuller cheeks, small chin, slightly larger, expressive eyes (but still identity-consistent), no beard, no sharp jawline, no adult features. Expression should be [EXPRESSION_AND_GESTURE]. Body proportions should be cute and childlike (small, slightly chubby body, slightly larger head). Pose: [EXPRESSION_AND_GESTURE]. Hair should match the reference but appear soft, slightly voluminous, and naturally styled, not overly sharp or artificial. Skin should be soft and stylized, with subtle subsurface scattering (SSS) for a warm glow, matte finish (no plastic shine), and gentle natural blush on cheeks. The character wears a [CLOTHING_OPTION], maintaining all original colors, textures, and details. Lighting should be soft and cinematic: key light from upper-left, gentle fill light, subtle rim light on hair. Background should be a rich blue gradient, brighter behind the subject and darker toward the edges, with smooth depth (not flat). 

[TEXT_STYLING_PROMPT]

Output should be: mid-length framing (head to waist), high-detail, clean 3D render, film-quality finish (not toy-like, not overly realistic). ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'default',
                imageTypeHint: 'Ideal para: Stickers 3D estilizados con ropa corporativa.',
                detailedDescription: "Transforma tu foto en un sticker 3D estilizado con expresiones divertidas, texto personalizado y opciones de vestuario corporativo. Incluye estilos de texto premium y acentos de emoji.",
                mediaType: 'image',
                requiresAspectRatio: true,
                dynamicFields: [
                    {
                        type: 'select',
                        key: '[EXPRESSION_AND_GESTURE]',
                        label: 'Expresión y Gesto',
                        isAdvanced: false,
                        options: [
                            { label: 'Por defecto (Inocente y Juguetón)', values: { '[EXPRESSION_AND_GESTURE]': 'innocent, warm, and slightly playful, with a gentle smile and direct eye contact. Pose: relaxed standing with hands behind the back, with a subtle natural tilt in head and shoulders to avoid stiffness' } },
                            { label: 'Saludo (Waving)', values: { '[EXPRESSION_AND_GESTURE]': 'Waving with a friendly smile, natural hand gesture' } },
                            { label: 'Pulgar arriba (Thumbs up)', values: { '[EXPRESSION_AND_GESTURE]': 'Giving a thumbs up with a happy expression, natural hand gesture' } },
                            { label: 'Facepalm', values: { '[EXPRESSION_AND_GESTURE]': 'Facepalm with a frustrated expression, natural hand gesture' } },
                            { label: 'Encogimiento (Shrug)', values: { '[EXPRESSION_AND_GESTURE]': 'Shrugging with a confused expression, natural hand gesture' } },
                            { label: 'Señalando (Pointing)', values: { '[EXPRESSION_AND_GESTURE]': 'Pointing forward with a confident expression, natural hand gesture' } },
                            { label: 'Sosteniendo teléfono (Holding phone)', values: { '[EXPRESSION_AND_GESTURE]': 'Holding a phone with a curious expression, natural hand gesture' } },
                            { label: 'Pose soñolienta (Sleepy pose)', values: { '[EXPRESSION_AND_GESTURE]': 'Sleepy pose with eyes half-closed, natural hand gesture' } },
                            { label: 'Reacción impactada (Shocked reaction)', values: { '[EXPRESSION_AND_GESTURE]': 'Shocked reaction with wide eyes and open mouth, natural hand gesture' } },
                        ]
                    },
                    {
                        type: 'select',
                        key: '[CLOTHING_OPTION]',
                        label: 'Vestuario Corporativo',
                        isAdvanced: false,
                        options: [
                            { label: 'Ropa Original', values: { '[CLOTHING_OPTION]': 'the exact clothing from the reference image' } },
                            { label: 'Traje Azul Marino', values: { '[CLOTHING_OPTION]': 'a tailored dark navy suit with a white shirt and a subtle tie' } },
                            { label: 'Traje Gris Marengo', values: { '[CLOTHING_OPTION]': 'a modern charcoal grey suit with a light blue shirt' } },
                            { label: 'Blazer y Camisa', values: { '[CLOTHING_OPTION]': 'a stylish navy blazer over a white open-collar shirt' } },
                            { label: 'Suéter Formal', values: { '[CLOTHING_OPTION]': 'a premium dark grey cashmere sweater over a collared shirt' } },
                            { label: 'Camisa Blanca', values: { '[CLOTHING_OPTION]': 'a perfectly ironed crisp white dress shirt' } },
                            { label: 'Blusa de Seda (Silk Blouse)', values: { '[CLOTHING_OPTION]': 'a professional silk blouse in a neutral tone' } },
                            { label: 'Vestido de Negocios (Business Dress)', values: { '[CLOTHING_OPTION]': 'a sophisticated dark-colored business dress' } },
                        ]
                    },
                    {
                        type: 'select',
                        key: '[TEXT_STYLING_PROMPT]',
                        label: 'Texto (Premium)',
                        isAdvanced: false,
                        options: [
                            { label: 'Sin texto', values: { '[TEXT_STYLING_PROMPT]': '' } },
                            { label: 'FELIZ (HAPPY)', values: { '[TEXT_STYLING_PROMPT]': 'Bold, colorful, curved text "HAPPY" ABOVE the character, bright gradient colors (blue to purple), thick white outline, soft shadow, emoji accents like ✨💖' } },
                            { label: 'TRISTE (SAD)', values: { '[TEXT_STYLING_PROMPT]': 'Bold, colorful, curved text "SAD" ABOVE the character, bright gradient colors (blue to purple), thick white outline, soft shadow, emoji accents like 💧' } },
                            { label: 'LOL', values: { '[TEXT_STYLING_PROMPT]': 'Bold, colorful, curved text "LOL" ABOVE the character, bright gradient colors (orange to red), thick white outline, soft shadow, emoji accents like 🔥💥' } },
                            { label: 'LO SIENTO (SORRY)', values: { '[TEXT_STYLING_PROMPT]': 'Bold, colorful, curved text "SORRY" ABOVE the character, bright gradient colors (blue to purple), thick white outline, soft shadow, emoji accents like 💖' } },
                            { label: '¡NO! (NO!)', values: { '[TEXT_STYLING_PROMPT]': 'Bold, colorful, curved text "NO!" ABOVE the character, bright gradient colors (orange to red), thick white outline, soft shadow, emoji accents like 💥' } },
                            { label: '¡SÍ! (YES!)', values: { '[TEXT_STYLING_PROMPT]': 'Bold, colorful, curved text "YES!" ABOVE the character, bright gradient colors (blue to purple), thick white outline, soft shadow, emoji accents like ✨' } },
                            { label: 'NOS VEMOS (SEE YA!)', values: { '[TEXT_STYLING_PROMPT]': 'Bold, colorful, curved text "SEE YA!" ABOVE the character, bright gradient colors (blue to purple), thick white outline, soft shadow, emoji accents like ✨' } },
                            { label: 'COOL', values: { '[TEXT_STYLING_PROMPT]': 'Bold, colorful, curved text "COOL" ABOVE the character, bright gradient colors (blue to purple), thick white outline, soft shadow, emoji accents like 😎' } },
                            { label: 'OCUPADO (BUSY)', values: { '[TEXT_STYLING_PROMPT]': 'Bold, colorful, curved text "BUSY" ABOVE the character, bright gradient colors (orange to red), thick white outline, soft shadow, emoji accents like 💥' } },
                            { label: '¡ESPERA! (WAIT!)', values: { '[TEXT_STYLING_PROMPT]': 'Bold, colorful, curved text "WAIT!" ABOVE the character, bright gradient colors (orange to red), thick white outline, soft shadow, emoji accents like 💥' } },
                            { label: 'BOSTEZO (YAWN)', values: { '[TEXT_STYLING_PROMPT]': 'Bold, colorful, curved text "YAWN" ABOVE the character, bright gradient colors (blue to purple), thick white outline, soft shadow, emoji accents like 💧' } },
                            { label: '¡OH NO! (OH NO!)', values: { '[TEXT_STYLING_PROMPT]': 'Bold, colorful, curved text "OH NO!" ABOVE the character, bright gradient colors (orange to red), thick white outline, soft shadow, emoji accents like 💥' } },
                            { label: 'OMG', values: { '[TEXT_STYLING_PROMPT]': 'Bold, colorful, curved text "OMG" ABOVE the character, bright gradient colors (blue to purple), thick white outline, soft shadow, emoji accents like ✨💖' } },
                            { label: '¡GUAU! (WOW!)', values: { '[TEXT_STYLING_PROMPT]': 'Bold, colorful, curved text "WOW!" ABOVE the character, bright gradient colors (blue to purple), thick white outline, soft shadow, emoji accents like ✨' } },
                            { label: '¡PUAJ! (EWW!)', values: { '[TEXT_STYLING_PROMPT]': 'Bold, colorful, curved text "EWW!" ABOVE the character, bright gradient colors (orange to red), thick white outline, soft shadow, emoji accents like 💥' } },
                            { label: '¿EN SERIO? (REALLY?)', values: { '[TEXT_STYLING_PROMPT]': 'Bold, colorful, curved text "REALLY?" ABOVE the character, bright gradient colors (blue to purple), thick white outline, soft shadow, emoji accents like 💖' } },
                        ]
                    }
                ]
            },
            {
                id: 22,
                key: 'character-sheet-nb2-minimalist-board',
                caption: 'NB2: Character Design Board',
                subcategory: 'Hojas de Animación y Turnarounds',
                prompt: `A high-definition, clean, minimalist character design board / character turnaround reference sheet, set against a pure white background. The overall presentation should resemble a professional game art character modeling sheet, fashion design reference page, character design sheet, or character turnaround board. The layout should be neat and well-organized, with clearly divided information sections, a realistic and premium visual quality, consistent lighting, and strict character consistency throughout.

On the left side of the composition, show the character’s full-body three-view turnaround, occupying the main visual area, including: 1. Front full-body standing pose 2. Left-side full-body standing pose 3. Back full-body standing pose. All three figures must be the exact same character, with identical facial features, hairstyle, clothing, body shape, and height proportions. The standing pose should feel natural, with both arms hanging naturally at the sides. This should be suitable as a character modeling reference. The camera angle should be eye level, with neutral studio lighting, no obstruction, no exaggerated perspective, and no complex background.

The right side of the composition should be divided into two sections:
In the upper-right section, place six headshot / head-angle reference images of the same character, arranged neatly to show different head perspectives, including: Front-facing portrait, Slight downward angle showing the top of the head, Back of the head / rear head view, Left-side facial profile, A near-side-angle comparison view, and 3/4 profile portrait. The head references should have clear facial features, visible hair parting, and consistent facial structure, making them suitable as head design references.

In the lower-right section, place six close-up detail images of the character, arranged into a clean grid, showing key design details, including: Close-up of the upper garment fabric texture, Front close-up of the lower-body clothing, Close-up of the hip / tailoring detail, Close-up of the leg or skin texture detail, Close-up of the eyes or facial feature details, and Full close-up of the shoes as a standalone item. All detail images must match the main character’s outfit and appearance exactly. Materials should look realistic, and the details should be clean and precise, suitable as clothing and accessory modeling references.

Overall style requirements: Minimalist, professional, realistic, unified, clean, and premium, similar to a character design board, fashion design reference sheet, 3D character modeling reference page, or character turnaround presentation board. The character edges should be sharp, garment shapes should be clearly defined, hair strands should appear natural, skin should look refined, and material rendering should be accurate. The overall layout should have generous white space, as if it were made by a professional concept art team.

Character setup: the person from the reference image, maintaining their exact facial features, body type, and style. ${PRESERVE_IDENTITY_PROMPT}

Output requirements: Landscape composition, white background, full character visible, no cropping, no extra props, no explanatory text, no logo, no watermark, no UI interface elements, no like/save buttons, and no social-media-screenshot appearance.`,
                illustration: 'professional-profile',
                imageTypeHint: 'Nano 🍌 2: Hoja de diseño minimalista con turnaround y detalles.',
                detailedDescription: "Hoja de diseño de personajes de alta definición con turnaround de 3 vistas, 6 ángulos de cabeza y 6 detalles macro. Estilo minimalista y profesional sobre fondo blanco puro. Ideal para modeladores 3D, diseñadores de moda y artistas conceptuales.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['16:9', '3:2', '4:3'],
            },
            {
                id: 23,
                key: 'character-sheet-nb2-turnaround',
                caption: 'Hoja de Personaje NB2 (Turnaround)',
                subcategory: 'Hojas de Animación y Turnarounds',
                prompt: `Create a professional character reference sheet based strictly on the uploaded reference image. Use a clean, neutral plain background and present the sheet as a technical model turnaround while matching the exact visual style of the reference (same realism level, rendering approach, texture, color treatment, and overall aesthetic). Arrange the composition into two horizontal rows. Top row: four full-body standing views placed side-by-side in this order: front view, left profile view (facing left), right profile view (facing right), back view. Bottom row: three highly detailed close-up portraits aligned beneath the full-body row in this order: front portrait, left profile portrait (facing left), right profile portrait (facing right). Maintain perfect identity consistency across every panel. Keep the subject in a relaxed A-pose and with consistent scale and alignment between views, accurate anatomy, and clear silhouette; ensure even spacing and clean panel separation, with uniform framing and consistent head height across the full-body lineup and consistent facial scale across the portraits. Lighting should be consistent across all panels (same direction, intensity, and softness), with natural, controlled shadows that preserve detail without dramatic mood shifts. Output a crisp, print-ready reference sheet look, sharp details. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'professional-profile',
                imageTypeHint: 'Nano 🍌 2: Turnaround técnico completo (7 vistas).',
                detailedDescription: "Hoja de referencia profesional con 7 vistas técnicas: 4 de cuerpo entero (frente, perfiles, espalda) y 3 retratos detallados. Estilo técnico, limpio y consistente. Ideal para modelado 3D, desarrollo de videojuegos y diseño de personajes complejos.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['16:9', '3:2', '4:3'],
            },
            {
                id: 24,
                key: 'character-sheet-realistic-16-9',
                caption: 'Hoja de Personaje Realista (16:9)',
                subcategory: 'Hojas de Animación y Turnarounds',
                prompt: `A professional character reference sheet of the exact person from the reference image on a plain white background. Layout is two rows: top row has four close-up head shots equally sized side by side-front facing, left profile, right profile, back of head. Bottom row has three full body shots equally sized side by side - full body front, full body side profile, full body back. Replicate every detail from the reference exactly: facial structure, skin tone, natural blemishes, pore texture, hair color, texture and styling. Eyes with exact iris color, natural moisture, realistic catchlights. Exact same outfit across all views. Soft neutral studio lighting, flat and even, no shadows, no color cast. Every view perfectly consistent. Shot on Hasselblad X2D 100C, photorealistic, sharp micro detail, RAW photograph. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'professional-profile',
                imageTypeHint: 'Hoja de referencia ultra-realista en formato 16:9.',
                detailedDescription: "Hoja de personaje profesional con 7 vistas (4 retratos y 3 de cuerpo entero) diseñada para un realismo fotográfico extremo. Utiliza una estética de Hasselblad para capturar texturas de piel, ojos y cabello con precisión quirúrgica.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['16:9'],
            },
            {
                id: 25,
                key: 'character-sheet-data-overlay',
                caption: 'Ficha de Personaje (Pro)',
                subcategory: 'Fichas Técnicas Completas',
                prompt: `Generate a high-density, photorealistic Character Reference Sheet with a strict 3-row layout on a clean white background.

**LAYOUT STRATEGY (MAXIMIZE CONTENT, MINIMIZE WHITESPACE):**
The layout must be dense. Reduce empty white space between rows to the minimum necessary. The character figures should be as large as possible within the frame.

**ROW 1: COMPACT TEXT HEADER (Top Edge)**
Write the text directly on the background (clean, modern sans-serif font). NO graphical boxes, NO generic titles like "Character Sheet".
- **NAME:** [CHAR_NAME]
- **STATS:** [CHAR_AGE] | [CHAR_HEIGHT] | [CHAR_TRAITS]

**ROW 2: FACIAL EXPRESSIONS (Middle Row)**
Three large, detailed headshots aligned horizontally:
1. Left: Neutral/Serious.
2. Center: Side Profile.
3. Right: Distinct emotion reflecting "[CHAR_TRAITS]".

**ROW 3: FULL BODY VIEWS (Bottom Row)**
Three full-body shots aligned horizontally:
1. Left: Front view.
2. Center: 3/4 view.
3. Right: Back view.

**VISUAL INSTRUCTIONS:**
- **Identity:** ${PRESERVE_IDENTITY_PROMPT}
- **Extra Detail:** You MUST incorporate this specific visual detail: **[CHAR_EXTRA]**.
- **Style:** 8K Photorealism, Studio Lighting, sharp focus.`,
                illustration: 'professional-profile',
                imageTypeHint: 'Rellena los datos. Usa "Detalles Extra" para accesorios o rasgos específicos.',
                detailedDescription: "Hoja de personaje optimizada con una estructura clásica de 3 niveles: datos técnicos en la parte superior, retratos detallados en el centro y vistas de cuerpo entero en la parte inferior. Diseño de alta densidad para maximizar la información visual en un solo espacio.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['3:4', '4:5', '1:1', '16:9'], 
                dynamicFields: [
                    { type: 'text', key: '[CHAR_NAME]', label: 'Nombre', defaultValue: 'Alex', isOptional: true },
                    { type: 'text', key: '[CHAR_AGE]', label: 'Edad / Género', defaultValue: '25 | Masculino', isAdvanced: true, isOptional: true },
                    { type: 'text', key: '[CHAR_HEIGHT]', label: 'Altura', defaultValue: '1.80m', isAdvanced: true, isOptional: true },
                    { type: 'text', key: '[CHAR_TRAITS]', label: 'Rasgo (ej: Valiente)', defaultValue: 'Valiente, decidido', isAdvanced: true, isOptional: true },
                    { type: 'text', key: '[CHAR_EXTRA]', label: 'Detalles Extra (ej: Espada, Cicatriz, Gafas)', defaultValue: 'Gafas de sol, chaqueta de cuero', isAdvanced: true, isOptional: true },
                ]
            },
            {
                id: 26,
                key: 'editorial-5-panel-filmstrip',
                caption: 'Editorial: Filmstrip de Moda (5 Paneles)',
                subcategory: 'Editorial y Colecciones',
                prompt: `Create a professional High-End Studio Fashion Editorial '5-Panel Wide Film' Collage using the person from the reference photo.

**LAYOUT STRUCTURE (Asymmetric 2-column):**
- Total Aspect Ratio: 3:4.
- The image is divided into two main vertical columns.
- **Left Column:** Contains 2 stacked vertical panels.
- **Right Column:** Contains 3 stacked horizontal panels.
- Both columns must have identical total height, creating a perfectly aligned rectangular composition.

**AESTHETIC & FRAMING:**
- Style: Professional studio editorial with a seamless vintage film strip aesthetic. 
- Palette: Clean whites, sophisticated charcoals, soft champagne gold, and deep black film borders.
- Framing: Authentic film rebate with sprocket holes and frame numbers ONLY on the far-left and far-right outer vertical edges. 
- Dividers: Internal lines (central vertical and horizontal ones) are simple, solid thin black lines.
- NO text overlays, watermarks, or signatures.

**SUBJECT & WARDROBE:**
- Consistency: The subject in all 5 panels must have the EXACT facial features and proportions as the person in the provided reference photo.
- Outfit Changes: Each of the 5 panels features a distinct high-fashion editorial outfit (e.g., oversized blazer with structured shoulders, flowing silk slip dress, sculptural knitwear, minimalist suit, asymmetric avant-garde piece). All outfits must share a cohesive contemporary minimalist aesthetic.

**PANEL CONTENT:**
1. **Top Left:** Full-body studio editorial shot. Standing pose. High-contrast rim lighting.
2. **Bottom Left:** Medium-shot editorial. Artistic sitting or leaning pose. Soft directional lighting.
3. **Top Right:** Close-up beauty portrait. Frontal view, elegant expression. Shallow depth of field, sharp focus on eyes.
4. **Middle Right:** Candid Behind-The-Scenes side-shot. Relaxed demeanor. Working studio environment with C-stands and cables visible.
5. **Bottom Right:** Dynamic medium-shot highlighting accessories or fabric textures. Butterfly lighting setup.

${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'model-cover',
                imageTypeHint: 'Genera un collage editorial asimétrico de 5 paneles con diferentes outfits.',
                detailedDescription: "Crea un collage editorial de moda de 5 paneles con diseño asimétrico. Muestra múltiples outfits, poses y ángulos en una sola imagen de alta calidad, emulando una tira de película vintage. Ideal para lookbooks, portafolios de modelos o editoriales de moda.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['3:4', '1:1', '16:9', '9:16', '4:3'],
            },
            {
                id: 27,
                key: 'character-sheet-4-panel',
                caption: 'Hoja de Personaje (4 Paneles)',
                subcategory: 'Hojas de Animación y Turnarounds',
                prompt: `Photographic character reference sheet, multiple views, split image, 4 panels. [1] full body front view, [2] full body side profile view looking straight ahead, [3] full body back view looking straight ahead, [4] extreme close-up of face. The person in the photo, respecting their facial and physical features, neutral expression. Barefoot. Studio lighting, bright white seamless background. 8k, hyperrealistic, detailed skin, sharp focus, fashion photography, raw photo, masterpiece quality. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'professional-profile',
                imageTypeHint: 'Ideal para: Foto de cuerpo entero.',
                detailedDescription: "Hoja de referencia técnica de 4 paneles: frente, perfil, espalda y primer plano. Fondo blanco limpio, iluminación de estudio y alta calidad. Esencial para artistas 3D, diseñadores de vestuario y creadores de personajes.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['1:1', '16:9', '9:16', '4:3', '3:4'],
            },
            {
                id: 28,
                key: 'character-sheet-composite-detail',
                caption: 'Hoja de Personaje: Compuesto y Detalle',
                subcategory: 'Fichas Técnicas Completas',
                prompt: `A professional high-resolution character design composite sheet on a clean white background, creating a seamless composition without borders or dividing lines. The image is divided into two large primary areas and one smaller detail area showing the exact character from the reference image. Adapt the layout to the aspect ratio selected.

[LARGE AREA 1 - FULL BODY]: A full-body shot of the character standing in a relaxed, at a 45-degree angle, neutral pose. Arms are resting naturally by the sides and legs are clearly visible, showcasing the complete silhouette and full outfit without obstruction.

[LARGE AREA 2 - PORTRAIT]: An extreme close-up headshot of the face, strictly focusing on high-fidelity skin texture, visible pores, realistic eye details, and the specific hairstyle. This area shares prominence with the full body shot.

[SMALLER AREA - DETAIL]: A macro close-up detail shot focusing strictly on the clothing materials, highlighting the fabric weave, stitching, and texture of the accessories.

Technical specifications: Studio lighting, pure white background, hyper-realistic, 8k resolution, incredibly detailed textures, sharp focus, commercial photography style. ${PRESERVE_IDENTITY_PROMPT} ${PRESERVE_OUTFIT_PROMPT}`,
                illustration: 'professional-profile',
                imageTypeHint: 'Ideal para: Foto de cuerpo entero.',
                detailedDescription: "Composición profesional de alta resolución que combina cuerpo entero, primer plano facial y detalle macro de texturas de ropa. Sin bordes visibles. Perfecto para mostrar la calidad de materiales, costuras y detalles del personaje.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['4:3', '1:1', '16:9', '9:16', '3:4'],
            },
            {
                id: 29,
                key: 'character-sheet-3-view-body',
                caption: 'Hoja de Personaje: Vistas de Cuerpo',
                subcategory: 'Hojas de Animación y Turnarounds',
                prompt: `Create a character design sheet for the person in the photo. The sheet must be a single image containing three full-body views of the person on a clean, neutral light gray background: 1. A direct front view. 2. A 45-degree angle view. 3. A direct back view. The person must be in a neutral 'A-pose' to clearly display their features. It is crucial that the person's facial features, body type, hairstyle, and clothing are consistent and photorealistic across all three views, exactly matching the original photo. ${PRESERVE_IDENTITY_PROMPT} ${PRESERVE_OUTFIT_PROMPT}`,
                illustration: 'professional-profile',
                imageTypeHint: 'Ideal para: Foto de cuerpo entero.',
                detailedDescription: "Hoja técnica clásica de 3 vistas (frente, 45 grados, espalda) en pose neutra 'A-pose'. Fondo gris claro neutral. El estándar de la industria para modelado 3D, rigging y arte conceptual.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['16:9', '1:1', '9:16', '4:3', '3:4'],
            },
            {
                id: 30,
                key: 'character-sheet-3-view-head',
                caption: 'Hoja de Personaje: Vistas de Cabeza',
                subcategory: 'Hojas de Animación y Turnarounds',
                prompt: `Create a character headshot sheet for the person in the photo. The sheet must be a single image containing three views of the person's head and shoulders on a clean, neutral light gray background: 1. A direct front view. 2. A 45-degree angle view. 3. A direct back view. It is crucial that the person's facial features and hairstyle are consistent and photorealistic across all three views, exactly matching the original photo. ${PRESERVE_IDENTITY_PROMPT} ${PRESERVE_OUTFIT_PROMPT}`,
                illustration: 'professional-profile',
                imageTypeHint: 'Ideal para: Foto de cara.',
                detailedDescription: "Hoja de referencia facial con 3 vistas de la cabeza (frente, ángulo, espalda). Detalle extremo en rasgos, cabello y estructura facial. Ideal para estudios de maquillaje, peinado, escultura facial o animación.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['16:9', '1:1', '9:16', '4:3', '3:4'],
            },
            {
                id: 31,
                key: 'character-sheet-emotions',
                caption: 'Hoja de Personaje: Expresiones',
                subcategory: 'Estudio de Movimiento y Ángulos',
                prompt: `Create an emotion sheet for the character in the photo. The output must be a single image with a grid of six headshots of the same person against a clean, neutral light gray background. Each headshot should display a different emotion: happy, sad, angry, surprised, fearful, and neutral. It is absolutely critical that the person's identity, facial structure, hairstyle, and clothing remain identical to the source photo in every panel, with only the facial expression changing. ${PRESERVE_IDENTITY_PROMPT} ${PRESERVE_OUTFIT_PROMPT}`,
                illustration: 'professional-profile',
                imageTypeHint: 'Ideal para: Foto de cara.',
                detailedDescription: "Grid de 6 emociones básicas (alegría, tristeza, ira, sorpresa, miedo, neutral) manteniendo la identidad facial intacta. Fondo gris neutro. Útil para actores, animadores, ilustradores y estudio de personajes.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['3:2', '1:1', '16:9', '9:16', '4:3', '3:4'],
            },
            {
                id: 32,
                key: 'character-sheet-poses',
                caption: 'Hoja de Personaje: Poses Dinámicas',
                subcategory: 'Estudio de Movimiento y Ángulos',
                prompt: `Create a dynamic pose sheet for the character in the photo. The output must be a single image with a grid of four full-body views of the person against a clean, neutral light gray background. Each view should show the character in a different pose: 1. Walking. 2. Sitting on a simple stool. 3. A confident power pose. 4. A dynamic action pose (like jumping or kicking). The person's identity, facial features, hairstyle, and clothing must remain identical to the source photo across all poses. ${PRESERVE_IDENTITY_PROMPT} ${PRESERVE_OUTFIT_PROMPT}`,
                illustration: 'professional-profile',
                imageTypeHint: 'Ideal para: Foto de cuerpo entero.',
                detailedDescription: "Grid de 4 poses dinámicas (caminar, sentarse, acción, poder) para mostrar la versatilidad del personaje. Fondo neutro. Ideal para visualizar movimiento, comportamiento corporal y dinámicas de acción.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['1:1', '16:9', '9:16', '4:3', '3:4'],
            },
            {
                id: 33,
                key: 'ultra-wide-grid-2x2',
                caption: 'Grid Gran Angular 2x2',
                subcategory: 'Estudio de Movimiento y Ángulos',
                prompt: `Create a single image consisting of a 2x2 grid (4 distinct panels). For each panel, transform the original photo into a dramatic, photorealistic, ultra wide-angle shot with an extreme camera angle (including views from directly below or above). In each panel, ensure one or more body parts are right next to the lens and look huge (extreme foreshortening), while the rest of the body recedes in perspective. The same person must strike a different stylish, complex, powerful pose in each panel, set within a consistent, expanded version of the original environment. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'model-runway',
                imageTypeHint: 'Ideal para: Poses dinámicas y creativas.',
                detailedDescription: "Grid de 4 paneles con lentes gran angular extremas y perspectivas forzadas. Crea poses dramáticas, distorsionadas y de alto impacto visual. Estilo fotográfico moderno y creativo.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['1:1', '16:9', '9:16', '4:3', '3:4'],
            },
            {
                id: 34,
                key: 'ultra-wide-grid',
                caption: 'Grid Ultra Gran Angular (Aleatorio)',
                subcategory: 'Estudio de Movimiento y Ángulos',
                prompt: `Genera un grid de imágenes. Cada imagen del grid debe ser una edición de la imagen original proporcionada, transformándola en una fotografía dramática, fotorrealista y con un ángulo ultra gran angular.

**Cada imagen en el grid debe adherirse estrictamente a las siguientes reglas basadas en la imagen original:**

**Referencia Estricta de la Imagen Original:**
*   **Identidad, Peinado y Estilo General de Vestir del Personaje:** Mantener exactamente la misma persona, peinado y el estilo de vestimenta general.
*   **Tipo General de Fondo y Escena:** El fondo debe permanecer en el mismo tipo de lugar (la misma calle, la misma habitación, la misma playa, el mismo entorno arquitectónico, etc.).

**Modificaciones Permitidas (cámara, ángulo y pose):**
*   Puedes cambiar completamente la posición de la cámara, el ángulo y la pose.
*   **La escena debe permanecer en el mismo lugar.**
*   **El diseño del personaje y el vestuario deben ser consistentes.**

**Cámara y Perspectiva para cada imagen del grid:**
*   **Lente Ultra Gran Angular o Ojo de Pez:** Usar un efecto de lente ultra gran angular o de ojo de pez (equivalente a un objetivo de fotograma completo de 12-18 mm).
*   **Cambio Significativo en el Ángulo de la Cámara:** El ángulo de la cámara debe ser notablemente diferente de la imagen original. Ángulos exagerados incluyen:
    *   Vista desde abajo, mirando hacia arriba.
    *   Vista desde arriba, mirando hacia abajo.
    *   Ángulo muy bajo, cerca del suelo.
    *   Ángulo alto, mirando hacia abajo.
    *   Composición inclinada con "ángulo holandés".
*   **Fuerte Efecto de Acortamiento de la Perspectiva:** Las partes del cuerpo más cercanas a la lente deben parecer enormes, mientras que el resto del cuerpo se extiende a la distancia en perspectiva.
*   **Estilo Fotográfico:** El resultado final debe parecer una fotografía de moda audaz o una foto de calle, completamente realista, no una ilustración o estilo anime.

**Consistencia del Fondo para cada imagen del grid:**
*   **Misma Ubicación:** Mantener la misma ubicación que en la imagen original (la misma calle, el mismo puente, la misma habitación, el mismo estudio de fotografía, la misma playa, o estructuras y materiales similares/idénticos).
*   **No Reemplazar el Fondo:** No sustituir el fondo por una escena completamente diferente.
*   **Extensión Lógica del Entorno:** Debido al cambio de ángulo de la cámara, se permite y se espera que aparezcan diferentes áreas del entorno. Cuando aparezcan nuevas áreas, deben extenderse lógicamente desde el entorno original (mismos edificios, vallas, marcas viales, paredes, colores, materiales, estilo de iluminación, etc.), como si la cámara se hubiera movido dentro del mismo lugar.

**Partes del Cuerpo Cercanas a la Lente (1-3 por imagen en el grid):**
*   Para cada imagen editada, seleccionar una o dos partes principales del cuerpo (ocasionalmente tres en poses más complejas) que estén extremadamente cerca de la lente.
*   Variar estas partes del cuerpo entre las diferentes imágenes del grid. No siempre debe ser la misma parte la que esté más cerca de la lente.
*   Las partes del cuerpo que pueden estar cerca de la lente incluyen:
    *   Una o ambas manos / dedos extendiéndose hacia la lente.
    *   Uno o ambos pies / zapatos / botas pegados a la lente.
    *   Rodillas o muslos.
    *   La cara muy cerca de la lente.
    *   Un hombro o el pecho cerca de la lente en una postura inclinada hacia adelante.
*   Las partes del cuerpo seleccionadas deben estar extremadamente cerca de la lente, casi tocándola, con texturas de piel y tela claramente visibles y una distorsión de gran angular realista.

**Pose y Cuerpo General (complejas y variadas en el grid):**
*   Crear poses fuertes, geniales y dinámicas que coincidan con la perspectiva extrema.
*   Usar aleatoriamente diferentes tipos de posturas, incluyendo:
    *   En poses de pie, una pierna o una mano extendida hacia la lente.
    *   En cuclillas o medio agachado cerca del suelo.
    *   Sentado en el suelo o sobre un objeto.
    *   Tumbado en el suelo, con las piernas o los pies hacia la lente.
    *   El cuerpo inclinado significativamente hacia adelante, hacia la lente.
    *   Torcer el torso, cruzar las piernas o arquear la espalda para crear líneas corporales más dinámicas.
*   Se permiten poses complejas, como:
    *   Ambas manos cerca de la lente, haciendo gestos (signo de victoria, triángulo, haciendo un marco con los dedos, señalando al espectador, etc.).
    *   Ambos pies hacia la lente.
    *   Una mano y un pie actuando como grandes elementos en primer plano al mismo tiempo.
    *   La cara cerca de la lente, mientras que la mano o el pie también aparecen en perspectiva.
*   Incluso con un acortamiento de perspectiva extremo, mantener una estructura corporal razonable y creíble.

**Posición de la Cámara y Actitud (aleatorizada en el grid):**
*   Variar aleatoriamente el ángulo y la dirección de la cámara (hacia arriba, hacia abajo, lateral, composición inclinada), manteniendo una composición visualmente equilibrada e impactante.
*   Mantener una actitud genial, serena y segura, inclinándose hacia el estilo de una sesión de fotos de moda o de calle, de acuerdo con el temperamento del atuendo original.
*   Las expresiones faciales pueden variar (serias, juguetonas, seguras, misteriosas, etc.), pero siempre deben parecer la misma persona.

**Iluminación y Renderizado de la Imagen para cada imagen del grid:**
*   Mantener una atmósfera de tiempo y luz similar a la imagen original (día/noche, interior/exterior, luz suave/luz dura), pero se puede aumentar el contraste y el color para hacer la imagen más impactante y dramática.
*   Mantener sombras realistas y la relación de contacto con el suelo/piso.
*   Alta resolución y detalles nítidos, que permitan ver la textura de la piel, la textura de la tela y los reflejos del material.

**Variación y Aleatoriedad en el Grid:**
*   Cada edición en el grid debe ser claramente diferente de la imagen original y de las otras versiones editadas, manteniendo la diversidad en los siguientes aspectos:
    *   Ángulo de la cámara.
    *   Tipo de pose.
    *   Qué partes del cuerpo están más cerca de la lente.
    *   Dirección de la composición (frontal, inclinada, vista superior, vista inferior, etc.).
*   Evitar repetir la misma composición de "un pie cerca de la lente" una y otra vez; presentar una rica variedad de poses dinámicas y cambios de posición de la cámara.

**Reglas Estrictas (Para todas las imágenes del grid):**
*   No cambiar a la persona.
*   No cambiar el tipo de vestuario; solo se puede modificar la forma en que se presenta a través de la pose, la perspectiva y el movimiento natural de la ropa.
*   No mover la escena a una ubicación completamente diferente; siempre permanecer dentro de una extensión lógica de la ubicación original.
*   No añadir texto, logotipos, marcas de agua or elementos de diseño gráfico.
*   No cambiar al estilo de pintura al óleo, ilustración o anime; debe mantener un efecto fotorrealista.

**Objetivo General para el Grid:**
Transformar la fotografía original en un grid de imágenes dramáticas, fotorrealistas y con ángulos ultra gran angular. La posición de la cámara debe ser extrema (incluyendo vistas desde directamente abajo o directamente arriba), con una o más partes del cuerpo muy cerca de la lente, pareciendo enormes, mientras que el resto del cuerpo se extiende a la distancia en perspectiva. El mismo personaje debe aparecer en un escenario consistente con el entorno original, que se extiende de forma natural, en poses complejas, potentes y con estilo de iluminación coherente. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'model-runway',
                imageTypeHint: 'Funciona mejor con fotos de cuerpo entero o medio cuerpo.',
                detailedDescription: "Versión avanzada y aleatoria del grid gran angular. Explora ángulos de cámara inusuales, perspectivas extremas y poses dinámicas inesperadas. Resultados impredecibles, altamente creativos y visualmente impactantes.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['1:1', '16:9', '9:16', '4:3', '3:4'],
            },
            {
                id: 35,
                key: 'extract-mannequin',
                caption: 'Extraer Maniquí Digital',
                subcategory: 'Anatomía y Transferencia de Pose',
                prompt: `CORE TASK: Technical Pose and Form Extraction.

You will function as a technical art tool. Your job is to deconstruct the provided reference image and generate a clean, unclothed, and bald anatomical mannequin. You are not creating a character; you are creating a reusable artist's template.

NON-NEGOTIABLE HIERARCHY OF COMMANDS:

ABSOLUTE PRIORITY: POSE REPLICATION.

This is the most critical instruction. You MUST replicate the exact skeletal pose, limb articulation, weight distribution, and perspective of the subject in the reference image.

Analyze the underlying bone structure. The final output's pose must be a perfect 1:1 match, as if it were traced. NO alteration or "artistic interpretation" of the pose is permitted.

ABSOLUTE EXCLUSION: IGNORE SURFACE DETAILS.

You are explicitly forbidden from rendering any of the following elements from the source image:

NO CLOTHING: Ignore all fabric, armor, shoes, and accessories. Render the underlying body form ONLY.

NO HAIR: The mannequin must be completely bald.

NO COLOR: The output must be black and white line art.

MANDATORY TRANSFER: EXPRESSION & BUILD.

After the pose is secured, you must perfectly transfer the subject's facial expression (eyes, mouth, brows) to the mannequin's face.

Replicate the subject's body type, musculature, and physical proportions onto the mannequin's form.

FINAL SPECIFICATIONS:

Output: A full-body black and white line art drawing.

Subject: A simplified anatomical mannequin, smooth-skinned and featureless in the chest and pelvic regions (no nipples or genitals).

Background: Solid, plain white.`,
                illustration: 'professional-profile',
                imageTypeHint: 'Ideal para: Foto de cuerpo entero.',
                detailedDescription: "Extrae únicamente la pose, articulación de extremidades y estructura corporal de una foto para crear un maniquí anatómico digital en blanco y negro. Herramienta técnica esencial para artistas que necesitan referencias de pose limpias y precisas.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['1:1', '16:9', '9:16', '4:3', '3:4'],
            },
            {
                id: 36,
                key: 'extract-mannequin-anatomical',
                caption: 'Extraer Maniquí Anatómico',
                subcategory: 'Anatomía y Transferencia de Pose',
                prompt: `Please generate a bald, unclothed anatomical mannequin, omitting external details like clothing, accessories, and hair. The mannequin must have the same pose and expression as the reference image. The final output must be a black and white line drawing on a plain white background.`,
                illustration: 'professional-profile',
                imageTypeHint: 'Ideal para: Foto de cuerpo entero.',
                detailedDescription: "Versión simplificada para extraer un maniquí anatómico sin ropa ni pelo, conservando la pose exacta. Referencia rápida y clara para dibujo, composición y análisis de movimiento.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['1:1', '16:9', '9:16', '4:3', '3:4'],
            },
            {
                id: 37,
                key: 'advanced-mannequin',
                caption: 'Aplicar Maniquí Digital Avanzado',
                subcategory: 'Anatomía y Transferencia de Pose',
                prompt: `**CRITICAL THREE-STEP SYNTHESIS PROCESS:**

**Step 1: POSE EXTRACTION.**
From the **second image provided (the pose reference)**, you MUST extract the subject's exact skeletal pose, limb articulation, weight distribution, and perspective. This is a technical trace; no artistic interpretation is allowed.

**Step 2: IDENTITY TRANSFER.**
From the **first image provided (the main subject)**, you MUST extract the person's exact facial features, identity, and body type. It is absolutely crucial that the person's facial features (eyes, nose, mouth, and facial structure) are an exact and photorealistic match to the original photo, without any alteration to their identity.

**Step 3: SCENE COMPOSITION.**
Now, create a new, photorealistic image. Place the person from Step 2 into the exact pose from Step 1. Then, "dress" this character and place them in a scene. If the user provides a text prompt, use it to define the clothing and scene: "[SCENE_DESCRIPTION]". If the user prompt is empty, dress the character in simple, neutral modern clothing (like a grey t-shirt and blue jeans) and place them against a plain, light grey studio background. Avoid futuristic or overly stylized elements unless explicitly requested.

**FINAL OUTPUT REQUIREMENTS:**
- The final result should be a single, believable photograph.
- **IDENTITY PRESERVATION IS PARAMOUNT:** The face and identity of the person from the first image must be a perfect, photorealistic match. The goal is a transformation of pose and scene, **not of the person**.
- The body pose from the second image must be perfectly replicated.
- The scene, clothing, and lighting must be dictated by the user's text prompt, or use the described defaults if the prompt is empty.`,
                illustration: 'professional-profile',
                imageTypeHint: 'Foto 1: Tu cara. Foto 2: La pose. La descripción es opcional.',
                detailedDescription: "Aplica la pose de una referencia secundaria a tu foto principal. Permite definir ropa y escenario mediante texto o usar valores predeterminados. Herramienta poderosa para control total sobre la composición y el estilo.",
                requiresSecondImage: true,
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['9:16', '1:1', '16:9', '4:3', '3:4'],
                dynamicFields: [
                    {
                        type: 'text',
                        key: '[SCENE_DESCRIPTION]',
                        label: 'Ropa y Escenario',
                        defaultValue: 'Casual modern clothing, light grey studio background',
                        isOptional: true
                    }
                ]
            },
            {
                id: 38,
                key: 'advanced-mannequin-v2',
                caption: 'Aplicar Maniquí Digital Avanzado V2',
                subcategory: 'Anatomía y Transferencia de Pose',
                prompt: `Generate a photorealistic image of the person from the first reference image.
The person should be adopting the exact pose shown in the second reference image.
Scene Description: [SCENE_DESCRIPTION]
(Default to casual modern clothing and a neutral studio background if the description is empty).
Ensure the facial identity from the first image is preserved. The second image is for pose reference only. Avoid any sci-fi or futuristic elements unless explicitly requested.`,
                illustration: 'professional-profile',
                imageTypeHint: 'Foto 1: Tu cara. Foto 2: La pose. La descripción es opcional.',
                detailedDescription: "Versión alternativa para aplicar poses complejas a tu personaje manteniendo el realismo fotográfico. Usa una foto de pose clara para obtener los mejores resultados de transferencia.",
                requiresSecondImage: true,
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['9:16', '1:1', '16:9', '4:3', '3:4'],
                dynamicFields: [
                    {
                        type: 'text',
                        key: '[SCENE_DESCRIPTION]',
                        label: 'Descripción de la Escena',
                        defaultValue: 'Casual modern clothing, light grey studio background',
                        isOptional: true
                    }
                ]
            },
            {
                id: 39,
                key: 'fashion-composite-4-pose',
                caption: 'Collage de Moda (4 Poses)',
                subcategory: 'Editorial y Colecciones',
                prompt: `GENERATE A DIGITAL FASHION COMPOSITE IMAGE.

**SCENE & ATMOSPHERE:**
- Environment: Abstract geometric studio with thick matte black modular frames acting as dividers/props.
- Background: Sterile off-white backdrop.
- Lighting: Soft high-key studio lighting, minimal shadows.
- Tech Specs: 85mm lens style, f/8 deep focus.

**SUBJECTS (CRITICAL):**
- Generate **4 distinct instances** of the person from the input photo within this single image.
- **FIDELITY:** Every instance must be 100% IDENTICAL to the input reference (Same Face, Same Body, Same Outfit).

**POSES & PLACEMENT:**
1. **Top Left:** Seated in a frontal squat, knees wide, hands on thighs, stoic gaze.
2. **Mid Right:** Reclining prone on a horizontal beam, leaning on right elbow, legs extended right, relaxed.
3. **Bottom Left:** Inverted (upside-down) prone pose, legs kicked up 90 degrees, right arm hanging vertically, playful.
4. **Bottom Right:** Standing lean against a vertical pillar, left leg straight, right knee bent, assertive.

${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'model-cover',
                imageTypeHint: 'Ideal para: Foto de cuerpo entero. Se recomienda formato 9:16.',
                detailedDescription: "Crea una composición de moda digital con 4 instancias del mismo sujeto en diferentes poses geométricas. Estilo editorial moderno, limpio y profesional. Ideal para mostrar versatilidad, movimiento y diseño de moda.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['9:16', '1:1', '16:9', '4:3', '3:4'],
            },
            {
                id: 40,
                key: 'night-party-grid-chaos',
                caption: 'Grid de Fiesta Nocturna (Caos)',
                subcategory: 'Eventos y Espontáneas',
                prompt: `Ultra-realistic accidental smartphone photograph — chaotic quad-frame contact sheet.
Single image with four vertical 9:16 frames arranged in a messy 2×2 grid, captured in a frantic, drunken handheld phone burst by friends messing around.

Subject: completely fictional adult woman, non-identifiable, just a random girl in the group.
Reference image used ONLY for general age range and neutral/party demeanor — zero resemblance, no face copying whatsoever.

Facial details partially/fully destroyed in EVERY frame: heavy motion blur, flash flare madness, autofocus completely drunk and failing, rolling-shutter warping, friend’s finger half-covering lens in some shots, crazy camera angles.

Scene: crowded nighttime city street during a wild street festival — chaotic crowds walking everywhere, strings of colorful party lights and cheap LED lanterns hanging above, blurry distant neon signs, food stalls with steam and glow, no sky visible, everything feels tight and overwhelming.
No fireworks at all — instead, random colored light streaks from moving lanterns/phones/people waving glow sticks, blown-out street lamps, lens flare bouncing off wet pavement or reflections, festival atmosphere only as messy background noise.

Camera failure: cheap modern smartphone, super rushed + tipsy handheld capture by laughing friends.
Unpredictable flash going off randomly and way too strong. Constant missed autofocus. Insane camera shake + extreme tilt angles. Heavy directional motion blur, ghosting trails, double/triple edges on face and body, clipped blinding highlights, uneven patchy exposure, ISO noise everywhere like sandpaper. Nothing is level, clean or even remotely sharp.

Frame sequence (chaotic angles as if different drunk friends grabbed the phone):
1. Low angle from below (phone almost at waist level), walking past side-on, unaware, face cut weirdly by frame edge, strong upward tilt.
2. Sudden Dutch-angle tilt + very close-up (intrusive selfie-style), head turn surprised/confused, face smeared horizontally, flash blinding one eye, someone’s arm in frame.
3. Extreme high angle (phone held way above head), hand reflexively blocking lens but failing, shy/embarrassed half-smile mixed with laugh, massive ghosting + finger smudge on glass.
4. Almost-out-of-frame to the side, phone tilted 45°, faint awkward/grinning smile disappearing off edge, extreme horizontal + vertical blur, background people photobombed as streaks.

Mood: intrusive, messy, fleeting, "why did you take that bro?!" energy — photos never meant to be shown, just dumb drunk group chaos.

Negative: anime, illustration, cinematic festival mood, centered beautiful lights, posed group selfie, professional camera, sharp focus anywhere, beauty filters, perfect symmetry, clean composition, calm atmosphere, obvious fireworks, studio lighting, identity match, intentional art direction.`,
                illustration: 'model-runway',
                imageTypeHint: 'Grid 2x2 de fotos caóticas de una fiesta nocturna, estilo foto accidental de celular.',
                detailedDescription: "Genera una serie de 4 fotos caóticas, borrosas y espontáneas de una fiesta nocturna. Estilo 'accidental', flash quemado, desenfoque de movimiento y ángulos inusuales. Captura la energía desordenada, auténtica y divertida de una noche de fiesta.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['1:1', '4:5', '3:4'],
            },
            {
                id: 42,
                key: 'blueprint-concept-sheet',
                caption: 'Hoja de Concepto Blueprint',
                subcategory: 'Fichas Técnicas Completas',
                prompt: `A character concept sheet of the exact person from the reference image, featuring detailed front, back, and side views, along with close-up sketches of facial features, costume details, and accessories. Annotated design notes and clearly labeled components are arranged across the layout, rendered in a refined blueprint style. The character and clothing must strictly use the original colors from the reference image. For the blueprint graphics, grid, and UI elements, use [COLOR_1] accents and a [COLOR_2] base design (if no colors are specified here, derive the blueprint colors naturally from the reference image's color palette). Presented on a clean white background with a polished professional character design presentation. \${PRESERVE_IDENTITY_PROMPT} \${PRESERVE_OUTFIT_PROMPT}`,
                illustration: 'professional-profile',
                imageTypeHint: 'Hoja de concepto estilo blueprint con colores personalizables.',
                detailedDescription: "Hoja de concepto de personaje con vistas detalladas, bocetos de primeros planos y notas de diseño anotadas. Renderizado en un estilo blueprint refinado. Si dejas los colores en blanco, se usarán los colores de la imagen original.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['16:9', '3:2', '4:3', '1:1'],
                dynamicFields: [
                    {
                        type: 'text',
                        key: '[COLOR_1]',
                        label: 'Color de Acentos (opcional)',
                        defaultValue: '',
                        isOptional: true
                    },
                    {
                        type: 'text',
                        key: '[COLOR_2]',
                        label: 'Color Base (opcional)',
                        defaultValue: '',
                        isOptional: true
                    }
                ]
            },
            {
                id: 44,
                key: 'official-character-data-card',
                caption: 'Ficha Técnica Oficial (Data Card)',
                subcategory: 'Fichas Técnicas Completas',
                prompt: `You are an expert character sheet designer for official anime/game art books.

Create a complete, professional, and elegant official character data card in the exact same layout, structure, style, and visual hierarchy as the reference image.

Use a clean white background with an organized, balanced grid layout and elegant illustration style.

All text must be in English only.

The character sheet must include these exact sections with the same positioning:

• Top left: Large bold title “[NAME]” 
  Below it, the elegant tagline: “[TAGLINE]”

• Top right: “WORLD” section with the academy crest logo and a short world-setting description.

• Left column: “CHARACTER” information box containing:
  Name | English Name | Age | Birthday | Height | Blood Type | Affiliation | Position | Personality

• Center: “TURNAROUND” section showing three full-body views clearly labeled FRONT, SIDE, and BACK.

• Right side: “EXPRESSIONS” section with a clean 2×3 grid of six different facial expressions labeled:
  NEUTRAL, SMILE, WINK, SERIOUS, SURPRISED, THOUGHTFUL

• Lower left: “COSTUME & GEAR” section clearly displaying each clothing item and accessory separately (Jacket, Skirt, Ribbon, Socks, Heels, Badge, etc.) with clean individual illustrations and English labels.

• Next to it: “DETAILS” section with multiple close-up shots of important garment details (collar bow, buttons, pleats, heel close-up, etc.).

• Right side: “COLOR PALETTE” section with a vertical list of color swatches and their exact hex codes.

• Bottom row:
  - Left: “PROFILE” section with the full character profile text: [DESCRIPTION]
  - Center: “STORY KEYWORDS” with neatly arranged keyword boxes.
  - Right: “SIGNATURE” with an elegant handwritten signature of the character’s name and a small feather quill icon.

• Footer at the bottom center: “© WHITEWING ACADEMY — OFFICIAL CHARACTER DATA”

Use high resolution, sharp lines, consistent art style, perfect spacing, and professional presentation.

${PRESERVE_IDENTITY_PROMPT} ${PRESERVE_OUTFIT_PROMPT}`,
                illustration: 'professional-profile',
                imageTypeHint: 'Hoja técnica oficial de personaje estilo anime/game art book.',
                detailedDescription: "Genera una ficha técnica de personaje profesional y elegante siguiendo un diseño de hoja de datos oficial. Incluye turnaround, expresiones, desglose de vestuario, paleta de colores y perfil. ¡Personalízala con los datos de tu personaje!",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['9:16', '3:4', '1:1'],
                dynamicFields: [
                    { type: 'text', key: '[NAME]', label: 'Nombre del Personaje', defaultValue: 'Character Name', isOptional: false },
                    { type: 'text', key: '[TAGLINE]', label: 'Frase o Tagline', defaultValue: 'Elegant tagline here', isOptional: true },
                    { type: 'text', key: '[DESCRIPTION]', label: 'Perfil o Historia', defaultValue: 'Brief character profile and background story.', isOptional: false }
                ]
            },
            {
                id: 45,
                key: 'female-character-sheet-premium',
                caption: 'Hoja de Personaje Premium (Mujer)',
                subcategory: 'Fichas Técnicas Completas',
                prompt: `Create a photorealistic female character design sheet [MODE_INSTRUCTIONS]. Style: ultra-realistic cinematic fashion photography with warm, soft lighting and a cozy yet sophisticated atmosphere. Hyper-detailed skin texture, realistic pores, subtle makeup, natural hair strands, and lifelike eyes. High-end editorial photography style with elegant cinematic lighting, gentle rim lights, and soft bokeh background. 

Make it a clean, professional character concept poster layout including:
- One large main female portrait (front view, cinematic close-up, highly detailed and beautiful)
- Facial expression set (happy, shy, annoyed, sleepy, surprised, excited) — realistic and natural expressions with authentic emotion and lighting
- 2–3 full-body poses (elegant standing, walking/running, playful fashion pose) with natural body language, realistic clothing movement and fabric details
- Small accessory/object icons (hair clip, cute designer bag, phone charm, coffee cup, keychain) photographed in the same realistic style
- Simple elegant color palette section (skin tones, hair color, outfit colors, accent colors) with realistic swatches
- Profile info box with: name, age range, personality traits, likes/dislikes, and a short description

Overall look should feel charming, feminine, cozy, and high-fashion. Professionally arranged like a premium animation studio character sheet but executed in photorealistic live-action photography style. Ultra high quality, 8K resolution, clean minimalist background with soft depth, cinematic color grading, sharp details, natural lighting, and magazine-quality realism. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'professional-profile',
                imageTypeHint: 'Hoja de diseño de personaje premium con múltiples poses y expresiones.',
                detailedDescription: "Hoja de personaje fotorealista de alta gama que incluye retrato principal, set de expresiones, poses de cuerpo entero y desglose de accesorios. Elige si quieres respetas el estilo original o crear algo nuevo.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['16:9', '3:2', '4:3', '1:1'],
                dynamicFields: [
                    {
                        type: 'select',
                        key: '[MODE_INSTRUCTIONS]',
                        label: 'Modo de Inspiración',
                        defaultValue: 'inspired only lightly by the uploaded reference image, creating a more original and photorealistic version of the character',
                        options: [
                            { 
                                label: 'Inspiración Ligera (Original)', 
                                values: { '[MODE_INSTRUCTIONS]': 'inspired only lightly by the uploaded reference image, creating a more original and photorealistic version of the character' } 
                            },
                            { 
                                label: 'Fidelidad de Estilo (Adaptado)', 
                                values: { '[MODE_INSTRUCTIONS]': 'based strictly on the uploaded reference image. First, visually analyze the reference image to extract the exact colors, clothing style, fabric details, and specific costumes of the subject. Apply these identical elements to the entire character sheet. Ensure absolute fidelity to the source image\'s clothing, style, and colors' } 
                            }
                        ]
                    }
                ]
            },
        ]
    },
};
