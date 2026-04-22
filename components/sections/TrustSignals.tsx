import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { ua } from "@/content/ua";

export function TrustSignals() {
  const { trust } = ua;

  return (
    <section className="relative">
      <Container className="py-20 md:py-28">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 md:gap-x-0 md:divide-x md:divide-hairline">
          {trust.map((stat, i) => (
            <FadeIn
              key={stat.label}
              delay={i * 0.08}
              className="flex flex-col gap-3 md:px-10 first:md:pl-0 last:md:pr-0"
            >
              <span className="font-display text-6xl md:text-7xl leading-none">
                {stat.value}
              </span>
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
                {stat.label}
              </span>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
