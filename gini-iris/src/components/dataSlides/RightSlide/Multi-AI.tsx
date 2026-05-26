"use client";

import {
  Cpu,
  Check,
} from "lucide-react";

import { motion } from "framer-motion";
import RightSlideWrapper from "./RightSlideWrapper";

const aiProviders = [
  {
    logo: "G",
    name: "Google Gemini",
    desc: "Balanced Performance",
    bg: "bg-black",
    text: "text-white",
  },

  {
    logo: "◧◨",
    name: "OpenAI GPT-4",
    desc: "Complex Reasoning",
    bg: "bg-black",
    text: "text-white",
  },

  {
    logo: "/",
    name: "Anthropic Claude",
    desc: "Creative Writing",
    bg: "bg-black",
    text: "text-white",
  },

  {
    logo: "▮▸",
    name: "NVIDIA",
    desc: "Vision & Speech",
    bg: "bg-lime-500",
    text: "text-white",
  },

  {
    logo: "⬣",
    name: "Mistral AI",
    desc: "Efficient & Open",
    bg: "bg-black",
    text: "text-white",
  },

  {
    logo: "∞",
    name: "Meta Llama",
    desc: "General Purpose",
    bg: "bg-white",
    text: "text-black",
    border: true,
  },

  {
    logo: "⟨",
    name: "Cohere",
    desc: "Enterprise Focus",
    bg: "bg-white",
    text: "text-black",
    border: true,
  },
];

export default function MultiAI() {

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
              <Cpu className="h-5 w-5 text-white/80" />
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
                Multi-AI Provider Support
              </h3>

              <p
                className="
                mt-1
                text-[8px]
                text-white/40

                sm:text-[9px]
                "
              >
                Connect to the best model for every task.
              </p>

            </div>

          </div>

          {/* PROVIDERS */}
          <div
            className="
            mt-3
            grid
            grid-cols-1
            gap-2
            "
          >

            {aiProviders.slice(0, 6).map((item, index) => {

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
                  rounded-lg
                  border
                  border-white/10
                  bg-white/95
                  p-2.5
                  shadow-[0_4px_14px_rgba(0,0,0,0.04)]
                  "
                >

                  <div className="flex items-center justify-between gap-2">

                    {/* LEFT */}
                    <div className="flex items-center gap-2">

                      {/* LOGO */}
                      <motion.div
                        animate={{
                          rotate: [0, 2, -2, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          delay: index * 0.2,
                        }}
                        className={`
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        text-[14px]
                        font-black
                        shadow-sm

                        ${item.bg}
                        ${item.text}

                        ${
                          item.border
                            ? "border border-black/10"
                            : ""
                        }
                        `}
                      >
                        {item.logo}
                      </motion.div>

                      {/* INFO */}
                      <div>

                        <h4
                          className="
                          text-[10px]
                          font-semibold
                          leading-none
                          text-black/90

                          sm:text-[11px]
                          "
                        >
                          {item.name}
                        </h4>

                        <p
                          className="
                          mt-1
                          text-[7px]
                          text-black/40

                          sm:text-[8px]
                          "
                        >
                          {item.desc}
                        </p>

                      </div>

                    </div>

                    {/* STATUS */}
                    <div
                      className="
                      flex
                      shrink-0
                      items-center
                      gap-1
                      rounded-full
                      border
                      border-emerald-400/30
                      bg-emerald-400/[0.08]
                      px-2
                      py-1
                      "
                    >

                      <Check className="h-2.5 w-2.5 text-emerald-500" />

                      <span
                        className="
                        text-[7px]
                        font-medium
                        text-emerald-500

                        sm:text-[8px]
                        "
                      >
                        Live
                      </span>

                    </div>

                  </div>

                  {/* SHINE */}
                  <motion.div
                    animate={{
                      x: ["-120%", "220%"],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                      delay: index * 0.4,
                    }}
                    className="
                    pointer-events-none
                    absolute
                    top-0
                    h-full
                    w-[60px]
                    rotate-[20deg]
                    bg-white/20
                    blur-xl
                    "
                  />

                </motion.div>
              );
            })}

          </div>

      </motion.div>

    </RightSlideWrapper>
  );
}