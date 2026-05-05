
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import type { PhotoPack } from '../types';
import { PRESERVE_IDENTITY_PROMPT } from '../types';

export const stylePack: Record<string, PhotoPack> = {
    'style-transfer': {
        title: 'Transferencia de Estilo',
        description: 'Transforma tus fotos en ilustraciones o convierte tus dibujos en imágenes realistas.',
        images: [            {
                id: 501,
                key: 'master-style-converter',
                caption: 'Convertidor de Estilo Universal',
                prompt: `[PROMPT_CONTENT]`,
                illustration: 'default',
                imageTypeHint: 'Selecciona el estilo artístico de destino.',
                detailedDescription: "Transforma tu foto en diversos estilos artísticos: Anime, Webtoon, 3D o Cómic. La IA reinterpreta tus rasgos en el medio elegido.\nExplora diferentes universos visuales con una sola imagen.",
                mediaType: 'image',
                requiresAspectRatio: true,
                dynamicFields: [
                    {
                        type: 'select',
                        key: 'style_target',
                        label: 'Estilo de Destino',
                        options: [
                            // --- ANIME ---
                            { 
                                label: 'Anime Moderno (Pro JSON)', 
                                values: { 
                                    '[PROMPT_CONTENT]': `{
  "task": "style_transfer",
  "target_style": "modern_anime",
  "reference_preservation": "high",
  "directives": {
    "visuals": "Crisp digital line art, vibrant cel-shading, expressive large eyes.",
    "identity": "Adapt facial features to anime proportions but keep them recognizable (hair style, eye color, accessories).",
    "finish": "High-production anime movie still."
  }
} ${PRESERVE_IDENTITY_PROMPT}` 
                                } 
                            },
                            { label: 'Anime Moderno (Clásico)', values: { '[PROMPT_CONTENT]': `Transform the person in the provided photograph into an anime/manga character. The style should be reminiscent of modern Japanese animation, with clean lines, expressive eyes, and stylized hair. Maintain the key facial features and expression of the person. ${PRESERVE_IDENTITY_PROMPT}` } },

                            // --- WEBTOON ---
                            { 
                                label: 'Webtoon / Manhwa (Pro JSON)', 
                                values: { 
                                    '[PROMPT_CONTENT]': `{
  "task": "style_transfer",
  "target_style": "premium_webtoon",
  "directives": {
    "visuals": "Digital painting style, soft airbrush shading mixed with sharp cel-shading, glowing highlights.",
    "aesthetics": "Idealized beauty standards common in manhwa, glossy lips, detailed eyes.",
    "identity": "Keep the likeness but polished."
  }
} ${PRESERVE_IDENTITY_PROMPT}` 
                                } 
                            },
                            { label: 'Webtoon (Clásico)', values: { '[PROMPT_CONTENT]': `Create a bold and energetic digital caricature, merging the marked exaggeration of classic caricature with the clean, modern aesthetic of a webtoon. Use thick dynamic lineart and vibrant colors. ${PRESERVE_IDENTITY_PROMPT}` } },

                            // --- 3D / PIXAR ---
                            { 
                                label: 'Personaje 3D (Pro JSON)', 
                                values: { 
                                    '[PROMPT_CONTENT]': `{
  "task": "style_transfer",
  "target_style": "3d_animated_feature",
  "directives": {
    "visuals": "Rendered in the style of Pixar/Dreamworks. Subsurface scattering on skin, soft clay-like aesthetics, expressive shapes.",
    "lighting": "Cinematic 3D lighting, rim lights, soft global illumination.",
    "identity": "Caricatured but highly recognizable."
  }
} ${PRESERVE_IDENTITY_PROMPT}` 
                                } 
                            },
                            { label: 'Personaje 3D (Clásico)', values: { '[PROMPT_CONTENT]': `Reimagine the person in the photograph as a 3D animated character, in the style of a modern animated movie. The character should have exaggerated but appealing features, soft lighting, and a friendly expression. ${PRESERVE_IDENTITY_PROMPT}` } },

                            // --- COMIC ---
                            { 
                                label: 'Cómic Americano (Pro JSON)', 
                                values: { 
                                    '[PROMPT_CONTENT]': `{
  "task": "style_transfer",
  "target_style": "american_comic_book",
  "directives": {
    "visuals": "Heavy black ink outlines, cross-hatching shadows, bold colors.",
    "texture": "Halftone dots (Ben-Day dots) for shading.",
    "vibe": "Action-oriented, dramatic shadows."
  }
} ${PRESERVE_IDENTITY_PROMPT}` 
                                } 
                            },
                            { label: 'Cómic Americano (Clásico)', values: { '[PROMPT_CONTENT]': `Convert the person in the photograph into a classic American comic book character. The style should feature bold ink outlines, dynamic shading, halftone dot patterns for color, and a dramatic feel. ${PRESERVE_IDENTITY_PROMPT}` } },

                            // --- TRADITIONAL ART ---
                            { 
                                label: 'Boceto a Lápiz (Pro JSON)', 
                                values: { 
                                    '[PROMPT_CONTENT]': `{
  "task": "style_transfer",
  "target_style": "graphite_pencil_sketch",
  "directives": {
    "visuals": "Monochrome, visible pencil strokes, cross-hatching, smudged shading.",
    "paper": "Textured sketch paper background.",
    "identity": "Realistic proportions, high-fidelity sketch."
  }
} ${PRESERVE_IDENTITY_PROMPT}` 
                                } 
                            },
                            { label: 'Boceto a Lápiz (Clásico)', values: { '[PROMPT_CONTENT]': `Recreate the provided photograph as a detailed, realistic pencil sketch. The image should have a full range of tones from light gray to dark charcoal, with visible pencil textures. ${PRESERVE_IDENTITY_PROMPT}` } },

                            { 
                                label: 'Acuarela (Pro JSON)', 
                                values: { 
                                    '[PROMPT_CONTENT]': `{
  "task": "style_transfer",
  "target_style": "watercolor_painting",
  "directives": {
    "visuals": "Fluid wet-on-wet technique, pigment pooling, soft edges, paper grain visibility.",
    "colors": "Dreamy, slightly desaturated and translucent.",
    "identity": "Artistic interpretation preserving key features."
  }
} ${PRESERVE_IDENTITY_PROMPT}` 
                                } 
                            },
                            { label: 'Acuarela (Clásico)', values: { '[PROMPT_CONTENT]': `Transform the provided photograph into a beautiful watercolor painting. The image should have soft, blended colors, visible brush strokes, and the characteristic texture of watercolor paper. ${PRESERVE_IDENTITY_PROMPT}` } },
                        ]
                    }
                ]
            },
            {
                id: 502,
                key: 'style-transfer-from-image',
                caption: 'Transferir Estilo de Imagen',
                prompt: `This prompt is dynamically generated. The AI will analyze the style of the reference image and apply it to your photo.`,
                illustration: 'default',
                imageTypeHint: 'Funciona bien con cualquier tipo de foto.',
                detailedDescription: "Clona el estilo visual (colores, trazos, iluminación) de una imagen de referencia y lo aplica a tu foto. El resultado es una fusión artística única.\nSube una obra de arte o foto con un estilo muy marcado como referencia.",
                requiresSecondImage: true,
                mediaType: 'image',
                requiresAspectRatio: true,
            },
            {
                id: 503,
                key: 'sketchbook-journal',
                caption: 'Cuaderno de Dibujo',
                prompt: `Artist's field journal style, with a nostalgic 90s anime aesthetic. The ink line art must be extremely gestural, shaky, and made with the spontaneity of a quick sketch. Visibly imperfect and deliberately broken lines, suggested rather than defined details, and a hurried, almost scribbled and chaotic cross-hatch shading are required. The coloring should be expressive, with abundant watercolor brushstrokes, splatters, and stains in a mix of desaturated earth tones, greens, and vibrant reds. The color should be applied freely, intentionally bleeding and spilling well outside the outlines, enhancing the spontaneous and messy feel of a diary entry. The composition must be a dynamic single-page collage, like a double-page spread from an artist's sketchbook. It should feature multiple scenes and studies of the main character from the reference image, capturing different spontaneous moments. Include a mix of vignettes of varying sizes and orientations: a main sketch of the original pose, another where the person is laughing, a close-up of their expression, a quick doodle of them walking, etc. The scenes should overlap and be scattered organically across the page without defined frames, creating the feeling of visual notes taken in the moment. The overall atmosphere should be that of a fun and energetic memory, not melancholic; the spontaneous capture of a celebratory night. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'default',
                imageTypeHint: 'Funciona bien con cualquier tipo de foto.',
                detailedDescription: "Convierte tu foto en una página de diario artístico con bocetos, notas y manchas de acuarela. Estilo nostálgico y creativo.\nPerfecto para capturar recuerdos de una forma bohemia.",
                mediaType: 'image',
                requiresAspectRatio: true,
            }
        ]
    }
};
