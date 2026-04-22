import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Contact } from "@/components/sections/Contact";
import { DepartmentHero } from "@/components/sections/department/DepartmentHero";
import { DepartmentProblem } from "@/components/sections/department/DepartmentProblem";
import { DepartmentAudience } from "@/components/sections/department/DepartmentAudience";
import { DepartmentIncluded } from "@/components/sections/department/DepartmentIncluded";
import { DepartmentPricing } from "@/components/sections/department/DepartmentPricing";
import { DepartmentCrossLinks } from "@/components/sections/department/DepartmentCrossLinks";
import { departmentUa } from "@/content/department-ua";

export const metadata: Metadata = {
  title: departmentUa.meta.title,
  description: departmentUa.meta.description,
  openGraph: {
    title: departmentUa.meta.title,
    description: departmentUa.meta.description,
    locale: "uk_UA",
    type: "website",
  },
};

export default function DepartmentPage() {
  return (
    <>
      <Header />
      <main id="main">
        <DepartmentHero />
        <DepartmentProblem />
        <DepartmentAudience />
        <DepartmentIncluded />
        <DepartmentPricing />
        <DepartmentCrossLinks />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
