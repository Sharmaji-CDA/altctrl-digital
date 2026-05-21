"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import ModuleGrid from "./RightSlide/ModuleGrid";
import OminiChannel from "./RightSlide/OminiChannel";
import AgenticAI from "./RightSlide/AgenticAI";
import QualityAssurence from "./RightSlide/QualityAssurence";
import SentimentAnalysis from "./RightSlide/SentimentAnalysis";
import LiveTranscription from "./RightSlide/LiveTranscription";
import TrainingEvaluation from "./RightSlide/Training&Evaluation";
import AICopilot from "./RightSlide/AI-Copilot";
import JourneyAnalysis from "./RightSlide/JourneyAnalysis";
import Customer360 from "./RightSlide/Customer-360";
import WorkforceManagement from "./RightSlide/Workforce-Manag";
import Analytics from "./RightSlide/Analytics";
import DataLogs from "./RightSlide/Data-Logs";
import Integrations from "./RightSlide/Integrations";
import MultiAI from "./RightSlide/Multi-AI";
import ModernUI from "./RightSlide/Modern-UI";
import Architecture from "./RightSlide/Architecture";
import TimeToMarket from "./RightSlide/Time-to-Market";
import DataSecurity from "./RightSlide/Data-Security";
import TranscriptionTTS from "./RightSlide/Transcription-TTS";
import HostingOptions from "./RightSlide/HostingOptions";

import {
  ArrowRight,
  Bot,
  Shield,
  Brain,
  Database,
  Layers3,
  Rocket,
  Cloud,
  LayoutDashboard,
  Users,
  SquareStack,
  Mic2,
  Smile,
  Copy,
  Sparkles,
  Calendar,
  LineChart,
  Plug,
  Cpu,
  BookDashed,
  LockKeyhole,
  WavesIcon,
} from "lucide-react";

const slides = [
  {
    icon: SquareStack,
    title: "A Complete Suite of CX Tools, Powered by AI.",
    description:
      "From omni-channel communication and workforce management to deep analytics and AI-powered training, our platform provides every tool you need in a single, unified command center.",
    tags: [
      "-30% Total Cost of Ownership",
      "+20% Operational Efficiency",
      "Single Source of Truth",
    ],
  },

  {
    icon: Mic2,
    title:
      "Deliver Seamless, Context-Aware Service Across Every Channel.",
    description:
      "Engage with customers seamlessly across voice, chat, email, and social media.",
    tags: [
      "+15pt CSAT",
      "-20% Repeat Contacts",
      "360° Customer View",
    ],
  },

  {
    icon: Bot,
    title: "Deploy a Specialized AI Workforce.",
    description:
      "Design, build, and deploy autonomous AI agents tailored for specific tasks.",
    tags: [
      "Autonomous Workflows",
      "Reduced Manual Effort",
      "24/7 Operations",
    ],
  },

  {
    icon: Shield,
    title:
      "Transform Quality Assurance from a Chore to a Strategy.",
    description:
      "Automatically score and analyze customer interactions for quality and compliance.",
    tags: [
      "100% Interaction Coverage",
      "-75% Manual QA Effort",
      "+10% Agent Performance",
    ],
  },

  {
    icon: Smile,
    title:
      "Go Beyond Positive or Negative to Truly Understand.",
    description:
      "Deep sentiment analysis engine for customer understanding.",
    tags: [
      "-15% Churn Risk",
      "Identify Key Drivers",
      "Predict NPS",
    ],
  },

  {
    icon: Copy,
    title: "Capture Every Word in Real-Time.",
    description:
      "State-of-the-art transcription engine with speaker separation.",
    tags: [
      ">95% Accuracy",
      "Real-Time Data Foundation",
      "Speaker Diarization",
    ],
  },

  {
    icon: Brain,
    title:
      "Build Expert Agents, Not Just Script-Readers.",
    description:
      "Create and track hyper-targeted training modules.",
    tags: [
      "-25% Ramp-up Time",
      "Targeted Skill Growth",
      "Close Knowledge Gaps",
    ],
  },

  {
    icon: Sparkles,
    title:
      "Empower Agents with an AI Co-Pilot That Works in Real-Time.",
    description:
      "Context-aware assistance with smart replies and recommendations.",
    tags: [
      "-25% Average Handle Time",
      "+15% First Call Resolution",
      "Improved Compliance",
    ],
  },

  {
    icon: LayoutDashboard,
    title:
      "See the Full Picture of Your Customer's Experience.",
    description:
      "Analyze customer journeys and optimize interaction flows.",
    tags: [
      "-20% Customer Effort",
      "+10pt NPS Score",
      "Proactive Issue Resolution",
    ],
  },

  {
    icon: Users,
    title:
      "Get the Complete Story on Every Customer.",
    description:
      "Customer 360° View consolidates all interactions and data.",
    tags: [
      "-35% Info Search Time",
      "Personalized Interaction",
      "Higher Customer Loyalty",
    ],
  },

  {
    icon: Calendar,
    title:
      "Optimize Your Workforce with Intelligent Forecasting.",
    description:
      "Leverage Workforce Management tools to optimize staffing.",
    tags: [
      "95% Forecast Accuracy",
      "+15% Agent Productivity",
      "-10% Overstaffing Costs",
    ],
  },

  {
    icon: LineChart,
    title:
      "Turn Data Into Decisions with Powerful Analytics.",
    description:
      "Deep actionable insights into customer and agent performance.",
    tags: [
      "Root Cause Analysis",
      "Predictive Trend Reports",
      "Custom Dashboard",
    ],
  },

  {
    icon: Database,
    title:
      "Access Every Piece of Data with Searchable Logs.",
    description:
      "Comprehensive searchable logs for audits and reporting.",
    tags: [
      "Full Data Transparency",
      "Easy Compliance Audits",
      "Custom Reporting",
    ],
  },

  {
    icon: Plug,
    title:
      "Connect Your Entire Ecosystem, Effortlessly.",
    description:
      "Integrate seamlessly with CRMs, telephony, and external systems.",
    tags: [
      "Unified Data Model",
      "No More Silos",
      "Extensible API",
    ],
  },

  {
    icon: Cpu,
    title:
      "Harness the Power of the Best AI Models.",
    description:
      "Support for Google, OpenAI, Anthropic and more.",
    tags: [
      "Future Proof AI",
      "Vendor-Agnostic",
      "Best-in-Class Models",
    ],
  },

  {
    icon: BookDashed,
    title:
      "A Beautiful, Intuitive Interface Users Will Love.",
    description:
      "Modern customizable UI built for usability and speed.",
    tags: [
      "+25% User Adoption",
      "-15% Training Time",
      "Customizable Themes",
    ],
  },

  {
    icon: Layers3,
    title:
      "Built on a Robust, Scalable Architecture.",
    description:
      "Enterprise-grade multi-layer architecture.",
    tags: [
      "99.99% Uptime",
      "Scales on Demand",
      "Secure by Design",
    ],
  },

  {
    icon: Rocket,
    title:
      "Go from Idea to Implementation at Record Speed.",
    description:
      "Low-code tooling and rapid deployment workflows.",
    tags: [
      "-80% Development Time",
      "Rapid Prototyping",
      "CI/CD Integration",
    ],
  },

  {
    icon: LockKeyhole,
    title:
      "Enterprise-Grade Security and Encryption.",
    description:
      "End-to-end encryption and granular security controls.",
    tags: [
      "Full-Audit Trail",
      "Role-Based Access",
      "End-to-End Encryption",
    ],
  },

  {
    icon: WavesIcon,
    title:
      "Your Choice of Voice Technology.",
    description:
      "Flexible cloud and browser-native voice technologies.",
    tags: [
      "Flexible Voice Tech",
      "Cost Optimization",
      "High Quality Audio",
    ],
  },

  {
    icon: Cloud,
    title:
      "Flexible Hosting, SaaS Simplicity.",
    description:
      "Deploy on SaaS or self-hosted infrastructure.",
    tags: [
      "SaaS or Self-Hosted",
      "Data Sovereignty",
      "Cloud-Agnostic",
    ],
  },
];

const navigationItems = [
  "All Modules",
  "Omni-Channel",
  "Agentic AI",
  "Quality Assurance",
  "Sentiment Analysis",
  "Live Transcription",
  "Training",
  "AI Co-Pilot",
  "Journey Analysis",
  "Customer 360°",
  "Workforce",
  "Analytics",
  "Data Logs",
  "Integrations",
  "Multi-AI",
  "Modern UI",
  "Architecture",
  "Time to Market",
  "Data Security",
  "Transcription",
  "Hosting",
];

export default function DataModule() {

  const [currentSlide, setCurrentSlide] = useState(0);

  const [showNavigation, setShowNavigation] =
    useState(true);

  const [isPaused, setIsPaused] =
    useState(false);

  /*
    AUTO SLIDE
  */
  useEffect(() => {

    if (isPaused) return;

    const interval = setInterval(() => {

      setCurrentSlide((prev) =>
        prev === slides.length - 1
          ? 0
          : prev + 1
      );

    }, 9000);

    return () => clearInterval(interval);

  }, [isPaused]);

  /*
    HOLD AFTER CLICK
  */
  useEffect(() => {

    if (!isPaused) return;

    const timeout = setTimeout(() => {

      setIsPaused(false);

    }, 12000);

    return () => clearTimeout(timeout);

  }, [isPaused]);

  /*
    NAVIGATION VISIBILITY
  */
  useEffect(() => {

    const handleScroll = () => {

      const section =
        document.getElementById(
          "cx-slides-section"
        );

      if (!section) return;

      const rect =
        section.getBoundingClientRect();

      const isVisible =
        rect.top <
          window.innerHeight * 0.8 &&
        rect.bottom >
          window.innerHeight * 0.3;

      setShowNavigation(isVisible);

    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);

  /*
    AUTO CENTER ACTIVE NAV
  */
  useEffect(() => {

    const container =
      document.getElementById(
        "slides-navigation"
      );

    if (!container) return;

    const activeButton =
      container.children[
        currentSlide
      ] as HTMLElement;

    if (!activeButton) return;

    const containerWidth =
      container.offsetWidth;

    const buttonLeft =
      activeButton.offsetLeft;

    const buttonWidth =
      activeButton.offsetWidth;

    container.scrollTo({
      left:
        buttonLeft -
        containerWidth / 2 +
        buttonWidth / 2,
      behavior: "smooth",
    });

  }, [currentSlide]);

  const activeSlide =
    slides[currentSlide];

  const Icon = activeSlide.icon;

  return (

    <section
      id="cx-slides-section"
      className="
      relative
      min-h-[100svh]
      overflow-hidden
      bg-[#0F0710]
      "
    >

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.03]">

        <div
          className="
          h-full
          w-full
          bg-[linear-gradient(rgba(161,92,116,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(161,92,116,0.12)_1px,transparent_1px)]
          "
        />

      </div>

      {/* LEFT GLOW */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="
        absolute
        left-[-200px]
        top-[20%]
        h-[500px]
        w-[500px]
        rounded-full
        bg-[#7A294A]/20
        blur-[120px]
        "
      />

      {/* RIGHT GLOW */}
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.18, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
        absolute
        right-[-200px]
        bottom-[10%]
        h-[500px]
        w-[500px]
        rounded-full
        bg-[#5B355F]/18
        blur-[110px]
        "
      />

      <div
        className="
        relative
        z-20
        flex
        min-h-screen
        items-center
        justify-center

        px-4
        py-24

        sm:px-6
        lg:px-10
        xl:px-12
        2xl:px-24
        "
      >

        <AnimatePresence mode="popLayout">

          <motion.div

            key={currentSlide}

            initial={{
              opacity: 0,
              y: 40,
              scale: 0.96,
            }}

            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}

            exit={{
              opacity: 0,
              y: -30,
              scale: 1.02,
            }}

            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}

            className="
            relative
            grid
            w-full
            max-w-[1500px]
            items-center

            gap-10

            xl:grid-cols-2
            "
          >

            {/* LEFT */}
            <div className="max-w-[720px]">

              {/* ICON */}
              <motion.div
                animate={{
                  rotate: [0, 8, -8, 0],
                }}
                transition={{
                  duration: 0.6,
                }}
                className="
                mb-8
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                border
                border-[#7A294A]/20
                bg-[#18101C]/80
                backdrop-blur-xl
                "
              >

                <Icon className="h-7 w-7 text-white" />

              </motion.div>

              {/* TITLE */}
              <h1
                className="
                text-[28px]
                font-black
                leading-[0.95]
                tracking-[-2px]

                sm:text-[42px]

                lg:text-[62px]
                "
              >

                <span
                  className="
                  bg-gradient-to-r
                  from-[#FFF1F4]
                  via-[#D46A8A]
                  to-[#7C4A87]
                  bg-clip-text
                  text-transparent
                  "
                >
                  {activeSlide.title}
                </span>

              </h1>

              {/* DESC */}
              <p
                className="
                mt-8
                max-w-[620px]
                text-[13px]
                leading-7
                text-[#B7A9B1]

                sm:text-[15px]
                "
              >
                {activeSlide.description}
              </p>

              {/* TAGS */}
              <div className="mt-8 flex flex-wrap gap-3">

                {activeSlide.tags.map(
                  (tag, index) => (

                    <div
                      key={index}
                      className="
                      rounded-full
                      border
                      border-[#7A294A]/20
                      bg-[#18101C]/70

                      px-4
                      py-2

                      text-[10px]
                      text-[#D8C3CB]
                      "
                    >
                      {tag}
                    </div>
                  )
                )}

              </div>

              {/* BUTTON */}
              <motion.button
                whileHover={{
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="
                relative
                mt-10
                flex
                items-center
                gap-3
                overflow-hidden
                rounded-2xl
                bg-gradient-to-r
                from-[#B1456B]
                to-[#6E4779]

                px-7
                py-4

                text-sm
                font-semibold
                tracking-wide
                text-white

                shadow-[0_0_40px_rgba(177,69,107,0.22)]
                "
              >

                <div
                  className="
                  absolute
                  inset-0
                  translate-x-[-100%]
                  animate-[shimmer_2.5s_infinite]
                  bg-gradient-to-r
                  from-transparent
                  via-white/20
                  to-transparent
                  "
                />

                Get Started

                <ArrowRight className="h-4 w-4" />

              </motion.button>

            </div>

            {/* RIGHT */}
            <div className="relative min-h-[500px]">

              <motion.div
                key={currentSlide}
                initial={{
                  opacity: 0,
                  y: 20,
                  scale: 0.98,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >

                {currentSlide === 0 && <ModuleGrid />}
                {currentSlide === 1 && <OminiChannel />}
                {currentSlide === 2 && <AgenticAI />}
                {currentSlide === 3 && <QualityAssurence />}
                {currentSlide === 4 && <SentimentAnalysis />}
                {currentSlide === 5 && <LiveTranscription />}
                {currentSlide === 6 && <TrainingEvaluation />}
                {currentSlide === 7 && <AICopilot />}
                {currentSlide === 8 && <JourneyAnalysis />}
                {currentSlide === 9 && <Customer360 />}
                {currentSlide === 10 && <WorkforceManagement />}
                {currentSlide === 11 && <Analytics />}
                {currentSlide === 12 && <DataLogs />}
                {currentSlide === 13 && <Integrations />}
                {currentSlide === 14 && <MultiAI />}
                {currentSlide === 15 && <ModernUI />}
                {currentSlide === 16 && <Architecture />}
                {currentSlide === 17 && <TimeToMarket />}
                {currentSlide === 18 && <DataSecurity />}
                {currentSlide === 19 && <TranscriptionTTS />}
                {currentSlide === 20 && <HostingOptions />}

              </motion.div>

            </div>

          </motion.div>

        </AnimatePresence>

      </div>

      {/* NAVIGATION */}
      <AnimatePresence>

        {showNavigation && (

          <motion.div
            className="
            fixed
            bottom-3
            left-1/2
            z-[999]
            w-full
            -translate-x-1/2

            px-4

            sm:px-6
            lg:px-10
            xl:px-12
            2xl:px-24
            "
          >

            <div
              className="
              mx-auto
              flex
              max-w-[1500px]
              justify-center
              "
            >

              <div
                id="slides-navigation"
                className="
                flex
                items-center
                gap-2
                overflow-x-auto
                rounded-full
                border
                border-white/10
                bg-[#120A14]/70

                px-2
                py-2

                backdrop-blur-2xl
                scrollbar-hide
                "
              >

                {navigationItems.map(
                  (slide, index) => (

                    <motion.button
                      key={index}

                      onClick={() => {

                        setCurrentSlide(index);

                        setIsPaused(true);

                      }}

                      whileHover={{
                        y: -3,
                        scale: 1.05,
                      }}

                      whileTap={{
                        scale: 0.95,
                      }}

                      className={`
                      relative
                      shrink-0
                      overflow-hidden
                      rounded-full
                      border

                      px-4
                      py-2.5

                      text-[11px]
                      font-medium

                      transition-all
                      duration-500

                      ${
                        currentSlide === index
                          ? `
                          border-white/20
                          bg-[#E8D7DD]
                          text-[#2A1620]
                          `
                          : `
                          border-white/5
                          bg-[#1A1118]/70
                          text-[#A58D97]
                          hover:text-white
                          `
                      }
                      `}
                    >

                      <span
                        className="
                        relative
                        z-10
                        flex
                        items-center
                        gap-2
                        "
                      >

                        <span
                          className={`
                          h-1.5
                          w-1.5
                          rounded-full

                          ${
                            currentSlide === index
                              ? "bg-[#2A1620]"
                              : "bg-[#7A5C68]"
                          }
                          `}
                        />

                        {slide}

                      </span>

                    </motion.button>
                  )
                )}

              </div>

            </div>

          </motion.div>
        )}

      </AnimatePresence>

    </section>
  );
}