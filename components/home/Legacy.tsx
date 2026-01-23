"use client";

import { Section } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { COMPANY_DATA } from "@/lib/data";
import { Trophy, Users, Building, ShieldCheck } from "lucide-react";

export function Legacy() {
    const stats = [
        { label: "Years Experience", value: "25+", icon: Trophy },
        { label: "Major Projects", value: "50+", icon: Building },
        { label: "Expert Engineers", value: "120+", icon: Users },
        { label: "ISO Certified", value: "9001", icon: ShieldCheck },
    ];

    return (
        <Section className="bg-background relative">
            <div className="flex flex-col md:flex-row gap-16 items-center">
                {/* Text Content */}
                <div className="flex-1">
                    <Reveal>
                        <h4 className="text-primary font-heading uppercase tracking-widest text-sm mb-4">Our Legacy</h4>
                    </Reveal>
                    <Reveal delay={0.3}>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
                            Engineering the <br /> Future of Jordan.
                        </h2>
                    </Reveal>
                    <Reveal delay={0.4}>
                        <p className="text-white/60 text-lg leading-relaxed mb-8">
                            {COMPANY_DATA.company.name.en} has been a cornerstone of Jordan's infrastructure development for over two decades.
                            From the massive **Dissi Pipeline** to critical **Dam Construction**, we deliver engineering solutions that stand the test of time.
                            Authorized by the highest standards and Royal Patronage.
                        </p>
                    </Reveal>

                    {/* Statistics Grid */}
                    <div className="grid grid-cols-2 gap-8 mt-12">
                        {stats.map((stat, i) => (
                            <Reveal key={i} delay={0.5 + (i * 0.1)}>
                                <div className="flex items-start gap-4 p-4 border border-white/5 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group">
                                    <stat.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                                    <div>
                                        <div className="text-3xl font-heading font-bold text-white">{stat.value}</div>
                                        <div className="text-sm text-white/50">{stat.label}</div>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>

                {/* Visual / Image */}
                <div className="flex-1 w-full h-[500px] relative">
                    <Reveal width="100%" delay={0.6}>
                        <div className="w-full h-[500px] bg-neutral-800 rounded-lg overflow-hidden relative group">
                            {/* Placeholder for now, in real app would be an image tag */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay z-10" />
                            <img
                                src="/images/Logo High.jpg" // Using logo for now as placeholder or 25 years image if I copied it
                                alt="25 Years Experience"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute bottom-6 left-6 z-20">
                                <div className="text-6xl font-heading font-bold text-white">25</div>
                                <div className="text-xl text-primary font-heading uppercase tracking-widest">Years of Excellence</div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </Section>
    );
}
