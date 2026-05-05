
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import type { PhotoPack } from './types';
import { qualityPack } from './editing_modules/quality';
import { stylePack } from './editing_modules/style';
import { magicPack } from './editing_modules/magic';
import { restorationPack } from './editing_modules/restoration';
import { productPack } from './editing_modules/product';
import { interiorPack } from './editing_modules/interior';
import { architecturePack } from './editing_modules/architecture';

export const editingAndDesignToolsPacks: Record<string, PhotoPack> = {
    ...qualityPack,
    ...stylePack,
    ...magicPack,
    ...restorationPack,
    ...productPack,
    ...interiorPack,
    ...architecturePack,
};
