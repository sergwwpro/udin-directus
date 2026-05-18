import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { departmentUa } from "@/content/department-ua";
import type { DepartmentContent } from "@/lib/content/department";

export function DepartmentProblem({ content }: { content?: DepartmentContent }) {
  const { problem } = content ?? departmentUa;

  return (
    <section className="relative bg-ink text-paper">
      <Container className="py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <FadeIn className="flex items-center gap-4">
              <span className="h-px w-10 bg-danger" aria-hidden />
              <span className="eyebrow text-paper/60">{problem.eyebrow}</span>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="mt-8 display-xl text-paper max-w-[18ch]">
                {problem.title}
              </h2>
            </FadeIn>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-10">
            <FadeIn delay={0.15}>
              <p className="text-base md:text-lg text-paper/75 leading-[1.75] max-w-[56ch]">
                {problem.body}
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-paper/10 border border-paper/10">
              {problem.reasons.map((text, i) => (
                <FadeIn key={i} delay={0.2 + i * 0.06}>
                  <div className="bg-ink p-6 flex items-start gap-5 h-full">
                    <span className="font-display text-xl text-accent-bright tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm md:text-base text-paper/80 leading-[1.55]">
                      {text}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.4}>
              <p className="border-t border-paper/15 pt-8 text-base md:text-lg text-paper leading-[1.7] max-w-[56ch]">
                {problem.conclusion}
              </p>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
