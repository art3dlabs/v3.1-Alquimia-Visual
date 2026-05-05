
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import type { PhotoPack } from './photoPacks/types';

// Import optimized modules
import { favoritesPack } from './photoPacks/favorites';
import { couplesPacks } from './photoPacks/couples';
import { cinematicPortraitsPack } from './photoPacks/cinematicPortraits';
import { professionalPortraitsPack } from './photoPacks/professionalPortraits';
import { lifestyleAndFunPacks } from './photoPacks/lifestyleAndFun';
import { fashionAndStylePacks } from './photoPacks/fashionAndStyle';
import { fantasyAndArtPacks } from './photoPacks/fantasyAndArt';
import { creativeToolsPacks } from './photoPacks/creativeTools';
import { editingPacks } from './photoPacks/editing';
import { restorationPacks } from './photoPacks/restoration';
import { commercialPacks } from './photoPacks/commercial';
import { serendipityPack } from './photoPacks/serendipity';
import { travelGridsPack } from './photoPacks/travelGrids';
import { animationAndVideoPacks } from './photoPacks/animationAndVideo';
import { behindTheScenesPack } from './photoPacks/behindTheScenes';
import { characterDesignPacks } from './photoPacks/characterDesign';
import { fanEncountersJsonPack } from './photoPacks/fanEncountersJson';
import { timeTravelAndFantasyPacks } from './photoPacks/timeTravelAndFantasy';
import { expressionsPacks } from './photoPacks/expressions';
import { stylesAndFashionPacks } from './photoPacks/stylesAndFashion';
import { fanEncountersPack } from './photoPacks/fanEncounters';
import { imageFusionPacks } from './photoPacks/imageFusion';
import { portraitsAndBooksPacks } from './photoPacks/portraitsAndBooks';

// Re-export types and constants for consumers of this module
export * from './photoPacks/types';

// Combine all packs from optimized files into a single master object
export const PHOTO_PACKS: Record<string, PhotoPack> = {
    ...favoritesPack,
    ...couplesPacks,
    ...restorationPacks,
    ...cinematicPortraitsPack,
    ...professionalPortraitsPack,
    ...lifestyleAndFunPacks,
    ...fashionAndStylePacks,
    ...creativeToolsPacks,
    ...fantasyAndArtPacks,
    ...editingPacks,
    ...commercialPacks,
    ...serendipityPack,
    ...travelGridsPack,
    ...animationAndVideoPacks,
    ...behindTheScenesPack,
    ...characterDesignPacks,
    ...fanEncountersJsonPack,
    ...timeTravelAndFantasyPacks,
    ...expressionsPacks,
    ...stylesAndFashionPacks,
    ...fanEncountersPack,
    ...imageFusionPacks,
    ...portraitsAndBooksPacks,
};

// Define the categories, mapping user-facing titles to the keys of the packs
// Categories are ordered according to priority
export const PHOTO_PACK_CATEGORIES: Record<string, string[]> = {
    '⭐ Favoritos': [
        'custom-prompt', 
        'custom-prompt-realism',
        'custom-grid-2x2',
        'infinite-zoom-out',
        'upscale-refine',
        'style-thief-v2',
        'storyboard-generator',
        'illustration-to-realism-v3',
        'pose-transfer-precision-nb2',
        'aesthetic-pose-clone-nb2',
        'cosplay-synthesis-nb2-favorites',
        'general-character-design-sheet', 
        'subway-candid-profile', 
        'anime-to-realistic-nb2', 
        'pvc-figure-packaging', 
        'high-end-portrait-enhancement', 
        'beauty-selfie-grid-12panel', 
        'serendipity'
    ],
    'Moda y Estilo Virtual': ['virtual-try-on', 'fashion-collage', 'trending-outfits', 'wardrobe-styles', 'hairstyles-2025', 'hair-style-designer', 'personal-color-analysis'],
    'Mejora y Restauración': ['quality-enhancement', 'photo-restoration'],
    'Retratos Cinemáticos': ['cinematic-selfies', 'cinematic-moments', 'cinematic-angles', 'cinematic-wild', 'selfie-douyin-aesthetic'],
    'Profesiones y Corporativo': ['professional', 'casting-headshots', 'minimal-fashion-portrait'],
    'Editorial y Modelaje': ['fashion-editorial-boards', 'model', 'behind-the-scenes', 'fashion-poster', 'vogue-vista-infographic', 'editorial-grid-3x3', 'magazine-editorial-spread', 'smartphone-fashion-editorial', 'character-luxury-cover', 'fashion-editorial-split'],
    'Estilo de Vida y Vibes': ['lifestyle-vibes', 'celebrations', 'action-and-sports', 'travel-instagram-grids'],
    'Fantasía y Épocas': ['time-travel', 'age-progression', 'fantasy-and-sci-fi'],
    'Arte y Diversión': ['artistic-styles', 'fun-transformations', 'memes', 'fan-encounters', 'fan-encounters-json', 'sculptures'],
    'Diseño de Personajes': ['character-design', 'expressions-grid', 'female-character-sheet-premium'],
    'Edición y Fusión Creativa': ['magic-editor', 'style-transfer', 'pose-changer', 'mixed-reality-cartoon-twin', 'identity-fusion-materia-prima'],
    'Producto e Interiores': ['product-photography', 'interior-design', 'architectural-blueprint', 'interior-blueprint'],
    'Video y Animación': ['video-generation'],
    'Narrativa y Escenas': ['narrative-prompts'],
    '👥 Parejas': ['couples-dances-v2', 'parejas-historicas'],
};
