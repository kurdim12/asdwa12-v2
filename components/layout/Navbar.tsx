"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { COMPANY_DATA } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 16);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

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
                    "transition-all duration-300",
                    scrolled || open
                        ? "border-b border-line bg-white/90 shadow-soft backdrop-blur-md"
                        : "border-b border-transparent bg-transparent"
                )}
            >
                <nav className="container flex h-16 items-center justify-between md:h-20">
                    <Link href="/" className="flex items-center" aria-label="Home">
                        <Image
                            src="/images/logo.png"
                            alt="Marwan Ahmad Alkurdi & Partners"
                            width={190}
                            height={52}
                            priority
                            className="h-9 w-auto object-contain md:h-11"
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
                                            ? "text-brand"
                                            : "text-foreground/70 hover:text-foreground"
                                    )}
                                >
                                    {item.label}
                                    {isActive(item.href) && (
                                        <motion.span
                                            layoutId="nav-active"
                                            className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-brand"
                                        />
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-2">
                        <Link
                            href="/contact"
                            className="hidden rounded-lg bg-brand px-5 py-2.5 text-sm font-medium text-white shadow-soft transition-colors hover:bg-brand-700 md:inline-flex"
                        >
                            Get in Touch
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
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 top-16 z-40 bg-white lg:hidden"
                    >
                        <ul className="container flex flex-col py-6">
                            {COMPANY_DATA.nav.map((item, i) => (
                                <motion.li
                                    key={item.href}
                                    initial={{ opacity: 0, x: -16 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.04 * i }}
                                >
                                    <Link
                                        href={item.href}
                                        onClick={() => setOpen(false)}
                                        className={cn(
                                            "block border-b border-line py-4 font-display text-xl font-medium transition-colors",
                                            isActive(item.href)
                                                ? "text-brand"
                                                : "text-foreground hover:text-brand"
                                        )}
                                    >
                                        {item.label}
                                    </Link>
                                </motion.li>
                            ))}
                            <Link
                                href="/contact"
                                onClick={() => setOpen(false)}
                                className="mt-6 inline-flex h-12 items-center justify-center rounded-lg bg-brand px-7 font-medium text-white"
                            >
                                Get in Touch
                            </Link>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
