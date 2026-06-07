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
        <section id={id} className={cn("relative py-20 md:py-28", className)}>
            <Container>{children}</Container>
        </section>
    );
}

/** Small brand-blue label that sits above section headings. */
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
                "inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-brand",
                className
            )}
        >
            <span className="h-px w-6 bg-brand/40" />
            {children}
        </span>
    );
}

/* ------------------------------------------------------------------ Button */

const base =
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium whitespace-nowrap transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none";

const variants = {
    primary: "bg-brand text-white shadow-soft hover:bg-brand-700",
    outline: "border border-line bg-white text-foreground hover:border-brand hover:text-brand",
    ghost: "text-muted-foreground hover:bg-paper hover:text-foreground",
} as const;

const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-5 text-sm",
    lg: "h-12 px-7 text-base",
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
