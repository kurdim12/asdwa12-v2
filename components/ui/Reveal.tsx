"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface RevealProps {
    children: React.ReactNode;
    className?: string;
    /** Stagger offset in seconds. */
    delay?: number;
    /** Vertical travel distance in px. */
    y?: number;
    width?: "fit-content" | "100%";
}

/**
 * Scroll-triggered fade + rise. Replaces the previous implementation, whose
 * "sweep" bar painted with an undefined `var(--primary)` and never showed.
 */
export function Reveal({ children, className, delay = 0, y = 28, width = "fit-content" }: RevealProps) {
    const variants: Variants = {
        hidden: { opacity: 0, y },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay },
        },
    };

    return (
        <motion.div
            className={cn(className)}
            style={{ width }}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
        >
            {children}
        </motion.div>
    );
}
