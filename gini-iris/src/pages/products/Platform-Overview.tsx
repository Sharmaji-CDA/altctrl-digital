"use client";

import AutonomyBusiness from "./Autonomy-Business";
import DeriskingEngine from "./DeriskEngine";
import IndustrySpecialized from "./IndustrySpecialized";
import IntelligenceCore from "./IntellegenceCore";
import OperationalCommand from "./OperationalCommand";
import ReadyToDeploy from "./ReadyToDeploy";
import ServiceGateways from "./ServicesGateway";


export default function PlatformOverview(){

    return(
        <main className="overflow-hidden bg-[#f4f6fb]">
            <AutonomyBusiness />
            <DeriskingEngine />
            <IntelligenceCore />
            <OperationalCommand />
            <ServiceGateways />
            <IndustrySpecialized />
            <ReadyToDeploy />
        </main>
    )
}