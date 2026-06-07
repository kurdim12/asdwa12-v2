export function LegalBody({ children }: { children: React.ReactNode }) {
    return (
        <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-muted-foreground">
            {children}
        </div>
    );
}

export function LegalSection({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <section className="space-y-3">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">
                {title}
            </h2>
            <p>{children}</p>
        </section>
    );
}
