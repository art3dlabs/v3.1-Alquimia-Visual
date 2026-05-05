
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import type { PhotoPack } from './types';
import { productPack } from './editing_modules/product';
import { interiorPack } from './editing_modules/interior';
import { architecturePack } from './editing_modules/architecture';

export const commercialPacks: Record<string, PhotoPack> = {
    'product-photography': productPack['product-photography'],
    'interior-design': interiorPack['interior-design'],
    'architectural-blueprint': architecturePack['architectural-blueprint'],
    'interior-blueprint': architecturePack['interior-blueprint'],
};
