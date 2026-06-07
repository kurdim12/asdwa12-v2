import { ButtonHTMLAttributes, forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ Layout */

export function Container({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return <div className={cn("container", className)}>{children}</div>;
}

export function Section({
    children,
    className,
    id,
}: {
    children: React.ReactNode;
    className?: string;
    id?: string;
}) {
    return (
        <section id={id} className={cn("relative py-24 md:py-32", className)}>
            <Container>{children}</Container>
        </section>
    );
}

/** Small gold label that sits above section headings. */
export function Eyebrow({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <span
            className={cn(
                "inline-flex items-center gap-2.5 font-heading text-xs uppercase tracking-[0.25em] text-accent",
                className
            )}
        >
            <span className="h-px w-8 bg-accent/60" />
            {children}
        </span>
    );
}

/* ------------------------------------------------------------------ Button */

const base =
    "relative inline-flex items-center justify-center gap-2 font-heading font-medium uppercase tracking-wider whitespace-nowrap transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none";

const variants = {
    primary:
        "bg-accent text-accent-foreground hover:bg-accent-bright shadow-[0_10px_30px_-12px_rgba(201,162,75,0.6)]",
    outline:
        "border border-white/20 text-foreground hover:border-accent hover:text-accent",
    ghost: "text-foreground/70 hover:text-foreground hover:bg-white/5",
} as const;

const sizes = {
    sm: "h-9 px-4 text-xs",
    md: "h-11 px-6 text-sm",
    lg: "h-14 px-8 text-sm",
} as const;

export function buttonClasses({
    variant = "primary",
    size = "md",
    className,
}: {
    variant?: keyof typeof variants;
    size?: keyof typeof sizes;
    className?: string;
} = {}) {
    return cn(base, variants[variant], sizes[size], className);
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: keyof typeof variants;
    size?: keyof typeof sizes;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, ...props }, ref) => (
        <button ref={ref} className={buttonClasses({ variant, size, className })} {...props} />
    )
);
Button.displayName = "Button";

/** Same styling as Button, but renders a Next.js Link. */
export function ButtonLink({
    href,
    variant,
    size,
    className,
    children,
    ...props
}: {
    href: string;
    variant?: keyof typeof variants;
    size?: keyof typeof sizes;
    className?: string;
    children: React.ReactNode;
} & Omit<React.ComponentProps<typeof Link>, "href" | "className">) {
    return (
        <Link href={href} className={buttonClasses({ variant, size, className })} {...props}>
            {children}
        </Link>
    );
}
