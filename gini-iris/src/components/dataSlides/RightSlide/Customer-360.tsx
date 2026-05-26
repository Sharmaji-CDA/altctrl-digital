"use client";

import {
  UserRound,
  Crown,
  PhoneCall,
  FileText,
  CircleDot,
  Phone,
  Mail,
  Sparkles,
} from "lucide-react";

import { motion } from "framer-motion";
import RightSlideWrapper from "./RightSlideWrapper";

const interactions = [
  {
    icon: Phone,
    title: "Voice",
    desc: "Resolved billing issue.",
  },

  {
    icon: Mail,
    title: "Email",
    desc: "Inquiry about new feature.",
  },
];

const aiInsights = [
  "Interested in premium support upgrades.",
];

export default function Customer360() {

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
        className="flex
        flex-col
        h-full
        min-h-[400px]
        overflow-hidden
        overflow-y-auto
        rounded-2xl
        border
        bg-gradient-to-r
        from-[#2A7B9B]
        to-[#EDDD53]
        p-4
        backdrop-blur-2xl
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
              <UserRound className="h-5 w-5 text-white/80" />
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
                Customer 360° View
              </h3>

              <p
                className="
                mt-1
                text-[8px]
                text-white/40
                sm:text-[9px]
                "
              >
                Unified customer intelligence dashboard.
              </p>

            </div>

          </div>

          {/* PROFILE CARD */}
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

            <div className="flex items-center gap-3">

              {/* AVATAR */}
              <div
                className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-black/70
                text-[12px]
                font-semibold
                text-black/85
                "
              >
                JD
              </div>

              {/* INFO */}
              <div>

                <h4
                  className="
                  text-[12px]
                  font-semibold
                  leading-none
                  text-black/90

                  sm:text-[14px]
                  "
                >
                  John Doe
                </h4>

                <p
                  className="
                  mt-1
                  text-[7px]
                  text-black/40

                  sm:text-[8px]
                  "
                >
                  Last Contact: 2 days ago
                </p>

                {/* BADGE */}
                <div
                  className="
                  mt-2
                  inline-flex
                  items-center
                  gap-1
                  rounded-full
                  bg-[#15151C]
                  px-2
                  py-1
                  "
                >

                  <Crown className="h-2.5 w-2.5 text-white" />

                  <span
                    className="
                    text-[7px]
                    font-medium
                    text-white

                    sm:text-[8px]
                    "
                  >
                    Gold Member
                  </span>

                </div>

              </div>

            </div>

          </motion.div>

          {/* IVR HANDOFF */}
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

            {/* TOP */}
            <div className="flex items-center justify-between">

              <div className="flex items-center gap-1.5">

                <PhoneCall className="h-3 w-3 text-black/75" />

                <h4
                  className="
                  text-[9px]
                  font-medium
                  text-black/90
                  sm:text-[10px]
                  "
                >
                  IVR Handoff
                </h4>

              </div>

              <span className="text-[8px] text-black/60">
                ^
              </span>

            </div>

            {/* SUMMARY */}
            <div className="mt-2 flex items-start gap-2">

              <FileText className="mt-0.5 h-3 w-3 text-black/45" />

              <div className="flex items-center justify-center gap-2">

                <p
                  className="
                  text-[8px]
                  font-medium
                  text-black/75
                  sm:text-[9px]
                  "
                >
                  Summary:
                </p>

                <p
                  className="
                  mt-1
                  text-[7px]
                  leading-3
                  text-black/45
                  sm:text-[8px]
                  sm:leading-4
                  lg:text-[10px]
                  "
                >
                  Navigated to billing and checked their balance.
                </p>

              </div>

            </div>

            {/* INTENTS */}
            <div className="mt-2 flex items-start gap-2">

              <CircleDot className="mt-0.5 h-3 w-3 text-black/45" />

              <div className="flex flex-wrap items-center gap-1.5">

                <p
                  className="
                  text-[8px]
                  font-medium
                  text-black/75

                  sm:text-[9px]
                  "
                >
                  Intents:
                </p>

                <div
                  className="
                  rounded-full
                  bg-black/[0.05]
                  px-2
                  py-1
                  text-[7px]
                  font-medium
                  text-black/70

                  sm:text-[8px]
                  "
                >
                  CheckBalance
                </div>

                <div
                  className="
                  rounded-full
                  bg-black/[0.05]
                  px-2
                  py-1
                  text-[7px]
                  font-medium
                  text-black/70

                  sm:text-[8px]
                  "
                >
                  PaymentInfo
                </div>

              </div>

            </div>

          </motion.div>

          {/* RECENT INTERACTIONS */}
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

            {/* TOP */}
            <div className="flex items-center gap-1.5">

              <Sparkles className="h-3 w-3 text-black/75" />

              <h4
                className="
                text-[9px]
                font-medium
                text-black/90

                sm:text-[10px]
                "
              >
                Recent Interactions
              </h4>

            </div>

            {/* ITEMS */}
            <div className="mt-2 space-y-1.5">

              {interactions.map((item, index) => {

                const Icon = item.icon;

                return (

                  <div
                    key={index}
                    className="
                    flex
                    items-start
                    gap-2
                    rounded-lg
                    bg-black/[0.03]
                    p-2
                    "
                  >

                    <div
                      className="
                      flex
                      h-6
                      w-6
                      shrink-0
                      items-center
                      justify-center
                      rounded-md
                      bg-white
                      "
                    >
                      <Icon className="h-3 w-3 text-black/65" />
                    </div>

                    <div>

                      <h5
                        className="
                        text-[8px]
                        font-medium
                        text-black/85

                        sm:text-[9px]
                        "
                      >
                        {item.title}
                      </h5>

                      <p
                        className="
                        mt-0.5
                        text-[7px]
                        text-black/45

                        sm:text-[8px]
                        "
                      >
                        {item.desc}
                      </p>

                    </div>

                  </div>
                );
              })}

            </div>

          </motion.div>

          {/* AI INSIGHTS */}
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
              text-black/90
              sm:text-[10px]
              "
            >
              AI Insights
            </h4>

              {aiInsights.map((item, index) => {

                return (

                  <div
                    key={index}
                    className="
                    flex
                    items-start
                    gap-2
                    rounded-lg
                    border
                    border-red-400/20
                    bg-red-400/[0.05]
                    p-2
                    "
                  >

                    <div
                      className="
                      mt-1
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-red-500
                      "
                    />

                    <p
                      className="
                      text-[7px]
                      leading-3
                      text-black/70
                      sm:text-[8px]
                      sm:leading-4
                      "
                    >
                      {item}
                    </p>

                  </div>
                );
              })}

          </motion.div>

      </motion.div>

    </RightSlideWrapper>
  );
}