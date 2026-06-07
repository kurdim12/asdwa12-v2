import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/primitives";
import { LegalBody, LegalSection } from "@/components/legal/Legal";

export const metadata: Metadata = {
    title: "Terms of Service",
    description: "The terms governing your use of the Marwan Ahmad Alkurdi & Partners website.",
};

export default function TermsPage() {
    return (
        <>
            <Navbar />
            <main>
                <PageHeader eyebrow="Legal" title="Terms of Service" subtitle="Last updated: January 2026" />
                <Section>
                    <LegalBody>
                        <p>
                            By accessing this website, you agree to these terms. Please read them
                            carefully before using the site.
                        </p>
                        <LegalSection title="Use of the Site">
                            This website and its content are provided for general informational
                            purposes. You agree not to misuse the site or attempt to disrupt its
                            operation.
                        </LegalSection>
                        <LegalSection title="Intellectual Property">
                            All content, including text, imagery, project photography and logos, is
                            the property of Marwan Ahmad Alkurdi &amp; Partners and may not be
                            reproduced without prior written consent.
                        </LegalSection>
                        <LegalSection title="Disclaimer">
                            While we strive to keep information accurate and current, the site is
                            provided &ldquo;as is&rdquo; without warranties of any kind. Project
                            details are illustrative and may not reflect contractual specifications.
                        </LegalSection>
                        <LegalSection title="Contact">
                            Questions about these terms can be directed to info@mkurdi.com.
                        </LegalSection>
                    </LegalBody>
                </Section>
            </main>
            <Footer />
        </>
    );
}
