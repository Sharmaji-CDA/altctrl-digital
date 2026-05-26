"use client";

import { motion } from "framer-motion";

import {
  Code2,
  Rocket,
  Terminal,
  ArrowUpRight,
} from "lucide-react";

/* LIGHTWEIGHT MOTION */
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function ArchitectsBlueprint() {

  return (
    <section className="relative overflow-hidden bg-[#090204] py-14 sm:py-16 lg:py-20">

      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* MAIN RED GLOW */}
        <div
          className="
            absolute
            left-1/2
            top-[30%]
            h-[360px]
            w-[360px]
            -translate-x-1/2
            rounded-full
            bg-red-500/10
            blur-3xl
            animate-pulse
          "
        />

        {/* SECONDARY GLOW */}
        <div
          className="
            absolute
            right-[-5%]
            top-[10%]
            h-[260px]
            w-[260px]
            rounded-full
            bg-rose-500/10
            blur-3xl
            animate-pulse
          "
          style={{
            animationDuration: "6s",
          }}
        />

        {/* SIGNAL GRID */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="h-full w-full bg-[radial-gradient(rgba(239,68,68,0.6)_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>

        {/* WIREFRAME */}
        <svg
          className="absolute inset-0 h-full w-full text-red-500/[0.03]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0"
            y1="20%"
            x2="100%"
            y2="40%"
            stroke="currentColor"
            strokeWidth="1"
          />

          <line
            x1="100%"
            y1="10%"
            x2="0"
            y2="80%"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>

        {/* TOP LIGHT */}
        <div className="absolute inset-x-0 top-0 h-[160px] bg-gradient-to-b from-red-500/[0.03] to-transparent" />
      </div>

      {/* CONTENT */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          staggerChildren: 0.08,
        }}
        className="
          relative
          z-10
          mx-auto
          mt-20
          flex
          max-w-5xl
          flex-col
          items-center
          px-4
          text-center
          sm:px-6
          lg:px-8
        "
      >

        {/* BADGE */}
        <motion.div
          variants={fadeUp}
          transition={{
            duration: 0.45,
          }}
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-red-500/10
            bg-white/[0.04]
            px-4
            py-2
            backdrop-blur-md
          "
        >

          <Code2
            size={11}
            className="text-red-400"
          />

          <span className="text-[9px] tracking-[2px] text-red-200">
            Developer Intelligence v4.0
          </span>
        </motion.div>

        {/* HEADING */}
        <motion.div
          variants={fadeUp}
          transition={{
            duration: 0.5,
          }}
          className="mt-7 max-w-4xl"
        >

          <h1
            className="
              text-[42px]
              font-black
              leading-[1]
              tracking-[-2px]
              sm:text-[56px]
              md:text-[72px]
            "
          >

            <span
              className="
                bg-gradient-to-b
                from-white
                via-slate-100
                to-red-300
                bg-clip-text
                text-transparent
              "
            >
              The Architect's
            </span>

            <br />

            <span
              className="
                bg-gradient-to-r
                from-red-500
                via-rose-400
                to-orange-300
                bg-clip-text
                text-transparent
              "
            >
              Blueprint.
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-[13px]
              leading-[1.9]
              text-slate-400
              sm:text-[15px]
              md:text-[18px]
            "
          >

            Your central hub for in-depth technical documentation,

            <span
              className="
                bg-gradient-to-r
                from-red-400
                to-rose-300
                bg-clip-text
                font-extrabold
                text-transparent
              "
            >
              {" "}API references
            </span>

            , and architectural guides for the platform.
          </p>
        </motion.div>

        {/* BUTTONS */}
        <motion.div
          variants={fadeUp}
          transition={{
            duration: 0.55,
          }}
          className="
            mt-9
            flex
            w-full
            max-w-[420px]
            flex-col
            gap-3
            sm:flex-row
            sm:max-w-none
            sm:justify-center
          "
        >

          {/* PRIMARY BUTTON */}
          <button
            className="
              group
              flex
              h-[50px]
              w-full
              items-center
              justify-center
              gap-2
              rounded-2xl
              border
              border-red-500/20
              bg-gradient-to-r
              from-red-600
              via-rose-500
              to-red-500
              px-5
              text-[12px]
              font-black
              uppercase
              tracking-[1.5px]
              text-white
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:shadow-lg
              sm:w-auto
            "
          >

            <Rocket
              size={13}
              className="
                text-red-100
                transition-transform
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />

            Quickstart
          </button>

          {/* SECONDARY BUTTON */}
          <button
            className="
              group
              flex
              h-[50px]
              w-full
              items-center
              justify-center
              gap-2
              rounded-2xl
              border
              border-white/10
              bg-white/[0.05]
              px-5
              text-[12px]
              font-bold
              uppercase
              tracking-[1.5px]
              text-red-200
              backdrop-blur-md
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:border-red-500/20
              hover:bg-gradient-to-r
              hover:from-red-500/10
              hover:to-rose-500/10
              sm:w-auto
            "
          >

            <Terminal
              size={13}
              className="text-red-300"
            />

            SDK Reference

            <ArrowUpRight
              size={13}
              className="
                opacity-50
                transition-all
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
                group-hover:opacity-100
              "
            />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}