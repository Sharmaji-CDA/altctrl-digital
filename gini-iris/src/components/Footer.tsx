"use client";

import {
  ArrowRight,
} from "lucide-react";

import {
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-[#020617] px-4 pt-14 text-white sm:px-6 lg:px-8">

      {/* BG */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.08),transparent_45%)]" />

      {/* LEFT GLOW */}
      <motion.div
        animate={{
          opacity: [0.04, 0.1, 0.04],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute left-[-100px] bottom-[-80px] h-[220px] w-[220px] rounded-full bg-blue-500/10 blur-[90px]"
      />

      {/* RIGHT GLOW */}
      <motion.div
        animate={{
          opacity: [0.04, 0.1, 0.04],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute right-[-100px] bottom-[-80px] h-[220px] w-[220px] rounded-full bg-[#EC1C24]/10 blur-[90px]"
      />

      <div className="relative z-10 mx-auto max-w-[1280px]">

        {/* GRID */}
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr_1fr]">

          {/* BRAND */}
          <div>

            {/* LOGO */}
            <a
              href="#"
              className="relative z-20 inline-flex items-center"
            >
              <img
                src="/logo.png"
                alt="Gini Iris"
                className="
                  h-[52px]
                  w-auto
                  object-contain
                  transition-all
                  duration-300

                  sm:h-[60px]
                  lg:h-[68px]
                "
              />
            </a>

            {/* DESC */}
            <p className="mt-5 max-w-[320px] text-[13px] leading-7 text-slate-400">
              The Command Center for AI-Powered Customer Experience.
            </p>

            {/* SOCIAL */}
            <div className="mt-7 flex items-center gap-3">

              {[
                {
                  icon: FaTwitter,
                  color: "hover:text-sky-400",
                },

                {
                  icon: FaLinkedinIn,
                  color: "hover:text-blue-400",
                },

                {
                  icon: FaYoutube,
                  color: "hover:text-red-400",
                },
              ].map((social, index) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={index}
                    whileHover={{
                      y: -3,
                    }}
                    href="#"
                    className={`flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05] ${social.color}`}
                  >

                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* COLUMN */}
          <div>

            <h3 className="text-[15px] font-bold text-white">
              Modern CX
            </h3>

            <div className="mt-5 space-y-4">

              {[
                "Platform Overview",
                "Conversational AI",
                "AI Agents",
                "Pricing",
                "ROI Calculator",
              ].map((item, index) => (
                <motion.a
                  key={index}
                  whileHover={{
                    x: 4,
                  }}
                  href="#"
                  className="block text-[13px] text-slate-400 transition-all duration-300 hover:text-white"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>

          {/* COLUMN */}
          <div>

            <h3 className="text-[15px] font-bold text-white">
              Resources
            </h3>

            <div className="mt-5 space-y-4">

              {[
                "Use Cases",
                "CX Talks Blog",
                "Tech Resources",
                "Documentation",
              ].map((item, index) => (
                <motion.a
                  key={index}
                  whileHover={{
                    x: 4,
                  }}
                  href="#"
                  className="block text-[13px] text-slate-400 transition-all duration-300 hover:text-white"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>

          {/* COLUMN */}
          <div>

            <h3 className="text-[15px] font-bold text-white">
              Company
            </h3>

            <div className="mt-5 space-y-4">

              {[
                "About Us",
                "Careers",
                "Contact Us",
              ].map((item, index) => (
                <motion.a
                  key={index}
                  whileHover={{
                    x: 4,
                  }}
                  href="#"
                  className="block text-[13px] text-slate-400 transition-all duration-300 hover:text-white"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>

          {/* NEWSLETTER */}
          <div>

            <h3 className="text-[15px] font-bold text-white">
              Stay Updated
            </h3>

            <div className="mt-5">

              {/* INPUT */}
              <div className="relative">

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 pr-12 text-sm text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-blue-500/40 focus:bg-blue-500/[0.03]"
                />

                <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-500">

                  <ArrowRight size={16} />
                </div>
              </div>

              {/* BUTTON */}
              <motion.button
                whileHover={{
                  scale: 1.01,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="mt-4 flex h-11 w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#EC1C24] to-[#ff4d55] text-sm font-bold text-white shadow-[0_0_30px_rgba(236,28,36,0.35)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(236,28,36,0.5)]"
              >

                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col items-center justify-between gap-4 py-5 text-center sm:flex-row">

          <p className="text-[11px] text-slate-500">
            © 2026 GiniIris AI Systems. All rights reserved.
          </p>

          <div className="flex items-center gap-5">

            {[
              "Privacy Policy",
              "Terms of Service",
              "Security",
            ].map((item, index) => (
              <a
                key={index}
                href="#"
                className="text-[11px] text-slate-500 transition-all duration-300 hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}