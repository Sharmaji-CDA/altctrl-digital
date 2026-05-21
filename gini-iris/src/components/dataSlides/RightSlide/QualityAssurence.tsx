"use client";

import {
  BadgeCheck,
  ShieldAlert,
  Lightbulb,
} from "lucide-react";

import { motion } from "framer-motion";
import RightSlideWrapper from "./RightSlideWrapper";

const scores = [
  {
    label: "Opening & Closing",
    value: "10/10",
    color:
      "border-emerald-400/40 bg-emerald-400/10 text-emerald-500",
  },

  {
    label: "Empathy & Tone",
    value: "8/10",
    color:
      "border-amber-400/40 bg-amber-400/10 text-amber-500",
  },
];

export default function QualityAssurence() {

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
              <BadgeCheck className="h-2.5 w-2.5 text-white/80" />
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
                Automated QA Scorecard
              </h3>

              <p
                className="
                mt-1
                text-[8px]
                text-white/40

                sm:text-[9px]
                "
              >
                Interaction: #INTERACTION_ID
              </p>

            </div>
          </div>

          {/* TOP SCORE */}
          <div
            className="
            mt-3
            grid
            grid-cols-2
            gap-2
            "
          >

            {/* OVERALL SCORE */}
            <motion.div
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

              <p
                className="
                text-center
                text-[8px]
                text-black/45

                sm:text-[9px]
                "
              >
                Overall Score
              </p>

              <h2
                className="
                mt-1
                text-center
                text-[22px]
                font-black
                leading-none
                text-black/90

                sm:text-[28px]
                "
              >
                92%
              </h2>

            </motion.div>

            {/* COMPLIANCE */}
            <motion.div
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

              <div
                className="
                flex
                items-center
                justify-center
                gap-1.5
                text-black/45
                "
              >

                <ShieldAlert className="h-3 w-3" />

                <p
                  className="
                  text-[8px]

                  sm:text-[9px]
                  "
                >
                  Compliance
                </p>

              </div>

              <h2
                className="
                mt-1
                text-center
                text-[22px]
                font-black
                leading-none
                text-red-400

                sm:text-[28px]
                "
              >
                Fail
              </h2>

            </motion.div>
          </div>

          {/* COACHING */}
          <motion.div
            whileHover={{
              y: -2,
            }}
            className="
            mt-2
            rounded-lg
            border
            border-orange-400/20
            bg-orange-400/[0.08]
            p-2.5
            backdrop-blur-xl
            "
          >

            {/* TITLE */}
            <div className="flex items-center gap-1.5">

              <Lightbulb className="h-3 w-3 text-orange-400" />

              <h4
                className="
                text-[11px]
                font-medium
                text-white

                sm:text-[12px]
                "
              >
                Coaching Opportunities
              </h4>

            </div>

            {/* CONTENT */}
            <div
              className="
              mt-2
              space-y-2
              "
            >

              {/* AGENT */}
              <div>

                <p
                  className="
                  text-[9px]
                  font-medium
                  text-white/75

                  sm:text-[10px]
                  "
                >
                  For Agent:
                </p>

                <p
                  className="
                  mt-1
                  text-[7px]
                  leading-3
                  text-white/45

                  sm:text-[8px]
                  sm:leading-4
                  "
                >

Practice actively listening to the customer's needs and verbally acknowledge their concerns to build rapport and ensure understanding before proceeding with the scheduling process. For example, acknowledging his chest pain and palpitations explicitly would enhance the interaction.
                </p>

              </div>

              {/* SUPERVISOR */}
              <div>

                <p
                  className="
                  text-[9px]
                  font-medium
                  text-white/75

                  sm:text-[10px]
                  "
                >
                  For Supervisor:
                </p>

                <p
                  className="
                  mt-1
                  text-[7px]
                  leading-3
                  text-white/45

                  sm:text-[8px]
                  sm:leading-4
                  "
                >
                  Encourage agents to demonstrate empathy proactively. Provide additional training on active listening techniques and scripting examples to help them acknowledge customer concerns effectively.
                </p>

              </div>

            </div>
          </motion.div>

          {/* PARAMETER SCORES */}
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
            p-2.5
            shadow-[0_4px_14px_rgba(0,0,0,0.04)]
            "
          >

            <h4
              className="
              text-[11px]
              font-medium
              text-black/90

              sm:text-[12px]
              "
            >
              Parameter Scores
            </h4>

            <div
              className="
              mt-2
              space-y-1.5
              "
            >

              {scores.map((item, index) => {

                return (

                  <div
                    key={index}
                    className="
                    flex
                    items-center
                    justify-between
                    "
                  >

                    <p
                      className="
                      text-[8px]
                      text-black/70

                      sm:text-[9px]
                      "
                    >
                      {item.label}
                    </p>

                    <div
                      className={`
                      rounded-full
                      border
                      px-2
                      py-0.5
                      text-[8px]
                      font-medium

                      sm:text-[9px]

                      ${item.color}
                      `}
                    >
                      {item.value}
                    </div>

                  </div>
                );
              })}

            </div>
          </motion.div>

        </div>

      </motion.div>

    </RightSlideWrapper>
  );
}