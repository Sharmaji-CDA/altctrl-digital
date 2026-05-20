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
    color: "from-emerald-500/25 via-teal-500/10 to-transparent",
    glow: "bg-emerald-400/30",
    iconColor: "text-emerald-300",
  },

  {
    icon: Zap,
    title: "Sub-200ms Latency",
    desc: "Optimized STT streams allow real-time human-parity conversations.",
    color: "from-cyan-500/25 via-sky-500/10 to-transparent",
    glow: "bg-cyan-400/30",
    iconColor: "text-cyan-300",
  },

  {
    icon: Cpu,
    title: "Multi-LLM Arbitration",
    desc: "Dynamic routing across GPT-4, Claude, and Gemini based on task complexity.",
    color: "from-violet-500/25 via-fuchsia-500/10 to-transparent",
    glow: "bg-violet-400/30",
    iconColor: "text-violet-300",
  },

  {
    icon: Search,
    title: "Contextual RAG",
    desc: "Hybrid semantic search retrieves relevant enterprise data in milliseconds.",
    color: "from-orange-500/25 via-amber-500/10 to-transparent",
    glow: "bg-orange-400/30",
    iconColor: "text-orange-300",
  },

  {
    icon: Smile,
    title: "Empathy Detection",
    desc: "Proprietary kernels analyze acoustic sentiment and frustration levels.",
    color: "from-pink-500/25 via-rose-500/10 to-transparent",
    glow: "bg-pink-400/30",
    iconColor: "text-pink-300",
  },

  {
    icon: Lock,
    title: "PII Scrubbing",
    desc: "Native redaction of sensitive data before it reaches the reasoning layer.",
    color: "from-blue-500/25 via-indigo-500/10 to-transparent",
    glow: "bg-blue-400/30",
    iconColor: "text-blue-300",
  },
];

export default function IntelligenceCore() {
  return (
    <section className="relative overflow-hidden bg-[#061614] px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-20">

      {/* BG */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(20,184,166,0.14),transparent_50%)]" />

      {/* LEFT GLOW */}
      <div className="absolute left-[-180px] top-[80px] h-[300px] w-[300px] rounded-full bg-[#14B8A6]/20 blur-[110px]" />

      {/* RIGHT GLOW */}
      <div className="absolute right-[-180px] top-[220px] h-[300px] w-[300px] rounded-full bg-[#7DE6DA]/15 blur-[110px]" />

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
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#14B8A6]/20 bg-[#14B8A6]/10 px-4 py-2 backdrop-blur-xl"
          >

            <div className="h-2 w-2 rounded-full bg-[#14B8A6]" />

            <span className="text-[10px] uppercase tracking-[3px] text-[#7DE6DA]">
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

            <span className="bg-gradient-to-r from-[#7DE6DA] via-[#14B8A6] to-[#99F6E4] bg-clip-text text-transparent">
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
            className="mx-auto mt-5 max-w-[620px] text-[13px] leading-7 text-[#9FB5B2] sm:text-[14px]"
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
                className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-[#0B1F1C]/80 p-5 backdrop-blur-xl transition-all duration-300 hover:border-[#14B8A6]/30 hover:bg-[#102927]"
              >

                {/* HOVER GLOW */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />

                {/* BOTTOM ACCENT */}
                <div
                  className={`absolute bottom-0 left-0 h-[100px] w-full bg-gradient-to-t ${item.color} opacity-80`}
                />

                {/* BOTTOM BLUR GLOW */}
                <div
                  className={`absolute -bottom-10 left-1/2 h-[120px] w-[80%] -translate-x-1/2 rounded-full bg-gradient-to-r ${item.color} blur-3xl opacity-40`}
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
                  className="absolute top-0 h-full w-[70px] rotate-[20deg] bg-[#14B8A6]/10 blur-lg"
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
                  <p className="mt-3 text-[12px] leading-6 text-[#9FB5B2] sm:text-[13px]">
                    {item.desc}
                  </p>
                </div>

                {/* BORDER */}
                <div className="absolute inset-0 rounded-[24px] border border-[#14B8A6]/10" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}