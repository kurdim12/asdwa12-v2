import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Legacy } from "@/components/home/Legacy";
import { Services } from "@/components/home/Services";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { COMPANY_DATA } from "@/lib/data";
import fs from 'fs';
import path from 'path';

function getFeaturedProjects() {
  const featuredNames = COMPANY_DATA.projects.featuredProjects;
  // Flatten all projects to find the full objects
  const allProjects = COMPANY_DATA.projects.categories.flatMap(c => c.projects);
  const projects = featuredNames.map(name => allProjects.find(p => p.name === name)).filter(p => !!p);

  return projects.map(p => {
    let image = undefined;
    if (p && p.folder) {
      try {
        // p.folder is like "images/projects/Name"
        // In Vercel/Next.js build, we need to be careful with paths
        const publicPath = path.join(process.cwd(), 'public');
        const dir = path.join(publicPath, p.folder);

        if (fs.existsSync(dir)) {
          const files = fs.readdirSync(dir);
          const firstImage = files.find(f => /\.(jpg|jpeg|png|webp)$/i.test(f));
          if (firstImage) {
            image = `/${p.folder}/${firstImage}`;
          }
        }
      } catch (e) {
        console.warn(`Warning: Could not load image for project ${p.name}.`, e);
      }
    }
    // Ensure strictly matched types or spread
    return {
      name: p!.name,
      description: p!.description,
      folder: p!.folder,
      image
    };
  });
}

export default function Home() {
  const projects = getFeaturedProjects();

  return (
    <main className="bg-background min-h-screen relative selection:bg-primary selection:text-background">
      <Navbar />

      <Hero />
      <Legacy />
      <Services />
      <FeaturedProjects projects={projects} />

      <Footer />
    </main>
  );
}
