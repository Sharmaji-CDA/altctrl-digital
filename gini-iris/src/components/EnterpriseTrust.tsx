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
    desc: "Names, credit cards, and addresses are redacted locally before transit. We meet SOC2 Type II, HIPAA, and GDPR standards natively.",
    color: "text-blue-400",
    glow: "from-blue-500/20 to-blue-500/5",
    border: "border-blue-500/20",
  },

  {
    icon: Target,
    title: "Deterministic Guardrails",
    desc: "Our proprietary Logic Gating layer restricts LLM responses to your verified business rules, eliminating hallucinations.",
    color: "text-emerald-400",
    glow: "from-emerald-500/20 to-emerald-500/5",
    border: "border-emerald-500/20",
  },

  {
    icon: Lock,
    title: "Immutable Audit Trails",
    desc: "Every cognitive step, API call, and permission check is logged to an encrypted ledger for complete operational transparency.",
    color: "text-violet-400",
    glow: "from-violet-500/20 to-violet-500/5",
    border: "border-violet-500/20",
  },

  {
    icon: Fingerprint,
    title: "Biometric Interaction Logging",
    desc: "Advanced speaker verification ensures identity is maintained and verified across multi-step enterprise workflows.",
    color: "text-pink-400",
    glow: "from-pink-500/20 to-pink-500/5",
    border: "border-pink-500/20",
  },

  {
    icon: Server,
    title: "Hardware-Level Isolation",
    desc: "Each enterprise tenant runs on isolated compute kernels, ensuring zero cross-pollination of model weights or vector data.",
    color: "text-orange-400",
    glow: "from-orange-500/20 to-orange-500/5",
    border: "border-orange-500/20",
  },

  {
    icon: Globe,
    title: "Regional Sovereignty",
    desc: "Deploy specific agent fleet clusters in global regions to maintain strict data residency compliance.",
    color: "text-cyan-400",
    glow: "from-cyan-500/20 to-cyan-500/5",
    border: "border-cyan-500/20",
  },
];

export default function EnterpriseTrust() {
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
        className="absolute left-[-150px] top-[200px] h-[300px] w-[300px] rounded-full bg-[#EC1C24]/20 blur-[120px]"
      />

      {/* CYAN GLOW */}
      <motion.div
        animate={{
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute right-[-120px] bottom-[100px] h-[260px] w-[260px] rounded-full bg-cyan-500/10 blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-[1300px]">

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >

            {/* BADGE */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 backdrop-blur-xl">
              <div className="h-2 w-2 rounded-full bg-emerald-400" />

              <span className="text-[10px] font-semibold uppercase tracking-[2px] text-emerald-300">
                Mission-Critical Reliability
              </span>
            </div>

            {/* HEADING */}
            <h2 className="mt-8 text-[42px] font-black leading-[0.95] tracking-[-2px] sm:text-[54px] lg:text-[72px]">
              Enterprise Trust,
              <br />

              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Built-in.
              </span>
            </h2>

            {/* DESC */}
            <p className="mt-8 max-w-[520px] text-[14px] leading-8 text-slate-400 sm:text-[15px]">
              Security isn't a plugin; it's the bedrock. Our infrastructure is
              designed for regulated industries with zero-trust architecture at
              every node.
            </p>

            {/* TERMINAL */}
            <motion.div
              whileHover={{
                y: -5,
              }}
              className="relative mt-10 overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl"
            >

              {/* TERMINAL GLOW */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.03] to-transparent" />

              {/* TOP */}
              <div className="relative z-10 flex items-center gap-3">

                <div className="text-emerald-400">
                  ❯_
                </div>

                <p className="text-[13px] font-medium text-emerald-300">
                  node_security_audit_v2.log
                </p>
              </div>

              {/* LOGS */}
              <div className="relative z-10 mt-8 space-y-4 font-mono text-[11px] uppercase tracking-[1px] text-slate-500">

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  [SEC] INITIALIZING ZERO-TRUST HANDSHAKE...
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  [SEC] PII SCRUBBING KERNEL: ACTIVE
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  [SEC] HARDENED LOGIC GATE: VERIFIED
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  [SEC] ROTATING TENANT ENCRYPTION KEYS...
                </motion.div>
              </div>

              {/* PROGRESS */}
              <div className="relative z-10 mt-8 h-[4px] overflow-hidden rounded-full bg-white/10">

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
          <div className="grid gap-6 sm:grid-cols-2">

            {securityCards.map((card, index) => {
              const Icon = card.icon;

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
                  className={`group relative overflow-hidden rounded-[30px] border bg-white/[0.03] p-6 backdrop-blur-2xl transition-all duration-500 hover:bg-white/[0.05] ${card.border}`}
                >

                  {/* BG GLOW */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${card.glow} opacity-0 transition-all duration-500 group-hover:opacity-100`}
                  />

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
                    className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br ${card.glow} ${card.color} transition-all duration-500 group-hover:shadow-[0_0_30px_currentColor]`}
                  >

                    <div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${card.glow} opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-100`}
                    />

                    <Icon
                      size={22}
                      className="relative z-10 transition-all duration-500 group-hover:scale-110"
                    />
                  </motion.div>

                  {/* CONTENT */}
                  <div className="relative z-10">

                    <h3 className="mt-6 text-[20px] font-bold leading-tight text-white">
                      {card.title}
                    </h3>

                    <p className="mt-5 text-[13px] leading-7 text-slate-400">
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