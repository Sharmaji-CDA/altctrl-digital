"use client";

import { motion } from "framer-motion";
import { Bot, ArrowRight, HelpCircle } from "lucide-react";

export default function SelfServicePowerhouse() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#310410] via-[#5c0920] to-[#1a0208] text-rose-50 py-12 px-4 sm:px-6 lg:px-8 lg:h-screen lg:flex lg:flex-col lg:justify-center lg:items-center">
      
      {/* Decorative Technical Vector/Glow Highlights */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        {/* Synthetic light flares */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-rose-400/20 blur-[130px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-pink-500/15 blur-[130px]" />
        
        {/* Abstract Digital Wireframe Network Effect (Top-Right and Bottom-Left) */}
        <svg className="absolute top-0 right-0 w-96 h-96 text-rose-400/10 stroke-current transform translate-x-12 -translate-y-12 hidden md:block" viewBox="0 0 100 100" fill="none">
          <path d="M10,10 L30,40 L70,20 L90,60 L50,80 Z" strokeWidth="0.2" />
          <path d="M30,40 L50,80 M70,20 L50,80 M10,10 L70,20" strokeWidth="0.1" strokeDasharray="1 1" />
          <circle cx="30" cy="40" r="1" fill="currentColor" opacity="0.5" />
          <circle cx="70" cy="20" r="1" fill="currentColor" opacity="0.5" />
          <circle cx="50" cy="80" r="1" fill="currentColor" opacity="0.5" />
        </svg>

        <svg className="absolute bottom-0 left-0 w-96 h-96 text-pink-400/10 stroke-current transform -translate-x-12 translate-y-12 hidden md:block" viewBox="0 0 100 100" fill="none">
          <path d="M20,90 L40,50 L80,70 L60,20 L10,30 Z" strokeWidth="0.2" />
          <path d="M40,50 L60,20 M80,70 L10,30" strokeWidth="0.1" strokeDasharray="1 1" />
          <circle cx="40" cy="50" r="1" fill="currentColor" opacity="0.5" />
          <circle cx="60" cy="20" r="1" fill="currentColor" opacity="0.5" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-4xl text-center flex flex-col items-center justify-center h-full lg:max-h-[550px]">
        
        {/* Badge Indicator */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 rounded-full border border-rose-400/20 bg-rose-950/40 px-3 py-1 mb-6 backdrop-blur-xl"
        >
          <Bot size={12} className="text-rose-300 animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-[2px] text-rose-200">
            Conversational Intelligence v4.0
          </span>
        </motion.div>

        {/* Hero Typography */}
        <div className="max-w-3xl mx-auto mb-8">
          <motion.h1
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl leading-[1.1]"
          >
            Self-Service <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-100 to-rose-300 drop-shadow-md">
              Powerhouse.
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mt-6 text-sm sm:text-base md:text-lg text-rose-100/80 leading-relaxed max-w-2xl mx-auto font-light"
          >
            Empower your customers to resolve their own issues instantly.{" "}
            <span className="text-white font-medium">AltCtrl Bot</span> is more than a chatbot; it's a{" "}
            <span className="relative inline-block text-white font-bold whitespace-nowrap">
              deterministic reasoning engine
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-rose-400 opacity-60 rounded" />
            </span>{" "}
            for the enterprise.
          </motion.p>
        </div>

        {/* Action Button Controls */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-xs sm:max-w-none"
        >
          {/* Filled Core Action */}
          <motion.button
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-xs font-black uppercase tracking-wider text-rose-950 transition-all shadow-xl hover:bg-rose-50 shadow-rose-950/20"
          >
            Request A Demo
            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </motion.button>

          {/* Frosted Secondary Action */}
          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
            whileTap={{ scale: 0.98 }}
            className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-rose-200/20 bg-white/5 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-rose-100 backdrop-blur-md transition-all duration-300"
          >
            <HelpCircle size={14} className="text-rose-300" />
            Learn More
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}