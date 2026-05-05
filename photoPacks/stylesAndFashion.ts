
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import type { PhotoPack } from './types';
import { PRESERVE_IDENTITY_PROMPT } from './types';

export const stylesAndFashionPacks: Record<string, PhotoPack> = {
    'hairstyles-2025': {
        title: 'Peinados 2025',
        description: 'Prueba las últimas tendencias en peinados para hombre y mujer.',
        images: [
            {
                id: 129,
                key: 'master-hair-salon',
                caption: 'Salón de Peluquería Virtual',
                subcategory: 'Peluquería y Peinados',
                prompt: `[PROMPT_CONTENT]`,
                illustration: 'hairstyle',
                imageTypeHint: 'Elige tu corte o estilo de pelo.',
                detailedDescription: "Prueba virtualmente los cortes y colores de cabello que serán tendencia en 2025. Desde el 'Wolf Cut' hasta colores pastel, manteniendo tus rasgos.\nSube una foto de frente con la frente despejada para mejores resultados.",
                mediaType: 'image',
                requiresAspectRatio: true,
                dynamicFields: [
                    {
                        type: 'select',
                        key: 'hair_style',
                        label: 'Estilo de Peinado',
                        isAdvanced: true,
                        options: [
                            { label: 'Corte Wolf Cut (F)', values: { '[PROMPT_CONTENT]': `Generate a photorealistic headshot of the person with a trendy 2025 "wolf cut" or "modern shag" hairstyle. The hair should have lots of texture, layers, and movement. Keep the background simple. ${PRESERVE_IDENTITY_PROMPT}` } },
                            { label: 'Look Húmedo (Sleek)', values: { '[PROMPT_CONTENT]': `Create a chic, high-fashion portrait of the person, showcasing a "slicked-back wet look" hairstyle, a key trend for 2025. The hair should look sleek and glossy, as if damp. The lighting should be sharp to highlight the texture. ${PRESERVE_IDENTITY_PROMPT}` } },
                            { label: 'Color Fantasía (Pastel)', values: { '[PROMPT_CONTENT]': `Reimagine the person with a trendy 2025 hairstyle featuring a bold yet soft fantasy color, like "peach fuzz" or pastel pink. The cut should be modern. ${PRESERVE_IDENTITY_PROMPT}` } },
                            { label: 'Textura Natural (Curls)', values: { '[PROMPT_CONTENT]': `Create a photorealistic portrait of the person, but with their hair styled to enhance its natural texture and curls, a major trend for 2025. The hairstyle should look effortless and voluminous. ${PRESERVE_IDENTITY_PROMPT}` } },
                            { label: 'Corona de Trenzas (F)', values: { '[PROMPT_CONTENT]': `Generate a portrait of the person with an elegant and intricate braided crown hairstyle, suitable for a special occasion. ${PRESERVE_IDENTITY_PROMPT}` } },
                            { label: 'Bob Francés (F)', values: { '[PROMPT_CONTENT]': `Give the person a chic French bob haircut with soft bangs, creating a classic and sophisticated look. ${PRESERVE_IDENTITY_PROMPT}` } },
                            { label: 'Mullet Moderno (Unisex)', values: { '[PROMPT_CONTENT]': `Create a stylish, modern version of the mullet hairstyle for the person, with shorter hair on top and longer hair in the back, in a fashionable way. ${PRESERVE_IDENTITY_PROMPT}` } },
                            { label: '90s Blowout (Volumen)', values: { '[PROMPT_CONTENT]': `Style the person's hair in a voluminous 90s supermodel blowout with lots of body and soft layers. ${PRESERVE_IDENTITY_PROMPT}` } },
                            { label: 'Pompadour Moderno (M)', values: { '[PROMPT_CONTENT]': `Create a portrait of the person with a modern pompadour hairstyle, featuring short sides and a voluminous, styled top. ${PRESERVE_IDENTITY_PROMPT}` } },
                            { label: 'Pelo Largo Ondulado (M)', values: { '[PROMPT_CONTENT]': `Reimagine the person with long, wavy, well-maintained hair for a rugged yet refined masculine look. ${PRESERVE_IDENTITY_PROMPT}` } },
                            { label: 'Buzz Cut Degradado (M)', values: { '[PROMPT_CONTENT]': `Give the person a clean and sharp buzz cut with a skin fade on the sides. ${PRESERVE_IDENTITY_PROMPT}` } },
                            { label: 'Corte Texturizado (M)', values: { '[PROMPT_CONTENT]': `Generate a portrait of the person with a popular textured crop hairstyle, short on the sides and slightly longer and messier on top. ${PRESERVE_IDENTITY_PROMPT}` } },
                            { label: 'Moño Alto Pulido (F)', values: { '[PROMPT_CONTENT]': `Style the person's hair in a sleek, polished high bun for an elegant and powerful look. ${PRESERVE_IDENTITY_PROMPT}` } },
                            { label: 'Rizos Pastel (F)', values: { '[PROMPT_CONTENT]': `Imagine the person with beautiful, defined curls dyed in a soft pastel color like lavender or mint green. ${PRESERVE_IDENTITY_PROMPT}` } },
                        ]
                    }
                ]
            }
        ]
    },
    'hair-style-designer': {
        title: 'Diseñador de Estilos de Cabello',
        description: 'Diseña tu estilo de cabello ideal basándote en el esquema de estilo urbano.',
        images: [
            {
                id: 130,
                key: 'hair-style-designer',
                caption: 'Diseñador de Estilos de Cabello',
                subcategory: 'Peluquería y Peinados',
                prompt: `[PROMPT_CONTENT]`,
                illustration: 'hairstyle',
                imageTypeHint: 'Ideal para retratos de cara o medio cuerpo.',
                detailedDescription: "Diseña un estilo de cabello detallado. Usa los campos para definir el corte, color, textura y acabado.",
                mediaType: 'image',
                requiresAspectRatio: true,
                templateData: {
                    '[PROMPT_CONTENT]': `Analyze the attached image to identify the character's facial features. Generate a photorealistic cinematic photograph of this exact character with a new hairstyle.
                            
                            Directives:
                            1. IDENTITY: Strictly preserve the facial features from the reference image.
                            2. HAIRSTYLE:
                                - Style Family: [STYLE_FAMILY]
                                - Base Color: [COLOR_BASE]
                                - Other Details: [OTHER_DETAILS]
                            3. ENVIRONMENT: Professional studio with a soft beige or white gradient background.
                            4. PHOTOGRAPHY: Shot on 85mm portrait lens, soft studio lighting, ultra sharp details, natural skin retouch, 8k resolution.`
                },
                dynamicFields: [
                    {
                        type: 'select',
                        key: 'style_family',
                        label: 'Familia de Estilo',
                        options: [
                            { label: 'Muy Corto', values: { '[STYLE_FAMILY]': 'very short' } },
                            { label: 'Corto', values: { '[STYLE_FAMILY]': 'short' } },
                            { label: 'Bob', values: { '[STYLE_FAMILY]': 'bob' } },
                            { label: 'Medio', values: { '[STYLE_FAMILY]': 'medium' } },
                            { label: 'Largo', values: { '[STYLE_FAMILY]': 'long' } },
                            { label: 'Extra Largo', values: { '[STYLE_FAMILY]': 'extra long' } },
                            { label: 'Moño', values: { '[STYLE_FAMILY]': 'long bun' } },
                        ]
                    },
                    {
                        type: 'select',
                        key: 'color_base',
                        label: 'Color de Cabello',
                        options: [
                            { label: 'Negro', values: { '[COLOR_BASE]': 'black' } },
                            { label: 'Marrón Mocha', values: { '[COLOR_BASE]': 'mocha brown' } },
                            { label: 'Marrón Ceniza', values: { '[COLOR_BASE]': 'ash brown' } },
                            { label: 'Beige', values: { '[COLOR_BASE]': 'beige brown' } },
                            { label: 'Marrón Castaño', values: { '[COLOR_BASE]': 'chestnut brown' } },
                            { label: 'Marrón Cálido', values: { '[COLOR_BASE]': 'warm brown' } },
                        ]
                    },
                    {
                        type: 'text',
                        key: '[OTHER_DETAILS]',
                        label: 'Otros detalles (Textura, Flequillo, Accesorios)',
                        placeholder: 'Ej: Ondulado, con flequillo recto, accesorios dorados...',
                        maxLength: 200,
                        defaultValue: 'Ondulado, natural',
                        isOptional: true
                    }
                ]
            }
        ]
    },
    'trending-outfits': {
        title: 'Outfits en Tendencia',
        description: 'Visualiza tu estilo con varios outfits de moda en un formato de foto "cowboy shot".',
        images: [
            {
                id: 131,
                key: 'random-high-fashion-nb2',
                caption: 'High Fashion Random 👋',
                subcategory: 'Outfits y Tendencias',
                prompt: `[PROMPT_CONTENT]`,
                illustration: 'model-cover',
                imageTypeHint: 'Nano 🍌 2: Editorial de moda de alto impacto. Siempre diferente.',
                detailedDescription: "Genera un concepto de moda aleatorio y único en cada intento. Desde avant-garde hasta lujo oscuro, la IA diseña el outfit y el escenario.\nPerfecto para descubrir estilos inesperados y creativos.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['3:4', '9:16', '4:5', '1:1'],
                dynamicFields: [
                    {
                        type: 'select',
                        key: 'gender_mode',
                        label: 'Género / Estilo',
                        options: [
                            {
                                label: 'Original',
                                values: {
                                    '[PROMPT_CONTENT]': `A bold, seductive, ultra-realistic editorial image where strength, femininity and confidence merge — powerful, intimate, and unmistakably high-fashion ${PRESERVE_IDENTITY_PROMPT}`
                                }
                            },
                            {
                                label: 'Femenino Full Body',
                                values: {
                                    '[PROMPT_CONTENT]': `A bold, seductive, ultra-realistic editorial image where strength, femininity and confidence merge — powerful, intimate, and unmistakably high-fashion.
                                    
                                    **CREATIVE RANDOMIZATION:** Generate a completely unique and randomized high-fashion concept for this shot. Select a distinct avant-garde or luxury outfit, a specific dramatic location, and a mood (e.g., dark romance, futuristic chic, urban grit, or ethereal luxury) that fits the "Bold & Seductive" theme. Ensure the styling is unique to this generation.
                                    
                                    The subject is a woman (based on the reference photo). The result must be a masterpiece of lighting and texture. ${PRESERVE_IDENTITY_PROMPT}`
                                }
                            },
                            {
                                label: 'Masculino Full Body',
                                values: {
                                    '[PROMPT_CONTENT]': `A bold, seductive, ultra-realistic editorial image where strength, masculinity and confidence merge — powerful, intimate, and unmistakably high-fashion.
                                    
                                    **CREATIVE RANDOMIZATION:** Generate a completely unique and randomized high-fashion concept for this shot. Select a distinct avant-garde, bespoke tailoring, or rugged luxury outfit, a specific dramatic location, and a mood (e.g., dark noir, futuristic structural, or minimalist chic) that fits the "Bold & Seductive" theme. Ensure the styling is unique to this generation.
                                    
                                    The subject is a man (based on the reference photo). The result must be a masterpiece of lighting and texture. ${PRESERVE_IDENTITY_PROMPT}`
                                }
                            }
                        ]
                    }
                ]
            },
            {
                id: 132,
                key: 'nascar-leather-man-nb2',
                caption: 'NASCAR Leather Man (NB2)',
                subcategory: 'Outfits y Tendencias',
                prompt: `GLOBAL STYLE & QUALITY
Hyper-realistic cinematic fashion photography, bold masculine aesthetic, premium texture fidelity, grounded realism, high-contrast clarity, shallow depth of field, subject dominance, modern motorsport atmosphere, 8K detail, natural proportions, no stylization, no fantasy

SUBJECT (MAN)
Attractive man in his late 20s to early 30s, athletic and fit physique, broad shoulders, strong chest line, masculine posture, confident but controlled presence

POSE & MOVEMENT
Man walking alone at the center of a NASCAR race track
Track has a subtle banked curve, realistic NASCAR geometry
One step captured mid-stride:
• Front leg stepping slightly crossed forward
• Foot still a few centimeters above the ground, not yet touching
• Weight naturally transitioning
Upper body relaxed but purposeful

HANDS & ACTION (IMPORTANT)
Hands slightly forward from the body
Wearing black leather gloves with perforated knuckles
One hand gripping the glove at the wrist, pulling and adjusting it, creating visible tension in leather
Action feels natural, not posed

FACE & EXPRESSION
Face partially outside the frame or turned away from camera
Gaze focused forward, as if locked onto something ahead
Expression serious, determined, calm dominance
Strong cheekbones, defined jawline
Lightly rugged black beard, slightly unkempt but intentional

HAIR
Thick black hair
Front strands partially falling forward
Subtle wind lifts some strands upward, adding motion and realism
No over-styling, natural volume

SKIN
Bronzed skin tone
Slight natural grit and realism, not dirty but lived-in
Skin texture clearly visible under cinematic light

OUTFIT
BOTTOM
• Black slim-fit denim jeans
• Structured fit emphasizing legs
• High-quality fabric with subtle creasing
BELT
• Stylish, premium belt
• Clearly visible buckle, understated but masculine
TOP
• Black fitted t-shirt
• Clean neckline, hugs chest and shoulders naturally
OUTERWEAR
• Brown leather jacket
• Inner lining made of visible shearling / sheep wool
• Collar folded outward, thick wool texture clearly visible
• Jacket slightly open, responding to walking motion
GLOVES
• Black leather
• Perforated knuckle design
• Matte finish with subtle highlights

ENVIRONMENT / SETTING
NASCAR race track, asphalt texture clearly defined in foreground
Faint tire marks trailing behind the subject
Light tire smoke or rubber haze lingering in the background
Background elements blurred with cinematic bokeh, no readable signage
Track lines and curvature subtly visible

CAMERA & FRAMING
Medium-to-full body shot
Man dominates the frame
Camera slightly low and forward-facing, emphasizing authority
Subject sharply in focus, background softly blurred
Camera: RED Komodo / ARRI Alexa Mini style
Lens: 50mm
Aperture: f/2.0
Shutter: 1/500
ISO: 100

LIGHTING
Natural daylight with cinematic contrast
Directional light grazing leather jacket, belt buckle, and gloves
Soft highlights on face structure and hair
No harsh shadows, no artificial light sources visible

ATMOSPHERE & MOOD
Controlled power
Masculine confidence
Motion, speed, and calm authority
Feels like a moment between action and impact

FINAL RESULT GOAL
A cinematic, hyper-realistic image of a confident man walking through the center of a NASCAR track, frozen mid-stride.
Leather textures, motion, and subtle environmental effects create a powerful, grounded, modern masculine aesthetic. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'model-runway',
                imageTypeHint: 'Nano 🍌 2: Estilo masculino cinemático en pista de carreras. Cuerpo entero.',
                detailedDescription: "Retrato masculino potente caminando por una pista de NASCAR. Chaqueta de cuero, guantes y atmósfera de velocidad.\nSube una foto de cuerpo entero o medio cuerpo para un look cinematográfico.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['4:5', '9:16', '1:1', '3:4']
            },
            {
                id: 133,
                key: 'master-fashion-stylist',
                caption: 'Estilista de Moda Personal',
                subcategory: 'Outfits y Tendencias',
                prompt: `[PROMPT_CONTENT]`,
                illustration: 'outfit',
                imageTypeHint: 'Elige un estilo de ropa para probar.',
                detailedDescription: "Visualiza cómo te quedan las tendencias actuales como 'Lujo Silencioso' o 'Techwear' en un plano medio. La IA genera el outfit completo y el entorno.\nIdeal para encontrar inspiración para tu próximo look.",
                mediaType: 'image',
                requiresAspectRatio: true,
                dynamicFields: [
                    {
                        type: 'select',
                        key: 'outfit_style',
                        label: 'Estilo / Outfit',
                        isAdvanced: true,
                        options: [
                            { label: 'Lujo Silencioso (Quiet Luxury)', values: { '[PROMPT_CONTENT]': `Generate a "cowboy shot" (from mid-thigh up) of the person dressed in a "quiet luxury" outfit, featuring high-quality, minimalistic pieces like a cashmere sweater and well-tailored trousers. The setting is sophisticated and urban. ${PRESERVE_IDENTITY_PROMPT}` } },
                            { label: 'Colores Vibrantes (Dopamine)', values: { '[PROMPT_CONTENT]': `Create a photorealistic "cowboy shot" of the person embracing "dopamine dressing". The outfit should be vibrant and bold, using a confident mix of bright, contrasting colors against a lively street art scene. ${PRESERVE_IDENTITY_PROMPT}` } },
                            { label: 'Estilo Western Moderno', values: { '[PROMPT_CONTENT]': `Reimagine the person in a "modern western" outfit. The image must be a "cowboy shot" and include stylish elements like a contemporary denim jacket and leather boots against a rustic, sunlit landscape. ${PRESERVE_IDENTITY_PROMPT}` } },
                            { label: 'Look Deportivo (Athleisure)', values: { '[PROMPT_CONTENT]': `Generate a photorealistic "cowboy shot" of the person wearing a trendy "sporty chic" or "athleisure" outfit in a modern, well-lit gym or studio. ${PRESERVE_IDENTITY_PROMPT}` } },
                            { label: 'Techwear / Gorpcore', values: { '[PROMPT_CONTENT]': `Create a "cowboy shot" of the person in a functional and futuristic techwear or gorpcore outfit, featuring technical fabrics and straps, in a modern urban environment. ${PRESERVE_IDENTITY_PROMPT}` } },
                            { label: 'Cottagecore', values: { '[PROMPT_CONTENT]': `Depict the person in a romantic cottagecore outfit, like a flowy dress or linen shirt, in a beautiful countryside or garden setting. ${PRESERVE_IDENTITY_PROMPT}` } },
                            { label: 'Dark Academia', values: { '[PROMPT_CONTENT]': `Generate a "cowboy shot" of the person in a dark academia aesthetic, wearing tweed, turtlenecks, or blazers in a library or university setting. ${PRESERVE_IDENTITY_PROMPT}` } },
                            { label: 'Y2K Revival', values: { '[PROMPT_CONTENT]': `Reimagine the person in a Y2K revival outfit, featuring elements like low-rise jeans, vibrant colors, and metallic fabrics. ${PRESERVE_IDENTITY_PROMPT}` } },
                            { label: 'Punk Rock', values: { '[PROMPT_CONTENT]': `Transform the person with a punk rock look, including a leather jacket, band t-shirt, and ripped jeans, in an edgy, urban night setting. ${PRESERVE_IDENTITY_PROMPT}` } },
                            { label: 'Gala Formal', values: { '[PROMPT_CONTENT]': `Create an image of the person dressed for a formal gala in an elegant evening gown or a sharp tuxedo. ${PRESERVE_IDENTITY_PROMPT}` } },
                            { label: 'Look Playero', values: { '[PROMPT_CONTENT]': `Depict the person in a stylish and relaxed beach vacation outfit, such as a linen shirt and shorts or a sundress, on a sunny beach. ${PRESERVE_IDENTITY_PROMPT}` } },
                            { label: 'Minimalismo Escandinavo', values: { '[PROMPT_CONTENT]': `Generate a "cowboy shot" of the person in a minimalist Scandinavian outfit with clean lines, neutral colors, and simple silhouettes. ${PRESERVE_IDENTITY_PROMPT}` } },
                            { label: 'Estilo Bohemio', values: { '[PROMPT_CONTENT]': `Reimagine the person in a bohemian festival outfit, featuring fringe, crochet, and floral patterns, ready for a music festival. ${PRESERVE_IDENTITY_PROMPT}` } },
                            { label: 'Preppy / Ivy League', values: { '[PROMPT_CONTENT]': `Transform the person with a preppy, Ivy League look, wearing items like a cable-knit sweater, collared shirt, and chinos. ${PRESERVE_IDENTITY_PROMPT}` } },
                        ]
                    }
                ]
            }
        ]
    },
    'wardrobe-styles': {
        title: 'Transformación de Vestuario',
        description: 'Reimagina tu ropa con texturas y materiales de diferentes universos: medieval, sci-fi, cosplay o K-pop.',
        images: [
            {
                id: 134,
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
            }
        ]
    },
    'fashion-poster': {
        title: 'Póster de Moda',
        description: 'Crea pósters de marketing de moda profesionales con diseño de paneles.',
        images: [
            {
                id: 128,
                key: 'fashion-marketing-poster',
                caption: 'Póster de Moda Premium',
                subcategory: 'Diseño de Pósters',
                prompt: `A high-resolution, professional fashion marketing poster presented in a precise split-panel layout.
Layout & Color: The left side features a solid blue-green panel (like a deep teal or eucalyptus color). The right side uses a light gray textured, crumpled-paper background, giving the poster a tactile feel. A thin, subtle white border outlines the main panels.
The Hero Image (Left): Prominently displayed and floating on the blue-green panel is a detailed, long-sleeved A-line maxi dress. It is made of a high-end, mottled watercolor fabric with abstract floral and marble patterns in muted blues, soft greys, and cream. The dress is richly embellished with elaborate handcrafted gold embroidery, pearl beads, and clusters of teal and blue crystals at the deep V-neckline and at the cuffs of the sleeves, featuring a detailed floral and geometric pattern.
The Multi-Panel Column (Right): A vertical column of three smaller photo insets, each with rounded gray borders.
Top Panel: A full-body view of a model in the dress, seated elegantly in a minimalist gray modern chair. The model wears a coordinating light gray hijab.
Middle Panel: A close-up view focusing on a model's hands holding a small, decorative brass incense burner (censer) on a plate. This detail highlights the cuff embroidery.
Bottom Panel: A standing front-view portrait of the model in the dress, showing the drape and the placement of the neckline embroidery.
Typography (Crucial):
On the blue-green panel, vertically aligned on the far left edge, the text reads "A&H FASHION" (in a large, clean, white outline font style).
At the top of the blue-green panel, horizontally placed, the word reads "PREMIUM" (in a bold, solid, clean white sans-serif font).
Footer & Call to Action (Important): At the bottom center, a dark gray textured block features a prominent horizontal banner that reads "PLACE YOUR ORDER NOW!" in bold white text. Below this banner, there are two distinct panels:
Left Panel: A horizontal row of nine small, circular fabric swatches displaying complementary colors (e.g., deep blue, ruby, emerald, charcoal, sage, mauve, blush, taupe, silver). Above the swatches, smaller white text reads "DIFFERENT COLORS AVAILABLE".
Right Panel: A horizontal list of size labels. Above it, smaller white text reads "ALL SIZES AVAILABLE". Below, the sizes are listed: "XS | S | M | L | XL | XXL", separated by fine vertical lines. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'default',
                imageTypeHint: 'Ideal para: Marketing de moda.',
                detailedDescription: "Póster de marketing de moda profesional con diseño dividido, tipografía elegante y detalles de producto.",
                mediaType: 'image',
                requiresAspectRatio: true,
            }
        ]
    },
    'vogue-vista-infographic': {
        title: 'Vogue Vista: Elegance Defined',
        description: 'Crea una infografía de marketing de alta costura fusionando tu rostro con un vestido de referencia.',
        images: [
            {
                id: 135,
                key: 'elegance-defined-marketing',
                caption: 'Elegance Defined (Vogue Vista)',
                subcategory: 'Campañas de Marketing',
                prompt: `A high-fashion marketing infographic, titled "Elegance Defined" by Vogue Vista, showcasing a sophisticated bespoke collection. 
                
                **CENTRAL MODEL:** The main subject is the person from Reference Image 1, now serving as the lead model. She is posing confidently, wearing the EXACT OUTFIT, garment, and accessories shown in Reference Image 2. The fabric, texture, color, and silhouette must be an identical match to the clothing in Image 2. She is set against a clean, neutral, minimalist high-end studio background.
                
                **INFOGRAPHIC LAYOUT ELEMENTS:**
                - **Top Header:** Bold, elegant typography reads "ELEGANCE DEFINED" with a smaller "Vogue Vista" signature logo.
                - **Fit & Style Guide:** A dedicated sidebar section with minimalist text and clean icons explaining the silhouette and tailored fit of the garment from Image 2.
                - **Premium Attributes:** A high-end panel highlighting the "Premium Fabric" and "Artisanal Finish" of the dress, with macro-detail textures visible.
                - **Color Collection:** A sophisticated row featuring six circular fabric swatches in complementary shades that match the palette of the main dress.
                - **Occasion Pairing Guide:** Across the bottom, a horizontal series of 4 large, prominent square panels showing the outfit in different realistic lifestyle contexts (e.g., high-end gala, outdoor garden party, modern art gallery, business luncheon). These panels should be clearly visible and detailed, making up a significant portion of the lower third of the composition.
                
                **STYLE:** High-end commercial fashion photography, sharp focus on fabric textures, soft flattering studio lighting, cinematic composition, 8K resolution, professional graphic design integration. 
                
                ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'default',
                imageTypeHint: 'Foto 1: Tu rostro. Foto 2: El vestido de referencia.',
                detailedDescription: "Genera una infografía completa de campaña de moda. Fusiona tu identidad con el vestido de una segunda foto en un diseño profesional con guías de estilo y paletas de colores.",
                requiresSecondImage: true,
                mediaType: 'image',
                requiresAspectRatio: true,
            }
        ]
    },
    'editorial-grid-3x3': {
        title: 'Grid Editorial 3x3',
        description: 'Una composición minimalista e íntima de 9 paneles en estudio beige.',
        images: [
            {
                id: 136,
                key: 'editorial-minimalist-grid-3x3',
                caption: 'Editorial 3x3 (Introspective)',
                subcategory: 'Efectos Multi-Panel',
                prompt: `Editorial 3x3 photo grid in a clean soft beige studio. Character (matches reference 100%) wearing lightweight dark navy shirt, ivory trousers, barefoot for raw simplicity. Lighting: large diffused key light directly front-right, silver reflector left, subtle rim from top. Shots to include: 1. extreme close-up of lips + cheekbone with blurred hand partially covering (85mm, f/1.8, razor-thin DOF); 2. tight crop on eyes looking into lens with reflection of light strip visible (85mm, f/2.0); 3. black & white close portrait resting chin on fist, face filling frame (50mm, f/2.2); 4. over-shoulder shot, blurred foreground fabric curtain framing half face (85mm, f/2.0); 5. very close frontal with hands overlapping face, light streak across eyes (50mm, f/2.5); 6. tight angled portrait showing hair falling into eyes, soft-focus background (85mm, f/2.2); 7. crop of hands touching jawline, eyes cropped out (50mm, f/3.2, detail-focused); 8. half-body seated sideways on low cube, head turned sharply away, blurred foreground (35mm, f/ 4.5); 9. intense close-up of profile with single tear-like water droplet, cinematic light slice across (85mm, f/ 1.9). Angles: mostly tight headshots with slight high/low tilts, maintaining variation. Capture RAW, professional muted grade, smooth tonal contrast, subtle cinematic grain. Mood: intimate, introspective, character-led editorial minimalism with delicate use of fabric as prop. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'default',
                imageTypeHint: 'Genera un grid de 3x3 con un estilo editorial minimalista e íntimo.',
                detailedDescription: "Un grid de 9 imágenes que captura momentos íntimos y detallados con una estética de estudio limpia. Enfoque en texturas, miradas y poses introspectivas.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['1:1', '4:5']
            }
        ]
    },
    'magazine-editorial-spread': {
        title: 'Magazine Editorial Spread',
        description: 'Crea un diseño editorial de revista de estilo de vida japonés con múltiples fotos y tipografía.',
        images: [
            {
                id: 137,
                key: 'magazine-interior-spread-jp',
                caption: 'Interior de Revista (Estilo Japonés)',
                subcategory: 'Diseño Editorial',
                prompt: `Use the person in the reference image as the main subject, preserving their facial features, hairstyle, and overall vibe. Create a English magazine editorial interior spread, not a cover. The layout should look like a feature article or interview page from a modern Japanese lifestyle magazine. Include one main portrait photo, several smaller lifestyle/detail photos, clean editorial typography, headline, section label, multi-column body text, captions, generous white space, and a refined grid layout. Soft natural daylight, subtle film texture, minimalist Japanese styling, calm literary atmosphere, realistic and understated. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'default',
                imageTypeHint: 'Genera un diseño de artículo de revista con tipografía y varias fotos.',
                detailedDescription: "Un diseño sofisticado que simula el interior de una revista de estilo de vida japonesa. Incluye una foto principal, miniaturas de detalles y bloques de texto elegantes sobre un fondo limpio.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['3:2', '4:3']
            }
        ]
    },
    'smartphone-fashion-editorial': {
        title: 'Smartphone Fashion Editorial',
        description: 'Un collage de 4 imágenes con estética de smartphone e iluminación de estudio.',
        images: [
            {
                id: 138,
                key: 'smartphone-fashion-collage-4p',
                caption: 'Smartphone Editorial (4 Paneles)',
                subcategory: 'Efectos Multi-Panel',
                prompt: `Ultra-realistic smartphone fashion editorial, 4-image square collage (1:1 grid layout), evenly spaced frames, clean borders.

Subject: A highly attractive young person (early 20s), same person across all 4 frames, soft feminine features, smooth light skin tone with visible natural texture, natural facial symmetry, expressive eyes, warm playful smile.  hair styled in loose natural waves with subtle shine. Makeup is natural glam – dewy skin, soft blush, light lip tint.

Outfit: Minimal modern casual – fitted white sleeveless crop top, loose straight-leg blue denim jeans, clean white sneakers.

Poses (4 frames):
1. Full-body standing pose, relaxed posture, slight hip shift, candid smile.
2. Crouching pose, one hand resting on chin, confident playful gaze.
3. Casual seated pose on floor, leaning slightly back, natural laugh.
4. Upper-body portrait, soft eye contact, gentle sensual expression.

Environment: Minimal studio setup with clean light-gray seamless backdrop and neutral floor.

Lighting: Soft diffused studio lighting, subtle directional shadows, even exposure, natural skin tones, soft highlights.

Style: Shot on smartphone camera (iPhone aesthetic), slight lens distortion, natural dynamic range, candid editorial fashion look.

Mood: Fresh, youthful, confident, subtly sensual elegance.

Color palette: white, denim blue, soft gray, neutral tones.

Camera: Eye-level perspective, natural framing, slight depth.

Post-processing: Minimal editing, clean finish, soft contrast, very light natural grain, no over-smoothing.

Quality: Ultra-detailed, high realism, sharp focus, professional fashion photography look. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'default',
                imageTypeHint: 'Genera un collage de 4 fotos estilo smartphone con diferentes poses casuales.',
                detailedDescription: "Una cuadrícula de 1:1 que simula una sesión editorial capturada con smartphone. Incluye cuatro poses variadas (cuerpo completo, agachado, sentado y retrato) con una estética fresca y juvenil.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['1:1']
            }
        ]
    },
    'character-luxury-cover': {
        title: 'Character Luxury Cover',
        description: 'Genera un póster conceptual de nivel coleccionista basado en un personaje con estética de lujo.',
        images: [
            {
                id: 139,
                key: 'minimalist-fashion-character-cover',
                caption: 'Póster de Personaje: Lujo Minimalista',
                subcategory: 'Diseño Editorial',
                prompt: `Minimalist high-fashion cover aesthetic, high-end editorial portrait, independent art curation, luxury brand visual language and motion texture.
No matter the theme — anime characters, game characters, original creations, mythological figures, or abstract concepts — this universal material template can be fully applied. It automatically generates exclusive styling based on the character: fashion styling, hairstyle, texture, posing, facial expression, lighting, color tone, symbolic system, serial number markings, explanatory notes, and overall poster layout language.
The core design logic is to shape the character as a cover icon, not a rigid standing illustration.
Large areas of negative space, low information density, restrained typography, neat and premium layout unity, paired with exclusive symbolic elements for each character, reshape the artwork into an avant-garde fashion magazine cover or a collectible character art curation poster.
Image upgrading, high-end cosplay vision, AI character portrait project.
The core keywords are not excessive detail stacking, but: restraint, order, breathing space, uniqueness, cover character texture.

Replace only the core character name to reuse the complete prompt.
Automatically generate a collectible-level conceptual poster based on [PERSONAJE] – [SERIE] / [SAGA].

Overall style: minimalist fashion cover + high-end editorial portrait.
The character specified as the sole core subject, center or off-center composition, pure and restrained background, low visual information density, strong sense of breathing space, order and luxury brand-level high-end texture.
Character costume, modeling, texture, posture, expression, light and shadow, color grading and symbolic system are all naturally derived from the character’s original setting, ensuring high recognition, unique visual system and strong thematic identification. No rigid template duplication, no uniform style skin replacement.
Automatically generate the most fitting subtitles, short slogans, serial numbers and vertical annotation information. Ultra-minimal premium typesetting, loose kerning, restrained structure and modern tension. Text is integrated into the visual design, non-intrusive, no tacky oversized magazine typography.
Final visual effect: avant-garde modern fashion magazine cover, luxury brand conceptual campaign poster, high-collection-value character art poster.
Quiet, mysterious, exquisite and restrained, with complete aesthetic texture and collectible quality.
No complex scene collage, no low-quality fan-art style, no ordinary anime promotional illustration, no overloaded information, no messy background, no templated face swapping.
Signature: ART3DLABS Culture.
The signature is placed in a low-key, restrained layout, located in blank or soft tone areas with small and delicate size, highly unified with the overall premium poster design. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'default',
                imageTypeHint: 'Sube tu foto. Elige personaje, serie y saga para el póster.',
                detailedDescription: "Póster conceptual de alta gama estilo revista de lujo. Transforma a cualquier personaje con un diseño minimalista, tipografía refinada y amplios espacios de aire.",
                mediaType: 'image',
                requiresAspectRatio: true,
                dynamicFields: [
                    { type: 'text', key: '[PERSONAJE]', label: 'Personaje', placeholder: 'Ej: Cell (Perfect Form)', isOptional: true },
                    { type: 'text', key: '[SERIE]', label: 'Serie', placeholder: 'Ej: Dragon Ball Z', isOptional: true },
                    { type: 'text', key: '[SAGA]', label: 'Saga', placeholder: 'Ej: Android Saga', isOptional: true },
                ]
            }
        ]
    },
    'fashion-editorial-split': {
        title: 'Editorial Split (Modelo & Outfit)',
        description: 'Diseño de revista con modelo a la izquierda y tablero de prendas a la derecha.',
        images: [
            {
                id: 143,
                key: 'fashion-split-design',
                caption: 'Diseño Editorial Split',
                subcategory: 'Diseño Editorial',
                prompt: `Fashion editorial layout, split design with model photo on the left and styled outfit board on the right, modern minimal magazine aesthetic. 

On the left: The person from Reference Image 1, preserving their facial identity, bone structure, and hairstyle perfectly, is wearing the exact outfit, colors, fabrics, and accessories shown in Reference Image 2. The model is posed in a natural, candid fashion shot against a neutral city street background with soft natural lighting.

On the right: A neatly arranged outfit flat lay displaying the exact garments and accessories from Reference Image 2, accompanied by color palette swatches derived from the outfit, fabric texture samples, and clean typography sections like “Style Notes,” “Why You’ll Love It,” and “Perfect For.” 

Editorial typography, muted tones, luxury minimalist branding, balanced grid layout, high-end fashion magazine style, ultra-realistic, sharp details, soft shadows. \${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'default',
                imageTypeHint: 'Foto 1: Tu rostro. Foto 2: La ropa/outfit que quieres ver.',
                detailedDescription: "Un diseño premium de revista que combina una foto de modelaje con un 'board' de productos. Usa tu cara (Foto 1) y la ropa de la Foto 2 para crear un spread editorial completo.",
                requiresSecondImage: true,
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['1:1', '4:5', '3:2']
            }
        ]
    },
    'personal-color-analysis': {
        title: 'Análisis de Color Personal',
        description: 'Descubre qué colores te favorecen más con un análisis cromático gráfico.',
        images: [
            {
                id: 140,
                key: 'personal-color-analysis-graphic',
                caption: 'Análisis de Colorimetría',
                subcategory: 'Estilo y Colorimetría',
                prompt: `Create a personal color analysis graphic using this portrait. Point out which season colour suits the subject best (Spring, Summer, Autumn, or Winter). Show side-by-side clothing color comparisons in a professional grid to highlight which colors suit the subject best. List out what texture, accessories, and hairstyle suit the subject best based on their seasonal color profile. Make it visual-first, with short labels only and no paragraphs. The layout should be clean, professional, and sophisticated, like a high-end image consultancy report. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'default',
                imageTypeHint: 'Sube un retrato claro de frente con iluminación natural.',
                detailedDescription: "Genera un gráfico profesional de asesoría de imagen. Identifica tu estación cromática, muestra comparativas de colores y recomienda texturas y accesorios ideales.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['1:1', '4:5']
            }
        ]
    }
};
