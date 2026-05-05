
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';

export interface ModelUsage {
    calls: number;
    tokens: number;
    images: number;
    errors: number;
}

export interface Stats {
    totalCalls: number;
    totalTokens: number;
    totalImages: number;
    totalErrors: number;
    lastErrorMessage?: string;
    models: Record<string, ModelUsage>;
}

const initialStats: Stats = {
    totalCalls: 0,
    totalTokens: 0,
    totalImages: 0,
    totalErrors: 0,
    models: {},
};

interface StatsContextType {
    stats: Stats;
    logApiCall: (model: string, tokens: number) => void;
    logImageSuccess: (model: string) => void;
    logError: (model: string, message?: string) => void;
    resetStats: () => void;
}

const StatsContext = createContext<StatsContextType | undefined>(undefined);

export const StatsProvider = ({ children }: { children: ReactNode }) => {
    const [stats, setStats] = useState<Stats>(() => {
        try {
            const storedStats = sessionStorage.getItem('ai-studio-stats');
            if (storedStats) {
                const parsed = JSON.parse(storedStats);
                // IMPORTANTE: Reseteamos los errores al recargar la página para evitar alertas fantasmas.
                // Mantenemos las estadísticas de uso (llamadas, tokens) pero limpiamos el estado de error.
                return { 
                    ...parsed, 
                    totalErrors: 0, 
                    lastErrorMessage: undefined 
                };
            }
            return initialStats;
        } catch (error) {
            console.error("Failed to parse stats from sessionStorage", error);
            return initialStats;
        }
    });

    useEffect(() => {
        try {
            sessionStorage.setItem('ai-studio-stats', JSON.stringify(stats));
        } catch (error) {
            console.error("Failed to save stats to sessionStorage", error);
        }
    }, [stats]);

    const updateModelStats = (
        currentModels: Record<string, ModelUsage>,
        model: string,
        updates: Partial<ModelUsage>
    ): Record<string, ModelUsage> => {
        const existingModelStats = currentModels[model] || { calls: 0, tokens: 0, images: 0, errors: 0 };
        const newModelStats = { ...existingModelStats };
        for (const key in updates) {
            const statKey = key as keyof ModelUsage;
            newModelStats[statKey] += updates[statKey] || 0;
        }
        return {
            ...currentModels,
            [model]: newModelStats,
        };
    };

    const logApiCall = useCallback((model: string, tokens: number) => {
        setStats(prev => ({
            ...prev,
            totalCalls: prev.totalCalls + 1,
            totalTokens: prev.totalTokens + tokens,
            models: updateModelStats(prev.models, model, { calls: 1, tokens }),
        }));
    }, []);

    const logImageSuccess = useCallback((model: string) => {
        setStats(prev => ({
            ...prev,
            totalImages: prev.totalImages + 1,
            models: updateModelStats(prev.models, model, { images: 1 }),
        }));
    }, []);
    
    const logError = useCallback((model: string, message?: string) => {
        setStats(prev => ({
            ...prev,
            totalErrors: prev.totalErrors + 1,
            lastErrorMessage: message,
            models: updateModelStats(prev.models, model, { errors: 1 }),
        }));
    }, []);

    const resetStats = useCallback(() => {
        setStats(initialStats);
        sessionStorage.removeItem('ai-studio-stats');
    }, []);

    return (
        <StatsContext.Provider value={{ stats, logApiCall, logImageSuccess, logError, resetStats }}>
            {children}
        </StatsContext.Provider>
    );
};

export const useStats = () => {
    const context = useContext(StatsContext);
    if (context === undefined) {
        throw new Error('useStats must be used within a StatsProvider');
    }
    return context;
};
