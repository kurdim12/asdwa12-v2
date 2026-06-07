import Image from "next/image";
import { Section, Eyebrow, ButtonLink } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { COMPANY_DATA } from "@/lib/data";

export function Legacy() {
    const { stats } = COMPANY_DATA;

    return (
        <Section className="overflow-hidden">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
                {/* Image */}
                <Reveal width="100%" className="order-2 lg:order-1">
                    <div className="group relative aspect-[4/5] overflow-hidden md:aspect-square">
                        <Image
                            src="/images/anniversary.jpg"
                            alt="25 years of engineering excellence"
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                        <div className="absolute bottom-0 left-0 p-8">
                            <div className="font-heading text-7xl font-bold leading-none text-gold">
                                25
                            </div>
                            <div className="mt-1 font-heading text-sm uppercase tracking-[0.25em] text-foreground/80">
                                Years of Excellence
                            </div>
                        </div>
                        {/* Corner frame accent */}
                        <div className="pointer-events-none absolute right-6 top-6 h-12 w-12 border-r-2 border-t-2 border-accent/60" />
                    </div>
                </Reveal>

                {/* Copy */}
                <div className="order-1 lg:order-2">
                    <Reveal>
                        <Eyebrow>Our Legacy</Eyebrow>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="mt-6 font-heading text-4xl font-bold uppercase leading-tight tracking-tight text-foreground md:text-5xl">
                            A quarter century building Jordan&apos;s future
                        </h2>
                    </Reveal>
                    <Reveal delay={0.18}>
                        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                            From the Yarmouk&apos;s dams to the 325-kilometre Dissi water
                            conveyor, {COMPANY_DATA.company.name.en} has been a cornerstone of the
                            Kingdom&apos;s infrastructure. We pair deep geotechnical expertise with
                            disciplined project delivery — engineering solutions that endure.
                        </p>
                    </Reveal>

                    {/* Stats */}
                    <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10">
                        {stats.map((stat, i) => (
                            <Reveal key={stat.label} delay={0.1 + i * 0.08} width="100%">
                                <div className="bg-surface p-6 transition-colors hover:bg-surface-2">
                                    <div className="font-heading text-4xl font-bold text-foreground">
                                        {stat.value}
                                        <span className="text-accent">{stat.suffix}</span>
                                    </div>
                                    <div className="mt-1 text-sm text-muted-foreground">
                                        {stat.label}
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    <Reveal delay={0.2}>
                        <div className="mt-10">
                            <ButtonLink href="/about" variant="outline">
                                More About Us
                            </ButtonLink>
                        </div>
                    </Reveal>
                </div>
            </div>
        </Section>
    );
}
