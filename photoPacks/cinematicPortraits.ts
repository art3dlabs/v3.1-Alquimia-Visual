
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import type { PhotoPack } from './types';
import { PRESERVE_IDENTITY_PROMPT, PRESERVE_OUTFIT_PROMPT } from './types';

const cinematicSelfieTemplate = `Hyper-realistic cinematic mirror selfie of a person [LOCATION_SETTING]. They hold a smartphone naturally, with a calm and confident pose. They are wearing [WARDROBE_DESC]. Soft diffused lighting that matches the environment, creamy highlights, cinematic depth, lifelike skin and textures. Accurate mirror reflection, muted neutral palette. iPhone 15 Pro Max 24mm f/1.8 HDR look, Leica Q3 detail, Kodak Portra 800 film tone, ultra 4K cinematic realism, aspect ratio 4:5. ${PRESERVE_IDENTITY_PROMPT}`;

export const cinematicPortraitsPack: Record<string, PhotoPack> = {
    'cinematic-selfies': {
        title: 'Retratos Cinemáticos',
        description: 'Selfies y retratos con calidad de estudio, iluminación dramática y estéticas de película.',
        images: [
            {
                id: 41,
                key: 'bed-mirror-selfie-nb2',
                caption: 'Selfie en Cama NB2',
                subcategory: 'Selfies y Espejos',
                prompt: `High resolution, masterpiece, best quality, perfect lighting, detailed lighting, dramatic shadows, elegant and attractive figure, innocent face, aspect ratio 3:4.

Edited photo of a person taking a mirror selfie in her bedroom mirror. Weight: 45 kg, height: 162 cm, slender and toned figure. Flawless, smooth, and very bright skin with a glass-skin effect, especially on the nose, cheekbones, and forehead, with dewy, glowing makeup.

Makeup:
Natural makeup for a glowing, pore-less, bare face with soft shading on the nose and cheekbones.

 Large, clear double-eyelid eyes look beautiful
Naturally neat eyebrows
Thick, naturally curled eyelashes
Fresh, moist, matte pink heart-shaped lips

Hair:
With a few strands falling across her forehead and cheeks

Outfit:
Wearing an oversized white off-the-shoulder t-shirt

Mirror selfie pose: The person lying face down on her bed taking a selfie, holding an iPhone with a cute bunny flash case in one hand, partially covering her face. Her head is tilted towards the camera. 
The photo is taken from slightly below, at a low angle, further away from the subject, allowing for a full view of her body.

Accessories:
A small, sparkling silver chain necklace with a pendant adds a sweet and elegant touch.

Style & Mood:
A photogenic mirror selfie Instagram dump. Make the photo as realistic as possible without looking artificially created.

 Setting:

In a simple, dark/dimly lit room

The camera flash and soft natural indoor lighting highlight the face, making the skin appear radiant, leaving slight shadows in the background.

The photo quality is very professional. Ultra realistic, sharp focus, detailed skin texture, professional photography, cinematic lighting, 16K, editorial portrait, hiller, ultra-HD. Very clear. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'professional-profile',
                imageTypeHint: 'Nano 🍌 2: Solo Mujeres. Selfie en la cama con flash.',
                detailedDescription: "Selfie casual tumbada en la cama con flash y estética de Instagram. Piel perfecta 'glass-skin', outfit oversize y atmósfera íntima.\nIdeal para fotos de perfil relajadas.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['3:4', '9:16', '4:5', '1:1'],
            },
            {
                id: 42,
                key: 'cinematic-mirror-selfie',
                caption: 'Selfie en Espejo (Cinematográfico)',
                subcategory: 'Selfies y Espejos',
                prompt: cinematicSelfieTemplate,
                illustration: 'professional-profile',
                imageTypeHint: 'Selfie de alta calidad frente a un espejo.',
                detailedDescription: "Genera una selfie frente al espejo con calidad de cine ultra-realista. La iluminación es suave y difusa, creando una atmósfera de lujo o minimalismo según tu elección.\nIdeal para mostrar outfits en entornos sofisticados como hoteles o baños de diseño.",
                mediaType: 'image',
                requiresAspectRatio: true,
                dynamicFields: [
                    {
                        type: 'select',
                        key: 'setting_selector',
                        label: 'Escenario',
                        options: [
                            { label: 'Habitación de Lujo', values: { '[LOCATION_SETTING]': 'in a luxurious, dimly lit hotel bedroom with plush decor', '[WARDROBE_DESC]': 'casual but expensive loungewear' } },
                            { label: 'Baño Minimalista', values: { '[LOCATION_SETTING]': 'in a clean, modern minimalist bathroom with marble textures', '[WARDROBE_DESC]': 'a crisp white shirt or robe' } },
                            { label: 'Ascensor Dorado', values: { '[LOCATION_SETTING]': 'inside a vintage elevator with gold mirrors and warm lights', '[WARDROBE_DESC]': 'a stylish evening outfit' } },
                            { label: 'Gimnasio Boutique', values: { '[LOCATION_SETTING]': 'in a high-end boutique gym with neon accents', '[WARDROBE_DESC]': 'premium athletic wear' } },
                        ]
                    }
                ]
            },
            {
                id: 43,
                key: 'night-motion-selfie',
                caption: 'Selfie Nocturna (En Movimiento)',
                subcategory: 'Nocturna y Neón',
                prompt: `Cinematic night-time selfie of a person [LOCATION_DESC]. Shot from a low wide-angle perspective. [LIGHTING_DESC]. Shallow depth of field, slightly grainy film texture, subtle chromatic aberration. [ATMOSPHERE_DESC]. Urban nightlife atmosphere, moody and ethereal, analog photography feel, high contrast lighting, artistic street photography, 35mm film look. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'professional-profile',
                imageTypeHint: 'Selfie nocturna dinámica con luces y movimiento.',
                detailedDescription: "Captura la energía de la vida nocturna con una selfie dinámica llena de movimiento y luces de neón. El fondo desenfocado y las estelas de luz crean una atmósfera vibrante.\nPerfecto para simular salidas, fiestas, conciertos o viajes en la ciudad.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['9:16', '1:1', '4:5'],
                dynamicFields: [
                    {
                        type: 'select',
                        key: 'location_selector',
                        label: 'Lugar de Salida',
                        options: [
                            { 
                                label: 'Ciudad en Movimiento (Tráfico)', 
                                values: { 
                                    '[LOCATION_DESC]': 'riding through a city', 
                                    '[LIGHTING_DESC]': 'Soft, dreamy motion blur with long light trails from streetlights and traffic creating a cyberpunk glow. Neon blue, teal, and warm amber lights streak across the background',
                                    '[ATMOSPHERE_DESC]': 'Natural makeup, loose hair flowing in the wind, calm and introspective expression'
                                } 
                            },
                            { 
                                label: 'Club Nocturno (Fiesta)', 
                                values: { 
                                    '[LOCATION_DESC]': 'dancing in the middle of a crowded underground nightclub', 
                                    '[LIGHTING_DESC]': 'Dynamic strobe lights, violet and magenta laser beams cutting through haze, motion blur of dancing people in background',
                                    '[ATMOSPHERE_DESC]': 'Sweaty skin texture, euphoric energetic expression, messy hair, electric atmosphere'
                                } 
                            },
                            { 
                                label: 'Bar en la Azotea (Skyline)', 
                                values: { 
                                    '[LOCATION_DESC]': 'standing on a windy high-rise rooftop bar with a glass of cocktail', 
                                    '[LIGHTING_DESC]': 'The vast city skyline visible in the background with thousands of glittering bokeh lights, dark sky, soft ambient bar glow illuminating the face',
                                    '[ATMOSPHERE_DESC]': 'Sophisticated chic look, wind-blown hair, city lights reflecting in eyes, elegant vibe'
                                } 
                            },
                            { 
                                label: 'Taxi bajo la Lluvia', 
                                values: { 
                                    '[LOCATION_DESC]': 'sitting in the backseat of a taxi driving through rain', 
                                    '[LIGHTING_DESC]': 'Raindrops on the window creating distorted beautiful bokeh of city lights, passing streetlamps casting rhythmic warm shadows on face',
                                    '[ATMOSPHERE_DESC]': 'Melancholic and cinematic, reflection in the window, cozy interior feel'
                                } 
                            },
                            { 
                                label: 'Concierto / Festival', 
                                values: { 
                                    '[LOCATION_DESC]': 'in the middle of a massive music festival crowd', 
                                    '[LIGHTING_DESC]': 'Explosion of stage lights and confetti in the background, backlit by giant stage screens, lens flares',
                                    '[ATMOSPHERE_DESC]': 'Excited shouting expression, festival outfit, glitter on face, pure adrenaline rush'
                                } 
                            },
                        ]
                    }
                ]
            },
            {
                id: 44,
                key: 'dark-villain-smoker',
                caption: 'Villano Oscuro (Fumando)',
                subcategory: 'Editorial Dramático',
                prompt: `Ultra-realistic 8K cinematic close-up portrait (1664×2080). Dark villain vibe. 18-year handsome person, slim lean physique. Head slightly up, chin forward, eyebrow raised, cold dominant eyes looking down, subtle evil smirk. Cigar near lips, thick slow smoke around face. Hairstyle EXACTLY same as reference. Raw skin texture, pores, scars, sweat, natural stubble. Small dragon tattoo near eyebrow. Finger tattoos “IA” and “MAL”; neck tattoo “Art”. luxury watch barely visible.`,
                illustration: 'model-cover',
                imageTypeHint: 'Nano 🍌 2: Retrato oscuro, vibe villano, humo y tatuajes.',
                detailedDescription: "Crea un retrato intenso con estética de 'villano', incluyendo humo denso, tatuajes faciales y una mirada dominante. El estilo es oscuro, cinematográfico y lleno de textura.\nSube una foto con buena iluminación en el rostro para un acabado impactante.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['4:5', '9:16', '1:1', '3:4']
            },
            {
                id: 45,
                key: 'wormseye-sword-portrait-nb2',
                caption: 'Reflejo de Acero (Cinemático)',
                subcategory: 'Editorial Dramático',
                prompt: `{
  "prompt_type": "photorealistic_portrait",
  "subject": {
    "identity_rule": "STRICT_IDENTITY_LOCK_FROM_REFERENCE",
    "appearance": "authentic detailed facial features, soft skin texture, slight smile, looking upwards away from camera, relaxed expression",
    "hair": "messy high bun, highlights, loose wispy strands framing the face, casual updo"
  },
  "attire": {
    "clothing": "dark burgundy ribbed knit long-sleeve top, tight fit, crew neck, casual style"
  },
  "props": {
    "main_prop": "sword blade",
    "details": "metal sword blade visible in the foreground on the right side, out of focus (bokeh), reflective golden/bronze metallic surface, implying the subject is holding it"
  },
  "environment": {
    "setting": "indoor interior with vintage aesthetics",
    "background": "dark wooden coffered ceiling, architectural beams, antique style brass chandelier with glowing bulbs",
    "atmosphere": "warm, cozy, slightly dramatic due to angle"
  },
  "camera_and_perspective": {
    "angle": "extreme low angle shot, worm's-eye view, looking up at the subject",
    "shot_type": "medium close-up",
    "focus": "sharp focus on face, depth of field with blurred sword in foreground and blurred ceiling background"
  },
  "lighting": {
    "type": "warm artificial indoor lighting",
    "source": "ceiling chandelier lights",
    "effect": "soft warm glow on face, highlights on cheeks and nose, shadows under jawline, ambient tungsten color tone"
  },
  "technical_specs": {
    "aspect_ratio": "{aspectRatio}",
    "resolution": "8k",
    "quality": "masterpiece, high fidelity, raw photo style",
    "film_stock": "Kodak Portra 400 vibe, slight grain"
  }
} ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'model-cover',
                imageTypeHint: 'Nano 🍌 2: Retrato cinematográfico desde abajo con una espada desenfocada.',
                detailedDescription: "Un retrato dramático en ángulo contrapicado extremo, con una espada desenfocada en primer plano que añade profundidad. La iluminación cálida crea una atmósfera épica.\nIdeal para visualizar personajes de fantasía o escenas de tensión cinematográfica.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['4:5', '9:16', '1:1', '3:4'],
            },
            {
                id: 46,
                key: 'profession-portrait-v2',
                caption: 'Retrato Profesional V2',
                subcategory: 'Urbano y Acción',
                prompt: `[PROMPT_CONTENT]`,
                illustration: 'professional-profile',
                imageTypeHint: 'Retrato profesional o estilo de vida.',
                detailedDescription: "Elige tu profesión o estilo para un retrato cinematográfico personalizado.",
                mediaType: 'image',
                requiresAspectRatio: true,
                dynamicFields: [
                    {
                        type: 'select',
                        key: 'profession_selector',
                        label: 'Profesión / Estilo',
                        options: [
                            { label: 'Visionario Tech', values: { '[PROMPT_CONTENT]': `Action, iPhone-style. This person, with their facial and physical features, resembles a tech visionary, standing and facing the camera with a cold, intelligent expression. The setting is the center of a symmetrical hallway in a massive data center, with an atmosphere of power and control. The endless rows of servers with their hypnotic, flickering blue and white LED lights serve as a geometric, bokeh-filled background. They are seen wearing an elegant and minimalist outfit. The lighting is a strong backlight from the server lights and a cool, diffuse ceiling light, casting a digital glow on their facial features. The dominant colors are cool blues, cyan, and deep blacks with medium contrast. Authentic, documentary look, with smooth metallic surfaces and zero grain. ${PRESERVE_IDENTITY_PROMPT}` } },
                            { label: 'Músico Backstage', values: { '[PROMPT_CONTENT]': `Action, iPhone-style. This person, with their facial and physical features, resembles a musical figure, captured in a moment of intense concentration, facing forward with a lost gaze just before stepping on stage. The setting is the dark technical area backstage, with equipment boxes and cables around them, and the edge of a velvet curtain softly unfocused in the foreground. They are seen wearing their striking stage outfit, their expression filled with anticipation. The lighting is an extreme and dramatic backlight coming from the brightly lit stage, which is visible in the background, outlining their features with a strong rim of white or electric blue light. The dominant colors are blacks and a beam of saturated colors, with very high contrast. Authentic, documentary look, with grain for a raw and realistic feel. ${PRESERVE_IDENTITY_PROMPT}` } },
                            { label: 'Artista en Estudio', values: { '[PROMPT_CONTENT]': `Action, iPhone-style. This person, with their facial and physical features, resembles an artist, captured in a moment of intense creative focus, their face angled towards the camera as they observe their large-scale painting or sculpture. The setting is their spacious but chaotic loft studio, with brushes in a jar and tools softly unfocused in the foreground and the artwork serving as the background. They are seen wearing paint-stained work clothes, their expression revealing a deep passion. The lighting is a strong backlight from a large industrial window, creating a dusty, dramatic beam of light that casts a halo around their hair and shoulders. The dominant colors are earthy tones, ochres, and grays with high contrast. Authentic, documentary look, without professional retouching but with rich, realistic textures and a light grain. ${PRESERVE_IDENTITY_PROMPT}` } },
                            { label: 'Científico Visionario', values: { '[PROMPT_CONTENT]': `Action, iPhone-style. This person, with their facial and physical features, resembles a visionary scientist, standing and facing the camera with an expression of profound awe and discovery. The setting is the dark interior of a massive observatory dome. Behind them, a colossal holographic projection of a nebula or an open dome with a starry sky illuminates the scene, serving as an epic background. They are seen wearing a lab coat or functional, minimalist clothing. The lighting is a dramatic front light coming from the cosmic projection, bathing their face in vibrant, ethereal colors like purples, blues, and magentas. The dominant colors are cool and cosmic with medium-high contrast. Authentic, documentary look, with finely detailed textures and very low grain. ${PRESERVE_IDENTITY_PROMPT}` } },
                            { label: 'Maestro Parrillero', values: { '[PROMPT_CONTENT]': `Action, iPhone-style. This person, with their facial and physical features, resembles a master pitmaster, captured mid-action, turning from the intense heat of a huge steel smoker or grill to glance at the camera with a look of focused control. The setting is a rustic outdoor space at night, with a dense, smoky atmosphere. They are seen wearing a thick leather apron and sweating from the heat. The intense orange and red glow from the embers acts as a powerful backlight, but also casts a dramatic, warm light across their facial features as sparks fly around them. The dominant colors are oranges, reds, and deep blacks with extreme contrast. Authentic, documentary look, with raw textures and a visceral grain. ${PRESERVE_IDENTITY_PROMPT}` } },
                            { label: 'Creador en Mercado', values: { '[PROMPT_CONTENT]': `Action, iPhone-style. This person, with their facial and physical features, resembles a content creator, standing in the middle of a bustling street market. They are holding up their smartphone, showing the perfect photo on its screen, while looking over the device directly at the camera with a knowing and calm smile. The background is a dynamic blur of motion. They are seen wearing an impeccable and fashionable outfit. Their face is softly illuminated by the glow of their own phone screen, contrasting with the chaotic natural light of the street. The dominant colors are vibrant and saturated with medium contrast. Authentic, documentary look, revealing the reality behind the curated image. ${PRESERVE_IDENTITY_PROMPT}` } },
                            { label: 'Diseñador de Moda', values: { '[PROMPT_CONTENT]': `Action, iPhone-style. This person, with their facial and physical features, resembles a haute couture designer, turning from their creation to look at the camera with an expression of intense, perfectionistic focus. The setting is their private atelier at night, surrounded by creative chaos. The background is dominated by a spectacular gala dress on a mannequin, which is lit by a single, dramatic spotlight. The reflected light from this creation illuminates the designer's face. They are seen wearing an avant-garde and monochromatic outfit while making a final, tiny adjustment. The dominant colors are deep blacks and the vibrant color of the creation, with very high contrast. Authentic, documentary look, with zero grain. ${PRESERVE_IDENTITY_PROMPT}` } },
                            { label: 'Estrella Alfombra Roja', values: { '[PROMPT_CONTENT]': `Action, iPhone-style. This person, with their facial and physical features, resembles an iconic movie star, captured in a power pose, looking over their shoulder at the camera with a charismatic gaze. The setting is the red carpet of a prestigious gala event at night, with an atmosphere of exclusivity and acclaim, with unfocused lens flares and camera flashes in the foreground and a background of a crowd of photographers and logos. They are seen wearing a high-fashion gown with luxurious textures. The lighting is dramatic and multifocal, highlighting their facial features and the details of the outfit. The dominant colors are deep blacks and metallic tones with high contrast. Authentic, documentary look, without professional retouching. ${PRESERVE_IDENTITY_PROMPT}` } },
                            { label: 'Icono de la Moda', values: { '[PROMPT_CONTENT]': `Action, iPhone-style. This person, with their facial and physical features, resembles a fashion icon, sitting amidst an artistic mess of high-end clothing and accessories in their luxurious walk-in closet, looking directly at the camera with a vulnerable and reflective expression. They are seen holding a single high-heeled shoe, their pose introspective. The lighting is soft and diffuse, creating a flattering glow on their skin and the rich textures of their simple but elegant silk outfit. The dominant colors are soft and the contrast is low. Authentic, intimate, documentary look, without professional retouching but with very fine grain. ${PRESERVE_IDENTITY_PROMPT}` } },
                            { label: 'Moda Minimalista', values: { '[PROMPT_CONTENT]': `Action, iPhone-style. This person, with their facial and physical features, resembles a style icon, holding a deliberate, statue-like pose and looking directly at the camera with a serene, high-fashion expression. The setting is a surreal architectural complex of pastel colors and geometric shapes, where their monochromatic tailored suit creates a bold contrast. Bright, hard sunlight casts sharp geometric shadows that play across their face and the environment. The dominant colors are saturated pastels with high contrast. Authentic, documentary look, but with a dreamlike, graphic composition. ${PRESERVE_IDENTITY_PROMPT}` } },
                            { label: 'Lujo Subversivo', values: { '[PROMPT_CONTENT]': `Action, iPhone-style. This person, with their facial and physical features, resembles a serene figure of power, looking directly at the camera with an expression of absolute calm and control. They are seen wearing an impeccable black gala dress amidst a scene of frozen chaos, where an explosion of luxury items (shattering glass, spiraling red wine, floating pearls) is suspended in mid-air around them. The lighting is dramatic and high-contrast, sculpting their features while freezing every detail of the surrounding destruction. The dominant colors are rich and deep. Authentic, documentary look, with a hyper-realistic, cinematic feel of controlled chaos. ${PRESERVE_IDENTITY_PROMPT}` } }
                        ]
                    }
                ]
            },
            {
                id: 47,
                key: 'color-powder-explosion-v2', caption: 'Explosión de Color V2', subcategory: 'Editorial Dramático', prompt: `Action, iPhone-style. This person, with their facial and physical features, resembles a dynamic figure (dancer, athlete), captured mid-motion, their face turned towards the camera with an expression of euphoria and intense concentration. The setting is a black studio background. A massive cloud of colorful Holi powder (a mix of magenta and cyan) explodes around them, frozen in time by high-speed lighting. They are seen wearing dark, fitted clothing. The lighting freezes every particle, creating an ephemeral color sculpture that frames their face and body. The dominant colors are extremely saturated against the black background, with very high contrast. ${PRESERVE_IDENTITY_PROMPT}`, illustration: 'model-cover', imageTypeHint: 'Retrato dinámico con polvo de colores.', detailedDescription: "Captura el movimiento con una explosión de polvo de colores tipo Holi sobre fondo negro. Alto contraste y saturación para una imagen llena de energía.\nIdeal para perfiles deportivos o artísticos.", mediaType: 'image', requiresAspectRatio: true },
            {
                id: 48,
                key: 'cinematic-portrait-v2',
                caption: 'Retrato Cinematográfico V2',
                subcategory: 'Editorial Dramático',
                prompt: `[PROMPT_CONTENT]`,
                illustration: 'professional-profile',
                imageTypeHint: 'Ideal para: Foto de cara.',
                detailedDescription: "Retrato cinematográfico con iluminación dramática y fondo atmosférico desenfocado.\nResalta la confianza y el estilo personal.",
                mediaType: 'image',
                requiresAspectRatio: true,
                dynamicFields: [
                    {
                        type: 'select',
                        key: 'gender_selector',
                        label: 'Género',
                        options: [
                            { label: 'Hombre', values: { '[PROMPT_CONTENT]': `Action, iPhone-style. This person, with their facial and physical features, resembles a handsome man, captured with strong facial features and a confident posture, looking towards the camera. The setting has a moody background, creating a captivating atmosphere. They are seen wearing stylish clothing. The lighting is dramatic with soft shadows and warm tones, creating a shallow depth of field that makes the person pop. Authentic, documentary look, with realistic textures and sharp details. ${PRESERVE_IDENTITY_PROMPT}` } },
                            { label: 'Mujer', values: { '[PROMPT_CONTENT]': `Action, iPhone-style. This person, with their facial and physical features, resembles a beautiful woman, captured with soft facial features and a confident posture, looking towards the camera. The setting has a moody background, creating a captivating atmosphere. They are seen wearing stylish clothing. The lighting is dramatic with soft shadows and warm tones, creating a shallow depth of field that makes the person pop. Authentic, documentary look, with realistic textures and sharp details. ${PRESERVE_IDENTITY_PROMPT}` } }
                        ]
                    }
                ]
            },
            {
                id: 49,
                key: 'studio-portrait-v2',
                caption: 'Retrato de Estudio V2',
                subcategory: 'Estudio Minimalista',
                prompt: `[PROMPT_CONTENT]`,
                illustration: 'professional-profile',
                imageTypeHint: 'Retrato de estudio.',
                detailedDescription: "Retrato de estudio con diferentes estilos de iluminación y fondo.",
                mediaType: 'image',
                requiresAspectRatio: true,
                dynamicFields: [
                    {
                        type: 'select',
                        key: 'style_selector',
                        label: 'Estilo',
                        options: [
                            { label: 'Blanco y Negro', values: { '[PROMPT_CONTENT]': `Action, iPhone-style. This person, with their facial and physical features, resembles a subject in a fine-art portrait, captured from a non-eye-level angle, looking towards the camera. The setting is a studio with a solid black background. They are seen wearing a black shirt and sitting on the back of a chair. The lighting is cinematic, creating a dramatic black-and-white image that sculpts their features. Authentic, documentary look, with a hyper-realistic 8K quality and no pixel loss. ${PRESERVE_IDENTITY_PROMPT}` } },
                            { label: 'Rojo Carmesí', values: { '[PROMPT_CONTENT]': `Action, iPhone-style. This person, with their facial and physical features, is captured in a half-body shot from a slightly low, upward-facing angle, looking at the camera with an expression of quiet dominance. A huge, adult dark Maine Coon cat is curled on their shoulder. A stark, diagonal light hits half of their face, dramatizing their sharp jawline. The setting is a studio with a deep, saturated crimson red background. They are seen wearing a dark coat or jacket. The lighting is cinematic and high-contrast. Authentic, hyper-realistic 4K look. ${PRESERVE_IDENTITY_PROMPT}` } },
                            { label: 'Estudio Oscuro', values: { '[PROMPT_CONTENT]': `Action, iPhone-style. This person, with their facial and physical features, resembles a model, captured holding a confident pose for the camera from a non-eye-level angle. The setting is a studio with a solid, deep black background, creating a stark and focused look. They are seen wearing a simple black blouse. The lighting is controlled and cinematic, designed to sculpt their features, with a cinematic color grade applied to their skin tone. Authentic, documentary look, captured in 8K for hyper-realism without pixel loss. ${PRESERVE_IDENTITY_PROMPT}` } },
                            { label: 'Lujo Natural', values: { '[PROMPT_CONTENT]': `Action, iPhone-style. This person, with their facial and physical features, resembles a young person with an athletic body, captured in a half-body shot, looking at the camera with their arms crossed. The setting is a modern luxury studio, with morning light streaming through a large glass window, creating natural, cinematic lighting. They are seen wearing a stylish luxury shirt with rolled sleeves. The lighting creates a creamy bokeh and sharp focus on their face. Authentic, documentary look, with a warm color grade and 8K detail. ${PRESERVE_IDENTITY_PROMPT}` } }
                        ]
                    }
                ]
            },
        ]
    },
    'cinematic-moments': {
        title: 'Momentos de Cine',
        description: 'Protagoniza escenas con atmósferas únicas, desde el drama hasta el neón.',
        images: [
            {
                id: 50,
                key: 'studio-black-on-white',
                caption: 'Estudio: Negro sobre Blanco',
                subcategory: 'Estudio Minimalista',
                prompt: `[PROMPT_CONTENT]`,
                illustration: 'professional-profile',
                imageTypeHint: 'Retrato de estudio de alto contraste. Ropa negra, fondo blanco.',
                detailedDescription: "Retrato de estudio minimalista y elegante. Sujeto vestido de negro sobre un fondo blanco infinito. Alto contraste y sofisticación.\nElige entre iluminación cinemática, rim light o plana.",
                mediaType: 'image',
                requiresAspectRatio: true,
                dynamicFields: [
                    {
                        type: 'select',
                        key: 'lighting_style',
                        label: 'Estilo de Iluminación',
                        options: [
                            {
                                label: 'Cinemático (Estándar)',
                                values: {
                                    '[PROMPT_CONTENT]': `A high-resolution studio portrait of the person from the original image, wearing a solid black coat and black turtleneck. The background is a clean, seamless stark white. Dramatic cinematic lighting with soft shadows to define the features, maintaining the same facial structure and hair style. 8k resolution, professional photography style. ${PRESERVE_IDENTITY_PROMPT}`
                                }
                            },
                            {
                                label: 'Moody (Rim Light)',
                                values: {
                                    '[PROMPT_CONTENT]': `A high-resolution studio portrait of the person from the original image, wearing a solid black coat and black turtleneck. The background is a clean, seamless stark white. Add strong rim lighting to create a thin highlight around the edge of the black clothing so it pops against the white. Moody and dramatic atmosphere. 8k resolution. ${PRESERVE_IDENTITY_PROMPT}`
                                }
                            },
                            {
                                label: 'Pasaporte (Flat Light)',
                                values: {
                                    '[PROMPT_CONTENT]': `A high-resolution studio portrait of the person from the original image, wearing a solid black coat and black turtleneck. The background is a clean, seamless stark white. Use flat lighting and a front-facing angle for fewer shadows on the face, creating a clean look similar to high-end ID photography. 8k resolution. ${PRESERVE_IDENTITY_PROMPT}`
                                }
                            }
                        ]
                    }
                ]
            },
            {
                id: 51,
                key: 'cinematic-portrait-man-v2', caption: 'Retrato Cinematográfico (Hombre) V2', subcategory: 'Editorial Dramático', prompt: `Action, iPhone-style. This person, with their facial and physical features, resembles a handsome man, captured with strong facial features and a confident posture, looking towards the camera. The setting has a moody background, creating a captivating atmosphere. They are seen wearing stylish clothing. The lighting is dramatic with soft shadows and warm tones, creating a shallow depth of field that makes the person pop. Authentic, documentary look, with realistic textures and sharp details. ${PRESERVE_IDENTITY_PROMPT}`, illustration: 'professional-profile', imageTypeHint: 'Ideal para: Foto de cara.', detailedDescription: "Retrato masculino de alta calidad con iluminación dramática y fondo atmosférico desenfocado.\nResalta la confianza y el estilo personal.", mediaType: 'image', requiresAspectRatio: true },
            {
                id: 52,
                key: 'cinematic-portrait-woman-v2', caption: 'Retrato Cinematográfico (Mujer) V2', subcategory: 'Editorial Dramático', prompt: `Action, iPhone-style. This person, with their facial and physical features, resembles a beautiful woman, captured with soft facial features and a confident posture, looking towards the camera. The setting has a moody background, creating a captivating atmosphere. They are seen wearing stylish clothing. The lighting is dramatic with soft shadows and warm tones, creating a shallow depth of field that makes the person pop. Authentic, documentary look, with realistic textures and sharp details. \${PRESERVE_IDENTITY_PROMPT}`, illustration: 'professional-profile', imageTypeHint: 'Ideal para: Foto de cara.', detailedDescription: "Retrato femenino cautivador con luz suave y dramática. Fondo 'moody' que aporta profundidad y misterio.\nIdeal para perfiles que buscan sofisticación.", mediaType: 'image', requiresAspectRatio: true },
            {
                id: 53,
                key: 'neon-portrait-v2', caption: 'Retrato de Neón V2', subcategory: 'Nocturna y Neón', prompt: `Action, iPhone-style. This person, with their facial and physical features, resembles a heroic character, captured in a low-angle 3:4 shot, looking into the distance with an intense expression. The setting is a dark blue background with curving neon beams of pink and orange light creating dynamic streaks around them. They are seen wearing a purple shirt and glasses. The lighting is defined by the neon beams, casting a futuristic glow on their face. Authentic, documentary look. \${PRESERVE_IDENTITY_PROMPT}`, illustration: 'professional-profile', imageTypeHint: 'Ideal para: Foto de cara con gafas (opcional).', detailedDescription: "Retrato futurista con estelas de luz neón rosa y naranja. Ángulo bajo y expresión heroica.\nPerfecto para un look cyberpunk o nocturno.", mediaType: 'image', requiresAspectRatio: true },
            {
                id: 58,
                key: 'cinematic-street-action',
                caption: 'Acción en la Calle',
                subcategory: 'Urbano y Acción',
                prompt: `ultra realistic cinematic street photo using the attached face image as the exact identity, seamless face integration with natural skin texture and correct proportions, slightly slimmer body and refined facial features while keeping identity natural, rainy urban street with overcast sky and wet asphalt reflecting soft daylight, black Mercedes-Benz G-Class (latest model) parked on the left side, no other cars in the scene, leafless trees and minimal urban background with atmospheric depth, low angle shot from below as if camera is placed near the ground pointing upward, full body composition with slight perspective distortion, subject positioned slightly right of center [ACTION_AND_EXPRESSION], wearing oversized fashionable black blazer, classic black tailored trousers and black patent pointed heels, outfit strictly unchanged in style and fit, hairstyle exactly matching the reference image, foreground large luxury duffle bag placed on wet ground filled with stacks of cash bundled with bands, bank cards and several smartphones placed imperfectly creating natural messy look, background 2-3 uniformed officers in black tactical outfits with helmets and gear, standing behind and watching the subject, faces intentionally blurred and out of focus, natural positioning, soft diffused daylight lighting, cloudy cold weather, natural reflections on wet surfaces, cinematic cold neutral color grading slightly desaturated, iPhone candid photography style, slight motion blur, sharp focus on subject, natural depth of field, hyper realistic textures physically accurate lighting and shadows. Negative prompt: cartoon cgi unrealistic proportions over retouched skin extra limbs distorted face incorrect perspective blurry face oversaturated colors unrealistic lighting duplicated objects logos text numbers flags political symbols military insignia. \${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'lifestyle',
                imageTypeHint: 'Ideal para: Foto de cuerpo entero o medio cuerpo.',
                detailedDescription: "Escena callejera cinemática y urbana con un vehículo de lujo, dinero y oficiales en el fondo. Puedes elegir la acción del personaje.",
                mediaType: 'image',
                requiresAspectRatio: true,
                dynamicFields: [
                    {
                        type: 'select',
                        key: '[ACTION_AND_EXPRESSION]',
                        label: 'Acción y Pose',
                        options: [
                            {
                                label: 'Maquillándose',
                                values: {
                                    '[ACTION_AND_EXPRESSION]': 'squatting on her heels while applying lipstick and looking into her smartphone camera as a mirror, confident relaxed posture, calm focused facial expression with neutral lips slightly parted during lipstick application'
                                }
                            },
                            {
                                label: 'Fumando (Pose Masculina)',
                                values: {
                                    '[ACTION_AND_EXPRESSION]': 'squatting in a wide masculine pose smoking a cigarette, confident relaxed posture, calm focused facial expression exhaling smoke'
                                }
                            }
                        ]
                    }
                ]
            },
            {
                id: 59,
                key: 'gothic-orange-shadows',
                caption: 'Editorial: Sombras y Naranja',
                subcategory: 'Editorial Dramático',
                prompt: `(fashion pose, strong attitude towards camera:1.4), (gothic style, slender and petite body, provocative yet tastefully censored:1.3), Amateur smartphone snapshot, Romantic atmosphere, gentle wind, realistic environment. Hollywood movie color grading, soft contrast, subtle film grain. A cinematic, ultra-realistic portrait of the person from the reference photo, standing before a vivid orange wall where bold diagonal sunlight casts striking shadows. Shot from a low angle, the subject looks slightly upward to the right, projecting confidence and refinement. Natural hard light creates strong facial contrast. The subject wears a black turtleneck, a tailored black blazer, and thin round glasses. Render in 8K with a cinematic aesthetic. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'model-cover',
                imageTypeHint: 'Nano 🍌 2: Retrato editorial con sombras dramáticas sobre fondo naranja.',
                detailedDescription: "Un retrato cinematográfico de alta costura con un fuerte contraste de luces y sombras. El sujeto posa con actitud frente a una pared naranja vibrante, vistiendo un blazer negro y gafas redondas. Estética de película de Hollywood con grano sutil.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['3:4', '4:5', '9:16', '1:1'],
            },
            {
                id: 54,
                key: 'street-portrait-v2',
                caption: 'Retrato Urbano V2',
                subcategory: 'Urbano y Acción',
                prompt: `[PROMPT_CONTENT]`,
                illustration: 'professional-profile',
                imageTypeHint: 'Retrato urbano.',
                detailedDescription: "Retrato en entornos urbanos con diferentes estilos y ángulos.",
                mediaType: 'image',
                requiresAspectRatio: true,
                dynamicFields: [
                    {
                        type: 'select',
                        key: 'style_selector',
                        label: 'Estilo',
                        options: [
                            { label: 'Café Rústico', values: { '[PROMPT_CONTENT]': `{"portrait_prompt":{"subject":{"description":"Based on <User Portrait>, standing sideways beside a large window in a rustic cafe interior, turning upper body slightly toward the camera, one arm raised to hold ponytail, looking back with a soft playful smile.","features":{"expression":"gentle, slightly flirtatious, relaxed smile"},"pose":"side-profile standing pose, torso subtly twisted toward camera, one hand lifting hair, shoulders elongated, body language confident but casual"},"attire":{"type":"Based on user-uploaded clothing reference","details":["black sleeveless fitted top","casual low-rise cargo-style mini skirt or utility denim bottom","clean, minimal styling with no heavy accessories"],"color":"black top with muted olive or washed denim lower piece"},"composition":{"shot_type":"Medium","focal_length":"50mm","aperture":"f/2.8","camera_angle":"eye-level","camera_height":"chest-level","framing":"vertical portrait, subject placed slightly right of center near the window, contextual background with distressed wall texture, vinyl record and posters visible, strong side light shaping the body line, moderate negative space around the upper wall","aspect_ratio":"3:4"},"lighting":{"type":"natural direct window light with gentle indoor bounce fill","direction":"strong sunlight entering from frame right, creating bright highlights on the face, shoulder, arm and waist, with softer falloff into the interior side","mood":"sunlit, airy, warm, casual, youthful"},"color_palette":{"film_simulation":"Fujifilm ASTIA inspired color grading","style":"soft skin tones, warm window-light highlights, gentle contrast, clean lifestyle portrait finish","tones":["warm cream sunlight","soft skin peach","washed neutral wall texture","black clothing contrast"],"grade_notes":["highlight roll-off: bright but smooth on skin and shoulder","shadow tint: slightly cool-neutral indoor shadows","contrast curve: moderate contrast with luminous highlights","grain: very subtle or nearly clean"]},"environment":{"setting":"a rustic cafe or studio corner beside a large window","background":"distressed plaster wall, hanging vinyl record, small posters, casual seating, sunlit window frame and outdoor glow","atmosphere":"bright afternoon sunlight, lived-in creative space, relaxed candid fashion portrait"},"mood":"sunny, fresh, playful, intimate, effortless","technical_tags":["photorealistic","natural skin texture","bright interior portrait","clean detail","soft background separation","high-resolution"],"character_reference":"Based on user-uploaded character reference","clothing_reference":"Based on user-uploaded clothing reference","negative_prompt":"awkward anatomy, broken arms or hands, stiff posing, over-retouched plastic skin, excessive smoothing, inconsistent sunlight direction, random studio light, cluttered background, generic cafe setup, unnatural body proportions, warped window lines, overblown highlights, muddy shadows, cheap HDR look, exaggerated bokeh, cropped fingers, distorted face, teenage appearance"}} IMG_7754.JPG, low resolution, technicolor, pull processed, clipped highlights, chromatic aberration, 35mm film, filmic grain, medium format. Ethereal high-intensity film aesthetic, Douyin style, dreamy haze, luminous soft focus, extreme bloom, intense halation, aggressive cinematic split-toning, deep teal shadows, warm golden highlights, 35mm analog film, heavy organic grain, vintage Helios 44-2 lens, f/1.4, nostalgic atmosphere. ${PRESERVE_IDENTITY_PROMPT}` } },
                            { label: 'Editorial Urbano', values: { '[PROMPT_CONTENT]': `{"portrait_prompt":{"full_prompt":"Based on <User Portrait>, preserve the uploaded facial identity and create a polished street-editorial portrait of the subject sitting on terracotta tiled steps outside a studio entrance. The subject wears oversized tortoiseshell cat-eye glasses, a black lace camisole with thin straps, layered silver chain necklaces, stacked silver bracelets and rings, a red-brown plaid micro mini skirt, black floral lace tights, and a black quilted chain-strap shoulder bag. She sits with one knee raised toward the camera, torso leaning slightly forward, left elbow resting on the knee, left hand supporting her cheek, right forearm resting across her lap, head slightly tilted, making direct eye contact with slightly parted lips. Shoot as a vertical 4:5 medium fashion portrait, around 50mm, slightly high eye-level, chest-height camera position, with the subject placed slightly right of center. Use the curved white tiled wall on the right and the dark studio doorway with the oval Studio sign on the left as clean architectural contrast, with the tiled steps forming subtle leading lines. Light the scene with crisp natural sunlight coming from the upper front-right, creating bright highlights on the face, hair, shoulders, and arms, with soft bounce fill from the white tiled wall and deep shadow inside the doorway. Fujifilm PRO Neg Hi inspired color grading, polished commercial contrast, clean neutral skin tones, warm terracotta steps, bright white tiles, deep black clothing and doorway, subtle fine grain, realistic skin texture, detailed lace and jewelry, sharp eyes, photorealistic editorial finish.","subject":{"description":"Based on <User Portrait>, preserve the uploaded facial identity in a polished fashion portrait with direct eye contact and a cool, self-possessed presence.","features":{"hair":"Follow the uploaded portrait identity; for a stricter recreation, style the hair into long, loose, platinum-blonde waves with soft volume.","eyes":"Direct eye contact through oversized tortoiseshell cat-eye glasses.","expression":"Slightly parted lips, calm, chic, subtly flirtatious, composed."},"pose":"Sitting on outdoor tiled steps, torso leaning slightly forward, left hand supporting the cheek, right forearm relaxed across the lap, one knee raised toward the camera, head slightly tilted."},"attire":{"type":"Black lace camisole, plaid micro mini skirt, black floral lace tights, layered silver jewelry, quilted black chain-strap shoulder bag.","details":["black lace camisole with thin straps","red-brown plaid micro mini skirt","black floral lace tights","oversized tortoiseshell cat-eye glasses","layered silver chain necklaces","stacked silver bracelets and rings","black quilted shoulder bag with silver chain strap"],"color":"Black, silver, red-brown plaid, warm terracotta accents."},"composition":{"shot_type":"Medium shot","focal_length":"50mm","aperture":"f/2.8 to f/4","camera_angle":"slightly high eye-level","camera_height":"chest-level","framing":"Vertical fashion portrait, subject slightly right of center, curved white tiled wall on the right, dark studio doorway on the left, terracotta tiled steps as subtle leading lines, clean bright-dark architectural contrast.","aspect_ratio":"4:5"},"lighting":{"type":"Hard natural daylight with soft reflected fill","direction":"Direct sunlight from upper front-right, bounced fill from the white tiled wall, deep shadow in the doorway behind.","mood":"Bright, sculpted, clean, confident."},"color_palette":{"film_simulation":"Fujifilm PRO Neg Hi inspired color grading","style":"Polished street-editorial portrait","tones":["bright white tiles","warm terracotta steps","deep black clothing and doorway","neutral creamy skin tones","clean silver metallic highlights"],"grade_notes":["highlight roll-off: controlled daylight highlights with no blown skin","shadow tint: neutral to slightly cool shadows in the doorway","contrast curve: clean commercial contrast with defined blacks","grain: subtle fine grain"]},"environment":{"setting":"Outside a studio entrance with a black glass door, an oval Studio sign, a curved white square-tiled wall, and terracotta tiled steps.","background":"Minimal urban storefront geometry, deep dark interior on the left, bright tiled wall on the right.","atmosphere":"A clean city fashion moment, polished and intentional, grounded in a real location."},"mood":"Smart, sultry, composed, chic, slightly aloof.","technical_tags":["photorealistic","editorial fashion photography","realistic skin texture","sharp eyes","detailed lace fabric","detailed silver jewelry","crisp daylight shadows","high detail"],"character_reference":"Based on user-uploaded character reference","clothing_reference":"Not required for this version; use the outfit from the reference image.","negative_prompt":"soft studio softbox lighting, on-camera flash, inconsistent sunlight direction, awkward crop, broken anatomy, extra fingers, warped hands, distorted glasses, melted lace texture, warped bag proportions, plastic skin, excessive beauty retouch, over-processed HDR, random bokeh, cluttered background, generic stiff pose, duplicated jewelry, unnatural perspective distortion"}} IMG_7754.JPG, low resolution, technicolor, pull processed, clipped highlights, chromatic aberration, 35mm film, filmic grain, medium format. Ethereal high-intensity film aesthetic, Douyin style, dreamy haze, luminous soft focus, extreme bloom, intense halation, aggressive cinematic split-toning, deep teal shadows, warm golden highlights, 35mm analog film, heavy organic grain, vintage Helios 44-2 lens, f/1.4, nostalgic atmosphere. ${PRESERVE_IDENTITY_PROMPT}` } },
                            { label: 'Ángulo Bajo Urbano', values: { '[PROMPT_CONTENT]': `{"portrait_prompt":{"subject":{"description":"Based on <User Portrait>, a young East Asian woman bending forward at the waist approximately 70 degrees, looking directly down into camera from above with cool aloof expression, both hands gripping white Miu Miu bag handle between her knees","features":{"hair":"hair with side part, hair falling forward past shoulders due to bent posture, some strands framing face","eyes":"Looking straight down into lens through pink-tinted transparent oversized glasses, calm and slightly bored","expression":"Cool, pouty, mouth relaxed and slightly parted, chin down"},"pose":"Standing with feet shoulder-width apart on sidewalk curb, bending forward dramatically at waist, torso nearly parallel to ground, both arms fully extended downward gripping bag handle at knee level, back arched slightly, weight on both feet"},"attire":{"type":"Based on user-uploaded clothing reference","details":["White cropped bolero cardigan with ribbed trim over white lace-trimmed bralette","White polka-dot mini skirt with ruffle hem","White knee-high socks with small cross/bow embroidery","Grey chunky platform sneakers with thick rubber soles","White Miu Miu Wander matelassé mini hobo bag","Silver cross pendant necklace with layered chains"],"color":"Monochromatic white/cream head-to-toe, grey shoe accent"},"composition":{"shot_type":"Full body, extreme low angle looking up","focal_length":"24mm wide angle","aperture":"f/2.8","camera_angle":"Extreme low angle from ground level, camera tilted upward 30 degrees","camera_height":"Ankle-level, 15-20cm from ground, shooting upward","framing":"CRITICAL: legs and platform shoes dominate the lower 60% of frame due to extreme low wide-angle perspective, creating dramatic leg elongation; foreground: chunky sneakers and white knee socks appear proportionally large and detailed; midground: bent torso with bag at knee level; background: grey European colonial building facades with converging vertical lines reinforcing upward perspective; yellow curb line as leading line at very bottom edge","aspect_ratio":"4:5","perspective_note":"Forced perspective from ground level — legs appear significantly elongated, feet and lower legs proportionally larger than head due to 24mm wide-angle distortion at close range, this is intentional"},"lighting":{"type":"Overcast natural daylight, soft diffused with no hard shadows","direction":"Even overhead ambient, slightly brighter from camera-left","mood":"Clean, even, editorial — white clothing glows softly against grey urban backdrop"},"color_palette":{"film_simulation":"PRO Neg Hi","style":"Fujifilm PRO Neg Hi inspired color grading, professional commercial tonality, precise skin rendering, clean whites without color cast, slightly desaturated urban environment, controlled contrast","tones":["Clean white and cream on subject","Cool blue-grey architecture","Natural warm skin tones","Yellow road marking accent"],"grade_notes":["highlight roll-off: controlled, whites bright but not blown","shadow tint: neutral to slightly cool","contrast curve: medium, clean separation between white clothing and grey background","grain: minimal to none, clean professional finish"]},"environment":{"setting":"Shanghai Bund-style European colonial architecture street","background":"Grey neoclassical stone building facades towering above due to low angle, parked dark sedan partially visible, distant skyscraper","atmosphere":"Overcast sky, quiet urban street, sophisticated metropolitan setting"},"mood":"Cool editorial authority, youthful high-fashion dominance, the viewer looks up at her like she owns the street","technical_tags":["8K","photorealistic","extreme low angle","wide angle perspective distortion","elongated legs","forced perspective","street fashion editorial","natural skin texture"],"character_reference":"Based on user-uploaded character reference","clothing_reference":"Based on user-uploaded clothing reference","negative_prompt":"Eye-level camera angle, normal standing proportions, short legs, telephoto compression, flat perspective, high camera position, studio backdrop, harsh flash, blown-out whites, heavy grain, plastic skin, dutch angle"}} IMG_7754.JPG, low resolution, technicolor, pull processed, clipped highlights, chromatic aberration, 35mm film, filmic grain, medium format. Ethereal high-intensity film aesthetic, Douyin style, dreamy haze, luminous soft focus, extreme bloom, intense halation, aggressive cinematic split-toning, deep teal shadows, warm golden highlights, 35mm analog film, heavy organic grain, vintage Helios 44-2 lens, f/1.4, nostalgic atmosphere. ${PRESERVE_IDENTITY_PROMPT}` } }
                        ]
                    }
                ]
            },
        ]
    },
    'cinematic-angles': {
        title: 'Ángulos de Cámara Pro',
        description: 'Experimenta con lentes y perspectivas de cine: Ojo de pez, picados extremos y telefoto.',
        images: [
            {
                id: 55,
                key: 'camera-angle-v2',
                caption: 'Ángulo de Cámara V2',
                subcategory: 'Ángulos y Lentes',
                prompt: `[PROMPT_CONTENT]`,
                illustration: 'professional-profile',
                imageTypeHint: 'Ángulo de cámara cinematográfico.',
                detailedDescription: "Experimenta con diferentes lentes y perspectivas de cine.",
                mediaType: 'image',
                requiresAspectRatio: true,
                dynamicFields: [
                    {
                        type: 'select',
                        key: 'angle_selector',
                        label: 'Ángulo',
                        options: [
                            { label: 'Busto Sobre Hombro', values: { '[PROMPT_CONTENT]': `Generate an intense, cinematic over-the-shoulder bust-up portrait of the person in the photo, shot on a Sony A7R IV with an 85mm f/1.4 GM lens. Their head should be turned significantly back, revealing only part of their face. The pose should be introspective, as if caught in a private, thoughtful moment. The background should have a very soft, blurry depth of field. The image must be hyper-detailed. ${PRESERVE_IDENTITY_PROMPT} ${PRESERVE_OUTFIT_PROMPT}` } },
                            { label: 'Torso Contrapicado', values: { '[PROMPT_CONTENT]': `Generate a dramatic low-angle torso-up shot, front view, looking powerfully upward at the person from the photo. The person should adopt a powerful stance, with their chin slightly lifted, looking down towards the camera with an air of confidence and authority. Shot on a Canon EOS R5 with a 50mm f/1.2L lens to create a cinematic look with ultra-realistic textures and a shallow depth of field. ${PRESERVE_IDENTITY_PROMPT} ${PRESERVE_OUTFIT_PROMPT}` } },
                            { label: 'Gran Angular Bajo', values: { '[PROMPT_CONTENT]': `Generate a dynamic low-angle shot from ground level, looking up at the person from the photo with a strong wide-angle lens effect (emulating a 16mm lens). The pose should be imposing and commanding, making them look dominant over the viewer. The perspective should be dramatically distorted. Shot on a Nikon Z9 with a 14-24mm f/2.8 lens for hyper-realistic detail. ${PRESERVE_IDENTITY_PROMPT} ${PRESERVE_OUTFIT_PROMPT}` } },
                            { label: 'Desde Atrás', values: { '[PROMPT_CONTENT]': `Generate a dramatic over-the-shoulder shot as if from far behind and to the right of the person from the photo, shot on a Fuji GFX 100 with a 110mm f/2 lens. The person's back should occupy most of the frame, and their posture should be poised as if they are observing something in the distance. This pose creates an enigmatic mood with beautiful bokeh. ${PRESERVE_IDENTITY_PROMPT} ${PRESERVE_OUTFIT_PROMPT}` } },
                            { label: 'Primer Plano Picado', values: { '[PROMPT_CONTENT]': `Generate a dramatic high-angle close-up, looking sharply down at the person from almost directly above, shot on a Hasselblad X2D 100C with a 90mm f/3.2 lens. The person should be looking slightly upwards towards the camera with a gentle, vulnerable expression to complement the angle. This angle should emphasize their expression and the shape of their shoulders. The image must capture exquisite detail. ${PRESERVE_IDENTITY_PROMPT} ${PRESERVE_OUTFIT_PROMPT}` } },
                            { label: 'Telefoto Holandés', values: { '[PROMPT_CONTENT]': `Generate a highly stylized telephoto low-angle shot with a severe 45-degree Dutch tilt of the person in the photo, shot on a Leica SL2 with a 75mm f/2 APO-Summicron lens. The pose must be artistic and unbalanced to complement the Dutch tilt, like leaning into the angle or extending a limb along the diagonal axis. This should be a high-fashion, gallery-style portrait with impeccable, sharp detail. ${PRESERVE_IDENTITY_PROMPT} ${PRESERVE_OUTFIT_PROMPT}` } },
                            { label: 'Perfil Telefoto', values: { '[PROMPT_CONTENT]': `Generate a cinematic telephoto side-profile shot of the person in the photo, shot on a Canon EOS R3 with a 200mm f/2L IS USM lens. The person should hold a classic, statuesque profile pose with their gaze fixed on a point in the distance to create a sense of elegance and introspection. The outline should be sharp and clear against an extremely compressed and softly blurred background. ${PRESERVE_IDENTITY_PROMPT} ${PRESERVE_OUTFIT_PROMPT}` } },
                            { label: 'Ojo de Pez', values: { '[PROMPT_CONTENT]': `Generate an extreme fisheye lens portrait of the person in the photo, shot on a Canon EF 8-15mm f/4L Fisheye USM lens. The person should interact with the lens, leaning in close with a playful or surprised expression to exaggerate the dramatic barrel distortion. The image must be hyper-detailed, sharp, and have a unique, surreal quality. ${PRESERVE_IDENTITY_PROMPT} ${PRESERVE_OUTFIT_PROMPT}` } }
                        ]
                    }
                ]
            },
            {
                id: 56,
                key: 'mood-candid-polaroid',
                caption: 'Toma: Polaroid Cándida',
                subcategory: 'Selfies y Espejos',
                prompt: `Generate a photo that captures a candid, intimate moment, in the style of an authentic, vintage Polaroid 600 film, but critically, **without the white physical border**. The image should have the characteristic soft focus, slightly faded, warm, saturated colors, and subtle film grain of a real polaroid. The person should be looking directly into the camera with a complicit and warm expression, like a shared secret or a playful wink, to enhance the feeling of intimacy and spontaneity. ${PRESERVE_IDENTITY_PROMPT} ${PRESERVE_OUTFIT_PROMPT}`,
                illustration: 'time-travel',
                imageTypeHint: 'Ideal para: Selfies o fotos casuales.',
                detailedDescription: "Emulación fiel de película Polaroid 600 (sin borde blanco). Colores cálidos, enfoque suave y grano vintage.\nPara capturar momentos íntimos y nostálgicos.",
                mediaType: 'image',
                requiresAspectRatio: true
            }
        ]
    },
    'cinematic-wild': {
        title: 'Naturaleza Salvaje',
        description: 'Retratos de conexión profunda con la naturaleza y animales majestuosos.',
        images: [
            {
                id: 57,
                key: 'wild-animal-portrait-v2',
                caption: 'Animal Salvaje V2',
                subcategory: 'Naturaleza y Animales',
                prompt: `[PROMPT_CONTENT]`,
                illustration: 'lifestyle',
                imageTypeHint: 'Ideal para: Foto de perfil o mirando algo.',
                detailedDescription: "Momento de conexión íntima con un animal salvaje. Luz natural cálida y atmósfera de respeto por la naturaleza.",
                mediaType: 'image',
                requiresAspectRatio: true,
                dynamicFields: [
                    {
                        type: 'select',
                        key: 'gender_selector',
                        label: 'Género',
                        options: [
                            { label: 'Hombre', values: { '[PROMPT_CONTENT]': `Action, iPhone-style. This person, with their facial and physical features, resembles a stylish man, captured in a moment of affection, gently caressing the face of a huge, wild animal while looking at it with a calm, focused expression. The setting is outdoors, with softly blurred green trees and natural daylight creating a warm, cinematic atmosphere. He is seen wearing a quilted purple jacket over a black t-shirt. The lighting is natural daylight, creating a soft and warm feel. Authentic, hyper-realistic 8K look. ${PRESERVE_IDENTITY_PROMPT}` } },
                            { label: 'Mujer', values: { '[PROMPT_CONTENT]': `Action, iPhone-style. This person, with their facial and physical features, resembles a stylish woman, captured in a moment of affection, gently caressing the face of a huge, wild animal while looking at it with a calm, focused expression. The setting is outdoors, with softly blurred green trees and natural daylight creating a warm, cinematic atmosphere. She is seen wearing an elegant, earth-toned outfit. The lighting is natural daylight, creating a soft and warm feel. Authentic, hyper-realistic 8K look. ${PRESERVE_IDENTITY_PROMPT}` } }
                        ]
                    }
                ]
            },
        ]
    }
};
