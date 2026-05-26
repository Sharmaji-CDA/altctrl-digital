"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function DeveloperCTA() {

  return (
    <section className="relative overflow-hidden bg-[#05060b] px-4 sm:px-8 lg:px-16 py-16 sm:py-20">

      {/* GLOBAL BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">

        {/* TOP LAVENDER */}
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.14, 0.22, 0.14],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-1/2
            top-[15%]
            h-[320px]
            w-[320px]
            -translate-x-1/2
            rounded-full
            bg-[#8b5cf6]/20
            blur-[140px]
          "
        />

        {/* ROSE AMBIENT */}
        <div
          className="
            absolute
            left-[10%]
            top-[20%]
            h-[220px]
            w-[220px]
            rounded-full
            bg-[#ec4899]/10
            blur-[120px]
          "
        />

        {/* GRID */}
        <div className="absolute inset-0 opacity-[0.025]">
          <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:42px_42px]" />
        </div>
      </div>

      {/* MAIN WRAPPER */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* GLASS PANEL */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            relative
            overflow-hidden
            rounded-[34px]
            border
            border-white/10
            bg-[linear-gradient(180deg,rgba(20,18,35,0.92)_0%,rgba(10,11,18,0.96)_100%)]
            px-6
            py-12
            shadow-[0_0_80px_rgba(139,92,246,0.08)]
            backdrop-blur-3xl
            sm:px-10
            sm:py-14
          "
        >

          {/* PANEL GLOW */}
          <div
            className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.14),transparent_55%)]
            "
          />

          {/* PANEL BORDER LIGHT */}
          <div
            className="
              absolute
              inset-x-0
              top-0
              h-[1px]
              bg-gradient-to-r
              from-transparent
              via-[#a78bfa]/40
              to-transparent
            "
          />

          {/* CONTENT */}
          <div className="relative z-10 flex flex-col items-center text-center">

            {/* BADGE */}
            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.1,
                duration: 0.5,
              }}
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#8b5cf6]/10
                bg-[#8b5cf6]/[0.05]
                px-4
                py-2
                backdrop-blur-2xl
              "
            >

              <Sparkles
                size={11}
                className="text-[#c4b5fd]"
              />

              <span className="text-[8px] font-medium uppercase tracking-[2px] text-[#ddd6fe]">
                Developer Ecosystem
              </span>
            </motion.div>

            {/* HEADING */}
            <motion.h2
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.2,
                duration: 0.7,
              }}
              className="
                mt-6
                max-w-3xl
                text-[42px]
                font-black
                leading-[0.92]
                tracking-[-2px]
                text-white
                sm:text-[56px]
                md:text-[68px]
              "
            >
              Ready to Build?
            </motion.h2>

            {/* DESCRIPTION */}
            <motion.p
              initial={{
                opacity: 0,
                y: 16,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.3,
                duration: 0.7,
              }}
              className="
                mt-5
                max-w-2xl
                text-[15px]
                leading-[1.8]
                text-slate-300
                sm:text-[18px]
                md:text-[20px]
              "
            >

              Join the community of developers scaling autonomous
              workflows with the{" "}

              <span className="bg-gradient-to-r from-[#ddd6fe] via-[#a78bfa] to-[#8b5cf6] bg-clip-text font-semibold text-transparent">
                AltCtrl Framework.
              </span>
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{
                opacity: 0,
                y: 16,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.4,
                duration: 0.7,
              }}
              className="
                mt-9
                flex
                w-full
                max-w-[560px]
                flex-col
                gap-3
                sm:flex-row
              "
            >

              {/* PRIMARY */}
              <motion.button
                whileHover={{
                  scale: 1.02,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  group
                  flex
                  h-[54px]
                  flex-1
                  items-center
                  justify-center
                  gap-2
                  rounded-2xl
                  border
                  border-[#8b5cf6]/20
                  bg-gradient-to-r
                  from-[#7c3aed]
                  via-[#8b5cf6]
                  to-[#9333ea]
                  px-5
                  text-[14px]
                  font-semibold
                  text-white
                  shadow-[0_0_40px_rgba(139,92,246,0.24)]
                  transition-all
                  duration-300
                "
              >

                Join Developer Program

                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.button>

              {/* SECONDARY */}
              <motion.button
                whileHover={{
                  scale: 1.02,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  h-[54px]
                  flex-1
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  px-5
                  text-[14px]
                  font-semibold
                  text-[#ddd6fe]
                  backdrop-blur-2xl
                  transition-all
                  duration-300
                  hover:border-[#8b5cf6]/20
                  hover:bg-[#8b5cf6]/10
                "
              >
                Explore Capabilities
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}