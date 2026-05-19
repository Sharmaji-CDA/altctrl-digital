"use client";

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
    desc: "Contains business logic and orchestration workflows.",
  },

  {
    icon: Server,
    title: "Service Layer",
    desc: "Handles authentication, APIs, and backend communication.",
  },

  {
    icon: Database,
    title: "Data Layer",
    desc: "Ensures structured persistence and data consistency.",
  },

  {
    icon: GitBranch,
    title: "Integration Layer",
    desc: "Connects APIs and enterprise data systems.",
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
    <section className="relative overflow-hidden bg-black px-4 py-14 text-white sm:px-6 lg:px-8 lg:py-18">

      {/* BG */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.08),transparent_45%)]" />

      {/* LEFT GLOW */}
      <div className="absolute left-[-120px] top-[80px] h-[240px] w-[240px] rounded-full bg-orange-500/10 blur-[110px]" />

      {/* RIGHT GLOW */}
      <div className="absolute right-[-120px] bottom-[60px] h-[240px] w-[240px] rounded-full bg-[#EC1C24]/10 blur-[110px]" />

      {/* ANGLED BG */}
      <div className="absolute right-[-180px] top-0 hidden h-full w-[40%] rotate-[-10deg] bg-white/[0.02] blur-3xl lg:block" />

      <div className="relative z-10 mx-auto max-w-[1180px]">

        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center xl:gap-14">

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
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
            }}
            className="relative"
          >

            {/* PANEL */}
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl sm:p-6">

              {/* PANEL GLOW */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.04] to-transparent" />

              {/* LIGHT SWEEP */}
              <motion.div
                animate={{
                  x: ["-120%", "220%"],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute top-0 h-full w-[90px] rotate-[20deg] bg-white/[0.03] blur-xl"
              />

              {/* TITLE */}
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
                  amount: 0.4,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="relative z-10 flex items-center gap-3"
              >

                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/10 text-orange-400">

                  <Layers3 size={18} />
                </div>

                <div>

                  <h3 className="text-[20px] font-bold">
                    Multi-Layered Architecture
                  </h3>

                  <p className="mt-1 text-[11px] text-slate-400">
                    Scalable, secure, and maintainable by design.
                  </p>
                </div>
              </motion.div>

              {/* STACK */}
              <div className="relative z-10 mt-6 space-y-3">

                {architecture.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={index}
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
                        amount: 0.2,
                      }}
                      transition={{
                        duration: 0.55,
                        delay: index * 0.05,
                      }}
                      whileHover={{
                        y: -3,
                      }}
                      className="group relative overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:border-orange-500/20 hover:bg-white/[0.05]"
                    >

                      {/* RUNNING LIGHT */}
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
                        className="absolute top-0 h-full w-[60px] rotate-[20deg] bg-white/[0.03] blur-lg"
                      />

                      <div className="relative z-10 flex items-start gap-3">

                        {/* ICON */}
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/10 text-orange-400">

                          <Icon size={15} />
                        </div>

                        {/* CONTENT */}
                        <div>

                          <h4 className="text-[14px] font-semibold text-white">
                            {item.title}
                          </h4>

                          <p className="mt-1 text-[11px] leading-5 text-slate-400">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* ADVANTAGES */}
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
                  amount: 0.4,
                }}
                transition={{
                  duration: 0.7,
                }}
                className="relative z-10 mt-6 flex flex-wrap gap-4 border-t border-white/10 pt-5"
              >

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
                    <motion.div
                      key={index}
                      whileHover={{
                        y: -2,
                      }}
                      className="flex items-center gap-2 text-[12px] font-medium text-slate-300"
                    >

                      <Icon
                        size={14}
                        className="text-orange-400"
                      />

                      {advantage.text}
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>

            {/* FLOATING BADGE */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: false,
                amount: 0.4,
              }}
              transition={{
                duration: 0.6,
              }}
              animate={{
                y: [0, -6, 0],
              }}
              className="absolute bottom-[-18px] right-[-5px] rounded-[22px] border border-orange-500/20 bg-gradient-to-r from-orange-500 to-[#ff7b1a] px-5 py-4 shadow-[0_0_35px_rgba(249,115,22,0.25)]"
            >

              <p className="text-[9px] font-bold uppercase tracking-[2px] text-white/80">
                Live Schema
              </p>

              <h3 className="mt-1 text-[28px] font-black leading-none">
                99.9%
              </h3>

              <p className="mt-1 text-[13px] font-semibold">
                Match
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: false,
              amount: 0.2,
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
                amount: 0.4,
              }}
              transition={{
                duration: 0.6,
              }}
              className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 backdrop-blur-xl"
            >

              <div className="h-1.5 w-1.5 rounded-full bg-orange-400" />

              <span className="text-[9px] uppercase tracking-[3px] text-orange-300">
                The DataSphere Protocol
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
              className="mt-6 text-[32px] font-black leading-[0.95] tracking-[-2px] sm:text-[46px] lg:text-[58px]"
            >

              Build your own CRM.
              <br />

              <span className="bg-gradient-to-r from-orange-400 to-[#ff7b1a] bg-clip-text text-transparent">
                Your concepts,
                <br />
                our scale.
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
              className="mt-6 max-w-[620px] text-[14px] leading-7 text-slate-400"
            >

              Stop fitting your business into rigid database rows.
              Design your own custom data models and relationship graphs.
              Our AI interprets your schema natively with zero-code mapping.
            </motion.p>

            {/* FEATURES */}
            <div className="mt-7 grid gap-4 sm:grid-cols-2">

              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      y: 30,
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
                      y: -4,
                    }}
                    className="group relative overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl transition-all duration-300 hover:border-orange-500/20 hover:bg-white/[0.05]"
                  >

                    {/* GLOW */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.08] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    {/* LIGHT */}
                    <motion.div
                      animate={{
                        x: ["-120%", "220%"],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "linear",
                        delay: index * 0.25,
                      }}
                      className="absolute top-0 h-full w-[60px] rotate-[20deg] bg-white/[0.03] blur-lg"
                    />

                    <div className="relative z-10 flex items-center gap-3">

                      {/* ICON */}
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/10 text-orange-400">

                        <Icon size={16} />
                      </div>

                      {/* TEXT */}
                      <h4 className="text-[13px] font-semibold leading-5 text-white">
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