"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Section } from "@/components/ui/primitives";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { COMPANY_DATA } from "@/lib/data";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

function ProjectsList() {
    const searchParams = useSearchParams();
    const categoryParam = searchParams.get("category");

    const categories = COMPANY_DATA.projects.categories;
    const allProjects = categories.flatMap(c => c.projects.map(p => ({ ...p, categoryId: c.id, categoryName: c.name.en })));

    const [filter, setFilter] = useState("all");

    // If URL param exists, sync it (simple effect)
    if (categoryParam && filter === "all" && categoryParam !== filter) {
        setFilter(categoryParam);
    }

    const filteredProjects = filter === "all"
        ? allProjects
        : allProjects.filter(p => p.categoryId === filter);

    return (
        <Section className="min-h-screen pt-32">
            {/* Header */}
            <div className="mb-16">
                <Reveal>
                    <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
                        Our Portfolio
                    </h1>
                </Reveal>
                <Reveal delay={0.2}>
                    <p className="text-white/60 max-w-2xl text-lg">
                        A collection of infrastructure landmarks shaping the future of Jordan.
                    </p>
                </Reveal>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 mb-16 border-b border-white/10 pb-8">
                <button
                    onClick={() => setFilter("all")}
                    className={`text-sm font-heading font-bold uppercase tracking-widest px-4 py-2 rounded-full transition-all ${filter === "all" ? "bg-primary text-background" : "bg-white/5 text-white hover:bg-white/10"
                        }`}
                >
                    All Projects
                </button>
                {categories.map(cat => (
                    <button
                        key={cat.id}
                        onClick={() => setFilter(cat.id)}
                        className={`text-sm font-heading font-bold uppercase tracking-widest px-4 py-2 rounded-full transition-all ${filter === cat.id ? "bg-primary text-background" : "bg-white/5 text-white hover:bg-white/10"
                            }`}
                    >
                        {cat.name.en}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project, i) => (
                        <motion.div
                            layout
                            key={project.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Link href={`/projects/${encodeURIComponent(project.name)}`} className="group block bg-neutral-900 border border-white/5 hover:border-primary/50 transition-colors h-full flex flex-col">
                                {/* Image Placeholder */}
                                <div className="aspect-video bg-neutral-800 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110"
                                        style={{ backgroundImage: `url('/patterns/mesh.png'), linear-gradient(45deg, #222, #111)` }}
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                                        <span className="bg-primary text-background px-4 py-2 font-bold font-heading uppercase text-sm flex items-center gap-2">
                                            View Project <ArrowUpRight size={16} />
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="text-xs text-primary font-heading uppercase tracking-widest mb-2">
                                        {project.categoryName}
                                    </div>
                                    <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                        {project.name}
                                    </h3>
                                    <p className="text-white/50 text-sm line-clamp-3 mb-4 flex-grow">
                                        {project.description}
                                    </p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </Section>
    )
}

export default function ProjectsPage() {
    return (
        <main className="bg-background min-h-screen">
            <Navbar />
            <Suspense fallback={<div className="h-screen w-full flex items-center justify-center text-white">Loading...</div>}>
                <ProjectsList />
            </Suspense>
            <Footer />
        </main>
    );
}
