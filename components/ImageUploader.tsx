
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState, useRef, useCallback, useEffect } from 'react';
import type { ChangeEvent, DragEvent } from 'react';
import { readMetadata } from '../lib/metadataUtils';
import { cn } from '../lib/utils';
import { primaryButtonClasses, secondaryButtonClasses } from '../lib/uiConstants';
import { REFERENCE_PRESETS } from '../lib/referencePresets';

interface ImageUploaderProps {
    onImageUpload: (dataUrl: string, metadata?: any) => void;
    onSwitchToCollage: () => void;
    onSwitchToGridSplitter: () => void;
    hasActiveSession: boolean;
    onReturnToStudio: () => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload, onSwitchToCollage, onSwitchToGridSplitter, hasActiveSession, onReturnToStudio }) => {
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    
    const handleFile = useCallback(async (file: File) => {
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onloadend = async () => {
                const dataUrl = reader.result as string;
                const metadata = await readMetadata(dataUrl);
                onImageUpload(dataUrl, metadata);
            };
            reader.readAsDataURL(file);
        }
    }, [onImageUpload]);

    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFile(e.dataTransfer.files[0]);
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            handleFile(e.target.files[0]);
        }
    };
    
    const handlePasteFromButton = async () => {
        alert('El acceso al portapapeles está bloqueado en este entorno. Por favor, usa Ctrl+V (o Cmd+V en Mac) en cualquier lugar de la página para pegar tu imagen.');
    };

    useEffect(() => {
        const handlePaste = (event: ClipboardEvent) => {
            if (!event.clipboardData) return;
            const items = event.clipboardData.items;
            for (let i = 0; i < items.length; i++) {
                if (items[i].type.indexOf('image') !== -1) {
                    const file = items[i].getAsFile();
                    if (file) {
                        handleFile(file);
                        event.preventDefault();
                    }
                    break;
                }
            }
        };

        document.addEventListener('paste', handlePaste);
        return () => {
            document.removeEventListener('paste', handlePaste);
        };
    }, [handleFile]);

    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] w-full px-4 py-6 max-w-md mx-auto">
            
            {/* Header Compacto */}
            <div className="text-center space-y-2 mb-6">
                <h2 className="font-permanent-marker text-3xl text-yellow-400 drop-shadow-md">
                    Alquimia Visual
                </h2>
                <p className="text-neutral-400 text-xs font-light">Sube tu foto y transforma la realidad.</p>
            </div>

            {/* Main Action Card */}
            <div className="w-full space-y-4">
                
                {/* Upload Zone */}
                <div
                    className={cn(
                        "relative w-full p-6 border-2 border-dashed rounded-3xl transition-all duration-300 glass-panel flex flex-col items-center justify-center gap-4 group", 
                        isDragging ? "border-yellow-400 bg-yellow-400/10 scale-[1.02]" : "border-white/10 hover:border-yellow-400/50 hover:bg-white/5"
                    )}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                >
                    <div className="w-14 h-14 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-yellow-400 shadow-lg group-hover:scale-110 transition-transform">
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" /></svg>
                    </div>
                    <div className="text-center">
                        <p className="font-permanent-marker text-lg text-white group-hover:text-yellow-200 transition-colors">Toca para subir</p>
                        <p className="text-neutral-500 text-[10px] mt-1">o arrastra aquí</p>
                    </div>
                    
                    {/* Botones de Acción dentro de la tarjeta */}
                    <div className="flex gap-2 w-full mt-2" onClick={(e) => e.stopPropagation()}>
                        <button type="button" onClick={() => fileInputRef.current?.click()} className={cn(primaryButtonClasses, "!text-sm !py-2 !px-4 flex-1 shadow-none")}>
                            Galería
                        </button>
                        <button type="button" onClick={handlePasteFromButton} className={cn(secondaryButtonClasses, "!text-sm !py-2 !px-4 flex-1 !border-white/20")}>
                            Pegar
                        </button>
                    </div>
                </div>

                {/* Presets Horizontal Scroll (Stories Style) - Centered */}
                <div className="w-full">
                    <div className="flex items-center justify-center mb-2">
                        <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Modelos de Prueba</p>
                    </div>
                    {/* Added justify-center to center the items */}
                    <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar snap-x px-1 justify-center">
                        {REFERENCE_PRESETS.map((model) => (
                            <button
                                key={model.id}
                                onClick={() => onImageUpload(model.url)}
                                className="flex flex-col items-center gap-2 group snap-start min-w-[70px]"
                            >
                                <div className="w-16 h-16 rounded-full p-0.5 border-2 border-transparent group-hover:border-yellow-400 transition-all">
                                    <div className="w-full h-full rounded-full overflow-hidden bg-neutral-800">
                                        <img src={model.url} alt={model.name} className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500" />
                                    </div>
                                </div>
                                <span className="text-[10px] font-permanent-marker text-neutral-400 group-hover:text-white transition-colors">{model.name}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Secondary Tools Grid */}
                <div className="grid grid-cols-2 gap-3">
                    <button onClick={onSwitchToCollage} className="flex items-center justify-center gap-2 py-3 px-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl transition-all group">
                        <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-125 transition-transform" />
                        <span className="text-xs font-bold text-neutral-300 group-hover:text-white">Lienzo Libre</span>
                    </button>
                    <button onClick={onSwitchToGridSplitter} className="flex items-center justify-center gap-2 py-3 px-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl transition-all group">
                        <div className="w-2 h-2 rounded-full bg-purple-500 group-hover:scale-125 transition-transform" />
                        <span className="text-xs font-bold text-neutral-300 group-hover:text-white">Cortar Grid</span>
                    </button>
                </div>

                {/* Active Session Button (Sticky Bottom Feel) */}
                {hasActiveSession && (
                    <div className="pt-4">
                        <button onClick={onReturnToStudio} className="w-full group flex items-center justify-center gap-2 font-permanent-marker text-sm text-black bg-gradient-to-r from-yellow-400 to-yellow-300 py-3 rounded-full shadow-lg hover:shadow-yellow-400/20 transition-all active:scale-95">
                            <span className="relative flex h-2 w-2 mr-1">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
                            </span>
                            Volver a Sesión Activa
                        </button>
                    </div>
                )}
            </div>

            <input ref={fileInputRef} id="file-upload" type="file" className="hidden" accept="image/png, image/jpeg, image/webp" onChange={handleChange} />
        </div>
    );
};

export default ImageUploader;
