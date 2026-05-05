/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingSpinnerProps {
    messages: string[];
    isVideo?: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ messages, isVideo }) => {
    const [currentMessage, setCurrentMessage] = useState(messages[0] || 'Generando...');
    const [progress, setProgress] = useState(0);
    
    useEffect(() => {
        if (messages.length === 0) return;
        const totalDuration = isVideo ? 20000 : 8000;
        const interval = 100;
        const step = 100 / (totalDuration / interval);

        const timer = setInterval(() => {
            setProgress(prev => {
                if (prev >= 98) return 98;
                return prev + step;
            });
        }, interval);

        const msgInterval = setInterval(() => {
            setCurrentMessage(prev => {
                const idx = messages.indexOf(prev);
                return messages[(idx + 1) % messages.length];
            });
        }, totalDuration / messages.length);

        return () => {
            clearInterval(timer);
            clearInterval(msgInterval);
        };
    }, [messages, isVideo]);

    return (
        <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-black/10">
            <div className="relative mb-12">
                <motion.div
                    animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-24 h-24 border-2 border-dashed border-yellow-400/30 rounded-full flex items-center justify-center"
                >
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                        className="w-16 h-16 border-b-2 border-yellow-400 rounded-full shadow-[0_0_20px_rgba(250,204,21,0.3)]"
                    />
                </motion.div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-permanent-marker text-xs text-yellow-400">{Math.round(progress)}%</span>
                </div>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={currentMessage}
                    initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <p className="font-permanent-marker text-neutral-300 text-2xl tracking-tight">{currentMessage}</p>
                    {isVideo && <p className="text-neutral-500 text-[10px] mt-2 font-mono uppercase tracking-widest">Motor de video activo - Por favor no cierres la pestaña</p>}
                </motion.div>
            </AnimatePresence>

            <div className="w-64 h-1 bg-white/5 rounded-full mt-10 overflow-hidden relative">
                <motion.div
                    className="h-full bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.5)]"
                    style={{ width: `${progress}%` }}
                    initial={{ width: '0%' }}
                />
            </div>
        </div>
    );
};

export default LoadingSpinner;