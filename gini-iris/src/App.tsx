import "./index.css";

import { useEffect } from "react";
import Lenis from "lenis";

import CTA from "./components/CTA";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import OperationsSection from "./components/OperationSection";
import IntelligenceCore from "./components/IntelligenceCore";
import OrchestrationFlow from "./components/OrchestrationFlow";

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
      <OperationsSection />
      <IntelligenceCore />
      <OrchestrationFlow />

      {/* SERVICES */}
      <section className="relative z-20 -mt-[10vh] bg-black rounded-t-[60px]">
        <Services />
      </section>

      {/* FEATURES */}
      <section className="relative z-30 bg-black">
        <Features />
      </section>

      {/* CTA */}
      <section className="relative z-30 bg-black">
        <CTA />
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}

export default App;