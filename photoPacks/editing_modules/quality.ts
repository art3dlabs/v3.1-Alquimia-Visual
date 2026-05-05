
import type { PhotoPack } from '../types';
import { PRESERVE_IDENTITY_PROMPT } from '../types';

export const qualityPack: Record<string, PhotoPack> = {
    'quality-enhancement': {
        title: 'Mejora de Calidad',
        description: 'Mejora la nitidez, la piel y los detalles de tus fotos con calidad profesional.',
        images: [
            {
                id: 301,
                key: 'beauty-upscale',
                caption: 'Piel Perfecta y Detalles',
                subcategory: 'Nitidez y Restauración',
                prompt: `Enhance and upscale images while maintaining exact composition and color. Remove blur and give skin a realistic, detailed appearance: defined pores, subtle fine lines, and natural transitions between shadows and highlights. Preserve light tones and backgrounds, and refine edge sharpness around eyes, eyelashes, lips, and locks of hair, giving portraits the look of premium beauty photography and natural, non-plastic skin. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'restore',
                imageTypeHint: 'Ideal para: Retratos que necesitan un acabado beauty profesional.',
                detailedDescription: "Mejora la textura de la piel y la nitidez general del rostro manteniendo la naturalidad. El resultado es un retrato de alta gama tipo editorial de belleza.\nIdeal para fotos con poco enfoque o que necesitan un 'glow up' profesional.",
                mediaType: 'image',
                requiresAspectRatio: true,
            },
            {
                id: 302,
                key: 'enhance-resolution',
                caption: 'Mejorar a Alta Resolución',
                subcategory: 'Nitidez y Restauración',
                prompt: `Enhance this image to high resolution. Dramatically improve sharpness, clarity, and bring out fine textures and details. Correct for any softness or digital noise, ensuring a crisp, clean, and photorealistic final image without over-sharpening. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'restore',
                imageTypeHint: 'Funciona bien con cualquier tipo de foto.',
                detailedDescription: "Aumenta drásticamente la resolución y recupera detalles perdidos en fotos borrosas o pixeladas. El resultado es una imagen nítida y limpia.\nPerfecto para rescatar fotos antiguas o de baja calidad.",
                mediaType: 'image',
                requiresAspectRatio: true,
            },
            {
                id: 303,
                key: 'ethereal-light-filter',
                caption: 'Filtros de Luz Etérea',
                subcategory: 'Atmósfera e Iluminación',
                prompt: `[LIGHTING_FILTER_PROMPT]`,
                illustration: 'restore',
                imageTypeHint: 'Aplica filtros de iluminación atmosférica y cinematográfica.',
                detailedDescription: "Aplica filtros de iluminación cinematográfica (atardecer, luna, bosque) sobre tu foto original. Transforma la atmósfera manteniendo al sujeto intacto.\nElige la iluminación que mejor se adapte al 'mood' que buscas.",
                mediaType: 'image',
                requiresAspectRatio: true,
                dynamicFields: [
                    {
                        type: 'select',
                        key: 'filter_selector',
                        label: 'Efecto de Iluminación',
                        options: [
                            { 
                                label: 'Tarde Dorada (Original)', 
                                values: { 
                                    '[LIGHTING_FILTER_PROMPT]': `Apply an ethereal lighting filter to the uploaded photo while fully preserving the original subject and background. Elevate the image using soft, dreamy sunlight similar to late-afternoon golden hour. Add diffused sunbeams striking the subject's skin, creating a glowing highlight on cheekbones, nose bridge, lips, and hair strands. Maintain clear separation between bright sunlit areas and soft, deep shadows to create a cinematic high-contrast mood. Inject subtle lens bloom, light haze, and a thin layer of atmospheric glow around the face and shoulders. Render skin with luminous translucency and gentle peachy tones. Enhance stray hair strands backlit by sunlight. Color-grade with slightly lowered saturation, and gentle film-like grain. Keep the overall background intact but allow sunlight flares and soft bokeh to wrap naturally around the subject. The final result should look like a soft, ethereal daydream-sunlit, delicate, and cinematic-while keeping every original detail of the photo unchanged except for lighting, glow, and color mood. Hard rule: Do not change the face and hairs of the subject.` 
                                } 
                            },
                            { 
                                label: 'Luna Mística (Plateado)', 
                                values: { 
                                    '[LIGHTING_FILTER_PROMPT]': `Apply a mystical moonlight filter to the uploaded photo while fully preserving the original subject and background. Elevate the image using soft, silvery moonlight similar to a clear night sky, with diffused moonbeams gently illuminating the subject's skin, creating a subtle glow on cheekbones, collarbones, and hair edges. Maintain a high-contrast balance between the cool, ethereal highlights and deep, velvety shadows to evoke a serene, otherworldly mood. Inject faint lens flare, a light mist, and a delicate atmospheric haze around the face and shoulders. Render the skin with a luminous, pale blue translucency and subtle cool undertones. Enhance any visible hair strands with a soft backlit shimmer. Color-grade with slightly desaturated blues and grays, and a fine film-like grain for a vintage feel. Keep the overall background intact but allow subtle moonlight reflections and soft bokeh to blend naturally around the subject. The final result should look like a tranquil, dreamlike night scene—mystical, delicate, and cinematic—while keeping every original detail of the photo unchanged except for lighting, glow, and color mood. Hard rule: Do not change the face and hairs of the subject.` 
                                } 
                            },
                            { 
                                label: 'Amanecer Pastel (Rosáceo)', 
                                values: { 
                                    '[LIGHTING_FILTER_PROMPT]': `Apply a soft pastel dawn filter to the uploaded photo while fully preserving the original subject and background. Elevate the image using gentle, rosy dawn light similar to early morning, with diffused rays softly kissing the subject's skin, creating a warm highlight on cheekbones, forehead, and lip edges. Maintain clear separation between the soft, glowing highlights and subtle, cool shadows to craft a peaceful, high-contrast atmosphere. Add a light bloom effect, a thin layer of morning fog, and a faint atmospheric glow around the face and shoulders. Render the skin with a luminous, peachy-pink translucency and delicate rosy tones. Enhance stray hair strands with a backlit, silky sheen. Color-grade with moderately lowered saturation, emphasizing pastel pinks and lavenders, and incorporate a subtle film-like grain for a nostalgic touch. Keep the overall background intact but allow soft dawn flares and natural bokeh to wrap gently around the subject. The final result should look like a serene, ethereal morning dream—light, delicate, and cinematic—while keeping every original detail of the photo unchanged except for lighting, glow, and color mood. Hard rule: Do not change the face and hairs of the subject.` 
                                } 
                            },
                            { 
                                label: 'Tormenta Dramática (Moody)', 
                                values: { 
                                    '[LIGHTING_FILTER_PROMPT]': `Apply a dramatic storm light filter to the uploaded photo while fully preserving the original subject and background. Elevate the image using intense, stormy overcast light similar to a brewing thunderstorm, with diffused, moody rays highlighting the subject's skin, creating sharp glows on cheekbones, jawline, and hair tips. Maintain a high-contrast dynamic between the stark, illuminated areas and deep, ominous shadows for a cinematic tension. Inject subtle rain streaks, a light haze, and a glowing atmospheric layer around the face and shoulders. Render the skin with a luminous, cool gray translucency and subtle stormy blue tones. Enhance stray hair strands with a wind-swept, backlit effect. Color-grade with slightly reduced saturation, emphasizing cool grays and blues, and add a fine, film-like grain for an authentic feel. Keep the overall background intact but allow storm flares and soft bokeh to integrate naturally around the subject. The final result should look like an intense, ethereal storm scene—dramatic, powerful, and cinematic—while keeping every original detail of the photo unchanged except for lighting, glow, and color mood. Hard rule: Do not change the face and hairs of the subject.` 
                                } 
                            },
                            { 
                                label: 'Atardecer Vibrante (Cálido)', 
                                values: { 
                                    '[LIGHTING_FILTER_PROMPT]': `Apply a vibrant sunset glow filter to the uploaded photo while fully preserving the original subject and background. Elevate the image using warm, vibrant sunset light similar to late-evening hues, with diffused golden-orange beams striking the subject's skin, creating radiant highlights on cheekbones, nose bridge, and hair strands. Maintain a high-contrast separation between the fiery bright areas and soft, fading shadows to produce a lively, cinematic vibe. Add subtle lens flare, a warm haze, and a gentle atmospheric glow around the face and shoulders. Render the skin with a luminous, golden translucency and rich amber tones. Enhance stray hair strands with a backlit, fiery shimmer. Color-grade with lightly lowered saturation, focusing on warm oranges and reds, and include a soft film-like grain for depth. Keep the overall background intact but allow sunset flares and natural bokeh to envelop the subject organically. The final result should look like a lively, ethereal sunset dream—vibrant, enchanting, and cinematic—while keeping every original detail of the photo unchanged except for lighting, glow, and color mood. Hard rule: Do not change the face and hairs of the subject.` 
                                } 
                            },
                            { 
                                label: 'Niebla del Bosque (Mágico)', 
                                values: { 
                                    '[LIGHTING_FILTER_PROMPT]': `Apply a magical forest mist filter to the uploaded photo while fully preserving the original subject and background. Elevate the image using enchanting, diffused forest light similar to a misty woodland at dusk, with soft green-tinted beams gently caressing the subject's skin, creating a mystical glow on cheekbones, shoulders, and hair edges. Maintain a high-contrast interplay between the ethereal highlights and deep, shadowy undergrowth for a fairy-tale mood. Inject subtle light particles, a light fog layer, and a faint atmospheric glow around the face and shoulders. Render the skin with a luminous, emerald translucency and gentle earthy tones. Enhance stray hair strands with a backlit, leafy shimmer. Color-grade with slightly desaturated greens and golds, and add a fine, film-like grain for a timeless effect. Keep the overall background intact but allow forest flares and soft bokeh to weave naturally around the subject. The final result should look like a whimsical, ethereal forest scene—magical, delicate, and cinematic—while keeping every original detail of the photo unchanged except for lighting, glow, and color mood. Hard rule: Do not change the face and hairs of the subject.` 
                                } 
                            },
                        ]
                    }
                ]
            },
            {
                id: 304,
                key: 'canon-ixus-210-emulation',
                caption: 'Vibe Cámara Compacta (Canon 2010)',
                subcategory: 'Atmósfera e Iluminación',
                prompt: `[CAMERA_PRESET_PROMPT] ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'default',
                imageTypeHint: 'Emula el look de las compactas de 2010. Ocupa todo el lienzo sin bordes.',
                detailedDescription: "Emula la estética 'digicam' de los años 2010 con colores cálidos y flash directo. El resultado es una foto nostálgica y auténtica.\nIdeal para dar un look retro a fotos modernas.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['4:3', '1:1', '3:2', '16:9', '9:16', '3:4'],
                dynamicFields: [
                    {
                        type: 'select',
                        key: 'preset_selector',
                        label: 'Ajuste de Cámara',
                        options: [
                            { 
                                label: 'Cálido y Nostálgico (Vibrante)', 
                                values: { 
                                    '[CAMERA_PRESET_PROMPT]': `Transform the uploaded photo to emulate a candid shot from a Canon IXUS 210 IS digital compact camera using its 14MP CCD sensor and DIGIC 4 processor. 

**COMPOSITION RULE:** 
Preserve the original subject scale and position exactly. DO NOT SHRINK THE IMAGE. The subject MUST fill the frame to the edges as in the original. NO black bars, NO letterboxing, NO pillarboxing. OCCUPY THE ENTIRE CANVAS area.

Apply these characteristics:
- Warm, vibrant color science with boosted saturation in reds/greens, slight yellow tint in highlights, and natural skin tones.
- Soft overall sharpness with gentle edge halation, minor corner softness, and subtle barrel distortion.
- Moderate contrast with lifted shadows (i-Contrast style), preserved highlights, and faint vignette.
- Fine CCD noise/grain at ISO 200-400 equivalent.
- Candid aesthetic: spontaneous feel, pure color II rendering, glossy 2010 point-and-shoot vibe.

Output as high-res JPEG, {aspectRatio} aspect ratio, no filters, no text overlays, no crops.` 
                                } 
                            },
                            { 
                                label: 'Neutro y Realista (Alta Nitidez)', 
                                values: { 
                                    '[CAMERA_PRESET_PROMPT]': `Transform the uploaded photo to emulate a candid shot from a Canon IXUS 210 IS digital compact camera using its 14MP CCD sensor and DIGIC 4 processor.

**COMPOSITION RULE:** 
Preserve the original subject scale and position exactly. DO NOT SHRINK THE IMAGE. The subject MUST fill the frame to the edges as in the original. NO black bars, NO letterboxing, NO pillarboxing. OCCUPY THE ENTIRE CANVAS area.

Apply these characteristics for a natural, unprocessed 2010 point-and-shoot look:
- Neutral, realistic color science with accurate saturation across all hues, no added tints.
- Highly detailed natural skin tones with visible texture, pores, and subtle imperfections.
- Increased overall sharpness with crisp edge definition, minimal softness or halation, and corrected barrel distortion.
- Balanced contrast with natural shadow detail, preserved highlights, no vignette.
- Minimal CCD noise/grain at ISO 200 equivalent for enhanced realism.
- Candid aesthetic: hyper-detailed eyes with clear iris patterns and lifelike sharpness.

Output as high-res JPEG, {aspectRatio} aspect ratio, completely without filters, effects, text overlays, or crops.` 
                                } 
                            },
                        ]
                    }
                ]
            },
        ]
    }
};
