"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  Globe,
 ShieldCheck,
  Zap,
} from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-black px-4 sm:px-8 lg:px-16 py-16 lg:py-20">

      {/* MAIN BACKGROUND */}
      <div className="absolute inset-0" />

      {/* TOP RADIAL */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.14),transparent_30%)]" />

      {/* BOTTOM RADIAL */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.08),transparent_30%)]" />

      {/* SUN HAZE */}
      <div className="absolute right-[-10%] bottom-[-20%] h-[700px] w-[700px] rounded-full bg-red-500/10 blur-[160px]" />

      {/* RIGHT SUN ARC */}
      <motion.div
        initial={{
          opacity: 0,
          x: 120,
          y: 120,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          x: 0,
          y: [40, -20, 40],
          scale: [1, 1.03, 1],
        }}
        transition={{
          opacity: {
            duration: 1.8,
            ease: "easeOut",
          },
          x: {
            duration: 1.8,
            ease: "easeOut",
          },
          y: {
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          },
          scale: {
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="
          pointer-events-none
          absolute
          right-[-420px]
          bottom-[-320px]
          z-0
          hidden
          xl:block
        "
      >

        {/* MASSIVE OUTER GLOW */}
        <div className="absolute inset-0 rounded-full bg-red-500/10 blur-[120px]" />

        {/* MID GLOW */}
        <div className="absolute inset-0 rounded-full blur-[60px] scale-90" />

        {/* IMAGE */}
        <img
          src="/iris-bg.png"
          alt=""
          className="
            relative
            w-[1800px]
            max-w-none
            object-contain
            opacity-[0.16]
            blur-[0px]
            select-none
          "
        />

        {/* FADE INTO CONTENT */}
        <div className="absolute inset-0" />

        {/* EXTRA ATMOSPHERIC FOG */}
        <div className="absolute left-0 top-0 h-full w-full bg-black/10 blur-[20px]" />
      </motion.div>

      {/* EXTRA RED GLOW */}
      <div className="absolute right-[8%] top-[12%] h-[320px] w-[320px] rounded-full bg-[#EC1C24]/6 blur-[60px]" />

      {/* EXTRA CYAN GLOW */}
      <div className="absolute bottom-[10%] left-[5%] h-[280px] w-[280px] rounded-full bg-cyan-500/10 blur-[60px]" />

      <div className="grid items-center gap-12 lg:grid-cols-2 px-4 lg:px-8">

        {/* LEFT */}
        <motion.div
          initial={{
            opacity: 0,
            x: -40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{ once: false, amount: 0.3 }}
          className="max-w-xl"
        >

          {/* BADGE */}
          <div className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[2px] text-blue-300 backdrop-blur-xl">

            Scale Now
          </div>

          {/* HEADING */}
          <h2 className="mt-6 text-4xl font-black leading-[0.92] tracking-[-2px] text-white sm:text-5xl lg:text-6xl">

            Ready to turn on
            <br />

            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              the machine?
            </span>
          </h2>

          {/* DESC */}
          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
            Join 500+ enterprises already automating
            high-complexity workflows with AI infrastructure.
          </p>

          {/* FEATURES */}
          <div className="mt-6 space-y-3">

            {/* ITEM */}
            <motion.div
              whileHover={{ x: 6 }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
              className="group flex items-center gap-4"
            >

              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 group-hover:border-blue-500/30 group-hover:bg-blue-500/10">

                <Rocket
                  size={18}
                  className="text-blue-400"
                />
              </div>

              <p className="text-sm font-bold uppercase tracking-[1.5px] text-slate-200">
                Deployment in under 24 hours
              </p>
            </motion.div>

            {/* ITEM */}
            <motion.div
              whileHover={{ x: 6 }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
              className="group flex items-center gap-4"
            >

              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 group-hover:border-blue-500/30 group-hover:bg-blue-500/10">

                <Globe
                  size={18}
                  className="text-cyan-400"
                />
              </div>

              <p className="text-sm font-bold uppercase tracking-[1.5px] text-slate-200">
                Global region availability
              </p>
            </motion.div>

            {/* ITEM */}
            <motion.div
              whileHover={{ x: 6 }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
              className="group flex items-center gap-4"
            >

              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 group-hover:border-blue-500/30 group-hover:bg-blue-500/10">

                <ShieldCheck
                  size={18}
                  className="text-violet-400"
                />
              </div>

              <p className="text-sm font-bold uppercase tracking-[1.5px] text-slate-200">
                Deterministic logic gating
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{ once: true }}
          className="relative"
        >

          {/* FLOAT ICON */}
          <motion.div
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="absolute -top-8 left-1 z-20 flex h-14 w-14 items-center justify-center rounded-3xl border border-white/10 bg-black shadow-[0_0_30px_rgba(37,99,235,0.18)]"
          >

            <Zap
              size={22}
              className="text-blue-400"
            />
          </motion.div>

          {/* FORM */}
          <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-2xl shadow-[0_0_60px_rgba(37,99,235,0.08)] sm:p-7">

            <form className="space-y-4">

              {/* ROW */}
              <div className="grid gap-4 md:grid-cols-2">

                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[1px] text-slate-300">
                    First Name
                  </label>

                  <input
                    type="text"
                    placeholder="John"
                    className="h-11 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-blue-500/40 focus:bg-blue-500/[0.03]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[1px] text-slate-300">
                    Last Name
                  </label>

                  <input
                    type="text"
                    placeholder="Doe"
                    className="h-11 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-blue-500/40 focus:bg-blue-500/[0.03]"
                  />
                </div>
              </div>

              {/* ROW */}
              <div className="grid gap-4 md:grid-cols-2">

                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[1px] text-slate-300">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="h-11 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-blue-500/40 focus:bg-blue-500/[0.03]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[1px] text-slate-300">
                    Phone
                  </label>

                  <input
                    type="text"
                    placeholder="+1 555 000 000"
                    className="h-11 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-blue-500/40 focus:bg-blue-500/[0.03]"
                  />
                </div>
              </div>

              {/* MESSAGE */}
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[1px] text-slate-300">
                  Message
                </label>

                <textarea
                  rows={4}
                  placeholder="Tell us about your workflow..."
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-blue-500/40 focus:bg-blue-500/[0.03]"
                />
              </div>

              {/* BUTTON */}
              <motion.button
                whileHover={{
                  scale: 1.01,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                type="submit"
                className="flex h-11 w-full items-center justify-center rounded-xl bg-gradient-to-r from-pink-600 to-orange-500 text-sm font-bold text-white shadow-[0_0_30px_rgba(37,99,235,0.35)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(37,99,235,0.5)]"
              >

                Request Demo
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}