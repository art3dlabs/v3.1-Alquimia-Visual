/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import type { PhotoPack } from './types';
import { PRESERVE_IDENTITY_PROMPT, PRESERVE_OUTFIT_PROMPT } from './types';

export const behindTheScenesPack: Record<string, PhotoPack> = {
    'behind-the-scenes': {
        title: 'Detrás de Cámaras',
        description: 'Conviértete en la estrella de una sesión de fotos profesional, capturada en un estilo documental y espontáneo.',
        images: [
            {
                id: 18,
                key: 'bts-adjustments',
                caption: 'Ajustes de Último Minuto',
                subcategory: 'Sesión Profesional',
                prompt: `Action, documentary-style. The person from the photo is on a professional photo shoot set. They are captured in a candid, friendly conversation with production assistants who are making final adjustments to their wardrobe, makeup, and hair. The setting is a studio with professional lighting equipment (softboxes, umbrellas) and a set visible in the background. The lighting is a mix of cinematic studio lights and ambient light, creating an authentic, behind-the-scenes atmosphere. The final image should be a hyper-realistic photograph. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'model-runway',
                imageTypeHint: 'Ideal para: Foto de medio cuerpo o cuerpo entero.',
                mediaType: 'image',
                requiresAspectRatio: true,
            },
            {
                id: 19,
                key: 'bts-director-chat',
                caption: 'Charla con el Director',
                subcategory: 'Sesión Profesional',
                prompt: `Action, documentary-style. The person from the photo is captured in an intimate, collaborative moment on a film set, either standing or sitting in classic folding studio chairs. They are in their full original costume but are wearing comfortable slippers, indicating a break between scenes. They are in a deep, engaging conversation with the director, who is expressively explaining a scene. The person is listening intently, nodding, and fully engaged. The focus is tightly on the two of them, creating a sense of intimacy. Far in the distant and heavily blurred background, the faint outlines of lighting rigs, cameras, and crew members suggest a professional set without distracting from the main interaction. The final image should be a hyper-realistic photograph. ${PRESERVE_IDENTITY_PROMPT} ${PRESERVE_OUTFIT_PROMPT}`,
                illustration: 'model-runway',
                imageTypeHint: 'Ideal para: Foto de medio cuerpo.',
                mediaType: 'image',
                requiresAspectRatio: true,
            },
            {
                id: 20,
                key: 'bts-reviewing-shots',
                caption: 'Revisando las Tomas',
                subcategory: 'Sesión Profesional',
                prompt: `Action, documentary-style. The person from the photo is looking over the photographer's shoulder at the camera's display, both of them smiling at a successful shot. The image on the small screen should be a tiny, recognizable version of the person. The lighting is soft and focused on their interaction, with the set blurred in the background. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'model-runway',
                imageTypeHint: 'Ideal para: Foto de cara o busto.',
                mediaType: 'image',
                requiresAspectRatio: true,
            },
            {
                id: 21,
                key: 'bts-relaxing',
                caption: 'Descanso en el Set',
                subcategory: 'Sesión Profesional',
                prompt: `Action, documentary-style. A candid shot of the person from the photo relaxing between takes. They are in their full original costume but have swapped their shoes for comfortable slippers. They are sitting on a couch on the edge of the set, perhaps scrolling on their phone or drinking water, with the bright lights and activity of the main set in the background. ${PRESERVE_IDENTITY_PROMPT} ${PRESERVE_OUTFIT_PROMPT}`,
                illustration: 'model-runway',
                imageTypeHint: 'Ideal para: Foto de cuerpo entero.',
                mediaType: 'image',
                requiresAspectRatio: true,
            },
        ],
    },
};
