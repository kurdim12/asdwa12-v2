import Link from "next/link";
import Image from "next/image";
import { COMPANY_DATA } from "@/lib/data";
import { Facebook, MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

export function Footer() {
    const { company, contact, social, sectors } = COMPANY_DATA;
    const year = new Date().getFullYear();

    return (
        <footer className="relative border-t border-white/10 bg-surface">
            {/* CTA band */}
            <div className="border-b border-white/10">
                <div className="container flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center">
                    <div>
                        <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-foreground md:text-4xl">
                            Let&apos;s build what lasts.
                        </h2>
                        <p className="mt-2 max-w-md text-muted-foreground">
                            Have a project in mind? Our engineers are ready to discuss it.
                        </p>
                    </div>
                    <Link
                        href="/contact"
                        className="group inline-flex items-center gap-3 bg-accent px-7 py-4 font-heading text-sm font-medium uppercase tracking-wider text-accent-foreground transition-colors hover:bg-accent-bright"
                    >
                        Start a Conversation
                        <ArrowUpRight
                            size={18}
                            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                    </Link>
                </div>
            </div>

            <div className="container py-16">
                <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
                    {/* Brand */}
                    <div className="col-span-2">
                        <Image
                            src="/images/logo.png"
                            alt={company.name.en}
                            width={170}
                            height={48}
                            className="h-11 w-auto object-contain"
                        />
                        <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
                            {company.established} of engineering excellence in dams, power,
                            infrastructure and specialized civil works across Jordan.
                        </p>
                        <a
                            href={social.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            className="mt-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                        >
                            <Facebook size={18} />
                        </a>
                    </div>

                    {/* Navigation */}
                    <FooterCol title="Company">
                        {COMPANY_DATA.nav.slice(1).map((item) => (
                            <FooterLink key={item.href} href={item.href}>
                                {item.label}
                            </FooterLink>
                        ))}
                    </FooterCol>

                    {/* Expertise */}
                    <FooterCol title="Expertise">
                        {sectors.slice(0, 5).map((s) => (
                            <FooterLink key={s.id} href="/services">
                                {s.title}
                            </FooterLink>
                        ))}
                    </FooterCol>

                    {/* Contact */}
                    <FooterCol title="Contact">
                        <li className="flex items-start gap-3">
                            <MapPin className="mt-0.5 shrink-0 text-accent" size={16} />
                            <span>{contact.address.en}</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="shrink-0 text-accent" size={16} />
                            <a href={`tel:${contact.phoneRaw}`} className="hover:text-foreground">
                                {contact.phone}
                            </a>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail className="shrink-0 text-accent" size={16} />
                            <a href={`mailto:${contact.email}`} className="hover:text-foreground">
                                {contact.email}
                            </a>
                        </li>
                    </FooterCol>
                </div>

                <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-muted-foreground md:flex-row">
                    <p>
                        &copy; {year} {company.name.en}. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-foreground">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="hover:text-foreground">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div>
            <h3 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
                {title}
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">{children}</ul>
        </div>
    );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <li>
            <Link href={href} className="transition-colors hover:text-accent">
                {children}
            </Link>
        </li>
    );
}
