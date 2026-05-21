"use client";

import {
  Smile,
  ThumbsUp,
  ThumbsDown,
} from "lucide-react";

import { motion } from "framer-motion";
import RightSlideWrapper from "./RightSlideWrapper";

const metrics = [
  {
    label: "Happiness",
    score: "9/10",
    width: "90%",
  },

  {
    label: "Politeness",
    score: "10/10",
    width: "100%",
  },

  {
    label: "Patience",
    score: "8/10",
    width: "80%",
  },

  {
    label: "Satisfaction",
    score: "9/10",
    width: "90%",
  },

  {
    label: "Urgency",
    score: "2/10",
    width: "20%",
  },

  {
    label: "Frustration",
    score: "1/10",
    width: "10%",
  },
];

export default function SentimentAnalysis() {

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
        min-h-[500px]
        overflow-hidden
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
              h-5
              w-5
              items-center
              justify-center
              rounded-md
              border
              border-white/10
              bg-white/[0.05]
              "
            >
              <Smile className="h-2.5 w-2.5 text-white/80" />
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
                Real-time Sentiment Analysis
              </h3>

              <p
                className="
                mt-1
                text-[8px]
                text-white/40

                sm:text-[9px]
                "
              >
                Live emotional conversation insights.
              </p>

            </div>
          </div>

          {/* TOP STATS */}
          <div
            className="
            mt-3
            grid
            grid-cols-2
            gap-2
            "
          >

            {/* OVERALL SENTIMENT */}
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

              <p
                className="
                text-center
                text-[8px]
                text-black/45

                sm:text-[9px]
                "
              >
                Overall Sentiment
              </p>

              <h2
                className="
                mt-1
                text-center
                text-[18px]
                font-black
                leading-none
                text-emerald-500

                sm:text-[24px]
                "
              >
                Positive
              </h2>

            </motion.div>

            {/* SCORE */}
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

              <p
                className="
                text-center
                text-[8px]
                text-black/45

                sm:text-[9px]
                "
              >
                Sentiment Score
              </p>

              <h2
                className="
                mt-1
                text-center
                text-[18px]
                font-black
                leading-none
                text-black/90

                sm:text-[24px]
                "
              >
                88%
              </h2>

            </motion.div>
          </div>

          {/* PARAMETER SCORING */}
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
              text-[11px]
              font-medium
              text-black/90

              sm:text-[12px]
              "
            >
              Parameter Scoring
            </h4>

            <div
              className="
              mt-2
              space-y-1.5
              "
            >

              {metrics.map((item, index) => {

                return (

                  <div key={index}>

                    {/* LABEL ROW */}
                    <div
                      className="
                      mb-1
                      flex
                      items-center
                      justify-between
                      "
                    >

                      <p
                        className="
                        text-[8px]
                        text-black/65

                        sm:text-[9px]
                        "
                      >
                        {item.label}
                      </p>

                      <p
                        className="
                        text-[8px]
                        font-medium
                        text-black/85

                        sm:text-[9px]
                        "
                      >
                        {item.score}
                      </p>

                    </div>

                    {/* BAR */}
                    <div
                      className="
                      h-[5px]
                      overflow-hidden
                      rounded-full
                      bg-black/[0.06]
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
                          delay: index * 0.08,
                        }}
                        className="
                        h-full
                        rounded-full
                        bg-black/90
                        "
                      />

                    </div>

                  </div>
                );
              })}

            </div>
          </motion.div>

          {/* HIGHLIGHTS */}
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
              text-[11px]
              font-medium
              text-black/90

              sm:text-[12px]
              "
            >
              Interaction Highs & Lows
            </h4>

            <div
              className="
              mt-2
              space-y-2
              "
            >

              {/* HIGHLIGHT */}
              <div>

                <div className="flex items-center gap-1.5">

                  <ThumbsUp className="h-3 w-3 text-emerald-500" />

                  <p
                    className="
                    text-[9px]
                    font-medium
                    text-black/85

                    sm:text-[10px]
                    "
                  >
                    Highlight
                  </p>

                </div>

                <p
                  className="
                  mt-1
                  text-[7px]
                  italic
                  leading-3
                  text-black/45

                  sm:text-[8px]
                  sm:leading-4
                  "
                >
                  “Good morning, Mr. Doe. Thank you for
                  calling. I can certainly help you with that.”
                </p>

              </div>

              {/* LOWLIGHT */}
              <div>

                <div className="flex items-center gap-1.5">

                  <ThumbsDown className="h-3 w-3 text-red-500" />

                  <p
                    className="
                    text-[9px]
                    font-medium
                    text-black/85

                    sm:text-[10px]
                    "
                  >
                    Lowlight
                  </p>

                </div>

                <p
                  className="
                  mt-1
                  text-[7px]
                  italic
                  leading-3
                  text-black/45

                  sm:text-[8px]
                  sm:leading-4
                  "
                >
                  “Alright. And what is the reason for your
                  appointment today?”
                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </motion.div>

    </RightSlideWrapper>
  );
}