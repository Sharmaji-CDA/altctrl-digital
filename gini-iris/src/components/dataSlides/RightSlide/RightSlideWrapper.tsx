"use client";

import type { ReactNode } from "react";

interface RightSlideWrapperProps {
    children: ReactNode;
}

export default function RightSlideWrapper({
    children,
}: RightSlideWrapperProps) {

    return (

        <div className="relative z-10 min-h-[400px]">
            {children}
        </div>
    );
}