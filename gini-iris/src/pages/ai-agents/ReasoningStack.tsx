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

const reasoningAgents = [
  {
    icon: UserPlus,
    title: "Onboarding Specialist Agent",
    desc: "Guide new users through your platform with interactive tutorials, contextual help, and proactive...",
  },
  {
    icon: GitBranch,
    title: "Workflow Automator",
    desc: "Handle multi-step backend processes, such as refund processing or account changes, triggered b...",
  },
  {
    icon: Briefcase,
    title: "HR Assistant Agent",
    desc: "Answer common employee questions about company policies, benefits, and internal procedure...",
  },
  {
    icon: Share2,
    title: "Social Media Manager",
    desc: "Monitor social channels for brand mentions, identify high-priority posts, and draft appropriate public...",
  },
];

export default function ReasoningStack() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#090d16] via-[#0f172a] to-[#1e293b] text-slate-100 py-6 px-4 sm:px-6 lg:px-8 lg:h-screen lg:flex lg:flex-col lg:justify-center">
      
      {/* Immersive Neural Slate Ambient Aura Patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-25">
        <div className="absolute top-[-10%] right-[20%] w-[550px] h-[550px] rounded-full bg-slate-400/10 blur-[140px]" />
        <div className="absolute bottom-[5%] left-[15%] w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[120px]" />
        {/* Engineering blueprint cross alignment grid */}
        <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)] bg-[size:36px_36px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl flex flex-col justify-between h-full lg:max-h-[750px]">
        
        {/* Title Block Header Group */}
        <div className="mb-6 lg:mb-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 mb-2">
            <Cpu size={12} className="text-slate-400认 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[2px] text-slate-400/90">
              Agent Layer 02
            </span>
          </div>
          <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            Reasoning Stack
          </h1>
          <div className="mt-2 flex flex-col sm:flex-row sm:items-center gap-3 justify-center lg:justify-start">
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              Advanced logic for complex decision making and workflow analysis.
            </p>
            <div className="hidden sm:block h-[1px] flex-1 bg-gradient-to-r from-slate-800/60 via-slate-700/20 to-transparent" />
          </div>
        </div>

        {/* 3-Column Asymmetrical Grid System */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 items-stretch h-full">
          
          {/* Card 1: Outcome Panel */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-900/10 p-6 backdrop-blur-md lg:max-h-[500px]"
          >
            <div>
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-800 text-slate-300 mb-5 border border-slate-700/50">
                <CheckCircle2 size={18} />
              </div>
              <h2 className="text-base font-extrabold uppercase tracking-wide text-white">
                Outcome
              </h2>
              <p className="mt-3 text-xs leading-relaxed text-slate-400">
                Eliminate human error in regulated workflows and data processing.
              </p>
            </div>

            {/* Micro Tags Metadata List */}
            <div className="mt-6 flex flex-wrap gap-1.5">
              <span className="rounded-md bg-slate-800/50 px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-slate-300 border border-slate-700/40">
                Deterministic Gating
              </span>
              <span className="rounded-md bg-slate-900 px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-slate-400 border border-slate-800/50">
                Zero Error Threshold
              </span>
              <span className="rounded-md bg-slate-900 px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-slate-400 border border-slate-800/50">
                Audit Bound Logs
              </span>
            </div>
          </motion.div>

          {/* Card 2: Strategic ROI Center Core Panel */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="flex flex-col justify-between rounded-2xl border border-slate-700/30 bg-gradient-to-b from-[#111625] to-[#070a10] p-6 shadow-[0_0_50px_rgba(148,163,184,0.02)] lg:max-h-[500px]"
          >
            <div>
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-800/80 text-white mb-5 border border-slate-600/40 shadow-md">
                <TrendingUp size={18} />
              </div>
              <h2 className="text-base font-extrabold uppercase tracking-wide text-white">
                ROI Strategy
              </h2>
              <p className="mt-3 text-xs leading-relaxed text-slate-300">
                Embed automated reasoning directly into backend system logic.
              </p>
            </div>

            {/* Interactive Action CTA Trigger Link */}
            <div className="mt-6">
              <motion.button
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 border border-slate-600/50 px-4 py-2.5 text-xs font-bold text-white transition-all shadow-md hover:from-slate-600 hover:via-slate-700"
              >
                Analyze Agent Logic
                <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </motion.button>
            </div>
          </motion.div>

          {/* Column 3: Stacked Feature Agent Rows */}
          <div className="flex flex-col justify-between gap-2 md:col-span-2 lg:col-span-1 lg:max-h-[500px]">
            {reasoningAgents.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04, duration: 0.4 }}
                  whileHover={{ x: 3, backgroundColor: "rgba(148, 163, 184, 0.06)", borderColor: "rgba(148, 163, 184, 0.2)" }}
                  className="flex items-center gap-3.5 rounded-xl border border-slate-900 bg-slate-950/40 p-2.5 backdrop-blur-sm transition-all duration-300"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
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