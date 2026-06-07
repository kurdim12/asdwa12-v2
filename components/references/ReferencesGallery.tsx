"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn, Award } from "lucide-react";
import { cn } from "@/lib/utils";
import { Lightbox } from "@/components/ui/Lightbox";

const PER_PAGE = 12;

function formatTitle(path: string) {
    const filename = decodeURIComponent(path.split("/").pop() || "");
    return filename
        .replace(/\.[^/.]+$/, "")
        .replace(/copy of/i, "")
        .replace(/[_-]+/g, " ")
        .trim();
}

export function ReferencesGallery({ certificates }: { certificates: string[] }) {
    const [page, setPage] = useState(1);
    const [active, setActive] = useState<number | null>(null);

    const totalPages = Math.ceil(certificates.length / PER_PAGE);
    const start = (page - 1) * PER_PAGE;
    const pageItems = certificates.slice(start, start + PER_PAGE);

    return (
        <div className="space-y-14">
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
                <AnimatePresence mode="popLayout">
                    {pageItems.map((cert, i) => {
                        const absoluteIndex = start + i;
                        const title = formatTitle(cert);
                        return (
                            <motion.button
                                layout
                                key={cert}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3, delay: (i % 4) * 0.04 }}
                                onClick={() => setActive(absoluteIndex)}
                                className="group relative aspect-[3/4] overflow-hidden border border-white/10 bg-surface-2 text-left transition-all duration-500 hover:border-accent/50 hover:shadow-glow"
                            >
                                <Image
                                    src={cert}
                                    alt={title || "Certificate"}
                                    fill
                                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                    className="object-cover brightness-90 transition-all duration-700 group-hover:scale-105 group-hover:brightness-100"
                                />
                                <div className="absolute right-3 top-3 text-white/30 transition-colors group-hover:text-accent">
                                    <Award size={22} />
                                </div>
                                <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 bg-gradient-to-t from-black via-black/70 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <span className="inline-flex items-center gap-2 font-heading text-xs uppercase tracking-widest text-accent">
                                        <ZoomIn size={14} /> View
                                    </span>
                                    {title && (
                                        <span dir="auto" className="line-clamp-2 text-sm text-white/90">
                                            {title}
                                        </span>
                                    )}
                                </div>
                            </motion.button>
                        );
                    })}
                </AnimatePresence>
            </div>

            {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2">
                    {Array.from({ length: totalPages }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setPage(i + 1)}
                            aria-label={`Page ${i + 1}`}
                            className={cn(
                                "h-2.5 rounded-full transition-all duration-300",
                                page === i + 1 ? "w-8 bg-accent" : "w-2.5 bg-white/20 hover:bg-white/50"
                            )}
                        />
                    ))}
                </div>
            )}

            <Lightbox
                images={certificates}
                index={active}
                onClose={() => setActive(null)}
                onIndexChange={setActive}
                label="Certificate"
            />
        </div>
    );
}
