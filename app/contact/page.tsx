import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/primitives";
import { ContactForm } from "@/components/contact/ContactForm";
import { COMPANY_DATA } from "@/lib/data";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
    title: "Contact",
    description:
        "Get in touch with Marwan Ahmad Alkurdi & Partners — 7th Circle, Amman, Jordan.",
};

export default function ContactPage() {
    const { contact } = COMPANY_DATA;

    const items = [
        { icon: MapPin, label: "Headquarters", value: contact.address.en },
        {
            icon: Phone,
            label: "Phone",
            value: contact.phone,
            href: `tel:${contact.phoneRaw}`,
            note: `Fax: ${contact.fax}`,
        },
        { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
        {
            icon: Clock,
            label: "Working Hours",
            value: "Sunday – Thursday, 8:00 AM – 5:00 PM",
            note: "Friday – Saturday: Closed",
        },
    ];

    return (
        <>
            <Navbar />
            <main>
                <PageHeader
                    eyebrow="Contact Us"
                    title="Let's discuss your project"
                    subtitle="Interested in partnering with us? Reach out and our engineers will be in touch."
                />
                <Section>
                    <div className="grid gap-14 lg:grid-cols-2">
                        {/* Info */}
                        <div className="space-y-8">
                            {items.map((item) => (
                                <div key={item.label} className="flex items-start gap-5">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-surface text-accent">
                                        <item.icon size={22} />
                                    </div>
                                    <div>
                                        <h3 className="font-heading font-bold uppercase tracking-wide text-foreground">
                                            {item.label}
                                        </h3>
                                        {item.href ? (
                                            <a
                                                href={item.href}
                                                className="mt-1 block text-muted-foreground transition-colors hover:text-foreground"
                                            >
                                                {item.value}
                                            </a>
                                        ) : (
                                            <p className="mt-1 text-muted-foreground">{item.value}</p>
                                        )}
                                        {item.note && (
                                            <p className="mt-0.5 text-sm text-muted-foreground/70">
                                                {item.note}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}

                            {/* Map */}
                            <div className="overflow-hidden border border-white/10">
                                <iframe
                                    src={contact.mapEmbed}
                                    title="Office location map"
                                    className="h-72 w-full grayscale"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>

                        {/* Form */}
                        <div className="border border-white/10 bg-surface p-8 md:p-10">
                            <h2 className="mb-6 font-heading text-2xl font-bold uppercase tracking-tight text-foreground">
                                Send a Message
                            </h2>
                            <ContactForm />
                        </div>
                    </div>
                </Section>
            </main>
            <Footer />
        </>
    );
}
