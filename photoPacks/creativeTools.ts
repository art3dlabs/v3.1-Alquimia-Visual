
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import type { PhotoPack } from './types';
import { characterDesignPacks } from './characterDesign';
import { expressionsPacks } from './expressions';
import { narrativePromptsPack } from './narrativePrompts';
import { animationAndVideoPacks } from './animationAndVideo';

export const creativeToolsPacks: Record<string, PhotoPack> = {
    'character-design': characterDesignPacks['character-design'],
    'expressions-grid': expressionsPacks['expressions-grid'],
    'narrative-prompts': narrativePromptsPack['artist-muse-session'],
    'video-generation': animationAndVideoPacks['video-generation'],
};
