import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const SITE_DESCRIPTION =
  "Marwan Ahmad Alkurdi & Partners — 25 years engineering Jordan's dams, power stations and national infrastructure. Specialized injection, heavy civil works and equipment.";

export const metadata: Metadata = {
  metadataBase: new URL("https://mkurdi.com"),
  title: {
    default: "Marwan Ahmad Alkurdi & Partners | Engineering Jordan's Future",
    template: "%s | M. Kurdi & Partners",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Marwan Alkurdi",
    "construction Jordan",
    "dam construction",
    "infrastructure Jordan",
    "civil engineering Amman",
    "Dissi Pipeline",
  ],
  icons: { icon: "/favicon.ico" },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Marwan Ahmad Alkurdi & Partners",
    title: "Marwan Ahmad Alkurdi & Partners | Engineering Jordan's Future",
    description: SITE_DESCRIPTION,
    images: [{ url: "/images/hero/1.jpg", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <body className="bg-background font-sans text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
