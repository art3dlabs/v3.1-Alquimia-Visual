
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { copyToClipboard } from '../lib/utils';

interface PromptViewerModalProps {
    isOpen: boolean;
    originalPrompt: string;
    finalPrompt: string;
    intermediateOptimizedPrompt?: string;
    styleAnalysis?: string;
    onClose: () => void;
}

const PromptViewerModal: React.FC<PromptViewerModalProps> = ({ isOpen, originalPrompt, finalPrompt, intermediateOptimizedPrompt, styleAnalysis, onClose }) => {
    const [isCopied, setIsCopied] = useState(false);
    const [formattedAnalysis, setFormattedAnalysis] = useState<string | null>(null);

    // Effect to try and parse the styleAnalysis as JSON whenever it changes
    useEffect(() => {
        if (styleAnalysis) {
            try {
                // 1. Remove markdown code blocks if present (```json ... ```)
                let cleanString = styleAnalysis.replace(/```json/gi, '').replace(/```/g, '').trim();
                
                // 2. Attempt to parse
                const jsonObject = JSON.parse(cleanString);
                
                // 3. Pretty print
                setFormattedAnalysis(JSON.stringify(jsonObject, null, 2));
            } catch (e) {
                // If parsing fails, just show the original text (it might be a normal description)
                setFormattedAnalysis(null); 
            }
        } else {
            setFormattedAnalysis(null);
        }
    }, [styleAnalysis]);

    const handleCopy = async (text: string) => {
        // Clean markdown markers before copying
        const cleanedText = text.replace(/```json/gi, '').replace(/```/g, '').trim();
        
        await copyToClipboard(cleanedText);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    // Attempt to format the input prompt if it's JSON (e.g. for structured prompts)
    const formatPrompt = (prompt: string) => {
        try {
            const parsedJson = JSON.parse(prompt.replace(/```json/gi, '').replace(/```/g, '').trim());
            return JSON.stringify(parsedJson, null, 2);
        } catch (e) {
            return prompt;
        }
    };

    const formattedOriginalPrompt = formatPrompt(originalPrompt);
    const formattedFinalPrompt = formatPrompt(finalPrompt);
    const formattedIntermediatePrompt = intermediateOptimizedPrompt ? formatPrompt(intermediateOptimizedPrompt) : null;

    const isOptimized = !!intermediateOptimizedPrompt && intermediateOptimizedPrompt !== originalPrompt;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-lg p-4 sm:p-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="bg-neutral-900 border border-white/10 rounded-lg w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center p-4 border-b border-white/10 bg-neutral-900 z-10 flex-shrink-0">
                            <button onClick={onClose} className="p-2 rounded-full hover:bg-white/10 text-neutral-400 hover:text-white transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                            <h2 className="font-permanent-marker text-xl text-yellow-400 truncate ml-2">Detalles de Generación</h2>
                            <div className="w-10" />
                        </div>
                        
                        <div className="flex-1 p-6 overflow-y-auto bg-black/20 space-y-8 min-h-0">
                            
                            {/* 1. Original Prompt (What the user typed) */}
                            <div>
                                <div className="flex justify-between items-center mb-3">
                                    <div className="flex flex-col">
                                        <h3 className="font-permanent-marker text-lg text-neutral-300 leading-none">
                                            Tu Prompt
                                        </h3>
                                        <span className="text-xs text-neutral-500 font-mono mt-1">
                                            (Input Original)
                                        </span>
                                    </div>
                                    <button 
                                        onClick={() => handleCopy(originalPrompt)}
                                        className="text-xs bg-white/5 hover:bg-white/10 text-neutral-300 border border-white/10 px-2 py-1 rounded transition-colors"
                                    >
                                        Copiar
                                    </button>
                                </div>
                                <div className="bg-black/40 border border-white/5 rounded-md p-4">
                                    <pre className="text-xs sm:text-sm text-neutral-400 whitespace-pre-wrap break-words font-mono">
                                        <code>{formattedOriginalPrompt}</code>
                                    </pre>
                                </div>
                            </div>

                            {/* 2. Optimized Prompt (Intermediate) */}
                            {isOptimized && (
                                <div className="animate-in fade-in slide-in-from-bottom-2">
                                    <div className="flex justify-between items-center mb-3">
                                        <div className="flex flex-col">
                                            <h3 className="font-permanent-marker text-lg text-yellow-400 leading-none flex items-center gap-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                                Prompt Optimizado
                                            </h3>
                                            <span className="text-xs text-yellow-400/60 font-mono mt-1">
                                                (Resultado de la IA)
                                            </span>
                                        </div>
                                        <button 
                                            onClick={() => handleCopy(intermediateOptimizedPrompt!)}
                                            className="text-xs bg-yellow-400/10 hover:bg-yellow-400/20 text-yellow-400 border border-yellow-400/20 px-2 py-1 rounded transition-colors"
                                        >
                                            Copiar
                                        </button>
                                    </div>
                                    <div className="bg-yellow-400/5 border border-yellow-400/20 rounded-md p-4 relative overflow-hidden">
                                        <pre className="text-xs sm:text-sm text-yellow-200/80 whitespace-pre-wrap break-words font-mono">
                                            <code>{formattedIntermediatePrompt}</code>
                                        </pre>
                                    </div>
                                </div>
                            )}

                            {/* 3. Final Prompt (What was sent to the model) */}
                            <div className="animate-in fade-in slide-in-from-bottom-2">
                                <div className="flex justify-between items-center mb-3">
                                    <div className="flex flex-col">
                                        <h3 className="font-permanent-marker text-lg text-blue-400 leading-none flex items-center gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                            Prompt Final
                                        </h3>
                                        <span className="text-xs text-blue-400/60 font-mono mt-1">
                                            (Enviado al Modelo de Imagen)
                                        </span>
                                    </div>
                                    <button 
                                        onClick={() => handleCopy(finalPrompt)}
                                        className="text-xs bg-blue-400/10 hover:bg-blue-400/20 text-blue-400 border border-blue-400/20 px-2 py-1 rounded transition-colors"
                                    >
                                        Copiar
                                    </button>
                                </div>
                                <div className="bg-blue-400/5 border border-blue-400/20 rounded-md p-4 relative overflow-hidden">
                                    <pre className="text-xs sm:text-sm text-blue-200/80 whitespace-pre-wrap break-words font-mono">
                                        <code>{formattedFinalPrompt}</code>
                                    </pre>
                                </div>
                            </div>

                            {/* 4. Style Analysis (What the image model returned as text, if any) */}
                            {styleAnalysis && (
                                <div className="animate-in fade-in slide-in-from-bottom-2">
                                    <div className="flex justify-between items-center mb-3">
                                        <div className="flex flex-col">
                                            <h3 className="font-permanent-marker text-lg text-green-400 leading-none">
                                                Respuesta del Modelo
                                            </h3>
                                            <span className="text-xs text-green-400/60 font-mono mt-1">
                                                {formattedAnalysis ? '(Formato JSON)' : '(Análisis / Resumen)'}
                                            </span>
                                        </div>
                                        <button 
                                            onClick={() => handleCopy(styleAnalysis)}
                                            className="text-xs bg-green-400/10 hover:bg-green-400/20 text-green-400 border border-green-400/20 px-2 py-1 rounded transition-colors"
                                        >
                                            Copiar
                                        </button>
                                    </div>
                                    <div className="bg-black/40 border border-green-400/20 rounded-md p-4 relative overflow-hidden">
                                        {formattedAnalysis ? (
                                            <pre className="text-xs sm:text-sm text-green-300 whitespace-pre-wrap break-words font-mono">
                                                <code>{formattedAnalysis}</code>
                                            </pre>
                                        ) : (
                                            <p className="text-sm text-neutral-300 whitespace-pre-wrap font-sans leading-relaxed">
                                                {styleAnalysis}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            )}

                        </div>
                        
                        <div className="flex justify-end items-center p-4 border-t border-white/10 bg-neutral-900/50 z-10 flex-shrink-0">
                            <button 
                                onClick={onClose}
                                className="font-permanent-marker text-lg text-center text-black bg-yellow-400 py-2 px-6 rounded-sm transition-all duration-200 hover:scale-105 hover:bg-yellow-300 shadow-lg"
                            >
                                Cerrar
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default PromptViewerModal;
