import Image from "next/image";
import { Container, Eyebrow } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";

export function PageHeader({
    eyebrow,
    title,
    subtitle,
    image,
}: {
    eyebrow: string;
    title: React.ReactNode;
    subtitle?: string;
    image?: string;
}) {
    return (
        <section className="relative overflow-hidden border-b border-white/10 pb-16 pt-36 md:pb-24 md:pt-44">
            {/* Background */}
            <div className="absolute inset-0 -z-10">
                {image && (
                    <Image
                        src={image}
                        alt=""
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover opacity-25"
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
                <div className="absolute inset-0 grid-pattern opacity-50" />
            </div>

            <Container>
                <Reveal>
                    <Eyebrow>{eyebrow}</Eyebrow>
                </Reveal>
                <Reveal delay={0.1}>
                    <h1 className="mt-6 max-w-4xl font-heading text-5xl font-bold uppercase leading-[0.95] tracking-tightest text-foreground md:text-7xl">
                        {title}
                    </h1>
                </Reveal>
                {subtitle && (
                    <Reveal delay={0.18}>
                        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                            {subtitle}
                        </p>
                    </Reveal>
                )}
            </Container>
        </section>
    );
}
