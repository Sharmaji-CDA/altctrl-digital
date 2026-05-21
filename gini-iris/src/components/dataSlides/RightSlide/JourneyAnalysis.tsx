"use client";

import {
  Map,
  UserRound,
  Bot,
  TriangleAlert,
  UserCog,
  Lightbulb,
} from "lucide-react";

import { motion } from "framer-motion";
import RightSlideWrapper from "./RightSlideWrapper";

const journeySteps = [
  {
    icon: UserRound,
    title: "Initial Contact",
    desc:
      "Customer asks about pricing through web chat.",
    color:
      "text-emerald-500 border-emerald-400/30 bg-emerald-400/[0.06]",
  },

  {
    icon: Bot,
    title: "Bot Interaction",
    desc:
      "AI bot gathers details and identifies intent.",
    color:
      "text-green-600 border-green-400/30 bg-green-400/[0.06]",
  },

  {
    icon: TriangleAlert,
    title: "Friction Point",
    desc:
      "Customer mentions competitor pricing concerns.",
    color:
      "text-red-500 border-red-400/30 bg-red-400/[0.06]",
  },

  {
    icon: UserCog,
    title: "Agent Handoff",
    desc:
      "Conversation routed to live sales agent.",
    color:
      "text-blue-500 border-blue-400/30 bg-blue-400/[0.06]",
  },
];

export default function JourneyAnalysis() {

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
              <Map className="h-2.5 w-2.5 text-white/80" />
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
                Journey Analysis
              </h3>

              <p
                className="
                mt-1
                text-[8px]
                text-white/40

                sm:text-[9px]
                "
              >
                Customer path from discovery to resolution.
              </p>

            </div>

          </div>

          {/* JOURNEY STEPS */}
          <div
            className="
            relative
            mt-3
            space-y-2
            "
          >

            {/* LINE */}
            <div
              className="
              absolute
              left-[10px]
              top-[10px]
              h-[82%]
              w-[1px]
              bg-white/10
              "
            />

            {journeySteps.map((item, index) => {

              const Icon = item.icon;

              return (

                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: -8,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.05,
                  }}
                  whileHover={{
                    x: 2,
                  }}
                  className="
                  relative
                  flex
                  items-start
                  gap-2
                  "
                >

                  {/* ICON */}
                  <div
                    className={`
                    relative
                    z-10
                    flex
                    h-5
                    w-5
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    bg-white

                    ${item.color}
                    `}
                  >
                    <Icon className="h-2.5 w-2.5" />
                  </div>

                  {/* CONTENT */}
                  <div className="pt-0.5">

                    <h4
                      className="
                      text-[9px]
                      font-medium
                      text-white

                      sm:text-[10px]
                      "
                    >
                      {item.title}
                    </h4>

                    <p
                      className="
                      mt-1
                      max-w-[500px]
                      text-[7px]
                      leading-3
                      text-white/45

                      sm:text-[8px]
                      sm:leading-4
                      "
                    >
                      {item.desc}
                    </p>

                  </div>

                </motion.div>
              );
            })}

          </div>

          {/* AI RECOMMENDATION */}
          <motion.div
            whileHover={{
              y: -2,
            }}
            className="
            mt-3
            rounded-lg
            border
            border-orange-400/20
            bg-orange-400/[0.08]
            p-2.5
            "
          >

            <div className="flex items-start gap-2">

              <Lightbulb className="mt-0.5 h-3 w-3 text-orange-400" />

              <div>

                <h4
                  className="
                  text-[9px]
                  font-medium
                  text-orange-400

                  sm:text-[10px]
                  "
                >
                  AI Recommendation
                </h4>

                <p
                  className="
                  mt-1
                  text-[7px]
                  leading-3
                  text-orange-400/90

                  sm:text-[8px]
                  sm:leading-4
                  "
                >
                  Offer a 10% discount proactively to
                  reduce churn risk and secure the sale.
                </p>

              </div>

            </div>

          </motion.div>

          {/* BUTTON */}
          <motion.button
            whileHover={{
              scale: 1.01,
            }}
            whileTap={{
              scale: 0.99,
            }}
            className="
            mt-3
            w-full
            rounded-lg
            border
            border-white/10
            bg-white/95
            px-3
            py-2
            text-[9px]
            font-medium
            text-black/80
            shadow-[0_4px_14px_rgba(0,0,0,0.04)]
            transition-all
            duration-300
            hover:bg-white

            sm:text-[10px]
            "
          >
            View Full Journey Map
          </motion.button>

        </div>

      </motion.div>

    </RightSlideWrapper>
  );
}