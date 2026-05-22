"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Terminal } from "lucide-react";

export default function ReadyToScale() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#120305] via-[#220509] to-[#040507] text-red-100 py-12 px-4 sm:px-6 lg:px-8 lg:h-screen lg:flex lg:flex-col lg:justify-center lg:items-center">
      
      {/* Immersive Vivid Red Ambient Aura Lighting */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-25">
        <div className="absolute top-[45%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-red-600/10 blur-[140px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[350px] h-[350px] rounded-full bg-rose-500/5 blur-[110px]" />
        {/* Technical matrix background accent lines */}
        <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(rgba(239,68,68,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.08)_1px,transparent_1px)] bg-[size:36px_36px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-3xl text-center flex flex-col items-center justify-center h-full lg:max-h-[500px]">
        
        {/* Micro-Indicator Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-950/30 px-3 py-1 mb-6 backdrop-blur-xl"
        >
          <Sparkles size={11} className="text-red-400 animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-[2px] text-red-300">
            Agentic Infrastructure v3.5
          </span>
        </motion.div>

        {/* Main Title Typography Group */}
        <div className="max-w-2xl mx-auto mb-8">
          <motion.h1
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl drop-shadow-[0_2px_12px_rgba(239,68,68,0.1)]"
          >
            Ready to Scale?
          </motion.h1>
          
          {/* Main Statement Content */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mt-4 text-xs sm:text-sm md:text-base text-slate-400 leading-relaxed max-w-xl mx-auto"
          >
            Deploy your specialized workforce with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-300 to-white font-extrabold shadow-sm">
              AltCtrl Agents
            </span>
            .
          </motion.p>
        </div>

        {/* Interactive Action Control Stack */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-sm sm:max-w-none"
        >
          {/* Primary CTA */}
          <motion.button
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-xs font-black uppercase tracking-wider text-slate-950 transition-all shadow-xl hover:bg-red-50/95 shadow-red-950/20"
          >
            Request Demo Deployment
            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </motion.button>

          {/* Secondary Core Docs Link */}
          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: "rgba(239, 68, 68, 0.08)" }}
            whileTap={{ scale: 0.98 }}
            className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-red-500/20 bg-red-950/20 px-5 py-3 text-xs font-bold uppercase tracking-wider text-red-200 backdrop-blur-md transition-all duration-300"
          >
            <Terminal size={14} className="text-red-400" />
            Architecture Docs
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}