/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CardIllustration from './CardIllustration';
import PromptViewerModal from './PromptViewerModal';
import type { GeneratedMedia } from '../App';
import type { PhotoConfig } from '../photoPacks';
import { cn, copyToClipboard } from '../lib/utils';

const actionBtnClass = "flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-permanent-marker transition-all duration-300 shadow-lg";

interface ResultDisplayProps {
    result: GeneratedMedia | null;
    originalImage: string;
    onPreview: (url: string, originalUrl: string, generationData?: any) => void;
    onDownload: (mediaUrl?: string, caption?: string, generationData?: any) => void;
    onSetAsReference: (mediaUrl: string) => void;
    onRegenerate: () => void;
    photoConfig: PhotoConfig | null;
    onEditPrompt?: (prompt: string, originalImage: string) => void;
    onGridSelect?: (quadrant: string, gridDims?: { gridRows: number, gridCols: number }) => void;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ 
    result, 
    originalImage, 
    onPreview, 
    onDownload, 
    onSetAsReference, 
    onRegenerate, 
    photoConfig,
    onEditPrompt
}) => {
    const isVideo = result?.mediaUrl?.startsWith('data:video');
    const [isPromptModalOpen, setIsPromptModalOpen] = useState(false);
    const [errorPromptCopied, setErrorPromptCopied] = useState(false);
    
    const handleCopyErrorPrompt = async () => {
        if (result?.promptUsed) {
            await copyToClipboard(result.promptUsed);
            setErrorPromptCopied(true);
            setTimeout(() => setErrorPromptCopied(false), 2000);
        }
    };

    if (!result) {
        return (
            <div className="w-full h-full flex flex-col items-center justify-center text-center p-12 bg-neutral-900/10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <CardIllustration illustrationKey={photoConfig?.illustration} className="w-24 h-24 text-neutral-800 mb-6 mx-auto opacity-40" />
                    <p className="font-permanent-marker text-2xl text-neutral-600">Espera la Transmutación</p>
                    <p className="text-neutral-700 mt-2 max-w-xs mx-auto text-sm leading-relaxed">
                        Configura tu intención alquímica a la izquierda y deja que la IA destile la realidad.
                    </p>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="w-full h-full flex flex-col relative group overflow-hidden">
            <PromptViewerModal 
                isOpen={isPromptModalOpen} 
                onClose={() => setIsPromptModalOpen(false)} 
                originalPrompt={result.generationData?.userInput || result.sourceCaption || ''}
                optimizedPrompt={result.promptUsed ?? ''} 
                styleAnalysis={result.styleAnalysis} 
            />
            
            <div className="flex-1 overflow-hidden relative flex items-center justify-center bg-[#050505]">
                {result.status === 'error' ? (
                    <div className="text-center p-8 z-10 max-w-md w-full">
                        <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-red-500/30">
                            <svg className="w-10 h-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                        </div>
                        <h3 className="font-permanent-marker text-2xl text-red-200 mb-3">Reacción Inestable</h3>
                        <p className="text-red-400/70 text-sm font-medium mb-8 break-words">{result.error}</p>
                        
                        <div className="flex flex-col gap-4 items-center w-full">
                            {result.promptUsed && (
                                <button 
                                    onClick={handleCopyErrorPrompt}
                                    className={cn(
                                        "flex items-center justify-center gap-2 px-6 py-2 rounded-full text-sm font-medium transition-all w-full sm:w-auto",
                                        errorPromptCopied 
                                            ? "bg-green-500/20 text-green-400 border border-green-500/50" 
                                            : "bg-white/5 hover:bg-white/10 text-neutral-300 border border-white/10"
                                    )}
                                >
                                    {errorPromptCopied ? (
                                        <>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                            ¡Copiado!
                                        </>
                                    ) : (
                                        <>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                                            Copiar Prompt Usado
                                        </>
                                    )}
                                </button>
                            )}
                            
                            <button onClick={onRegenerate} className="text-neutral-500 hover:text-white underline text-xs transition-colors">
                                Reintentar con esta configuración
                            </button>
                        </div>
                    </div>
                ) : (
                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={result.mediaUrl}
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="w-full h-full flex items-center justify-center p-2 relative"
                        >
                            {isVideo ? (
                                <video 
                                    src={result.mediaUrl} 
                                    controls 
                                    autoPlay 
                                    loop 
                                    muted 
                                    playsInline 
                                    className="max-w-full max-h-full object-contain cursor-zoom-in rounded-xl shadow-2xl" 
                                    onClick={() => onPreview(result.mediaUrl!, originalImage, result.generationData)} 
                                />
                            ) : (
                                <img 
                                    src={result.mediaUrl} 
                                    alt="Resultado de la Alquimia" 
                                    className="max-w-full max-h-full object-contain cursor-zoom-in rounded-xl shadow-2xl" 
                                    onClick={() => onPreview(result.mediaUrl!, originalImage, result.generationData)} 
                                />
                            )}
                        </motion.div>
                    </AnimatePresence>
                )}
            </div>

            {/* Floating Action Bar - Modern Pill Design */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 p-1.5 glass-panel rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-30">
                 <button 
                    onClick={() => onDownload(result.mediaUrl, result.sourceCaption, result.generationData)} 
                    className={cn(actionBtnClass, "bg-white text-black hover:bg-yellow-400 active:scale-95")}
                    title="Guardar localmente"
                 >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                    <span className="hidden md:inline">Descargar</span>
                 </button>
                 
                 {/* Botón Editar Prompt */}
                 {onEditPrompt && result.promptUsed && !isVideo && (
                    <button 
                        onClick={() => onEditPrompt(result.promptUsed!, originalImage)} 
                        className={cn(actionBtnClass, "bg-yellow-400/20 text-yellow-400 hover:bg-yellow-400 hover:text-black active:scale-95 border border-yellow-400/30")}
                        title="Editar y regenerar con este prompt"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                        <span className="hidden md:inline">Editar Prompt</span>
                    </button>
                 )}

                 <button 
                    onClick={onRegenerate} 
                    className={cn(actionBtnClass, "bg-white/10 text-white hover:bg-white/20 active:scale-95")}
                    title="Generar otra variación con el mismo estilo"
                 >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                    <span className="hidden md:inline">Variar</span>
                 </button>

                 <div className="w-px h-6 bg-white/10 mx-1 hidden md:block" />

                 {!isVideo && result.mediaUrl && (
                    <button 
                        onClick={() => onSetAsReference(result.mediaUrl!)} 
                        className={cn(actionBtnClass, "bg-white/10 text-white hover:bg-white/20 active:scale-95 !px-3")} 
                        title="Usar como nueva base"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                    </button>
                 )}

                 {result.promptUsed && (
                    <button 
                        onClick={() => setIsPromptModalOpen(true)} 
                        className={cn(actionBtnClass, "bg-white/10 text-white hover:bg-white/20 active:scale-95 !px-3")}
                        title="Ver detalles técnicos"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </button>
                 )}
            </div>
            
            {/* Minimalist Tech Metadata Overlay */}
            <div className="absolute top-6 right-6 flex flex-col items-end gap-2 pointer-events-none z-30">
                <div className="bg-black/60 backdrop-blur-xl border border-white/10 px-3 py-1.5 rounded-lg text-[9px] text-neutral-300 font-mono tracking-widest uppercase flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
                    {isVideo ? "VEO 3.1" : (result.generationData?.useProModel ? "NANO 🍌 2" : "NANO 🍌")}
                </div>
                
                {result.generationData?.promptWasOptimized && (
                    <div className="bg-yellow-400/20 backdrop-blur-xl border border-yellow-400/30 px-3 py-1.5 rounded-lg text-[9px] text-yellow-400 font-mono tracking-widest uppercase flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        Optimizado
                    </div>
                )}

                {result.generationData?.optimizationError && (
                    <div className="bg-red-500/20 backdrop-blur-xl border border-red-500/30 px-3 py-1.5 rounded-lg text-[9px] text-red-400 font-mono tracking-widest uppercase flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                        Error IA: {result.generationData.optimizationError}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ResultDisplay;
