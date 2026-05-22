"use client";

import { motion } from "framer-motion";
import { HiChip } from "react-icons/hi";

export default function ProductsHero() {

  return (
    <section className="relative flex items-center overflow-hidden bg-[radial-gradient(circle_at_top,#1e293b_0%,#111827_45%,#020617_100%)]">

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">

        {/* BRAND ORB ATMOSPHERE */}
        <motion.img
          src="/iris-bg.png"
          alt="orb"
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 2, 0],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[0%]
            top-[10%]
            z-[1]
            w-[420px]
            select-none
            pointer-events-none
            blur-[2px]
            sm:w-[520px]
            md:w-[620px]
            lg:w-[720px]
          "
        />

        {/* LEFT ATMOSPHERE */}
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-100px] top-[18%] h-[220px] w-[220px] rounded-full bg-[#334155]/30 blur-[110px] sm:h-[280px] sm:w-[280px]"
        />

        {/* RIGHT ATMOSPHERE */}
        <motion.div
          animate={{
            y: [0, 20, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[-100px] top-[12%] h-[240px] w-[240px] rounded-full bg-[#8b5cf6]/10 blur-[120px] sm:h-[300px] sm:w-[300px]"
        />

        {/* GRID */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:44px_44px] sm:bg-[size:56px_56px]" />
        </div>

        {/* TOP LIGHT */}
        <div className="absolute inset-x-0 top-0 h-[180px] bg-gradient-to-b from-white/[0.03] to-transparent" />
      </div>

      {/* CONTENT */}
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.9,
          ease: "easeOut",
        }}
        className="relative z-10 mx-auto mt-12 flex w-full max-w-[1080px] flex-col items-center justify-center px-5 py-16 text-center sm:px-8 md:py-20"
      >

        {/* BADGE */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.1,
            duration: 0.6,
          }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 shadow-[0_0_40px_rgba(236,72,153,0.05)] backdrop-blur-2xl"
        >

          <HiChip
            size={12}
            className="text-[#f472b6]"
          />

          <span className="text-[8px] font-medium tracking-[2px] text-[#f9a8d4]">
            Operational Capabilities v2.4
          </span>
        </motion.div>

        {/* TITLE */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
            duration: 0.8,
          }}
          className="mt-7"
        >

          <h1 className="font-black leading-[0.95] tracking-[-2px] sm:tracking-[-3px]">

            <span className="block bg-gradient-to-r from-[#f8fafc] via-[#f9a8d4] to-[#ec4899] bg-clip-text text-[32px] text-transparent sm:text-[42px] md:text-[52px] lg:text-[64px] xl:text-[74px]">

              Autonomy as a
            </span>

            <span className="block bg-gradient-to-r from-[#ffffff] via-[#ec4899] to-[#8b5cf6] bg-clip-text text-[32px] text-transparent sm:text-[42px] md:text-[52px] lg:text-[64px] xl:text-[74px]">

              Business Strategy.
            </span>
          </h1>
        </motion.div>

        {/* DESCRIPTION */}
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.3,
            duration: 0.8,
          }}
          className="mx-auto mt-7 max-w-[92%] text-[13px] leading-[1.8] tracking-[-0.2px] text-[#cbd5e1] sm:max-w-2xl sm:text-[15px] md:text-[16px] lg:max-w-xl lg:text-[17px]"
        >

          We don't just build apps; we deploy a{" "}

          <span className="font-semibold text-[#f8fafc] underline decoration-[#ec4899]/40 underline-offset-[4px]">
            Strategic Abstraction Layer
          </span>

          {" "}that derisks AI adoption and automates complexity.
        </motion.p>

        {/* FLOATING LIGHT */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[14%] right-[10%] hidden h-16 w-16 rounded-full bg-[#ec4899]/10 blur-3xl lg:block"
        />
      </motion.div>
    </section>
  );
}