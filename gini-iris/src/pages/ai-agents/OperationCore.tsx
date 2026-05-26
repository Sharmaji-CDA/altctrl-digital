"use client";

import { motion } from "framer-motion";
import {
  Boxes,
  TrendingUp,
  CheckCircle2,
  MessageSquare,
  ShoppingCart,
  ShieldCheck,
  BarChart3,
  ArrowRight,
} from "lucide-react";

const operationAgents = [
  {
    icon: MessageSquare,
    title: "Customer Service Agent",
    desc: "Automate customer support and repetitive responses.",
  },

  {
    icon: ShoppingCart,
    title: "Sales Assistant Agent",
    desc: "Qualify leads and streamline sales workflows.",
  },

  {
    icon: ShieldCheck,
    title: "Compliance Auditor",
    desc: "Monitor operational safety and audit adherence.",
  },

  {
    icon: BarChart3,
    title: "Data Analyst Agent",
    desc: "Generate reports and operational intelligence.",
  },
];

export default function OperationsCore() {

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#22040a] via-[#09070a] to-[#120105] py-8 sm:py-10 lg:py-20 lg:px-16">

      {/* ATMOSPHERE */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* ROSE GLOW */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.12, 0.18, 0.12],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[-10%]
            top-[-5%]
            h-[340px]
            w-[340px]
            rounded-full
            bg-rose-500/10
            blur-[130px]
          "
        />

        {/* SECONDARY LIGHT */}
        <motion.div
          animate={{
            y: [0, 35, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-[-10%]
            bottom-[-10%]
            h-[320px]
            w-[320px]
            rounded-full
            bg-pink-500/10
            blur-[130px]
          "
        />

        {/* GRID */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="h-full w-full bg-[radial-gradient(#f43f5e_1px,transparent_1px)] [background-size:18px_18px]" />
        </div>
      </div>

      {/* MAIN */}
      <div className="relative z-10 mx-auto max-w-[1320px] px-4 sm:px-5 lg:px-6">

        {/* HEADER */}
        <div className="mb-5 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">

          <div>

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
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-rose-500/10
                bg-rose-500/[0.05]
                px-3
                py-1.5
                backdrop-blur-2xl
              "
            >

              <Boxes
                size={11}
                className="text-rose-400 animate-pulse"
              />

              <span className="text-[8px] font-bold uppercase tracking-[2px] text-rose-300">
                Agent Layer 01
              </span>
            </motion.div>

            {/* TITLE */}
            <motion.h1
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
              className="
                mt-3
                bg-gradient-to-r
                from-white
                via-rose-100
                to-rose-300
                bg-clip-text
                text-[30px]
                font-black
                leading-[0.95]
                tracking-[-2px]
                text-transparent
                sm:text-[40px]
                lg:text-[52px]
              "
            >
              Operations Core
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.1,
              }}
              className="
                mt-3
                max-w-2xl
                text-[13px]
                leading-[1.7]
                text-slate-400
                sm:text-[14px]
              "
            >
              The frontline of autonomous business interaction and support.
            </motion.p>
          </div>

          {/* HEADER LINE */}
          <div className="hidden h-[1px] flex-1 bg-gradient-to-r from-rose-500/20 via-slate-700/10 to-transparent lg:block" />
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">

          {/* OUTCOME */}
          <motion.div
            whileHover={{
              y: -4,
            }}
            className="
              relative
              overflow-hidden
              rounded-[24px]
              border
              border-white/10
              bg-white/[0.04]
              p-5
              backdrop-blur-2xl
            "
          >

            {/* LIGHT */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent" />

            <div className="relative z-10">

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
                  border-rose-500/10
                  bg-rose-500/10
                "
              >
                <CheckCircle2
                  size={18}
                  className="text-rose-300"
                />
              </div>

              <h2 className="mt-4 text-[22px] font-black text-white">
                Outcome
              </h2>

              <p className="mt-3 text-[13px] leading-[1.7] text-slate-400">
                Immediate scalability for customer engagement,
                workflow automation, and operational intelligence.
              </p>

              {/* TAGS */}
              <div className="mt-4 flex flex-wrap gap-2">

                <span
                  className="
                    rounded-xl
                    border
                    border-rose-500/10
                    bg-rose-500/10
                    px-3
                    py-1.5
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[1.2px]
                    text-rose-300
                  "
                >
                  Continuous Gating
                </span>

                <span
                  className="
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    px-3
                    py-1.5
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[1.2px]
                    text-slate-400
                  "
                >
                  Elastic Concurrency
                </span>
              </div>
            </div>
          </motion.div>

          {/* ROI */}
          <motion.div
            whileHover={{
              y: -4,
            }}
            className="
              relative
              overflow-hidden
              rounded-[24px]
              border
              border-rose-500/10
              bg-gradient-to-br
              from-[#1a0408]
              via-[#0b0709]
              to-[#050506]
              p-5
              shadow-[0_0_40px_rgba(244,63,94,0.06)]
            "
          >

            {/* GLOW */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,63,94,0.12),transparent_65%)]" />

            <div className="relative z-10 flex h-full flex-col justify-between">

              <div>

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
                    border-rose-500/20
                    bg-rose-500/10
                  "
                >
                  <TrendingUp
                    size={18}
                    className="text-rose-300"
                  />
                </div>

                <h2 className="mt-4 text-[22px] font-black text-white">
                  ROI Strategy
                </h2>

                <p className="mt-3 text-[13px] leading-[1.7] text-slate-300">
                  Replace repetitive human workflows with intelligent
                  autonomous agents operating 24/7.
                </p>
              </div>

              {/* BUTTON */}
              <motion.button
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  group
                  mt-5
                  flex
                  h-[46px]
                  items-center
                  justify-center
                  gap-2
                  rounded-2xl
                  bg-gradient-to-r
                  from-rose-500
                  to-pink-500
                  px-5
                  text-[11px]
                  font-black
                  uppercase
                  tracking-[1.2px]
                  text-white
                  shadow-[0_0_25px_rgba(244,63,94,0.25)]
                "
              >

                View Benchmarks

                <ArrowRight
                  size={13}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.button>
            </div>
          </motion.div>

          {/* AGENTS */}
          <div className="flex flex-col gap-2.5">

            {operationAgents.map((item, index) => {

              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    x: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.06,
                  }}
                  whileHover={{
                    x: 4,
                  }}
                  className="
                    relative
                    overflow-hidden
                    rounded-[18px]
                    border
                    border-white/10
                    bg-white/[0.04]
                    p-3
                    backdrop-blur-2xl
                  "
                >

                  {/* LIGHT */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/[0.03] to-transparent" />

                  <div className="relative z-10 flex items-start gap-3">

                    {/* ICON */}
                    <div
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-white/10
                        bg-[#111111]
                      "
                    >
                      <Icon
                        size={14}
                        className="text-rose-300"
                      />
                    </div>

                    {/* CONTENT */}
                    <div>

                      <h3
                        className="
                          text-[10px]
                          font-black
                          uppercase
                          tracking-[1.3px]
                          text-white
                        "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                          mt-1
                          text-[11px]
                          leading-[1.55]
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
          </div>
        </div>
      </div>
    </section>
  );
}