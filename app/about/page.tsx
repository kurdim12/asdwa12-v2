"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { COMPANY_DATA } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Target, Award } from "lucide-react";

export default function AboutPage() {
    const [activeTab, setActiveTab] = useState("overview");

    const tabs = [
        { id: "overview", label: "Overview" },
        { id: "history", label: "History" },
        { id: "leadership", label: "Leadership" }
    ];

    return (
        <main className="bg-background min-h-screen">
            <Navbar />

            <div className="pt-32 pb-16 container mx-auto px-4 md:px-8">
                <Reveal>
                    <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">About Us</h1>
                </Reveal>

                {/* Tabs */}
                <div className="flex gap-8 border-b border-white/10 mb-12">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`pb-4 text-sm font-heading font-bold uppercase tracking-widest transition-colors relative ${activeTab === tab.id ? "text-primary" : "text-white/40 hover:text-white"
                                }`}
                        >
                            {tab.label}
                            {activeTab === tab.id && (
                                <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                            )}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    <div className="lg:col-span-2">
                        <AnimatePresence mode="wait">
                            {activeTab === "overview" && (
                                <motion.div
                                    key="overview"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="space-y-8"
                                >
                                    <h2 className="text-3xl font-heading font-bold text-white">Building the future since 1999</h2>
                                    <p className="text-white/70 text-lg leading-relaxed">
                                        {COMPANY_DATA.company.name.en} is a premier engineering and contracting firm in Jordan, specializing in complex infrastructure projects.
                                        With a focus on dams, power stations, and specialized injection works, we have established ourselves as a trusted partner for national-scale developments.
                                    </p>
                                    <p className="text-white/70 text-lg leading-relaxed">
                                        Our commitment to quality, safety, and innovation has earned us the trust of both public and private sectors, resulting in a portfolio that shapes the landscape of the Kingdom.
                                    </p>

                                    <div className="mt-8">
                                        <a
                                            href="/documents/company_profile.pdf"
                                            target="_blank"
                                            className="inline-flex items-center gap-2 bg-primary text-background px-6 py-3 rounded font-bold uppercase tracking-widest hover:bg-white transition-colors"
                                        >
                                            <Award size={20} />
                                            Download Company Profile (PDF)
                                        </a>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                                        <div className="p-6 bg-white/5 border border-white/10 rounded-lg">
                                            <Shield className="text-primary mb-4" size={32} />
                                            <h3 className="text-white font-bold mb-2">Safety First</h3>
                                            <p className="text-white/50 text-sm">Strict adherence to international safety standards.</p>
                                        </div>
                                        <div className="p-6 bg-white/5 border border-white/10 rounded-lg">
                                            <Target className="text-primary mb-4" size={32} />
                                            <h3 className="text-white font-bold mb-2">Precision</h3>
                                            <p className="text-white/50 text-sm">Laser-focused execution on complex engineering tasks.</p>
                                        </div>
                                        <div className="p-6 bg-white/5 border border-white/10 rounded-lg">
                                            <Award className="text-primary mb-4" size={32} />
                                            <h3 className="text-white font-bold mb-2">Quality</h3>
                                            <p className="text-white/50 text-sm">ISO 9001 Certified processes and management.</p>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === "history" && (
                                <motion.div
                                    key="history"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                >
                                    <div className="border-l border-white/10 pl-8 space-y-12">
                                        <div className="relative">
                                            <span className="absolute -left-[39px] top-0 w-5 h-5 bg-primary rounded-full border-4 border-background" />
                                            <h3 className="text-white font-heading font-bold text-xl mb-2">2024</h3>
                                            <p className="text-white/60">Completion of major expansion works at Aqaba.</p>
                                        </div>
                                        <div className="relative">
                                            <span className="absolute -left-[39px] top-0 w-5 h-5 bg-white/20 rounded-full border-4 border-background" />
                                            <h3 className="text-white font-heading font-bold text-xl mb-2">2010</h3>
                                            <p className="text-white/60">Awarded the Dissi Pipeline infrastructure contract.</p>
                                        </div>
                                        <div className="relative">
                                            <span className="absolute -left-[39px] top-0 w-5 h-5 bg-white/20 rounded-full border-4 border-background" />
                                            <h3 className="text-white font-heading font-bold text-xl mb-2">1999</h3>
                                            <p className="text-white/60">Company established by Mr. Marwan Ahmad Alkurdi.</p>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === "leadership" && (
                                <motion.div
                                    key="leadership"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                >
                                    <h2 className="text-3xl font-heading font-bold text-white mb-6">Chairman's Message</h2>
                                    <blockquote className="border-l-4 border-primary pl-6 py-2 italic text-white/80 text-xl leading-relaxed mb-8">
                                        "Our mission has always been to build more than just structures; we build trust, we build capacity, and we build the future of our nation."
                                    </blockquote>
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 bg-white/10 rounded-full" />
                                        <div>
                                            <div className="text-white font-bold font-heading">Marwan Alkurdi</div>
                                            <div className="text-primary text-sm uppercase tracking-widest">Chairman & Founder</div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Sidebar Image */}
                    <div className="hidden lg:block h-full min-h-[500px] bg-neutral-800 rounded-lg relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('/patterns/mesh.png')] opacity-20" />
                        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
