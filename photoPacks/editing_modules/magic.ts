
import type { PhotoPack } from '../types';
import { PRESERVE_IDENTITY_PROMPT } from '../types';

export const magicPack: Record<string, PhotoPack> = {
    'magic-editor': {
        title: 'Editor Mágico',
        description: 'Modifica la realidad de tu foto: añade accesorios, cambia fondos o ajusta expresiones con precisión quirúrgica.',
        images: [
            {
                id: 201,
                key: 'master-magic-editor',
                caption: 'Varita Mágica (Master)',
                prompt: `[PROMPT_CONTENT]`,
                illustration: 'default',
                imageTypeHint: 'Selecciona la edición que deseas aplicar.',
                detailedDescription: "Realiza ediciones complejas: añadir accesorios, cambiar expresiones o modificar el fondo. La IA integra los cambios con realismo fotográfico.\nSelecciona la acción específica que deseas realizar.",
                mediaType: 'image',
                requiresAspectRatio: true,
                dynamicFields: [
                    {
                        type: 'select',
                        key: 'magic_action',
                        label: 'Acción de Edición',
                        options: [
                            // --- ACCESORIOS ---
                            { 
                                label: 'Añadir Gafas de Sol (Pro JSON)', 
                                values: { 
                                    '[PROMPT_CONTENT]': `{
  "task": "inpainting_addition",
  "target_object": "sunglasses",
  "directives": {
    "action": "Add a pair of high-end, stylish sunglasses to the subject's face.",
    "integration": "Ensure perfect anatomical fit on the nose bridge and ears. Match lighting, shadows, and reflections on the lenses with the environment.",
    "identity_preservation": "STRICT. Do not alter the jawline, mouth, or hair."
  }
} ${PRESERVE_IDENTITY_PROMPT}` 
                                } 
                            },
                            { label: 'Añadir Gafas de Sol (Clásico)', values: { '[PROMPT_CONTENT]': `Add a pair of stylish, modern sunglasses to the person in the photo. The sunglasses should fit their face realistically, with correct perspective, lighting, and reflections. ${PRESERVE_IDENTITY_PROMPT}` } },
                            
                            { 
                                label: 'Añadir Sombrero (Pro JSON)', 
                                values: { 
                                    '[PROMPT_CONTENT]': `{
  "task": "inpainting_addition",
  "target_object": "hat",
  "directives": {
    "action": "Add a stylish hat (fedora, beanie, or wide-brim depending on outfit context).",
    "integration": "The hat must sit naturally on the head, casting realistic shadows on the forehead. Adjust hair compression slightly if needed.",
    "identity_preservation": "STRICT. Do not alter the face."
  }
} ${PRESERVE_IDENTITY_PROMPT}` 
                                } 
                            },
                            { label: 'Añadir Sombrero (Clásico)', values: { '[PROMPT_CONTENT]': `Add a stylish hat (like a fedora or a beanie, whichever fits the context better) to the person in the photo. Ensure it fits realistically on their head with correct lighting and shadows. ${PRESERVE_IDENTITY_PROMPT}` } },

                            // --- RASGOS FÍSICOS ---
                            { 
                                label: 'Añadir Barba (Pro JSON)', 
                                values: { 
                                    '[PROMPT_CONTENT]': `{
  "task": "facial_feature_modification",
  "target_feature": "beard",
  "directives": {
    "action": "Generate a realistic, well-groomed beard and mustache.",
    "integration": "Texture and color must perfectly match the subject's eyebrows and hair roots. Follow the natural jawline contour.",
    "identity_preservation": "STRICT. The underlying bone structure must remain identical."
  }
} ${PRESERVE_IDENTITY_PROMPT}` 
                                } 
                            },
                            { label: 'Añadir Barba (Clásico)', values: { '[PROMPT_CONTENT]': `Add a realistic, well-groomed beard to the person in the photo. The beard style should suit their face shape, and the color and texture should match their hair. ${PRESERVE_IDENTITY_PROMPT}` } },

                            { 
                                label: 'Hacer Calvo (Pro JSON)', 
                                values: { 
                                    '[PROMPT_CONTENT]': `{
  "task": "hair_removal",
  "target_area": "head",
  "directives": {
    "action": "Remove all hair from the head to create a completely bald look.",
    "integration": "Reconstruct the skull shape anatomically. Skin tone and texture of the scalp must match the face perfectly, including lighting highlights.",
    "identity_preservation": "STRICT. Do not alter ears, forehead structure, or face."
  }
} ${PRESERVE_IDENTITY_PROMPT}` 
                                } 
                            },
                            { label: 'Hacer Calvo (Clásico)', values: { '[PROMPT_CONTENT]': `Realistically remove all hair from the person's head, making them look completely bald. Ensure the scalp looks natural with correct skin texture and lighting. ${PRESERVE_IDENTITY_PROMPT}` } },

                            { 
                                label: 'Añadir Tatuaje (Pro JSON)', 
                                values: { 
                                    '[PROMPT_CONTENT]': `{
  "task": "texture_overlay",
  "target_object": "tattoo",
  "directives": {
    "action": "Apply a realistic artistic tattoo to visible skin areas (arms or neck).",
    "integration": "The tattoo ink must look embedded in the skin (subsurface scattering), not floating on top. Follow the curvature of the muscles.",
    "identity_preservation": "STRICT."
  }
} ${PRESERVE_IDENTITY_PROMPT}` 
                                } 
                            },
                            { label: 'Añadir Tatuaje (Clásico)', values: { '[PROMPT_CONTENT]': `Add a realistic tattoo to the person's arm. The tattoo should wrap around the arm naturally, with correct perspective and skin texture. The style of the tattoo can be artistic, for example, a dragon or a floral pattern. ${PRESERVE_IDENTITY_PROMPT}` } },

                            // --- EXPRESIONES ---
                            { 
                                label: 'Expresión Feliz (Pro JSON)', 
                                values: { 
                                    '[PROMPT_CONTENT]': `{
  "task": "expression_transfer",
  "target_emotion": "happiness",
  "directives": {
    "action": "Change the facial expression to a genuine, warm smile.",
    "integration": "Adjust eyes to have a 'Duchenne marker' (smiling eyes). Ensure teeth look natural if visible. Do not distort identity.",
    "identity_preservation": "EXTREME. It must look like the SAME person smiling, not a different person."
  }
} ${PRESERVE_IDENTITY_PROMPT}` 
                                } 
                            },
                            { label: 'Expresión Feliz (Clásico)', values: { '[PROMPT_CONTENT]': `Subtly change the person's facial expression to a genuine, happy smile. The change should be realistic and maintain their identity. ${PRESERVE_IDENTITY_PROMPT}` } },

                            { 
                                label: 'Expresión Triste (Pro JSON)', 
                                values: { 
                                    '[PROMPT_CONTENT]': `{
  "task": "expression_transfer",
  "target_emotion": "sadness",
  "directives": {
    "action": "Change the facial expression to a melancholic, reflective look.",
    "integration": "Slightly drooping eyelids and mouth corners. Keep it subtle and cinematic, not cartoonishly sad.",
    "identity_preservation": "EXTREME."
  }
} ${PRESERVE_IDENTITY_PROMPT}` 
                                } 
                            },
                            { label: 'Expresión Triste (Clásico)', values: { '[PROMPT_CONTENT]': `Subtly change the person's facial expression to a sad or melancholic one. The change should be realistic and maintain their identity. ${PRESERVE_IDENTITY_PROMPT}` } },

                            // --- ENTORNO ---
                            { 
                                label: 'Fondo de Playa (Pro JSON)', 
                                values: { 
                                    '[PROMPT_CONTENT]': `{
  "task": "background_replacement",
  "target_environment": "sunny_beach",
  "directives": {
    "action": "Replace the background with a high-end tropical beach scene.",
    "integration": "CRITICAL: Relight the subject. Add warm sunlight reflections on skin and hair to match the bright beach environment. Fix edge halos.",
    "identity_preservation": "STRICT."
  }
} ${PRESERVE_IDENTITY_PROMPT}` 
                                } 
                            },
                            { label: 'Fondo de Playa (Clásico)', values: { '[PROMPT_CONTENT]': `Keep the person in the foreground exactly as they are, but replace the entire background with a beautiful, sunny beach scene. Adjust the lighting on the person to match the bright, outdoor lighting of the new background. ${PRESERVE_IDENTITY_PROMPT}` } },

                            { 
                                label: 'Fondo Ciudad Nocturna (Pro JSON)', 
                                values: { 
                                    '[PROMPT_CONTENT]': `{
  "task": "background_replacement",
  "target_environment": "cyberpunk_city_night",
  "directives": {
    "action": "Replace the background with a blurred, neon-lit city street at night.",
    "integration": "CRITICAL: Relight the subject. Cast colorful neon rim lights (blue/pink) on the subject's edges to match the background atmosphere.",
    "identity_preservation": "STRICT."
  }
} ${PRESERVE_IDENTITY_PROMPT}` 
                                } 
                            },
                            { label: 'Fondo Ciudad Nocturna (Clásico)', values: { '[PROMPT_CONTENT]': `Keep the person in the foreground exactly as they are, but replace the entire background with a vibrant, neon-lit city street at night. Adjust the lighting on the person to match the colorful, dramatic lighting of the new background. ${PRESERVE_IDENTITY_PROMPT}` } },

                            { 
                                label: 'Eliminar Personas (Pro JSON)', 
                                values: { 
                                    '[PROMPT_CONTENT]': `{
  "task": "distraction_removal",
  "target": "background_people",
  "directives": {
    "action": "Identify the MAIN SUBJECT and keep them intact. Erase all other people in the background.",
    "integration": "Inpaint the empty spaces realistically (extend walls, floor, scenery) where people were removed.",
    "identity_preservation": "STRICT for the main subject."
  }
}` 
                                } 
                            },
                            { label: 'Eliminar Personas (Clásico)', values: { '[PROMPT_CONTENT]': `Identify and remove all other people from the background of this photo, leaving only the main subject. Intelligently reconstruct the background where the people were removed to look natural and seamless.` } },
                        ]
                    }
                ]
            },
            { 
                id: 202,
                key: 'magic-editor-custom', 
                caption: 'Editor Personalizado', 
                prompt: `Carefully read the user's request and apply the edit to the photograph. The user's request is: "[EDIT_REQUEST]". The final result must be photorealistic and seamlessly integrated into the image. If the user is asking to modify the main person, make sure their core identity is preserved.`, 
                illustration: 'default', 
                imageTypeHint: 'El tipo de foto ideal depende de tu instrucción.', 
                detailedDescription: "Describe cualquier cambio que quieras hacer en la imagen mediante texto. La IA interpretará tu instrucción para editar la foto.\nSé específico con lo que quieres cambiar para mejores resultados.",
                mediaType: 'image', 
                requiresAspectRatio: true, 
                dynamicFields: [
                    {
                        type: 'text',
                        key: '[EDIT_REQUEST]',
                        label: 'Instrucción de Edición',
                        defaultValue: 'Añadir gafas de sol',
                        isOptional: true
                    }
                ]
            },
        ]
    }
};
