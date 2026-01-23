"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { COMPANY_DATA } from "@/lib/data";
import { Hammer, Cog } from "lucide-react";

export default function ServicesPage() {
    const { mainServices } = COMPANY_DATA.services;
    const icons = [Hammer, Cog];

    return (
        <main className="bg-background min-h-screen">
            <Navbar />

            <div className="pt-32 pb-16 container mx-auto px-4 md:px-8">
                <Reveal>
                    <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">Our Services</h1>
                </Reveal>
                <Reveal delay={0.2}>
                    <p className="text-white/60 text-lg max-w-2xl mb-16">
                        Delivering specialized engineering and construction solutions across the Kingdom.
                    </p>
                </Reveal>

                <div className="grid grid-cols-1 gap-16">
                    {mainServices.map((service, index) => {
                        const Icon = icons[index] || Hammer;
                        return (
                            <Reveal key={service.id} delay={index * 0.2} width="100%">
                                <div className="bg-neutral-900 border border-white/10 p-8 md:p-12 rounded-lg flex flex-col md:flex-row gap-8 items-start hover:border-primary/50 transition-colors group">
                                    <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-background transition-colors duration-300">
                                        <Icon size={40} />
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-heading font-bold text-white mb-4">{service.title.en}</h3>
                                        <p className="text-white/70 text-lg leading-relaxed mb-6 max-w-3xl">
                                            {service.description}
                                        </p>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-white/50 text-sm">
                                            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full" /> Specialized Equipment</li>
                                            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full" /> Certified Operators</li>
                                            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full" /> 24/7 Support</li>
                                            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full" /> ISO Standards</li>
                                        </ul>
                                    </div>
                                </div>
                            </Reveal>
                        )
                    })}
                </div>
            </div>

            <Footer />
        </main>
    );
}
