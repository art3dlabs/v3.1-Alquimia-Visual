import React, { useState } from 'react';
import { cn, copyToClipboard } from '../lib/utils';

interface MetadataDisplayProps {
    metadata: Record<string, any>;
    onUsePrompt?: (prompt: string) => void;
    onAdaptPrompt?: (prompt: string) => void;
    onSetAsReference?: (imageUrl: string) => void;
    isAdapting?: boolean;
}

const MetadataDisplay: React.FC<MetadataDisplayProps> = ({ metadata, onUsePrompt, onAdaptPrompt, onSetAsReference, isAdapting }) => {
    const [copiedKey, setCopiedKey] = useState<string | null>(null);
    const [usedPromptKey, setUsedPromptKey] = useState<string | null>(null);

    if (!metadata || Object.keys(metadata).length === 0) {
        return <p className="text-neutral-500 text-xs italic">No se encontraron metadatos.</p>;
    }

    const handleCopy = async (key: string, text: string) => {
        await copyToClipboard(text);
        setCopiedKey(key);
        setTimeout(() => setCopiedKey(null), 2000);
    };

    const handleUsePrompt = (key: string, text: string) => {
        if (onUsePrompt) {
            onUsePrompt(text);
            setUsedPromptKey(key);
            setTimeout(() => setUsedPromptKey(null), 2000);
        }
    };

    return (
        <div className="space-y-3">
            {Object.entries(metadata).map(([key, value]) => {
                // Skip empty values
                if (value === undefined || value === null || value === '') return null;

                const isPrompt = key === 'Prompt' || key === 'Prompt o Datos Crudos';
                const textValue = Array.isArray(value) ? value.join('\n') : String(value);

                // Helper to render value
                const renderValue = (val: any) => {
                    if (typeof val === 'string' && val.startsWith('data:image/')) {
                        return (
                            <div className="mt-1 relative group/image">
                                <img src={val} alt="Metadata preview" className="max-w-full h-auto rounded border border-white/10" />
                                <button 
                                    onClick={() => onSetAsReference?.(val)}
                                    className="absolute bottom-2 left-2 right-2 bg-yellow-400/90 text-black font-bold text-[10px] py-1.5 rounded shadow-lg opacity-0 group-hover/image:opacity-100 transition-opacity"
                                >
                                    Usar como Referencia
                                </button>
                            </div>
                        );
                    }
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                        return (
                            <div className="mt-1 space-y-2">
                                {Object.entries(val).map(([subKey, subValue]) => (
                                    <div key={subKey}>
                                        <span className="text-[9px] font-bold text-neutral-500 uppercase">{subKey}:</span>
                                        <div className="pl-2">{renderValue(subValue)}</div>
                                    </div>
                                ))}
                            </div>
                        );
                    }
                    if (Array.isArray(val)) {
                        return (
                            <ul className="list-disc list-inside">
                                {val.map((item, idx) => <li key={idx}>{String(item)}</li>)}
                            </ul>
                        );
                    }
                    return <p className={cn(isPrompt && "italic border-l-2 border-yellow-400/30 pl-2 py-0.5")}>{String(val)}</p>;
                };

                return (
                    <div key={key} className="flex flex-col border-b border-white/5 pb-2 last:border-0 group">
                        <div className="flex items-center justify-between mb-1">
                            <span className="text-[10px] font-bold text-yellow-400 uppercase tracking-wider">{key}</span>
                            
                            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                {isPrompt && onAdaptPrompt && (
                                    <button 
                                        onClick={() => onAdaptPrompt(textValue)}
                                        disabled={isAdapting}
                                        className="text-[9px] bg-blue-400/20 text-blue-400 hover:bg-blue-400 hover:text-black px-2 py-0.5 rounded transition-colors disabled:opacity-50"
                                    >
                                        {isAdapting ? 'Adaptando...' : 'Adaptar'}
                                    </button>
                                )}
                                {isPrompt && onUsePrompt && (
                                    <button 
                                        onClick={() => handleUsePrompt(key, textValue)}
                                        className="text-[9px] bg-yellow-400/20 text-yellow-400 hover:bg-yellow-400 hover:text-black px-2 py-0.5 rounded transition-colors"
                                    >
                                        {usedPromptKey === key ? '¡Enviado!' : 'Usar Prompt'}
                                    </button>
                                )}
                                <button 
                                    onClick={() => handleCopy(key, textValue)}
                                    className="text-[9px] bg-white/10 text-neutral-300 hover:bg-white/20 hover:text-white px-2 py-0.5 rounded transition-colors"
                                >
                                    {copiedKey === key ? '¡Copiado!' : 'Copiar'}
                                </button>
                            </div>
                        </div>
                        <div className="text-[11px] text-neutral-300 break-words">
                            {renderValue(value)}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default MetadataDisplay;
