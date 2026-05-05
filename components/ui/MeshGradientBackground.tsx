
import React from 'react';
import { motion } from 'framer-motion';

export const MeshGradientBackground = () => {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden bg-black pointer-events-none">
            {/* Base Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950" />

            {/* Animated Orbs */}
            <motion.div 
                className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-purple-900/20 blur-[120px]"
                animate={{ 
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.2, 1]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            />
            
            <motion.div 
                className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-blue-900/10 blur-[130px]"
                animate={{ 
                    x: [0, -50, 0],
                    y: [0, -100, 0],
                    scale: [1, 1.1, 1]
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div 
                className="absolute top-[40%] left-[30%] w-[40vw] h-[40vw] rounded-full bg-yellow-600/5 blur-[100px]"
                animate={{ 
                    x: [0, 30, -30, 0],
                    y: [0, -40, 20, 0],
                    opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-grid-white/[0.03] z-10" />
            
            {/* Noise Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03] bg-noise z-20 mix-blend-overlay pointer-events-none"></div>
        </div>
    );
};
