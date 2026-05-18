import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { departmentUa } from "@/content/department-ua";
import type { DepartmentContent } from "@/lib/content/department";

export function DepartmentHero({ content }: { content?: DepartmentContent }) {
  const { hero } = content ?? departmentUa;

  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-10">
          <div className="lg:col-span-7">
            <FadeIn className="flex items-center gap-4">
              <span className="h-px w-10 bg-accent" aria-hidden />
              <span className="eyebrow">{hero.eyebrow}</span>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="mt-8 display-hero">{hero.title}</h1>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="mt-6 text-base md:text-lg text-ink/75 leading-[1.7] max-w-[56ch]">
                {hero.subtitle}
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mt-8 text-base text-ink/70 leading-[1.75] max-w-[56ch] border-t border-hairline pt-8">
                {hero.body}
              </p>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a href="#contact">
                  <Button variant="primary" arrow>
                    {hero.cta}
                  </Button>
                </a>
                <a href="#included">
                  <Button variant="ghost">{hero.ctaSecondary}</Button>
                </a>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-5 flex items-center">
            <FadeIn delay={0.2} className="w-full">
              <blockquote className="relative pl-8 border-l-2 border-accent">
                <p className="font-display text-5xl md:text-6xl leading-[1.05] text-ink">
                  {hero.tagline}
                </p>
                <p className="mt-4 text-sm text-muted leading-[1.6]">
                  {hero.taglineSupport}
                </p>
              </blockquote>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
