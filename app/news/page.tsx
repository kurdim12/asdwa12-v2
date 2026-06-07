import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { Calendar } from "lucide-react";

export const metadata: Metadata = {
    title: "News",
    description: "Updates from our projects, safety milestones and company announcements.",
};

const NEWS = [
    {
        id: 1,
        title: "Awarded major infrastructure contract for new arterial highway",
        date: "March 15, 2024",
        category: "Projects",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop",
        summary:
            "Marwan Alkurdi & Partners has been selected as primary contractor for the Amman–Zarqa arterial highway expansion, underscoring our capability in large-scale transport infrastructure.",
    },
    {
        id: 2,
        title: "1,000,000 safe man-hours achieved at the Dissi Pipeline",
        date: "February 2, 2024",
        category: "Safety",
        image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1200&auto=format&fit=crop",
        summary:
            "Our team reached a monumental milestone of one million hours without a Lost Time Injury, setting a new benchmark for safety excellence in the region.",
    },
    {
        id: 3,
        title: "Advanced geo-injection technology joins our fleet",
        date: "January 10, 2024",
        category: "Innovation",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200&auto=format&fit=crop",
        summary:
            "We have integrated state-of-the-art geo-polymer injection units into our specialized equipment fleet for faster, more durable soil stabilization.",
    },
    {
        id: 4,
        title: "Celebrating 25 years of engineering excellence",
        date: "December 20, 2023",
        category: "Company",
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
        summary:
            "To mark our Silver Jubilee, leadership and staff gathered to celebrate a quarter-century of building Jordan's future and to honor our longest-serving employees.",
    },
];

export default function NewsPage() {
    const [featured, ...rest] = NEWS;

    return (
        <>
            <Navbar />
            <main>
                <PageHeader
                    eyebrow="Newsroom"
                    title="Latest news"
                    subtitle="Updates from our projects, safety milestones and company announcements."
                />
                <Section>
                    {/* Featured */}
                    <Reveal width="100%">
                        <article className="group grid overflow-hidden border border-white/10 bg-surface lg:grid-cols-2">
                            <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
                                <Image
                                    src={featured.image}
                                    alt={featured.title}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="flex flex-col justify-center p-8 md:p-12">
                                <div className="flex items-center gap-4">
                                    <span className="bg-accent px-3 py-1 font-heading text-xs font-bold uppercase tracking-widest text-accent-foreground">
                                        {featured.category}
                                    </span>
                                    <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                                        <Calendar size={14} /> {featured.date}
                                    </span>
                                </div>
                                <h2 className="mt-5 font-heading text-3xl font-bold uppercase leading-tight tracking-tight text-foreground md:text-4xl">
                                    {featured.title}
                                </h2>
                                <p className="mt-4 leading-relaxed text-muted-foreground">
                                    {featured.summary}
                                </p>
                            </div>
                        </article>
                    </Reveal>

                    {/* Grid */}
                    <div className="mt-8 grid gap-8 md:grid-cols-3">
                        {rest.map((item, i) => (
                            <Reveal key={item.id} delay={i * 0.1} width="100%">
                                <article className="group flex h-full flex-col overflow-hidden border border-white/10 bg-surface transition-colors hover:border-accent/40">
                                    <div className="relative aspect-[16/10] overflow-hidden">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <span className="absolute left-4 top-4 bg-accent px-3 py-1 font-heading text-xs font-bold uppercase tracking-widest text-accent-foreground">
                                            {item.category}
                                        </span>
                                    </div>
                                    <div className="flex flex-1 flex-col p-7">
                                        <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                                            <Calendar size={14} /> {item.date}
                                        </span>
                                        <h3 className="mt-3 font-heading text-xl font-bold uppercase leading-tight tracking-wide text-foreground transition-colors group-hover:text-accent">
                                            {item.title}
                                        </h3>
                                        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                                            {item.summary}
                                        </p>
                                    </div>
                                </article>
                            </Reveal>
                        ))}
                    </div>
                </Section>
            </main>
            <Footer />
        </>
    );
}
