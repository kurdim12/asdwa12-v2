import { COMPANY_DATA } from "@/lib/data";

export function Clients() {
    const items = COMPANY_DATA.clients;

    return (
        <section className="border-y border-line bg-white py-12">
            <p className="container mb-8 text-center text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Trusted by Jordan&apos;s leading public &amp; private institutions
            </p>
            <div className="mask-x overflow-hidden">
                <div className="flex w-max animate-marquee items-center">
                    {[...items, ...items].map((name, i) => (
                        <div key={i} className="flex items-center whitespace-nowrap">
                            <span className="px-8 font-display text-lg font-medium tracking-tight text-foreground/45 transition-colors hover:text-foreground/80">
                                {name}
                            </span>
                            <span className="h-1.5 w-1.5 rounded-full bg-brand/40" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
