
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import type { PhotoPack } from './types';
import { PRESERVE_IDENTITY_PROMPT } from './types';

export const travelGridsPack: Record<string, PhotoPack> = {
    'travel-instagram-grids': {
        title: 'Grids de Viaje Instagram',
        description: 'Crea un perfil de Instagram completo con un grid de 3x3 de tus viajes.',
        images: [
            {
                id: 1102,
                key: 'instagram-disneyland-grid',
                caption: 'Disneyland Adventure (Grid 3x3)',
                subcategory: 'Instagram Grids (3x3)',
                prompt: `{
  "Objective": "Create a single image containing a seamless 3x3 Instagram-style grid (9 distinct panels) of low-quality smartphone photos featuring the person from the reference photo enjoying Disneyland, clearly showing iconic park elements, rides, and mascots.",
  "Composition": {
    "layout": "3x3 grid",
    "aspect_ratio": "1:1",
    "framing": "each square captures a different candid Disneyland moment, forming a cohesive Instagram profile"
  },
  "Subject": {
    "type": "young woman",
    "appearance": {
      "beauty": "extremely attractive, natural beauty",
      "body": "athletic, fit physique",
      "skin": "natural texture, no glossiness, no smoothing",
      "makeup": "light, natural",
      "expression": "joyful, playful, candid"
    },
    "consistency": "same person across all 9 photos"
  },
  "Wardrobe": {
    "style": "Disneyland themed outfits",
    "details": [
      "Mickey/Minnie ears headband",
      "Disney-themed crop tops or hoodies",
      "casual shorts or skirts",
      "sneakers",
      "colorful, playful clothing"
    ]
  },
  "Scenes": [
    { "position": "top left", "location": "roller coaster ride", "pose": "mid-ride candid, wind-blown hair, excited expression" },
    { "position": "top center", "location": "Disney castle", "pose": "standing in front, casual pose, slightly off-center" },
    { "position": "top right", "location": "posing with mascot (e.g., Mickey Mouse)", "pose": "playful pose, smiling" },
    { "position": "middle left", "location": "theme park street with shops", "pose": "walking candid, holding snack or drink" },
    { "position": "middle center", "location": "carousel or classic ride", "pose": "sitting on ride, laughing naturally" },
    { "position": "middle right", "location": "posing with another mascot (e.g., princess or character)", "pose": "fun interaction, slightly posed but natural" },
    { "position": "bottom left", "location": "nighttime Disneyland lights", "pose": "slightly blurred candid shot, glowing lights behind" },
    { "position": "bottom center", "location": "food stand", "pose": "holding Disneyland snack (e.g., churro), casual smile" },
    { "position": "bottom right", "location": "wide park view with rides", "pose": "back facing camera or looking away, scenic shot" }
  ],
  "Photography": {
    "camera": "smartphone",
    "style": "Instagram casual travel",
    "quality": "intentionally low quality",
    "lighting": "natural sunlight, uneven exposure",
    "imperfections": ["motion blur", "grain/noise", "slight overexposure or underexposure", "lens distortion", "unbalanced framing"],
    "effects": ["no beauty filter", "no skin retouching", "authentic dynamic range", "slightly inconsistent color tones"]
  },
  "Mood": "fun, energetic, playful, theme park adventure",
  "Rendering": {
    "style_keywords": ["instagram grid", "disneyland photos", "theme park lifestyle", "smartphone photography", "candid moments", "low quality aesthetic"],
    "realism": "highly realistic smartphone look",
    "detail_level": "natural imperfect detail"
  }
} ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'lifestyle',
                imageTypeHint: 'Grid 3x3: Un día mágico en Disneyland con 9 momentos diferentes.',
                detailedDescription: "Crea un grid de Instagram de 3x3 con 9 fotos espontáneas en Disneyland. Incluye el castillo, atracciones, snacks y encuentros con personajes.\\nEstética de smartphone de baja calidad para un look auténtico.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['1:1']
            },
            {
                id: 1103,
                key: 'instagram-rome-grid',
                caption: 'Rome Travel (Grid 3x3)',
                subcategory: 'Instagram Grids (3x3)',
                prompt: `{
  "Objective": "Create a single image containing a seamless 3x3 Instagram-style grid (9 distinct panels) of low-quality smartphone photos featuring the person from the reference photo traveling in Rome, capturing iconic landmarks with a natural, unfiltered aesthetic.",
  "Composition": {
    "layout": "3x3 grid",
    "aspect_ratio": "1:1",
    "framing": "each square is a different candid moment, forming a cohesive Instagram profile layout"
  },
  "Subject": {
    "type": "young woman",
    "appearance": {
      "beauty": "extremely beautiful, natural attractiveness",
      "skin": "realistic skin texture, no glossiness, no smoothing",
      "makeup": "minimal, natural look",
      "expression": "candid, relaxed, travel lifestyle expressions"
    },
    "consistency": "same person across all 9 photos"
  },
  "Scenes": [
    { "position": "top left", "location": "Colosseum", "pose": "standing casually, looking away" },
    { "position": "top center", "location": "Pantheon", "pose": "walking or mid-step candid" },
    { "position": "top right", "location": "Trevi Fountain (Love Fountain)", "pose": "throwing coin or smiling softly" },
    { "position": "middle left", "location": "Vatican Obelisk (St. Peter’s Square)", "pose": "looking up at architecture" },
    { "position": "middle center", "location": "Sistine Chapel", "pose": "looking upward, subtle awe expression" },
    { "position": "middle right", "location": "Roman city street", "pose": "walking candid, street lifestyle" },
    { "position": "bottom left", "location": "Roman cafe street", "pose": "sitting casually, relaxed" },
    { "position": "bottom center", "location": "panoramic cityscape viewpoint", "pose": "back facing camera, overlooking city" },
    { "position": "bottom right", "location": "historic Roman alley or landmark", "pose": "leaning or standing naturally" }
  ],
  "Photography": {
    "camera": "smartphone",
    "style": "Instagram casual travel",
    "quality": "intentionally low quality",
    "lighting": "natural sunlight, uneven exposure",
    "imperfections": ["motion blur", "grain/noise", "slight overexposure or underexposure", "lens distortion", "unbalanced framing"],
    "effects": ["no beauty filter", "no skin retouching", "authentic dynamic range", "slightly washed or inconsistent colors"]
  },
  "Mood": "carefree travel, European summer, candid lifestyle",
  "Rendering": {
    "style_keywords": ["instagram grid", "rome travel photos", "smartphone photography", "low quality aesthetic", "natural beauty", "tourist lifestyle"],
    "realism": "highly realistic smartphone look",
    "detail_level": "natural imperfect detail"
  }
} ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'lifestyle',
                imageTypeHint: 'Grid 3x3: Un viaje inolvidable por Roma con 9 momentos icónicos.',
                detailedDescription: "Crea un grid de Instagram de 3x3 con 9 fotos espontáneas en Roma. Incluye el Coliseo, la Fontana di Trevi, el Vaticano y calles pintorescas.\\nEstética de smartphone de baja calidad para un look auténtico.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['1:1']
            }
        ]
    }
};
