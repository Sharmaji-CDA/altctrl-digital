"use client";

import {
  Layers3,
  Monitor,
  Code2,
  Server,
  Database,
  PlugZap,
  TrendingUp,
  Wrench,
  ShieldCheck,
} from "lucide-react";

import { motion } from "framer-motion";
import RightSlideWrapper from "./RightSlideWrapper";

const layers = [
  {
    icon: Monitor,
    title: "Presentation Layer",
    desc:
      "Next.js and React power fast, component-driven UI rendering.",
  },

  {
    icon: Code2,
    title: "Application Layer",
    desc:
      "Handles business logic, server actions, and application state.",
  },

  {
    icon: Server,
    title: "Service Layer",
    desc:
      "Authentication, APIs, and backend services managed securely.",
  },

  {
    icon: Database,
    title: "Data Layer",
    desc:
      "Reliable Firestore persistence with scalable data retrieval.",
  },

  {
    icon: PlugZap,
    title: "Integration Layer",
    desc:
      "Third-party APIs and external services connected seamlessly.",
  },
];

const advantages = [
  {
    icon: TrendingUp,
    label: "Scalable",
  },

  {
    icon: Wrench,
    label: "Maintainable",
  },

  {
    icon: ShieldCheck,
    label: "Secure",
  },
];

export default function Architecture() {

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
              <Layers3 className="h-2.5 w-2.5 text-white/80" />
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
                Multi-Layer Architecture
              </h3>

              <p
                className="
                mt-1
                text-[8px]
                text-white/40

                sm:text-[9px]
                "
              >
                Scalable, secure, and modular by design.
              </p>

            </div>

          </div>

          {/* STACK */}
          <div
            className="
            mt-3
            space-y-1.5
            "
          >

            {layers.map((item, index) => {

              const Icon = item.icon;

              return (

                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.05,
                  }}
                  whileHover={{
                    y: -2,
                  }}
                  className="
                  relative
                  overflow-hidden
                  rounded-lg
                  border
                  border-white/10
                  bg-white/95
                  p-2.5
                  shadow-[0_4px_14px_rgba(0,0,0,0.04)]
                  "
                >

                  {/* GLOW */}
                  <motion.div
                    animate={{
                      opacity: [0.04, 0.08, 0.04],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                    className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-black/[0.02]
                    to-transparent
                    "
                  />

                  <div
                    className="
                    relative
                    z-10
                    flex
                    items-start
                    gap-2
                    "
                  >

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
                      <Icon className="h-4 w-4 text-black/75" />
                    </div>

                    {/* CONTENT */}
                    <div>

                      <h4
                        className="
                        text-[10px]
                        font-semibold
                        text-black/90

                        sm:text-[11px]
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

          {/* DIVIDER */}
          <div className="mt-3 h-px w-full bg-white/10" />

          {/* ADVANTAGES */}
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.3,
            }}
            className="mt-3"
          >

            <p
              className="
              text-center
              text-[8px]
              font-medium
              uppercase
              tracking-[2px]
              text-white/35

              sm:text-[9px]
              "
            >
              Advantages
            </p>

            {/* GRID */}
            <div
              className="
              mt-2
              grid
              grid-cols-3
              gap-2
              "
            >

              {advantages.map((item, index) => {

                const Icon = item.icon;

                return (

                  <motion.div
                    key={index}
                    whileHover={{
                      y: -2,
                    }}
                    className="
                    flex
                    flex-col
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-white/10
                    bg-white/95
                    p-2.5
                    text-center
                    shadow-[0_4px_14px_rgba(0,0,0,0.04)]
                    "
                  >

                    <Icon className="h-4 w-4 text-black/75" />

                    <span
                      className="
                      mt-1.5
                      text-[7px]
                      font-medium
                      text-black/75

                      sm:text-[8px]
                      "
                    >
                      {item.label}
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