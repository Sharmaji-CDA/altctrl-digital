"use client";

import { motion } from "framer-motion";
import {
  Building2,
  TrendingUp,
  CheckCircle2,
  HeartPulse,
  ShieldCheck,
  Building,
  ShoppingCart,
  ArrowRight,
} from "lucide-react";

const verticalAgents = [
  {
    icon: HeartPulse,
    title: "Healthcare Navigator",
    desc: "Automate appointment scheduling, provide pre-visit instructions, and answer common insurance querie...",
  },
  {
    icon: ShieldCheck,
    title: "Insurance Claims Agent",
    desc: "Streamline the claims process with an AI that can handle first notice of loss (FNOL), verify policy...",
  },
  {
    icon: Building,
    title: "Banking Assistant",
    desc: "Offer secure, instant support for common banking tasks like balance inquiries, transaction history, and...",
  },
  {
    icon: ShoppingCart,
    title: "Retail Concierge",
    desc: "Provide personalized product recommendations, track order status, and process returns or exchang...",
  },
];

export default function VerticalExpertise() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#0b0c1e] via-[#090d16] to-[#04050f] text-slate-100 py-6 px-4 sm:px-6 lg:px-8 lg:h-screen lg:flex lg:flex-col lg:justify-center">
      
      {/* Soft Signal Ambient Radials */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-[-10%] right-[20%] w-[500px] h-[500px] rounded-full bg-indigo-500/10 blur-[140px]" />
        <div className="absolute bottom-[5%] left-[15%] w-[400px] h-[400px] rounded-full bg-violet-500/5 blur-[120px]" />
        {/* Technical cross grid background pattern */}
        <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(to_right,#4f46e5_1px,transparent_1px),linear-gradient(to_bottom,#4f46e5_1px,transparent_1px)] bg-[size:36px_36px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl flex flex-col justify-between h-full lg:max-h-[750px]">
        
        {/* Header Block Group */}
        <div className="mb-6 lg:mb-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 mb-2">
            <Building2 size={12} className="text-indigo-400 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[2px] text-indigo-400/90">
              Agent Layer 03
            </span>
          </div>
          <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            Vertical Expertise
          </h1>
          <div className="mt-2 flex flex-col sm:flex-row sm:items-center gap-3 justify-center lg:justify-start">
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              Domain-specific intelligence tailored for specialized industries.
            </p>
            <div className="hidden sm:block h-[1px] flex-1 bg-gradient-to-r from-indigo-950/50 via-slate-800 to-transparent" />
          </div>
        </div>

        {/* 3-Column Asymmetrical Grid Matrix Layout */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 items-stretch h-full">
          
          {/* Card 1: Outcome Box */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-between rounded-2xl border border-slate-900 bg-slate-950/20 p-6 backdrop-blur-md lg:max-h-[500px]"
          >
            <div>
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 mb-5 border border-indigo-500/10">
                <CheckCircle2 size={18} />
              </div>
              <h2 className="text-base font-extrabold uppercase tracking-wide text-white">
                Outcome
              </h2>
              <p className="mt-3 text-xs leading-relaxed text-slate-400">
                Bespoke automation for specialized sectors with zero learning curve.
              </p>
            </div>

            {/* Badges metadata list footer */}
            <div className="mt-6 flex flex-wrap gap-1.5">
              <span className="rounded-md bg-indigo-500/10 px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-indigo-400 border border-indigo-500/10">
                Pre-trained Logic
              </span>
              <span className="rounded-md bg-slate-900 px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-slate-400 border border-slate-800/60">
                Instant Calibration
              </span>
              <span className="rounded-md bg-slate-900 px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-slate-400 border border-slate-800/60">
                Vertical Gating
              </span>
            </div>
          </motion.div>

          {/* Card 2: Strategic Central Core Panel */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="flex flex-col justify-between rounded-2xl border border-indigo-500/20 bg-gradient-to-b from-[#0b0d23] to-[#040510] p-6 shadow-[0_0_50px_rgba(79,70,229,0.02)] lg:max-h-[500px]"
          >
            <div>
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600/20 text-indigo-400 mb-5 shadow-[0_0_15px_rgba(79,70,229,0.15)] border border-indigo-500/20">
                <TrendingUp size={18} />
              </div>
              <h2 className="text-base font-extrabold uppercase tracking-wide text-white">
                ROI Strategy
              </h2>
              <p className="mt-3 text-xs leading-relaxed text-slate-300">
                Leverage pre-trained domain logic to accelerate time-to-value.
              </p>
            </div>

            {/* Interactive CTA Link Trigger */}
            <div className="mt-6">
              <motion.button
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-2.5 text-xs font-bold text-white transition-all shadow-lg hover:opacity-95 shadow-indigo-950/40"
              >
                Explore Industry Models
                <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </motion.button>
            </div>
          </motion.div>

          {/* Column 3: Feature Description Rows Stack */}
          <div className="flex flex-col justify-between gap-2 md:col-span-2 lg:col-span-1 lg:max-h-[500px]">
            {verticalAgents.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04, duration: 0.4 }}
                  whileHover={{ x: 3, backgroundColor: "rgba(79, 70, 229, 0.08)", borderColor: "rgba(79, 70, 229, 0.2)" }}
                  className="flex items-center gap-3.5 rounded-xl border border-slate-900 bg-slate-950/40 p-2.5 backdrop-blur-sm transition-all duration-300"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-indigo-400">
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