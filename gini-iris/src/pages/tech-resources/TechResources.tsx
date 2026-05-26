"use client";

import { useEffect } from "react";
import ArchitectsBlueprint from "./BlurprintArchitect";
import ArchitectureDeepDive from "./DeepDive";
import DeveloperCTA from "./DeveloperProgram";
import Diterministic from "./Diterministic";
import GettingStarted from "./GettingStarted";

export default function TechResources() {

    useEffect(() => {
        window.scrollTo({
        top: 0,
        behavior: "smooth",
        });
    }, []);

    return(

        <main className="overflow-hidden">
            <ArchitectsBlueprint />
            <GettingStarted />
            <Diterministic />
            <ArchitectureDeepDive />
            <DeveloperCTA />
        </main>
    )
}