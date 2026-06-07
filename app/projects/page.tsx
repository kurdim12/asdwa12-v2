import type { Metadata } from "next";
import { Suspense } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/primitives";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";
import { getAllProjects } from "@/lib/projects";
import { COMPANY_DATA } from "@/lib/data";

export const metadata: Metadata = {
    title: "Projects",
    description:
        "Selected dams, power stations, pipelines, roads and tourism developments delivered across Jordan.",
};

export default function ProjectsPage() {
    const projects = getAllProjects().map((p) => ({
        name: p.name,
        slug: p.slug,
        sector: p.sector,
        description: p.description,
        cover: p.cover,
        categoryId: p.categoryId,
        categoryName: p.categoryName,
    }));

    const categories = COMPANY_DATA.projects.categories.map((c) => ({
        id: c.id,
        name: c.name.en,
    }));

    return (
        <>
            <Navbar />
            <main>
                <PageHeader
                    eyebrow="Our Portfolio"
                    title="Landmarks that shape the Kingdom"
                    subtitle="A collection of infrastructure projects engineered to endure — from dams and pipelines to power stations and gateways."
                    image="/images/hero/3.jpg"
                />
                <section className="py-20 md:py-28">
                    <Container>
                        <Suspense
                            fallback={
                                <div className="py-20 text-center text-muted-foreground">
                                    Loading projects…
                                </div>
                            }
                        >
                            <ProjectsGrid projects={projects} categories={categories} />
                        </Suspense>
                    </Container>
                </section>
            </main>
            <Footer />
        </>
    );
}
