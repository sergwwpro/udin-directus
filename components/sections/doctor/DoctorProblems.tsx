import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { doctorUa } from "@/content/doctor-ua";

export function DoctorProblems() {
  const { problems } = doctorUa;

  return (
    <section id="problems" className="relative bg-paper-raised">
      <Container className="py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <FadeIn className="flex items-center gap-4">
              <span className="h-px w-10 bg-danger" aria-hidden />
              <span className="eyebrow text-danger">{problems.eyebrow}</span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="mt-8 display-xl max-w-[14ch]">{problems.title}</h2>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="mt-6 text-base text-ink/70 leading-[1.7]">
                {problems.intro}
              </p>
            </FadeIn>
          </div>

          <div className="lg:col-span-8">
            <ol className="border-t border-hairline">
              {problems.cases.map((item, i) => (
                <FadeIn key={i} delay={i * 0.04}>
                  <li className="grid grid-cols-[auto_1fr] gap-5 items-baseline border-b border-hairline py-4">
                    <span className="font-display text-xs text-danger tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm md:text-base text-ink/80 leading-[1.65]">
                      {item}
                    </p>
                  </li>
                </FadeIn>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-hairline pt-16">
          <FadeIn>
            <p className="text-base md:text-lg text-ink/75 leading-[1.7]">
              {problems.body}
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="border-l-2 border-accent pl-6">
              <p className="text-base text-ink/70 leading-[1.75] italic">
                {problems.tip}
              </p>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
