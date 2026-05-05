
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import type { PhotoPack } from './types';
import { timeTravelAndFantasyPacks } from './timeTravelAndFantasy';
import { creativityAndFunPacks } from './creativityAndFun';

export const fantasyAndArtPacks: Record<string, PhotoPack> = {
    'time-travel': timeTravelAndFantasyPacks['time-travel'],
    'age-progression': timeTravelAndFantasyPacks['age-progression'],
    'fantasy-and-sci-fi': timeTravelAndFantasyPacks['fantasy-and-sci-fi'],
    'artistic-styles': creativityAndFunPacks['artistic-styles'],
    'fun-transformations': creativityAndFunPacks['fun-transformations'],
    'memes': creativityAndFunPacks['memes'],
    'sculptures': creativityAndFunPacks['sculptures'],
};
