import {
  Layers3,
  Database,
  Workflow,
  Sparkles,
  GitBranch,
  ArrowUpRight,
  Shield,
  Wrench,
  Server,
  Monitor,
} from "lucide-react";

import { motion } from "framer-motion";

const architecture = [
  {
    icon: Monitor,
    title: "Presentation Layer",
    desc: "Renders the UI using Next.js and component-driven architecture.",
  },

  {
    icon: Workflow,
    title: "Application Layer",
    desc: "Contains business logic, orchestration, and server-side operations.",
  },

  {
    icon: Server,
    title: "Service Layer",
    desc: "Handles authentication, APIs, and backend communication.",
  },

  {
    icon: Database,
    title: "Data Layer",
    desc: "Ensures structured persistence, retrieval, and data consistency.",
  },

  {
    icon: GitBranch,
    title: "Integration Layer",
    desc: "Connects third-party APIs and enterprise data systems.",
  },
];

const features = [
  {
    icon: Layers3,
    title: "Dynamic Schema Injection",
  },

  {
    icon: Database,
    title: "Relational Knowledge Graphs",
  },

  {
    icon: Sparkles,
    title: "Event-Driven Triggers",
  },

  {
    icon: GitBranch,
    title: "Autonomous Object Mapping",
  },
];

export default function DataSphereProtocol() {
  return (
    <section className="relative overflow-hidden bg-black px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-24">

      {/* BG */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.08),transparent_45%)]" />

      {/* ORANGE GLOW */}
      <motion.div
        animate={{
          opacity: [0.08, 0.16, 0.08],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute left-[-120px] top-[100px] h-[280px] w-[280px] rounded-full bg-orange-500/20 blur-[120px]"
      />

      {/* RED GLOW */}
      <motion.div
        animate={{
          opacity: [0.08, 0.18, 0.08],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute right-[-100px] bottom-[100px] h-[260px] w-[260px] rounded-full bg-[#EC1C24]/10 blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-[1300px]">

        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">

          {/* LEFT PANEL */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative"
          >

            {/* MAIN PANEL */}
            <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-2xl sm:p-8">

              {/* PANEL GLOW */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.04] to-transparent" />

              {/* TITLE */}
              <div className="relative z-10 flex items-center gap-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/10 text-orange-400">
                  <Layers3 size={22} />
                </div>

                <div>
                  <h3 className="text-[26px] font-bold">
                    Multi-Layered Architecture
                  </h3>

                  <p className="mt-1 text-[13px] text-slate-400">
                    Scalable, secure, and maintainable by design.
                  </p>
                </div>
              </div>

              {/* STACK */}
              <div className="relative z-10 mt-8 space-y-4">

                {architecture.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={index}
                      whileHover={{
                        y: -3,
                      }}
                      className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] p-5 transition-all duration-500 hover:border-orange-500/20 hover:bg-white/[0.05]"
                    >

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
                        className="absolute top-0 h-full w-[70px] rotate-[20deg] bg-white/[0.04] blur-xl"
                      />

                      <div className="relative z-10 flex items-start gap-4">

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
                          className="flex h-11 w-11 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/10 text-orange-400 group-hover:shadow-[0_0_25px_currentColor]"
                        >
                          <Icon size={18} />
                        </motion.div>

                        {/* CONTENT */}
                        <div>

                          <h4 className="text-[16px] font-semibold text-white">
                            {item.title}
                          </h4>

                          <p className="mt-2 text-[12px] leading-6 text-slate-400">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* ADVANTAGES */}
              <div className="relative z-10 mt-8 flex flex-wrap gap-6 border-t border-white/10 pt-6">

                {[
                  {
                    icon: ArrowUpRight,
                    text: "Scalability",
                  },
                  {
                    icon: Wrench,
                    text: "Maintainability",
                  },
                  {
                    icon: Shield,
                    text: "Security",
                  },
                ].map((advantage, index) => {
                  const Icon = advantage.icon;

                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 text-[13px] font-medium text-slate-300"
                    >
                      <Icon
                        size={15}
                        className="text-orange-400"
                      />

                      {advantage.text}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* FLOATING BADGE */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute bottom-[-25px] right-[-10px] rounded-[30px] border border-orange-500/20 bg-gradient-to-r from-orange-500 to-[#ff7b1a] px-7 py-5 shadow-[0_0_45px_rgba(249,115,22,0.35)]"
            >

              <p className="text-[10px] font-bold uppercase tracking-[2px] text-white/80">
                Live Schema
              </p>

              <h3 className="mt-2 text-[38px] font-black leading-none">
                99.9%
              </h3>

              <p className="mt-1 text-[16px] font-semibold">
                Match
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >

            {/* BADGE */}
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 backdrop-blur-xl">

              <div className="h-2 w-2 rounded-full bg-orange-400" />

              <span className="text-[10px] uppercase tracking-[3px] text-orange-300">
                The DataSphere Protocol
              </span>
            </div>

            {/* HEADING */}
            <h2 className="mt-8 text-[40px] font-black leading-[0.95] tracking-[-2px] sm:text-[54px] lg:text-[72px]">

              Build your own CRM.
              <br />

              <span className="bg-gradient-to-r from-orange-400 to-[#ff7b1a] bg-clip-text text-transparent">
                Your concepts,
                <br />
                our scale.
              </span>
            </h2>

            {/* DESC */}
            <p className="mt-8 max-w-[620px] text-[15px] leading-9 text-slate-400">
              Stop fitting your business into rigid database rows.
              Design your own custom data models and relationship graphs.
              Our AI interprets your schema natively with zero-code mapping.
            </p>

            {/* FEATURES */}
            <div className="mt-10 grid gap-5 sm:grid-cols-2">

              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={index}
                    whileHover={{
                      y: -5,
                    }}
                    className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-2xl transition-all duration-500 hover:border-orange-500/20 hover:bg-white/[0.05]"
                  >

                    {/* GLOW */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.08] to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100" />

                    <div className="relative z-10 flex items-center gap-4">

                      {/* ICON */}
                      <motion.div
                        animate={{
                          boxShadow: [
                            "0 0 0px currentColor",
                            "0 0 14px currentColor",
                            "0 0 0px currentColor",
                          ],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          delay: index * 0.2,
                        }}
                        className="flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/10 text-orange-400 group-hover:shadow-[0_0_25px_currentColor]"
                      >
                        <Icon size={20} />
                      </motion.div>

                      {/* TEXT */}
                      <h4 className="text-[15px] font-semibold leading-6 text-white">
                        {feature.title}
                      </h4>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}