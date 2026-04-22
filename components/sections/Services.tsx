import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { ua } from "@/content/ua";

export function Services() {
  const { services } = ua;

  return (
    <section id="services" className="relative bg-paper-raised">
      <Container className="py-24 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <FadeIn className="flex items-center gap-4">
              <span className="h-px w-10 bg-accent" aria-hidden />
              <span className="eyebrow">{services.eyebrow}</span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="mt-8 display-xl max-w-[14ch]">{services.title}</h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.15} className="lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="text-base md:text-lg text-ink/75 leading-[1.7] max-w-[50ch]">
              {services.lead}
            </p>
          </FadeIn>
        </div>

        <div className="mt-20 border-t border-hairline">
          {services.items.map((item, i) => (
            <FadeIn key={item.mark} delay={i * 0.08}>
              <a
                href={item.href}
                className="group grid grid-cols-1 md:grid-cols-12 gap-6 py-10 md:py-14 border-b border-hairline transition-colors hover:bg-paper/50 px-2 -mx-2"
              >
                <div className="md:col-span-2">
                  <span className="font-display text-5xl text-accent/60 group-hover:text-accent transition-colors">
                    {item.mark}
                  </span>
                </div>

                <div className="md:col-span-5 flex flex-col gap-3">
                  <h3 className="display-lg group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
                    {item.meta}
                  </span>
                </div>

                <p className="md:col-span-4 text-base text-ink/75 leading-[1.65]">
                  {item.description}
                </p>

                <div className="md:col-span-1 flex items-start md:items-center justify-start md:justify-end">
                  <span className="flex items-center gap-2 text-sm font-medium text-ink">
                    <span className="md:sr-only group-hover:md:not-sr-only">{item.cta}</span>
                    <ArrowUpRight
                      size={22}
                      strokeWidth={1.5}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent"
                    />
                  </span>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
