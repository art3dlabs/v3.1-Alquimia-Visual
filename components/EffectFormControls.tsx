
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState, useCallback, useMemo, useEffect, useRef } from 'react';
import type { ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PhotoConfig, DynamicField, ToggleOption } from '../photoPacks';
import { cn, buildFinalPrompt } from '../lib/utils';
import { primaryButtonClasses, secondaryButtonClasses } from '../lib/uiConstants';
import type { ImageStatus } from '../App';
import { REFERENCE_PRESETS } from '../lib/referencePresets';

interface EffectFormControlsProps {
    photoConfig: PhotoConfig,
    onGenerate: (data: any) => void,
    status: ImageStatus,
    isApiKeyMissingForVideo: boolean;
    setIsApiKeyMissingForVideo: (isMissing: boolean) => void;
    onShowInitialPrompt: (prompt: string) => void;
    initialUserInput?: string;
    userInput: string;
    setUserInput: (val: string) => void;
}

// --- SUB-COMPONENT: Config Pop-up Grid Selector ---
interface ConfigOption {
    label: string;
    value: any;
}

interface ConfigPopupSelectorProps {
    label: string;
    valueLabel: string; // The text to display as currently selected
    options: ConfigOption[];
    onSelect: (value: any) => void;
}

const ConfigPopupSelector: React.FC<ConfigPopupSelectorProps> = ({ label, valueLabel, options, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div className="flex gap-3 items-stretch h-14">
            {/* 1. Trigger Button (Opens the grid) */}
            <button 
                onClick={() => setIsOpen(true)}
                className={cn(
                    "flex-shrink-0 w-[35%] bg-neutral-800 hover:bg-neutral-700 border border-white/10 hover:border-yellow-400/50 rounded-xl flex flex-col items-center justify-center transition-all group relative overflow-hidden"
                )}
            >
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest group-hover:text-yellow-400 transition-colors z-10 relative">
                    {label}
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-neutral-500 mt-1 group-hover:text-white transition-colors z-10 relative" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                {/* Subtle background glow on hover */}
                <div className="absolute inset-0 bg-yellow-400/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>

            {/* 2. Value Display (Passive readout) */}
            <div className="flex-1 bg-[#0a0a0a] border border-white/10 rounded-xl flex items-center px-4 relative overflow-hidden">
                <span className="font-permanent-marker text-lg text-yellow-400 truncate w-full text-right relative z-10">
                    {valueLabel}
                </span>
                {/* Deco line */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/5" />
            </div>

            {/* 3. Modal Grid Popup */}
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        {/* Backdrop */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-md"
                        />
                        
                        {/* Content Box */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ type: "spring", bounce: 0.3, duration: 0.3 }}
                            className="relative w-full max-w-sm bg-[#121212] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[60vh] ring-1 ring-white/10"
                        >
                            {/* Header */}
                            <div className="p-4 border-b border-white/10 flex justify-between items-center bg-neutral-900/80 backdrop-blur-sm sticky top-0 z-10">
                                <h3 className="font-bold text-white text-sm uppercase tracking-widest">Seleccionar {label}</h3>
                                <button onClick={() => setIsOpen(false)} className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </div>

                            {/* Grid Options */}
                            <div className="p-4 overflow-y-auto custom-scrollbar bg-[#0f0f0f]">
                                <div className="grid grid-cols-2 gap-2">
                                    {options.map((opt, idx) => {
                                        const isSelected = opt.label === valueLabel;
                                        return (
                                            <button
                                                key={idx}
                                                onClick={() => { onSelect(opt.value); setIsOpen(false); }}
                                                className={cn(
                                                    "relative p-3 rounded-xl border text-left transition-all duration-200 flex flex-col gap-1 min-h-[60px] justify-center group",
                                                    isSelected 
                                                        ? "bg-yellow-400 border-yellow-400 text-black shadow-lg" 
                                                        : "bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/20 text-neutral-300"
                                                )}
                                            >
                                                <span className={cn("text-xs font-bold leading-tight", isSelected ? "text-black" : "text-white")}>
                                                    {opt.label}
                                                </span>
                                                {isSelected && (
                                                    <motion.div 
                                                        layoutId={`active-dot-${label}`}
                                                        className="absolute top-2 right-2 w-2 h-2 bg-black rounded-full" 
                                                    />
                                                )}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

// --- Main Helper Functions ---

const getInitialDynamicFieldValues = (fields?: DynamicField[]) => {
    if (!fields) return {};
    const initialValues: Record<string, any> = {};
    fields.forEach(field => {
        if (field.type === 'select' && field.options && field.options.length > 0) {
            const firstOption = field.options[0];
            if (typeof firstOption === 'string') {
                initialValues[field.key] = firstOption;
            } else if ((firstOption as any).values) {
                Object.assign(initialValues, (firstOption as any).values);
            } else if ((firstOption as any).value) {
                initialValues[field.key] = (firstOption as any).value;
            }
        } else if (field.type === 'text') {
            initialValues[field.key] = field.defaultValue || '';
        } else if (field.type === 'toggle-group') {
            const activeValues: string[] = [];
            if (field.options) {
                field.options.forEach(opt => {
                    const toggleOpt = opt as ToggleOption;
                    if (toggleOpt.default) {
                        activeValues.push(toggleOpt.value);
                    }
                });
            }
            initialValues[field.key] = activeValues.join(' ');
        }
    });
    return initialValues;
};

const getAllKeysFromSelectOptions = (options?: DynamicField['options']) => {
    const keys = new Set<string>();
    if (!options) return [];
    options.forEach(option => {
        if (typeof option === 'object' && 'values' in option) {
            Object.keys(option.values).forEach(key => keys.add(key));
        }
    });
    return Array.from(keys);
};


const EffectFormControls: React.FC<EffectFormControlsProps> = ({
    photoConfig,
    onGenerate,
    status,
    isApiKeyMissingForVideo,
    setIsApiKeyMissingForVideo,
    onShowInitialPrompt,
    initialUserInput,
    userInput,
    setUserInput
}) => {
    const { key: photoKey, mediaType = 'image', requiresSecondImage, allowsSecondImage, allowsThirdImage, requiresUserInput, dynamicFields, requiresAspectRatio, supportedAspectRatios } = photoConfig;
    
    // const [userInput, setUserInput] = useState(initialUserInput || '');
    const [enhancePrompt, setEnhancePrompt] = useState(true);
    const [isConfigExpanded, setIsConfigExpanded] = useState(false);
    const [expandedToggleGroups, setExpandedToggleGroups] = useState<Record<string, boolean>>({});
    const [optimizePrompt, setOptimizePrompt] = useState(false);
    const [preserveIdentity, setPreserveIdentity] = useState(true); 
    const [addWatermark, setAddWatermark] = useState(false); // New Watermark State
    const [addArt3dlabsText, setAddArt3dlabsText] = useState(false); // New Art3dlabs Text State
    const [secondImage, setSecondImage] = useState<string | null>(null);
    const [thirdImage, setThirdImage] = useState<string | null>(null); 
    const [dynamicFieldValues, setDynamicFieldValues] = useState<Record<string, any>>(() => getInitialDynamicFieldValues(dynamicFields));
    const [activeDescription, setActiveDescription] = useState<{ label: string, text: string } | null>(null);
    
    const [aspectRatio, setAspectRatio] = useState(() => {
        return supportedAspectRatios?.[0] || '3:4';
    });

    const secondImageInputRef = useRef<HTMLInputElement>(null);
    const thirdImageInputRef = useRef<HTMLInputElement>(null); 

    useEffect(() => {
        setDynamicFieldValues(getInitialDynamicFieldValues(dynamicFields));
        if (!initialUserInput) {
            setUserInput('');
        }
    }, [photoConfig.key, dynamicFields, initialUserInput]);

    // Removed the automatic useEffect check for API Key here.
    // We now check lazily when the user clicks generate to avoid errors on session resume.

    const isGenerateDisabled = useMemo(() => {
        if (status === 'pending') return true;
        if (photoConfig.requiresSecondImage && !secondImage) return true;
        if (photoConfig.requiresUserInput && !photoConfig.userInputIsOptional && !userInput.trim() && !photoConfig.dynamicFields) {
            return true;
        }
        if (photoConfig.dynamicFields) {
            const requiredTextFields = photoConfig.dynamicFields.filter(f => f.type === 'text' && !f.isOptional);
            if (requiredTextFields.some(f => !(dynamicFieldValues[f.key] || '').trim())) {
                return true;
            }
        }
        return false;
    }, [status, secondImage, userInput, dynamicFieldValues, photoConfig]);
    
    const handleImageUpload = (e: ChangeEvent<HTMLInputElement>, setter: (val: string | null) => void) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                if (reader.result) setter(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };
    
    const handleDynamicFieldChange = (key: string, value: string, option?: any, field?: DynamicField) => {
        setDynamicFieldValues(prev => {
            if (option && field && field.type === 'select') {
                if (typeof option === 'object' && 'values' in option) {
                    const newState = { ...prev };
                    const keysManagedByThisDropdown = getAllKeysFromSelectOptions(field.options);
                    keysManagedByThisDropdown.forEach(k => delete newState[k]);
                    return { ...newState, ...option.values };
                }
            }
            return { ...prev, [key]: value };
        });
    };

    const handleToggleGroupChange = (fieldKey: string, optionValue: string, isChecked: boolean, allOptions: ToggleOption[]) => {
        setDynamicFieldValues(prev => {
            const currentString = prev[fieldKey] || '';
            const activeIndices = new Set<number>();
            allOptions.forEach((opt, idx) => {
                if (currentString.includes(opt.value)) {
                    activeIndices.add(idx);
                }
            });

            const targetIndex = allOptions.findIndex(opt => opt.value === optionValue);
            
            if (isChecked) {
                activeIndices.add(targetIndex);
            } else {
                activeIndices.delete(targetIndex);
            }

            const newString = allOptions
                .filter((_, idx) => activeIndices.has(idx))
                .map(opt => opt.value)
                .join(' ');

            return { ...prev, [fieldKey]: newString };
        });
    };

    const handleSubmit = (useProModel: boolean = false, useImagen: boolean = false) => {
        console.log("Submitting form with userInput:", userInput);
        onGenerate({
            userInput,
            enhancePrompt: mediaType === 'video' ? enhancePrompt : false,
            optimizePrompt,
            preserveIdentity,
            addWatermark, // Pass watermark state
            addArt3dlabsText, // Pass Art3dlabs text state
            secondImage: secondImage || undefined,
            thirdImage: thirdImage || undefined, 
            dynamicData: dynamicFieldValues,
            aspectRatio: requiresAspectRatio ? aspectRatio : undefined,
            useProModel,
            useImagen // Flag for "Pure Generation" mode
        });
    };
    
    const handleSelectKey = async () => {
        if (window.aistudio) {
            await window.aistudio.openSelectKey();
            setIsApiKeyMissingForVideo(false);
        }
    };

    const handleProGenerate = async (useImagen: boolean = false) => {
        if (window.aistudio) {
            const hasKey = await window.aistudio.hasSelectedApiKey();
            if (!hasKey) {
                await window.aistudio.openSelectKey();
                setIsApiKeyMissingForVideo(false);
            }
        }
        handleSubmit(true, useImagen);
    };

    const handleVideoGenerate = async () => {
        if (window.aistudio) {
            const hasKey = await window.aistudio.hasSelectedApiKey();
            if (!hasKey) {
                await window.aistudio.openSelectKey();
                setIsApiKeyMissingForVideo(false);
            }
        }
        handleSubmit();
    };
    
    const handleResetForm = () => {
        setUserInput('');
        setEnhancePrompt(true);
        setOptimizePrompt(false);
        setPreserveIdentity(true);
        setAddWatermark(false);
        setAddArt3dlabsText(false);
        setSecondImage(null);
        setThirdImage(null);
        if (secondImageInputRef.current) secondImageInputRef.current.value = '';
        if (thirdImageInputRef.current) thirdImageInputRef.current.value = '';
        setAspectRatio(supportedAspectRatios?.[0] || '3:4');
        setDynamicFieldValues(getInitialDynamicFieldValues(dynamicFields));
    };

    const handleShowPrompt = () => {
        const currentPrompt = buildFinalPrompt(photoConfig, {
            userInput,
            dynamicData: dynamicFieldValues,
            preserveIdentity,
            addWatermark,
            aspectRatio: requiresAspectRatio ? aspectRatio : undefined
        });
        onShowInitialPrompt(currentPrompt);
    };

    return (
        <>
            <div className="p-4 bg-white/5 border border-white/10 rounded-lg space-y-4 overflow-y-auto flex-1 custom-scrollbar pb-24">
                <div className="flex justify-between items-center mb-2">
                    <button
                        onClick={handleShowPrompt}
                        className="flex items-center gap-2 text-sm bg-white/10 px-3 py-2 rounded-md transition-colors text-neutral-300 hover:bg-yellow-400 hover:text-black font-permanent-marker"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                        Ver Prompt
                    </button>
                </div>
                
                {/* Images Upload Container */}
                {((requiresSecondImage || allowsSecondImage) || allowsThirdImage) && (
                    <div className="flex flex-row gap-4 justify-center">
                        {/* Second Image Upload */}
                        {(requiresSecondImage || allowsSecondImage) && (
                            <div className="flex-1 max-w-[200px]">
                                <label className="font-permanent-marker text-neutral-300 mb-2 text-sm text-center block whitespace-nowrap overflow-hidden text-ellipsis">{requiresSecondImage ? 'Segunda Foto' : '2ª Foto (Opcional)'}</label>
                                {secondImage ? (
                                    <div className="relative w-full bg-neutral-900 rounded-md flex items-center justify-center p-1 aspect-square border border-white/10">
                                        <img src={secondImage} alt="Reference" className="max-h-full max-w-full object-contain rounded" />
                                        <button onClick={() => setSecondImage(null)} className="absolute top-1 right-1 bg-black/50 p-1 rounded-full text-white hover:bg-black focus:outline-none ring-2 ring-transparent focus:ring-yellow-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                        </button>
                                    </div>
                                ) : (
                                    <>
                                        <label htmlFor={`upload-${photoKey}`} className="cursor-pointer w-full aspect-square bg-neutral-900 border-2 border-dashed border-neutral-600 rounded-md flex flex-col items-center justify-center text-neutral-400 hover:border-yellow-400 hover:text-yellow-400 transition-colors">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
                                            <span className="text-xs mt-2 font-sans">Subir</span>
                                        </label>
                                        <input ref={secondImageInputRef} id={`upload-${photoKey}`} type="file" className="hidden" accept="image/png, image/jpeg, image/webp" onChange={(e) => handleImageUpload(e, setSecondImage)} />
                                        <div className="flex gap-2 mt-3 justify-center">
                                            {REFERENCE_PRESETS.map((p) => (
                                                <button key={p.id} onClick={() => setSecondImage(p.url)} className="w-10 h-10 rounded-full overflow-hidden border border-white/20 hover:border-yellow-400 transition-colors" title={`Usar ${p.name}`}>
                                                    <img src={p.url} alt={p.name} className="w-full h-full object-cover" />
                                                </button>
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>
                        )}

                        {/* Third Image Upload */}
                        {allowsThirdImage && (
                            <div className="flex-1 max-w-[200px]">
                                <label className="font-permanent-marker text-neutral-300 mb-2 text-sm text-center block whitespace-nowrap overflow-hidden text-ellipsis">3ª Foto (Opcional)</label>
                                {thirdImage ? (
                                    <div className="relative w-full bg-neutral-900 rounded-md flex items-center justify-center p-1 aspect-square border border-white/10">
                                        <img src={thirdImage} alt="Reference 3" className="max-h-full max-w-full object-contain rounded" />
                                        <button onClick={() => setThirdImage(null)} className="absolute top-1 right-1 bg-black/50 p-1 rounded-full text-white hover:bg-black focus:outline-none ring-2 ring-transparent focus:ring-yellow-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                        </button>
                                    </div>
                                ) : (
                                    <>
                                        <label htmlFor={`upload-3-${photoKey}`} className="cursor-pointer w-full aspect-square bg-neutral-900 border-2 border-dashed border-neutral-600 rounded-md flex flex-col items-center justify-center text-neutral-400 hover:border-yellow-400 hover:text-yellow-400 transition-colors">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
                                            <span className="text-xs mt-2 font-sans">Subir</span>
                                        </label>
                                        <input ref={thirdImageInputRef} id={`upload-3-${photoKey}`} type="file" className="hidden" accept="image/png, image/jpeg, image/webp" onChange={(e) => handleImageUpload(e, setThirdImage)} />
                                        <div className="flex gap-2 mt-3 justify-center">
                                            {REFERENCE_PRESETS.map((p) => (
                                                <button key={p.id} onClick={() => setThirdImage(p.url)} className="w-10 h-10 rounded-full overflow-hidden border border-white/20 hover:border-yellow-400 transition-colors" title={`Usar ${p.name}`}>
                                                    <img src={p.url} alt={p.name} className="w-full h-full object-cover" />
                                                </button>
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                )}

                {/* Main Prompt Input (Only if required by effect) */}
                {requiresUserInput && (
                    <div className="mt-2">
                        <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-2 block px-1">Tu Prompt</label>
                        <textarea 
                            rows={6}
                            value={userInput} 
                            onChange={(e) => setUserInput(e.target.value)} 
                            onFocus={(e) => {
                                const el = e.target;
                                setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'center' }), 300);
                            }}
                            placeholder="Describe la imagen que quieres crear..." 
                            className="w-full bg-[#121212] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-neutral-500 focus:ring-1 focus:ring-yellow-400 focus:outline-none transition-all duration-200 resize-y min-h-[10rem] text-sm leading-relaxed shadow-inner" 
                        />
                    </div>
                )}

                {/* --- CONFIGURATION GROUP --- */}
                <div className="space-y-4 bg-white/5 p-4 rounded-lg border border-white/10 mt-2 transition-all duration-300">
                    <button 
                        onClick={() => setIsConfigExpanded(!isConfigExpanded)}
                        className="w-full flex items-center justify-between text-sm font-bold text-neutral-300 border-b border-white/10 pb-2 hover:text-yellow-400 transition-colors group"
                    >
                        <span>Configuración</span>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className={cn("h-4 w-4 transition-transform duration-300", isConfigExpanded ? "rotate-180" : "")} 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    
                    {isConfigExpanded && (
                        <div className="space-y-4 pt-2 animate-in fade-in slide-in-from-top-2 duration-300">
                            {/* 1. Preserve Face Toggle */}
                            <div className="flex items-center justify-between py-1">
                                <label className="flex items-center gap-3 cursor-pointer group w-full justify-between">
                                    <span className={cn("text-sm font-medium transition-colors", preserveIdentity ? 'text-yellow-400' : 'text-neutral-400 group-hover:text-neutral-300')}>
                                        Preservar Identidad Facial
                                    </span>
                                    <div className="relative">
                                        <input
                                            type="checkbox"
                                            checked={preserveIdentity}
                                            onChange={(e) => setPreserveIdentity(e.target.checked)}
                                            className="peer sr-only"
                                        />
                                        <div className="w-10 h-6 bg-neutral-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-400 transition-colors border border-white/20"></div>
                                    </div>
                                </label>
                            </div>

                            {/* 2. Optimize Prompt Toggle */}
                            <div className="flex items-center justify-between py-1">
                                <label className="flex items-center gap-3 cursor-pointer group w-full justify-between">
                                    <span className={cn("text-sm font-medium transition-colors", optimizePrompt ? 'text-yellow-400' : 'text-neutral-400 group-hover:text-neutral-300')}>
                                        Optimizar Prompt (IA)
                                    </span>
                                    <div className="relative">
                                        <input
                                            type="checkbox"
                                            checked={optimizePrompt}
                                            onChange={(e) => setOptimizePrompt(e.target.checked)}
                                            className="peer sr-only"
                                        />
                                        <div className="w-10 h-6 bg-neutral-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-400 transition-colors border border-white/20"></div>
                                    </div>
                                </label>
                            </div>

                            {/* 3. Watermark Toggle (New) */}
                            <div className="flex items-center justify-between py-1">
                                <label className="flex items-center gap-3 cursor-pointer group w-full justify-between">
                                    <span className={cn("text-sm font-medium transition-colors", addWatermark ? 'text-yellow-400' : 'text-neutral-400 group-hover:text-neutral-300')}>
                                        Marca de Agua (Art3dlabs)
                                    </span>
                                    <div className="relative">
                                        <input
                                            type="checkbox"
                                            checked={addWatermark}
                                            onChange={(e) => setAddWatermark(e.target.checked)}
                                            className="peer sr-only"
                                        />
                                        <div className="w-10 h-6 bg-neutral-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-400 transition-colors border border-white/20"></div>
                                    </div>
                                </label>
                            </div>

                            {/* 4. Art3dlabs Text Toggle (New) */}
                            <div className="flex items-center justify-between py-1">
                                <label className="flex items-center gap-3 cursor-pointer group w-full justify-between">
                                    <span className={cn("text-sm font-medium transition-colors", addArt3dlabsText ? 'text-yellow-400' : 'text-neutral-400 group-hover:text-neutral-300')}>
                                        Agregar texto ART3DLABS
                                    </span>
                                    <div className="relative">
                                        <input
                                            type="checkbox"
                                            checked={addArt3dlabsText}
                                            onChange={(e) => setAddArt3dlabsText(e.target.checked)}
                                            className="peer sr-only"
                                        />
                                        <div className="w-10 h-6 bg-neutral-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-400 transition-colors border border-white/20"></div>
                                    </div>
                                </label>
                            </div>

                            {/* 3. Aspect Ratio (Using New Grid Selector) */}
                            {requiresAspectRatio && (
                                <ConfigPopupSelector
                                    label="Formato"
                                    valueLabel={aspectRatio}
                                    options={(supportedAspectRatios || ['1:1', '16:9', '9:16', '4:3', '3:4']).map(r => ({ label: r, value: r }))}
                                    onSelect={setAspectRatio}
                                />
                            )}

                            {/* 4. Dynamic Fields */}
                            {dynamicFields?.map(field => {
                                if (field.type === 'select') {
                                    // Helper to find current label based on dynamic values
                                    const currentOption = field.options?.find(opt => {
                                        if (typeof opt === 'string') return dynamicFieldValues[field.key] === opt;
                                        if ((opt as any).values) return Object.entries((opt as any).values).every(([k, v]) => dynamicFieldValues[k] === v);
                                        return dynamicFieldValues[field.key] === (opt as any).value;
                                    });
                                    
                                    const currentLabel = typeof currentOption === 'string' ? currentOption : (currentOption as any)?.label || 'Seleccionar';

                                    // Normalize options for the component
                                    const popupOptions = field.options?.map(opt => ({
                                        label: typeof opt === 'string' ? opt : opt.label,
                                        value: opt
                                    })) || [];

                                    return (
                                        <ConfigPopupSelector
                                            key={field.key}
                                            label={field.label}
                                            valueLabel={currentLabel}
                                            options={popupOptions}
                                            onSelect={(selectedOption) => {
                                                if (typeof selectedOption === 'string') {
                                                    handleDynamicFieldChange(field.key, selectedOption, undefined, field);
                                                } else {
                                                    // Pass the full object option so handleDynamicFieldChange extracts the values
                                                    handleDynamicFieldChange(field.key, selectedOption.value, selectedOption, field);
                                                }
                                            }}
                                        />
                                    );
                                }
                                
                                // Text Inputs
                                if (field.type === 'text') {
                                    return (
                                        <div key={field.key} className="pt-1">
                                            <label htmlFor={`${field.key}-${photoKey}`} className="block text-xs font-bold text-neutral-500 uppercase tracking-widest mb-1">{field.label}</label>
                                            <input 
                                                type="text" 
                                                id={`${field.key}-${photoKey}`} 
                                                value={dynamicFieldValues[field.key] || ''} 
                                                onChange={(e) => handleDynamicFieldChange(field.key, e.target.value)} 
                                                className="w-full bg-[#121212] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-neutral-500 focus:ring-1 focus:ring-yellow-400 focus:outline-none transition-all duration-200"
                                                maxLength={field.maxLength}
                                                placeholder={field.placeholder}
                                                onFocus={(e) => setTimeout(() => e.target.scrollIntoView({ behavior: 'smooth', block: 'center' }), 300)}
                                            />
                                        </div>
                                    );
                                }

                                // Toggle Groups
                                if (field.type === 'toggle-group') {
                                    const options = field.options as ToggleOption[];
                                    const isExpanded = expandedToggleGroups[field.key] || false;
                                    const hasManyOptions = options.length > 6;
                                    const visibleOptions = (hasManyOptions && !isExpanded) ? options.slice(0, 6) : options;

                                    return (
                                        <div key={field.key} className="pt-2">
                                            {field.label && (
                                                <p className="text-xs font-bold text-neutral-500 mb-2 uppercase tracking-widest">{field.label}</p>
                                            )}
                                            <div className="grid grid-cols-2 sm:grid-cols-2 gap-2">
                                                {visibleOptions.map((option) => {
                                                    const currentString = dynamicFieldValues[field.key] || '';
                                                    const isChecked = currentString.includes(option.value);
                                                    
                                                    return (
                                                        <ToggleItem
                                                            key={option.label}
                                                            option={option}
                                                            isChecked={isChecked}
                                                            onToggle={(checked) => handleToggleGroupChange(field.key, option.value, checked, options)}
                                                            onLongPress={() => option.description && setActiveDescription({ label: option.label, text: option.description })}
                                                        />
                                                    );
                                                })}
                                            </div>
                                            {hasManyOptions && (
                                                <button 
                                                    onClick={() => setExpandedToggleGroups(prev => ({ ...prev, [field.key]: !isExpanded }))}
                                                    className="mt-2 text-xs font-bold text-yellow-400 hover:text-yellow-300 transition-colors flex items-center gap-1"
                                                >
                                                    {isExpanded ? 'Ver menos' : `Ver más (${options.length - 6} más)`}
                                                    <svg 
                                                        xmlns="http://www.w3.org/2000/svg" 
                                                        className={cn("h-3 w-3 transition-transform", isExpanded ? "rotate-180" : "")} 
                                                        fill="none" 
                                                        viewBox="0 0 24 24" 
                                                        stroke="currentColor"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </button>
                                            )}
                                        </div>
                                    );
                                }
                                return null;
                            })}
                        </div>
                    )}
                </div>
                 
                 {mediaType === 'video' && (
                   <div className="flex items-center"><input type="checkbox" id={`enhance-${photoKey}`} checked={enhancePrompt} onChange={(e) => setEnhancePrompt(e.target.checked)} className="w-4 h-4 text-yellow-400 bg-gray-700 border-gray-600 rounded focus:ring-yellow-500" /><label htmlFor={`enhance-${photoKey}`} className="ml-2 text-sm font-medium text-neutral-300">Mejorar prompt</label></div>
                )}
            </div>
            <div className="flex flex-col gap-3 mt-auto flex-shrink-0">
                {isApiKeyMissingForVideo && (
                    <div className="p-4 bg-yellow-900/50 border border-yellow-400 rounded-lg text-center space-y-2 animate-pulse">
                        <p className="font-permanent-marker text-yellow-200">¡Acceso Denegado / Clave Requerida!</p>
                        <p className="text-xs text-neutral-300">Los modelos Pro y Video requieren una API Key de un proyecto con facturación activa.</p>
                        <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" rel="noopener noreferrer" className="text-yellow-400 underline text-xs pb-1 block">Configurar Facturación</a>
                        <button onClick={handleSelectKey} className={cn(secondaryButtonClasses, '!text-base !py-2 !border-yellow-400 !text-yellow-400')}>Seleccionar Clave API</button>
                    </div>
                )}
                
                {mediaType === 'video' ? (
                    <button onClick={handleVideoGenerate} disabled={isGenerateDisabled} className={primaryButtonClasses}>Generar Video</button>
                ) : (
                    <div className="grid grid-cols-2 gap-2">
                        <button onClick={() => handleSubmit(false, false)} disabled={isGenerateDisabled} className={cn(primaryButtonClasses, '!text-base !px-2 col-span-2 shadow-none')}>Nano 🍌</button>
                        
                        <button onClick={() => handleSubmit(false, true)} disabled={isGenerateDisabled} className={cn(primaryButtonClasses, '!text-base !px-2 bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-300 hover:to-emerald-400 text-black border-0 shadow-lg')}>
                            Gen 🍌
                        </button>
                        
                        <button onClick={() => handleProGenerate(false)} disabled={isGenerateDisabled} className={cn(primaryButtonClasses, '!text-base !px-2 !bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-300 hover:to-orange-300 text-black border-0 shadow-lg')}>
                            Nano 🍌 2
                        </button>
                    </div>
                )}
                
                 <button onClick={handleResetForm} disabled={status === 'pending'} className={cn(secondaryButtonClasses, "!text-lg !py-2.5")}>Limpiar Formulario</button>
            </div>

            {/* Description Modal */}
            <AnimatePresence>
                {activeDescription && (
                    <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setActiveDescription(null)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-sm bg-neutral-900 border border-yellow-400/30 rounded-2xl p-6 shadow-2xl"
                        >
                            <h4 className="font-permanent-marker text-yellow-400 text-xl mb-3">{activeDescription.label}</h4>
                            <p className="text-neutral-300 text-sm leading-relaxed font-sans">
                                {activeDescription.text}
                            </p>
                            <button 
                                onClick={() => setActiveDescription(null)}
                                className="mt-6 w-full py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white text-sm font-bold transition-colors"
                            >
                                Entendido
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};

// --- SUB-COMPONENT: Toggle Item with Long Press ---
interface ToggleItemProps {
    option: ToggleOption;
    isChecked: boolean;
    onToggle: (checked: boolean) => void;
    onLongPress: () => void;
}

const ToggleItem: React.FC<ToggleItemProps> = ({ option, isChecked, onToggle, onLongPress }) => {
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const isLongPressActive = useRef(false);

    const handleStart = () => {
        isLongPressActive.current = false;
        timerRef.current = setTimeout(() => {
            isLongPressActive.current = true;
            onLongPress();
        }, 1500); // 1.5s for long press
    };

    const handleEnd = () => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }
    };

    const handleClick = (e: React.MouseEvent | React.TouchEvent) => {
        if (isLongPressActive.current) {
            e.preventDefault();
            return;
        }
        onToggle(!isChecked);
    };

    return (
        <div 
            onMouseDown={handleStart}
            onMouseUp={handleEnd}
            onMouseLeave={handleEnd}
            onTouchStart={handleStart}
            onTouchEnd={handleEnd}
            onClick={handleClick}
            className={cn(
                "flex items-center gap-2 cursor-pointer group p-3 rounded-lg border transition-all duration-200 select-none",
                isChecked 
                    ? "bg-yellow-400/10 border-yellow-400/50" 
                    : "bg-[#121212] border-white/5 hover:border-white/20 hover:bg-[#1a1a1a]"
            )}
        >
            <div className="relative flex-shrink-0">
                <div className={cn(
                    "w-4 h-4 rounded border flex items-center justify-center transition-colors shadow-sm",
                    isChecked ? "bg-yellow-400 border-yellow-400" : "border-neutral-600 bg-neutral-800 group-hover:border-neutral-400"
                )}>
                    {isChecked && <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
                </div>
            </div>
            <span className={cn(
                "text-xs font-medium leading-tight",
                isChecked ? "text-yellow-400" : "text-neutral-400 group-hover:text-neutral-200"
            )}>
                {option.label}
            </span>
        </div>
    );
};

export default EffectFormControls;
