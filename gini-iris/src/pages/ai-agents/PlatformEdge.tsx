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
  ArrowRight
} from "lucide-react";

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
  { icon: MessageSquare, name: "Service Agent", desc: "Automates customer support and resolves issues." },
  { icon: ShoppingCart, name: "Sales Agent", desc: "Qualifies leads and assists in the sales process." },
  { icon: BarChart3, name: "Analyst Agent", desc: "Processes data and generates business insights." },
  { icon: UserPlus, name: "Onboarding Agent", desc: "Guides new users through platform features." },
];

const industryAgents = [
  { icon: Heart, name: "Healthcare Agent", desc: "Navigates appointments and insurance queries." },
  { icon: Shield, name: "Insurance Agent", desc: "Streamlines claims and policy questions." },
  { icon: Building2, name: "Banking Agent", desc: "Assists with transactions and fraud alerts." },
  { icon: PhoneCall, name: "Telecom Agent", desc: "Troubleshoots service and manages plans." },
];

export default function PlatformEdge() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#120305] via-[#090a0f] to-[#040507] text-slate-100 py-8 px-4 sm:px-6 lg:px-8 lg:h-screen lg:flex lg:flex-col lg:justify-center">
      
      {/* Background Vivid Red Ambient Aura Lights */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-25">
        <div className="absolute top-[-10%] left-[15%] w-[500px] h-[500px] rounded-full bg-red-600/10 blur-[140px]" />
        <div className="absolute bottom-[5%] right-[10%] w-[450px] h-[450px] rounded-full bg-rose-500/5 blur-[120px]" />
        {/* Engineering blueprint alignment grid overlay */}
        <div className="absolute inset-0 opacity-[0.012] bg-[linear-gradient(to_right,#ef4444_1px,transparent_1px),linear-gradient(to_bottom,#ef4444_1px,transparent_1px)] bg-[size:36px_36px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl h-full lg:max-h-[660px] flex flex-col justify-between">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full">
          
          {/* LEFT SIDE: Heading, Grid Metrics, and Action Buttons */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-center lg:text-left">
              <motion.h1 
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-black tracking-tight text-white sm:text-5xl"
              >
                The Platform Edge.
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed"
              >
                Built on a foundation of multi-LLM orchestration and fine-tuned domain expertise.
              </motion.p>
            </div>

            {/* Micro Stats Matrix Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-2.5">
              {metrics.map((m, idx) => {
                const Icon = m.icon;
                return (
                  <motion.div
                    key={m.label}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.03 }}
                    className="flex flex-col rounded-xl border border-slate-900 bg-slate-950/40 p-3 backdrop-blur-md hover:border-slate-800/80 transition-colors"
                  >
                    <Icon size={14} className="text-red-400/90 mb-1.5" />
                    <span className="text-base sm:text-lg font-black text-white leading-tight">{m.stat}</span>
                    <span className="text-[8px] font-bold tracking-wider text-slate-500 mt-0.5 leading-none uppercase">{m.label}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Panel Actions */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="flex flex-col sm:flex-row items-center gap-3 w-full"
            >
              <button className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 px-5 py-3 text-xs font-black uppercase tracking-wider text-white transition-all shadow-md hover:opacity-95 shadow-red-950/20">
                Provision Agent Cluster
              </button>
              <button className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-950/40 px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-300 backdrop-blur-sm transition-all duration-300 hover:bg-slate-900/60">
                <Terminal size={14} className="text-red-400/80" />
                Development API
              </button>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Dedicated Multi-Agent Workforce Dashboard Card */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end items-center h-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-xl rounded-2xl border border-slate-800/80 bg-[#06080e]/95 p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl relative overflow-hidden flex flex-col justify-between"
            >
              {/* Subtle background container aura */}
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-red-500/[0.02] blur-3xl pointer-events-none" />

              {/* Sub-Card Header */}
              <div className="border-b border-slate-900/80 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-500/10 text-red-400 border border-red-500/10">
                    <Bot size={15} />
                  </div>
                  <div>
                    <h2 className="text-sm font-black uppercase tracking-wider text-white">A Specialized AI Workforce</h2>
                    <p className="text-[11px] text-slate-500 mt-0.5">Deploy autonomous agents for any given business task.</p>
                  </div>
                </div>
              </div>

              {/* Functional Grid Layout (By Function / By Industry Columns) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-4 flex-1">
                
                {/* Column A: By Function */}
                <div className="space-y-2.5">
                  <span className="block text-[10px] font-bold text-slate-500 tracking-wider uppercase border-b border-slate-900 pb-1">By Function</span>
                  <div className="space-y-2">
                    {functionalAgents.map((agent) => {
                      const Icon = agent.icon;
                      return (
                        <div key={agent.name} className="group flex items-start gap-3 rounded-xl border border-slate-900 bg-slate-950/40 p-2.5 transition-colors duration-200 hover:border-red-500/10 hover:bg-red-950/[0.08]">
                          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-900 border border-slate-800/80 text-red-400/90 group-hover:border-red-500/20 group-hover:bg-red-950/20">
                            <Icon size={13} strokeWidth={2} />
                          </div>
                          <div className="min-w-0">
                            <h4 className="text-[11px] font-extrabold text-slate-200">{agent.name}</h4>
                            <p className="text-[10px] text-slate-400 leading-tight mt-0.5">{agent.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Column B: By Industry */}
                <div className="space-y-2.5">
                  <span className="block text-[10px] font-bold text-slate-500 tracking-wider uppercase border-b border-slate-900 pb-1">By Industry</span>
                  <div className="space-y-2">
                    {industryAgents.map((agent) => {
                      const Icon = agent.icon;
                      return (
                        <div key={agent.name} className="group flex items-start gap-3 rounded-xl border border-slate-900 bg-slate-950/40 p-2.5 transition-colors duration-200 hover:border-red-500/10 hover:bg-red-950/[0.08]">
                          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-900 border border-slate-800/80 text-rose-400/90 group-hover:border-red-500/20 group-hover:bg-red-950/20">
                            <Icon size={13} strokeWidth={2} />
                          </div>
                          <div className="min-w-0">
                            <h4 className="text-[11px] font-extrabold text-slate-200">{agent.name}</h4>
                            <p className="text-[10px] text-slate-400 leading-tight mt-0.5">{agent.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>

              {/* Terminal Bottom Spec Link Trigger */}
              <div className="mt-4 pt-3 border-t border-slate-900/80 flex justify-end">
                <button className="group flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-red-400 transition-colors hover:text-red-300">
                  Cluster Orchestrator Specs
                  <ArrowRight size={12} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </button>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}