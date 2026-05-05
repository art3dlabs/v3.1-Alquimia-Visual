
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import type { PhotoPack } from './types';
import { PRESERVE_IDENTITY_PROMPT } from './types';

export const professionalPortraitsPack: Record<string, PhotoPack> = {
    'professional': {
        title: 'Profesiones y LinkedIn',
        description: 'Mejora tu presencia profesional con fotos de alta calidad para tu perfil.',
        images: [
            {
                id: 101,
                key: 'professional-portrait-collection',
                caption: 'Retrato Profesional',
                subcategory: 'LinkedIn y Retratos Corporativos',
                prompt: `Create a professional portrait of the person in the photo. [PROFESSION_PROMPT]. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'professional-profile',
                imageTypeHint: 'Elige tu profesión o estilo.',
                detailedDescription: "Obtén un retrato profesional pulido y de alta calidad adaptado a tu profesión. La IA aplica iluminación de estudio y el entorno adecuado para resaltar tu imagen. Transmite competencia, confianza y seriedad.",
                mediaType: 'image',
                requiresAspectRatio: true,
                dynamicFields: [
                    {
                        type: 'select',
                        key: 'profession_selector',
                        label: 'Profesión o Estilo',
                        options: [
                            { label: 'Perfil Profesional (General)', values: { '[PROFESSION_PROMPT]': 'The person should have a confident and friendly expression, be dressed in business casual attire, and be set against a clean, slightly blurred office or neutral background.' } },
                            { label: 'Retrato Corporativo', values: { '[PROFESSION_PROMPT]': 'They should be in a modern office setting, dressed in professional business attire. The pose should be confident and engaging, suitable for a company website.' } },
                            { label: 'Médico/a', values: { '[PROFESSION_PROMPT]': 'Depict the person as a compassionate and professional doctor in a modern medical setting, wearing a lab coat or scrubs.' } },
                            { label: 'Chef', values: { '[PROFESSION_PROMPT]': 'Reimagine the person as a professional chef in a bustling kitchen, wearing a chef\'s uniform and focused on their craft.' } },
                            { label: 'Artista', values: { '[PROFESSION_PROMPT]': 'Transform the person into an artist in their studio, surrounded by canvases and art supplies, looking creatively inspired.' } },
                            { label: 'Piloto', values: { '[PROFESSION_PROMPT]': 'Create a portrait of the person as a confident airline pilot in a cockpit or on an airfield, wearing a pilot\'s uniform.' } },
                            { label: 'Científico/a', values: { '[PROFESSION_PROMPT]': 'Generate an image of the person as a scientist in a laboratory, perhaps holding a beaker or looking into a microscope.' } },
                            { label: 'Bombero/a', values: { '[PROFESSION_PROMPT]': 'Depict the person as a heroic firefighter in full gear, with a fire station or fire truck in the background.' } },
                            { label: 'Músico/a', values: { '[PROFESSION_PROMPT]': 'Reimagine the person as a musician on stage, passionately playing an instrument like a guitar or piano under stage lights.' } },
                            { label: 'Atleta', values: { '[PROFESSION_PROMPT]': 'Transform the person into a focused athlete in their sport\'s environment, such as a runner on a track or a basketball player on a court.' } },
                            { label: 'Programador/a', values: { '[PROFESSION_PROMPT]': 'Create an image of the person as a software developer, focused on a screen with code in a modern tech office setting.' } },
                            { label: 'Profesor/a', values: { '[PROFESSION_PROMPT]': 'Generate a portrait of the person as a friendly and engaging teacher in a classroom, with a whiteboard or bookshelves in the background.' } },
                        ]
                    }
                ]
            },
            {
                id: 102,
                key: 'corporate-executive-headshot',
                caption: 'Retrato Ejecutivo Corporativo',
                subcategory: 'LinkedIn y Retratos Corporativos',
                prompt: `Cinematic, ultra-realistic corporate headshot of the same person from the reference image. Preserve the exact face, skin tone, hair, and identity. Do not alter or smooth the face. Style: modern professional executive portrait. Subject wears a [CLOTHING_OPTION]. Lighting is soft, even studio lighting with gentle directional shadows for depth. Background is clean and minimal with a soft dark grey or warm beige gradient blur. Shot with an 85mm portrait lens, f/1.8 aperture, shallow depth of field, tack-sharp focus on the eyes, natural pores and skin texture, zero over-smoothing. Expression is confident, calm, and approachable with a slight natural smile. High dynamic range, realistic color grading, 8K resolution, photorealistic quality. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'professional-profile',
                imageTypeHint: 'Ideal para: LinkedIn y perfiles corporativos.',
                detailedDescription: "Retrato ejecutivo ultra realista con opciones de vestuario corporativo. Iluminación de estudio cinematográfica y enfoque nítido para una imagen profesional impecable.",
                mediaType: 'image',
                requiresAspectRatio: true,
                dynamicFields: [
                    {
                        type: 'select',
                        key: '[CLOTHING_OPTION]',
                        label: 'Vestuario Corporativo',
                        options: [
                            { label: 'Traje Azul Marino (Navy Suit)', values: { '[CLOTHING_OPTION]': 'tailored dark navy suit with a crisp white shirt and a subtle silk tie' } },
                            { label: 'Traje Gris Marengo (Charcoal Suit)', values: { '[CLOTHING_OPTION]': 'modern charcoal grey suit with a light blue shirt' } },
                            { label: 'Traje Negro Clásico (Black Suit)', values: { '[CLOTHING_OPTION]': 'classic black tailored suit with a white shirt and black tie' } },
                            { label: 'Blazer y Camisa (Business Casual)', values: { '[CLOTHING_OPTION]': 'stylish navy blazer over a white open-collar shirt' } },
                            { label: 'Suéter Formal (Formal Sweater)', values: { '[CLOTHING_OPTION]': 'premium dark grey cashmere sweater over a collared shirt' } },
                            { label: 'Camisa Blanca Impecable (Crisp White Shirt)', values: { '[CLOTHING_OPTION]': 'perfectly ironed crisp white dress shirt' } },
                            { label: 'Blusa de Seda Profesional (Silk Blouse)', values: { '[CLOTHING_OPTION]': 'elegant professional silk blouse in a soft neutral tone' } },
                            { label: 'Vestido de Negocios Elegante (Business Dress)', values: { '[CLOTHING_OPTION]': 'sophisticated and professional dark-colored business dress' } },
                            { label: 'Chaqueta Ejecutiva (Executive Jacket)', values: { '[CLOTHING_OPTION]': 'sharp executive blazer over a professional top' } },
                        ]
                    }
                ]
            },
            {
                id: 103,
                key: 'minimal-fashion-portrait',
                caption: 'Retrato de Moda Minimalista',
                subcategory: 'Retrato Académico y Editorial',
                prompt: `Generate a high-end fashion studio portrait of the person in the photo. The subject should be in a relaxed, confident full-body pose, standing straight with one leg slightly forward and hands relaxed naturally. The setting is a professional studio with a plain soft beige or white gradient background, clean and minimal with no distractions. Professional studio lighting with a soft key light from the front, fill light for balance, and subtle rim light to create even lighting, soft shadows, and smooth highlights. Eye-level framing, 85mm portrait lens, f/4 aperture, slight background blur, subject fully in focus. High-end fashion studio portrait style, clean, modern, professional vibe, neutral tones with soft contrast. Clean cinematic color grading, ultra sharp details, natural skin retouch, 8k resolution, ultra photorealistic, high detail skin texture, fabric texture, and lighting. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'professional-profile',
                imageTypeHint: 'Ideal para: Retrato de moda de cuerpo entero.',
                detailedDescription: "Un retrato de moda de alta gama en estudio, minimalista, limpio y profesional. La IA adaptará la pose, el estilo y la iluminación a la persona en la foto de referencia para un acabado de revista de moda.",
                mediaType: 'image',
                requiresAspectRatio: true,
            },
            {
                id: 122,
                key: 'academic-library-portrait',
                caption: 'Retrato Académico en Biblioteca',
                subcategory: 'Retrato Académico y Editorial',
                prompt: `A high-quality, realistic portrait of the person from the reference photo, smiling and wearing glasses. They are wearing a black ribbed turtleneck sweater and holding an open book. The setting is a bright, modern library or university study space with floor-to-ceiling glass windows in the background, showing a clean architectural courtyard. On the white desk in front of them are a laptop and several books. The lighting is soft and natural, creating a professional yet warm academic atmosphere. Photorealistic, 8K, ultra-detailed skin and fabric textures. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'professional-profile',
                imageTypeHint: 'Ideal para: Perfiles académicos o profesionales.',
                detailedDescription: "Retrato profesional en una biblioteca moderna y luminosa. Suéter de cuello alto negro, gafas y un ambiente académico cálido y sofisticado.",
                mediaType: 'image',
                requiresAspectRatio: true,
            },
        ]
    },
    'model': {
        title: 'Moda y Editorial',
        description: 'Protagoniza portadas de revista, desfiles y campañas publicitarias.',
        images: [
            { id: 104, key: 'cover', caption: 'Portada de Revista de Moda', subcategory: 'Portadas y Editorial', prompt: `Reimagine the person in this photo as a high-fashion model on the cover of a prestigious fashion magazine. The style should be avant-garde, with dramatic lighting, an artistic pose, and haute couture clothing. ${PRESERVE_IDENTITY_PROMPT}`, illustration: 'model-cover', imageTypeHint: 'Ideal para: Foto de medio cuerpo con estilo.', detailedDescription: "Conviértete en la estrella de una portada de revista de alta costura con iluminación vanguardista y pose artística. El resultado es digno de una editorial de moda.\nIdeal para fotos con actitud y estilo.", mediaType: 'image', requiresAspectRatio: true, },
            { id: 105, key: 'edgy-formal-suit', caption: 'Traje Formal Edgy (Lollipop)', subcategory: 'Portadas y Editorial', prompt: `{
  "image_request": {
    "subject": {
      "type": "Young adult woman",
      "identity_constraint": "Use facial features and makeup exactly from the attached reference image; no changes or enhancement to face",
      "vibe": "Powerful, confident, edgy elegance",
      "expression": "Serious, composed, steady confidence",
      "gaze": "Direct and unwavering eye contact with the camera"
    },
    "pose_and_posture": {
      "position": "Seated",
      "posture": "Strong, grounded, confident",
      "hands": {
        "action": "One hand raised holding a round lollipop",
        "details": "Long pointed black stiletto nails clearly visible"
      },
      "presence": "Cinematic authority with relaxed control"
    },
    "hair": {
      "color": "",
      "style": "",
      "details": [
        "Light fringe partially covering forehead and eyes",
        "Natural movement, slightly imperfect"
      ]
    },
    "face_and_makeup": {
      "face": "Exact facial structure preserved from reference",
      "makeup_style": "Warm editorial makeup",
      "eyes": {
        "shadow": "Brown eyeshadow",
        "definition": "Natural yet sharp eye definition"
      },
      "lips": {
        "color": "Nude to matte orange tone",
        "finish": "Soft matte, realistic texture"
      },
      "piercing": {
        "type": "Septum piercing",
        "visibility": "Prominent and centered"
      }
    },
    "attire": {
      "suit": {
        "type": "Oversized tailored suit",
        "color": "Black or very dark brown",
        "fit": "Relaxed, wide, masculine-inspired silhouette",
        "details": [
          "Wide lapels",
          "Modern structured tailoring"
        ]
      },
      "shirt": {
        "type": "Classic white shirt",
        "collar": "High collar",
        "sleeves": "Long sleeves rolled slightly over jacket cuffs"
      },
      "tie": {
        "type": "Slim black tie",
        "style": "Loosely and simply tied"
      }
    },
    "tattoos": {
      "forearm": {
        "text": "Amalia",
        "style": "Clear, readable lettering"
      },
      "hand": {
        "details": [
          "Small eagle tattoo",
          "Fine line tattoos on fingers and palm"
        ]
      }
    },
    "environment": {
      "location": "Professional studio",
      "background": "Plain cream or off-white backdrop",
      "atmosphere": "Minimalist, cinematic, focused entirely on subject"
    },
    "lighting": {
      "type": "Soft warm studio lighting",
      "direction": "Side lighting",
      "effect": [
        "Soft shadows",
        "Accentuated facial structure",
        "Clear fabric and texture definition",
        "No harsh contrast"
      ]
    },
    "camera_and_quality": {
      "style": "High-fashion editorial portrait",
      "angle": "Straight-on framing",
      "lens": "50–85mm fashion portrait lens look",
      "depth_of_field": "Shallow but realistic",
      "focus": "Ultra-sharp on face and outfit",
      "resolution": "Ultra-detailed 8K photorealism"
    },
    "aesthetic": {
      "vibe": [
        "Edgy formal fashion",
        "Modern power dressing",
        "Cinematic editorial portrait",
        "Confident minimalist luxury"
      ]
    },
    "negative_prompt": [
      "face alteration",
      "beauty filter",
      "CGI",
      "3D render",
      "illustration",
      "cartoon",
      "plastic skin",
      "over-smoothing",
      "harsh lighting",
      "busy background",
      "blur",
      "distorted anatomy",
      "AI artifacts"
    ]
  }
} ${PRESERVE_IDENTITY_PROMPT}`, illustration: 'model-cover', imageTypeHint: 'Nano 🍌 2: Retrato editorial edgy con traje, tatuajes y lollipop.', detailedDescription: "Genera un retrato de moda 'edgy' y minimalista con traje oversize, corbata y un lollipop. Incluye detalles como uñas stiletto y tatuajes finos.\nSube una foto con mirada directa y confiada para maximizar el impacto.", mediaType: 'image', requiresAspectRatio: true, supportedAspectRatios: ['4:5', '3:4', '9:16', '1:1'] },
            { id: 106, key: 'runway', caption: 'Desfile de Moda en Pasarela', subcategory: 'Desfile y Publicidad', prompt: `Transform the person into a runway model, capturing them mid-stride on a catwalk during a high-fashion show. The image must convey movement and confidence, with typical lighting and audience blur. Full-body shot. ${PRESERVE_IDENTITY_PROMPT}`, illustration: 'model-runway', imageTypeHint: 'Ideal para: Foto de cuerpo entero caminando.', detailedDescription: "Camina por la pasarela de un desfile de alta costura. La imagen captura el movimiento, la iluminación de show y el desenfoque del público.\nUsa una foto de cuerpo entero para simular el andar de modelo.", mediaType: 'image', requiresAspectRatio: true, },
            { id: 107, key: 'street-style', caption: 'Foto de Moda Estilo Urbano', subcategory: 'Desfile y Publicidad', prompt: `Create a candid-style street fashion photo of the person in a stylish, trendy outfit in a city like New York or Paris. ${PRESERVE_IDENTITY_PROMPT}`, illustration: 'model-runway', imageTypeHint: 'Ideal para: Foto de cuerpo entero.', detailedDescription: "Foto de street style candid en una capital de la moda como NY o París. Outfit trendy y ambiente urbano espontáneo.\nPerfecto para lucir estilos casuales pero sofisticados.", mediaType: 'image', requiresAspectRatio: true, },
            { id: 108, key: 'beauty-ad', caption: 'Anuncio de Belleza (Primer Plano)', subcategory: 'Desfile y Publicidad', prompt: `Generate a close-up beauty advertisement shot focusing on the person's face, with flawless makeup and perfect lighting to highlight their features. ${PRESERVE_IDENTITY_PROMPT}`, illustration: 'model-cover', imageTypeHint: 'Ideal para: Foto de cara.', detailedDescription: "Primer plano publicitario de belleza con maquillaje impecable e iluminación que resalta la piel y las facciones.\nSube una foto de cerca con buena resolución.", mediaType: 'image', requiresAspectRatio: true, },
            { id: 109, key: 'sportswear', caption: 'Campaña de Ropa Deportiva', subcategory: 'Deportes y Playa', prompt: `Depict the person as an athletic model in a dynamic pose for a sportswear brand campaign, set in a modern gym or urban park. ${PRESERVE_IDENTITY_PROMPT}`, illustration: 'model-runway', imageTypeHint: 'Ideal para: Foto de cuerpo entero en movimiento.', detailedDescription: "Protagoniza una campaña de marca deportiva con poses dinámicas en gimnasio o parque. Ropa técnica y actitud atlética.\nIdeal para mostrar energía y movimiento.", mediaType: 'image', requiresAspectRatio: true, },
            { id: 110, key: 'perfume-ad', caption: 'Anuncio de Perfume (B&N)', subcategory: 'Portadas y Editorial', prompt: `Create an elegant and moody black-and-white photo suitable for a luxury perfume advertisement. ${PRESERVE_IDENTITY_PROMPT}`, illustration: 'model-cover', imageTypeHint: 'Ideal para: Foto de medio cuerpo.', detailedDescription: "Retrato en blanco y negro, elegante y misterioso, típico de anuncios de perfume de lujo. Atmósfera sofisticada y sensual.\nFunciona bien con miradas intensas o poses sutiles.", mediaType: 'image', requiresAspectRatio: true, },
            { id: 111, key: 'gothic-fashion', caption: 'Moda Gótica', subcategory: 'Portadas y Editorial', prompt: `Reimagine the person in a dark, romantic gothic fashion editorial, featuring elaborate, dark clothing and a dramatic, moody setting. ${PRESERVE_IDENTITY_PROMPT}`, illustration: 'model-cover', imageTypeHint: 'Ideal para: Foto de medio cuerpo.', detailedDescription: "Editorial de moda gótica romántica con ropa oscura elaborada y escenarios dramáticos. Estética misteriosa y elegante.\nSube una foto con expresión seria o melancólica.", mediaType: 'image', requiresAspectRatio: true, },
            { id: 112, key: 'fantasy-editorial', caption: 'Editorial de Moda Fantasía', subcategory: 'Portadas y Editorial', prompt: `Transform the person into a character from a fantasy world for a conceptual fashion shoot, with ethereal clothing and a magical forest background. ${PRESERVE_IDENTITY_PROMPT}`, illustration: 'model-cover', imageTypeHint: 'Ideal para: Foto de cuerpo entero.', detailedDescription: "Sesión de moda conceptual en un mundo de fantasía. Ropa etérea y fondos mágicos para un look de cuento de hadas high-fashion.\nIdeal para looks soñadores y creativos.", mediaType: 'image', requiresAspectRatio: true, },
            { id: 113, key: 'vintage-ad', caption: 'Anuncio de Moda Vintage (60s)', subcategory: 'Portadas y Editorial', prompt: `Create a fashion advertisement in the style of the 1960s, with retro clothing, hairstyle, and color grading. ${PRESERVE_IDENTITY_PROMPT}`, illustration: 'model-cover', imageTypeHint: 'Ideal para: Foto de medio cuerpo.', detailedDescription: "Recrea un anuncio de moda de los años 60 con ropa, peinado y colores retro auténticos. Estilo mod y pop.\nSube una foto con una sonrisa o pose clásica.", mediaType: 'image', requiresAspectRatio: true, },
            { id: 114, key: 'luxury-look', caption: 'Look de Marca de Lujo', subcategory: 'Portadas y Editorial', prompt: `Depict the person modeling for a luxury brand like Gucci or Chanel, wearing an iconic outfit from the brand in an opulent setting. ${PRESERVE_IDENTITY_PROMPT}`, illustration: 'model-cover', imageTypeHint: 'Ideal para: Foto de cuerpo entero.', detailedDescription: "Viste outfits icónicos de marcas de lujo en entornos opulentos. La IA genera la ropa y el ambiente de exclusividad.\nPerfecto para visualizarte con alta costura.", mediaType: 'image', requiresAspectRatio: true, },
            { id: 115, key: 'bw-portrait', caption: 'Retrato Artístico en B&N', subcategory: 'Estilos Artísticos y Storyboards', prompt: `Generate a powerful, expressive black-and-white portrait of the person, focusing on emotion and contrast. ${PRESERVE_IDENTITY_PROMPT}`, illustration: 'professional-profile', imageTypeHint: 'Ideal para: Foto de cara.', detailedDescription: "Retrato artístico en blanco y negro de alto contraste, centrado en la emoción y la expresión facial.\nSube una foto con una expresión fuerte o emotiva.", mediaType: 'image', requiresAspectRatio: true, },
            { id: 116, key: 'beachwear-fashion', caption: 'Sesión de Moda en la Playa', subcategory: 'Deportes y Playa', prompt: `Create a vibrant photo of the person modeling chic beachwear or a swimsuit on a beautiful tropical beach. ${PRESERVE_IDENTITY_PROMPT}`, illustration: 'model-runway', imageTypeHint: 'Ideal para: Foto de cuerpo entero.', detailedDescription: "Modelo de ropa de playa o baño en un entorno tropical vibrante. Luz solar y colores vivos para un look veraniego.\nIdeal para fotos de cuerpo entero.", mediaType: 'image', requiresAspectRatio: true, },
            { id: 123, key: 'overhead-fashion-studio', caption: 'Estudio Editorial Cenital', subcategory: 'Portadas y Editorial', prompt: `A person from the reference photo photographed from a 35-degree overhead angle, standing alone in an off-white studio void, with a confident pose and clean silhouette. Stylised proportions, sleek fashion styling, reflective textures, bold accessories, soft studio light, single beauty-dish flash casting crisp shadows, subtle Kodak Portra-inspired grain, candid editorial energy, minimalist composition, sharp detail, premium studio photography. ${PRESERVE_IDENTITY_PROMPT}`, illustration: 'model-cover', imageTypeHint: 'Ideal para: Foto de cuerpo entero o medio cuerpo.', detailedDescription: "Retrato editorial de moda desde un ángulo cenital de 35 grados. Estilo minimalista con iluminación de estudio suave y sombras nítidas.", mediaType: 'image', requiresAspectRatio: true, },
            { id: 124, key: 'race-driver', caption: 'Piloto de Carreras', subcategory: 'Deportes y Playa', prompt: `Use the provided reference image strictly. Preserve exact identity — face, skin tone, eye color, hair color (dark brown), hairstyle, and expression must remain unchanged. No facial edits or reshaping. Subject: female race driver standing confidently on a professional racetrack grid. Outfit: Racing suit matte black with subtle neon purple accents, clean sponsor-style patches, minimalistic, real fabric texture with stitching and folds. Car: Sleek matte black performance car (modern race-spec or hypercar style), subtle neon purple detailing, gloss + matte mixed surfaces, tires slightly worn with rubber marks, realistic reflections on body panels. Environment: Professional racetrack grid with crowd in grandstands, pit crew and cars softly blurred in background, track surface with tire marks and realistic texture. Lighting: Natural sunlight with soft shadows, balanced highlights on car and suit, realistic blue sky with natural clouds, no artificial glow. Skin & Detail: Natural skin texture (pores, slight imperfections), no smoothing, subtle sunlight highlights on face. Hair: Natural movement, slight wind, real shine, no over-editing. Materials: Matte fabric absorbs light naturally, car paint reflects environment realistically, asphalt shows grain and imperfections. Camera: Shot on DSLR (50mm or 85mm lens, f/2.8), sharp focus on subject, background slightly blurred, natural depth of field. Color Grading: Cinematic but realistic, cool-toned blacks + neon purple accents, no oversaturation. Physics: Accurate shadows from sunlight, correct reflections on car and suit. Strict rules: Do NOT change identity, Do NOT alter face/body, Keep realism above everything, No AI-looking textures. ${PRESERVE_IDENTITY_PROMPT}`, illustration: 'model-runway', imageTypeHint: 'Ideal para: Foto de cuerpo entero.', detailedDescription: "Transforma tu imagen en una piloto de carreras profesional junto a un coche de alto rendimiento en la pista. Estilo realista, iluminación natural y detalles de alta calidad.", mediaType: 'image', requiresAspectRatio: true, },
            { id: 125, key: 'character-ref-sheet', caption: 'A 2x3 figure of the subject NB2', subcategory: 'Estilos Artísticos y Storyboards', prompt: `A 2x3 figure of the subject. Top row: "Upper Body Front", "Upper Body Side", and "Upper Body Back". Middle row: "Face Close-up" and "Eyes Close-up". Bottom row: "Single Hand Close-up" and "Left-side Face Close-up". ${PRESERVE_IDENTITY_PROMPT}`, illustration: 'model-runway', imageTypeHint: 'Ideal para: Referencia de personaje.', detailedDescription: "Hoja de referencia de personaje con múltiples ángulos y detalles.", mediaType: 'image', requiresAspectRatio: true, },
            { id: 126, key: 'storyboard-grid-headphones', caption: 'Storyboard 3x3 Auriculares', subcategory: 'Estilos Artísticos y Storyboards', prompt: `3x3 storyboard grid, nine panels, same subject and outfit, consistent teal studio background, soft diffused lighting, clean editorial lifestyle photography. The person from the reference photo with pastel blue over-ear wireless headphones. Panel sequence (left→right, top→bottom): 1 standing adjusting headphones, front view. 2 close-up portrait touching earcup. 3 side profile sitting on tall stool. 4 lying on stomach with cassette tapes + retro player. 5 extreme close-up headphones + face detail. 6 tilted head smiling portrait. 7 low-angle crouch reaching headphones toward camera. 8 forced perspective product shot, headphones close to lens. 9 lying on back relaxed pose. Style: minimal, pastel tones, soft shadows, sharp focus, commercial product photography, consistent framing, balanced grid layout, mix of wide/medium/close shots. ${PRESERVE_IDENTITY_PROMPT}`, illustration: 'model-runway', imageTypeHint: 'Ideal para: Múltiples poses y expresiones.', detailedDescription: "Grid de 3x3 (9 paneles) estilo storyboard comercial con auriculares azul pastel y fondo verde azulado.", mediaType: 'image', requiresAspectRatio: true, },
            {
                id: 127,
                key: 'engraving-line-art',
                caption: 'Retrato Line-Art / Grabado',
                subcategory: 'Estilos Artísticos y Storyboards',
                prompt: `A close-up portrait of the person from the reference image in a hyper-detailed line-art/engraving style with very dense hatching. Features only two colors: black & white/monochrome graphite. Thousands of fine lines form the skin, with dramatic lighting contrasts. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'professional-profile',
                imageTypeHint: 'Ideal para: Retrato artístico B&N.',
                detailedDescription: "Retrato en estilo de grabado artístico con miles de líneas finas (hatching). Monocromo, alto contraste y detalle extremo en la piel.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['1:1', '3:4', '4:5', '9:16'],
            },
        ]
    },
    'casting-headshots': {
        title: 'Casting y Headshots',
        description: 'Headshots versátiles para actores y modelos, diseñados para audiciones.',
        images: [
            { id: 117, key: 'commercial-headshot', caption: 'Headshot Comercial', subcategory: 'Casting General', prompt: `Create a bright, friendly, commercial headshot of the person in the photo. The person should have a warm, approachable smile. The lighting should be clean and even, against a simple, light-colored background. ${PRESERVE_IDENTITY_PROMPT}`, illustration: 'professional-profile', imageTypeHint: 'Ideal para: Foto de cara sonriendo.', detailedDescription: "Headshot luminoso y amigable para publicidad comercial. Iluminación limpia y fondo claro para transmitir confianza.\nSube una foto sonriendo con naturalidad.", mediaType: 'image', requiresAspectRatio: true, },
            { id: 118, key: 'dramatic-headshot', caption: 'Headshot Dramático', subcategory: 'Casting General', prompt: `Generate a dramatic, theatrical headshot of the person in the photo. The lighting should be moodier (e.g., Rembrandt or split lighting) to create shadows and highlight facial features. The expression should be serious or intense. The background should be dark. ${PRESERVE_IDENTITY_PROMPT}`, illustration: 'professional-profile', imageTypeHint: 'Ideal para: Foto de cara seria.', detailedDescription: "Headshot teatral con iluminación dramática (Rembrandt) y fondo oscuro. Resalta la intensidad y el carácter.\nIdeal para roles serios en cine o teatro.", mediaType: 'image', requiresAspectRatio: true, },
            { id: 119, key: 'full-body', caption: 'Foto de Cuerpo Entero para Casting', subcategory: 'Casting General', prompt: `Create a clean, full-body shot of the person in the photo against a plain white or grey studio background. The clothing should be simple and form-fitting to show their physique. The pose should be natural and relaxed. ${PRESERVE_IDENTITY_PROMPT}`, illustration: 'professional-profile', imageTypeHint: 'Ideal para: Foto de cuerpo entero.', detailedDescription: "Foto de cuerpo entero limpia sobre fondo neutro, ideal para presentar tu físico y postura en castings.\nRopa sencilla y ajustada generada por IA.", mediaType: 'image', requiresAspectRatio: true, },
            { id: 120, key: 'character-friendly', caption: 'Headshot de Personaje (Amigable)', subcategory: 'Arquetipos de Personaje', prompt: `Create a character headshot of the person in the photo portraying a 'friendly neighbor' or 'supportive best friend' archetype. The expression should be warm and trustworthy. ${PRESERVE_IDENTITY_PROMPT}`, illustration: 'professional-profile', imageTypeHint: 'Ideal para: Foto de cara.', detailedDescription: "Retrato que encarna el arquetipo de 'mejor amigo' o 'vecino amable'. Expresión cálida y confiable.\nPerfecto para audiciones de comedia o drama ligero.", mediaType: 'image', requiresAspectRatio: true, },
            { id: 121, key: 'character-intense', caption: 'Headshot de Personaje (Intenso)', subcategory: 'Arquetipos de Personaje', prompt: `Create a character headshot of the person in the photo portraying a 'tough detective' or 'troubled anti-hero' archetype. The expression should be intense and thoughtful, with dramatic lighting. ${PRESERVE_IDENTITY_PROMPT}`, illustration: 'professional-profile', imageTypeHint: 'Ideal para: Foto de cara.', detailedDescription: "Retrato para arquetipos de 'detective duro' o 'anti-héroe'. Expresión intensa y pensativa con luz dramática.\nIdeal para audiciones de género negro o acción.", mediaType: 'image', requiresAspectRatio: true, },
        ]
    }
};
