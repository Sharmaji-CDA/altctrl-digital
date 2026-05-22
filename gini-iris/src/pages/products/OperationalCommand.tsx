"use client";

import { motion } from "framer-motion";
import {
  Activity,
  TrendingUp,
  Radio,
  Sparkles,
  HeartHandshake,
  BarChart4,
  Cpu,
  ArrowRight,
} from "lucide-react";

const operationalFeatures = [
  {
    icon: Radio,
    title: "Supervisor Live",
    desc: "Real-time team status, briefings, and automated interaction assignment.",
  },
  {
    icon: Sparkles,
    title: "AI Coach & Gamification",
    desc: "Performance insights, team analytics, and adaptive microlearning.",
  },
  {
    icon: HeartHandshake,
    title: "Quality & Sentiments",
    desc: "Automated scorecards and proactive sentiment advice for every channel.",
  },
  {
    icon: BarChart4,
    title: "Workforce Management",
    desc: "Advanced forecasting, historical data analysis, and visual scheduling.",
  },
  {
    icon: Cpu,
    title: "Backoffice Automator",
    desc: "Workflow Designer, Ticketing, and OCR/ICR document processing.",
  },
];

export default function OperationalCommand() {
  return (
    <section className="relative w-full overflow-hidden bg-[#030712] text-slate-100 py-6 px-4 sm:px-6 lg:px-8 lg:py-20  lg:flex lg:flex-col lg:justify-center">
      {/* Background Ambient Vivid Red Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-25">
        <div className="absolute top-[-10%] right-[20%] w-[400px] h-[400px] rounded-full bg-red-600/10 blur-[130px]" />
        <div className="absolute bottom-[10%] left-[10%] w-[350px] h-[350px] rounded-full bg-rose-500/5 blur-[110px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl flex flex-col justify-between h-full lg:max-h-[750px]">
        {/* Header Block */}
        <div className="mb-6 lg:mb-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 mb-2">
            <Activity size={12} className="text-red-500" />
            <span className="text-[10px] font-bold uppercase tracking-[2px] text-red-500">
              Category Layer 02
            </span>
          </div>
          <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            Operational Command
          </h1>
          <div className="mt-2 flex flex-col sm:flex-row sm:items-center gap-3 justify-center lg:justify-start">
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              Precision management tools for supervisors and backoffice engineers.
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
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-rose-500/10 text-rose-400 mb-4">
                <Activity size={18} />
              </div>
              <h2 className="text-base font-extrabold uppercase tracking-wide text-white">
                The Experience
              </h2>
              <p className="mt-3 text-xs leading-relaxed text-slate-400">
                Service quality remains consistent as AI coaches human agents in real-time
                and automates the tedious backoffice friction points.
              </p>
            </div>

            {/* Badges Stack */}
            <div className="mt-6 flex flex-wrap gap-1.5">
              <span className="rounded-md bg-red-500/10 px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-red-400 border border-red-500/10">
                100% Interaction QA
              </span>
              <span className="rounded-md bg-slate-800 px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-slate-400">
                Predictive WFM Engine
              </span>
              <span className="rounded-md bg-slate-800 px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-slate-400">
                Live AI Coaching
              </span>
            </div>
          </motion.div>

          {/* Card 2: The Strategy */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="flex flex-col justify-between rounded-2xl border border-red-500/20 bg-gradient-to-b from-slate-950 to-[#140608] p-5 shadow-[0_0_50px_rgba(239,68,68,0.04)] lg:max-h-[480px]"
          >
            <div>
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-red-500/20 text-red-400 mb-4 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                <TrendingUp size={18} />
              </div>
              <h2 className="text-base font-extrabold uppercase tracking-wide text-white">
                The Strategy
              </h2>
              <p className="mt-3 text-xs leading-relaxed text-slate-300">
                Scale operations without adding headcount. Automate 100% of QA and
                Sentiment tracking while accurately predicting future staffing
                requirements.
              </p>
            </div>

            {/* Button Component */}
            <div className="mt-6">
              <motion.button
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-bold text-slate-950 transition-all shadow-lg hover:bg-red-50"
              >
                Demo Operational Suite
                <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </motion.button>
            </div>
          </motion.div>

          {/* Column 3: Feature Rows Stack */}
          <div className="flex flex-col justify-between gap-2 md:col-span-2 lg:col-span-1 lg:max-h-[480px]">
            {operationalFeatures.map((item, index) => {
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