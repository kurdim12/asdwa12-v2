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
        text: "Disciplined, focused execution on the most complex engineering tasks.",
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
                    eyebrow="About us"
                    title="Building more than structures"
                    subtitle="A premier engineering and contracting firm shaping Jordan's infrastructure since 1999."
                    image="/images/hero/2.jpg"
                />

                <Section>
                    <div className="grid gap-14 lg:grid-cols-3">
                        <div className="lg:col-span-2">
                            {/* Tabs */}
                            <div className="mb-10 flex gap-8 border-b border-line">
                                {TABS.map((t) => (
                                    <button
                                        key={t.id}
                                        onClick={() => setTab(t.id)}
                                        className={`relative pb-4 text-sm font-semibold transition-colors ${
                                            tab === t.id
                                                ? "text-brand"
                                                : "text-muted-foreground hover:text-foreground"
                                        }`}
                                    >
                                        {t.label}
                                        {tab === t.id && (
                                            <motion.span
                                                layoutId="about-tab"
                                                className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-brand"
                                            />
                                        )}
                                    </button>
                                ))}
                            </div>

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={tab}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {tab === "overview" && (
                                        <div className="space-y-6">
                                            <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground">
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
                                            <div className="grid gap-5 pt-4 sm:grid-cols-3">
                                                {VALUES.map((v) => (
                                                    <div
                                                        key={v.title}
                                                        className="rounded-xl border border-line bg-white p-6 shadow-soft"
                                                    >
                                                        <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand/8 text-brand">
                                                            <v.icon size={22} />
                                                        </div>
                                                        <h3 className="font-display font-semibold tracking-tight text-foreground">
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
                                                    className="inline-flex items-center gap-2.5 rounded-lg bg-brand px-7 py-3.5 font-medium text-white shadow-soft transition-colors hover:bg-brand-700"
                                                >
                                                    <Download size={18} />
                                                    Download company profile
                                                </a>
                                            </div>
                                        </div>
                                    )}

                                    {tab === "history" && (
                                        <div className="border-l-2 border-line pl-8">
                                            {TIMELINE.map((item, i) => (
                                                <div key={item.year} className="relative pb-10 last:pb-0">
                                                    <span
                                                        className={`absolute -left-[41px] top-1 h-4 w-4 rounded-full ring-4 ring-white ${
                                                            i === 0 ? "bg-brand" : "bg-line"
                                                        }`}
                                                    />
                                                    <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">
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
                                            <h2 className="mb-6 font-display text-3xl font-semibold tracking-tight text-foreground">
                                                Chairman&apos;s message
                                            </h2>
                                            <blockquote className="border-l-4 border-brand pl-6 text-xl italic leading-relaxed text-foreground/85">
                                                &ldquo;Our mission has always been to build more than
                                                just structures; we build trust, we build capacity,
                                                and we build the future of our nation.&rdquo;
                                            </blockquote>
                                            <div className="mt-8 flex items-center gap-4">
                                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 font-display text-xl font-semibold text-brand">
                                                    MK
                                                </div>
                                                <div>
                                                    <div className="font-display font-semibold text-foreground">
                                                        Marwan Ahmad Alkurdi
                                                    </div>
                                                    <div className="text-sm text-brand">
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
                        <div className="relative hidden min-h-[440px] overflow-hidden rounded-2xl shadow-card lg:block">
                            <Image
                                src="/images/anniversary.jpg"
                                alt="Marwan Ahmad Alkurdi & Partners"
                                fill
                                sizes="33vw"
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="mt-20 flex flex-col items-center gap-6 rounded-2xl border border-line bg-paper px-6 py-14 text-center">
                        <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight text-foreground">
                            Explore the projects behind our reputation
                        </h2>
                        <ButtonLink href="/projects" variant="primary" size="lg">
                            View portfolio
                        </ButtonLink>
                    </div>
                </Section>
            </main>
            <Footer />
        </>
    );
}
