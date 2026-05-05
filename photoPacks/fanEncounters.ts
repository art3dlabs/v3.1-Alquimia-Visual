
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import type { PhotoPack } from './types';
import { PRESERVE_IDENTITY_PROMPT } from './types';

export const fanEncountersPack: Record<string, PhotoPack> = {
    'fan-encounters': {
        title: 'Encuentros con Famosos',
        description: '¡Tómate una foto con tus ídolos! Genera una foto espontánea y casual junto a leyendas del deporte y el arte.',
        images: [
            {
                id: 74,
                key: 'structured-celeb-selfie',
                caption: 'Selfie Urbano Pro (JSON)',
                subcategory: 'Personalizados',
                prompt: `{
  "metadata": {
    "prompt_version": "1.1.1",
    "generation_goal": "Photorealistic, believable celebrity encounter selfie",
    "determinism": {
      "pose_lock": true,
      "camera_lock": true,
      "anatomy_lock": true,
      "composition_lock": true,
      "perspective_lock": true
    },
    "realism_constraints": {
      "no_cartoony_proportions": true,
      "no_exaggerated_limb_length": true,
      "no_fisheye_distortion": true,
      "no_beautification_bias": true
    }
  },

  "scene": {
    "location": "[CITY_NAME]",
    "setting_description": "Urban sidewalk with realistic architectural details consistent with [CITY_NAME]. Sidewalk café with small round tables, cast-iron chairs, brick storefronts, and large street-facing windows. Subtle street activity without crowds.",
    "time_of_day": "Late morning to early afternoon",
    "lighting": {
      "type": "Natural daylight",
      "quality": "Soft, diffused sunlight with mild shadow falloff",
      "direction": "Angled from above and slightly behind the subjects, consistent with street-level café lighting"
    },
    "environmental_details": {
      "street_elements": [
        "Parked cars partially visible",
        "Pedestrians blurred in the background",
        "Neutral-toned storefront signage"
      ],
      "weather": "Clear, mild day"
    }
  },

  "subjects": [
    {
      "role": "Foreground subject",
      "description": {
        "identity_reference": "STRICT_IDENTITY_MATCH_TO_IMAGE_1",
        "expression": {
          "facial_emotion": "Calm confidence",
          "details": {
            "eyes": "Relaxed, steady gaze toward the phone screen, lids naturally lowered",
            "eyebrows": "Neutral position, no exaggerated lift or tension",
            "mouth": "Soft, closed-lip smile with minimal curvature",
            "jaw": "Relaxed with subtle definition"
          },
          "vibe": "Casual, self-assured, socially fluent — comfortable around celebrities",
          "avoid": [
            "Wide eyes",
            "Open-mouth excitement",
            "Raised eyebrows",
            "Overt surprise expressions"
          ]
        },
        "body_language": {
          "posture": "Upright but relaxed, shoulders loose",
          "energy": "Unbothered, composed, intentional",
          "intent": "Posing casually, as if this is a normal social moment"
        }
      }
    },
    {
      "role": "Background subject",
      "identity": "[FAMOUS_NAME]",
      "description": {
        "appearance": {
          "hair": "Natural textured hair, effortless and understated",
          "makeup": "Minimal, natural makeup emphasizing skin texture and eyes",
          "facial_expression": "Soft, neutral smile with relaxed eyes",
          "presence": "Approachable, calm, unguarded"
        },
        "wardrobe": {
          "style": "High-end casual streetwear",
          "details": [
            "Tailored jacket or relaxed coat",
            "Neutral-toned top",
            "Minimal accessories"
          ]
        },
        "body_language": {
          "posture": "Relaxed standing posture slightly angled toward the foreground subject",
          "interaction": "Comfortable proximity indicating a friendly, consensual selfie moment",
          "energy": "Low-key, familiar, unforced"
        }
      }
    }
  ],

  "camera": {
    "device_type": "Smartphone",
    "camera_position": "Handheld selfie perspective at eye level",
    "framing": "Chest-up framing of foreground subject, [FAMOUS_NAME] fully visible over the shoulder",
    "lens_behavior": "Standard smartphone lens with natural perspective, no distortion",
    "focus": "Foreground subject sharp, background subject slightly softer but clearly recognizable"
  },

  "mood": "Effortless, grounded, cool, unmistakably real",
  "overall_vibe": "This looks like a normal, spontaneous moment — not a fan encounter, not staged, not performative"
}

${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'professional-profile',
                imageTypeHint: 'Nano 🍌 2: Selfie realista con famoso. Define quién y dónde.',
                detailedDescription: "Genera una selfie casual y creíble junto a cualquier celebridad en una ciudad de tu elección. Iluminación natural y vibras relajadas.\nIntroduce el nombre del famoso y la ciudad para personalizar.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['4:5', '9:16', '1:1'],
                dynamicFields: [
                    { type: 'text', key: '[FAMOUS_NAME]', label: 'Nombre del Famoso', defaultValue: 'Zendaya', isOptional: true },
                    { type: 'text', key: '[CITY_NAME]', label: 'Ciudad (Ej: Madrid, Tokio)', defaultValue: 'Paris', isOptional: true }
                ]
            },
            {
                id: 75,
                key: 'fan-messi-v2',
                caption: 'Selfie con Messi V2',
                subcategory: 'Dúos con Famosos',
                prompt: `Action, iPhone-style. This person, with their facial and physical features, resembles a fan in a happy moment with Lionel Messi. They are posing awkwardly for a quick selfie after a training session, both smiling towards the phone's camera. The background is the blurry exit of a sports facility. The lighting is the realistic glow from the phone screen illuminating their faces. Authentic, documentary look. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'professional-profile',
                imageTypeHint: 'Ideal para: Foto de cara o medio cuerpo.',
                detailedDescription: "Simula un selfie espontáneo con Lionel Messi a la salida de un entrenamiento. Iluminación realista de la pantalla del móvil.\nIdeal para fans del fútbol.",
                mediaType: 'image',
                requiresAspectRatio: true,
            },
            {
                id: 76,
                key: 'fan-messi-v3',
                caption: 'Selfie con Messi V3',
                subcategory: 'Dúos con Famosos',
                prompt: `Point of view, Action, iPhone-style. This person wearing a vintage Argentina t-shirt, with their facial and physical features, resembles a fan in a happy moment with Lionel Messi. They are posing awkwardly for a quick selfie after a training session, Messi smiling towards the phone's camera. The background is the blurry exit of a sports facility. The lighting is the realistic glow, Authentic, documentary look. It is absolutely crucial that the person's facial features (eyes, nose, mouth, and facial structure) are an exact and photorealistic match to the original photo, without any alteration to their identity. Soft motion blur.`,
                illustration: 'professional-profile',
                imageTypeHint: 'Ideal para: Foto de cara o medio cuerpo.',
                detailedDescription: "Versión alternativa con camiseta vintage de Argentina. Estilo POV auténtico y desenfoque de movimiento suave.\nPara un look más fanático.",
                mediaType: 'image',
                requiresAspectRatio: true,
            },
            {
                id: 77,
                key: 'fan-cristiano-v2',
                caption: 'Foto Casual con C. Ronaldo V2',
                subcategory: 'Dúos con Famosos',
                prompt: `Action, iPhone-style. This person, with their facial and physical features, resembles a fan trying to get a picture with Cristiano Ronaldo outside a luxury hotel. Ronaldo, looking stylish, glances quickly at the camera as he walks by. The background is a blurred hotel entrance with paparazzi flashes. The lighting is mixed, with harsh flashes and ambient city lights, creating a chaotic, spontaneous feel. Authentic, documentary look. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'professional-profile',
                imageTypeHint: 'Ideal para: Foto de cara o medio cuerpo.',
                detailedDescription: "Captura un momento rápido con Cristiano Ronaldo saliendo de un hotel. Flashes de paparazzi y ambiente caótico.\nSube una foto mirando a cámara para el efecto fan.",
                mediaType: 'image',
                requiresAspectRatio: true,
            },
            {
                id: 78,
                key: 'fan-jordan-v2',
                caption: 'Foto en el Golf con M. Jordan V2',
                subcategory: 'Dúos con Famosos',
                prompt: `Action, iPhone-style. This person, with their facial and physical features, resembles a fan who has spotted Michael Jordan on a golf course. Jordan, holding a golf club, pauses to give a patient smile for the camera. The background is a sunny, blurry golf green. The lighting is bright, harsh daylight, typical of an amateur photo. Authentic, documentary look. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'professional-profile',
                imageTypeHint: 'Ideal para: Foto de cara o medio cuerpo.',
                detailedDescription: "Encuentro relajado con Michael Jordan en un campo de golf. Luz solar brillante y ambiente deportivo.\nPerfecto para amantes del baloncesto y el golf.",
                mediaType: 'image',
                requiresAspectRatio: true,
            },
            {
                id: 79,
                key: 'fan-lebron-v2',
                caption: 'Foto en la Cancha con LeBron V2',
                subcategory: 'Dúos con Famosos',
                prompt: `Action, iPhone-style. This person, with their facial and physical features, resembles a fan getting a courtside photo with LeBron James. LeBron, on his way to the locker room, gives a quick thumbs-up to the camera with a grin. The background is the bright, blurry lights of the basketball arena. The lighting is the harsh, overhead stadium lighting. Authentic, documentary look. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'professional-profile',
                imageTypeHint: 'Ideal para: Foto de cara o medio cuerpo.',
                detailedDescription: "Foto courtside con LeBron James. Iluminación de estadio y ambiente de partido.\nSimula estar en primera fila.",
                mediaType: 'image',
                requiresAspectRatio: true,
            },
            {
                id: 80,
                key: 'fan-serena-v2',
                caption: 'Autógrafo de Serena Williams V2',
                subcategory: 'Dúos con Famosos',
                prompt: `Action, iPhone-style. This person, with their facial and physical features, resembles a fan getting an autograph from Serena Williams after a match. Serena, holding a pen, looks up from signing and smiles warmly at the camera. The background is a blurry tennis court. The lighting is bright daylight. Authentic, documentary look. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'professional-profile',
                imageTypeHint: 'Ideal para: Foto de cara o medio cuerpo.',
                detailedDescription: "Consigue un autógrafo virtual de Serena Williams en la pista de tenis. Luz natural y sonrisa cálida.\nIdeal para fans del tenis.",
                mediaType: 'image',
                requiresAspectRatio: true,
            },
            {
                id: 81,
                key: 'fan-ali-v2',
                caption: 'Foto Vintage con Muhammad Ali V2',
                subcategory: 'Dúos con Famosos',
                prompt: `Action, iPhone-style, vintage feel. This person, with their facial and physical features, resembles a fan from the 70s posing with a young Muhammad Ali in a boxing gym. Ali playfully raises his fists in a boxing stance, grinning confidently at the camera. The background is a gritty, old-school gym, blurred. The lighting mimics a direct analog camera flash. Authentic, vintage documentary look. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'time-travel',
                imageTypeHint: 'Ideal para: Foto de cara o medio cuerpo.',
                detailedDescription: "Viaja a los 70 para una foto vintage con Muhammad Ali en el gimnasio. Estilo analógico con flash directo.\nPara los amantes del boxeo clásico.",
                mediaType: 'image',
                requiresAspectRatio: true,
            },
            {
                id: 82,
                key: 'fan-beyonce-v2',
                caption: 'Foto Backstage con Beyoncé V2',
                subcategory: 'Dúos con Famosos',
                prompt: `Action, iPhone-style. This person, with their facial and physical features, resembles a fan who got a backstage photo with Beyoncé. Beyoncé, in a glamorous stage outfit, pauses to give a powerful, fierce look at the camera. The background is a chaotic, blurry backstage area. The lighting is dim and moody with some colored stage lights spilling in. Authentic, documentary look. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'default',
                imageTypeHint: 'Ideal para: Foto de cara o medio cuerpo.',
                detailedDescription: "Foto exclusiva en el backstage con Beyoncé. Iluminación de escenario y look glamuroso.\nSiente la energía de un concierto privado.",
                mediaType: 'image',
                requiresAspectRatio: true,
            },
            {
                id: 83,
                key: 'fan-dicaprio-v2',
                caption: 'Foto de Gala con DiCaprio V2',
                subcategory: 'Dúos con Famosos',
                prompt: `Action, iPhone-style. This person, with their facial and physical features, resembles a fan taking a photo with Leonardo DiCaprio at a charity gala. DiCaprio, mid-conversation, turns his head to offer a quick, charming smile to the camera. The background is a blurred, elegant event space. The lighting is dim, ambient event lighting. Authentic, candid documentary look. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'default',
                imageTypeHint: 'Ideal para: Foto de cara o medio cuerpo.',
                detailedDescription: "Selfie elegante con Leonardo DiCaprio en una gala benéfica. Iluminación ambiental suave y sofisticada.\nPara un look de alta sociedad.",
                mediaType: 'image',
                requiresAspectRatio: true,
            },
            {
                id: 84,
                key: 'fan-marilyn-v2',
                caption: 'Foto Vintage con Marilyn Monroe V2',
                subcategory: 'Dúos con Famosos',
                prompt: `Action, iPhone-style, vintage feel. This person, with their facial and physical features, resembles a fan from the 1950s who got a photo with Marilyn Monroe on a movie set. Marilyn, in full costume and makeup, is captured in a moment of genuine laughter, looking slightly away from the camera. The background is a blurry, bustling movie set. The lighting mimics a bright, sunny day or studio lights from that era. Authentic, vintage documentary look. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'time-travel',
                imageTypeHint: 'Ideal para: Foto de cara o medio cuerpo.',
                detailedDescription: "Foto retro de los 50 con Marilyn Monroe en un set de cine. Estilo vintage soleado y risas genuinas.\nUn clásico atemporal.",
                mediaType: 'image',
                requiresAspectRatio: true,
            },
            {
                id: 85,
                key: 'fan-michael-jackson-v2',
                caption: 'Foto 80s con Michael Jackson V2',
                subcategory: 'Dúos con Famosos',
                prompt: `Action, iPhone-style, vintage 80s feel. This person, with their facial and physical features, resembles a fan from the 80s getting a picture with Michael Jackson backstage. Michael, in an iconic outfit from his 'Bad' era, strikes a quick, dynamic pose and looks intensely at the camera. The background is a blurry, dark backstage area. The lighting mimics a direct camera flash from the 80s. Authentic, vintage documentary look with film grain. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'time-travel',
                imageTypeHint: 'Ideal para: Foto de cara o medio cuerpo.',
                detailedDescription: "Recuerdo de los 80 con Michael Jackson en su era Bad. Flash directo y grano de película.\nRevive la era del Rey del Pop.",
                mediaType: 'image',
                requiresAspectRatio: true,
            },
            {
                id: 86,
                key: 'fan-taylor-swift-v2',
                caption: 'Selfie Graciosa con T. Swift V2',
                subcategory: 'Dúos con Famosos',
                prompt: `Action, iPhone-style. This person, with their facial and physical features, resembles a fan in a happy moment with Taylor Swift. They are posing awkwardly for a quick selfie, both making a funny face at the phone's camera. The background is the blurry exit of a stadium after a concert. The lighting is the realistic glow from the phone screen illuminating their faces. Authentic, documentary look. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'default',
                imageTypeHint: 'Ideal para: Foto de cara o medio cuerpo.',
                detailedDescription: "Selfie divertida haciendo muecas con Taylor Swift post-concierto. Iluminación realista de móvil.\nIdeal para Swifties.",
                mediaType: 'image',
                requiresAspectRatio: true,
            },
            {
                id: 87,
                key: 'fan-elvis-v2',
                caption: 'Bailando con Elvis Presley V2',
                subcategory: 'Dúos con Famosos',
                prompt: `Action, iPhone-style. This person, with their facial and physical features, resembles a fan from the 60s, captured in a spontaneous moment with Elvis Presley (in his black leather suit). Elvis is showing them a rock and roll dance step, and the person follows along with a happy and slightly shy smile towards the camera. The background is a blurry 1960s American diner. The lighting mimics a direct flash from that era. Authentic, vintage documentary look. Relación de aspecto 4:3. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'time-travel',
                imageTypeHint: 'Ideal para: Foto de cara o medio cuerpo.',
                detailedDescription: "Baila rock and roll con Elvis Presley en los 60. Estilo vintage en un diner americano.\nSube una foto sonriendo o bailando.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['4:3', '1:1', '16:9', '9:16', '3:4'],
            },
            {
                id: 88,
                key: 'fan-freddie-mercury-v2',
                caption: 'Autógrafo de Freddie Mercury V2',
                subcategory: 'Dúos con Famosos',
                prompt: `Action, iPhone-style. This person, with their facial and physical features, resembles a young fan from the 80s, captured in a happy moment with Freddie Mercury. Freddie is leaning in with a smile to sign a vinyl record, while the fan looks at him with an open-mouthed expression of excitement, their face visible to the camera. The background is a chaotic concert backstage, blurred. The lighting mimics a direct analog camera flash. Authentic, vintage documentary look. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'time-travel',
                imageTypeHint: 'Ideal para: Foto de cara o medio cuerpo.',
                detailedDescription: "Momento fan de los 80 recibiendo un autógrafo de Freddie Mercury. Emoción pura y estilo analógico.\nIdeal para amantes del rock.",
                mediaType: 'image',
                requiresAspectRatio: true,
            },
            {
                id: 89,
                key: 'fan-batman-v2',
                caption: 'Encuentro con Batman V2',
                subcategory: 'Personajes y Mundos',
                prompt: `Action, iPhone-style. This person, with their facial and physical features, resembles a small child in Superman pajamas, captured in a moment of awe with Batman (Christian Bale's suit). Batman is kneeling to the child's level as the child timidly reaches out, looking up at Batman's face. The background is a dark, rainy Gotham alley, blurred. The lighting is realistic, coming from a distant neon sign. Authentic, documentary look. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'default',
                imageTypeHint: 'Ideal para: Foto de cara o medio cuerpo.',
                detailedDescription: "Encuentro oscuro y emotivo con Batman en Gotham. Iluminación de neón y lluvia.\nSube una foto con expresión de asombro.",
                mediaType: 'image',
                requiresAspectRatio: true,
            },
            {
                id: 90,
                key: 'fan-mickey-v2',
                caption: 'Abrazo de Mickey Mouse V2',
                subcategory: 'Personajes y Mundos',
                prompt: `Action, iPhone-style. This person, with their facial and physical features, resembles a theme park visitor in a moment of wonder with Mickey Mouse. Mickey is giving them a friendly hug, and the person looks at the camera with wide-eyed happiness and surprise. The background is a bustling and colorful theme park, blurred. The lighting is the bright, cheerful light of a sunny day. Authentic, documentary look. Relación de aspecto 16:9. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'default',
                imageTypeHint: 'Ideal para: Foto de cara o medio cuerpo.',
                detailedDescription: "Abrazo mágico con Mickey Mouse en el parque temático. Colores vibrantes y luz soleada.\nPerfecto para un recuerdo feliz.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['16:9', '1:1', '9:16', '4:3', '3:4'],
            },
            {
                id: 91,
                key: 'fan-navi-v2',
                caption: 'Explorando Pandora con un Na\'vi V2',
                subcategory: 'Personajes y Mundos',
                prompt: `Action, iPhone-style. This person, with their facial and physical features, resembles an explorer in a moment of fascination with a Na'vi from Avatar. The Na'vi is kneeling, showing a bioluminescent plant, and the person watches with a curious and amazed expression, looking towards the camera. The background is the glowing Pandora jungle at night, blurred. The lighting comes from the magical bioluminescence. Authentic, documentary look. Relación de aspecto 2:1. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'default',
                imageTypeHint: 'Ideal para: Foto de cara o medio cuerpo.',
                detailedDescription: "Explora la jungla bioluminiscente de Pandora con un Na'vi. Iluminación mágica y ambiente de fantasía.\nSube una foto con expresión curiosa.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['2:1', '1:1', '16:9', '9:16', '4:3', '3:4'],
            },
            {
                id: 92,
                key: 'fan-encounter-v2',
                caption: 'Encuentro Personalizado V2',
                subcategory: 'Personalizados',
                prompt: `Action, iPhone-style. This person, with their facial and physical features, resembles a fan in a spontaneous and happy moment next to [CELEBRITY_NAME]. They are captured sharing a look of surprise and joy with the celebrity. The background is a credible but blurred location like a busy city street or an airport departure lounge. The lighting is realistic and ambient, creating an authentic feel. Authentic, documentary look, without professional retouching. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'default',
                imageTypeHint: 'Ideal para: Foto de cara o medio cuerpo.',
                detailedDescription: "Genera un encuentro espontáneo con cualquier celebridad que elijas. Estilo documental auténtico.\nEscribe el nombre del famoso en el campo de texto.",
                mediaType: 'image',
                requiresAspectRatio: true,
                dynamicFields: [
                    {
                        type: 'text',
                        key: '[CELEBRITY_NAME]',
                        label: 'Nombre del Famoso',
                        defaultValue: 'Lionel Messi',
                        isOptional: true
                    }
                ]
            },
            {
                id: 1106,
                key: 'station-sister-paparazzi',
                caption: 'Paparazzi: Ídolo en el Garaje',
                subcategory: 'Paparazzi y Prensa',
                prompt: `[PROMPT_CONTENT]`,
                illustration: 'default',
                imageTypeHint: 'Ideal para: Fotos de cuerpo entero o medio cuerpo caminando.',
                detailedDescription: "Simula una foto robada por un fan (station sister) en un garaje subterráneo. Estética cinematográfica, flash trasero y ambiente de celebridad rodeada de fans.",
                mediaType: 'image',
                requiresAspectRatio: true,
                dynamicFields: [
                    {
                        type: 'select',
                        key: 'subject_style',
                        label: 'Estilo del Sujeto',
                        options: [
                            {
                                label: 'Chica Elfa Japonesa (Original)',
                                values: {
                                    '[PROMPT_CONTENT]': `Amateur smartphone snapshot, Romantic atmosphere, gentle wind, realistic environment. Hollywood movie color grading, soft contrast, subtle film grain. The person from the photo, appearing as a gorgeously dressed Japanese elf 🧚 girl, in the underground garage scene, was surrounded by many fans after shooting variety shows. She was captured from the side of the station sister‘s perspective. The subject bowed her head and walked forward, wearing sunglasses. Her face was clear and transparent without deformation. The faces of the surrounding fans were completely blurred, and the foreground was slightly covered. Object, the flash shows obvious contour light and hair light from behind, the overall inadvertent sense of capture, slight shaking of the lens, moderate graininess, high-definition image quality, the center of the picture is the main body, and the sense of high-end. ${PRESERVE_IDENTITY_PROMPT}`
                                }
                            },
                            {
                                label: 'Estrella de K-Pop (Femenino)',
                                values: {
                                    '[PROMPT_CONTENT]': `Amateur smartphone snapshot, Romantic atmosphere, gentle wind, realistic environment. Hollywood movie color grading, soft contrast, subtle film grain. The person from the photo, appearing as a gorgeously dressed female K-Pop idol, in the underground garage scene, was surrounded by many fans after shooting variety shows. She was captured from the side of the station sister‘s perspective. The subject bowed her head and walked forward, wearing sunglasses. Her face was clear and transparent without deformation. The faces of the surrounding fans were completely blurred, and the foreground was slightly covered. Object, the flash shows obvious contour light and hair light from behind, the overall inadvertent sense of capture, slight shaking of the lens, moderate graininess, high-definition image quality, the center of the picture is the main body, and the sense of high-end. ${PRESERVE_IDENTITY_PROMPT}`
                                }
                            },
                            {
                                label: 'Estrella de K-Pop (Masculino)',
                                values: {
                                    '[PROMPT_CONTENT]': `Amateur smartphone snapshot, Romantic atmosphere, gentle wind, realistic environment. Hollywood movie color grading, soft contrast, subtle film grain. The person from the photo, appearing as a stylishly dressed male K-Pop idol, in the underground garage scene, was surrounded by many fans after shooting variety shows. He was captured from the side of the station sister‘s perspective. The subject bowed his head and walked forward, wearing sunglasses. His face was clear and transparent without deformation. The faces of the surrounding fans were completely blurred, and the foreground was slightly covered. Object, the flash shows obvious contour light and hair light from behind, the overall inadvertent sense of capture, slight shaking of the lens, moderate graininess, high-definition image quality, the center of the picture is the main body, and the sense of high-end. ${PRESERVE_IDENTITY_PROMPT}`
                                }
                            }
                        ]
                    }
                ]
            },
            {
                id: 1107,
                key: 'press-scrum-editorial',
                caption: 'Prensa y Paparazzi',
                subcategory: 'Paparazzi y Prensa',
                prompt: `Transform the subject into a high-fashion press scrum photograph, surrounded tightly by cameras, microphones, and boom mics from all directions. Preserve the subject's face, features, and overall identity clearly recognizable. The subject is centered in the frame, partially obscured by overlapping microphones and camera lenses pointing inward, creating a sense of pressure and attention. Expression is calm, controlled, and unreadable—confident but distant. Styling is minimal and fashion-forward: dark clothing, sharp silhouette, sunglasses or statement eyewear optional. The image is shot like a real editorial photograph—direct flash, harsh highlights, deep shadows, and realistic textures on equipment. Colors are cool and neutral, dominated by black, grey, and metallic tones. The composition feels claustrophobic and symmetrical, with the subject visually trapped by media attention. Style: paparazzi press swarm, fashion editorial photography, cinematic realism, high-contrast flash. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'lifestyle',
                imageTypeHint: 'Ideal para: Retrato de moda con impacto visual.',
                detailedDescription: "Conviértete en el centro de atención en una rueda de prensa de alta costura. Rodeado de cámaras y micrófonos, con iluminación de flash directo y sombras profundas para un look editorial dramático.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['3:4', '4:5', '9:16', '1:1']
            },
        ]
    }
};
