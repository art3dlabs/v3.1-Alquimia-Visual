/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStats, type ModelUsage } from '../contexts/StatsContext';
import { cn } from '../lib/utils';
import { secondaryButtonClasses } from '../lib/uiConstants';
import { PHOTO_PACKS, PHOTO_PACK_CATEGORIES } from '../photoPacks';
import { Sparkles, Info, GalleryHorizontal, RotateCcw } from 'lucide-react';

interface TopBarProps {
    onResetSession: () => void;
    onOpenGallery: () => void;
    onHome: () => void;
    totalGeneratedMedia: number;
}

const MODEL_NAMES: Record<string, string> = {
    'gemini-3-flash-preview': 'Optimizador de Prompt (Flash)',
    'gemini-2.5-flash-image': 'NANO 🍌',
    'gemini-3-pro-image-preview': 'NANO 🍌 2',
    'veo-3.1-fast-generate-preview': 'VEO 3.1 (Video)'
};

const StatItem: React.FC<{ label: string; value: number | string; icon: React.ReactElement; onClick?: () => void; className?: string; title?: string }> = ({ label, value, icon, onClick, className, title }) => (
    <div 
        onClick={onClick} 
        title={title || label}
        className={cn(
            "flex items-center gap-1.5 transition-colors", 
            onClick ? "cursor-pointer hover:bg-white/10 rounded px-2 py-1 -ml-2" : "",
            className
        )}
    >
        {icon}
        <span className="font-bold">{value}</span>
    </div>
);

const TopBar: React.FC<TopBarProps> = ({ onResetSession, onOpenGallery, onHome, totalGeneratedMedia }) => {
    const { stats, resetStats } = useStats();
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);
    const [isEffectsListOpen, setIsEffectsListOpen] = useState(false);
    const [showConfirmReset, setShowConfirmReset] = useState(false);

    const formatTokens = (tokens: number) => {
        if (tokens >= 1000) {
            return `${(tokens / 1000).toFixed(1)}k`;
        }
        return tokens.toString();
    };
    
    const totalActiveEffects = useMemo(() => {
        return Object.values(PHOTO_PACKS).reduce((acc, pack) => acc + (pack.images?.length || 0), 0);
    }, []);

    const effectsByCategory = useMemo(() => {
        const result: Record<string, number> = {};
        for (const [category, packKeys] of Object.entries(PHOTO_PACK_CATEGORIES)) {
            let count = 0;
            packKeys.forEach(key => {
                count += PHOTO_PACKS[key]?.images?.length || 0;
            });
            if (count > 0) {
                result[category] = count;
            }
        }
        return result;
    }, []);
    
    const handleReset = () => {
        resetStats();
        onResetSession();
        setShowConfirmReset(false);
    };

    const handleShowError = () => {
        if (stats.lastErrorMessage) {
            alert(`Último error registrado:\n\n${stats.lastErrorMessage}`);
        } else {
            alert("No hay detalles del error disponibles.");
        }
    };

    return (
        <>
            {/* Modals */}
            <AnimatePresence>
            {isDetailsOpen && (
                 <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="fixed top-[70px] right-4 sm:right-8 z-50 bg-neutral-900/90 backdrop-blur-md border border-white/10 rounded-lg shadow-2xl p-4 w-[90vw] max-w-md"
                >
                    <div className="flex justify-between items-center mb-3">
                        <h3 className="font-permanent-marker text-lg text-yellow-400">Uso por Modelo</h3>
                        <div className="flex items-center gap-2">
                            {showConfirmReset ? (
                                <div className="flex items-center gap-2">
                                    <button onClick={handleReset} className={cn(secondaryButtonClasses, '!py-1 !px-3 !text-xs !border-red-500/50 !text-red-400 hover:!bg-red-500/10 !font-sans')}>
                                        Confirmar
                                    </button>
                                    <button onClick={() => setShowConfirmReset(false)} className={cn(secondaryButtonClasses, '!py-1 !px-3 !text-xs !border-white/40 !text-white !font-sans')}>
                                        Cancelar
                                    </button>
                                </div>
                            ) : (
                                <button onClick={() => setShowConfirmReset(true)} className={cn(secondaryButtonClasses, '!py-1 !px-3 !text-xs !border-red-500/50 !text-red-400 hover:!bg-red-500/10 !font-sans')}>
                                    <RotateCcw className="w-3 h-3 mr-1" /> Reiniciar
                                </button>
                            )}
                            <button onClick={() => setIsDetailsOpen(false)} className="p-1 rounded-full hover:bg-white/10 text-neutral-400 hover:text-white transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>
                    </div>
                    <div className="space-y-3 text-sm max-h-64 overflow-y-auto pr-2 custom-scrollbar">
                        {Object.keys(stats.models).length > 0 ? (
                            Object.entries(stats.models).map(([model, usage]) => (
                                <div key={model} className="p-3 bg-black/40 border border-white/5 rounded-lg flex flex-col gap-2">
                                    <p className="font-bold text-yellow-400 truncate">{MODEL_NAMES[model] || model}</p>
                                    <div className="grid grid-cols-2 gap-2 text-neutral-300 text-xs">
                                        <div className="flex items-center gap-1">
                                            <span>Llamadas: {(usage as ModelUsage).calls}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <span>Éxitos: {(usage as ModelUsage).images}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <span>Tokens: {formatTokens((usage as ModelUsage).tokens)}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <span>Errores: {(usage as ModelUsage).errors}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                             <p className="text-neutral-500 text-center py-4">No hay datos de uso todavía.</p>
                        )}
                    </div>
                </motion.div>
            )}
            </AnimatePresence>

            <AnimatePresence>
            {isEffectsListOpen && (
                 <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="fixed top-[70px] left-4 sm:left-8 z-50 bg-neutral-900/90 backdrop-blur-md border border-white/10 rounded-lg shadow-2xl p-4 w-[90vw] max-w-sm"
                >
                    <div className="flex justify-between items-center mb-3">
                        <h3 className="font-permanent-marker text-lg text-yellow-400">Efectos Activos ({totalActiveEffects})</h3>
                         <button onClick={() => setIsEffectsListOpen(false)} className="p-1 rounded-full hover:bg-white/10 text-neutral-400 hover:text-white transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>
                    <div className="space-y-1 text-sm max-h-64 overflow-y-auto pr-2 custom-scrollbar">
                        {Object.entries(effectsByCategory).map(([category, count]) => (
                            <div key={category} className="flex justify-between items-center p-2 bg-black/20 rounded hover:bg-white/5 transition-colors">
                                <span className="text-neutral-300 font-medium">{category}</span>
                                <span className="bg-yellow-400/20 text-yellow-400 text-xs font-bold px-2 py-0.5 rounded-full">{count}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            )}
            </AnimatePresence>

            <header className="fixed top-0 left-0 right-0 z-40 bg-black/50 backdrop-blur-xl p-3 text-neutral-300 border-b border-white/10">
                <div className="max-w-screen-xl mx-auto flex justify-between items-center gap-4 px-4">
                    {/* Left Side: Logo & Stats */}
                     <div className="flex items-center gap-x-6">
                        <Sparkles className="text-yellow-400 w-6 h-6 cursor-pointer hover:scale-105 transition-transform" onClick={onHome} />
                        
                        <div className="hidden md:flex items-center gap-x-4 text-xs font-mono whitespace-nowrap">
                           
                           <StatItem label="Imágenes" value={stats.totalImages} icon={<GalleryHorizontal className="h-4 w-4 text-green-400" />} />

                           {stats.totalErrors > 0 && (
                               <StatItem 
                                    label="Errores" 
                                    value={stats.totalErrors} 
                                    className="text-red-400 animate-pulse cursor-help hover:bg-red-900/20" 
                                    icon={<RotateCcw className="h-4 w-4 text-red-400" />} 
                                    onClick={handleShowError}
                               />
                           )}
                        </div>
                    </div>

                    {/* Right Side: Buttons */}
                    <div className="flex items-center gap-x-4 flex-shrink-0">
                        <div className="flex items-center gap-1.5 text-[10px] text-yellow-400/80 font-mono font-bold cursor-pointer hover:text-yellow-300" onClick={() => setIsEffectsListOpen(!isEffectsListOpen)}>
                            <Sparkles className="w-3 h-3" />
                            <span>{totalActiveEffects} efectos</span>
                        </div>
                        <button onClick={onOpenGallery} className={cn(secondaryButtonClasses, '!py-1.5 !px-3 !text-xs !border-white/40 !font-sans flex items-center gap-2')}>
                            <GalleryHorizontal className="w-3.5 h-3.5" />
                            <span className="hidden sm:inline">Galería</span>
                            {totalGeneratedMedia > 0 && <span className="bg-yellow-400 text-black text-[10px] font-bold rounded-full px-1.5">{totalGeneratedMedia}</span>}
                        </button>
                        <button onClick={() => setIsDetailsOpen(prev => !prev)} className={cn(secondaryButtonClasses, '!py-1.5 !px-3 !text-xs !border-white/40 !font-sans flex items-center gap-2')}>
                            <Info className="w-3.5 h-3.5" />
                            <span className="hidden sm:inline">Info</span>
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
};

export default TopBar;
