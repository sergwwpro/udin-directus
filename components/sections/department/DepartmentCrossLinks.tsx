import Link from "next/link";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { departmentUa } from "@/content/department-ua";
import type { DepartmentContent } from "@/lib/content/department";

export function DepartmentCrossLinks({ content }: { content?: DepartmentContent }) {
  const { crosslinks } = content ?? departmentUa;

  return (
    <section className="relative bg-paper-raised">
      <Container className="py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <FadeIn className="flex items-center gap-4">
              <span className="h-px w-10 bg-accent" aria-hidden />
              <span className="eyebrow">{crosslinks.eyebrow}</span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="mt-8 display-xl">{crosslinks.title}</h2>
            </FadeIn>
          </div>

          <div className="lg:col-span-8 flex flex-col border-t border-hairline">
            {crosslinks.items.map((item, i) => (
              <FadeIn key={item.mark} delay={i * 0.08}>
                <Link
                  href={item.href}
                  className="group grid grid-cols-1 md:grid-cols-12 gap-6 py-10 border-b border-hairline transition-colors hover:bg-paper px-2 -mx-2"
                >
                  <div className="md:col-span-2">
                    <span className="font-display text-5xl text-accent/60 group-hover:text-accent transition-colors">
                      {item.mark}
                    </span>
                  </div>
                  <div className="md:col-span-5">
                    <h3 className="display-lg group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="md:col-span-4 text-base text-ink/75 leading-[1.65]">
                    {item.description}
                  </p>
                  <div className="md:col-span-1 flex items-start md:items-center justify-start md:justify-end">
                    <ArrowUpRight
                      size={22}
                      strokeWidth={1.5}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent"
                    />
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-16 pt-8 border-t border-hairline">
            <Link
              href={crosslinks.backToHome.href}
              className="group inline-flex items-center gap-3 text-sm font-medium text-ink hover:text-accent transition-colors"
            >
              <ArrowLeft
                size={16}
                strokeWidth={1.75}
                className="transition-transform duration-200 group-hover:-translate-x-0.5"
              />
              {crosslinks.backToHome.label}
            </Link>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
