import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Contact } from "@/components/sections/Contact";
import { ClinicHero } from "@/components/sections/clinic/ClinicHero";
import { ClinicProblems } from "@/components/sections/clinic/ClinicProblems";
import { ClinicSolution } from "@/components/sections/clinic/ClinicSolution";
import { ClinicIncluded } from "@/components/sections/clinic/ClinicIncluded";
import { ClinicPricing } from "@/components/sections/clinic/ClinicPricing";
import { ClinicScenarios } from "@/components/sections/clinic/ClinicScenarios";
import { ClinicCrossLinks } from "@/components/sections/clinic/ClinicCrossLinks";
import { getClinicContent } from "@/lib/content/clinic";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getClinicContent();
  return {
    title: content.meta.title,
    description: content.meta.description,
    openGraph: {
      title: content.meta.title,
      description: content.meta.description,
      locale: "uk_UA",
      type: "website",
    },
  };
}

export default async function ClinicPage() {
  const content = await getClinicContent();
  return (
    <>
      <Header />
      <main id="main">
        <ClinicHero content={content.hero} />
        <ClinicProblems content={content.problems} />
        <ClinicSolution content={content.solution} />
        <ClinicIncluded content={content.included} />
        <ClinicPricing content={content.pricing} />
        <ClinicScenarios content={content.scenarios} />
        <ClinicCrossLinks content={content.crosslinks} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
