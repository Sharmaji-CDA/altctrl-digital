"use client";

import type { ReactNode } from "react";

interface RightSlideWrapperProps {
    children: ReactNode;
}

export default function RightSlideWrapper({
    children,
}: RightSlideWrapperProps) {

    return (

        <div
            className="
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-white/10
                bg-white/[0.06]
                backdrop-blur-2xl
                shadow-[0_20px_80px_rgba(0,0,0,0.18)]
                p-5
                sm:p-6
                lg:p-7
            "
        >

            {/* GLOBAL GLASS OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent" />

            {/* GLOBAL TOP LIGHT */}
            <div
                className="
                    absolute
                    inset-x-0
                    top-0
                    h-[1px]
                    bg-gradient-to-r
                    from-transparent
                    via-white/40
                    to-transparent
                "
            />

            {/* CONTENT */}
            <div className="relative z-10">
                {children}
            </div>

        </div>
    );
}