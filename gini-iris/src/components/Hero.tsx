import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowRight, AsteriskIcon, BarChart2, Building, CaseUpperIcon, Timeline } from "lucide-react";
import { BiRightArrow } from "react-icons/bi";
import {
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
  Layers3,
  Cpu,
  Radar,
  LockKeyhole,
  MessagesSquare,
} from "lucide-react";
import { useRef } from "react";

const Hero = () => {

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });


  const rawScale = useTransform(
    scrollYProgress,
    [0, 0.6],
    [1, 0.96]
  );

  const heroScale = useSpring(rawScale, {
    stiffness: 90,
    damping: 30,
  });

  const rawY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -220]
  );

  const heroY = useSpring(rawY, {
    stiffness: 90,
    damping: 30,
  });

  /* PLANET PARALLAX */
  const moonY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -120]
  );

  /* GRID */
  const gridY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -140]
  );

  const glowY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -180]
  );

  const smoothMoon = useSpring(moonY, {
    stiffness: 40,
    damping: 20,
  });

  return (
    <section ref={containerRef} className="relative h-[200vh] overflow-hidden bg-black text-white">

        {/* CINEMATIC TOP FADE */}
        <motion.div
          style={{
            opacity: useTransform(
              scrollYProgress,
              [0.15, 0.55],
              [0, 1]
            ),
          }}
          className="pointer-events-none absolute inset-0 z-[80]"
        >
          {/* TOP DARKNESS */}
          <div className="absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-black via-black/80 to-transparent" />

          {/* ATMOSPHERIC BLUR */}
          <div className="absolute inset-x-0 top-0 h-[60%] backdrop-blur-[12px]" />

          {/* EDGE VIGNETTE */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.45))]" />
        </motion.div>

        {/* NOISE */}
        <div className="absolute inset-0 opacity-[0.025] mix-blend-soft-light">
          <div className="h-full w-full bg-[radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:22px_22px]" />
        </div>

        {/* GRID */}
        <motion.div style={{ y: gridY }} className="absolute inset-0 opacity-[0.04]">
          <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:90px_90px]" />
        </motion.div>

        {/* CINEMATIC SEMI-SPHERE */}
        <motion.div
          style={{
            y: smoothMoon,
          }}
          animate={{
            scale: [1, 1.02, 1],
            opacity: [0.85, 1, 0.85],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-[180px] z-0 -translate-x-1/2"
        >
          {/* MAIN PLANET */}
          <div className="relative h-[900px] w-[1400px] overflow-hidden rounded-t-full border border-white/[0.05] bg-black">

            {/* PLANET TEXTURE */}
            <div className="absolute inset-0 rounded-t-full bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),rgba(255,255,255,0.03)_35%,transparent_70%)]" />

            {/* RED SIDE LIGHT */}
            <div className="absolute left-[-10%] top-[10%] h-[600px] w-[600px] rounded-full bg-[#EC1C24]/25 blur-[140px]" />

            {/* PURPLE SIDE LIGHT */}
            <div className="absolute right-[-10%] top-[10%] h-[600px] w-[600px] rounded-full bg-[#8B5CF6]/20 blur-[140px]" />

            {/* PLANET SURFACE */}
            <div className="absolute inset-0 rounded-t-full bg-gradient-to-b from-white/[0.12] via-white/[0.02] to-transparent" />

            {/* ATMOSPHERIC GLOW */}
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#EC1C24] via-white to-[#8B5CF6] opacity-80 blur-[2px]" />

            {/* OUTER GLOW */}
            <div className="absolute inset-[-80px] rounded-full bg-[#8B5CF6]/10 blur-[180px]" />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black" />
          </div>
        </motion.div>

        {/* ATMOSPHERIC FOG */}
        <motion.div
          animate={{
            opacity: [0.05, 0.1, 0.05],
            x: [0, 40, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)] blur-[120px]"
        />

        {/* RED GLOW */}
        <motion.div
          animate={{
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.15, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-220px] top-[80px] h-[550px] w-[550px] rounded-full bg-[#EC1C24]/20 blur-[180px]"
        />

        {/* PURPLE GLOW */}
        <motion.div
          style={{ y: glowY }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1],
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[-220px] top-[180px] h-[550px] w-[550px] rounded-full bg-[#8B5CF6]/20 blur-[180px]"
        />

        {/* RADIAL LIGHT */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_40%)]" />

        <motion.div style={{ scale: heroScale, y: heroY }} className="relative z-10">
          {/* HERO */}
          <div className="mx-auto max-w-[1400px] px-5 pb-32 pt-44 sm:px-6 lg:px-8 lg:pt-44">
            
            <div className="flex items-center justify-center">
              
              {/* LEFT CONTENT */}
              <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center text-center">
                
                {/* LABEL */}
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.2,
                    duration: 0.8,
                  }}
                  className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 backdrop-blur-xl"
                >
                  
                  <motion.div
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="h-2 w-2 rounded-full bg-[#EC1C24]"
                  />

                  <span className="text-[11px] uppercase tracking-[4px] text-gray-300">
                    AI Native Operations
                  </span>
                </motion.div>

                {/* HEADING */}
                <motion.h1 className="font-black leading-[0.88] tracking-[-5px]">
                  
                  {[
                    "Truly Autonomous.",
                    "Operationally Infinite.",
                  ].map((word, index) => (
                    <motion.span
                      key={word}
                      initial={{
                        opacity: 0,
                        y: 120,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: index * 0.1,
                        duration: 1,
                        ease: "easeOut",
                      }}
                      className={`block ${
                        index === 1 || index === 2
                          ? "bg-gradient-to-r from-[#EC1C24] via-[#ff4d55] to-[#8B5CF6] bg-clip-text text-transparent"
                          : "text-white"
                      } ${
                        index >= 3
                          ? "mt-4 text-white/90"
                          : ""
                      } text-[52px] sm:text-[72px] lg:text-[96px]`}
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.h1>

                {/* DESCRIPTION */}
                <motion.p
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.7,
                    duration: 1,
                  }}
                  className="mt-10 max-w-3xl text-base leading-8 text-gray-400 sm:text-lg"
                >
                  The world's first AI-native Command Center. We don't just provide software; 
                  we deploy your global Virtual Operations Team to handle CX delivery with A-grade efficiency.
                </motion.p>

                {/* TOP FEATURES */}
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.8,
                    duration: 1,
                  }}
                  className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-5"
                >
                  
                  {[
                    {
                      text: "Free trial",
                      icon: CircleCheck,
                      color: "text-blue-400",
                      glow: "group-hover:shadow-[0_0_20px_rgba(96,165,250,0.45)]",
                    },
                    {
                      text: "No credit card required",
                      icon: CreditCard,
                      color: "text-purple-400",
                      glow: "group-hover:shadow-[0_0_20px_rgba(168,85,247,0.45)]",
                    },
                    {
                      text: "Flexible pricing",
                      icon: Sparkles,
                      color: "text-pink-400",
                      glow: "group-hover:shadow-[0_0_20px_rgba(236,72,153,0.45)]",
                    },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={item.text}
                        whileHover={{
                          y: -2,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                        className="group flex items-center gap-3"
                      >
                        
                        {/* ICON */}
                        <div
                          className={`flex h-8 w-8 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 ${item.color} ${item.glow}`}
                        >
                          <Icon size={14} strokeWidth={2.2} />
                        </div>

                        {/* TEXT */}
                        <span className="text-sm font-medium text-gray-300 transition-colors duration-300 group-hover:text-white sm:text-base">
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
                    y: 40,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.9,
                    duration: 1,
                  }}
                  className="mt-12 flex flex-col gap-5 sm:flex-row"
                >
                  
                  {/* PRIMARY BUTTON */}
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    className="group relative overflow-hidden rounded-full border border-white/10 bg-[#EC1C24] px-8 py-4 text-sm font-semibold uppercase tracking-[2px] text-white transition-all duration-500 hover:shadow-[0_0_60px_rgba(236,28,36,0.45)]"
                  >
                    
                    <div className="absolute inset-0 bg-gradient-to-r from-[#EC1C24] via-[#ff4d55] to-[#8B5CF6] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.35),transparent_60%)] opacity-70" />

                    <span className="relative z-10 flex items-center gap-3">
                      Launch Your Team <BiRightArrow></BiRightArrow>

                      <motion.div
                        animate={{
                          x: [0, 4, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                        }}
                      >
                        <ArrowRight size={18} />
                      </motion.div>
                    </span>
                  </motion.button>

                  {/* SECONDARY BUTTON */}
                  <motion.button
                    whileHover={{
                      scale: 1.04,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-8 py-4 text-sm font-semibold uppercase tracking-[2px] text-white backdrop-blur-xl transition-all duration-500 hover:border-[#8B5CF6]/40 hover:bg-white/[0.06] hover:shadow-[0_0_40px_rgba(139,92,246,0.2)]"
                  >
                    See ROI Impact
                  </motion.button>
                </motion.div>

                {/* CINEMATIC AI RAIL */}
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 60,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 1.2,
                    duration: 2,
                  }}
                  className="relative mt-24 w-screen overflow-hidden py-6"
                >
                  
                  {/* EDGE FADE */}
                  <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-40 bg-gradient-to-r from-black to-transparent" />

                  <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-40 bg-gradient-to-l from-black to-transparent" />

                  {/* TOP RAIL */}
                  <motion.div
                    animate={{
                      x: ["0%", "-50%"],
                    }}
                    transition={{
                      duration: 210,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="mb-10 flex w-max items-center gap-8 will-change-transform"
                  >
                    
                    {[
                      {
                        icon: BarChart3,
                        title: "Analytics",
                        status: "Actionable BI",
                        desc: "Deep-dive dashboards covering agent performance, compliance metrics, and automated ROI reporting.",
                        color:
                          "from-cyan-500/20 to-blue-500/20",
                        border:
                          "hover:border-cyan-400/40",
                      },

                      {
                        icon: Globe,
                        title: "Omini-Channel",
                        status: "Unified Engagement",
                        desc: "Seamless integration across multiple communication channels for a consistent customer experience.",
                        color:
                          "from-[#EC1C24]/20 to-[#8B5CF6]/20",
                        border:
                          "hover:border-[#8B5CF6]/40",
                      },

                      {
                        icon: BrainCircuit,
                        title: "Agentic AI",
                        status: "Autonomous Reasoning",
                        desc: "Intelligent autonomous agents that can perform complex tasks and make decisions in real-time.",
                        color:
                          "from-pink-500/20 to-rose-500/20",
                        border:
                          "hover:border-pink-400/40",
                      },

                      {
                        icon: ShieldCheck,
                        title: "Quality Assurance",
                        status: "Automated Auditing",
                        desc: "Automatic scoring for 100% of interactions. AI-driven coaching recommendations to ensure A-grade service quality.",
                        color:
                          "from-emerald-500/20 to-green-500/20",
                        border:
                          "hover:border-emerald-400/40",
                      },

                      {
                        icon: Radar,
                        title: "Sentiment Analysis",
                        status: "Real-Time Emotion",
                        desc: "Detect frustration, confusion, and joy instantly. Prioritize interactions based on emotional intelligence drivers.",
                        color:
                          "from-orange-500/20 to-red-500/20",
                        border:
                          "hover:border-orange-400/40",
                      },
                      {
                        icon: AudioLines,
                        title: "Live Transcription",
                        status: "Speech-to-Data",
                        desc: "Convert voice to searchable data in real-time with >95% accuracy using custom-tuned neural models.",
                        color:
                          "from-orange-500/20 to-red-500/20",
                        border:
                          "hover:border-pink-400/40",
                      },
                      {
                        icon: AsteriskIcon,
                        title: "Training & Eval",
                        status: "Expert Workforce",
                        desc: "Adaptive learning paths and automated evaluations to professionally train and certify your virtual and human teams.",
                        color:
                          "from-orange-500/20 to-red-500/20",
                        border:
                          "hover:border-sky-400/40",
                      },
                      {
                        icon: Bot,
                        title: "AI Co-Pilot",
                        status: "Agent Assistance",
                        desc: "A real-time co-pilot offering smart replies, procedural guidance, and compliance flags during live conversations.",
                        color:
                          "from-orange-500/20 to-red-500/20",
                        border:
                          "hover:border-grey-400/40",
                      },
                      {
                        icon: BarChart2,
                        title: "Journey Analysis",
                        status: "End-to-End Insights",
                        desc: "Visualize and optimize CX and Backoffice paths. Identify friction points and refine the resolution lifecycle.",
                        color:
                          "from-orange-500/20 to-red-500/20",
                        border:
                          "hover:border-navy-400/40",
                      },
                      {
                        icon: MessagesSquare,
                        title: "Customer 360°",
                        status: "Unified Profile",
                        desc: "Consolidate interaction history, CRM data, and behavioral logs into a comprehensive view of every customer.",
                        color:
                          "from-orange-500/20 to-red-500/20",
                        border:
                          "hover:border-brown-400/40",
                      },
                      {
                        icon: Workflow,
                        title: "Workforce Mgmt",
                        status: "Operational Scale",
                        desc: "Predictive forecasting and automated scheduling to ensure your virtual operations team matches demand cycles.",
                        color:
                          "from-orange-500/20 to-red-500/20",
                        border:
                          "hover:border-cyan-400/40",
                      },
                      {
                        icon: Database,
                        title: "Data & Logs",
                        status: "Full Auditability",
                        desc: "Searchable, granular logs of every interaction, API handshake, and system state change for complete transparency.",
                        color:
                          "from-orange-500/20 to-red-500/20",
                        border:
                          "hover:border-steal-400/40",
                      },
                      {
                        icon: Layers3,
                        title: "Integrations",
                        status: "Platform Connectivity",
                        desc: "Pre-built connectors for major CRM, Telephony, and Knowledge platforms including Salesforce, Twilio, and Knowledge bases.",
                        color:
                          "from-orange-500/20 to-red-500/20",
                        border:
                          "hover:border-violet-400/40",
                      },
                      {
                        icon: Cpu,
                        title: "Multi-AI",
                        status: "LLM Orchestration",
                        desc: "Dynamically switch between OpenAI, Claude, and Gemini models based on cost, latency, and task complexity.",
                        color:
                          "from-orange-500/20 to-red-500/20",
                        border:
                          "hover:border--400/40",
                      },
                      {
                        icon: Sparkles,
                        title: "Modern UI",
                        status: "Intuitive Ops",
                        desc: "A fast, responsive, and customizable interface designed for new-age operational efficiency and observability.",
                        color:
                          "from-orange-500/20 to-red-500/20",
                        border:
                          "hover:border-yellow-400/40",
                      },
                      {
                        icon: Building,
                        title: "Architecture",
                        status: "AI-Native Stack",
                        desc: "Built from day one without legacy debt. A robust foundation designed for autonomous agents and massive scale.",
                        color:
                          "from-orange-500/20 to-red-500/20",
                        border:
                          "hover:border-green-400/40",
                      },
                      {
                        icon: Timeline,
                        title: "Time to Market",
                        status: "Rapid Deployment",
                        desc: "Launch your machine in under 24 hours. Use no-code tools to define schemas and personas instantly.",
                        color:
                          "from-orange-500/20 to-red-500/20",
                        border:
                          "hover:border-purple-400/40",
                      },
                      {
                        icon: LockKeyhole,
                        title: "Data Security",
                        status: "Enterprise Trust",
                        desc: "SOC2 Type II certified security with real-time PII masking and deterministic safety guardrails built-in.",
                        color:
                          "from-orange-500/20 to-red-500/20",
                        border:
                          "hover:border-red-400/40",
                      },
                      {
                        icon: CaseUpperIcon,
                        title: "Transcription & TTS",
                        status: "Voice Intelligence",
                        desc: "Enterprise-grade STT and TTS engines that handle multi-lingual interactions and complex dialects.",
                        color:
                          "from-orange-500/20 to-red-500/20",
                        border:
                          "hover:border-blue-400/40",
                      },
                    ]
                      .concat([
                          {
                            icon: BarChart3,
                            title: "Analytics",
                            status: "Actionable BI",
                            desc: "Deep-dive dashboards covering agent performance, compliance metrics, and automated ROI reporting.",
                            color:
                              "from-cyan-500/20 to-blue-500/20",
                            border:
                              "hover:border-cyan-400/40",
                          },

                          {
                            icon: Globe,
                            title: "Omini-Channel",
                            status: "Unified Engagement",
                            desc: "Seamless integration across multiple communication channels for a consistent customer experience.",
                            color:
                              "from-[#EC1C24]/20 to-[#8B5CF6]/20",
                            border:
                              "hover:border-[#8B5CF6]/40",
                          },

                          {
                            icon: Cpu,
                            title: "Agentic AI",
                            status: "Autonomous Reasoning",
                            desc: "Intelligent autonomous agents that can perform complex tasks and make decisions in real-time.",
                            color:
                              "from-pink-500/20 to-rose-500/20",
                            border:
                              "hover:border-pink-400/40",
                          },

                          {
                            icon: ShieldCheck,
                            title: "Quality Assurance",
                            status: "Automated Auditing",
                            desc: "Automatic scoring for 100% of interactions. AI-driven coaching recommendations to ensure A-grade service quality.",
                            color:
                              "from-emerald-500/20 to-green-500/20",
                            border:
                              "hover:border-emerald-400/40",
                          },

                          {
                            icon: Radar,
                            title: "Sentiment Analysis",
                            status: "Real-Time Emotion",
                            desc: "Detect frustration, confusion, and joy instantly. Prioritize interactions based on emotional intelligence drivers.",
                            color:
                              "from-orange-500/20 to-red-500/20",
                            border:
                              "hover:border-orange-400/40",
                          },
                          {
                            icon: AudioLines,
                            title: "Live Transcription",
                            status: "Speech-to-Data",
                            desc: "Convert voice to searchable data in real-time with >95% accuracy using custom-tuned neural models.",
                            color:
                              "from-orange-500/20 to-red-500/20",
                            border:
                              "hover:border-pink-400/40",
                          },
                          {
                            icon: AsteriskIcon,
                            title: "Training & Eval",
                            status: "Expert Workforce",
                            desc: "Adaptive learning paths and automated evaluations to professionally train and certify your virtual and human teams.",
                            color:
                              "from-orange-500/20 to-red-500/20",
                            border:
                              "hover:border-sky-400/40",
                          },
                          {
                            icon: Bot,
                            title: "AI Co-Pilot",
                            status: "Agent Assistance",
                            desc: "A real-time co-pilot offering smart replies, procedural guidance, and compliance flags during live conversations.",
                            color:
                              "from-orange-500/20 to-red-500/20",
                            border:
                              "hover:border-grey-400/40",
                          },
                          {
                            icon: BarChart2,
                            title: "Journey Analysis",
                            status: "End-to-End Insights",
                            desc: "Visualize and optimize CX and Backoffice paths. Identify friction points and refine the resolution lifecycle.",
                            color:
                              "from-orange-500/20 to-red-500/20",
                            border:
                              "hover:border-navy-400/40",
                          },
                          {
                            icon: MessagesSquare,
                            title: "Customer 360°",
                            status: "Unified Profile",
                            desc: "Consolidate interaction history, CRM data, and behavioral logs into a comprehensive view of every customer.",
                            color:
                              "from-orange-500/20 to-red-500/20",
                            border:
                              "hover:border-brown-400/40",
                          },
                          {
                            icon: Workflow,
                            title: "Workforce Mgmt",
                            status: "Operational Scale",
                            desc: "Predictive forecasting and automated scheduling to ensure your virtual operations team matches demand cycles.",
                            color:
                              "from-orange-500/20 to-red-500/20",
                            border:
                              "hover:border-cyan-400/40",
                          },
                          {
                            icon: Database,
                            title: "Data & Logs",
                            status: "Full Auditability",
                            desc: "Searchable, granular logs of every interaction, API handshake, and system state change for complete transparency.",
                            color:
                              "from-orange-500/20 to-red-500/20",
                            border:
                              "hover:border-teal-400/40",
                          },
                          {
                            icon: Layers3,
                            title: "Integrations",
                            status: "Platform Connectivity",
                            desc: "Pre-built connectors for major CRM, Telephony, and Knowledge platforms including Salesforce, Twilio, and Knowledge bases.",
                            color:
                              "from-orange-500/20 to-red-500/20",
                            border:
                              "hover:border-violet-400/40",
                          },
                          {
                            icon: Cpu,
                            title: "Multi-AI",
                            status: "LLM Orchestration",
                            desc: "Dynamically switch between OpenAI, Claude, and Gemini models based on cost, latency, and task complexity.",
                            color:
                              "from-orange-500/20 to-red-500/20",
                            border:
                              "hover:border-yellow-400/40",
                          },
                          {
                            icon: Sparkles,
                            title: "Modern UI",
                            status: "Intuitive Ops",
                            desc: "A fast, responsive, and customizable interface designed for new-age operational efficiency and observability.",
                            color:
                              "from-orange-500/20 to-red-500/20",
                            border:
                              "hover:border-green-400/40",
                          },
                          {
                            icon: Building,
                            title: "Architecture",
                            status: "AI-Native Stack",
                            desc: "Built from day one without legacy debt. A robust foundation designed for autonomous agents and massive scale.",
                            color:
                              "from-orange-500/20 to-red-500/20",
                            border:
                              "hover:border-purple-400/40",
                          },
                          {
                            icon: Timeline,
                            title: "Time to Market",
                            status: "Rapid Deployment",
                            desc: "Launch your machine in under 24 hours. Use no-code tools to define schemas and personas instantly.",
                            color:
                              "from-orange-500/20 to-red-500/20",
                            border:
                              "hover:border-red-400/40",
                          },
                          {
                            icon: LockKeyhole,
                            title: "Data Security",
                            status: "Enterprise Trust",
                            desc: "SOC2 Type II certified security with real-time PII masking and deterministic safety guardrails built-in.",
                            color:
                              "from-orange-500/20 to-red-500/20",
                            border:
                              "hover:border-indigo-400/40",
                          },
                          {
                            icon: CaseUpperIcon,
                            title: "Transcription & TTS",
                            status: "Voice Intelligence",
                            desc: "Enterprise-grade STT and TTS engines that handle multi-lingual interactions and complex dialects.",
                            color:
                              "from-orange-500/20 to-red-500/20",
                            border:
                              "hover:border-blue-400/40",
                          },
                      ])
                      .map((item, index) => {
                        const Icon = item.icon;

                        const colors = [
                          "from-cyan-500/20 to-blue-500/20",
                          "from-[#EC1C24]/20 to-[#8B5CF6]/20",
                          "from-pink-500/20 to-rose-500/20",
                          "from-emerald-500/20 to-green-500/20",
                          "from-orange-500/20 to-red-500/20",
                          "from-indigo-500/20 to-violet-500/20",
                        ];

                        const borders = [
                          "hover:border-cyan-400/40",
                          "hover:border-[#8B5CF6]/40",
                          "hover:border-pink-400/40",
                          "hover:border-emerald-400/40",
                          "hover:border-orange-400/40",
                          "hover:border-violet-400/40",
                        ];

                        const glow = [
                          "group-hover:shadow-[0_0_60px_rgba(34,211,238,0.18)]",
                          "group-hover:shadow-[0_0_70px_rgba(139,92,246,0.22)]",
                          "group-hover:shadow-[0_0_60px_rgba(236,72,153,0.18)]",
                          "group-hover:shadow-[0_0_60px_rgba(16,185,129,0.18)]",
                          "group-hover:shadow-[0_0_60px_rgba(249,115,22,0.18)]",
                          "group-hover:shadow-[0_0_60px_rgba(139,92,246,0.18)]",
                        ];

                        return (
                          <div
                            key={index}
                            className="flex items-center gap-8"
                          >
                            
                            {/* CARD */}
                            <motion.div
                              whileHover={{
                                y: -12,
                                scale: 1.03,
                              }}
                              className={`group relative min-h-[280px] w-[360px] overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl transition-all duration-700 ${borders[index % borders.length]} ${glow[index % glow.length]}`}
                            >
                              
                              {/* GLOW */}
                              <div
                                className={`absolute inset-0 bg-gradient-to-br ${colors[index % colors.length]} opacity-0 transition-opacity duration-700 group-hover:opacity-100`}
                              />

                              {/* TOP LIGHT */}
                              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent)]" />

                              {/* FLOATING LIGHT */}
                              <motion.div
                                animate={{
                                  x: [0, 30, 0],
                                  y: [0, -20, 0],
                                }}
                                transition={{
                                  duration: 10,
                                  repeat: Infinity,
                                }}
                                className="absolute right-[-40px] top-[-40px] h-[140px] w-[140px] rounded-full bg-white/5 blur-[80px]"
                              />

                              {/* CONTENT */}
                              <div className="relative z-10 flex h-full flex-col justify-between">
                                
                                {/* TOP */}
                                <div className="flex items-center justify-between">
                                  
                                  {/* ICON */}
                                  <motion.div
                                    whileHover={{ rotate: 12 , scale: 1.2 }} transition={{ duration: 0.4, ease: "easeOut",}}
                                    className={`flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br ${colors[index % colors.length]} text-white backdrop-blur-xl`}
                                  >
                                    <Icon size={24} strokeWidth={2} />
                                  </motion.div>

                                  {/* LIVE */}
                                  <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[10px] uppercase tracking-[2px] text-gray-400 backdrop-blur-xl">
                                    
                                    <motion.div
                                      animate={{
                                        opacity: [0.3, 1, 0.3],
                                        scale: [1, 1.4, 1],
                                      }}
                                      transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                      }}
                                      className="h-2 w-2 rounded-full bg-emerald-400"
                                    />

                                    Active
                                  </div>
                                </div>

                                {/* TEXT */}
                                <div className="mt-10">
                                  
                                  <p className="text-xs uppercase tracking-[4px] text-gray-500">
                                    {item.status}
                                  </p>

                                  <h3 className="mt-4 text-3xl font-bold text-white">
                                    {item.title}
                                  </h3>

                                  <p className="mt-5 text-sm leading-7 text-gray-300 sm:text-[15px]">
                                    {item.desc}
                                  </p>
                                </div>

                                {/* LINE */}
                                <div
                                  className={`h-[2px] w-full bg-gradient-to-r ${colors[index % colors.length]}`}
                                />
                              </div>
                            </motion.div>

                            {/* CONNECTOR */}
                            <motion.div
                              animate={{
                                opacity: [0.3, 1, 0.3],
                                x: [0, 6, 0],
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                              }}
                              className="hidden lg:flex items-center"
                            >
                              
                              <div className="relative flex items-center">
                                
                                {/* LINE */}
                                <div className="h-[2px] w-16 bg-gradient-to-r from-[#EC1C24] to-[#8B5CF6]" />

                                {/* PULSE */}
                                <motion.div
                                  animate={{
                                    scale: [1, 1.5, 1],
                                    opacity: [0.4, 1, 0.4],
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                  }}
                                  className="absolute right-0 h-3 w-3 rounded-full bg-[#8B5CF6] shadow-[0_0_20px_rgba(139,92,246,0.8)]"
                                />
                              </div>
                            </motion.div>
                          </div>
                        );
                      })}
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

    </section>
  );
};

export default Hero;