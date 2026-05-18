import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { departmentUa } from "@/content/department-ua";
import type { DepartmentContent } from "@/lib/content/department";

export function DepartmentAudience({ content }: { content?: DepartmentContent }) {
  const { audience } = content ?? departmentUa;

  return (
    <section className="relative">
      <Container className="py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <FadeIn className="flex items-center gap-4">
              <span className="h-px w-10 bg-accent" aria-hidden />
              <span className="eyebrow">{audience.eyebrow}</span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="mt-8 display-xl max-w-[14ch]">{audience.title}</h2>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="mt-6 text-base text-ink/75 leading-[1.7] max-w-[42ch]">
                {audience.lead}
              </p>
            </FadeIn>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {audience.items.map((item, i) => (
              <FadeIn key={item.title} delay={0.1 + i * 0.1}>
                <article className="h-full flex flex-col gap-5 border border-hairline bg-paper p-8 md:p-10">
                  <span className="font-display text-3xl text-accent/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-2xl text-ink">
                    {item.title}
                  </h3>
                  <p className="text-sm text-ink/75 leading-[1.7]">
                    {item.description}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
