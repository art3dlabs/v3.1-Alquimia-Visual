
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState, useMemo, useRef, useDeferredValue } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Layers, 
    Layout, 
    Box, 
    Sparkles, 
    User, 
    Camera, 
    Clock, 
    Heart, 
    Palette, 
    Tag,
    Zap,
    ChevronRight,
    Search
} from 'lucide-react';
import { PHOTO_PACK_CATEGORIES, PHOTO_PACKS, PhotoConfig } from '../photoPacks';
import CardIllustration from './CardIllustration';
import { secondaryButtonClasses } from '../lib/uiConstants';
import { cn } from '../lib/utils';
import { TiltCard } from './ui/TiltCard';

// Helper to get an icon for common subcategories
const getSubcategoryIcon = (name: string) => {
    const lower = name.toLowerCase();
    if (lower.includes('edad') || lower.includes('tiempo')) return <Clock className="w-4 h-4" />;
    if (lower.includes('estilo') || lower.includes('arte') || lower.includes('diseño') || lower.includes('visual')) return <Palette className="w-4 h-4" />;
    if (lower.includes('moda') || lower.includes('ropa') || lower.includes('outfit') || lower.includes('tendencia')) return <Tag className="w-4 h-4" />;
    if (lower.includes('retrato') || lower.includes('foto') || lower.includes('fotografía')) return <Camera className="w-4 h-4" />;
    if (lower.includes('personaje') || lower.includes('avatares') || lower.includes('identidad') || lower.includes('character')) return <User className="w-4 h-4" />;
    if (lower.includes('juguete') || lower.includes('figura')) return <Box className="w-4 h-4" />;
    if (lower.includes('ia') || lower.includes('generativa') || lower.includes('avanzada') || lower.includes('especiales')) return <Sparkles className="w-4 h-4" />;
    if (lower.includes('favorito') || lower.includes('laboratorio')) return <Heart className="w-4 h-4" />;
    if (lower.includes('panel') || lower.includes('grid') || lower.includes('collage')) return <Layout className="w-4 h-4" />;
    if (lower.includes('espontáneo') || lower.includes('candid')) return <Camera className="w-4 h-4" />;
    return <Layers className="w-4 h-4" />;
};

interface TransformationSelectorProps {
    onSelect: (config: PhotoConfig) => void;
    onSwitchToCollage: () => void;
    selectedCategory: string | null;
    setSelectedCategory: (category: string | null) => void;
}

const normalizeText = (text: string) => {
    return text ? text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase() : "";
};

const TransformationSelector = ({ onSelect, onSwitchToCollage, selectedCategory, setSelectedCategory }: TransformationSelectorProps) => {
    const [searchTerm, setSearchTerm] = useState('');
    const deferredSearchTerm = useDeferredValue(searchTerm);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Handle scroll to show/hide "Back to Top" button
    const handleScroll = () => {
        if (scrollContainerRef.current) {
            if (scrollContainerRef.current.scrollTop > 300) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        }
    };

    const scrollToTop = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    // Flatten all effects for global search and pre-calculate normalized text
    const allEffectsFlat = useMemo(() => {
        return Object.values(PHOTO_PACKS).flatMap(pack => pack.images).map(effect => ({
            ...effect,
            _normalizedCaption: normalizeText(effect.caption),
            _normalizedDesc: normalizeText(effect.detailedDescription || ""),
            _normalizedHint: normalizeText(effect.imageTypeHint || ""),
            _normalizedPrompt: normalizeText(effect.prompt)
        }));
    }, []);

    const searchResults = useMemo(() => {
        if (!deferredSearchTerm.trim()) return null;

        const term = normalizeText(deferredSearchTerm);
        
        return allEffectsFlat.filter(effect => {
            return effect._normalizedCaption.includes(term) || 
                   effect._normalizedDesc.includes(term) || 
                   effect._normalizedHint.includes(term) || 
                   effect._normalizedPrompt.includes(term);
        });
    }, [deferredSearchTerm, allEffectsFlat]);
    
    const isCollageSearch = normalizeText(deferredSearchTerm).includes('collage') || normalizeText(deferredSearchTerm).includes('creador');
    const isSearching = deferredSearchTerm.trim().length > 0;

    // Categorized effects for browsing mode
    const effectsByCategory = useMemo(() => {
        if (selectedCategory) {
            const packKeys = PHOTO_PACK_CATEGORIES[selectedCategory];
            return packKeys.flatMap(key => PHOTO_PACKS[key]?.images ?? []);
        }
        return [];
    }, [selectedCategory]);

    // Categorized effects grouped by subcategory
    const groupedEffects = useMemo(() => {
        const effectsToGroup = isSearching ? (searchResults || []) : effectsByCategory;
        if (effectsToGroup.length === 0 && !isSearching && !selectedCategory) return null;
        
        const groups: Record<string, PhotoConfig[]> = {};
        effectsToGroup.forEach(effect => {
            const sub = effect.subcategory || 'General';
            if (!groups[sub]) groups[sub] = [];
            groups[sub].push(effect);
        });
        
        return groups;
    }, [effectsByCategory, searchResults, isSearching, selectedCategory]);

    const subcategories = useMemo(() => {
        if (!groupedEffects) return [];
        return Object.keys(groupedEffects).sort((a, b) => {
            if (a === 'Laboratorio Creativo') return -1;
            if (b === 'Laboratorio Creativo') return 1;
            if (a === 'General') return 1;
            if (b === 'General') return -1;
            return a.localeCompare(b);
        });
    }, [groupedEffects]);

    const handleBackToCategories = () => {
        setSelectedCategory(null);
        setSearchTerm('');
    }
    
    const mainTitle = isSearching ? `Resultados (${searchResults?.length || 0})` : (selectedCategory ? selectedCategory : 'Efectos Alquímicos');

    const CollageIcon = (props: any) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.776 48.776 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
        </svg>
    );

    return (        <div className="w-full h-[calc(100dvh-env(safe-area-inset-bottom))] flex flex-col gap-4 overflow-hidden relative">
             <div className="flex-shrink-0 px-4 pt-4">
                <AnimatePresence mode="wait">
                    <motion.h2 
                        key={mainTitle}
                        className="font-permanent-marker text-xl sm:text-2xl text-yellow-400 drop-shadow-md mb-2 truncate"
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                    >
                        {mainTitle}
                    </motion.h2>
                </AnimatePresence>

                <div className="relative">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Buscar efecto, estilo, objeto..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white placeholder-neutral-500 focus:ring-1 focus:ring-yellow-400/50 focus:outline-none transition-all duration-200 backdrop-blur-md pl-10"
                    />
                    <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    {searchTerm && (
                        <button 
                            onClick={() => setSearchTerm('')}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    )}
                </div>
            </div>
            
            <div 
                ref={scrollContainerRef}
                onScroll={handleScroll}
                className="flex-1 overflow-y-auto px-4 pb-24 custom-scrollbar relative scroll-smooth"
            >
                <AnimatePresence mode="wait">
                    
                    {/* SEARCH RESULTS OR BROWSE CATEGORY (Grouped by Subcategory) */}
                    {isSearching || selectedCategory ? (
                        <motion.div
                            key={isSearching ? "search-view-grouped" : "category-grouped-view"}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{ duration: 0.2 }}
                            className="flex flex-col gap-8 pb-20"
                        >
                             {selectedCategory && !isSearching && (
                                <button onClick={handleBackToCategories} className={cn(secondaryButtonClasses, '!text-[10px] !py-1.5 !px-3 mb-1 flex items-center gap-2 rounded-full !border-white/10 hover:!border-yellow-400 transition-all opacity-80 hover:opacity-100 w-fit')}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                                    Volver a Categorías
                                </button>
                            )}

                            {isCollageSearch && isSearching && (
                                <div className="mb-2">
                                    <TiltCard onClick={onSwitchToCollage}>
                                        <div className="bg-yellow-400/10 backdrop-blur-md border border-yellow-400/30 rounded-xl p-3 flex items-center text-left gap-3 group">
                                            <CollageIcon className="w-8 h-8 text-yellow-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                            <div>
                                                <p className="font-permanent-marker text-base text-yellow-300 leading-tight">Lienzo de Collage</p>
                                                <p className="text-[10px] text-neutral-400">Diseño libre sin IA.</p>
                                            </div>
                                        </div>
                                    </TiltCard>
                                </div>
                            )}

                            {groupedEffects && subcategories.length > 0 ? (
                                subcategories.map((sub, subIdx) => (
                                    <div key={sub} className="flex flex-col gap-4">
                                        <div className="flex items-center gap-3 px-1 group">
                                            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-neutral-800 border border-white/5 text-yellow-400 group-hover:bg-yellow-400/20 transition-all">
                                                {getSubcategoryIcon(sub)}
                                            </div>
                                            <div className="flex flex-col">
                                                <h3 className="text-sm font-bold text-white tracking-wide leading-none mb-0.5">
                                                    {sub}
                                                </h3>
                                                <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-medium">
                                                    {groupedEffects[sub].length} {groupedEffects[sub].length === 1 ? 'efecto' : 'efectos'}
                                                </span>
                                            </div>
                                            <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent ml-2"></div>
                                        </div>

                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                                            {groupedEffects[sub].map((photoConfig, index) => (
                                                <EffectCard 
                                                    key={photoConfig.key} 
                                                    photoConfig={photoConfig} 
                                                    onSelect={onSelect} 
                                                    index={index + (subIdx * 10)} 
                                                />
                                            ))}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                !isCollageSearch && isSearching && (
                                    <div className="col-span-full text-center py-10">
                                        <p className="text-neutral-500 text-sm font-sans italic">No encontramos ese hechizo.</p>
                                        <button onClick={() => setSearchTerm('')} className="mt-2 text-yellow-400 text-xs hover:underline">Limpiar búsqueda</button>
                                    </div>
                                )
                            )}
                        </motion.div>
                    ) : (
                        
                        /* MODE 3: CATEGORY LIST (Grid) */
                         <motion.div 
                            key="categories-home"
                            className="grid grid-cols-2 md:grid-cols-3 gap-2 pb-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                         >
                            {Object.keys(PHOTO_PACK_CATEGORIES).map((category, index) => {
                                const effects = PHOTO_PACK_CATEGORIES[category].flatMap(key => PHOTO_PACKS[key]?.images ?? []);
                                // Only render categories that have actual effects
                                if (effects.length === 0) return null;
                                
                                return (
                                    <CategoryCard 
                                        key={category} 
                                        category={category} 
                                        effects={effects}
                                        onSelect={() => setSelectedCategory(category)}
                                        index={index}
                                    />
                                );
                            })}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Scroll to Top Button */}
            <AnimatePresence>
                {showScrollTop && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        onClick={scrollToTop}
                        className="absolute bottom-4 right-4 p-3 rounded-full bg-yellow-400 text-black shadow-lg hover:bg-yellow-300 transition-colors z-20"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
};

// Compact Category Card
interface CategoryCardProps {
    category: string;
    effects: PhotoConfig[];
    onSelect: () => void;
    index: number;
}
const CategoryCard: React.FC<CategoryCardProps> = ({ category, effects, onSelect, index }) => {
    const illustrationKey = effects[0]?.illustration || 'default';
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.02 }}
            className="h-full"
        >
            <TiltCard onClick={onSelect} className="h-full">
                <div className="bg-white/[0.03] backdrop-blur-sm border border-white/5 rounded-xl p-3 flex flex-col items-center justify-center text-center gap-2 h-full min-h-[90px] hover:bg-white/[0.06] hover:border-white/10 transition-all group">
                    <div className="p-2 rounded-lg bg-white/[0.03] border border-white/5 group-hover:scale-110 transition-transform shadow-sm">
                        <CardIllustration illustrationKey={illustrationKey} className="w-5 h-5 text-yellow-400/70 group-hover:text-yellow-400 transition-colors" />
                    </div>
                    {/* Increased font size to text-sm */}
                    <p className="font-permanent-marker text-sm text-neutral-300 leading-tight group-hover:text-white transition-colors">{category}</p>
                </div>
            </TiltCard>
        </motion.div>
    );
};

// Compact Effect Card (Name + Icon only as requested)
interface EffectCardProps {
    photoConfig: PhotoConfig;
    onSelect: (config: PhotoConfig) => void;
    index: number;
}
const EffectCard: React.FC<EffectCardProps> = ({ photoConfig, onSelect, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.01 }}
        className="h-full"
    >
        <TiltCard onClick={() => onSelect(photoConfig)} className="h-full">
            <div className="bg-white/[0.03] backdrop-blur-sm border border-white/5 rounded-xl p-2.5 flex flex-col items-center justify-center text-center gap-2 h-full min-h-[85px] group hover:bg-white/[0.08] hover:border-yellow-400/30 transition-all relative overflow-hidden">
                <div className="p-1.5 rounded-lg bg-black/30 border border-white/5 group-hover:border-yellow-400/40 transition-colors">
                    <CardIllustration illustrationKey={photoConfig.illustration} className="w-4 h-4 text-neutral-400 group-hover:text-yellow-400 transition-colors" />
                </div>
                {/* Increased font size to text-xs (was text-[11px]) and ensured clamping */}
                <p className="font-permanent-marker text-xs text-neutral-300 group-hover:text-white transition-colors leading-tight line-clamp-2 px-1">
                    {photoConfig.caption}
                </p>
            </div>
        </TiltCard>
    </motion.div>
);

export default TransformationSelector;
