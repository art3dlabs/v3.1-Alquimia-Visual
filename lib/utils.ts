
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { PRESERVE_IDENTITY_PROMPT, PRESERVE_IDENTITY_PROMPT_COUPLE, PhotoConfig } from '../photoPacks/types';

export const WATERMARK_PROMPT = `Written vertically in the lower right-corner of the image is a clear, visible watermark that reads “© Art3dlabs ”, in the Pacifico cursive font.`;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Builds the final prompt string based on configuration and dynamic data.
 * Replicates the logic used in handleGenerateMedia for preview purposes.
 */
export function buildFinalPrompt(
    config: PhotoConfig,
    data: {
        userInput?: string;
        dynamicData?: Record<string, any>;
        preserveIdentity?: boolean;
        addWatermark?: boolean;
        aspectRatio?: string;
        [key: string]: any;
    }
): string {
    const { prompt, dynamicFields, requiresUserInput, key: photoKey } = config;
    let tempPrompt = prompt;

    // 1. Dynamic Fields Replacement
    if (dynamicFields) {
        const defaultReplacements = { 
            '[USER_WARDROBE_DESC]': "the same outfit", 
            '[USER_FORMAL_WARDROBE_DESC]': "elegant outfit", 
            '[USER_TRENDY_WARDROBE_DESC]': "trendy outfit", 
            '[USER_PERIOD_WARDROBE_DESC]': "period clothing", 
            '[USER_UNIVERSE_WARDROBE_DESC]': "universe costume", 
            '[USER_COUNTRY_NAME]': 'Spain', 
            '[LEADER_COUNTRY_NAME]': 'USA' 
        };
        const replacements = { ...defaultReplacements, ...config.templateData, ...data.dynamicData };
        for (const key in replacements) {
            const regexKey = key.replace(/\[/g, '\\[').replace(/\]/g, '\\]');
            tempPrompt = tempPrompt.replace(new RegExp(regexKey, 'g'), replacements[key]);
        }
        tempPrompt = tempPrompt.replace(/"\[USER_IMAGE_EMBEDDING\]",?/g, '').replace(/\[USER_IMAGE_EMBEDDING\]/g, '');
    }

    // 2. User Input Replacement
    let finalPrompt = tempPrompt;
    let finalUserInput = (data.userInput || '').trim();

    if (requiresUserInput || photoKey === 'custom-prompt' || photoKey === 'custom-grid-2x2' || photoKey === 'custom-prompt-realism') {
        if (photoKey === 'custom-prompt' || photoKey === 'custom-grid-2x2' || photoKey === 'custom-prompt-realism') {
            const fallback = (photoKey === 'custom-prompt-realism') ? '' : 'an artistic portrait';
            finalPrompt = tempPrompt.replace('{userInput}', finalUserInput || fallback);
        } else {
            if (config.mediaType === 'video' && !finalUserInput) finalUserInput = "Animate this image with subtle motion.";
            finalPrompt = tempPrompt.replace('{userInput}', finalUserInput);
        }
    }

    // 3. Identity Preservation logic
    let basePrompt = finalPrompt
        .split(PRESERVE_IDENTITY_PROMPT).join('')
        .split(PRESERVE_IDENTITY_PROMPT_COUPLE).join('')
        .trim();

    if (data.preserveIdentity) {
        const isCouple = photoKey.includes('couple') || basePrompt.toLowerCase().includes('couple');
        const identitySuffix = isCouple ? PRESERVE_IDENTITY_PROMPT_COUPLE : PRESERVE_IDENTITY_PROMPT;
        finalPrompt = `${basePrompt}\n\n${identitySuffix}`;
    } else {
        finalPrompt = basePrompt;
    }

    // 4. Watermark Injection
    if (data.addWatermark) {
        finalPrompt += `\n\n${WATERMARK_PROMPT}`;
    }

    // 5. Aspect Ratio Replacement
    const isJsonPrompt = finalPrompt.trim().startsWith('{') && finalPrompt.trim().endsWith('}');
    if (data.aspectRatio && config.mediaType === 'image' && !isJsonPrompt) {
        finalPrompt = finalPrompt.replace(/{aspectRatio}/g, data.aspectRatio);
    }

    return finalPrompt;
}

/**
 * Detects grid dimensions based on the source key and prompt content.
 * Returns null if not a grid, or { rows, cols } if it is.
 */
export function getGridDimensions(sourceKey?: string, prompt?: string): { rows: number, cols: number } | null {
    if (!sourceKey) return null;

    // Standard 2x2 Grids
    const grid2x2Keys = [
        'custom-grid-2x2',
        'storyboard-generator',
        'ultra-wide-grid-2x2',
        'ultra-wide-grid',
        'night-party-grid-chaos'
    ];

    if (grid2x2Keys.includes(sourceKey)) {
        return { rows: 2, cols: 2 };
    }

    // Beauty Selfie Grid (4x3)
    if (sourceKey === 'beauty-selfie-grid-12panel') {
        return { rows: 4, cols: 3 };
    }

    // Expressions Grid (Dynamic based on prompt)
    if (sourceKey === 'expressions-grid-generator') {
        // The prompt usually contains the configured size if generated via dynamic fields
        if (prompt?.includes('2x3')) return { rows: 2, cols: 3 };
        return { rows: 2, cols: 2 }; // Default fallback
    }

    // Artistic Grid Collection (New Dynamic Effect)
    if (sourceKey === 'artistic-grid-collection') {
        const p = prompt?.toLowerCase() || '';
        
        // 1. Editorial 90s Zine (Explicitly described as Top/Middle/Bottom rows x Left/Right cols)
        // Although labeled "2x3", the layout description dictates 3 rows, 2 columns.
        if (p.includes('2x3') || p.includes('six-image')) {
            return { rows: 3, cols: 2 }; 
        }
        
        // 2. Dark Gothic Triptych (1x3 - Three vertical panels side-by-side)
        if (p.includes('1x3') || p.includes('triptych')) {
            return { rows: 1, cols: 3 };
        }
        
        // 3. Defaults (Neon Pop Art, Cinematic Color, Mixed Media) -> 2x2
        return { rows: 2, cols: 2 };
    }

    return null;
}

/**
 * Calculates the closest supported aspect ratio string for a given width and height.
 * Gemini typically supports: "1:1", "3:4", "4:3", "9:16", "16:9".
 */
export function getClosestAspectRatio(width: number, height: number): string {
    const ratio = width / height;
    
    const supportedRatios = [
        { str: "1:1", val: 1 },
        { str: "3:4", val: 3/4 },
        { str: "4:3", val: 4/3 },
        { str: "9:16", val: 9/16 },
        { str: "16:9", val: 16/9 },
    ];

    // Find the ratio with the minimum difference
    let closest = supportedRatios[0];
    let minDiff = Math.abs(ratio - closest.val);

    for (const r of supportedRatios) {
        const diff = Math.abs(ratio - r.val);
        if (diff < minDiff) {
            minDiff = diff;
            closest = r;
        }
    }

    return closest.str;
}

/**
 * Safely copies text to the clipboard, falling back to execCommand if the modern API fails or is denied.
 */
export async function copyToClipboard(text: string): Promise<boolean> {
    try {
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(text);
            return true;
        }
    } catch (err) {
        console.warn('Modern clipboard API failed, trying fallback', err);
    }

    try {
        // Fallback for older browsers or when permissions are denied in iframes
        const textArea = document.createElement("textarea");
        textArea.value = text;
        
        // Avoid scrolling to bottom
        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        return successful;
    } catch (fallbackErr) {
        console.error('Fallback clipboard copy failed', fallbackErr);
        return false;
    }
}
