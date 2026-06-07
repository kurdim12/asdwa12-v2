"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export interface ProjectCardData {
    name: string;
    slug: string;
    sector: string;
    description: string;
    cover: string;
    categoryId: string;
    categoryName: string;
}

interface Category {
    id: string;
    name: string;
}

export function ProjectsGrid({
    projects,
    categories,
}: {
    projects: ProjectCardData[];
    categories: Category[];
}) {
    // Seed the active filter from the URL once (supports deep links like
    // /projects?category=dams); the filter buttons drive it thereafter.
    const searchParams = useSearchParams();
    const [filter, setFilter] = useState(() => searchParams.get("category") ?? "all");

    const filtered =
        filter === "all" ? projects : projects.filter((p) => p.categoryId === filter);

    const filters = [{ id: "all", name: "All Projects" }, ...categories];

    return (
        <>
            {/* Filters */}
            <div className="mb-14 flex flex-wrap gap-3 border-b border-white/10 pb-8">
                {filters.map((f) => (
                    <button
                        key={f.id}
                        onClick={() => setFilter(f.id)}
                        className={`rounded-full px-5 py-2.5 font-heading text-xs font-semibold uppercase tracking-widest transition-all ${
                            filter === f.id
                                ? "bg-accent text-accent-foreground"
                                : "bg-white/5 text-foreground/70 hover:bg-white/10 hover:text-foreground"
                        }`}
                    >
                        {f.name}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <motion.div
                layout
                className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
                <AnimatePresence mode="popLayout">
                    {filtered.map((project) => (
                        <motion.div
                            layout
                            key={project.slug}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Link
                                href={`/projects/${project.slug}`}
                                className="group flex h-full flex-col overflow-hidden border border-white/10 bg-surface transition-colors hover:border-accent/40"
                            >
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <Image
                                        src={project.cover}
                                        alt={project.name}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
                                    <span className="absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center bg-accent text-accent-foreground opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                        <ArrowUpRight size={18} />
                                    </span>
                                </div>
                                <div className="flex flex-1 flex-col p-6">
                                    <span className="font-heading text-xs uppercase tracking-[0.2em] text-accent">
                                        {project.categoryName}
                                    </span>
                                    <h3 className="mt-2 font-heading text-xl font-bold uppercase tracking-wide text-foreground transition-colors group-hover:text-accent">
                                        {project.name}
                                    </h3>
                                    <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">
                                        {project.description}
                                    </p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {filtered.length === 0 && (
                <p className="py-20 text-center font-heading uppercase tracking-widest text-muted-foreground">
                    No projects in this category yet.
                </p>
            )}
        </>
    );
}
