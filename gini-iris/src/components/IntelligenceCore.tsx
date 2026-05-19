"use client";

import {
  ShieldCheck,
  Zap,
  Cpu,
  Search,
  Smile,
  Lock,
} from "lucide-react";

import { motion } from "framer-motion";

const features = [
  {
    icon: ShieldCheck,
    title: "99.9% Logic Accuracy",
    desc: "Deterministic kernels ensure your business rules are followed without LLM drift.",
    color: "from-emerald-500/20 to-emerald-500/5",
    iconColor: "text-emerald-400",
  },

  {
    icon: Zap,
    title: "Sub-200ms Latency",
    desc: "Optimized STT streams allow real-time human-parity conversations.",
    color: "from-blue-500/20 to-blue-500/5",
    iconColor: "text-blue-400",
  },

  {
    icon: Cpu,
    title: "Multi-LLM Arbitration",
    desc: "Dynamic routing across GPT-4, Claude, and Gemini based on task complexity.",
    color: "from-violet-500/20 to-violet-500/5",
    iconColor: "text-violet-400",
  },

  {
    icon: Search,
    title: "Contextual RAG",
    desc: "Hybrid semantic search retrieves relevant enterprise data in milliseconds.",
    color: "from-indigo-500/20 to-indigo-500/5",
    iconColor: "text-indigo-400",
  },

  {
    icon: Smile,
    title: "Empathy Detection",
    desc: "Proprietary kernels analyze acoustic sentiment and frustration levels.",
    color: "from-pink-500/20 to-pink-500/5",
    iconColor: "text-pink-400",
  },

  {
    icon: Lock,
    title: "PII Scrubbing",
    desc: "Native redaction of sensitive data before it reaches the reasoning layer.",
    color: "from-rose-500/20 to-rose-500/5",
    iconColor: "text-rose-400",
  },
];

export default function IntelligenceCore() {
  return (
    <section className="relative overflow-hidden bg-[#020617] px-4 py-14 text-white sm:px-6 lg:px-8 lg:py-18">

      {/* BG */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.10),transparent_45%)]" />

      {/* LEFT GLOW */}
      <div className="absolute left-[-180px] top-[80px] h-[300px] w-[300px] rounded-full bg-blue-500/15 blur-[110px]" />

      {/* RIGHT GLOW */}
      <div className="absolute right-[-180px] top-[220px] h-[300px] w-[300px] rounded-full bg-violet-500/15 blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-[1280px]">

        {/* TOP */}
        <div className="mx-auto max-w-[760px] text-center">

          {/* BADGE */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: false,
              amount: 0.4,
            }}
            transition={{
              duration: 0.6,
            }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 backdrop-blur-xl"
          >

            <div className="h-2 w-2 rounded-full bg-blue-400" />

            <span className="text-[10px] uppercase tracking-[3px] text-blue-300">
              Proprietary Neural Stack
            </span>
          </motion.div>

          {/* HEADING */}
          <motion.h2
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: false,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
            }}
            className="text-[28px] font-black leading-[1] tracking-[-1px] sm:text-[34px] lg:text-[40px]"
          >

            The{" "}

            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Intelligence
            </span>{" "}

            Core.
          </motion.h2>

          {/* DESC */}
          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: false,
              amount: 0.3,
            }}
            transition={{
              duration: 0.9,
            }}
            className="mx-auto mt-5 max-w-[620px] text-[13px] leading-7 text-slate-400 sm:text-[14px]"
          >

            We&apos;ve moved beyond generic wrappers.
            AltCtrl is built on a specialized infrastructure
            layer designed to handle the multi-modal cognitive
            load of global enterprise operations.
          </motion.p>
        </div>

        {/* GRID */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: false,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.05,
                }}
                whileHover={{
                  y: -5,
                }}
                className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-[#071124]/80 p-5 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/30 hover:bg-[#0A162E]"
              >

                {/* HOVER GLOW */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />

                {/* LIGHT SWEEP */}
                <motion.div
                  animate={{
                    x: ["-120%", "220%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                    delay: index * 0.25,
                  }}
                  className="absolute top-0 h-full w-[70px] rotate-[20deg] bg-white/[0.03] blur-lg"
                />

                <div className="relative z-10">

                  {/* ICON */}
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.04] ${item.iconColor}`}
                  >
                    <Icon size={18} />
                  </div>

                  {/* TITLE */}
                  <h3 className="mt-5 text-[17px] font-bold leading-tight text-white">
                    {item.title}
                  </h3>

                  {/* DESC */}
                  <p className="mt-3 text-[12px] leading-6 text-slate-400 sm:text-[13px]">
                    {item.desc}
                  </p>
                </div>

                {/* BORDER */}
                <div className="absolute inset-0 rounded-[24px] border border-white/[0.04]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}