"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section, Button } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { COMPANY_DATA } from "@/lib/data";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
    const { contact } = COMPANY_DATA;

    return (
        <main className="bg-background min-h-screen">
            <Navbar />

            <div className="pt-32 pb-16 container mx-auto px-4 md:px-8">
                <Reveal>
                    <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">Contact Us</h1>
                </Reveal>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
                    {/* Contact Info */}
                    <div className="space-y-12">
                        <Reveal delay={0.2}>
                            <p className="text-white/60 text-lg max-w-md mb-8">
                                Interested in partnering with us? Reach out to our team to discuss your infrastructure needs.
                            </p>
                        </Reveal>

                        <Reveal delay={0.3}>
                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-primary shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-heading font-bold mb-2">Headquarters</h3>
                                        <p className="text-white/60 leading-relaxed font-body">
                                            {contact.address.en}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-primary shrink-0">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-heading font-bold mb-2">Phone</h3>
                                        <p className="text-white/60 font-body hover:text-white transition-colors">
                                            <a href={`tel:${contact.phone}`}>{contact.phone}</a>
                                        </p>
                                        <p className="text-white/60 font-body">
                                            Fax: {contact.fax}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-primary shrink-0">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-heading font-bold mb-2">Email</h3>
                                        <p className="text-white/60 font-body hover:text-white transition-colors">
                                            <a href={`mailto:${contact.email}`}>{contact.email}</a>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-primary shrink-0">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-heading font-bold mb-2">Working Hours</h3>
                                        <p className="text-white/60 font-body">
                                            Sunday - Thursday: 8:00 AM - 5:00 PM <br />
                                            Friday - Saturday: Closed
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    {/* Form */}
                    <Reveal delay={0.4} width="100%">
                        <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-lg">
                            <h3 className="text-2xl font-heading font-bold text-white mb-6">Send Message</h3>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-widest text-white/40 font-heading">Name</label>
                                        <input type="text" className="w-full bg-background border border-white/10 rounded-none p-4 text-white focus:border-primary focus:outline-none transition-colors" placeholder="John Doe" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-widest text-white/40 font-heading">Email</label>
                                        <input type="email" className="w-full bg-background border border-white/10 rounded-none p-4 text-white focus:border-primary focus:outline-none transition-colors" placeholder="john@example.com" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-white/40 font-heading">Subject</label>
                                    <input type="text" className="w-full bg-background border border-white/10 rounded-none p-4 text-white focus:border-primary focus:outline-none transition-colors" placeholder="Project Inquiry" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-white/40 font-heading">Message</label>
                                    <textarea rows={4} className="w-full bg-background border border-white/10 rounded-none p-4 text-white focus:border-primary focus:outline-none transition-colors" placeholder="Tell us about your project..." />
                                </div>
                                <Button className="w-full">Send Message</Button>
                            </form>
                        </div>
                    </Reveal>
                </div>
            </div>

            <Footer />
        </main>
    );
}
