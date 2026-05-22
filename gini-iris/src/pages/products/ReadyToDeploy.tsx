"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight, Code2 } from "lucide-react";

export default function ReadyToDeploy() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#0f0507] via-[#140609] to-[#1e0a0e] text-rose-100 py-12 px-4 sm:px-6 lg:px-8 lg:py-16 lg:flex lg:flex-col lg:justify-center lg:items-center">
      
      {/* Immersive Synthetic Rose Ambient Glow Systems */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-rose-500/15 blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[15%] w-[400px] h-[400px] rounded-full bg-pink-500/10 blur-[120px]" />
        {/* Fine mesh grid for a technical touch */}
        <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(rgba(244,63,94,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(244,63,94,0.1)_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-3xl text-center flex flex-col items-center justify-center h-full lg:max-h-[500px]">
        
        {/* Micro-Indicator */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 rounded-full border border-rose-500/20 bg-rose-950/30 px-3 py-1 mb-6 backdrop-blur-xl"
        >
          <Sparkles size={12} className="text-rose-400" />
          <span className="text-[10px] font-bold uppercase tracking-[2px] text-rose-300">
            Enterprise Scale Deployment
          </span>
        </motion.div>

        {/* Main Header Text */}
        <div className="max-w-2xl mx-auto mb-8">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl drop-shadow-[0_2px_10px_rgba(244,63,94,0.15)]"
          >
            Ready to deploy?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mt-4 text-xs sm:text-sm md:text-base text-rose-200/70 leading-relaxed max-w-xl mx-auto"
          >
            Join the organizations moving beyond AI chat-bots toward a fully autonomous, deterministic, and high-scale <span className="text-white font-semibold underline decoration-rose-500 decoration-2 underline-offset-4">AI Workforce</span>.
          </motion.p>
        </div>

        {/* Interactive Button Group Stack */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-sm sm:max-w-none"
        >
          {/* Primary Action Button */}
          <motion.button
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 px-5 py-3 text-xs font-black uppercase tracking-wider text-white transition-all shadow-[0_4px_20px_rgba(244,63,94,0.3)] hover:opacity-95"
          >
            Request a POC Deployment
            <ArrowUpRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.button>

          {/* Secondary Action Button */}
          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: "rgba(244, 63, 94, 0.1)" }}
            whileTap={{ scale: 0.98 }}
            className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-rose-500/20 bg-rose-950/20 px-5 py-3 text-xs font-bold uppercase tracking-wider text-rose-200 backdrop-blur-md transition-all duration-300"
          >
            <Code2 size={14} className="text-rose-400" />
            Technical Architecture
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}