import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { PortraitPlaceholder } from "@/components/ui/PortraitPlaceholder";
import { ua } from "@/content/ua";
import type { HomeContent } from "@/lib/content/home";

type AboutProps = { content?: HomeContent["about"] };

export function About({ content }: AboutProps = {}) {
  const about = content ?? ua.about;

  return (
    <section id="about" className="relative">
      <Container className="py-24 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <FadeIn className="lg:col-span-5">
            <PortraitPlaceholder
              monogram="ОЮ"
              variant="about"
              className="max-w-[440px]"
            />
          </FadeIn>

          <div className="lg:col-span-7 flex flex-col justify-center">
            <FadeIn delay={0.1} className="flex items-center gap-4">
              <span className="h-px w-10 bg-accent" aria-hidden />
              <span className="eyebrow">{about.eyebrow}</span>
            </FadeIn>

            <FadeIn delay={0.15}>
              <h2 className="mt-8 display-xl">{about.name}</h2>
              <p className="mt-4 text-base text-muted">{about.role}</p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mt-10 space-y-5 max-w-[58ch]">
                {about.bio.map((paragraph, i) => (
                  <p key={i} className="text-base md:text-lg text-ink/80 leading-[1.7]">
                    {paragraph}
                  </p>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.25}>
              <ul className="mt-12 flex flex-col gap-3">
                {about.credentials.map((cred) => (
                  <li
                    key={cred}
                    className="flex items-start gap-4 text-sm text-ink border-t border-hairline pt-3"
                  >
                    <span className="font-display text-accent pt-0.5" aria-hidden>
                      —
                    </span>
                    <span>{cred}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
