import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { doctorUa } from "@/content/doctor-ua";
import type { DoctorContent } from "@/lib/content/doctor";
import { cn } from "@/lib/utils";

type Props = { content?: DoctorContent["pricing"] };

export function DoctorPricing({ content }: Props = {}) {
  const pricing = content ?? doctorUa.pricing;

  return (
    <section id="pricing" className="relative bg-paper-raised">
      <Container className="py-24 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <FadeIn className="flex items-center gap-4">
              <span className="h-px w-10 bg-accent" aria-hidden />
              <span className="eyebrow">{pricing.eyebrow}</span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="mt-8 display-xl max-w-[14ch]">{pricing.title}</h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.15} className="lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="text-base md:text-lg text-ink/75 leading-[1.7] max-w-[50ch]">
              {pricing.lead}
            </p>
          </FadeIn>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricing.tiers.map((tier, i) => (
            <FadeIn key={tier.name} delay={i * 0.1}>
              <article
                className={cn(
                  "relative h-full flex flex-col border border-hairline bg-paper p-8 md:p-10",
                  tier.recommended && "bg-ink text-paper border-ink",
                )}
              >
                {tier.recommended && (
                  <span className="absolute -top-3 left-8 bg-accent text-paper text-[10px] font-medium uppercase tracking-[0.2em] px-3 py-1.5">
                    {tier.recommendedLabel}
                  </span>
                )}

                <div className="flex items-baseline justify-between">
                  <span
                    className={cn(
                      "font-display text-2xl",
                      tier.recommended ? "text-accent-bright" : "text-accent/70",
                    )}
                  >
                    {tier.mark}
                  </span>
                  <span
                    className={cn(
                      "h-px w-10",
                      tier.recommended ? "bg-paper/20" : "bg-hairline",
                    )}
                    aria-hidden
                  />
                </div>

                <h3
                  className={cn(
                    "font-display text-3xl md:text-4xl mt-6",
                    tier.recommended ? "text-paper" : "text-ink",
                  )}
                >
                  {tier.name}
                </h3>

                <div
                  className={cn(
                    "mt-6 pt-6 border-t",
                    tier.recommended ? "border-paper/15" : "border-hairline",
                  )}
                >
                  <span className="font-display text-5xl md:text-6xl leading-none tracking-tight">
                    {tier.price}
                  </span>
                  <span
                    className={cn(
                      "mt-2 block text-sm",
                      tier.recommended ? "text-paper/60" : "text-muted",
                    )}
                  >
                    {tier.priceUnit}
                  </span>
                </div>

                <ul
                  className={cn(
                    "mt-8 pt-6 border-t flex flex-col gap-3",
                    tier.recommended ? "border-paper/15" : "border-hairline",
                  )}
                >
                  {pricing.coreFeatures.map((f) => (
                    <li key={f} className="flex gap-3 items-start">
                      <span
                        className={cn(
                          "mt-0.5 shrink-0 text-xs",
                          tier.recommended ? "text-paper/50" : "text-muted",
                        )}
                        aria-hidden
                      >
                        —
                      </span>
                      <span
                        className={cn(
                          "text-sm leading-[1.55]",
                          tier.recommended ? "text-paper/75" : "text-ink/70",
                        )}
                      >
                        {f}
                      </span>
                    </li>
                  ))}

                  {tier.extras.length > 0 && (
                    <>
                      <li
                        className={cn(
                          "pt-3 border-t",
                          tier.recommended ? "border-paper/10" : "border-hairline",
                        )}
                        aria-hidden
                      />
                      {tier.extras.map((f) => (
                        <li key={f} className="flex gap-3 items-start">
                          <span
                            className={cn(
                              "mt-0.5 shrink-0 text-xs font-bold",
                              tier.recommended ? "text-accent-bright" : "text-accent",
                            )}
                            aria-hidden
                          >
                            +
                          </span>
                          <span
                            className={cn(
                              "text-sm leading-[1.55] font-medium",
                              tier.recommended ? "text-paper" : "text-ink",
                            )}
                          >
                            {f}
                          </span>
                        </li>
                      ))}
                    </>
                  )}
                </ul>

                <div className="mt-auto pt-10">
                  <a href="#contact" className="block">
                    <Button
                      variant={tier.recommended ? "outline" : "primary"}
                      arrow
                      className={cn(
                        "w-full justify-between",
                        tier.recommended &&
                          "border-paper text-paper hover:bg-paper hover:text-ink",
                      )}
                    >
                      {tier.cta}
                    </Button>
                  </a>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <p className="mt-16 text-sm text-muted max-w-[68ch] leading-[1.7]">
            {pricing.note}
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
