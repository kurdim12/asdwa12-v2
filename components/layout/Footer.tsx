import Link from "next/link";
import { COMPANY_DATA } from "@/lib/data";
import { Facebook, MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export function Footer() {
    const { company, contact, social, sectors } = COMPANY_DATA;
    const year = new Date().getFullYear();

    return (
        <>
            {/* CTA band */}
            <section className="border-t border-line bg-paper">
                <div className="container flex flex-col items-start justify-between gap-6 py-16 md:flex-row md:items-center">
                    <div>
                        <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                            Let&apos;s build what lasts.
                        </h2>
                        <p className="mt-3 max-w-md text-muted-foreground">
                            Have a project in mind? Our engineers are ready to discuss it.
                        </p>
                    </div>
                    <Link
                        href="/contact"
                        className="group inline-flex items-center gap-2 rounded-lg bg-brand px-7 py-3.5 font-medium text-white shadow-soft transition-colors hover:bg-brand-700"
                    >
                        Start a conversation
                        <ArrowRight
                            size={18}
                            className="transition-transform duration-200 group-hover:translate-x-0.5"
                        />
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-navy text-white">
                <div className="container py-16">
                    <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
                        {/* Brand */}
                        <div className="col-span-2">
                            <Link href="/" className="inline-block">
                                <span className="font-display text-2xl font-semibold tracking-tight text-white">
                                    Marwan A. Alkurdi
                                </span>
                                <span className="mt-1 block text-xs uppercase tracking-[0.22em] text-white/55">
                                    &amp; Partners Co. Ltd.
                                </span>
                            </Link>
                            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/60">
                                {company.established} of engineering excellence in dams, power,
                                infrastructure and specialized civil works across Jordan.
                            </p>
                            <a
                                href={social.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="mt-6 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white/70 transition-colors hover:border-white/40 hover:text-white"
                            >
                                <Facebook size={18} />
                            </a>
                        </div>

                        <FooterCol title="Company">
                            {COMPANY_DATA.nav.slice(1).map((item) => (
                                <FooterLink key={item.href} href={item.href}>
                                    {item.label}
                                </FooterLink>
                            ))}
                        </FooterCol>

                        <FooterCol title="Expertise">
                            {sectors.slice(0, 5).map((s) => (
                                <FooterLink key={s.id} href="/services">
                                    {s.title}
                                </FooterLink>
                            ))}
                        </FooterCol>

                        <FooterCol title="Contact">
                            <li className="flex items-start gap-3">
                                <MapPin className="mt-0.5 shrink-0 text-white/50" size={16} />
                                <span>{contact.address.en}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="shrink-0 text-white/50" size={16} />
                                <a href={`tel:${contact.phoneRaw}`} className="hover:text-white">
                                    {contact.phone}
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="shrink-0 text-white/50" size={16} />
                                <a href={`mailto:${contact.email}`} className="hover:text-white">
                                    {contact.email}
                                </a>
                            </li>
                        </FooterCol>
                    </div>

                    <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 md:flex-row">
                        <p>
                            &copy; {year} {company.name.en}. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            <Link href="/privacy" className="hover:text-white">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="hover:text-white">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
                {title}
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-white/60">{children}</ul>
        </div>
    );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <li>
            <Link href={href} className="transition-colors hover:text-white">
                {children}
            </Link>
        </li>
    );
}
