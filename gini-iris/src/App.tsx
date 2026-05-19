import "./index.css";

import { useEffect } from "react";
import Lenis from "lenis";

import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import OperationsSection from "./components/OperationSection";
import IntelligenceCore from "./components/IntelligenceCore";
import OrchestrationFlow from "./components/OrchestrationFlow";
import OnboardingFlow from "./components/OnboardingFlow";
import EnterpriseTrust from "./components/EnterpriseTrust";
import PlatformModules from "./components/PlatformModules";
import IndustryKernels from "./components/IndustryKernels";
import DataSphereProtocol from "./components/DataSphereProtocol";
import BusinessFocus from "./components/BusinessFocus";
import PricingScale from "./components/PricingScale";
import AiContent from "./components/AiContent";
import ServiceModule from "./components/ServiceModule";
import DataModule from "./components/DataModule";

function App() {

  useEffect(() => {

    const lenis = new Lenis({
      duration: 1.4,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };

  }, []);

  return (
    <main className="overflow-x-hidden bg-black text-white">
      <Navbar />

      {/* HERO */}
      <Hero />
      <ServiceModule />
      <DataModule />
      <OperationsSection />
      <IntelligenceCore />
      <OrchestrationFlow />
      <OnboardingFlow />
      <EnterpriseTrust />

      {/* SERVICES */}
      <section className="relative z-20 -mt-[1vh] bg-black rounded-t-[60px]">
        <PlatformModules />
        <IndustryKernels />
        <DataSphereProtocol />
      </section>

      {/* FEATURES */}
      <section className="relative z-30 bg-black">
        <BusinessFocus />
        <PricingScale />
      </section>

      {/* CTA */}
      <section className="relative z-30 bg-black">
        <CTA />
        <AiContent />
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}

export default App;