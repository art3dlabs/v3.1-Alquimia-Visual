
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState, useRef } from 'react';
import { primaryButtonClasses, secondaryButtonClasses } from '../lib/uiConstants';
import { cn } from '../lib/utils';
import LoadingSpinner from './LoadingSpinner';
import type { GeneratedMedia } from '../App';
import { motion } from 'framer-motion';

interface GridSplitterProps {
    onBack: () => void;
    setAllGeneratedMedia: React.Dispatch<React.SetStateAction<GeneratedMedia[]>>;
    onEnhance: (imageUrl: string) => void;
    onUseAsReference: (imageUrl: string) => void;
}

const GridSplitter: React.FC<GridSplitterProps> = ({ onBack, setAllGeneratedMedia, onEnhance, onUseAsReference }) => {
    const [sourceImage, setSourceImage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [gridSize, setGridSize] = useState<'2x2' | '2x3'>('2x2');
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [splitImages, setSplitImages] = useState<GeneratedMedia[]>([]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setSourceImage(event.target?.result as string);
                setSplitImages([]); 
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };
    
    // Pure Logic: Split the image using canvas, no AI involved.
    const splitImage = async () => {
        if (!sourceImage) return;
        setIsLoading(true);
        setSplitImages([]);
        
        try {
            const [cols, rows] = gridSize.split('x').map(Number);
            
            const results = await new Promise<GeneratedMedia[]>((resolve, reject) => {
                const img = new Image();
                img.crossOrigin = 'anonymous';
                img.onload = () => {
                    const cellW = img.naturalWidth / cols;
                    const cellH = img.naturalHeight / rows;
                    const generated: GeneratedMedia[] = [];

                    for (let r = 0; r < rows; r++) {
                        for (let c = 0; c < cols; c++) {
                            const canvas = document.createElement('canvas');
                            canvas.width = cellW;
                            canvas.height = cellH;
                            const ctx = canvas.getContext('2d');
                            if (ctx) {
                                ctx.drawImage(img, c * cellW, r * cellH, cellW, cellH, 0, 0, cellW, cellH);
                                generated.push({
                                    status: 'done',
                                    mediaUrl: canvas.toDataURL('image/jpeg', 0.95),
                                    sourceCaption: `Grid Split ${r + 1}-${c + 1}`,
                                    needsEnhancement: true, // Tag for potential upscale
                                    promptUsed: 'Manual Grid Split',
                                    generationData: {}
                                });
                            }
                        }
                    }
                    resolve(generated);
                };
                img.onerror = () => reject(new Error("Failed to load image"));
                img.src = sourceImage;
            });
            
            setSplitImages(results);
        } catch (e) {
            console.error(e);
            alert("Error al procesar la imagen.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleSaveSingleToGallery = (media: GeneratedMedia) => {
        setAllGeneratedMedia(prev => {
            if (prev.some(p => p.mediaUrl === media.mediaUrl)) return prev;
            return [media, ...prev];
        });
        alert("Imagen guardada en Galería");
    };

    const handleSaveAllAndExit = () => {
        // Add all unique split images to the main gallery
        setAllGeneratedMedia(prev => {
            const newItems = splitImages.filter(s => !prev.some(p => p.mediaUrl === s.mediaUrl));
            return [...newItems, ...prev];
        });
        onBack();
    };
    
    const handleDownload = (dataUrl: string, filename: string) => {
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const renderUploader = () => (
        <div className="w-full max-w-md mx-auto flex flex-col items-center text-center gap-6 my-auto px-4 animate-in fade-in zoom-in duration-300">
             <div className="flex w-full justify-between items-center">
                <h2 className="font-permanent-marker text-3xl text-yellow-400">Dividir Grid</h2>
                <button onClick={onBack} className={cn(secondaryButtonClasses, '!text-sm !py-1 !px-3')}>Volver</button>
            </div>
            
            <div className="w-full p-6 glass-panel rounded-2xl space-y-6 border border-white/10">
                <p className="text-neutral-300 text-sm leading-relaxed">
                    Herramienta de corte precisa (sin IA). Sube un grid generado (ej. Expresiones) para separarlo en imágenes individuales y guardarlas en tu galería.
                </p>
                
                <div className="space-y-3">
                    <label className="text-xs uppercase tracking-widest text-neutral-500 font-bold block">1. Imagen de Origen</label>
                    <div 
                        onClick={() => fileInputRef.current?.click()}
                        className="w-full h-48 border-2 border-dashed border-white/20 rounded-xl flex items-center justify-center cursor-pointer hover:border-yellow-400 hover:bg-white/5 transition-all relative overflow-hidden"
                    >
                        {sourceImage ? (
                            <img src={sourceImage} alt="Source" className="w-full h-full object-contain" />
                        ) : (
                            <div className="text-center text-neutral-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                <span className="text-sm">Click para subir Grid</span>
                            </div>
                        )}
                    </div>
                    <input type="file" accept="image/*" onChange={handleFileChange} ref={fileInputRef} className="hidden" />
                </div>

                <div className="space-y-3">
                    <label className="text-xs uppercase tracking-widest text-neutral-500 font-bold block">2. Geometría</label>
                    <div className="flex gap-2 p-1 bg-black/20 rounded-lg">
                        {(['2x2', '2x3'] as const).map(size => (
                            <button key={size} onClick={() => setGridSize(size)} className={cn('flex-1 py-2 rounded-md transition-all text-sm font-medium', gridSize === size ? 'bg-yellow-400 text-black shadow-lg' : 'text-neutral-400 hover:text-white')}>
                                {size}
                            </button>
                        ))}
                    </div>
                </div>

                <button onClick={splitImage} disabled={!sourceImage} className={cn(primaryButtonClasses, '!w-full shadow-xl disabled:opacity-50 disabled:scale-100')}>
                    Cortar Imágenes
                </button>
            </div>
        </div>
    );

    const renderResults = () => (
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center gap-6 my-auto px-4 pb-20">
             <div className="flex w-full justify-between items-center bg-black/40 p-4 rounded-xl backdrop-blur-md border border-white/10 sticky top-20 z-20 shadow-xl">
                <h2 className="font-permanent-marker text-lg sm:text-2xl text-white">Resultados ({splitImages.length})</h2>
                <div className="flex gap-2 sm:gap-3">
                    <button onClick={onBack} className="text-neutral-300 hover:text-white text-xs sm:text-sm font-bold bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full transition-colors">Volver</button>
                    <div className="w-px h-6 bg-white/20 mx-1 self-center"></div>
                    <button onClick={handleSaveAllAndExit} className={cn(primaryButtonClasses, '!py-1.5 !px-4 !text-xs sm:!text-sm shadow-none whitespace-nowrap')}>
                        Guardar Todo
                    </button>
                </div>
            </div>

            <div className={cn("grid gap-4 w-full", gridSize === '2x3' ? 'grid-cols-2 sm:grid-cols-3' : 'grid-cols-2')}>
                {splitImages.map((img, index) => (
                     <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ delay: index * 0.05 }}
                        className="bg-neutral-900 rounded-xl overflow-hidden border border-white/10 shadow-lg group relative aspect-square"
                    >
                        <img src={img.mediaUrl} alt="" className="w-full h-full object-contain bg-black/50" />
                        
                        {/* Overlay Controls */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3 backdrop-blur-[2px]">
                            <div className="flex gap-2">
                                <button 
                                    onClick={() => handleDownload(img.mediaUrl!, `split-${index + 1}.jpg`)}
                                    className="p-2 bg-white text-black rounded-full hover:bg-yellow-400 transition-colors shadow-lg"
                                    title="Descargar"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                                </button>
                                <button 
                                    onClick={() => onUseAsReference(img.mediaUrl!)}
                                    className="p-2 bg-white text-black rounded-full hover:bg-yellow-400 transition-colors shadow-lg"
                                    title="Usar como Referencia"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                </button>
                            </div>
                            <button 
                                onClick={() => handleSaveSingleToGallery(img)}
                                className="px-3 py-1 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-xs text-white transition-colors"
                            >
                                Guardar en Galería
                            </button>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 p-1.5 bg-black/60 pointer-events-none">
                            <span className="text-[10px] text-yellow-400 font-mono block text-center">Panel {index + 1}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );

    if (isLoading) {
        return (
            <div className="w-full h-full flex items-center justify-center bg-black/80 fixed inset-0 z-50">
                <LoadingSpinner messages={["Analizando píxeles...", "Cortando geometría...", "Generando archivos..."]} />
            </div>
        );
    }

    return splitImages.length > 0 ? renderResults() : renderUploader();
};

export default GridSplitter;
