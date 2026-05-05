
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { createContext, useContext, useState, useCallback, ReactNode, useEffect } from 'react';
import { type PhotoConfig } from '../photoPacks';
import { type GeneratedMedia } from '../App';
import * as idb from 'idb-keyval';

interface ToastMessage {
    id: string;
    text: string;
    type: 'success' | 'error' | 'info';
}

interface AppContextType {
    uploadedImage: string | null;
    setUploadedImage: (image: string | null) => void;
    currentView: 'uploader' | 'ai-studio' | 'collage-creator' | 'grid-splitter';
    setCurrentView: (view: 'uploader' | 'ai-studio' | 'collage-creator' | 'grid-splitter') => void;
    allGeneratedMedia: GeneratedMedia[];
    setAllGeneratedMedia: React.Dispatch<React.SetStateAction<GeneratedMedia[]>>;
    preselectedEffect: PhotoConfig | null;
    setPreselectedEffect: (effect: PhotoConfig | null) => void;
    editPromptText: string | undefined;
    setEditPromptText: (text: string | undefined) => void;
    isEditMode: boolean;
    setIsEditMode: (isEdit: boolean) => void;
    pendingGridUpscale: any;
    setPendingGridUpscale: (data: any) => void;
    isGalleryOpen: boolean;
    setIsGalleryOpen: (open: boolean) => void;
    isImagePreviewOpen: boolean;
    setIsImagePreviewOpen: (open: boolean) => void;
    viewingPromptMedia: GeneratedMedia | null;
    setViewingPromptMedia: (media: GeneratedMedia | null) => void;
    isDownloading: boolean;
    setIsDownloading: (downloading: boolean) => void;
    previewImageUrl: string | null;
    setPreviewImageUrl: (url: string | null) => void;
    previewGenerationData: any | null;
    setPreviewGenerationData: (data: any | null) => void;
    previewOriginalImageUrl: string | null;
    setPreviewOriginalImageUrl: (url: string | null) => void;
    toasts: ToastMessage[];
    showToast: (text: string, type?: 'success' | 'error' | 'info') => void;
    clearPersistentData: () => Promise<void>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [uploadedImage, setUploadedImageState] = useState<string | null>(null);
    const [currentView, setCurrentView] = useState<'uploader' | 'ai-studio' | 'collage-creator' | 'grid-splitter'>('uploader');
    const [allGeneratedMedia, setAllGeneratedMediaState] = useState<GeneratedMedia[]>([]);
    const [preselectedEffect, setPreselectedEffect] = useState<PhotoConfig | null>(null);
    const [editPromptText, setEditPromptText] = useState<string | undefined>(undefined);
    const [isEditMode, setIsEditMode] = useState<boolean>(false);
    const [pendingGridUpscale, setPendingGridUpscale] = useState<any>(null);
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [isImagePreviewOpen, setIsImagePreviewOpen] = useState(false);
    const [viewingPromptMedia, setViewingPromptMedia] = useState<GeneratedMedia | null>(null);
    const [isDownloading, setIsDownloading] = useState(false);
    const [previewImageUrl, setPreviewImageUrl] = useState<string | null>(null);
    const [previewGenerationData, setPreviewGenerationData] = useState<any | null>(null);
    const [previewOriginalImageUrl, setPreviewOriginalImageUrl] = useState<string | null>(null);
    const [toasts, setToasts] = useState<ToastMessage[]>([]);
    const [isInitialized, setIsInitialized] = useState(false);

    const saveTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

    // Load from IndexedDB on mount
    useEffect(() => {
        const loadInitialData = async () => {
            try {
                const storedImage = await idb.get('ai-studio-uploaded-image');
                if (storedImage) {
                    setUploadedImageState(storedImage);
                    setCurrentView('ai-studio');
                }
            } catch (error) {
                console.error("Failed to load initial data from IndexedDB", error);
            } finally {
                setIsInitialized(true);
            }
        };
        loadInitialData();
    }, []);

    // Load gallery data separately so it doesn't block the initial render
    useEffect(() => {
        const loadGalleryData = async () => {
            try {
                const storedMedia = await idb.get('ai-studio-generated-media');
                if (storedMedia) {
                    setAllGeneratedMediaState(storedMedia);
                }
            } catch (error) {
                console.error("Failed to load gallery data from IndexedDB", error);
            }
        };
        // Delay slightly to let the main UI render first
        if (isInitialized) {
            setTimeout(loadGalleryData, 50);
        }
    }, [isInitialized]);

    // Custom setters that also save to IndexedDB
    const setUploadedImage = useCallback((image: string | null) => {
        setUploadedImageState(image);
        if (image) {
            idb.set('ai-studio-uploaded-image', image).catch(console.error);
        } else {
            idb.del('ai-studio-uploaded-image').catch(console.error);
        }
    }, []);

    // We need a wrapper for setAllGeneratedMedia to handle both direct values and functional updates
    const setAllGeneratedMedia: React.Dispatch<React.SetStateAction<GeneratedMedia[]>> = useCallback((value) => {
        setAllGeneratedMediaState((prev) => {
            const newValue = typeof value === 'function' ? value(prev) : value;
            
            // Debounce the IndexedDB save to prevent stuttering on rapid updates
            if (saveTimeoutRef.current) {
                clearTimeout(saveTimeoutRef.current);
            }
            saveTimeoutRef.current = setTimeout(() => {
                if ('requestIdleCallback' in window) {
                    (window as any).requestIdleCallback(() => {
                        idb.set('ai-studio-generated-media', newValue).catch(console.error);
                    });
                } else {
                    idb.set('ai-studio-generated-media', newValue).catch(console.error);
                }
            }, 1000);
            
            return newValue;
        });
    }, []);

    const clearPersistentData = useCallback(async () => {
        try {
            await idb.del('ai-studio-uploaded-image');
            await idb.del('ai-studio-generated-media');
        } catch (error) {
            console.error("Failed to clear IndexedDB", error);
        }
    }, []);

    const showToast = useCallback((text: string, type: 'success' | 'error' | 'info' = 'info') => {
        const id = Math.random().toString(36).substring(2, 9);
        setToasts(prev => [...prev, { id, text, type }]);
        setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 4000);
    }, []);

    // Don't render children until we've loaded from IndexedDB to prevent flashes
    if (!isInitialized) {
        return <div className="min-h-screen bg-[#050505] flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
        </div>;
    }

    return (
        <AppContext.Provider value={{
            uploadedImage, setUploadedImage,
            currentView, setCurrentView,
            allGeneratedMedia, setAllGeneratedMedia,
            preselectedEffect, setPreselectedEffect,
            editPromptText, setEditPromptText,
            isEditMode, setIsEditMode,
            pendingGridUpscale, setPendingGridUpscale,
            isGalleryOpen, setIsGalleryOpen,
            isImagePreviewOpen, setIsImagePreviewOpen,
            viewingPromptMedia, setViewingPromptMedia,
            isDownloading, setIsDownloading,
            previewImageUrl, setPreviewImageUrl,
            previewGenerationData, setPreviewGenerationData,
            previewOriginalImageUrl, setPreviewOriginalImageUrl,
            toasts, showToast,
            clearPersistentData
        }}>
            {children}
        </AppContext.Provider>
    );
};

export const useApp = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useApp must be used within an AppProvider');
    }
    return context;
};
