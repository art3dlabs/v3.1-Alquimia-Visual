
import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { cn } from '../../lib/utils';

interface TiltCardProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

export const TiltCard: React.FC<TiltCardProps> = ({ children, onClick, className }) => {
    const ref = useRef<HTMLDivElement>(null);
    
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 40 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 40 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseXFromCenter = e.clientX - (rect.left + width / 2);
        const mouseYFromCenter = e.clientY - (rect.top + height / 2);

        const xPct = mouseXFromCenter / width;
        const yPct = mouseYFromCenter / height;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            className={cn(
                "relative transition-all duration-200 ease-out",
                className
            )}
        >
            <div 
                style={{ transform: "translateZ(20px)" }} 
                className="relative h-full w-full"
            >
                {children}
            </div>
            
            {/* Gloss/Reflection Effect */}
            <motion.div
                className="absolute inset-0 rounded-xl bg-gradient-to-tr from-white/0 via-white/10 to-white/0 pointer-events-none z-10"
                style={{
                    opacity: useTransform(mouseX, [-0.5, 0.5], [0, 0.3])
                }}
            />
        </motion.div>
    );
};
