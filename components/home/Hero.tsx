"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { ButtonLink, Eyebrow } from "@/components/ui/primitives";

const SLIDES = ["/images/hero/1.jpg", "/images/hero/2.jpg", "/images/hero/3.jpg"];

export function Hero() {
    const ref = useRef<HTMLDivElement>(null);
    const [index, setIndex] = useState(0);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

    useEffect(() => {
        const id = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 6000);
        return () => clearInterval(id);
    }, []);

    return (
        <section
            ref={ref}
            className="relative flex h-[100svh] min-h-[640px] w-full items-center overflow-hidden"
        >
            {/* Slideshow with parallax */}
            <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
                <AnimatePresence>
                    <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.4, ease: "easeInOut" }}
                        className="absolute inset-0"
                    >
                        <div className="absolute inset-0 animate-ken-burns">
                            <Image
                                src={SLIDES[index]}
                                alt=""
                                fill
                                priority={index === 0}
                                sizes="100vw"
                                className="object-cover"
                            />
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Scrims */}
                <div className="absolute inset-0 bg-background/55" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/70" />
                <div className="absolute inset-0 grid-pattern opacity-40" />
            </motion.div>

            {/* Content */}
            <div className="container relative z-10">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <Eyebrow>Est. 1999 — Amman, Jordan</Eyebrow>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-6 font-heading text-5xl font-bold uppercase leading-[0.92] tracking-tightest text-foreground sm:text-6xl md:text-8xl"
                    >
                        Engineering the
                        <br />
                        foundations of
                        <br />
                        <span className="text-gold">a nation.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-8 max-w-xl text-lg leading-relaxed text-foreground/75 md:text-xl"
                    >
                        For over 25 years, Marwan Ahmad Alkurdi &amp; Partners has delivered
                        Jordan&apos;s dams, power stations and national infrastructure — built to
                        stand the test of time.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-10 flex flex-col gap-4 sm:flex-row"
                    >
                        <ButtonLink href="/projects" size="lg" variant="primary">
                            View Our Portfolio
                        </ButtonLink>
                        <ButtonLink href="/contact" size="lg" variant="outline">
                            Get in Touch
                        </ButtonLink>
                    </motion.div>
                </div>
            </div>

            {/* Slide indicators */}
            <div className="absolute bottom-10 right-6 z-10 hidden items-center gap-2 md:flex md:right-10">
                {SLIDES.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        className={`h-1 rounded-full transition-all duration-300 ${
                            i === index ? "w-8 bg-accent" : "w-4 bg-white/30 hover:bg-white/60"
                        }`}
                    />
                ))}
            </div>

            {/* Scroll cue */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-foreground/50 md:flex"
            >
                <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
                <ArrowDown size={16} className="animate-bounce" />
            </motion.div>
        </section>
    );
}
