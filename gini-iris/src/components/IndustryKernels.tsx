"use client";

import { motion } from "framer-motion";

const industries = [
  "Healthcare",
  "Insurance",
  "Banking",
  "Telecom",
  "Utilities",
  "Media & Entertainment",
  "Automotive",
  "Retail & E-commerce",
  "Education",
  "Real Estate",
  "Government",
  "Travel & Hospitality",
];

export default function IndustryKernels() {
  return (
    <section className="relative overflow-hidden bg-black px-4 py-8 text-white sm:px-6 lg:px-16 lg:py-20">

      {/* BG */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(236,28,36,0.08),transparent_45%)]" />

      {/* LEFT GLOW */}
      <div className="absolute left-[-120px] top-[100px] h-[240px] w-[240px] rounded-full bg-[#EC1C24]/15 blur-[110px]" />

      {/* RIGHT GLOW */}
      <div className="absolute right-[-120px] bottom-[100px] h-[240px] w-[240px] rounded-full bg-cyan-500/10 blur-[110px]" />

      {/* BRAND ARC BACKGROUND */}
      <div
        className="
          pointer-events-none
          absolute
          right-[-260px]
          top-1/2
          z-0
          -translate-y-1/2
          opacity-[0.14]
        "
      >
        <img
          src="/iris-bg.png"
          alt=""
          className="
            w-[900px]
            object-contain
            rotate-[145deg]
            select-none
            saturate-150
            contrast-125
          "
        />
      </div>

      {/* SECOND ARC */}
      <div
        className="
          pointer-events-none
          absolute
          left-[-220px]
          bottom-[-150px]
          z-0
          opacity-[0.08]
        "
      >
        <img
          src="/iris-bg.png"
          alt=""
          className="
            w-[620px]
            object-contain
            -rotate-[35deg]
            select-none
            saturate-150
          "
        />
      </div>

      <div className="mx-auto max-w-[1200px] px-4 lg:px-8">

        {/* TOP */}
        <div className="mx-auto max-w-[820px] text-center">

          {/* BADGE */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: false,
              amount: 0.4,
            }}
            transition={{
              duration: 0.6,
            }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 backdrop-blur-xl"
          >

            <div className="h-2 w-2 rounded-full bg-orange-400" />

            <span className="text-[10px] uppercase tracking-[3px] text-orange-300">
              Domain-Specific Intelligence
            </span>
          </motion.div>

          {/* HEADING */}
          <motion.h2
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: false,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
            }}
            className="text-[32px] font-black leading-[1] tracking-[-2px] sm:text-[46px] lg:text-[58px]"
          >
            Tailored for your Industry
          </motion.h2>

          {/* DESC */}
          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: false,
              amount: 0.3,
            }}
            transition={{
              duration: 0.9,
            }}
            className="mx-auto mt-6 max-w-[760px] text-[14px] leading-8 text-slate-400 sm:text-[15px]"
          >
            We provide pre-trained{" "}

            <span className="text-white">
              Persona Kernels
            </span>{" "}

            that understand the specific terminology,
            compliance risks, and customer expectations
            of your sector.
          </motion.p>
        </div>

        {/* INDUSTRY PILLS */}
        <div className="relative mt-14 flex flex-wrap items-center justify-center gap-4">

          {industries.map((industry, index) => (
            <motion.button
              key={industry}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: false,
                amount: 0.2,
              }}
              transition={{
                duration: 0.55,
                delay: index * 0.04,
              }}
              whileHover={{
                y: -3,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 text-[13px] font-semibold text-slate-300 backdrop-blur-xl transition-all duration-300 hover:border-[#EC1C24]/50 hover:bg-[#EC1C24] hover:text-white hover:shadow-[0_0_30px_rgba(236,28,36,0.18)]"
            >

              {/* BG GLOW */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#EC1C24]/10 via-transparent to-cyan-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* TEXT */}
              <span className="relative z-10">
                {industry}
              </span>
            </motion.button>
          ))}
        </div>

        {/* BOTTOM LINE */}
        <motion.div
          initial={{
            opacity: 0,
            scaleX: 0,
          }}
          whileInView={{
            opacity: 1,
            scaleX: 1,
          }}
          viewport={{
            once: false,
            amount: 0.4,
          }}
          transition={{
            duration: 0.9,
          }}
          className="mx-auto mt-16 h-px w-full max-w-[900px] origin-center bg-gradient-to-r from-transparent via-white/10 to-transparent"
        />
      </div>
    </section>
  );
}