"use client";

import { useState } from "react";
import { Button } from "@/components/ui/primitives";
import { CheckCircle2, AlertCircle } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
    "w-full border border-white/10 bg-background px-4 py-3.5 text-foreground transition-colors placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none";
const labelClass =
    "mb-2 block font-heading text-xs uppercase tracking-widest text-muted-foreground";

export function ContactForm() {
    const [status, setStatus] = useState<Status>("idle");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("submitting");

        const formData = new FormData(e.currentTarget);
        const body = new URLSearchParams();
        formData.forEach((value, key) => body.append(key, value.toString()));

        try {
            // Netlify Forms AJAX submission (form is registered via the static markup below).
            await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: body.toString(),
            });
            setStatus("success");
        } catch {
            setStatus("error");
        }
    }

    if (status === "success") {
        return (
            <div className="flex flex-col items-center justify-center gap-4 border border-accent/30 bg-accent/5 p-12 text-center">
                <CheckCircle2 className="text-accent" size={48} />
                <h3 className="font-heading text-2xl font-bold uppercase tracking-tight text-foreground">
                    Message Sent
                </h3>
                <p className="max-w-sm text-muted-foreground">
                    Thank you for reaching out. Our team will get back to you shortly.
                </p>
            </div>
        );
    }

    return (
        <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="space-y-6"
        >
            {/* Netlify form plumbing */}
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
                <label>
                    Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
                </label>
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
                <div>
                    <label htmlFor="name" className={labelClass}>
                        Name
                    </label>
                    <input id="name" name="name" type="text" required className={inputClass} placeholder="John Doe" />
                </div>
                <div>
                    <label htmlFor="email" className={labelClass}>
                        Email
                    </label>
                    <input id="email" name="email" type="email" required className={inputClass} placeholder="john@example.com" />
                </div>
            </div>
            <div>
                <label htmlFor="subject" className={labelClass}>
                    Subject
                </label>
                <input id="subject" name="subject" type="text" required className={inputClass} placeholder="Project inquiry" />
            </div>
            <div>
                <label htmlFor="message" className={labelClass}>
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className={inputClass}
                    placeholder="Tell us about your project…"
                />
            </div>

            {status === "error" && (
                <p className="flex items-center gap-2 text-sm text-red-400">
                    <AlertCircle size={16} /> Something went wrong. Please try again or email us
                    directly.
                </p>
            )}

            <Button type="submit" size="lg" className="w-full" disabled={status === "submitting"}>
                {status === "submitting" ? "Sending…" : "Send Message"}
            </Button>
        </form>
    );
}
