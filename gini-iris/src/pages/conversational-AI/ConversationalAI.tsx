"use client";

import AtonomyOfFlow from "./AtonomyOfFlow";
import EnterpriseControl from "./EnterpriseControl";
import ExperienceHub from "./ExperienceHub";
import IntelligenceCore from "./IntelligenceCore";
import ReadyToDeploy from "./ReadyToDeploy";
import SelfServicePowerhouse from "./SelfService";


export default function ConversationalAI(){

    return(
        <main className="overflow-hidden bg-[#f4f6fb]">
            <SelfServicePowerhouse />
            <AtonomyOfFlow />
            <IntelligenceCore />
            <ExperienceHub />
            <EnterpriseControl />
            <ReadyToDeploy />
        </main>
    )
}