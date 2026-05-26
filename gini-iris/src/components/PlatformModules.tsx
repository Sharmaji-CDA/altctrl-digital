"use client";

import {
  Bot,
  Activity,
  ShieldCheck,
  Workflow,
  BarChart3,
  Database,
  CheckCircle2,
} from "lucide-react";

import { motion } from "framer-motion";

const modules = [
  {
    icon: Bot,
    title: "AI Workforce & Intelligence",
    desc: "Deploy and govern specialized AI agents trained on your business logic.",
    points: [
      "Autonomous Reasoning Cycle",
      "Persona Playground",
      "Rules Engine",
      "Deterministic Guardrails",
    ],
    color: "text-[#EC1C24]",
    glow: "from-[#EC1C24]/20 to-[#EC1C24]/5",
    border: "border-[#EC1C24]/20",
  },

  {
    icon: Activity,
    title: "CX Operations Center",
    desc: "Omni-channel orchestration for enterprise interactions.",
    points: [
      "Supervisor Dashboard",
      "Live Assignments",
      "Unified Inbox",
      "Journey Analyzer",
    ],
    color: "text-emerald-400",
    glow: "from-emerald-500/20 to-emerald-500/5",
    border: "border-emerald-500/20",
  },

  {
    icon: ShieldCheck,
    title: "Quality & Sentiment BI",
    desc: "Automated scoring and emotional intelligence monitoring.",
    points: [
      "Automated QA Auditing",
      "Sentiment Prioritization",
      "Coaching Insights",
    ],
    color: "text-violet-400",
    glow: "from-violet-500/20 to-violet-500/5",
    border: "border-violet-500/20",
  },

  {
    icon: Workflow,
    title: "Backoffice & Workflow",
    desc: "Automate operations using low-code orchestration tools.",
    points: [
      "Integrated Ticketing",
      "Workflow Designer",
      "Journey Analyzer",
    ],
    color: "text-pink-400",
    glow: "from-pink-500/20 to-pink-500/5",
    border: "border-pink-500/20",
  },

  {
    icon: BarChart3,
    title: "Workforce & Learning",
    desc: "Forecasting, adaptive training, and performance analytics.",
    points: [
      "WFM Forecasting",
      "Adaptive Learning",
      "Knowledge Base",
    ],
    color: "text-orange-400",
    glow: "from-orange-500/20 to-orange-500/5",
    border: "border-orange-500/20",
  },

  {
    icon: Database,
    title: "DataSphere & Connectivity",
    desc: "Enterprise-grade integrations and secure connectivity.",
    points: [
      "20+ Integrations",
      "Secure PII Masking",
      "Self-Hosted Options",
    ],
    color: "text-cyan-400",
    glow: "from-cyan-500/20 to-cyan-500/5",
    border: "border-cyan-500/20",
  },
];

export default function PlatformModules() {
  return (
    <section className="bg-black px-4 py-12 text-white sm:px-6 lg:px-16 lg:py-20">

      {/* BG */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(236,28,36,0.08),transparent_45%)]" />

      {/* GLOWS */}
      <motion.div
        animate={{
          opacity: [0.06, 0.14, 0.06],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute left-[-100px] top-[80px] h-[220px] w-[220px] rounded-full bg-[#EC1C24]/15 blur-[90px]"
      />

      <motion.div
        animate={{
          opacity: [0.06, 0.12, 0.06],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute right-[-80px] bottom-[80px] h-[220px] w-[220px] rounded-full bg-cyan-500/10 blur-[90px]"
      />

      <div className="mx-auto max-w-[1220px] px-4 lg:px-8">

        {/* TOP */}
        <div className="mx-auto max-w-[700px] text-center">

          {/* BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#EC1C24]/20 bg-[#EC1C24]/10 px-3 py-1.5 backdrop-blur-xl"
          >

            <div className="h-1.5 w-1.5 rounded-full bg-[#EC1C24]" />

            <span className="text-[9px] uppercase tracking-[2px] text-[#ff6b72]">
              Platform Ecosystem
            </span>
          </motion.div>

          {/* HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-[28px] font-black leading-[0.95] tracking-[-2px] sm:text-[38px] lg:text-[50px]"
          >

            A-Grade Efficiencies.
            <br />

            <span className="bg-gradient-to-r from-[#EC1C24] via-[#ff4d55] to-cyan-400 bg-clip-text text-transparent">
              Across Every Module.
            </span>
          </motion.h2>

          {/* DESC */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mx-auto mt-5 max-w-[560px] text-[12px] leading-6 text-slate-400 sm:text-[13px]"
          >

            Specialized enterprise tools for supervisors,
            operations teams, and AI-powered workflows.
          </motion.p>
        </div>

        {/* GRID */}
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">

          {modules.map((module, index) => {
            const Icon = module.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -4,
                }}
                className={`group relative overflow-hidden rounded-[24px] border bg-white/[0.03] p-5 backdrop-blur-2xl transition-all duration-500 hover:bg-white/20 hover:border-white/40 ${module.border}`}
              >

                {/* BG GLOW */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${module.glow} opacity-0 transition-all duration-500 group-hover:opacity-100`}
                />

                {/* NUMBER */}
                <div className="pointer-events-none absolute right-3 top-1 text-[60px] font-black leading-none tracking-[-4px] text-white/[0.03]">
                  0{index + 1}
                </div>

                {/* ICON */}
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 0px currentColor",
                      "0 0 12px currentColor",
                      "0 0 0px currentColor",
                    ],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                  className={`relative z-10 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br ${module.glow} ${module.color}`}
                >

                  <Icon
                    size={18}
                    className="relative z-10 transition-all duration-500 group-hover:scale-110"
                  />
                </motion.div>

                {/* CONTENT */}
                <div className="relative z-10">

                  {/* TITLE */}
                  <h3 className="mt-4 text-[16px] font-bold leading-tight text-white">
                    {module.title}
                  </h3>

                  {/* DESC */}
                  <p className="mt-3 text-[11px] leading-6 text-slate-400">
                    {module.desc}
                  </p>

                  {/* DIVIDER */}
                  <div className="mt-4 h-px w-full bg-white/10" />

                  {/* POINTS */}
                  <div className="mt-4 space-y-3">

                    {module.points.map((point, i) => (
                      <motion.div
                        key={i}
                        whileHover={{
                          x: 3,
                        }}
                        className="flex items-start gap-2.5"
                      >

                        <CheckCircle2
                          size={13}
                          className={`${module.color} mt-[2px] shrink-0`}
                        />

                        <p className="text-[9px] font-semibold uppercase tracking-[1.2px] text-slate-300">
                          {point}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* LIGHT */}
                <motion.div
                  animate={{
                    x: ["-120%", "220%"],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                    delay: index * 0.4,
                  }}
                  className="absolute top-0 h-full w-[60px] rotate-[20deg] bg-white/[0.03] blur-xl"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}