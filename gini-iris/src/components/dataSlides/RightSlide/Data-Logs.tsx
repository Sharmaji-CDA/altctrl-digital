"use client";

import {
  Database,
  Info,
  TriangleAlert,
  CircleX,
} from "lucide-react";

import { motion } from "framer-motion";
import RightSlideWrapper from "./RightSlideWrapper";

const stats = [
  {
    icon: Info,
    label: "INFO",
    value: "1.2k",
    color: "text-slate-500",
  },

  {
    icon: TriangleAlert,
    label: "WARN",
    value: "82",
    color: "text-amber-500",
  },

  {
    icon: CircleX,
    label: "ERROR",
    value: "14",
    color: "text-red-500",
  },
];

const logs = [
  {
    type: "INFO",
    color: "text-emerald-500",
    text:
      "[10:00:01Z] Call initiated from +1-555-123-4567",
  },

  {
    type: "DEBUG",
    color: "text-blue-500",
    text:
      "[10:00:02Z] IVR Path: MainMenu -> Billing",
  },

  {
    type: "INFO",
    color: "text-emerald-500",
    text:
      "[10:00:05Z] Agent 'JaneDoe' answered call",
  },

  {
    type: "WARN",
    color: "text-amber-500",
    text:
      "[10:02:30Z] High customer sentiment detected: 85%",
  },

  {
    type: "ERROR",
    color: "text-red-500",
    text:
      "[10:04:12Z] Failed payment history fetch",
  },

  {
    type: "INFO",
    color: "text-emerald-500",
    text:
      "[10:05:15Z] Call ended. Outcome resolved",
  },
];

export default function DataLogs() {

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
              <Database className="h-5 w-5 text-white/80" />
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
                Data & Logs
              </h3>

              <p
                className="
                mt-1
                font-mono
                text-[8px]
                text-white/40

                sm:text-[9px]
                "
              >
                Raw interaction and system traces.
              </p>

            </div>

          </div>

          {/* STATS */}
          <div
            className="
            mt-3
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
                  p-2
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

                    <Icon
                      className={`h-2.5 w-2.5 ${item.color}`}
                    />

                    <p
                      className="
                      text-[7px]
                      font-medium
                      tracking-wide
                      text-black/45

                      sm:text-[8px]
                      "
                    >
                      {item.label}
                    </p>

                  </div>

                  <h2
                    className="
                    mt-1
                    text-[18px]
                    font-black
                    leading-none
                    text-black/90

                    sm:text-[22px]
                    "
                  >
                    {item.value}
                  </h2>

                </motion.div>
              );
            })}

          </div>

          {/* TERMINAL */}
          <motion.div
            whileHover={{
              y: -2,
            }}
            className="
            mt-2
            overflow-hidden
            rounded-lg
            border
            border-white/10
            bg-white/95
            shadow-[0_4px_14px_rgba(0,0,0,0.04)]
            "
          >

            {/* TOP BAR */}
            <div
              className="
              border-b
              border-black/10
              bg-black/[0.03]
              px-2.5
              py-2
              "
            >

              <p
                className="
                font-mono
                text-[7px]
                font-medium
                text-black/50

                sm:text-[8px]
                "
              >
                [INTERACTION_LOG] TRACE_ID: fa85b41
              </p>

            </div>

            {/* LOGS */}
            <div
              className="
              min-h-[250px]
              space-y-2
              p-2.5
              font-mono
              "
            >

              {logs.map((log, index) => {

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
                      duration: 0.35,
                      delay: index * 0.08,
                    }}
                    className="
                    flex
                    items-start
                    gap-2
                    text-[7px]
                    leading-3

                    sm:text-[8px]
                    sm:leading-4
                    "
                  >

                    <span
                      className={`
                      min-w-fit
                      font-bold
                      ${log.color}
                      `}
                    >
                      [{log.type}]
                    </span>

                    <span className="text-black/80">
                      {log.text}
                    </span>

                  </motion.div>
                );
              })}

            </div>

          </motion.div>

        </div>

      </motion.div>

    </RightSlideWrapper>
  );
}