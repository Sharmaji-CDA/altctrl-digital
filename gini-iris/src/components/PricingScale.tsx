import {
  Zap,
  User,
  Users,
  ArrowRight,
  Sparkles,
  PhoneCall,
  PhoneOutgoing,
  MessageSquare,
  Mail,
  Ticket,
  Globe,
  UserRound,
  AudioWaveform,
} from "lucide-react";

import { motion } from "framer-motion";

const plans = [
  {
    icon: Zap,
    title: "Free Plan",
    desc: "Break free from the manual grind. The Catalyst is designed for those ready to stop 'working for their tools' and start having their tools work for them. Get a front-row seat to AI-driven operations with essential features for task tracking and knowledge management. It’s more than a trial; it’s your first step toward an automated workflow.",
    oldPrice: "$145",
    price: "$0",
    credits: "+$75.55 Free Credits",
    color: "text-slate-300",
    glow: "from-slate-500/20 to-slate-500/5",
    border: "border-white/10",
    button:
      "bg-white/[0.05] hover:bg-white/[0.08]",
    popular: false,
  },

  {
    icon: User,
    title: "Individual",
    desc: "Your personal operating system, supercharged. The Pro-Pilot tier is built for the high-achiever who handles it all—from complex sales pipelines to daily mission-critical ops. With an AI layer that learns your rhythm, you don’t just manage tasks; you predict them. Automate your follow-ups, organize your knowledge base, and reclaim hours of your week to focus on what actually moves the needle.",
    oldPrice: "$187",
    price: "$28",
    credits: "+$137.00 Free Credits",
    color: "text-blue-400",
    glow: "from-blue-500/20 to-blue-500/5",
    border: "border-blue-500/30",
    button:
      "bg-gradient-to-r from-blue-500 to-[#4f7cff]",
    popular: true,
  },

  {
    icon: Users,
    title: "Team",
    desc: "Turn your team into a single, cohesive engine. The Command Center isn't just a platform; it’s the connective tissue of your organization. This tier infuses AI into every layer of your collaborative effort—from real-time WFM insights and training modules to sophisticated sales forecasting. Eliminate silos, synchronize your pipelines, and ensure your team’s collective knowledge is always at their fingertips. Scale your operations without the friction.",
    oldPrice: "$402",
    price: "$40",
    credits: "+$632.00 Free Credits",
    color: "text-violet-400",
    glow: "from-violet-500/20 to-violet-500/5",
    border: "border-violet-500/20",
    button:
      "bg-white/[0.05] hover:bg-white/[0.08]",
    popular: false,
  },
];

export default function PricingScale() {
  return (
    <section className="relative overflow-hidden bg-black px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-24">

      {/* BG */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.08),transparent_40%)]" />

      {/* BLUE GLOW */}
      <motion.div
        animate={{
          opacity: [0.08, 0.16, 0.08],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute left-[-120px] top-[100px] h-[260px] w-[260px] rounded-full bg-blue-500/15 blur-[120px]"
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
        className="absolute right-[-120px] bottom-[100px] h-[260px] w-[260px] rounded-full bg-[#EC1C24]/10 blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-[1400px]">

        {/* TOP */}
        <div className="mx-auto max-w-[900px] text-center">

          {/* BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 backdrop-blur-xl"
          >
            <div className="h-2 w-2 rounded-full bg-blue-400" />

            <span className="text-[10px] uppercase tracking-[3px] text-blue-300">
              Frictionless Onboarding
            </span>
          </motion.div>

          {/* HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="text-[38px] font-black leading-[0.95] tracking-[-2px] sm:text-[54px] lg:text-[76px]"
          >
            Select what you need.
            <br />

            <span className="bg-gradient-to-r from-blue-400 via-[#4f7cff] to-cyan-400 bg-clip-text text-transparent">
              Scale as you grow.
            </span>
          </motion.h2>

          {/* NOTICE */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mx-auto mt-10 flex max-w-[820px] items-start gap-4 rounded-[24px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-2xl"
          >

            <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl border border-yellow-500/20 bg-yellow-500/10 text-yellow-400">
              <Zap size={18} />
            </div>

            <p className="text-left text-[11px] font-semibold uppercase leading-6 tracking-[2px] text-slate-400">
              Zero minimum commitments.
              Our automated configuration engine allows you to swap models
              and scale units with zero friction.
            </p>
          </motion.div>
        </div>

        {/* PRICING */}
        <div className="mt-20 items-stretch gap-8 lg:grid lg:grid-cols-3">

          {plans.map((plan, index) => {
            const Icon = plan.icon;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                }}
                className={`group relative flex h-full rounded-[36px] border bg-white/[0.03] backdrop-blur-2xl transition-all duration-500 hover:bg-white/[0.05] ${plan.border} ${
                  plan.popular
                    ? "scale-[1.02] shadow-[0_0_50px_rgba(59,130,246,0.18)]"
                    : ""
                }`}
              >

                {/* GLOW */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${plan.glow} opacity-0 transition-all duration-500 group-hover:opacity-100`}
                />

                {/* POPULAR */}
                {plan.popular && (
                  <div className="absolute right-5 top-5 rounded-full border border-blue-500/20 bg-blue-500 px-4 py-2 text-[8px] font-bold uppercase tracking-[2px] text-white shadow-[0_0_25px_rgba(59,130,246,0.5)]">
                    Most Popular
                  </div>
                )}

                {/* LIGHT */}
                <motion.div
                  animate={{
                    x: ["-120%", "220%"],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                    delay: index * 0.4,
                  }}
                  className="absolute top-0 h-full w-[90px] rotate-[20deg] bg-white/[0.04] blur-2xl"
                />

                <div className="relative z-10 flex h-full flex-col p-8">

                  {/* ICON */}
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
                      delay: index * 0.2,
                    }}
                    className={`flex h-10 w-10 items-center justify-center rounded-[22px] border border-white/10 bg-gradient-to-br ${plan.glow} ${plan.color} transition-all duration-500 group-hover:shadow-[0_0_35px_currentColor]`}
                  >
                    <Icon size={18} />
                  </motion.div>

                  {/* TITLE */}
                  <h3 className="mt-4 text-[20px] font-bold text-white">
                    {plan.title}
                  </h3>

                  {/* DESC */}
                  <p className="mt-2 line-clamp-3 min-h-[72px] text-[10px] leading-6 text-slate-400">
                    {plan.desc}
                  </p>

                  {/* PRICE */}
                  <div className="mt-4 flex items-end gap-3">

                    <span className="text-[14px] text-slate-500 line-through">
                      {plan.oldPrice}
                    </span>

                    <h2 className="text-[28px] font-black leading-none">
                      {plan.price}
                    </h2>

                    <span className="text-[10px] text-slate-400">
                      /user/mo
                    </span>
                  </div>

                  {/* CREDITS */}
                  <div className="mt-2 inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-[7px] font-bold uppercase tracking-[2px] text-emerald-300">
                    {plan.credits}
                  </div>

                  {/* EXTRA OPTIONS */}
                  {plan.title !== "Free Plan" && (
                    <div className="mt-4">

                      {/* TEAM SIZE */}
                      {plan.title === "Team" && (
                        <div className="mb-4 flex items-center justify-between">

                          <div>
                            <p className="text-[9px] font-bold uppercase tracking-[2px] text-slate-500">
                              Team Size
                            </p>
                          </div>

                          <input
                            type="number"
                            defaultValue={5}
                            className="h-10 w-[64px] rounded-xl border border-white/10 bg-white/[0.03] text-center text-[12px] text-white outline-none transition-all duration-300 focus:border-blue-500/40"
                          />
                        </div>
                      )}

                      {/* CHECKBOX ONLY FOR TEAM */}
                      {plan.title === "Team" && (
                        <label className="mb-4 flex cursor-pointer items-center gap-3">

                          <input
                            type="checkbox"
                            className="h-4 w-4 rounded border border-white/10 bg-transparent accent-blue-500"
                          />

                          <span className="text-[9px] font-semibold uppercase tracking-[1px] text-slate-500">
                            Show Monthly Total
                          </span>
                        </label>
                      )}

                      {/* NOTICE */}
                      <div className="mb-4 flex items-center gap-2 text-[8px] font-semibold uppercase tracking-[1px] text-orange-400">

                        <Zap size={10} />

                        <span>
                          Usage Overages Billed Separately.
                        </span>
                      </div>
                    </div>
                  )}

                  {/* CONTENT WRAPPER */}
                  <div className="pricing-scroll mt-3 h-[250px] overflow-y-auto pr-1" data-lenis-prevent>

                    {/* ======================= */}
                    {/* USAGE LIMITS */}
                    {/* ======================= */}

                    <div className="p-2">

                      <div className="mb-3">
                        <p className="text-[9px] font-bold uppercase tracking-[2px] text-slate-500">
                          Usage Limits
                        </p>
                      </div>

                      {/* GRID */}
                      <div className="grid grid-cols-4 gap-2">

                        {[
                          {
                            icon: Sparkles,
                            value: "500",
                            price: "+$0.01",
                          },

                          {
                            icon: PhoneCall,
                            value: "100",
                            price: "+$0.02",
                          },

                          {
                            icon: PhoneOutgoing,
                            value: "10",
                            price: "+$0.03",
                          },

                          {
                            icon: MessageSquare,
                            value: "250",
                            price: "+$0.01",
                          },

                          {
                            icon: Mail,
                            value: "500",
                            price: "+$0.01",
                          },

                          {
                            icon: Ticket,
                            value: "100",
                            price: "+$0.05",
                          },

                          {
                            icon: UserRound,
                            value: "1",
                            price: "+$5",
                          },

                          {
                            icon: AudioWaveform,
                            value: "30",
                            price: "+$0.05",
                          },

                          {
                            icon: Ticket,
                            value: "30",
                            price: "+$0.01",
                          },

                          {
                            icon: Globe,
                            value: "150",
                            price: "+$0.05",
                          },
                        ].map((item, i) => {
                          const Icon = item.icon;

                          return (
                            <motion.div
                              key={i}
                              whileHover={{
                                y: -2,
                                scale: 1.02,
                              }}
                              className="group rounded-[18px] border border-white/10 bg-white/[0.03] p-2 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.05]"
                            >

                              <div className="flex justify-center">

                                <div className="flex items-center justify-center text-slate-400 transition-all duration-500 group-hover:text-white">
                                  <Icon size={10} />
                                </div>
                              </div>

                              <div className="mt-2 text-center">

                                <h4 className="text-[8px] font-black text-white">
                                  {item.value}
                                </h4>

                                <p className="mt-1 text-[6px] font-semibold tracking-[1px] text-slate-500">
                                  {item.price}
                                </p>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>

                    {/* ======================= */}
                    {/* INCLUDED CAPABILITIES */}
                    {/* ======================= */}

                    <div className="p-2">

                      <div className="mb-3">
                        <p className="text-[9px] font-bold uppercase tracking-[2px] text-slate-500">
                          Included Capabilities
                        </p>
                      </div>

                      <div className="space-y-2">

                        {[
                          {
                            title: "Interactions",
                            desc: "Voice, Chat, Email, AI Conversations",
                            count: "6",
                          },

                          {
                            title: "Backoffice",
                            desc: "Workflow Routing & Ticketing",
                            count: "2",
                          },

                          {
                            title: "Quality",
                            desc: "Scorecards & Interaction Audits",
                            count: "3",
                          },

                          {
                            title: "Analytics",
                            desc: "Reports & KPI Dashboards",
                            count: "8",
                          },

                          {
                            title: "Automation",
                            desc: "AI Routing & Rule Engines",
                            count: "7",
                          },

                          {
                            title: "Security",
                            desc: "PII Scrubbing & Audit Logs",
                            count: "5",
                          },
                        ].map((item, i) => (
                          <motion.div
                            key={i}
                            whileHover={{
                              y: -2,
                            }}
                            className="group relative overflow-hidden rounded-[16px] border border-white/10 bg-white/[0.03] p-3 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.05]"
                          >

                            {/* LIGHT */}
                            <div className="absolute inset-0 bg-gradient-to-r from-white/[0.02] via-white/[0.04] to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100" />

                            <div className="relative z-10 flex items-start justify-between gap-3">

                              <div>

                                <h4 className="text-[10px] font-bold uppercase tracking-[1px] text-white">
                                  {item.title}
                                </h4>

                                <p className="mt-1 text-[8px] leading-5 text-slate-500">
                                  {item.desc}
                                </p>
                              </div>

                              <div className="flex h-5 min-w-[22px] items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-2 text-[8px] font-bold text-slate-400">
                                {item.count}
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* BUTTON */}
                  <motion.button
                    whileHover={{
                      scale: 1.02,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    className={`mt-5 flex w-full items-center justify-center gap-3 rounded-[18px] px-5 py-4 text-[12px] font-semibold text-white transition-all duration-500 ${plan.button}`}
                  >
                    Get Started with {plan.title}

                    <ArrowRight size={15} />
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CALCULATOR */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{ once: true }}
          className="mx-auto mt-14 max-w-[520px]"
        >

          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur-2xl">

            <p className="text-[12px] text-slate-500">
              Need a more detailed breakdown or custom SKU configuration?
            </p>

            <motion.button
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="mt-5 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-8 py-4 text-[14px] font-semibold text-white transition-all duration-500 hover:border-blue-500/30 hover:bg-blue-500/10"
            >
              Deep Dive into Pricing Calculator

              <ArrowRight size={18} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}