"use client";

import { motion } from "framer-motion";
import { Bot } from "lucide-react";

export default function SpecializedAIWorkforce() {

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#050507] via-[#0a0b11] to-[#050507] py-10 sm:py-12 lg:py-16">

      {/* BRAND ORB BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* MAIN BRAND IMAGE */}
        <motion.img
          src="/iris-bg.png"
          alt="background orb"
          animate={{
            scale: [1, 1.04, 1],
            opacity: [0.18, 0.26, 0.18],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-1/3
            top-2/3
            w-[520px]
            -translate-x-1/2
            -translate-y-1/2
            object-contain
            blur-[2px]
            sm:w-[620px]
            lg:w-[760px]
          "
        />

        {/* SYNTHETIC ROSE LIGHT */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[420px]
            w-[420px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#ff1744]/10
            blur-[140px]
          "
        />

        {/* SIDE GLOW */}
        <div
          className="
            absolute
            right-[-10%]
            top-[20%]
            h-[260px]
            w-[260px]
            rounded-full
            bg-[#ec4899]/10
            blur-[120px]
          "
        />

        {/* GRID */}
        <div className="absolute inset-0 opacity-[0.025]">
          <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:34px_34px]" />
        </div>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mt-24 mx-auto flex max-w-5xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">

        {/* BADGE */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.96,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-[#ff1744]/20
            bg-[#ff1744]/[0.06]
            px-3
            py-1.5
            backdrop-blur-2xl
          "
        >

          <Bot
            size={11}
            className="text-[#ff6b81]"
          />

          <span className="text-[8px] font-bold uppercase tracking-[2px] text-[#ff8fa3]">
            Agentic Intelligence v2.0
          </span>
        </motion.div>

        {/* TITLE */}
        <div className="mt-5 max-w-4xl">

          <motion.h1
            initial={{
              opacity: 0,
              y: -12,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="
              text-[34px]
              font-black
              leading-[0.95]
              tracking-[-2px]
              text-white
              sm:text-[46px]
              md:text-[58px]
              lg:text-[68px]
            "
          >

            Specialized

            <br />

            <span
              className="
                bg-gradient-to-r
                from-white
                via-[#ffb3c1]
                to-[#ff1744]
                bg-clip-text
                text-transparent
              "
            >
              AI Workforce.
            </span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.1,
              duration: 0.5,
            }}
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-[13px]
              leading-[1.7]
              text-slate-300
              sm:text-[15px]
              md:text-[16px]
            "
          >

            Design, build, and deploy{" "}

            <span className="font-semibold text-white underline decoration-[#ff1744]/40 underline-offset-4">
              autonomous agents
            </span>

            {" "}tailored for your enterprise. Scale operations beyond
            human limitations.
          </motion.p>
        </div>
      </div>
    </section>
  );
}