"use client";

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
  type LucideIcon,
  Monitor,
} from "lucide-react";

import { motion } from "framer-motion";
import { useRef } from "react";

interface Plan {
  icon: LucideIcon;
  title: string;
  desc: string;
  oldPrice: string;
  price: string;
  credits: string;
  color: string;
  glow: string;
  border: string;
  button: string;
  popular: boolean;
}

const plans: Plan[] = [
  {
    icon: Zap,
    title: "Free Plan",
    desc: "Break free from the manual grind. The Catalyst is designed for those ready to stop 'working for their tools' and start having their tools work for them. Get a front-row seat to AI-driven operations with essential features for task tracking and knowledge management. It’s more than a trial; it’s your first step toward an automated workflow.",
    oldPrice: "$145",
    price: "$0",
    credits: "+$75 Credits",
    color: "text-slate-300",
    glow: "from-slate-500/20 to-slate-500/5",
    border: "border-white/10",
    button: "bg-white/[0.05] hover:bg-white/[0.08]",
    popular: false,
  },
  {
    icon: User,
    title: "Individual",
    desc: "Your personal operating system, supercharged. The Pro-Pilot tier is built for the high-achiever who handles it all—from complex sales pipelines to daily mission-critical ops. With an AI layer that learns your rhythm, you don’t just manage tasks; you predict them. Automate your follow-ups, organize your knowledge base, and reclaim hours of your week to focus on what actually moves the needle.",
    oldPrice: "$187",
    price: "$28",
    credits: "+$137 Credits",
    color: "text-blue-400",
    glow: "from-blue-500/20 to-blue-500/5",
    border: "border-blue-500/30",
    button: "bg-gradient-to-r from-blue-500 to-[#4f7cff]",
    popular: true,
  },
  {
    icon: Users,
    title: "Team",
    desc: "Turn your team into a single, cohesive engine. The Command Center isn't just a platform; it’s the connective tissue of your organization. This tier infuses AI into every layer of your collaborative effort—from real-time WFM insights and training modules to sophisticated sales forecasting. Eliminate silos, synchronize your pipelines, and ensure your team’s collective knowledge is always at their fingertips. Scale your operations without the friction.",
    oldPrice: "$402",
    price: "$40",
    credits: "+$632 Credits",
    color: "text-violet-400",
    glow: "from-violet-500/20 to-violet-500/5",
    border: "border-violet-500/20",
    button: "bg-white/[0.05] hover:bg-white/[0.08]",
    popular: false,
  },
];

const usageLimits = [
  { icon: Sparkles, value: "500", price: "+$0.01" },
  { icon: PhoneCall, value: "10", price: "+$0.02" },
  { icon: PhoneOutgoing, value: "10", price: "+$0.03" },
  { icon: MessageSquare, value: "250", price: "+$0.01" },
  { icon: Mail, value: "500", price: "+$0.01" },
  { icon: Ticket, value: "100", price: "+$0.05" },
  { icon: UserRound, value: "1", price: "+$5" },
  { icon: AudioWaveform, value: "30", price: "+$0.05" },
  { icon: Monitor, value: "30", price: "+$0.05" },
  { icon: Globe, value: "150", price: "+$0.05" },
];

const capabilities = [
  { title: "Interactions", desc: "My Interaction, AI Conversations, Voice, Chat, Email", count: "6" },
  { title: "Backoffice", desc: "Ticketing", count: "1" },
  { title: "Sentiments", desc: "My Quality Scorecard, Interaction Details", count: "2" },
  { title: "AI Tools", desc: "Organisation Persona, Guardrails", count: "2" },
  { title: "Application Data", desc: "Interaction Logs, Tickets", count: "2" },
  { title: "Settings", desc: "Account, Billing, Plan, Preference, Application", count: "5" },
  { title: "Help", desc: "Documentation, Support", count: "2" },
];

export default function PricingScale() {
  const scrollRefs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <section className="relative overflow-hidden bg-black px-4 pt-10 pb-12 text-white">
      {/* BG */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.08),transparent_40%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            <span className="text-[9px] uppercase tracking-[2px] text-blue-300">
              Frictionless Onboarding
            </span>
          </div>

          <h2 className="text-3xl font-black leading-[0.95] tracking-[-1px] sm:text-5xl lg:text-6xl">
            Select what you need.
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Scale as you grow.
            </span>
          </h2>
        </div>

        {/* NOTICE SECTION */}
        <div className="mx-auto mt-6 max-w-3xl">
          <div className="flex items-start gap-4 rounded-[32px] border border-blue-100 bg-[#eef3ff] px-6 py-6 shadow-sm">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#f6e7b2]">
              <Zap size={24} className="text-[#e0a500]" />
            </div>
            <p className="max-w-2xl text-[8px] font-bold uppercase leading-6 tracking-[2px] text-slate-600 sm:text-[12px]">
              Zero minimum commitments. Our automated configuration engine
              allows you to swap models and scale units with zero friction.
            </p>
          </div>
        </div>

        {/* CARDS */}
        <div className="mt-10 grid gap-5 lg:grid-cols-3 items-stretch">
          {plans.map((plan, index) => {
            const Icon = plan.icon;

            return (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                // REMOVED: hover:-translate-y-2 (it competed with Framer Motion and broke mouse tracking)
                className={`group relative flex h-[680px] flex-col overflow-hidden rounded-[28px] border bg-white/[0.03] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20 ${plan.border}`}
              >
                {/* HOVER GLOW */}
                <div className="absolute inset-0 opacity-0 transition-all duration-500 group-hover:opacity-100 pointer-events-none">
                  <div className={`absolute inset-0 bg-gradient-to-br ${plan.glow}`} />
                  <div
                    className={`absolute -left-10 top-0 h-40 w-40 rounded-full blur-3xl ${
                      plan.title === "Individual"
                        ? "bg-blue-500/20"
                        : plan.title === "Team"
                        ? "bg-violet-500/20"
                        : "bg-slate-400/10"
                    }`}
                  />
                  <div
                    className={`absolute bottom-0 right-0 h-40 w-40 rounded-full blur-3xl ${
                      plan.title === "Individual"
                        ? "bg-cyan-500/10"
                        : plan.title === "Team"
                        ? "bg-fuchsia-500/10"
                        : "bg-slate-500/10"
                    }`}
                  />
                </div>

                {/* POPULAR */}
                {plan.popular && (
                  <div className="absolute right-4 top-4 z-20 rounded-full bg-blue-500 px-3 py-1 text-[8px] font-bold uppercase tracking-[2px] text-white">
                    Most Popular
                  </div>
                )}

                {/* Main Content Wrap */}
                <div className="relative z-10 flex h-full h-full flex-col p-5">
                  
                  {/* ICON */}
                  <motion.div
                    whileHover={{ rotate: 6, scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br ${plan.glow} ${plan.color} shadow-md transition-all duration-500 group-hover:shadow-[0_0_20px_currentColor]`}
                  >
                    <Icon size={18} />
                  </motion.div>

                  {/* TITLE */}
                  <h3 className="mt-4 text-lg font-bold shrink-0">{plan.title}</h3>

                  {/* DESC */}
                  <p className="mt-2 text-xs leading-5 text-slate-400 line-clamp-3 shrink-0">
                    {plan.desc}
                  </p>

                  {/* PRICE */}
                  <div className="mt-5 flex items-end gap-2 shrink-0">
                    <span className="text-sm text-slate-500 line-through">
                      {plan.oldPrice}
                    </span>
                    <h2 className="text-4xl font-black">{plan.price}</h2>
                    <span className="mb-1 text-xs text-slate-400">/mo</span>
                  </div>

                  {/* CREDITS & CONDITIONS */}
                  <div className="mt-3 flex flex-wrap items-center gap-2 shrink-0">
                    <div className="inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[8px] font-bold uppercase tracking-[1px] text-emerald-300">
                      {plan.credits}
                    </div>

                    {plan.title !== "Free Plan" && (
                      <div className="inline-flex items-center gap-1 text-[9px] uppercase tracking-[1px] text-orange-400">
                        <Zap size={10} />
                        Usage billed separately
                      </div>
                    )}
                  </div>

                  {/* TEAM OPTIONS */}
                  {plan.title === "Team" && (
                    <div className="mt-4 space-y-3 shrink-0">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] uppercase tracking-[1px] text-slate-500">
                          Team Size
                        </span>
                        <input
                          type="number"
                          defaultValue={5}
                          min={1}
                          className="h-8 w-16 rounded-lg border border-white/10 bg-white/[0.03] text-center text-xs outline-none"
                        />
                      </div>
                      <label className="flex items-center gap-2 text-[10px] text-slate-400">
                        <input
                          type="checkbox"
                          className="h-3.5 w-3.5 accent-blue-500"
                        />
                        Show Monthly Total
                      </label>
                    </div>
                  )}

                  {/* SCROLL CONTENT CONTAINER */}
                  {/* ADDED: pointer-events-auto and isolated touch action to protect mouse scroll focus */}
                  <div
                    ref={(el) => {
                      scrollRefs.current[index] = el;
                    }}
                    className="pricing-scroll my-4 flex-1 overflow-y-auto pr-1 pointer-events-auto touch-auto"
                    style={{ 
                      scrollbarWidth: 'thin',
                      WebkitOverflowScrolling: 'touch'
                    }}
                  >
                    {/* USAGE */}
                    <div>
                      <p className="mb-3 text-[9px] font-bold uppercase tracking-[2px] text-slate-500">
                        Usage Limits
                      </p>
                      <div className="grid grid-cols-4 gap-2">
                        {usageLimits.map((item, i) => {
                          const Icon = item.icon;
                          return (
                            <div
                              key={i}
                              className="rounded-xl border border-white/10 bg-white/[0.03] p-2"
                            >
                              <div className={`flex justify-center transition-all duration-300 ${plan.color}`}>
                                <Icon size={11} />
                              </div>
                              <div className="mt-2 text-center">
                                <h4 className="text-[8px] font-black">{item.value}</h4>
                                <p className="mt-0.5 text-[7px] text-slate-500">{item.price}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* CAPABILITIES */}
                    <div className="mt-5">
                      <p className="mb-3 text-[9px] font-bold uppercase tracking-[2px] text-slate-500">
                        Included Capabilities
                      </p>
                      <div className="space-y-2">
                        {capabilities.map((item, i) => (
                          <div
                            key={i}
                            className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5"
                          >
                            <div className="flex items-start justify-between gap-2">
                              <div>
                                <h4 className="text-[10px] font-bold uppercase">
                                  {item.title}
                                </h4>
                                <p className="mt-1 text-[9px] leading-4 text-slate-500">
                                  {item.desc}
                                </p>
                              </div>
                              <div className="flex h-5 min-w-[22px] items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-1.5 text-[8px] font-bold text-slate-400">
                                {item.count}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* BUTTON */}
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className={`mt-auto flex w-full shrink-0 items-center justify-center gap-2 rounded-xl px-4 py-3 text-xs font-semibold text-white transition-all duration-300 ${plan.button}`}
                  >
                    Get Started
                    <ArrowRight size={14} />
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mx-auto mt-20 max-w-3xl text-center">

          <p className="text-sm text-slate-400 sm:text-base">
            Need a more detailed breakdown or custom SKU configuration?
          </p>

          <button className="group mt-8 inline-flex items-center gap-4 rounded-full border border-white/10 bg-white/[0.03] px-10 py-5 text-lg font-semibold text-white transition-all duration-500 hover:border-blue-500/30 hover:bg-blue-500/[0.06]">

            Deep Dive into Pricing Calculator

            <ArrowRight
              size={22}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </section>
  );
}