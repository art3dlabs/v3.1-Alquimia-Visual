
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import type { PhotoPack } from './types';
import { PRESERVE_IDENTITY_PROMPT } from './types';
import { visualConfigs } from './visualConfigs';
import { poseConfigs } from './poseConfigs';
import { outfitConfigs } from './outfitConfigs';

const visualConfigOptions = Object.entries(visualConfigs).map(([key, config]) => ({
    label: key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1'),
    value: `\nLighting: ${config.lighting}, Color Palette: ${config.colorPalette}, Mood: ${config.mood}, Technical Tags: ${config.technicalTags.join(', ')}`,
    description: `Mood: ${config.mood}. Lighting: ${config.lighting}. Color: ${config.colorPalette}. Tags: ${config.technicalTags.join(', ')}`
}));

const poseOptions = Object.values(poseConfigs).map(pose => ({
    label: `${pose.category}: ${pose.description}`,
    value: `\nPose/Action: ${pose.prompt}`,
    description: pose.description
}));

const outfitOptions = Object.values(outfitConfigs).map(outfit => ({
    label: `${outfit.category}: ${outfit.description}`,
    value: `\nOutfit/Style: ${outfit.prompt}`,
    description: outfit.description
}));

export const favoritesPack: Record<string, PhotoPack> = {
    'custom-prompt': {
        title: 'Estudio Creativo: Favoritos',
        description: 'Tus herramientas esenciales: Prompt libre, clonación de estilos, outpainting y mejoras visuales.',
        images: [
            {
                id: 801,
                key: 'custom-prompt',
                caption: 'Test de Prompts',
                subcategory: 'Laboratorio Creativo',
                prompt: '{userInput}',
                illustration: 'default',
                imageTypeHint: 'Tu imaginación es el límite. Puedes subir hasta 3 fotos de referencia.',
                detailedDescription: "Escribe cualquier instrucción textual para guiar a la IA. Recomendamos usar imágenes de referencia claras y descripciones detalladas.",
                requiresAspectRatio: true, 
                allowsSecondImage: true,
                allowsThirdImage: true,
                mediaType: 'image',
                requiresUserInput: true,
                dynamicFields: []
            },
            {
                id: 802,
                key: 'custom-prompt-realism',
                caption: 'Prompt Personalizado',
                subcategory: 'Laboratorio Creativo',
                prompt: `{userInput} [POSE_CONFIG] [OUTFIT_CONFIG] [STYLE_MODIFIERS] [VISUAL_CONFIG] ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'default',
                imageTypeHint: 'Genera fotografía documental pura. Usa los selectores para añadir estilos.',
                detailedDescription: "Genera una fotografía hiperrealista con textura cruda. Usa los selectores para añadir caos, estética vintage o realismo documental.\nRecomendamos usar retratos o escenas complejas que requieran texturas detalladas.",
                requiresAspectRatio: true,
                allowsSecondImage: true,
                allowsThirdImage: true,
                mediaType: 'image',
                requiresUserInput: true,
                dynamicFields: [
                    {
                        type: 'select',
                        key: '[POSE_CONFIG]',
                        label: 'Pose / Acción',
                        options: [
                            { label: 'Sin Pose Específica', value: '', default: true },
                            ...poseOptions
                        ]
                    },
                    {
                        type: 'select',
                        key: '[OUTFIT_CONFIG]',
                        label: 'Vestuario / Estilo',
                        options: [
                            { label: 'Sin Vestuario Específico', value: '', default: true },
                            ...outfitOptions
                        ]
                    },
                    {
                        type: 'toggle-group',
                        key: '[STYLE_MODIFIERS]',
                        label: '', 
                        options: [
                            {
                                label: 'Extra Caos',
                                value: '\n((Wide angle shot)), hyper minimalism, hyperrealism, high detail, octane render, 8k, Giger, realistic, detailed, detailed acrylic, intricate complexity, rendered in unreal engine, photorealistic, inner glow.',
                                default: false,
                                description: 'Añade una complejidad visual extrema, detalles intrincados y una estética inspirada en H.R. Giger con renderizado de alta gama.'
                            },
                            {
                                label: 'Technicolor',
                                value: '\nIMG_7754.JPG, low resolution, technicolor, pull processed, clipped highlights, chromatic aberration, 35mm film, filmic grain, medium format.',
                                default: false,
                                description: 'Emula el proceso de color clásico del cine antiguo, con saturación vibrante, grano fílmico y aberración cromática.'
                            },
                            {
                                label: 'Documental',
                                value: "\nThe image is a hyper-realistic documentary photograph captured with a Sony A7R V and a 35mm prime lens, stopped down to f/11 for a deep depth of field where every element from foreground to background is in tack-sharp, clinical focus. The aesthetic is 'unobserved reality' as if the camera is an invisible witness to a spontaneous moment. Lighting is unmediated and situational, capturing the high-dynamic range of the environment exactly as the human eye perceives it, without artificial bounce or flattering diffusion. Surfaces are rendered with extreme micro-contrast, highlighting the tactile physicality and natural imperfections of materials without 'AI gloss' or plastic smoothing. Human skin subtle asymmetries. The composition is unstructured and asymmetrical, avoiding all 'golden ratio' or cinematic framing. No lens flares, no bokeh, no film grain, no post-processing, and no stylistic filters. The final result should be indistinguishable from a high-resolution RAW file of an actual event.",
                                default: false,
                                description: 'Fotografía documental pura y cruda. Enfoque clínico, sin filtros, capturando la realidad tal cual es, con imperfecciones naturales.'
                            },
                            {
                                label: 'Ethereal Film',
                                value: '\nEthereal high-intensity film aesthetic, Douyin style, dreamy haze, luminous soft focus, extreme bloom, intense halation, aggressive cinematic split-toning, deep teal shadows, warm golden highlights, 35mm analog film, heavy organic grain, vintage Helios 44-2 lens, f/1.4, nostalgic atmosphere.',
                                default: false,
                                description: 'Estética de película etérea con neblina de ensueño, brillo intenso (bloom) y tonos cálidos nostálgicos.'
                            }
                        ]
                    },
                    {
                        type: 'toggle-group',
                        key: '[VISUAL_CONFIG]',
                        label: 'Configuración Visual',
                        options: [
                            ...visualConfigOptions
                        ]
                    }
                ]
            },
            {
                id: 803,
                key: 'fashion-product-campaign',
                caption: 'Campaña de Producto',
                subcategory: 'Moda y Producto',
                prompt: `Low-angle fashion campaign photograph of a confident model holding a large [PRODUCT_NAME] very close to the camera, exaggerated perspective with the hand and product dominating the foreground, full-body pose visible in the background, wide stance, dynamic posture, clean pure white studio background, high-key lighting, sharp focus on product, slight depth of field on the model, bold colorful outfit with strong contrast tones, modern beauty advertising aesthetic, ultra-clean composition, commercial studio photography, glossy packaging detail visible, crisp shadows. The product [PRODUCT_NAME] is based on the provided reference image (IMG2). ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'default',
                imageTypeHint: 'Sube el producto en la SEGUNDA FOTO (IMG2). El modelo sostendrá el producto en primer plano.',
                detailedDescription: "Fotografía publicitaria de alta gama. El modelo sostiene el producto (IMG2) muy cerca de la lente, creando una perspectiva exagerada y dinámica.\nPerfecto para catálogos de moda y campañas de branding con un look moderno y limpio.",
                requiresAspectRatio: true,
                allowsSecondImage: true,
                mediaType: 'image',
                requiresUserInput: false,
                dynamicFields: [
                    {
                        type: 'text',
                        key: '[PRODUCT_NAME]',
                        label: 'Nombre del Producto',
                        defaultValue: 'ART3DLABS',
                        placeholder: 'Ej: Perfume, Reloj, Bolso...'
                    }
                ]
            },
            {
                id: 804,
                key: 'collectible-figurine-expressions',
                caption: 'Figura: Set de Expresiones',
                subcategory: 'Juguetes y Figuras',
                prompt: `Convert to hyper-realistic 3D CGI collectible figurine render. Physically-based rendering, octane render quality. Preserve the original character design, pose, and outfit exactly from the reference image. Transform all surfaces into real-world materials: dense fur or hair simulation with individual strand detail, fabric with visible weave and natural drape, worn leather with creases and subtle sheen, matte synthetic skin, and polished metal with realistic wear and reflections. Pure white studio background, clean seamless white backdrop, soft diffused lighting with subtle rim light highlighting the edges and figure silhouette. No cel shading, no toon rendering. High-end premium statue/collectible photography aesthetic as if shot for a limited-edition release. Ultra detailed, 8K.

Fix and reconstruct all hands and fingers with correct anatomy: natural finger count, proper joint articulation, realistic proportions, no fused or melted digits. Remove all 2D artifacts, compression glitches, and Midjourney inconsistencies. Ensure full anatomical coherence across the entire figure: symmetrical facial features on the main head, clean silhouette, no floating elements, no distorted limbs, no duplicated body parts.

Hyper-detailed material simulation: individual strands of hair or fur with natural length variation, realistic highlights and shadows, dynamic yet posed flow matching the original character. Hyper-realistic eyes with detailed irises, pupils, realistic catchlights, subtle sclera and wet look. All clothing and accessory materials exhibit photorealistic PBR properties: accurate roughness values, specular highlights, fabric stitching, seams, and natural drape physics. Any metallic or leather elements show precise textures, aging, and environmental reflections.

Include the full set of interchangeable expression busts of the character exactly as in the reference: Laughing (mouth wide open, tongue visible), Smug (half-lidded confident eyes), Yawning (mouth stretched open), and Complaining/Plaining (displeased expression), each mounted on matching white display stands with the same outfit details. All busts share the same hyper-detailed material quality and lighting consistency as the main figure.

Full figure and busts coherence with no mesh errors, no clipping, no floating parts, and perfect edge definition. Professional collectible figurine product photography style, centered composition, optimal scale representation, sharp focus throughout with subtle depth-of-field for realism. Octane render with global illumination, physically correct shadows, and material-accurate color response. Masterpiece, ultra-high resolution, best quality, zero artifacts, zero distortions, zero over-smoothing. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'default',
                imageTypeHint: 'Transforma tu personaje en una figura de colección con bustos de expresiones intercambiables.',
                detailedDescription: "Renderizado CGI de alta gama que convierte a tu personaje en una estatua de colección.\nIncluye materiales realistas y un set de bustos con expresiones intercambiables (Risa, Smug, Bostezo, Queja).\nEstética de fotografía de producto premium sobre fondo blanco.",
                requiresAspectRatio: true,
                mediaType: 'image',
                dynamicFields: []
            },
            {
                id: 805,
                key: 'collectible-figurine-premium',
                caption: 'Figura Coleccionable',
                subcategory: 'Juguetes y Figuras',
                prompt: `Convert to hyper-realistic 3D CGI collectible figurine render. Physically-based rendering, octane render quality. Preserve the original character design, pose, and outfit exactly. Transform all surfaces into real-world materials: fabric with visible weave and drape, metal with wear, scratches and oxidation, synthetic matte skin. Pure white studio background, clean seamless white backdrop, soft diffused lighting with subtle rim light. No cel shading, no toon rendering. High-end statue/collectible photography aesthetic. Ultra detailed, 8K. Fix and reconstruct all hands and fingers with correct anatomy: natural finger count, proper joint articulation, realistic proportions, no fused or melted digits. Remove all 2D artifacts, compression glitches, and Midjourney inconsistencies. Ensure full anatomical coherence across the entire figure: symmetrical features, clean silhouette, no floating elements, no distorted limbs, no duplicated body parts. Hyper-detailed hair simulation: individual strands of hair with realistic thickness variation, natural highlights and shadows, dynamic yet posed flow matching the original character, subtle flyaways, and micro-fiber detail visible under studio lighting. Hyper-realistic skin with accurate subsurface scattering, visible pores, fine texture imperfections, and consistent matte synthetic finish. Eyes rendered with detailed irises, pupils, realistic catchlights, subtle sclera veins, and proper refraction depth. All clothing and accessory materials exhibit photorealistic PBR properties: accurate roughness values, specular highlights, fabric stitching, seams, and natural drape physics. Metallic elements show precise oxidation, micro-scratches, and environmental reflections. Full figure coherence with no mesh errors, no clipping, no floating parts, and perfect edge definition. Professional collectible figurine product photography style as if captured for a premium limited-edition release. Centered composition, optimal scale representation, sharp focus throughout, subtle depth-of-field for realism. Octane render with global illumination, physically correct shadows, and material-accurate color response. Masterpiece, ultra-high resolution, best quality, zero artifacts, zero distortions, zero over-smoothing. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'default',
                imageTypeHint: 'Convierte cualquier personaje en una figura de colección hiperrealista con materiales premium.',
                detailedDescription: "Transformación completa a render 3D CGI con calidad de Octane Render.\nMantiene el diseño original pero aplica texturas de materiales reales (tela, metal, piel sintética).\nIdeal para visualizar personajes como estatuas de edición limitada.",
                requiresAspectRatio: true,
                mediaType: 'image',
                dynamicFields: []
            },
            {
                id: 806,
                key: 'custom-grid-2x2',
                caption: 'Grid Creativo 2x2 (Incomplete)',
                subcategory: 'Efectos Multi-Panel',
                prompt: `Generate a single image containing a seamless 2x2 grid (4 panels) based on the user request: {userInput}.

**CRITICAL LAYOUT RULES:**
1. NO BORDERS, NO FRAMES, NO GUTTERS, NO WHITE SPACE.
2. The 4 images must touch each other directly to form a perfect quadrant composition.
3. Fill the entire canvas area.

**CREATIVE CHAOS DIRECTIVE (MANDATORY VARIETY):**
Each of the 4 panels must have a completely DISTINCT **PHOTOGRAPHIC STYLE**. Do NOT maintain consistency.
1. **RANDOMIZE PHOTOGRAPHIC STYLES:** Each panel must look like it was taken with a completely different camera, film stock, lighting setup, or color grading. Choose 4 totally different random photographic aesthetics.
2. **VARY CAMERA ANGLES:** Use different focal lengths (Wide Angle vs Telephoto) and perspectives (High Angle vs Low Angle).
3. **DIFFERENT POSES & ATTITUDES:** The subject must change their pose, expression, and energy in every single panel.

Surprise the user with 4 unique visual experiments in one image.

${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'default',
                imageTypeHint: 'Genera 4 variantes con ESTILOS FOTOGRÁFICOS totalmente distintos y aleatorios.',
                detailedDescription: "Crea una hoja de contacto artística con 4 paneles únicos, cada uno con un estilo fotográfico, iluminación y ángulo diferente.\nRecomendamos usar retratos simples o de cuerpo entero para ver cómo la IA reinterpreta tu imagen en múltiples estéticas.",
                requiresAspectRatio: true,
                allowsSecondImage: true,
                mediaType: 'image',
                requiresUserInput: true,
                supportedAspectRatios: ['1:1', '4:3', '3:4', '16:9'],
                dynamicFields: []
            },
            {
                id: 807,
                key: 'infinite-zoom-out',
                caption: 'Zoom Out (Expansión) (Incomplete)',
                subcategory: 'Funciones IA Especiales',
                prompt: `SYSTEM ROLE: MASTER CINEMATOGRAPHER.
TASK: EXTREME ZOOM OUT / OUTPAINTING SIMULATION.

INPUT ANALYSIS:
Take the subject and immediate surroundings from the uploaded image.

EXECUTION:
1.  **SHRINK THE SUBJECT:** The subject must occupy ONLY 15-20% of the total frame size. Move the camera back significantly (Virtual Drone Shot or Extreme Wide Shot).
2.  **EXPAND CONTEXT:** Hallucinate the rest of the environment. You MUST logically extend the background elements found in the original photo (e.g., if there is a brick wall, show the whole building; if there is sand, show the whole beach).
3.  **COHERENCE:** The lighting direction and color temperature of the new wide environment must perfectly match the original small crop.
4.  **QUALITY:** The new surroundings must be highly detailed, not blurry.

RESULT: A coherent wide-angle scene where the original photo fits naturally in the center but is revealed to be part of a much larger world. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'restore',
                imageTypeHint: 'Aleja la cámara drásticamente revelando el mundo alrededor.',
                detailedDescription: "Aleja la cámara drásticamente para revelar el entorno completo alrededor de tu foto original. El resultado es un plano general épico.\nRecomendamos fotos donde el sujeto ocupe mucho espacio y quieras ver el paisaje imaginado a su alrededor.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['16:9', '9:16', '1:1', '4:3'],
            },
            {
                id: 808,
                key: 'upscale-refine',
                caption: 'Refinar (Anti-Plástico) (Incomplete)',
                subcategory: 'Funciones IA Especiales',
                prompt: `SYSTEM ROLE: HIGH-END RETOUCHER & TEXTURE ARTIST.
TASK: DE-PLASTICIZE & ADD RAW REALISM.

The input image has "AI smoothness". Your job is to remove it and add ORGANIC IMPERFECTIONS.

**MANDATORY TEXTURE INJECTIONS:**
1.  **SKIN:** Add visible pores, micro-wrinkles, slight unevenness in skin tone, and "peach fuzz" (vellus hair) on the cheeks/jawline. Skin must look like biological tissue, not silicone.
2.  **EYES:** Sharpen the iris patterns. Add moisture/reflections to the eyes.
3.  **HAIR:** Define individual stray hairs (flyaways). No solid blocks of hair.
4.  **LIGHTING:** Increase micro-contrast (local contrast) to define edges and depth. Remove the "glowy" soft filter look.

**STYLE:**
8K RAW Photography from a Phase One camera. Sharp, gritty, detailed, authentic. 
NO AIRBRUSHING. NO BEAUTY FILTERS.

${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'restore',
                imageTypeHint: 'Elimina el "look IA", agrega poros, textura real y nitidez extrema.',
                detailedDescription: "Añade textura de piel real, poros e imperfecciones para eliminar el efecto 'plástico' de las imágenes generadas por IA. El resultado es una foto orgánica y nítida.\nIdeal para mejorar rostros generados previamente que se ven demasiado suaves o artificiales.",
                mediaType: 'image',
                requiresAspectRatio: true,
            }
        ]
    },
    'figurines-and-cinema': {
        title: 'Figuritas y Drama',
        description: 'Figuras de papel, chibi, y luces de cine.',
        images: [
            {
                id: 810,
                key: 'paper-craft-figurine',
                caption: 'Figura de Papel 3D',
                subcategory: 'Juguetes y Figuras',
                prompt: `Transform this image [Upload Your Image] into a highly detailed 3D paper craft figurine of the same person, designed in a stylized origami / low-poly paper art style. The character should have sharp folded paper edges, geometric features, and a handcrafted look.
The figure is standing upright on a cutting mat workbench, surrounded by crafting tools like precision knives, scissors, paper scraps, and glue bottles. A hand is gently holding the figure while another hand applies a drop of glue on the head, adding realism and depth.
Outfit should be modern and vibrant (red jacket, white shirt, teal pants, matching sneakers), with colored hair and beard matching the artistic theme. Include stylish sunglasses for a cool, designer toy aesthetic.
Lighting should be warm and soft with a shallow depth of field, creating a cozy studio environment. Ultra-detailed textures, DSLR quality, 8K resolution, sharp focus on the figure, blurred background bokeh. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'default',
                imageTypeHint: 'Transforma la imagen en una figura de papel 3D estilizada.',
                detailedDescription: "Transforma a la persona en una figura coleccionable de papel 3D con estilo origami/low-poly, rodeada de herramientas de manualidades en un entorno de estudio acogedor.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['1:1', '3:4', '9:16'],
                requiresUserInput: false,
                dynamicFields: []
            },
            {
                id: 811,
                key: 'mini-chibi-figurine',
                caption: 'Mini Chibi en la Palma',
                subcategory: 'Juguetes y Figuras',
                prompt: `generate a mini chibi version of the character from the uploaded image. The character should have a large head and small body, sitting on an open left palm for realistic scale. A right hand gently presses its cheek with the index finger. The expression should be annoyed and pouty—puffed cheeks, slight frown, and squinting eyes.
Style it in ultra-detailed chibi form with soft pastel colors, smooth textures, clean lighting, and a shallow depth of field. Maintain strong focus on the facial expression and hand interaction. Use a vertical composition with a 4:5 aspect ratio. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'default',
                imageTypeHint: 'Genera una versión mini chibi del personaje en la palma de la mano.',
                detailedDescription: "Genera una versión mini chibi del personaje con una expresión molesta y pucheros, sentado en la palma de una mano.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['4:5'],
                requiresUserInput: false,
                dynamicFields: []
            },
            {
                id: 812,
                key: 'cinematic-hollywood-spotlight',
                caption: 'Cine Hollywood: Foco Dramático',
                subcategory: 'Estilos Artísticos',
                prompt: `Create a highly cinematic Hollywood-style photo of a person using the face from the uploaded image. The person is standing alone in a completely dark environment, inside a perfect circle of bright white light on the ground, as if a spotlight from above is isolating them. Everything outside the circle fades into deep darkness. The camera angle is slightly low and centered, making the person look powerful and dramatic. The person stands still with a calm, confident posture, looking slightly upward. They are wearing a stylish modern outfit such as a long coat or jacket, fitted pants, and boots. Light rays from above are visible through subtle fog, creating a dramatic atmosphere. Strong contrast between light and shadow, cinematic lighting, soft haze, ultra realistic photography, epic movie-scene composition, Hollywood style. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'default',
                imageTypeHint: 'Genera una foto cinematográfica estilo Hollywood con un foco dramático.',
                detailedDescription: "Crea una foto cinematográfica estilo Hollywood donde la persona está aislada por un foco de luz en un entorno oscuro, creando un ambiente dramático y poderoso.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['9:16', '3:4', '4:5', '16:9'],
                requiresUserInput: false,
                dynamicFields: []
            },
        ]
    },
    'style-module': {
        title: 'Estilo',
        description: 'Varios estilos de imagen.',
        images: [
            {
                id: 813,
                key: 'style-thief-v2',
                caption: 'Ladrón de Estilos (Agresivo) (Incomplete)',
                subcategory: 'Funciones IA Especiales',
                prompt: `SYSTEM ROLE: AGGRESSIVE VISUAL SYNTHESIZER.

**INPUTS:**
- **REFERENCE 1 (IDENTITY):** The Subject.
- **REFERENCE 2 (STYLE DNA):** The Visual Engine (Lighting, Colors, Texture, Brushstrokes, Vibe).

**MISSION:**
You must perform a TOTAL VISUAL OVERHAUL of Image 1.
1.  **IGNORE** the lighting, background, and rendering style of Image 1 completely.
2.  **EXTRACT** the "Visual DNA" of Image 2. Is it Neon Cyberpunk? Is it Oil Painting? Is it B&W Film Noir? Is it 3D Pixar?
3.  **INJECT** that exact DNA into Image 1.
    - If Image 2 is a sketch, Image 1 MUST become a sketch.
    - If Image 2 has green lighting, Image 1 MUST have green lighting.
    - If Image 2 is blurry/abstract, Image 1 MUST become blurry/abstract.

**PRIORITY:**
STYLE MATCH > IDENTITY MATCH. The style of Image 2 dictates the universe. The subject from Image 1 just lives in it.

${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'try-on',
                imageTypeHint: 'Foto 1: Tu cara. Foto 2: El estilo a copiar (Copia agresiva de iluminación y arte).',
                detailedDescription: "Clona agresivamente la estética visual (iluminación, colores, pinceladas) de una segunda imagen sobre tu foto original. El resultado es una fusión total de estilo.\nRecomendamos usar una imagen de referencia con un estilo artístico muy marcado (ej. Cyberpunk, Óleo, Sketch).",
                requiresSecondImage: true,
                mediaType: 'image',
                requiresAspectRatio: true,
            },
            {
                id: 814,
                key: 'storyboard-generator',
                caption: 'Grid de Acción 2x2 (Incomplete)',
                subcategory: 'Efectos Multi-Panel',
                prompt: `Generate a **2x2 PHOTOGRAPHIC CONTACT SHEET** (4 distinct panels in one image).

**SUBJECT:**
The person from the reference photo. STRICT IDENTITY LOCK across all 4 panels. Same outfit, same face.

**LAYOUT & CONTENT (VARIETY IS MANDATORY):**
Create 4 completely different camera angles/poses to show versatility:
*   **Panel 1 (Top Left):** Extreme Close-up (Emotion/Face focus).
*   **Panel 2 (Top Right):** Full Body Action Shot (Walking, Jumping, or posing dynamically).
*   **Panel 3 (Bottom Left):** Candid Side Profile (Looking away, "caught off guard").
*   **Panel 4 (Bottom Right):** Low Angle / Power Pose (Dramatic perspective).

**AESTHETIC:**
Coherent lighting and color grading across all 4 panels (Cinematic Film Look). High consistency.
NO text bubbles. NO comic frames. Just 4 raw photographic moments arranged in a grid.

${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'video',
                imageTypeHint: 'Crea 4 fotos nuevas (Grid 2x2) con poses y ángulos variados.',
                detailedDescription: "Genera una hoja de contacto cinematográfica con 4 ángulos distintos (primer plano, cuerpo entero, perfil, acción). El resultado cuenta una mini-historia visual.\nIdeal para visualizar un personaje en movimiento o crear contenido dinámico para redes sociales.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['1:1', '4:3', '3:4'],
            },
            {
                id: 815,
                key: 'illustration-to-realism-v3',
                caption: 'Ilustración a Realismo V3 (Incomplete)',
                subcategory: 'IA Generativa Avanzada',
                prompt: `ROLE: Hollywood Visual Effects Supervisor & Principal Photographer.
TASK: Treat the input image as "Concept Art". Your job is to shoot the FINAL LIVE-ACTION MOVIE SCENE based on this concept.

**CRITICAL REALISM PROTOCOLS:**
1.  **BANISH ILLUSTRATION:** The output must contain ZERO traces of the original drawing style. No outlines, no cell shading, no digital smoothness.
2.  **PHYSICALITY:** Everything must look built and worn. Clothes must have weight, wrinkles, and fabric weave. Metal must have scratches and oxidation.
3.  **BIOLOGICAL REALISM:** The subject is a HUMAN ACTOR. Skin must have pores, slight unevenness, natural oils (subsurface scattering), and vellus hair. Eyes must have moisture and complex iris patterns.

**CASTING & SUBJECT:**
The image features [SUBJECT_TYPE].
**ETHNICITY/RACE:** Infer the ethnicity strictly from the drawing's features and colors. Do not default to generic looks; honor the character's design.

**VISUAL AESTHETIC:**
Apply a **"Hollywood A-List / High-Budget Cinema" aesthetic**.
[STYLE_CONTEXT]

**BODY TRANSFORMATION:**
[BODY_DESC]

**FACE GENERATION:**
The subject must have a completely NEW, photorealistic human face based on the drawing's structure. Do NOT texture-map the drawn face.

**WARDROBE & LIGHTING:**
[WARDROBE_BLOCK]
[LIGHTING_BLOCK]

Reference Usage: Use the attached image STRICTLY for pose, composition, and costume design. IGNORE the art style.

[USER_PROMPT]`,
                illustration: 'default',
                imageTypeHint: 'Convierte dibujos en fotos de cine o cosplay.',
                detailedDescription: "Transforma bocetos, dibujos o anime en fotografías de cine de acción real ultra-realistas. El resultado parece un fotograma de una película de alto presupuesto.\nSube cualquier dibujo o ilustración; funciona mejor si la figura humana está claramente definida.",
                mediaType: 'image',
                requiresAspectRatio: false,
                dynamicFields: [
                    {
                        type: 'text',
                        key: '[USER_PROMPT]',
                        label: 'Detalles Adicionales',
                        defaultValue: 'Cinematic lighting, high detail',
                        isOptional: true
                    },
                    {
                        type: 'select',
                        key: 'gender_selector',
                        label: 'Sujeto / Casting',
                        options: [
                            { label: 'Femenino', values: { '[SUBJECT_TYPE]': 'a stunning female actor' } },
                            { label: 'Masculino', values: { '[SUBJECT_TYPE]': 'a handsome male actor' } },
                            { label: 'Andrógino', values: { '[SUBJECT_TYPE]': 'a striking androgynous fashion model' } },
                            { label: 'Grupo / Elenco', values: { '[SUBJECT_TYPE]': 'a cast of actors (group shot)' } },
                        ]
                    },
                    {
                        type: 'select',
                        key: 'body_type',
                        label: 'Tipo de Cuerpo',
                        options: [
                            { label: 'Fiel a la Referencia', values: { '[BODY_DESC]': 'Strictly replicate the body proportions and physique EXACTLY as shown in the reference image.' } },
                            { label: 'Atlético / Musculoso', values: { '[BODY_DESC]': 'OVERRIDE the reference build. The subject MUST appear defined, toned, and athletic. Adjust the outfit fit to show this muscular physique.' } },
                            { label: 'Delgado / Esbelto', values: { '[BODY_DESC]': 'OVERRIDE the reference build. The subject MUST appear very slender and fashion-model thin. Adjust the outfit fit to be looser if necessary.' } },
                            { label: 'Curvy / Voluptuoso', values: { '[BODY_DESC]': 'OVERRIDE the reference build. The subject MUST appear curvy and voluptuous with an hourglass figure. Adjust the outfit fit to hug curves.' } },
                        ]
                    },
                    {
                        type: 'select',
                        key: 'detail_level',
                        label: 'Nivel de Detalle / Estilo',
                        options: [
                            { 
                                label: 'Cine (Blockbuster)', 
                                values: { 
                                    '[STYLE_CONTEXT]': 'OFFICIAL MOVIE STILL from a $200M Blockbuster. The image must look like a raw, unretouched frame from an Arri Alexa 65. Focus on gritty realism and high-fidelity textures.',
                                    '[WARDROBE_BLOCK]': 'Wardrobe Translation: COSTUME DEPARTMENT. Create authentic, functional movie wardrobe. Translate drawn elements into real-world materials: "armor" becomes heavy machined steel with scratches; "cloth" becomes coarse woven linen, heavy wool, or worn leather. Visible stitching, dirt, and wear-and-tear are mandatory.',
                                    '[LIGHTING_BLOCK]': 'Cinematography: Dramatic, high-contrast lighting (Rembrandt or Split). Use Anamorphic lenses to create a shallow depth of field and separation from the background. Add subtle film grain (ISO 800) and optical lens imperfections (chromatic aberration at edges) to force the photographic look.'
                                } 
                            },
                            { 
                                label: 'Cosplay (Amateur)', 
                                values: { 
                                    '[STYLE_CONTEXT]': 'This is a high-quality cosplay photograph taken at a convention or home studio.',
                                    '[WARDROBE_BLOCK]': 'Wardrobe Translation: Create an authentic, hand-crafted cosplay look. Materials should look like high-quality EVA foam for armor, thermoplastics, and sewn fabrics typical of top-tier cosplay. It should look impressive but clearly handmade.',
                                    '[LIGHTING_BLOCK]': 'Lighting & Atmosphere: Natural convention center lighting or a high-quality home studio setup with a ring light. Shot on a Canon EOS DSLR, 50mm lens. The final image should look like a viral cosplay photo shared on social media.'
                                } 
                            },
                        ]
                    }
                ]
            },
            {
                id: 816,
                key: 'pose-transfer-precision-nb2',
                caption: 'Transferencia de Pose NB2 (Incomplete)',
                subcategory: 'IA Generativa Avanzada',
                prompt: `Make the person in image 1 do the exact same pose of the person in image 2. Changing the style and background of the image of the person in image 1 is undesirable, so don't do it. The new pose should be pixel accurate to the pose we are trying to copy. The position of the arms and head and legs should be the same as the pose we are trying to copy. Change the field of view and angle to match exactly image 2. Head tilt and eye gaze pose should match the person in image 2.`,
                illustration: 'try-on',
                imageTypeHint: 'Nano 🍌 2: Foto 1: Tú. Foto 2: Pose deseada. Clona la postura con precisión quirúrgica.',
                detailedDescription: "Copia la postura corporal exacta de una imagen de referencia y la aplica a tu foto. El resultado mantiene tu estilo e identidad, pero con la nueva pose.\nSube una foto tuya clara y una segunda foto con la pose exacta que quieres imitar.",
                mediaType: 'image',
                requiresSecondImage: true,
                requiresAspectRatio: true,
                supportedAspectRatios: ['1:1', '4:5', '9:16', '16:9', '4:3', '3:4'],
            },
            {
                id: 817,
                key: 'aesthetic-pose-clone-nb2',
                caption: 'Clonación de Estética y Pose NB2 (Incomplete)',
                subcategory: 'IA Generativa Avanzada',
                prompt: `SYSTEM ROLE: SURGICAL VISUAL ANALYST & MASTER GENERATIVE PHOTOGRAPHER.

**OBJECTIVE:**
Execute a surgical aesthetic and mechanical synthesis. Replicate the EXACT vibe, movement physics, and atmosphere of IMAGE 2 for the subject in IMAGE 1.

**MISSION STEPS:**
1. **FORENSIC SCAN (IMAGE 2):** Detect "temporal artifacts" (shutter drag, motion blur), "optical flaws" (chromatic aberration, halation like Cinestill 800T), "biomechanical tension" (hair reacting to movement, hand grip physics), and "industrial context" (mirror reflections, pipes, atmospheric depth).
2. **SYNTHESIS:** Redraw IMAGE 1's subject with 100% identity preservation into IMAGE 2's specific cinematic frame.

**OUTPUT PROTOCOL (MANDATORY):**
- **PART 1 (CANVAS):** Generate the visual image immediately.
- **PART 2 (TEXT):** Output the following JSON block containing the surgical analysis and generation blueprint. DO NOT mention "IMAGE 1" or "IMAGE 2" inside the JSON fields; rewrite them as visual instructions.

\`\`\`json
{
  "temporal_plain_text_analysis": "Describe the aesthetic DNA. Mention the fleeting moment, hair movement, shutter drag, and cinematic textures (e.g. ethereal, moody, anonymous).",
  "filled_nb2_portrait_template": {
    "generation_request": {
      "meta_data": { "tool": "NanoBanana", "task": "Surgical Aesthetic Clone" },
      "output_settings": { "layout": { "type": "single_cinematic_frame" }, "aspect_ratio": "{aspectRatio}", "render_style": "midjourney_stylized_photorealism" },
      "creative_prompt": {
        "scene_summary": "Rich description focusing on motion blur, halation, and the specific atmosphere detected.",
        "subject": { "identity_rule": "STRICT_IDENTITY_LOCK", "expression": "Hidden or enigmatic as per ref", "posture": "Literal biomechanical stance mid-movement" },
        "wardrobe": { "outfit": "Detailed garments and textures from reference", "accessories": "Specific details like jewelry with light streaks" },
        "environment": { "location": "Detailed setting description", "background": "Softened industrial or natural backdrop with optical depth" },
        "lighting_and_camera": { "lighting": "Cinestill 800T aesthetic, halation around lights, specific color temperature", "camera": "Technical specs (chromatic aberration, 35mm film grain, shutter drag, erratic focus)" }
      }
    }
  }
}
\`\`\`

${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'restore',
                imageTypeHint: 'Nano 🍌 2: Clona con precisión estética (Análisis + JSON) la ropa, pose y atmósfera de la foto 2.',
                detailedDescription: "Realiza una clonación forense de la atmósfera, iluminación, ropa y pose de una referencia. El resultado es una réplica exacta del 'vibe' de la segunda foto con tu cara.\nRecomendado para recrear fotos estéticas de Pinterest o cine con máxima fidelidad.",
                requiresSecondImage: true,
                mediaType: 'image',
                requiresAspectRatio: true,
            },
            {
                id: 818,
                key: 'cosplay-synthesis-nb2-favorites',
                caption: 'Síntesis de Cosplay de Élite (NB2) (Incomplete)',
                subcategory: 'IA Generativa Avanzada',
                prompt: `SYSTEM ROLE: EXPERT COSPLAY PHOTOGRAPHER & VISUAL SYNTHESIZER.

TASK: Create a high-quality, photorealistic cosplay portrait by blending TWO reference images.

REFERENCE 1 (IDENTITY & ANATOMY):
- USE THIS IMAGE AS THE EXCLUSIVE SOURCE FOR:
  - Facial features, skin texture, and natural identity.
  - Body type, physique, and gender.
  - DO NOT alter the subject's identity, gender, or body structure.

REFERENCE 2 (COSTUME & POSE):
- USE THIS IMAGE AS THE EXCLUSIVE SOURCE FOR:
  - Costume design, fabric textures, and accessories.
  - Pose, body orientation, and composition.
  - Hairstyle shape (adapted to the subject's hair).

EXECUTION RULES:
1. STRICT IDENTITY PRESERVATION: The person in the final portrait MUST be the person from REFERENCE 1.
2. FAITHFUL COSTUME REPLICATION: The costume MUST be a direct, high-fidelity translation of the outfit from REFERENCE 2 into real-world materials (e.g., fabric, leather, metal).
3. PHOTOREALISM: The final output must be a professional-grade cosplay photograph. No illustration, no anime style.
4. LIGHTING & COMPOSITION: Use cinematic lighting that fits the costume's aesthetic. Maintain the pose from REFERENCE 2.

QUALITY:
- Ultra-detailed, 8K, professional photography.
- Realistic skin pores, lifelike hair, premium fabric rendering.
- Aspect ratio: {aspectRatio}.

${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'try-on',
                imageTypeHint: 'Foto 1: Tu rostro/cuerpo. Foto 2: El traje y la pose. (Mantiene tu identidad y replica fielmente el traje).',
                detailedDescription: "Convierte cualquier personaje en un cosplay ultra-realista protagonizado por ti. El efecto utiliza tu rostro y cuerpo de la primera foto y replica fielmente el traje y la pose de la segunda imagen de referencia.",
                mediaType: 'image',
                requiresSecondImage: true,
                requiresAspectRatio: true,
                supportedAspectRatios: ['4:5', '9:16', '1:1', '3:4', '2:3'],
            },
            {
                id: 819,
                key: 'general-character-design-sheet',
                caption: 'Hoja de Diseño de Personaje',
                subcategory: 'Character Design Sheets',
                prompt: `Generate a character design sheet based on the following specifications:

\`\`\`yaml
general_character_design_sheet:
  style:
    # Define the base visual style.
    base_art_style: "[STYLE_OVERRIDE]"
    quality: "[QUALITY_OVERRIDE]"
    background: "Pure white background for a clean, professional layout."

  character_definition:
    # Define the character identity.
    core_identity: "The specific character depicted in the provided reference image."
    feature_preservation: "Maintain all core visual features (clothing, accessories, hair, specific equipment details, and character-specific traits) consistently across all panels."

  layout:
    sections:
      - id: "multi_view_reference"
        title_label: "Multi-View Reference"
        panel_layout: "Panel containing multiple views with English text labels."
        views:
          - view: "Front View"
            description: "Full-body front view of the character, as depicted in the reference image."
          - view: "Side View"
            description: "Profile view showing side details, accessories, and any side-mounted weapons/gear."
          - view: "Back View"
            description: "Rear view showing the details of the back armor, clothing patterns, backpacks, capes, or tail (if applicable)."
          - view: "Three-Quarter View"
            description: "A three-quarter front view showing details from both the front and side."
          - view: "View from Above"
            description: "Top-down view focusing on the head, hair structure, shoulders, and headwear."
          - view: "View from Below"
            description: "Low-angle view looking up from the feet, detailing the soles of footwear and underside of armor/clothing."

      - id: "expression_sheet"
        title_label: "Expression Sheet"
        panel_layout: "4 close-up heads (bust-ups) with specific expressions and labels."
        # Expressions can be arranged according to the character.
        expressions:
          - expression: "Happy"
            description: "Cheerful expression, appropriate to the character's personality."
          - expression: "Sad"
            description: "Distressed or melancholic expression, perhaps with a single tear."
          - expression: "Angry"
            description: "Firm expression, scowling."
          - expression: "Surprised"
            description: "Wide-eyed and open-mouthed expression."

      - id: "full_body_standing"
        title_label: "Full Body Standing"
        panel_layout: "A larger, detailed full-body figure on the right side."
        description: "A comprehensive, high-detail version of the character, showcasing the complete design and all equipment."

  constraints:
    - "Consistent character identity across all views and panels."
    - "English text labels must be precisely positioned and accurate."
    - "Any equipment or details not fully visible in the reference image (e.g., the exact back design) must be logically extrapolated and designed in the same style, integrating with the existing design elements."
    - "[EXTRA_CONSTRAINTS]"
\`\`\`

\${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'default',
                imageTypeHint: 'Genera una hoja de diseño de personaje (vistas múltiples y expresiones).',
                detailedDescription: "Genera una hoja de diseño de personaje completa con múltiples vistas (frente, perfil, espalda, etc.) y expresiones faciales, manteniendo la identidad de tu imagen original.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['16:9', '4:3', '3:2', '1:1'],
                dynamicFields: [
                    {
                        type: 'select',
                        key: 'style_override',
                        label: 'Estilo Visual',
                        options: [
                            {
                                label: 'Fotografía Detallada (Realista)',
                                values: {
                                    '[STYLE_OVERRIDE]': 'Live-action photography, cinematic lighting, shot on 35mm lens, photorealistic textures, raw realism. Ignore any illustration style from the reference.',
                                    '[QUALITY_OVERRIDE]': 'Hyper-realistic photograph, 8k resolution, highly detailed skin and fabric textures, realistic lighting and shadows. ZERO illustration or drawing elements.',
                                    '[EXTRA_CONSTRAINTS]': 'ABSOLUTELY NO ILLUSTRATION, NO ANIME, NO DRAWING. The output MUST be a live-action photographic composition. The character must look like a real human actor in a physical costume.'
                                }
                            },
                            {
                                label: 'Ilustración Original',
                                values: {
                                    '[STYLE_OVERRIDE]': 'Based on the unique art style, coloring technique, and proportions found in the provided reference image.',
                                    '[QUALITY_OVERRIDE]': 'Clean, precise line work with accurate colors.',
                                    '[EXTRA_CONSTRAINTS]': 'Maintain the 2D illustration or anime style of the reference image.'
                                }
                            }
                        ]
                    }
                ]
            },
            {
                id: 820,
                key: 'subway-candid-profile',
                caption: 'Atrapada en el Metro (Incomplete)',
                subcategory: 'Momentos Candid (Espontáneo)',
                prompt: `Generate a photorealistic image based on the following JSON specification. 
CRITICAL REQUIREMENT: Both the main subject standing in the train AND the person shown in the photos on the foreground phone screen MUST be the exact same person from the provided reference image.

\`\`\`json
{
  "subject": {
    "description": "A young, elegant woman standing on a subway train, candidly looking down at her phone, unaware she is being photographed by an observer. THE WOMAN MUST LOOK EXACTLY LIKE THE PROVIDED REFERENCE IMAGE.",
    "mirror_rules": "Not a mirror selfie. Third-person candid perspective.",
    "age": "early 20s",
    "expression": {
      "eyes": {
        "look": "downward",
        "energy": "focused, calm, slightly fatigued from commuting",
        "direction": "looking at the smartphone in her own hands"
      },
      "mouth": {
        "position": "closed naturally",
        "energy": "relaxed, neutral, undefended"
      },
      "overall": "serene, deeply immersed in her own world amidst the crowded transit."
    },
    "face": {
      "preserve_original": true,
      "makeup": "subtle daily makeup, soft matte foundation, delicate earth-tone eyeshadow, muted coral lips"
    },
    "hair": {
      "color": "dark brown",
      "style": "casual low bun/updo, parted in the middle with a few loose, slightly messy strands framing her cheeks",
      "effect": "natural, practical for commuting but effortlessly stylish"
    },
    "body": {
      "frame": "slender, well-defined elegant collarbones",
      "waist": "partially hidden by clothing folds and tote bag",
      "chest": "covered by the thick sweater",
      "legs": "hidden out of frame",
      "skin": {
        "visible_areas": "shoulders, neck, collarbone, face, hands",
        "tone": "fair, cool-toned skin",
        "texture": "feels powdery, soft, and naturally matte to the touch",
        "lighting_effect": "physical overhead fluorescent light bouncing off her collarbones, creating soft, realistic highlights and subtle neck shadows"
      }
    },
    "pose": {
      "position": "standing, torso slightly tilted forward, arms bent",
      "base": "waist-up visible",
      "overall": "natural transit posture, holding her phone with both hands close to her chest"
    },
    "clothing": {
      "top": {
        "type": "off-the-shoulder ribbed knit sweater",
        "color": "cream, off-white",
        "details": "wide fold-over collar exposing shoulders, thick vertical ribbed texture, long sleeves pulled down to wrists",
        "effect": "cozy yet subtly alluring, contrasting with the public setting"
      },
      "bottom": {
        "type": "denim jeans",
        "color": "faded vintage blue",
        "details": "visible silver metal button at the waist, casual fit"
      }
    }
  },
  "accessories": {
    "device": "A smartphone held in the subject's hands.",
    "prop": "A FOREGROUND smartphone held by an observer's hand in the bottom left corner, directly facing the camera lens. The screen of this foreground phone is clearly displaying the main subject's Twitter profile page, featuring a grid of her sexy, alluring posts and photos. CRITICAL: THE PERSON IN THE PHOTOS ON THE FOREGROUND PHONE SCREEN MUST BE THE EXACT SAME PERSON FROM THE REFERENCE IMAGE.",
    "bag": "A canvas tote bag with navy blue straps hanging over her shoulder."
  },
  "photography": {
    "camera_style": "smartphone candid snapshot, subtle voyeuristic street photography style",
    "angle": "chest-level shot of the observer, slightly tilted, off-center framing",
    "shot_type": "medium shot, waist-up for the subject, extreme close-up for the foreground phone",
    "aspect_ratio": "9:16",
    "texture": "realistic mobile sensor noise, slightly grainy, accidental imperfections",
    "lighting": "harsh yet diffused overhead public transit lighting, mixed color temperature",
    "depth_of_field": "deep enough to show the subject clearly while keeping the foreground phone screen readable, background passengers slightly blurred but contextually identifiable"
  },
  "background": {
    "setting": "interior of a moving subway train carriage",
    "wall_color": "metallic silver and off-white",
    "elements": [
      "metal grab handles",
      "overhead luggage racks",
      "advertisement posters on the walls",
      "other passengers standing and sitting, wearing face masks and office attire",
      "train windows"
    ],
    "atmosphere": "banal, crowded yet socially isolated, typical urban commute",
    "lighting": "bright, even, cool-toned fluorescent tubes lining the train ceiling"
  },
  "the_vibe": {
    "energy": "a tense juxtaposition between quiet reality and digital exhibitionism",
    "mood": "intriguing, slightly intrusive, capturing a fleeting urban coincidence",
    "aesthetic": "Tokyo slice-of-life meets internet culture",
    "authenticity": "feels 100% like a leaked candid photo on social media, complete with awkward framing and foreground interference",
    "story": "The photographer was standing on the train and suddenly realized the quiet, elegant girl standing right in front of them is actually the famous sexy Twitter model they follow, holding up their phone to capture the surreal 'online vs reality' contrast.",
    "caption_energy": "Wait... isn't this her? Spotted in the wild."
  },
  "constraints": {
    "must_keep": [
      "the foreground phone displaying a sexy Twitter profile OF THE EXACT SAME PERSON",
      "off-the-shoulder cream sweater",
      "subway interior background",
      "subject's unaware, candid expression"
    ],
    "avoid": [
      "subject looking at the camera",
      "studio lighting",
      "empty background",
      "perfectly symmetrical composition",
      "blurry foreground screen"
    ]
  },
  "negative_prompt": [
    "looking at viewer",
    "eye contact",
    "studio lighting",
    "empty train",
    "3d render",
    "professional photoshoot",
    "blurry screen"
  ]
}
\`\`\`

\${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'default',
                imageTypeHint: 'Genera una foto tuya en el metro mientras alguien te graba viendo tu perfil en su celular.',
                detailedDescription: "Crea una escena urbana y casual donde apareces en el metro, mientras en primer plano alguien sostiene un celular mostrando tu perfil de redes sociales. ¡Tanto tú como las fotos del celular mantendrán tu identidad!",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['9:16', '3:4', '4:5'],
            },
            {
                id: 821,
                key: 'anime-to-realistic-nb2',
                caption: 'Convert anime characters into realistic human portraits NB2 (Incomplete)',
                prompt: `Convert character into a photorealistic live-action portrait / fashion editorial photograph, modern cinematic style, high-fashion grade, punchy but natural contrast, refined filmic color science, subtle halation and lens bloom, controlled highlights, soft roll-off, realistic skin pores and texture, lifelike hair strands, premium fabric/material rendering, studio-quality lighting with natural depth, preserve the original camera framing and composition exactly, no text, no logo. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'default',
                imageTypeHint: 'Convierte el personaje en un retrato humano fotorrealista.',
                detailedDescription: "Transforma el personaje en un retrato cinematográfico de alta moda, con texturas realistas y estilo editorial.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['9:16', '3:4', '4:5', '1:1'],
            },
            {
                id: 822,
                key: 'pvc-figure-packaging',
                caption: 'Figura PVC en Empaque (Incomplete)',
                prompt: `(masterpiece, best quality, product photography, full shot, wide view),
(Complete view of a sealed full body articulated PVC figure in its plastic blister packaging), hanging on a metal retail hook on a store shelf.
(The figure inside is an exact replica of the character in the image: 1.5)
(The hair color, eye color, and costume details must be exactly the same as the character in the image: 1.5)
(Figure face must not be distorted, maintain original cuteness:1.4).

(Packaging Details):
The packaging cardboard art is fully visible, showing the character illustration.
The main text on the packaging is in JAPANESE.
Product Name: 「[CHARACTER_NAME]」.
Other text: "完全再現フィギュア", "究極の造形".
Smaller English sub-text: "Collector's Edition", "PVC Statue".
All branding and logos must be FICTIONAL. NO real-world corporate logos.

(Environment):
A well-lit toy store aisle, other blurred product packages on surrounding shelves, realistic store lighting reflections on the plastic.

(Technical Tags): (realistic textures:1.3), (plastic material:1.4), depth of field, sharp focus on packaging, Japanese text.
(Negative prompt): (macro lens, close up:1.2), (altering character features:1.5), (changing hairstyle:1.5), (changing hair color:1.5), (changing outfit:1.5), (cosplay of existing character:1.4), (real world brand logos:1.5), (copyrighted logos:1.5), (corporate logos:1.5), (Nike logo:1.5), (Disney characters:1.5), (distorted face:1.5), bad anatomy, cropped, partially visible, (figure face distorted:1.5). ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'default',
                imageTypeHint: 'Genera una figura PVC sellada en su empaque de tienda.',
                detailedDescription: "Transforma al personaje en una figura coleccionable de PVC sellada dentro de su empaque blister, exhibida en una estantería de tienda.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['1:1', '3:4', '9:16'],
                dynamicFields: [
                    {
                        type: 'text',
                        key: '[CHARACTER_NAME]',
                        label: 'Nombre del Personaje',
                        placeholder: 'Character Name',
                        isOptional: true
                    }
                ]
            },
            {
                id: 823,
                key: 'high-end-portrait-enhancement',
                caption: 'Mejora de Retrato de Alta Gama (Incomplete)',
                prompt: `(masterpiece, best quality, high-end beauty photography),
(Enhance and improve image quality while maintaining precise composition and color),
(Remove blur, make skin present a realistic and delicate texture: clear pores, delicate lines, and natural light and shadow transitions),
(Preserve light tones and background),
(Optimize edge sharpness around eyes, eyelashes, lips, and hair),
(High-end beauty photography texture, natural and unforced skin effect),
(Cinematic lighting, sharp focus, professional retouching).
(Negative prompt): (blur, low quality, plastic skin, airbrushed, beauty filter, distorted features, bad anatomy, over-smoothed, artificial lighting, cartoonish). ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'restore',
                imageTypeHint: 'Mejora la calidad de retratos, añade textura de piel realista y nitidez profesional.',
                detailedDescription: "Mejora la calidad de tus retratos eliminando el desenfoque y añadiendo una textura de piel realista con poros definidos, nitidez en ojos y labios, y un acabado profesional de fotografía de belleza.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['1:1', '3:4', '9:16', '4:5'],
            },
            {
                id: 824,
                key: 'beauty-selfie-grid-12panel',
                caption: 'Grid de 12 Selfies (Incomplete)',
                prompt: `{"generation_request": {"meta_data": {"tool": "NanoBanana", "task_type": "beauty_selfie_variation_grid_12panel", "language": "en", "priority": "highest", "version": "v1.0_MULTI_LOOK_SELFIE_GRID"}, "input": {"mode": "text_to_image", "notes": "Create a 4x3 beauty selfie variation grid featuring the same adult woman across twelve panels. THIS IS A MANDATORY 4x3 GRID LAYOUT: 4 ROWS AND 3 COLUMNS. NO OTHER LAYOUT IS ACCEPTABLE. Each panel should feel like a casual but photoreal phone selfie, with natural indoor light and strong facial consistency. The key variation should come from different hair colors, hair lengths, outfits, and facial expressions. Include a stylish mix of looks such as pink bob hair, long dark hair, honey blonde waves, copper shoulder-length hair, soft brunette layers, and black sleek hair. Vary the hairstyles between short bob, shoulder-length cut, long straight hair, soft waves, curtain bangs, blunt bangs, and loose layered styles. Each panel should feature a different outfit, such as striped tank tops, fitted camisoles, casual fashion tops, soft knitwear, minimal dresses, and chic everyday pieces. Every panel should have a distinct pose and expression: pout, soft smile, neutral gaze, side glance, playful expression, serious stare, slightly raised chin, hand near lips, tilted head, and close-up angled selfie variations. The result should feel like a curated beauty and style moodboard with natural charm and fashionable diversity."}, "output_settings": {"aspect_ratio": "{aspectRatio}", "orientation": "portrait", "resolution_target": "ultra_high_res", "num_images": 1, "layout": {"type": "grid", "rows": 4, "cols": 3, "gutter": "thin", "outer_border": "none", "panel_consistency": "high_identity_consistency"}, "render_style": "photoreal_beauty_selfie_editorial", "sharpness": "natural_crisp", "grain": "subtle_film", "dynamic_range": "natural", "color_grade": "soft_clean_beauty"}, "subject": {"identity": "same adult woman in all twelve panels", "beauty_style": "fresh natural glam, realistic skin, soft lips, expressive eyes", "hair_variation": "different hair colors and lengths across panels", "outfit_variation": "different fashionable casual outfits in each panel"}, "scene": {"environment": "simple indoor background with soft neutral walls and natural light", "mood": "stylish, playful, fresh, photoreal, modern", "panel_direction": "each panel should show a clearly different selfie angle, pose, hairstyle, outfit, and expression while preserving the same facial identity"}, "camera": {"framing": "close-up and medium-close selfie framing", "angle": "smartphone front-camera style with varied angles", "focus": "sharp facial detail and realistic skin texture", "composition": "balanced collage with visually diverse but cohesive panels"}, "lighting": {"type": "natural indoor daylight", "quality": "soft flattering light with realistic skin tones", "skin_rendering": "natural skin texture, no plastic smoothing"}, "must_have": ["4x3 grid layout with 4 rows and 3 columns", "same woman in all panels", "different hair colors", "different hair lengths", "different outfits", "different poses", "different expressions", "photoreal selfie style", "perfect anatomy", "natural facial consistency", "realistic hands when visible"], "negative_prompt": ["3x3 grid", "different identity", "same hairstyle in every panel", "same outfit in every panel", "duplicate poses", "extra fingers", "deformed hands", "warped face", "asymmetrical eyes", "plastic skin", "blurry details", "low detail", "cartoon", "text", "logo", "watermark"]}}`,
                illustration: 'default',
                imageTypeHint: 'Genera un grid de 12 selfies con variaciones de estilo.',
                detailedDescription: 'Crea un moodboard de 12 selfies con la misma persona pero diferentes peinados, outfits y expresiones.',
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['1:1', '3:4', '4:5'],
            },
            {
                id: 825,
                key: 'character-advertising-campaign',
                caption: 'Campaña Publicitaria del Personaje',
                prompt: `[AD_TYPE_PROMPT] ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'default',
                imageTypeHint: 'Elige el tipo de publicidad para tu personaje.',
                detailedDescription: "Elige entre una máquina Gachapon, un cartel en Tokio, publicidad en transporte público o una caja de figura de acción para tu personaje.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['1:1', '3:4', '9:16', '16:9'],
                dynamicFields: [
                    {
                        type: 'select',
                        key: 'ad_type_selector',
                        label: 'Tipo de Publicidad',
                        options: [
                            {
                                label: 'Máquina Gachapon',
                                values: {
                                    '[AD_TYPE_PROMPT]': 'Based on the attached illustration (or reference image), please create a design that faithfully reproduces a modern (2026) capsule toy machine. As the \"face\" of the machine, place the character from the uploaded image prominently in the center of the front panel. Reproduce every detail, from the sparkle in the character\'s eyes to the texture of their hair and the wrinkles in their clothing. The illustration will automatically resize to fit the front panel and will not be cut off. Capsule Machine Specifications: Body Color: A gradient based on the main color of the illustration. Top Sign: A dome-shaped sign with a neon-style logo: \"The World\'s Only Original Gachapon.\" Capsule Display: A transparent window showing 20 or more capsules. Coin Slot: A realistic silver metal slot for 100 yen coins. Handle: A large red rotating knob. Discharge Slot: A diagonally positioned discharge slot at the bottom. Other Decorations: Character stickers, LED light reflections, casters on the base. Shooting angle: slightly upward (low angle 15 degrees), bright studio lighting (soft light + highlights), metallic mirror reflection, plastic gloss, ultra-high definition, photorealistic product photography, sharp focus, exquisite detail. Faithfully reproduces the illustration. Professional product photography intended for sale in Japanese arcades. Realistic texture, metallic gloss, plastic shine, delicate shading.'
                                }
                            },
                            {
                                label: 'Cartel en Tokio',
                                values: {
                                    '[AD_TYPE_PROMPT]': 'A massive, cinematic billboard in a famous, bustling Tokyo intersection like Shibuya Crossing. The character from the uploaded image is featured prominently, towering over the crowd. Neon lights, vibrant atmosphere, high-angle shot, photorealistic.'
                                }
                            },
                            {
                                label: 'Publicidad en Bus',
                                values: {
                                    '[AD_TYPE_PROMPT]': 'A public transport bus in a city, featuring a large, vibrant advertisement on its side displaying the character from the uploaded image. Realistic street setting, daylight, photorealistic.'
                                }
                            },
                            {
                                label: 'Publicidad en Subte',
                                values: {
                                    '[AD_TYPE_PROMPT]': 'Inside a modern subway train, a large, eye-catching advertisement panel featuring the character from the uploaded image. Realistic subway interior, commuters in the background, photorealistic.'
                                }
                            },
                            {
                                label: 'Caja de Figura',
                                values: {
                                    '[AD_TYPE_PROMPT]': 'A premium, collectible action figure box, sealed in its plastic blister packaging. The character from the uploaded image is displayed as a high-quality figure inside. Detailed packaging art, store shelf background, photorealistic.'
                                }
                            },
                            {
                                label: 'Llavero en Cartera',
                                values: {
                                    '[AD_TYPE_PROMPT]': 'A detailed close-up shot of a modern teenage wallet (purse). Attached to the wallet are several trendy and fashionable keychains. Among them, one prominent acrylic keychain features a high-quality, clear image of the character from the uploaded reference image. The character on the keychain is a close-up of their face. The lighting is bright and natural, highlighting the textures of the wallet and the acrylic keychain. The focus is sharp on the acrylic keychain, with a shallow depth of field blurring the background slightly. Photorealistic product photography, high detail, 8k resolution.'
                                }
                            }
                        ]
                    }
                ]
            },

            {
                id: 826,
                key: 'paparazzi-nightlife',
                caption: 'Paparazzi Nightlife',
                prompt: 'Flash candid nightlife photo of [SUBJECT], wearing [OUTFIT], [ACTION], outside [LOCATION] at night, harsh direct on-camera flash, candid paparazzi-inspired aesthetic, clean vertical framing, realistic skin texture, effortless celebrity street style, subtle motion blur, dark minimal background, glossy nightlife mood, high contrast, deep shadows, blown highlights, premium tabloid photography, off-duty model energy, photorealistic, ultra-detailed',
                illustration: 'default',
                imageTypeHint: 'Sube una foto de una persona.',
                detailedDescription: 'Captura la energía de una celebridad con un estilo de fotografía de paparazzi, flash directo y ambiente nocturno.',
                requiresAspectRatio: true,
                mediaType: 'image',
                dynamicFields: [
                    {
                        type: 'select',
                        key: '[SUBJECT]',
                        label: 'Sujeto',
                        options: [
                            { label: 'Mujer morena glamurosa', value: 'a glamorous brunette woman' },
                            { label: 'Modelo de moda rubia', value: 'a blonde fashion model' },
                            { label: 'Mujer joven morena', value: 'a young brunette woman' },
                            { label: 'Pareja famosa', value: 'a famous couple (the man wearing a dark suit and sunglasses, the woman wearing a fitted black dress and blonde hair loose over her shoulders)' },
                            { label: 'Actor de Hollywood', value: 'a handsome Hollywood actor' },
                            { label: 'Cantante de pop', value: 'a famous pop singer' },
                            { label: 'Icono de la moda', value: 'a stylish fashion icon' },
                            { label: 'Grupo de amigos famosos', value: 'a group of famous friends' }
                        ]
                    },
                    {
                        type: 'select',
                        key: '[OUTFIT]',
                        label: 'Atuendo',
                        options: [
                            { label: 'Vestido satinado negro', value: 'wearing a fitted black satin mini dress, black sunglasses, and pointed stilettos' },
                            { label: 'Chaqueta de cuero oversized', value: 'wearing an oversized black leather jacket, black mini shorts, and pointed white ankle boots' },
                            { label: 'Vestido marfil ajustado', value: 'wearing a fitted ivory mini dress, oversized sunglasses, and crocodile leather knee-high boots' },
                            { label: 'Vestido de gala negro', value: 'wearing a black liquid satin mermaid gown with a structured strapless neckline, a fitted waist, a dramatic thigh-high slit, and a long elegant train, with diamond jewelry, sleek black sunglasses, and pointed stilettos' },
                            { label: 'Traje sastre oversized', value: 'wearing an oversized tailored suit, chunky loafers, and dark sunglasses' },
                            { label: 'Look denim total', value: 'wearing a vintage denim jacket, matching jeans, and a white crop top' },
                            { label: 'Abrigo de piel sintética', value: 'wearing a luxurious faux-fur coat, a silk slip dress, and strappy heels' },
                            { label: 'Estilo deportivo chic', value: 'wearing a designer tracksuit, oversized sunglasses, and luxury sneakers' }
                        ]
                    },
                    {
                        type: 'select',
                        key: '[ACTION]',
                        label: 'Acción',
                        options: [
                            { label: 'Saliendo de un SUV', value: 'stepping out of a black luxury SUV while a suited bodyguard opens the door' },
                            { label: 'Cruzando la calle', value: 'crossing an empty zebra crossing' },
                            { label: 'Caminando con bolso', value: 'walking alone with a large black handbag' },
                            { label: 'Entre fotógrafos', value: 'moving through a crowd of photographers and security' },
                            { label: 'Firmando autógrafos', value: 'signing autographs for fans' },
                            { label: 'Hablando por teléfono', value: 'talking on a smartphone while walking' },
                            { label: 'Subiendo a un taxi', value: 'getting into a yellow taxi cab' },
                            { label: 'Posando para una selfie', value: 'taking a selfie with a fan' }
                        ]
                    },
                    {
                        type: 'select',
                        key: '[LOCATION]',
                        label: 'Ubicación',
                        options: [
                            { label: 'Entrada de hotel', value: 'outside an upscale hotel entrance' },
                            { label: 'Calle céntrica', value: 'outside a quiet downtown street' },
                            { label: 'Callejón urbano', value: 'outside a narrow city alley' },
                            { label: 'Entrada de gala', value: 'outside a gala entrance' },
                            { label: 'Frente a un teatro', value: 'outside a historic theater entrance' },
                            { label: 'Cerca de un club nocturno', value: 'outside a trendy nightclub' },
                            { label: 'En un restaurante de lujo', value: 'outside an upscale restaurant' },
                            { label: 'Cerca de una tienda de diseño', value: 'outside a high-end designer boutique' }
                        ]
                    }
                ]
            }
        ]
    }
};
