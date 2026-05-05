
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import type { PhotoPack } from './types';
import { PRESERVE_IDENTITY_PROMPT, PRESERVE_OUTFIT_PROMPT } from './types';

// Base prompt template that will be populated by the dynamic field options.
const basePrompt = `Create an expression sheet for the character in the photo. The output must be a single image with a [GRID_SIZE] grid of headshots of the same person against a clean, neutral light gray background. Each headshot must display a different expression from the following list:

[EXPRESSION_LIST]

It is absolutely critical that the person's identity, facial structure, hairstyle, and clothing remain identical to the source photo in every panel, with only the facial expression changing. ${PRESERVE_IDENTITY_PROMPT} ${PRESERVE_OUTFIT_PROMPT}`;

export const expressionsPacks: Record<string, PhotoPack> = {
  'expressions-grid': {
    title: 'Grid de Expresiones',
    description: 'Genera un grid de tu foto con diferentes expresiones faciales cómicas, tiernas o sensuales.',
    images: [
      {
        id: 73,
        key: 'expressions-grid-generator',
        caption: 'Generador de Grids de Expresiones',
        subcategory: 'Hojas de Expresiones',
        prompt: basePrompt,
        illustration: 'professional-profile',
        imageTypeHint: 'Ideal para: Foto de cara.',
        detailedDescription: "Crea una hoja de expresiones con múltiples variantes de tu rostro (cómico, kawaii, sensual) en un solo grid. Mantiene tu identidad en cada panel.\nPerfecto para stickers o estudiar emociones.",
        mediaType: 'image',
        requiresAspectRatio: true,
        dynamicFields: [
          {
            type: 'select',
            key: 'expression_set',
            label: 'Elige un Set de Expresiones',
            options: [
              {
                label: 'Muecas Cómicas',
                values: {
                  '[GRID_SIZE]': '2x2',
                  '[EXPRESSION_LIST]': `1. Making a silly face with crossed eyes and tongue sticking out to the side.\n2. Pushing their nose up with a finger, scrunching their face comically.\n3. A dramatic pout with exaggeratedly puffed-out cheeks.\n4. Mouth wide open in a playful, fun scream or laugh.`
                }
              },
              {
                label: 'Muecas Tiernas (Kawaii) #1',
                values: {
                  '[GRID_SIZE]': '2x2',
                  '[EXPRESSION_LIST]': `1. A playful wink while slightly sticking out their tongue.\n2. Gently puffing out cheeks like a cute hamster, looking innocent.\n3. An adorable pout with a slightly worried expression, like a puppy.\n4. Crinkling their nose cutely, as if smelling something sweet, with sparkling eyes.`
                }
              },
              {
                label: 'Muecas Tiernas (Kawaii) #2',
                values: {
                  '[GRID_SIZE]': '2x2',
                  '[EXPRESSION_LIST]': `1. A small, shy 'peace' sign with fingers near their face, with a closed-mouth smile and slightly rosy cheeks.\n2. Head tilted gently, making a 'chu' (kiss) face with big, bright eyes.\n3. Covering their mouth with both hands in a 'surprised but cute' expression, with wide, innocent eyes.\n4. Biting their lip slightly with a playful, mischievous smile, with eyes sparkling with mischief.`
                }
              },
              {
                label: 'Muecas Tiernas (Kawaii) #3',
                values: {
                  '[GRID_SIZE]': '2x2',
                  '[EXPRESSION_LIST]': `1. Holding a small, colorful macaron near their cheek with a wide, happy smile.\n2. Making a small 'V' (peace sign) with both hands under their chin, with a shy and sweet expression.\n3. Gently blowing an imaginary kiss with their hand, with eyes softly closed.\n4. Gently touching one cheek with an index finger, with a sweetly pensive expression.`
                }
              },
              {
                label: 'Expresiones con la Boca (Atrevido)',
                values: {
                  '[GRID_SIZE]': '2x2',
                  '[EXPRESSION_LIST]': `1. Playfully sticking their tongue out, with a silver hoop piercing in the tongue.\n2. Sensually biting their lower lip.\n3. Holding a red cherry lollipop in their mouth.\n4. Blowing a large pink bubblegum bubble that is about to pop.`
                }
              },
              {
                label: 'Expresiones con la Boca (Alternativo)',
                values: {
                  '[GRID_SIZE]': '2x3',
                  '[EXPRESSION_LIST]': `1. Blowing a playful kiss towards the camera, lips slightly puckered.\n2. Drinking a colorful cocktail with a straw, eyes looking up mischievously.\n3. Biting into a ripe, juicy peach, with juice running down their chin.\n4. Holding a single rose between their lips, with a thorn lightly touching their skin.\n5. Whispering a secret, with a finger pressed lightly against their lips in a 'shhh' gesture.\n6. A subtle yawn, with one hand partially covering their mouth, showing a hint of sleepy eyes.`
                }
              }
            ]
          }
        ]
      }
    ]
  }
};
