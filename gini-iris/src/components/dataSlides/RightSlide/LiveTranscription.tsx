"use client";

import {
  FileText,
  User,
  Bot,
  Sparkles,
  BadgeCheck,
} from "lucide-react";

import { motion } from "framer-motion";
import RightSlideWrapper from "./RightSlideWrapper";

const conversations = [
  {
    type: "user",
    text:
      "Hi, I'd like to check the status of my recent order, number 582-1985. I'm getting a bit worried.",
  },

  {
    type: "bot",
    text:
      "Of course, I can help with that. Let me pull up order 582-1985 for you right now.",
  },

  {
    type: "user",
    text:
      "Okay, thank you. The website said it shipped, but the tracking hasn't updated in three days.",
  },

  {
    type: "bot",
    text:
      "I see that here. It looks like there's a slight delay at the sorting facility. It's now scheduled for delivery tomorrow before 5 PM.",
  },
];

export default function LiveTranscription() {

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
            <FileText className="h-5 w-5 text-white/80" />
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
              Live Transcription & Analysis
            </h3>

            <p
              className="
              mt-1
              text-[8px]
              text-white/40

              sm:text-[9px]
              "
            >
              Real-time speech-to-text insights.
            </p>

          </div>
        </div>

        {/* CHAT PANEL */}
        <motion.div
          whileHover={{
            y: -2,
          }}
          className="
          mt-3
          overflow-hidden
          rounded-lg
          border
          border-white/10
          bg-white/95
          shadow-[0_4px_14px_rgba(0,0,0,0.04)]
          "
        >

          {/* MESSAGES */}
          <div
            className="
            space-y-3
            p-2.5
            "
          >

            {conversations.map((item, index) => {

              return (

                <motion.div
                  key={index}
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
                  flex
                  items-start
                  gap-2

                  ${
                    item.type === "bot"
                      ? "justify-end"
                      : "justify-start"
                  }
                  `}
                >

                  {/* USER */}
                  {item.type === "user" && (

                    <>

                      <div
                        className="
                        mt-0.5
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-black/[0.05]
                        "
                      >
                        <User className="h-5 w-5 text-black/60" />
                      </div>

                      <div
                        className="
                        max-w-[82%]
                        rounded-lg
                        bg-black/[0.04]
                        px-2.5
                        py-2
                        "
                      >

                        <p
                          className="
                          text-[7px]
                          leading-3
                          text-black/75
                          sm:text-[8px]
                          sm:leading-4
                          lg:text-[10px]
                          "
                        >
                          "{item.text}"
                        </p>

                      </div>

                    </>
                  )}

                  {/* BOT */}
                  {item.type === "bot" && (

                    <>

                      <div
                        className="
                        max-w-[82%]
                        rounded-lg
                        bg-[#111116]
                        px-2.5
                        py-2
                        "
                      >

                        <p
                          className="
                          text-[7px]
                          font-medium
                          leading-3
                          text-white
                          sm:text-[8px]
                          sm:leading-4
                          lg:text-[10px]
                          "
                        >
                          "{item.text}"
                        </p>

                      </div>

                      <div
                        className="
                        mt-0.5
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-black/[0.05]
                        "
                      >
                        <Bot className="h-5 w-5 text-black/60" />
                      </div>

                    </>
                  )}

                </motion.div>
              );
            })}

          </div>

          {/* ANALYSIS */}
          <div
            className="
            border-t
            border-black/10
            px-2.5
            py-3
            "
          >

            {/* TITLE */}
            <div className="flex items-center gap-1.5">

              <Sparkles className="h-3 w-3 text-black/70" />

              <p
                className="
                text-[9px]
                font-medium
                text-black/80

                sm:text-[10px]
                "
              >
                Live Analysis
              </p>

            </div>

            {/* TAGS */}
            <div
              className="
              mt-2
              flex
              flex-wrap
              gap-1.5
              "
            >

              {/* TAG */}
              <div
                className="
                rounded-full
                border
                border-black/10
                bg-black/[0.03]
                px-2
                py-1
                text-[7px]
                font-medium
                text-black/75

                sm:text-[8px]
                "
              >
                🎯 Order Status
              </div>

              {/* TAG */}
              <div
                className="
                rounded-full
                border
                border-black/10
                bg-black/[0.03]
                px-2
                py-1
                text-[7px]
                font-medium
                text-black/75

                sm:text-[8px]
                "
              >
                📦 Order# 582-1985
              </div>

              {/* TAG */}
              <div
                className="
                flex
                items-center
                gap-1
                rounded-full
                border
                border-emerald-500/20
                bg-emerald-500/10
                px-2
                py-1
                text-[7px]
                font-medium
                text-emerald-600

                sm:text-[8px]
                "
              >

                <BadgeCheck className="h-2.5 w-2.5" />

                Resolved

              </div>

            </div>

          </div>

        </motion.div>

      </motion.div>

    </RightSlideWrapper>
  );
}