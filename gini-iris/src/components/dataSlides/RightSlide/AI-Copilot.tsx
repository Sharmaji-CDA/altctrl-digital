"use client";

import {
  Sparkles,
  User,
  MessageSquareQuote,
  HeartHandshake,
  TrendingUp,
  Zap,
} from "lucide-react";

import { motion } from "framer-motion";
import RightSlideWrapper from "./RightSlideWrapper";

const insights = [
  {
    icon: HeartHandshake,
    title: "Customer Risk",
    desc:
      "High churn risk detected due to frustration.",
    color:
      "text-red-500 border-red-400/20 bg-red-400/[0.05]",
  },

  {
    icon: TrendingUp,
    title: "Upsell Opportunity",
    desc:
      "Customer eligible for Pro Gamer bundle.",
    color:
      "text-emerald-500 border-emerald-400/20 bg-emerald-400/[0.05]",
  },

  {
    icon: Zap,
    title: "Action Alert",
    desc:
      "Offer a 10% goodwill coupon.",
    color:
      "text-orange-500 border-orange-400/20 bg-orange-400/[0.05]",
  },
];

export default function AICopilot() {

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
              <Sparkles className="h-5 w-5 text-white/80" />
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
                Agent Co-Pilot
              </h3>

              <p
                className="
                mt-1
                text-[8px]
                text-white/40

                sm:text-[9px]
                "
              >
                Real-time AI guidance for agents.
              </p>

            </div>
          </div>

          {/* CUSTOMER MESSAGE */}
          <motion.div
            whileHover={{
              y: -2,
            }}
            className="
            mt-3
            rounded-lg
            border
            border-white/10
            bg-white/95
            p-2.5
            shadow-[0_4px_14px_rgba(0,0,0,0.04)]
            "
          >

            <div className="flex items-start gap-2">

              {/* ICON */}
              <div
                className="
                flex
                h-6
                w-6
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-black/[0.04]
                "
              >
                <User className="h-3 w-3 text-black/65" />
              </div>

              {/* MESSAGE */}
              <div
                className="
                rounded-lg
                bg-black/[0.04]
                px-2.5
                py-2
                "
              >

                <p
                  className="
                  text-[8px]
                  leading-4
                  text-black/80

                  sm:text-[9px]
                  "
                >
                  "My new keyboard isn't working and I'm
                  getting frustrated."
                </p>

              </div>

            </div>

          </motion.div>

          {/* SUGGESTED REPLY */}
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

              <MessageSquareQuote className="h-3 w-3 text-black/75" />

              <h4
                className="
                text-[9px]
                font-medium
                text-black/85

                sm:text-[10px]
                "
              >
                Suggested Reply
              </h4>

            </div>

            <p
              className="
              mt-2
              text-[8px]
              italic
              leading-4
              text-black/75

              sm:text-[9px]
              "
            >
              "I understand your frustration and I'm here
              to help resolve this quickly."
            </p>

          </motion.div>

          {/* INSIGHTS */}
          <div
            className="
            mt-2
            space-y-2
            "
          >

            {insights.map((item, index) => {

              const Icon = item.icon;

              return (

                <motion.div
                  key={index}
                  whileHover={{
                    y: -2,
                  }}
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.05,
                  }}
                  className={`
                  rounded-lg
                  border
                  bg-white/95
                  p-2.5
                  shadow-[0_4px_14px_rgba(0,0,0,0.04)]

                  ${item.color}
                  `}
                >

                  {/* HEADER */}
                  <div className="flex items-center gap-1.5">

                    <Icon className="h-3 w-3" />

                    <h4
                      className="
                      text-[9px]
                      font-medium

                      sm:text-[10px]
                      "
                    >
                      {item.title}
                    </h4>

                  </div>

                  {/* CONTENT */}
                  <p
                    className="
                    mt-1.5
                    text-[8px]
                    italic
                    leading-4
                    text-black/75

                    sm:text-[9px]
                    "
                  >
                    {item.desc}
                  </p>

                </motion.div>
              );
            })}

          </div>

        </div>

      </motion.div>

    </RightSlideWrapper>
  );
}