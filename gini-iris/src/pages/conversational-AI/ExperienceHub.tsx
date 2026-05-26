"use client";

import { motion } from "framer-motion";
import {
  Layers,
  TrendingUp,
  UserCheck,
  ShieldCheck,
  Eye,
  Network,
  RefreshCw,
  Globe,
  ArrowRight,
} from "lucide-react";

const experienceFeatures = [
  {
    icon: ShieldCheck,
    title: "Brand Voice Consistency",
    desc: "Maintain a consistent brand tone and message across all automated interactions. Set rules and parameters...",
  },
  {
    icon: Eye,
    title: "AI Transparency",
    desc: "Builds user trust by making it clear they are interacting with an AI, which helps manage customer expectations.",
  },
  {
    icon: Network,
    title: "Omnichannel Presence",
    desc: "Engage customers on their preferred channel, whether it's web chat, social media, SMS, or voice...",
  },
  {
    icon: RefreshCw,
    title: "Intelligent Handoff",
    desc: "When an issue requires a human touch, AltCtrl Bot seamlessly transfers the full context of the conversation.",
  },
  {
    icon: Globe,
    title: "Global Language & Dialect Support",
    desc: "Speak your customers' language. AltCtrl Bot supports multiple languages and understands localized slang.",
  },
];

export default function ExperienceHub() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#021f1e] via-[#091522] to-[#011411] text-slate-100 py-6 px-4 sm:px-6 lg:px-16 lg:py-20 lg:flex lg:flex-col lg:justify-center">
      
      {/* Quantum Teal Core Lighting Atmosphere */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-25">
        <div className="absolute top-[-12%] left-[25%] w-[550px] h-[550px] rounded-full bg-teal-500/10 blur-[140px]" />
        <div className="absolute bottom-[5%] right-[8%] w-[450px] h-[450px] rounded-full bg-emerald-500/5 blur-[120px]" />
        {/* Engineering blueprint line system */}
        <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(to_right,#0d9488_1px,transparent_1px),linear-gradient(to_bottom,#0d9488_1px,transparent_1px)] bg-[size:36px_36px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl flex flex-col justify-between h-full px-4 lg:px-8">
        
        {/* Title Block Header Group */}
        <div className="mb-6 lg:mb-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 mb-2">
            <Layers size={12} className="text-teal-400 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[2px] text-teal-400/90">
              Capability Layer 02
            </span>
          </div>
          <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            Experience Hub
          </h1>
          <div className="mt-2 flex flex-col sm:flex-row sm:items-center gap-3 justify-center lg:justify-start">
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              Frictionless engagement across every preferred enterprise channel.
            </p>
            <div className="hidden sm:block h-[1px] flex-1 bg-gradient-to-r from-teal-950/50 via-slate-800 to-transparent" />
          </div>
        </div>

        {/* 3-Column Asymmetrical Grid Matrix Layout */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 items-stretch h-full">
          
          {/* Card 1: Outcome Panel Workspace */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-900/10 p-6 backdrop-blur-md lg:max-h-[500px]"
          >
            <div>
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-teal-500/10 text-teal-400 mb-5 border border-teal-500/10">
                <UserCheck size={18} />
              </div>
              <h2 className="text-base font-extrabold uppercase tracking-wide text-white">
                Outcome
              </h2>
              <p className="mt-3 text-xs leading-relaxed text-slate-400">
                Omnichannel presence ensures your enterprise ecosystem is available 
                wherever the client wants to communicate, maintaining immediate service state.
              </p>
            </div>

            {/* Strategy Micro Metadata */}
            <div className="mt-6 flex flex-wrap gap-1.5">
              <span className="rounded-md bg-teal-500/10 px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-teal-400 border border-teal-500/10">
                Omnichannel Sync
              </span>
              <span className="rounded-md bg-slate-800 px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-slate-400">
                Vertical Logic Gating
              </span>
              <span className="rounded-md bg-slate-800 px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-slate-400">
                Journey Analytics
              </span>
            </div>
          </motion.div>

          {/* Card 2: Strategy Action Hub Callout */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="flex flex-col justify-between rounded-2xl border border-teal-500/20 bg-gradient-to-b from-[#022322] to-[#010f0e] p-6 shadow-[0_0_50px_rgba(13,148,136,0.02)] lg:max-h-[500px]"
          >
            <div>
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-teal-600/20 text-teal-400 mb-5 shadow-[0_0_15px_rgba(13,148,136,0.15)] border border-teal-500/20">
                <TrendingUp size={18} />
              </div>
              <h2 className="text-base font-extrabold uppercase tracking-wide text-white">
                ROI Strategy
              </h2>
              <p className="mt-3 text-xs leading-relaxed text-slate-300">
                Maintain total brand voice consistency while supporting global languages 
                natively. Eliminate multi-region agent scaling overhead completely.
              </p>
            </div>

            {/* Action Interaction CTA */}
            <div className="mt-6">
              <motion.button
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 px-4 py-2.5 text-xs font-bold text-white transition-all shadow-lg hover:opacity-95 shadow-teal-950/40"
              >
                View Standards
                <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </motion.button>
            </div>
          </motion.div>

          {/* Column 3: Stacked Feature Row Rows */}
          <div className="flex flex-col justify-between gap-2 md:col-span-2 lg:col-span-1 lg:max-h-[500px]">
            {experienceFeatures.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04, duration: 0.4 }}
                  whileHover={{ x: 3, backgroundColor: "rgba(13, 148, 136, 0.1)", borderColor: "rgba(13, 148, 136, 0.2)" }}
                  className="flex items-center gap-3.5 rounded-xl border border-slate-900 bg-slate-950/40 p-2.5 backdrop-blur-sm transition-all duration-300"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-teal-400">
                    <Icon size={14} />
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