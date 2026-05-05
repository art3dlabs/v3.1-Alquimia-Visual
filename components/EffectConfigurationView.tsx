
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PhotoConfig } from '../photoPacks';
import { cn } from '../lib/utils';
import { secondaryButtonClasses } from '../lib/uiConstants';
// Fix: Correct import path for ImageStatus type from '../App'.
import type { ImageStatus } from '../App';
import PromptViewerModal from './PromptViewerModal';
import EffectFormControls from './EffectFormControls';

interface EffectConfigurationViewProps {
    uploadedImage: string,
    photoConfig: PhotoConfig,
    onGenerate: (data: any) => void,
    onBack: () => void,
    onBackToCategories: () => void,
    status: ImageStatus,
    isApiKeyMissingForVideo: boolean;
    setIsApiKeyMissingForVideo: (isMissing: boolean) => void;
    initialUserInput?: string;
    userInput: string;
    setUserInput: (val: string) => void;
}

const EffectConfigurationView: React.FC<EffectConfigurationViewProps> = (props) => {
    const { caption, imageTypeHint, detailedDescription } = props.photoConfig;
    const [isInitialPromptModalOpen, setIsInitialPromptModalOpen] = useState(false);
    const [previewPrompt, setPreviewPrompt] = useState('');

    return (
        <>
            <PromptViewerModal
                isOpen={isInitialPromptModalOpen}
                onClose={() => setIsInitialPromptModalOpen(false)}
                originalPrompt={props.photoConfig.prompt}
                finalPrompt={previewPrompt}
            />
            <motion.div className="flex flex-col w-full h-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className="flex-1 flex flex-col gap-4 min-h-0">
                    <div className="flex-shrink-0 space-y-2">
                        <h2 className="font-permanent-marker text-3xl text-yellow-400">{caption}</h2>
                        
                        {/* New Detailed Description Block */}
                        {detailedDescription && (
                            <p className="text-neutral-300 text-xs leading-relaxed border-l-2 border-yellow-400/50 pl-3">
                                {detailedDescription}
                            </p>
                        )}

                        {imageTypeHint && !detailedDescription && (
                            <p className="text-neutral-400 mt-1 text-sm">{imageTypeHint}</p>
                        )}
                    </div>

                    <EffectFormControls 
                        {...props} 
                        onShowInitialPrompt={(prompt) => {
                            setPreviewPrompt(prompt);
                            setIsInitialPromptModalOpen(true);
                        }} 
                    />
                    
                    <div className="grid grid-cols-2 gap-3 mt-auto flex-shrink-0">
                        <button onClick={props.onBack} className={cn(secondaryButtonClasses, '!text-base !py-2.5 !px-2 w-full')}>Volver a Efectos</button>
                        <button onClick={props.onBackToCategories} className={cn(secondaryButtonClasses, '!text-base !py-2.5 !px-2 w-full')}>Categorías</button>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default EffectConfigurationView;
