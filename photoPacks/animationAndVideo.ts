
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import type { PhotoPack } from './types';

export const animationAndVideoPacks: Record<string, PhotoPack> = {
    'video-generation': {
        title: 'Creación de Video Corto',
        description: 'Dale vida a tus fotos creando videos cortos con movimiento, usando un prompt para guiar la animación.',
        images: [
            {
                id: 16,
                key: 'animate-main-photo',
                caption: 'Animar Mi Foto',
                subcategory: 'Animación de Foto',
                prompt: 'Animate this image, bringing the person and scene to life with subtle, realistic motion. [ANIMATION_PROMPT]',
                illustration: 'video',
                imageTypeHint: 'Funciona bien con cualquier tipo de foto.',
                detailedDescription: "Transforma tus fotos estáticas en cautivadores videos cortos con movimiento sutil, fluido y realista. La IA analiza la composición de la imagen para inferir la dinámica natural de la escena. Ideal para dar vida a retratos, paisajes o momentos especiales. Sube cualquier imagen para verla cobrar vida.",
                mediaType: 'video',
                requiresAspectRatio: true,
                supportedAspectRatios: ['16:9', '9:16'],
                dynamicFields: [
                    {
                        type: 'text',
                        key: '[ANIMATION_PROMPT]',
                        label: 'Instrucción de Animación',
                        defaultValue: 'The person smiles and waves at the camera',
                        isOptional: true
                    }
                ]
            },
            {
                id: 17,
                key: 'animate-new-photo',
                caption: 'Animar desde Imagen',
                subcategory: 'Animación de Foto',
                prompt: 'Animate this image, bringing the person and scene to life with subtle, realistic motion. [ANIMATION_PROMPT]',
                illustration: 'video',
                imageTypeHint: 'Funciona bien con cualquier tipo de foto.',
                detailedDescription: "Sube una imagen externa y dale vida mediante animación. Utiliza un prompt de texto descriptivo para guiar y controlar el tipo de movimiento deseado. Ideal para animar paisajes, retratos estáticos o composiciones artísticas con un toque personalizado.",
                requiresSecondImage: true,
                mediaType: 'video',
                requiresAspectRatio: true,
                supportedAspectRatios: ['16:9', '9:16'],
                dynamicFields: [
                    {
                        type: 'text',
                        key: '[ANIMATION_PROMPT]',
                        label: 'Instrucción de Animación',
                        defaultValue: 'The person smiles and waves at the camera',
                        isOptional: true
                    }
                ]
            }
        ]
    }
};
