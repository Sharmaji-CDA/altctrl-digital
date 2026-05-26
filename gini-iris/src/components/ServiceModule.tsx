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

/* =========================================================
   DATA
========================================================= */

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

/* =========================================================
   LIGHTWEIGHT MOTION
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 22,
  },

  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function PlatformOverviewSection() {

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#0F0B14]
        px-4
        py-16
        text-white
        sm:px-6
        lg:px-16
        lg:py-20
      "
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">

        {/* TOP GRADIENT */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(236,28,36,0.08),transparent_40%)]" />

        {/* GRID */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full bg-[linear-gradient(rgba(180,167,189,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(180,167,189,0.25)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>

        {/* LEFT GLOW */}
        <div
          className="
            absolute
            left-[-100px]
            top-[40px]
            h-[260px]
            w-[260px]
            rounded-full
            bg-[#8A8599]/15
            blur-[100px]
            animate-pulse
          "
        />

        {/* RIGHT GLOW */}
        <div
          className="
            absolute
            bottom-[20px]
            right-[-120px]
            h-[260px]
            w-[260px]
            rounded-full
            bg-[#B497BD]/15
            blur-[100px]
            animate-pulse
          "
          style={{
            animationDuration: "7s",
          }}
        />

        {/* IMAGE AMBIENT 1 */}
        <div
          className="
            pointer-events-none
            absolute
            left-[-3%]
            top-[-5%]
            hidden
            lg:block
          "
        >

          <img
            src="/iris-bg.png"
            alt=""
            className="
              w-[700px]
              object-contain
              opacity-[0.18]
              blur-[2px]
              saturate-150
              brightness-125
            "
          />
        </div>

        {/* IMAGE AMBIENT 2 */}
        <div
          className="
            pointer-events-none
            absolute
            bottom-[30%]
            right-[1%]
            hidden
            lg:block
          "
        >

          <img
            src="/iris-bg.png"
            alt=""
            className="
              w-[400px]
              rotate-90
              object-contain
              opacity-[0.22]
              blur-[3px]
              saturate-150
              brightness-125
            "
          />
        </div>

        {/* CENTER VIGNETTE */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
      </div>

      {/* CONTENT */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          staggerChildren: 0.08,
        }}
        className="
          relative
          z-20
          mx-auto
          max-w-[1350px]
          px-4
          sm:px-6
          lg:px-8
        "
      >

        {/* TOP */}
        <div className="mx-auto max-w-5xl text-center">

          {/* BADGE */}
          <motion.div
            variants={fadeUp}
            transition={{
              duration: 0.45,
            }}
            className="
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#8A8599]/20
              bg-[#1B1723]/60
              px-4
              py-2
              backdrop-blur-xl
            "
          >

            <div className="h-2 w-2 rounded-full bg-[#B497BD]" />

            <span
              className="
                text-[10px]
                tracking-[3px]
                text-gray-300
              "
            >
              The CX Command Center
            </span>
          </motion.div>

          {/* HEADING */}
          <motion.h2
            variants={fadeUp}
            transition={{
              duration: 0.55,
            }}
            className="
              mx-auto
              max-w-[1200px]
              text-center
              text-[34px]
              font-black
              leading-[1]
              tracking-[-2px]
              sm:text-[38px]
              md:text-[44px]
              lg:text-[54px]
            "
          >

            <span className="bg-gradient-to-r from-[#F5F1FF] to-[#A8A2BA] bg-clip-text text-transparent">
              Unify your Customer Service,
            </span>

            <br />

            <span className="bg-gradient-to-r from-[#B497BD] to-[#8A8599] bg-clip-text text-transparent">
              Analytics, Automation, and AI
            </span>

            <br />

            <span className="bg-gradient-to-r from-[#8A8599] to-[#F5F1FF] bg-clip-text text-transparent">
              into one intelligent platform.
            </span>
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            variants={fadeUp}
            transition={{
              duration: 0.6,
            }}
            className="
              mx-auto
              mt-6
              max-w-4xl
              text-sm
              leading-8
              text-[#A8A2BA]
              sm:text-base
              lg:text-[18px]
            "
          >
            AltCtrl.Digital is the AI-native command center for modern
            customer experience operations — unifying communication,
            workflows, analytics, and AI intelligence in one platform.
          </motion.p>
        </div>

        {/* STATS */}
        <div
          className="
            mt-14
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
                variants={fadeUp}
                transition={{
                  duration: 0.4,
                  delay: index * 0.04,
                }}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-[24px]
                  border
                  ${item.border}
                  bg-[#171320]/70
                  p-5
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-white/10
                `}
              >

                {/* HOVER LIGHT */}
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
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-2xl
                      bg-gradient-to-br
                      ${item.color}
                      ${item.iconColor}
                      transition-transform
                      duration-300
                      group-hover:scale-105
                    `}
                  >

                    <Icon size={17} />
                  </div>

                  {/* VALUE */}
                  <h3
                    className={`
                      mt-3
                      text-[20px]
                      font-black
                      tracking-[-1px]
                      ${item.iconColor}
                    `}
                  >
                    {item.value}
                  </h3>

                  {/* LABEL */}
                  <p
                    className="
                      mt-1
                      text-[12px]
                      leading-5
                      text-gray-400
                    "
                  >
                    {item.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}