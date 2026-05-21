"use client";

import {
  Brain,
  TrendingUp,
  BarChart3,
  Lightbulb,
  BadgeCheck,
} from "lucide-react";

import { motion } from "framer-motion";
import RightSlideWrapper from "./RightSlideWrapper";

export default function TrainingEvaluations() {

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
              <Brain className="h-2.5 w-2.5 text-white/80" />
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
                AI-Generated Learning Path
              </h3>

              <p
                className="
                mt-1
                text-[8px]
                text-white/40

                sm:text-[9px]
                "
              >
                For Agent: Jane Doe
              </p>

            </div>
          </div>

          {/* STATS */}
          <div
            className="
            mt-3
            grid
            grid-cols-2
            gap-2
            "
          >

            {/* RANK */}
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

                <TrendingUp className="h-3 w-3" />

                <p
                  className="
                  text-[8px]

                  sm:text-[9px]
                  "
                >
                  Learning Rank
                </p>

              </div>

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
                #12
              </h2>

            </motion.div>

            {/* SCORE */}
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

                <BarChart3 className="h-3 w-3" />

                <p
                  className="
                  text-[8px]

                  sm:text-[9px]
                  "
                >
                  Skill Score
                </p>

              </div>

              <h2
                className="
                mt-1
                text-center
                text-[20px]
                font-black
                leading-none
                text-blue-500

                sm:text-[24px]
                "
              >
                82/100
              </h2>

            </motion.div>

          </div>

          {/* ALERT */}
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
            "
          >

            <div className="flex items-start gap-2">

              <Lightbulb className="mt-0.5 h-3 w-3 text-orange-400" />

              <p
                className="
                text-[7px]
                italic
                leading-3
                text-orange-400

                sm:text-[8px]
                sm:leading-4
                "
              >
                Based on recent quality scores, the following
                learning modules have been assigned.
              </p>

            </div>

          </motion.div>

          {/* MODULES */}
          <div
            className="
            mt-2
            space-y-2
            "
          >

            {/* MODULE 1 */}
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

              <div className="flex items-center justify-between gap-3">

                <div>

                  <h4
                    className="
                    text-[9px]
                    font-semibold
                    text-black/90

                    sm:text-[10px]
                    "
                  >
                    Advanced Return Policies
                  </h4>

                  <p
                    className="
                    mt-1
                    text-[7px]
                    text-black/40

                    sm:text-[8px]
                    "
                  >
                    Status: In Progress
                  </p>

                </div>

                {/* PROGRESS */}
                <div
                  className="
                  flex
                  min-w-[75px]
                  items-center
                  gap-2
                  rounded-full
                  bg-[#15151C]
                  px-2
                  py-1
                  "
                >

                  <div
                    className="
                    h-[4px]
                    flex-1
                    overflow-hidden
                    rounded-full
                    bg-white/10
                    "
                  >

                    <motion.div
                      initial={{
                        width: 0,
                      }}
                      animate={{
                        width: "60%",
                      }}
                      transition={{
                        duration: 1,
                      }}
                      className="
                      h-full
                      rounded-full
                      bg-white
                      "
                    />

                  </div>

                  <span
                    className="
                    text-[7px]
                    font-medium
                    text-white

                    sm:text-[8px]
                    "
                  >
                    60%
                  </span>

                </div>

              </div>

            </motion.div>

            {/* MODULE 2 */}
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

              <div className="flex items-center justify-between gap-3">

                <div>

                  <h4
                    className="
                    text-[9px]
                    font-semibold
                    text-black/90

                    sm:text-[10px]
                    "
                  >
                    Return Policy Quiz
                  </h4>

                  <p
                    className="
                    mt-1
                    text-[7px]
                    text-black/40

                    sm:text-[8px]
                    "
                  >
                    Status: Pending
                  </p>

                </div>

                <div
                  className="
                  rounded-full
                  bg-black/[0.06]
                  px-2
                  py-1
                  text-[7px]
                  font-medium
                  text-black/60

                  sm:text-[8px]
                  "
                >
                  Pending
                </div>

              </div>

            </motion.div>

            {/* MODULE 3 */}
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

              <div className="flex items-center justify-between gap-3">

                <div>

                  <h4
                    className="
                    text-[9px]
                    font-semibold
                    text-black/90

                    sm:text-[10px]
                    "
                  >
                    De-escalation Techniques
                  </h4>

                  <p
                    className="
                    mt-1
                    text-[7px]
                    text-black/40

                    sm:text-[8px]
                    "
                  >
                    Status: Completed
                  </p>

                </div>

                <div
                  className="
                  flex
                  items-center
                  gap-1
                  rounded-full
                  border
                  border-emerald-500/20
                  bg-emerald-500/10
                  px-2
                  py-1
                  text-[7px]
                  font-medium
                  text-emerald-600

                  sm:text-[8px]
                  "
                >

                  <BadgeCheck className="h-2.5 w-2.5" />

                  100%

                </div>

              </div>

            </motion.div>

          </div>

          {/* BUTTON */}
          <motion.button
            whileHover={{
              scale: 1.01,
            }}
            whileTap={{
              scale: 0.99,
            }}
            className="
            mt-2
            w-full
            rounded-lg
            bg-[#111116]
            px-4
            py-2.5
            text-[9px]
            font-medium
            text-white
            transition-all
            duration-300
            hover:bg-black

            sm:text-[10px]
            "
          >
            View Full Learning Path
          </motion.button>

        </div>

      </motion.div>

    </RightSlideWrapper>
  );
}