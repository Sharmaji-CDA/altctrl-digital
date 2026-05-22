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
    desc: "Automate responses to common questions and support requests, providing 24/7 assistance. This...",
  },
  {
    icon: ShoppingCart,
    title: "Sales Assistant Agent",
    desc: "Qualify leads, provide product information, and guide potential customers through the initial stages of the...",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Auditor",
    desc: "Automatically review interactions for script adherence, required disclosures, and other...",
  },
  {
    icon: BarChart3,
    title: "Data Analyst Agent",
    desc: "Connect to your data sources and allow this agent to process information, generate reports, identify...",
  },
];

export default function OperationsCore() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#2a030c] via-[#0d070b] to-[#120105] text-slate-100 py-6 px-4 sm:px-6 lg:px-8 lg:h-screen lg:flex lg:flex-col lg:justify-center">
      
      {/* Synthetic Rose Core Glowing Backdrop Atmosphere */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-25">
        <div className="absolute top-[-10%] right-[20%] w-[550px] h-[550px] rounded-full bg-rose-500/10 blur-[140px]" />
        <div className="absolute bottom-[5%] left-[15%] w-[400px] h-[400px] rounded-full bg-pink-500/5 blur-[120px]" />
        {/* Technical dot network grid mapping overlay */}
        <div className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(#f43f5e_1px,transparent_1px)] [background-size:20px_20px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl flex flex-col justify-between h-full lg:max-h-[750px]">
        
        {/* Header Metadata Block */}
        <div className="mb-6 lg:mb-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 mb-2">
            <Boxes size={12} className="text-rose-400 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[2px] text-rose-400/90">
              Agent Layer 01
            </span>
          </div>
          <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            Operations Core
          </h1>
          <div className="mt-2 flex flex-col sm:flex-row sm:items-center gap-3 justify-center lg:justify-start">
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              The frontline of autonomous business interaction and support.
            </p>
            <div className="hidden sm:block h-[1px] flex-1 bg-gradient-to-r from-rose-950/40 via-slate-800 to-transparent" />
          </div>
        </div>

        {/* Asymmetrical Matrix Grid Workspace */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 items-stretch h-full">
          
          {/* Card 1: Outcome Panel */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-between rounded-2xl border border-slate-900 bg-slate-950/20 p-6 backdrop-blur-md lg:max-h-[500px]"
          >
            <div>
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-rose-500/10 text-rose-400 mb-5 border border-rose-500/10">
                <CheckCircle2 size={18} />
              </div>
              <h2 className="text-base font-extrabold uppercase tracking-wide text-white">
                Outcome
              </h2>
              <p className="mt-3 text-xs leading-relaxed text-slate-400">
                Immediate scalability for high-volume customer and lead engagement.
              </p>
            </div>

            {/* Micro Tags Metadata List */}
            <div className="mt-6 flex flex-wrap gap-1.5">
              <span className="rounded-md bg-rose-500/10 px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-rose-400 border border-rose-500/10">
                Continuous Gating
              </span>
              <span className="rounded-md bg-slate-900 px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-slate-400 border border-slate-800/60">
                Elastic Concurrency
              </span>
              <span className="rounded-md bg-slate-900 px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-slate-400 border border-slate-800/60">
                Omni State Sync
              </span>
            </div>
          </motion.div>

          {/* Card 2: Strategic ROI Operational Core */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="flex flex-col justify-between rounded-2xl border border-rose-500/20 bg-gradient-to-b from-[#1c0308] to-[#080002] p-6 shadow-[0_0_50px_rgba(244,63,94,0.02)] lg:max-h-[500px]"
          >
            <div>
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-rose-600/20 text-rose-400 mb-5 shadow-[0_0_15px_rgba(244,63,94,0.15)] border border-rose-500/20">
                <TrendingUp size={18} />
              </div>
              <h2 className="text-base font-extrabold uppercase tracking-wide text-white">
                ROI Strategy
              </h2>
              <p className="mt-3 text-xs leading-relaxed text-slate-300">
                Shift repetitive task loads to 24/7 autonomous agents.
              </p>
            </div>

            {/* Interactive Action CTA Trigger Link */}
            <div className="mt-6">
              <motion.button
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 px-4 py-2.5 text-xs font-bold text-white transition-all shadow-lg hover:opacity-95 shadow-rose-950/40"
              >
                View Operational Benchmarks
                <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </motion.button>
            </div>
          </motion.div>

          {/* Column 3: Feature Agent Rows Stack */}
          <div className="flex flex-col justify-between gap-2 md:col-span-2 lg:col-span-1 lg:max-h-[500px]">
            {operationAgents.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04, duration: 0.4 }}
                  whileHover={{ x: 3, backgroundColor: "rgba(244, 63, 94, 0.08)", borderColor: "rgba(244, 63, 94, 0.2)" }}
                  className="flex items-center gap-3.5 rounded-xl border border-slate-900 bg-slate-950/40 p-2.5 backdrop-blur-sm transition-all duration-300"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-rose-400">
                    <Icon size={13} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[11px] font-black uppercase tracking-wider text-white truncate">
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