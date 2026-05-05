
import type { PhotoPack } from '../types';

export const restorationPack: Record<string, PhotoPack> = {
    'photo-restoration': {
        title: 'Restauración de Fotos',
        description: 'Repara y colorea tus fotos antiguas o dañadas.',
        images: [
            { 
                id: 401,
                key: 'repair-scratches', 
                caption: 'Reparar Daños (Rasguños, Polvo)', 
                subcategory: 'Reparación y Color',
                prompt: 'Carefully restore this old photograph. Remove scratches, dust, creases, and tears. Adjust the contrast and brightness to improve clarity, but maintain the original monochrome or sepia tone. The final output must be a photograph.', 
                illustration: 'restore', 
                imageTypeHint: 'Funciona bien con cualquier foto antigua.', 
                detailedDescription: "Elimina rasguños, polvo y grietas de fotos físicas escaneadas. El resultado es la foto original limpia y restaurada.\nIdeal para recuperar recuerdos familiares dañados.",
                mediaType: 'image', 
                requiresAspectRatio: true, 
            },
            { 
                id: 402,
                key: 'colorize', 
                caption: 'Colorear Foto en Blanco y Negro', 
                subcategory: 'Reparación y Color',
                prompt: 'Colorize this black and white (or sepia) photograph. Use realistic and historically plausible colors for the time period. Ensure the skin tones are natural and the colors are vibrant but not oversaturated. The final output must be a photograph.', 
                illustration: 'restore', 
                imageTypeHint: 'Funciona bien con cualquier foto antigua.', 
                detailedDescription: "Añade color realista a fotografías en blanco y negro o sepia. La IA deduce los tonos de piel y ropa históricos.\nDa nueva vida a tus fotos antiguas.",
                mediaType: 'image', 
                requiresAspectRatio: true, 
            },
            { 
                id: 403,
                key: 'repair-and-colorize', 
                caption: 'Restaurar y Colorear Foto Antigua', 
                subcategory: 'Reparación y Color',
                prompt: 'Fully restore this old, damaged photograph. First, remove all physical damage like scratches, tears, and spots. Then, colorize the restored image with natural, realistic colors. The final output must be a photograph.', 
                illustration: 'restore', 
                imageTypeHint: 'Funciona bien con cualquier foto antigua.', 
                detailedDescription: "Realiza una restauración completa: repara daños físicos y colorea la imagen en un solo paso. El resultado es una foto moderna de un recuerdo antiguo.\nLa opción definitiva para restauración fotográfica.",
                mediaType: 'image', 
                requiresAspectRatio: true, 
            },
        ]
    }
};
