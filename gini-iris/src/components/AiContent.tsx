"use client";

import {
  Cpu,
  Sparkles,
  Database,
  Server,
  CircleDot,
  Boxes,
} from "lucide-react";

import { motion } from "framer-motion";

const partners = [
  {
    icon: Cpu,
    name: "OpenAI",
    color: "text-[#EC1C24]",
    glow: "from-[#EC1C24]/20 to-[#EC1C24]/5",
    border: "border-[#EC1C24]/20",
  },

  {
    icon: Boxes,
    name: "Anthropic",
    color: "text-orange-400",
    glow: "from-orange-500/20 to-orange-500/5",
    border: "border-orange-500/20",
  },

  {
    icon: Sparkles,
    name: "Google Gemini",
    color: "text-blue-400",
    glow: "from-blue-500/20 to-blue-500/5",
    border: "border-blue-500/20",
  },

  {
    icon: Database,
    name: "AWS",
    color: "text-cyan-400",
    glow: "from-cyan-500/20 to-cyan-500/5",
    border: "border-cyan-500/20",
  },

  {
    icon: Server,
    name: "Azure",
    color: "text-violet-400",
    glow: "from-violet-500/20 to-violet-500/5",
    border: "border-violet-500/20",
  },

  {
    icon: CircleDot,
    name: "Pinecone",
    color: "text-emerald-400",
    glow: "from-emerald-500/20 to-emerald-500/5",
    border: "border-emerald-500/20",
  },
];

export default function PartnerEcosystem() {
  return (
    <section className="relative overflow-hidden bg-black px-4 py-12 sm:px-6 lg:px-16 lg:py-16">

      {/* BG */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.08),transparent_45%)]" />

      {/* LEFT GLOW */}
      <motion.div
        animate={{
          opacity: [0.05, 0.12, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute left-[-80px] top-[40px] h-[220px] w-[220px] rounded-full bg-blue-500/10 blur-[90px]"
      />

      {/* RIGHT GLOW */}
      <motion.div
        animate={{
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute right-[-80px] bottom-[20px] h-[220px] w-[220px] rounded-full bg-[#EC1C24]/10 blur-[90px]"
      />

      <div className="mx-auto max-w-[1200px] px-4 lg:px8">

        {/* TOP TEXT */}
        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{ once: true }}
          className="text-center"
        >

          <p className="text-[10px] font-semibold uppercase tracking-[5px] text-slate-500 sm:text-[11px]">
            Orchestrating The World&apos;s Leading Models & Infra
          </p>
        </motion.div>

        {/* LOGOS */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">

          {partners.map((partner, index) => {
            const Icon = partner.icon;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -4,
                }}
                className={`group relative overflow-hidden rounded-[22px] border bg-white/[0.03] px-3 py-5 backdrop-blur-2xl transition-all duration-500 hover:bg-white/[0.05] ${partner.border}`}
              >

                {/* BG GLOW */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${partner.glow} opacity-0 transition-all duration-500 group-hover:opacity-100`}
                />

                {/* LIGHT */}
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
                  className="absolute top-0 h-full w-[60px] rotate-[20deg] bg-white/[0.03] blur-xl"
                />

                {/* CONTENT */}
                <div className="relative z-10 flex items-center justify-center gap-3">

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
                    className={`flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] ${partner.color}`}
                  >

                    <Icon
                      size={18}
                      className="transition-all duration-500 group-hover:scale-110"
                    />
                  </motion.div>

                  {/* TEXT */}
                  <h3 className="text-[15px] font-bold text-white transition-all duration-300 group-hover:text-white">
                    {partner.name}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}