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
import { clinicUa } from "@/content/clinic-ua";

export const metadata: Metadata = {
  title: clinicUa.meta.title,
  description: clinicUa.meta.description,
  openGraph: {
    title: clinicUa.meta.title,
    description: clinicUa.meta.description,
    locale: "uk_UA",
    type: "website",
  },
};

export default function ClinicPage() {
  return (
    <>
      <Header />
      <main id="main">
        <ClinicHero />
        <ClinicProblems />
        <ClinicSolution />
        <ClinicIncluded />
        <ClinicPricing />
        <ClinicScenarios />
        <ClinicCrossLinks />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
