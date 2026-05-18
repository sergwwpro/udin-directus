import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { departmentUa } from "@/content/department-ua";
import type { DepartmentContent } from "@/lib/content/department";

export function DepartmentPricing({ content }: { content?: DepartmentContent }) {
  const { pricing } = content ?? departmentUa;
  const { tier } = pricing;

  return (
    <section id="pricing" className="relative">
      <Container className="py-24 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <FadeIn className="flex items-center gap-4">
              <span className="h-px w-10 bg-accent" aria-hidden />
              <span className="eyebrow">{pricing.eyebrow}</span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="mt-8 display-xl max-w-[12ch]">{pricing.title}</h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.15} className="lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="text-base md:text-lg text-ink/75 leading-[1.7] max-w-[52ch]">
              {pricing.lead}
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          <article className="relative mt-20 bg-ink text-paper border border-ink">
            <span className="absolute -top-3 left-8 md:left-12 bg-accent text-paper text-[10px] font-medium uppercase tracking-[0.2em] px-3 py-1.5">
              {tier.badge}
            </span>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 p-8 md:p-12 lg:p-16">
              <div className="lg:col-span-6 flex flex-col">
                <h3 className="font-display text-3xl md:text-4xl text-paper">
                  {tier.name}
                </h3>

                <div className="mt-10 pt-10 border-t border-paper/15">
                  <div className="flex items-baseline gap-4 flex-wrap">
                    <span className="font-display text-6xl md:text-7xl leading-none tracking-tight text-paper">
                      {tier.price}
                    </span>
                    <span className="text-sm text-paper/60">{tier.priceUnit}</span>
                  </div>

                  <div className="mt-8 flex items-baseline gap-3 flex-wrap">
                    <span className="font-display text-3xl md:text-4xl text-accent-bright leading-none">
                      {tier.perDoctor}
                    </span>
                    <span className="text-sm text-paper/60">
                      {tier.perDoctorUnit}
                    </span>
                  </div>

                  <p className="mt-8 text-xs text-paper/50 leading-[1.6] max-w-[40ch]">
                    {tier.paymentNote}
                  </p>
                </div>

                <div className="mt-auto pt-12">
                  <a href="#contact" className="block">
                    <Button
                      variant="outline"
                      arrow
                      className="w-full justify-between border-paper text-paper hover:bg-paper hover:text-ink"
                    >
                      {tier.cta}
                    </Button>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-6 lg:border-l lg:border-paper/15 lg:pl-12">
                <span className="eyebrow text-paper/60">Переваги пакету</span>
                <ul className="mt-8 flex flex-col">
                  {tier.benefits.map((text, i) => (
                    <li
                      key={i}
                      className="grid grid-cols-[auto_1fr] gap-5 items-baseline border-t border-paper/15 py-5 first:border-t-0 first:pt-0"
                    >
                      <span className="font-display text-lg text-accent-bright tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-base text-paper/85 leading-[1.55]">
                        {text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <FadeIn delay={0.1}>
            <p className="text-sm text-muted leading-[1.7] max-w-[50ch]">
              {pricing.note}
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="border-l-2 border-accent pl-6 text-base text-ink/80 leading-[1.7] italic max-w-[50ch]">
              {pricing.closing}
            </p>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
