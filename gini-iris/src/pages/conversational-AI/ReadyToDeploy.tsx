"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, FileText } from "lucide-react";

export default function ReadyToDeploy() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#0c0a10] via-[#161220] to-[#221b30] text-purple-100 py-12 px-4 sm:px-6 lg:px-8 lg:py-20 lg:flex lg:flex-col lg:justify-center lg:items-center">
      
      {/* Immersive Graphite Lavender Ambient Glow Systems */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-violet-500/10 blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[20%] w-[350px] h-[350px] rounded-full bg-purple-500/5 blur-[110px]" />
        {/* Subtle high-tech geometric network mesh lines */}
        <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(rgba(168,85,247,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.1)_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-3xl text-center flex flex-col items-center justify-center h-full">
        
        {/* Micro-Indicator */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-950/30 px-3 py-1 mb-6 backdrop-blur-xl"
        >
          <Sparkles size={12} className="text-purple-400" />
          <span className="text-[10px] font-bold uppercase tracking-[2px] text-purple-300">
            Enterprise Cloud Scaling
          </span>
        </motion.div>

        {/* Main Header Text Group */}
        <div className="max-w-2xl mx-auto mb-8">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl drop-shadow-[0_2px_10px_rgba(168,85,247,0.15)]"
          >
            Ready to Deploy?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mt-4 text-xs sm:text-sm md:text-base text-purple-200/60 leading-relaxed max-w-xl mx-auto"
          >
            Scale your intelligence instantly with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-300 to-indigo-300 font-extrabold shadow-sm">AltCtrl Bot</span>.
          </motion.p>
        </div>

        {/* Interactive Button Group Stack */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-sm sm:max-w-none"
        >
          {/* Primary Action Button */}
          <motion.button
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-xs font-black uppercase tracking-wider text-slate-950 transition-all shadow-xl hover:bg-purple-50/95 shadow-purple-950/20"
          >
            Request Demo Deployment
            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </motion.button>

          {/* Secondary Action Button */}
          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: "rgba(168, 85, 247, 0.08)" }}
            whileTap={{ scale: 0.98 }}
            className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-purple-500/20 bg-purple-950/20 px-5 py-3 text-xs font-bold uppercase tracking-wider text-purple-200 backdrop-blur-md transition-all duration-300"
          >
            <FileText size={14} className="text-purple-400" />
            Architecture Docs
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}