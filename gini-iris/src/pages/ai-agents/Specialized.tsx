"use client";

import { motion } from "framer-motion";
import { Bot, ArrowDown } from "lucide-react";

export default function SpecializedAIWorkforce() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#07080c] via-[#15171e] to-[#0a0b0e] text-slate-100 py-12 px-4 sm:px-6 lg:px-8 lg:h-screen lg:flex lg:flex-col lg:justify-center lg:items-center">
      
      {/* Immersive Graphite Dark Ambient Glow Systems */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-25">
        <div className="absolute top-[45%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-slate-500/10 blur-[150px]" />
        <div className="absolute bottom-[-5%] left-[10%] w-[350px] h-[350px] rounded-full bg-slate-700/5 blur-[120px]" />
        {/* Technical matrix background accent lines */}
        <div className="absolute inset-0 opacity-[0.012] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-4xl text-center flex flex-col items-center justify-center h-full lg:max-h-[550px]">
        
        {/* Pill Micro-Indicator */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-950/50 px-3 py-1 mb-6 backdrop-blur-xl"
        >
          <Bot size={11} className="text-slate-400" />
          <span className="text-[9px] font-bold uppercase tracking-[2px] text-slate-400">
            Agentic Intelligence v2.0
          </span>
        </motion.div>

        {/* Main Immersive Title Group */}
        <div className="max-w-3xl mx-auto mb-6">
          <motion.h1
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-black tracking-tight text-white sm:text-6xl md:text-7xl leading-[1.08] drop-shadow-[0_2px_15px_rgba(255,255,255,0.05)]"
          >
            Specialized <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-500 font-black">
              AI Workforce.
            </span>
          </motion.h1>
          
          {/* Main Copy Statement with emphasized focal points */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mt-6 text-sm sm:text-base md:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto font-normal tracking-wide"
          >
            Design, build, and deploy <span className="text-white font-semibold underline decoration-slate-700 decoration-2 underline-offset-4">autonomous agents</span> tailored for your enterprise. Scale operations beyond human limitations.
          </motion.p>
        </div>

        {/* Subtle Decorative Flow Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 flex flex-col items-center gap-2 text-slate-500"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-slate-700 to-transparent" />
          <ArrowDown size={12} className="animate-bounce" />
        </motion.div>

      </div>
    </section>
  );
}