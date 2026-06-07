"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, MapPin, Calendar } from "lucide-react";
import { Container, Eyebrow, ButtonLink } from "@/components/ui/primitives";

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

    if (projects.length === 0) return null;

    const go = (next: number) => setIndex((next + projects.length) % projects.length);
    const project = projects[index];

    return (
        <section className="bg-paper py-20 md:py-28">
            <Container>
                <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                    <div className="max-w-2xl">
                        <Eyebrow>Featured works</Eyebrow>
                        <h2 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl">
                            Landmarks that shape the Kingdom
                        </h2>
                    </div>
                    <ButtonLink href="/projects" variant="outline">
                        All projects
                    </ButtonLink>
                </div>

                <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-card">
                    <div className="grid lg:grid-cols-2">
                        {/* Image */}
                        <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:min-h-[30rem]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={project.slug}
                                    initial={{ opacity: 0, scale: 1.04 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src={project.cover}
                                        alt={project.name}
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        className="object-cover"
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Content */}
                        <div className="flex flex-col justify-center p-8 md:p-12">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={project.slug}
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -12 }}
                                    transition={{ duration: 0.35 }}
                                >
                                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
                                        {project.sector}
                                    </span>
                                    <h3 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl">
                                        {project.name}
                                    </h3>
                                    <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
                                        {project.description}
                                    </p>
                                    <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-foreground/70">
                                        {project.location && (
                                            <span className="inline-flex items-center gap-2">
                                                <MapPin size={15} className="text-brand" />
                                                {project.location}
                                            </span>
                                        )}
                                        {project.year && (
                                            <span className="inline-flex items-center gap-2">
                                                <Calendar size={15} className="text-brand" />
                                                {project.year}
                                            </span>
                                        )}
                                    </div>
                                    <Link
                                        href={`/projects/${project.slug}`}
                                        className="group mt-7 inline-flex items-center gap-2 font-medium text-brand"
                                    >
                                        View case study
                                        <ArrowUpRight
                                            size={17}
                                            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                        />
                                    </Link>
                                </motion.div>
                            </AnimatePresence>

                            {/* Controls */}
                            <div className="mt-10 flex items-center gap-3 border-t border-line pt-6">
                                <button
                                    onClick={() => go(index - 1)}
                                    aria-label="Previous project"
                                    className="flex h-11 w-11 items-center justify-center rounded-lg border border-line text-foreground transition-colors hover:border-brand hover:text-brand"
                                >
                                    <ArrowLeft size={18} />
                                </button>
                                <button
                                    onClick={() => go(index + 1)}
                                    aria-label="Next project"
                                    className="flex h-11 w-11 items-center justify-center rounded-lg border border-line text-foreground transition-colors hover:border-brand hover:text-brand"
                                >
                                    <ArrowRight size={18} />
                                </button>
                                <div className="ml-2 text-sm tabular-nums text-muted-foreground">
                                    <span className="font-medium text-foreground">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    {" / "}
                                    {String(projects.length).padStart(2, "0")}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
