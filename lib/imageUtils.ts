
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

/**
 * Revokes a list of Blob URLs to free up browser memory.
 */
export const cleanupImageUrls = (urls: string[]) => {
    urls.forEach(url => {
        if (url.startsWith('blob:')) {
            URL.revokeObjectURL(url);
        }
    });
};

/**
 * Pads an image to fill a specific aspect ratio with black bars, preventing stretching.
 * This version includes explicit cleanup of canvas resources.
 */
export const padImageToAspectRatio = (imageDataUrl: string, aspectRatioString: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        const parts = aspectRatioString.split(':').map(Number);
        if (parts.length !== 2 || isNaN(parts[0]) || isNaN(parts[1]) || parts[1] === 0) {
            return reject(new Error('Invalid aspect ratio string. Use "width:height" format.'));
        }
        const targetAspectRatio = parts[0] / parts[1];

        const img = new Image();
        // Allow cross-origin images to be used in canvas without tainting it
        img.crossOrigin = 'anonymous';
        
        img.onload = () => {
            const originalWidth = img.width;
            const originalHeight = img.height;
            let canvasWidth = originalWidth;
            let canvasHeight = originalHeight;

            if (img.width / img.height > targetAspectRatio) {
                canvasHeight = img.width / targetAspectRatio;
            } else {
                canvasWidth = img.height * targetAspectRatio;
            }

            const canvas = document.createElement('canvas');
            canvas.width = canvasWidth;
            canvas.height = canvasHeight;
            const ctx = canvas.getContext('2d');
            if (!ctx) return reject(new Error('Could not get canvas context'));

            ctx.fillStyle = 'black';
            ctx.fillRect(0, 0, canvasWidth, canvasHeight);
            const x = (canvasWidth - originalWidth) / 2;
            const y = (canvasHeight - originalHeight) / 2;
            ctx.drawImage(img, x, y, originalWidth, originalHeight);
            
            try {
                const result = canvas.toDataURL('image/jpeg', 0.92);
                
                // Explicit cleanup
                ctx.clearRect(0, 0, canvasWidth, canvasHeight);
                canvas.width = 1;
                canvas.height = 1;
                
                resolve(result);
            } catch (err) {
                reject(err);
            }
        };
        img.onerror = () => reject(new Error('Failed to load image for padding.'));
        img.src = imageDataUrl;
    });
};

/**
 * Standard utility to pad to 16:9 specifically (useful for video engine)
 */
export const padImageTo16x9 = (imageDataUrl: string): Promise<string> => {
    return padImageToAspectRatio(imageDataUrl, '16:9');
};

/**
 * Crops a specific quadrant from a grid image.
 * Returns the cropped image base64, plus its width and height to calculate aspect ratio.
 */
export const cropImageQuadrant = (imageDataUrl: string, quadrant: string, rows: number = 2, cols: number = 2): Promise<{ image: string, width: number, height: number }> => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        
        img.onload = () => {
            const w = img.width;
            const h = img.height;
            
            // Calculate cell dimensions
            const cellW = Math.floor(w / cols);
            const cellH = Math.floor(h / rows);

            const canvas = document.createElement('canvas');
            canvas.width = cellW;
            canvas.height = cellH;
            const ctx = canvas.getContext('2d');

            if (!ctx) {
                reject(new Error('Could not get canvas context for cropping'));
                return;
            }

            let r = 0;
            let c = 0;

            // Determine coordinates
            if (quadrant.startsWith('r') && quadrant.includes('-c')) {
                // Parse format "r0-c1"
                try {
                    const parts = quadrant.split('-');
                    r = parseInt(parts[0].substring(1));
                    c = parseInt(parts[1].substring(1));
                } catch (e) {
                    console.error("Invalid quadrant format", quadrant);
                }
            } else {
                // Legacy 2x2 fallback
                switch (quadrant) {
                    case 'Top-Left': r = 0; c = 0; break;
                    case 'Top-Right': r = 0; c = 1; break;
                    case 'Bottom-Left': r = 1; c = 0; break;
                    case 'Bottom-Right': r = 1; c = 1; break;
                    default: r = 0; c = 0;
                }
            }
            
            // Safety check
            r = Math.min(Math.max(0, r), rows - 1);
            c = Math.min(Math.max(0, c), cols - 1);

            const sx = c * cellW;
            const sy = r * cellH;

            // Draw the specific portion of the source image onto the new canvas
            ctx.drawImage(img, sx, sy, cellW, cellH, 0, 0, cellW, cellH);

            try {
                const result = canvas.toDataURL('image/jpeg', 0.95);
                // Cleanup
                ctx.clearRect(0, 0, cellW, cellH);
                canvas.width = 1;
                canvas.height = 1;
                
                // Return data AND dimensions
                resolve({ image: result, width: cellW, height: cellH });
            } catch (err) {
                reject(err);
            }
        };

        img.onerror = () => reject(new Error('Failed to load image for cropping.'));
        img.src = imageDataUrl;
    });
};

/**
 * Injects subtle random noise into the image to break AI generation patterns.
 * This prevents the model from "recognizing" its own output and prioritizing it over the prompt.
 * @param imageDataUrl The base64 image string
 * @param intensity The intensity of noise (0-255), default is 5 (subtle)
 */
export const addSubtleNoise = (imageDataUrl: string, intensity: number = 5): Promise<string> => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            if (!ctx) return reject(new Error('No context available for noise injection'));

            // Fill with solid white background first to flatten transparency
            // This prevents "ghosting" effects where alpha channels might be interpreted as overlay masks
            ctx.fillStyle = '#FFFFFF';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.drawImage(img, 0, 0);
            
            // Get pixel data to manipulate
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;
            
            // Add subtle random noise to RGB channels
            for (let i = 0; i < data.length; i += 4) {
                // Generate random noise between -intensity and +intensity
                const noise = (Math.random() - 0.5) * intensity * 2;
                
                // Apply to R, G, B channels, clamping between 0 and 255
                data[i] = Math.min(255, Math.max(0, data[i] + noise));     // Red
                data[i+1] = Math.min(255, Math.max(0, data[i+1] + noise)); // Green
                data[i+2] = Math.min(255, Math.max(0, data[i+2] + noise)); // Blue
                // Alpha (data[i+3]) remains untouched to preserve transparency if any
            }
            
            ctx.putImageData(imageData, 0, 0);
            
            // Return as high quality JPEG to flatten and normalize
            resolve(canvas.toDataURL('image/jpeg', 0.98));
        };
        img.onerror = (e) => reject(new Error('Failed to load image for noise injection'));
        img.src = imageDataUrl;
    });
};
