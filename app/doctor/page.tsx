import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Contact } from "@/components/sections/Contact";
import { DoctorHero } from "@/components/sections/doctor/DoctorHero";
import { DoctorProblems } from "@/components/sections/doctor/DoctorProblems";
import { DoctorGuarantees } from "@/components/sections/doctor/DoctorGuarantees";
import { DoctorPricing } from "@/components/sections/doctor/DoctorPricing";
import { DoctorEconomics } from "@/components/sections/doctor/DoctorEconomics";
import { DoctorCrossLinks } from "@/components/sections/doctor/DoctorCrossLinks";
import { getDoctorContent } from "@/lib/content/doctor";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getDoctorContent();
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

export default async function DoctorPage() {
  const content = await getDoctorContent();
  return (
    <>
      <Header />
      <main id="main">
        <DoctorHero content={content.hero} />
        <DoctorProblems content={content.problems} />
        <DoctorGuarantees content={content.guarantees} />
        <DoctorPricing content={content.pricing} />
        <DoctorEconomics content={content.economics} />
        <DoctorCrossLinks content={content.crosslinks} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
