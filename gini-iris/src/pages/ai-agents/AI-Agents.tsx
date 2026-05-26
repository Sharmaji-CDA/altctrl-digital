"use client";

import { useEffect } from "react";
import OperationsCore from "./OperationCore";
import PlatformEdge from "./PlatformEdge";
import ReadyToScale from "./ReadyScale";
import ReasoningStack from "./ReasoningStack";
import SpecializedAIWorkforce from "./Specialized";
import VerticalExpertise from "./VerticalExpertise";

export default function AIAgents(){

    useEffect(() => {
        window.scrollTo({
        top: 0,
        behavior: "smooth",
        });
    }, []);

    return(
        <main className="overflow-hidden">
            <SpecializedAIWorkforce />
            <PlatformEdge />
            <OperationsCore />
            <ReasoningStack />
            <VerticalExpertise />
            <ReadyToScale />
        </main>
    )
}