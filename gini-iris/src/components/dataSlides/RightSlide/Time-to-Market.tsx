"use client";

import {
  Rocket,
  FastForward,
  Clock3,
  Boxes,
  Mic,
  Brain,
  PenTool,
  LayoutGrid,
  PlugZap,
  Eye,
} from "lucide-react";

import { motion } from "framer-motion";
import RightSlideWrapper from "./RightSlideWrapper";

const stats = [
  {
    icon: Boxes,
    value: "50+",
    label: "Modules",
  },

  {
    icon: Mic,
    value: "5+",
    label: "Channels",
  },

  {
    icon: Brain,
    value: "100+",
    label: "AI Models",
  },
];

const features = [
  {
    icon: PenTool,
    title: "Low-Code Tooling",
    desc:
      "Visual designers for workflows and journeys.",
  },

  {
    icon: LayoutGrid,
    title: "Pre-Built Components",
    desc:
      "Ready-to-use enterprise UI modules.",
  },

  {
    icon: PlugZap,
    title: "Connector-Based",
    desc:
      "Integrate quickly with existing systems.",
  },

  {
    icon: Rocket,
    title: "Packaged Solutions",
    desc:
      "Deploy use-case solutions instantly.",
  },
];

export default function TimeToMarket() {

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
        className="flex
        flex-col
        h-full
        min-h-[400px]
        overflow-hidden
        rounded-2xl
        border
        bg-gradient-to-r
        from-[#2A7B9B]
        to-[#EDDD53]
        p-4
        backdrop-blur-2xl
        "
      >

          {/* HEADER */}
          <div className="flex items-start gap-2">

            <div
              className="
              mt-0.5
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-md
              border
              border-white/10
              bg-white/[0.05]
              "
            >
              <Rocket className="h-5 w-5 text-white/80" />
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
                Accelerate Go-to-Market
              </h3>

              <p
                className="
                mt-1
                text-[8px]
                text-white/40

                sm:text-[9px]
                "
              >
                Launch enterprise CX solutions faster.
              </p>

            </div>

          </div>

          {/* HERO METRICS */}
          <div
            className="
            mt-3
            grid
            grid-cols-2
            gap-2
            "
          >

            {/* FASTER */}
            <motion.div
              whileHover={{
                y: -2,
              }}
              className="
              rounded-lg
              border
              border-white/10
              bg-white/95
              p-3
              text-center
              shadow-[0_4px_14px_rgba(0,0,0,0.04)]
              "
            >

              <div
                className="
                flex
                items-center
                justify-center
                gap-2
                "
              >

                <FastForward className="h-4 w-4 text-black/80" />

                <h2
                  className="
                  text-[28px]
                  font-black
                  leading-none
                  tracking-[-1px]
                  text-black/90

                  sm:text-[34px]
                  "
                >
                  3X
                </h2>

              </div>

              <p
                className="
                mt-1.5
                text-[8px]
                font-medium
                text-black/45

                sm:text-[9px]
                "
              >
                Faster Implementation
              </p>

            </motion.div>

            {/* LESS TIME */}
            <motion.div
              whileHover={{
                y: -2,
              }}
              className="
              rounded-lg
              border
              border-white/10
              bg-white/95
              p-3
              text-center
              shadow-[0_4px_14px_rgba(0,0,0,0.04)]
              "
            >

              <div
                className="
                flex
                items-center
                justify-center
                gap-2
                "
              >

                <Clock3 className="h-4 w-4 text-black/80" />

                <h2
                  className="
                  text-[28px]
                  font-black
                  leading-none
                  tracking-[-1px]
                  text-black/90

                  sm:text-[34px]
                  "
                >
                  80%
                </h2>

              </div>

              <p
                className="
                mt-1.5
                text-[8px]
                font-medium
                text-black/45

                sm:text-[9px]
                "
              >
                Less Dev Time
              </p>

            </motion.div>

          </div>

          {/* SMALL STATS */}
          <div
            className="
            mt-2
            grid
            grid-cols-3
            gap-2
            "
          >

            {stats.map((item, index) => {

              const Icon = item.icon;

              return (

                <motion.div
                  key={index}
                  whileHover={{
                    y: -2,
                  }}
                  className="
                  rounded-lg
                  border
                  border-white/10
                  bg-white/95
                  p-2.5
                  text-center
                  shadow-[0_4px_14px_rgba(0,0,0,0.04)]
                  "
                >

                  <div
                    className="
                    flex
                    items-center
                    justify-center
                    gap-1
                    "
                  >

                    <Icon className="h-3 w-3 text-black/75" />

                    <h3
                      className="
                      text-[18px]
                      font-black
                      leading-none
                      text-black/90

                      sm:text-[22px]
                      "
                    >
                      {item.value}
                    </h3>

                  </div>

                  <p
                    className="
                    mt-1
                    text-[7px]
                    font-medium
                    text-black/45

                    sm:text-[8px]
                    "
                  >
                    {item.label}
                  </p>

                </motion.div>
              );
            })}

          </div>

          {/* FEATURES */}
          <div
            className="
            mt-2
            grid
            grid-cols-2
            gap-2
            "
          >

            {features.map((item, index) => {

              const Icon = item.icon;

              return (

                <motion.div
                  key={index}
                  whileHover={{
                    y: -2,
                  }}
                  className="
                  rounded-lg
                  border
                  border-white/10
                  bg-white/95
                  p-2.5
                  shadow-[0_4px_14px_rgba(0,0,0,0.04)]
                  "
                >

                  <div className="flex items-start gap-2">

                    {/* ICON */}
                    <div
                      className="
                      flex
                      h-7
                      w-7
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      bg-black/[0.04]
                      "
                    >
                      <Icon className="h-3.5 w-3.5 text-black/80" />
                    </div>

                    {/* CONTENT */}
                    <div>

                      <h4
                        className="
                        text-[9px]
                        font-semibold
                        leading-none
                        text-black/90

                        sm:text-[10px]
                        "
                      >
                        {item.title}
                      </h4>

                      <p
                        className="
                        mt-1
                        text-[7px]
                        leading-4
                        text-black/45

                        sm:text-[8px]
                        "
                      >
                        {item.desc}
                      </p>

                    </div>

                  </div>

                </motion.div>
              );
            })}

          </div>

          {/* TRY BEFORE BUY */}
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

            <div className="flex items-center gap-2">

              <Eye className="h-4 w-4 text-black/75" />

              <h4
                className="
                text-[10px]
                font-semibold
                text-black/90

                sm:text-[11px]
                "
              >
                Try Before You Buy
              </h4>

            </div>

            <p
              className="
              mt-2
              text-[7px]
              leading-4
              text-black/45

              sm:text-[8px]
              "
            >
              Experience features live before deployment
              with fully interactive previews and real-time
              demos.
            </p>

          </motion.div>

      </motion.div>

    </RightSlideWrapper>
  );
}