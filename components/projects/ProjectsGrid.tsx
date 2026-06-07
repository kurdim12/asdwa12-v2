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

    const filters = [{ id: "all", name: "All projects" }, ...categories];

    return (
        <>
            {/* Filters */}
            <div className="mb-12 flex flex-wrap gap-2.5">
                {filters.map((f) => (
                    <button
                        key={f.id}
                        onClick={() => setFilter(f.id)}
                        className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                            filter === f.id
                                ? "bg-brand text-white shadow-soft"
                                : "border border-line bg-white text-foreground/70 hover:border-brand/40 hover:text-foreground"
                        }`}
                    >
                        {f.name}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <motion.div layout className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <AnimatePresence mode="popLayout">
                    {filtered.map((project) => (
                        <motion.div
                            layout
                            key={project.slug}
                            initial={{ opacity: 0, scale: 0.96 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.96 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Link
                                href={`/projects/${project.slug}`}
                                className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
                            >
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <Image
                                        src={project.cover}
                                        alt={project.name}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-lg bg-white/90 text-brand opacity-0 shadow-soft backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
                                        <ArrowUpRight size={17} />
                                    </span>
                                </div>
                                <div className="flex flex-1 flex-col p-6">
                                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
                                        {project.categoryName}
                                    </span>
                                    <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-brand">
                                        {project.name}
                                    </h3>
                                    <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                                        {project.description}
                                    </p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {filtered.length === 0 && (
                <p className="py-20 text-center text-muted-foreground">
                    No projects in this category yet.
                </p>
            )}
        </>
    );
}
