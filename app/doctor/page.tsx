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
import { doctorUa } from "@/content/doctor-ua";

export const metadata: Metadata = {
  title: doctorUa.meta.title,
  description: doctorUa.meta.description,
  openGraph: {
    title: doctorUa.meta.title,
    description: doctorUa.meta.description,
    locale: "uk_UA",
    type: "website",
  },
};

export default function DoctorPage() {
  return (
    <>
      <Header />
      <main id="main">
        <DoctorHero />
        <DoctorProblems />
        <DoctorGuarantees />
        <DoctorPricing />
        <DoctorEconomics />
        <DoctorCrossLinks />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
