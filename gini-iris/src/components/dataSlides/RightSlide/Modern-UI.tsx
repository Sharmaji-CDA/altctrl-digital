"use client";

import {
  Palette,
  BarChart3,
  Layers3,
  Sparkles,
  Triangle,
  Play,
} from "lucide-react";

import { motion } from "framer-motion";
import RightSlideWrapper from "./RightSlideWrapper";

const modernStack = [
  "Next.js & React",
  "Tailwind CSS",
  "Component-based",
  "Fast & Interactive",
];

const legacyStack = [
  "AngularJS / JSP",
  "Custom CSS / jQuery",
  "Monolithic",
  "Slow & Clunky",
];

export default function ModernUI() {

  return (

    <RightSlideWrapper>

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
        h-full
        min-h-[500px]
        overflow-hidden
        "
      >

        <div
          className="
          relative
          z-10
          flex
          h-full
          flex-col
          "
        >

          {/* HEADER */}
          <div className="flex items-start gap-2">

            <div
              className="
              mt-0.5
              flex
              h-5
              w-5
              items-center
              justify-center
              rounded-md
              border
              border-white/10
              bg-white/[0.05]
              "
            >
              <Palette className="h-2.5 w-2.5 text-white/80" />
            </div>

            <div>

              <h3
                className="
                text-[14px]
                font-semibold
                tracking-[-0.2px]
                text-white
                leading-none

                sm:text-[16px]
                "
              >
                Rich Modular UI/UX
              </h3>

              <p
                className="
                mt-1
                text-[8px]
                text-white/40

                sm:text-[9px]
                "
              >
                Designed for speed, simplicity, and scale.
              </p>

            </div>

          </div>

          {/* GRAPHICAL UI */}
          <motion.div
            whileHover={{
              y: -2,
            }}
            className="
            mt-3
            rounded-lg
            border
            border-white/10
            bg-white/95
            p-3
            shadow-[0_4px_14px_rgba(0,0,0,0.04)]
            "
          >

            <div className="flex items-start gap-2">

              {/* ICON */}
              <div
                className="
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-lg
                bg-black/[0.04]
                "
              >
                <BarChart3 className="h-4 w-4 text-black/80" />
              </div>

              {/* CONTENT */}
              <div className="flex-1">

                <h4
                  className="
                  text-[11px]
                  font-semibold
                  text-black/90

                  sm:text-[12px]
                  "
                >
                  Rich Graphical Interface
                </h4>

                <p
                  className="
                  mt-1.5
                  text-[7px]
                  leading-4
                  text-black/45

                  sm:text-[8px]
                  "
                >
                  Interactive dashboards powered by Recharts
                  and Framer Motion deliver smooth,
                  real-time insights.
                </p>

                {/* LIBRARIES */}
                <div
                  className="
                  mt-3
                  flex
                  flex-wrap
                  gap-4
                  "
                >

                  {/* RECHARTS */}
                  <motion.div
                    whileHover={{
                      scale: 1.03,
                    }}
                    className="
                    flex
                    items-center
                    gap-1.5
                    "
                  >

                    <Triangle
                      className="
                      h-3
                      w-3
                      fill-violet-500
                      text-violet-500
                      "
                    />

                    <span
                      className="
                      text-[8px]
                      font-medium
                      text-black/80

                      sm:text-[9px]
                      "
                    >
                      Recharts
                    </span>

                  </motion.div>

                  {/* FRAMER */}
                  <motion.div
                    whileHover={{
                      scale: 1.03,
                    }}
                    className="
                    flex
                    items-center
                    gap-1.5
                    "
                  >

                    <Play
                      className="
                      h-3
                      w-3
                      fill-black
                      text-black
                      "
                    />

                    <span
                      className="
                      text-[8px]
                      font-medium
                      text-black/80

                      sm:text-[9px]
                      "
                    >
                      Framer Motion
                    </span>

                  </motion.div>

                </div>

              </div>

            </div>

          </motion.div>

          {/* STACK COMPARISON */}
          <motion.div
            whileHover={{
              y: -2,
            }}
            className="
            mt-2
            rounded-lg
            border
            border-white/10
            bg-white/95
            p-3
            shadow-[0_4px_14px_rgba(0,0,0,0.04)]
            "
          >

            {/* TOP */}
            <div className="flex items-center gap-1.5">

              <Layers3 className="h-3 w-3 text-black/70" />

              <h4
                className="
                text-[10px]
                font-medium
                text-black/85

                sm:text-[11px]
                "
              >
                Modern Stack vs Legacy
              </h4>

            </div>

            {/* GRID */}
            <div
              className="
              mt-3
              grid
              grid-cols-2
              gap-2
              "
            >

              {/* MODERN */}
              <div
                className="
                rounded-lg
                bg-black/[0.03]
                p-2.5
                "
              >

                <h5
                  className="
                  text-[8px]
                  font-semibold
                  text-black/90

                  sm:text-[9px]
                  "
                >
                  Modern Stack
                </h5>

                <ul className="mt-2 space-y-1.5">

                  {modernStack.map((item, index) => {

                    return (

                      <li
                        key={index}
                        className="
                        flex
                        items-center
                        gap-1.5
                        text-[7px]
                        text-black/60

                        sm:text-[8px]
                        "
                      >

                        <div className="h-1 w-1 rounded-full bg-black/50" />

                        {item}

                      </li>
                    );
                  })}

                </ul>

              </div>

              {/* LEGACY */}
              <div
                className="
                rounded-lg
                bg-black/[0.03]
                p-2.5
                "
              >

                <h5
                  className="
                  text-[8px]
                  font-semibold
                  text-black/55

                  sm:text-[9px]
                  "
                >
                  Legacy Stack
                </h5>

                <ul className="mt-2 space-y-1.5">

                  {legacyStack.map((item, index) => {

                    return (

                      <li
                        key={index}
                        className="
                        flex
                        items-center
                        gap-1.5
                        text-[7px]
                        text-black/45

                        sm:text-[8px]
                        "
                      >

                        <div className="h-1 w-1 rounded-full bg-black/35" />

                        {item}

                      </li>
                    );
                  })}

                </ul>

              </div>

            </div>

          </motion.div>

          {/* UX CARD */}
          <motion.div
            whileHover={{
              y: -2,
            }}
            className="
            mt-2
            rounded-lg
            border
            border-white/10
            bg-white/95
            p-3
            shadow-[0_4px_14px_rgba(0,0,0,0.04)]
            "
          >

            <div className="flex items-start gap-2">

              {/* ICON */}
              <div
                className="
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-lg
                bg-black/[0.04]
                "
              >
                <Sparkles className="h-4 w-4 text-black/80" />
              </div>

              {/* CONTENT */}
              <div>

                <h4
                  className="
                  text-[11px]
                  font-semibold
                  text-black/90

                  sm:text-[12px]
                  "
                >
                  Intuitive User Experience
                </h4>

                <p
                  className="
                  mt-1.5
                  text-[7px]
                  leading-4
                  text-black/45

                  sm:text-[8px]
                  "
                >
                  Designed to reduce training time and
                  improve adoption with modern,
                  user-friendly workflows.
                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </motion.div>

    </RightSlideWrapper>
  );
}