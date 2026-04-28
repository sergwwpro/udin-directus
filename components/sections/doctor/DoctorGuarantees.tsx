import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { doctorUa } from "@/content/doctor-ua";
import type { DoctorContent } from "@/lib/content/doctor";

type Props = { content?: DoctorContent["guarantees"] };

export function DoctorGuarantees({ content }: Props = {}) {
  const guarantees = content ?? doctorUa.guarantees;

  return (
    <section className="relative bg-ink text-paper">
      <Container className="py-24 md:py-32">
        <FadeIn className="flex items-center gap-4">
          <span className="h-px w-10 bg-accent-bright" aria-hidden />
          <span className="eyebrow text-paper/60">{guarantees.eyebrow}</span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="mt-8 display-xl max-w-[22ch] text-paper">
            {guarantees.title}
          </h2>
        </FadeIn>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-px bg-paper/10">
          {guarantees.items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.08}>
              <div className="bg-ink p-8 md:p-10 flex flex-col gap-4">
                <span className="font-display text-3xl text-accent-bright">
                  {item.mark}
                </span>
                <h3 className="font-display text-2xl text-paper">
                  {item.title}
                </h3>
                <p className="text-sm text-paper/70 leading-[1.7]">
                  {item.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
