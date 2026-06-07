"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
    images: string[];
    index: number | null;
    onClose: () => void;
    onIndexChange: (index: number) => void;
    label?: string;
}

export function Lightbox({ images, index, onClose, onIndexChange, label }: LightboxProps) {
    const isOpen = index !== null;

    const next = useCallback(() => {
        if (index === null) return;
        onIndexChange((index + 1) % images.length);
    }, [index, images.length, onIndexChange]);

    const prev = useCallback(() => {
        if (index === null) return;
        onIndexChange((index - 1 + images.length) % images.length);
    }, [index, images.length, onIndexChange]);

    useEffect(() => {
        if (!isOpen) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowRight") next();
            if (e.key === "ArrowLeft") prev();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [isOpen, onClose, next, prev]);

    return (
        <AnimatePresence>
            {isOpen && index !== null && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-xl"
                    onClick={onClose}
                    role="dialog"
                    aria-modal="true"
                >
                    <button
                        onClick={onClose}
                        aria-label="Close"
                        className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                    >
                        <X size={24} />
                    </button>

                    {images.length > 1 && (
                        <>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    prev();
                                }}
                                aria-label="Previous image"
                                className="absolute left-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-white/70 transition-colors hover:bg-white/10 hover:text-white md:left-8"
                            >
                                <ChevronLeft size={26} />
                            </button>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    next();
                                }}
                                aria-label="Next image"
                                className="absolute right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-white/70 transition-colors hover:bg-white/10 hover:text-white md:right-8"
                            >
                                <ChevronRight size={26} />
                            </button>
                        </>
                    )}

                    <motion.div
                        key={index}
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="relative h-[82vh] w-full max-w-5xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={images[index]}
                            alt={label ? `${label} — ${index + 1}` : `Image ${index + 1}`}
                            fill
                            sizes="100vw"
                            className="object-contain"
                        />
                    </motion.div>

                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-display text-sm tracking-widest text-white/50">
                        <span className="text-white">{String(index + 1).padStart(2, "0")}</span>
                        {" / "}
                        {String(images.length).padStart(2, "0")}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
