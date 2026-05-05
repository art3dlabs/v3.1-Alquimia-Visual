
import type { PhotoPack } from '../types';

export const interiorPack: Record<string, PhotoPack> = {
    'interior-design': {
        title: 'Diseño de Interiores',
        description: 'Redecora cualquier habitación en segundos con el poder de la IA.',
        images: [
            { 
                id: 68,
                key: 'remove-furniture', 
                caption: 'Vaciar Habitación', 
                subcategory: 'Modificación de Espacios',
                prompt: 'Remove all furniture, decorations, and movable objects from this room, leaving only the structural elements like walls, floor, windows, and doors. The goal is an empty room, ready for redecoration. Reconstruct the areas that were previously obscured by furniture with matching floor and wall textures.', 
                illustration: 'interior', 
                imageTypeHint: 'Sube una foto de la habitación que quieres redecorar.', 
                detailedDescription: "Vacía digitalmente una habitación eliminando muebles, decoración y objetos móviles. Muestra el potencial real del espacio desnudo, ideal para planificar reformas, visualizar dimensiones o preparar una propiedad para la venta inmobiliaria.",
                mediaType: 'image', 
                requiresAspectRatio: true, 
            },
            { 
                id: 69,
                key: 'modern-style', 
                caption: 'Redecorar a Estilo Moderno', 
                subcategory: 'Tendencias de Decoración',
                prompt: 'Using the provided image of a room as a base, redecorate it in a modern style. Introduce furniture with clean lines, a neutral color palette with bold accent colors, and contemporary lighting fixtures. Keep the original room architecture intact.', 
                illustration: 'interior', 
                imageTypeHint: 'Sube una foto de la habitación que quieres redecorar.', 
                detailedDescription: "Redecora tu habitación con mobiliario de estilo moderno: líneas limpias, paleta de colores neutros con acentos audaces e iluminación contemporánea. Visualiza un cambio radical hacia un ambiente actual, funcional y sofisticado.",
                mediaType: 'image', 
                requiresAspectRatio: true, 
            },
            { 
                id: 70,
                key: 'bohemian-style', 
                caption: 'Redecorar a Estilo Bohemio', 
                subcategory: 'Tendencias de Decoración',
                prompt: 'Using the provided image of a room as a base, redecorate it in a bohemian style. Fill the space with eclectic patterns, natural materials like wood and rattan, lots of plants, and cozy, layered textiles like rugs and throw pillows. Keep the original room architecture intact.', 
                illustration: 'interior', 
                imageTypeHint: 'Sube una foto de la habitación que quieres redecorar.', 
                detailedDescription: "Aplica un estilo bohemio al espacio con patrones eclécticos, materiales naturales como madera y ratán, abundancia de plantas y textiles acogedores. Crea un ambiente relajado, artístico y lleno de vida.",
                mediaType: 'image', 
                requiresAspectRatio: true, 
            },
            { 
                id: 71,
                key: 'industrial-style', 
                caption: 'Redecorar a Estilo Industrial', 
                subcategory: 'Tendencias de Decoración',
                prompt: 'Using the provided image of a room as a base, transform it with an industrial design aesthetic. Use elements like exposed brick textures, metal fixtures, distressed wood furniture, and a neutral color scheme. Keep the original room architecture intact.', 
                illustration: 'interior', 
                imageTypeHint: 'Sube una foto de la habitación que quieres redecorar.', 
                detailedDescription: "Transforma tu espacio con una estética de diseño industrial: texturas de ladrillo visto, accesorios metálicos, madera envejecida y una paleta de colores neutros. Look urbano, robusto y moderno, perfecto para lofts o espacios amplios.",
                mediaType: 'image', 
                requiresAspectRatio: true, 
            },
            { 
                id: 72,
                key: 'scandinavian-style', 
                caption: 'Redecorar a Estilo Escandinavo', 
                subcategory: 'Tendencias de Decoración',
                prompt: 'Using the provided image of a room as a base, redecorate it in a Scandinavian style. Emphasize minimalism, functionality, and simplicity. Use a light color palette (whites, grays, and tans), natural wood tones, and cozy textiles. Keep the original room architecture intact.', 
                illustration: 'interior', 
                imageTypeHint: 'Sube una foto de la habitación que quieres redecorar.', 
                detailedDescription: "Redecora con el estilo escandinavo: minimalismo, funcionalidad, sencillez, paleta de colores luminosos (blancos, grises, tonos arena) y madera natural. Crea un hogar acogedor, luminoso y ordenado, ideal para espacios pequeños o modernos.",
                mediaType: 'image', 
                requiresAspectRatio: true, 
            },
        ]
    }
};
