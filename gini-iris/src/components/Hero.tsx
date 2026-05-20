"use client";

import {
  ArrowRight,
  CircleCheck,
  CreditCard,
  Sparkles,
  BarChart3,
  BrainCircuit,
  ShieldCheck,
  Workflow,
  AudioLines,
  Bot,
  Database,
  Globe,
} from "lucide-react";

import { motion } from "framer-motion";
import { BiRightArrow } from "react-icons/bi";

const features = [
  {
    icon: BarChart3,
    title: "Analytics",
    status: "Actionable BI",
    desc: "Deep dashboards and operational intelligence.",
    color: "from-cyan-500/20 to-blue-500/20",
  },

  {
    icon: Globe,
    title: "Omni Channel",
    status: "Unified Engagement",
    desc: "Connected conversations across all channels.",
    color: "from-[#EC1C24]/20 to-[#8B5CF6]/20",
  },

  {
    icon: BrainCircuit,
    title: "Agentic AI",
    status: "Autonomous Reasoning",
    desc: "Real-time autonomous AI execution layer.",
    color: "from-pink-500/20 to-rose-500/20",
  },

  {
    icon: ShieldCheck,
    title: "QA Automation",
    status: "100% Auditing",
    desc: "Automatic quality monitoring at scale.",
    color: "from-emerald-500/20 to-green-500/20",
  },

  {
    icon: AudioLines,
    title: "Voice AI",
    status: "Speech Intelligence",
    desc: "Enterprise-grade transcription and TTS.",
    color: "from-orange-500/20 to-red-500/20",
  },

  {
    icon: Workflow,
    title: "Workflow Engine",
    status: "Automation Layer",
    desc: "Operational automation with AI orchestration.",
    color: "from-violet-500/20 to-indigo-500/20",
  },

  {
    icon: Bot,
    title: "AI CoPilot",
    status: "Live Assistance",
    desc: "Real-time AI recommendations for teams.",
    color: "from-sky-500/20 to-cyan-500/20",
  },

  {
    icon: Database,
    title: "Data Layer",
    status: "Enterprise Storage",
    desc: "Secure enterprise-grade structured storage.",
    color: "from-amber-500/20 to-orange-500/20",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">

      {/* BG */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.12)_55%,rgba(0,0,0,0.72)_100%)]" />

      {/* LEFT GLOW */}
      <div className="absolute left-[-120px] top-[100px] h-[320px] w-[320px] rounded-full bg-[#EC1C24]/6 blur-[70px]" />

      {/* RIGHT GLOW */}
      <div className="absolute right-[-120px] top-[160px] h-[320px] w-[320px] rounded-full bg-[#8B5CF6]/6 blur-[70px]" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      {/* CINEMATIC ARC */}
      <motion.div
        animate={{
          rotate: [-10, 10, -10],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-[0%]
          top-[2%]
          z-0
          opacity-30
          scale-[1.3]
        "
      >
        <img
          src="/iris-bg.png"
          alt=""
          className="
            w-[3000px]
            max-w-none
            object-contain
            select-none
            saturate-[1.8]
            contrast-[1.25]
            brightness-[0.9]
          "
        />
      </motion.div>

      {/* ARC ATMOSPHERE */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[68%]
          z-0
          h-[1400px]
          w-[1400px]
          -translate-x-1/2
          rounded-full
          bg-[#EC1C24]/10
          blur-[160px]
        "
      />

      {/* DEPTH OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black/30" />

      <div className="relative z-20 mx-auto max-w-[1400px] px-5 pb-20 pt-32 sm:px-6 lg:px-8">

        {/* HERO CONTENT */}
        <div className="mx-auto max-w-6xl text-center">

          {/* BADGE */}
          <motion.div
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
              amount: 0.4,
            }}
            transition={{
              duration: 0.6,
            }}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 backdrop-blur-xl"
          >

            <div className="h-2 w-2 rounded-full bg-[#EC1C24]" />

            <span className="text-[11px] uppercase tracking-[4px] text-gray-300">
              AI Native Operations
            </span>
          </motion.div>

          {/* HEADING */}
          <motion.div
            initial={{
              opacity: 0,
              y: 60,
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
          >

            <h1 className="font-black leading-[0.9] tracking-[-4px]">

              <span className="block text-[52px] text-white sm:text-[72px] lg:text-[92px]">
                Truly Autonomous.
              </span>

              <span className="block bg-gradient-to-r from-[#EC1C24] via-[#ff4d55] to-[#8B5CF6] bg-clip-text text-[52px] text-transparent sm:text-[72px] lg:text-[92px]">
                Operationally Infinite.
              </span>
            </h1>
          </motion.div>

          {/* DESCRIPTION */}
          <motion.p
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
              delay: 0.1,
              duration: 0.7,
            }}
            className="mx-auto mt-8 max-w-3xl text-base leading-8 text-gray-400 sm:text-lg"
          >
            The world&apos;s first AI-native Command Center built to deploy
            autonomous operational teams with enterprise-grade efficiency.
          </motion.p>

          {/* FEATURES */}
          <motion.div
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
              amount: 0.3,
            }}
            transition={{
              delay: 0.2,
              duration: 0.7,
            }}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
          >

            {[
              {
                text: "Free trial",
                icon: CircleCheck,
                color: "text-blue-400",
              },

              {
                text: "No credit card required",
                icon: CreditCard,
                color: "text-violet-400",
              },

              {
                text: "Flexible pricing",
                icon: Sparkles,
                color: "text-pink-400",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.text}
                  whileHover={{
                    y: -2,
                  }}
                  className="group flex items-center gap-3"
                >

                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] ${item.color}`}
                  >
                    <Icon size={14} />
                  </div>

                  <span className="text-sm text-gray-300 group-hover:text-white">
                    {item.text}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>

          {/* BUTTONS */}
          <motion.div
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
              delay: 0.3,
              duration: 0.8,
            }}
            className="mt-12 flex flex-col justify-center gap-5 sm:flex-row"
          >

            <motion.button
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="group flex items-center justify-center gap-3 rounded-full bg-[#EC1C24] px-8 py-4 text-sm font-semibold uppercase tracking-[2px] text-white shadow-[0_0_40px_rgba(236,28,36,0.3)] transition-all duration-300"
            >

              Launch Your Team

              <BiRightArrow size={20} />

              <ArrowRight size={18} />
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="rounded-full border border-white/10 bg-white/[0.03] px-8 py-4 text-sm font-semibold uppercase tracking-[2px] text-white backdrop-blur-xl transition-all duration-300 hover:border-violet-500/30"
            >
              See ROI Impact
            </motion.button>
          </motion.div>
        </div>

        {/* FEATURE MARQUEE */}
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
            amount: 0.15,
          }}
          transition={{
            duration: 0.8,
          }}
          className="relative mt-24 overflow-hidden"
        >

          {/* LEFT FADE */}
          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-20 bg-gradient-to-r from-black to-transparent" />

          {/* RIGHT FADE */}
          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-20 bg-gradient-to-l from-black to-transparent" />

          {/* TRACK */}
          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex w-max gap-5 will-change-transform"
          >

            {[...features, ...features].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -5,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="group relative w-[280px] overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]"
                >

                  {/* HOVER GLOW */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                  />

                  {/* CONTENT */}
                  <div className="relative z-10">

                    {/* TOP */}
                    <div className="flex items-center justify-between">

                      {/* ICON */}
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color}`}
                      >
                        <Icon size={18} />
                      </div>

                      {/* STATUS */}
                      <div className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[9px] uppercase tracking-[2px] text-gray-400">
                        Active
                      </div>
                    </div>

                    {/* TEXT */}
                    <div className="mt-6">

                      <p className="text-[10px] uppercase tracking-[3px] text-gray-500">
                        {item.status}
                      </p>

                      <h3 className="mt-2 text-[22px] font-bold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-gray-300">
                        {item.desc}
                      </p>
                    </div>

                    {/* LINE */}
                    <div
                      className={`mt-6 h-[2px] w-full rounded-full bg-gradient-to-r ${item.color}`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}