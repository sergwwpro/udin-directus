import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { clinicUa } from "@/content/clinic-ua";

export function ClinicIncluded() {
  const { included } = clinicUa;

  return (
    <section className="relative">
      <Container className="py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <FadeIn className="flex items-center gap-4">
              <span className="h-px w-10 bg-accent" aria-hidden />
              <span className="eyebrow">{included.eyebrow}</span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="mt-8 display-xl max-w-[14ch]">{included.title}</h2>
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
                <FadeIn key={item} delay={i * 0.04}>
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

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 border-t border-hairline pt-16">
          {included.guarantees.map((g, i) => (
            <FadeIn key={g.title} delay={i * 0.08} className="flex flex-col gap-3">
              <span className="font-display text-xl text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-xl">{g.title}</h3>
              <p className="text-sm text-ink/75 leading-[1.65]">{g.text}</p>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
