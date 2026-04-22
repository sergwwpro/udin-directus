import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { About } from "@/components/sections/About";
import { TrustSignals } from "@/components/sections/TrustSignals";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Manifesto />
        <About />
        <TrustSignals />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
