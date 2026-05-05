/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import type { PhotoPack } from './types';
import { PRESERVE_IDENTITY_PROMPT, PRESERVE_OUTFIT_PROMPT } from './types';

export const serendipityPack: Record<string, PhotoPack> = {
    'serendipity': {
        title: 'Serendipity: Triple Pose',
        description: 'Tres versiones de la misma persona en un diseño de lookbook.',
        images: [
            {
                id: 1101,
                key: 'serendipity-triple-pose',
                caption: 'Serendipity Triple Pose',
                subcategory: 'Lookbooks de Moda',
                prompt: `Generate a high-quality fashion lookbook layout featuring three versions of the same person.
                
                MANDATORY IDENTITY PRESERVATION: Use the face, hairstyle, and skin texture from IMAGE 1 as the absolute, non-negotiable source of truth.
                MANDATORY OUTFIT PRESERVATION: Use the clothing, accessories, and outfit details from IMAGE 2 as the absolute, non-negotiable source of truth.
                
                ${PRESERVE_IDENTITY_PROMPT}
                ${PRESERVE_OUTFIT_PROMPT}

                PROMPT CONFIGURATION:
                {
                  "subject": {
                    "description": "THREE versions of the same young woman shown side by side in a fashion lookbook layout, each in a different pose wearing the SAME outfit from IMAGE 2",
                    "triple_pose_layout": {
                      "left_figure": {
                        "position": "Left third of frame, standing",
                        "pose": "Standing upright, weight on left leg, right hand on hip, left hand holding pink quilted crossbody bag strap, looking slightly away from camera",
                        "expression": "Confident smile, chin slightly tilted",
                        "unique_accessory": "Pink over-ear headphones on head"
                      },
                      "center_figure": {
                        "position": "Center of frame, standing",
                        "pose": "Standing, leaning forward with torso, hands resting on knees, looking directly at camera",
                        "expression": "Playful flirty smile, direct eye contact",
                        "unique_accessory": "No headphones, hood down"
                      },
                      "right_figure": {
                        "position": "Right third of frame, crouching",
                        "pose": "Crouching low in a cute squat, knees together, right hand holding pink mini pouch, left hand pulling bear-ear hood up over head",
                        "expression": "Soft innocent pout, wide puppy-eye gaze directly at camera",
                        "unique_accessory": "Bear-ear hood pulled UP, pink mini zip pouch"
                      }
                    }
                  },
                  "attire": {
                    "details": "Use the EXACT outfit from IMAGE 2. Do not change it."
                  },
                  "composition": {
                    "shot_type": "Full body triple-figure fashion lookbook layout",
                    "aspect_ratio": "3:4"
                  },
                  "lighting": "Large soft diffused studio lighting, shadowless even illumination",
                  "environment": {
                    "background": "Soft pink and lavender plaid/gingham pattern, scattered kawaii decorative sticker elements",
                    "top_element": "Playful block letter title 'SERENDIPITY' in golden-yellow puffy text at top-left corner"
                  }
                }`,
                illustration: 'default',
                imageTypeHint: 'Tres versiones de la misma persona en un diseño de lookbook.',
                detailedDescription: "Tres versiones de la misma persona con el mismo outfit en un diseño de lookbook de moda.",
                mediaType: 'image',
                requiresSecondImage: true,
                requiresAspectRatio: true,
                supportedAspectRatios: ['3:4'],
            }
        ]
    }
};
