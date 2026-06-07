"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { COMPANY_DATA } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Lock body scroll while the mobile menu is open.
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    const isActive = (href: string) =>
        href === "/" ? pathname === "/" : pathname.startsWith(href);

    return (
        <header className="fixed inset-x-0 top-0 z-50">
            <div
                className={cn(
                    "transition-all duration-500",
                    scrolled
                        ? "border-b border-white/10 bg-background/80 backdrop-blur-xl"
                        : "border-b border-transparent bg-gradient-to-b from-black/50 to-transparent"
                )}
            >
                <nav className="container flex h-16 items-center justify-between md:h-20">
                    <Link href="/" className="group flex items-center" aria-label="Home">
                        <Image
                            src="/images/logo.png"
                            alt="Marwan Ahmad Alkurdi & Partners"
                            width={170}
                            height={48}
                            priority
                            className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105 md:h-11"
                        />
                    </Link>

                    {/* Desktop nav */}
                    <ul className="hidden items-center gap-1 lg:flex">
                        {COMPANY_DATA.nav.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "relative px-4 py-2 text-sm font-medium transition-colors",
                                        isActive(item.href)
                                            ? "text-accent"
                                            : "text-foreground/70 hover:text-foreground"
                                    )}
                                >
                                    {item.label}
                                    {isActive(item.href) && (
                                        <motion.span
                                            layoutId="nav-active"
                                            className="absolute inset-x-3 -bottom-px h-px bg-accent"
                                        />
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-2">
                        <Link
                            href="/contact"
                            className="group hidden items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent md:inline-flex"
                        >
                            Get in Touch
                            <ArrowUpRight
                                size={16}
                                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                        </Link>
                        <button
                            onClick={() => setOpen((v) => !v)}
                            className="p-2 text-foreground lg:hidden"
                            aria-label={open ? "Close menu" : "Open menu"}
                            aria-expanded={open}
                        >
                            {open ? <X /> : <Menu />}
                        </button>
                    </div>
                </nav>
            </div>

            {/* Mobile overlay */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 top-16 z-40 bg-background/98 backdrop-blur-xl lg:hidden"
                    >
                        <ul className="container flex flex-col gap-1 py-8">
                            {COMPANY_DATA.nav.map((item, i) => (
                                <motion.li
                                    key={item.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.05 * i }}
                                >
                                    <Link
                                        href={item.href}
                                        onClick={() => setOpen(false)}
                                        className={cn(
                                            "block border-b border-white/5 py-4 font-heading text-2xl font-medium uppercase tracking-wide transition-colors",
                                            isActive(item.href)
                                                ? "text-accent"
                                                : "text-foreground hover:text-accent"
                                        )}
                                    >
                                        {item.label}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
