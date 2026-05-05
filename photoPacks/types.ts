
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

export const PRESERVE_IDENTITY_PROMPT = `MANDATORY IDENTITY PRESERVATION: Use the face, hairstyle, and skin texture from IMAGE 1 as the absolute, non-negotiable source of truth. Do not generate a new face or apply generic beauty filters. You must map the specific facial features (eyes, nose, mouth, jawline, and hair) from IMAGE 1 onto the new composition. Ensure the subject in the generated image is indistinguishable from the person in IMAGE 1. Any alteration to the facial identity is a failure. While preserving the identity, you must generate a completely new image and composition. Do not simply copy or slightly modify the original reference photo; create a fresh generation featuring the person.`;
export const PRESERVE_OUTFIT_PROMPT = "It is absolutely crucial to maintain the person's original hairstyle, clothing, and any accessories they are wearing. Do not change their outfit or hair. The goal is to reproduce the character exactly as they appear in the source photo, just from a different angle or with a different expression/pose.";
export const PRESERVE_IDENTITY_PROMPT_COUPLE = `MANDATORY IDENTITY PRESERVATION: Use the faces, hairstyles, and skin textures from IMAGE 1 and IMAGE 2 as the absolute, non-negotiable source of truth for both individuals. Do not generate new faces or apply generic beauty filters. Map the specific facial features (eyes, nose, mouth, jawline, and hair) from the source images onto the new composition. Ensure both subjects in the generated image are indistinguishable from the persons in the source images. Any alteration to their facial identities is a failure. While preserving their identities, you must generate a completely new image and composition. Do not simply copy or slightly modify the original reference photos; create a fresh generation featuring the persons.`;

export interface DynamicFieldOption {
    label: string;
    values: Record<string, string>;
}

export interface ToggleOption {
    label: string;
    value: string;
    default?: boolean;
    description?: string;
}

export interface DynamicField {
    type: 'text' | 'select' | 'toggle-group';
    key: string; 
    label: string; 
    options?: (string | DynamicFieldOption | ToggleOption)[];
    maxLength?: number; // New property for input constraints
    placeholder?: string; // New property for UI hints
    defaultValue?: string; // New property for pre-filled values
    isAdvanced?: boolean; // New property to hide by default
    isOptional?: boolean; // New property to make field not required
}

export interface PhotoConfig {
    id: number;
    key: string;
    caption: string;
    prompt: string;
    illustration: string;
    imageTypeHint?: string;
    detailedDescription?: string; // New field for the 3-line description
    requiresSecondImage?: boolean;
    allowsSecondImage?: boolean;
    allowsThirdImage?: boolean; 
    requiresUserInput?: boolean;
    userInputIsOptional?: boolean;
    requiresAspectRatio?: boolean;
    supportedAspectRatios?: string[];
    mediaType?: 'image' | 'video';
    templateData?: Record<string, string>;
    dynamicFields?: DynamicField[];
    subcategory?: string; // New field for grouping within a pack
}

export interface PhotoPack {
    title: string;
    description: string;
    images: PhotoConfig[];
}
