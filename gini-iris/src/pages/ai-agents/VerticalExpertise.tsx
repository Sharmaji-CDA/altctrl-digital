"use client";

import { motion } from "framer-motion";

import {
  Building2,
  TrendingUp,
  CheckCircle2,
  HeartPulse,
  ShieldCheck,
  Building,
  ShoppingCart,
  ArrowRight,
} from "lucide-react";

/* LIGHTWEIGHT MOTION */
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 22,
  },

  visible: {
    opacity: 1,
    y: 0,
  },
};

const verticalAgents = [
  {
    icon: HeartPulse,
    title: "Healthcare Navigator",
    desc: "Automate appointment scheduling and insurance assistance.",
  },

  {
    icon: ShieldCheck,
    title: "Insurance Claims Agent",
    desc: "Accelerate FNOL processing and policy verification.",
  },

  {
    icon: Building,
    title: "Banking Assistant",
    desc: "Instant support for transactions and customer operations.",
  },

  {
    icon: ShoppingCart,
    title: "Retail Concierge",
    desc: "Personalized recommendations and order management.",
  },
];

export default function VerticalExpertise() {

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,#07141a_0%,#050b12_45%,#03060a_100%)] py-10 sm:py-14 lg:px-16 lg:py-20">

      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* MAIN GLOW */}
        <div
          className="
            absolute
            right-[10%]
            top-[10%]
            h-[320px]
            w-[320px]
            rounded-full
            bg-cyan-400/10
            blur-3xl
            animate-pulse
          "
        />

        {/* SECONDARY GLOW */}
        <div
          className="
            absolute
            bottom-[0%]
            left-[5%]
            h-[260px]
            w-[260px]
            rounded-full
            bg-teal-400/10
            blur-3xl
            animate-pulse
          "
          style={{
            animationDuration: "7s",
          }}
        />

        {/* GRID */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="h-full w-full bg-[linear-gradient(rgba(34,211,238,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.08)_1px,transparent_1px)] bg-[size:34px_34px]" />
        </div>

        {/* TOP LIGHT */}
        <div className="absolute inset-x-0 top-0 h-[160px] bg-gradient-to-b from-cyan-400/[0.03] to-transparent" />
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
        className="relative z-10 mx-auto max-w-[1320px] px-4 sm:px-5 lg:px-6"
      >

        {/* HEADER */}
        <div className="mb-7 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">

          <motion.div
            variants={fadeUp}
            transition={{
              duration: 0.45,
            }}
          >

            {/* BADGE */}
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-cyan-400/10
                bg-cyan-400/[0.04]
                px-4
                py-2
                backdrop-blur-md
              "
            >

              <Building2
                size={12}
                className="text-cyan-300"
              />

              <span className="text-[9px] font-bold uppercase tracking-[2px] text-cyan-200">
                Agent Layer 03
              </span>
            </div>

            {/* TITLE */}
            <h1
              className="
                mt-4
                bg-gradient-to-r
                from-white
                via-cyan-100
                to-cyan-300
                bg-clip-text
                text-[34px]
                font-black
                tracking-[-2px]
                text-transparent
                sm:text-[44px]
                lg:text-[54px]
              "
            >
              Vertical Expertise
            </h1>

            {/* DESCRIPTION */}
            <p
              className="
                mt-3
                max-w-xl
                text-[14px]
                leading-[1.8]
                text-slate-400
                sm:text-[15px]
              "
            >
              Domain-specific intelligence tailored for specialized industries.
            </p>
          </motion.div>

          {/* LINE */}
          <motion.div
            variants={fadeUp}
            transition={{
              duration: 0.45,
            }}
            className="
              hidden
              h-[1px]
              flex-1
              bg-gradient-to-r
              from-cyan-400/20
              via-teal-400/10
              to-transparent
              lg:block
            "
          />
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">

          {/* OUTCOME */}
          <motion.div
            variants={fadeUp}
            transition={{
              duration: 0.45,
            }}
            className="
              group
              relative
              flex
              flex-col
              justify-between
              overflow-hidden
              rounded-[24px]
              border
              border-white/10
              bg-white/[0.04]
              p-5
              backdrop-blur-md
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-cyan-400/20
            "
          >

            {/* HOVER LIGHT */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative z-10 flex h-full flex-col">

              {/* ICON */}
              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-cyan-400/10
                  bg-cyan-400/10
                  transition-transform
                  duration-300
                  group-hover:scale-105
                "
              >

                <CheckCircle2
                  size={18}
                  className="text-cyan-300"
                />
              </div>

              <h2 className="mt-5 text-[18px] font-black text-white">
                Outcome
              </h2>

              <p
                className="
                  mt-3
                  flex-1
                  text-[13px]
                  leading-[1.8]
                  text-slate-400
                "
              >
                Bespoke automation for specialized sectors with zero learning curve.
              </p>

              {/* TAGS */}
              <div className="mt-6 flex flex-wrap gap-2">

                <span
                  className="
                    rounded-lg
                    border
                    border-cyan-400/10
                    bg-cyan-400/10
                    px-3
                    py-1
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[1.5px]
                    text-cyan-200
                  "
                >
                  Pre-trained Logic
                </span>

                <span
                  className="
                    rounded-lg
                    border
                    border-white/10
                    bg-white/[0.04]
                    px-3
                    py-1
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[1.5px]
                    text-slate-300
                  "
                >
                  Instant Calibration
                </span>
              </div>
            </div>
          </motion.div>

          {/* ROI STRATEGY */}
          <motion.div
            variants={fadeUp}
            transition={{
              duration: 0.5,
            }}
            className="
              group
              relative
              flex
              flex-col
              justify-between
              overflow-hidden
              rounded-[24px]
              border
              border-cyan-400/10
              bg-gradient-to-b
              from-[#08141c]
              to-[#04070c]
              p-5
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-cyan-400/20
            "
          >

            {/* HOVER GLOW */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.10),transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative z-10 flex h-full flex-col">

              <div className="flex-1">

                {/* ICON */}
                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-cyan-400/10
                    bg-cyan-400/10
                    transition-transform
                    duration-300
                    group-hover:scale-105
                  "
                >

                  <TrendingUp
                    size={18}
                    className="text-cyan-300"
                  />
                </div>

                <h2 className="mt-5 text-[18px] font-black text-white">
                  ROI Strategy
                </h2>

                <p
                  className="
                    mt-3
                    text-[13px]
                    leading-[1.8]
                    text-slate-300
                  "
                >
                  Leverage pre-trained domain logic to accelerate time-to-value.
                </p>
              </div>

              {/* BUTTON */}
              <button
                className="
                  group/button
                  mt-6
                  flex
                  h-[48px]
                  items-center
                  justify-center
                  gap-2
                  rounded-2xl
                  border
                  border-cyan-400/10
                  bg-gradient-to-r
                  from-cyan-500
                  to-teal-500
                  px-4
                  text-[12px]
                  font-bold
                  uppercase
                  tracking-[1.2px]
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:shadow-lg
                "
              >

                Explore Industry Models

                <ArrowRight
                  size={14}
                  className="
                    transition-transform
                    duration-300
                    group-hover/button:translate-x-1
                  "
                />
              </button>
            </div>
          </motion.div>

          {/* FEATURE STACK */}
          <motion.div
            variants={fadeUp}
            transition={{
              duration: 0.5,
            }}
            className="flex flex-col gap-3"
          >

            {verticalAgents.map((item, index) => {

              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  transition={{
                    delay: index * 0.04,
                    duration: 0.35,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[20px]
                    border
                    border-white/10
                    bg-white/[0.04]
                    p-3
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:translate-x-1
                    hover:border-cyan-400/20
                    hover:bg-cyan-400/[0.04]
                  "
                >

                  {/* LIGHT */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/[0.03] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative z-10 flex items-start gap-3">

                    {/* ICON */}
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-cyan-400/10
                        bg-cyan-400/10
                        transition-transform
                        duration-300
                        group-hover:scale-105
                      "
                    >

                      <Icon
                        size={14}
                        className="text-cyan-300"
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="min-w-0">

                      <h3
                        className="
                          text-[11px]
                          font-black
                          uppercase
                          tracking-[1.5px]
                          text-white
                        "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                          mt-1
                          text-[11px]
                          leading-[1.6]
                          text-slate-400
                        "
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}