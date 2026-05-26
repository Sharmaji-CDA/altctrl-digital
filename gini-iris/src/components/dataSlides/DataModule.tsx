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
      "Engage with customers seamlessly across voice, chat, email, and social media. Our omni-channel platform provides a single, unified interface for agents, ensuring consistent and context-aware service without switching screens.",
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
      "Design, build, and deploy autonomous AI agents tailored for specific tasks. Automate workflows, boost efficiency, and scale your operations like never before.",
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
      "Automatically score and analyze 100% of your customer interactions for quality and compliance. Move beyond random sampling and get objective, data-driven insights to provide targeted coaching that truly improves agent performance.",
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
      "Our deep sentiment analysis engine deciphers not just polarity, but also the intensity of emotions like frustration, confusion, and gratitude. Understand customer effort and predict loyalty with unparalleled accuracy.",
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
      "Our state-of-the-art transcription engine converts spoken conversations into accurate, speaker-separated text instantly. This provides the foundation for all downstream AI analysis and agent assistance features.",
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
      "Create, assign, and track hyper-targeted training modules and evaluations directly within the platform. Address knowledge gaps identified by AI and watch your team's performance and confidence soar.",
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
      "Provide your team with instant, context-aware assistance. From smart replies and procedural guidance to knowledge suggestions and real-time alerts for churn risk or upsell opportunities, our co-pilot is always on.",
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
      "Analyze and visualize end-to-end customer journeys across all touchpoints. Identify friction points, predict potential drop-offs, and get AI-powered recommendations to optimize every step of the interaction flow.",
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
      "Our Customer 360° View consolidates every interaction, transaction, and data point into a single, comprehensive profile. Empower your agents with the context they need to provide truly personalized service.",
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
      "Leverage our Workforce Management (WFM) tools to predict future contact volumes, create optimal agent schedules, and monitor real-time adherence, ensuring you always have the right people in the right place at the right time.",
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
      "Go beyond basic reporting. Our analytics suite provides deep, actionable insights into agent performance, customer satisfaction, and operational efficiency. Identify trends, spot opportunities, and drive continuous improvement.",
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
      "Every event, every interaction, and every analysis is captured and stored in a comprehensive data log. Easily search, filter, and export raw data for custom reporting, compliance audits, or further analysis.",
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
      "Our platform is built for interoperability. With a vast library of pre-built connectors and a robust API, you can seamlessly integrate with your existing CRM, telephony, and knowledge base systems to create a single source of truth.",
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
      "Stay at the forefront of innovation. Our platform supports multiple AI providers, including Google, OpenAI, and Anthropic. This ensures you can always leverage the best-in-class models for any task, without being locked into a single vendor.",
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
      "We believe powerful software doesn't have to be complicated. Our modern user interface is designed for usability and can be customized with multiple themes and layouts to fit your brand and workflow.",
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
      "Our platform's multi-layered architecture ensures security, reliability, and scalability. From the presentation layer to data persistence, every component is designed for enterprise-grade performance and maintainability.",
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
      "With a rich library of pre-built components, low-code tools, and a flexible architecture, our platform dramatically reduces development time. Launch new features and automated workflows faster than ever before.",
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
      "Protect your customer and company data with end-to-end encryption, granular access controls, and comprehensive audit logs. Our platform is built to meet rigorous compliance standards like GDPR, HIPAA, and SOC 2.",
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
      "Flexibility is key. Choose between high-performance cloud-based STT/TTS from providers like Google or leverage cost-effective, real-time browser-native APIs. Mix and match to find the perfect balance of cost and quality.",
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
      "Deploy on your own cloud infrastructure for maximum control or use our managed SaaS offering for a turnkey solution. Our platform is designed to provide the same powerful capabilities, no matter how you choose to host it.",
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

    }, 10000);

    return () => clearInterval(interval);

  }, [isPaused]);

  /*
    HOLD AFTER CLICK
  */
  useEffect(() => {

    if (!isPaused) return;

    const timeout = setTimeout(() => {

      setIsPaused(false);

    }, 15000);

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
      overflow-hidden
      bg-[#0F0710]
      px-4 py-6 sm:py-15 lg:py-20 sm:px-6 lg:px-16
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
        sm:px-6
        lg:px-8
        xl:px-10
        2xl:px-20
        "
      >

        <AnimatePresence mode="popLayout" initial={false}>

          <motion.div
            key={currentSlide}
            initial="initial"
            animate="animate"
            exit="exit"

            className="
            relative
            grid
            w-full
            max-w-[1500px]
            items-center
            gap-14
            xl:grid-cols-2
            "
          >

            {/* LEFT */}
            <motion.div
              variants={{
                initial: { opacity: 0, x: -30, scale: 0.99 },
                animate: { 
                  opacity: 1, 
                  x: 0, 
                  scale: 1,
                  transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] }
                },
                exit: { 
                  opacity: 0, 
                  x: -20,
                  transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] }
                }
              }} 
              className="max-w-[720px]">

              {/* ICON */}
              <div
                className="
                mb-6
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-[#7A294A]/20
                bg-gradient-to-r
                from-[#FFF1F4]
                via-[#D46A8A]
                to-[#7C4A87]
                "
              >

                <Icon className="h-4 w-4 text-white" />

              </div>

              {/* TITLE */}
              <h1
                className="
                text-[28px]
                font-black
                leading-[0.95]
                tracking-[-2px]
                sm:text-[36px]
                lg:text-[46px]
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
                mt-4
                max-w-[620px]
                text-[13px]
                leading-5
                text-[#B7A9B1]
                sm:text-[15px]
                "
              >
                {activeSlide.description}
              </p>

              {/* TAGS */}
              <div className="mt-4 flex flex-wrap gap-2">

                {activeSlide.tags.map(
                  (tag, index) => (

                    <div
                      key={index}
                      className="
                      rounded-full
                      border
                      border-transparent
                      bg-gradient-to-r
                      from-[#2A7B9B]
                      to-[#EDDD53]
                      px-3
                      py-2
                      text-[10px]
                      text-[#D8C3CB]
                      "
                      style={{
                        backgroundImage: 'linear-gradient(#18101C, #18101C), linear-gradient(to right, #2A7B9B, #EDDD53)',
                        backgroundOrigin: 'border-box',
                        backgroundClip: 'padding-box, border-box',
                      }}
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
                className="
                relative
                mt-6
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
                shadow-lg
                "
              >

                <div
                  className="
                  absolute
                  inset-0
                  translate-x-[-100%]
                  bg-gradient-to-r
                  from-transparent
                  via-white/20
                  to-transparent
                  "
                />

                Get Started

                <ArrowRight className="h-4 w-4" />

              </motion.button>

            </motion.div>

            {/* RIGHT */}
            <motion.div
                variants={{
                  initial: { opacity: 0, x: 40, scale: 0.95, rotateY: 8 },
                  animate: { 
                    opacity: 1, 
                    x: 0, 
                    scale: 1, 
                    rotateY: 0,
                    transition: { duration: 0.95, ease: [0.16, 1, 0.3, 1], delay: 0.05 }
                  },
                  exit: { 
                    opacity: 0, 
                    x: 20, 
                    scale: 0.98,
                    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
                  }
                }}
                style={{ perspective: 1200 }} // Gives the subtle rotation a high-end 3D feel
                className="min-h-[400px]"
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

          </motion.div>

          {/* NAVIGATION */}
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
                max-w-[1400px]
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
                  py-1.5
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

                        className={`
                        relative
                        shrink-0
                        overflow-hidden
                        rounded-full
                        border
                        px-2
                        py-2
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
                            border-white/15
                            bg-[#1A1118]/70
                            text-[#A58D97]
                            hover:text-white
                            `
                        }
                        `}
                      >

                        <span
                          className="
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

      </div>

    </section>
  );
}