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
        <Section className="border-t border-white/10 bg-surface/40">
            <div className="mb-16 max-w-2xl">
                <Reveal>
                    <Eyebrow>What We Build</Eyebrow>
                </Reveal>
                <Reveal delay={0.1}>
                    <h2 className="mt-6 font-heading text-4xl font-bold uppercase leading-tight tracking-tight text-foreground md:text-5xl">
                        Capabilities across every kind of heavy civil work
                    </h2>
                </Reveal>
            </div>

            <div className="grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
                {sectors.map((sector, i) => {
                    const Icon = ICONS[sector.id] ?? Layers;
                    return (
                        <Reveal key={sector.id} delay={(i % 3) * 0.08} width="100%">
                            <div className="group relative h-full bg-surface p-8 transition-colors duration-300 hover:bg-surface-2 md:p-10">
                                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-lg border border-white/10 bg-background text-accent transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground">
                                    <Icon size={26} />
                                </div>
                                <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-foreground">
                                    {sector.title}
                                </h3>
                                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                                    {sector.description}
                                </p>
                                <span className="mt-6 block h-px w-0 bg-accent transition-all duration-500 group-hover:w-12" />
                            </div>
                        </Reveal>
                    );
                })}
            </div>
        </Section>
    );
}
