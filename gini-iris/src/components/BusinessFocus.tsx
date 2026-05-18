import { Cpu, Layers3, Target } from "lucide-react";
import { motion } from "framer-motion";

const cards = [
  {
    icon: Cpu,
    title: "Native AI Core",
    subtitle: "Built for tokens, not seats.",
    color: "text-blue-400",
    glow: "from-blue-500/20 to-blue-500/5",
    border: "border-blue-500/20",
    bg: "bg-blue-500/10",
  },

  {
    icon: Layers3,
    title: "Zero-Legacy Stack",
    subtitle: "No technical debt, ever.",
    color: "text-violet-400",
    glow: "from-violet-500/20 to-violet-500/5",
    border: "border-violet-500/20",
    bg: "bg-violet-500/10",
  },

  {
    icon: Target,
    title: "Precision Results",
    subtitle: "Deterministic outcomes only.",
    color: "text-emerald-400",
    glow: "from-emerald-500/20 to-emerald-500/5",
    border: "border-emerald-500/20",
    bg: "bg-emerald-500/10",
  },
];

export default function BusinessFocus() {
  return (
    <section className="relative overflow-hidden bg-black px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-24">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.08),transparent_40%)]" />

      {/* LEFT GLOW */}
      <motion.div
        animate={{
          opacity: [0.08, 0.18, 0.08],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute left-[-120px] top-[100px] h-[260px] w-[260px] rounded-full bg-[#EC1C24]/15 blur-[120px]"
      />

      {/* RIGHT GLOW */}
      <motion.div
        animate={{
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute right-[-100px] bottom-[100px] h-[260px] w-[260px] rounded-full bg-blue-500/10 blur-[120px]"
      />

      {/* ANGLED BG */}
      <div className="absolute right-[-200px] top-0 hidden h-full w-[45%] rotate-[-10deg] bg-white/[0.02] blur-3xl lg:block" />

      <div className="relative z-10 mx-auto max-w-[1200px]">

        {/* TOP */}
        <div className="mx-auto max-w-[900px] text-center">

          {/* BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 backdrop-blur-xl"
          >
            <div className="h-2 w-2 rounded-full bg-blue-400" />

            <span className="text-[10px] uppercase tracking-[3px] text-blue-300">
              Abstraction Layer
            </span>
          </motion.div>

          {/* HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="text-[38px] font-black leading-[0.95] tracking-[-2px] sm:text-[54px] lg:text-[82px]"
          >
            Focus on Business,
            <br />

            <span className="bg-gradient-to-r from-blue-400 via-[#4f7cff] to-cyan-400 bg-clip-text text-transparent">
              not the Tech.
            </span>
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mx-auto mt-8 max-w-[920px] text-[15px] leading-9 text-slate-400 sm:text-[16px]"
          >
            The AI landscape moves at lightspeed.
            We handle the{" "}

            <span className="font-semibold text-white">
              multi-model orchestration
            </span>
            ,{" "}

            <span className="font-semibold text-white">
              vector latency
            </span>
            , and{" "}

            <span className="font-semibold text-white">
              logic hardening
            </span>{" "}

            so you can focus entirely on strategy and growth.
          </motion.p>
        </div>

        {/* CARDS */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                }}
                className={`group relative overflow-hidden rounded-[36px] border bg-white/[0.03] p-10 backdrop-blur-2xl transition-all duration-500 hover:bg-white/[0.05] hover:shadow-[0_0_50px_rgba(255,255,255,0.05)] ${card.border}`}
              >

                {/* BG GLOW */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${card.glow} opacity-0 transition-all duration-500 group-hover:opacity-100`}
                />

                {/* RUNNING LIGHT */}
                <motion.div
                  animate={{
                    x: ["-120%", "220%"],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                    delay: index * 0.3,
                  }}
                  className="absolute top-0 h-full w-[90px] rotate-[20deg] bg-white/[0.04] blur-2xl"
                />

                {/* ICON */}
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 0px currentColor",
                      "0 0 18px currentColor",
                      "0 0 0px currentColor",
                    ],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                  className={`relative z-10 flex h-24 w-24 items-center justify-center rounded-[28px] border border-white/10 ${card.bg} ${card.color} transition-all duration-500 group-hover:shadow-[0_0_40px_currentColor]`}
                >

                  {/* EXTRA GLOW */}
                  <div
                    className={`absolute inset-0 rounded-[28px] bg-gradient-to-br ${card.glow} opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-100`}
                  />

                  <Icon
                    size={40}
                    className="relative z-10 transition-all duration-500 group-hover:scale-110"
                  />
                </motion.div>

                {/* CONTENT */}
                <div className="relative z-10">

                  <h3 className="mt-10 text-[34px] font-bold leading-tight text-white">
                    {card.title}
                  </h3>

                  <p className="mt-4 text-[11px] font-semibold uppercase tracking-[3px] text-slate-500">
                    {card.subtitle}
                  </p>
                </div>

                {/* BOTTOM LIGHT */}
                <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}