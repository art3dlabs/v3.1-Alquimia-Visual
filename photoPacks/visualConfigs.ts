/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

export interface VisualConfig {
    id: string; // New: Unique ID
    lighting: string;
    filmSimulation?: string;
    colorPalette: string;
    mood: string;
    technicalTags: string[];
}

export const visualConfigs: Record<string, VisualConfig> = {
    // --- Categoría: Favoritos (Estudio Creativo) ---
    extraCaos: {
        id: 'V1',
        lighting: "N/A",
        colorPalette: "N/A",
        mood: "Hyper-minimalism, high detail",
        technicalTags: ["hyperrealism", "octane render", "8k", "detailed", "photorealistic"],
    },
    technicolor: {
        id: 'V2',
        lighting: "N/A",
        colorPalette: "Technicolor",
        mood: "Filmic",
        technicalTags: ["35mm film", "filmic grain", "medium format", "chromatic aberration"],
    },
    documental: {
        id: 'V3',
        lighting: "Unmediated, situational, high-dynamic range",
        colorPalette: "Natural",
        mood: "Unobserved reality, spontaneous",
        technicalTags: ["Sony A7R V", "35mm prime lens", "f/11", "deep depth of field", "micro-contrast"],
    },
    etherealFilm: {
        id: 'V4',
        lighting: "Intense halation, warm golden highlights",
        colorPalette: "Split-toning, deep teal shadows",
        mood: "Dreamy haze, nostalgic",
        technicalTags: ["35mm analog film", "heavy organic grain", "Helios 44-2 lens", "f/1.4"],
    },

    // --- Categoría: Estilo de Vida y Vibes ---
    cinematicSoft: {
        id: 'V5',
        lighting: "Soft frontal warm light, ring light/softbox",
        filmSimulation: "ASTIA (S)",
        colorPalette: "Soft pastel tones, pink undertone",
        mood: "Warm, dreamy, intimate",
        technicalTags: ["beauty lighting", "soft glow", "porcelain skin", "doll-like eyes"],
    },
    indieSleaze: {
        id: 'V6',
        lighting: "Direct on-camera flash, hard lighting",
        filmSimulation: "Kodak Gold 200",
        colorPalette: "Warm tones contrasted with cool white flash",
        mood: "Indie sleaze, candid, rebellious",
        technicalTags: ["35mm focal length", "high contrast", "grainy texture", "lo-fi"],
    },
    editorialRelax: {
        id: 'V7',
        lighting: "Warm amber lamp light, cool blue-grey background",
        filmSimulation: "Fujifilm Nostalgic Negative",
        colorPalette: "Warm-neutral shadows",
        mood: "Languid, post-event decompression",
        technicalTags: ["50mm f/1.8", "cinematic lighting", "photorealistic"],
    },

    // --- Categoría: Retratos Cinemáticos ---
    cinematicSelfie: {
        id: 'V8',
        lighting: "Soft diffused lighting",
        colorPalette: "Muted neutral palette",
        mood: "Calm and confident",
        technicalTags: ["iPhone 15 Pro Max 24mm f/1.8", "Leica Q3 detail", "Kodak Portra 800", "ultra 4K cinematic realism"],
    },
    nightMotionSelfie: {
        id: 'V9',
        lighting: "High contrast lighting, artistic street photography",
        colorPalette: "Moody, ethereal",
        mood: "Urban nightlife, vibrant",
        technicalTags: ["Low wide-angle", "Shallow depth of field", "35mm film look", "grainy texture"],
    },

    // --- Categoría: Moda y Estilo ---
    wardrobeFitting: {
        id: 'V10',
        lighting: "Professional studio lighting, neutral backdrop",
        colorPalette: "Neutral",
        mood: "Cinematic, raw footage style",
        technicalTags: ["Arri Alexa", "Sharp focus on material textures", "8k resolution"],
    },
    mannequinProduct: {
        id: 'V11',
        lighting: "Studio lighting, pure white background",
        colorPalette: "Neutral",
        mood: "E-commerce product photography",
        technicalTags: ["Full body shot", "Realistic fabric physics", "Volumetric folds"],
    },

    // --- Categoría: Retratos Profesionales ---
    professionalPortrait: {
        id: 'V12',
        lighting: "Studio lighting",
        colorPalette: "Clean, professional",
        mood: "Confident, friendly, serious",
        technicalTags: ["Professional portrait", "Studio lighting", "Blurred office/neutral background"],
    },
    minimalFashionPortrait: {
        id: 'V13',
        lighting: "Soft key light, fill light, rim light",
        colorPalette: "Neutral tones, soft contrast",
        mood: "Relaxed, confident, modern",
        technicalTags: ["85mm portrait lens", "f/4 aperture", "Studio portrait", "High-end fashion"],
    },
    magazineCover: {
        id: 'V14',
        lighting: "Dramatic lighting",
        colorPalette: "Avant-garde",
        mood: "Artistic, high-fashion",
        technicalTags: ["High-fashion", "Artistic pose", "Haute couture"],
    },
    edgyFormalSuit: {
        id: 'V15',
        lighting: "Cinematic",
        colorPalette: "Warm editorial",
        mood: "Powerful, confident, edgy",
        technicalTags: ["Cinematic authority", "Soft matte texture", "Oversized tailored suit"],
    },

    // --- Categoría: Viajes en el Tiempo y Fantasía ---
    ageProgression: {
        id: 'V16',
        lighting: "Natural, photorealistic",
        colorPalette: "Realistic",
        mood: "Casual, realistic",
        technicalTags: ["Photorealistic portrait", "Age-appropriate features"],
    },
    historicalFantasy: {
        id: 'V17',
        lighting: "Period-appropriate (e.g., sfumato, sepia, neon)",
        colorPalette: "Period-appropriate",
        mood: "Historical/Fantasy",
        technicalTags: ["Period-appropriate clothing", "Historical setting"],
    },

    // --- Categoría: Creatividad y Diversión ---
    pixelArt: {
        id: 'V18',
        lighting: "N/A",
        colorPalette: "Vibrant",
        mood: "Nostalgic, retro",
        technicalTags: ["16-bit pixel art", "low-resolution", "square pixels", "classic 90s video game"],
    },
    legoMinifigure: {
        id: 'V19',
        lighting: "Professional product shot",
        colorPalette: "Vibrant",
        mood: "Playful, toy-like",
        technicalTags: ["Blocky minifigure shape", "Plastic hairpiece", "Glossy finish"],
    },
    funkoPop: {
        id: 'V20',
        lighting: "Professional product shot",
        colorPalette: "Glossy",
        mood: "Collectibles",
        technicalTags: ["Oversized head", "Small body", "Large black round eyes", "Vinyl figure"],
    },
    claymation: {
        id: 'V21',
        lighting: "Soft stop-motion studio lighting",
        colorPalette: "Handcrafted",
        mood: "Quirky, sculpted",
        technicalTags: ["Tangible clay texture", "Visible thumbprints", "Handcrafted imperfections"],
    },
    sticker: {
        id: 'V22',
        lighting: "Glossy sheen",
        colorPalette: "Vibrant",
        mood: "Stylized, fun",
        technicalTags: ["Die-cut vinyl sticker", "Bold outlines", "Thick white border"],
    },
    cardboardCutout: {
        id: 'V23',
        lighting: "Semi-gloss sheen",
        colorPalette: "Printed",
        mood: "Surreal, playful",
        technicalTags: ["Flat printed photograph", "Corrugated cardboard edge", "White fold-out stand"],
    },

    // --- Categoría: Animación y Video ---
    videoGeneration: {
        id: 'V24',
        lighting: "Dynamic, scene-dependent",
        colorPalette: "Scene-dependent",
        mood: "Subtle, realistic motion",
        technicalTags: ["Subtle, realistic motion", "Dynamic scene"],
    },

    // --- Categoría: Detrás de Cámaras ---
    btsAction: {
        id: 'V25',
        lighting: "Cinematic studio lights and ambient light",
        colorPalette: "Authentic, documentary",
        mood: "Candid, friendly, collaborative",
        technicalTags: ["Documentary-style", "Hyper-realistic photograph", "Studio setting"],
    },

    // --- Categoría: Comercial (Producto e Interior) ---
    productPhotography: {
        id: 'V26',
        lighting: "Studio lighting, scene-dependent",
        colorPalette: "Clean, high-resolution",
        mood: "Professional, focused",
        technicalTags: ["Product shot", "Realistic shadows", "Clean composition"],
    },
    interiorDesign: {
        id: 'V27',
        lighting: "Natural, contemporary lighting",
        colorPalette: "Style-dependent (neutral, eclectic, industrial, light)",
        mood: "Functional, sophisticated, cozy",
        technicalTags: ["Interior design", "Architecture intact", "High-quality textures"],
    },

    // --- Categoría: Estilos y Moda ---
    hairStyle2025: {
        id: 'V28',
        lighting: "Sharp lighting (for texture)",
        colorPalette: "Trendy, fantasy, natural",
        mood: "Trendy, chic, modern",
        technicalTags: ["Photorealistic headshot", "Textured", "Layered"],
    },
    hairStyleDesigner: {
        id: 'V29',
        lighting: "Soft studio lighting",
        colorPalette: "Professional",
        mood: "Professional",
        technicalTags: ["85mm portrait lens", "Soft beige/white gradient background", "Ultra sharp details"],
    },
};
