"use client";

import { motion } from "framer-motion";
import { 
  MessageSquare, 
  Brain, 
  Zap, 
  Bot, 
  Monitor, 
  Phone, 
  Video, 
  Mail, 
  Smartphone,
  Clock,
  BookOpen,
  Languages,
  ArrowUpRight
} from "lucide-react";

const flowFeatures = [
  {
    icon: MessageSquare,
    title: "Deep Intent Recognition",
    desc: "Advanced NLP that understands complex queries and slang.",
    badgeColor: "text-blue-400 bg-blue-500/10 border-blue-500/10",
  },
  {
    icon: Brain,
    title: "Contextual Memory",
    desc: "Recalls past interactions for deeply personalized support.",
    badgeColor: "text-slate-400 bg-slate-500/10 border-slate-500/10",
  },
  {
    icon: Zap,
    title: "Action-Oriented",
    desc: "Triggers API calls to update CRM or process orders.",
    badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/10",
  },
];

const mockDeviceChannels = [Bot, Monitor, Phone, Video, Mail, Smartphone];

export default function AnatomyOfFlow() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#090d16] via-[#0f172a] to-[#1e293b] text-slate-100 py-8 px-4 sm:px-6 lg:px-16 lg:py-20 lg:flex lg:flex-col lg:justify-center">
      
      {/* Background Neural Matrix Overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-slate-500/10 blur-[130px]" />
        <div className="absolute bottom-[10%] left-[-5%] w-[450px] h-[450px] rounded-full bg-blue-900/10 blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:20px_20px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl h-full px-4 lg:px-8 flex flex-col justify-between">
        
        {/* Core Layout Grid split into Copy + Mockup Interaction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full">
          
          {/* Left Column: Copywriting & Feature Blocks */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-black tracking-tight text-white sm:text-5xl"
              >
                The Anatomy of Flow.
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0"
              >
                AltCtrl Bot goes beyond simple scripts. It listens, understands context, 
                and takes deterministic action within your backend systems.
              </motion.p>
            </div>

            {/* Feature Row Stack */}
            <div className="space-y-3 max-w-xl mx-auto lg:mx-0">
              {flowFeatures.map((feat, index) => {
                const Icon = feat.icon;
                return (
                  <motion.div
                    key={feat.title}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-4 rounded-2xl border border-slate-800/60 bg-slate-900/20 p-4 backdrop-blur-md transition-all duration-300 hover:border-slate-700 hover:bg-slate-900/40"
                  >
                    <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border ${feat.badgeColor}`}>
                      <Icon size={16} />
                    </div>
                    <div className="text-left min-w-0">
                      <h3 className="text-xs font-black uppercase tracking-wider text-white">
                        {feat.title}
                      </h3>
                      <p className="text-xs leading-normal text-slate-400 mt-1">
                        {feat.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Button Actions */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3"
            >
              <button className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-xs font-black uppercase tracking-wider text-slate-950 transition-all shadow-md hover:bg-slate-100">
                Deploy Bot Instance
              </button>
              <button className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-950/40 px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-300 backdrop-blur-sm transition-all duration-300 hover:bg-slate-900/60">
                Technical Overview
              </button>
            </motion.div>
          </div>

          {/* Right Column: High-fidelity Interface Mockup Panel */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end items-center h-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-[360px] rounded-3xl border border-slate-800/80 bg-[#0b111e] p-4 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] flex flex-col justify-between h-[480px] relative"
            >
              {/* Dynamic device frame status header */}
              <div className="border-b border-slate-900 pb-3">
                <div className="flex items-center justify-between text-[11px] text-slate-500 px-1">
                  <span className="font-mono font-bold text-slate-400">AltCtrl<span className="text-blue-400">.Digital</span></span>
                  <div className="flex gap-2.5">
                    {mockDeviceChannels.map((Icon, idx) => (
                      <Icon key={idx} size={11} className={idx === 0 ? "text-blue-400" : "text-slate-600"} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Bot Core Branding Interface view */}
              <div className="flex-1 flex flex-col items-center justify-center text-center px-4 my-auto">
                <div className="relative mb-4">
                  <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-md scale-125" />
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700/80 text-blue-400 shadow-inner">
                    <Bot size={28} />
                  </div>
                </div>
                
                <span className="rounded-full bg-slate-900 border border-slate-800/80 px-2.5 py-0.5 text-[9px] font-black uppercase tracking-[1.5px] text-slate-400">
                  Smart Assistance
                </span>
                <h2 className="text-lg font-black text-white mt-2">AI Chatbot</h2>
                <p className="text-[11px] leading-relaxed text-slate-400 mt-2 max-w-[220px]">
                  Get instant answers to your questions from our intelligent knowledge bot.
                </p>

                {/* Info Feature Micro Grid */}
                <div className="grid grid-cols-2 gap-2 mt-5 w-full">
                  {[
                    { label: "24/7 Availability", icon: Clock },
                    { label: "Instant Answers", icon: Zap },
                    { label: "Knowledge Base", icon: BookOpen },
                    { label: "Multi-lingual", icon: Languages }
                  ].map((micro) => (
                    <div key={micro.label} className="rounded-xl bg-slate-950/60 border border-slate-900/80 p-2.5 flex flex-col items-center justify-center text-center">
                      <micro.icon size={12} className="text-blue-400/80 mb-1" />
                      <span className="text-[9px] font-medium text-slate-400">{micro.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Interactive Actions */}
              <div className="pt-3 border-t border-slate-900">
                <button className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-slate-800 to-slate-700 border border-slate-600/40 py-2.5 text-xs font-extrabold text-white transition-all shadow-md hover:from-slate-700 hover:to-slate-600">
                  Start Chat
                  <ArrowUpRight size={13} className="text-slate-400" />
                </button>
                <span className="block text-center text-[8px] text-slate-600 font-medium mt-2">
                  Conversations may be recorded for quality assurance.
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}