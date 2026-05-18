import {
  ShieldCheck,
  Server,
  Cpu,
  Rocket,
  ArrowRight,
} from "lucide-react";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    icon: ShieldCheck,
    title: "Governance & Identity",
    desc: "Establish your organization's root trust with secure KYC verification and administrative hierarchy setup.",
    points: [
      "Identity Verification",
      "Account Type Selection",
      "Role-Based Access",
    ],
    color: "text-[#EC1C24]",
    glow: "from-[#EC1C24]/20 to-[#EC1C24]/5",
    border: "border-[#EC1C24]/20",
  },

  {
    number: "02",
    icon: Server,
    title: "Environment Provisioning",
    desc: "Configure your dedicated neural infrastructure. Select global regions and provision your administrative workspace.",
    points: [
      "Hosting & Domains",
      "Region Optimization",
      "Admin Workspace",
    ],
    color: "text-[#ff4d55]",
    glow: "from-[#ff4d55]/20 to-[#ff4d55]/5",
    border: "border-[#ff4d55]/20",
  },

  {
    number: "03",
    icon: Cpu,
    title: "Cognitive Configuration",
    desc: "Select intelligence plans tailored to your volume and activate specialized modules for multi-channel reach.",
    points: [
      "Plan Selection",
      "Modular Add-ons",
      "Capacity Tuning",
    ],
    color: "text-cyan-400",
    glow: "from-cyan-500/20 to-cyan-500/5",
    border: "border-cyan-500/20",
    active: true,
  },

  {
    number: "04",
    icon: Rocket,
    title: "Deterministic Launch",
    desc: "Review logic guardrails and activate your autonomous agents with enterprise-grade safety gates.",
    points: [
      "Logic Gating Review",
      "Subscription Activation",
      "Production Deployment",
    ],
    color: "text-[#8B5CF6]",
    glow: "from-[#8B5CF6]/20 to-[#8B5CF6]/5",
    border: "border-[#8B5CF6]/20",
  },
];

export default function OnboardingFlow() {
  return (
    <section className="relative overflow-hidden bg-black px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-24">

      {/* BG */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(236,28,36,0.08),transparent_45%)]" />

      {/* GLOW LEFT */}
      <motion.div
        animate={{
          opacity: [0.08, 0.2, 0.08],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute left-[-150px] top-[200px] h-[300px] w-[300px] rounded-full bg-[#EC1C24]/20 blur-[120px]"
      />

      {/* GLOW RIGHT */}
      <motion.div
        animate={{
          opacity: [0.08, 0.18, 0.08],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute right-[-150px] bottom-[100px] h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-[1300px]">

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
              Frictionless Orchestration
            </span>
          </motion.div>

          {/* HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="text-[28px] font-black leading-[1] tracking-[-1px] sm:text-[32px] lg:text-[36px]"
          >
            From Vision to{" "}
            <span className="bg-gradient-to-r from-[#EC1C24] via-[#ff4d55] to-[#8B5CF6] bg-clip-text text-transparent">
              Autonomous
            </span>{" "}
            Reality.
          </motion.h2>

          {/* DESC */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mx-auto mt-5 max-w-[620px] text-[12px] leading-6 text-slate-400 sm:text-[13px] lg:text-[14px]"
          >
            Our onboarding flow is designed for enterprise scale. No complex
            implementations — just a guided path to your dedicated CX command
            center.
          </motion.p>
        </div>

        {/* FLOW */}
        <div className="relative mt-14">

          {/* DESKTOP CONNECTION FLOW */}
          <div className="absolute left-0 top-[34px] hidden h-[2px] w-full lg:block">

            {/* MAIN LINE */}
            <div className="absolute left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-[#EC1C24]/20 via-cyan-500/20 to-[#8B5CF6]/20" />

            {/* MOVING PULSE */}
            <motion.div
              animate={{
                left: [
                  "12%",
                  "37%",
                  "62%",
                  "87%",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-1/2 h-[12px] w-[12px] -translate-y-1/2 rounded-full bg-[#EC1C24] shadow-[0_0_18px_#EC1C24]"
            />

            {/* LIGHT TRAIL */}
            <motion.div
              animate={{
                left: [
                  "12%",
                  "37%",
                  "62%",
                  "87%",
                ],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-1/2 h-[4px] w-[90px] -translate-y-1/2 rounded-full bg-gradient-to-r from-[#EC1C24] to-transparent blur-md"
            />
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">

            {steps.map((step, index) => {
              const Icon = step.icon;

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
                  className="relative"
                >

                  {/* HUGE FADED NUMBER */}
                    <div className="pointer-events-none absolute right-3 top-2 z-[1] select-none text-[90px] font-black leading-none tracking-[-6px] text-white/[0.06] sm:text-[110px] lg:text-[140px]">
                    {step.number}
                    </div>

                    {/* NUMBER LIGHT */}
                    <div className="pointer-events-none absolute right-0 top-0 z-[1] h-[160px] w-[160px] rounded-full bg-white/[0.02] blur-[90px]" />

                  {/* CARD */}
                  <div
                    className={`group relative overflow-hidden rounded-[28px] border bg-white/[0.03] p-5 backdrop-blur-2xl transition-all duration-700 hover:border-white/20 hover:bg-white/[0.05] ${step.border}`}
                  >

                    {/* ACTIVE GLOW */}
                    {step.active && (
                      <motion.div
                        animate={{
                          opacity: [0.15, 0.3, 0.15],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                        className="absolute inset-0 bg-cyan-500/[0.06]"
                      />
                    )}

                    {/* ICON */}
                    <div className="relative z-10">

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
                          delay: index * 0.3,
                        }}
                        className={`relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br ${step.glow} ${step.color} transition-all duration-500 group-hover:shadow-[0_0_25px_currentColor]`}
                      >

                        {/* EXTRA GLOW */}
                        <div
                          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.glow} opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-100`}
                        />

                        <Icon
                          size={22}
                          className="relative z-10 transition-all duration-500 group-hover:scale-110"
                        />
                      </motion.div>

                      {/* TITLE */}
                      <h3
                        className={`mt-6 text-[18px] font-bold ${
                          step.active
                            ? "text-cyan-400"
                            : "text-white"
                        }`}
                      >
                        {step.title}
                      </h3>

                      {/* DESC */}
                      <p className="mt-4 text-[12px] leading-6 text-slate-400 sm:text-[12px]">
                        {step.desc}
                      </p>

                      {/* POINTS */}
                      <div className="mt-6 space-y-3">

                        {step.points.map((point, i) => (
                          <motion.div
                            key={i}
                            whileHover={{
                              x: 4,
                            }}
                            className="flex items-center gap-3"
                          >

                            <div
                              className={`h-2 w-2 rounded-full ${
                                step.active
                                  ? "bg-cyan-400"
                                  : "bg-slate-500"
                              }`}
                            />

                            <p className="text-[10px] font-semibold uppercase tracking-[2px] text-slate-400">
                              {point}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="mt-14 overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-2xl"
        >

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            {/* LEFT */}
            <div>
              <h3 className="text-[24px] font-bold leading-tight">
                Ready to architect your CX?
              </h3>

              <p className="mt-3 text-[12px] leading-6 text-slate-400 sm:text-[13px]">
                Join elite organizations deploying autonomous intelligence.
              </p>
            </div>

            {/* BUTTON */}
            <motion.button
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="group flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#EC1C24] via-[#ff4d55] to-[#8B5CF6] px-7 py-4 text-[12px] font-semibold uppercase tracking-[2px] text-white shadow-[0_0_40px_rgba(236,28,36,0.35)] transition-all duration-500"
            >
              Start Configuration

              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}