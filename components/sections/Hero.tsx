"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PortraitPlaceholder } from "@/components/ui/PortraitPlaceholder";
import { ua } from "@/content/ua";

export function Hero() {
  const { hero } = ua;

  return (
    <section id="top" className="relative overflow-hidden">
      <Container className="pt-10 md:pt-16 pb-24 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-4"
        >
          <span className="h-px w-10 bg-accent" aria-hidden />
          <span className="eyebrow">{hero.eyebrow}</span>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-x-10">
          <div className="lg:col-span-8">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="display-hero"
            >
              {hero.titleLines.map((line, i) => (
                <motion.span
                  key={line}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.15 + i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="block"
                >
                  {i === hero.titleLines.length - 1 ? (
                    <>
                      {line.replace(".", "")}
                      <span className="text-accent">.</span>
                    </>
                  ) : (
                    line
                  )}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 lg:row-start-2 flex flex-col justify-end"
          >
            <PortraitPlaceholder
              monogram="ОЮ"
              caption={hero.portraitCaption}
              subcaption={hero.portraitSubcaption}
              variant="hero"
              className="max-w-[320px] ml-auto"
            />
          </motion.div>

          <div className="lg:col-span-7 lg:col-start-1 lg:row-start-2">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-display text-2xl md:text-3xl lg:text-4xl leading-[1.15] max-w-[18ch] text-ink"
            >
              {hero.leadStatement}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 max-w-[52ch] text-base md:text-lg text-ink/75 leading-[1.65]"
            >
              {hero.body}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-5"
            >
              <a href={hero.primaryCta.href}>
                <Button variant="primary" arrow>
                  {hero.primaryCta.label}
                </Button>
              </a>
              <a href={hero.secondaryCta.href}>
                <Button variant="ghost">{hero.secondaryCta.label} →</Button>
              </a>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
