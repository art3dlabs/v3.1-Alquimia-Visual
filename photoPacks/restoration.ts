
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import type { PhotoPack } from './types';
import { qualityPack } from './editing_modules/quality';
import { restorationPack } from './editing_modules/restoration';

export const restorationPacks: Record<string, PhotoPack> = {
    'quality-enhancement': qualityPack['quality-enhancement'],
    'photo-restoration': restorationPack['photo-restoration'],
};
