"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { Calendar, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const NEWS_ITEMS = [
    {
        id: 1,
        title: "Marwan Alkurdi Awarded Major Infrastructure Contract for New City Highway",
        date: "March 15, 2024",
        category: "Projects",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1000&auto=format&fit=crop",
        summary: "We are proud to announce that Marwan Alkurdi & Partners has been selected as the primary contractor for the upcoming Amman-Zarqa arterial highway expansion. This strategic project underscores our capability in handling large-scale transport infrastructure.",
    },
    {
        id: 2,
        title: "Achieving 1 Million Safe Man-Hours at The Dissi Pipeline Project",
        date: "February 2, 2024",
        category: "Safety Milestone",
        image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1000&auto=format&fit=crop",
        summary: "Safety remains our core value. Our dedicated team at the Dissi site has reached a monumental milestone of 1,000,000 hours without a Lost Time Injury (LTI), setting a new benchmark for safety excellence in the region.",
    },
    {
        id: 3,
        title: "Introducing Advanced Geo-Injection Technology to our Service Fleet",
        date: "January 10, 2024",
        category: "Innovation",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000&auto=format&fit=crop",
        summary: "Innovation drives us forward. We have officially integrated state-of-the-art geo-polymer injection units into our specialized equipment fleet, allowing for faster and more durable soil stabilization solutions.",
    },
    {
        id: 4,
        title: "Annual Company Gala: Celebrating 25 Years of Engineering Excellence",
        date: "December 20, 2023",
        category: "Company",
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1000&auto=format&fit=crop",
        summary: "To mark our Silver Jubilee, leadership and staff gathered to celebrate a quarter-century of building Jordan's future. The evening honored our longest-serving employees and set the vision for the next decade.",
    }
];

export default function NewsPage() {
    return (
        <main className="bg-background min-h-screen">
            <Navbar />

            <div className="pt-32 pb-20 container mx-auto px-4 md:px-8">
                <Reveal>
                    <header className="mb-16">
                        <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">Latest News</h1>
                        <p className="text-white/60 max-w-2xl text-lg leading-relaxed">
                            Updates from our projects, safety milestones, and company announcements.
                        </p>
                    </header>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {NEWS_ITEMS.map((item, index) => (
                        <Reveal key={item.id} delay={index * 0.1}>
                            <article className="group relative bg-neutral-900 border border-white/5 hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
                                {/* Image Container */}
                                <div className="h-64 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                                    />
                                    <div className="absolute top-4 left-4 bg-primary text-background text-xs font-bold uppercase tracking-widest px-3 py-1 z-20">
                                        {item.category}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 flex-1 flex flex-col">
                                    <div className="flex items-center gap-2 text-white/40 text-sm mb-4 font-heading tracking-wide">
                                        <Calendar size={14} />
                                        <span>{item.date}</span>
                                    </div>

                                    <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors leading-tight">
                                        {item.title}
                                    </h2>

                                    <p className="text-white/60 mb-6 flex-1 line-clamp-3">
                                        {item.summary}
                                    </p>

                                    <Link href="#" className="inline-flex items-center gap-2 text-white/50 hover:text-white uppercase text-xs font-bold tracking-widest transition-colors mt-auto">
                                        Read Full Story <ArrowUpRight size={14} />
                                    </Link>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    );
}
