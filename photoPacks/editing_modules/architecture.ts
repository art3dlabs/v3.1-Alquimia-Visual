import { PhotoPack } from '../types';

export const architecturePack: Record<string, PhotoPack> = {
    'architectural-blueprint': {
        title: 'Plano Arquitectónico y Render (Blueprint & Render)',
        description: 'Crea una visualización arquitectónica dividida verticalmente: la mitad superior es un plano detallado (blueprint) y la mitad inferior es un render fotorrealista del exterior de la misma casa.',
        images: [
            {
                id: 1,
                key: 'blueprint-to-reality',
                caption: 'Plano a Realidad',
                subcategory: 'Visualización Arquitectónica',
                prompt: `Create a vertically split architectural visualization where the top half is a detailed blueprint and the bottom half is a photorealistic exterior of the exact same house, ensuring perfect structural consistency.

Composition:
- Layout: vertical split (top blueprint, bottom real photo)
- Aspect Ratio: 3:4
- Alignment: bottom image must strictly match the blueprint layout above (no added or missing structures)

Top Section (Blueprint):
- Type: architectural blueprint
- Style: clean CAD-style drawing
- Details: clearly labeled rooms ([ROOMS]), garage placement, pool placement (clearly outside structure), walls, doors, windows accurately marked, dimension lines on outer walls, furniture layout hints
- Color: monochrome or soft beige technical drawing style

Bottom Section (Render):
- Type: photorealistic exterior render
- Constraint: must exactly match blueprint structure
- Requirements: house shape identical to blueprint, window and door placement identical, garage location consistent, pool visible and correctly positioned, no extra rooms or architectural changes
- Style: modern residential house
- Materials: [MATERIALS]

Environment:
- Setting: [ENVIRONMENT]
- Details: clean driveway leading to garage, landscaped garden, pool area matching blueprint, natural outdoor lighting

Lighting:
- Type: [LIGHTING]
- Effect: soft shadows, realistic sunlight, clear visibility of structure

Rendering:
- Style Keywords: architectural visualization, blueprint to reality, house exterior render, CAD drawing, realistic architecture
- Realism: highly photorealistic bottom, precise technical top
- Detail Level: very high
- Aspect Ratio: --ar 3:4`,
                illustration: 'building',
                imageTypeHint: 'Ideal para: Diseños de casas, conceptos arquitectónicos.',
                detailedDescription: 'Genera una imagen dividida: arriba el plano técnico y abajo el render 3D hiperrealista de la casa. **Cómo usar:** Simplemente selecciona este efecto y genera. Puedes personalizar las habitaciones, materiales, entorno y luz usando los selectores.',
                mediaType: 'image',
                requiresAspectRatio: true,
                dynamicFields: [
                    {
                        key: '[ROOMS]',
                        label: 'Habitaciones (Rooms)',
                        type: 'select',
                        options: [
                            { label: 'Estándar (Bedrooms, Living, Kitchen)', values: { '[ROOMS]': 'bedrooms, living room, kitchen, bathrooms' } },
                            { label: 'Lujo (Home Theater, Gym, Office)', values: { '[ROOMS]': 'master suite, home theater, gym, home office, open kitchen' } },
                            { label: 'Cabaña (Loft, Great Room)', values: { '[ROOMS]': 'loft bedroom, great room, rustic kitchen, mudroom' } }
                        ]
                    },
                    {
                        key: '[MATERIALS]',
                        label: 'Materiales (Materials)',
                        type: 'select',
                        options: [
                            { label: 'Concreto y Vidrio (Concrete & Glass)', values: { '[MATERIALS]': 'concrete or stucco walls, glass windows, wood or metal accents' } },
                            { label: 'Madera y Piedra (Wood & Stone)', values: { '[MATERIALS]': 'natural wood siding, stone accents, large glass windows' } },
                            { label: 'Ladrillo y Acero (Brick & Steel)', values: { '[MATERIALS]': 'exposed brick walls, black steel window frames, industrial accents' } }
                        ]
                    },
                    {
                        key: '[ENVIRONMENT]',
                        label: 'Entorno (Environment)',
                        type: 'select',
                        options: [
                            { label: 'Suburbano (Suburban)', values: { '[ENVIRONMENT]': 'suburban or modern residential area' } },
                            { label: 'Bosque (Forest)', values: { '[ENVIRONMENT]': 'lush forest clearing surrounded by tall pine trees' } },
                            { label: 'Playa (Beachfront)', values: { '[ENVIRONMENT]': 'beachfront property with sand and ocean views' } }
                        ]
                    },
                    {
                        key: '[LIGHTING]',
                        label: 'Iluminación (Lighting)',
                        type: 'select',
                        options: [
                            { label: 'Luz de Día (Natural Daylight)', values: { '[LIGHTING]': 'natural daylight' } },
                            { label: 'Atardecer (Golden Hour)', values: { '[LIGHTING]': 'warm golden hour sunset lighting' } },
                            { label: 'Noche (Night/Twilight)', values: { '[LIGHTING]': 'twilight with warm interior lights glowing through windows' } }
                        ]
                    }
                ]
            }
        ]
    },
    'interior-blueprint': {
        title: 'Plano de Planta e Interior (Floor Plan & Render)',
        description: 'Crea una visualización arquitectónica dividida horizontalmente: la mitad izquierda es un plano de planta detallado y la mitad derecha es un render fotorrealista del interior.',
        images: [
            {
                id: 2,
                key: 'plan-to-interior',
                caption: 'Plano a Interior',
                subcategory: 'Planos de Interior',
                prompt: `Split composition image, left and right halves clearly divided.

Left Half:
Highly detailed architectural floor plan illustration in a modern minimalist style, matching the attached reference. Top-down view residential layout with labeled spaces including [ROOMS]. Neutral beige and warm gray color palette, clean linework, soft shadows, subtle textures, interior-design presentation style. Editorial architectural visualization, flat-lay blueprint aesthetic with furniture placement visible.

Right Half:
Ultra-realistic interior photograph of the [TARGET_ROOM] shown in the left-side floor plan. The [TARGET_ROOM] is fully furnished and spatially accurate to the plan: [FURNITURE], warm wooden flooring, neutral walls, natural light entering through large windows. [STYLE] interior design with earthy tones, soft lighting, realistic materials, and lived-in details.

The right half should feel like a real photograph taken inside the house, while the left half remains a clean architectural drawing. Both halves align visually, clearly showing concept vs reality.

Style & Mood:
Architectural visualization meets real interior photography
Modern, warm, elegant residential design
Clean, professional, design-studio presentation
Concept-to-execution comparison

Lighting & Color:
Left: Flat, even lighting, neutral tones
Right: Natural daylight, soft shadows, warm highlights
Consistent color harmony between plan and room

Camera & Technical Details:
Left: Top-down orthographic view
Right: Interior wide-angle lens, eye-level perspective
High resolution, sharp details, realistic textures

Negative Prompt:
Cartoon style, low detail, cluttered interior, mismatched layout, unrealistic proportions, harsh lighting, exaggerated colors, text overlays, watermarks`,
                illustration: 'layout-template',
                imageTypeHint: 'Ideal para: Diseño de interiores, planos de planta.',
                detailedDescription: 'Genera una imagen dividida: a la izquierda el plano de planta y a la derecha el render 3D hiperrealista del interior. **Cómo usar:** Selecciona este efecto y genera. Puedes personalizar las habitaciones, la sala objetivo, el estilo y los muebles.',
                mediaType: 'image',
                requiresAspectRatio: true,
                dynamicFields: [
                    {
                        key: '[ROOMS]',
                        label: 'Habitaciones (Rooms)',
                        type: 'select',
                        options: [
                            { label: 'Estándar (Living, Dining, Kitchen, Beds)', values: { '[ROOMS]': 'living room, dining area, open kitchen, bedrooms, foyer, verandah, bay windows, and circulation paths' } },
                            { label: 'Estudio/Loft (Open Plan, Studio)', values: { '[ROOMS]': 'open plan living area, kitchenette, sleeping alcove, modern bathroom, and balcony' } },
                            { label: 'Lujo (Lounge, Chef Kitchen, Suite)', values: { '[ROOMS]': 'formal lounge, chef kitchen, grand dining, master suite, walk-in closet, and terrace' } }
                        ]
                    },
                    {
                        key: '[TARGET_ROOM]',
                        label: 'Habitación a Renderizar',
                        type: 'select',
                        options: [
                            { label: 'Sala de Estar (Living Room)', values: { '[TARGET_ROOM]': 'living room' } },
                            { label: 'Dormitorio (Bedroom)', values: { '[TARGET_ROOM]': 'master bedroom' } },
                            { label: 'Cocina (Kitchen)', values: { '[TARGET_ROOM]': 'open kitchen' } }
                        ]
                    },
                    {
                        key: '[FURNITURE]',
                        label: 'Mobiliario (Furniture)',
                        type: 'select',
                        options: [
                            { label: 'Sofá Curvo y Mesa Central', values: { '[FURNITURE]': 'curved sofa arrangement, central coffee table, soft area rug' } },
                            { label: 'Minimalista y Despejado', values: { '[FURNITURE]': 'minimalist low-profile seating, sleek media console, geometric rug' } },
                            { label: 'Clásico y Acogedor', values: { '[FURNITURE]': 'plush armchairs, traditional fireplace, vintage patterned rug' } }
                        ]
                    },
                    {
                        key: '[STYLE]',
                        label: 'Estilo de Interior (Style)',
                        type: 'select',
                        options: [
                            { label: 'Moderno y Acogedor', values: { '[STYLE]': 'Modern, cozy, contemporary' } },
                            { label: 'Industrial', values: { '[STYLE]': 'Industrial, raw, urban' } },
                            { label: 'Escandinavo', values: { '[STYLE]': 'Scandinavian, bright, airy' } }
                        ]
                    }
                ]
            }
        ]
    }
};
