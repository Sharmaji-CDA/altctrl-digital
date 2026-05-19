"use client";

import {
  Cpu,
  Layers3,
  Target,
} from "lucide-react";

import { motion } from "framer-motion";

const cards = [
  {
    icon: Cpu,
    title: "Native AI Core",
    subtitle: "Built for tokens, not seats.",
    color: "text-blue-400",
    glow: "from-blue-500/20 to-blue-500/5",
    border: "border-blue-500/20",
    bg: "bg-blue-500/10",
  },

  {
    icon: Layers3,
    title: "Zero-Legacy Stack",
    subtitle: "No technical debt, ever.",
    color: "text-violet-400",
    glow: "from-violet-500/20 to-violet-500/5",
    border: "border-violet-500/20",
    bg: "bg-violet-500/10",
  },

  {
    icon: Target,
    title: "Precision Results",
    subtitle: "Deterministic outcomes only.",
    color: "text-emerald-400",
    glow: "from-emerald-500/20 to-emerald-500/5",
    border: "border-emerald-500/20",
    bg: "bg-emerald-500/10",
  },
];

export default function BusinessFocus() {
  return (
    <section className="relative overflow-hidden bg-black px-4 py-14 text-white sm:px-6 lg:px-8 lg:py-18">

      {/* BG */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.08),transparent_40%)]" />

      {/* LEFT GLOW */}
      <div className="absolute left-[-100px] top-[80px] h-[240px] w-[240px] rounded-full bg-[#EC1C24]/10 blur-[110px]" />

      {/* RIGHT GLOW */}
      <div className="absolute right-[-80px] bottom-[60px] h-[240px] w-[240px] rounded-full bg-blue-500/10 blur-[110px]" />

      {/* ANGLED BG */}
      <div className="absolute right-[-180px] top-0 hidden h-full w-[40%] rotate-[-10deg] bg-white/[0.02] blur-3xl lg:block" />

      <div className="relative z-10 mx-auto max-w-[1180px]">

        {/* TOP */}
        <div className="mx-auto max-w-[850px] text-center">

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

            <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />

            <span className="text-[9px] uppercase tracking-[3px] text-blue-300">
              Abstraction Layer
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
            className="text-[34px] font-black leading-[0.95] tracking-[-2px] sm:text-[48px] lg:text-[64px]"
          >

            Focus on Business,
            <br />

            <span className="bg-gradient-to-r from-blue-400 via-[#4f7cff] to-cyan-400 bg-clip-text text-transparent">
              not the Tech.
            </span>
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
            className="mx-auto mt-6 max-w-[760px] text-[14px] leading-8 text-slate-400 sm:text-[15px]"
          >

            The AI landscape moves at lightspeed.
            We handle the{" "}

            <span className="font-semibold text-white">
              multi-model orchestration
            </span>
            ,{" "}

            <span className="font-semibold text-white">
              vector latency
            </span>
            , and{" "}

            <span className="font-semibold text-white">
              logic hardening
            </span>{" "}

            so you can focus entirely on strategy and growth.
          </motion.p>
        </div>

        {/* CARDS */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">

          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={index}
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
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.06,
                }}
                whileHover={{
                  y: -5,
                }}
                className={`group relative overflow-hidden rounded-[28px] border bg-white/[0.03] p-7 backdrop-blur-xl transition-all duration-300 hover:bg-white/[0.05] hover:shadow-[0_0_40px_rgba(255,255,255,0.03)] ${card.border}`}
              >

                {/* BG GLOW */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${card.glow} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
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

                {/* ICON */}
                <div
                  className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-[22px] border border-white/10 ${card.bg} ${card.color}`}
                >

                  {/* INNER GLOW */}
                  <div
                    className={`absolute inset-0 rounded-[22px] bg-gradient-to-br ${card.glow} opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100`}
                  />

                  <Icon
                    size={28}
                    className="relative z-10 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* CONTENT */}
                <div className="relative z-10">

                  <h3 className="mt-7 text-[24px] font-bold leading-tight text-white">
                    {card.title}
                  </h3>

                  <p className="mt-3 text-[10px] font-semibold uppercase tracking-[2.5px] text-slate-500">
                    {card.subtitle}
                  </p>
                </div>

                {/* BOTTOM LIGHT */}
                <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}