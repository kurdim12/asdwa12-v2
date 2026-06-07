import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section, Eyebrow } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { Sectors } from "@/components/home/Sectors";
import { COMPANY_DATA } from "@/lib/data";
import { Check } from "lucide-react";

export const metadata: Metadata = {
    title: "Services",
    description:
        "Specialized injection and ground improvement, heavy civil works and a modern equipment fleet — delivered to ISO standards across Jordan.",
};

const SERVICE_IMAGES = ["/images/hero/3.jpg", "/images/hero/1.jpg"];

const PROCESS = [
    { step: "01", title: "Consult", text: "We listen, survey the site and define the engineering challenge." },
    { step: "02", title: "Engineer", text: "Our specialists design the optimal, standards-compliant solution." },
    { step: "03", title: "Build", text: "Certified crews and modern plant execute with precision and safety." },
    { step: "04", title: "Deliver", text: "On time, within budget, and built to last for decades." },
];

export default function ServicesPage() {
    const { mainServices } = COMPANY_DATA.services;

    return (
        <>
            <Navbar />
            <main>
                <PageHeader
                    eyebrow="Our Services"
                    title="Specialized engineering, end to end"
                    subtitle="From ground improvement to heavy civil works, we deliver the full spectrum of capabilities national-scale projects demand."
                    image="/images/hero/1.jpg"
                />

                {/* Main services — alternating rows */}
                <Section>
                    <div className="space-y-20 md:space-y-28">
                        {mainServices.map((service, i) => (
                            <div
                                key={service.id}
                                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
                            >
                                <Reveal
                                    width="100%"
                                    className={i % 2 === 1 ? "lg:order-2" : ""}
                                >
                                    <div className="group relative aspect-[16/11] overflow-hidden">
                                        <Image
                                            src={SERVICE_IMAGES[i] ?? SERVICE_IMAGES[0]}
                                            alt={service.title.en}
                                            fill
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-tr from-background/60 to-transparent" />
                                        <span className="absolute left-6 top-6 font-heading text-6xl font-bold text-white/15">
                                            0{i + 1}
                                        </span>
                                    </div>
                                </Reveal>

                                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                                    <Reveal>
                                        <Eyebrow>Service 0{i + 1}</Eyebrow>
                                    </Reveal>
                                    <Reveal delay={0.1}>
                                        <h2 className="mt-5 font-heading text-3xl font-bold uppercase tracking-tight text-foreground md:text-4xl">
                                            {service.title.en}
                                        </h2>
                                    </Reveal>
                                    <Reveal delay={0.16}>
                                        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                                            {service.description}
                                        </p>
                                    </Reveal>
                                    <Reveal delay={0.22} width="100%">
                                        <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                                            {service.features.map((feature) => (
                                                <li
                                                    key={feature}
                                                    className="flex items-center gap-2.5 text-foreground/80"
                                                >
                                                    <Check size={18} className="shrink-0 text-accent" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </Reveal>
                                </div>
                            </div>
                        ))}
                    </div>
                </Section>

                {/* Capabilities grid (shared with home) */}
                <Sectors />

                {/* Process */}
                <Section>
                    <div className="mb-16 max-w-2xl">
                        <Reveal>
                            <Eyebrow>How We Work</Eyebrow>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <h2 className="mt-6 font-heading text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl">
                                A disciplined delivery process
                            </h2>
                        </Reveal>
                    </div>
                    <div className="grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
                        {PROCESS.map((p, i) => (
                            <Reveal key={p.step} delay={i * 0.08} width="100%">
                                <div className="h-full bg-surface p-8">
                                    <div className="font-heading text-5xl font-bold text-gold">
                                        {p.step}
                                    </div>
                                    <h3 className="mt-4 font-heading text-xl font-bold uppercase tracking-wide text-foreground">
                                        {p.title}
                                    </h3>
                                    <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </Section>
            </main>
            <Footer />
        </>
    );
}
