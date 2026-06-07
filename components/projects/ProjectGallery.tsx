"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Lightbox } from "@/components/ui/Lightbox";

export function ProjectGallery({ images, name }: { images: string[]; name: string }) {
    const [active, setActive] = useState<number | null>(null);

    if (images.length === 0) {
        return (
            <div className="rounded-lg border border-dashed border-white/10 bg-white/5 p-12 text-center font-heading uppercase tracking-widest text-muted-foreground">
                Photos coming soon
            </div>
        );
    }

    return (
        <>
            <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
                {images.map((src, i) => (
                    <motion.button
                        key={src}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
                        onClick={() => setActive(i)}
                        className="group relative block w-full overflow-hidden border border-white/10 bg-surface-2"
                        aria-label={`Open image ${i + 1}`}
                    >
                        <Image
                            src={src}
                            alt={`${name} — photo ${i + 1}`}
                            width={600}
                            height={450}
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="h-auto w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-accent/0 transition-colors duration-300 group-hover:bg-accent/10" />
                    </motion.button>
                ))}
            </div>

            <Lightbox
                images={images}
                index={active}
                onClose={() => setActive(null)}
                onIndexChange={setActive}
                label={name}
            />
        </>
    );
}
