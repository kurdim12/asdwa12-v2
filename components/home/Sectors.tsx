import { Section, Eyebrow } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { COMPANY_DATA } from "@/lib/data";
import {
    Waves,
    Zap,
    Network,
    Construction,
    Layers,
    Mountain,
    type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
    dams: Waves,
    power: Zap,
    infrastructure: Network,
    roads: Construction,
    injection: Layers,
    tourism: Mountain,
};

export function Sectors() {
    const { sectors } = COMPANY_DATA;

    return (
        <Section className="bg-paper">
            <div className="mb-14 max-w-2xl">
                <Reveal>
                    <Eyebrow>What we build</Eyebrow>
                </Reveal>
                <Reveal delay={0.08}>
                    <h2 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl">
                        Capabilities across every kind of heavy civil work
                    </h2>
                </Reveal>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {sectors.map((sector, i) => {
                    const Icon = ICONS[sector.id] ?? Layers;
                    return (
                        <Reveal key={sector.id} delay={(i % 3) * 0.06} width="100%">
                            <div className="group h-full rounded-xl border border-line bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand/8 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                                    <Icon size={24} />
                                </div>
                                <h3 className="font-display text-lg font-semibold tracking-tight text-foreground">
                                    {sector.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                    {sector.description}
                                </p>
                            </div>
                        </Reveal>
                    );
                })}
            </div>
        </Section>
    );
}
