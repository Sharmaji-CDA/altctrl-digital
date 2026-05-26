"use client";

import { motion } from "framer-motion";

import {
  Cpu,
  Layers,
  Bot,
  Building2,
  HardDrive,
  Zap,
  Clock,
  MessageSquare,
  ShoppingCart,
  BarChart3,
  UserPlus,
  Heart,
  Shield,
  PhoneCall,
  Terminal,
} from "lucide-react";

/* LIGHTWEIGHT MOTION */
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 22,
  },

  visible: {
    opacity: 1,
    y: 0,
  },
};

const metrics = [
  { icon: Cpu, stat: "5+", label: "LLM PROVIDERS" },
  { icon: Layers, stat: "50+", label: "PRE-TRAINED MODELS" },
  { icon: Bot, stat: "100+", label: "FINE-TUNED AGENTS" },
  { icon: Building2, stat: "25+", label: "INDUSTRY SPECIFIC" },
  { icon: HardDrive, stat: "15+", label: "TASK SPECIFIC" },
  { icon: Zap, stat: "95%", label: "AUTOMATION POTENTIAL" },
  { icon: Clock, stat: "1-Day", label: "DEPLOYMENT" },
];

const functionalAgents = [
  {
    icon: MessageSquare,
    name: "Service Agent",
    desc: "Automates customer support and resolves issues.",
  },

  {
    icon: ShoppingCart,
    name: "Sales Agent",
    desc: "Qualifies leads and assists in the sales process.",
  },

  {
    icon: BarChart3,
    name: "Analyst Agent",
    desc: "Processes data and generates business insights.",
  },

  {
    icon: UserPlus,
    name: "Onboarding Agent",
    desc: "Guides new users through platform features.",
  },
];

const industryAgents = [
  {
    icon: Heart,
    name: "Healthcare Agent",
    desc: "Navigates appointments and insurance queries.",
  },

  {
    icon: Shield,
    name: "Insurance Agent",
    desc: "Streamlines claims and policy questions.",
  },

  {
    icon: Building2,
    name: "Banking Agent",
    desc: "Assists with transactions and fraud alerts.",
  },

  {
    icon: PhoneCall,
    name: "Telecom Agent",
    desc: "Troubleshoots service and manages plans.",
  },
];

export default function PlatformEdge() {

  return (
    <section className="relative overflow-hidden bg-[#05070b] py-10 text-slate-100 sm:py-14 lg:px-16 lg:py-20">

      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* MAIN GLOW */}
        <div
          className="
            absolute
            left-[10%]
            top-[-10%]
            h-[320px]
            w-[320px]
            rounded-full
            bg-red-500/10
            blur-3xl
            animate-pulse
          "
        />

        {/* SECONDARY GLOW */}
        <div
          className="
            absolute
            bottom-[5%]
            right-[5%]
            h-[280px]
            w-[280px]
            rounded-full
            bg-rose-500/10
            blur-3xl
            animate-pulse
          "
          style={{
            animationDuration: "7s",
          }}
        />

        {/* GRID */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="h-full w-full bg-[linear-gradient(to_right,#ef4444_1px,transparent_1px),linear-gradient(to_bottom,#ef4444_1px,transparent_1px)] bg-[size:36px_36px]" />
        </div>

        {/* TOP LIGHT */}
        <div className="absolute inset-x-0 top-0 h-[140px] bg-gradient-to-b from-red-500/[0.03] to-transparent" />
      </div>

      {/* CONTENT */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          staggerChildren: 0.08,
        }}
        className="px-4 sm:px-6 lg:px-8"
      >

        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-14">

          {/* LEFT SIDE */}
          <motion.div
            variants={fadeUp}
            transition={{
              duration: 0.45,
            }}
            className="space-y-4 lg:col-span-6"
          >

            {/* HEADING */}
            <div className="text-center lg:text-left">

              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-red-500/10
                  bg-red-500/[0.04]
                  px-4
                  py-2
                  backdrop-blur-md
                "
              >

                <Bot
                  size={12}
                  className="text-red-400"
                />

                <span className="text-[8px] font-semibold uppercase tracking-[2px] text-red-200">
                  AI Infrastructure Layer
                </span>
              </div>

              <h1
                className="
                  mt-2
                  bg-gradient-to-r
                  from-white
                  via-slate-100
                  to-red-300
                  bg-clip-text
                  text-[40px]
                  font-black
                  tracking-[-2px]
                  text-transparent
                  sm:text-[54px]
                "
              >
                The Platform Edge.
              </h1>

              <p
                className="
                  mt-1
                  max-w-xl
                  text-[13px]
                  leading-[1.9]
                  text-slate-400
                  sm:text-[15px]
                "
              >
                Built on a foundation of multi-LLM orchestration and fine-tuned domain expertise.
              </p>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">

              {metrics.map((m, idx) => {

                const Icon = m.icon;

                return (
                  <motion.div
                    key={m.label}
                    variants={fadeUp}
                    transition={{
                      duration: 0.4,
                      delay: idx * 0.03,
                    }}
                    className="
                      flex
                      items-center
                      justify-centre
                      gap-2
                      rounded-2xl
                      border
                      border-white/6
                      bg-white/[0.03]
                      p-4
                      backdrop-blur-md
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-red-500/20
                    "
                  >

                    <Icon
                      size={20}
                      className="
                        mb-2
                        text-red-400
                        transition-transform
                        duration-300
                        group-hover:scale-110
                      "
                    />

                    <div>
                      <div className="text-[10px] lg:text-[14px] font-black text-white">
                        {m.stat}
                      </div>

                      <div
                        className="
                          mt-1
                          text-[9px]
                          font-bold
                          uppercase
                          tracking-[1.5px]
                          text-slate-500
                        "
                      >
                        {m.label}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* ACTION BUTTONS */}
            <motion.div
              variants={fadeUp}
              transition={{
                duration: 0.5,
              }}
              className="
                flex
                flex-col
                gap-3
                sm:flex-row
                sm:items-center
              "
            >

              {/* PRIMARY */}
              <button
                className="
                  group
                  flex
                  h-[50px]
                  items-center
                  justify-center
                  gap-2
                  rounded-2xl
                  border
                  border-red-500/20
                  bg-gradient-to-r
                  from-red-600
                  to-rose-600
                  px-5
                  text-[12px]
                  font-black
                  uppercase
                  tracking-[1.5px]
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:shadow-lg
                "
              >
                Provision Agent Cluster
              </button>

              {/* SECONDARY */}
              <button
                className="
                  group
                  flex
                  h-[50px]
                  items-center
                  justify-center
                  gap-2
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  px-5
                  text-[12px]
                  font-bold
                  uppercase
                  tracking-[1.5px]
                  text-slate-300
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-red-500/20
                  hover:bg-red-500/[0.06]
                "
              >

                <Terminal
                  size={14}
                  className="text-red-400"
                />

                Development API
              </button>
            </motion.div>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            variants={fadeUp}
            transition={{
              duration: 0.5,
            }}
            className="
              flex
              items-center
              justify-center
              lg:col-span-6
              lg:justify-end
            "
          >

            <div
              className="
                relative
                flex
                w-full
                max-w-xl
                flex-col
                overflow-hidden
                rounded-[28px]
                border
                border-white/10
                bg-[#070b11]/95
                p-5
                backdrop-blur-md
                sm:p-6
              "
            >

              {/* CARD GLOW */}
              <div
                className="
                  absolute
                  right-0
                  top-0
                  h-40
                  w-40
                  rounded-full
                  bg-red-500/[0.04]
                  blur-3xl
                "
              />

              {/* HEADER */}
              <div className="border-b border-white/6 pb-4">

                <div className="flex items-center gap-3">

                  <div
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-red-500/10
                      bg-red-500/10
                      text-red-400
                    "
                  >

                    <Bot size={15} />
                  </div>

                  <div>

                    <h2
                      className="
                        text-[12px]
                        font-black
                        uppercase
                        tracking-[1.5px]
                        text-white
                      "
                    >
                      A Specialized AI Workforce
                    </h2>

                    <p className="mt-0.5 text-[11px] text-slate-500">
                      Deploy autonomous agents for any business task.
                    </p>
                  </div>
                </div>
              </div>

              {/* GRID */}
              <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">

                {/* FUNCTION */}
                <div className="space-y-2.5">

                  <span
                    className="
                      block
                      border-b
                      border-white/6
                      pb-1
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[1.5px]
                      text-slate-500
                    "
                  >
                    By Function
                  </span>

                  <div className="space-y-2">

                    {functionalAgents.map((agent, idx) => {

                      const Icon = agent.icon;

                      return (
                        <motion.div
                          key={agent.name}
                          variants={fadeUp}
                          transition={{
                            duration: 0.35,
                            delay: idx * 0.03,
                          }}
                          className="
                            group
                            flex
                            items-start
                            gap-3
                            rounded-2xl
                            border
                            border-white/6
                            bg-white/[0.03]
                            p-3
                            transition-all
                            duration-300
                            hover:border-red-500/15
                            hover:bg-red-500/[0.04]
                          "
                        >

                          <div
                            className="
                              flex
                              h-8
                              w-8
                              shrink-0
                              items-center
                              justify-center
                              rounded-xl
                              border
                              border-white/6
                              bg-[#0d1118]
                              text-red-400
                            "
                          >

                            <Icon size={14} />
                          </div>

                          <div>

                            <h4 className="text-[11px] font-extrabold text-slate-200">
                              {agent.name}
                            </h4>

                            <p className="mt-1 text-[10px] leading-tight text-slate-400">
                              {agent.desc}
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* INDUSTRY */}
                <div className="space-y-2.5">

                  <span
                    className="
                      block
                      border-b
                      border-white/6
                      pb-1
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[1.5px]
                      text-slate-500
                    "
                  >
                    By Industry
                  </span>

                  <div className="space-y-2">

                    {industryAgents.map((agent, idx) => {

                      const Icon = agent.icon;

                      return (
                        <motion.div
                          key={agent.name}
                          variants={fadeUp}
                          transition={{
                            duration: 0.35,
                            delay: idx * 0.03,
                          }}
                          className="
                            group
                            flex
                            items-start
                            gap-3
                            rounded-2xl
                            border
                            border-white/6
                            bg-white/[0.03]
                            p-3
                            transition-all
                            duration-300
                            hover:border-red-500/15
                            hover:bg-red-500/[0.04]
                          "
                        >

                          <div
                            className="
                              flex
                              h-8
                              w-8
                              shrink-0
                              items-center
                              justify-center
                              rounded-xl
                              border
                              border-white/6
                              bg-[#0d1118]
                              text-rose-400
                            "
                          >

                            <Icon size={14} />
                          </div>

                          <div>

                            <h4 className="text-[11px] font-extrabold text-slate-200">
                              {agent.name}
                            </h4>

                            <p className="mt-1 text-[10px] leading-tight text-slate-400">
                              {agent.desc}
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}