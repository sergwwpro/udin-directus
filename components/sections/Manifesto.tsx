import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { ua } from "@/content/ua";
import type { HomeContent } from "@/lib/content/home";

type ManifestoProps = { content?: HomeContent["manifesto"] };

export function Manifesto({ content }: ManifestoProps = {}) {
  const manifesto = content ?? ua.manifesto;

  return (
    <section className="relative bg-ink text-paper">
      <Container className="py-24 md:py-40">
        <FadeIn className="flex items-center gap-4">
          <span className="h-px w-10 bg-accent-bright" aria-hidden />
          <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-paper/60">
            {manifesto.eyebrow}
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <blockquote className="mt-12 display-xl max-w-[22ch] text-paper">
            <span className="text-accent-bright">“</span>
            {manifesto.quote}
            <span className="text-accent-bright">”</span>
          </blockquote>
        </FadeIn>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-px bg-paper/10">
          {manifesto.points.map((point, i) => (
            <FadeIn key={point.number} delay={0.1 + i * 0.08} className="bg-ink">
              <div className="p-8 md:p-10 h-full flex flex-col gap-6">
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-3xl text-accent-bright">{point.number}</span>
                  <span className="h-px w-10 bg-paper/20" aria-hidden />
                </div>
                <h3 className="font-display text-2xl text-paper">{point.title}</h3>
                <p className="text-sm text-paper/70 leading-[1.7]">{point.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
