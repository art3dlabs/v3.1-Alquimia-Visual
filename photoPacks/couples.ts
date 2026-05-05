import type { PhotoPack } from './types';
import { PRESERVE_IDENTITY_PROMPT_COUPLE } from './types';

export const couplesPacks: Record<string, PhotoPack> = {
    'parejas-dances': {
        title: 'Parejas y Dúos',
        description: 'Dúos y Escenas Compartidas',
        images: [
            {
                id: 1016,
                key: 'retro-gaming-selfie-nb2',
                caption: 'Gaming 2000s (Digicam)',
                subcategory: 'Nostalgia y Clásicos',
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
                subcategory: 'Escenas Románticas',
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
    'parejas-fashion': {
        title: 'Parejas Moda',
        description: 'Parejas en situaciones de moda.',
        images: [
            {
                id: 720,
                key: 'romantic-pool-couple',
                caption: 'Pareja Romántica en Piscina',
                subcategory: 'Escenas Románticas',
                prompt: `ultra-realistic cinematic portrait, 9:16 vertical, waist-up shot, a romantic couple standing close inside a luxury swimming pool, water level at mid-torso, the woman leaning gently against the pool wall with a relaxed posture, the man standing close in front of her, both sharing a calm intimate moment with soft eye contact and subtle smiles, faces close but not touching,
    
    IDENTITY: Maintain exact facial identity from Image 1 for the woman and Image 2 for the man with 100% accuracy.
    
    skin: bright clean luminous skin tone with high light reflectivity, slightly warm sunlit glow, elevated exposure on skin without overexposure, visible micro-texture and pores with crisp clarity, strong specular highlights on wet skin catching sunlight, water droplets acting as reflective points, no dullness, no grey tones, no muddy rendering, 
    hair: naturally wet hair with defined strand separation and glossy highlights, 
    clothing: man shirtless with clean athletic build, woman wearing a light yellow floral dress, wet fabric reacting naturally with soft folds and light translucency, 
    pose: man’s hand gently on her shoulder, other hand partially submerged creating subtle ripples, woman’s hands resting near his waist, 
    environment: luxury swimming pool with crystal clear aqua blue water and bright reflective surface, 
    lighting: strong direct sunlight from top-front angle (~35–45 degrees) with high intensity, creating bright highlights on face, shoulders and collarbones, sharp light reflections on water surface bouncing light back onto skin (natural fill light), minimal shadow density to keep skin luminous, color temperature slightly warm (~6000K) enhancing sunlit glow, 
    color: vibrant aqua blue water with high contrast separation and bright luminous skin tones, no flat grading, 
    lens: 85mm DSLR lens, ultra-sharp focus on eyes and skin texture, high edge contrast, shallow depth of field with creamy background bokeh, cinematic clarity
    
    negative prompt: dull skin, dark tone, grey cast, muddy texture, low exposure, flat lighting, soft focus, blur, plastic skin, over-smoothing, excessive shadow, yellow/orange overcast, HDR artifacts, noise, distortion, kissing, lips touching
    
    ${PRESERVE_IDENTITY_PROMPT_COUPLE}`,
                illustration: 'model-cover',
                imageTypeHint: 'Foto 1: Rostro mujer. Foto 2: Rostro hombre.',
                detailedDescription: "Un retrato romántico e íntimo de una pareja en una piscina de lujo, manteniendo la identidad facial exacta de dos fotos de referencia.",
                mediaType: 'image',
                requiresAspectRatio: true,
                requiresSecondImage: true,
                supportedAspectRatios: ['9:16'],
            }
        ]
    },
    'parejas-historicas': {
        title: 'Parejas Vintage e Históricas',
        description: 'Parejas en contextos históricos y vintage.',
        images: [
            {
                id: 809,
                key: 'vintage-couple-restoration',
                caption: 'Restauración Vintage',
                subcategory: 'Nostalgia y Clásicos',
                prompt: `Restore and enhance an old damaged black-and-white photograph of a vintage couple. Remove cracks, scratches, and stains, and reconstruct missing details. Improve sharpness and convert it into high-resolution HD quality. Colorize the image realistically with natural skin tones and period-accurate clothing colors. The woman is standing wearing a patterned blouse and long embroidered skirt, while the man is seated in a dark suit with a boutonniere and light scarf. Keep facial features authentic and unchanged. Add soft natural lighting and a slightly blurred outdoor background with greenery for a realistic, timeless look. ${PRESERVE_IDENTITY_PROMPT_COUPLE}`,
                illustration: 'restore',
                imageTypeHint: 'Restaura, colorea y mejora fotos antiguas de parejas.',
                detailedDescription: "Restaura fotografías antiguas dañadas: elimina arañazos, manchas, mejora la nitidez y colorea con tonos realistas. Ideal para fotos familiares vintage.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['1:1', '4:3', '3:4', '16:9'],
                requiresUserInput: false,
                dynamicFields: []
            }
        ]
    }
};
