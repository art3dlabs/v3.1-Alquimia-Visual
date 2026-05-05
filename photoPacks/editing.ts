
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import type { PhotoPack } from './types';
import { magicPack } from './editing_modules/magic';
import { stylePack } from './editing_modules/style';
import { imageFusionPacks } from './imageFusion';

export const editingPacks: Record<string, PhotoPack> = {
    'magic-editor': magicPack['magic-editor'],
    'style-transfer': stylePack['style-transfer'],
    'pose-changer': imageFusionPacks['pose-changer'],
    'couples-dances-v2': imageFusionPacks['couples-dances-v2'],
    'mixed-reality-cartoon-twin': imageFusionPacks['mixed-reality-cartoon-twin'],
    'selfie-douyin-aesthetic': imageFusionPacks['selfie-douyin-aesthetic'],
};
