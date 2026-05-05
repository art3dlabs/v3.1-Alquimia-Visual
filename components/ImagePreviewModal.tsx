
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ImageComparisonSlider } from './ui/image-comparison-slider';
import GridSelectionModal from './GridSelectionModal';
import { cn, getGridDimensions } from '../lib/utils';

type ViewMode = 'result' | 'side-by-side' | 'slider';

interface ImagePreviewModalProps {
    imageUrl: string;
    originalImageUrl?: string;
    prompt?: string;
    styleAnalysis?: string;
    generationData?: any;
    onClose: () => void;
    onDownload: () => void;
    onSetAsReference: (url: string) => void;
    onViewPrompt?: () => void;
    onEditPrompt?: (prompt: string, originalImage: string) => void;
    onGridSelect?: (quadrant: string, generationData: any) => void;
}

const ImagePreviewModal: React.FC<ImagePreviewModalProps> = ({ 
    imageUrl, 
    originalImageUrl, 
    prompt,
    styleAnalysis,
    generationData,
    onClose, 
    onDownload, 
    onSetAsReference,
    onViewPrompt,
    onEditPrompt,
    onGridSelect
}) => {
    const [viewMode, setViewMode] = useState<ViewMode>('result');
    const [transform, setTransform] = useState({ scale: 1, x: 0, y: 0 });
    const [isPanning, setIsPanning] = useState(false);
    const [confirmingQuadrant, setConfirmingQuadrant] = useState<string | null>(null);
    const [isGridOverlayVisible, setIsGridOverlayVisible] = useState(true);
    
    const imageRef = useRef<HTMLImageElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const lastPointRef = useRef({ x: 0, y: 0 });

    const isComparisonPossible = !!originalImageUrl;

    // Check if this image is a Grid that supports selection
    const gridDims = useMemo(() => getGridDimensions(generationData?.sourceKey, prompt), [generationData?.sourceKey, prompt]);
    const isGridResult = !!gridDims && !generationData?.isGridUpscale && viewMode === 'result';

    const [isGridModalOpen, setIsGridModalOpen] = useState(false);
    const [gridRows, setGridRows] = useState(gridDims?.rows || 2);
    const [gridCols, setGridCols] = useState(gridDims?.cols || 2);

    // Better: only reset if gridDims changes to a *different* grid configuration.
    const [lastGridDims, setLastGridDims] = useState(gridDims);
    useEffect(() => {
        if (gridDims && (gridDims.rows !== lastGridDims?.rows || gridDims.cols !== lastGridDims?.cols)) {
            setGridRows(gridDims.rows);
            setGridCols(gridDims.cols);
            setLastGridDims(gridDims);
        }
    }, [gridDims, lastGridDims]);

    const resetTransform = useCallback(() => {
        if (!imageRef.current || !containerRef.current) return;

        const container = containerRef.current;
        const image = imageRef.current;
        
        const containerRatio = container.clientWidth / container.clientHeight;
        const imageRatio = image.naturalWidth / image.naturalHeight;

        let initialScale = 1;
        if (imageRatio > containerRatio) {
            initialScale = container.clientWidth / image.naturalWidth;
        } else {
            initialScale = container.clientHeight / image.naturalHeight;
        }

        setTransform({ scale: Math.min(initialScale, 1), x: 0, y: 0 });
    }, []);

    useEffect(() => {
        // We need to wait for the image to be loaded to get its natural dimensions
        const image = imageRef.current;
        if (image && image.complete) {
            resetTransform();
        } else if (image) {
            image.onload = resetTransform;
        }

        const handleResize = () => resetTransform();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [imageUrl, resetTransform]);

    useEffect(() => {
        // Reset to result view when image changes
        setViewMode('result');
        setConfirmingQuadrant(null);
    }, [imageUrl]);


    const handleWheel = (e: React.WheelEvent) => {
        if (viewMode !== 'result') return;
        e.preventDefault();
        const scaleAmount = 0.1;
        setTransform(prev => ({
            ...prev,
            scale: Math.max(0.1, prev.scale - e.deltaY * scaleAmount * 0.1)
        }));
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        if (viewMode !== 'result') return;
        e.preventDefault();
        setIsPanning(true);
        lastPointRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isPanning || viewMode !== 'result') return;
        const dx = e.clientX - lastPointRef.current.x;
        const dy = e.clientY - lastPointRef.current.y;
        setTransform(prev => ({
            ...prev,
            x: prev.x + dx,
            y: prev.y + dy
        }));
        lastPointRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
        setIsPanning(false);
    };
    
    const handleGridClick = (quadrant: string, e: React.MouseEvent) => {
        e.stopPropagation();
        if (!onGridSelect || !generationData) return;
        
        if (confirmingQuadrant === quadrant) {
            onGridSelect(quadrant, { ...generationData, gridRows, gridCols });
            setConfirmingQuadrant(null);
        } else {
            setConfirmingQuadrant(quadrant);
            // Reset confirmation after 3 seconds if not clicked
            setTimeout(() => setConfirmingQuadrant(prev => prev === quadrant ? null : prev), 3000);
        }
    };

    return (
        <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div 
                ref={containerRef}
                className="relative w-full h-full flex items-center justify-center overflow-hidden"
                onMouseLeave={handleMouseUp}
                onWheel={handleWheel}
            >
                {/* Main content area */}
                {viewMode === 'result' || !isComparisonPossible ? (
                    <div className="relative">
                         <motion.img
                            ref={imageRef}
                            src={imageUrl}
                            alt="Preview"
                            className="max-w-none max-h-none cursor-grab active:cursor-grabbing"
                            style={{
                                scale: transform.scale,
                                x: transform.x,
                                y: transform.y,
                            }}
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            drag={false}
                            onClick={(e) => e.stopPropagation()}
                        />
                        
            <GridSelectionModal 
                isOpen={isGridModalOpen} 
                onClose={() => setIsGridModalOpen(false)} 
                gridRows={gridRows} 
                gridCols={gridCols} 
                setGridRows={setGridRows} 
                setGridCols={setGridCols} 
            />

            {/* DYNAMIC GRID SELECTION OVERLAY FOR MODAL */}
            {isGridOverlayVisible && isGridResult && onGridSelect && gridDims && (
                <div 
                    className="absolute inset-0 z-20 flex flex-col"
                    style={{
                        transform: `translate(${transform.x}px, ${transform.y}px) scale(${transform.scale})`,
                        transformOrigin: 'center',
                        width: imageRef.current?.clientWidth,
                        height: imageRef.current?.clientHeight,
                        left: '50%',
                        top: '50%',
                        marginLeft: -(imageRef.current?.clientWidth || 0) / 2,
                        marginTop: -(imageRef.current?.clientHeight || 0) / 2,
                    }}
                >
                    {Array.from({ length: gridRows }).map((_, r) => (
                        <div key={`row-${r}`} className="flex-1 flex">
                            {Array.from({ length: gridCols }).map((_, c) => {
                                const quadKey = `r${r}-c${c}`;
                                const isConfirmed = confirmingQuadrant === quadKey;
                                return (
                                    <div 
                                        key={quadKey} 
                                        className="flex-1 relative group/cell border border-white/10 hover:border-yellow-400/50 transition-colors"
                                    >
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/cell:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                                            <button 
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleGridClick(quadKey, e);
                                                }}
                                                className={cn(
                                                    "font-permanent-marker text-xs px-3 py-1.5 rounded-full hover:scale-105 transition-transform shadow-lg",
                                                    isConfirmed ? "bg-red-500 text-white" : "bg-yellow-400 text-black"
                                                )}
                                            >
                                                {isConfirmed ? "¿Confirmar?" : `Elegir #${(r * gridCols) + c + 1}`}
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
            )}
                    </div>
                ) : viewMode === 'slider' && isComparisonPossible ? (
                    <div className="w-full h-full" onClick={(e) => e.stopPropagation()}>
                        <ImageComparisonSlider beforeImage={originalImageUrl} afterImage={imageUrl} />
                    </div>
                ) : viewMode === 'side-by-side' && isComparisonPossible ? (
                    <div className="grid grid-cols-2 gap-2 w-full h-full p-4" onClick={(e) => e.stopPropagation()}>
                        <div className="flex flex-col items-center justify-center gap-2">
                            <img src={originalImageUrl} alt="Original" className="w-full h-full object-contain rounded-md" />
                            <p className="font-permanent-marker text-neutral-400">Original</p>
                        </div>
                         <div className="flex flex-col items-center justify-center gap-2">
                            <img src={imageUrl} alt="Generada" className="w-full h-full object-contain rounded-md" />
                            <p className="font-permanent-marker text-yellow-400">Generada</p>
                        </div>
                    </div>
                ) : null}
            </motion.div>
            
            <div className="absolute top-4 left-4 flex flex-col gap-3 z-[70]">
                 <button onClick={onClose} className="p-3 rounded-full bg-black/50 hover:bg-white/20 text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </div>

            {/* Metadata Overlay */}
            <div className="absolute top-6 right-6 flex flex-col items-end gap-2 pointer-events-none z-[70]">
                <div className="bg-black/60 backdrop-blur-xl border border-white/10 px-3 py-1.5 rounded-lg text-[9px] text-neutral-300 font-mono tracking-widest uppercase flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
                    {imageUrl.startsWith('data:video') ? "VEO 3.1" : (generationData?.useProModel ? "NANO 🍌 2" : "NANO 🍌")}
                </div>
                
                {generationData?.promptWasOptimized && (
                    <div className="bg-yellow-400/20 backdrop-blur-xl border border-yellow-400/30 px-3 py-1.5 rounded-lg text-[9px] text-yellow-400 font-mono tracking-widest uppercase flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        Optimizado
                    </div>
                )}

                {generationData?.optimizationError && (
                    <div className="bg-red-500/20 backdrop-blur-xl border border-red-500/30 px-3 py-1.5 rounded-lg text-[9px] text-red-400 font-mono tracking-widest uppercase flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                        Error IA: {generationData.optimizationError}
                    </div>
                )}
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 sm:gap-3 bg-neutral-900/80 backdrop-blur-xl p-2 rounded-2xl z-[70] max-w-[95vw] overflow-x-auto border border-white/10 shadow-2xl no-scrollbar">
                {isComparisonPossible && (
                    <>
                        <div className="flex items-center justify-center gap-1 bg-white/5 p-1 rounded-xl flex-shrink-0">
                            {(['result', 'side-by-side', 'slider'] as ViewMode[]).map(mode => (
                                <button 
                                    key={mode} 
                                    onClick={(e) => { e.stopPropagation(); setViewMode(mode); }}
                                    className={cn(
                                        "px-3 py-1.5 text-xs rounded-lg capitalize transition-all whitespace-nowrap font-medium",
                                        viewMode === mode 
                                            ? "bg-yellow-400 text-black shadow-sm font-bold" 
                                            : "text-neutral-400 hover:bg-white/10 hover:text-white"
                                    )}
                                >
                                    {mode === 'result' ? 'Final' : mode === 'side-by-side' ? 'Comparar' : 'Slider'}
                                </button>
                            ))}
                        </div>
                        <div className="w-px h-6 bg-white/10 flex-shrink-0 mx-1" />
                    </>
                )}

                 <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                     <button onClick={(e) => { e.stopPropagation(); resetTransform(); }} title="Restablecer Vista" className="p-2 sm:p-2.5 rounded-xl hover:bg-white/10 text-neutral-400 hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" /></svg>
                    </button>
                    
                    {isGridResult && (
                        <div className="flex items-center gap-2">
                            <button 
                                onClick={(e) => { e.stopPropagation(); setIsGridModalOpen(true); }} 
                                className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs font-medium transition-colors"
                            >
                                Grid: {gridRows}x{gridCols}
                            </button>
                            <button 
                                onClick={(e) => { e.stopPropagation(); setIsGridOverlayVisible(!isGridOverlayVisible); }} 
                                title={isGridOverlayVisible ? "Ocultar Grid" : "Mostrar Grid"} 
                                className={cn("p-2 sm:p-2.5 rounded-xl transition-colors", isGridOverlayVisible ? "bg-yellow-400/20 text-yellow-400" : "hover:bg-white/10 text-neutral-400")}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                </svg>
                            </button>
                        </div>
                    )}
                    
                    {onEditPrompt && prompt && originalImageUrl && (
                        <button 
                            onClick={(e) => { e.stopPropagation(); onClose(); onEditPrompt(prompt, originalImageUrl); }} 
                            title="Editar Prompt" 
                            className="p-2 sm:p-2.5 rounded-xl bg-yellow-400/10 hover:bg-yellow-400 hover:text-black text-yellow-400 border border-yellow-400/20 transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                        </button>
                    )}

                    {(prompt || styleAnalysis) && onViewPrompt && (
                        <button onClick={(e) => { e.stopPropagation(); onViewPrompt(); }} title="Ver Prompt" className="p-2 sm:p-2.5 rounded-xl hover:bg-white/10 text-neutral-400 hover:text-white transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                    )}

                    <button onClick={(e) => { e.stopPropagation(); onDownload(); }} title="Descargar" className="p-2 sm:p-2.5 rounded-xl hover:bg-white/10 text-neutral-400 hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                    </button>
                    <button onClick={(e) => { e.stopPropagation(); onSetAsReference(imageUrl); }} title="Usar como Referencia" className="p-2 sm:p-2.5 rounded-xl hover:bg-white/10 text-neutral-400 hover:text-white transition-colors">
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" /><path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" /></svg>
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default ImagePreviewModal;
