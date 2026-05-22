"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  TrendingUp,
  Boxes,
  HelpCircle,
  Users,
  ShieldAlert,
  Database,
  ArrowRight,
} from "lucide-react";

const intelligenceFeatures = [
  {
    icon: Boxes,
    title: "AI Core & Agents",
    desc: "Custom model deployment and high-autonomy worker orchestration.",
  },
  {
    icon: HelpCircle,
    title: "Knowledge Hub",
    desc: "Centralized Wiki with AI-driven knowledge gap identification.",
  },
  {
    icon: Users,
    title: "Persona Playground",
    desc: "Rapidly test and iterate on brand voice and behavioral guardrails.",
  },
  {
    icon: ShieldAlert,
    title: "Gen AI Audit",
    desc: "Global dashboard for live audit logs and logic compliance campaigns.",
  },
  {
    icon: Database,
    title: "Datasphere",
    desc: "Enterprise data modeling, secure migration, and organizational journeys.",
  },
];

export default function IntelligenceCore() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#280206] via-[#111827] to-[#050001] text-slate-100 py-6 px-4 sm:px-6 lg:px-8 lg:h-screen lg:flex lg:flex-col lg:justify-center">
      
      {/* Background Vivid Red Ambient Lighting */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-[-10%] left-[20%] w-[450px] h-[450px] rounded-full bg-red-600/15 blur-[140px]" />
        <div className="absolute bottom-[5%] right-[10%] w-[400px] h-[400px] rounded-full bg-rose-600/10 blur-[120px]" />
        {/* Subtle geometric lines */}
        <div className="absolute inset-0 opacity-[0.01] bg-[linear-gradient(to_right,#ef4444_1px,transparent_1px),linear-gradient(to_bottom,#ef4444_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl flex flex-col justify-between h-full lg:max-h-[750px]">
        
        {/* Header Block */}
        <div className="mb-6 lg:mb-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 mb-2">
            <Cpu size={12} className="text-red-500 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[2px] text-red-400">
              Category Layer 01
            </span>
          </div>
          <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            Intelligence Core
          </h1>
          <div className="mt-2 flex flex-col sm:flex-row sm:items-center gap-3 justify-center lg:justify-start">
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              The foundational neural stack powering autonomous reasoning.
            </p>
            <div className="hidden sm:block h-[1px] flex-1 bg-gradient-to-r from-red-950/40 via-slate-800 to-transparent" />
          </div>
        </div>

        {/* 3-Column Workspace Panel Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 items-stretch h-full">
          
          {/* Card 1: The Experience */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-900/20 p-5 backdrop-blur-md lg:max-h-[480px]"
          >
            <div>
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-red-500/10 text-red-400 mb-4 border border-red-500/10">
                <Cpu size={18} />
              </div>
              <h2 className="text-base font-extrabold uppercase tracking-wide text-white">
                The Experience
              </h2>
              <p className="mt-3 text-xs leading-relaxed text-slate-400">
                Customers interact with a 'Corporate Brain' that understands brand voice,
                recalls every past interaction, and provides instant, verified resolutions
                without human delay.
              </p>
            </div>

            {/* Micro-Badges Stack */}
            <div className="mt-6 flex flex-wrap gap-1.5">
              <span className="rounded-md bg-red-500/10 px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-red-400 border border-red-500/10">
                Zero-Latency Failover
              </span>
              <span className="rounded-md bg-slate-800 px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-slate-400">
                Active PII Redaction
              </span>
              <span className="rounded-md bg-slate-800 px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-slate-400">
                99.9% Logic Gating
              </span>
            </div>
          </motion.div>

          {/* Card 2: The Strategy */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="flex flex-col justify-between rounded-2xl border border-red-500/30 bg-gradient-to-b from-[#1c0406] to-[#070102] p-5 shadow-[0_0_50px_rgba(239,68,68,0.03)] lg:max-h-[480px]"
          >
            <div>
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-red-600/20 text-red-400 mb-4 shadow-[0_0_15px_rgba(239,68,68,0.25)] border border-red-500/20">
                <TrendingUp size={18} />
              </div>
              <h2 className="text-base font-extrabold uppercase tracking-wide text-white">
                The Strategy
              </h2>
              <p className="mt-3 text-xs leading-relaxed text-slate-300">
                Transform raw data into a deterministic asset. Redact PII locally,
                manage prompts at scale, and ensure 100% logic adherence across all
                models. No hallucinations, just facts.
              </p>
            </div>

            {/* Action CTA Button */}
            <div className="mt-6">
              <motion.button
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 px-4 py-2.5 text-xs font-bold text-white transition-all shadow-lg hover:opacity-95 shadow-red-950/40"
              >
                Explore Intelligence Architecture
                <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </motion.button>
            </div>
          </motion.div>

          {/* Column 3: Feature Rows Stack */}
          <div className="flex flex-col justify-between gap-2 md:col-span-2 lg:col-span-1 lg:max-h-[480px]">
            {intelligenceFeatures.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  whileHover={{ x: 3, backgroundColor: "rgba(69, 10, 10, 0.2)", borderColor: "rgba(239, 68, 68, 0.2)" }}
                  className="flex items-center gap-3.5 rounded-xl border border-slate-900 bg-slate-950/40 p-2.5 backdrop-blur-sm transition-all duration-300"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-red-400">
                    <Icon size={14} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[11px] font-black uppercase tracking-wider text-white">
                      {item.title}
                    </h3>
                    <p className="text-[11px] leading-tight text-slate-400 truncate-2-lines mt-0.5">
                      {item.desc}
                    </p>
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