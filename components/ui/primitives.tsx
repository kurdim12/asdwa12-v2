import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        const variants = {
            primary: "bg-primary text-primary-foreground hover:bg-white transition-colors duration-300",
            outline: "border border-white/20 hover:border-primary hover:text-primary transition-colors duration-300",
            ghost: "text-white/70 hover:text-white hover:bg-white/5",
        };

        const sizes = {
            sm: "h-9 px-4 text-sm",
            md: "h-11 px-6 text-base",
            lg: "h-14 px-8 text-lg uppercase tracking-wider",
        };

        return (
            <button
                ref={ref}
                className={cn(
                    "relative inline-flex items-center justify-center font-heading font-bold disabled:opacity-50 disabled:pointer-events-none",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export function Section({ children, className, id }: { children: React.ReactNode; className?: string; id?: string }) {
    return (
        <section id={id} className={cn("py-24 md:py-32 relative", className)}>
            <div className="container mx-auto px-4 md:px-8 relative z-10">{children}</div>
        </section>
    );
}
