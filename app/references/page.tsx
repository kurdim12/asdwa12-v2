import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/primitives";
import { ReferencesGallery } from "@/components/references/ReferencesGallery";
import { getCertificates } from "@/lib/projects";

export const metadata: Metadata = {
    title: "References & Certifications",
    description:
        "Official certifications, classifications and letters of recommendation validating decades of engineering excellence.",
};

export default function ReferencesPage() {
    const certificates = getCertificates();

    return (
        <>
            <Navbar />
            <main>
                <PageHeader
                    eyebrow="References & Certifications"
                    title="Validated by results"
                    subtitle="Our commitment to excellence is recognized by industry bodies and a long record of successful partnerships. Browse our official certifications below."
                    image="/images/hero/2.jpg"
                />
                <Section>
                    {certificates.length > 0 ? (
                        <ReferencesGallery certificates={certificates} />
                    ) : (
                        <div className="rounded-2xl border border-dashed border-line bg-paper p-16 text-center text-muted-foreground">
                            No certificates found.
                        </div>
                    )}
                </Section>
            </main>
            <Footer />
        </>
    );
}
