import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { doctorUa } from "@/content/doctor-ua";

export function DoctorEconomics() {
  const { economics } = doctorUa;

  return (
    <section className="relative">
      <Container className="py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-6">
            <FadeIn className="flex items-center gap-4">
              <span className="h-px w-10 bg-accent" aria-hidden />
              <span className="eyebrow">{economics.eyebrow}</span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="mt-8 display-xl">
                <span className="block">{economics.titleLine1}</span>
                <span className="block text-accent">{economics.titleLine2}</span>
              </h2>
            </FadeIn>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <FadeIn delay={0.1}>
              <div className="flex items-baseline gap-3 border-t border-hairline pt-6">
                <span className="font-display text-6xl md:text-7xl leading-none text-accent">
                  {economics.stat}
                </span>
                <span className="text-sm text-muted leading-[1.5]">
                  {economics.statLabel}
                </span>
              </div>
            </FadeIn>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end border-t border-hairline pt-12">
          <FadeIn className="lg:col-span-7">
            <p className="text-base md:text-lg text-ink/75 leading-[1.75] max-w-[58ch]">
              {economics.body}
            </p>
          </FadeIn>
          <FadeIn delay={0.1} className="lg:col-span-4 lg:col-start-9">
            <a href="#pricing">
              <Button variant="primary" arrow>
                {economics.cta}
              </Button>
            </a>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
