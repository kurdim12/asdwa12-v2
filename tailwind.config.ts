import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "1.25rem",
                md: "2rem",
                lg: "2.5rem",
            },
            screens: {
                "2xl": "1280px",
            },
        },
        extend: {
            colors: {
                // Base surfaces (deep, layered charcoal)
                background: "#0A0A0B",
                surface: "#101012",
                "surface-2": "#16161A",
                line: "rgba(255,255,255,0.08)",

                foreground: "#EDEDED",
                muted: {
                    DEFAULT: "#1C1C20",
                    foreground: "#9A9AA3",
                },

                // Brushed-brass gold — the brand accent
                accent: {
                    DEFAULT: "#C9A24B",
                    bright: "#E4C77B",
                    foreground: "#0A0A0B",
                },

                // Cool "blueprint" tone for technical accents
                blueprint: "#5E7C9B",
            },
            fontFamily: {
                heading: ["var(--font-oswald)", "ui-sans-serif", "sans-serif"],
                body: ["var(--font-inter)", "ui-sans-serif", "sans-serif"],
            },
            letterSpacing: {
                tightest: "-0.04em",
            },
            boxShadow: {
                glow: "0 0 60px -15px rgba(201,162,75,0.35)",
                "card": "0 20px 50px -20px rgba(0,0,0,0.7)",
            },
            keyframes: {
                "fade-up": {
                    from: { opacity: "0", transform: "translateY(20px)" },
                    to: { opacity: "1", transform: "translateY(0)" },
                },
                marquee: {
                    from: { transform: "translateX(0)" },
                    to: { transform: "translateX(-50%)" },
                },
                "ken-burns": {
                    "0%": { transform: "scale(1) translate(0,0)" },
                    "100%": { transform: "scale(1.12) translate(-1.5%, -1.5%)" },
                },
                shimmer: {
                    "100%": { transform: "translateX(100%)" },
                },
            },
            animation: {
                "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
                marquee: "marquee 40s linear infinite",
                "ken-burns": "ken-burns 12s ease-out forwards",
            },
        },
    },
    plugins: [],
};
export default config;
