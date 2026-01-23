"use client";

import { Section } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { COMPANY_DATA } from "@/lib/data";
import { ArrowRight, Hammer, Cog } from "lucide-react";
import Link from "next/link";

export function Services() {
    const { mainServices } = COMPANY_DATA.services;
    const icons = [Hammer, Cog]; // Map visually to the services

    return (
        <Section className="bg-secondary/30 border-y border-white/5">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <Reveal width="100%" className="mx-auto">
                    <h4 className="text-primary font-heading uppercase tracking-widest text-sm mb-4">Our Expertise</h4>
                </Reveal>
                <Reveal width="100%" delay={0.2} className="mx-auto">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                        Specialized Engineering Services
                    </h2>
                </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {mainServices.map((service, index) => {
                    const Icon = icons[index] || Hammer;
                    return (
                        <Reveal key={service.id} delay={0.3 + (index * 0.2)} width="100%">
                            <div className="group relative bg-background border border-white/10 p-10 h-full hover:border-primary/50 transition-colors overflow-hidden">
                                {/* Hover Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10">
                                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-background transition-colors duration-300">
                                        <Icon size={32} />
                                    </div>

                                    <h3 className="text-2xl font-heading font-bold text-white mb-4 group-hover:text-primary transition-colors">
                                        {service.title.en}
                                    </h3>

                                    <p className="text-white/60 mb-8 leading-relaxed h-20">
                                        {service.description}
                                    </p>

                                    <Link href="/services" className="inline-flex items-center gap-2 text-primary font-bold tracking-wider uppercase text-sm hover:gap-4 transition-all">
                                        Learn More <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>
                        </Reveal>
                    )
                })}
            </div>
        </Section>
    );
}
