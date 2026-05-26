"use client";

import { motion } from "framer-motion";

import {
  HeartPulse,
  Building2,
  ShieldCheck,
  ShoppingCart,
  Globe2,
  Zap,
  Film,
  CarFront,
  Building,
  Gavel,
} from "lucide-react";

const industries = [
  { icon: HeartPulse, name: "Healthcare" },
  { icon: Building2, name: "Banking" },
  { icon: ShieldCheck, name: "Insurance" },
  { icon: ShoppingCart, name: "Retail" },
  { icon: Globe2, name: "Telecom" },
  { icon: Zap, name: "Utilities" },
  { icon: Film, name: "Media" },
  { icon: CarFront, name: "Automotive" },
  { icon: Building, name: "Real Estate" },
  { icon: Gavel, name: "Government" },
];

/* LIGHTWEIGHT MOTION */
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function IndustrySpecialized() {

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-gradient-to-b
        from-[#0f172a]
        via-[#111827]
        to-[#1e293b]
        px-4
        py-10
        text-slate-100
        sm:px-6
        sm:py-14
        lg:px-16
        lg:py-20
      "
    >

      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* MAIN GLOW */}
        <div
          className="
            absolute
            left-[25%]
            top-[15%]
            h-[340px]
            w-[340px]
            rounded-full
            bg-slate-400/10
            blur-3xl
            animate-pulse
          "
        />

        {/* SECONDARY GLOW */}
        <div
          className="
            absolute
            bottom-[5%]
            left-[5%]
            h-[260px]
            w-[260px]
            rounded-full
            bg-blue-400/10
            blur-3xl
            animate-pulse
          "
          style={{
            animationDuration: "7s",
          }}
        />

        {/* GRID */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="h-full w-full bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:16px_16px]" />
        </div>

        {/* TOP LIGHT */}
        <div className="absolute inset-x-0 top-0 h-[140px] bg-gradient-to-b from-slate-300/[0.03] to-transparent" />
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
          staggerChildren: 0.06,
        }}
        className="
          relative
          z-10
          mx-auto
          flex
          max-w-7xl
          flex-col
          items-center
          justify-center
        "
      >

        {/* HEADER */}
        <div className="mb-8 text-center sm:mb-12">

          <motion.h1
            variants={fadeUp}
            transition={{
              duration: 0.5,
            }}
            className="
              bg-gradient-to-r
              from-white
              via-slate-100
              to-slate-300
              bg-clip-text
              text-[38px]
              font-black
              tracking-tight
              text-transparent
              sm:text-[52px]
            "
          >
            Industry Specialized.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{
              duration: 0.5,
              delay: 0.05,
            }}
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-[13px]
              leading-[1.8]
              text-slate-400
              sm:text-[15px]
            "
          >
            Pre-configured autonomous logic, compliance guardrails, and channel
            strategies for your specific vertical.
          </motion.p>
        </div>

        {/* GRID */}
        <div
          className="
            grid
            w-full
            grid-cols-2
            gap-3
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-5
          "
        >

          {industries.map((item, index) => {

            const Icon = item.icon;

            return (
              <motion.div
                key={item.name}
                variants={fadeUp}
                transition={{
                  delay: index * 0.03,
                  duration: 0.35,
                }}
                className="
                  group
                  relative
                  flex
                  aspect-[4/3]
                  flex-col
                  mx-auto
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-[26px]
                  border
                  border-slate-800/80
                  bg-slate-900/40
                  p-4
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-slate-600/40
                  hover:bg-slate-800/40
                  sm:aspect-square
                  sm:p-6
                  lg:max-h-[115px]
                "
              >

                {/* HOVER LIGHT */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-b
                    from-slate-300/[0.04]
                    to-transparent
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                />

                {/* ICON */}
                <div
                  className="
                    relative
                    z-10
                    flex
                    h-11
                    w-11
                    p-3
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-slate-700
                    bg-slate-950
                    text-slate-300
                    transition-all
                    duration-300
                    group-hover:scale-105
                    group-hover:border-slate-500/30
                    group-hover:bg-slate-800/60
                    group-hover:text-white
                  "
                >

                  <Icon
                    size={20}
                    strokeWidth={1.75}
                  />
                </div>

                {/* TITLE */}
                <span
                  className="
                    relative
                    z-10
                    mt-3
                    text-center
                    text-[10px]
                    font-black
                    uppercase
                    tracking-[1.5px]
                    text-slate-400
                    transition-colors
                    duration-300
                    group-hover:text-slate-200
                  "
                >
                  {item.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}