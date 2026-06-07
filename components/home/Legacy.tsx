import Image from "next/image";
import { Section, Eyebrow, ButtonLink } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { COMPANY_DATA } from "@/lib/data";

export function Legacy() {
    const { stats } = COMPANY_DATA;

    return (
        <Section>
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                {/* Image */}
                <Reveal width="100%" className="order-2 lg:order-1">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-card">
                        <Image
                            src="/images/anniversary.jpg"
                            alt="25 years of engineering excellence"
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover"
                        />
                    </div>
                </Reveal>

                {/* Copy */}
                <div className="order-1 lg:order-2">
                    <Reveal>
                        <Eyebrow>Our legacy</Eyebrow>
                    </Reveal>
                    <Reveal delay={0.08}>
                        <h2 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl">
                            A quarter century building Jordan&apos;s future
                        </h2>
                    </Reveal>
                    <Reveal delay={0.14}>
                        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                            From the Yarmouk&apos;s dams to the 325-kilometre Dissi water conveyor,
                            Marwan Ahmad Alkurdi &amp; Partners has been a cornerstone of the
                            Kingdom&apos;s infrastructure. We pair deep geotechnical expertise with
                            disciplined delivery — engineering solutions that endure.
                        </p>
                    </Reveal>

                    {/* Stats */}
                    <div className="mt-10 grid grid-cols-2 overflow-hidden rounded-xl border border-line">
                        {stats.map((stat, i) => (
                            <Reveal key={stat.label} delay={0.06 * i} width="100%">
                                <div
                                    className={`p-6 ${i % 2 === 0 ? "border-r border-line" : ""} ${
                                        i < 2 ? "border-b border-line" : ""
                                    }`}
                                >
                                    <div className="font-display text-4xl font-semibold tracking-tight text-foreground">
                                        {stat.value}
                                        <span className="text-brand">{stat.suffix}</span>
                                    </div>
                                    <div className="mt-1 text-sm text-muted-foreground">
                                        {stat.label}
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    <Reveal delay={0.16}>
                        <div className="mt-10">
                            <ButtonLink href="/about" variant="outline">
                                More about us
                            </ButtonLink>
                        </div>
                    </Reveal>
                </div>
            </div>
        </Section>
    );
}
