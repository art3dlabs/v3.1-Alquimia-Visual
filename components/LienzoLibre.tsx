/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import { primaryButtonClasses, secondaryButtonClasses } from '../lib/uiConstants';
import LoadingSpinner from './LoadingSpinner';
import type { GeneratedMedia } from '../App';
import { Trash2, Plus, Download, ArrowLeft, Maximize2 } from 'lucide-react';

interface Layer {
    id: string;
    url: string;
    x: number;
    y: number;
    width: number;
    height: number;
    zIndex: number;
}

interface LienzoLibreProps {
    onBack: () => void;
    onUseAsReference: (imageUrl: string) => void;
    setAllGeneratedMedia?: React.Dispatch<React.SetStateAction<GeneratedMedia[]>>;
}

const ASPECT_RATIOS = [
    { label: '3:4', w: 1200, h: 1600 },
    { label: '9:16', w: 900, h: 1600 },
    { label: '1:1', w: 1600, h: 1600 },
    { label: '16:9', w: 1600, h: 900 },
];

const LienzoLibre: React.FC<LienzoLibreProps> = ({ onBack, onUseAsReference, setAllGeneratedMedia }) => {
    const [layers, setLayers] = useState<Layer[]>([]);
    const [selectedLayerId, setSelectedLayerId] = useState<string | null>(null);
    const [canvasSize, setCanvasSize] = useState(ASPECT_RATIOS[2]);
    const [isLoading, setIsLoading] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const addLayer = (url: string) => {
        const newLayer: Layer = {
            id: crypto.randomUUID(),
            url,
            x: 50,
            y: 50,
            width: 300,
            height: 300,
            zIndex: layers.length,
        };
        setLayers([...layers, newLayer]);
        setSelectedLayerId(newLayer.id);
    };

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (event) => addLayer(event.target?.result as string);
        reader.readAsDataURL(file);
    };

    const updateLayer = (id: string, updates: Partial<Layer>) => {
        setLayers(layers.map(l => l.id === id ? { ...l, ...updates } : l));
    };

    const deleteLayer = (id: string) => {
        setLayers(layers.filter(l => l.id !== id));
        if (selectedLayerId === id) setSelectedLayerId(null);
    };

    const exportCanvas = async () => {
        setIsLoading(true);
        const canvas = document.createElement('canvas');
        canvas.width = canvasSize.w;
        canvas.height = canvasSize.h;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        for (const layer of [...layers].sort((a, b) => a.zIndex - b.zIndex)) {
            const img = new Image();
            img.crossOrigin = 'anonymous';
            img.src = layer.url;
            await new Promise(resolve => img.onload = resolve);
            ctx.drawImage(img, layer.x, layer.y, layer.width, layer.height);
        }

        const dataUrl = canvas.toDataURL('image/jpeg', 0.95);
        setIsLoading(false);
        return dataUrl;
    };

    return (
        <div className="fixed inset-0 z-50 flex flex-col lg:flex-row bg-neutral-950">
            {/* Sidebar Tools - Fixed height on mobile, scrollable content */}
            <div className="w-full lg:w-80 bg-neutral-900 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col h-[35vh] lg:h-full shrink-0">
                <div className="p-2 border-b border-white/10 flex items-center gap-2">
                    <button onClick={onBack} className="p-1.5 hover:bg-white/10 rounded-full"><ArrowLeft size={18} /></button>
                    <h1 className="font-permanent-marker text-lg text-yellow-400">Lienzo</h1>
                </div>
                
                <div className="p-2 space-y-3 flex-1 overflow-y-auto">
                    <div className="space-y-1">
                        <label className="text-[9px] font-bold text-neutral-500 uppercase">Formato</label>
                        <div className="grid grid-cols-4 gap-1">
                            {ASPECT_RATIOS.map(r => (
                                <button key={r.label} onClick={() => setCanvasSize(r)} className={cn("p-1 rounded border text-[10px]", canvasSize.label === r.label ? "bg-yellow-400 text-black" : "bg-neutral-800 text-white")}>
                                    {r.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <button onClick={() => fileInputRef.current?.click()} className={cn(primaryButtonClasses, "w-full flex items-center justify-center gap-1 !py-1 !text-xs")}>
                        <Plus size={14} /> Imagen
                    </button>
                    <input type="file" ref={fileInputRef} onChange={handleFileUpload} accept="image/*" className="hidden" />

                    <div className="space-y-1">
                        <label className="text-[9px] font-bold text-neutral-500 uppercase">Capas ({layers.length})</label>
                        <div className="space-y-1">
                            {layers.map(l => (
                                <div key={l.id} className={cn("p-1 rounded flex items-center gap-2 cursor-pointer", selectedLayerId === l.id ? "bg-white/10" : "hover:bg-white/5")} onClick={() => setSelectedLayerId(l.id)}>
                                    <img src={l.url} className="w-6 h-6 object-cover rounded" alt="" />
                                    <span className="flex-1 text-[10px] truncate">Capa {l.zIndex + 1}</span>
                                    <button onClick={(e) => { e.stopPropagation(); deleteLayer(l.id); }} className="text-red-400"><Trash2 size={14} /></button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="p-2 border-t border-white/10 space-y-1">
                    <button onClick={async () => { const url = await exportCanvas(); if(url) onUseAsReference(url); }} className={cn(primaryButtonClasses, "w-full !py-1 !text-[10px]")}>Usar Ref</button>
                    {setAllGeneratedMedia && (
                        <button onClick={async () => { const url = await exportCanvas(); if(url) setAllGeneratedMedia(prev => [{ status: 'done', mediaUrl: url, sourceCaption: 'Lienzo Libre', generationData: {} }, ...prev]); }} className={cn(secondaryButtonClasses, "w-full !py-1 !text-[10px]")}>Guardar</button>
                    )}
                </div>
            </div>

            {/* Canvas Area - Flex-1 ensures it takes remaining space */}
            <div className="flex-1 relative overflow-hidden bg-neutral-950 flex items-center justify-center p-4">
                <div 
                    className="bg-white shadow-2xl relative"
                    style={{ 
                        width: Math.min(canvasSize.w / 3, window.innerWidth * 0.8), 
                        height: Math.min(canvasSize.h / 3, window.innerHeight * 0.5) 
                    }}
                >
                    {layers.map(l => (
                        <motion.div
                            key={l.id}
                            drag
                            dragMomentum={false}
                            className={cn("absolute cursor-move touch-none", selectedLayerId === l.id && "ring-2 ring-yellow-400")}
                            style={{ left: l.x, top: l.y, width: l.width, height: l.height, zIndex: l.zIndex }}
                            onDragEnd={(_, info) => updateLayer(l.id, { x: l.x + info.offset.x, y: l.y + info.offset.y })}
                            onClick={() => setSelectedLayerId(l.id)}
                        >
                            <img src={l.url} className="w-full h-full object-cover pointer-events-none" alt="" />
                            {selectedLayerId === l.id && (
                                <div className="absolute -right-2 -bottom-2 w-6 h-6 bg-yellow-400 rounded-full cursor-se-resize flex items-center justify-center" onPointerDown={(e) => {
                                    e.stopPropagation();
                                    const startX = e.clientX;
                                    const startY = e.clientY;
                                    const startWidth = l.width;
                                    const startHeight = l.height;

                                    const onMouseMove = (moveEvent: MouseEvent) => {
                                        const deltaX = moveEvent.clientX - startX;
                                        const deltaY = moveEvent.clientY - startY;
                                        updateLayer(l.id, { width: Math.max(20, startWidth + deltaX), height: Math.max(20, startHeight + deltaY) });
                                    };

                                    const onMouseUp = () => {
                                        document.removeEventListener('mousemove', onMouseMove);
                                        document.removeEventListener('mouseup', onMouseUp);
                                    };

                                    document.addEventListener('mousemove', onMouseMove);
                                    document.addEventListener('mouseup', onMouseUp);
                                }}>
                                    <Maximize2 size={12} className="text-black" />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>

            {isLoading && <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-[100]"><LoadingSpinner /></div>}
        </div>
    );
};

export default LienzoLibre;
