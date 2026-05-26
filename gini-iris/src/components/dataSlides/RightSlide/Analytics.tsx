"use client";

import {
  BarChart3,
  Star,
  BadgeCheck,
  Phone,
  MessageSquare,
  Mail,
  Tags,
  Sparkles,
} from "lucide-react";

import { motion } from "framer-motion";
import RightSlideWrapper from "./RightSlideWrapper";

const channels = [
  {
    icon: Phone,
    value: "6.5k",
    width: "68%",
    color: "text-blue-500",
  },

  {
    icon: MessageSquare,
    value: "2.5k",
    width: "30%",
    color: "text-green-500",
  },

  {
    icon: Mail,
    value: "1.0k",
    width: "10%",
    color: "text-orange-500",
  },
];

const voiceTags = [
  "refund policy",
  "shipping delay",
  "product setup",
  "billing error",
  "excellent service",
];

export default function Analytics() {

  return (

    <RightSlideWrapper>

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
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
        h-full
        min-h-[400px]
        overflow-hidden
        rounded-2xl
        border
        bg-gradient-to-r
        from-[#2A7B9B]
        to-[#EDDD53]
        p-4
        backdrop-blur-2xl
        "
      >

        <div
          className="
          relative
          z-10
          flex
          h-full
          flex-col
          "
        >

          {/* HEADER */}
          <div className="flex items-start gap-2">

            <div
              className="
              mt-0.5
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-md
              border
              border-white/10
              bg-white/[0.05]
              "
            >
              <BarChart3 className="h-5 w-5 text-white/80" />
            </div>

            <div>

              <h3
                className="
                text-[14px]
                font-semibold
                tracking-[-0.2px]
                text-white
                leading-none

                sm:text-[16px]
                "
              >
                Advanced Analytics
              </h3>

              <p
                className="
                mt-1
                text-[8px]
                text-white/40

                sm:text-[9px]
                "
              >
                Performance and trend intelligence.
              </p>

            </div>

          </div>

          {/* TOP METRICS */}
          <div
            className="
            mt-3
            grid
            grid-cols-2
            gap-2
            "
          >

            {/* CSAT */}
            <motion.div
              whileHover={{
                y: -2,
              }}
              className="
              rounded-lg
              border
              border-white/10
              bg-white/95
              p-2.5
              shadow-[0_4px_14px_rgba(0,0,0,0.04)]
              "
            >

              <div
                className="
                flex
                items-center
                justify-center
                gap-1.5
                text-black/45
                "
              >

                <Star className="h-3 w-3" />

                <p
                  className="
                  text-[8px]

                  sm:text-[9px]
                  "
                >
                  CSAT
                </p>

              </div>

              <h2
                className="
                mt-1
                text-center
                text-[22px]
                font-black
                leading-none
                text-emerald-500

                sm:text-[28px]
                "
              >
                94.2%
              </h2>

            </motion.div>

            {/* QUALITY */}
            <motion.div
              whileHover={{
                y: -2,
              }}
              className="
              rounded-lg
              border
              border-white/10
              bg-white/95
              p-2.5
              shadow-[0_4px_14px_rgba(0,0,0,0.04)]
              "
            >

              <div
                className="
                flex
                items-center
                justify-center
                gap-1.5
                text-black/45
                "
              >

                <BadgeCheck className="h-3 w-3" />

                <p
                  className="
                  text-[8px]

                  sm:text-[9px]
                  "
                >
                  Quality
                </p>

              </div>

              <h2
                className="
                mt-1
                text-center
                text-[22px]
                font-black
                leading-none
                text-blue-500

                sm:text-[28px]
                "
              >
                91.5%
              </h2>

            </motion.div>

          </div>

          {/* INTERACTIONS */}
          <motion.div
            whileHover={{
              y: -2,
            }}
            className="
            mt-2
            rounded-lg
            border
            border-white/10
            bg-white/95
            p-2.5
            shadow-[0_4px_14px_rgba(0,0,0,0.04)]
            "
          >

            <h4
              className="
              text-[9px]
              font-medium
              text-black/85

              sm:text-[10px]
              "
            >
              Interactions by Channel
            </h4>

            <div className="mt-3 space-y-2.5">

              {channels.map((item, index) => {

                const Icon = item.icon;

                return (

                  <div
                    key={index}
                    className="
                    flex
                    items-center
                    gap-2
                    "
                  >

                    {/* ICON */}
                    <div className="w-[14px]">

                      <Icon
                        className={`h-3 w-3 ${item.color}`}
                      />

                    </div>

                    {/* BAR */}
                    <div
                      className="
                      h-[6px]
                      flex-1
                      overflow-hidden
                      rounded-full
                      bg-black/[0.05]
                      "
                    >

                      <motion.div
                        initial={{
                          width: 0,
                        }}
                        animate={{
                          width: item.width,
                        }}
                        transition={{
                          duration: 1,
                          delay: index * 0.1,
                        }}
                        className="
                        h-full
                        rounded-full
                        bg-[#14141A]
                        "
                      />

                    </div>

                    {/* VALUE */}
                    <p
                      className="
                      w-[35px]
                      text-right
                      text-[7px]
                      font-semibold
                      text-black/80

                      sm:text-[8px]
                      "
                    >
                      {item.value}
                    </p>

                  </div>
                );
              })}

            </div>

          </motion.div>

          {/* VOICE OF CUSTOMER */}
          <motion.div
            whileHover={{
              y: -2,
            }}
            className="
            mt-2
            rounded-lg
            border
            border-white/10
            bg-white/95
            p-2.5
            shadow-[0_4px_14px_rgba(0,0,0,0.04)]
            "
          >

            <div className="flex items-center gap-1.5">

              <Tags className="h-3 w-3 text-black/65" />

              <h4
                className="
                text-[9px]
                font-medium
                text-black/85

                sm:text-[10px]
                "
              >
                Voice of Customer
              </h4>

            </div>

            <div
              className="
              mt-2
              flex
              flex-wrap
              gap-1.5
              "
            >

              {voiceTags.map((tag, index) => {

                return (

                  <motion.div
                    key={index}
                    whileHover={{
                      y: -1,
                    }}
                    className="
                    rounded-full
                    bg-black/[0.05]
                    px-2
                    py-1
                    text-[7px]
                    font-medium
                    text-black/75

                    sm:text-[8px]
                    "
                  >
                    "{tag}"
                  </motion.div>
                );
              })}

            </div>

          </motion.div>

          {/* AI IMPACT */}
          <motion.div
            whileHover={{
              y: -2,
            }}
            className="
            mt-2
            rounded-lg
            border
            border-white/10
            bg-white/95
            p-2.5
            shadow-[0_4px_14px_rgba(0,0,0,0.04)]
            "
          >

            <div className="flex items-center gap-1.5">

              <Sparkles className="h-3 w-3 text-black/65" />

              <h4
                className="
                text-[9px]
                font-medium
                text-black/85

                sm:text-[10px]
                "
              >
                AI Impact
              </h4>

            </div>

            <div
              className="
              mt-2
              grid
              grid-cols-2
              gap-2
              "
            >

              {/* ASSISTS */}
              <div
                className="
                rounded-lg
                bg-black/[0.03]
                p-2.5
                text-center
                "
              >

                <h2
                  className="
                  text-[18px]
                  font-black
                  leading-none
                  text-black/90

                  sm:text-[22px]
                  "
                >
                  1,200+
                </h2>

                <p
                  className="
                  mt-1
                  text-[7px]
                  text-black/40

                  sm:text-[8px]
                  "
                >
                  Assists Provided
                </p>

              </div>

              {/* TIME SAVED */}
              <div
                className="
                rounded-lg
                bg-black/[0.03]
                p-2.5
                text-center
                "
              >

                <h2
                  className="
                  text-[18px]
                  font-black
                  leading-none
                  text-black/90

                  sm:text-[22px]
                  "
                >
                  85 hrs
                </h2>

                <p
                  className="
                  mt-1
                  text-[7px]
                  text-black/40

                  sm:text-[8px]
                  "
                >
                  Time Saved
                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </motion.div>

    </RightSlideWrapper>
  );
}