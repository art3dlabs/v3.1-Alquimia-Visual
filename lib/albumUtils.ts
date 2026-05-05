/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

// Helper function to load an image and return it as an HTMLImageElement
function loadImage(src: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => resolve(img);
        img.onerror = (err) => reject(new Error(`Failed to load image: ${src.substring(0, 50)}...`));
        img.src = src;
    });
}

function drawWashiTape(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, rotation: number) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);
    ctx.fillStyle = `rgba(255, 255, 224, 0.4)`; // Semi-transparent light yellow
    ctx.fillRect(-width / 2, -height / 2, width, height);
    
    // Add a subtle pattern to the tape
    ctx.strokeStyle = `rgba(200, 200, 150, 0.3)`;
    ctx.lineWidth = 1;
    ctx.beginPath();
    for(let i = -width/2; i < width/2; i+= 5) {
        ctx.moveTo(i, -height/2);
        ctx.lineTo(i, height/2);
    }
    ctx.stroke();
    
    ctx.restore();
}

/**
 * Creates a visually rich "scrapbook" page from a collection of images.
 * @param imageData A record mapping a caption string to its image data URL.
 * @returns A promise that resolves to a data URL of the generated album page (JPEG format).
 */
export async function createAlbumPage(imageData: Record<string, string>): Promise<string> {
    const canvas = document.createElement('canvas');
    const canvasWidth = 2480;
    const canvasHeight = 3508;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) {
        throw new Error('Could not get 2D canvas context');
    }

    // 1. Draw the album page background with a solid, elegant dark color
    ctx.fillStyle = '#1e1e1e';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);


    // 2. Draw the title
    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.textAlign = 'center';
    ctx.font = `bold 140px 'Caveat', cursive`;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
    ctx.shadowBlur = 20;
    ctx.fillText('Generado con Alquimia Visual', canvasWidth / 2, 200);
    ctx.shadowColor = 'transparent'; // Reset shadow


    // 3. Load all the polaroid images concurrently
    const captions = Object.keys(imageData);
    const loadedImages = await Promise.all(
        Object.values(imageData).map(url => loadImage(url))
    );

    const imagesWithCaptions = captions.map((caption, index) => ({
        caption,
        img: loadedImages[index],
    }));

    // 4. Define layout properties dynamically based on the number of images
    const numImages = imagesWithCaptions.length;
    const padding = 200;
    const contentWidth = canvasWidth - padding * 2;
    const contentTopMargin = 350;
    const contentHeight = canvasHeight - contentTopMargin - 150;
    
    let polaroidWidth: number;
    let cols: number;

    if (numImages <= 2) {
        polaroidWidth = 900;
        cols = numImages === 0 ? 1 : numImages;
    } else if (numImages <= 4) {
        polaroidWidth = 800;
        cols = 2;
    } else { // 5 or 6 images
        polaroidWidth = 650;
        cols = 3;
    }

    const polaroidHeight = polaroidWidth * 1.2;
    const imageContainerWidth = polaroidWidth * 0.9;
    const imageContainerHeight = imageContainerWidth;

    const rows = Math.ceil(numImages / cols);
    const rowHeight = contentHeight / rows;


    // 5. Draw each polaroid in a scattered, scrapbook style
    imagesWithCaptions.forEach(({ caption, img }, index) => {
        
        const x_jitter = (Math.random() - 0.5) * 100;
        const y_jitter = (Math.random() - 0.5) * 100;
        
        const row = Math.floor(index / cols);
        const col = index % cols;

        const isLastRow = row === rows - 1;
        // Calculate items on the current row to center them if the row isn't full
        const itemsOnThisRow = isLastRow && (numImages % cols !== 0) ? numImages % cols : cols;
        const rowSpecificContentWidth = contentWidth * (itemsOnThisRow / cols);
        const startX = padding + (contentWidth - rowSpecificContentWidth) / 2;
        const colWidth = rowSpecificContentWidth / itemsOnThisRow;

        const x = startX + (col * colWidth) + (colWidth / 2) + x_jitter;
        const y = contentTopMargin + (row * rowHeight) + (rowHeight / 2) + y_jitter;
        
        ctx.save();
        
        ctx.translate(x, y);
        
        const rotation = (Math.random() - 0.5) * 0.15; // Radians (approx. +/- 8.5 degrees)
        ctx.rotate(rotation);
        
        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
        ctx.shadowBlur = 45;
        ctx.shadowOffsetX = 10;
        ctx.shadowOffsetY = 15;
        
        ctx.fillStyle = '#fff';
        ctx.fillRect(-polaroidWidth / 2, -polaroidHeight / 2, polaroidWidth, polaroidHeight);
        
        ctx.shadowColor = 'transparent';
        
        const aspectRatio = img.naturalWidth / img.naturalHeight;
        let drawWidth = imageContainerWidth;
        let drawHeight = drawWidth / aspectRatio;

        if (drawHeight > imageContainerHeight) {
            drawHeight = imageContainerHeight;
            drawWidth = drawHeight * aspectRatio;
        }

        const imageAreaTopMargin = (polaroidWidth - imageContainerWidth) / 2;
        const imageContainerY = -polaroidHeight / 2 + imageAreaTopMargin;
        
        const imgX = -drawWidth / 2;
        const imgY = imageContainerY + (imageContainerHeight - drawHeight) / 2;
        
        ctx.drawImage(img, imgX, imgY, drawWidth, drawHeight);
        
        ctx.fillStyle = '#222';
        ctx.font = `${polaroidWidth * 0.1}px 'Permanent Marker', cursive`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        const captionAreaTop = imageContainerY + imageContainerHeight;
        const captionAreaBottom = polaroidHeight / 2;
        const captionY = captionAreaTop + (captionAreaBottom - captionAreaTop) / 2;

        ctx.fillText(caption, 0, captionY);

        ctx.restore();

        const tapeRotation = rotation + (Math.random() - 0.5) * 0.4;
        const tapeY = y - (polaroidHeight / 2) * Math.cos(rotation) - 20;
        const tapeX = x - (polaroidHeight / 2) * Math.sin(rotation);
        
        if(Math.random() > 0.4) { // 60% chance of getting tape
           drawWashiTape(ctx, tapeX, tapeY, 200, 50, tapeRotation);
        }
    });

    // Convert canvas to a high-quality JPEG and return the data URL
    return canvas.toDataURL('image/jpeg', 0.92);
}


interface CollageItem {
  imageUrl: string;
  text: string;
}

/**
 * Creates a space-optimized mosaic collage from images and text labels.
 * @param items An array of objects, each with an imageUrl and a text label.
 * @returns A promise that resolves to a data URL of the generated collage (JPEG format).
 */
export async function createCollage(items: CollageItem[]): Promise<string> {
    const canvas = document.createElement('canvas');
    const canvasWidth = 2400;
    const canvasHeight = 2400;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Could not get 2D canvas context');

    // 1. White background
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    if (items.length === 0) {
        return canvas.toDataURL('image/jpeg', 0.95);
    }

    // 2. Load images
    const loadedImages = await Promise.all(
        items.map(item => loadImage(item.imageUrl))
    );

    const itemsWithImages = items.map((item, index) => ({
        ...item,
        img: loadedImages[index],
        aspectRatio: loadedImages[index].width / loadedImages[index].height
    }));

    // 3. Partition images into rows (greedy algorithm v2)
    const rows: (typeof itemsWithImages)[] = [];
    if (itemsWithImages.length > 0) {
        const canvasAspectRatio = canvasWidth / canvasHeight;
        // Estimate number of rows to make the collage roughly square-ish
        const numRows = Math.max(1, Math.round(Math.sqrt(items.length / canvasAspectRatio)));
        // Calculate the target average aspect ratio for each row
        const totalAspectRatio = itemsWithImages.reduce((sum, item) => sum + item.aspectRatio, 0);
        const targetRowAspectRatio = totalAspectRatio / numRows;

        let currentRow: typeof itemsWithImages = [];
        let currentRowAspectRatio = 0;
        
        itemsWithImages.forEach((item, index) => {
            currentRow.push(item);
            currentRowAspectRatio += item.aspectRatio;
            // If the current row is fuller than the target, and it's not the very last item in the whole list
            // then we can consider breaking it into a new row.
            if (currentRowAspectRatio >= targetRowAspectRatio && index < itemsWithImages.length - 1) {
                rows.push(currentRow);
                currentRow = [];
                currentRowAspectRatio = 0;
            }
        });

        // Add the last remaining row
        if (currentRow.length > 0) {
            rows.push(currentRow);
        }
    }

    // 4. Calculate total height and scaling factor
    const padding = 20; // Reduced padding for less white space
    const textAreaHeight = 120; // Space for text below image
    let unscaledTotalHeight = 0;

    const rowHeights: number[] = rows.map(row => {
        const availableWidth = canvasWidth - (row.length + 1) * padding;
        const totalAspectRatio = row.reduce((sum, item) => sum + item.aspectRatio, 0);
        const rowHeight = availableWidth / totalAspectRatio;
        unscaledTotalHeight += rowHeight + textAreaHeight + padding;
        return rowHeight;
    });
    unscaledTotalHeight += padding; // Final padding at the bottom

    // Scale the collage to fill the entire canvas height.
    const scaleFactor = canvasHeight / unscaledTotalHeight;

    // 5. Draw the scaled collage
    ctx.fillStyle = '#222';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    let yCursor = 0; // Start at the top

    rows.forEach((row, rowIndex) => {
        const scaledRowHeight = rowHeights[rowIndex] * scaleFactor;
        const scaledTextAreaHeight = textAreaHeight * scaleFactor;
        const scaledPadding = padding * scaleFactor;
        
        yCursor += scaledPadding;

        // Calculate total width of the current row to center it horizontally
        const totalImagesWidth = row.reduce((sum, item) => sum + (scaledRowHeight * item.aspectRatio), 0);
        const totalRowWidth = totalImagesWidth + (row.length - 1) * scaledPadding;
        let xCursor = (canvasWidth - totalRowWidth) / 2;

        const fontSize = Math.min(80 * scaleFactor, scaledTextAreaHeight * 0.7);
        ctx.font = `${fontSize}px 'Permanent Marker', cursive`;

        row.forEach(item => {
            const scaledWidth = scaledRowHeight * item.aspectRatio;
            ctx.drawImage(item.img, xCursor, yCursor, scaledWidth, scaledRowHeight);
            
            const textY = yCursor + scaledRowHeight + (scaledTextAreaHeight / 2);
            ctx.fillText(item.text, xCursor + scaledWidth / 2, textY, scaledWidth * 0.95);
            
            xCursor += scaledWidth + scaledPadding;
        });

        yCursor += scaledRowHeight + scaledTextAreaHeight;
    });

    return canvas.toDataURL('image/jpeg', 0.95);
}