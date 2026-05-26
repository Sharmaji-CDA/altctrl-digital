"use client";

import { motion } from "framer-motion";
import {
  Network,
  TrendingUp,
  MessageSquare,
  Globe,
  Milestone,
  Layers,
  Route,
  ArrowRight,
} from "lucide-react";

const gatewayFeatures = [
  {
    icon: MessageSquare,
    title: "Interaction Hub",
    desc: "Unified Voice, Chat, Email, and Social engagement engine.",
  },
  {
    icon: Globe,
    title: "Customer Portals",
    desc: "Specialized gateways for Banking, Healthcare, Government, and more.",
  },
  {
    icon: Milestone,
    title: "Proactive Outbound",
    desc: "Intelligent campaign management with DNC list compliance.",
  },
  {
    icon: Layers,
    title: "Integration Ecosystem",
    desc: "Native connectors for Salesforce, Twilio, HubSpot, and 20+ more.",
  },
  {
    icon: Route,
    title: "Journey Analyzer",
    desc: "Cross-channel CX and Backoffice path visualization and optimization.",
  },
];

export default function ServiceGateways() {
  return (
    <section className="relative w-full overflow-hidden bg-[#030712] text-slate-100 py-6 px-4 sm:px-6 lg:px-16 lg:py-20 lg:flex lg:flex-col lg:justify-center">
      {/* Background Ambient Soft Signal Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-25">
        <div className="absolute top-[-10%] right-[15%] w-[400px] h-[400px] rounded-full bg-indigo-600/15 blur-[130px]" />
        <div className="absolute bottom-[10%] left-[15%] w-[350px] h-[350px] rounded-full bg-blue-500/5 blur-[110px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl flex flex-col justify-between h-full px-4 lg:px-8">
        {/* Header Block */}
        <div className="mb-6 lg:mb-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 mb-2">
            <Network size={12} className="text-indigo-400" />
            <span className="text-[10px] font-bold uppercase tracking-[2px] text-indigo-400/90">
              Category Layer 03
            </span>
          </div>
          <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            Service Gateways
          </h1>
          <div className="mt-2 flex flex-col sm:flex-row sm:items-center gap-3 justify-center lg:justify-start">
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              Specialized interfaces for specific industry verticals.
            </p>
            <div className="hidden sm:block h-[1px] flex-1 bg-gradient-to-r from-slate-800 to-transparent" />
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
            className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/30 p-5 backdrop-blur-md lg:max-h-[480px]"
          >
            <div>
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 mb-4">
                <Network size={18} />
              </div>
              <h2 className="text-base font-extrabold uppercase tracking-wide text-white">
                The Experience
              </h2>
              <p className="mt-3 text-xs leading-relaxed text-slate-400">
                Total channel freedom—Voice, Chat, Email, or Social—powered by a system
                that understands the nuance of your specific industry.
              </p>
            </div>

            {/* Badges Stack */}
            <div className="mt-6 flex flex-wrap gap-1.5">
              <span className="rounded-md bg-indigo-500/10 px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-indigo-400 border border-indigo-500/10">
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

          {/* Card 2: The Strategy */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="flex flex-col justify-between rounded-2xl border border-indigo-500/20 bg-gradient-to-b from-slate-950 to-[#0b0c1f] p-5 shadow-[0_0_50px_rgba(99,102,241,0.04)] lg:max-h-[480px]"
          >
            <div>
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-400 mb-4 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                <TrendingUp size={18} />
              </div>
              <h2 className="text-base font-extrabold uppercase tracking-wide text-white">
                The Strategy
              </h2>
              <p className="mt-3 text-xs leading-relaxed text-slate-300">
                Deploy pre-hardened gateways for regulated sectors. Use journey
                analyzers to eliminate churn and execute proactive outbound campaigns.
              </p>
            </div>

            {/* Interactive CTA button */}
            <div className="mt-6">
              <motion.button
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-bold text-slate-950 transition-all shadow-lg hover:bg-indigo-50"
              >
                Deploy Industry Gateway
                <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </motion.button>
            </div>
          </motion.div>

          {/* Column 3: Feature Rows Stack */}
          <div className="flex flex-col justify-between gap-2 md:col-span-2 lg:col-span-1 lg:max-h-[480px]">
            {gatewayFeatures.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  whileHover={{ x: 3, backgroundColor: "rgba(30, 41, 59, 0.4)" }}
                  className="flex items-center gap-3.5 rounded-xl border border-slate-900 bg-slate-950/40 p-2.5 backdrop-blur-sm transition-all duration-300"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-indigo-400">
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