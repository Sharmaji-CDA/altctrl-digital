"use client";

import {
  AudioWaveform,
  Cpu,
  ShieldCheck,
  Search,
  Brain,
  Lock,
  Mic,
  Sparkles,
  Workflow,
} from "lucide-react";

import { motion } from "framer-motion";

const phases = [
  {
    icon: AudioWaveform,
    phase: "PHASE 01: EXECUTION LAYER",
    title: "The Frontline Encounter",
    pain:
      "Traditional AI creates latency and cannot react fast enough during live interactions.",
    solution:
      "Our acoustic kernels process voice and sentiment in real-time before the customer finishes speaking.",
    color:
      "from-blue-500/20 to-cyan-500/10 border-blue-500/20",
    glow: "bg-blue-500/20",
    iconColor: "text-blue-400",

    architecture: [
      {
        icon: Mic,
        label: "< 200ms Glass-to-Glass",
      },
      {
        icon: Sparkles,
        label: "Acoustic Sentiment",
      },
      {
        icon: Workflow,
        label: "Neural Beamforming",
      },
    ],
  },

  {
    icon: Cpu,
    phase: "PHASE 02: COGNITIVE REASONING",
    title: "Orchestrated Intellect",
    pain:
      "Generic models hallucinate during complex enterprise workflows.",
    solution:
      "Hybrid RAG dynamically routes requests across multiple LLMs based on reasoning complexity.",
    color:
      "from-violet-500/20 to-fuchsia-500/10 border-violet-500/20",
    glow: "bg-violet-500/20",
    iconColor: "text-violet-400",

    architecture: [
      {
        icon: Search,
        label: "Hybrid Semantic RAG",
      },
      {
        icon: Brain,
        label: "Multi-LLM Hot-Switch",
      },
      {
        icon: Cpu,
        label: "Vector-Based Context",
      },
    ],
  },

  {
    icon: ShieldCheck,
    phase: "PHASE 03: EXECUTION SAFETY",
    title: "Deterministic Action",
    pain:
      "Unregulated AI may violate business rules or expose sensitive data.",
    solution:
      "Safety kernels validate actions against strict enterprise logic and PII scrubbing pipelines.",
    color:
      "from-emerald-500/20 to-cyan-500/10 border-emerald-500/20",
    glow: "bg-emerald-500/20",
    iconColor: "text-emerald-400",

    architecture: [
      {
        icon: Lock,
        label: "Zero-Hallucination Gating",
      },
      {
        icon: ShieldCheck,
        label: "Real-time PII Scrubbing",
      },
      {
        icon: Workflow,
        label: "Hardened Logic Trees",
      },
    ],
  },
];

export default function OrchestrationFlow() {
  return (
    <section className="relative overflow-hidden bg-[#020617] px-4 py-14 text-white sm:px-6 lg:px-8 lg:py-18">

      {/* BG */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.08),transparent_45%)]" />

      {/* LEFT GLOW */}
      <div className="absolute left-[-180px] top-[200px] h-[260px] w-[260px] rounded-full bg-blue-500/15 blur-[110px]" />

      {/* RIGHT GLOW */}
      <div className="absolute right-[-180px] top-[400px] h-[260px] w-[260px] rounded-full bg-violet-500/15 blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-[980px]">

        {/* TOP */}
        <div className="text-center">

          {/* BADGE */}
          <motion.p
            initial={{
              opacity: 0,
              y: 15,
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
            className="text-[10px] uppercase tracking-[4px] text-blue-400"
          >
            The Customer Journey
          </motion.p>

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
            className="mt-4 text-[28px] font-black leading-[1] tracking-[-1px] sm:text-[32px] lg:text-[36px]"
          >
            The Multi-Layer Orchestration.
          </motion.h2>
        </div>

        {/* FLOW */}
        <div className="relative mt-14">

          {/* CENTER LINE */}
          <div className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-blue-500/30 via-violet-500/30 to-emerald-500/30 lg:block" />

          <div className="space-y-10">

            {phases.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 45,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: false,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -4,
                  }}
                  className={`group relative overflow-hidden rounded-[28px] border bg-[#071124]/80 p-5 backdrop-blur-xl transition-all duration-300 hover:bg-[#0A162E] sm:p-6 lg:p-7 ${item.color}`}
                >

                  {/* CARD GLOW */}
                  <div
                    className={`absolute inset-0 ${item.glow} opacity-[0.05]`}
                  />

                  {/* LIGHT SWEEP */}
                  <motion.div
                    animate={{
                      x: ["-120%", "220%"],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "linear",
                      delay: index * 0.4,
                    }}
                    className="absolute top-0 h-full w-[80px] rotate-[20deg] bg-white/[0.03] blur-xl"
                  />

                  {/* NODE */}
                  <div className="absolute left-1/2 top-[-8px] hidden h-4 w-4 -translate-x-1/2 rounded-full bg-white shadow-[0_0_18px_white] lg:block" />

                  <div className="relative z-10 grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr]">

                    {/* LEFT */}
                    <div>

                      {/* HEADER */}
                      <div className="flex items-center gap-4">

                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.04] ${item.iconColor}`}
                        >
                          <Icon size={20} />
                        </div>

                        <div>

                          <p className="text-[9px] uppercase tracking-[3px] text-slate-500">
                            {item.phase}
                          </p>

                          <h3 className="mt-1 text-[20px] font-bold">
                            {item.title}
                          </h3>
                        </div>
                      </div>

                      {/* PAIN */}
                      <motion.div
                        whileHover={{
                          y: -2,
                        }}
                        className="mt-6 rounded-[20px] border border-rose-500/10 bg-rose-500/[0.04] p-4"
                      >

                        <p className="text-[9px] uppercase tracking-[3px] text-rose-400">
                          This Customer Pain
                        </p>

                        <p className="mt-3 text-[12px] leading-6 text-slate-400">
                          {item.pain}
                        </p>
                      </motion.div>

                      {/* SOLUTION */}
                      <motion.div
                        whileHover={{
                          y: -2,
                        }}
                        className="mt-4 rounded-[20px] border border-emerald-500/10 bg-emerald-500/[0.04] p-4"
                      >

                        <p className="text-[9px] uppercase tracking-[3px] text-emerald-400">
                          The AltCtrl Solution
                        </p>

                        <p className="mt-3 text-[12px] leading-6 text-slate-300">
                          {item.solution}
                        </p>
                      </motion.div>
                    </div>

                    {/* RIGHT */}
                    <div>

                      <p className="text-[9px] uppercase tracking-[3px] text-slate-500">
                        Architectural Blueprint
                      </p>

                      <div className="mt-5 space-y-4">

                        {item.architecture.map((arch, i) => {
                          const ArchIcon = arch.icon;

                          return (
                            <motion.div
                              key={i}
                              whileHover={{
                                x: 4,
                              }}
                              transition={{
                                duration: 0.2,
                              }}
                              className="group/item flex items-center gap-4 rounded-[18px] border border-white/5 bg-black/20 px-4 py-4 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.03]"
                            >

                              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.03] text-slate-300 transition-all duration-300 group-hover/item:scale-105">

                                <ArchIcon size={16} />
                              </div>

                              <div>

                                <p className="text-[8px] uppercase tracking-[2px] text-slate-500">
                                  Infrastructure
                                </p>

                                <p className="mt-1 text-[12px] font-semibold text-white">
                                  {arch.label}
                                </p>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
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