import { Section, Eyebrow, ButtonLink } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { COMPANY_DATA } from "@/lib/data";
import { Hammer, Cog, Check, type LucideIcon } from "lucide-react";

const ICONS: LucideIcon[] = [Hammer, Cog];

export function ServicesPreview() {
    const { mainServices } = COMPANY_DATA.services;

    return (
        <Section>
            <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                <div className="max-w-2xl">
                    <Reveal>
                        <Eyebrow>Our expertise</Eyebrow>
                    </Reveal>
                    <Reveal delay={0.08}>
                        <h2 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl">
                            Specialized engineering services
                        </h2>
                    </Reveal>
                </div>
                <Reveal delay={0.12}>
                    <ButtonLink href="/services" variant="outline">
                        All services
                    </ButtonLink>
                </Reveal>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {mainServices.map((service, i) => {
                    const Icon = ICONS[i] ?? Hammer;
                    return (
                        <Reveal key={service.id} delay={i * 0.1} width="100%">
                            <div className="group h-full rounded-2xl border border-line bg-white p-8 transition-all duration-300 hover:shadow-card md:p-10">
                                <div className="mb-7 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-brand/8 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                                    <Icon size={28} />
                                </div>
                                <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground">
                                    {service.title.en}
                                </h3>
                                <p className="mt-3 leading-relaxed text-muted-foreground">
                                    {service.description}
                                </p>
                                <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                                    {service.features.map((feature) => (
                                        <li
                                            key={feature}
                                            className="flex items-center gap-2.5 text-sm text-foreground/80"
                                        >
                                            <Check size={16} className="shrink-0 text-brand" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Reveal>
                    );
                })}
            </div>
        </Section>
    );
}
