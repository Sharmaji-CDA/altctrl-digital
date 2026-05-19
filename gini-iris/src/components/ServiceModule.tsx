"use client";

import {
  Boxes,
  PhoneCall,
  PlugZap,
  BookOpenText,
  Cloud,
  Server,
  Zap,
} from "lucide-react";

import { motion } from "framer-motion";

const stats = [
  {
    icon: Boxes,
    value: "100+",
    label: "Modules",
    color: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-500/20",
    iconColor: "text-blue-400",
  },

  {
    icon: PhoneCall,
    value: "10+",
    label: "Telephony Integrations",
    color: "from-emerald-500/20 to-green-500/20",
    border: "border-emerald-500/20",
    iconColor: "text-emerald-400",
  },

  {
    icon: PlugZap,
    value: "20+",
    label: "CRM Integrations",
    color: "from-violet-500/20 to-fuchsia-500/20",
    border: "border-violet-500/20",
    iconColor: "text-violet-400",
  },

  {
    icon: BookOpenText,
    value: "15+",
    label: "Knowledgebase Integrations",
    color: "from-orange-500/20 to-red-500/20",
    border: "border-orange-500/20",
    iconColor: "text-orange-400",
  },

  {
    icon: Cloud,
    value: "3",
    label: "Hosting Modes",
    color: "from-cyan-500/20 to-sky-500/20",
    border: "border-cyan-500/20",
    iconColor: "text-cyan-400",
  },

  {
    icon: Server,
    value: "3",
    label: "Hyperscalers",
    color: "from-rose-500/20 to-pink-500/20",
    border: "border-rose-500/20",
    iconColor: "text-rose-400",
  },

  {
    icon: Zap,
    value: "5+",
    label: "OEM Partners",
    color: "from-amber-500/20 to-yellow-500/20",
    border: "border-amber-500/20",
    iconColor: "text-amber-400",
  },
];

export default function PlatformOverviewSection() {
  return (
    <section className="relative overflow-hidden bg-black px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-20">

      {/* BG */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(236,28,36,0.08),transparent_40%)]" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      {/* LEFT GLOW */}
      <div className="absolute left-[-120px] top-[120px] h-[260px] w-[260px] rounded-full bg-[#EC1C24]/8 blur-[90px]" />

      {/* RIGHT GLOW */}
      <div className="absolute right-[-120px] bottom-[100px] h-[260px] w-[260px] rounded-full bg-violet-500/8 blur-[90px]" />

      {/* ARC */}
      <motion.div
        animate={{
          rotate: [-10, 20, 0],
          x: [-20, 20, -20],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-[4%]
          top-[1%]
          z-0
          opacity-[0.35]
          scale-[1.01]
        "
      >
        <img
          src="/iris-bg.png"
          alt=""
          className="
            w-[2200px]
            max-w-none
            rotate-[30deg]
            object-contain
            select-none
            saturate-150
          "
        />
      </motion.div>

      <div className="relative z-20 mx-auto max-w-[1350px]">

        {/* TOP */}
        <div className="mx-auto max-w-5xl text-center">

          {/* BADGE */}
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
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
              duration: 0.7,
              ease: "easeOut",
            }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 backdrop-blur-xl"
          >

            <div className="h-2 w-2 rounded-full bg-[#EC1C24]" />

            <span className="text-[10px] uppercase tracking-[3px] text-gray-300">
              The CX Command Center
            </span>
          </motion.div>

          {/* HEADING */}
          <motion.h2
            initial={{
              opacity: 0,
              y: 40,
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
              ease: "easeOut",
            }}
            className="
              mx-auto
              max-w-[1200px]
              text-center
              text-[34px]
              font-black
              leading-[1]
              tracking-[-2px]
              sm:text-[32px]
              md:text-[40px]
              lg:text-[48px]
            "
          >

            <span className="bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
              Unify your Customer Service, Analytics,
            </span>

            <br />

            <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
               Automation, and AI into a single,
            </span>

            <br />

            <span className="bg-gradient-to-r from-gray-400 to-gray-100 bg-clip-text text-transparent">
              powerful platform.
            </span>
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            initial={{
              opacity: 0,
              y: 30,
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
              delay: 0.1,
              duration: 0.8,
              ease: "easeOut",
            }}
            className="
              mx-auto
              mt-6
              max-w-4xl
              text-sm
              leading-8
              text-gray-400
              sm:text-base
              lg:text-[18px]
            "
          >
            AltCtrl.Digital is the AI-native command center for modern
            customer experience. We break down silos between your
            communication channels, operational data, and advanced AI
            capabilities, empowering your teams to work smarter and
            deliver exceptional service.
          </motion.p>
        </div>

        {/* STATS */}
        <div
          className="
            mt-12
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:grid-cols-4
            xl:grid-cols-7
          "
        >

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{
                  opacity: 0,
                  y: index % 2 === 0 ? 60 : -60,
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
                  duration: 0.8,
                  delay: index * 0.06,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-[24px]
                  border
                  ${item.border}
                  bg-white/[0.03]
                  p-5
                  backdrop-blur-xl
                  transition-all
                  duration-300
                `}
              >

                {/* HOVER GLOW */}
                <div
                  className={`
                    absolute
                    inset-0
                    bg-gradient-to-br
                    ${item.color}
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  `}
                />

                {/* CONTENT */}
                <div className="relative z-10 flex flex-col items-center text-center">

                  {/* ICON */}
                  <div
                    className={`
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      bg-gradient-to-br
                      ${item.color}
                      ${item.iconColor}
                    `}
                  >
                    <Icon size={20} />
                  </div>

                  {/* VALUE */}
                  <h3
                    className={`
                      mt-5
                      text-[28px]
                      font-black
                      tracking-[-1px]
                      ${item.iconColor}
                    `}
                  >
                    {item.value}
                  </h3>

                  {/* LABEL */}
                  <p className="mt-2 text-[13px] leading-6 text-gray-400">
                    {item.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}