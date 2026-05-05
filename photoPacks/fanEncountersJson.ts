
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import type { PhotoPack } from './types';
import { PRESERVE_IDENTITY_PROMPT } from './types';

// The templates are now more generic, using placeholders like [LOCATION_TYPE], [POSE_STANCE], and [RENDERING_STYLE]
// which will be filled by the dropdown selections.

const athleteTemplate = `{
  "_meta_instructions": {
    "description": "Template for a fan meeting an athlete and receiving a signed item.",
    "required_inputs": [
      "USER_IMAGE_EMBEDDING",
      "USER_WARDROBE_DESC",
      "FAMOUS_ATHLETE_NAME",
      "SIGNED_ITEM_DESC",
      "TEAM_COLORS_DESC"
    ]
  },
  "prompt": "An attractive person ([USER_IMAGE_EMBEDDING], [USER_WARDROBE_DESC]) is having a dream-come-true moment with the famous athlete [FAMOUS_ATHLETE_NAME] in a press area. [FAMOUS_ATHLETE_NAME] is smiling and handing back a signed [SIGNED_ITEM_DESC]. The style is a crisp, high-quality fan photograph.",
  "scene": {
    "environment": {
      "location_type": "Backstage press area or official meet-and-greet event",
      "objects": [
        {
          "object_type": "signed item",
          "description": "A pristine [SIGNED_ITEM_DESC] with a fresh, visible signature.",
          "action": "Being held by both the athlete and the user, symbolizing the moment of exchange."
        },
        {
          "object_type": "press wall",
          "description": "A 'step-and-repeat' backdrop with team logos, slightly out of focus.",
          "action": "Providing a professional context."
        }
      ]
    },
    "mood": "Excited, grateful, personal, memorable",
    "color_palette": "Dominated by [TEAM_COLORS_DESC] from the item and backdrop."
  },
  "subject": {
    "wardrobe": {
      "user": "[USER_WARDROBE_DESC]",
      "athlete": "Official team casual wear or tracksuit."
    },
    "pose": {
      "stance": "Standing close together, shoulder to shoulder.",
      "expression": "User: ecstatic smile. Athlete: warm, professional smile."
    }
  },
  "rendering_intent": {
    "photorealism": "Sharp, high-resolution fan photograph."
  }
}`;

const actorTemplate = `{
  "_meta_instructions": {
    "description": "Template for a red carpet moment with an award-winning actor.",
    "required_inputs": [
      "USER_IMAGE_EMBEDDING",
      "USER_FORMAL_WARDROBE_DESC",
      "FAMOUS_ACTOR_NAME",
      "AWARD_NAME"
    ]
  },
  "prompt": "An attractive person ([USER_IMAGE_EMBEDDING]), dressed in [USER_FORMAL_WARDROBE_DESC], is on the red carpet posing with the famous actor [FAMOUS_ACTOR_NAME] who has just won [AWARD_NAME]. [FAMOUS_ACTOR_NAME] is holding the [AWARD_NAME]. Flashes from paparazzi are going off. The style is glamorous event photography.",
  "scene": {
    "environment": {
      "location_type": "The red carpet at a major awards show"
    },
    "objects": [
      {
        "object_type": "award",
        "description": "The iconic, polished [AWARD_NAME].",
        "action": "Being proudly held by [FAMOUS_ACTOR_NAME]."
      }
    ],
    "mood": "Glamorous, prestigious, elegant, celebratory",
    "color_palette": "Deep red carpet, gold of the award, and elegant black/white couture."
  },
  "subject": {
    "wardrobe": {
      "user": "[USER_FORMAL_WARDROBE_DESC]",
      "actor": "High-fashion black-tie attire (tuxedo or gown)."
    },
    "pose": {
      "expression": "Beaming, confident, million-dollar smiles for the cameras."
    }
  },
  "rendering_intent": {
    "photorealism": "Polished, high-fashion photo (Vogue style)."
  }
}`;

const singerTemplate = `{
  "_meta_instructions": {
    "description": "Template for a fan being with a singer in various settings.",
    "required_inputs": [
      "USER_IMAGE_EMBEDDING",
      "USER_WARDROBE_DESC",
      "FAMOUS_SINGER_NAME",
      "SINGER_ICONIC_COSTUME_DESC",
      "SINGER_COLOR_SCHEME_DESC",
      "LOCATION_TYPE",
      "POSE_STANCE"
    ]
  },
  "prompt": "An attractive person ([USER_IMAGE_EMBEDDING], [USER_WARDROBE_DESC]) is at [LOCATION_TYPE] with the famous singer [FAMOUS_SINGER_NAME]. [FAMOUS_SINGER_NAME] is wearing [SINGER_ICONIC_COSTUME_DESC]. The style is dynamic, high-quality photography.",
  "scene": {
    "environment": {
      "location_type": "[LOCATION_TYPE]"
    },
    "mood": "Exciting, memorable, and energetic",
    "color_palette": "Saturated and dramatic, with [SINGER_COLOR_SCHEME_DESC] from the lighting."
  },
  "subject": {
    "wardrobe": {
      "user": "[USER_WARDROBE_DESC]",
      "singer": "[SINGER_ICONIC_COSTUME_DESC]"
    },
    "pose": {
      "stance": "[POSE_STANCE]",
      "expression": "Pure joy and excitement on both faces."
    }
  },
  "framing_composition": {
    "shot_type": "Medium long shot",
    "orientation": "Horizontal (landscape)"
  },
  "lighting": {
    "type": "Dramatic lighting with lens flare and atmospheric haze."
  },
  "rendering_intent": {
    "photorealism": "Vibrant, high-energy photo, magazine quality."
  }
}`;

const leaderTemplate = `{
  "_meta_instructions": {
    "description": "Template for a formal meeting between the user (as a leader) and a famous head of state.",
    "required_inputs": [
      "USER_IMAGE_EMBEDDING",
      "USER_FORMAL_WARDROBE_DESC",
      "WORLD_LEADER_NAME",
      "USER_COUNTRY_NAME",
      "LEADER_COUNTRY_NAME",
      "LOCATION_TYPE",
      "POSE_STANCE"
    ]
  },
  "prompt": "An attractive person ([USER_IMAGE_EMBEDDING]), dressed in [USER_FORMAL_WARDROBE_DESC] as a world leader, is in a formal meeting with [WORLD_LEADER_NAME] at [LOCATION_TYPE]. Behind them stand the national flags of [USER_COUNTRY_NAME] and [LEADER_COUNTRY_NAME]. The style is an official state photograph.",
  "scene": {
    "environment": {
      "location_type": "[LOCATION_TYPE]"
    },
    "objects": [
      {
        "object_type": "national flags",
        "description": "Two large, pristine national flags of [USER_COUNTRY_NAME] and [LEADER_COUNTRY_NAME] on poles.",
        "action": "Symbolizing the meeting of two nations."
      }
    ],
    "mood": "Serious, formal, powerful, diplomatic, historic",
    "color_palette": "Subdued and professional, with rich wood tones and the colors of the flags."
  },
  "subject": {
    "wardrobe": {
      "user": "[USER_FORMAL_WARDROBE_DESC]",
      "leader": "Formal business attire."
    },
    "pose": {
      "stance": "[POSE_STANCE]",
      "expression": "A serious, thoughtful, or subtly optimistic expression.",
      "arms_hands": "Hands are calmly clasped on the table or podium."
    }
  },
  "framing_composition": {
    "shot_type": "Medium shot",
    "orientation": "Horizontal (landscape)"
  },
  "rendering_intent": {
    "photorealism": "A crisp, official photograph suitable for a major news agency."
  }
}`;

const influencerTemplate = `{
  "_meta_instructions": {
    "description": "Template for a fun, energetic awards show carpet with a famous influencer.",
    "required_inputs": [
      "USER_IMAGE_EMBEDDING",
      "USER_TRENDY_WARDROBE_DESC",
      "INFLUENCER_NAME",
      "AWARDS_SHOW_NAME",
      "CARPET_COLOR"
    ]
  },
  "prompt": "An attractive person ([USER_IMAGE_EMBEDDING], wearing [USER_TRENDY_WARDROBE_DESC]) is on the [CARPET_COLOR] carpet of the [AWARDS_SHOW_NAME], posing and laughing with famous influencer [INFLUENCER_NAME]. The background is a colorful, graphic-heavy press wall. The style is bright, poppy, and energetic.",
  "scene": {
    "environment": {
      "location_type": "A fun, brightly colored awards show carpet"
    },
    "mood": "Fun, energetic, trendy, youthful, exciting",
    "color_palette": "Extremely vibrant and saturated, dominated by the [CARPET_COLOR]."
  },
  "subject": {
    "wardrobe": {
      "user": "[USER_TRENDY_WARDROBE_DESC]",
      "influencer": "Trendy, statement fashion piece."
    },
    "pose": {
      "stance": "Playful, energetic (e.g., peace signs, laughing).",
      "expression": "Big, genuine laughs."
    }
  },
  "framing_composition": {
    "shot_type": "Full body or medium long shot",
    "orientation": "Vertical (portrait) for social media style"
  },
  "rendering_intent": {
    "photorealism": "Bright, colorful, high-definition photography."
  }
}`;

const historicalTemplate = `{
  "_meta_instructions": {
    "description": "Template for a historical meeting with a genius of the past.",
    "required_inputs": [
      "USER_IMAGE_EMBEDDING",
      "USER_PERIOD_WARDROBE_DESC",
      "HISTORICAL_FIGURE_NAME",
      "FAMOUS_WORK_DESC",
      "TIME_PERIOD_DESC",
      "PHOTO_STYLE_DESC"
    ]
  },
  "prompt": "In a historical, [PHOTO_STYLE_DESC] photograph, an attractive person ([USER_IMAGE_EMBEDDING]), dressed in [USER_PERIOD_WARDROBE_DESC], is in the study of [HISTORICAL_FIGURE_NAME]. The historical figure is at [FAMOUS_WORK_DESC], explaining a concept. The style is a classic, historical photo.",
  "scene": {
    "environment": {
      "location_type": "[TIME_PERIOD_DESC], filled with books and papers."
    },
    "objects": [
      {
        "object_type": "work focus",
        "description": "[FAMOUS_WORK_DESC].",
        "action": "Serving as the focal point of the genius's explanation."
      }
    ],
    "mood": "Intellectual, awe-inspiring, historical, intimate",
    "color_palette": "[PHOTO_STYLE_DESC] tones (e.g., monochromatic, sepia)."
  },
  "subject": {
    "wardrobe": {
      "user": "[USER_PERIOD_WARDROBE_DESC]",
      "historical_figure": "Period-appropriate attire."
    },
    "pose": {
      "expression": "User's face shows fascination and awe. The historical figure has a focused, passionate expression."
    }
  },
  "rendering_intent": {
    "photorealism": "A realistic but timeless historical photograph with authentic film grain."
  }
}`;

const fictionalTemplate = `{
  "_meta_instructions": {
    "description": "Template for placing the user inside a fictional universe with an iconic character.",
    "required_inputs": [
      "USER_IMAGE_EMBEDDING",
      "USER_UNIVERSE_WARDROBE_DESC",
      "CHARACTER_NAME",
      "FRANCHISE_NAME",
      "ICONIC_LOCATION_DESC",
      "CHARACTER_DYNAMIC_DESC",
      "RENDERING_STYLE"
    ]
  },
  "prompt": "An attractive person ([USER_IMAGE_EMBEDDING]), dressed in [USER_UNIVERSE_WARDROBE_DESC] [CHARACTER_DYNAMIC_DESC], is in the iconic location [ICONIC_LOCATION_DESC] side-by-side with [CHARACTER_NAME]. The style is a cinematic, high-quality film still from [FRANCHISE_NAME] universe.",
  "scene": {
    "environment": {
      "location_type": "[ICONIC_LOCATION_DESC]."
    },
    "mood": "Epic, cinematic, and true to the [FRANCHISE_NAME] universe's tone.",
    "color_palette": "Colors and lighting authentic to the visual style of the [FRANCHISE_NAME] films."
  },
  "subject": {
    "wardrobe": {
      "user": "[USER_UNIVERSE_WARDROBE_DESC]",
      "character": "Their iconic costume or outfit."
    },
    "pose": {
      "stance": "A pose that reflects their role as [CHARACTER_DYNAMIC_DESC], alongside [CHARACTER_NAME]."
    }
  },
  "framing_composition": {
    "shot_type": "Medium long shot",
    "orientation": "Horizontal (widescreen cinematic)"
  },
  "rendering_intent": {
    "photorealism": "[RENDERING_STYLE]"
  }
}`;

export const fanEncountersJsonPack: Record<string, PhotoPack> = {
    'fan-encounters-json': {
        title: 'Encuentros PRO (JSON)',
        description: 'Generación avanzada con estructuras JSON para máximo control sobre la escena y el famoso.',
        images: [
            {
                id: 601,
                key: 'fan-json-athlete',
                caption: 'Encuentro con Atleta (JSON)',
                subcategory: 'Realismo y Celebridades',
                prompt: `${athleteTemplate} ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'professional-profile',
                imageTypeHint: 'Define el atleta y el objeto firmado.',
                detailedDescription: "Genera un encuentro backstage con tu atleta favorito firmando un objeto. Estructura JSON para consistencia profesional.",
                mediaType: 'image',
                requiresAspectRatio: true,
                dynamicFields: [
                    { type: 'text', key: 'FAMOUS_ATHLETE_NAME', label: 'Nombre del Atleta', isOptional: true },
                    { type: 'text', key: 'SIGNED_ITEM_DESC', label: 'Objeto Firmado (ej. Balón)', isOptional: true },
                    { type: 'text', key: 'TEAM_COLORS_DESC', label: 'Colores del Equipo', isOptional: true },
                    { type: 'text', key: 'USER_WARDROBE_DESC', label: 'Tu Ropa (ej. Camiseta del equipo)', isOptional: true }
                ]
            },
            {
                id: 602,
                key: 'fan-json-actor',
                caption: 'Red Carpet Actor (JSON)',
                subcategory: 'Realismo y Celebridades',
                prompt: `${actorTemplate} ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'model-cover',
                imageTypeHint: 'Alfombra roja con un actor premiado.',
                detailedDescription: "Posa en la alfombra roja junto a un actor famoso sosteniendo un premio. Estilo paparazzi glamuroso.",
                mediaType: 'image',
                requiresAspectRatio: true,
                dynamicFields: [
                    { type: 'text', key: 'FAMOUS_ACTOR_NAME', label: 'Nombre del Actor', isOptional: true },
                    { type: 'text', key: 'AWARD_NAME', label: 'Nombre del Premio (ej. Oscar)', isOptional: true },
                    { type: 'text', key: 'USER_FORMAL_WARDROBE_DESC', label: 'Tu Ropa Formal', isOptional: true }
                ]
            },
            {
                id: 603,
                key: 'fan-json-singer',
                caption: 'Concierto Cantante (JSON)',
                subcategory: 'Realismo y Celebridades',
                prompt: `${singerTemplate} ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'lifestyle',
                imageTypeHint: 'Encuentro con cantante en escenario o backstage.',
                detailedDescription: "Foto dinámica con tu cantante favorito. Personaliza ubicación y vestuario icónico.",
                mediaType: 'image',
                requiresAspectRatio: true,
                dynamicFields: [
                    { type: 'text', key: 'FAMOUS_SINGER_NAME', label: 'Nombre del Cantante', isOptional: true },
                    { type: 'text', key: 'SINGER_ICONIC_COSTUME_DESC', label: 'Vestuario del Cantante', isOptional: true },
                    { type: 'text', key: 'SINGER_COLOR_SCHEME_DESC', label: 'Esquema de Color (Luces)', isOptional: true },
                    { type: 'text', key: 'LOCATION_TYPE', label: 'Ubicación (Escenario/Backstage)', isOptional: true },
                    { type: 'text', key: 'POSE_STANCE', label: 'Pose (Abrazo/Cantar)', isOptional: true },
                    { type: 'text', key: 'USER_WARDROBE_DESC', label: 'Tu Ropa', isOptional: true }
                ]
            },
            {
                id: 604,
                key: 'fan-json-leader',
                caption: 'Reunión Líder Mundial (JSON)',
                subcategory: 'Política y Estado',
                prompt: `${leaderTemplate} ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'professional-corporate',
                imageTypeHint: 'Reunión formal con un líder mundial.',
                detailedDescription: "Foto oficial de estado reuniéndote con un líder mundial. Banderas y ambiente diplomático.",
                mediaType: 'image',
                requiresAspectRatio: true,
                dynamicFields: [
                    { type: 'text', key: 'WORLD_LEADER_NAME', label: 'Nombre del Líder', isOptional: true },
                    { type: 'text', key: 'USER_COUNTRY_NAME', label: 'Tu País (para bandera)', isOptional: true },
                    { type: 'text', key: 'LEADER_COUNTRY_NAME', label: 'País del Líder', isOptional: true },
                    { type: 'text', key: 'LOCATION_TYPE', label: 'Ubicación (Despacho Oval/ONU)', isOptional: true },
                    { type: 'text', key: 'POSE_STANCE', label: 'Pose (Apretón de manos/Sentados)', isOptional: true },
                    { type: 'text', key: 'USER_FORMAL_WARDROBE_DESC', label: 'Tu Ropa Formal', isOptional: true }
                ]
            },
            {
                id: 605,
                key: 'fan-json-influencer',
                caption: 'Evento Influencer (JSON)',
                subcategory: 'Realismo y Celebridades',
                prompt: `${influencerTemplate} ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'lifestyle',
                imageTypeHint: 'Selfie o foto divertida con influencer.',
                detailedDescription: "Foto vibrante y divertida en un evento de premios con un influencer. Estilo redes sociales.",
                mediaType: 'image',
                requiresAspectRatio: true,
                dynamicFields: [
                    { type: 'text', key: 'INFLUENCER_NAME', label: 'Nombre del Influencer', isOptional: true },
                    { type: 'text', key: 'AWARDS_SHOW_NAME', label: 'Nombre del Evento', isOptional: true },
                    { type: 'text', key: 'CARPET_COLOR', label: 'Color de Alfombra', isOptional: true },
                    { type: 'text', key: 'USER_TRENDY_WARDROBE_DESC', label: 'Tu Ropa Trendy', isOptional: true }
                ]
            },
            {
                id: 606,
                key: 'fan-historical-json',
                caption: 'Figuras Históricas (JSON)',
                subcategory: 'Fantasía e Historia',
                prompt: `${historicalTemplate} ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'time-travel',
                imageTypeHint: 'Viaja al pasado para conocer a un genio.',
                detailedDescription: "Viaja al pasado para un encuentro histórico con genios como Einstein o Da Vinci. La IA recrea la época y la atmósfera intelectual.\nPersonaliza el personaje y el contexto.",
                mediaType: 'image',
                requiresAspectRatio: true,
                dynamicFields: [
                    { type: 'text', key: 'HISTORICAL_FIGURE_NAME', label: 'Figura Histórica', isOptional: true },
                    { type: 'text', key: 'FAMOUS_WORK_DESC', label: 'Obra/Inventa (Foco)', isOptional: true },
                    { type: 'text', key: 'TIME_PERIOD_DESC', label: 'Período (ej. 1920s Lab)', isOptional: true },
                    { type: 'text', key: 'PHOTO_STYLE_DESC', label: 'Estilo Foto (Sepia/B&N)', isOptional: true },
                    { type: 'text', key: 'USER_PERIOD_WARDROBE_DESC', label: 'Tu Ropa de Época', isOptional: true }
                ]
            },
            {
                id: 607,
                key: 'fan-fictional-json',
                caption: 'Personaje de Ficción (JSON)',
                subcategory: 'Fantasía e Historia',
                prompt: `${fictionalTemplate} ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'model-cover',
                imageTypeHint: 'Únete a tu personaje favorito en su mundo.',
                detailedDescription: "Intégrate en tu universo de ficción favorito junto a personajes icónicos. Calidad cinematográfica fiel a la franquicia.\nElige personaje, franquicia y rol.",
                mediaType: 'image',
                requiresAspectRatio: true,
                dynamicFields: [
                    { type: 'text', key: 'CHARACTER_NAME', label: 'Nombre del Personaje', isOptional: true },
                    { type: 'text', key: 'FRANCHISE_NAME', label: 'Franquicia (Star Wars/Marvel)', isOptional: true },
                    { type: 'text', key: 'ICONIC_LOCATION_DESC', label: 'Ubicación Icónica', isOptional: true },
                    { type: 'text', key: 'CHARACTER_DYNAMIC_DESC', label: 'Tu Rol (Compañero/Rival)', isOptional: true },
                    { type: 'text', key: 'RENDERING_STYLE', label: 'Estilo Visual (Cine/Anime)', isOptional: true },
                    { type: 'text', key: 'USER_UNIVERSE_WARDROBE_DESC', label: 'Tu Ropa Temática', isOptional: true }
                ]
            }
        ]
    }
};
