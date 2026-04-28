"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { clinicUa } from "@/content/clinic-ua";
import type { ClinicContent } from "@/lib/content/clinic";

type Props = { content?: ClinicContent["hero"] };

export function ClinicHero({ content }: Props = {}) {
  const hero = content ?? clinicUa.hero;

  return (
    <section id="top" className="relative">
      <Container className="pt-10 md:pt-16 pb-20 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-4"
        >
          <span className="h-px w-10 bg-accent" aria-hidden />
          <span className="eyebrow">{hero.eyebrow}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="display-hero mt-10"
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

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5"
          >
            <blockquote className="font-display text-3xl md:text-4xl leading-[1.1] text-ink">
              <span className="text-accent">“</span>
              {hero.leadStatement}
              <span className="text-accent">”</span>
            </blockquote>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="lg:col-span-6 lg:col-start-7 flex flex-col justify-between gap-12"
          >
            <p className="text-base md:text-lg text-ink/75 leading-[1.7] max-w-[52ch]">
              {hero.body}
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <a href={hero.primaryCta.href}>
                <Button variant="primary" arrow>
                  {hero.primaryCta.label}
                </Button>
              </a>
              <a href={hero.secondaryCta.href}>
                <Button variant="ghost">{hero.secondaryCta.label} →</Button>
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
