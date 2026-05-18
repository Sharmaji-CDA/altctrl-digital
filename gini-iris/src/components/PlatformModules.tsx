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
    desc: "Deploy and govern specialized AI agents pre-trained on your business logic.",
    points: [
      "Autonomous Reasoning Cycle",
      "Organization Persona Playground",
      "Assistance Rules Engine",
      "Deterministic Guardrails",
    ],
    color: "text-[#EC1C24]",
    glow: "from-[#EC1C24]/20 to-[#EC1C24]/5",
    border: "border-[#EC1C24]/20",
  },

  {
    icon: Activity,
    title: "CX Operations Command Center",
    desc: "Omni-channel orchestration for Voice, Chat, Email, and Social interactions.",
    points: [
      "Live Supervisor Dashboard",
      "Real-Time Interaction Assignments",
      "Omni-Channel Inbox",
      "CX Journey Analyzer",
    ],
    color: "text-emerald-400",
    glow: "from-emerald-500/20 to-emerald-500/5",
    border: "border-emerald-500/20",
  },

  {
    icon: ShieldCheck,
    title: "Quality & Sentiment BI",
    desc: "Automated scoring and real-time emotional intelligence monitoring.",
    points: [
      "100% Automated QA Auditing",
      "Real-Time Sentiment Prioritization",
      "Coaching Recommendations",
    ],
    color: "text-violet-400",
    glow: "from-violet-500/20 to-violet-500/5",
    border: "border-violet-500/20",
  },

  {
    icon: Workflow,
    title: "Backoffice & Workflow",
    desc: "Automate internal business processes with low-code orchestration tools.",
    points: [
      "Integrated Ticketing System",
      "Low-Code Workflow Designer",
      "Backoffice Journey Analyzer",
    ],
    color: "text-pink-400",
    glow: "from-pink-500/20 to-pink-500/5",
    border: "border-pink-500/20",
  },

  {
    icon: BarChart3,
    title: "Workforce & Learning",
    desc: "Scale teams with intelligent forecasting, adaptive training, and analytics.",
    points: [
      "WFM Forecasting & Scheduler",
      "Adaptive Learning Paths",
      "Knowledge Base (Wiki)",
    ],
    color: "text-orange-400",
    glow: "from-orange-500/20 to-orange-500/5",
    border: "border-orange-500/20",
  },

  {
    icon: Database,
    title: "DataSphere & Connectivity",
    desc: "Secure integrations and enterprise-grade data connectivity infrastructure.",
    points: [
      "20+ CRM & Telephony Integrations",
      "Secure PII Masking",
      "SaaS or Self-Hosted",
    ],
    color: "text-cyan-400",
    glow: "from-cyan-500/20 to-cyan-500/5",
    border: "border-cyan-500/20",
  },
];

export default function PlatformModules() {
  return (
    <section className="relative overflow-hidden bg-black px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-24">

      {/* BG */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(236,28,36,0.08),transparent_45%)]" />

      {/* RED GLOW */}
      <motion.div
        animate={{
          opacity: [0.08, 0.18, 0.08],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute left-[-150px] top-[100px] h-[300px] w-[300px] rounded-full bg-[#EC1C24]/20 blur-[120px]"
      />

      {/* CYAN GLOW */}
      <motion.div
        animate={{
          opacity: [0.08, 0.16, 0.08],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute right-[-120px] bottom-[100px] h-[260px] w-[260px] rounded-full bg-cyan-500/10 blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-[1280px]">

        {/* TOP */}
        <div className="mx-auto max-w-[760px] text-center">

          {/* BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#EC1C24]/20 bg-[#EC1C24]/10 px-4 py-2 backdrop-blur-xl"
          >
            <div className="h-2 w-2 rounded-full bg-[#EC1C24]" />

            <span className="text-[10px] uppercase tracking-[3px] text-[#ff6b72]">
              Platform Ecosystem
            </span>
          </motion.div>

          {/* HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="text-[32px] font-black leading-[1] tracking-[-2px] sm:text-[42px] lg:text-[58px]"
          >
            A-Grade Efficiencies.
            <br />

            <span className="bg-gradient-to-r from-[#EC1C24] via-[#ff4d55] to-cyan-400 bg-clip-text text-transparent">
              Across Every Module.
            </span>
          </motion.h2>

          {/* DESC */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mx-auto mt-6 max-w-[620px] text-[13px] leading-7 text-slate-400 sm:text-[14px]"
          >
            We've built specialized enterprise toolsets for every stakeholder —
            from live supervisors to backoffice engineers.
          </motion.p>
        </div>

        {/* GRID */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {modules.map((module, index) => {
            const Icon = module.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -6,
                }}
                className={`group relative overflow-hidden rounded-[32px] border bg-white/[0.03] p-7 backdrop-blur-2xl transition-all duration-500 hover:bg-white/[0.05] ${module.border}`}
              >

                {/* BG GLOW */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${module.glow} opacity-0 transition-all duration-500 group-hover:opacity-100`}
                />

                {/* NUMBER */}
                <div className="pointer-events-none absolute right-4 top-2 text-[90px] font-black leading-none tracking-[-6px] text-white/[0.03]">
                  0{index + 1}
                </div>

                {/* ICON */}
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 0px currentColor",
                      "0 0 16px currentColor",
                      "0 0 0px currentColor",
                    ],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                  className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br ${module.glow} ${module.color} transition-all duration-500 group-hover:shadow-[0_0_30px_currentColor]`}
                >

                  {/* EXTRA GLOW */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${module.glow} opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-100`}
                  />

                  <Icon
                    size={22}
                    className="relative z-10 transition-all duration-500 group-hover:scale-110"
                  />
                </motion.div>

                {/* CONTENT */}
                <div className="relative z-10">

                  {/* TITLE */}
                  <h3 className="mt-6 text-[22px] font-bold leading-tight text-white">
                    {module.title}
                  </h3>

                  {/* DESC */}
                  <p className="mt-5 text-[13px] leading-7 text-slate-400">
                    {module.desc}
                  </p>

                  {/* DIVIDER */}
                  <div className="mt-6 h-px w-full bg-white/10" />

                  {/* POINTS */}
                  <div className="mt-6 space-y-4">

                    {module.points.map((point, i) => (
                      <motion.div
                        key={i}
                        whileHover={{
                          x: 4,
                        }}
                        className="flex items-start gap-3"
                      >

                        <CheckCircle2
                          size={14}
                          className={`${module.color} mt-[2px] shrink-0`}
                        />

                        <p className="text-[10px] font-semibold uppercase tracking-[1.5px] text-slate-300">
                          {point}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* RUNNING LIGHT */}
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
                  className="absolute top-0 h-full w-[80px] rotate-[20deg] bg-white/[0.03] blur-xl"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}