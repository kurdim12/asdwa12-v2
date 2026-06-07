import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section, Eyebrow } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";
import { COMPANY_DATA } from "@/lib/data";
import { ArrowLeft, ArrowRight, MapPin, Calendar, Building2, Hammer, Camera } from "lucide-react";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
    return getAllProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = getProjectBySlug(slug);
    if (!project) return { title: "Project Not Found" };
    return {
        title: project.name,
        description: project.description,
        openGraph: { images: [{ url: project.cover }] },
    };
}

export default async function ProjectDetail({ params }: PageProps) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) notFound();

    // Prev / next for in-portfolio navigation.
    const all = getAllProjects();
    const idx = all.findIndex((p) => p.slug === project.slug);
    const prev = all[(idx - 1 + all.length) % all.length];
    const next = all[(idx + 1) % all.length];

    const details = [
        { icon: Building2, label: "Sector", value: project.categoryName },
        { icon: MapPin, label: "Location", value: project.location },
        { icon: Calendar, label: "Year", value: project.year },
        { icon: Hammer, label: "Scope", value: project.scope },
        { icon: Building2, label: "Client", value: project.client },
        {
            icon: Camera,
            label: "Photos",
            value: project.images.length ? `${project.images.length} available` : undefined,
        },
    ].filter((d) => d.value);

    return (
        <>
            <Navbar />
            <main>
                {/* Hero banner */}
                <section className="relative h-[70vh] min-h-[480px] overflow-hidden">
                    <Image
                        src={project.cover}
                        alt={project.name}
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/30" />
                    <div className="container relative z-10 flex h-full flex-col justify-end pb-14">
                        <Link
                            href="/projects"
                            className="mb-6 inline-flex w-fit items-center gap-2 text-sm text-foreground/70 transition-colors hover:text-foreground"
                        >
                            <ArrowLeft size={18} /> Back to Projects
                        </Link>
                        <Reveal>
                            <Eyebrow>{project.categoryName}</Eyebrow>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <h1 className="mt-5 max-w-4xl font-heading text-5xl font-bold uppercase leading-[0.95] tracking-tightest text-foreground md:text-7xl">
                                {project.name}
                            </h1>
                        </Reveal>
                    </div>
                </section>

                <Section>
                    <div className="grid gap-14 lg:grid-cols-3">
                        {/* Sidebar */}
                        <aside className="lg:col-span-1">
                            <div className="border border-white/10 bg-surface p-8">
                                <h2 className="border-b border-white/10 pb-4 font-heading text-lg font-bold uppercase tracking-wide text-foreground">
                                    Project Details
                                </h2>
                                <dl className="mt-6 space-y-5">
                                    {details.map((d) => (
                                        <div key={d.label} className="flex items-start gap-3">
                                            <d.icon className="mt-0.5 shrink-0 text-accent" size={18} />
                                            <div>
                                                <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                                                    {d.label}
                                                </dt>
                                                <dd className="mt-0.5 text-foreground">{d.value}</dd>
                                            </div>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </aside>

                        {/* Main */}
                        <div className="lg:col-span-2">
                            <Reveal>
                                <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-foreground">
                                    About the Project
                                </h2>
                            </Reveal>
                            <Reveal delay={0.1}>
                                <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
                                    <p>{project.description}</p>
                                    <p>
                                        This project represents a significant milestone in
                                        Jordan&apos;s infrastructure development. Using
                                        state-of-the-art engineering techniques and adhering to the
                                        highest safety and quality standards (ISO 9001),{" "}
                                        {COMPANY_DATA.company.name.en} delivered it on time and
                                        within budget.
                                    </p>
                                </div>
                            </Reveal>
                        </div>
                    </div>

                    {/* Gallery */}
                    <div className="mt-20">
                        <Reveal>
                            <h2 className="mb-8 font-heading text-2xl font-bold uppercase tracking-tight text-foreground">
                                Project Gallery
                            </h2>
                        </Reveal>
                        <ProjectGallery images={project.images} name={project.name} />
                    </div>
                </Section>

                {/* Prev / next */}
                <section className="border-t border-white/10">
                    <div className="container grid sm:grid-cols-2">
                        <Link
                            href={`/projects/${prev.slug}`}
                            className="group flex items-center gap-4 border-b border-white/10 py-10 sm:border-b-0 sm:border-r"
                        >
                            <ArrowLeft
                                size={22}
                                className="shrink-0 text-accent transition-transform duration-300 group-hover:-translate-x-1"
                            />
                            <div>
                                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                                    Previous
                                </div>
                                <div className="font-heading text-lg font-bold uppercase tracking-wide text-foreground group-hover:text-accent">
                                    {prev.name}
                                </div>
                            </div>
                        </Link>
                        <Link
                            href={`/projects/${next.slug}`}
                            className="group flex items-center justify-end gap-4 py-10 text-right"
                        >
                            <div>
                                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                                    Next
                                </div>
                                <div className="font-heading text-lg font-bold uppercase tracking-wide text-foreground group-hover:text-accent">
                                    {next.name}
                                </div>
                            </div>
                            <ArrowRight
                                size={22}
                                className="shrink-0 text-accent transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
