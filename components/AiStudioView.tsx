
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState, useCallback, useMemo, useEffect, useRef, ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { generateStyledImage, generateVideo, transformPrompt, adaptPromptForReuse } from '../services/geminiService';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { PhotoConfig, PHOTO_PACKS, PHOTO_PACK_CATEGORIES, PRESERVE_IDENTITY_PROMPT, PRESERVE_IDENTITY_PROMPT_COUPLE } from '../photoPacks';
import { cn, getGridDimensions, getClosestAspectRatio, copyToClipboard, buildFinalPrompt, WATERMARK_PROMPT } from '../lib/utils';
import { padImageToAspectRatio, cropImageQuadrant } from '../lib/imageUtils';
import { readMetadata } from '../lib/metadataUtils';
import { ChevronDown } from 'lucide-react';
import TransformationSelector from './TransformationSelector';
import ResultDisplay from './ResultDisplay';
import LoadingSpinner from './LoadingSpinner';
import MetadataDisplay from './MetadataDisplay';
import EffectConfigurationView from './EffectConfigurationView';
import { secondaryButtonClasses } from '../lib/uiConstants';
import { REFERENCE_PRESETS } from '../lib/referencePresets';
import type { GeneratedMedia, ImageStatus } from '../App';
import { useApp } from '../contexts/AppContext';

interface AiStudioViewProps {
    uploadedImage: string;
    onSourceImageChange: (newImageUrl: string) => void;
    onSwitchToCollage: () => void;
    allGeneratedMedia: GeneratedMedia[];
    setAllGeneratedMedia: React.Dispatch<React.SetStateAction<GeneratedMedia[]>>;
    generationStats: { attempts: number; successes: number; };
    setGenerationStats: React.Dispatch<React.SetStateAction<{ attempts: number; successes: number; }>>;
    preselectedEffect: PhotoConfig | null;
    setPreselectedEffect: (effect: PhotoConfig | null) => void;
    onOpenPreview: (url: string, originalUrl?: string, generationData?: any) => void;
    onSetAsReference: (url: string) => void;
    initialUserInput?: string;
    isEditMode?: boolean;
    pendingGridUpscale?: any;
    setPendingGridUpscale?: (data: any) => void;
}

const AiStudioView: React.FC<AiStudioViewProps> = ({ 
    uploadedImage, 
    onSourceImageChange,
    onSwitchToCollage, 
    allGeneratedMedia, 
    setAllGeneratedMedia, 
    generationStats, 
    setGenerationStats, 
    preselectedEffect, 
    setPreselectedEffect, 
    onOpenPreview,
    onSetAsReference,
    initialUserInput: propInitialUserInput,
    isEditMode: propIsEditMode = false,
    pendingGridUpscale,
    setPendingGridUpscale
}) => {
    const { showToast } = useApp();
    const [mutableUploadedImage, setMutableUploadedImage] = useState<string>(uploadedImage);
    const [selectedPhotoConfig, setSelectedPhotoConfig] = useState<PhotoConfig | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [generationStatus, setGenerationStatus] = useState<ImageStatus>('idle');
    const [generationResult, setGenerationResult] = useState<GeneratedMedia | null>(null);
    const [isApiKeyMissing, setIsApiKeyMissing] = useState(false);
    const [metadata, setMetadata] = useState<any>(null);
    const [isMetadataVisible, setIsMetadataVisible] = useState(false);
    const [isAnalyzingMetadata, setIsAnalyzingMetadata] = useState(false);
    const [isAdaptingPrompt, setIsAdaptingPrompt] = useState(false);
    const [initialUserInput, setInitialUserInput] = useState<string | undefined>(propInitialUserInput);
    const [userInput, setUserInput] = useState<string>(propInitialUserInput || '');
    
    // REFS for state that must be fresh inside callbacks
    const currentUploadedImageRef = useRef(uploadedImage);

    const handleAnalyzeMetadata = async () => {
        if (metadata) {
            setIsMetadataVisible(!isMetadataVisible);
            return;
        }
        setIsAnalyzingMetadata(true);
        try {
            const data = await readMetadata(currentUploadedImageRef.current);
            setMetadata(data);
            setIsMetadataVisible(true);
        } catch (e) {
            console.error("Error analyzing metadata", e);
        } finally {
            setIsAnalyzingMetadata(false);
        }
    };

    const handleAdaptPrompt = async (prompt: string) => {
        setIsAdaptingPrompt(true);
        try {
            const adaptedPrompt = await adaptPromptForReuse(prompt);
            setUserInput(adaptedPrompt);
            await copyToClipboard(adaptedPrompt);
            showToast("Prompt adaptado, copiado y cargado", "success");
        } catch (e) {
            console.error("Failed to adapt prompt", e);
            showToast("Error al adaptar el prompt", "error");
        } finally {
            setIsAdaptingPrompt(false);
        }
    };

    const isMobile = useMediaQuery('(max-width: 1023px)');
    const resultPanelRef = useRef<HTMLDivElement>(null);
    const controlsPanelRef = useRef<HTMLDivElement>(null);
    const newImageInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setMutableUploadedImage(uploadedImage);
        currentUploadedImageRef.current = uploadedImage;
        setMetadata(null);
        setIsMetadataVisible(false);
    }, [uploadedImage]);

    // Sync initialUserInput prop with state
    useEffect(() => {
        if (propInitialUserInput !== undefined) {
            setInitialUserInput(propInitialUserInput);
        }
    }, [propInitialUserInput]);

    useEffect(() => {
        if ((generationStatus === 'done' || generationStatus === 'error') && isMobile && resultPanelRef.current) {
            resultPanelRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [generationStatus, isMobile]);

    useEffect(() => {
        if (selectedPhotoConfig && controlsPanelRef.current && isMobile) {
            controlsPanelRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [selectedPhotoConfig, isMobile]);
    
    useEffect(() => {
        if (preselectedEffect) {
            let categoryName: string | null = null;
            for (const category in PHOTO_PACK_CATEGORIES) {
                if (PHOTO_PACK_CATEGORIES[category].some(packKey => PHOTO_PACKS[packKey]?.images.some(img => img.key === preselectedEffect.key))) {
                    categoryName = category;
                    break;
                }
            }
            setSelectedPhotoConfig(preselectedEffect);
            setSelectedCategory(categoryName);
            setGenerationStatus('idle');
            setGenerationResult(null);
            setPreselectedEffect(null);
            // If prop is provided (e.g. edit mode), use it, otherwise reset.
            setInitialUserInput(propInitialUserInput);
        }
    }, [preselectedEffect, setPreselectedEffect, propInitialUserInput]);

    const handleNewImageUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    if (reader.result) {
                        const newUrl = reader.result as string;
                        setMutableUploadedImage(newUrl);
                        currentUploadedImageRef.current = newUrl;
                        onSourceImageChange(newUrl);
                    }
                };
                reader.readAsDataURL(file);
            }
        }
    }, [onSourceImageChange]);
    
    const handleQuickSelectImage = (url: string) => {
        setMutableUploadedImage(url);
        currentUploadedImageRef.current = url;
        onSourceImageChange(url);
    };

    const handleGenerateMedia = useCallback(async (data: any) => {
        console.log("handleGenerateMedia called with data:", data);
        console.log("optimizePrompt value:", data.optimizePrompt);
        // ALWAYS use the ref to get the absolute latest image state, bypassing any closure staleness
        const activeImage = currentUploadedImageRef.current;
        
        if (!activeImage || !selectedPhotoConfig) {
            console.error("Missing image or config for generation");
            return;
        }
        
        const { caption, prompt, mediaType, dynamicFields, requiresUserInput } = selectedPhotoConfig;
        
        setGenerationStatus('pending');
        setGenerationStats(prev => ({...prev, attempts: prev.attempts + 1}));

        let promptWasOptimized = false;
        let optimizationError = null;
        let finalPrompt: string;

        if (data.isGridUpscale && data.gridQuadrant) {
            // Updated Prompt for Grid Upscale
            // Uses explicit [IMAGE 1] / [IMAGE 2] tags to prevent double-exposure/ghosting issues.
            finalPrompt = `TASK: HIGH-FIDELITY RESTORATION OF [IMAGE 2].

INPUTS:
- [IMAGE 1]: Identity Reference. (Use ONLY for facial features).
- [IMAGE 2]: The Target Image to Upscale.

INSTRUCTIONS:
1. Generate a high-resolution version of **[IMAGE 2]**.
2. **STRICTLY** follow the pose, composition, and background of [IMAGE 2].
3. Apply the facial identity from **[IMAGE 1]** to the subject in [IMAGE 2].
4. **CRITICAL:** Do NOT overlay or blend [IMAGE 1] onto the scene. Do NOT create a double exposure or ghosting effect. The result must be a single, crisp photograph matching [IMAGE 2].

Context: ${data.userInput || 'High fidelity restoration'}`;
        } else {
            // Standard Generation Path
            let finalUserInput = (data.userInput || '').trim();

            if (data.optimizePrompt && finalUserInput) {
                try {
                    const contextForTransformation = `Theme: ${selectedPhotoConfig.caption}. Note: Your output will be injected into a larger template. Focus ONLY on optimizing the user's specific input.`;
                    console.log("Optimizing user input:", finalUserInput);
                    const optimizedInput = await transformPrompt(finalUserInput, contextForTransformation, data.dynamicData, propIsEditMode);
                    console.log("Optimized input result:", optimizedInput);
                    if (optimizedInput !== finalUserInput) {
                        finalUserInput = optimizedInput;
                        promptWasOptimized = true;
                        data.intermediateOptimizedPrompt = optimizedInput;
                    }
                } catch (e: any) {
                    console.warn("Prompt transformation failed", e);
                    optimizationError = e.message || "Error al optimizar el prompt con IA.";
                }
            }

            // Use the utility to build the final prompt correctly, including all replacements
            finalPrompt = buildFinalPrompt(selectedPhotoConfig, {
                ...data,
                userInput: finalUserInput, // Use the (possibly) optimized input
            });
            
            console.log("Final prompt used for generation:", finalPrompt);
            // -------------------------------------------------
        }

        // --- ASPECT RATIO REPLACEMENT (Redundant if buildFinalPrompt did it, but kept for non-image/non-json safety) ---
        // buildFinalPrompt already handles this for non-JSON image prompts.
        // ----------------------------------------------

        try {
            // TIMEOUT PROTECTION: Force fail if generation takes too long
            // Video: 5 minutes (300s), Image: 3 minutes (180s) to handle complex Pro generations
            const timeoutMs = mediaType === 'video' ? 300000 : 180000;
            const timeoutPromise = new Promise((_, reject) => 
                setTimeout(() => reject(new Error("Tiempo de espera agotado. El servidor está tardando demasiado.")), timeoutMs)
            );

            let mediaResult: { mediaUrl?: string, styleAnalysis?: string };
            
            if (mediaType === 'video') {
                const videoPromise = (async () => {
                    const source = await padImageToAspectRatio(data.secondImage || activeImage, data.aspectRatio || '16:9');
                    const { videoUrl } = await generateVideo(source, finalPrompt);
                    return { mediaUrl: videoUrl };
                })();
                
                mediaResult = await Promise.race([videoPromise, timeoutPromise]) as any;
            } else {
                const imagePromise = (async () => {
                    // For Imagen generation (Hyper mode), we don't strictly need the source image unless used for something else,
                    // but the flow expects a valid mainSrc.
                    let mainSrc = data.isGridUpscale ? data.secondImage : (selectedPhotoConfig.key === 'extract-outfit' ? data.secondImage : activeImage);
                    if (!mainSrc) throw new Error('No hay imagen de referencia.');
                    
                    // Pad main source image to target aspect ratio.
                    if (data.aspectRatio) mainSrc = await padImageToAspectRatio(mainSrc, data.aspectRatio);
                    
                    const { imageUrl, styleAnalysis } = await generateStyledImage(
                        data.isGridUpscale ? data.thirdImage : mainSrc, 
                        finalPrompt, 
                        caption, 
                        data.isGridUpscale ? data.secondImage : data.secondImage, 
                        selectedPhotoConfig.key === 'style-transfer-from-image',
                        selectedPhotoConfig.key === 'pose-custom',
                        data.aspectRatio, 
                        data.useProModel, 
                        undefined, // No third image needed for grid upscale now
                        data.useImagen, // Pass the new flag
                        data.addArt3dlabsText // Pass the new flag
                    );
                    return { mediaUrl: imageUrl, styleAnalysis };
                })();

                mediaResult = await Promise.race([imagePromise, timeoutPromise]) as any;
            }

            const res: GeneratedMedia = { 
                status: 'done', 
                mediaUrl: mediaResult.mediaUrl, 
                sourceCaption: caption, 
                promptUsed: finalPrompt, 
                styleAnalysis: mediaResult.styleAnalysis, 
                generationData: { ...data, sourceKey: selectedPhotoConfig.key, promptWasOptimized, optimizationError } 
            };
            setGenerationResult(res);
            setAllGeneratedMedia(prev => [res, ...prev]);
            setGenerationStatus('done');
            setGenerationStats(prev => ({ ...prev, successes: prev.successes + 1 }));
            setIsApiKeyMissing(false);
        } catch (err: any) {
            const msg = err.message === "API_KEY_REQUIRED" ? "Clave API requerida para funciones Pro." : err.message;
            setGenerationResult({ status: 'error', error: msg, sourceCaption: caption, promptUsed: finalPrompt, generationData: data });
            setGenerationStatus('error');
            if (err.message === "API_KEY_REQUIRED") setIsApiKeyMissing(true);
        } finally {
            // Ensure we never get stuck in pending state if something unexpected happened
            setGenerationStatus(prev => prev === 'pending' ? 'error' : prev);
        }
    }, [selectedPhotoConfig, setAllGeneratedMedia, setGenerationStats]);
    
    // Handler for incoming grid upscale requests from gallery
    useEffect(() => {
        if (pendingGridUpscale && setPendingGridUpscale) {
            // Find the correct config for the grid effect to ensure state consistency
            const gridConfig = PHOTO_PACKS['custom-prompt']?.images.find(img => img.key === 'custom-grid-2x2');
            
            if (gridConfig) {
                // Set the config so the view updates
                setSelectedPhotoConfig(gridConfig);
                setSelectedCategory('⭐ Favoritos'); // Or appropriate category
                setInitialUserInput(pendingGridUpscale.userInput);
                
                // We need to process the crop before sending to generation if it hasn't been done
                const processAndGenerate = async () => {
                    let finalUpscaleData = { ...pendingGridUpscale };
                    
                    // If the secondImage is the full grid (which it usually is from gallery), crop it now
                    if (pendingGridUpscale.isGridUpscale && pendingGridUpscale.secondImage && pendingGridUpscale.gridQuadrant) {
                         try {
                            // Calculate dimensions for correct cropping
                            const dims = getGridDimensions(pendingGridUpscale.sourceKey, pendingGridUpscale.promptUsed);
                            const rows = dims?.rows || 2;
                            const cols = dims?.cols || 2;
                            
                            const { image: croppedImage, width, height } = await cropImageQuadrant(
                                pendingGridUpscale.secondImage, 
                                pendingGridUpscale.gridQuadrant,
                                rows,
                                cols
                            );
                            
                            // CALCULATE ASPECT RATIO FROM THE CROP
                            // This ensures the upscale result matches the shape of the selected cell
                            const cropAspectRatio = getClosestAspectRatio(width, height);
                            
                            finalUpscaleData.secondImage = croppedImage;
                            finalUpscaleData.aspectRatio = cropAspectRatio;
                            
                        } catch (e) {
                            console.error("Error cropping image from gallery request", e);
                            // Fallback to sending full image if crop fails, though suboptimal
                        }
                    }
                    
                    handleGenerateMedia(finalUpscaleData);
                };

                processAndGenerate();
                
                // Clear the pending state
                setPendingGridUpscale(null);
            }
        }
    }, [pendingGridUpscale, setPendingGridUpscale, handleGenerateMedia]);

    const handleEditWithCustomPrompt = (prompt: string, originalImage: string) => {
        // Switch to the 'custom-prompt' effect
        const customPromptPack = PHOTO_PACKS['custom-prompt']?.images.find(img => img.key === 'custom-prompt');
        if (customPromptPack) {
            // Clean the prompt of the identity suffix if it exists to avoid duplication when submitting
            let cleanPrompt = prompt.replace(PRESERVE_IDENTITY_PROMPT, '').trim();
            cleanPrompt = cleanPrompt.replace(PRESERVE_IDENTITY_PROMPT_COUPLE, '').trim();
            
            // Set the original image (reference) as the active one
            handleQuickSelectImage(originalImage);
            
            setInitialUserInput(cleanPrompt);
            setSelectedPhotoConfig(customPromptPack);
            setSelectedCategory('✨ Prompt Personalizado');
            setGenerationStatus('idle'); // Allow re-generation
            
            // Scroll to controls on mobile
            if (isMobile && controlsPanelRef.current) {
                controlsPanelRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    };

    const handleGridSelection = async (quadrant: string, gridDims?: { gridRows: number, gridCols: number }) => {
        if (!generationResult || !generationResult.generationData) return;
        
        // Use the grid image itself as the Second Reference for the AI to "see" the composition to copy
        const gridImage = generationResult.mediaUrl;
        
        if (!gridImage) return;

        // Perform the crop locally first!
        try {
            const dims = getGridDimensions(generationResult.generationData.sourceKey, generationResult.promptUsed);
            
            // Allow user override if detection is wrong
            const rows = gridDims?.gridRows || dims?.rows || 2;
            const cols = gridDims?.gridCols || dims?.cols || 2;

            const { image: croppedImage, width, height } = await cropImageQuadrant(gridImage, quadrant, rows, cols);
            
            // CALCULATE ASPECT RATIO FROM THE CROP
            const cropAspectRatio = getClosestAspectRatio(width, height);
            
            const upscaleData = {
                ...generationResult.generationData,
                secondImage: croppedImage, // Pass the CROPPED image as Ref 2
                thirdImage: mutableUploadedImage, // Pass the original identity reference image as Ref 3
                aspectRatio: cropAspectRatio, // FORCE the aspect ratio of the crop
                isGridUpscale: true,
                gridQuadrant: quadrant,
                useProModel: false 
            };
            
            handleGenerateMedia(upscaleData);
        } catch (error) {
            console.error("Failed to crop grid quadrant:", error);
            // Optional: Show error toast
        }
    };

    const loadingMessages = useMemo(() => {
        if (!selectedPhotoConfig) return [];
        return selectedPhotoConfig.mediaType === 'video' 
            ? ["Canalizando energía visual...", "Dibujando el tiempo...", "Capturando el movimiento...", "Sellando la secuencia..."]
            : ["Destilando esencia...", "Analizando geometría facial...", "Mezclando pigmentos de IA...", "Materializando visión..."];
    }, [selectedPhotoConfig]);

    return (
        <div className="w-full flex-1 flex flex-col lg:flex-row gap-8 min-h-0 items-start pb-10">
            {/* Left Control Panel */}
            <div 
                ref={controlsPanelRef} 
                className={cn(
                    "lg:w-[480px] w-full flex-shrink-0 flex flex-col gap-6",
                    !isMobile && "lg:sticky lg:top-24 lg:max-h-[calc(100vh-140px)]"
                )}
            >
                {/* Referencia Seleccionada */}
                <div className="glass-panel p-5 rounded-3xl overflow-hidden relative flex-shrink-0">
                    <div className="flex justify-between items-center mb-4 relative z-10">
                         <p className="font-permanent-marker text-neutral-500 text-[10px] uppercase tracking-[0.3em]">Materia Prima</p>
                    </div>
                    
                    <div className="relative group bg-neutral-900/40 rounded-2xl border border-white/5 overflow-hidden shadow-inner mb-4 flex items-center justify-center h-64 w-full">
                        {mutableUploadedImage && <img src={mutableUploadedImage} alt="Referencia" className="max-h-full max-w-full object-contain" /> }
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-sm">
                            <button onClick={() => newImageInputRef.current?.click()} className={cn(secondaryButtonClasses, '!py-2 !px-5 !text-sm !rounded-full !border-white/50')}>Subir Propia</button>
                        </div>
                    </div>

                    {/* Metadata Analysis Button */}
                    <div className="mb-4">
                        <button 
                            onClick={handleAnalyzeMetadata}
                            className={cn(secondaryButtonClasses, "w-full !text-xs !py-2 !border-white/10 flex items-center justify-center gap-2")}
                            disabled={isAnalyzingMetadata}
                        >
                            {isAnalyzingMetadata ? 'Analizando...' : metadata ? (isMetadataVisible ? 'Ocultar Metadata' : 'Mostrar Metadata') : 'Analizar Metadata'}
                            {metadata && (
                                <ChevronDown className={cn("w-3 h-3 transition-transform", isMetadataVisible ? "rotate-180" : "")} />
                            )}
                        </button>
                        {metadata && isMetadataVisible && (
                            <div className="mt-2 p-3 bg-neutral-900 rounded-lg border border-white/5 text-[10px] text-neutral-300 max-h-64 overflow-y-auto">
                                <MetadataDisplay 
                                    metadata={metadata} 
                                    onUsePrompt={(prompt) => {
                                        setUserInput(prompt);
                                        showToast("Prompt copiado al campo de texto", "success");
                                    }}
                                    onAdaptPrompt={handleAdaptPrompt}
                                    onSetAsReference={handleQuickSelectImage}
                                    isAdapting={isAdaptingPrompt}
                                />
                                <button 
                                    onClick={async () => {
                                        await copyToClipboard(JSON.stringify(metadata));
                                        showToast("Metadata copiada", "success");
                                    }}
                                    className="mt-3 w-full text-center text-yellow-400 hover:text-yellow-300 underline text-[10px]"
                                >
                                    Copiar Todo
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Quick Select Models (Mina, Sophia, Mal) - VISUAL UPDATE TO SMALL CIRCLES */}
                    <div className="space-y-2">
                        <p className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest text-center mb-2">Alquimistas de Prueba</p>
                        <div className="flex flex-wrap justify-center gap-3">
                            {REFERENCE_PRESETS.map((model) => (
                                <button
                                    key={model.id}
                                    onClick={() => handleQuickSelectImage(model.url)}
                                    className={cn(
                                        "w-10 h-10 rounded-full overflow-hidden border transition-all duration-300 relative group",
                                        mutableUploadedImage === model.url 
                                            ? "border-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.2)] scale-110" 
                                            : "border-white/20 hover:border-yellow-400"
                                    )}
                                    title={`Usar ${model.name}`}
                                >
                                    <img src={model.url} alt={model.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Main Prompt Input */}
                
                <div className="flex-1 min-h-0 relative">
                    <AnimatePresence mode="wait">
                        {selectedPhotoConfig ? (
                            <EffectConfigurationView 
                                key={selectedPhotoConfig.key}
                                uploadedImage={mutableUploadedImage}
                                photoConfig={selectedPhotoConfig}
                                onGenerate={handleGenerateMedia}
                                onBack={() => { setSelectedPhotoConfig(null); setInitialUserInput(undefined); }}
                                onBackToCategories={() => { setSelectedPhotoConfig(null); setSelectedCategory(null); setInitialUserInput(undefined); }}
                                status={generationStatus}
                                isApiKeyMissingForVideo={isApiKeyMissing}
                                setIsApiKeyMissingForVideo={setIsApiKeyMissing}
                                initialUserInput={initialUserInput}
                                userInput={userInput}
                                setUserInput={setUserInput}
                            />
                        ) : (
                            <motion.div 
                                key="selector" 
                                initial={{ opacity: 0, x: -20 }} 
                                animate={{ opacity: 1, x: 0 }} 
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="h-full"
                            >
                                <TransformationSelector 
                                    onSelect={(config) => { setSelectedPhotoConfig(config); setInitialUserInput(undefined); }}
                                    onSwitchToCollage={onSwitchToCollage}
                                    selectedCategory={selectedCategory}
                                    setSelectedCategory={setSelectedCategory}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Right Results Panel */}
            <div ref={resultPanelRef} className="flex-1 w-full lg:sticky lg:top-24">
                <div className="w-full aspect-square lg:aspect-video min-h-[420px] glass-panel rounded-[2rem] overflow-hidden relative shadow-2xl border-white/[0.05]">
                    {generationStatus === 'pending' ? (
                        <div className="w-full h-full flex flex-col items-center justify-center relative bg-[#080808]">
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.15 }}
                                className="absolute inset-0 z-0 grayscale contrast-125"
                            >
                                {mutableUploadedImage && <img src={mutableUploadedImage} className="w-full h-full object-cover opacity-60 scale-110 blur-[2px]" alt="" /> }
                                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]" />
                            </motion.div>
                            
                            <div className="alchemy-scanner" />
                            
                            <div className="relative z-10 w-full max-w-lg px-8">
                                <LoadingSpinner 
                                    messages={loadingMessages} 
                                    isVideo={selectedPhotoConfig?.mediaType === 'video'}
                                />
                            </div>
                        </div>
                    ) : (
                        <ResultDisplay
                            key={generationResult?.mediaUrl}
                            result={generationResult}
                            originalImage={mutableUploadedImage}
                            onPreview={(url, originalUrl) => onOpenPreview(url, originalUrl, generationResult?.generationData)}
                            onDownload={async (url, caption) => {
                                let dataUrl = url!;
                                if (generationResult) {
                                    try {
                                        const { writeMetadata } = await import('../lib/metadataUtils');
                                        dataUrl = await writeMetadata(dataUrl, generationResult);
                                    } catch (e) {
                                        console.error("Error injecting metadata", e);
                                    }
                                }
                                const link = document.createElement('a');
                                link.href = dataUrl;
                                link.download = `alquimia-${caption.replace(/\s+/g, '-').toLowerCase()}.png`;
                                link.click();
                            }}
                            onSetAsReference={onSetAsReference}
                            onRegenerate={() => generationResult?.generationData && handleGenerateMedia(generationResult.generationData)}
                            photoConfig={selectedPhotoConfig}
                            onEditPrompt={handleEditWithCustomPrompt}
                            onGridSelect={handleGridSelection}
                        />
                    )}
                </div>
                
                <p className="mt-4 text-center text-neutral-600 text-[10px] font-mono tracking-widest uppercase opacity-40">
                    Alquimia Visual • {allGeneratedMedia.length} Creaciones en Memoria
                </p>
            </div>
            <input ref={newImageInputRef} type="file" className="hidden" accept="image/png, image/jpeg, image/webp" onChange={handleNewImageUpload} />
        </div>
    );
};

export default AiStudioView;
