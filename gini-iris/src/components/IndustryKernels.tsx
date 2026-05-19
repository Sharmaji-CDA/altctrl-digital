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
    <section className="relative overflow-hidden bg-black px-4 py-14 text-white sm:px-6 lg:px-8 lg:py-18">

      {/* BG */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(236,28,36,0.08),transparent_45%)]" />

      {/* LEFT GLOW */}
      <div className="absolute left-[-120px] top-[100px] h-[240px] w-[240px] rounded-full bg-[#EC1C24]/15 blur-[110px]" />

      {/* RIGHT GLOW */}
      <div className="absolute right-[-120px] bottom-[100px] h-[240px] w-[240px] rounded-full bg-cyan-500/10 blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-[1200px]">

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

              {/* LIGHT SWEEP */}
              <motion.div
                animate={{
                  x: ["-120%", "220%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: index * 0.25,
                }}
                className="absolute top-0 h-full w-[70px] rotate-[20deg] bg-white/[0.04] blur-lg"
              />

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