import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#0a0a0a", // Deep Charcoal
                foreground: "#ededed",
                primary: {
                    DEFAULT: "#D4AF37", // Metallic Gold
                    foreground: "#0a0a0a",
                },
                secondary: {
                    DEFAULT: "#333333", // Dark Steel
                    foreground: "#ededed",
                },
                industrial: {
                    DEFAULT: "#FFD700", // Safety Yellow
                    blue: "#4A90E2", // Blueprint Blue
                },
                muted: {
                    DEFAULT: "#1f1f1f",
                    foreground: "#a3a3a3",
                }
            },
            fontFamily: {
                heading: ["var(--font-oswald)", "sans-serif"],
                body: ["var(--font-inter)", "sans-serif"],
                arabic: ["var(--font-noto-kufi)", "sans-serif"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "industrial-mesh": "url('/patterns/mesh.png')",
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [],
};
export default config;
