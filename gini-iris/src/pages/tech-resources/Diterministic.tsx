"use client";

import { motion } from "framer-motion";

import {
  Boxes,
  Webhook,
  Code2,
  ArrowRight,
} from "lucide-react";

const apiCards = [
  {
    icon: Code2,
    title: "REST API REFERENCE",
    description:
      "Detailed endpoints for programmatic access to platform resources.",
    glow:
      "from-[#f472b6]/20 via-[#f9a8d4]/10 to-[#c4b5fd]/10",
    iconColor: "text-[#f472b6]",
    isPrimary: false
  },

  {
    icon: Webhook,
    title: "REAL-TIME EVENTS",
    description:
      'Subscribe to events like "Interaction Ended" to trigger workflows.',
    glow:
      "from-[#c4b5fd]/20 via-[#f9a8d4]/10 to-[#f472b6]/10",
    iconColor: "text-[#c4b5fd]",
    isPrimary: false
  },

  {
    icon: Boxes,
    title: "TYPESCRIPT SDK",
    description:
      "Convenient wrappers to simplify integrations with your applications.",
    glow:
      "from-[#fbcfe8]/20 via-[#ddd6fe]/10 to-[#f472b6]/10",
    iconColor: "text-[#fbcfe8]",
    isPrimary: false
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

export default function ApiSdkSection() {

  return (
    <section className="relative overflow-hidden bg-[#0b0d14] px-4 py-12 sm:px-8 sm:py-14 lg:px-16">

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
            bg-[#f472b6]/10
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
            bg-[#c4b5fd]/10
            blur-3xl
            animate-pulse
          "
          style={{
            animationDuration: "6s",
          }}
        />

        {/* GRID */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:42px_42px]" />
        </div>

        {/* TOP LIGHT */}
        <div className="absolute inset-x-0 top-0 h-[140px] bg-gradient-to-b from-[#f472b6]/[0.03] to-transparent" />
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
                border-white/10
                bg-white/[0.04]
                px-4
                py-2
                backdrop-blur-md
              "
            >

              <Boxes
                size={12}
                className="text-[#f9a8d4]"
              />

              <span className="text-[8px] font-semibold uppercase tracking-[2px] text-[#fbcfe8]">
                Resource Layer 02
              </span>
            </div>

            {/* TITLE */}
            <h2
              className="
                mt-2
                bg-gradient-to-r
                from-white
                via-[#fbcfe8]
                to-[#f472b6]
                bg-clip-text
                text-[34px]
                font-black
                tracking-[-2px]
                text-transparent
                sm:text-[44px]
              "
            >
              API & SDKs
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
              Integrate and extend the platform with robust APIs.
            </p>
          </motion.div>

          {/* LINE */}
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
              from-[#f472b6]/20
              to-transparent
              lg:block
            "
          />
        </div>

        {/* CARDS */}
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">

          {apiCards.map((card) => {

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
                  flex
                  min-h-[320px]
                  flex-col
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
                  hover:border-[#f472b6]/20
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
                    via-[#f9a8d4]/40
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
                      border-white/10
                      bg-white/[0.05]
                      transition-transform
                      duration-300
                      group-hover:scale-105
                    "
                  >

                    <Icon
                      size={19}
                      className={card.iconColor}
                    />
                  </div>

                  {/* TITLE */}
                  <h3
                    className="
                      mt-5
                      text-[19px]
                      font-black
                      leading-[1.3]
                      text-white
                    "
                  >
                    {card.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p
                    className="
                      mt-3
                      flex-1
                      text-[14px]
                      leading-[1.8]
                      text-slate-300
                    "
                  >
                    {card.description}
                  </p>

                  {/* BUTTON */}
                  <button
                    className={`
                      group/button
                      mt-auto
                      flex
                      h-[46px]
                      items-center
                      justify-center
                      gap-2
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.06]
                      px-4
                      text-[13px]
                      font-semibold
                      text-white
                      backdrop-blur-md
                      transition-all
                      duration-300
                      ${
                        card.isPrimary
                          ? `
                            border-[#c4b5fd]/20
                            bg-gradient-to-r
                            from-[#ec4899]
                            to-[#f43f5e]
                            text-white
                          `
                          : `
                            border-[#c4b5fd]/10
                            bg-[#070b11]
                            text-white
                            hover:bg-gradient-to-r
                            hover:from-[#f472b6]/20
                            hover:to-[#c4b5fd]/20
                          `
                      }
                    `}
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