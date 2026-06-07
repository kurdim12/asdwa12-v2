"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ButtonLink, Eyebrow } from "@/components/ui/primitives";
import { COMPANY_DATA } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
    const stats = COMPANY_DATA.stats.slice(0, 3);

    return (
        <section className="relative overflow-hidden bg-background">
            <div className="absolute inset-0 grid-faint" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-line to-transparent" />

            <div className="container relative grid items-center gap-12 pb-16 pt-28 md:pb-24 md:pt-40 lg:grid-cols-2 lg:gap-16">
                {/* Copy */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease }}
                    >
                        <Eyebrow>Est. 1999 — Amman, Jordan</Eyebrow>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.08, ease }}
                        className="mt-6 font-display text-5xl font-semibold leading-[1.02] tracking-tighter text-foreground md:text-6xl lg:text-7xl"
                    >
                        Engineering the foundations of a nation.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.16, ease }}
                        className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
                    >
                        For over 25 years, Marwan Ahmad Alkurdi &amp; Partners has delivered
                        Jordan&apos;s dams, power stations and national infrastructure — built to
                        stand the test of time.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.24, ease }}
                        className="mt-9 flex flex-col gap-3 sm:flex-row"
                    >
                        <ButtonLink href="/projects" size="lg" variant="primary">
                            View our portfolio
                        </ButtonLink>
                        <ButtonLink href="/contact" size="lg" variant="outline">
                            Get in touch
                        </ButtonLink>
                    </motion.div>

                    {/* Inline credibility stats */}
                    <motion.dl
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.32, ease }}
                        className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-line pt-8"
                    >
                        {stats.map((s) => (
                            <div key={s.label}>
                                <dt className="font-display text-3xl font-semibold tracking-tight text-foreground">
                                    {s.value}
                                    <span className="text-brand">{s.suffix}</span>
                                </dt>
                                <dd className="mt-1 text-xs leading-snug text-muted-foreground">
                                    {s.label}
                                </dd>
                            </div>
                        ))}
                    </motion.dl>
                </div>

                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.1, ease }}
                    className="relative"
                >
                    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-lift">
                        <Image
                            src="/images/hero/1.jpg"
                            alt="Major infrastructure project in Jordan"
                            fill
                            priority
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover"
                        />
                    </div>

                    {/* Floating caption card */}
                    <div className="absolute -bottom-5 -left-5 hidden max-w-[15rem] rounded-xl border border-line bg-white p-5 shadow-card sm:block">
                        <div className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
                            Featured
                        </div>
                        <div className="mt-1 font-display text-lg font-semibold tracking-tight text-foreground">
                            Dissi Water Conveyor
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">
                            325 km of national water infrastructure.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
