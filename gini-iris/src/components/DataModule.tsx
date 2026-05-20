"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    Radio,
    Mic,
    AudioWaveform,
    ShieldCheck,
    Workflow,
    Boxes,
    Activity,
    FileText,
    Server,
    MonitorSmartphone,
    BarChart3,
    Headphones,
    Phone,
    Ticket,
    Globe,
    MessageSquare,
    CheckCircle2,
    GraduationCap,
    UserCircle2,
    Building2,
    Briefcase,
    Mail,
    Lock,
} from "lucide-react";

const slides = [

    {
        icon: SquareStack,
        title: "A Complete Suite of CX Tools, Powered by AI.",
        description:
            "From omni-channel communication and workforce management to deep analytics and AI-powered training, our platform provides every tool you need in a single, unified command center.",
        tags: ["-30% Total Cost of Ownership", "+20% Operational Efficiency", "Single Source of Truth"],
    },

    {
        icon: Mic2,
        title: "Deliver Seamless, Context-Aware Service Across Every Channel.",
        description:
            "Engage with customers seamlessly across voice, chat, email, and social media. Our omni-channel platform provides a single, unified interface for agents, ensuring consistent and context-aware service without switching screens.",
        tags: ["+15pt CSAT", "-20% Repeat Contacts", "360° Customer View"],
    },

    {
        icon: Bot,
        title: "Deploy a Specialized AI Workforce.",
        description:
            "Design, build, and deploy autonomous AI agents tailored for specific tasks. Automate workflows, boost efficiency, and scale your operations like never before.",
        tags: ["Autonomous Workflows", "Reduced Manual Effort", "24/7 Operations"],
    },

    {
        icon: Shield,
        title: "Transform Quality Assurance from a Chore to a Strategy.",
        description:
            "Automatically score and analyze 100% of your customer interactions for quality and compliance. Move beyond random sampling and get objective, data-driven insights to provide targeted coaching that truly improves agent performance.",
        tags: ["100% Interaction Coverage", "-75% Manual QA Effort", "+10% Agent Performance"],
    },

    {
        icon: Smile,
        title: "Go Beyond Positive or Negative to Truly Understand.",
        description:
            "Our deep sentiment analysis engine deciphers not just polarity, but also the intensity of emotions like frustration, confusion, and gratitude. Understand customer effort and predict loyalty with unparalleled accuracy.",
        tags: ["-15% Churn Risk", "Identify Key Drivers", "Predict NPS"],
    },

    {
        icon: Copy,
        title: "Capture Every Word in Real-Time.",
        description:
            "Our state-of-the-art transcription engine converts spoken conversations into accurate, speaker-separated text instantly. This provides the foundation for all downstream AI analysis and agent assistance features.",
        tags: [">95% Accuracy", "Real-Time Data Foundation", "Speaker Diarization"],
    },

    {
        icon: Brain,
        title: "Build Expert Agents, Not Just Script-Readers.",
        description:
            "Create, assign, and track hyper-targeted training modules and evaluations directly within the platform. Address knowledge gaps identified by AI and watch your team's performance and confidence soar.",
        tags: ["-25% Ramp-up Time", "Targeted Skill Growth", "Close Knowledge Gaps"],
    },

    {
        icon: Sparkles,
        title: "Empower Agents with an AI Co-Pilot That Works in Real-Time.",
        description:
            "Provide your team with instant, context-aware assistance. From smart replies and procedural guidance to knowledge suggestions and real-time alerts for churn risk or upsell opportunities, our co-pilot is always on.",
        tags: ["-25% Average Handle Time", "+15% First Call Resolution", "Improved Compliance"],
    },

    {
        icon: LayoutDashboard,
        title: "See the Full Picture of Your Customer's Experience.",
        description:
            "Analyze and visualize end-to-end customer journeys across all touchpoints. Identify friction points, predict potential drop-offs, and get AI-powered recommendations to optimize every step of the interaction flow.",
        tags: ["-20% Customer Effort", "+10pt NPS Score", "Proactive Issue Resolution"],
    },

    {
        icon: Users,
        title: "Get the Complete Story on Every Customer.",
        description:
            "Our Customer 360° View consolidates every interaction, transaction, and data point into a single, comprehensive profile. Empower your agents with the context they need to provide truly personalized service.",
        tags: ["-35% Info Search Time", "Personalized Interaction", "Higher Customer Royalty"],
    },

    {
        icon: Calendar,
        title: "Optimize Your Workforce with Intelligent Forecasting.",
        description:
            "Leverage our Workforce Management (WFM) tools to predict future contact volumes, create optimal agent schedules, and monitor real-time adherence, ensuring you always have the right people in the right place at the right time.",
        tags: ["95% Forecast Accuracy", "+15% Agent Productivity", "-10% Overstaffing Costs"],
    },

    {
        icon: LineChart,
        title: "Turn Data Into Decisions with Powerful Analytics.",
        description:
            "Go beyond basic reporting. Our analytics suite provides deep, actionable insights into agent performance, customer satisfaction, and operational efficiency. Identify trends, spot opportunities, and drive continuous improvement.",
        tags: ["Root Cause Analysis", "Predictive Trend Reports", "Custome Dashboard"],
    },

    {
        icon: Database,
        title: "Access Every Piece of Data with a Granular, Searchable Logs.",
        description:
            "Every event, every interaction, and every analysis is captured and stored in a comprehensive data log. Easily search, filter, and export raw data for custom reporting, compliance audits, or further analysis.",
        tags: ["Full Data Transparency", "Easy Compliance Audits", "Custom Reporting"],
    },

    {
        icon: Plug,
        title: "Connect Your Entire Ecosystem, Effortlessly.",
        description:
            "Our platform is built for interoperability. With a vast library of pre-built connectors and a robust API, you can seamlessly integrate with your existing CRM, telephony, and knowledge base systems to create a single source of truth.",
        tags: ["Unified Data Model", "No More Silos", "Extensible API"],
    },

    {
        icon: Cpu,
        title: "Harness the Power of the Best AI Models.",
        description:
            "Stay at the forefront of innovation. Our platform supports multiple AI providers, including Google, OpenAI, and Anthropic. This ensures you can always leverage the best-in-class models for any task, without being locked into a single vendor.",
        tags: ["Future Proof AI", "Vendor-Agnostic", "Best-in-Class Models"],
    },

    {
        icon: BookDashed,
        title: "A Beautiful, Intuitive Interface Users Will Love.",
        description:
            "We believe powerful software doesn't have to be complicated. Our modern user interface is designed for usability and can be customized with multiple themes and layouts to fit your brand and workflow.",
        tags: ["+25% User Adoption", "-15% Training Time", "Customizable Themes"],
    },

    {
        icon: Layers3,
        title: "Built on a Robust, Scalable Architecture.",
        description:
            "Our platform's multi-layered architecture ensures security, reliability, and scalability. From the presentation layer to data persistence, every component is designed for enterprise-grade performance and maintainability.",
        tags: ["99.99% Uptime", "Scales on Demand", "Secure by Design"],
    },

    {
        icon: Rocket,
        title: "Go from Idea to Implementation at Record Speed.",
        description:
            "With a rich library of pre-built components, low-code tools, and a flexible architecture, our platform dramatically reduces development time. Launch new features and automated workflows faster than ever before.",
        tags: ["-80% Development Time", "Rapid Prototyping", "CI/CD Integration"],
    },

    {
        icon: LockKeyhole,
        title: "Enterprise-Grade Security and Encryption.",
        description:
            "Protect your customer and company data with end-to-end encryption, granular access controls, and comprehensive audit logs. Our platform is built to meet rigorous compliance standards like GDPR, HIPAA, and SOC 2.",
        tags: ["Full-Audit Trail", "Role-Based Access", "End-to-End Encryption"],
    },

    {
        icon: WavesIcon,
        title: "Your Choice of Voice Technology.",
        description:
            "Flexibility is key. Choose between high-performance cloud-based STT/TTS from providers like Google or leverage cost-effective, real-time browser-native APIs. Mix and match to find the perfect balance of cost and quality.",
        tags: ["Flexible Voice Tech", "Cost Optimization", "High Quality Audio"],
    },

    {
        icon: Cloud,
        title: "Flexible Hosting, SaaS Simplicity.",
        description:
            "Deploy on your own cloud infrastructure for maximum control or use our managed SaaS offering for a turnkey solution. Our platform is designed to provide the same powerful capabilities, no matter how you choose to host it.",
        tags: ["SaaS or Self-Hosted", "Data Sovereignty", "Cloud-Agnostic"],
    },
];

const cardIcons: Record<string, any> = {
    Interactions: MessageSquare,
    Quality: ShieldCheck,
    Sentiments: Smile,
    Supervisor: MonitorSmartphone,
    Backoffice: Briefcase,
    Knowledge: BookDashed,
    Training: GraduationCap,
    WFM: Calendar,
    Surveys: FileText,
    Analytics: BarChart3,
    "AI Tools": Sparkles,
    Integrations: Plug,
    Data: Database,
    Access: Lock,
    Tenants: Building2,
    Developer: Cpu,

    Voice: Phone,
    Voicemail: Mic,
    Chat: MessageSquare,
    Email: Mail,
    Social: Globe,
    Tickets: Ticket,
    SMS: MessageSquare,
    Bot: Bot,
    Manual: FileText,

    "Service Agent": Headphones,
    "Healthcare Agent": Shield,
    "Sales Agent": Briefcase,
    "Insurance Agent": ShieldCheck,
    "Analyst Agent": BarChart3,
    "Banking Agent": Building2,
    "Onboarding Agent": Workflow,
    "Telecom Agent": Radio,

    "Overall Score": Activity,
    Compliance: ShieldCheck,
    "Coaching Opportunities": GraduationCap,
    Empathy: Smile,
    Tone: AudioWaveform,
    Performance: BarChart3,

    Positive: CheckCircle2,
    "Sentiment Score": Activity,
    Happiness: Smile,
    Politeness: UserCircle2,
    Patience: Activity,
    Urgency: Activity,
    Frustration: Activity,

    "Speaker Recognition": Mic,
    "Live Transcript": FileText,
    "Intent Detection": Brain,
    "Entity Recognition": Database,
    "Outcome Prediction": Sparkles,

    "Learning Rank": GraduationCap,
    "Skill Score": BarChart3,
    "Advanced Return Policies": FileText,
    "Quiz Evaluation": CheckCircle2,
    "Completion Tracking": Activity,

    "Suggested Reply": MessageSquare,
    "Customer Risk": Shield,
    "Upsell Opportunity": Rocket,
    "Action Alert": Activity,

    "Initial Contact": Users,
    "Bot Interaction": Bot,
    "Friction Point": Shield,
    "Agent Handoff": Headphones,
    "AI Recommendation": Sparkles,

    "Customer Profile": Users,
    "Recent Interactions": MessageSquare,
    "AI Insights": Brain,
    "IVR Handoff": Phone,

    "Service Level": Activity,
    "Handle Time": Calendar,
    "KPI Trends": LineChart,
    "Forecast Accuracy": BarChart3,

    CSAT: Smile,
    "Interactions by Channel": Globe,
    "Voice of Customer": AudioWaveform,
    "AI Impact": Sparkles,

    "INFO Logs": Database,
    "WARN Logs": Shield,
    "ERROR Logs": ShieldCheck,
    "Trace ID": FileText,
    "Compliance Export": Lock,

    "Live Chat": MessageSquare,
    "Social Media": Globe,
    Ticketing: Ticket,
    CRM: Users,
    Azure: Cloud,
    Telephony: Phone,
    Zendesk: Headphones,
    "MS Dynamics": Boxes,

    "Google Gemini": Sparkles,
    "OpenAI GPT-4": Brain,
    "Anthropic Claude": Bot,
    NVIDIA: Cpu,
    "Mistral AI": Activity,
    "Meta Llama": Bot,
    Cohere: Radio,

    Recharts: BarChart3,
    "Framer Motion": Activity,
    "Interactive UI": MonitorSmartphone,
    "Custom Themes": Sparkles,
    "Modern Stack": Layers3,

    "Presentation Layer": MonitorSmartphone,
    "Application Layer": Workflow,
    "Service Layer": Server,
    "Data Layer": Database,
    "Integration Layer": Plug,

    "3X Faster": Rocket,
    "80% Less Dev Time": Activity,
    "50+ Modules": Boxes,
    "Low-Code Tooling": Workflow,
    "Connector Based": Plug,
    "Pre-Built Components": Layers3,

    "End-to-End Encryption": Lock,
    "PII Redaction": Shield,
    "Audit Trails": FileText,
    "Data Archival": Database,
    GDPR: ShieldCheck,
    HIPAA: ShieldCheck,
    "SOC 2": ShieldCheck,
    "PCI-DSS": ShieldCheck,

    "Browser TTS": AudioWaveform,
    "Google STT": Mic,
    "Azure Speech": Mic2,
    "Speaker Diarization": Users,
    "Voice Cloning": Radio,
};

const rightSideContent = [

    // 1
    {
        heading: "All Platform Modules",
        subheading: "A complete, end-to-end solution for CX.",
        cards: [
            "Interactions",
            "Quality",
            "Sentiments",
            "Supervisor",
            "Backoffice",
            "Knowledge",
            "Training",
            "WFM",
            "Surveys",
            "Analytics",
            "AI Tools",
            "Integrations",
            "Data",
            "Access",
            "Tenants",
            "Developer",
        ],
    },

    // 2
    {
        heading: "Omni-Channel Inbox",
        subheading: "Unified communication across all channels.",
        cards: [
            "Voice",
            "Voicemail",
            "Chat",
            "Email",
            "Social",
            "Tickets",
            "SMS",
            "Bot",
            "Manual",
        ],
    },

    // 3
    {
        heading: "Specialized AI Workforce",
        subheading: "Autonomous AI agents for every industry.",
        cards: [
            "Service Agent",
            "Healthcare Agent",
            "Sales Agent",
            "Insurance Agent",
            "Analyst Agent",
            "Banking Agent",
            "Onboarding Agent",
            "Telecom Agent",
        ],
    },

    // 4
    {
        heading: "Automated QA Scorecard",
        subheading: "AI-powered quality assurance insights.",
        cards: [
            "Overall Score",
            "Compliance",
            "Coaching Opportunities",
            "Empathy",
            "Tone",
            "Performance",
        ],
    },

    // 5
    {
        heading: "Real-time Sentiment Analysis",
        subheading: "Understand emotional depth instantly.",
        cards: [
            "Positive",
            "Sentiment Score",
            "Happiness",
            "Politeness",
            "Patience",
            "Urgency",
            "Frustration",
        ],
    },

    // 6
    {
        heading: "Live Transcription & Analysis",
        subheading: "Real-time speech-to-text insights.",
        cards: [
            "Speaker Recognition",
            "Live Transcript",
            "Intent Detection",
            "Entity Recognition",
            "Outcome Prediction",
        ],
    },

    // 7
    {
        heading: "AI Generated Learning Path",
        subheading: "Personalized training recommendations.",
        cards: [
            "Learning Rank",
            "Skill Score",
            "Advanced Return Policies",
            "Quiz Evaluation",
            "Completion Tracking",
        ],
    },

    // 8
    {
        heading: "AI Co-Pilot",
        subheading: "Real-time assistance during customer calls.",
        cards: [
            "Suggested Reply",
            "Customer Risk",
            "Upsell Opportunity",
            "Action Alert",
        ],
    },

    // 9
    {
        heading: "Journey Analysis",
        subheading: "Track customer interactions end-to-end.",
        cards: [
            "Initial Contact",
            "Bot Interaction",
            "Friction Point",
            "Agent Handoff",
            "AI Recommendation",
        ],
    },

    // 10
    {
        heading: "Customer 360° View",
        subheading: "Complete customer intelligence.",
        cards: [
            "Customer Profile",
            "Recent Interactions",
            "Intent Detection",
            "AI Insights",
            "IVR Handoff",
        ],
    },

    // 11
    {
        heading: "WFM Dashboard",
        subheading: "Workforce forecasting and staffing.",
        cards: [
            "Service Level",
            "Handle Time",
            "KPI Trends",
            "Forecast Accuracy",
            "AI Insights",
        ],
    },

    // 12
    {
        heading: "Advanced Analytics",
        subheading: "Deep operational insights.",
        cards: [
            "CSAT",
            "Quality",
            "Interactions by Channel",
            "Voice of Customer",
            "AI Impact",
        ],
    },

    // 13
    {
        heading: "Data & Logs",
        subheading: "Full searchable interaction history.",
        cards: [
            "INFO Logs",
            "WARN Logs",
            "ERROR Logs",
            "Trace ID",
            "Compliance Export",
        ],
    },

    // 14
    {
        heading: "Seamless Integrations",
        subheading: "Connect your ecosystem effortlessly.",
        cards: [
            "Live Chat",
            "Social Media",
            "Ticketing",
            "CRM",
            "Azure",
            "Telephony",
            "Zendesk",
            "MS Dynamics",
        ],
    },

    // 15
    {
        heading: "Multi-AI Provider Support",
        subheading: "Leverage best-in-class AI providers.",
        cards: [
            "Google Gemini",
            "OpenAI GPT-4",
            "Anthropic Claude",
            "NVIDIA",
            "Mistral AI",
            "Meta Llama",
            "Cohere",
        ],
    },

    // 16
    {
        heading: "Modern UI/UX",
        subheading: "Fast, intuitive enterprise interface.",
        cards: [
            "Recharts",
            "Framer Motion",
            "Interactive UI",
            "Custom Themes",
            "Modern Stack",
        ],
    },

    // 17
    {
        heading: "Multi-Layered Architecture",
        subheading: "Scalable enterprise architecture.",
        cards: [
            "Presentation Layer",
            "Application Layer",
            "Service Layer",
            "Data Layer",
            "Integration Layer",
        ],
    },

    // 18
    {
        heading: "Accelerate Go-to-Market",
        subheading: "Low-code rapid implementation.",
        cards: [
            "3X Faster",
            "80% Less Dev Time",
            "50+ Modules",
            "Low-Code Tooling",
            "Connector Based",
            "Pre-Built Components",
        ],
    },

    // 19
    {
        heading: "Data Security & Compliance",
        subheading: "Enterprise-grade protection.",
        cards: [
            "End-to-End Encryption",
            "PII Redaction",
            "Audit Trails",
            "Data Archival",
            "GDPR",
            "HIPAA",
            "SOC 2",
            "PCI-DSS",
        ],
    },

    // 20
    {
        heading: "Voice Technology Options",
        subheading: "Flexible transcription & speech engines.",
        cards: [
            "Browser TTS",
            "Google STT",
            "Azure Speech",
            "Speaker Diarization",
            "Voice Cloning",
        ],
    },

    // 21
    {
        heading: "Hosting & Deployment",
        subheading: "Maximum flexibility from SaaS to self-hosted.",
        cards: [
            "SaaS Cloud",
            "Self Hosted",
            "Managed Infrastructure",
            "Data Sovereignty",
            "Automatic Updates",
            "Private Cloud",
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
    "Agent Training",
    "Training & Evaluations",
    "AI Co-Pilot",
    "Journey Analytics",
    "Customer 360°",
    "Workforce Management",
    "Analytics",
    "Data Logs",
    "Integrations",
    "Multi-AI",
    "Modern UI",
    "Architecture",
    "Time to Market",
    "Data Security",
    "Transcription & TTS",
    "Hosting Options",
];

export default function ModernCXSlides() {

    const [currentSlide, setCurrentSlide] = useState(0);
    const [showNavigation, setShowNavigation] = useState(true);

    useEffect(() => {

        const interval = setInterval(() => {
            setCurrentSlide((prev) =>
                prev === slides.length - 1 ? 0 : prev + 1
            );
        }, 5000);

        return () => clearInterval(interval);

    }, []);

    useEffect(() => {

        const handleScroll = () => {

            const section = document.getElementById("cx-slides-section");

            if (!section) return;

            const rect = section.getBoundingClientRect();

            /*
                SHOW NAV ONLY WHEN:
                section is visible on screen
            */

            const isVisible =
                rect.top < window.innerHeight * 0.8 &&
                rect.bottom > window.innerHeight * 0.3;

            setShowNavigation(isVisible);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);

    useEffect(() => {

        const container = document.getElementById("slides-navigation");

        if (!container) return;

        const activeButton = container.children[currentSlide] as HTMLElement;

        if (!activeButton) return;

        const containerWidth = container.offsetWidth;

        const buttonLeft = activeButton.offsetLeft;

        const buttonWidth = activeButton.offsetWidth;

        container.scrollTo({
            left:
                buttonLeft -
                containerWidth / 2 +
                buttonWidth / 2,
            behavior: "smooth",
        });

    }, [currentSlide]);

    const activeSlide = slides[currentSlide];
    const activeRightContent = rightSideContent[currentSlide];
    const Icon = activeSlide.icon;

    return (

        <section id="cx-slides-section" className="relative bg-black min-h-screen overflow-hidden">

            {/* BG GRID */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:90px_90px]" />
            </div>

            {/* RED GLOW */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
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
            bg-[#EC1C24]/20
            blur-[80px]
            "
            />

            {/* PURPLE GLOW */}
            <motion.div
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.4, 0.2, 0.4],
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
            bg-violet-500/20
            blur-[70px]
            "
            />

            <div className="relative z-20 flex min-h-screen items-center justify-center px-12 pt-16 pb-16">

                <AnimatePresence mode="popLayout">

                    <motion.div
                        key={currentSlide}

                        initial={{
                            opacity: 0,
                            y: 40,
                            scale: 0.85,
                        }}

                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                        }}

                        exit={{
                            opacity: 0,
                            y: -40,
                            scale: 1.04,
                        }}

                        transition={{
                            duration: 1,
                            ease: [0.22, 1, 0.36, 1],
                        }}

                        style={{
                            transformStyle: "preserve-3d",
                            perspective: 3000,
                        }}

                        className="
                    grid
                    w-full
                    max-w-[1450px]
                    items-center
                    gap-16
                    lg:grid-cols-2
                    "
                    >

                        <div
                            className="
                        absolute
                        inset-0
                        scale-[0.96]
                        translate-y-8
                        rounded-[40px]
                        bg-white/[0.03]
                        blur-sm
                        -z-10
                        "
                        />

                        <div
                            className="
                        absolute
                        inset-0
                        scale-[0.92]
                        translate-y-14
                        rounded-[40px]
                        bg-white/[0.02]
                        blur-md
                        -z-20
                        "
                        />

                        {/* LEFT */}
                        <div>

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
                            border-white/10
                            bg-white/[0.05]
                            backdrop-blur-xl
                            "
                            >
                                <Icon className="h-7 w-7 text-white" />
                            </motion.div>

                            {/* TITLE */}
                            <motion.h1
                                initial={{
                                    opacity: 0,
                                    y: 40,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 0.7,
                                }}
                                className="
                            text-[22px]
                            font-black
                            leading-[0.95]
                            tracking-[-2px]
                            sm:text-[28px]
                            lg:text-[32px]
                            "
                            >
                                <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                                    {activeSlide.title}
                                </span>
                            </motion.h1>

                            {/* DESC */}
                            <p
                                className="
                            mt-8
                            max-w-[700px]
                            text-[12px]
                            leading-6
                            text-gray-400
                            lg:text-[15px]
                            "
                            >
                                {activeSlide.description}
                            </p>

                            {/* TAGS */}
                            <div className="mt-8 flex flex-wrap gap-3">

                                {activeSlide.tags.map((tag, index) => (
                                    <div
                                        key={index}
                                        className="
                                rounded-full
                                border
                                border-white/10
                                bg-white/[0.04]
                                px-4
                                py-2
                                text-[10px]
                                text-gray-300
                                "
                                    >
                                        {tag}
                                    </div>
                                ))}
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
                            mt-10
                            relative
                            overflow-hidden
                            flex
                            items-center
                            gap-3
                            rounded-2xl
                            bg-[#EC1C24]
                            px-7
                            py-4
                            text-sm
                            font-semibold
                            tracking-wide
                            text-white
                            shadow-[0_0_25px_rgba(236,28,36,0.25)]
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
                                animate-[shimmer_2.5s_infinite]
                                "
                                />
                                Get Started

                                <ArrowRight className="h-4 w-4" />
                            </motion.button>
                        </div>

                        {/* RIGHT SIDE */}
                        <motion.div
                            initial={{
                                opacity: 0,
                                x: 100,
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                            }}
                            className="
                        relative
                        overflow-hidden
                        rounded-[32px]
                        border
                        border-white/10
                        bg-white/[0.05]
                        p-5
                        sm:p-6
                        lg:p-7
                        backdrop-blur-2xl
                    "
                        >

                            {/* BG GRADIENT */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent" />

                            {/* CONTENT */}
                            <div className="relative z-10">

                                {/* TOP HEADER */}
                                <div className="mb-6 flex items-start gap-4">

                                    <div
                                        className="
                                flex
                                h-12
                                w-12
                                shrink-0
                                items-center
                                justify-center
                                rounded-2xl
                                bg-gradient-to-br
                                from-[#EC1C24]
                                to-violet-500
                                shadow-lg
                                "
                                    >
                                        <Icon className="h-6 w-6 text-white" />
                                    </div>

                                    <div>

                                        <h3
                                            className="
                                    text-[16px]
                                    font-bold
                                    leading-tight
                                    text-white
                                    sm:text-[20px]
                                "
                                        >
                                            {activeRightContent.heading}
                                        </h3>

                                        <p
                                            className="
                                    mt-2
                                    max-w-[520px]
                                    text-[10px]
                                    leading-4
                                    text-gray-400
                                "
                                        >
                                            {activeRightContent.subheading}
                                        </p>

                                    </div>
                                </div>

                                {/* DYNAMIC RIGHT SIDE CONTENT */}
                                <div className="space-y-4">

                                    {/* SPECIAL SLIDE 21 */}
                                    {currentSlide === 20 ? (

                                        <div className="grid gap-5 lg:grid-cols-2">

                                            {/* SAAS CLOUD */}
                                            <div className="rounded-3xl bg-white p-5 shadow-2xl">

                                                <div className="mb-5 flex items-center gap-3">
                                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#EC1C24] to-violet-500">
                                                        <Cloud className="h-6 w-6 text-white" />
                                                    </div>

                                                    <div>
                                                        <h4 className="text-lg font-bold text-black">
                                                            SaaS Cloud
                                                        </h4>

                                                        <p className="text-[12px] text-gray-500">
                                                            Fully managed infrastructure
                                                        </p>
                                                    </div>
                                                </div>

                                                <p className="text-[10px] leading-4 text-gray-600">
                                                    A fully managed turnkey solution with
                                                    automatic maintenance, scaling, security,
                                                    and updates.
                                                </p>

                                                <div className="my-5 h-px bg-gray-200" />

                                                <div className="space-y-3">

                                                    <h5 className="text-[13px] font-bold text-green-600">
                                                        Advantages
                                                    </h5>

                                                    {[
                                                        "Lower upfront cost",
                                                        "Rapid deployment",
                                                        "Automatic updates",
                                                        "Managed infrastructure",
                                                    ].map((item, index) => (

                                                        <div
                                                            key={index}
                                                            className="flex items-center gap-3"
                                                        >
                                                            <div className="h-2 w-2 rounded-full bg-green-500" />

                                                            <span className="text-[11px] text-gray-700">
                                                                {item}
                                                            </span>
                                                        </div>

                                                    ))}

                                                </div>

                                                <div className="mt-6 space-y-3">

                                                    <h5 className="text-[13px] font-bold text-orange-500">
                                                        Considerations
                                                    </h5>

                                                    {[
                                                        "Shared infrastructure",
                                                        "Less data residency control",
                                                    ].map((item, index) => (

                                                        <div
                                                            key={index}
                                                            className="flex items-center gap-3"
                                                        >
                                                            <div className="h-2 w-2 rounded-full bg-orange-400" />

                                                            <span className="text-[11px] text-gray-700">
                                                                {item}
                                                            </span>
                                                        </div>

                                                    ))}

                                                </div>

                                            </div>

                                            {/* SELF HOSTED */}
                                            <div className="rounded-3xl bg-white p-5 shadow-2xl">

                                                <div className="mb-5 flex items-center gap-3">

                                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#EC1C24] to-violet-500">
                                                        <Shield className="h-6 w-6 text-white" />
                                                    </div>

                                                    <div>
                                                        <h4 className="text-lg font-bold text-black">
                                                            Self Hosted
                                                        </h4>

                                                        <p className="text-[12px] text-gray-500">
                                                            Full infrastructure control
                                                        </p>
                                                    </div>
                                                </div>

                                                <p className="text-[10px] leading-4 text-gray-600">
                                                    Deploy on AWS, Azure, GCP, or private
                                                    infrastructure with complete governance
                                                    and customization.
                                                </p>

                                                <div className="my-5 h-px bg-gray-200" />

                                                <div className="space-y-3">

                                                    <h5 className="text-[13px] font-bold text-green-600">
                                                        Advantages
                                                    </h5>

                                                    {[
                                                        "Full data sovereignty",
                                                        "Custom security policies",
                                                        "Deeper integrations",
                                                        "Private cloud support",
                                                    ].map((item, index) => (

                                                        <div
                                                            key={index}
                                                            className="flex items-center gap-3"
                                                        >
                                                            <div className="h-2 w-2 rounded-full bg-green-500" />

                                                            <span className="text-[11px] text-gray-700">
                                                                {item}
                                                            </span>
                                                        </div>

                                                    ))}

                                                </div>

                                                <div className="mt-6 space-y-3">

                                                    <h5 className="text-[13px] font-bold text-orange-500">
                                                        Considerations
                                                    </h5>

                                                    {[
                                                        "Higher infrastructure costs",
                                                        "Requires IT resources",
                                                    ].map((item, index) => (

                                                        <div
                                                            key={index}
                                                            className="flex items-center gap-3"
                                                        >
                                                            <div className="h-2 w-2 rounded-full bg-orange-400" />

                                                            <span className="text-[11px] text-gray-700">
                                                                {item}
                                                            </span>
                                                        </div>

                                                    ))}

                                                </div>

                                            </div>

                                        </div>

                                    ) : (

                                        <div
                                            className="
                                    grid
                                    grid-cols-2
                                    gap-3
                                    sm:grid-cols-2
                                    lg:grid-cols-4
                                "
                                        >

                                            {activeRightContent.cards.map((card, index) => {

                                                const CardIcon = cardIcons[card] || Sparkles;

                                                return (

                                                    <motion.div
                                                        key={index}
                                                        initial={{
                                                            opacity: 0,
                                                            y: 20,
                                                        }}
                                                        animate={{
                                                            opacity: 1,
                                                            y: 0,
                                                        }}
                                                        transition={{
                                                            delay: index * 0.04,
                                                        }}
                                                        whileHover={{
                                                            y: -5,
                                                            scale: 1.02,
                                                        }}
                                                        className="
                                            group
                                            relative
                                            overflow-hidden
                                            rounded-2xl
                                            border
                                            border-white/10
                                            bg-black/40
                                            p-2
                                            backdrop-blur-xl
                                            transition-all
                                            duration-300
                                            group-hover:z-20
                                            group-hover:scale-[1.03]
                                            hover:border-white/20
                                            hover:bg-white/[0.08]
                                            hover:shadow-[0_0_25px_rgba(124,58,237,0.25)]
                                        "
                                                    >

                                                        <div
                                                            className="
                                            absolute
                                            inset-0
                                            opacity-0
                                            transition-opacity
                                            duration-500
                                            group-hover:opacity-100
                                            bg-gradient-to-br
                                            from-[#EC1C24]/10
                                            to-violet-500/10
                                            "
                                                        />

                                                        <div className="relative z-10">

                                                            <div className="flex flex-col items-center justify-center gap-1">

                                                                <div
                                                                    className="
                                                    flex
                                                    h-6
                                                    w-6
                                                    shrink-0
                                                    items-center
                                                    justify-center
                                                    rounded-xl
                                                    bg-gradient-to-br
                                                    from-[#EC1C24]
                                                    to-violet-500
                                                    shadow-lg
                                                "
                                                                >
                                                                    <CardIcon className="h-3 w-3 text-white" />
                                                                </div>

                                                                <div className="flex flex-col items-center text-center">
                                                                    <h4
                                                                        className="
                                                        text-[8px]
                                                        font-semibold
                                                        leading-4
                                                        text-white
                                                        sm:text-[10px]
                                                    "
                                                                    >
                                                                        {card}
                                                                    </h4>

                                                                    <p className="mt-1 text-[8px] leading-2 text-gray-400">
                                                                        AI-powered enterprise workflow solution.
                                                                    </p>

                                                                </div>
                                                            </div>
                                                        </div>

                                                    </motion.div>
                                                );
                                            }
                                            )}
                                        </div>
                                    )}
                                </div>

                            </div>

                            {/* FLOATING EFFECT */}
                            <motion.div
                                animate={{
                                    y: [0, -10, 0],
                                    rotate: [0, 10, 0],
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                }}
                                className="
                        absolute
                        -right-20
                        -top-20
                        h-[220px]
                        w-[220px]
                        rounded-full
                        bg-gradient-to-br
                        from-[#EC1C24]/20
                        to-violet-500/20
                        blur-3xl
                        "
                            />

                        </motion.div>
                    </motion.div>

                </AnimatePresence>
            </div>


            <AnimatePresence>
                {showNavigation && (
                    <motion.div
                        className="
                        fixed
                        bottom-4
                        left-1/2
                        -translate-x-1/2
                        z-[999]
                        w-full
                        px-4
                        pointer-events-none
                    "
                    >

                        {/* OUTER WRAPPER */}
                        <div
                            className="
                            mx-auto
                            flex
                            w-fit
                            max-w-full
                            items-center
                            justify-center
                        "
                        >

                            {/* GLASS DOCK */}
                            <div
                                id="slides-navigation"
                                className="
                                pointer-events-auto
                                flex
                                items-center
                                gap-2
                                overflow-x-auto
                                scroll-smooth
                                rounded-full
                                border
                                border-white/10
                                bg-black/40
                                px-2
                                py-2
                                backdrop-blur-2xl
                                shadow-[0_10px_60px_rgba(0,0,0,0.45)]
                                scrollbar-hide
                            "
                            >

                                {navigationItems.map((slide, index) => (

                                    <motion.button
                                        key={index}
                                        onClick={() => setCurrentSlide(index)}

                                        whileHover={{
                                            y: -3,
                                            scale: 1.05,
                                        }}

                                        whileTap={{
                                            scale: 0.95,
                                        }}

                                        animate={{
                                            scale: currentSlide === index ? 1.06 : 1,
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
                                        tracking-wide
                                        transition-all
                                        duration-500

                                        ${currentSlide === index
                                                ? `
                                                border-white/20
                                                bg-white
                                                text-black
                                                shadow-[0_0_30px_rgba(255,255,255,0.25)]
                                                `
                                                : `
                                                border-white/5
                                                bg-white/[0.03]
                                                text-gray-400
                                                hover:border-white/10
                                                hover:bg-white/[0.06]
                                                hover:text-white
                                                `
                                            }
                                    `}
                                    >

                                        {/* ACTIVE GLOW */}
                                        {currentSlide === index && (
                                            <motion.div
                                                layoutId="active-pill"
                                                className="
                                                absolute
                                                inset-0
                                                rounded-full
                                                bg-white
                                                "
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 300,
                                                    damping: 30,
                                                }}
                                            />
                                        )}

                                        {/* TEXT */}
                                        <span
                                            className={`
                                            relative
                                            z-10
                                            flex
                                            items-center
                                            gap-2
                                        `}
                                        >

                                            {/* DOT */}
                                            <span
                                                className={`
                                                h-1.5
                                                w-1.5
                                                rounded-full

                                                ${currentSlide === index
                                                        ? "bg-black"
                                                        : "bg-gray-500"
                                                    }
                                            `}
                                            />

                                            {slide
                                                .replace(".", "")
                                                .split(" ")
                                                .slice(0, 2)
                                                .join(" ")}

                                        </span>

                                    </motion.button>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                )}
            </AnimatePresence>

        </section>
    );
}