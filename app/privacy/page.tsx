import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/primitives";
import { LegalBody, LegalSection } from "@/components/legal/Legal";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "How Marwan Ahmad Alkurdi & Partners collects, uses and protects your data.",
};

export default function PrivacyPage() {
    return (
        <>
            <Navbar />
            <main>
                <PageHeader eyebrow="Legal" title="Privacy Policy" subtitle="Last updated: January 2026" />
                <Section>
                    <LegalBody>
                        <p>
                            Marwan Ahmad Alkurdi &amp; Partners (&ldquo;we&rdquo;, &ldquo;us&rdquo;)
                            respects your privacy. This policy explains what information we collect
                            through this website and how we use it.
                        </p>
                        <LegalSection title="Information We Collect">
                            We collect information you voluntarily provide through our contact form —
                            such as your name, email address and message — solely to respond to your
                            enquiry. We do not sell or rent your personal information.
                        </LegalSection>
                        <LegalSection title="How We Use Information">
                            Information submitted through the site is used to communicate with you
                            regarding your enquiry, to improve our services, and to comply with legal
                            obligations.
                        </LegalSection>
                        <LegalSection title="Cookies & Analytics">
                            This site may use cookies and aggregate analytics to understand how
                            visitors use the site. You can disable cookies in your browser settings.
                        </LegalSection>
                        <LegalSection title="Contact">
                            For any privacy-related questions, contact us at info@mkurdi.com.
                        </LegalSection>
                    </LegalBody>
                </Section>
            </main>
            <Footer />
        </>
    );
}
