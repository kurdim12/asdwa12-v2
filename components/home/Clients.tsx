import { COMPANY_DATA } from "@/lib/data";

export function Clients() {
    const items = COMPANY_DATA.clients;

    return (
        <section className="border-y border-white/10 bg-surface/60 py-10">
            <div className="container">
                <p className="mb-8 text-center font-heading text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    Trusted by Jordan&apos;s leading public &amp; private institutions
                </p>
            </div>
            <div className="mask-x overflow-hidden">
                <div className="flex w-max animate-marquee items-center">
                    {[...items, ...items].map((name, i) => (
                        <div key={i} className="flex items-center whitespace-nowrap">
                            <span className="px-8 font-heading text-lg font-medium uppercase tracking-wide text-foreground/45 transition-colors hover:text-foreground/80 md:text-xl">
                                {name}
                            </span>
                            <span className="h-1.5 w-1.5 rounded-full bg-accent/50" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
