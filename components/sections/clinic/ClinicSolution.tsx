import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { clinicUa } from "@/content/clinic-ua";
import type { ClinicContent } from "@/lib/content/clinic";

type Props = { content?: ClinicContent["solution"] };

export function ClinicSolution({ content }: Props = {}) {
  const solution = content ?? clinicUa.solution;

  return (
    <section className="relative bg-ink text-paper">
      <Container className="py-24 md:py-36">
        <FadeIn className="flex items-center gap-4">
          <span className="h-px w-10 bg-accent-bright" aria-hidden />
          <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-paper/60">
            {solution.eyebrow}
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="mt-10 text-[11px] font-medium uppercase tracking-[0.2em] text-paper/50">
            {solution.title}
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="mt-6 display-xl max-w-[24ch] text-paper">
            {solution.statement}
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mt-12 text-base md:text-lg leading-[1.7] text-paper/70 max-w-[58ch]">
            {solution.description}
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
