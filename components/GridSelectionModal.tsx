import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';

interface GridSelectionModalProps {
    isOpen: boolean;
    onClose: () => void;
    gridRows: number;
    gridCols: number;
    setGridRows: (rows: number) => void;
    setGridCols: (cols: number) => void;
}

const GridSelectionModal: React.FC<GridSelectionModalProps> = ({
    isOpen,
    onClose,
    gridRows,
    gridCols,
    setGridRows,
    setGridCols
}) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="bg-black/90 p-6 rounded-2xl border border-white/10 shadow-2xl w-80"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h3 className="text-white font-permanent-marker text-lg mb-4">Configurar Grid</h3>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-2">
                                <span className="text-xs text-neutral-400 uppercase font-mono w-16">Filas:</span>
                                {[1, 2, 3, 4].map(n => (
                                    <button key={n} onClick={() => setGridRows(n)} className={cn("w-8 h-8 rounded-lg text-sm flex items-center justify-center transition-colors", gridRows === n ? "bg-yellow-400 text-black" : "bg-white/10 text-white hover:bg-white/20")}>{n}</button>
                                ))}
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-xs text-neutral-400 uppercase font-mono w-16">Cols:</span>
                                {[1, 2, 3, 4].map(n => (
                                    <button key={n} onClick={() => setGridCols(n)} className={cn("w-8 h-8 rounded-lg text-sm flex items-center justify-center transition-colors", gridCols === n ? "bg-yellow-400 text-black" : "bg-white/10 text-white hover:bg-white/20")}>{n}</button>
                                ))}
                            </div>
                        </div>
                        <button onClick={onClose} className="mt-6 w-full py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm font-medium transition-colors">
                            Confirmar
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default GridSelectionModal;
