"use client";

import {
  ArrowRight,
  CircleCheck,
  CreditCard,
  Sparkles,
  Bot,
} from "lucide-react";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { BiRightArrow } from "react-icons/bi";

const features = [
  {
    icon: "https://cdn.lordicon.com/jdgfsfzr.json",
    title: "Omni Channel",
    status: "Unified Engagement",
    desc: "Seamlessly manage Voice, Chat, Email, and Social media interactions from a single, context-aware command center.",
    color: "from-[#EC1C24]/20 to-[#8B5CF6]/20",
    shadow: "0 0 60px rgba(236,28,36,0.35)",
  },

  {
    icon: "https://cdn.lordicon.com/zmkotitn.json",
    title: "Agentic AI",
    status: "Autonomous Reasoning",
    desc: "Specialized agents using advanced reasoning cycles to resolve complex issues and execute workflows across your stack.",
    color: "from-pink-500/20 to-rose-500/20",
    shadow: "0 0 60px rgba(244,63,94,0.35)",
  },

  {
    icon: "https://cdn.lordicon.com/qhviklyi.json",
    title: "Quality Assurance",
    status: "Automated Auditing",
    desc: "Automatic scoring for 100% of interactions. AI-driven coaching recommendations to ensure A-grade service quality.",
    color: "from-emerald-500/20 to-green-500/20",
    shadow: "0 0 60px rgba(16,185,129,0.35)",
  },

  {
    icon: "https://cdn.lordicon.com/abfverha.json",
    title: "Sentiment Analysis",
    status: "Real-Time Emotion",
    desc: "Detect frustration, confusion, and joy instantly. Prioritize interactions based on emotional intelligence drivers.",
    color: "from-yellow-500/20 to-amber-500/20",
    shadow: "0 0 60px rgba(245,158,11,0.35)",
  },

  {
    icon: "https://cdn.lordicon.com/xtnsvhie.json",
    title: "Live Transaction",
    status: "Speech to Data",
    desc: "Convert voice to searchable data in real-time with >95% accuracy using custom-tuned neural models.",
    color: "from-amber-500/20 to-green-500/20",
    shadow: "0 0 60px rgba(251,191,36,0.35)",
  },

  {
    icon: "https://cdn.lordicon.com/wzrwaorf.json",
    title: "Training & Eval",
    status: "Expert Workforce",
    desc: "Adaptive learning paths and automated evaluations to professionally train and certify your virtual and human teams.",
    color: "from-orange-500/20 to-red-500/20",
    shadow: "0 0 60px rgba(249,115,22,0.35)",
  },

  {
    icon: "https://cdn.lordicon.com/lltgvngb.json",
    title: "AI CoPilot",
    status: "Agent Assistance",
    desc: "A real-time co-pilot offering smart replies, procedural guidance, and compliance flags during live conversations.",
    color: "from-red-500/20 to-peach-500/20",
    shadow: "0 0 60px rgba(239,68,68,0.35)",
  },

  {
    icon: "https://cdn.lordicon.com/nocovwne.json",
    title: "Journey Analysis",
    status: "End-to-End Insights",
    desc: "Visualize and optimize CX and Backoffice paths. Identify friction points and refine the resolution lifecycle.",
    color: "from-brown-500/20 to-amber-500/20",
    shadow: "0 0 60px rgba(251,191,36,0.35)",
  },

  {
    icon: "https://cdn.lordicon.com/fikcyfpp.json",
    title: "Customer 360°",
    status: "Unified Profile",
    desc: "Consolidate interaction history, CRM data, and behavioral logs into a comprehensive view of every customer.",
    color: "from-rose-500/20 to-slate-500/20",
    shadow: "0 0 60px rgba(244,63,94,0.35)",
  },

  {
    icon: "https://cdn.lordicon.com/hbvgknxo.json",
    title: "Workforce Mgmt",
    status: "Operational Scale",
    desc: "Predictive forecasting and automated scheduling to ensure your virtual operations team matches demand cycles.",
    color: "from-red-500/20 to-indigo-500/20",
    shadow: "0 0 60px rgba(99,102,241,0.35)",
  },

  {
    icon: "https://cdn.lordicon.com/kscyrlll.json",
    title: "Analytics",
    status: "Actionable BI",
    desc: "Deep-dive dashboards covering agent performance, compliance metrics, and automated ROI reporting.",
    color: "from-cyan-500/20 to-blue-500/20",
    shadow: "0 0 60px rgba(59,130,246,0.35)",
  },

  {
    icon: "https://cdn.lordicon.com/surcxhka.json",
    title: "Data & Logs",
    status: "Full Auditability",
    desc: "Searchable, granular logs of every interaction, API handshake, and system state change for complete transparency.",
    color: "from-violet-500/20 to-pink-500/20",
    shadow: "0 0 60px rgba(168,85,247,0.35)",
  },

  {
    icon: "https://cdn.lordicon.com/gqzfzudq.json",
    title: "Integrations",
    status: "Platform Connectivity",
    desc: "Pre-built connectors for major CRM, Telephony, and Knowledge platforms including Salesforce, Twilio, and Knowledge bases.",
    color: "from-orange-500/20 to-yellow-500/20",
    shadow: "0 0 60px rgba(251,146,60,0.35)",
  },

  {
    icon: "https://cdn.lordicon.com/lltgvngb.json",
    title: "Multi AI",
    status: "LLM Orchestration",
    desc: "Dynamically switch between OpenAI, Claude, and Gemini models based on cost, latency, and task complexity.",
    color: "from-sky-500/20 to-cyan-500/20",
    shadow: "0 0 60px rgba(14,165,233,0.35)",
  },

  {
    icon: "https://cdn.lordicon.com/dxjqoygy.json",
    title: "Modern UI",
    status: "Intuitive Ops",
    desc: "A fast, responsive, and customizable interface designed for new-age operational efficiency and observability.",
    color: "from-sky-500/20 to-violet-500/20",
    shadow: "0 0 60px rgba(139,92,246,0.35)",
  },

  {
    icon: "https://cdn.lordicon.com/lenjvibx.json",
    title: "Architecture",
    status: "AI-Native Stack",
    desc: "Built from day one without legacy debt. A robust foundation designed for autonomous agents and massive scale.",
    color: "from-slate-500/20 to-violet-500/20",
    shadow: "0 0 60px rgba(100,116,139,0.35)",
  },

  {
    icon: "https://cdn.lordicon.com/vpbspaec.json",
    title: "Time to Market",
    status: "Rapid Deployment",
    desc: "Launch your machine in under 24 hours. Use no-code tools to define schemas and personas instantly.",
    color: "from-amber-500/20 to-orange-500/20",
    shadow: "0 0 60px rgba(251,191,36,0.35)",
  },
  
  {
    icon: "https://cdn.lordicon.com/epsvbbbf.json",
    title: "Data Security",
    status: "Enterprise Trust",
    desc: "SOC2 Type II certified security with real-time PII masking and deterministic safety guardrails built-in.",
    color: "from-amber-500/20 to-peach-500/20",
    shadow: "0 0 60px rgba(34,197,94,0.35)",
  },

  {
    icon: "https://cdn.lordicon.com/xtnsvhie.json",
    title: "Transcription & TTS",
    status: "Voice Intelligence",
    desc: "Enterprise-grade STT and TTS engines that handle multi-lingual interactions and complex dialects.",
    color: "from-sky-500/20 to-orange-500/20",
    shadow: "0 0 60px rgba(56,189,248,0.35)",
  },

  {
    icon: "https://cdn.lordicon.com/kxoxiwrf.json",
    title: "Hosting Options",
    status: "Hybrid Cloud",
    desc: "Deploy as managed SaaS or self-host on your own infrastructure for total data sovereignty.",
    color: "from-amber-500/20 to-slate-500/20",
    shadow: "0 0 60px rgba(148,163,184,0.35)",
  },
];

export default function Hero() {

  const marqueeControls = useAnimation();

  const [activeCard, setActiveCard] = useState<number | null>(null);

  const [direction, setDirection] = useState<"left" | "right">("left");

  const [isPaused, setIsPaused] = useState(false);
  
  useEffect(() => {

    if (isPaused) return;

    marqueeControls.start({
      x: direction === "left"
        ? ["0%", "-50%"]
        : ["-50%", "0%"],
    });

  }, [direction, isPaused]);

  const handleCardClick = async (index: number) => {

    setActiveCard(index);

    setIsPaused(true);

    marqueeControls.stop();

    setTimeout(() => {
      setIsPaused(false);
      setActiveCard(null);

    }, 4000);
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {

    if (e.deltaY > 0) {
      setDirection("left");
    } else {
      setDirection("right");
    }
  };

  return (
    <section className="relative overflow-hidden bg-black text-white px-4 py-6 sm:py-8 lg:py-20 sm:px-6 lg:px-16">

      {/* BG */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.12)_55%,rgba(0,0,0,0.72)_100%)]" />

      {/* LEFT GLOW */}
      <div className="absolute left-[-120px] top-[100px] h-[320px] w-[320px] rounded-full bg-[#EC1C24]/6 blur-3xl" />

      {/* RIGHT GLOW */}
      <div className="absolute right-[-120px] top-[160px] h-[320px] w-[320px] rounded-full bg-[#8B5CF6]/6 blur-3xl" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      {/* CINEMATIC ARC */}
      <motion.div
        animate={{
          rotate: [-20, 0, -20],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
        }}
        className="
          pointer-events-none
          absolute
          left-[-6%]
          top-[10%]
          z-0
          opacity-30
          scale-[1.4]
        "
      >
        <img
          src="/iris-bg.png"
          alt=""
          className="
            w-[1300px]
            max-w-none
            object-contain
            select-none
            saturate-[1.8]
            contrast-[1.25]
            brightness-[0.9]
          "
        />
      </motion.div>

      {/* DEPTH OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black/30" />

      <div className="relative z-20 px-5 sm:px-6 lg:px-8">

        {/* HERO CONTENT */}
        <div className="mx-auto max-w-6xl py-28 text-center">

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
            className="mb-4 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 backdrop-blur-xl"
          >

            <Bot size={16} className="text-gray-300" />

            <span className="text-[6px] uppercase tracking-[2px] sm:text-[8px] lg:text-[10px] text-gray-300">
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

              <span className="block text-[32px] text-white sm:text-[42px] lg:text-[60px]">
                Truly Autonomous.
              </span>

              <span className="block bg-gradient-to-r from-[#EC1C24] via-[#ff4d55] to-[#8B5CF6] bg-clip-text text-[32px] text-transparent sm:text-[42px] lg:text-[60px]">
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
            className="mx-auto mt-4 max-w-2xl text-[14px] leading-6 text-gray-400 sm:text-[16px] lg:text-[18px]"
          >
            The world's first AI-native Command Center. We don't just provide software; we deploy your global Virtual Operations Team to handle CX delivery with A-grade efficiency.
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
            className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
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

                  <span className="text-[8px] sm:text-[10px] lg:text-[12px] text-gray-300 group-hover:text-white">
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
            className="mt-8 flex flex-col justify-center gap-5 sm:flex-row"
          >

            <motion.button
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="group flex items-center justify-center gap-3 rounded-full bg-[#EC1C24] px-6 py-4 text-sm font-semibold uppercase tracking-[2px] text-white shadow-[0_0_40px_rgba(236,28,36,0.3)] transition-all duration-300"
            >

              Launch Your Team

              <BiRightArrow size={18} />

              <ArrowRight size={18} />
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="rounded-full border border-white/40 bg-white/[0.3] px-8 py-4 text-sm font-semibold uppercase tracking-[2px] text-white backdrop-blur-xl transition-all duration-300 hover:border-violet-500/30"
            >
              See ROI Impact
            </motion.button>
          </motion.div>
        </div>

        {/* FEATURE MARQUEE */}
        <motion.div
          viewport={{
            once: false,
            amount: 0.15,
          }}
          transition={{
            duration: 0.8,
          }}
          onWheel={handleWheel}
          className="relative py-14 overflow-hidden"
        >

          {/* LEFT FADE */}
          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-10 sm:w-10 md:w-18 lg:w-22 bg-gradient-to-r from-black to-transparent" />

          {/* RIGHT FADE */}
          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-10 sm:w-10 lg:w-22 bg-gradient-to-l from-black to-transparent" />

          {/* TRACK */}
          <motion.div
            animate={marqueeControls}
            transition={{
              duration: 95,
              repeat: Infinity,
            }}
            className="flex w-max gap-4 will-change-transform"
          >

            {[...features, ...features].map((item, index) => {

              return (
                <motion.div
                  key={index}
                  onClick={() => handleCardClick(index)}
                  animate={{
                    scale: activeCard === index ? 1.04 : 1,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                  }}
                  style={{
                    boxShadow:
                      activeCard === index
                        ? item.shadow
                        : "shadow-md",
                  }}
                  className={`group relative w-[260px] overflow-hidden rounded-[24px] border border-white/40 ${item.color} p-5 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]`}
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
                      <div className="relative">

                        {/* LIVE PULSE */}
                        <motion.div
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 0, 0.5],
                          }}
                          transition={{
                            duration: 3.5,
                            delay: index * 0.12,
                            repeat: Infinity,
                          }}
                          className={`
                            absolute
                            inset-0
                            rounded-2xl
                            bg-gradient-to-br
                            ${item.color}
                            blur-xl
                          `}
                        />

                        {/* ICON CONTAINER */}
                        <div
                          className={`
                            relative
                            flex
                            h-12
                            w-12
                            items-center
                            justify-center
                            rounded-2xl
                            border
                            border-white/10
                            bg-black/30
                            backdrop-blur-xl
                            shadow-[0_0_25px_rgba(255,255,255,0.08)]
                          `}
                        >

                          <lord-icon
                            src={item.icon}
                            trigger="loop"
                            delay="500"
                            colors="primary:#ffffff,secondary:#EC1C24"
                            style={{
                              width: "26px",
                              height: "26px",
                            }}
                          ></lord-icon>

                        </div>
                      </div>

                      {/* STATUS */}
                      <div className="rounded-full border border-white/10 bg-green px-3 py-1 text-[9px] uppercase tracking-[2px] text-gray-400">
                        Active
                      </div>
                    </div>

                    {/* TEXT */}
                    <div className="mt-6">

                      <p className="text-[9px] uppercase tracking-[3px] text-gray-500">
                        {item.status}
                      </p>

                      <h3 className="mt-2 text-[18px] font-bold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-5 text-gray-300">
                        {item.desc}
                      </p>
                    </div>
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