"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  Zap,
  ArrowRight,
  Cpu,
  BrainCircuit,
  BarChart3,
} from "lucide-react";

const securityFeatures = [
  {
    icon: ShieldCheck,
    title: "Logic Gating",
    description: "Deterministic kernels forcing 99.9% logical adherence.",
    bg: "from-rose-500/10 to-pink-500/10",
    iconColor: "text-rose-400",
    border: "border-rose-500/10",
  },
  {
    icon: Lock,
    title: "PII Scrubbing",
    description: "Local data redaction before multi-model transit.",
    bg: "from-fuchsia-500/10 to-pink-500/10",
    iconColor: "text-fuchsia-400",
    border: "border-fuchsia-500/10",
  },
  {
    icon: Zap,
    title: "Failover Engine",
    description: "Zero-latency switching between major LLM models.",
    bg: "from-violet-500/10 to-rose-500/10",
    iconColor: "text-violet-400",
    border: "border-violet-500/10",
  },
];

export default function DeriskingEngine() {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center overflow-hidden bg-[radial-gradient(circle_at_top,#1a0b14_0%,#0c0a12_45%,#06070d_100%)] py-4 sm:py-6">
      {/* ATMOSPHERE */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[-10%] top-[5%] h-[200px] w-[200px] rounded-full bg-[#ec4899]/20 blur-[100px]"
        />
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[-5%] top-[10%] h-[220px] w-[220px] rounded-full bg-[#8b5cf6]/10 blur-[120px]"
        />
        <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 mx-auto w-full max-w-6xl grid grid-cols-1 items-center gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        
        {/* LEFT COLUMN */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          {/* TAG */}
          <div className="inline-flex self-start items-center gap-1.5 rounded-full border border-[#ec4899]/10 bg-[#ec4899]/[0.04] px-2.5 py-1 backdrop-blur-xl">
            <Cpu size={11} className="text-[#f472b6]" />
            <span className="text-[8px] font-medium uppercase tracking-[1.5px] text-[#f9a8d4]">
              AI Governance Layer
            </span>
          </div>

          {/* HEADING */}
          <h2 className="mt-3 text-[24px] font-black leading-tight tracking-tight text-[#fff7fb] sm:text-[32px] lg:text-[38px]">
            The Derisking Engine.
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-2 max-w-lg text-[13px] leading-relaxed text-[#c8b8c2]">
            Most AI solutions are wrappers. AltCtrl is a hardening layer sitting between raw LLM intelligence and mission-critical data.
          </p>

          {/* FEATURES LIST */}
          <div className="mt-5 flex flex-col gap-2.5">
            {securityFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  whileHover={{ x: 4 }}
                  className={`group relative overflow-hidden rounded-xl border ${feature.border} bg-white/[0.02] p-3 backdrop-blur-xl transition-all duration-300`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.bg} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
                  <div className="relative z-10 flex items-center gap-3">
                    <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${feature.bg}`}>
                      <Icon size={16} className={feature.iconColor} />
                    </div>
                    <div>
                      <h3 className="text-[14px] font-bold text-[#fff7fb]">
                        {feature.title}
                      </h3>
                      <p className="text-[12px] text-[#c8b8c2] opacity-90">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* RIGHT COLUMN */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col mx-10 justify-center items-center lg:items-stretch"
        >
          {/* INTERACTIVE PANEL */}
          <div className="relative w-full max-w-md lg:max-w-none overflow-hidden rounded-3xl border border-white/50 bg-[#060816]/80 px-10 py-14 shadow-2xl backdrop-blur-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ec4899_0%,transparent_60%)] opacity-[0.05]" />

            {/* FLOW PIPELINE */}
            <div className="relative z-10 flex items-center justify-between gap-2 sm:gap-4 py-4">
              
              {/* CONNECTION LINE LOGIC */}
              <div className="absolute left-6 right-6 top-[40px] h-[2px] rounded-full bg-gradient-to-r from-[#ec4899]/20 via-[#8b5cf6]/20 to-cyan-400/20 overflow-hidden">
                <motion.div
                  animate={{ left: ["-20%", "120%"], scale: [1, 1.8, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                  className="absolute top-0 h-full w-12 bg-gradient-to-r from-transparent via-[#f472b6] to-transparent blur-[1px]"
                />
              </div>

              {/* INPUT NODE */}
              <div className="flex flex-col items-center gap-1.5 relative z-10">
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#0f172a]"
                >
                  <Cpu size={16} className="text-[#c8b8c2]" />
                </motion.div>
                <span className="text-[8px] font-medium tracking-wider text-[#94a3b8] whitespace-nowrap">
                  INPUT
                </span>
              </div>

              {/* CENTRAL ENGINE NODE */}
              <div className="flex flex-col items-center gap-1.5 relative z-10">
                <motion.div
                  animate={{ scale: [1, 1.04, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#ec4899]/20 bg-gradient-to-br from-[#1d4ed8] to-[#312e81] shadow-lg"
                >
                  <BrainCircuit size={20} className="text-white" />
                </motion.div>
                <span className="text-[8px] font-bold tracking-wider text-[#f9a8d4] whitespace-nowrap">
                  ALTCTRL ENGINE
                </span>
              </div>

              {/* OUTCOME NODE */}
              <div className="flex flex-col items-center gap-1.5 relative z-10">
                <motion.div
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#0f172a]"
                >
                  <BarChart3 size={16} className="text-[#c8b8c2]" />
                </motion.div>
                <span className="text-[8px] font-medium tracking-wider text-[#94a3b8] whitespace-nowrap">
                  OUTCOME
                </span>
              </div>
            </div>

            {/* TERMINAL */}
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
                once: true,
              }}
              transition={{
                delay: 0.3,
                duration: 0.8,
              }}
              className="relative mt-8 overflow-hidden rounded-[24px] border border-white/10 bg-[#020617]/90 p-4 sm:p-5"
            >

              {/* GLOW */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#ec4899]/5 to-[#8b5cf6]/5" />

              <div className="relative z-10 space-y-3 font-mono text-[8px] sm:text-[10px] md:text-[9px]">

                <motion.div
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="text-emerald-400"
                >
                  &gt; RUNNING HARDENING_KERNEL_v4.0...
                </motion.div>

                <div className="text-[#93c5fd]">
                  &gt; ANALYZING COGNITIVE FLOW: [NORMAL]
                </div>

                <div className="text-[#f9a8d4]">
                  &gt; PII MASKING: [ACTIVE - 128 FIELDS REDACTED]
                </div>

                <div className="text-[#c4b5fd]">
                  &gt; OUTPUT VERIFIED: [100% COMPLIANT]
                </div>

              </div>
            </motion.div>

            {/* BUTTON / ACTION */}
            <div className="mt-4 pt-3 border-t border-white/[0.05] flex justify-end">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#f9a8d4]"
              >
                Explore Security Spec
                <ArrowRight
                  size={12}
                  className="transition-transform duration-250 group-hover:translate-x-0.5"
                />
              </motion.button>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}