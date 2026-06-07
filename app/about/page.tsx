"use client";

import { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section, ButtonLink } from "@/components/ui/primitives";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Target, Award, Download } from "lucide-react";

const TABS = [
    { id: "overview", label: "Overview" },
    { id: "history", label: "History" },
    { id: "leadership", label: "Leadership" },
] as const;

const VALUES = [
    {
        icon: Shield,
        title: "Safety First",
        text: "Strict adherence to international safety standards on every site, every day.",
    },
    {
        icon: Target,
        title: "Precision",
        text: "Disciplined, laser-focused execution on the most complex engineering tasks.",
    },
    {
        icon: Award,
        title: "Quality",
        text: "ISO 9001 certified processes and management across all operations.",
    },
];

const TIMELINE = [
    { year: "1999", text: "Company founded by Mr. Marwan Ahmad Alkurdi in Amman." },
    { year: "2006", text: "Delivered the Al Wahdah Dam and Dead Sea Panorama complex." },
    { year: "2009", text: "Completed civil works for the Aqaba Thermal Power Station." },
    { year: "2013", text: "Played a key role in the landmark Dissi water-conveyance scheme." },
    { year: "Today", text: "120+ engineers delivering Jordan's most demanding civil works." },
];

export default function AboutPage() {
    const [tab, setTab] = useState<(typeof TABS)[number]["id"]>("overview");

    return (
        <>
            <Navbar />
            <main>
                <PageHeader
                    eyebrow="About Us"
                    title="Building more than structures"
                    subtitle="A premier engineering and contracting firm shaping Jordan's infrastructure since 1999."
                    image="/images/hero/2.jpg"
                />

                <Section>
                    <div className="grid gap-16 lg:grid-cols-3">
                        <div className="lg:col-span-2">
                            {/* Tabs */}
                            <div className="mb-12 flex gap-8 border-b border-white/10">
                                {TABS.map((t) => (
                                    <button
                                        key={t.id}
                                        onClick={() => setTab(t.id)}
                                        className={`relative pb-4 font-heading text-sm font-semibold uppercase tracking-widest transition-colors ${
                                            tab === t.id
                                                ? "text-accent"
                                                : "text-muted-foreground hover:text-foreground"
                                        }`}
                                    >
                                        {t.label}
                                        {tab === t.id && (
                                            <motion.span
                                                layoutId="about-tab"
                                                className="absolute inset-x-0 -bottom-px h-0.5 bg-accent"
                                            />
                                        )}
                                    </button>
                                ))}
                            </div>

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={tab}
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -12 }}
                                    transition={{ duration: 0.35 }}
                                >
                                    {tab === "overview" && (
                                        <div className="space-y-6">
                                            <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-foreground">
                                                Building the future since 1999
                                            </h2>
                                            <p className="text-lg leading-relaxed text-muted-foreground">
                                                Marwan Ahmad Alkurdi &amp; Partners specializes in
                                                complex infrastructure — dams, power stations and
                                                specialized injection works — and has become a
                                                trusted partner for national-scale developments.
                                            </p>
                                            <p className="text-lg leading-relaxed text-muted-foreground">
                                                Our commitment to quality, safety and innovation has
                                                earned the confidence of both public and private
                                                sectors, resulting in a portfolio that shapes the
                                                landscape of the Kingdom.
                                            </p>
                                            <div className="grid gap-6 pt-4 sm:grid-cols-3">
                                                {VALUES.map((v) => (
                                                    <div
                                                        key={v.title}
                                                        className="border border-white/10 bg-surface p-6"
                                                    >
                                                        <v.icon
                                                            className="mb-4 text-accent"
                                                            size={28}
                                                        />
                                                        <h3 className="font-heading font-bold uppercase tracking-wide text-foreground">
                                                            {v.title}
                                                        </h3>
                                                        <p className="mt-2 text-sm text-muted-foreground">
                                                            {v.text}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="pt-4">
                                                <a
                                                    href="/documents/company_profile.pdf"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="group inline-flex items-center gap-3 bg-accent px-7 py-4 font-heading text-sm font-medium uppercase tracking-wider text-accent-foreground transition-colors hover:bg-accent-bright"
                                                >
                                                    <Download size={18} />
                                                    Download Company Profile
                                                </a>
                                            </div>
                                        </div>
                                    )}

                                    {tab === "history" && (
                                        <div className="border-l border-white/10 pl-8">
                                            {TIMELINE.map((item, i) => (
                                                <div key={item.year} className="relative pb-12 last:pb-0">
                                                    <span
                                                        className={`absolute -left-[39px] top-1 h-5 w-5 rounded-full border-4 border-background ${
                                                            i === 0 ? "bg-accent" : "bg-white/20"
                                                        }`}
                                                    />
                                                    <h3 className="font-heading text-xl font-bold text-foreground">
                                                        {item.year}
                                                    </h3>
                                                    <p className="mt-1 text-muted-foreground">
                                                        {item.text}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {tab === "leadership" && (
                                        <div>
                                            <h2 className="mb-6 font-heading text-3xl font-bold uppercase tracking-tight text-foreground">
                                                Chairman&apos;s Message
                                            </h2>
                                            <blockquote className="border-l-4 border-accent pl-6 text-xl italic leading-relaxed text-foreground/85">
                                                &ldquo;Our mission has always been to build more than
                                                just structures; we build trust, we build capacity,
                                                and we build the future of our nation.&rdquo;
                                            </blockquote>
                                            <div className="mt-8 flex items-center gap-4">
                                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/15 font-heading text-xl font-bold text-accent">
                                                    MK
                                                </div>
                                                <div>
                                                    <div className="font-heading font-bold text-foreground">
                                                        Marwan Ahmad Alkurdi
                                                    </div>
                                                    <div className="text-sm uppercase tracking-widest text-accent">
                                                        Chairman &amp; Founder
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Sidebar image */}
                        <div className="relative hidden min-h-[460px] overflow-hidden lg:block">
                            <Image
                                src="/images/anniversary.jpg"
                                alt="Marwan Ahmad Alkurdi & Partners"
                                fill
                                sizes="33vw"
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                            <div className="pointer-events-none absolute bottom-6 left-6 right-6 h-16 border-b-2 border-l-2 border-accent/50" />
                        </div>
                    </div>

                    <div className="mt-20 flex flex-col items-center gap-6 border-t border-white/10 pt-16 text-center">
                        <h2 className="max-w-2xl font-heading text-3xl font-bold uppercase tracking-tight text-foreground">
                            Explore the projects behind our reputation
                        </h2>
                        <ButtonLink href="/projects" variant="primary">
                            View Portfolio
                        </ButtonLink>
                    </div>
                </Section>
            </main>
            <Footer />
        </>
    );
}
