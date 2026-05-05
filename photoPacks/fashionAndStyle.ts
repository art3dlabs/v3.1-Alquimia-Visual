/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import type { PhotoPack } from './types';
import { PRESERVE_IDENTITY_PROMPT, PRESERVE_OUTFIT_PROMPT } from './types';
import { stylesAndFashionPacks } from './stylesAndFashion';
import { imageFusionPacks } from './imageFusion';

export const fashionAndStylePacks: Record<string, PhotoPack> = {
    'hairstyles-2025': stylesAndFashionPacks['hairstyles-2025'],
    'hair-style-designer': stylesAndFashionPacks['hair-style-designer'],
    'trending-outfits': stylesAndFashionPacks['trending-outfits'],
    'fashion-poster': stylesAndFashionPacks['fashion-poster'],
    'wardrobe-styles': {
        title: 'Transformación de Vestuario',
        description: 'Reimagina tu ropa con texturas y materiales de diferentes universos: medieval, sci-fi, cosplay o K-pop.',
        images: [
            {
                id: 701,
                key: 'wardrobe-texture-transform',
                caption: 'Cambiar Estilo de Material',
                subcategory: 'Transformación de Ropa',
                prompt: `[PROMPT_CONTENT]`,
                illustration: 'outfit',
                imageTypeHint: 'Funciona mejor con fotos de cuerpo entero o medio cuerpo donde se vea bien la ropa.',
                detailedDescription: "Transforma los materiales de tu ropa actual en texturas de fantasía medieval, sci-fi o lujo extremo. Mantiene el diseño original pero cambia el tejido.\nFunciona mejor con fotos de cuerpo entero o medio cuerpo.",
                mediaType: 'image',
                requiresAspectRatio: true,
                dynamicFields: [
                    {
                        type: 'select',
                        key: 'style_selector',
                        label: 'Estilo de Material',
                        options: [
                            { 
                                label: 'Fantasía Medieval', 
                                values: { 
                                    '[PROMPT_CONTENT]': `Analyze the attached image to identify the character's facial features, body type, and outfit design. Generate a photorealistic cinematic photograph of this exact character performing a "Wardrobe Fitting Test" for a high-budget movie.\n\nDirectives:\n1. IDENTITY: Strictly preserve the facial features, hairstyle structure, and accessories from the reference image.\n2. OUTFIT TRANSFORMATION: Keep the original outfit's silhouette and colors, but completely replace the textures. Convert the clothing into authentic Medieval Fantasy style: use heavy organic fabrics, coarse linen, boiled wool, and vegetable-tanned leather. Ensure accessories look like hand-forged metal with oxidation. Remove any plastic, synthetic, or cosplay-like sheen.\n3. POSE: Place the character in a dynamic stance that interacts with the outfit (showing fabric weight and movement) but ensures the face and all costume details remain fully visible and unblocked.\n4. ENVIRONMENT: Set the scene in a professional film studio with a neutral grey backdrop.\n5. PHOTOGRAPHY: Shot on Arri Alexa, soft natural lighting, sharp focus on material textures, 8k resolution, raw footage style.` 
                                } 
                            },
                            { 
                                label: 'Futurista (Sci-Fi)', 
                                values: { 
                                    '[PROMPT_CONTENT]': `Analyze the attached image to identify the character's facial features, body type, and outfit design. Generate a photorealistic cinematic photograph of this exact character performing a "Wardrobe Fitting Test" for a high-budget Sci-Fi movie.\n\nDirectives:\n1. IDENTITY: Strictly preserve the facial features, hairstyle structure, and accessories from the reference image.\n2. OUTFIT TRANSFORMATION: Keep the original outfit's silhouette and colors, but completely replace the textures. Convert the clothing into authentic High-End Sci-Fi style: use ballistic nylon, matte kevlar, breathable tactical mesh, and weathered functional polymer plates (non-glossy). Ensure accessories look like machined aluminum, carbon fiber, or industrial rubber. Remove cheap plastic shine; aim for a utilitarian, heavy-duty aesthetic.\n3. POSE: Place the character in a dynamic stance that interacts with the outfit (showing fabric tension and armor weight) but ensures the face and all costume details remain fully visible and unblocked.\n4. ENVIRONMENT: Set the scene in a professional film studio with a neutral grey backdrop.\n5. PHOTOGRAPHY: Shot on Arri Alexa, cool clinical studio lighting, sharp focus on material textures, 8k resolution, raw footage style.` 
                                } 
                            },
                            { 
                                label: 'Barato (Low Budget/Cosplay)', 
                                values: { 
                                    '[PROMPT_CONTENT]': `Analyze the attached image to identify the character's facial features, body type, and outfit design. Generate a photorealistic cinematic photograph of this exact character performing a "Wardrobe Fitting Test" for a low-budget independent film or amateur cosplay.\n\nDirectives:\n1. IDENTITY: Strictly preserve the facial features and body type from the reference image.\n2. OUTFIT TRANSFORMATION: Keep the original outfit's silhouette and colors, but downgrade the materials. Convert the clothing into a Realistic Low-Budget DIY style: use cheap shiny polyester fabrics, painted EVA foam texture imitating metal, visible hot glue marks, loose threads, safety pins, and cardboard elements. The fit should look slightly imperfect, wrinkled, or loose to emphasize the "homemade" aspect.\n3. POSE: Place the character in a dynamic stance that interacts with the outfit, perhaps adjusting a loose part, but ensures the face and all costume details remain fully visible.\n4. ENVIRONMENT: Set the scene in a basic studio with a neutral grey backdrop.\n5. PHOTOGRAPHY: Shot on a standard DSLR, flat lighting, realistic texture focus, 8k resolution, raw footage style.` 
                                } 
                            },
                            { 
                                label: 'K-Pop (Luxury Idol)', 
                                values: { 
                                    '[PROMPT_CONTENT]': `Analyze the attached image to identify the character's facial features, body type, and outfit design. Generate a photorealistic cinematic photograph of this exact character performing a "Wardrobe Fitting Test" for a luxury K-Pop music video.\n\nDirectives:\n1. IDENTITY: Strictly preserve the facial features and body type from the reference image. Polish the hairstyle to look salon-styled with volume and texture.\n2. OUTFIT TRANSFORMATION: Keep the original outfit's silhouette and colors, but elevate the materials to Luxury Fashion. Convert the clothing into authentic Idol Stage style: use high-end velvet, silk, satin, and textured brocade. Replace flat details with real intricate embroidery, genuine rhinestones that catch the light, sequins, and gold/silver plated accessories. The tailoring must be sharp and fitted.\n3. POSE: Place the character in a dynamic choreography-like stance that interacts with the outfit (showing fabric flow) but ensures the face and all costume details remain fully visible and unblocked.\n4. ENVIRONMENT: Set the scene in a high-end film studio with a neutral grey backdrop.\n5. PHOTOGRAPHY: Shot on Arri Alexa, glamour studio lighting with soft highlights on jewelry, sharp focus on fabric texture, 8k resolution, raw footage style.` 
                                } 
                            },
                        ]
                    }
                ]
            },
            {
                id: 702,
                key: 'clothing-to-mannequin',
                caption: 'Ropa en Maniquí',
                subcategory: 'Transformación de Ropa',
                prompt: `[PROMPT_CONTENT]`,
                illustration: 'outfit',
                imageTypeHint: 'Extrae la ropa y la coloca en un maniquí articulado (Cuerpo Entero).',
                detailedDescription: "Transfiere tu outfit a un maniquí articulado blanco brillante para fotografía de producto. Mantiene los pliegues y texturas de la tela.\nElige entre conservar la pose original o una pose frontal estándar.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['9:16', '3:4', '1:1', '4:5'],
                dynamicFields: [
                    {
                        type: 'select',
                        key: 'pose_selector',
                        label: 'Pose del Maniquí',
                        options: [
                            {
                                label: 'Pose Original (Default)',
                                values: {
                                    '[PROMPT_CONTENT]': `Analyze the outfit in the reference image. Generate a **FULL BODY** photo of a glossy white articulated mannequin body wearing that exact outfit.
                                    **FRAMING:** FULL BODY SHOT (Long Shot). The entire mannequin must be visible from the top of the head to the bottom of the feet. Do not crop the feet.
                                    **CLOTHING DETAILS:** [CLOTHING_DETAILS]
                                    **POSE:** The mannequin must adopt the **EXACT SAME POSE** as the subject in the reference image.
                                    The mannequin features visible mechanical ball-joints at elbows and knees, rigid plastic limbs, and a faceless blank head with a realistic synthetic wig.
                                    The clothing is rendered with realistic fabric physics, showing volumetric folds and loose draping that hangs naturally away from the hard plastic surface, ensuring it is not skin-tight. Accessories like bags and jewelry are positioned accurately over the outfit.
                                    E-commerce product photography, studio lighting, pure white background.`
                                }
                            },
                            {
                                label: 'Pose Frontal Relajada',
                                values: {
                                    '[PROMPT_CONTENT]': `Analyze the outfit in the reference image. Generate a **FULL BODY** photo of a glossy white articulated mannequin body wearing that exact outfit.
                                    **FRAMING:** FULL BODY SHOT (Long Shot). The entire mannequin must be visible from the top of the head to the bottom of the feet. Do not crop the feet.
                                    **CLOTHING DETAILS:** [CLOTHING_DETAILS]
                                    **POSE:** The mannequin must stand in a **RELAXED FRONTAL POSE**, arms slightly away from the body to show the cut of the clothes.
                                    The mannequin features visible mechanical ball-joints at elbows and knees, rigid plastic limbs, and a faceless blank head with a realistic synthetic wig.
                                    The clothing is rendered with realistic fabric physics, showing volumetric folds and loose draping that hangs naturally away from the hard plastic surface, ensuring it is not skin-tight. Accessories like bags and jewelry are positioned accurately over the outfit.
                                    E-commerce product photography, studio lighting, pure white background.`
                                }
                            }
                        ]
                    },
                    {
                        type: 'text',
                        key: '[CLOTHING_DETAILS]',
                        label: 'Detalles de la Ropa (Calidad/Ajuste)',
                        placeholder: 'Ej: Tela de seda, ajuste holgado, alta costura...',
                        maxLength: 150,
                        defaultValue: 'Alta costura, ajuste perfecto',
                        isOptional: true
                    }
                ]
            }
        ]
    },
    'virtual-try-on': imageFusionPacks['virtual-try-on'],
    'fashion-collage': imageFusionPacks['fashion-collage'],
    'fashion-editorial-boards': {
        title: 'Tableros Editoriales',
        description: 'Crea composiciones de moda profesionales, desde tableros de muñecas de papel hasta hojas de diseño de personajes.',
        images: [
            {
                id: 703,
                key: 'fashion-paper-doll-board',
                caption: 'Editorial: Paper Doll 2026',
                subcategory: 'Diseño Editorial',
                prompt: `Create a photoreal fashion paper-doll style editorial board inspired by vintage magazine styling pages, but updated for 2026 fashion. 
                In the center, show the person from the reference image standing in a clean paper-doll presentation pose with arms slightly open, wearing a simple neutral bandeau or fitted top and shorts underneath instead of underwear. The shorts should be minimal, modern, and clean, like styling-base shorts. 
                Around the central figure, arrange multiple stylish 2026-ready outfit options as separate wearable looks or paper-doll clothing pieces. These outfits should reflect a 2026-inspired wardrobe direction with elevated modern pieces, cleaner styling, and more current color palettes (such as butter yellow, powder blue, soft pistachio, warm mocha, dusty rose, creamy ivory, muted silver, and washed denim blue). The AI should create new, modern, and trend-aware outfits in accordance with the current year 2026.
                The overall board should feel chic, editorial, playful, and fashion-forward, with updated silhouettes, modern colors, and trend-aware styling. Use very minimal text: only a refined title and a small model name area. Do not clutter the page with heavy text. 
                Technical specs: Editorial magazine realism, crisp sharpness, subtle vintage print grain, soft natural print dynamic range. Pure white or very light neutral background. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'model-cover',
                imageTypeHint: 'Nano 🍌 2: Tablero editorial de moda estilo "muñeca de papel" con outfits modernos.',
                detailedDescription: "Crea un tablero editorial estilo 'muñeca de papel' (paper-doll) inspirado en revistas vintage pero con moda del 2026. Muestra al sujeto en el centro con un look base y varios outfits modernos y sofisticados alrededor. Estética limpia, minimalista y profesional.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['4:5', '3:4', '1:1'],
            },
            {
                id: 704,
                key: 'dance-editorial-grid-3x3',
                caption: 'Editorial: Dance Campaign (3x3)',
                subcategory: 'Diseño Editorial',
                prompt: `A high-fashion 3x3 editorial grid capturing a luxury contemporary dance campaign. The nine-panel visual narrative features the person from the reference image with a consistent facial identity, unified by a polished hairstyle and luminous editorial makeup. She is dressed in an entirely new, bespoke ensemble: a sculptural, butter-yellow asymmetrical one-shoulder top in draped satin-stretch fabric, paired with fluid, wide-leg dance trousers that emphasize elongated lines and graceful movement.

The composition follows a sophisticated sequence of nine distinct, artistic poses within a minimalist premium studio:
1. A triumphant standing pose with a long, elegant vertical line.
2. An expressive seated pose with an angled torso and delicate hand placement.
3. A sculptural deep curve radiating contemporary energy.
4. A graceful floor-based side arc with an upward reach.
5. A commanding hero center pose with a powerful, grounded silhouette.
6. A lyrical kneeling pose showcasing a refined neck and chest extension.
7. A dynamic, off-balance extension with an asymmetrical upper-body shape.
8. A controlled floor-gesture featuring a curved spine and fluid poise.
9. A final signature campaign silhouette with both arms raised and a subtle hip shift.

Visual Style & Technical Finish: Cinematic editorial realism with warm, soft-directional lighting that gently sculpts the human form. The atmosphere is confident and artistic. Crisp textures on the satin fabric and organic skin rendering. Absolute visual consistency in outfit, background, and identity across all panels. High-end photography aesthetics, ultra-high resolution, and flawless artistic proportions. No elements from the reference image's original clothing or background are retained. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'model-cover',
                imageTypeHint: 'Nano 🍌 2: Grid editorial 3x3 de campaña de danza contemporánea de lujo.',
                detailedDescription: "Crea un grid editorial de 3x3 que captura una campaña de danza contemporánea de lujo. 9 paneles con poses artísticas y fluidas, vistiendo un conjunto asimétrico en amarillo mantequilla. Estética cinematográfica y profesional.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['1:1', '4:5', '3:4'],
            },
            {
                id: 705,
                key: 'fashion-sale-graphic-2poses',
                caption: 'Gráfico: Fashion Sale (2 Poses)',
                subcategory: 'Diseño Editorial',
                prompt: `A promotional fashion graphic featuring a female model in two poses on a light grey background. The central background is dominated by large, bold, block letters in dark brown spelling "[SALE_TEXT]". Overlaid on the lower-left area are the words "[COLLECTION_TEXT]" in a dark, elegant script font. Towards the bottom, there is text reading "[HURRY_TEXT]", followed by "[BRAND_TEXT]", and below that "[OFFER_TEXT]", all in a dark brown, slightly distressed serif font.

The model is shown in two full-length views wearing the exact clothing from IMAGE 2. In the left-hand pose, the model is seen from behind, looking left, with her left hand in her pocket. On the right, she is shown from the front, in a slightly active pose looking towards the upper-right, with her right hand in her hair. The lighting is soft and even, highlighting the texture of the fabric. The overall style is modern and clean, resembling a catalogue page. 

${PRESERVE_IDENTITY_PROMPT} 

MANDATORY CLOTHING PRESERVATION: Use the clothing, fabric texture, and accessories from IMAGE 2 as the absolute, non-negotiable source of truth for the outfit. You must map the specific outfit from IMAGE 2 onto the model in both poses.`,
                illustration: 'model-cover',
                imageTypeHint: 'Nano 🍌 2: Gráfico promocional de "SALE" con dos poses. Requiere foto de ropa (IMG 2).',
                detailedDescription: "Crea un gráfico promocional de rebajas con tipografía 'SALE' de fondo. Muestra al sujeto en dos poses (frente y espalda) vistiendo la ropa de la segunda imagen (IMG 2). Estética de catálogo moderno.",
                mediaType: 'image',
                requiresAspectRatio: true,
                requiresSecondImage: true,
                supportedAspectRatios: ['4:5', '3:4', '1:1'],
                templateData: {
                    '[SALE_TEXT]': 'SALE',
                    '[COLLECTION_TEXT]': 'New Collections',
                    '[HURRY_TEXT]': 'HURRY',
                    '[BRAND_TEXT]': 'A&H',
                    '[OFFER_TEXT]': 'Next 5 days offer'
                },
                dynamicFields: [
                    {
                        type: 'text',
                        key: '[SALE_TEXT]',
                        label: 'Texto Principal (Fondo)',
                        placeholder: 'Ej: SALE, REBAJAS, 2026...',
                        maxLength: 20,
                        defaultValue: 'SALE',
                        isOptional: true
                    },
                    {
                        type: 'text',
                        key: '[COLLECTION_TEXT]',
                        label: 'Subtítulo (Script)',
                        placeholder: 'Ej: New Collections, Nueva Temporada...',
                        maxLength: 40,
                        defaultValue: 'New Collections',
                        isOptional: true
                    },
                    {
                        type: 'text',
                        key: '[HURRY_TEXT]',
                        label: 'Llamado a la acción 1',
                        placeholder: 'Ej: HURRY, CORRE...',
                        maxLength: 15,
                        defaultValue: 'HURRY',
                        isOptional: true
                    },
                    {
                        type: 'text',
                        key: '[BRAND_TEXT]',
                        label: 'Marca / Logo Texto',
                        placeholder: 'Ej: A&H, TU MARCA...',
                        maxLength: 15,
                        defaultValue: 'A&H',
                        isOptional: true
                    },
                    {
                        type: 'text',
                        key: '[OFFER_TEXT]',
                        label: 'Detalle de Oferta',
                        placeholder: 'Ej: Next 5 days offer, Solo por hoy...',
                        maxLength: 50,
                        defaultValue: 'Next 5 days offer',
                        isOptional: true
                    }
                ]
            },
            {
                id: 706,
                key: 'coquette-librarian-editorial',
                caption: 'Editorial: Coquette Librarian',
                subcategory: 'Estética Coquette y Vintage',
                prompt: `Use the attached photo strictly as the identity reference. Preserve the exact facial features, bone structure, proportions, skin tone, eye color and natural identity of the subject to create a four-panel collage featuring close-up and medium-shot editorial portraits of a young woman, emphasizing a high-fashion, "coquette-meets-librarian" aesthetic with meticulous makeup detail.

**Subject & Composition:**
- **Top Left:** An extreme close-up macro shot focusing on the right eye, framed partially by the dark tortoiseshell rim of oval glasses. The focus is sharp on the skin texture and eye makeup.
- **Top Right:** A medium-upward-angled portrait. The subject looks directly at the camera with a neutral, sultry expression. Her head is tilted slightly.
- **Bottom Left:** A three-quarter profile view of the subject wearing small, dark tortoiseshell oval glasses. Her gaze is directed off-camera to the left.
- **Bottom Right:** An extreme macro close-up of the lips, featuring a finger with a long, white almond-shaped nail gently touching the lower lip.

**Styling & Aesthetic:**
- **Makeup:** Soft, diffused pink blush across the cheeks and nose bridge. Eyes feature delicate, thin winged eyeliner and long, wispy lashes. Lips are finished with a high-shine clear gloss over a natural pink tint.
- **Hair:** Styled in two sleek, low pigtails secured with small, thin black velvet bows. Wispy "baby hair" strands frame the face.
- **Wardrobe:** A classic white collared button-down shirt layered under a fitted, dark navy blue V-neck wool sweater.
- **Accessories:** Small, dark tortoiseshell oval-framed "librarian" glasses.
- **Lighting & Mood:** Soft, diffused studio lighting with a clean, minimalist off-white background. The mood is sophisticated, intellectual, yet playfully feminine. High-resolution, sharp focus, editorial photography style.

${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'model-cover',
                imageTypeHint: 'Nano 🍌 2: Collage editorial de 4 paneles con estética "coquette-librarian".',
                detailedDescription: "Crea un collage editorial de 4 paneles (primeros planos y retratos medios) con una estética sofisticada de 'coquette-librarian'. Incluye detalles meticulosos de maquillaje, gafas de carey, lazos de terciopelo y una iluminación de estudio limpia.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['1:1', '4:5', '3:4'],
            },
            {
                id: 707,
                key: 'vintage-girl',
                caption: 'Chica Vintage',
                subcategory: 'Estética Coquette y Vintage',
                prompt: `Full body shot at eye level, camera positioned straight-on with zero tilt. Centered vertical composition; head and feet are fully contained within the frame with minimal negative space above. Soft natural light from a side window, creating gentle rimlight and soft shadows on the subject's face. 50mm lens perspective, Fuji Pro 400H film aesthetic, fine grain, and a dreamy, realistic cinematic atmosphere. Warm afternoon color palette, Hollywood-style grading with soft contrast, creamy highlights, and deep, natural blacks. Young petite female with vintage glasses, fair skin. Calm, intimate gaze directed at the lens; relaxed facial muscles suggesting a quiet, romantic mood. Fine skin texture, visible pores on the bridge of the nose, natural matte finish without heavy makeup. Slender build, long neck, prominent collarbones, and delicate hand structure with red-painted fingernails. Standing upright, weight distributed slightly toward the back leg for a relaxed, natural posture. Torso turned slightly toward the light; head held straight with a subtle, inviting tilt. Left hand gently touching the hair near the ear; right hand partially tucked into the front jeans pocket. Legs straight, feet positioned shoulder-width apart, cuffed jeans resting atop heavy platform footwear. Asymmetrical arm placement creates dynamic tension; relaxed shoulders contrast with the intentional hand-to-hair gesture. Oversized red plaid blazer with Multiple sizes of vintage metal pins, white button-down shirt, red plaid tie, light-wash denim jeans. Numerous metallic vintage badges and enamel pins pinned to the blazer lapels, showing realistic metallic glint. Heavy wool texture of the blazer, crisp cotton shirt tucked tightly, and thick, stiff denim with visible grain. Preppy-meets-street style; oversized fit on the blazer, high-waisted jeans with wide cuffs at the ankles. Tie is slightly off-center; blazer fabric bunches naturally at the elbows and where the hand enters the pocket. Realistic indoor environment by a window; soft wooden floor textures and plain, light-toned walls. Shallow depth of field creates a soft-focus domestic interior background, emphasizing the subject. Subject stands near a window; soft light interacts with the fabric textures and hair edges. Subtle film grain and a hazy, romantic atmosphere with dust motes visible in the warm light shafts. Black leather platform oxfords with thick lug soles and brown leather belt with a simple metal buckle.

 IDENTITY: Strictly preserve the facial features, hairstyle, and skin texture of the person in Image 1.
 ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'model-cover',
                imageTypeHint: 'Foto 1: Rostro (Referencia).',
                detailedDescription: "Chica vintage con blazer a cuadros, gafas y estilo preppy-meets-street. Basado en estética Fuji Pro 400H.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['9:16', '3:4', '4:5', '1:1'],
            },
            {
                id: 708,
                key: 'vintage-portrait',
                caption: 'Portrait Estilo Vintage',
                subcategory: 'Estética Coquette y Vintage',
                prompt: `Full body shot at eye level, camera positioned straight-on with zero tilt. Centered vertical composition; head and feet are fully contained within the frame with minimal negative space above. Soft natural light from a side window, creating gentle rimlight and soft shadows on the subject's face. 50mm lens perspective, Fuji Pro 400H film aesthetic, fine grain, and a dreamy, realistic cinematic atmosphere. Warm afternoon color palette, Hollywood-style grading with soft contrast, creamy highlights, and deep, natural blacks. Standing upright, weight distributed slightly toward the back leg for a relaxed, natural posture. Torso turned slightly toward the light; head held straight with a subtle, inviting tilt. Left hand gently touching the hair near the ear; right hand partially tucked into the front jeans pocket. Legs straight, feet positioned shoulder-width apart, cuffed jeans resting atop heavy platform footwear. Asymmetrical arm placement creates dynamic tension; relaxed shoulders contrast with the intentional hand-to-hair gesture. Realistic indoor environment by a window; soft wooden floor textures and plain, light-toned walls. Shallow depth of field creates a soft-focus domestic interior background, emphasizing the subject. Subject stands near a window; soft light interacts with the fabric textures and hair edges. Subtle film grain and a hazy, romantic atmosphere with dust motes visible in the warm light shafts.

 IDENTITY: Strictly preserve the facial features, hairstyle, and skin texture of the person in Image 1.
 WARDROBE: Strictly replicate the complete outfit from Image 1.
 ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'model-cover',
                imageTypeHint: 'Foto 1: Rostro y Outfit (Referencia).',
                detailedDescription: "Portrait estilo vintage con pose y composición cinematográfica. Toma la ropa y parecido de tu foto de referencia.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['9:16', '3:4', '4:5', '1:1'],
            },
            {
                id: 709,
                key: 'split-portrait-real-cartoon',
                caption: 'Realista vs Caricatura',
                subcategory: 'Arte Surrealista y 3D',
                prompt: `Create a split-style portrait in ultra-detailed 8K where the subject is vertically divided into two contrasting halves.

 Left Half: Realistic photo, natural lighting, enhanced sharpness, authentic textures. Add thin neon or pastel doodle outlines for a subtle creative touch.
 Right Half: Convert the same subject into a clean digital illustration (chibi or semi-realistic style), keeping identical pose and expression. Use smooth lineart, soft shading, and pleasing pastel tones. Include small floating decorative stickers and cute elements.

 Important: The background must remain 100% identical and unedited across both halves.
 Divider: Vertical torn/glitch transition line.
 Style: Clean, modern, aesthetic, Instagram-ready
 Quality: 8K, ultra-detailed

 IDENTITY: Strictly preserve the facial features, hairstyle, and skin texture of the person in Image 1.
 ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'model-cover',
                imageTypeHint: 'Foto 1: Rostro (Referencia).',
                detailedDescription: "Efecto de pantalla dividida: mitad foto realista, mitad ilustración estilo caricatura tierna. Mantiene la pose y el fondo idénticos.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['9:16', '3:4', '4:5', '1:1'],
            },
            {
                id: 710,
                key: 'deconstructed-marble-sculpture',
                caption: 'Escultura de Mármol Deconstruida',
                subcategory: 'Arte Surrealista y 3D',
                prompt: `Ultra-detailed deconstructed 3D collage portrait of a realistic head to upper chest (based on uploaded reference).

 Form: Floating off-white marble sculpture.
 Structure: Fragmented into a precise grid of shifting blocks, geometric slices, and floating architectural segments (resembling a data-driven blueprint reconstructing the figure mid-air).

 Pose and Expression: Three-quarter view, slightly facing left, head tilted down 15–20°, chin slightly dropped, gaze lower-left, eyes half-closed, calm contemplative mood.

 Material and Texture: Marble with subtle gloss. Heavy weathering, cracks, pitted erosion, chipped edges, missing sections. Portions of face, hair, or hijab (if present) disintegrate into floating debris, exposing a rough internal stone core.

 Compositional Elements: Flat geometric overlays intersecting the sculpture. Background is stark off-white with subtle black-and-white grid, layered vector circuit diagrams, micro-topography lines, barcodes, and minimal UI elements.

 Typography Layout:
 - Top left: "MENTAL BREAKDOWN." above "HEART: BROKEN"
 - Center: Digital status bar "SYSTEM CHECK"
 - Chin area: "PROCESSED WITH CAUTION" + scrolling hexadecimal code
 - Upper right: "010"
 - Lower section: "069"
 - Subtle tag: "arieidunk"
 - Bottom: Solid black footer comic strip "THE-END-TALK"

 Color Hierarchy: Dominant: Off-white marble, Black grid. Primary accents: Canary Yellow, Royal Blue, Crimson Red. Secondary accents: Minimal safety orange (for warnings only).

 Lighting and Aesthetics: Controlled studio lighting with directional shadows. Strong contrast between infographic precision and raw stone decay. Hyper-detailed 8K render, sharp focus. Mixed-media Bauhaus-inspired aesthetic.

 IDENTITY: Strictly preserve the facial features and identity of the person in Image 1.
 ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'model-cover',
                imageTypeHint: 'Foto 1: Rostro (Referencia).',
                detailedDescription: "Retrato deconstruido estilo escultura de mármol flotante con elementos geométricos, diagramas técnicos y tipografía Bauhaus. Estética de collage 3D de alta precisión.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['9:16'],
            },
            {
                id: 711,
                key: 'slender-sport',
                caption: 'Slender Sport',
                subcategory: 'Lifestyle y Photo Dump',
                prompt: `A dynamic 4-panel collage grid showcasing a person in a sporty, elegant style. Across the panels, she shifts her weight on the stairs, alternating between crossing her arms, leaning forward, showing a side profile, and looking over her shoulder with a confident, playful expression and a direct gaze at the camera. She wears a tight, form-fitting black long-sleeve bodysuit with a deep V-neck front zipper unzipped and a white PRIX logo on the chest, paired with matching seamless leggings. Her look is accessorized with a thin gold necklace, rings, and long white manicured nails, while her makeup is a soft matte with rosy blush and winged liner. The setting is a realistic outdoor staircase made of warm stone and brown wood, featuring stone steps and a metal railing against a rustic wooden exterior where a gentle wind moves through the scene under a sunny daytime sky. The images are captured as a casual smartphone snapshot with an eye-level to slightly low angle, utilizing medium and cowboy shots where bright, strong directional sunlight creates sharp, flattering highlights. The final aesthetic is enhanced with Hollywood movie color grading, soft contrast, and a subtle film grain to create an authentic social media photo dump vibe with a shallow depth of field.

 IDENTITY: Strictly preserve the facial features, hairstyle, and skin texture of the person in Image 1 across all 4 panels.
 ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'model-cover',
                imageTypeHint: 'Foto 1: Rostro (Referencia).',
                detailedDescription: "Collage de 4 paneles estilo 'photo dump' con estética deportiva y elegante. Mantiene la identidad facial en todas las tomas.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['9:16'],
            },
            {
                id: 712,
                key: 'ethereal-fashion-collage',
                caption: 'Collage Etéreo (3 Poses)',
                subcategory: 'Lifestyle y Photo Dump',
                prompt: `Fantasy intricate technology cute design. (fashion pose, strong attitude towards camera:1.4). gentle wind, realistic environment, soft contrast, subtle film grain. Wong Kar-wai style, slightly dark cinematic mood. midj_aesthetic, imrt.

The person from IMAGE 1 wearing the outfit from IMAGE 2.

The composition is a collage of three poses: Full body jump pose with a surprised expression, hand near mouth. Upper body pose pointing fingers toward her head, soft smile. Close-up portrait with hands gently pressing cheeks, dreamy expression. Soft studio lighting, warm tones, high-key aesthetic, smooth skin, Korean fashion style, playful and youthful vibe, clean background, sharp focus, professional fashion photoshoot, vibrant complementary color palette to the color of the clothing, dominating the entire scene. Important: no text, no logos, no watermarks, no labels.

Analog film photography, fashion shot, looking away. An ultra-detailed, beautiful, stylish person, exuding heavenly beauty, adorned in ethereal, lightweight flowing fabrics that drape gracefully.

Dynamic composition, (style of russ mills:0.85), brush patterns using Pentax 67II and Kodak Portra, noise, (Detailed background elements:1.3). Youthful and radiant person, detailed skin, dusty, melancholic, by David Hamilton, (delicate airy silhouette:1.4), old style, retro.

IDENTITY: Strictly preserve the facial features, hairstyle, and skin texture of the person in Image 1 across all poses.
WARDROBE: Strictly replicate the complete outfit from Image 2 across all poses.
${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'model-cover',
                imageTypeHint: 'Foto 1: Rostro. Foto 2: Ropa.',
                detailedDescription: "Collage de moda de 3 poses con una estética etérea, juvenil y cinematográfica. Combina tu rostro con el outfit de otra imagen en una composición dinámica y poética.",
                mediaType: 'image',
                requiresAspectRatio: true,
                requiresSecondImage: true,
                supportedAspectRatios: ['16:9', '9:16', '1:1', '4:3', '3:4'],
            },
            {
                id: 714,
                key: 'editorial-outfit-breakdown',
                caption: 'Editorial: Outfit Breakdown (ZI)',
                subcategory: 'Diseño Editorial',
                prompt: `ANALYZE IMAGE 1 AND IMAGE 2.
IDENTITY: Use the PERSON from IMAGE 1 as the source for all facial features, hair, skin, and body structure.
OUTFIT: Completely ignore any prior outfit descriptions. Extract the OUTFIT directly from IMAGE 2, using it as the strict source for all clothes, textures, colors, and accessories.
POSE/COMPOSITION: The model on the left is in an extra relaxed fashion pose, looking effortlessly chic, with natural weight distribution and casual posture.
CAMERA: The camera is positioned at chest level relative to the standing model on the left, shooting straight on with a zero-degree tilt. The right side utilizes a top-down, flat-lay orthographic perspective for the isolated garments., A vertical split-screen collage composition. The left half features a medium-full shot of the model, cropped just above the ankles. The right half is a graphic design layout framing isolated product shots, text, and color swatches., The left side features soft, diffused studio lighting from a large front-left softbox, creating a gentle wrap-around light with minimal, soft-edged shadows on the backdrop. The right side features flat, even, shadowless lighting typical of e-commerce product isolation., Hyper-realistic commercial fashion editorial photography seamlessly integrated with high-end graphic design. Shot on a medium format camera with an 85mm lens for zero distortion, emphasizing razor-sharp fabric textures and clinical product presentation., A muted, earthy, and airy color palette. Low contrast with a soft, soothing, and minimalist tonality.

The image is split into two distinct environments. The left is a physical photography studio with a smooth, seamless warm beige paper backdrop. The right is a graphic canvas featuring a textured, off-white watercolor paper background., Spatial depth is manipulated via the collage effect. A highly realistic, jagged torn paper edge divides the two, casting a subtle 3D drop shadow onto the left photographic side., The model gracefully interacts with the studio space. The graphic elements on the right interact with the textured paper background as flat overlays., The air in the studio side is clean and clear, but a distinct, invisible directional breeze is present, evidenced by the dynamic movement of the model's hair., The right side is populated with specific editorial props: elegant typography, Daily Outfit item descriptions, and is concluded with a row of circular color palette swatches derived directly from the outfit items in IMAGE 2.

${PRESERVE_IDENTITY_PROMPT} ${PRESERVE_OUTFIT_PROMPT}`,
                illustration: 'model-cover',
                imageTypeHint: 'Foto 1: Rostro. Foto 2: Ropa.',
                detailedDescription: "Collage editorial con pantalla dividida en ángulo dinámico. Modelo a la izquierda, despiece de ropa con etiquetas automáticas a la derecha (top, bottom, layers, accesorios, zapatos, ropa interior).",
                mediaType: 'image',
                requiresAspectRatio: true,
                requiresSecondImage: true,
                supportedAspectRatios: ['9:16', '3:4', '4:5', '1:1'],
            },
            {
                id: 713,
                key: 'digital-scrapbook-collage',
                caption: 'Digital Scrapbook Collage (ZI)',
                subcategory: 'Lifestyle y Photo Dump',
                prompt: `Create a fantasy intricate technology cute design in a fashion pose with a strong attitude towards the camera (fashion pose, strong attitude towards camera:1.4). The scene features gentle wind, a realistic environment, soft contrast, and subtle film grain.
                For the analog film photography, fashion shot, have the model looking away. Depict an ultra-detailed, beautiful, stylish person, exuding heavenly beauty while barely clothed. Use a dynamic composition with a style reminiscent of Russ Mills (style of Russ Mills:0.85). Incorporate brush patterns using Pentax 67II and Kodak Portra, with noise and detailed background elements (Detailed scene elements:1.3).
                The subject is a beautiful 18-year-old person with detailed skin, set in a dusty, melancholic atmosphere inspired by David Hamilton. Capture the essence of lofi, analog, Kodak film by Jovana Rikalo, with an old-style, retro feel.

                atmospheric dream portrait of a Young person in a surreal atmosphere, sleepy eyes, acne marks, messy fringe, soft overhead light, dust floating in the air, muted architecture receding into blur, introspective stillness

                {   "subject": {     "description": "Young female in a digital scrapbook collage, featuring multiple overlapping cutouts of the same person.",     "mirror_rules": "N/A",     "age": "20s",     "expression": {       "eyes": {         "look": "direct gaze",         "energy": "soft, calm",         "direction": "looking at lens"       },       "mouth": {         "position": "closed, relaxed",         "energy": "subtle softness"       },       "overall": "calm, photogenic, slightly playful."     },     "face": {       "preserve_original": true,       "makeup": "Dewy K-beauty aesthetic, pale base, soft pink lips, natural straight brows, subtle blush."     }   },     "body": {     "frame": "slim, petite",     "waist": "slim, exposed midriff, belly button visible",     "chest": "covered by tight top, collarbones exposed",     "legs": "partially visible in denim",     "skin": {       "visible_areas": "face, neck, collarbones, upper chest, midriff, hands",       "tone": "fair, pale",       "texture": "smooth, powdery yet dewy touch",       "lighting_effect": "flat bright frontal light minimizing shadows"     }   },   "pose": {     "position": "multiple poses: front-facing, tilted head, hand lightly touching hair",     "base": "casual leaning/standing cutouts",     "overall": "relaxed, Gen-Z casual selfie posture"   },   "clothing": {     "top": {       "type": "cropped tweed jacket open over a tight tube top",       "color": "navy blue and white woven jacket, pure white inner",       "details": "textured woven fabric, unbuttoned, straight neckline on inner",       "effect": "structured heavy outer contrasting with tight smooth inner"     },   "bottom": {       "type": "low-rise denim jeans",       "color": "medium blue wash",       "details": "metal button visible, resting on hips"     }   },   "accessories": {     "headwear": "N/A",     "jewelry": "small pearl stud earrings",     "device": "N/A",     "prop": "digital stickers: retro camera, volume UI, chat bubbles, 3D doll, scattered blueberries, stamp."   },   "photography": {     "camera_style": "smartphone casual portraits merged into a 2D digital collage",     "angle": "eye-level, slight high angles",     "shot_type": "medium close-ups",     "aspect_ratio": "9:16",     "texture": "clean digital photography mixed with flat graphic overlays",     "lighting": "bright, flat frontal flash lighting",     "depth_of_field": "flat composition, zero depth of field due to collage nature"   },   "background": {     "setting": "digital scrapbook canvas",     "wall_color": "white/light grey (mostly obscured)",     "elements": [       "retro clock face",       "heavy boots cutouts at top",       "scattered fresh blueberries at bottom",       "text bubbles reading 'you are art'",       "UI volume graphic",       "'TIVITY' cut-out text"     ],     "atmosphere": "chaotic, curated trendy diary",     "lighting": "even digital screen lighting"   },   "the_vibe": {     "energy": "playful, trendy",     "mood": "curated casual",     "aesthetic": "Y2K digital scrapbook, K-pop photocard edit",     "authenticity": "highly edited digital collage",     "intimacy": "social media sharing",     "story": "arranging daily snaps into a aesthetic moodboard",     "caption_energy": "you are art, you are the sky"   },   "constraints": {     "must_keep": [       "multiple overlapping cutouts of same girl",       "navy/white tweed jacket",       "white crop top",       "exposed midriff",       "black bob hair",       "scattered blueberries",       "stickers and UI graphics"     ],     "avoid": [       "single isolated portrait",       "realistic 3D environment",       "heavy cinematic shadows",       "formal studio setting"     ]   },   "negative_prompt": [     "single person",     "realistic room background",     "heavy makeup",     "deep shadows",     "blurry",     "3D render of person",     "oil painting"   ] }. . . . .

                IDENTITY: Strictly preserve the facial features, hairstyle, and skin texture of the person in Image 1.
                ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'model-cover',
                imageTypeHint: 'Foto 1: Rostro (Referencia).',
                detailedDescription: "Crea un collage digital estilo scrapbook Y2K con múltiples recortes superpuestos del mismo sujeto. Estética K-pop, elementos gráficos, stickers y un look moderno y divertido.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['9:16'],
            },
            {
                id: 715,
                key: 'action-figure-collector',
                caption: 'Figura Coleccionable 1/6',
                subcategory: 'Arte Surrealista y 3D',
                prompt: `ultra realistic, photorealistic, best quality, 8k,

realistic human hand holding a large 1/6 scale (30cm tall) detailed hand-painted collectible action figure in its palm,

the 1/6 scale figure has the exact same face, clothing and pose as the reference photo,

large substantial 1/6 scale collectible figure, prominent size, occupies much of the palm, strong sense of scale, not miniature,

highly detailed 3D sculpt with realistic paint textures and glossy finish,

realistic hand skin texture, palm lines, fingers supporting the large figure, clear size difference,

soft cinematic lighting, shallow depth of field, blurred gray background, sharp focus`,
                illustration: 'model-cover',
                imageTypeHint: 'Foto 1: Rostro, Pose y Ropa (Referencia).',
                detailedDescription: "Crea una foto realista de una mano humana sosteniendo una figura de acción coleccionable a escala 1/6 (30cm) que imita exactamente la cara, pose y ropa de la persona en la foto de referencia.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['9:16', '3:4', '1:1', '4:5'],
            },
            {
                id: 716,
                key: 'weekly-outfit-guide',
                caption: 'Guía Semanal de Outfits',
                subcategory: 'Diseño Editorial',
                prompt: `[PROMPT_CONTENT]`,
                illustration: 'outfit',
                imageTypeHint: 'Guía de 7 días, incluye modelo y accesorios.',
                detailedDescription: "Crea una infografía editorial de una guía semanal (lunes a domingo) con modelos vistiendo diferentes outfits para cada ocasión, bajo una estética específica.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['16:9'],
                dynamicFields: [
                    {
                        type: 'select',
                        key: 'aesthetic_selector',
                        label: 'Estética de la Guía',
                        options: [
                            {
                                label: 'Minimalista Neutro (Coreano/Chino)',
                                values: {
                                    '[PROMPT_CONTENT]': `Minimalist fashion infographic poster, 7-day weekly outfit guide for women, soft neutral beige palette, elegant Korean/Chinese aesthetic. Each column shows a full-body model with coordinated outfit (office, casual, leisure, date, sport, home), plus small accessory/product thumbnails beside each look. Clean grid layout, lots of white space, editorial magazine style, thin typography, subtle shadows, labeled days Monday-Sunday with short descriptions and color swatches at bottom. High-end fashion branding, soft lighting, ultra-detailed, 16:9.`
                                }
                            },
                            {
                                label: 'Moda Generación X (Clásico/Profesional)',
                                values: {
                                    '[PROMPT_CONTENT]': `Fashion infographic poster, 7-day weekly outfit guide for women, refined Gen X aesthetic, sophisticated professional palette: charcoal, navy, camel, and crisp white. Each column shows a full-body model with tailored, timeless, and structured outfits (office, casual, leisure, date, sport, home), plus small accessory/product thumbnails beside each look (leather bags, watches, classic loafers). Clean, highly structured grid layout, editorial magazine style, timeless serif typography, subtle shadows, labeled days Monday-Sunday with short descriptions and color swatches at bottom. High-end fashion branding, soft, clean studio lighting, ultra-detailed, 16:9.`
                                }
                            },
                            {
                                label: 'Gen Z - Eclectic & Authentic',
                                values: {
                                    '[PROMPT_CONTENT]': `Fashion infographic poster, 7-day weekly outfit guide for women, authentic Gen Z aesthetic, eclectic mix of Y2K influences and modern thrifted style, playful candy-colored and earthy tones. Each column shows a full-body model with coordinated eclectic, layered outfit (office, casual, leisure, date, sport, home), plus small accessory/product thumbnails beside each look (beaded jewelry, vintage bags, bulky sneakers, headphones). Relaxed grid layout, sticker-inspired collage elements, mix of bold and handwritten typography, cozy vibe, labeled days Monday-Sunday with short descriptions and color swatches at bottom. Authentic brand-less/DIY feel, bright natural lighting, ultra-detailed, 16:9.`
                                }
                            },
                            {
                                label: 'Cosplayer - Convención de Anime',
                                values: {
                                    '[PROMPT_CONTENT]': `Fashion infographic poster, 7-day weekly outfit guide for women, cosplay convention aesthetic, diverse pop culture palette matching iconic anime character costumes. Each column shows a full-body model in a highly detailed character cosplay outfit for different occasions/arcs (office, casual, leisure, date, sport, home), plus small weapon/item thumbnail props beside each look. Playful, packed grid layout, anime-convention atmosphere, varied lettering styles reflecting the character sources, bright cinematic lighting, labeled days Monday-Sunday with short descriptions and color swatches at bottom. Dynamic branding, ultra-detailed, 16:9.`
                                }
                            },
                            {
                                label: 'Editorial Lujo (Dark Academia)',
                                values: {
                                    '[PROMPT_CONTENT]': `Sophisticated fashion infographic poster, 7-day weekly outfit guide for women, moody dark academia color palette, deep browns, forest greens, muted gold accents. Each column shows a full-body model with coordinated sophisticated outfit (office, casual, leisure, date, sport, home), plus small accessory/product thumbnails beside each look. Organized heavy grid layout, rich texture emphasis, high-end editorial magazine style, elegant serif typography, cinematic depth, labeled days Monday-Sunday with short descriptions and color swatches at bottom. Luxury branding, dramatic soft lighting, ultra-detailed, 16:9.`
                                }
                            }
                        ]
                    }
                ],
            },
            {
                id: 717,
                key: 'player-signing-poster',
                caption: 'Póster de Fichaje de Club',
                subcategory: 'Deportes y Posters',
                prompt: `Design a breathtaking epic vertical poster announcing [PLAYER_NAME]’s official signing and presentation for [CLUB_NAME]. Cinematic masterpiece in the exact style of premium national team / club signing reveal posters. Full-body dynamic pose of the player wearing the brand new [CLUB_NAME] jersey, standing powerfully on the stadium pitch with one foot on the ball or in a strong stance. Low heroic camera angle, wind-swept hair, intense and determined expression. Dramatic cinematic lighting with strong rim light and volumetric god rays breaking through the background. Dark moody sky with subtle club color accents, abstract energy particles and light streaks for epic feel. Large bold premium typography: '[PLAYER_NAME]' in massive metallic or glowing letters at the top, with '[CLUB_NAME]' and 'OFFICIAL SIGNING' or 'WELCOME TO [CLUB_NAME]' underneath. Include the official club crest, sponsor logos in elegant placement, and subtle signature element. High-end color grading with deep contrasts, rich club colors, sharp fabric details, realistic textures. Mix of photorealism and stylized sports illustration, similar to high-production anime x football posters. Ultra-detailed, 8k, masterpiece, best quality, intricate details --stylize 600 --v 6`,                
                illustration: 'soccer-ball',
                imageTypeHint: 'Póster de fichaje de jugador.',
                detailedDescription: "Crea un póster cinematográfico y épico de fichaje para un jugador de fútbol, con el nombre del club y del jugador personalizados.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['9:16'],
                dynamicFields: [
                    {
                        type: 'text',
                        key: '[PLAYER_NAME]',
                        label: 'Nombre del Jugador',
                        placeholder: 'Ej. Kylian Mbappé'
                    },
                    {
                        type: 'text',
                        key: '[CLUB_NAME]',
                        label: 'Nombre del Club',
                        placeholder: 'Ej. Real Madrid'
                    }
                ]
            },
            {
                id: 718,
                key: 'mural-self-portrait-portrait',
                caption: 'Mural de la Autorepresentación',
                subcategory: 'Arte Surrealista y 3D',
                prompt: `A striking artistic portrait of a charismatic woman in the reference photo that precisely captures her face, seated in a serene yet powerful pose. She sits cross-legged on a minimalist floor with decorative tiles, wearing a modern blue sweatshirt with a minimalist print, loose-fitting jeans, and black Converse sneakers. Her expression is serene and subtly confident, with a gentle smile and relaxed eyes as she gazes slightly toward a diffused light source.
Behind her rises a monumental abstract mural of her own face, painted with bold and expressive brushstrokes in charcoal gray, white, gold, and muted red. The mural is not a literal copy, but a stylized and emotive interpretation of her: intense eyes, fragmented textures, broad brushstrokes that suggest movement, ambition, and inner complexity. Its scale dominates the background without overshadowing the main figure, creating a harmonious balance between reality and artistic representation.
The lighting is cinematic and evocative, with soft reflections at the edges and a subtle overhead glow that defines her silhouette. Fine particles, like dust, float subtly in the air, catching flashes of light and enhancing the atmosphere. The setting evokes the fusion of a modern art studio with a dreamlike exhibition space: clean, spacious, minimalist, yet charged with emotion.
Photographed with ultra-realistic quality, using a 50mm portrait lens, shallow depth of field, sharp details, and elegant color gradation, the scene conveys creativity, introspection, and personal transformation.
Negative: blurry, overexposed, cartoonish, distorted anatomy, extra limbs, poorly drawn hands, merged faces, unrealistic colors, watermark, text.

IDENTITY: Strictly preserve the facial features and identity of the person in Image 1.
${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'model-cover',
                imageTypeHint: 'Foto 1: Rostro (Referencia).',
                detailedDescription: "Un retrato artístico de la persona sentada frente a un mural abstracto que interpreta su propio rostro, fusionando realidad y expresión artística en un estudio minimalista.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['9:16'],
            },
            {
                id: 719,
                key: 'surreal-detached-head',
                caption: 'Retrato Surrealista: Desdoble',
                subcategory: 'Arte Surrealista y 3D',
                prompt: `Surreal portrait of a young person in a cream blazer holding a realistic detached version of her own head, both faces identical with fair skin, detailed eyes, and natural freckles, soft neutral expression, minimal makeup, indoor setting near a window, soft diffused natural light, beige background, shallow depth of field, ultra-realistic skin texture, 85mm lens, cinematic composition, high detail, editorial fashion photography.

IDENTITY: Strictly preserve the facial features and identity of the person in Image 1.
${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'model-cover',
                imageTypeHint: 'Foto 1: Rostro (Referencia).',
                detailedDescription: "Un retrato surrealista y editorial donde el sujeto sostiene una versión realista de su propia cabeza. Estética de alta moda, iluminación suave y ultra-realista.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['9:16', '3:4', '4:5', '1:1'],
            },
        ]
    },
};
