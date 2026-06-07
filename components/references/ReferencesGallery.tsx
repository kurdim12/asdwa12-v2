"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn } from "lucide-react";
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
        <div className="space-y-12">
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
                <AnimatePresence mode="popLayout">
                    {pageItems.map((cert, i) => {
                        const absoluteIndex = start + i;
                        const title = formatTitle(cert);
                        return (
                            <motion.button
                                layout
                                key={cert}
                                initial={{ opacity: 0, scale: 0.96 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.96 }}
                                transition={{ duration: 0.3, delay: (i % 4) * 0.04 }}
                                onClick={() => setActive(absoluteIndex)}
                                className="group relative aspect-[3/4] overflow-hidden rounded-xl border border-line bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-card"
                            >
                                <div className="relative h-full w-full overflow-hidden rounded-lg bg-paper">
                                    <Image
                                        src={cert}
                                        alt={title || "Certificate"}
                                        fill
                                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                        className="object-contain p-1"
                                    />
                                    <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-navy/70 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-white">
                                            <ZoomIn size={14} /> View
                                        </span>
                                    </div>
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
                                page === i + 1 ? "w-8 bg-brand" : "w-2.5 bg-line hover:bg-brand/40"
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
