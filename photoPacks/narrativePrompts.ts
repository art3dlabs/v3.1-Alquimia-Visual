
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import type { PhotoPack } from './types';

const studioPrompt = `{
  "_meta_instructions": {
    "description": "An oil painting of the user's photo is in the foreground, being painted by an artist. The user is posing as a muse in the background.",
    "required_inputs": ["USER_IMAGE_EMBEDDING", "USER_WARDROBE_DESC"]
  },
  "prompt": "Cinematic photograph. In the sharp foreground, an easel holds a canvas featuring a beautiful, in-progress oil painting version of the original user-provided photo. A bohemian Asian artist with a beard is seen actively painting it. In the background of the dark, moody studio, the muse, who is the actual person from the user's reference photo ([USER_IMAGE_EMBEDDING]), is seen posing for him, reclining gracefully. It is absolutely crucial that the muse's facial features are an exact and photorealistic match to the original photo. The style is a natural, high-quality photograph with a 16:9 aspect ratio.",
  "scene": {
    "environment": {
      "location_type": "Dark, minimalist artist's studio with dramatic shadows",
      "objects": [
        { "object_type": "easel with canvas", "description": "Positioned in the sharp foreground, this canvas shows a beautiful and faithful in-progress oil painting version of the original reference photo provided by the user." },
        { "object_type": "artist", "description": "A bohemian Asian man with a beard, wearing a black turtleneck, seen from over the shoulder in the foreground, focused on painting the subject on the canvas." },
        { "object_type": "muse", "description": "The person ([USER_IMAGE_EMBEDDING]) is in the background, reclining gracefully on a draped surface as the muse." }
      ]
    },
    "mood": "Artistic, serene, contemplative, intimate"
  },
  "subject": {
    "description": "The muse, [USER_IMAGE_EMBEDDING]",
    "wardrobe": "[USER_WARDROBE_DESC]",
    "pose": {
      "stance": "Reclining gracefully in a three-quarters view in the background.",
      "expression": "A gentle smile, looking towards the artist."
    }
  },
  "lighting": {
    "type": "Soft, directional studio light illuminating the muse in the background."
  },
  "framing_composition": {
    "shot_type": "Medium shot",
    "orientation": "Horizontal (16:9 aspect ratio)",
    "lens": "85mm prime lens look",
    "focus": "Sharp focus on the canvas and artist in the foreground, with the muse in the background having a slightly softer focus (shallow depth of field)."
  },
  "rendering_intent": {
    "photorealism": "Natural color grade, realistic, sharp focus."
  }
}`;

const galleryPrompt = `{
  "_meta_instructions": {
    "description": "The muse and artist pose on either side of the finished painting in a gallery.",
    "required_inputs": ["USER_IMAGE_EMBEDDING", "USER_FORMAL_WARDROBE_DESC"]
  },
  "prompt": "Art gallery photography. In a clean gallery, a large, ornate gold-framed painting hangs on the wall. The painting is an oil painting version of the user's original reference photo. To the left of the painting stands the actual person from the user's photo ([USER_IMAGE_EMBEDDING]), dressed elegantly. To the right stands the bohemian Asian artist. Both are posing proudly. The entire painting is visible. The style is a candid, high-quality photograph with a 2:3 aspect ratio.",
  "scene": {
    "environment": {
      "location_type": "A clean, modern art gallery",
      "objects": [
        {
          "object_type": "painting",
          "description": "CRITICAL: The painting on the wall is a beautiful, finished oil painting that is a direct, artistic reproduction of the user's original reference photo. It is not a new portrait, but a painterly version of the source image. Do not generate a generic person.",
          "action": "Serving as the centerpiece of the scene, fully visible and unobscured between the two subjects."
        }
      ]
    },
    "mood": "Proud, artistic, accomplished, candid"
  },
  "subject": {
    "description": "Two subjects: the person from the user's photo and the male artist, posing on either side of the painting.",
    "person1": {
      "description": "The actual person from the user's reference photo ([USER_IMAGE_EMBEDDING]). It is absolutely critical that their facial features are an exact and photorealistic match to this original photo, with no alterations.",
      "wardrobe": "[USER_FORMAL_WARDROBE_DESC]",
      "pose": {
        "stance": "Standing proudly to the left of the painting, facing the camera.",
        "expression": "A proud, gentle smile."
      }
    },
    "person2": {
      "description": "The same bohemian Asian man with a beard from the studio scene, wearing a stylish black turtleneck.",
      "wardrobe": "A stylish, dark artistic outfit.",
      "pose": {
        "stance": "Standing proudly to the right of the painting, facing the camera.",
        "expression": "A proud smile, also looking at the camera."
      }
    }
  },
  "lighting": {
    "type": "Bright, even gallery lighting."
  },
  "framing_composition": {
    "shot_type": "Medium shot",
    "orientation": "Vertical (2:3 aspect ratio)",
    "lens": "50mm prime lens look",
    "focus": "Sharp focus on the subjects and the painting."
  },
  "rendering_intent": {
    "photorealism": "Candid, high-quality photograph."
  }
}`;

export const narrativePromptsPack: Record<string, PhotoPack> = {
    'artist-muse-session': {
        title: 'Sesión Narrativa: El Artista y la Musa',
        description: 'Una sesión de dos partes que cuenta una historia. Primero, posa como la musa en el estudio del artista, y luego, posa junto al artista y tu retrato terminado en una galería.',
        images: [
            {
                id: 1104,
                key: 'artist-studio-session',
                caption: 'Paso 1: La Musa en el Estudio',
                prompt: studioPrompt,
                illustration: 'professional-profile',
                imageTypeHint: 'Ideal para: Foto de cuerpo entero.',
                subcategory: 'Historia y Arte',
                dynamicFields: [
                    {
                        type: 'text',
                        key: '[USER_WARDROBE_DESC]',
                        label: 'Descripción del Vestuario (Musa)',
                        defaultValue: 'a simple, elegant outfit that drapes well, like a silk slip dress or a simple linen shirt and trousers',
                        isOptional: true,
                    }
                ],
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['16:9', '1:1', '9:16', '4:3', '3:4'],
            },
            {
                id: 1105,
                key: 'artist-gallery-session',
                caption: 'Paso 2: La Exposición en la Galería',
                prompt: galleryPrompt,
                illustration: 'model-cover',
                imageTypeHint: 'Ideal para: Foto de cuerpo entero.',
                subcategory: 'Historia y Arte',
                dynamicFields: [
                    {
                        type: 'text',
                        key: '[USER_FORMAL_WARDROBE_DESC]',
                        label: 'Descripción del Vestuario (Gala)',
                        defaultValue: 'an elegant formal outfit suitable for an art gallery opening, like a chic black dress or a stylish suit',
                        isOptional: true,
                    }
                ],
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['2:3', '1:1', '16:9', '9:16', '4:3', '3:4'],
            },
        ],
    },
};
