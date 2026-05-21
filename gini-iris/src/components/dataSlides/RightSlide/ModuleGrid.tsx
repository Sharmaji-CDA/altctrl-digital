"use client";

import {
  Sparkles,
} from "lucide-react";

import { motion } from "framer-motion";

import RightSlideWrapper from "./RightSlideWrapper";

const modules = [
  {
    icon: "https://cdn.lordicon.com/jdgfsfzr.json",
    title: "Interactions",
    desc: "Unify all customer conversations.",
  },

  {
    icon: "https://cdn.lordicon.com/abfverha.json",
    title: "Quality",
    desc: "Automate QA across interactions.",
  },

  {
    icon: "https://cdn.lordicon.com/wjyqkiew.json",
    title: "Sentiments",
    desc: "Understand customer emotions.",
  },

  {
    icon: "https://cdn.lordicon.com/ehfubvwr.json",
    title: "Supervisor",
    desc: "Monitor teams in real time.",
  },

  {
    icon: "https://cdn.lordicon.com/slkvcfos.json",
    title: "Backoffice",
    desc: "Automate backend workflows.",
  },

  {
    icon: "https://cdn.lordicon.com/qvyppzqz.json",
    title: "Knowledge",
    desc: "Centralized knowledge hub.",
  },

  {
    icon: "https://cdn.lordicon.com/oqdmuxru.json",
    title: "Training",
    desc: "Improve targeted agent skills.",
  },

  {
    icon: "https://cdn.lordicon.com/kbtmbyzy.json",
    title: "WFM",
    desc: "Optimize workforce planning.",
  },

  {
    icon: "https://cdn.lordicon.com/iltqorsz.json",
    title: "Surveys",
    desc: "Capture customer feedback.",
  },

  {
    icon: "https://cdn.lordicon.com/ujxzdfjx.json",
    title: "Analytics",
    desc: "Generate actionable insights.",
  },

  {
    icon: "https://cdn.lordicon.com/dxjqoygy.json",
    title: "AI Tools",
    desc: "Use enterprise AI workflows.",
  },

  {
    icon: "https://cdn.lordicon.com/osuxyevn.json",
    title: "Integrations",
    desc: "Connect existing ecosystems.",
  },
];

export default function ModuleGrid() {

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
              <Sparkles className="h-2.5 w-2.5 text-white/80" />
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
                Platform Modules
              </h3>

              <p
                className="
                mt-1
                text-[8px]
                text-white/40

                sm:text-[9px]
                "
              >
                Unified enterprise CX ecosystem.
              </p>

            </div>

          </div>

          {/* GRID */}
          <div
            className="
            mt-3
            grid
            grid-cols-2
            gap-2

            sm:grid-cols-3
            "
          >

            {modules.map((item, index) => {

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
                    duration: 0.3,
                    delay: index * 0.02,
                  }}
                  whileHover={{
                    y: -2,
                  }}
                  className="
                  group
                  relative
                  overflow-hidden
                  rounded-lg
                  border
                  border-white/10
                  bg-white/[0.05]
                  p-2.5
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:bg-white/[0.08]
                  "
                >

                  {/* GLOW */}
                  <div
                    className="
                    absolute
                    inset-0
                    opacity-0
                    transition-opacity
                    duration-300

                    group-hover:opacity-100
                    "
                  >

                    <div
                      className="
                      absolute
                      inset-0
                      rounded-lg
                      bg-gradient-to-br
                      from-cyan-400/10
                      via-blue-500/5
                      to-purple-500/10
                      "
                    />

                  </div>

                  <div className="relative z-10">

                    {/* ICON */}
                    <div
                      className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-cyan-400/20
                      bg-gradient-to-br
                      from-cyan-500/10
                      to-blue-500/10
                      "
                    >

                      <lord-icon
                        src={item.icon}
                        trigger="loop"
                        delay="2000"
                        colors="primary:#ffffff,secondary:#a1a1aa"
                        style={{
                          width: "18px",
                          height: "18px",
                        }}
                      >
                      </lord-icon>

                    </div>

                    {/* TITLE */}
                    <h4
                      className="
                      mt-2
                      text-[9px]
                      font-medium
                      leading-tight
                      text-white/90

                      sm:text-[10px]
                      "
                    >
                      {item.title}
                    </h4>

                    {/* DESC */}
                    <p
                      className="
                      mt-1
                      text-[7px]
                      leading-4
                      text-white/45

                      sm:text-[8px]
                      "
                    >
                      {item.desc}
                    </p>

                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>

      </motion.div>

    </RightSlideWrapper>
  );
}