
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import type { PhotoPack } from './types';
import { PRESERVE_IDENTITY_PROMPT, PRESERVE_OUTFIT_PROMPT } from './types';
import { fanEncountersPack } from './fanEncounters';
import { fanEncountersJsonPack } from './fanEncountersJson';
import { creativityAndFunPacks } from './creativityAndFun';

export const lifestyleAndFunPacks: Record<string, PhotoPack> = {
    'lifestyle-vibes': {
        title: 'Estilo de Vida y Vibes',
        description: 'Captura momentos espontáneos, relajados y con una estética única.',
        images: [
            {
                id: 901,
                key: 'expressive-candid-grid',
                caption: 'Grid Cándido Expresivo',
                subcategory: 'Cándidas y Espontáneas',
                prompt: `Generate a single image containing a seamless 2x2 grid (4 distinct panels) featuring the person from the reference photo.

**GLOBAL STYLE:**
Photorealistic lifestyle photography, playful soft vibe, soft interior lighting with dark defocused background. High fidelity micro-expressions.
**IDENTITY:** Strictly preserve the facial features, hairstyle, and outfit of the reference person in all 4 panels.

**PANEL DETAILS:**
1. **Top Left:** Low frontal close-up (low angle). Flirtatious sleepy expression with half-closed eyes looking directly at the camera, relaxed eyebrows, subtle pout mouth slightly open. Pose with arms bent forward crossed over the chest, hunched shoulders exposing neck.
2. **Top Right:** 3/4 angle from below. Playful expression with eyes rolled up slightly showing some white, tongue curled out sensually but playfully, mouth open in mock silent moan. One hand making V peace sign touching cheek.
3. **Bottom Left:** Side profile inclined with slight turn towards the camera. Expression of closed delight with closed eyes smiling widely, eyebrows furrowed in playful pleasure, mouth curved in a flirtatious smile. Right hand in peace sign touching the nose and eye area.
4. **Bottom Right:** Direct frontal close-up variation. Mischievous expression with winking eyes, tongue barely peeking out between smiling lips, eyebrows arched in amused surprise. Hands both in V peace signs on the sides of the face.

${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'professional-profile',
                imageTypeHint: 'Grid 2x2 con 4 expresiones cándidas y juguetonas.',
                detailedDescription: "Crea un grid de 4 fotos con expresiones ultra-detalladas: coqueta, juguetona, risa genuina y guiño pícaro. Estilo soft y espontáneo.\nSube una foto con buena iluminación para capturar las micro-expresiones.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['1:1', '4:5', '3:4'],
            },
            {
                id: 902,
                key: 'summer-garden-bikini',
                caption: 'Verano en el Jardín',
                subcategory: 'Estilos y Tendencias',
                prompt: `Amateur smartphone snapshot, 3:4 aspect ratio, Hollywood movie color grading, soft contrast, subtle film grain. Young woman, black string bikini, curvy hourglass silhouette, slim waist, wide hips, large chest, neutral expression, dark eyes. Seated on edge of large tan rock, leaning back on hands, right leg crossed over left, frontal eye-level medium-full shot. Sunny outdoor garden, green foliage, palm trees, stone pathway, blue sky. Bright direct midday sunlight, hard natural shadows, deep focus, natural vibrant colors, casual summer atmosphere. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'lifestyle',
                imageTypeHint: 'Ideal para: Foto de cuerpo entero o medio cuerpo.',
                detailedDescription: "Una foto estilo smartphone con estética de película de Hollywood. Verano, bikini negro, jardín soleado y atmósfera casual.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['3:4', '4:5', '9:16', '1:1'],
            },
            {
                id: 903,
                key: 'editorial-fashion-portrait',
                caption: 'Retrato Editorial de Moda',
                subcategory: 'Moda y Editorial',
                prompt: `Amateur smartphone snapshot, Romantic atmosphere, gentle wind, realistic environment. Hollywood movie color grading, soft contrast, subtle film grain. 
high-end editorial fashion portrait, A playful and self-referential atmosphere, blending youthful charm with a sophisticated, meta-narrative editorial aesthetic., None, clean studio environment, Minimalist photography studio, Warm, naturalistic color grading with soft highlights and rich, earthy mid-tones, Soft, balanced contrast, Subtle, fine-grained film texture, Eye-level medium shot, emphasizing a creamy bokeh of the immediate floor space, and the razor-sharp clarity of the subject's facial features and garment textures, creating an atmosphere of playful confidence and serene joy. Standing upright, leaning slightly forward toward the viewer with a direct, engaging gaze, Hands are clasped delicately together, resting just beneath the chin in a classic 'cute' or 'kawaii' pose, Standing still, feet out of frame, Radiating cheerful innocence and lightheartedness, Minimalist, barely visible small stud earrings, The very edge of a light beige studio floor surface, is extremely blurred (Bokeh), occupying about 5% of the bottom of the screen, Used only as spatial reference, Telephoto compression to flatten the space between the subject and the poster, Shallow depth of field, keeping the subject in sharp focus while the background poster is slightly softened. 
**COMPOSITION:** Full-bleed background, the background poster image fills the entire frame edge-to-edge. Asymmetrical composition, subject positioned off-center to the right, creating a dynamic and modern editorial layout.
Camera position: Eye level, straight-on, height ≈ 155cm from ground, Line of sight path: Subject's eyes -> subject's hands -> the massive eyes of the poster in the background, Key Light: Large, soft diffused light (4000K) from the front-left, accounting for 70% of brightness. Creates a gentle skin glow and soft catchlights in the eyes., Warm white (4500K) soft light from the top-right to provide subtle separation from the background, Light ratio 3:1, Warm and Playful, Burnt Orange (#CC5500), Deep Black (#000000), Warm Beige (#D2B48C), to form the classic "Analogous Warm Palette", Joy, Playfulness, Self-confidence, Whimsy, Serenity, Commercial-grade editorial portrait, photorealistic, 8K, Ultra-detailed fabric and skin textures, Aspect ratio 9:16. ${PRESERVE_IDENTITY_PROMPT} ${PRESERVE_OUTFIT_PROMPT}`,
                illustration: 'model-cover',
                imageTypeHint: 'Ideal para: Retrato editorial de moda.',
                detailedDescription: "Retrato editorial de moda de alta gama con una atmósfera lúdica y sofisticada. Estilo meta-narrativo y minimalista.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['9:16'],
            },
            {
                id: 904,
                key: 'domestic-morning-lingerie',
                caption: 'Mañana Íntima (Lencería)',
                subcategory: 'Cándidas y Espontáneas',
                prompt: `Amateur smartphone snapshot, Romantic atmosphere, gentle wind, realistic environment. Hollywood movie color grading, soft contrast, subtle film grain. 
cinematic film still, An intimate and quiet morning atmosphere, capturing a candid moment of domestic vulnerability and casual preparation., Soft, hazy morning light filtering through a window, Realistic cluttered bedroom interior, Naturalistic color grading with soft highlights and slightly desaturated shadows, Soft contrast with high-key lighting, Subtle film grain, Third-person intimate perspective, emphasizing extreme bokeh of a dark vertical architectural element, and the razor-sharp focus of the mid-ground subject's facial features, creating an atmosphere of intimacy, vulnerability, and domestic realism, Standing upright, facing the camera with a slight tilt of the head, looking directly into the lens, Right arm is raised, holding a clothes hanger with the outfit from the reference image; left arm is relaxed at the side, Standing naturally with legs slightly apart, Casual, unguarded, and quietly confident, Loose-fitting light grey cotton camisole and matching mini-shorts, One thin strap of the camisole has slipped down the shoulder, revealing the collarbone, A dark, out-of-focus wooden door frame or edge of a wardrobe, is extremely blurred (Bokeh), occupying about 15% of the right side of the screen, Used only as a framing device to enhance the sense of being a fly-on-the-wall observer, Natural human field of view with no distortion, Extremely shallow depth of field, Camera position: Eye level, height ≈ 155cm, Line of sight path: From the dark foreground edge to the subject's face, then to the outfit on the hanger, finally to the bright window in the background, Key Light: Soft diffused natural light (5500K) from a large window behind the subject, accounting for 60% of brightness. Creates strong skin glow and rim lighting on the hair, Rim Light: Bright white (6000K) hard light from the background window, Light ratio 1:4, Soft domestic morning, Pale Grey (#D3D3D3), Off-White (#FAF9F6), to form the classic high-key palette, Intimacy, vulnerability, casualness, youth, domesticity, quietude, Cinematic portrait still, photorealistic, 8K, film-level ultra-detailed. ${PRESERVE_IDENTITY_PROMPT} ${PRESERVE_OUTFIT_PROMPT}`,
                illustration: 'lifestyle',
                imageTypeHint: 'Ideal para: Retrato íntimo y cándido.',
                detailedDescription: "Momento íntimo y tranquilo de preparación matutina. Estilo cinematográfico, luz suave y atmósfera doméstica.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['9:16', '3:4'],
            },
            {
                id: 905,
                key: 'kawaii-plushie-doll-nb2',
                caption: 'Kawaii Plushie Doll (NB2)',
                subcategory: 'Estilos y Tendencias',
                prompt: `{
  "portrait_prompt": {
    "subject": {
      "description": "Based on <User Portrait>, a young woman lying prone on a bed in a playful pose, right hand index finger gently touching lower lip with mouth slightly open showing teeth, looking directly at camera with big round blue-green circle contact lens eyes — the 'living doll' look — expression is a mix of cute innocence and subtle playfulness",
      "features": {
        "hair": "Long platinum blonde princess / doll-like ringlets, voluminous and flowing out from both sides of the hood, slightly tousled",
        "eyes": "Large blue-green colored circle contact lenses giving a glassy doll-like appearance, long curled false eyelashes, soft pink-brown eyeshadow",
        "expression": "Playful wink + cute pout — one eye squeezed shut with a slight scrunch of the nose, mouth in a soft 'chu' pout shape with finger touching lower lip, cheeks slightly puffed, the kind of face that says 'nyaa~'. NOT a serious or seductive wink — this is pure kawaii wink, like a character saying their catchphrase",
        "makeup": "Full kawaii makeup — dewy glossy lips with shimmer/glitter lip gloss, pink blush on cheeks and nose tip, defined brows, long dramatic lash extensions, overall 'porcelain doll' skin finish",
        "nails": "Long pointed stiletto nails with glitter/sparkle finish, catching light"
      },
      "pose": "Based on user-uploaded pose reference — lying prone (face-down) on bed, upper body propped up on left arm, right hand raised with index finger touching lower lip, feet kicked up behind (visible in background, wearing white ankle socks), playful and relaxed"
    },
    "attire": {
      "type": "White and pink Marie Cat (Disney Aristocats) character plush onesie / kigurumi pajamas",
      "details": [
        "Fluffy white plush fabric, extremely soft and fuzzy texture visible",
        "Hood designed as Marie cat face — pointed cat ears with pink inner ear, pink bow on top of head between ears, embroidered blue cat eyes with eyelashes, small pink nose, whisker details",
        "Hood worn up with blonde curls spilling out from both sides",
        "Pink heart pattern scattered across body of onesie",
        "Fluffy plush cuffs at wrists",
        "White ankle socks on feet (visible kicked up in background)"
      ],
      "color": "Dominant white plush with pink accents (hearts, bow, ear inner, nose)",
      "accessories": "Delicate silver chain bracelet on wrist"
    },
    "composition": {
      "shot_type": "Medium close-up, face and upper body dominant",
      "focal_length": "35-50mm (selfie distance, slight wide angle)",
      "aperture": "f/2.8",
      "camera_angle": "Slightly high angle, 15-20 degrees above eye level (classic selfie angle)",
      "camera_height": "Slightly above subject eye level, looking down",
      "framing": "Subject centered-left, face occupying 40% of frame. Cat ear hood tips extending to top edge. Background upper-right: out-of-focus kicked-up feet in white socks as secondary playful detail. Dark simple background (headboard/wall). Minimal headroom — cat ears touch top edge.",
      "aspect_ratio": "3:4"
    },
    "lighting": {
      "type": "Soft frontal warm light — ring light or large softbox positioned directly in front/slightly above, creating even illumination with no hard shadows",
      "direction": "Frontal and slightly above, wrapping around face evenly",
      "mood": "Warm, dreamy, flattering — the specific lighting quality of 'beauty selfie' that makes skin glow, eyes sparkle (catchlight visible as large soft reflection in pupils), and plush fabric look extra fluffy. Slight soft glow / diffusion filter effect on overall image."
    },
    "color_palette": {
      "film_simulation": "ASTIA (S)",
      "style": "Fujifilm ASTIA inspired color grading, soft pastel tones, gentle and flattering skin tones with pink undertone, low contrast, delicate highlight bloom, colors remain saturated but never harsh — pink stays candy-pink, white stays creamy-white, blonde hair stays warm golden",
      "tones": [
        "Creamy white plush fabric",
        "Candy pink hearts and accents",
        "Warm golden blonde hair",
        "Porcelain pink-white skin",
        "Blue-green eyes as single cool color pop"
      ],
      "grade_notes": [
        "highlight roll-off: extremely soft, dreamy bloom, slight glow on skin",
        "shadow tint: warm, lifted — no crushed blacks, shadows stay soft brown",
        "contrast curve: low, airy, bright — everything stays in the 'light and pretty' zone",
        "grain: none or barely perceptible — this is meant to be clean and polished",
        "skin: porcelain smooth with pink undertone, beauty-retouched look, NOT raw/textured",
        "soft focus: very slight overall diffusion / soft glow, like a beauty filter"
      ]
    },
    "environment": {
      "setting": "Bedroom / bed, lying prone",
      "background": "Simple dark background — dark brown or grey headboard and wall, intentionally minimal to keep all attention on subject. Soft fabric/bedding surface visible beneath subject.",
      "atmosphere": "Cozy bedroom, warm intimate lighting, the feeling of a private cute moment — like a FaceTime call with someone you like"
    },
    "mood": "Kawaii meets subtle flirt — the sweet spot between innocent doll and knowing playfulness. 'I know I'm cute and I'm using it.' Warm, dreamy, intimate, pink.",
    "technical_tags": [
      "photorealistic",
      "beauty lighting",
      "soft glow",
      "porcelain skin",
      "doll-like eyes",
      "plush texture",
      "kawaii aesthetic",
      "warm tones",
      "circle lens eyes",
      "glossy lips"
    ],
    "character_reference": "Based on user-uploaded character reference",
    "pose_reference": "Based on user-uploaded pose reference — prone position with finger touching lip and feet kicked up",
    "negative_prompt": "harsh flash, hard shadows, cold blue lighting, dark moody, editorial cold, masculine, outdoor, street, indie sleaze, grungy, film grain heavy, desaturated, flat skin, matte lips, no makeup, realistic pores, wrinkles, aged skin, scary, horror, creepy doll"
  }
} ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'model-cover',
                imageTypeHint: 'Nano 🍌 2: Estilo Living Doll. Pijama Kigurumi de Gato y estética soft kawaii.',
                detailedDescription: "Transfórmate en una 'muñeca viviente' con pijama de peluche, maquillaje kawaii y ojos grandes. Iluminación suave y estética dreamy.\nIdeal para un look tierno y juguetón.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['3:4', '4:5', '9:16', '1:1']
            },
            {
                id: 906,
                key: 'indie-sleaze-nb2',
                caption: 'Indie Sleaze 90s (NB2)',
                subcategory: 'Estilos y Tendencias',
                prompt: `{
  "portrait_prompt": {
    "subject": "Based on the person in the reference image (STRICT IDENTITY PRESERVATION), [a young woman with voluminous, messy, long hair, wearing a black sporty crop top with white trim and matching black shorts, white calf-high socks. She is sitting perched on a high dark wooden counter or piano top. Her pose is casual and edgy, leaning forward with one hand resting near her mouth, biting her finger slightly, gazing directly at the camera with a sultry, nonchalant expression. A silver bracelet on her wrist. Background includes a white wall with vintage posters taped up and brown wooden blinds. Foreground details include the neck of an electric guitar, a glass jar of cookies, and liquor bottles]",
    "composition": "Full body shot, 35mm focal length, slightly low angle to emphasize leg length, sharp focus on subject with hard flash fall-off, messy but balanced framing",
    "camera_angle": "Eye-level relative to the seated subject, slightly low angle from the floor, medium distance",
    "lighting": "Direct on-camera flash photography, hard lighting creating a sharp drop shadow on the wall behind the subject, high contrast, reminiscent of 90s point-and-shoot aesthetics, no diffusion",
    "color_palette": "Vintage film aesthetic, Kodak Gold 200 simulation, warm tones from wooden blinds and furniture contrasted with cool white flash light, deep blacks, slightly grainy texture, lo-fi indie vibe",
    "mood": "Indie sleaze, candid, rebellious, cool girl aesthetic, raw and authentic, Y2K retro fashion editorial, snapshot style",
    "negative_prompt": "soft lighting, studio lighting, bokeh, professional studio portrait, airbrushed skin, 3d render, cartoon, illustration, distorted hands, missing guitar strings, floating objects, anatomical errors, stiff pose, over-processed, HDR"
  }
} ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'model-cover',
                imageTypeHint: 'Nano 🍌 2: Estilo Indie Sleaze / Y2K Flash. Outfit deportivo negro.',
                detailedDescription: "Revive la estética 'Indie Sleaze' de los 90s con flash directo, alto contraste y una actitud rebelde. El resultado parece una foto analógica espontánea.\nSube una foto con actitud desenfadada para encajar en este estilo.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['4:5', '9:16', '1:1', '3:4'],
            },
            {
                id: 907,
                key: 'dark-sofa-decompression',
                caption: 'Descompresión en Sofá',
                subcategory: 'Moda y Editorial',
                prompt: `Portrait of <User Portrait>, prone on dark sofa, diagonal composition lower-left (face) to upper-right (heels). Propped on elbows, face resting on left hand with fingers fanned, legs bent 90° up. Long voluminous waves cascading off sofa edge, framing face. Heavy black editorial cat-eye liner, sharp long wings. Matte coral-red lipstick matches long almond nails and Louboutin red soles (triangular color constellation). Porcelain skin, groomed brows, gold ring. Languid heavy-lidded downward gaze, relaxed jaw, post-event decompression mood. Strapless black evening dress, black stiletto heels. Black-and-white cow-print throw blanket. Lighting: warm amber lamp light from right side, cool blue-grey city night background through windows. Fujifilm Nostalgic Negative film simulation, soft creamy highlight roll-off, warm-neutral shadows. Medium full-body shot, 50mm f/1.8, camera eye-level with sofa. Background: dark stylish apartment interior, vanity with cosmetic bokeh. 8k, photorealistic, cinematic lighting. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'lifestyle',
                imageTypeHint: 'Retrato en sofá, luz cálida, estilo editorial.',
                detailedDescription: "Retrato editorial relajado en un sofá oscuro. Iluminación cálida, estilo cinematográfico y atmósfera de descompresión post-evento.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['3:4', '4:5', '9:16', '16:9'],
            },
            {
                id: 908,
                key: 'flash-photography-90s',
                caption: 'Flash Directo Años 90',
                subcategory: 'Moda y Editorial',
                prompt: `Recreate the person in the photo with the following highly detailed style and composition. The final image must be a photorealistic photograph. The frame is composed in mid-shot, nearly a half-body shot, with the camera almost at eye level with the subject, yet the sense of perspective is strong. However, due to the subject’s slight forward lean, there’s a visually compressed effect that gives a slight overhead feel, making the distance between the viewer and the model feel intimate and direct. The model is looking up at the camera with a bit of an attitude, exuding a “cool girl” vibe. The flash is coming from the front left upper side, creating hard highlights and deep shadows—there’s a noticeable highlight reflection on the sunglasses, and a faint shadow appears on the wall behind the person, giving the overall image a typical “direct flash” texture: slightly grainy, with a visible film style or high ISO digital photography’s rough texture. The model’s face is a bit overexposed. The color palette is dominated by low-saturation neutral tones: a black velvet blazer with broad shoulders occupies the largest area of the frame, and the fabric appears to be velvet with delicate nap texture. Underneath is a black silk camisole. The model is wearing a black mini skirt and sheer tights. On the left side of the background are piled up dark green and beige baseball caps, and on the right side are stacked bright blue jackets and a black helmet, which provide accent colors in the soft shadows and emphasize the backstage or dressing room atmosphere. The subject's pose and demeanor exude a strong sense of street fashion: she is sitting on the edge of a table with her knees crossed, hands casually placed on either side of her body, and her body leaning forward, giving off a casual yet commanding presence. Her facial expression is indifferent yet confident—thickly applied nude matte lipstick, a straight nose, and highlighted forehead are still clear under the glasses; the wide, square black sunglasses cover her eyes, but the sharp bevelled edges of the frame further enhance the “cool” aura. Her hair is tied up in a high ponytail with loose strands falling naturally, which under the hard light take on a golden brown highlight, adding a touch of casual sexiness. Overall, the image feels like a 1990s street photography sketch: coarse grain, direct flash, low saturation colors, and exaggerated silhouette together create a nostalgic yet avant-garde fashion attitude. In the lower right corner is a camera timestamp: 2001 05 14. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'time-travel',
                imageTypeHint: 'Ideal para: Retratos con actitud.',
                detailedDescription: "Recrea el estilo de fotografía callejera de los 90 con flash directo y alto contraste. Ropa de terciopelo negro y gafas de sol cuadradas.\nIncluye una marca de tiempo vintage en la esquina.",
                mediaType: 'image',
                requiresAspectRatio: true,
            },
            {
                id: 909,
                key: 'paparazzi-cowboys-nb2',
                caption: 'Paparazzi NYC (Cowboys)',
                subcategory: 'Estilos y Tendencias',
                prompt: `[PROMPT_CONTENT]`,
                illustration: 'model-runway',
                imageTypeHint: 'Nano 🍌 2: Estilo Paparazzi NYC. Elige versión Femenina o Masculina.',
                detailedDescription: "Simula una foto robada por paparazzi en las calles de NYC, con grano de película y movimiento urbano. El estilo es crudo, vibrante y lleno de energía.\nPerfecto para looks de street style casuales y modernos.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['9:16', '4:5', '3:4', '1:1'],
                dynamicFields: [
                    {
                        type: 'select',
                        key: 'gender_version',
                        label: 'Versión',
                        options: [
                            {
                                label: 'Femenina (Teen)',
                                values: {
                                    '[PROMPT_CONTENT]': `A photorealistic candid paparazzi-style full-body shot of the person from the reference image (appearing as a young female teen) walking down a busy New York City sidewalk. She is wearing a white baby tee crop top with the text 'I <3 COWBOYS' in pink glitter letters, low-rise denim mini skirt, and knee-high leather boots. She is wearing dark cat-eye sunglasses and clutching a black purse and phone. The background features typical urban scenery including construction scaffolding, a white delivery truck, a trash bin, and blurred pedestrians, shot with natural daylight and high-resolution texture. ${PRESERVE_IDENTITY_PROMPT}`
                                }
                            },
                            {
                                label: 'Masculina (Teen)',
                                values: {
                                    '[PROMPT_CONTENT]': `A photorealistic candid paparazzi-style full-body shot of the person from the reference image (appearing as a young male teen) walking down a busy New York City sidewalk. He is wearing a white baby tee crop top with the text 'I <3 COWBOYS' in pink glitter letters, baggy jeans, and retro sneakers. He is holding an iced coffee. The lighting is bright, harsh midday sun creating sharp shadows. High contrast, saturated colors, grainy paparazzi aesthetic. ${PRESERVE_IDENTITY_PROMPT}`
                                }
                            }
                        ]
                    }
                ]
            },
            {
                id: 910,
                key: 'art-gallery-shot',
                caption: 'Galería de Arte (Cándida)',
                subcategory: 'Cándidas y Espontáneas',
                prompt: `High-contrast black & white photo in a modern art gallery. Candid "stolen shot" of the person from the uploaded photo still among a blurred moving crowd. Slightly slanted angle, face partly turned (not fully side view/camera). 3/4 body shot (mid-thigh up). Wearing a long dark coat, hands in pockets. Behind them: framed Banksy artworks arranged in a grid. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'lifestyle',
                imageTypeHint: 'Ideal para: Foto de medio cuerpo.',
                detailedDescription: "Foto cándida en blanco y negro dentro de una galería de arte moderna. Estilo 'robado' entre la multitud con obras de Banksy al fondo.\nSube una foto de perfil o mirando obras de arte.",
                mediaType: 'image',
                requiresAspectRatio: true,
            },
            {
                id: 911,
                key: 'golden-hour-kneeling',
                caption: 'Chica Agachada (Golden Hour)',
                subcategory: 'Estilos y Tendencias',
                prompt: `{
  "prompt": "Portrait photography from above, young teen person, looking up directly at camera, both hands under chin with fists supporting face, sitting or kneeling on concrete sidewalk, wearing black off-shoulder long sleeve top with ruffle details on sleeves, natural freckles scattered across face nose and forehead, light blue green eyes with long dark eyelashes, natural pink mauve lips, small silver septum nose ring piercing, multiple gold rings on fingers, small gold hoop earrings, gold chain necklace, fair skin with sun freckles, soft natural golden hour sunlight creating diagonal shadow on pavement, outdoor sidewalk setting, intimate close-up portrait, looking up at camera with soft neutral expression, iPhone style portrait photography, warm afternoon lighting",
  "negative_prompt": "indoor, studio lighting, heavy makeup, dark hair, side angle, full body, harsh shadows",
  "style": "natural portrait photography, golden hour outdoor, intimate close-up, social media aesthetic",
  "aspect_ratio": "3:4",
  "camera": {
    "type": "smartphone portrait or mirrorless camera",
    "angle": "high overhead angle looking down at subject looking up",
    "framing": "close-up portrait, head shoulders and hands visible"
  },
  "lighting": {
    "type": "natural golden hour sunlight",
    "quality": "warm soft afternoon sun, diagonal light creating gentle shadow on concrete",
    "atmosphere": "warm outdoor natural light, intimate mood"
  },
  "mood": "intimate, soft, natural, candid, warm, gentle",
  "color_palette": ", black clothing, gold jewelry accents, warm skin tones, grey concrete, natural freckle tones",
  "subject_features": {
    "hair": "",
    "skin": "fair with natural freckles across nose cheeks and forehead, sun-kissed",
    "eyes": "light blue green, large, looking directly up at camera, long dark lashes",
    "lips": "natural pink mauve, soft full shape",
    "eyebrows": "natural dark brown, well groomed",
    "expression": "soft neutral, intimate, slightly pouty, direct eye contact",
    "freckles": "natural scattered freckles prominent across nose bridge, cheeks, forehead"
  },
  "accessories": {
    "piercings": "small silver hoop septum nose ring",
    "earrings": "small gold hoop earrings",
    "rings": "multiple gold stacking rings on both hands fingers",
    "necklace": "delicate gold chain necklace"
  },
  "wardrobe": {
    "top": "black off-shoulder long sleeve top, ribbed texture, ruffle frill details on sleeve cuffs, bare shoulders exposed"
  },
  "pose": {
    "position": "sitting or kneeling on ground",
    "hands": "both fists under chin, supporting face, elbows together",
    "gaze": "looking straight up at camera above"
  },
  "setting": {
    "location": "outdoor concrete sidewalk or pathway",
    "background": "grey concrete pavement with diagonal sunlight shadow",
    "time": "golden hour, late afternoon"
  }
} ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'professional-profile',
                imageTypeHint: 'Nano 🍌 2: Vista superior, luz dorada, estilo influencer.',
                detailedDescription: "Un retrato íntimo desde arriba bañado por la luz dorada del atardecer, destacando texturas naturales y pecas. Estética suave y cálida de redes sociales.\nRecomendado para primeros planos emotivos y naturales.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['3:4', '4:5', '9:16', '1:1']
            },
            {
                id: 912,
                key: 'digital-nomad-v2',
                caption: 'Noche Estrellada en Camper V2',
                subcategory: 'Noche y Eventos',
                prompt: `Action, iPhone-style. This person, with their facial and physical features, resembles a digital nomad, sitting at the open door of their camper van, looking towards the camera with an expression of peace and awe. The spectacular starry night sky is visible in the background. They are seen holding a steaming cup of tea and wearing comfortable, cozy clothing. The lighting comes from a warm, soft light source inside the van, which creates a cozy atmosphere and gently illuminates their face, contrasting with the cool blue light of the moon outside. The dominant colors are warm inside and cool outside, with medium contrast. Authentic, documentary look, without filters. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'lifestyle',
                imageTypeHint: 'Ideal para: Foto de cuerpo entero sentado.',
                detailedDescription: "Retrato acogedor en una camper bajo un cielo estrellado. Contraste entre la calidez interior y el frío exterior nocturno.\nIdeal para amantes del viajes y la naturaleza.",
                mediaType: 'image',
                requiresAspectRatio: true,
            },
            {
                id: 913,
                key: 'wellness-guru-v2',
                caption: 'Yoga al Amanecer V2',
                subcategory: 'Noche y Eventos',
                prompt: `Action, iPhone-style. This person, with their facial and physical features, resembles a wellness guru, captured in a balance pose like Warrior II or a meditation posture, looking towards the camera with an expression of serenity and strength. The setting is a skyscraper rooftop at dawn, with the vast cityscape waking up in the background. They are seen wearing a designer sportswear set in vibrant colors. The lighting is a strong backlight from the rising sun, creating a spectacular golden rim light around them, while the soft, reflected light from the sky illuminates their facial features. The dominant colors are oranges, golds, and cool city blues, with high contrast. Authentic, documentary look, with zero grain. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'lifestyle',
                imageTypeHint: 'Ideal para: Foto de cuerpo entero.',
                detailedDescription: "Practica yoga en una azotea al amanecer. Iluminación de contraluz espectacular y atmósfera de serenidad urbana.\nSube una foto de cuerpo entero para una mejor integración.",
                mediaType: 'image',
                requiresAspectRatio: true,
            },
            {
                id: 914,
                key: 'festive-night-v2',
                caption: 'Noche Festiva con Neón V2',
                subcategory: 'Noche y Eventos',
                prompt: `Action, iPhone-style. This person, with their facial and physical features, resembles a stylish individual, captured in a cozy, festive moment at night, looking towards the camera. The setting is an outdoor decorated setup, with a glowing neon ring, vines, and fairy lights creating a vibrant, blurry background. They are seen wearing a fashion-forward outfit. The lighting is warm and lively. Authentic, fashion-editorial look. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'lifestyle',
                imageTypeHint: 'Ideal para: Foto de medio cuerpo.',
                detailedDescription: "Retrato festivo nocturno con luces de neón y decoración acogedora. Bokeh vibrante y atmósfera cálida de celebración.\nPerfecto para mostrar un estilo de vida social y divertido.",
                mediaType: 'image',
                requiresAspectRatio: true,
            },
            {
                id: 915,
                key: 'mirror-room-v2',
                caption: 'Sala de Espejos V2',
                subcategory: 'Noche y Eventos',
                prompt: `Action, iPhone-style. This person, with their facial and physical features, resembles an enigmatic figure, looking directly at the camera with an intense and self-aware expression. The setting is an infinite mirror room filled with hanging lights, creating endless reflections that become a spectacular bokeh effect in the background. They are seen wearing an outfit with metallic or iridescent elements. The lighting comes from the installation's own lights, creating multiple catchlights in their eyes and highlighting the textures of their outfit. The dominant colors are vibrant and saturated with medium-high contrast. Authentic, documentary look, with a magical and disorienting atmosphere. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'lifestyle',
                imageTypeHint: 'Ideal para: Foto de medio cuerpo.',
                detailedDescription: "Retrato en una sala de espejos infinita con luces colgantes. Efecto bokeh espectacular y atmósfera mágica.\nIdeal para fotos artísticas con ropa metálica o brillante.",
                mediaType: 'image',
                requiresAspectRatio: true,
            },
            {
                id: 916,
                key: 'digital-activist-v2',
                caption: 'Protesta Nocturna V2',
                subcategory: 'Noche y Eventos',
                prompt: `Action, iPhone-style. This person, with their facial and physical features, resembles a digital activist, captured in the middle of a chaotic night-time protest. They are holding their phone up as if live-streaming, looking past the device directly at the camera with an expression of intense conviction and urgency. Their face is the focal point. The primary light source is the bright screen of their own phone, which casts a cool, digital light on their features, separating them from the blurred chaos of the protest in the background. They are seen wearing practical urban clothing. The contrast is very high, with desaturated colors except for spots of light. Authentic, raw documentary look, with film grain. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'lifestyle',
                imageTypeHint: 'Ideal para: Foto de cara o busto.',
                detailedDescription: "Retrato crudo y urgente en una protesta nocturna, iluminado por la pantalla del móvil. Estilo documental con grano y alto contraste.\nTransmite activismo y conexión digital.",
                mediaType: 'image',
                requiresAspectRatio: true,
            },
            {
                id: 917,
                key: 'indoor-rain-v2',
                caption: 'Lluvia Interior V2',
                subcategory: 'Noche y Eventos',
                prompt: `Action, iPhone-style. This person, with their facial and physical features, resembles a contemplative figure, standing inside an indoor rain art installation. They are holding a transparent umbrella, looking up through it towards the camera with an expression of serene wonder. The setting is a dark room where a single, powerful backlight makes every falling drop of rain shine. The light filtering through the transparent umbrella and reflecting off the wet ground softly illuminates their facial features. The dominant colors are cool and almost monochromatic, with very high contrast. Authentic, documentary look, with a poetic feel and sharp textures on the water droplets. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'lifestyle',
                imageTypeHint: 'Ideal para: Foto de medio cuerpo con paraguas (si es posible).',
                detailedDescription: "Retrato poético bajo una instalación de lluvia interior. Iluminación de contraluz que hace brillar cada gota.\nIdeal para una atmósfera contemplativa y artística.",
                mediaType: 'image',
                requiresAspectRatio: true,
            },
            {
                id: 918,
                key: 'regal-futuristic-owl-v2',
                caption: 'Futurista con Búho V2',
                subcategory: 'Moda y Editorial',
                prompt: `Action, iPhone-style. This person, with their facial and physical features, resembles a regal and futuristic figure, posing confidently for the camera. The setting is a grand studio with swirling purple and blue smoke illuminated by neon lights. They are seen wearing a tailored violet velvet suit, and a majestic owl with glowing eyes is perched on their shoulder. The lighting is a dramatic neon glow. Authentic, hyper-realistic fashion look. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'lifestyle',
                imageTypeHint: 'Ideal para: Foto de medio cuerpo.',
                detailedDescription: "Retrato majestuoso con un búho y estética futurista de neón. Humo de colores y vestuario de terciopelo para un look real.\nSube una foto con pose segura y elegante.",
                mediaType: 'image',
                requiresAspectRatio: true,
            },
            {
                id: 919,
                key: 'accidental-selfie',
                caption: 'Selfie Accidental',
                subcategory: 'Estilos y Tendencias',
                prompt: `Please generate an iPhone-style selfie similar to an uploaded task image. There is no clear subject or intentional composition, as if the photo was taken casually by accident. The image has slight motion blur, with uneven sunlight and lighting causing mild overexposure. The angle is awkward, the framing is messy, and the overall result feels deliberately mediocre, like a selfie unintentionally captured while pulling a phone out of a pocket. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'professional-profile',
                imageTypeHint: 'Ideal para: Foto de cara o medio cuerpo. Estilo foto fallida.',
                detailedDescription: "Genera una selfie 'fallida' intencionalmente, con desenfoque de movimiento y encuadre torpe. Estilo auténtico de foto accidental.\nPerfecto para memes o contenido irónico.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['9:16', '4:5', '3:4', '1:1']
            },
            {
                id: 920,
                key: 'ethereal-forest-dream',
                caption: 'Ensueño Etéreo',
                subcategory: 'Moda y Editorial',
                prompt: `A dreamy portrait of the person from the reference photo with a mystical, innocent vibe and dewy skin. Their hair is wavy and intertwined with small real wildflowers, ivy, and delicate ribbon braids. The person is sitting on a moss-covered fallen tree trunk, looking at camera with a gently parted mouth, as if caught in a daydream. Hands rest lightly on lap, surrounded by flowers. Outfit: A flowing, ethereal gown made of layered sheer tulle in pale mint green and lavender tones, embroidered with three-dimensional butterflies and dried botanicals. The dress is semi-translucent, catching the light. Barefoot. Environment: A secret, ancient forest at dawn. Thick mist hangs in the air. Sunlight filters through the tall canopy creating visible light rays (Tyndall effect). The ground is covered in ferns and wildflowers. Aesthetics: 8K resolution, soft focus photography, dreamy atmosphere, extremely diffused lighting, magical realism, incredible detail on botanical elements, shot with a large aperture prime lens (F/1.2), natural color palette. Aspect ratio 3:4. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'professional-profile',
                imageTypeHint: 'Ideal para: Retrato de ensueño, etéreo y místico.',
                detailedDescription: "Retrato místico en un bosque antiguo al amanecer. Vestido etéreo, flores en el pelo y luz difusa para un look de cuento de hadas.\nIdeal para una imagen romántica y soñadora.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['3:4', '4:5', '9:16', '1:1']
            },
            {
                id: 921,
                key: 'cozy-bedroom-morning',
                caption: 'Mañana Acogedora en Cama',
                subcategory: 'Cándidas y Espontáneas',
                prompt: `Cute, innocent young adult person sitting comfortably on a neatly made bed, relaxed natural posture with legs gently bent, shoulders soft and at ease. soft, flowing hair styled in loose natural waves, silky texture, subtle shine, a few delicate strands framing the face. Clear blue eyes with a gentle sparkle, long natural lashes, delicate eyebrows, smooth fair complexion with a soft healthy glow, subtle blush on cheeks, light pink lips, minimal natural makeup enhancing their youthful features. Calm, sweet, peaceful expression conveying warmth and innocence.

Wearing a clean white short-sleeve cotton shirt, lightweight fabric, neatly tied at the waist with natural folds and creases, paired with light-wash high-waisted jeans, casual fit, realistic denim texture, visible stitching and seams, effortlessly stylish yet simple.

Bright, cozy bedroom interior filled with soft natural light, white and cream color palette, minimal modern decor, neatly arranged pillows, soft linen bedsheets, light wooden bed frame and furniture, a large window nearby with sheer curtains gently diffusing the sunlight. Warm morning or late-afternoon sunlight streaming in, creating soft highlights on her hair and skin, gentle shadows for depth, peaceful and intimate atmosphere, calm lifestyle mood.

Photorealistic, ultra-high detail, hyper-detailed skin texture with visible natural pores and softness, realistic hair strands with depth and volume, accurate fabric textures, lifelike color tones. Shot on Canon DSLR, 50mm f/1.8 lens, shallow depth of field, creamy natural bokeh background, sharp focus on eyes and face, natural lighting only, no artificial flash. Soft cinematic yet true-to-life color grading, lifestyle editorial photography style, clean balanced composition, vertical framing, realistic perspective, professional photography quality. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'lifestyle',
                imageTypeHint: 'Ideal para: Retrato lifestyle relajado en cama.',
                detailedDescription: "Retrato íntimo y luminoso en una habitación acogedora. Camisa blanca anudada, jeans y luz natural suave. Estilo editorial de lifestyle.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['3:4', '4:5', '9:16', '1:1'],
            },
            {
                id: 922,
                key: 'sultry-v-sign-bodysuit',
                caption: 'Sultry V-Sign (Bodysuit)',
                subcategory: 'Moda y Editorial',
                prompt: `{
  "portrait_prompt": {
    "subject": {
      "description": "Based on <User Portrait>, a young woman reaching her right hand directly toward the camera in a V/peace sign gesture — fingers extremely close to the lens (approximately 15-20cm) creating dramatic wide-angle perspective distortion where the hand appears almost as large as her face, looking down at camera with a seductive half-lidded gaze, lips slightly parted and pushed forward in a sultry pout, chin tucked, heavy-lidded bedroom eyes radiating controlled temptation",
      "features": {
        "hair": "hair, parted in the middle, flowing freely past shoulders, right side dramatically lit with deep red color spill from practical light source, left side in natural warm tones",
        "eyes": "Half-lidded seductive gaze looking down into camera, dark eyes with slow-burn intensity — not aggressive, but magnetic and inviting, the kind of look that holds you in place",
        "expression": "Sultry and tempting — lips softly parted with subtle pout, heavy eyelids at 60% open, one eyebrow micro-raised, the overall read is 'bedroom eyes' with quiet confidence — seduction through restraint, not effort"
      },
      "pose": "Based on user-uploaded pose reference"
    },
    "attire": "[CLOTHING_PROMPT]",
    "composition": {
      "shot_type": "Medium close-up with extreme foreground element (V-sign hand occupying 35-40% of frame)",
      "focal_length": "24mm equivalent or wider (smartphone ultrawide) — extreme near-far perspective distortion is THE defining visual characteristic",
      "aperture": "f/1.8 (phone equivalent) — face sharp, background softened",
      "camera_angle": "Low angle — camera is significantly below subject's eye level, approximately at her waist-to-lap height, tilted upward 20-25 degrees, she is looking DOWN at the lens creating a clear top-down power dynamic",
      "camera_height": "Waist level or lower of seated subject — as if camera is placed on her lap or on the bed surface below her, angled up toward her face",
      "framing": "Subject centered slightly left; FG: giant V-sign hand in sharp-to-transitional focus (warm skin with red light rimming right edge of fingers) occupying left-center foreground; MG: face and upper body, sharp — seductive eyes and parted lips are the bullseye; BG: hotel room ceiling receding upward in warm cream blur, table lamp glowing on right; the low angle + wide lens makes the ceiling appear to converge dramatically behind her head, amplifying the sense of her looming presence above the viewer",
      "aspect_ratio": "3:4"
    },
    "lighting": {
      "type": "Dual-source mixed color: warm ambient room light (main) + strong red practical LED/neon accent light (dramatic secondary)",
      "direction": "Main warm light: from upper-left-front, broad and soft, illuminating face evenly on left side; Red accent: from camera-right at approximately 60 degrees, raking across right side of hair, right arm, right edge of fingers — the low camera angle means red light sculpts upward along her jawline and neck, emphasizing facial contour from below",
      "mood": "Late-night hotel room seduction — warm amber safety + red danger, the two lights create a color split on her face that mirrors the emotional split: inviting on one side, intense on the other"
    },
    "color_palette": {
      "film_simulation": "ETERNA (E)",
      "style": "Fujifilm ETERNA Cinema inspired color grading — desaturated muted base tones with faithful reproduction of practical colored light sources, the red LED/neon light POPS against the low-saturation cream/grey backdrop, skin tones cinematic and restrained, deep blacks with retained shadow detail in the bodysuit fabric",
      "tones": [
        "Base: warm cream / beige (room walls and ambient light)",
        "Drama: deep crimson / blood red (practical light spill on hair and right side of body)",
        "Anchor: matte black bodysuit merging with shadow areas",
        "Skin: natural warm on left transitioning to red-tinted on right cheek, jaw, and neck"
      ],
      "grade_notes": [
        "highlight roll-off: soft, cinematic — lamp highlight wraps without clipping",
        "shadow tint: warm neutral, shadows stay warm in this intimate space",
        "contrast curve: medium-low — bodysuit detail retained in shadows, skin luminous against dark fabric",
        "grain: subtle to moderate, low-light indoor texture",
        "color separation: RED must remain vivid and directional against desaturated base"
      ]
    },
    "environment": {
      "setting": "Hotel room or modern apartment at night, intimate private space",
      "background": "Cream/beige walls with modern ceiling trim, wooden desk on right with warm-glowing table lamp (practical light in frame), bed or seating surface — background reads as upscale hotel, softened by shallow focus and low angle ceiling convergence",
      "atmosphere": "Private, warm, still — the red light transforms an ordinary hotel room into a charged space, temperature ~22°C, the air feels thick with intention"
    },
    "mood": "Seductive intimate invasion — she reaches toward you from above with a V-sign that feels less like 'peace' and more like 'come here', the low angle puts the viewer in a submissive position while her half-lidded eyes and parted lips offer a slow, controlled temptation wrapped in red light",
    "technical_tags": [
      "photorealistic",
      "wide-angle perspective distortion",
      "extreme foreground element",
      "practical colored lighting",
      "red neon spill",
      "low angle shot",
      "shallow depth of field",
      "low light indoor",
      "film grain",
      "bodysuit texture"
    ],
    "character_reference": "Based on user-uploaded character reference",
    "pose_reference": "Based on user-uploaded pose reference",
    "negative_prompt": "Studio lighting, flash photography, hard shadows on wall, telephoto compression (must maintain wide-angle distortion), over-saturated skin, plastic airbrushed skin, big smile or cheerful expression (must be seductive/sultry), outdoor setting, bright daylight, eye-level camera angle (must be LOW looking UP), normal hand-to-face proportion (hand MUST be distorted larger), casual loose clothing (bodysuit must be skin-tight), wrinkled baggy fabric"
  }
} ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'lifestyle',
                imageTypeHint: 'Nano 🍌 2: Seducción nocturna, perspectiva extrema.',
                detailedDescription: "Un retrato seductor con una perspectiva extrema de gran angular. Iluminación dual cálida y roja, estilo cinematográfico íntimo. La modelo viste un bodysuit negro ajustado.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['3:4', '4:5', '9:16', '1:1'],
                allowsSecondImage: false,
                templateData: {
                    '[BODYSUIT_PROMPT]': 'A sleek, tight-fitting black bodysuit that accentuates the figure, made of high-quality matte fabric with a subtle sheen, long sleeves, high neck, and a clean, minimalist design.'
                },
            },
            {
                id: 926,
                key: 'romantic-smartphone-snapshot',
                caption: 'Snapshot Romántico (Smartphone)',
                subcategory: 'Cándidas y Espontáneas',
                prompt: `Extra details. Low quality, blurry dark shot. Amateur smartphone snapshot, Romantic atmosphere, gentle wind, realistic environment. Hollywood movie color grading, soft contrast, subtle film grain. The person from the reference photo is the main subject, captured in a candid, low-light moment. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'lifestyle',
                imageTypeHint: 'Ideal para: Foto nocturna romántica con estilo smartphone.',
                detailedDescription: "Captura una atmósfera romántica y nocturna con el estilo de una instantánea de smartphone. Calificación de color de película de Hollywood, contraste suave y grano sutil.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['3:4', '4:5', '9:16', '1:1'],
            },
            {
                id: 928,
                key: 'rinko-kawauchi-morning-options',
                caption: 'Mañana Rinko Kawauchi (Opciones)',
                subcategory: 'Cándidas y Espontáneas',
                prompt: `[PROMPT_CONTENT] ${PRESERVE_IDENTITY_PROMPT} ${PRESERVE_OUTFIT_PROMPT}`,
                illustration: 'lifestyle',
                imageTypeHint: 'Elige una de las 4 opciones de estilo.',
                detailedDescription: "Captura un momento íntimo y luminoso en una habitación con luz dorada matutina, al estilo de Rinko Kawauchi. Elige entre 4 variaciones de estilo.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['4:5', '3:4', '9:16', '1:1'],
                dynamicFields: [
                    {
                        type: 'select',
                        key: '[PROMPT_CONTENT]',
                        label: 'Elige el Estilo',
                        options: [
                            { label: 'Luz Dorada Matutina', values: { '[PROMPT_CONTENT]': 'Ultra photorealistic iPhone 17 Pro, 35mm 4:5. The person from the reference photo, bright toothy smile looking straight at you, hands casually behind head. Soft golden morning light through open balcony doors, warm bedroom, chiaroscuro cinematic rays. Intimate framing, natural HDR. Pure Rinko Kawauchi fresh Japanese personal photography style.' } },
                            { label: 'Rayos Crepusculares', values: { '[PROMPT_CONTENT]': 'iPhone realism with natural HDR. The person from the reference photo in slow morning light, radiant smile direct gaze, arms up hands behind head showing off core. Golden crepuscular rays in bedroom. Hong Kong model vibe, Rinko Kawauchi\'s quiet intimate atmosphere meets cinematic chiaroscuro.' } },
                            { label: 'Brillo Cinematográfico', values: { '[PROMPT_CONTENT]': 'Photoreal soft daylight iPhone shot. The person from the reference photo, genuine teeth smile into lens, fingers laced behind head. Early morning golden light, open balcony, warm private energy. Inspired by Rinko Kawauchi\'s clean personal style with cinematic morning glow.' } },
                            { label: 'Snapshot Cálido y Lento', values: { '[PROMPT_CONTENT]': 'Intimate bedroom moment captured on iPhone 17 Pro. The person from the reference photo, beaming confident smile straight at viewer, relaxed pose with hands behind head. Golden hour light rays, chiaroscuro. Rinko Kawauchi Japanese snapshot aesthetic, warm and slow.' } }
                        ]
                    }
                ]
            },
            {
                id: 929,
                key: 'bariloche-morning-breakfast',
                caption: 'Desayuno en Bariloche',
                subcategory: 'Cándidas y Espontáneas',
                prompt: `Young Argentinian woman, messy hair, turquoise drop earrings, dusty pink ribbed knit sweater, white tee. Eating breakfast on balcony overlooking misty coastline in Bariloche, Argentina, orange juice, fruit, eggs. Candid morning, soft natural diffused light, cool tones. Cinematic realism, high-fidelity lifestyle photography, Hollywood color grading, soft contrast, subtle film grain. Close-up, shallow depth of field, bokeh, sharp facial details, hair texture. 4k, highly detailed, soft pastels, muted pinks, misty blues. Serene, quiet luxury, authentic, romantic atmosphere, gentle wind. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'lifestyle',
                imageTypeHint: 'Ideal para: Retrato sereno con desayuno.',
                detailedDescription: "Desayuno tranquilo en un balcón con vistas a la costa de Bariloche, Argentina. Atmósfera serena, romántica y de lujo silencioso.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['4:5', '3:4', '9:16', '1:1'],
            },
        ]
    },
    'celebrations': {
        title: 'Celebraciones',
        description: 'Crea recuerdos inolvidables para cumpleaños y eventos especiales.',
        images: [
            {
                id: 923,
                key: 'birthday-balloons-gold',
                caption: 'Cumpleaños: Globos Dorados',
                subcategory: 'Fiestas y Cumpleaños',
                prompt: `A candid, high-quality fashion portrait of the person from the reference photo. **CRITICAL: The person's facial features and EXPRESSION must match the reference photo exactly.** They are striking a relaxed, candid pose, holding two large, shiny GOLDEN foil balloons shaped like the numbers '[NUM_1]' and '[NUM_2]' loosely to their sides. **The balloons may slightly overlap the shoulders or arms to create depth, but they do NOT block the face or central body.** The background is a shimmering metallic tinsel curtain party backdrop. The lighting is flattering and festive. The text '[GREETING_TEXT]' is visible in the composition in a **solid, single-color** playful, stylish font. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'lifestyle',
                imageTypeHint: 'Elige el texto y los dos números.',
                detailedDescription: "Celebra tu cumpleaños con estilo. Sostén globos dorados con tu edad (a los lados) frente a un fondo de cortinas metálicas brillantes.\nPersonaliza el saludo y los números.",
                mediaType: 'image',
                requiresAspectRatio: true,
                dynamicFields: [
                    {
                        type: 'text',
                        key: '[GREETING_TEXT]',
                        label: 'Texto de Saludo',
                        defaultValue: 'Happy Birthday',
                        isOptional: true
                    },
                    {
                        type: 'text',
                        key: '[NUM_1]',
                        label: 'Primer Número (Ej: 2)',
                        maxLength: 1,
                        placeholder: '#',
                        defaultValue: '2',
                        isOptional: true
                    },
                    {
                        type: 'text',
                        key: '[NUM_2]',
                        label: 'Segundo Número (Ej: 6)',
                        maxLength: 1,
                        placeholder: '#',
                        defaultValue: '6',
                        isOptional: true
                    }
                ]
            },
            {
                id: 924,
                key: 'birthday-idols-party',
                caption: 'Cumpleaños with Ídolos',
                subcategory: 'Fiestas y Cumpleaños',
                prompt: `A photorealistic celebratory photo of three people standing together.

**Subject 1 (Center):** The person from the **FIRST** reference photo. STRICT IDENTITY PRESERVATION.
**Subject 2 (Left):** If a **SECOND** reference photo is provided, you MUST STRICTLY PRESERVE the facial identity of that person. It must look exactly like the person in the second image. If not provided, choose a celebrity from this list: [IDOLS_SELECTED].
**Subject 3 (Right):** If a **THIRD** reference photo is provided, you MUST STRICTLY PRESERVE the facial identity of that person. It must look exactly like the person in the third image. If not provided, choose a different celebrity from this list: [IDOLS_SELECTED].

**Action:** The central person is smiling happily, hugging Subject 2 and Subject 3 (one on each side). They are posing together for a photo in a friendly manner.

**Background:** A shimmering metallic tinsel curtain wall. Large foil balloons shaped like the numbers '[NUM_1]' and '[NUM_2]' are stuck to the curtain wall directly behind the main subject.

**Foreground:** A table with a decorated birthday cake. The cake has two number candles showing '[NUM_1]' and '[NUM_2]' (matching the balloons). Surrounding the cake is a lavish sweet table filled with exquisite pastries and diverse candies.

**Lighting:** Festive, flattering, and realistic. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'lifestyle',
                imageTypeHint: 'Elige tu edad y selecciona 2 ídolos (o sube fotos).',
                detailedDescription: "Celebra tu cumpleaños abrazado a tus ídolos. Globos en la pared, mesa dulce de lujo y pastel con velas.\nSelecciona dos famosos de la lista o sube sus fotos.",
                mediaType: 'image',
                requiresAspectRatio: true,
                allowsSecondImage: true,
                allowsThirdImage: true,
                dynamicFields: [
                    {
                        type: 'select',
                        key: '[NUM_1]',
                        label: 'Primer Número (Decena)',
                        options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
                    },
                    {
                        type: 'select',
                        key: '[NUM_2]',
                        label: 'Segundo Número (Unidad)',
                        options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
                    },
                    {
                        type: 'toggle-group',
                        key: '[IDOLS_SELECTED]',
                        label: 'Elige tus Ídolos (Selecciona 2)',
                        options: [
                            { label: 'Messi', value: 'Lionel Messi,' },
                            { label: 'Taylor Swift', value: 'Taylor Swift,' },
                            { label: 'The Rock', value: 'Dwayne Johnson,' },
                            { label: 'Cristiano', value: 'Cristiano Ronaldo,' },
                            { label: 'Beyoncé', value: 'Beyoncé,' },
                            { label: 'Shakira', value: 'Shakira,' },
                            { label: 'Bad Bunny', value: 'Bad Bunny,' },
                            { label: 'Zendaya', value: 'Zendaya,' },
                            { label: 'Henry Cavill', value: 'Henry Cavill,' },
                            { label: 'Margot Robbie', value: 'Margot Robbie,' },
                            { label: 'Iron Man', value: 'Tony Stark (Iron Man),' },
                            { label: 'Batman', value: 'Batman,' }
                        ]
                    }
                ]
            }
        ]
    },
    'action-and-sports': {
        title: 'Acción y Deportes',
        description: 'Conviértete en un atleta de élite o bailarín profesional en plena acción.',
        images: [
            {
                id: 925,
                key: 'action-sports-collection',
                caption: 'Acción y Deportes',
                subcategory: 'Deportes y Acción',
                prompt: `Action, iPhone-style. This person, with their facial and physical features, resembles [SPORT_DESCRIPTION]. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'lifestyle',
                imageTypeHint: 'Elige tu deporte o actividad.',
                detailedDescription: "Conviértete en un atleta de élite, bailarín profesional o deportista extremo en plena acción. Captura la intensidad, el esfuerzo y la energía de tu disciplina favorita.",
                mediaType: 'image',
                requiresAspectRatio: true,
                dynamicFields: [
                    {
                        type: 'select',
                        key: 'sport_selector',
                        label: 'Deporte o Actividad',
                        options: [
                            { label: 'Boxeo', values: { '[SPORT_DESCRIPTION]': 'a boxer training with a punching bag in a rustic, dimly lit boxing gym, with a ring in the background. They look sweaty and focused, with a punch mid-execution. In the foreground, weights or kettlebells are slightly out of focus. The lighting is natural and somewhat harsh, typical of a gym. Dark dominant colors with touches of light. Raw and energetic atmosphere.' } },
                            { label: 'CrossFit', values: { '[SPORT_DESCRIPTION]': 'a CrossFit athlete performing an Olympic lift (e.g., snatch or clean & jerk) with a loaded barbell, in a CrossFit box with an industrial atmosphere and gym equipment in the foreground and background (e.g., rings, weights, ropes). They are seen sweating and exerting themselves. The lighting is functional, with some backlighting or overhead lights creating a realistic atmosphere. The dominant colors are neutral and dark, with the focus on the athlete\'s actions.' } },
                            { label: 'Baloncesto', values: { '[SPORT_DESCRIPTION]': 'an elite basketball athlete, captured mid-action during a jump to score, facing the camera with an expression of maximum concentration and determination. The setting is a modern basketball court with an electric atmosphere, with dynamic elements like sweat particles in the foreground and crowded stands and powerful lights in the background. They are seen sweating, exerting themselves, and wearing their team\'s official uniform. The lighting is dramatic, with overhead stadium lights sculpting their facial features.' } },
                            { label: 'Samba', values: { '[SPORT_DESCRIPTION]': 'a Samba dancer at the Rio Carnival, captured mid-parade with a brilliant costume and overflowing energy, smiling at the camera. The background is the celebrating crowd and allegorical floats, blurred. The lighting is festive daylight.' } },
                            { label: 'Flamenco', values: { '[SPORT_DESCRIPTION]': 'a Flamenco dancer in a "tablao", captured in a moment of passion and strength with an expressive face directed towards the camera. The background is dark and sober, blurred. The lighting is dramatic and focused, creating deep shadows.' } },
                            { label: 'Ballet', values: { '[SPORT_DESCRIPTION]': 'a Ballet dancer in rehearsal, captured in the middle of an elegant leap with a graceful and concentrated pose, face visible to the camera. The background is a dance studio with mirrors, blurred. The lighting is soft and uniform.' } },
                            { label: 'Malambo', values: { '[SPORT_DESCRIPTION]': 'a Malambo dancer performing a vigorous "zapateo", with dust rising from the ground and an expression of concentration and strength directed at the camera. The background is an open field at sunset, blurred. The lighting is the natural golden hour light.' } },
                            { label: 'Ciclismo Descenso', values: { '[SPORT_DESCRIPTION]': 'a downhill cyclist on a rocky, dusty trail. They are captured with their helmet on, face visible, showing maximum concentration at high speed. The lighting filters through the foliage, creating a play of light and shadow.' } },
                            { label: 'Wakeboard', values: { '[SPORT_DESCRIPTION]': 'a wakeboarder jumping over a wake, captured in mid-air with an adrenaline-filled expression. The background is water splashing against a lake or sea. The lighting is bright daylight with sun reflections.' } },
                            { label: 'Parkour', values: { '[SPORT_DESCRIPTION]': 'a parkour practitioner performing a jump, captured in mid-air with a focused expression and tense muscles. The background is an urban environment. The lighting is natural city light.' } },
                            { label: 'Paracaidismo', values: { '[SPORT_DESCRIPTION]': 'a skydiver in freefall, with a euphoric expression visible as the wind slightly distorts their face. The background is a distant landscape of mountains or a city. The lighting is expansive daylight.' } },
                            { label: 'Snowboard', values: { '[SPORT_DESCRIPTION]': 'a snowboarder going down a steep slope, captured with a focused expression of effort. The background is snow splashing up against a dense forest. The lighting is wintry and diffuse.' } },
                            { label: 'Skate', values: { '[SPORT_DESCRIPTION]': 'a skater performing an aerial trick, captured suspended in the air with a look of concentration. The background is a concrete skatepark bowl. The lighting is high-contrast daylight.' } },
                            { label: 'Surf', values: { '[SPORT_DESCRIPTION]': 'a surfer paddling intensely to catch a large wave, captured with a focused expression of effort. The background is the sun shining on the ocean at sunrise/sunset. The lighting is dramatic natural light.' } },
                            { label: 'Escalada', values: { '[SPORT_DESCRIPTION]': 'a rock climber clinging to a difficult hold, captured with tense muscles and a look of exertion on their sweating face. The background is a vertical rock wall. The lighting is natural with strong shadows.' } },
                            { label: 'Maratón', values: { '[SPORT_DESCRIPTION]': 'a marathon runner in the final stage of a race, captured with an expression of exhaustion and determination. The background is a blurred crowd and cityscape. The lighting is functional daylight.' } },
                            { label: 'Boxeo (Golpe)', values: { '[SPORT_DESCRIPTION]': 'a boxer throwing a powerful punch, captured with a focused expression of effort. The background is a boxing ring or a punching bag. The lighting is functional gym lighting.' } },
                            { label: 'Karate', values: { '[SPORT_DESCRIPTION]': 'a karateka executing a powerful reverse punch (gyaku-zuki), captured with an intense kiai expression. They are wearing a traditional white karate gi. The background is a minimalist dojo with a wooden floor. The lighting is stark and dramatic, highlighting muscle definition.' } },
                            { label: 'Muay Thai', values: { '[SPORT_DESCRIPTION]': 'a Muay Thai fighter delivering a devastating flying knee strike (khao loi), captured mid-air with a look of fierce determination. They are wearing a Muay Thai shorts. The background is a dimly lit, authentic Thai boxing gym. The lighting is dramatic, catching the sweat and intensity of the moment.' } },
                            { label: 'Taekwondo', values: { '[SPORT_DESCRIPTION]': 'a Taekwondo practitioner at the peak of a spectacular flying side kick (ttwimyo yop chagi), captured with their body perfectly horizontal and a focused expression. They are wearing a dobok. The background is a clean, modern dojang or competition mat. The lighting is bright and even, freezing the motion.' } },
                            { label: 'Jiu-Jitsu', values: { '[SPORT_DESCRIPTION]': 'a Jiu-Jitsu practitioner in a dynamic grappling stance, captured low to the ground with an expression of intense focus, ready to engage. They are wearing a BJJ gi. The background is a matted dojo floor, slightly blurred. The lighting is functional gym lighting, creating realistic shadows on the mats.' } },
                        ]
                    }
                ]
            }
        ]
    },
    ...fanEncountersPack,
    ...fanEncountersJsonPack,
    ...creativityAndFunPacks
};
