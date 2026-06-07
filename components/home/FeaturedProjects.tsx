"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, MapPin, Calendar } from "lucide-react";
import { Eyebrow } from "@/components/ui/primitives";

export interface FeaturedProject {
    name: string;
    slug: string;
    sector: string;
    description: string;
    cover: string;
    year?: string;
    location?: string;
}

export function FeaturedProjects({ projects }: { projects: FeaturedProject[] }) {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    if (projects.length === 0) return null;

    const go = (next: number) => {
        setDirection(next > index || (index === projects.length - 1 && next === 0) ? 1 : -1);
        setIndex((next + projects.length) % projects.length);
    };

    const project = projects[index];

    return (
        <section className="relative border-t border-white/10">
            <div className="grid lg:grid-cols-[minmax(0,1fr)_1.4fr]">
                {/* Content */}
                <div className="relative flex flex-col justify-center p-8 md:p-14 lg:p-16">
                    <Eyebrow>Featured Works</Eyebrow>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={project.slug}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -16 }}
                            transition={{ duration: 0.4 }}
                            className="mt-8"
                        >
                            <span className="font-heading text-xs uppercase tracking-[0.25em] text-accent">
                                {project.sector}
                            </span>
                            <h2 className="mt-4 font-heading text-4xl font-bold uppercase leading-tight tracking-tight text-foreground md:text-5xl">
                                {project.name}
                            </h2>
                            <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
                                {project.description}
                            </p>

                            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm text-foreground/70">
                                {project.location && (
                                    <span className="inline-flex items-center gap-2">
                                        <MapPin size={15} className="text-accent" />
                                        {project.location}
                                    </span>
                                )}
                                {project.year && (
                                    <span className="inline-flex items-center gap-2">
                                        <Calendar size={15} className="text-accent" />
                                        {project.year}
                                    </span>
                                )}
                            </div>

                            <Link
                                href={`/projects/${project.slug}`}
                                className="group mt-8 inline-flex items-center gap-2 border-b border-accent/40 pb-1 font-heading text-sm uppercase tracking-wider text-accent transition-colors hover:border-accent"
                            >
                                View Case Study
                                <ArrowUpRight
                                    size={16}
                                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                />
                            </Link>
                        </motion.div>
                    </AnimatePresence>

                    {/* Controls */}
                    <div className="mt-12 flex items-center gap-4">
                        <button
                            onClick={() => go(index - 1)}
                            aria-label="Previous project"
                            className="flex h-12 w-12 items-center justify-center border border-white/15 text-foreground transition-colors hover:border-accent hover:text-accent"
                        >
                            <ArrowLeft size={18} />
                        </button>
                        <button
                            onClick={() => go(index + 1)}
                            aria-label="Next project"
                            className="flex h-12 w-12 items-center justify-center border border-white/15 text-foreground transition-colors hover:border-accent hover:text-accent"
                        >
                            <ArrowRight size={18} />
                        </button>
                        <div className="ml-2 font-heading text-sm tracking-widest text-muted-foreground">
                            <span className="text-accent">
                                {String(index + 1).padStart(2, "0")}
                            </span>
                            {" / "}
                            {String(projects.length).padStart(2, "0")}
                        </div>
                    </div>
                </div>

                {/* Image */}
                <div className="relative min-h-[60vh] overflow-hidden bg-surface-2 lg:min-h-[80vh]">
                    <AnimatePresence mode="popLayout" custom={direction}>
                        <motion.div
                            key={project.slug}
                            custom={direction}
                            initial={{ opacity: 0, scale: 1.08 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={project.cover}
                                alt={project.name}
                                fill
                                sizes="(max-width: 1024px) 100vw, 60vw"
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent lg:from-background/40" />
                        </motion.div>
                    </AnimatePresence>

                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                        <span className="select-none font-heading text-[18vw] font-bold uppercase leading-none tracking-tighter text-white/5 lg:text-[10vw]">
                            {project.name.split(" ")[0]}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
