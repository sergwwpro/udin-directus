import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { departmentUa } from "@/content/department-ua";
import type { DepartmentContent } from "@/lib/content/department";

export function DepartmentIncluded({ content }: { content?: DepartmentContent }) {
  const { included } = content ?? departmentUa;

  return (
    <section id="included" className="relative bg-paper-raised">
      <Container className="py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <FadeIn className="flex items-center gap-4">
              <span className="h-px w-10 bg-accent" aria-hidden />
              <span className="eyebrow">{included.eyebrow}</span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="mt-8 display-xl max-w-[16ch]">{included.title}</h2>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="mt-6 text-base text-ink/75 leading-[1.7] max-w-[42ch]">
                {included.lead}
              </p>
            </FadeIn>
          </div>

          <div className="lg:col-span-7">
            <ol className="border-t border-hairline">
              {included.items.map((item, i) => (
                <FadeIn key={i} delay={i * 0.05}>
                  <li className="grid grid-cols-[auto_1fr] gap-6 items-baseline border-b border-hairline py-5">
                    <span className="font-display text-sm text-accent tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base md:text-lg text-ink leading-[1.55]">
                      {item}
                    </span>
                  </li>
                </FadeIn>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
