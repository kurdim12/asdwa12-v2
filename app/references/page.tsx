import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { ReferencesGallery } from "@/components/references/ReferencesGallery";
import fs from 'fs';
import path from 'path';

function getCertificates() {
    try {
        const dir = path.join(process.cwd(), 'public', 'images', 'certificates');
        if (fs.existsSync(dir)) {
            return fs.readdirSync(dir)
                .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
                .map(file => `/images/certificates/${file}`);
        }
    } catch (e) {
        console.error("Error loading certificates:", e);
    }
    return [];
}

export default function ReferencesPage() {
    const certificates = getCertificates();

    return (
        <main className="bg-background min-h-screen">
            <Navbar />

            <div className="pt-32 pb-20 container mx-auto px-4 md:px-8">
                <Reveal>
                    <header className="mb-16 text-center">
                        <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 uppercase tracking-tight">
                            References <span className="text-primary">&</span> Certifications
                        </h1>
                        <div className="h-1 w-24 bg-primary mx-auto mb-8" />
                        <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
                            Our commitment to excellence is validated by recognized industry bodies and a history of successful partnerships.
                            Browse our official certifications and letters of recommendation below.
                        </p>
                    </header>
                </Reveal>

                {certificates.length > 0 ? (
                    <ReferencesGallery certificates={certificates} />
                ) : (
                    <div className="h-64 flex items-center justify-center border border-dashed border-white/10 rounded-lg bg-white/5 mt-8">
                        <p className="text-white/40 font-heading uppercase tracking-widest">No certificates found.</p>
                    </div>
                )}
            </div>

            <Footer />
        </main>
    );
}
