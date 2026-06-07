// Server-only helpers. These read from the filesystem (public/) at build time
// to resolve real project imagery, so only import them from Server Components.
import fs from "fs";
import path from "path";
import { COMPANY_DATA, type Project } from "@/lib/data";
import { slugify, naturalCompare } from "@/lib/utils";

const IMAGE_RE = /\.(jpe?g|png|webp|avif)$/i;

// Real photos that always exist — used as graceful fallbacks for missing folders.
const FALLBACKS = ["/images/hero/1.jpg", "/images/hero/2.jpg", "/images/hero/3.jpg"];

export interface ResolvedProject extends Project {
    slug: string;
    categoryId: string;
    categoryName: string;
    cover: string;
    hasRealImages: boolean;
}

export interface ProjectDetail extends ResolvedProject {
    images: string[];
}

/** Encode each path segment (folders/files may contain spaces) while keeping slashes. */
function toPublicUrl(folder: string, file: string) {
    const segments = `${folder}/${file}`.split("/").map(encodeURIComponent);
    return `/${segments.join("/")}`;
}

/** All image URLs inside a project folder, natural-sorted. Empty if none/missing. */
function resolveImages(folder?: string): string[] {
    if (!folder) return [];
    try {
        const dir = path.join(process.cwd(), "public", folder);
        if (!fs.existsSync(dir)) return [];
        return fs
            .readdirSync(dir)
            .filter((file) => IMAGE_RE.test(file))
            .sort(naturalCompare)
            .map((file) => toPublicUrl(folder, file));
    } catch {
        return [];
    }
}

function fallbackFor(name: string) {
    return FALLBACKS[name.length % FALLBACKS.length];
}

function enrich(project: Project, categoryId: string, categoryName: string): ResolvedProject {
    const images = resolveImages(project.folder);
    return {
        ...project,
        slug: slugify(project.name),
        categoryId,
        categoryName,
        cover: images[0] ?? fallbackFor(project.name),
        hasRealImages: images.length > 0,
    };
}

export function getAllProjects(): ResolvedProject[] {
    return COMPANY_DATA.projects.categories.flatMap((category) =>
        category.projects.map((project) => enrich(project, category.id, category.name.en))
    );
}

export function getProjectBySlug(slug: string): ProjectDetail | null {
    for (const category of COMPANY_DATA.projects.categories) {
        const match = category.projects.find((p) => slugify(p.name) === slug);
        if (match) {
            const base = enrich(match, category.id, category.name.en);
            return { ...base, images: resolveImages(match.folder) };
        }
    }
    return null;
}

export function getFeaturedProjects(): ResolvedProject[] {
    const all = getAllProjects();
    const featured = COMPANY_DATA.projects.featured
        .map((name) => all.find((p) => p.name === name))
        .filter((p): p is ResolvedProject => Boolean(p));
    // Fall back to any flagged-featured projects if the named list comes up short.
    return featured.length ? featured : all.filter((p) => p.featured);
}

export function getCertificates(): string[] {
    try {
        const dir = path.join(process.cwd(), "public", "images", "certificates");
        if (!fs.existsSync(dir)) return [];
        return fs
            .readdirSync(dir)
            .filter((file) => IMAGE_RE.test(file))
            .sort(naturalCompare)
            .map((file) => toPublicUrl("images/certificates", file));
    } catch {
        return [];
    }
}
