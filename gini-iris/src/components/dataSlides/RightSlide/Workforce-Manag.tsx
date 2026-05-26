"use client";

import {
  CalendarDays,
  Percent,
  Clock3,
  Users,
  TrendingUp,
} from "lucide-react";

import { motion } from "framer-motion";
import RightSlideWrapper from "./RightSlideWrapper";

const graphPoints = [
  { day: "Tue" },
  { day: "Wed" },
  { day: "Thu" },
  { day: "Fri" },
  { day: "Sat" },
  { day: "Sun" },
];

export default function WorkforceManag() {

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
              <CalendarDays className="h-5 w-5 text-white/80" />
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
                WFM Dashboard
              </h3>

              <p
                className="
                mt-1
                text-[8px]
                text-white/40

                sm:text-[9px]
                "
              >
                Forecasting and scheduling insights.
              </p>

            </div>

          </div>

          {/* TOP STATS */}
          <div
            className="
            mt-3
            grid
            grid-cols-2
            gap-2
            "
          >

            {/* SERVICE LEVEL */}
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

              <div className="flex items-center gap-1.5 text-black/45">

                <Percent className="h-3 w-3" />

                <p
                  className="
                  text-[8px]
                  sm:text-[9px]
                  "
                >
                  Service Level
                </p>

              </div>

              <h2
                className="
                mt-1
                text-[22px]
                font-black
                leading-none
                text-emerald-500

                sm:text-[28px]
                "
              >
                92.5%
              </h2>

            </motion.div>

            {/* HANDLE TIME */}
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

              <div className="flex items-center gap-1.5 text-black/45">

                <Clock3 className="h-3 w-3" />

                <p
                  className="
                  text-[8px]

                  sm:text-[9px]
                  "
                >
                  Avg Handle Time
                </p>

              </div>

              <h2
                className="
                mt-1
                text-[22px]
                font-black
                leading-none
                text-black/90

                sm:text-[28px]
                "
              >
                4:18
              </h2>

            </motion.div>

          </div>

          {/* KPI GRAPH */}
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
              text-[9px]
              font-medium
              text-black/90

              sm:text-[10px]
              "
            >
              Weekly KPI Trend
            </h4>

            {/* GRAPH AREA */}
            <div
              className="
              relative
              mt-2
              h-[90px]
              overflow-hidden
              "
            >

              {/* GRID */}
              <div className="absolute inset-0">

                <div className="absolute top-[20%] h-px w-full border-t border-dashed border-black/10" />

                <div className="absolute top-[50%] h-px w-full border-t border-dashed border-black/10" />

                <div className="absolute top-[80%] h-px w-full border-t border-dashed border-black/10" />

              </div>

              {/* GRAPH */}
              <svg
                viewBox="0 0 600 180"
                className="absolute inset-0 h-full w-full"
              >

                {/* LIGHT LINE */}
                <motion.path
                  initial={{
                    pathLength: 0,
                  }}
                  animate={{
                    pathLength: 1,
                  }}
                  transition={{
                    duration: 1.5,
                  }}
                  d="
                  M0 40
                  C80 42, 120 70, 200 74
                  C280 78, 320 60, 400 86
                  C480 112, 520 102, 600 96
                  "
                  fill="none"
                  stroke="rgba(0,0,0,0.25)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />

                {/* DARK LINE */}
                <motion.path
                  initial={{
                    pathLength: 0,
                  }}
                  animate={{
                    pathLength: 1,
                  }}
                  transition={{
                    duration: 1.5,
                    delay: 0.2,
                  }}
                  d="
                  M0 120
                  C80 110, 120 98, 200 90
                  C280 82, 320 104, 400 72
                  C480 52, 520 58, 600 66
                  "
                  fill="none"
                  stroke="rgba(0,0,0,0.85)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />

              </svg>

              {/* LABELS */}
              <div
                className="
                absolute
                bottom-0
                left-0
                flex
                w-full
                justify-between
                px-1
                "
              >

                {graphPoints.map((item, index) => {

                  return (

                    <span
                      key={index}
                      className="
                      text-[7px]
                      text-black/40

                      sm:text-[8px]
                      "
                    >
                      {item.day}
                    </span>
                  );
                })}

              </div>

            </div>

          </motion.div>

          {/* STAFFING */}
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
              text-center
              text-[10px]
              font-medium
              text-black/90

              sm:text-[11px]
              "
            >
              Today's Staffing
            </h4>

            <div
              className="
              mt-3
              grid
              grid-cols-3
              gap-2
              "
            >

              {/* FORECAST */}
              <div className="text-center">

                <p
                  className="
                  text-[7px]
                  text-black/35

                  sm:text-[8px]
                  "
                >
                  Forecast
                </p>

                <div
                  className="
                  mt-1
                  flex
                  items-center
                  justify-center
                  gap-1
                  "
                >

                  <Users className="h-3 w-3 text-black/70" />

                  <span
                    className="
                    text-[16px]
                    font-black
                    leading-none
                    text-black/90

                    sm:text-[18px]
                    "
                  >
                    48
                  </span>

                </div>

              </div>

              {/* SCHEDULED */}
              <div className="text-center">

                <p
                  className="
                  text-[7px]
                  text-black/35

                  sm:text-[8px]
                  "
                >
                  Scheduled
                </p>

                <div
                  className="
                  mt-1
                  flex
                  items-center
                  justify-center
                  gap-1
                  "
                >

                  <Users className="h-3 w-3 text-black/70" />

                  <span
                    className="
                    text-[16px]
                    font-black
                    leading-none
                    text-black/90

                    sm:text-[18px]
                    "
                  >
                    45
                  </span>

                </div>

              </div>

              {/* VARIANCE */}
              <div className="text-center">

                <p
                  className="
                  text-[7px]
                  text-black/35

                  sm:text-[8px]
                  "
                >
                  Variance
                </p>

                <div
                  className="
                  mt-1
                  flex
                  items-center
                  justify-center
                  "
                >

                  <span
                    className="
                    text-[16px]
                    font-black
                    leading-none
                    text-red-500

                    sm:text-[18px]
                    "
                  >
                    -3
                  </span>

                </div>

              </div>

            </div>

          </motion.div>

          {/* AI INSIGHT */}
          <motion.div
            whileHover={{
              y: -2,
            }}
            className="
            mt-2
            rounded-lg
            border
            border-red-400/60
            bg-red-400/[0.4]
            p-2.5
            "
          >

            <div className="flex items-start gap-2">

              <TrendingUp className="mt-0.5 h-3 w-3 text-orange-200" />

              <div>

                <h4
                  className="
                  text-[9px]
                  font-medium
                  text-orange-200
                  sm:text-[10px]
                  "
                >
                  AI Insight
                </h4>

                <p
                  className="
                  mt-1
                  text-[7px]
                  leading-3
                  text-orange-200
                  sm:text-[8px]
                  sm:leading-4
                  "
                >
                  High call volume expected between 2 PM
                  and 4 PM. Currently understaffed by 3
                  agents.
                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </motion.div>

    </RightSlideWrapper>
  );
}