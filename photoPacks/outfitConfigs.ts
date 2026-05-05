/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

export interface OutfitConfig {
    id: string; // Format: O[Number]
    category: string;
    description: string;
    prompt: string;
}

export const outfitConfigs: Record<string, OutfitConfig> = {
    // --- Categoría: Transformación de Materiales ---
    O1: { id: 'O1', category: 'Transformación de Materiales', description: 'Fantasía Medieval', prompt: 'Convert the clothing into authentic Medieval Fantasy style: use heavy organic fabrics, coarse linen, boiled wool, and vegetable-tanned leather. Ensure accessories look like hand-forged metal with oxidation.' },
    O2: { id: 'O2', category: 'Transformación de Materiales', description: 'Futurista (Sci-Fi)', prompt: 'Convert the clothing into authentic High-End Sci-Fi style: use ballistic nylon, matte kevlar, breathable tactical mesh, and weathered functional polymer plates (non-glossy). Ensure accessories look like machined aluminum, carbon fiber, or industrial rubber.' },
    O3: { id: 'O3', category: 'Transformación de Materiales', description: 'Barato (Low Budget/Cosplay)', prompt: 'Convert the clothing into a Realistic Low-Budget DIY style: use cheap shiny polyester fabrics, painted EVA foam texture imitating metal, visible hot glue marks, loose threads, safety pins, and cardboard elements.' },
    O4: { id: 'O4', category: 'Transformación de Materiales', description: 'K-Pop (Luxury Idol)', prompt: 'Convert the clothing into authentic Idol Stage style: use high-end velvet, silk, satin, and textured brocade. Replace flat details with real intricate embroidery, genuine rhinestones that catch the light, sequins, and gold/silver plated accessories.' },
    
    // --- Categoría: Estilos de Moda ---
    O5: { id: 'O5', category: 'Estilos de Moda', description: 'Lujo Silencioso (Quiet Luxury)', prompt: 'Dressed in a "quiet luxury" outfit, featuring high-quality, minimalistic pieces like a cashmere sweater and well-tailored trousers.' },
    O6: { id: 'O6', category: 'Estilos de Moda', description: 'Colores Vibrantes (Dopamine)', prompt: 'Embracing "dopamine dressing". The outfit should be vibrant and bold, using a confident mix of bright, contrasting colors.' },
    O7: { id: 'O7', category: 'Estilos de Moda', description: 'Estilo Western Moderno', prompt: 'Modern western outfit, including stylish elements like a contemporary denim jacket and leather boots.' },
    O8: { id: 'O8', category: 'Estilos de Moda', description: 'Look Deportivo (Athleisure)', prompt: 'Trendy "sporty chic" or "athleisure" outfit.' },
    O9: { id: 'O9', category: 'Estilos de Moda', description: 'Techwear / Gorpcore', prompt: 'Functional and futuristic techwear or gorpcore outfit, featuring technical fabrics and straps.' },
    O10: { id: 'O10', category: 'Estilos de Moda', description: 'Cottagecore', prompt: 'Romantic cottagecore outfit, like a flowy dress or linen shirt.' },
    O11: { id: 'O11', category: 'Estilos de Moda', description: 'Dark Academia', prompt: 'Dark academia aesthetic, wearing tweed, turtlenecks, or blazers.' },
    O12: { id: 'O12', category: 'Estilos de Moda', description: 'Y2K Revival', prompt: 'Y2K revival outfit, featuring elements like low-rise jeans, vibrant colors, and metallic fabrics.' },
    O13: { id: 'O13', category: 'Estilos de Moda', description: 'Punk Rock', prompt: 'Punk rock look, including a leather jacket, band t-shirt, and ripped jeans.' },
    O14: { id: 'O14', category: 'Estilos de Moda', description: 'Gala Formal', prompt: 'Dressed for a formal gala in an elegant evening gown or a sharp tuxedo.' },
    O15: { id: 'O15', category: 'Estilos de Moda', description: 'Look Playero', prompt: 'Stylish and relaxed beach vacation outfit, such as a linen shirt and shorts or a sundress.' },
    O16: { id: 'O16', category: 'Estilos de Moda', description: 'Minimalismo Escandinavo', prompt: 'Minimalist Scandinavian outfit with clean lines, neutral colors, and simple silhouettes.' },
    O17: { id: 'O17', category: 'Estilos de Moda', description: 'Estilo Bohemio', prompt: 'Bohemian festival outfit, featuring fringe, crochet, and floral patterns.' },
    O18: { id: 'O18', category: 'Estilos de Moda', description: 'Preppy / Ivy League', prompt: 'Preppy, Ivy League look, wearing items like a cable-knit sweater, collared shirt, and chinos.' },
};
