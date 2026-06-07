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
                "2xl": "1240px",
            },
        },
        extend: {
            colors: {
                // Light, airy base
                background: "#FFFFFF",
                paper: "#F6F7F9", // alternating light sections
                foreground: "#0E1116", // ink
                line: "#E6E8EC", // hairline borders

                muted: {
                    DEFAULT: "#F6F7F9",
                    foreground: "#5B616E", // secondary text
                },

                // Brand steel-blue, sampled from the logo
                brand: {
                    DEFAULT: "#2B5A8C",
                    600: "#244E7A",
                    700: "#1E4068",
                    foreground: "#FFFFFF",
                },
                // Deep navy for the footer / grounding surfaces
                navy: {
                    DEFAULT: "#0F2742",
                    800: "#13294B",
                },
                // Alias so existing accent-* utilities map to the brand
                accent: {
                    DEFAULT: "#2B5A8C",
                    foreground: "#FFFFFF",
                },
            },
            fontFamily: {
                display: ["var(--font-display)", "ui-sans-serif", "sans-serif"],
                sans: ["var(--font-sans)", "ui-sans-serif", "sans-serif"],
            },
            letterSpacing: {
                tight: "-0.015em",
                tighter: "-0.025em",
            },
            borderRadius: {
                "4xl": "2rem",
            },
            boxShadow: {
                soft: "0 1px 2px rgba(16,17,22,0.04), 0 1px 3px rgba(16,17,22,0.06)",
                card: "0 12px 32px -16px rgba(16,17,22,0.18)",
                lift: "0 20px 50px -24px rgba(16,17,22,0.28)",
            },
            keyframes: {
                "fade-up": {
                    from: { opacity: "0", transform: "translateY(16px)" },
                    to: { opacity: "1", transform: "translateY(0)" },
                },
                marquee: {
                    from: { transform: "translateX(0)" },
                    to: { transform: "translateX(-50%)" },
                },
            },
            animation: {
                "fade-up": "fade-up 0.6s cubic-bezier(0.16,1,0.3,1) both",
                marquee: "marquee 45s linear infinite",
            },
        },
    },
    plugins: [],
};
export default config;
