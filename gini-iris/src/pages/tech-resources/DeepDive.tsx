"use client";

import { motion } from "framer-motion";

import {
  LayoutPanelTop,
  Cpu,
  Database,
  ShieldCheck,
  ArrowRight,
  Layers3,
} from "lucide-react";

const architectureCards = [
  {
    icon: LayoutPanelTop,
    title: "FRONTEND ARCHITECTURE",
    description:
      "Built with Next.js, React, and Tailwind CSS. Learn about our component library.",
    glow:
      "from-cyan-400/20 via-teal-400/10 to-emerald-400/10",
    iconColor: "text-cyan-300",
  },

  {
    icon: Cpu,
    title: "BACKEND SERVICES",
    description:
      "An overview of our microservices, data flow, and server-side logic.",
    glow:
      "from-teal-400/20 via-cyan-400/10 to-sky-400/10",
    iconColor: "text-teal-300",
  },

  {
    icon: Database,
    title: "DATABASE SCHEMA",
    description:
      "Explore the data models and relationships that power the platform.",
    glow:
      "from-sky-400/20 via-cyan-400/10 to-teal-400/10",
    iconColor: "text-sky-300",
  },

  {
    icon: ShieldCheck,
    title: "AUTHENTICATION & SECURITY",
    description:
      "How we handle user sessions, permissions, and data protection.",
    glow:
      "from-emerald-400/20 via-cyan-400/10 to-teal-400/10",
    iconColor: "text-emerald-300",
  },
];

/* LIGHTWEIGHT MOTION */
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function ArchitectureDeepDive() {
  return (
    <section className="relative overflow-hidden bg-[#04080d] px-4 py-12 sm:px-8 sm:py-14 lg:px-16">

      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* MAIN GLOW */}
        <div
          className="
            absolute
            left-[-10%]
            top-[5%]
            h-[280px]
            w-[280px]
            rounded-full
            bg-cyan-400/10
            blur-3xl
            animate-pulse
          "
        />

        {/* SECONDARY GLOW */}
        <div
          className="
            absolute
            right-[-5%]
            top-[10%]
            h-[260px]
            w-[260px]
            rounded-full
            bg-teal-400/10
            blur-3xl
            animate-pulse
          "
          style={{
            animationDuration: "6s",
          }}
        />

        {/* GRID */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:44px_44px]" />
        </div>

        {/* TOP LIGHT */}
        <div className="absolute inset-x-0 top-0 h-[160px] bg-gradient-to-b from-cyan-400/[0.03] to-transparent" />
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
        className="px-4 sm:px-6 lg:px-8"
      >

        {/* HEADER */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

          <motion.div
            variants={fadeUp}
            transition={{
              duration: 0.5,
            }}
          >

            {/* TAG */}
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-cyan-400/10
                bg-cyan-400/[0.04]
                px-4
                py-2
                backdrop-blur-md
              "
            >

              <Layers3
                size={12}
                className="text-cyan-300"
              />

              <span className="text-[8px] font-semibold uppercase tracking-[2px] text-cyan-200">
                Resource Layer 03
              </span>
            </div>

            {/* TITLE */}
            <h2
              className="
                mt-2
                bg-gradient-to-r
                from-white
                via-cyan-100
                to-cyan-300
                bg-clip-text
                text-[34px]
                font-black
                tracking-[-2px]
                text-transparent
                sm:text-[44px]
                lg:text-[52px]
              "
            >
              Architecture Deep Dive
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                mt-1
                max-w-xl
                text-[14px]
                leading-[1.8]
                text-slate-400
                sm:text-[15px]
              "
            >
              Peek under the hood and understand how everything works together.
            </p>
          </motion.div>

          {/* HEADER LINE */}
          <motion.div
            variants={fadeUp}
            transition={{
              duration: 0.5,
            }}
            className="
              hidden
              h-[1px]
              flex-1
              bg-gradient-to-r
              from-cyan-400/20
              to-transparent
              lg:block
            "
          />
        </div>

        {/* CARDS */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

          {architectureCards.map((card) => {

            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                variants={fadeUp}
                transition={{
                  duration: 0.45,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[24px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-5
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-cyan-400/20
                "
              >

                {/* HOVER GLOW */}
                <div
                  className={`
                    absolute
                    inset-0
                    bg-gradient-to-br
                    ${card.glow}
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  `}
                />

                {/* TOP LIGHT */}
                <div
                  className="
                    absolute
                    inset-x-0
                    top-0
                    h-[1px]
                    bg-gradient-to-r
                    from-transparent
                    via-cyan-300/40
                    to-transparent
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                />

                {/* CONTENT */}
                <div className="relative z-10 flex h-full flex-col">

                  {/* ICON */}
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-cyan-400/10
                      bg-white/[0.04]
                      transition-transform
                      duration-300
                      group-hover:scale-105
                    "
                  >

                    <Icon
                      size={20}
                      className={card.iconColor}
                    />
                  </div>

                  {/* TITLE */}
                  <div className="mb-4">
                    <h3
                      className="
                        mt-5
                        text-[18px]
                        font-black
                        leading-[1.35]
                        text-white
                      "
                    >
                      {card.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p
                      className="
                        mt-2
                        text-[14px]
                        leading-[1.8]
                        text-slate-400
                      "
                    >
                      {card.description}
                    </p>
                  </div>

                  {/* BUTTON */}
                  <button
                    className="
                      group/button
                      mt-auto
                      flex
                      h-[46px]
                      items-center
                      justify-center
                      gap-2
                      rounded-2xl
                      border
                      border-cyan-400/10
                      bg-[#070b11]
                      px-4
                      text-[13px]
                      font-semibold
                      text-white
                      transition-all
                      duration-300
                      hover:border-cyan-400/20
                      hover:bg-cyan-400/10
                    "
                  >

                    Explore Spec

                    <ArrowRight
                      size={14}
                      className="
                        transition-transform
                        duration-300
                        group-hover/button:translate-x-1
                      "
                    />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}