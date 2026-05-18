import {
  ShieldCheck,
  Zap,
  Cpu,
  Search,
  Smile,
  Lock,
} from "lucide-react";

import { motion } from "framer-motion";

const features = [
  {
    icon: ShieldCheck,
    title: "99.9% Logic Accuracy",
    desc: "Deterministic kernels ensure your business rules are followed without LLM drift.",
    color: "from-emerald-500/20 to-emerald-500/5",
    iconColor: "text-emerald-400",
  },
  {
    icon: Zap,
    title: "Sub-200ms Latency",
    desc: "Optimized STT streams allow real-time human-parity conversations.",
    color: "from-blue-500/20 to-blue-500/5",
    iconColor: "text-blue-400",
  },
  {
    icon: Cpu,
    title: "Multi-LLM Arbitration",
    desc: "Dynamic routing across GPT-4, Claude, and Gemini based on task complexity.",
    color: "from-violet-500/20 to-violet-500/5",
    iconColor: "text-violet-400",
  },
  {
    icon: Search,
    title: "Contextual RAG",
    desc: "Hybrid semantic search retrieves relevant enterprise data in milliseconds.",
    color: "from-indigo-500/20 to-indigo-500/5",
    iconColor: "text-indigo-400",
  },
  {
    icon: Smile,
    title: "Empathy Detection",
    desc: "Proprietary kernels analyze acoustic sentiment and frustration levels.",
    color: "from-pink-500/20 to-pink-500/5",
    iconColor: "text-pink-400",
  },
  {
    icon: Lock,
    title: "PII Scrubbing",
    desc: "Native redaction of sensitive data before it reaches the reasoning layer.",
    color: "from-rose-500/20 to-rose-500/5",
    iconColor: "text-rose-400",
  },
];

export default function IntelligenceCore() {
  return (
    <section className="relative overflow-hidden bg-[#020617] px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-24">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_45%)]" />

      {/* LEFT GLOW */}
      <motion.div
        animate={{
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute left-[-200px] top-[100px] h-[350px] w-[350px] rounded-full bg-blue-500/20 blur-[120px]"
      />

      {/* RIGHT GLOW */}
      <motion.div
        animate={{
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute right-[-200px] top-[250px] h-[350px] w-[350px] rounded-full bg-violet-500/20 blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-[1280px]">

        {/* TOP */}
        <div className="mx-auto max-w-[760px] text-center">

          {/* BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 backdrop-blur-xl"
          >
            <div className="h-2 w-2 rounded-full bg-blue-400" />

            <span className="text-[10px] uppercase tracking-[3px] text-blue-300">
              Proprietary Neural Stack
            </span>
          </motion.div>

          {/* HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="text-[28px] font-black leading-[1] tracking-[-1px] sm:text-[32px] lg:text-[36px]"
          >
            The{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Intelligence
            </span>{" "}
            Core.
          </motion.h2>

          {/* DESC */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mx-auto mt-5 max-w-[620px] text-[12px] leading-6 text-slate-400 sm:text-[13px] lg:text-[14px]"
          >
            We've moved beyond generic wrappers. AltCtrl is built on a
            specialized infrastructure layer designed to handle the multi-modal
            cognitive load of global enterprise operations.
          </motion.p>
        </div>

        {/* GRID */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">

          {features.map((item, index) => {
            const Icon = item.icon;

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
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#071124]/80 p-5 backdrop-blur-2xl transition-all duration-500 hover:border-blue-500/30 hover:bg-[#0A162E]"
              >

                {/* CARD GLOW */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />

                <div className="relative z-10">

                  {/* ICON */}
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.04] ${item.iconColor}`}
                  >
                    <Icon size={20} />
                  </div>

                  {/* TITLE */}
                  <h3 className="mt-6 text-[18px] font-bold leading-tight text-white">
                    {item.title}
                  </h3>

                  {/* DESC */}
                  <p className="mt-4 text-[12px] leading-6 text-slate-400 sm:text-[13px]">
                    {item.desc}
                  </p>
                </div>

                {/* BORDER LIGHT */}
                <div className="absolute inset-0 rounded-[28px] border border-white/[0.04]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}