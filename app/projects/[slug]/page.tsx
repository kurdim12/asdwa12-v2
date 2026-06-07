import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section, Eyebrow, Container } from "@/components/ui/primitives";
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
                {/* Title block */}
                <section className="border-b border-line bg-white pb-10 pt-28 md:pt-36">
                    <Container>
                        <Link
                            href="/projects"
                            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                            <ArrowLeft size={17} /> Back to projects
                        </Link>
                        <div className="mt-6">
                            <Reveal>
                                <Eyebrow>{project.categoryName}</Eyebrow>
                            </Reveal>
                            <Reveal delay={0.08}>
                                <h1 className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-[1.03] tracking-tighter text-foreground md:text-6xl">
                                    {project.name}
                                </h1>
                            </Reveal>
                            <Reveal delay={0.14}>
                                <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
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
                            </Reveal>
                        </div>
                    </Container>
                </section>

                {/* Cover */}
                <Container className="mt-10">
                    <div className="relative aspect-[16/9] overflow-hidden rounded-2xl shadow-card md:aspect-[2/1]">
                        <Image
                            src={project.cover}
                            alt={project.name}
                            fill
                            priority
                            sizes="100vw"
                            className="object-cover"
                        />
                    </div>
                </Container>

                <Section>
                    <div className="grid gap-14 lg:grid-cols-3">
                        {/* Sidebar */}
                        <aside className="lg:col-span-1">
                            <div className="rounded-2xl border border-line bg-paper p-8">
                                <h2 className="border-b border-line pb-4 font-display text-lg font-semibold tracking-tight text-foreground">
                                    Project details
                                </h2>
                                <dl className="mt-6 space-y-5">
                                    {details.map((d) => (
                                        <div key={d.label} className="flex items-start gap-3">
                                            <d.icon className="mt-0.5 shrink-0 text-brand" size={18} />
                                            <div>
                                                <dt className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
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
                                <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground">
                                    About the project
                                </h2>
                            </Reveal>
                            <Reveal delay={0.08}>
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
                            <h2 className="mb-8 font-display text-2xl font-semibold tracking-tight text-foreground">
                                Project gallery
                            </h2>
                        </Reveal>
                        <ProjectGallery images={project.images} name={project.name} />
                    </div>
                </Section>

                {/* Prev / next */}
                <section className="border-t border-line bg-paper">
                    <div className="container grid sm:grid-cols-2">
                        <Link
                            href={`/projects/${prev.slug}`}
                            className="group flex items-center gap-4 border-b border-line py-10 sm:border-b-0 sm:border-r"
                        >
                            <ArrowLeft
                                size={20}
                                className="shrink-0 text-brand transition-transform duration-200 group-hover:-translate-x-1"
                            />
                            <div>
                                <div className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                                    Previous
                                </div>
                                <div className="font-display text-lg font-semibold tracking-tight text-foreground group-hover:text-brand">
                                    {prev.name}
                                </div>
                            </div>
                        </Link>
                        <Link
                            href={`/projects/${next.slug}`}
                            className="group flex items-center justify-end gap-4 py-10 text-right"
                        >
                            <div>
                                <div className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                                    Next
                                </div>
                                <div className="font-display text-lg font-semibold tracking-tight text-foreground group-hover:text-brand">
                                    {next.name}
                                </div>
                            </div>
                            <ArrowRight
                                size={20}
                                className="shrink-0 text-brand transition-transform duration-200 group-hover:translate-x-1"
                            />
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
