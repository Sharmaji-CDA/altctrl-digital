"use client";

import { motion } from "framer-motion";
import {
  HeartPulse,
  Building2,
  ShieldCheck,
  ShoppingCart,
  Globe2,
  Zap,
  Film,
  CarFront,
  Building,
  Gavel,
} from "lucide-react";

const industries = [
  { icon: HeartPulse, name: "Healthcare" },
  { icon: Building2, name: "Banking" },
  { icon: ShieldCheck, name: "Insurance" },
  { icon: ShoppingCart, name: "Retail" },
  { icon: Globe2, name: "Telecom" },
  { icon: Zap, name: "Utilities" },
  { icon: Film, name: "Media" },
  { icon: CarFront, name: "Automotive" },
  { icon: Building, name: "Real Estate" },
  { icon: Gavel, name: "Government" },
];

export default function IndustrySpecialized() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#0f172a] via-[#111827] to-[#1e293b] text-slate-100 py-8 px-4 sm:px-6 lg:px-8 lg:py-16 lg:flex lg:flex-col lg:justify-center lg:items-center">
      
      {/* Background Neural Slate Ambient Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-15">
        <div className="absolute top-[20%] left-[30%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-slate-400/20 blur-[130px]" />
        <div className="absolute bottom-[10%] left-[10%] w-[300px] h-[400px] rounded-full bg-blue-400/7 blur-[100px]" />
        {/* Subtle dot matrix pattern for engineering theme */}
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-5xl text-center flex flex-col items-center justify-center h-full lg:max-h-[600px]">
        
        {/* Header Block */}
        <div className="max-w-2xl mx-auto mb-8 sm:mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-black tracking-tight text-white sm:text-5xl"
          >
            Industry Specialized.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed"
          >
            Pre-configured autonomous logic, compliance guardrails, and channel
            strategies for your specific vertical.
          </motion.p>
        </div>

        {/* 5-Column Grid Matrix */}
        <div className="grid grid-cols-2 gap-3 w-full sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center justify-center">
          {industries.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04, duration: 0.4 }}
                whileHover={{ 
                  scale: 1.03, 
                  borderColor: "rgba(148, 163, 184, 0.3)",
                  backgroundColor: "rgba(30, 41, 59, 0.5)",
                  boxShadow: "0 0 30px rgba(148, 163, 184, 0.05)"
                }}
                className="group relative flex flex-col items-center justify-center rounded-3xl border border-slate-800/80 bg-slate-900/40 p-4 sm:p-6 backdrop-blur-md transition-all duration-300 aspect-[4/3] sm:aspect-square lg:max-h-[110px]"
              >
                {/* Glow Overlay Interaction */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-slate-400/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Rounded Icon Bubble */}
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-950 border border-slate-800 text-slate-300 transition-colors duration-300 group-hover:text-white group-hover:border-slate-500/30 group-hover:bg-slate-800/50">
                  <Icon size={20} strokeWidth={1.75} />
                </div>

                {/* Feature Title */}
                <span className="mt-3 text-[10px] font-black uppercase tracking-[1.5px] text-slate-400 transition-colors duration-300 group-hover:text-slate-200">
                  {item.name}
                </span>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}