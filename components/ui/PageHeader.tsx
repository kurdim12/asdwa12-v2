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
        <section className="relative border-b border-line bg-white pb-12 pt-28 md:pt-36">
            <div className="absolute inset-0 grid-faint" />
            <Container className="relative">
                <Reveal>
                    <Eyebrow>{eyebrow}</Eyebrow>
                </Reveal>
                <Reveal delay={0.08}>
                    <h1 className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-[1.03] tracking-tighter text-foreground md:text-6xl">
                        {title}
                    </h1>
                </Reveal>
                {subtitle && (
                    <Reveal delay={0.14}>
                        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                            {subtitle}
                        </p>
                    </Reveal>
                )}

                {image && (
                    <Reveal delay={0.18} width="100%">
                        <div className="relative mt-10 h-56 overflow-hidden rounded-2xl shadow-card md:h-80">
                            <Image
                                src={image}
                                alt=""
                                fill
                                priority
                                sizes="100vw"
                                className="object-cover"
                            />
                        </div>
                    </Reveal>
                )}
            </Container>
        </section>
    );
}
