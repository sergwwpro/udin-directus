import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { clinicUa } from "@/content/clinic-ua";
import type { ClinicContent } from "@/lib/content/clinic";

type Props = { content?: ClinicContent["problems"] };

export function ClinicProblems({ content }: Props = {}) {
  const problems = content ?? clinicUa.problems;

  return (
    <section className="relative bg-paper-raised">
      <Container className="py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <FadeIn className="flex items-center gap-4">
              <span className="h-px w-10 bg-danger" aria-hidden />
              <span className="eyebrow">{problems.eyebrow}</span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="mt-8 display-xl max-w-[12ch]">{problems.title}</h2>
            </FadeIn>
          </div>

          <FadeIn delay={0.15} className="lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="text-base md:text-lg text-ink/75 leading-[1.7] max-w-[50ch]">
              {problems.intro}
            </p>
          </FadeIn>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.08}>
              <article className="h-full flex flex-col gap-6 bg-paper border border-hairline p-8 md:p-10">
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-4xl text-danger/70">0{i + 1}</span>
                  <span className="h-px w-10 bg-hairline" aria-hidden />
                </div>
                <h3 className="font-display text-2xl md:text-3xl leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-ink/75 leading-[1.7]">
                  {item.text}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
