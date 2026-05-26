"use client";

import {
  Shield,
  Target,
  Lock,
  Fingerprint,
  Server,
  Globe,
} from "lucide-react";

import { motion } from "framer-motion";

const securityCards = [
  {
    icon: Shield,
    title: "Zero-Retention PII Masking",
    desc: "Sensitive data is redacted locally before transit.",

    // SYNTHETIC ROSE
    color: "text-rose-300",
    glow: "from-rose-500/20 via-pink-500/10 to-transparent",
    border: "border-rose-500/15",
    softGlow: "bg-rose-500/20",
  },

  {
    icon: Target,
    title: "Deterministic Guardrails",
    desc: "LLM outputs are restricted to verified business rules.",

    color: "text-fuchsia-300",
    glow: "from-fuchsia-500/20 via-pink-500/10 to-transparent",
    border: "border-fuchsia-500/15",
    softGlow: "bg-fuchsia-500/20",
  },

  {
    icon: Lock,
    title: "Immutable Audit Trails",
    desc: "All actions are securely logged with encrypted traceability.",

    color: "text-purple-300",
    glow: "from-purple-500/20 via-violet-500/10 to-transparent",
    border: "border-purple-500/15",
    softGlow: "bg-purple-500/20",
  },

  {
    icon: Fingerprint,
    title: "Biometric Verification",
    desc: "Advanced speaker verification across enterprise workflows.",

    color: "text-pink-300",
    glow: "from-pink-500/20 via-rose-500/10 to-transparent",
    border: "border-pink-500/15",
    softGlow: "bg-pink-500/20",
  },

  {
    icon: Server,
    title: "Hardware Isolation",
    desc: "Dedicated compute kernels ensure strict tenant separation.",

    color: "text-red-300",
    glow: "from-red-500/20 via-rose-500/10 to-transparent",
    border: "border-red-500/15",
    softGlow: "bg-red-500/20",
  },

  {
    icon: Globe,
    title: "Regional Sovereignty",
    desc: "Deploy globally while maintaining residency compliance.",

    color: "text-orange-200",
    glow: "from-orange-500/20 via-rose-500/10 to-transparent",
    border: "border-orange-500/15",
    softGlow: "bg-orange-500/20",
  },
];

export default function EnterpriseTrust() {
  return (
    <section className="relative overflow-hidden bg-[#07010A] px-4 py-14 text-white sm:px-6 lg:px-16 lg:py-20">

      {/* BG */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,63,94,0.10),transparent_45%)]" />

      {/* LEFT GLOW */}
      <div className="absolute left-[-120px] top-[120px] h-[240px] w-[240px] rounded-full bg-rose-500/15 blur-[120px]" />

      {/* RIGHT GLOW */}
      <div className="absolute right-[-120px] bottom-[60px] h-[240px] w-[240px] rounded-full bg-fuchsia-500/10 blur-[120px]" />

      <div className="mx-auto max-w-[1200px] px- lg:px-8">

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">

          {/* LEFT */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: false,
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
            }}
          >

            {/* BADGE */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: false,
                amount: 0.5,
              }}
              transition={{
                duration: 0.6,
              }}
              className="inline-flex items-center gap-2 rounded-full border border-rose-500/20 bg-rose-500/10 px-3 py-1.5 backdrop-blur-xl"
            >

              <div className="h-1.5 w-1.5 rounded-full bg-rose-400" />

              <span className="text-[9px] font-semibold uppercase tracking-[2px] text-rose-300">
                Mission-Critical Reliability
              </span>
            </motion.div>

            {/* HEADING */}
            <motion.h2
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: false,
                amount: 0.3,
              }}
              transition={{
                duration: 0.8,
              }}
              className="mt-6 text-[34px] font-black leading-[0.95] tracking-[-2px] sm:text-[46px] lg:text-[58px]"
            >

              Enterprise Trust,
              <br />

              <span className="bg-gradient-to-r from-rose-300 via-pink-300 to-fuchsia-300 bg-clip-text text-transparent">
                Built-in.
              </span>
            </motion.h2>

            {/* DESC */}
            <motion.p
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: false,
                amount: 0.3,
              }}
              transition={{
                duration: 0.9,
              }}
              className="mt-5 max-w-[400px] text-[14px] leading-7 text-slate-400"
            >
              Security is built directly into the infrastructure with
              zero-trust architecture across every layer.
            </motion.p>

            {/* TERMINAL */}
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: false,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
              }}
              whileHover={{
                y: -4,
              }}
              className="mt-7 rounded-[24px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition-all duration-300 hover:border-rose-500/20"
            >

              {/* GLOW */}
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/[0.05] via-pink-500/[0.03] to-transparent" />

              {/* LIGHT SWEEP */}
              <motion.div
                animate={{
                  x: ["-120%", "220%"],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute top-0 h-full rotate-[20deg] bg-white/[0.03] blur-xl"
              />

              {/* TOP */}
              <div className="flex items-center gap-2">

                <div className="text-rose-300">
                  ❯_
                </div>

                <p className="text-[11px] font-medium text-rose-200">
                  node_security_audit_v2.log
                </p>
              </div>

              {/* LOGS */}
              <div className="mt-6 space-y-3 font-mono text-[10px] uppercase tracking-[1px] text-slate-500">

                <div>
                  [SEC] INITIALIZING ZERO-TRUST HANDSHAKE...
                </div>

                <div>
                  [SEC] PII SCRUBBING KERNEL: ACTIVE
                </div>

                <div>
                  [SEC] HARDENED LOGIC GATE: VERIFIED
                </div>

                <div>
                  [SEC] ROTATING ENCRYPTION KEYS...
                </div>
              </div>

              {/* PROGRESS */}
              <div className="h-full w-[40%] rounded-full bg-gradient-to-r from-rose-400 via-pink-400 to-fuchsia-400">

                <motion.div
                  animate={{
                    x: ["-100%", "220%"],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="h-full w-[40%] rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <div className="grid gap-3 sm:grid-cols-2">

            {securityCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: false,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.05,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className={`group relative overflow-hidden rounded-[22px] border bg-white/[0.03] p-4 backdrop-blur-xl transition-all duration-300 hover:bg-white/[0.05] ${card.border}`}
                >

                  {/* BOTTOM SIGNAL */}
                  <div
                    className={`absolute bottom-0 left-0 h-[90px] w-full bg-gradient-to-t ${card.glow} opacity-70`}
                  />

                  {/* SOFT GLOW */}
                  <div
                    className={`absolute -bottom-10 left-1/2 h-[120px] w-[75%] -translate-x-1/2 rounded-full ${card.softGlow} blur-3xl opacity-25`}
                  />

                  {/* GLOW */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${card.glow} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                  />

                  {/* LIGHT SWEEP */}
                  <motion.div
                    animate={{
                      x: ["-120%", "220%"],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear",
                      delay: index * 0.3,
                    }}
                    className="absolute top-0 h-full w-[70px] rotate-[20deg] bg-white/[0.03] blur-lg"
                  />

                  <div className="relative z-10">

                    {/* ICON */}
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br ${card.glow} ${card.color}`}
                    >
                      <Icon size={18} />
                    </div>

                    {/* TITLE */}
                    <h3 className="mt-4 text-[15px] font-bold leading-tight text-white">
                      {card.title}
                    </h3>

                    {/* DESC */}
                    <p className="mt-2 text-[11px] leading-5 text-slate-400">
                      {card.desc}
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