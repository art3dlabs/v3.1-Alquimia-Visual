
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import type { PhotoPack, PhotoConfig } from './types';
import { PRESERVE_IDENTITY_PROMPT } from './types';

export const timeTravelAndFantasyPacks: Record<string, PhotoPack> = {
    'age-progression': {
        title: 'Línea de Tiempo (Edad)',
        description: 'Viaja a través de tu propia vida. Unifica tu identidad con la estética de cada etapa vital.',
        images: [
            {
                id: 93,
                key: 'master-age-progression',
                caption: 'Línea de Vida (Master)',
                prompt: `[PROMPT_CONTENT] \n\n${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'time-travel',
                imageTypeHint: 'Selecciona la edad objetivo. El estilo cambiará a fotos casuales y realistas.',
                detailedDescription: "Viaja a través de tu propia vida visualizando versiones realistas de ti mismo en diferentes edades, desde la niñez hasta la vejez. Mantiene la identidad facial intacta.\nSube una foto actual con buena iluminación.",
                mediaType: 'image',
                requiresAspectRatio: true,
                subcategory: 'Línea de Vida (Edad)',
                dynamicFields: [
                    {
                        type: 'select',
                        key: '[PROMPT_CONTENT]',
                        label: 'Edad Objetivo',
                        isAdvanced: true,
                        options: [
                            { label: 'Niño/a (8 años)', values: { '[PROMPT_CONTENT]': `Realistically reimagine the person in the photo as an 8-year-old child. The portrait should capture a child's features like smoother skin and a rounder face, but it's essential to maintain the core facial identity and recognizable features from the original photo.` } },
                            { label: 'Adolescente (15 años)', values: { '[PROMPT_CONTENT]': `Transform the person in the photo into a 15-year-old teenager. The image should reflect teenage features and style, while ensuring the person's core facial structure and identity remain clearly identifiable and an exact match to the source photo.` } },
                            { label: 'Adulto Joven (30 años)', values: { '[PROMPT_CONTENT]': `Generate a photorealistic portrait of the person in the photo as a 30-year-old adult. The image should show them in their prime, with subtle signs of maturity.` } },
                            { label: 'Madurez (50 años)', values: { '[PROMPT_CONTENT]': `Reimagine the person in the photo as a 50-year-old. The portrait should show natural signs of aging suitable for this age, such as fine lines, while keeping their fundamental facial identity perfectly intact and recognizable.` } },
                            { label: 'Vejez (80 años)', values: { '[PROMPT_CONTENT]': `Create a photorealistic portrait of the person in the photo as an 80-year-old. Show graceful aging with features like wrinkles, thinner hair, and age spots, but ensure the person's unique facial identity is completely preserved and recognizable.` } }
                        ]
                    }
                ]
            },
            { id: 94, key: 'age-8', caption: 'Edad: 8 Años', prompt: `Realistically reimagine the person in the photo as an 8-year-old child. The portrait should capture a child's features like smoother skin and a rounder face, but it's essential to maintain the core facial identity and recognizable features from the original photo. ${PRESERVE_IDENTITY_PROMPT}`, illustration: 'time-travel', imageTypeHint: 'Ideal para: Foto de cara.', detailedDescription: "Visualízate como un niño de 8 años.", mediaType: 'image', requiresAspectRatio: true, subcategory: 'Edad Mejorada' },
            { id: 95, key: 'age-15', caption: 'Edad: 15 Años', prompt: `Transform the person in the photo into a 15-year-old teenager. The image should reflect teenage features and style, while ensuring the person's core facial structure and identity remain clearly identifiable and an exact match to the source photo. ${PRESERVE_IDENTITY_PROMPT}`, illustration: 'time-travel', imageTypeHint: 'Ideal para: Foto de cara.', detailedDescription: "Tu versión adolescente de 15 años.", mediaType: 'image', requiresAspectRatio: true, subcategory: 'Edad Mejorada' },
            { id: 96, key: 'age-30', caption: 'Edad: 30 Años', prompt: `Generate a photorealistic portrait of the person in the photo as a 30-year-old adult. The image should show them in their prime, with subtle signs of maturity. ${PRESERVE_IDENTITY_PROMPT}`, illustration: 'time-travel', imageTypeHint: 'Ideal para: Foto de cara.', detailedDescription: "Tu versión en la plenitud de los 30 años.", mediaType: 'image', requiresAspectRatio: true, subcategory: 'Edad Mejorada' },
            { id: 97, key: 'age-50', caption: 'Edad: 50 Años', prompt: `Reimagine the person in the photo as a 50-year-old. The portrait should show natural signs of aging suitable for this age, such as fine lines, while keeping their fundamental facial identity perfectly intact and recognizable. ${PRESERVE_IDENTITY_PROMPT}`, illustration: 'time-travel', imageTypeHint: 'Ideal para: Foto de cara.', detailedDescription: "Proyección realista a los 50 años.", mediaType: 'image', requiresAspectRatio: true, subcategory: 'Edad Mejorada' },
            { id: 98, key: 'age-80', caption: 'Edad: 80 Años', prompt: `Create a photorealistic portrait of the person in the photo as an 80-year-old. Show graceful aging with features like wrinkles, thinner hair, and age spots, but ensure the person's unique facial identity is completely preserved and recognizable. ${PRESERVE_IDENTITY_PROMPT}`, illustration: 'time-travel', imageTypeHint: 'Ideal para: Foto de cara.', detailedDescription: "Proyección realista a los 80 años.", mediaType: 'image', requiresAspectRatio: true, subcategory: 'Edad Mejorada' },
            {
                id: 128,
                key: 'childhood-recreation-1997-2026',
                caption: 'Recreación Emocional (Antes vs Ahora)',
                prompt: `Professional, hyper-realistic, single-shot studio photograph, 4:5 aspect ratio.
A single, non-split scene showing two versions of the same person interacting naturally within the same space.
Version 1 (Child): Small child version of the person, using exact hair color, texture, and facial features from the source photo, wearing a light grey t-shirt and blue jeans, looking directly at the camera with an innocent smile so the face is clearly visible. "Antes" is written in subtle text above.
Version 2 (Present): Present-day version of the person, wearing a white t-shirt and blue jeans, sitting with hands under chin, looking at the child version with a soft, calm, loving smile. "Ahora" is written in subtle text above.
Studio background: Plain, soft, minimal.
Lighting: Soft, cinematic, warm, professional, emotional photography, focusing on feelings and deep visual communication between the two versions.
CRITICAL IDENTITY AND ATTRIBUTE PRESERVATION:
1. The child version MUST be a direct, proportionally accurate younger version of the person in the source photo, using the exact hair color, texture, and unique facial features (e.g., specific mole, eye shape, nose shape) from the source photo, not a generic child face.
2. The present-day version MUST be an exact match to the source photo face.
3. Both versions must seamlessly coexist in the same space without any dividers, interacting naturally. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'time-travel',
                imageTypeHint: 'Ideal para: Retratos emocionales.',
                detailedDescription: "Una recreación emocional que une tu versión joven (Antes) con tu yo actual (Ahora) en un estudio fotográfico. Mantén la identidad real en ambas versiones.",
                mediaType: 'image',
                requiresAspectRatio: true,
                supportedAspectRatios: ['4:5'],
                subcategory: 'Recreación Emocional'
            },
            {
                id: 141,
                key: 'selfie-with-younger-self',
                caption: 'Selfie con mi Yo Joven',
                prompt: `A hyper-realistic cinematic selfie photograph of the exact same person from the reference photo — preserving his real facial features, skin tone, eye shape, jawline, and ethnicity precisely — holding a phone and smiling warmly at the camera, standing side by side with his younger self (approximately 7–10 years old), who has the identical face but as a child. Same DNA, same eyes, same bone structure — just younger. Both are mid-laugh in a genuine joyful moment. Soft natural window light from the left. Slight selfie-angle fisheye perspective. Background is a softly blurred warm indoor golden hour setting. Both figures sharply in focus. Ultra-photorealistic, 8K, cinematic color grading, shot on iPhone 15 Pro style sensor, no text overlays. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'time-travel',
                imageTypeHint: 'Ideal para: Retratos divertidos y nostálgicos.',
                detailedDescription: "Un selfie cinematográfico capturando un momento de risas entre tu yo actual y tu versión de niño (7-10 años). Ultra realista, estilo iPhone 15 Pro.",
                mediaType: 'image',
                requiresAspectRatio: true,
                subcategory: 'Recreación Emocional'
            },
        ]
    },
    'time-travel': {
        title: 'Viajero del Tiempo',
        description: 'Transpórtate a cualquier época de la historia con vestuario y estilo fotográfico auténtico.',
        images: [
            {
                id: 99,
                key: 'master-time-travel',
                caption: 'Máquina del Tiempo (Universal)',
                prompt: `[PROMPT_CONTENT]`,
                illustration: 'time-travel',
                imageTypeHint: 'Elige tu destino temporal.',
                detailedDescription: "Viaja a cualquier época histórica, desde el Antiguo Egipto hasta el futuro Cyberpunk. La IA adapta tu ropa y el entorno.\nSelecciona una era para comenzar tu viaje.",
                mediaType: 'image',
                requiresAspectRatio: true,
                subcategory: 'Viajes en el Tiempo (Histórico)',
                dynamicFields: [
                    {
                        type: 'select',
                        key: '[PROMPT_CONTENT]',
                        label: 'Época de Destino',
                        isAdvanced: true,
                        options: [
                            { label: 'Años 20 (Roaring 20s)', values: { '[PROMPT_CONTENT]': `Transport the person to the Roaring Twenties. They should be dressed in flapper or jazz-age attire, with an appropriate hairstyle and setting. ${PRESERVE_IDENTITY_PROMPT}` } },
                            { label: 'Era Victoriana', values: { '[PROMPT_CONTENT]': `Create a Victorian-era portrait of the person. They should be wearing formal, ornate 19th-century clothing with a serious expression, typical of portraits from that time. ${PRESERVE_IDENTITY_PROMPT}` } },
                            { label: 'Renacimiento', values: { '[PROMPT_CONTENT]': `Reimagine the person as a subject of a Renaissance painting. The lighting should be soft (sfumato), the clothing should be period-appropriate, and the style should mimic an oil painting by a master like Leonardo da Vinci. ${PRESERVE_IDENTITY_PROMPT}` } },
                            { label: 'Antiguo Egipto', values: { '[PROMPT_CONTENT]': `Transform the person into a noble from Ancient Egypt. They should be depicted with traditional Egyptian clothing, kohl eyeliner, and jewelry. ${PRESERVE_IDENTITY_PROMPT}` } },
                            { label: 'Imperio Romano', values: { '[PROMPT_CONTENT]': `Depict the person as a citizen of the Roman Empire, perhaps wearing a toga or stola, against a backdrop of classical Roman architecture. ${PRESERVE_IDENTITY_PROMPT}` } },
                            { label: 'Vikingo', values: { '[PROMPT_CONTENT]': `Reimagine the person as a fierce Viking warrior. The image should feature braided hair, leather and fur clothing, and a rugged, northern landscape in the background. ${PRESERVE_IDENTITY_PROMPT}` } },
                            { label: 'Pirata', values: { '[PROMPT_CONTENT]': `Turn the person into a swashbuckling pirate captain from the Golden Age of Piracy. The look should include a classic pirate hat, weathered clothing, and a ship setting. ${PRESERVE_IDENTITY_PROMPT}` } },
                            { label: 'Lejano Oeste', values: { '[PROMPT_CONTENT]': `Create a sepia-toned photograph of the person as a character from the American Wild West, such as a cowboy, sheriff, or saloon owner. ${PRESERVE_IDENTITY_PROMPT}` } },
                            { label: 'Caballero Medieval', values: { '[PROMPT_CONTENT]': `Transform the person into a noble medieval knight, clad in shining armor. The setting could be a castle or a tournament ground. ${PRESERVE_IDENTITY_PROMPT}` } },
                            { label: 'Futurista', values: { '[PROMPT_CONTENT]': `Project the person into a futuristic, cyberpunk world. They should be wearing high-tech clothing with neon lighting and a futuristic cityscape in the background. ${PRESERVE_IDENTITY_PROMPT}` } },
                        ]
                    }
                ]
            },
            { id: 100, key: 'roaring-20s', caption: 'Años 20', prompt: `Transport the person to the Roaring Twenties. They should be dressed in flapper or jazz-age attire, with an appropriate hairstyle and setting. ${PRESERVE_IDENTITY_PROMPT}`, illustration: 'time-travel', imageTypeHint: 'Ideal para: Retratos con estilo.', detailedDescription: "Estilo Gran Gatsby y Jazz Age.", mediaType: 'image', requiresAspectRatio: true, subcategory: 'Viajes en el Tiempo (Histórico)' },
            { id: 101, key: 'victorian', caption: 'Era Victoriana', prompt: `Create a Victorian-era portrait of the person. They should be wearing formal, ornate 19th-century clothing with a serious expression, typical of portraits from that time. ${PRESERVE_IDENTITY_PROMPT}`, illustration: 'time-travel', imageTypeHint: 'Ideal para: Retratos serios y formales.', detailedDescription: "Retrato clásico del siglo XIX.", mediaType: 'image', requiresAspectRatio: true, subcategory: 'Viajes en el Tiempo (Histórico)' },
            { id: 102, key: 'renaissance', caption: 'Renacimiento', prompt: `Reimagine the person as a subject of a Renaissance painting. The lighting should be soft (sfumato), the clothing should be period-appropriate, and the style should mimic an oil painting by a master like Leonardo da Vinci. ${PRESERVE_IDENTITY_PROMPT}`, illustration: 'time-travel', imageTypeHint: 'Ideal para: Poses clásicas.', detailedDescription: "Estilo pictórico de Leonardo da Vinci.", mediaType: 'image', requiresAspectRatio: true, subcategory: 'Viajes en el Tiempo (Histórico)' },
            { id: 103, key: 'ancient-egypt', caption: 'Antiguo Egipto', prompt: `Transform the person into a noble from Ancient Egypt. They should be depicted with traditional Egyptian clothing, kohl eyeliner, and jewelry. ${PRESERVE_IDENTITY_PROMPT}`, illustration: 'time-travel', imageTypeHint: 'Ideal para: Perfil o frente.', detailedDescription: "Nobleza egipcia con joyas y maquillaje.", mediaType: 'image', requiresAspectRatio: true, subcategory: 'Viajes en el Tiempo (Histórico)' },
            { id: 104, key: 'roman-empire', caption: 'Imperio Romano', prompt: `Depict the person as a citizen of the Roman Empire, perhaps wearing a toga or stola, against a backdrop of classical Roman architecture. ${PRESERVE_IDENTITY_PROMPT}`, illustration: 'time-travel', imageTypeHint: 'Ideal para: Poses estatuarias.', detailedDescription: "Ciudadano romano con toga clásica.", mediaType: 'image', requiresAspectRatio: true, subcategory: 'Viajes en el Tiempo (Histórico)' },
            { id: 105, key: 'viking', caption: 'Vikingo/a', prompt: `Reimagine the person as a fierce Viking warrior. The image should feature braided hair, leather and fur clothing, and a rugged, northern landscape in the background. ${PRESERVE_IDENTITY_PROMPT}`, illustration: 'time-travel', imageTypeHint: 'Ideal para: Retratos intensos.', detailedDescription: "Guerrero nórdico con pieles y trenzas.", mediaType: 'image', requiresAspectRatio: true, subcategory: 'Viajes en el Tiempo (Histórico)' },
            { id: 106, key: 'pirate', caption: 'Pirata', prompt: `Turn the person into a swashbuckling pirate captain from the Golden Age of Piracy. The look should include a classic pirate hat, weathered clothing, and a ship setting. ${PRESERVE_IDENTITY_PROMPT}`, illustration: 'time-travel', imageTypeHint: 'Ideal para: Poses aventureras.', detailedDescription: "Capitán pirata en alta mar.", mediaType: 'image', requiresAspectRatio: true, subcategory: 'Viajes en el Tiempo (Histórico)' },
            { id: 107, key: 'wild-west', caption: 'Lejano Oeste', prompt: `Create a sepia-toned photograph of the person as a character from the American Wild West, such as a cowboy, sheriff, or saloon owner. ${PRESERVE_IDENTITY_PROMPT}`, illustration: 'time-travel', imageTypeHint: 'Ideal para: Retratos con sombrero.', detailedDescription: "Estilo Western en tono sepia.", mediaType: 'image', requiresAspectRatio: true, subcategory: 'Viajes en el Tiempo (Histórico)' },
            { id: 108, key: 'medieval-knight', caption: 'Caballero Medieval', prompt: `Transform the person into a noble medieval knight, clad in shining armor. The setting could be a castle or a tournament ground. ${PRESERVE_IDENTITY_PROMPT}`, illustration: 'time-travel', imageTypeHint: 'Ideal para: Poses heroicas.', detailedDescription: "Armadura brillante y castillos.", mediaType: 'image', requiresAspectRatio: true, subcategory: 'Viajes en el Tiempo (Histórico)' },
            { id: 109, key: 'futuristic', caption: 'Futurista', prompt: `Project the person into a futuristic, cyberpunk world. They should be wearing high-tech clothing with neon lighting and a futuristic cityscape in the background. ${PRESERVE_IDENTITY_PROMPT}`, illustration: 'time-travel', imageTypeHint: 'Ideal para: Retratos modernos.', detailedDescription: "Estética Cyberpunk y neón.", mediaType: 'image', requiresAspectRatio: true, subcategory: 'Eras Históricas' },
            {
                id: 110,
                key: 'decades-prompt',
                caption: 'Décadas (50s - 2000s)',
                prompt: `Reimagine the person in this photo in the style of the [DECADE]. This includes clothing, hairstyle, photo quality, and the overall aesthetic of that decade. The output must be a photorealistic image. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'time-travel',
                imageTypeHint: 'Escribe la década (ej: 1980s, 90s grunge).',
                detailedDescription: "Viaja a cualquier década reciente. La IA ajusta el look y la calidad de la foto a la época.\nEscribe el año o década en el campo de texto.",
                mediaType: 'image',
                requiresAspectRatio: true,
                subcategory: 'Eras Históricas',
                dynamicFields: [
                    {
                        type: 'text',
                        key: '[DECADE]',
                        label: 'Década o Año',
                        defaultValue: '1990s',
                        isOptional: true
                    }
                ]
            }
        ]
    },
    'fantasy-and-sci-fi': {
        title: 'Fantasía y Sci-Fi',
        description: 'Conviértete en héroes, criaturas mágicas o personajes de tus universos favoritos.',
        images: [
            {
                id: 111,
                key: 'master-fantasy-scifi',
                caption: 'Cosplay Universal (Master)',
                prompt: `[PROMPT_CONTENT]`,
                illustration: 'default',
                imageTypeHint: 'Elige tu personaje o arquetipo.',
                detailedDescription: "Transfórmate en cualquier personaje de ficción: Jedi, Mago, Superhéroe o Cyborg. Calidad de cine y vestuario detallado.\nSelecciona tu rol en el menú.",
                mediaType: 'image',
                requiresAspectRatio: true,
                subcategory: 'Rol y Disfraces',
                dynamicFields: [
                    {
                        type: 'select',
                        key: '[PROMPT_CONTENT]',
                        label: 'Arquetipo / Personaje',
                        isAdvanced: true,
                        options: [
                            { label: 'Caballero Jedi', values: { '[PROMPT_CONTENT]': `Transform the person into a Jedi Knight from Star Wars. They should be wearing traditional Jedi robes and holding a glowing lightsaber. ${PRESERVE_IDENTITY_PROMPT}` } },
                            { label: 'Mago / Hechicero', values: { '[PROMPT_CONTENT]': `Reimagine the person as a powerful wizard or witch. The image should feature them wearing mystical robes, perhaps holding a wand or a glowing spell book in a fantasy setting like a castle or enchanted forest. ${PRESERVE_IDENTITY_PROMPT}` } },
                            { label: 'Superhéroe', values: { '[PROMPT_CONTENT]': `Turn the person into a superhero. The image should feature a custom, dynamic superhero costume, a powerful pose, and a dramatic background like a city skyline. ${PRESERVE_IDENTITY_PROMPT}` } },
                            { label: 'Astronauta', values: { '[PROMPT_CONTENT]': `Depict the person as an astronaut on a spacewalk. They should be wearing a detailed spacesuit with their face visible through the helmet's visor, with the Earth or deep space in the background. ${PRESERVE_IDENTITY_PROMPT}` } },
                            { label: 'Cyborg', values: { '[PROMPT_CONTENT]': `Transform the person into a cyborg, with visible cybernetic enhancements and mechanical parts integrated into their body. The style should be futuristic and high-tech. ${PRESERVE_IDENTITY_PROMPT}` } },
                            { label: 'Elfo de Fantasía', values: { '[PROMPT_CONTENT]': `Reimagine the person as a fantasy elf, with pointed ears, elegant features, and intricate clothing, set in an enchanted forest or elven city. ${PRESERVE_IDENTITY_PROMPT}` } },
                            { label: 'Estilo GTA', values: { '[PROMPT_CONTENT]': `Transform the person in the photo into a character from the Grand Theft Auto video game series. The style should be reminiscent of the game's iconic cover art, with bold outlines and a painted, highly-stylized look. ${PRESERVE_IDENTITY_PROMPT}` } },
                            { label: 'Estilo Los Simpson', values: { '[PROMPT_CONTENT]': `Reimagine the person in the photo as a character from The Simpsons. The image must have the classic yellow skin, large eyes, and the distinct animation style of the show, while retaining recognizable features. ${PRESERVE_IDENTITY_PROMPT}` } },
                            { label: 'Estilo Rick y Morty', values: { '[PROMPT_CONTENT]': `Turn the person into a character from the show Rick and Morty. The style should include the squiggly pupils, and the simple, expressive animation style, while keeping the person recognizable. ${PRESERVE_IDENTITY_PROMPT}` } },
                            { label: 'Estilo Disney 3D', values: { '[PROMPT_CONTENT]': `Transform the person in the photo into a character in the style of a modern Disney animated movie. The features should be softened and stylized with large, expressive eyes and a fairytale quality, while maintaining their core identity. ${PRESERVE_IDENTITY_PROMPT}` } },
                            { label: 'Estilo Cyberpunk 2077', values: { '[PROMPT_CONTENT]': `Convert the person into a character from the world of Cyberpunk 2077. The image should feature cybernetic implants, futuristic fashion, and a neon-drenched, dystopian city background. ${PRESERVE_IDENTITY_PROMPT}` } },
                            { label: 'Estilo Minecraft', values: { '[PROMPT_CONTENT]': `Recreate the person as a character in the blocky, pixelated world of Minecraft. The person should have a cubic head and body, resembling a Minecraft player skin, but with their recognizable facial features adapted to the style. ${PRESERVE_IDENTITY_PROMPT}` } },
                        ]
                    }
                ]
            },
            { id: 112, key: 'jedi', caption: 'Caballero Jedi', prompt: `Transform the person into a Jedi Knight from Star Wars. They should be wearing traditional Jedi robes and holding a glowing lightsaber. ${PRESERVE_IDENTITY_PROMPT}`, illustration: 'default', imageTypeHint: 'Ideal para: Poses con "sable".', detailedDescription: "Usa la Fuerza con túnica Jedi y sable de luz.", mediaType: 'image', requiresAspectRatio: true, subcategory: 'Rol y Disfraces' },
            { id: 113, key: 'wizard', caption: 'Mago / Hechicero', prompt: `Reimagine the person as a powerful wizard or witch. The image should feature them wearing mystical robes, perhaps holding a wand or a glowing spell book in a fantasy setting like a castle or enchanted forest. ${PRESERVE_IDENTITY_PROMPT}`, illustration: 'default', imageTypeHint: 'Ideal para: Poses lanzando hechizos.', detailedDescription: "Magia arcana, túnicas y libros de hechizos.", mediaType: 'image', requiresAspectRatio: true, subcategory: 'Rol y Disfraces' },
            { id: 114, key: 'superhero', caption: 'Superhéroe', prompt: `Turn the person into a superhero. The image should feature a custom, dynamic superhero costume, a powerful pose, and a dramatic background like a city skyline. ${PRESERVE_IDENTITY_PROMPT}`, illustration: 'default', imageTypeHint: 'Ideal para: Poses heroicas.', detailedDescription: "Traje personalizado y pose épica sobre la ciudad.", mediaType: 'image', requiresAspectRatio: true, subcategory: 'Rol y Disfraces' },
            { id: 115, key: 'astronaut', caption: 'Astronauta', prompt: `Depict the person as an astronaut on a spacewalk. They should be wearing a detailed spacesuit with their face visible through the helmet's visor, with the Earth or deep space in the background. ${PRESERVE_IDENTITY_PROMPT}`, illustration: 'default', imageTypeHint: 'Ideal para: Primer plano con casco.', detailedDescription: "Caminata espacial con la Tierra de fondo.", mediaType: 'image', requiresAspectRatio: true, subcategory: 'Rol y Disfraces' },
            { id: 116, key: 'cyborg', caption: 'Cyborg', prompt: `Transform the person into a cyborg, with visible cybernetic enhancements and mechanical parts integrated into their body. The style should be futuristic and high-tech. ${PRESERVE_IDENTITY_PROMPT}`, illustration: 'default', imageTypeHint: 'Ideal para: Retratos sci-fi.', detailedDescription: "Fusión hombre-máquina con implantes visibles.", mediaType: 'image', requiresAspectRatio: true, subcategory: 'Rol y Disfraces' },
            { id: 117, key: 'elf', caption: 'Elfo de Fantasía', prompt: `Reimagine the person as a fantasy elf, with pointed ears, elegant features, and intricate clothing, set in an enchanted forest or elven city. ${PRESERVE_IDENTITY_PROMPT}`, illustration: 'default', imageTypeHint: 'Ideal para: Retratos etéreos.', detailedDescription: "Orejas puntiagudas y elegancia élfica.", mediaType: 'image', requiresAspectRatio: true, subcategory: 'Rol y Disfraces' },
            { id: 118, key: 'sovereign-figure-v2', caption: 'Soberano en el Trono V2', prompt: `Action, iPhone-style. This person, with their facial and physical features, resembles a sovereign figure, captured in a moment of thought, looking towards the camera with an expression that shows the weight of power and responsibility. The setting is a monumental and silent throne room. They are seen wearing regal ceremonial attire. The lighting is a strong, divine-like beam of light from a gigantic stained-glass window high above that cuts through the vast, dim hall, acting as a dramatic key light that illuminates their face and the dust particles in the air. The dominant colors are golds, deep reds, and stony grays with high contrast. Authentic, documentary look, with rich textures and very low grain. ${PRESERVE_IDENTITY_PROMPT}`, illustration: 'professional-profile', imageTypeHint: 'Retrato real en sala del trono.', detailedDescription: "Retrato de poder en una sala del trono monumental. Iluminación divina y atmósfera de responsabilidad real.\nSube una foto con expresión solemne.", mediaType: 'image', requiresAspectRatio: true, subcategory: 'Rol y Disfraces' },
            { id: 119, key: 'gta', caption: 'Estilo GTA', prompt: `Transform the person in the photo into a character from the Grand Theft Auto video game series. The style should be reminiscent of the game's iconic cover art, with bold outlines and a painted, highly-stylized look. ${PRESERVE_IDENTITY_PROMPT}`, illustration: 'default', imageTypeHint: 'Ideal para: Poses con actitud.', detailedDescription: "Arte de portada estilo Grand Theft Auto.", mediaType: 'image', requiresAspectRatio: true, subcategory: 'Estilos Artísticos' },
            { id: 120, key: 'simpsons', caption: 'Estilo Los Simpson', prompt: `Reimagine the person in the photo as a character from The Simpsons. The image must have the classic yellow skin, large eyes, and the distinct animation style of the show, while retaining recognizable features. ${PRESERVE_IDENTITY_PROMPT}`, illustration: 'default', imageTypeHint: 'Ideal para: Caricatura amarilla.', detailedDescription: "Tu versión en Springfield con piel amarilla.", mediaType: 'image', requiresAspectRatio: true, subcategory: 'Estilos Artísticos' },
            { id: 121, key: 'rick-and-morty', caption: 'Estilo Rick y Morty', prompt: `Turn the person into a character from the show Rick and Morty. The style should include the squiggly pupils, and the simple, expressive animation style, while keeping the person recognizable. ${PRESERVE_IDENTITY_PROMPT}`, illustration: 'default', imageTypeHint: 'Ideal para: Estilo sci-fi loco.', detailedDescription: "Estilo de animación irreverente y sci-fi.", mediaType: 'image', requiresAspectRatio: true, subcategory: 'Estilos Artísticos' },
            { id: 122, key: 'disney', caption: 'Estilo Disney 3D', prompt: `Transform the person in the photo into a character in the style of a modern Disney animated movie. The features should be softened and stylized with large, expressive eyes and a fairytale quality, while maintaining their core identity. ${PRESERVE_IDENTITY_PROMPT}`, illustration: 'default', imageTypeHint: 'Ideal para: Retratos adorables.', detailedDescription: "Personaje de película de animación moderna.", mediaType: 'image', requiresAspectRatio: true, subcategory: 'Estilos Artísticos' },
            { id: 123, key: 'cyberpunk-2077', caption: 'Estilo Cyberpunk 2077', prompt: `Convert the person into a character from the world of Cyberpunk 2077. The image should feature cybernetic implants, futuristic fashion, and a neon-drenched, dystopian city background. ${PRESERVE_IDENTITY_PROMPT}`, illustration: 'default', imageTypeHint: 'Ideal para: Estilo futurista rudo.', detailedDescription: "Night City, neón y ciber-implantes.", mediaType: 'image', requiresAspectRatio: true, subcategory: 'Estilos Artísticos' },
            { id: 124, key: 'minecraft', caption: 'Estilo Minecraft', prompt: `Recreate the person as a character in the blocky, pixelated world of Minecraft. The person should have a cubic head and body, resembling a Minecraft player skin, but with their recognizable facial features adapted to the style. ${PRESERVE_IDENTITY_PROMPT}`, illustration: 'default', imageTypeHint: 'Ideal para: Avatares cúbicos.', detailedDescription: "Tu skin en el mundo de bloques.", mediaType: 'image', requiresAspectRatio: true, subcategory: 'Estilos Artísticos' },
            {
                id: 126,
                key: 'gothic-lolita',
                caption: 'Gothic Lolita',
                prompt: `Amateur smartphone snapshot, Romantic atmosphere, gentle wind, realistic environment. Hollywood movie color grading, soft contrast, subtle film grain.
Cinematic dark fantasy fashion photography with a focus on high-detail cosplay and atmospheric lighting, sRGB, photo, human, female, East Asian, young adult, slim and petite. Delicate and slender frame; prominent, elegant clavicles visible through the off-the-shoulder neckline; narrow, soft shoulders; high, pinched waistline accentuated by the skirt’s waistband; slender arms with subtle muscle definition in the forearms as she holds the tea set.
The composition focuses on the subject’s seated silhouette atop the massive skull, emphasizing the contrast between her delicate frame and the heavy, weathered bone. Smooth porcelain texture, matte and flawless with a soft, natural glow under the ambient firelight. Natural human proportions with a slight emphasis on the length of the legs in the seated position.
Sitting atop a massive, ancient animal skull, three-quarters view facing left, slight forward lean as she engages with the teacup, head tilted slightly down, gaze fixed thoughtfully on the teacup. Right hand delicately holds the handle of a black and gold teacup, bringing it toward her lips; left hand holds a matching saucer at waist level, fingers spread slightly to balance the porcelain. Refined and poised, mimicking a formal tea-drinking ceremony, contemplative and serene, downward toward the teacup, relaxed, heavy-lidded, fair, pale porcelain.
Subtle gothic aesthetic; soft smoky eyeshadow, natural lip tint, and clean eyeliner. Soft facial features with a petite nose and a well-defined jawline. Perfectly styled bob, pristine and meticulously arranged. Clothing is a precise cosplay recreation: off-the-shoulder white blouse with voluminous sleeves and a high-waisted black pleated mini-skirt. Black porcelain teacup with gold filigree and a matching saucer. Wide-brimmed black hat with two protruding horns and black silk roses; black ribbon choker with a bow; black ribbons tied on the sleeves.
The blouse is pulled taut across the shoulders, revealing the collarbones; the skirt drapes naturally over the curves of the skull prop. Short, straight bob with blunt bangs, raven black. The outfit is an exact replica of the reference: white off-shoulder lace-trimmed blouse, black pleated skirt with lace hem, and intricate floral lace tights. Kawaii-gothic beauty archetype with refined, doll-like features. Intricate gothic lolita-inspired cosplay featuring delicate lace, velvet ribbons, and high-contrast monochrome tones.
Indoor dark fantasy set, gothic stone chamber or dungeon with a large etched magic circle on the floor. Blurred stone pillars, distant gothic architecture, and warm orange glows from braziers or torches. Massive, ancient ram-like skull with large curved horns and glowing runes etched into the bone. Warm ambient firelight, soft and directional, from the sides and background, creates a warm rim light on the subject’s silhouette and hair while maintaining soft shadows on the face. Subtle cool ambient fill to balance the orange firelight, low-key, atmospheric, high-contrast mix of warm orange firelight and cool, dark shadows.
Digital, full-frame, standard prime, 50mm, f/2.8, center-weighted, the subject’s face and the teacup, shallow, blurring the distant stone arches, portrait, medium full shot, eye-level view, showing the subject from the top of the hat down to the base of the skull. Eye-level, centered subject with the horns of the skull framing the lower half of the shot. Massive scale of the skull prop creates a dramatic, surreal contrast with the subject. Cinematic dark fantasy with crushed blacks and vibrant orange highlights, high saturation in the firelight areas, minimal to preserve texture, enhanced detail on the bone of the skull and the lace of the clothing, selective sharpening on the eyes and teacup, high, subtle halation around the firelight sources, photorealistic skin texture, accurate lace patterns, realistic bone weathering, perfect finger anatomy.
Woman, multi-piece gothic lolita ensemble consisting of a blouse, skirt, hosiery, and elaborate headwear. White off-the-shoulder peasant blouse with elasticized lace-trimmed neckline, voluminous puffed sleeves ending in lace cuffs, and small black velvet bows at the center chest and sleeves. High-waisted black pleated mini-skirt with a wide waistband and a delicate black lace trim along the hem. Sheer black tights featuring a dense, intricate floral lace pattern throughout. Large black felt wide-brimmed hat with two matte black horns, black silk roses, and lace edging; black velvet ribbon choker with ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'default',
                imageTypeHint: 'Ideal para: Retratos de fantasía oscura.',
                detailedDescription: "Retrato de fantasía oscura con estética Gothic Lolita. Incluye vestuario detallado, calavera masiva y atmósfera cinematográfica.",
                mediaType: 'image',
                requiresAspectRatio: true,
                subcategory: 'Alta Fantasía'
            },
            {
                id: 127,
                key: 'gta-portrait',
                caption: 'Retrato Estilo GTA',
                prompt: `Create a high-contrast GTA-style vector / cell-shaded portrait illustration.
Hard cell-shading only. No gradients. No soft rendering. No painterly effects.
COMPOSITION & FRAMING (STRICT):
Medium close-up (head, shoulders, upper chest visible)
4:5 vertical aspect ratio
Subject perfectly centered
Shoulders fully visible and balanced
Top of hair slightly cropped
Subject fills 75–80% of frame
POSE & EXPRESSION (LOCKED):
Front-facing
Direct eye contact
Confident, intense expression (subtle, natural — not exaggerated)
Slight tightening around eyes and jaw for intensity
No head tilt or dynamic angle
LIGHTING (CRITICAL):
Strong directional light from top-left
Left side brightly lit
Right side in deep shadow
Sharp shadows under eyebrows, nose, cheekbones, jawline, and neck
High contrast with clear separation
No flat lighting
STYLE EXECUTION:
Use 3–5 distinct tone blocks per area
Angular shadow shapes (no smooth blending)
Bold, clean outer outline around entire subject (clearly separating subject from background)
Fine inner lines for details (skin folds, wrinkles, hair strands)
FACIAL DETAIL:
Preserve natural skin texture
Include subtle under-eye folds and light forehead lines
Maintain natural asymmetry (avoid perfect smoothing)
HAIR:
Match exactly as in reference image
Preserve natural hairstyle, density, hairline, and texture
Do not add volume or stylize beyond reference
FACIAL HAIR:
Match exactly as in reference image
If clean-shaven → keep clean
If stubble → subtle texture
If full beard → detailed, dense texture
Do not add or exaggerate facial hair
CLOTHING:
Simple black crew-neck t-shirt
Visible folds and shading (not flat black)
BACKGROUND:
Clean white background
Behind head: bold mustard-yellow rough brushstroke
Irregular edges, slightly diagonal for contrast
OUTPUT:
Ultra sharp edges
Crisp vector finish
High contrast
No blur, no softness
No missing outline ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'default',
                imageTypeHint: 'Ideal para: Retratos estilizados.',
                detailedDescription: "Retrato estilo GTA con sombreado duro (cell-shading) y alto contraste. Estilo vectorial limpio y audaz.",
                mediaType: 'image',
                requiresAspectRatio: true,
                subcategory: 'Estilos Artísticos'
            },
            {
                id: 142,
                key: 'quidditch-team-action',
                caption: 'Acción Quidditch (Equipo)',
                prompt: `Use the person in Reference Image 1 and copy the facial features exactly. 

Create a hyper-realistic 8k cinematic photograph, resembling an official frame from a premium British fantasy series, with absolute physical realism and aggressive, high-speed visual language. 

**COMPOSITION:** A dynamic, Dutch-angle composition with the horizon tilted sharply to emphasize a high-speed banking turn. Use a low-angle perspective looking up at the team as they dive. 

**ACTION:** Show the person leading a charge on a broomstick during an intense Quidditch match. **Behind them, in a tight, aerodynamic Arrowhead formation, are several teammates in identical [HOUSE] gear.** Their bodies are leaned almost horizontal on their brooms, cutting through the air with extreme velocity.

**WARDROBE:** The main subject and teammates wear classic [HOUSE] Quidditch gear, featuring **long, billowing team capes and heavy robes that catch the wind dramatically, trailing behind them like ribbons of fabric.** The uniform includes a heavy tunic in [COLORS], aged [ACCENT] details, and thick leather arm guards. The fabric has real weight, visible seams, and slight wear from the elements.

The body should clearly convey the physics of flight: torso leaning forward, arms tensed, hair organically tousled by the g-force. The face should show a human expression of intense focus, with slight skin redness from the biting cold wind.

**THE BROOM:** Larger, more robust wooden handles with natural grain and irregular bindings, looking like handcrafted sporting gear.

**ENVIRONMENT:** Suspended high above the a monumental Quidditch pitch with tall, wooden observation towers and a misty, damp British atmosphere. Trailing wind streaks and subtle motion blur on the edges of the frame. 

**LIGHTING:** Naturalistic cool overcast sky, diffused afternoon light with deep shadows in the folds of the moving capes. Sober color grading with [LOWER_COLORS] and cool blues. 

Prioritize physical effort, extreme speed, and the majestic flow of the classic long robes. Avoid any artificial, posed, or "fashion" look. ${PRESERVE_IDENTITY_PROMPT}`,
                illustration: 'fantasy-and-sci-fi',
                imageTypeHint: 'Vuelo épico sobre el campo de Quidditch liderando a tu equipo.',
                detailedDescription: "Una escena de acción cinematográfica de alta fidelidad. Vuela en escoba con tu equipo en formación de combate. Incluye opción para elegir tu casa de Hogwarts.",
                mediaType: 'image',
                requiresAspectRatio: true,
                subcategory: 'Alta Fantasía',
                dynamicFields: [
                    {
                        type: 'select',
                        key: '[HOUSE_CONFIG]',
                        label: 'Casa de Hogwarts',
                        isAdvanced: false,
                        defaultValue: 'Gryffindor',
                        options: [
                            { 
                                label: 'Gryffindor', 
                                values: { 
                                    '[HOUSE]': 'Gryffindor',
                                    '[COLORS]': 'deep red and dark wine',
                                    '[ACCENT]': 'gold',
                                    '[LOWER_COLORS]': 'deep reds, discreet golds'
                                } 
                            },
                            { 
                                label: 'Slytherin', 
                                values: { 
                                    '[HOUSE]': 'Slytherin',
                                    '[COLORS]': 'emerald green and dark forest tones',
                                    '[ACCENT]': 'silver',
                                    '[LOWER_COLORS]': 'deep greens, discreet silvers'
                                } 
                            },
                            { 
                                label: 'Ravenclaw', 
                                values: { 
                                    '[HOUSE]': 'Ravenclaw',
                                    '[COLORS]': 'sapphire blue and bronze-tinted navy',
                                    '[ACCENT]': 'bronze',
                                    '[LOWER_COLORS]': 'deep blues, discreet bronzes'
                                } 
                            },
                            { 
                                label: 'Hufflepuff', 
                                values: { 
                                    '[HOUSE]': 'Hufflepuff',
                                    '[COLORS]': 'canary yellow and coal black',
                                    '[ACCENT]': 'silver',
                                    '[LOWER_COLORS]': 'warm yellows, charcoal grays'
                                } 
                            }
                        ]
                    }
                ]
            }
        ]
    }
};
