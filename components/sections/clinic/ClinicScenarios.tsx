import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { clinicUa } from "@/content/clinic-ua";

export function ClinicScenarios() {
  const { scenarios } = clinicUa;

  return (
    <section className="relative">
      <Container className="py-24 md:py-32">
        <div className="max-w-[960px]">
          <FadeIn className="flex items-center gap-4">
            <span className="h-px w-10 bg-accent" aria-hidden />
            <span className="eyebrow">{scenarios.eyebrow}</span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mt-10 font-display text-2xl md:text-3xl leading-[1.25] text-ink/80">
              {scenarios.intro}
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-4 items-center font-display text-3xl md:text-5xl leading-[1.05]">
              {scenarios.characters.map((char, i) => (
                <li key={char} className="flex items-center gap-6">
                  <span>{char}</span>
                  {i < scenarios.characters.length - 1 && (
                    <span className="text-accent text-xl md:text-2xl" aria-hidden>
                      ·
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-16 text-base md:text-lg text-ink/75 leading-[1.7] max-w-[60ch] border-t border-hairline pt-8">
              {scenarios.outro}
            </p>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
