import AiContent from "../../components/AiContent";
import BusinessFocus from "../../components/BusinessFocus";
import CTA from "../../components/CTA";
import DataModule from "../../components/dataSlides/DataModule";
import DataSphereProtocol from "../../components/DataSphereProtocol";
import EnterpriseTrust from "../../components/EnterpriseTrust";
import Hero from "../../components/Hero";
import IndustryKernels from "../../components/IndustryKernels";
import IntelligenceCore from "../../components/IntelligenceCore";
import OnboardingFlow from "../../components/OnboardingFlow";
import OperationsSection from "../../components/OperationSection";
import OrchestrationFlow from "../../components/OrchestrationFlow";
import PlatformModules from "../../components/PlatformModules";
import PricingScale from "../../components/PricingScale";
import ServiceModule from "../../components/ServiceModule";


export default function Home() {
  return (
    <main className="overflow-x-hidden bg-black text-white">

      <Hero />
      <ServiceModule />
      <DataModule />
      <OperationsSection />
      <IntelligenceCore />
      <OrchestrationFlow />
      <OnboardingFlow />
      <EnterpriseTrust />

      <section className="relative z-20 -mt-[1vh] bg-black rounded-t-[60px]">
        <PlatformModules />
        <IndustryKernels />
        <DataSphereProtocol />
      </section>

      <section className="relative z-30 bg-black">
        <BusinessFocus />
        <PricingScale />
      </section>

      <section className="relative z-30 bg-black">
        <CTA />
        <AiContent />
      </section>

    </main>
  );
}