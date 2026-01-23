"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { COMPANY_DATA } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = COMPANY_DATA.navigation.mainMenu;

    return (
        <>
            <motion.nav
                className={cn(
                    "fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl rounded-full transition-all duration-300 border border-transparent",
                    isScrolled
                        ? "bg-background/80 backdrop-blur-md border-white/10 shadow-lg py-2" // Island style active
                        : "bg-transparent py-6"
                )}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1, x: "-50%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="container mx-auto px-6 h-full flex items-center justify-between">
                    {/* Logo */}
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        {/* 
                          Using a standard img tag here for direct control, 
                          or Next.js Image if we had width/height known ahead of time.
                          Given it's a user upload, a simple img with object-contain is safer for now.
                        */}
                        <img
                            src={`/${COMPANY_DATA.company.logo.high}`}
                            alt={COMPANY_DATA.company.name.en}
                            className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navItems.map((item) => (
                            <div key={item.id} className="relative group">
                                <Link
                                    href={item.url}
                                    className="text-sm font-medium hover:text-primary transition-colors py-2 flex items-center gap-1"
                                >
                                    {item.label.en}
                                    {item.submenu && <ChevronDown className="w-4 h-4" />}
                                </Link>

                                {/* Dropdown for Projects */}
                                {item.submenu && (
                                    <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-white/10 rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                                        {item.submenu.map((sub, idx) => (
                                            <Link key={idx} href={sub.url || '/projects'} className="block px-4 py-3 text-sm hover:bg-white/5 hover:text-primary transition-colors first:rounded-t-md last:rounded-b-md">
                                                {sub.label.en}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Action / Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2 text-white hover:text-primary transition-colors"
                        >
                            {isMobileMenuOpen ? <X /> : <Menu />}
                        </button>
                        <Link href="/contact" className="hidden md:block">
                            <button className="bg-white/10 hover:bg-primary hover:text-background text-white px-5 py-2 rounded-full font-medium text-sm transition-all duration-300">
                                Get in Touch
                            </button>
                        </Link>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl lg:hidden pt-24 px-6"
                    >
                        <div className="flex flex-col gap-6">
                            {navItems.map((item) => (
                                <Link
                                    key={item.id}
                                    href={item.url}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-2xl font-heading font-bold hover:text-primary transition-colors"
                                >
                                    {item.label.en}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
