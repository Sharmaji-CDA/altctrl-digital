"use client";

import { motion } from "framer-motion";

import {
  Cpu,
  TrendingUp,
  CheckCircle2,
  UserPlus,
  GitBranch,
  Briefcase,
  Share2,
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

const reasoningAgents = [
  {
    icon: UserPlus,
    title: "Onboarding Specialist Agent",
    desc: "Guide users with contextual onboarding and proactive tutorials.",
  },

  {
    icon: GitBranch,
    title: "Workflow Automator",
    desc: "Automate backend operations and approval workflows.",
  },

  {
    icon: Briefcase,
    title: "HR Assistant Agent",
    desc: "Handle employee support and policy automation.",
  },

  {
    icon: Share2,
    title: "Social Media Manager",
    desc: "Monitor brand signals and automate engagement flows.",
  },
];

export default function ReasoningStack() {

  return (
    <section className="relative overflow-hidden bg-[#060816] py-10 sm:py-14 lg:px-16">

      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* PRIMARY GLOW */}
        <div
          className="
            absolute
            left-[-10%]
            top-[-10%]
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
            bottom-[-10%]
            right-[-5%]
            h-[260px]
            w-[260px]
            rounded-full
            bg-violet-500/10
            blur-3xl
            animate-pulse
          "
          style={{
            animationDuration: "7s",
          }}
        />

        {/* CENTER LIGHT */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)]" />

        {/* GRID */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:34px_34px]" />
        </div>

        {/* TOP LIGHT */}
        <div className="absolute inset-x-0 top-0 h-[140px] bg-gradient-to-b from-cyan-400/[0.03] to-transparent" />
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
        className="relative z-10 mx-auto max-w-[1350px] px-4 sm:px-5 lg:px-6"
      >

        {/* HEADER */}
        <div className="mb-6 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">

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
                border-white/10
                bg-white/[0.04]
                px-3
                py-2
                backdrop-blur-md
              "
            >

              <Cpu
                size={11}
                className="text-cyan-300"
              />

              <span className="text-[8px] font-bold uppercase tracking-[2px] text-cyan-200">
                Agent Layer 02
              </span>
            </div>

            {/* TITLE */}
            <h1
              className="
                mt-4
                bg-gradient-to-r
                from-white
                via-slate-200
                to-slate-400
                bg-clip-text
                text-[34px]
                font-black
                leading-[0.95]
                tracking-[-2px]
                text-transparent
                sm:text-[44px]
                lg:text-[56px]
              "
            >
              Reasoning Stack
            </h1>

            {/* DESCRIPTION */}
            <p
              className="
                mt-4
                max-w-2xl
                text-[13px]
                leading-[1.8]
                text-slate-400
                sm:text-[15px]
              "
            >
              Advanced logic for complex decision making and workflow analysis.
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
              from-cyan-400/30
              via-slate-700/10
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
              overflow-hidden
              rounded-[26px]
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

            {/* LIGHT */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative z-10 flex h-full flex-col">

              {/* ICON */}
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.06]
                  transition-transform
                  duration-300
                  group-hover:scale-105
                "
              >

                <CheckCircle2
                  size={20}
                  className="text-cyan-200"
                />
              </div>

              <h2 className="mt-5 text-[22px] font-black text-white">
                Outcome
              </h2>

              <p className="mt-3 flex-1 text-[13px] leading-[1.8] text-slate-400">
                Eliminate human error in regulated workflows and secure mission-critical automation pipelines.
              </p>

              {/* TAGS */}
              <div className="mt-5 flex flex-wrap gap-2">

                <span
                  className="
                    rounded-xl
                    border
                    border-cyan-400/20
                    bg-cyan-400/10
                    px-3
                    py-2
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[1.3px]
                    text-cyan-200
                  "
                >
                  Deterministic Logic
                </span>

                <span
                  className="
                    rounded-xl
                    border
                    border-violet-400/20
                    bg-violet-400/10
                    px-3
                    py-2
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[1.3px]
                    text-violet-200
                  "
                >
                  Audit Safe
                </span>
              </div>
            </div>
          </motion.div>

          {/* ROI */}
          <motion.div
            variants={fadeUp}
            transition={{
              duration: 0.5,
            }}
            className="
              group
              relative
              overflow-hidden
              rounded-[26px]
              border
              border-white/10
              bg-gradient-to-br
              from-[#0f172a]
              via-[#101827]
              to-[#060816]
              p-5
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-cyan-400/20
            "
          >

            {/* GLOW */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.10),transparent_65%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative z-10 flex h-full flex-col">

              <div className="flex-1">

                {/* ICON */}
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-cyan-400/20
                    bg-cyan-400/10
                    transition-transform
                    duration-300
                    group-hover:scale-105
                  "
                >

                  <TrendingUp
                    size={20}
                    className="text-cyan-200"
                  />
                </div>

                <h2 className="mt-5 text-[22px] font-black text-white">
                  ROI Strategy
                </h2>

                <p className="mt-3 text-[13px] leading-[1.8] text-slate-300">
                  Deploy reasoning systems directly into backend orchestration for operational scale and decision precision.
                </p>
              </div>

              {/* BUTTON */}
              <button
                className="
                  group/button
                  mt-6
                  flex
                  h-[46px]
                  items-center
                  justify-center
                  gap-2
                  rounded-2xl
                  bg-gradient-to-r
                  from-cyan-500
                  via-blue-500
                  to-violet-500
                  px-5
                  text-[11px]
                  font-black
                  uppercase
                  tracking-[1.2px]
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:shadow-lg
                "
              >

                Analyze Agent Logic

                <ArrowRight
                  size={13}
                  className="
                    transition-transform
                    duration-300
                    group-hover/button:translate-x-1
                  "
                />
              </button>
            </div>
          </motion.div>

          {/* AGENTS */}
          <motion.div
            variants={fadeUp}
            transition={{
              duration: 0.5,
            }}
            className="flex flex-col gap-3"
          >

            {reasoningAgents.map((item, index) => {

              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.04,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[22px]
                    border
                    border-white/10
                    bg-white/[0.04]
                    p-3
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:translate-x-1
                    hover:border-cyan-400/20
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
                        border-white/10
                        bg-[#111827]
                        transition-transform
                        duration-300
                        group-hover:scale-105
                      "
                    >

                      <Icon
                        size={15}
                        className="text-cyan-200"
                      />
                    </div>

                    {/* CONTENT */}
                    <div>

                      <h3
                        className="
                          text-[10px]
                          font-black
                          uppercase
                          tracking-[1.4px]
                          text-white
                        "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                          mt-1.5
                          text-[11px]
                          leading-[1.65]
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