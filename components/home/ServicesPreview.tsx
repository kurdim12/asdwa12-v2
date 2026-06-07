import { Section, Eyebrow, ButtonLink } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { COMPANY_DATA } from "@/lib/data";
import { Hammer, Cog, Check, type LucideIcon } from "lucide-react";

const ICONS: LucideIcon[] = [Hammer, Cog];

export function ServicesPreview() {
    const { mainServices } = COMPANY_DATA.services;

    return (
        <Section>
            <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
                <div className="max-w-2xl">
                    <Reveal>
                        <Eyebrow>Our Expertise</Eyebrow>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="mt-6 font-heading text-4xl font-bold uppercase leading-tight tracking-tight text-foreground md:text-5xl">
                            Specialized engineering services
                        </h2>
                    </Reveal>
                </div>
                <Reveal delay={0.15}>
                    <ButtonLink href="/services" variant="outline">
                        All Services
                    </ButtonLink>
                </Reveal>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
                {mainServices.map((service, i) => {
                    const Icon = ICONS[i] ?? Hammer;
                    return (
                        <Reveal key={service.id} delay={i * 0.12} width="100%">
                            <div className="group relative h-full overflow-hidden border border-white/10 bg-surface p-8 transition-colors hover:border-accent/40 md:p-12">
                                <div className="absolute inset-0 -translate-y-full bg-gradient-to-b from-accent/10 to-transparent opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100" />
                                <div className="relative">
                                    <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-xl border border-white/10 bg-background text-accent transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground">
                                        <Icon size={30} />
                                    </div>
                                    <h3 className="font-heading text-2xl font-bold uppercase tracking-wide text-foreground">
                                        {service.title.en}
                                    </h3>
                                    <p className="mt-4 leading-relaxed text-muted-foreground">
                                        {service.description}
                                    </p>
                                    <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                                        {service.features.map((feature) => (
                                            <li
                                                key={feature}
                                                className="flex items-center gap-2.5 text-sm text-foreground/80"
                                            >
                                                <Check size={16} className="shrink-0 text-accent" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </Reveal>
                    );
                })}
            </div>
        </Section>
    );
}
