/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState, useRef, useEffect, useCallback } from 'react';

interface ImageComparisonSliderProps {
    beforeImage: string;
    afterImage: string;
}

export const ImageComparisonSlider: React.FC<ImageComparisonSliderProps> = ({ beforeImage, afterImage }) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const [containerWidth, setContainerWidth] = useState(0);

    const handleDragStart = useCallback((e: React.MouseEvent | React.TouchEvent) => {
        e.preventDefault();
        setIsDragging(true);
    }, []);

    const handleDragEnd = useCallback(() => {
        setIsDragging(false);
    }, []);

    const handleDragMove = useCallback((e: MouseEvent | TouchEvent) => {
        if (!isDragging || !containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        let position = ((clientX - rect.left) / rect.width) * 100;

        position = Math.max(0, Math.min(100, position)); // Clamp between 0-100
        setSliderPosition(position);
    }, [isDragging]);

    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', handleDragMove);
            window.addEventListener('touchmove', handleDragMove);
            window.addEventListener('mouseup', handleDragEnd);
            window.addEventListener('touchend', handleDragEnd);
        }
        return () => {
            window.removeEventListener('mousemove', handleDragMove);
            window.removeEventListener('touchmove', handleDragMove);
            window.removeEventListener('mouseup', handleDragEnd);
            window.removeEventListener('touchend', handleDragEnd);
        };
    }, [isDragging, handleDragMove, handleDragEnd]);
    
    useEffect(() => {
        const setWidth = () => {
            if (containerRef.current) {
                setContainerWidth(containerRef.current.getBoundingClientRect().width);
            }
        };
        setWidth(); // Set initial width
        
        // Handle image loading to recalculate width
        const image = new Image();
        image.src = afterImage;
        image.onload = setWidth;

        window.addEventListener('resize', setWidth);
        return () => window.removeEventListener('resize', setWidth);
    }, [afterImage]);


    return (
        <div
            ref={containerRef}
            className="relative w-full h-full select-none overflow-hidden cursor-ew-resize"
            onMouseDown={handleDragStart}
            onTouchStart={handleDragStart}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
        >
            {/* After Image (Base Layer) */}
            <img
                src={afterImage}
                alt="Generada"
                className="block w-full h-full object-contain"
                draggable={false}
            />

            {/* Before Image (Top Layer, clipped) */}
            <div
                className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
                draggable={false}
            >
                <img
                    src={beforeImage}
                    alt="Original"
                    className="block h-full object-contain"
                    style={{ width: containerWidth, maxWidth: 'none' }}
                    draggable={false}
                />
            </div>

            {/* Visual Divider Handle */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-yellow-400 z-10 -translate-x-1/2 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
            >
                <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center shadow-lg ring-4 ring-black/20">
                     <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                    </svg>
                </div>
            </div>
        </div>
    );
};