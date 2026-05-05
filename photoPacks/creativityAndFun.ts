
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import type { PhotoPack } from './types';
import { PRESERVE_IDENTITY_PROMPT } from './types';

export const creativityAndFunPacks: Record<string, PhotoPack> = {
    'fun-transformations': {
        title: 'Laboratorio de Juguetes',
        description: 'Transforma tu foto en juguetes coleccionables, figuras y personajes cómicos.',
        images: [
            {
                id: 1,
                key: 'phone-screen-reveal-nb2',
                caption: 'Mostrando Pantalla NB2',
                subcategory: 'Interacción Digital',
                prompt: `The person (Reference 1) stands in a dark room with soft, dramatic lighting. They hold a smartphone close to the camera lens, clearly showing Reference Image 2 on its brightly lit screen. Their face is partially illuminated by the phone’s light, with gentle shadows adding depth. Their neutral expression shifts into a slight, curious half-smile. The background is blurred, creating a low-light atmosphere and a minimalist scene. High skin detail, realistic lighting. Output aspect ratio: {aspectRatio}. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'default',
                imageTypeHint: 'Nano 🍌 2: Foto 1: Tú. Foto 2: Pantalla. Estilo nocturno, luz de pantalla, casual.',
                detailedDescription: "Genera una imagen tuya sosteniendo un teléfono que muestra otra imagen (meme, foto) en la pantalla. Iluminación realista desde el móvil, creando un efecto de luz ambiental sobre tu rostro. Sube tu foto y la imagen que quieres que aparezca en la pantalla.",
                mediaType: 'image',
                requiresSecondImage: true,
                requiresAspectRatio: true,
                supportedAspectRatios: ['9:16', '16:9', '3:4', '4:3', '1:1', '4:5'],
            },
            {
                id: 2,
                key: 'master-art-toys',
                caption: 'Transformación de Juguete Universal',
                subcategory: 'Juguetes y Figuras',
                prompt: `[PROMPT_CONTENT]`,
                illustration: 'default',
                imageTypeHint: 'Elige un estilo de juguete o personaje.',
                detailedDescription: "Convierte tu imagen en juguetes coleccionables como figuras de acción, LEGO o plastilina. Texturas realistas que imitan materiales físicos con un acabado de producto de alta calidad. Sube una foto para ver tu versión en miniatura.",
                mediaType: 'image',
                requiresAspectRatio: true,
                dynamicFields: [
                    {
                        type: 'select',
                        key: 'art_style',
                        label: 'Estilo de Transformación',
                        isAdvanced: true,
                        options: [
                            { label: 'Pixel Art (16-bit)', values: { '[PROMPT_CONTENT]': `Dramatically transform the person in the photo into a 16-bit pixel art character sprite. The result must be authentically low-resolution with visible square pixels, resembling a character from a classic 90s video game. It's crucial to adapt their key recognizable features (like hairstyle and face shape) into this blocky, pixelated style, ensuring they are still identifiable.` } },
                            { label: 'Minifigura LEGO', values: { '[PROMPT_CONTENT]': `Transform the person in the photo into an official LEGO minifigure. The body must be the standard blocky minifigure shape. Their recognizable facial features and expression should be adapted and printed onto the classic cylindrical head. The hair should be recreated as a plastic LEGO hairpiece that matches the original style. The final image should look like a real product photograph of a LEGO toy.` } },
                            { label: 'Figura Funko Pop!', values: { '[PROMPT_CONTENT]': `Reimagine the person as an official Funko Pop! vinyl figure. The character must have the signature oversized head, small body, large, black, pupil-less round eyes, and no mouth. Adapt their hairstyle and defining accessories into the Funko Pop! style. The final image should look like a glossy vinyl toy collectible in a professional product shot.` } },
                            { label: 'Personaje de Plastilina (Claymation)', values: { '[PROMPT_CONTENT]': `Turn the person into a claymation character, in the distinct style of Aardman Animations (e.g., Wallace and Gromit). The image must have a tangible clay texture, with visible thumbprints and charming handcrafted imperfections. Adapt their recognizable features into this quirky, sculpted style. The lighting should be soft, mimicking a stop-motion animation studio setup.` } },
                            { label: 'Sticker / Calcomanía', values: { '[PROMPT_CONTENT]': `Redraw the person in the photo as a die-cut vinyl sticker. The style should be slightly simplified with bold outlines and vibrant colors. The entire sticker must be surrounded by a thick, white die-cut border and have a glossy sheen, making it look like a real sticker placed on a simple, clean background. ${PRESERVE_IDENTITY_PROMPT}` } },
                            { label: 'Figura de Cartón (Cutout)', values: { '[PROMPT_CONTENT]': `Recreate the person as a life-sized cardboard cutout standee. The image must look like a flat, printed photograph of the person mounted on cardboard. Clearly show the thin, corrugated cardboard edge and the white fold-out stand behind it to emphasize that it is a cutout. The lighting should create a slight semi-gloss sheen on the surface, highlighting its printed nature. ${PRESERVE_IDENTITY_PROMPT}` } },
                        ]
                    }
                ]
            },
            { id: 3, key: 'pixel-art', caption: 'Pixel Art (16-bit)', subcategory: 'Juguetes y Figuras', prompt: `Dramatically transform the person in the photo into a 16-bit pixel art character sprite. The result must be authentically low-resolution with visible square pixels, resembling a character from a classic 90s video game. It's crucial to adapt their key recognizable features (like hairstyle and face shape) into this blocky, pixelated style, ensuring they are still identifiable.`, illustration: 'default', imageTypeHint: 'Ideal para: Avatares retro.', detailedDescription: "Transformación a sprite de videojuego de 16-bits. Píxeles visibles y estética retro gaming clásica. Ideal para avatares retro, perfiles de redes sociales o diseños nostálgicos.", mediaType: 'image', requiresAspectRatio: true },
            { id: 4, key: 'lego', caption: 'Minifigura LEGO', subcategory: 'Juguetes y Figuras', prompt: `Transform the person in the photo into an official LEGO minifigure. The body must be the standard blocky minifigure shape. Their recognizable facial features and expression should be adapted and printed onto the classic cylindrical head. The hair should be recreated as a plastic LEGO hairpiece that matches the original style. The final image should look like a real product photograph of a LEGO toy.`, illustration: 'default', imageTypeHint: 'Ideal para: Foto de cuerpo entero.', detailedDescription: "Conviértete en una minifigura de LEGO. La IA adapta tu ropa y peinado al estilo de bloques de plástico, creando una imagen que parece una fotografía real de un producto de juguete.", mediaType: 'image', requiresAspectRatio: true },
            { id: 5, key: 'funko-pop', caption: 'Figura Funko Pop!', subcategory: 'Juguetes y Figuras', prompt: `Reimagine the person as an official Funko Pop! vinyl figure. The character must have the signature oversized head, small body, large, black, pupil-less round eyes, and no mouth. Adapt their hairstyle and defining accessories into the Funko Pop! style. The final image should look like a glossy vinyl toy collectible in a professional product shot.`, illustration: 'default', imageTypeHint: 'Ideal para: Foto de frente.', detailedDescription: "Tu versión en muñeco cabezón de vinilo coleccionable. Incluye la característica cabeza sobredimensionada, ojos negros grandes y una caja de producto virtual. Estilo Funko Pop! profesional.", mediaType: 'image', requiresAspectRatio: true },
            { id: 6, key: 'claymation', caption: 'Personaje de Plastilina', subcategory: 'Juguetes y Figuras', prompt: `Turn the person into a claymation character, in the distinct style of Aardman Animations (e.g., Wallace and Gromit). The image must have a tangible clay texture, with visible thumbprints and charming handcrafted imperfections. Adapt their recognizable features into this quirky, sculpted style. The lighting should be soft, mimicking a stop-motion animation studio setup.`, illustration: 'default', imageTypeHint: 'Ideal para: Retratos expresivos.', detailedDescription: "Estilo de animación stop-motion con textura de plastilina, huellas dactilares visibles y una iluminación suave que imita un set de rodaje profesional. Crea un personaje único y artesanal.", mediaType: 'image', requiresAspectRatio: true },
            { id: 7, key: 'sticker', caption: 'Sticker (Calcomanía)', subcategory: 'Juguetes y Figuras', prompt: `Redraw the person in the photo as a die-cut vinyl sticker. The style should be slightly simplified with bold outlines and vibrant colors. The entire sticker must be surrounded by a thick, white die-cut border and have a glossy sheen, making it look like a real sticker placed on a simple, clean background. ${PRESERVE_IDENTITY_PROMPT}`, illustration: 'default', imageTypeHint: 'Ideal para: Foto de cara.', detailedDescription: "Diseño de pegatina de vinilo con borde blanco troquelado y acabado brillante. Perfecto para imprimir, usar en chats o como avatar estilizado con contornos audaces.", mediaType: 'image', requiresAspectRatio: true },
            { id: 8, key: 'cardboard', caption: 'Figura de Cartón', subcategory: 'Juguetes y Figuras', prompt: `Recreate the person as a life-sized cardboard cutout standee. The image must look like a flat, printed photograph of the person mounted on cardboard. Clearly show the thin, corrugated cardboard edge and the white fold-out stand behind it to emphasize that it is a cutout. The lighting should create a slight semi-gloss sheen on the surface, highlighting its printed nature. ${PRESERVE_IDENTITY_PROMPT}`, illustration: 'default', imageTypeHint: 'Ideal para: Foto de cuerpo entero.', detailedDescription: "Simula ser un recorte de cartón a tamaño real. Efecto 2D en un mundo 3D con detalles de cartón corrugado y soporte plegable. Ideal para bromas o fotos creativas.", mediaType: 'image', requiresAspectRatio: true },
            {
                id: 9,
                key: 'photo-with-cartoons',
                caption: 'Fusión: Realidad y Dibujos',
                subcategory: 'Efectos Mixtos',
                prompt: `Analyze the uploaded photo to understand the main subject, pose, and context. Keep the original subject and environment photorealistic with natural texture and lighting. Then creatively add playful cartoon-style elements that complement the scene—such as props, visual effects, or expressive symbols—designed to match the subject’s action or personality. For example, if the subject is a cat, add a floating cartoon fish above its head; if the subject is holding a gun, add an exaggerated cartoon muzzle flash and comic-style sound effect. The result should create a striking contrast between realism and cartoon exaggeration, enhancing the image with humor, energy, and surreal charm. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'default',
                imageTypeHint: 'Funciona bien con cualquier tipo de foto.',
                detailedDescription: "Añade elementos de dibujos animados (cartoons) que interactúan con tu foto real. Crea un contraste divertido entre realidad e ilustración, añadiendo props, efectos visuales o símbolos expresivos. Sube una foto realizando una acción para mejores efectos.",
                mediaType: 'image',
                requiresAspectRatio: true,
            },
            {
                id: 10,
                key: 'instagram-frame',
                caption: 'Foto con Marco 3D',
                subcategory: 'Interacción Digital',
                prompt: `Stylish portrait of the character from the photo sitting inside a white 3D Instagram frame cutout with the logo. Dark background, cinematic lighting, ultra-realistic. Instagram id : '[INSTAGRAM_ID]' with blue checkmark. Caption should be "[CAPTION_TEXT]". ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'default',
                imageTypeHint: 'Ideal para: Foto de cara o busto.',
                detailedDescription: "Enmarca tu retrato dentro de un marco de Instagram 3D flotante con el logo oficial. Incluye tu nombre de usuario personalizado y un check azul de verificación. Escribe tu @usuario en el campo de texto.",
                mediaType: 'image',
                requiresAspectRatio: true,
                dynamicFields: [
                    {
                        type: 'text',
                        key: '[INSTAGRAM_ID]',
                        label: 'ID de Instagram',
                        defaultValue: '@usuario',
                        isOptional: true
                    },
                    {
                        type: 'text',
                        key: '[CAPTION_TEXT]',
                        label: 'Pie de Foto (Caption)',
                        defaultValue: 'Create with prompts #promptwall !',
                        isOptional: true
                    }
                ]
            },
            {
                id: 12,
                key: 'photorealistic-lifestyle-portrait',
                caption: 'Retrato Lifestyle Fotorrealista',
                subcategory: 'Retratos Digitales',
                prompt: `Based on <User Portrait>, create a photorealistic warm indoor lifestyle portrait of the uploaded person, looking up at the camera from a top-down angle with one eye closed in a playful wink and a subtle confident smile. The subject has long, straight, dark brown hair falling over one shoulder. One eye is winking, the other softly relaxed behind oversized black square eyeglasses with gentle window reflections. Expression is playful, flirty, relaxed, intimate. Pose: seated indoors, shoulders slightly angled, face tilted upward toward the camera, both hands holding a glass drink with a straw, relaxed posture, clean bare shoulder and collarbone, no visible tattoos. Attire: off-shoulder black ribbed knit sweater dress with an oversized black knit beanie. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'default',
                imageTypeHint: 'Ideal para: Retratos de medio cuerpo o primer plano con expresión.',
                detailedDescription: "Crea un retrato fotorrealista de estilo de vida con una pose juguetona y una sonrisa sutil. La IA utiliza tu foto para capturar tus rasgos exactos, vestimenta y expresión, resultando en una imagen íntima y de alta calidad.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['4:5', '1:1', '3:4', '9:16'],
            },
            {
                id: 11,
                key: 'comedic-pose-change',
                caption: 'Pose y Cara Graciosa',
                subcategory: 'Humor y Memes',
                prompt: `You are  an advanced image editing model. The user uploads one photo (Image A). Your task is to create a new image (Image B) in which: “only the main subject person’s pose and facial expression are changed into a very comedic, silly style,” while keeping everything else exactly the same. ${PRESERVE_IDENTITY_PROMPT} Make the expression obviously humorous and playful, not subtle.`,
                illustration: 'default',
                imageTypeHint: 'Ideal para: Retratos de cuerpo entero o medio cuerpo.',
                detailedDescription: "Transforma una foto seria en una versión cómica alterando solo la pose y expresión facial, manteniendo el fondo y la ropa intactos. Ideal para crear imágenes divertidas, memes personales o contenido viral.",
                mediaType: 'image',
                requiresAspectRatio: true,
            },
            {
                id: 150,
                key: 'kawaii-sticker-collage',
                caption: 'Collage de Stickers Kawaii',
                subcategory: 'Composiciones Gráficas',
                prompt: `Vertical 9:16 smartphone selfie collage. 5 irregular hand-cut sticker portraits of the same person from the reference photo. Thick white hand-drawn outlines, playful white doodles (hearts, stars, sparkles) between cutouts. Style: Japanese kawaii social media, soft indoor light. Subject: hairstyle and facial features exactly as in the reference photo, light peach-pink makeup, rosy nude lips. Outfit: white fuzzy neck warmer, blue-gray fair-isle sweater, cobalt diagonal chest strap. Five unique frames: 1. Direct gaze close-up with parted lips. 2. Calm centered portrait. 3. Cheek-contact wink with raised sleeve. 4. Upward side glance. 5. Tiny pout with hand on head. Asymmetric layout, varying tilts and scales, overlapping edges. Simple gray interior background. Realistic skin texture, natural imperfections, no uniform grid. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'default',
                imageTypeHint: 'Collage de 5 fotos estilo sticker kawaii con doodles.',
                detailedDescription: "Un collage vertical de 5 retratos estilo sticker con bordes blancos y dibujos hechos a mano (corazones, estrellas). Estética kawaii de redes sociales japonesas con poses variadas y divertidas.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['9:16'],
            },
            {
                id: 153,
                key: 'expression-collage-2x2',
                caption: 'Collage de 4 Expresiones',
                subcategory: 'Composiciones Gráficas',
                prompt: `Create a clean 2x2 collage grid with thin white borders separating each image. Use the exact same person from the reference photo. Keep their hairstyle, outfit, facial features, lighting style, and background 100% consistent across all four frames. Each frame is a photorealistic portrait with varied dynamic camera angles (different 3/4 views, slight low or high angles where appropriate for added energy and perspective, never fully straight-on). Include playful, exaggerated expressions and more dynamic, energetic body poses. Top-left frame (Frame 1 - Shy): Shy and timid expression. Looking slightly downward and to the side with soft doe eyes, gentle coy smile, visible soft blush on cheeks, shoulders raised slightly. Top-right frame (Frame 2 - Seductive): Seductive and confident expression. Looking directly at the camera with a slight smirk, one eyebrow raised, leaning forward slightly. Bottom-left frame (Frame 3 - Confident): Bold and energetic expression. Laughing or shouting with joy, arms raised, looking slightly upward. Bottom-right frame (Frame 4 - Longing): Dreamy and longing expression. Looking off to the side with a soft, thoughtful gaze, hand resting on her chin. The overall style is clean, modern, and high-energy. Render in 8K with a cinematic aesthetic. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'default',
                imageTypeHint: 'Collage 2x2 con 4 expresiones: Tímida, Seductora, Confiada y Soñadora.',
                detailedDescription: "Un collage de 2x2 que captura cuatro estados de ánimo diferentes de la misma persona. Ideal para mostrar versatilidad y expresividad en una sola imagen con un estilo cinematográfico y moderno.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['1:1', '3:4', '4:5'],
            },
            {
                id: 155,
                key: 'reality-vs-digital',
                caption: 'Realidad vs Digital',
                subcategory: 'Humor y Sátira',
                prompt: `[PROMPT_CONTENT]`,
                illustration: 'default',
                imageTypeHint: 'Contraste entre la realidad y la imagen editada.',
                detailedDescription: "Un contraste entre la cruda realidad de un vagón de metro y la imagen editada digitalmente en la pantalla de un móvil. Sátira social sobre los filtros y la imagen online.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['9:16', '3:4', '4:5'],
                dynamicFields: [
                    {
                        type: 'select',
                        key: 'reality_version',
                        label: 'Versión del Efecto',
                        isAdvanced: false,
                        defaultValue: 'Femenina (Plus-size)',
                        options: [
                            { 
                                label: 'Femenina (Plus-size)', 
                                values: { 
                                    '[PROMPT_CONTENT]': `A first-person POV deep focus shot, raw candid street photography, stark reality mood with unvarnished documentary color grading. In the extreme foreground on the left, a modern smartphone is held up, its screen sharply displaying a heavily digitally altered photography, slimmed-down portrait with they dame clothes. In the mid-ground stands the stark reality: a plus-size, heavy-set mid-20s , same female from the reference image with a round face and visible double chin. She is wearing a chunky ribbed pink knit cardigan, black faux-leather mini shorts, sheer black pantyhose, and black leather knee-high boots. She leans slightly slouched against a white tiled wall, looking down at her own phone held in both hands. The environment is a brightly lit Japanese subway station with overhead fluorescent lighting, featuring automated ticket gates, yellow directional signs, and blurred commuters in the background. Photorealistic, ultra-detailed textures. ${PRESERVE_IDENTITY_PROMPT}`
                                } 
                            },
                            { 
                                label: 'Masculina (Gordito Pelado)', 
                                values: { 
                                    '[PROMPT_CONTENT]': `A first-person POV deep focus shot, raw candid street photography, stark reality mood with unvarnished documentary color grading. In the extreme foreground on the left, a modern smartphone is held up, its screen sharply displaying a heavily digitally altered photography, idealized handsome portrait of the man from the reference image. In the mid-ground stands the stark reality: a plus-size, heavy-set mid-30s bald man with visible acne and grains on his face, same person from the reference image features. He is wearing a tight, slightly wrinkled gray t-shirt and loose fitting blue jeans. He leans slightly slouched against a white tiled wall, looking down at his own phone held in both hands. The environment is a brightly lit Japanese subway station with overhead fluorescent lighting, featuring automated ticket gates, yellow directional signs, and blurred commuters in the background. Photorealistic, ultra-detailed textures. ${PRESERVE_IDENTITY_PROMPT}`
                                } 
                            }
                        ]
                    }
                ]
            },
            {
                id: 156,
                key: 'world-style-illustrations',
                caption: 'Illustraciones del Mundo',
                subcategory: 'Estilos Artísticos',
                prompt: `Create an illustration of the person from the reference image:

[STYLE_REGION]-style illustration, with a distinct and memorable character design, natural and expressive facial emotions, half-body composition, and a dynamic pose. The clothing should feature intricate, refined details inspired by [REGION_DESC]. Use a hand-drawn doodle style with ink splashes, loose and spontaneous linework, and a mix of pastel tones with ink shading. Aim for a comic sketch texture. Keep the background minimal and white, with symbolic decorative elements scattered around the character. The overall atmosphere should be strong and evocative, with high detail and high quality. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'default',
                imageTypeHint: 'Tu retrato transformado en ilustraciones de diferentes culturas.',
                detailedDescription: "Una ilustración artística tipo 'doodle' con salpicaduras de tinta. Elige entre diferentes estilos culturales para ver cómo te imaginaría un artista de esa región.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['1:1', '3:4', '4:5'],
                dynamicFields: [
                    {
                        type: 'select',
                        key: 'illustration_style',
                        label: 'Estilo Regional',
                        defaultValue: 'Coreano',
                        options: [
                            { label: 'Coreano', values: { '[STYLE_REGION]': 'Korean', '[REGION_DESC]': 'modern Korean fashion' } },
                            { label: 'Japonés', values: { '[STYLE_REGION]': 'Japanese', '[REGION_DESC]': 'contemporary Japanese street style' } },
                            { label: 'Chino', values: { '[STYLE_REGION]': 'Chinese', '[REGION_DESC]': 'traditional-meets-modern Chinese elements' } },
                            { label: 'Alemán', values: { '[STYLE_REGION]': 'German', '[REGION_DESC]': 'clean and structured German design tropes' } },
                            { label: 'Francés', values: { '[STYLE_REGION]': 'French', '[REGION_DESC]': 'chic and effortless Parisian style' } },
                            { label: 'Africano', values: { '[STYLE_REGION]': 'African', '[REGION_DESC]': 'vibrant patterns and textures from African heritage' } },
                            { label: 'Argentino', values: { '[STYLE_REGION]': 'Argentine', '[REGION_DESC]': 'eclectic and artistic Buenos Aires vibes' } },
                            { label: 'Estadounidense', values: { '[STYLE_REGION]': 'American', '[REGION_DESC]': 'classic American pop-culture and urban wear' } }
                        ]
                    }
                ]
            },
        ]
    },
    'artistic-styles': {
        title: 'Estilos Artísticos',
        description: 'Convierte tus fotos en obras de arte, bocetos y caricaturas estilizadas.',
        images: [
            {
                id: 13,
                key: 'oil-painting',
                caption: 'Óleo Estilo Flamenco',
                subcategory: 'Pintura y Dibujo Clásico',
                prompt: `An oil painting of a [subject] in the Flemish style, thin glazes building luminous depth, [color1] and [color2] against a dark umber ground, visible brushwork in the impasto highlights, linseed oil sheen, craquelure beginning to form. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'default',
                imageTypeHint: 'Ideal para: Retratos, bodegones, paisajes.',
                detailedDescription: "Transforma tu foto en una pintura al óleo clásica estilo flamenco. Con glaseados finos, profundidad luminosa, pinceladas visibles y un acabado de época. Sube una foto para ver tu versión artística.",
                mediaType: 'image',
                requiresAspectRatio: true,
                dynamicFields: [
                    {
                        type: 'text',
                        key: '[subject]',
                        label: 'Sujeto',
                        defaultValue: 'person',
                        isOptional: false
                    },
                    {
                        type: 'text',
                        key: '[color1]',
                        label: 'Color 1',
                        defaultValue: 'prussian blue',
                        isOptional: false
                    },
                    {
                        type: 'text',
                        key: '[color2]',
                        label: 'Color 2',
                        defaultValue: 'amber',
                        isOptional: false
                    }
                ]
            },
            {
                id: 14,
                key: 'artistic-grid-collection',
                caption: 'Colección de Grids Artísticos',
                subcategory: 'Composiciones Gráficas',
                prompt: `[PROMPT_CONTENT]`,
                illustration: 'default',
                imageTypeHint: 'Selecciona el estilo de Grid Artístico.',
                detailedDescription: "Genera composiciones artísticas complejas en formato grid (múltiples paneles). Desde el estilo 'Raw Zine' de los 90 hasta el Pop Art vibrante o el cine de autor. Transforma una sola foto en una narrativa visual completa y estilizada.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['4:5', '3:4', '1:1', '2:3'],
                dynamicFields: [
                    {
                        type: 'select',
                        key: 'grid_style',
                        label: 'Estilo de Grid',
                        isAdvanced: true,
                        options: [
                            { 
                                label: 'Editorial 90s Zine (Raw)', 
                                values: { 
                                    '[PROMPT_CONTENT]': `six-image editorial collage arranged in a 2x3 grid, cohesive raw 90s zine fashion photography aesthetic, monochrome and desaturated film palette, heavy 35mm grain, scanned print texture, slight halation, imperfect focus and exposure, no text anywhere top-left panel: the subject in side/back profile, short wet-look hair tucked behind ear, hoop earring, structured jacket collar, soft diffused window light, quiet detached mood, shallow depth of field top-right panel: minimalist conceptual crop of multiple hands gripping black sleeves/forearms against an off-white seamless background, graphic negative space, matte blacks, subtle finger motion softness middle-left panel: experimental black-and-white profile of the subject with eyes obscured by a thick horizontal shutter-drag smear across the face, strong left-to-right motion blur, high contrast shadows, optical long exposure feel, no digital glitch middle-right panel: gritty documentary editorial still of the subject seated on the ground against worn wooden planks, legs forward, arms stretched wide to both sides, direct confrontational stare, harsh natural light, dirty textures, zine realism bottom-left panel: lo-fi archival upside-down portrait near water, abstract ripples and blur, washed highlights, soft focus, edge fogging, vignette, diary artifact feel bottom-right panel: minimalist cinematic monochrome shot of a solitary figure from behind on an empty beach wearing a long dark overcoat, overcast haze, large negative space, melancholic ending frame consistent analog look across all six panels, no typography, no captions, no logos, no watermarks. ${PRESERVE_IDENTITY_PROMPT}` 
                                } 
                            },
                            { 
                                label: 'Neon Pop Art (Vibrant)', 
                                values: { 
                                    '[PROMPT_CONTENT]': `A high-impact 2x2 artistic grid (4 panels) inspired by modern Andy Warhol meets Vogue Pop Art. 
Panel 1 (Top-Left): Extreme close-up of the subject's eye or lips with neon fluorescent makeup (electric blue and hot pink), high contrast studio flash, glossy skin texture.
Panel 2 (Top-Right): A high-contrast silhouette of the subject against a blindingly bright yellow background, bold graphic composition, sharp edges.
Panel 3 (Bottom-Left): A duotone portrait of the subject (Cyan and Magenta) with double-exposure elements of palm leaves or geometric shapes.
Panel 4 (Bottom-Right): A repeating pattern of the subject's face in a 3x3 mini-grid within the panel, mimicking a film contact sheet but with shifting vibrant color gels (Red, Green, Blue) over the lights.
Overall aesthetic: Saturated, glossy, hyper-stylized, commercial art, fashion editorial, no grain, clean lines. ${PRESERVE_IDENTITY_PROMPT}` 
                                } 
                            },
                            { 
                                label: 'Cinematic Color Study (Mood)', 
                                values: { 
                                    '[PROMPT_CONTENT]': `A 2x2 Cinematic Color Theory Grid inspired by the films of Wong Kar-wai. Each panel explores a different emotion through a dominant color, using the subject from the reference photo.
Panel 1 (Top-Left - RED): The subject smoking or waiting in a narrow corridor, bathed in deep crimson neon light. Mood: Passion/Danger. Slight motion blur on the hand.
Panel 2 (Top-Right - GREEN): The subject looking through a rainy window, reflection visible. Color palette dominated by sick-green and teal. Mood: Melancholy/Isolation.
Panel 3 (Bottom-Left - BLUE): The subject in a cold, industrial setting or night street. Cool blue steel tones, high contrast shadows. Mood: Detachment/Cold.
Panel 4 (Bottom-Right - GOLD): The subject in a warm, nostalgic sunset interior. Golden dust particles floating, rim lighting on hair. Mood: Nostalgia/Memory.
Overall aesthetic: Cinematic aspect ratio within panels, anamorphic lens flares, rich film grain, emotional storytelling. ${PRESERVE_IDENTITY_PROMPT}` 
                                } 
                            },
                            { 
                                label: 'Dark Gothic Triptych (Mystery)', 
                                values: { 
                                    '[PROMPT_CONTENT]': `A vertical 1x3 Triptych (Three tall vertical panels side-by-side) featuring the subject in a Victorian Gothic / Dark Academia aesthetic.
Panel 1 (Left): Close-up of the subject's hand holding a wilted black rose or an antique pocket watch. Lace textures, desaturated colors, high contrast.
Panel 2 (Center): A full ghostly portrait of the subject wearing a semi-transparent black veil or vintage mourning attire. The face is visible but ethereal, pale skin, dark eyes. Background is a foggy cemetery or old library.
Panel 3 (Right): A reflection of the subject in a shattered antique mirror. The reflection is slightly distorted, adding a psychological horror element.
Overall aesthetic: Daguerreotype texture, vignetting, scratches, dust, muted greens and blacks, haunting, romantic, mysterious. ${PRESERVE_IDENTITY_PROMPT}` 
                                } 
                            },
                            { 
                                label: 'Mixed Media Collage (Abstract)', 
                                values: { 
                                    '[PROMPT_CONTENT]': `A chaotic 2x2 grid simulating a physical Mixed Media Art Collage. The subject's photos are physically manipulated.
Panel 1: The subject's portrait is torn in half and taped back together with masking tape. Scribbles in charcoal and marker surround the head like a halo.
Panel 2: A black and white photo of the subject with colorful thick acrylic paint strokes (Yellow and Red) covering the eyes or mouth (censorship style).
Panel 3: A high-contrast Xerox/Photocopy transfer of the subject, gritty texture, high noise, overlaid with handwritten frantic notes and coffee stains.
Panel 4: A double exposure of the subject merged with a texture of peeling wall paint and urban graffiti.
Overall aesthetic: Punk rock, Dadaism, raw, textured, analog, handmade art journal style. ${PRESERVE_IDENTITY_PROMPT}` 
                                } 
                            },
                        ]
                    }
                ]
            },
            {
                id: 15,
                key: 'expressive-ink-mixed-media',
                caption: 'Boceto Tinta Expresiva',
                subcategory: 'Ilustración Urbana y Tinta',
                prompt: `Use the uploaded photo as the main face reference. Preserve the exact facial structure, skin tone, nose, eyes and expression from the reference image. A dramatic, high-impact portrait rendered in an expressive ink sketch and mixed-media illustration style, using the uploaded image for exact facial likeness and proportions. The person is shown in side profile, his presence intense and chaotic. His face and upper body are layered with [SKETCH_TEXT], symbols, and abstract glyphs, partially wrapping around facial contours, suggesting inner turmoil and hidden meaning. He wears a dark, abstract jacket, heavily textured strokes, sharp angular linework, and vibrant ink creating a raw, rebellious visual energy. The illustration is bold and experimental, blending fine pen detailing, aggressive brush marks, splashes, and controlled chaos. The background is a pale, aged parchment tone with grain, faded paper texture, delicate linework, ink stains—evoking an old manuscript or forgotten letter. High contrast, expressive composition, artistic chaos with precision, editorial art meets conceptual illustration, intense, and emotionally charged.`,
                illustration: 'default',
                imageTypeHint: 'Retrato artístico de perfil con tinta, texto y caos visual.',
                detailedDescription: "Transforma tu foto en una ilustración expresiva de técnica mixta con tinta, texto críptico y caos visual. Estilo editorial intenso, emocional y conceptual. Funciona mejor con retratos de perfil o primer plano.",
                mediaType: 'image',
                requiresAspectRatio: true,
                dynamicFields: [
                    {
                        type: 'text',
                        key: '[SKETCH_TEXT]',
                        label: 'Texto en el Boceto',
                        defaultValue: 'cryptic handwritten text',
                        isOptional: true
                    }
                ]
            },
            {
                id: 151,
                key: 'pen-and-ink-portrait',
                caption: 'Retrato a Pluma y Tinta',
                subcategory: 'Ilustración Urbana y Tinta',
                prompt: `A high-contrast pen and ink portrait of the person from the reference photo with a soulful gaze, based on a delicate pencil sketch. The style features intricate cross-hatching and fine-line stippling to create depth and shadow. The linework should be sharp and precise, mimicking a technical drawing pen on textured paper. Deep, dense ink shadows contrast against bright highlights on their skin, emphasizing their sharp cheekbones and expressive eyes. Minimalist background with subtle ink splatters and hatching. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'default',
                imageTypeHint: 'Retrato artístico a pluma y tinta con alto contraste.',
                detailedDescription: "Transforma tu foto en un retrato artístico a pluma y tinta de alto contraste. Con detalles intrincados de sombreado cruzado y puntillismo, sobre papel texturizado. Ideal para capturar una mirada profunda y rasgos definidos.",
                mediaType: 'image',
                requiresAspectRatio: true,
            },
            {
                id: 152,
                key: 'garnet-urban-illustration',
                caption: 'Ilustración Urbana Granate',
                subcategory: 'Ilustración Urbana y Tinta',
                prompt: `Bold graphic digital illustration, low-angle chest-up portrait, head slightly raised, confident street-inspired attitude. Strictly maintain subject’s exact facial identity and structure from reference image. Subject wearing garnet-red-tinted sunglasses, gold or dark red chain, patterned garnet-red streetwear jacket. Background: Large garnet-red circle with brush stroke texture, grunge paint splashes, deep red dark burgundy textured backdrop. Aesthetic: Sharp shading, clean edges, strong contrast, modern urban poster, street-art inspired. Lighting: High-contrast poster lighting, garnet-red reflections on sunglasses, garnet-red skin highlights. Dramatic urban mood, crisp illustration finish, high detail, sharp, 3:4 aspect ratio. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'default',
                imageTypeHint: 'Ilustración urbana con tonos granate y estilo street-art.',
                detailedDescription: "Conviértete en el protagonista de un póster urbano moderno. Estilo de ilustración digital audaz con sombras marcadas, contrastes fuertes y una paleta de colores granate y borgoña. Incluye gafas de sol tintadas y accesorios de estilo callejero.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['3:4', '4:5', '1:1']
            },
            {
                id: 37,
                key: 'dc-comic-page',
                caption: 'Página de Cómic Estilo DC',
                subcategory: 'Cómics y Anime',
                prompt: `[COMIC_PAGE_DESCRIPTION]. Single comic book page from a premium modern DC graphic novel, professional comic page layout with multiple dynamic panels (establishing shot + dramatic close-ups + action/emotion beats), classic American comic panel grid with thick black borders and white gutters, speech bubbles, thought bubbles and narrative captions in bold lettering, saturated cinematic reds, sharp blue-gray contrasts, painterly digital brush texture with neoclassical edge, intense dramatic lighting and shadows, highly expressive character faces and eyes full of emotion, bold storytelling and narrative tension, high impact visual --sref 1970644407 --stylize 650-850 --v 7 --cref [pega aquí el enlace de tu imagen] --cw 70-90 --s 750 ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'default',
                imageTypeHint: 'Ideal para crear páginas de cómic dinámicas.',
                detailedDescription: "Crea una página de cómic profesional al estilo de los cómics modernos de DC, con múltiples paneles, diálogos y una narrativa visual impactante.",
                mediaType: 'image',
                requiresAspectRatio: true,
                dynamicFields: [
                    {
                        type: 'text',
                        key: '[COMIC_PAGE_DESCRIPTION]',
                        label: 'Descripción de la Página de Cómic',
                        defaultValue: 'Single comic book page from a premium modern DC graphic novel, professional comic page layout with multiple dynamic panels (establishing shot + dramatic close-ups + action/emotion beats), classic American comic panel grid with thick black borders and white gutters, speech bubbles, thought bubbles and narrative captions in bold lettering, saturated cinematic reds, sharp blue-gray contrasts, painterly digital brush texture with neoclassical edge, intense dramatic lighting and shadows, highly expressive character faces and eyes full of emotion, bold storytelling and narrative tension, high impact visual',
                        isOptional: false
                    }
                ]
            },
            {
                id: 17,
                key: 'videogame-render-nb2',
                caption: 'Videojuego Render NB2',
                subcategory: 'Digital y Glitch',
                prompt: `{
  "subject": {
    "description": "A 3D CGI model of the referenced scene/image/character, rendered in the style of early 2000s animation software.",
    "era_context": "Circa 2003 video game cutscene or tech demo",
    "model_fidelity": "Low-to-mid poly count, visible polygonal edges on silhouettes",
    "render_style": {
      "software_emulation": "Autodesk Maya 4.0 / 5.0 (2003 era)",
      "rendering_engine": "Scanline or early Raycast",
      "lighting": {
        "setup": "Basic 3-point lighting",
        "shadows": "Sharp shadow maps (not soft raytraced)",
        "ambient": "Flat ambient color, lacking Global Illumination (GI)"
      },
      "artifacts": {
        "texture_filtering": "Bilinear filtering, slight blurriness on close-ups",
        "anti_aliasing": "Standard, slightly jagged edges",
        "compression": "Visible JPEG artifacts in texture maps"
      }
    }
  },
  "render_distance_logic": {
    "applies_if": "These settings apply only if the scene contains a distant background (such as visible sky, landscape, or remote buildings).",
    "fog_type": "Linear Distance Fog (not volumetric)",
    "fog_parameters": "Start distance: 20 meters; End distance: 100 meters. Objects beyond 100 meters must be fully occluded by the solid background color.",
    "background_clipping": "Extreme 'Far Clip Plane'. Distant buildings and sky should blend into a single, flat, desaturated haze color (e.g., light gray, pale blue, or muddy green).",
    "skybox_integration": "No high-resolution clouds or gradients. The sky should appear as a low-res 'box' texture that is partially obscured by the fog layer."
  },
  "background_simplification": {
    "description": "Complex backgrounds must be simplified to match the style of early 2000s CGI. Remove excessive detail, reduce geometry and texture density, and limit unique background props. Environments should emphasize large, simple polygonal surfaces and muted, low-resolution textures. Busy or intricate background elements must be either omitted, merged into simple shapes, or rendered as low-detail 'billboard' textures.",
    "avoid": [
      "Detailed foliage",
      "Crowded or realistic street scenes",
      "Overlapping background props",
      "High-frequency texture noise",
      "Complex lighting or shadow interactions in background"
    ]
  },
  "constraints": {
    "must_keep": [
      "Subject likeness (features, eye color)",
      "Exact pose",
      "Early 2000s CGI aesthetic",
      "Low-poly hair geometry"
    ],
    "avoid": [
      "Photorеalism",
      "High resolution textures",
      "Subsurface scattering",
      "Ambient occlusion",
      "Individual hair strands",
      "Modern PBR materials",
      "Depth of field/Bokeh",
      "UI elements",
      "Text overlays",
      "Grain/Film noise",
      "Plastic/Waxy skin texture",
      "Cel-shading",
      "Cartoon style",
      "Comic book art",
      "Hand-drawn lines",
      "Outlines around character/objects",
      "Flat shading",
      "2D look",
      "CRT scanlines"
    ]
  },
  "negative_prompt": [
    "cartoon",
    "comic book",
    "cel-shaded",
    "hand drawn",
    "outlines",
    "2d",
    "flat shading",
    "photograph",
    "realistic",
    "4k",
    "8k",
    "unreal engine 5",
    "octane render",
    "subsurface scattering",
    "detailed pores",
    "volumetric hair",
    "cinematic lighting",
    "soft shadows",
    "dslr",
    "fujifilm",
    "kodak",
    "pixel art"
  ]
} ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'default',
                imageTypeHint: 'Estilo cutscene de videojuego del 2003 (Low Poly).',
                detailedDescription: "Renderiza tu imagen como una cinemática de videojuego de principios de los 2000 (estilo PS2/Xbox). Estética nostálgica 'low-poly', texturas pixeladas y atmósfera retro-3D. Sube cualquier foto para verla en versión retro-3D.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['4:3', '1:1', '16:9', '3:4'],
            },
            {
                id: 18,
                key: 'mixed-reality-alter-ego-nb2',
                caption: 'Alter-Ego Anime: Realidad Mixta (NB2)',
                subcategory: 'Digital y Glitch',
                illustration: 'model-cover',
                imageTypeHint: 'Nano 🍌 2: Crea un reflejo anime 2D que imita tu ropa y rasgos faciales.',
                detailedDescription: "Genera una composición de realidad mixta donde tu yo real convive con un alter-ego estilo anime 2D. Reflejo estilizado con contornos neón vibrantes. Ideal para crear avatares virtuales únicos y llamativos.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['1:1', '4:5', '9:16', '3:4', '2:3'],
                prompt: `{
  "prompt_structure": {
    "subject_main": {
      "type": "Human Model",
      "appearance": {
        "identity_source": "EXACT_FACIAL_FEATURES_FROM_REFERENCE (REQUIRED)",
        "hair": "EXACT_HAIR_COLOR_AND_STYLE_FROM_REFERENCE",
        "expression": "Serious, confident, direct eye contact",
        "pose": "Standing straight, hands at sides, legs slightly apart",
        "skin_tone": "MATCH_FROM_REFERENCE"
      },
      "clothing": {
        "description": "EXACT_OUTFIT_REPLICA_FROM_REFERENCE",
        "note": "Maintain all original colors, textures, and details of the clothing from the reference image."
      }
    },
    "subject_secondary": {
      "type": "Anime/Sketch Avatar",
      "relation": "Stylized 2D reflection or alter-ego of the main subject",
      "style": "2D Anime illustration with cel-shading",
      "appearance": {
        "identity": "ANIME_VERSION_OF_REFERENCE_FACE",
        "hair": "ANIME_VERSION_OF_REFERENCE_HAIR",
        "pose": "Leaning casually against a frame/wall, hands in pockets, legs crossed",
        "outline": "Bright cyan/blue glowing outline"
      },
      "clothing": {
        "description": "2D_ANIME_ILLUSTRATION_OF_OUTFIT_FROM_REFERENCE",
        "note": "The 2D avatar must wear a stylized version of the exact same outfit from the reference image."
      },
      "placement": "Inside a sketched rectangular door frame to the right"
    },
    "background_environment": {
      "setting": "Studio grey backdrop",
      "lighting": "Soft, diffused studio lighting on the real model; flat illustrative lighting on the anime character",
      "elements": {
        "graffiti_sketches": {
          "left_side": "Abstract geometric shapes (triangles), paint splatters in red and yellow, rough sketch of a frame/window, white graffiti tag text",
          "right_side": "Ink splatters in black and white, rough sketch lines"
        },
        "floor": "Seamless studio floor blending into background"
      }
    },
    "technical_specs": {
      "resolution": "ultra_high_res",
      "aspect_ratio": "{aspectRatio}",
      "camera_style": "Full body shot, wide angle",
      "render_style": "Photorealistic mixed media",
      "quality_tags": [
        "High detail",
        "Sharp focus",
        "Professional photography",
        "Mixed reality",
        "2D vs 3D contrast",
        "Masterpiece"
      ]
    }
  }
} ${PRESERVE_IDENTITY_PROMPT}`
            },
            {
                id: 19,
                key: 'vectorized-portrait-red',
                caption: 'Retrato Vectorizado (Gafas Redondas)',
                subcategory: 'Digital y Glitch',
                prompt: `Close-up, high-detail portrait of the individual from the photo (face shape exactly the same as reference) rendered in a vectorized style with flat, saturated color blocking. The individual is in profile, looking right, with a serious expression. They wear small, round black sunglasses pushed down to reveal the eye. Outfit is a dark forest green/teal high-collared jacket. Lighting is bright, clean, and dramatic, originating from the front-right, creating sharp, well-defined shadows. Solid deep burgundy-red background. High resolution, extreme detail, clear edges. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'default',
                imageTypeHint: 'Ideal para: Retratos de cara o busto.',
                detailedDescription: "Crea un retrato vectorial de alto impacto con colores planos saturados, sombras dramáticas y gafas de sol redondas. Estilo gráfico limpio, moderno y audaz. Ideal para avatares de redes sociales estilizados.",
                mediaType: 'image',
                requiresAspectRatio: true,
            },
            {
                id: 20,
                key: '3d-caricature-v3',
                caption: 'Caricatura 3D (Estilo Pixar)',
                subcategory: 'Digital y Glitch',
                prompt: `Create a highly stylized 3D caricature of the person in the photo, featuring an oversized head, expressive facial features, and playful exaggeration. Render the model in a smooth, polished style with clean materials and soft ambient lighting, while incorporating dramatic, high‑contrast shadows to heighten the visual punch. Use a minimal, understated background to keep the focus on the character’s charm and presence. The overall aesthetic should blend vivid cartoon exaggeration with photorealistic lighting and texture detail. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'default',
                imageTypeHint: 'Ideal para: Foto de cara.',
                detailedDescription: "Transforma tu foto en una caricatura 3D pulida con estilo de animación moderna (tipo Pixar/DreamWorks). Incluye iluminación suave, texturas de alta calidad y una pose exagerada. Sube una foto expresiva para un resultado más divertido.",
                mediaType: 'image',
                requiresAspectRatio: true,
            },
            {
                id: 21,
                key: 'classic-caricature',
                caption: 'Caricatura Clásica (Dibujo)',
                subcategory: 'Digital y Glitch',
                prompt: `Create a fun, hand-drawn caricature of the person in the photo. The drawing should humorously exaggerate their most prominent facial features in a classic artistic style, while maintaining a clear and recognizable likeness. The final image should look like a skillful drawing on paper, not a 3D model or a simple photo filter.`,
                illustration: 'default',
                imageTypeHint: 'Ideal para: Foto de cara.',
                detailedDescription: "Genera una caricatura clásica dibujada a mano, exagerando los rasgos faciales con humor y personalidad, manteniendo una semejanza clara. Estilo de artista callejero tradicional. Perfecto para un regalo divertido o avatar único.",
                mediaType: 'image',
                requiresAspectRatio: true,
            },
            {
                id: 22,
                key: 'grayscale-sketch',
                caption: 'Boceto a Lápiz (B&N)',
                subcategory: 'Digital y Glitch',
                prompt: `Convert the uploaded photo into a stylized grayscale sketch: use clean, minimal linework with subtle charcoal‑or‑pencil shading on a textured paper background. Emphasize high contrast and clear silhouettes, but exaggerate facial features, keep the expression expressive, and soften the overall look. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'default',
                imageTypeHint: 'Ideal para: Foto de cara.',
                detailedDescription: "Convierte tu foto en un boceto artístico a lápiz o carboncillo con líneas limpias y sombreado sutil sobre una textura de papel realista. Ideal para un look clásico, artístico y elegante.",
                mediaType: 'image',
                requiresAspectRatio: true,
            },
            {
                id: 23,
                key: 'textured-illustration',
                caption: 'Ilustración Artística Texturizada',
                subcategory: 'Pintura y Dibujo Clásico',
                prompt: `Transform the image to a textured illustration style featuring: Rich, vibrant color palette with saturated hues and striking contrasts. Artistic brushstrokes that convey movement and depth. Layered, tactile textures—think paper, bark, or watercolor washes. Dynamic, expressive composition that guides the viewer’s eye. Detailed character design elements (e.g., ornate trims or symbolic motifs) that add narrative flair. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'default',
                imageTypeHint: 'Funciona bien con cualquier tipo de foto.',
                detailedDescription: "Reinterpreta tu imagen como una ilustración texturizada con pinceladas ricas, colores vibrantes y efectos táctiles. Estilo de libro de cuentos o arte conceptual. Sube cualquier foto para darle un toque pictórico y artístico.",
                mediaType: 'image',
                requiresAspectRatio: true,
            },
            {
                id: 24,
                key: 'glitch-ghosts',
                caption: 'Arte Glitch (Ecos RGB)',
                subcategory: 'Digital y Glitch',
                prompt: `Ref Image: Based on the provided reference image, keep the main subject in the center sharp, natural-colored, and completely unaffected by filters. Shadow Effect: Behind the main subject, generate four ghost-like duplicates of the same subject. Offset two duplicates to the left (colored Red and Blue) and two to the right (colored Yellow and Green). Glitch Effect: Apply heavy analog noise, VHS scan lines, and digital glitch artifacts ONLY to these four colored background layers, creating a gritty, unstable look behind the clean high-definition foreground subject. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'model-cover',
                imageTypeHint: 'Ideal para: Retratos con fondo simple.',
                detailedDescription: "Crea un efecto glitch con ecos RGB fantasmales detrás del sujeto principal. Estética digital corrupta, noise analógico y vibraciones VHS. Funciona mejor con retratos sobre fondos simples.",
                mediaType: 'image',
                requiresAspectRatio: true,
            },
            {
                id: 25,
                key: 'master-art-styles',
                caption: 'Estilos de Cómic y Anime',
                prompt: `[PROMPT_CONTENT]`,
                illustration: 'default',
                imageTypeHint: 'Elige un estilo de ilustración.',
                detailedDescription: "Transforma tu foto en estilos de cómic americano, anime japonés, acuarela o estatua de mármol. La IA adapta tu identidad al medio artístico seleccionado. Explora diferentes técnicas de ilustración profesional.",
                mediaType: 'image',
                requiresAspectRatio: true,
                dynamicFields: [
                    {
                        type: 'select',
                        key: 'art_style_selector',
                        label: 'Estilo de Dibujo',
                        isAdvanced: true,
                        options: [
                            { label: 'Estilo Anime', values: { '[PROMPT_CONTENT]': `Transform the person in the provided photograph into an anime/manga character. The style should be reminiscent of modern Japanese animation, with clean lines, expressive eyes, and stylized hair. Maintain the key facial features and expression of the person. ${PRESERVE_IDENTITY_PROMPT}` } },
                            { label: 'Estilo Webtoon (90s)', values: { '[PROMPT_CONTENT]': `Create a 90s anime/webtoon style illustration based on all the people and/or characters in the provided photo. It is critical to replicate the following artistic style precisely for everyone shown:\n\n- **Lineart**: Use a thin, stable brush. The lineart should be colored with a darker, more saturated version of the base color of each area, avoiding pure black.\n- **Coloring**: Apply clean, flat base colors.\n- **Skin Rendering**: Use a soft airbrush for shading with a slightly saturated, reddish shadow color. Apply a diffused blush to the cheeks, shoulders, and joints. Add small, hard-edged white highlights on the nose, lips, and clavicles.\n- **Hair Rendering**: Shade individual hair strands with soft gradients, adding sharp, defined shadows where strands overlap. Create crisp highlight shapes (like bands or ovals) with a light color, with a pure white dot in the center. Add a few very thin, loose strands for detail.\n- **Clothing Rendering (Shiny/Elastic Fabric)**: Combine soft shadows for overall volume with hard-edged shadows for folds. Apply sharp white highlights that follow the body's curves.\n- **Metal Rendering**: Use a 3-4 tone palette (dark shadow, mid-tone, light base, pure white highlight) with very sharp-edged highlights.\n- **Post-Production Effects**: Apply a slight chromatic aberration effect to the edges and adjust color curves to unify the palette and make the colors pop.` } },
                            { label: 'Estilo Cómic Americano', values: { '[PROMPT_CONTENT]': `Convert the person in the photograph into a classic American comic book character. The style should feature bold ink outlines, dynamic shading, halftone dot patterns for color, and a dramatic, action-oriented feel. ${PRESERVE_IDENTITY_PROMPT}` } },
                            { label: 'Pintura Acuarela', values: { '[PROMPT_CONTENT]': `Transform the provided photograph into a beautiful watercolor painting. The image should have soft, blended colors, visible brush strokes, and the characteristic texture of watercolor paper, while retaining the likeness of the person. ${PRESERVE_IDENTITY_PROMPT}` } },
                            { label: 'Estatua de Mármol', values: { '[PROMPT_CONTENT]': `Transform the person into a classical Greco-Roman marble statue. The entire figure, including hair and any clothing, must be rendered in a single, continuous polished white marble texture. Features should be idealized and chiseled, with the classic blank, pupil-less eyes of ancient sculptures. The pose should be noble and statuesque. ${PRESERVE_IDENTITY_PROMPT}` } },
                        ]
                    }
                ]
            },
            { id: 26, key: 'photo-to-anime', caption: 'Estilo Anime', subcategory: 'Cómics y Anime', prompt: `Transform the person in the provided photograph into an anime/manga character. The style should be reminiscent of modern Japanese animation, with clean lines, expressive eyes, and stylized hair. Maintain the key facial features and expression of the person. ${PRESERVE_IDENTITY_PROMPT}`, illustration: 'default', imageTypeHint: 'Ideal para: Foto de cara.', detailedDescription: "Versión anime moderna de tu foto con líneas limpias, ojos expresivos y peinado estilizado. Captura tu identidad con el encanto del manga japonés.", mediaType: 'image', requiresAspectRatio: true },
            { id: 27, key: 'photo-to-webtoon', caption: 'Estilo Webtoon (90s)', subcategory: 'Cómics y Anime', prompt: `Create a 90s anime/webtoon style illustration based on all the people and/or characters in the provided photo. It is critical to replicate the following artistic style precisely for everyone shown:\n\n- **Lineart**: Use a thin, stable brush. The lineart should be colored with a darker, more saturated version of the base color of each area, avoiding pure black.\n- **Coloring**: Apply clean, flat base colors.\n- **Skin Rendering**: Use a soft airbrush for shading with a slightly saturated, reddish shadow color. Apply a diffused blush to the cheeks, shoulders, and joints. Add small, hard-edged white highlights on the nose, lips, and clavicles.\n- **Hair Rendering**: Shade individual hair strands with soft gradients, adding sharp, defined shadows where strands overlap. Create crisp highlight shapes (like bands or ovals) with a light color, with a pure white dot in the center. Add a few very thin, loose strands for detail.\n- **Clothing Rendering (Shiny/Elastic Fabric)**: Combine soft shadows for overall volume with hard-edged shadows for folds. Apply sharp white highlights that follow the body's curves.\n- **Metal Rendering**: Use a 3-4 tone palette (dark shadow, mid-tone, light base, pure white highlight) with very sharp-edged highlights.\n- **Post-Production Effects**: Apply a slight chromatic aberration effect to the edges and adjust color curves to unify the palette and make the colors pop.`, illustration: 'default', imageTypeHint: 'Ideal para: Retratos con estilo retro.', detailedDescription: "Ilustración detallada estilo Webtoon/Anime de los 90. Incluye líneas definidas, coloreado plano y efectos de iluminación característicos de la época.", mediaType: 'image', requiresAspectRatio: true },
            { id: 28, key: 'photo-to-comic', caption: 'Estilo Cómic Americano', subcategory: 'Cómics y Anime', prompt: `Convert the person in the photograph into a classic American comic book character. The style should feature bold ink outlines, dynamic shading, halftone dot patterns for color, and a dramatic, action-oriented feel. ${PRESERVE_IDENTITY_PROMPT}`, illustration: 'default', imageTypeHint: 'Ideal para: Poses de acción.', detailedDescription: "Estilo cómic clásico americano con tramas, tintas fuertes y un toque dramático. Perfecto para poses de acción y narrativas gráficas.", mediaType: 'image', requiresAspectRatio: true },
            { id: 29, key: 'photo-to-watercolor', caption: 'Pintura Acuarela', subcategory: 'Pintura y Dibujo Clásico', prompt: `Transform the provided photograph into a beautiful watercolor painting. The image should have soft, blended colors, visible brush strokes, and the characteristic texture of watercolor paper, while retaining the likeness of the person. ${PRESERVE_IDENTITY_PROMPT}`, illustration: 'default', imageTypeHint: 'Ideal para: Paisajes y retratos suaves.', detailedDescription: "Efecto de pintura acuarela artística y suave con pinceladas visibles y textura de papel. Ideal para paisajes, retratos suaves y un look etéreo.", mediaType: 'image', requiresAspectRatio: true },
            { id: 30, key: 'marble-statue', caption: 'Estatua de Mármol', subcategory: 'Pintura y Dibujo Clásico', prompt: `Transform the person into a classical Greco-Roman marble statue. The entire figure, including hair and any clothing, must be rendered in a single, continuous polished white marble texture. Features should be idealized and chiseled, with the classic blank, pupil-less eyes of ancient sculptures. The pose should be noble and statuesque. ${PRESERVE_IDENTITY_PROMPT}`, illustration: 'default', imageTypeHint: 'Ideal para: Bustos y poses estáticas.', detailedDescription: "Conviértete en una escultura clásica de mármol blanco, con rasgos cincelados, pose noble y textura de piedra pulida. Ideal para bustos, retratos estáticos y un look atemporal.", mediaType: 'image', requiresAspectRatio: true },
            {
                id: 31,
                key: 'floating-head-animation-styles-nb2',
                caption: 'Estilos animados (cabeza flotante) NB2',
                subcategory: 'Cómics y Anime',
                prompt: `[PROMPT_CONTENT]`,
                illustration: 'default',
                imageTypeHint: 'Elige tu estilo de animación favorito. Solo la cabeza.',
                detailedDescription: "Genera una ilustración de 'cabeza flotante' en estilos icónicos como Gorillaz, Disney 90s o Dragon Ball. Captura tus rasgos en trazos animados. Ideal para stickers, avatares de perfil o diseños creativos.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['1:1', '4:5', '3:4'],
                dynamicFields: [
                    {
                        type: 'select',
                        key: 'animation_style_selector',
                        label: 'Estilo de Animación',
                        isAdvanced: true,
                        options: [
                            { 
                                label: 'Gorillaz (Jamie Hewlett)', 
                                values: { 
                                    '[PROMPT_CONTENT]': `Act as the lead character designer for the virtual band "Gorillaz" (in the style of Jamie Hewlett).
COMPOSITION (STRICTLY FLOATING HEAD): Generate an illustration of ONLY THE HEAD of the person from the reference photo. CRITICAL CONSTRAINT: Absolutely NO NECK, NO SHOULDERS, NO BODY PARTS. The head must be floating completely isolated.
VISUAL STYLE (GORILLAZ AESTHETIC): Mimic the iconic, gritty comic-book style of Gorillaz (Plastic Beach/Demon Days era). Linework must be expressive, textured, scratchy, and imperfect, with a slight ink-bleed feel.
CHARACTERIZATION: Give the character a distinct Gorillaz attitude: slightly cynical, tired eyes, exaggerated expressive mouth, and a cool, underground vibe.
COLOR & SHADING: Use a Soft Pastel Color Palette. Shading must be Hard-Edged Cel-Shading. No soft airbrushing.
BACKGROUND: Pure White (#FFFFFF). ${PRESERVE_IDENTITY_PROMPT}` 
                                } 
                            },
                            { 
                                label: 'Anime 90s (Sailor Moon)', 
                                values: { 
                                    '[PROMPT_CONTENT]': `Act as a lead animator for a 90s anime series.
COMPOSITION (STRICTLY FLOATING HEAD): Generate an illustration of ONLY THE HEAD of the person from the reference photo. CRITICAL CONSTRAINT: Absolutely NO NECK, NO SHOULDERS, NO BODY PARTS. The head must be floating completely isolated.
VISUAL STYLE (90s ANIME AESTHETIC): Replicate the classic hand-drawn cel animation look.
LINEWORK: Use clean, fine lines with slight imperfections, typical of ink on cel.
PROPORTIONS: Adapt the face to have very large, expressive, and detailed eyes with multiple specular highlights. The nose and mouth should be small and simple.
COLOR & SHADING: Use simple cel-shading with one or two hard-edged shadow tones. Apply a soft, diffused airbrush blush on the cheeks.
TEXTURE: Add a subtle film grain effect to emulate the analog recording process of the era.
BACKGROUND: Pure White (#FFFFFF). ${PRESERVE_IDENTITY_PROMPT}` 
                                } 
                            },
                            { 
                                label: 'Los Simpsons', 
                                values: { 
                                    '[PROMPT_CONTENT]': `Act as a character designer for The Simpsons.
TASK: Create a NEW Simpsons character head inspired by the person in the reference photo. This is an inspired creation, not a direct translation.
COMPOSITION (STRICTLY FLOATING HEAD): Generate an illustration of ONLY THE HEAD of the new character. CRITICAL CONSTRAINT: Absolutely NO NECK, NO SHOULDERS, NO BODY PARTS.
VISUAL STYLE (SIMPSONS AESTHETIC):
IDENTITY: CRITICAL: Skin MUST be Simpsons yellow. Create large, round white eyes with black dot pupils. Incorporate a pronounced overbite. Adapt the hairstyle, accessories, and general facial shape from the reference photo into the Simpsons style.
LINEWORK: Use a uniform, thick black outline.
COLOR & SHADING: Use completely flat, bright colors from the show's palette. No shading or gradients.
BACKGROUND: Pure White (#FFFFFF). ${PRESERVE_IDENTITY_PROMPT}` 
                                } 
                            },
                            { 
                                label: 'Dragon Ball Z (Toriyama)', 
                                values: { 
                                    '[PROMPT_CONTENT]': `Act as Akira Toriyama, creator of Dragon Ball Z.
TASK: Create a NEW Z-Fighter character head inspired by the person in the reference photo.
COMPOSITION (STRICTLY FLOATING HEAD): Generate an illustration of ONLY THE HEAD of the new character. CRITICAL CONSTRAINT: Absolutely NO NECK, NO SHOULDERS, NO BODY PARTS.
VISUAL STYLE (DBZ AESTHETIC):
IDENTITY: Adapt the key features into the sharp, angular style of DBZ. Create angular, intense eyes and a defined jawline. Reinterpret the hairstyle to be more spiky and dynamic.
LINEWORK: Use sharp, angular, and dynamic ink lines.
COLOR & SHADING: Use high-contrast cel-shading with vibrant, saturated primary colors.
BACKGROUND: Pure White (#FFFFFF). ${PRESERVE_IDENTITY_PROMPT}` 
                                } 
                            },
                            { 
                                label: 'Disney Clásico 2D (90s)', 
                                values: { 
                                    '[PROMPT_CONTENT]': `Act as a lead character animator from Disney's 90s renaissance era (e.g., Aladdin, The Little Mermaid).
COMPOSITION (STRICTLY FLOATING HEAD): Generate an illustration of ONLY THE HEAD of the person from the reference photo. CRITICAL CONSTRAINT: Absolutely NO NECK, NO SHOULDERS, NO BODY PARTS.
VISUAL STYLE (DISNEY 2D AESTHETIC):
PROPORTIONS: Adapt the face into the classic Disney style: large, expressive eyes that are anatomically plausible, softened and idealized features, and fluid, expressive hair.
LINEWORK: Use clean, fluid, and expressive lines, often self-colored (not always black).
COLOR & SHADING: Employ soft, painterly shading with subtle gradients to give a sense of volume and life.
BACKGROUND: Pure White (#FFFFFF). ${PRESERVE_IDENTITY_PROMPT}` 
                                } 
                            },
                            { 
                                label: 'Studio Ghibli (Miyazaki)', 
                                values: { 
                                    '[PROMPT_CONTENT]': `Act as a character designer for Studio Ghibli.
COMPOSITION (STRICTLY FLOATING HEAD): Generate an illustration of ONLY THE HEAD of the person from the reference photo. CRITICAL CONSTRAINT: Absolutely NO NECK, NO SHOULDERS, NO BODY PARTS.
VISUAL STYLE (GHIBLI AESTHETIC):
PROPORTIONS: Adapt the facial features with a softer, more grounded and realistic approach than typical anime. Capture a sense of wonder and gentleness in the expression.
LINEWORK: Use fine, delicate ink lines.
COLOR & SHADING: Use a soft, painterly watercolor aesthetic. The color palette should be more natural and slightly muted.
BACKGROUND: Pure White (#FFFFFF). ${PRESERVE_IDENTITY_PROMPT}` 
                                } 
                            },
                            { 
                                label: 'Cómic Moderno (Marvel/DC)', 
                                values: { 
                                    '[PROMPT_CONTENT]': `Act as a lead comic book artist for Marvel or DC Comics (e.g., Jim Lee style).
COMPOSITION (STRICTLY FLOATING HEAD): Generate an illustration of ONLY THE HEAD of the person from the reference photo, reimagined as a superhero. CRITICAL CONSTRAINT: Absolutely NO NECK, NO SHOULDERS, NO BODY PARTS.
VISUAL STYLE (MODERN COMIC AESTHETIC):
PROPORTIONS: Idealize the features into a "heroic realism" look with a strong jawline and intense eyes.
LINEWORK: Use dynamic, detailed black ink work with variable line weight. Use cross-hatching for shadow areas.
COLOR & SHADING: Use modern digital coloring with smooth gradients, but maintain defined, hard-edged shadows to retain the inked feel.
TEXTURE: Add a subtle overlay of halftone dots (Ben-Day dots) to emulate a printed comic book.
BACKGROUND: Pure White (#FFFFFF). ${PRESERVE_IDENTITY_PROMPT}` 
                                } 
                            },
                            { 
                                label: 'Estilo Arcane (Fortiche)', 
                                values: { 
                                    '[PROMPT_CONTENT]': `Act as a lead character artist at Fortiche Studio, in the style of the series "Arcane".
COMPOSITION (STRICTLY FLOATING HEAD): Generate a 3D-rendered but 2D-styled illustration of ONLY THE HEAD of the person from the reference photo. CRITICAL CONSTRAINT: Absolutely NO NECK, NO SHOULDERS, NO BODY PARTS.
VISUAL STYLE (ARCANE AESTHETIC): This is a unique 3D/2D hybrid.
TEXTURES: The face must look like it's textured with expressive, painterly brushstrokes, similar to an oil painting.
LINEWORK/SHADING: Overlay stylized, hatched 2D ink lines on top of the 3D model, especially in shadow areas, to create a graphic, gritty feel.
LIGHTING: Use dramatic, cinematic lighting (chiaroscuro) to sculpt the face.
BACKGROUND: Pure White (#FFFFFF). ${PRESERVE_IDENTITY_PROMPT}` 
                                } 
                            },
                            { 
                                label: 'Estilo Spider-Verse', 
                                values: { 
                                    '[PROMPT_CONTENT]': `Act as a character designer for "Spider-Man: Into the Spider-Verse".
COMPOSITION (STRICTLY FLOATING HEAD): Generate an illustration of ONLY THE HEAD of the person from the reference photo. CRITICAL CONSTRAINT: Absolutely NO NECK, NO SHOULDERS, NO BODY PARTS.
VISUAL STYLE (SPIDER-VERSE AESTHETIC): This is a stylized blend of 3D animation and 2D comic art.
EFFECTS: The final image must incorporate key visual elements:
1. Halftone Dots (Ben-Day dots) in the shaded areas.
2. Chromatic Aberration: A slight red/blue color separation on the outlines to mimic misaligned printing.
3. Kirby Krackle: (Optional) subtle energy dots if it fits the expression.
LINEWORK: Use expressive, imperfect ink lines.
SHADING: Use hard-edged cel-shading combined with the halftone patterns.
BACKGROUND: Pure White (#FFFFFF). ${PRESERVE_IDENTITY_PROMPT}` 
                                } 
                            },
                        ]
                    }
                ]
            },
            {
                id: 32,
                key: '3d-character-pink-pose',
                caption: 'Personaje 3D: Pose Dinámica',
                subcategory: 'Digital y Glitch',
                prompt: `A high-quality 3D animated character portrait inspired by modern Disney and Pixar film aesthetics, transforming the reference person into a stylized yet realistic 3D character with soft rounded facial anatomy, expressive eyes, natural proportions and smooth skin shading, shown from the bust up in a bold, exaggerated and highly creative pose with dynamic body language, playful torso twist, expressive shoulders and arms, and an over-the-top confident gesture that feels energetic, fun and visually striking, captured in a three-quarter diagonal angle, set against a solid pink background, rendered with a cinematic virtual animation camera using a medium portrait focal length, soft global illumination with warm key light and subtle rim light defining the silhouette, balanced yet dynamic professional composition with depth and volume, refined surface materials, realistic subsurface scattering and a polished feature-film-quality 3D render. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'default',
                imageTypeHint: 'Retrato 3D estilizado con pose exagerada y fondo rosa.',
                detailedDescription: "Transforma tu foto en un personaje de animación 3D moderno con una pose dinámica, divertida y expresiva sobre fondo rosa. Estilo visual de alta calidad, similar a películas de animación contemporáneas. Ideal para avatares y redes sociales.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['1:1', '3:4', '4:5', '9:16'],
            },
            {
                id: 154,
                key: 'full-cartoon-transformation',
                caption: 'Transformación Cartoon',
                subcategory: 'Digital y Glitch',
                prompt: `Transform the person into a vibrant, high-quality cartoon character. The style should be a mix of modern 3D animation and classic hand-drawn aesthetics. Bold colors, expressive eyes, and a clean, polished look. Maintain exact facial structure and identity. The background should be a simplified, colorful version of the original or a thematic environment. High resolution, professional illustration quality. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'default',
                imageTypeHint: 'Transformación completa a personaje de dibujos animados.',
                detailedDescription: "Convierte tu foto en un personaje de dibujos animados vibrante y expresivo. Una mezcla de estilo 3D moderno e ilustración clásica que mantiene tu identidad mientras te lleva al mundo de la animación.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['1:1', '3:4', '4:5', '9:16'],
            }
        ]
    },
    'memes': {
        title: 'Fábrica de Memes',
        description: 'Insértate en los memes más icónicos de internet.',
        images: [
            { id: 33, key: 'this-is-fine', caption: 'Meme "This is Fine"', subcategory: 'Humor y Memes', prompt: `Place the person in the "This is Fine" meme. They should be sitting at the table in the burning room, wearing the hat, and with a calm expression on their face, replacing the original dog character. ${PRESERVE_IDENTITY_PROMPT}`, illustration: 'default', imageTypeHint: 'Ideal para: Foto de medio cuerpo sentado/a.', detailedDescription: "Insértate en el clásico meme 'This is Fine', sentado tranquilamente mientras todo arde alrededor. La IA adapta tu pose y expresión al estilo del dibujo original. Perfecto para expresar calma ante el caos.", mediaType: 'image', requiresAspectRatio: true, },
            { id: 34, key: 'matrix-bg', caption: 'Fondo de Código Matrix', subcategory: 'Digital y Glitch', prompt: `Keep the person from the photo but replace the background with the cascading green code from The Matrix. Adjust the lighting to cast a green glow on the person. ${PRESERVE_IDENTITY_PROMPT}`, illustration: 'default', imageTypeHint: 'Funciona bien con cualquier tipo de foto.', detailedDescription: "Reemplaza el fondo con el icónico código verde de Matrix y ajusta la iluminación de tu rostro para que coincida con el entorno digital. Entra en la simulación. Funciona con cualquier tipo de retrato.", mediaType: 'image', requiresAspectRatio: true, },
            { id: 35, key: 'kamehameha', caption: 'Pose Kamehameha', subcategory: 'Humor y Memes', prompt: `Recreate the photo but have the person perform the Kamehameha energy attack from Dragon Ball Z. There should be a glowing blue ball of energy forming in their cupped hands. ${PRESERVE_IDENTITY_PROMPT}`, illustration: 'default', imageTypeHint: 'Ideal para: Foto de cuerpo entero.', detailedDescription: "Lanza un Kamehameha con efectos de energía azul brillante. La IA ajusta tu pose y añade la esfera de poder entre tus manos. Sube una foto posando como si lanzaras el ataque.", mediaType: 'image', requiresAspectRatio: true, },
            { id: 36, key: 'naruto-run', caption: 'Pose Carrera Naruto', subcategory: 'Humor y Memes', prompt: `Recreate the photo but capture the person doing the "Naruto run" pose, leaning forward with their arms stretched out behind them. ${PRESERVE_IDENTITY_PROMPT}`, illustration: 'default', imageTypeHint: 'Ideal para: Foto de cuerpo entero.', detailedDescription: "Corre como un ninja de Naruto, con los brazos hacia atrás y el cuerpo inclinado. Efecto de velocidad, estilo anime y energía ninja. Ideal para fotos de acción divertidas.", mediaType: 'image', requiresAspectRatio: true, },
        ]
    },
    'sculptures': {
        title: 'Esculturas Dinámicas',
        description: 'Crea esculturas fotorrealistas con materiales y texturas personalizables.',
        images: [
            {
                id: 125,
                key: 'dynamic-sculpture',
                caption: 'Escultura Dinámica Universal',
                subcategory: 'Esculturas Digitales',
                prompt: `A photorealistic full-body sculpture of a [Subject & Pose]. The figure is crafted from [Primary Material] and features a dramatic [Structural Element/Clothing] with intricate [Texture/Pattern]. [Accent/Glow Details]. It stands against a [Background/Environment]. [Lighting Condition], [Quality Tags]. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'default',
                imageTypeHint: 'Ideal para: Esculturas artísticas.',
                detailedDescription: "Crea una escultura fotorrealista de cuerpo completo con materiales y texturas personalizables. Elige el sujeto, material, estructura y detalles de iluminación para un resultado artístico único.",
                mediaType: 'image',
                requiresAspectRatio: true,
                dynamicFields: [
                    { 
                        type: 'select', 
                        key: '[Subject & Pose]', 
                        label: 'Sujeto y Pose', 
                        options: [
                            { label: 'Leaping female dancer', values: { '[Subject & Pose]': 'Leaping female dancer' } },
                            { label: 'Elegant silhouette', values: { '[Subject & Pose]': 'Elegant silhouette' } },
                            { label: 'Dancing woman with raised arms', values: { '[Subject & Pose]': 'Dancing woman with raised arms' } }
                        ]
                    },
                    { 
                        type: 'select', 
                        key: '[Primary Material]', 
                        label: 'Material Principal', 
                        options: [
                            { label: 'Metallic silver-grey', values: { '[Primary Material]': 'Metallic silver-grey' } },
                            { label: 'Oxidized teal and copper', values: { '[Primary Material]': 'Oxidized teal and copper' } },
                            { label: 'Matte cream resin', values: { '[Primary Material]': 'Matte cream resin' } },
                            { label: 'Matte black stone', values: { '[Primary Material]': 'Matte black stone' } }
                        ]
                    },
                    { 
                        type: 'select', 
                        key: '[Structural Element/Clothing]', 
                        label: 'Elemento Estructural/Ropa', 
                        options: [
                            { label: 'Web-like cape', values: { '[Structural Element/Clothing]': 'Web-like cape' } },
                            { label: 'Flared skirt-base', values: { '[Structural Element/Clothing]': 'Flared skirt-base' } },
                            { label: 'Dress transitioning into tree roots', values: { '[Structural Element/Clothing]': 'Dress transitioning into tree roots' } },
                            { label: 'Translucent cream dress', values: { '[Structural Element/Clothing]': 'Translucent cream dress' } }
                        ]
                    },
                    { 
                        type: 'select', 
                        key: '[Texture/Pattern]', 
                        label: 'Textura/Patrón', 
                        options: [
                            { label: 'Porous cellular cutouts', values: { '[Texture/Pattern]': 'Porous cellular cutouts' } },
                            { label: 'Intricate lattice structure', values: { '[Texture/Pattern]': 'Intricate lattice structure' } },
                            { label: 'Honeycomb perforations', values: { '[Texture/Pattern]': 'Honeycomb perforations' } }
                        ]
                    },
                    { 
                        type: 'select', 
                        key: '[Accent/Glow Details]', 
                        label: 'Detalles de Acento/Brillo', 
                        options: [
                            { label: 'Intense warm amber internal glow', values: { '[Accent/Glow Details]': 'Intense warm amber internal glow' } },
                            { label: 'Hanging glowing lightbulbs', values: { '[Accent/Glow Details]': 'Hanging glowing lightbulbs' } },
                            { label: 'Subtle neon edge lighting', values: { '[Accent/Glow Details]': 'Subtle neon edge lighting' } },
                            { label: 'Sparkling crystal accents', values: { '[Accent/Glow Details]': 'Sparkling crystal accents' } }
                        ]
                    },
                    { 
                        type: 'select', 
                        key: '[Background/Environment]', 
                        label: 'Fondo/Entorno', 
                        options: [
                            { label: 'Clean light grey studio', values: { '[Background/Environment]': 'Clean light grey studio' } },
                            { label: 'Dark moody museum hall', values: { '[Background/Environment]': 'Dark moody museum hall' } },
                            { label: 'Abstract geometric space', values: { '[Background/Environment]': 'Abstract geometric space' } },
                            { label: 'Lush overgrown garden', values: { '[Background/Environment]': 'Lush overgrown garden' } }
                        ]
                    },
                    { 
                        type: 'select', 
                        key: '[Lighting Condition]', 
                        label: 'Condición de Iluminación', 
                        options: [
                            { label: 'Dramatic directional lighting', values: { '[Lighting Condition]': 'Dramatic directional lighting' } },
                            { label: 'Soft diffused ambient light', values: { '[Lighting Condition]': 'Soft diffused ambient light' } },
                            { label: 'Harsh cinematic spotlight', values: { '[Lighting Condition]': 'Harsh cinematic spotlight' } },
                            { label: 'Ethereal rim lighting', values: { '[Lighting Condition]': 'Ethereal rim lighting' } }
                        ]
                    },
                    { 
                        type: 'select', 
                        key: '[Quality Tags]', 
                        label: 'Etiquetas de Calidad', 
                        options: [
                            { label: 'Highly detailed, 8k, high contrast', values: { '[Quality Tags]': 'Highly detailed, 8k, high contrast' } },
                            { label: 'Photorealistic, masterpiece, sharp focus', values: { '[Quality Tags]': 'Photorealistic, masterpiece, sharp focus' } },
                            { label: 'Artistic render, cinematic, volumetric lighting', values: { '[Quality Tags]': 'Artistic render, cinematic, volumetric lighting' } }
                        ]
                    }
                ]
            }
        ]
    }
};
