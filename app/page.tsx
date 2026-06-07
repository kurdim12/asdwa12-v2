import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Clients } from "@/components/home/Clients";
import { Legacy } from "@/components/home/Legacy";
import { Sectors } from "@/components/home/Sectors";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { getFeaturedProjects } from "@/lib/projects";

export default function Home() {
    const featured = getFeaturedProjects().map((p) => ({
        name: p.name,
        slug: p.slug,
        sector: p.sector,
        description: p.description,
        cover: p.cover,
        year: p.year,
        location: p.location,
    }));

    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Clients />
                <Legacy />
                <Sectors />
                <FeaturedProjects projects={featured} />
                <ServicesPreview />
            </main>
            <Footer />
        </>
    );
}
