"use client";

import {
  AudioWaveform,
  BrainCircuit,
  PhoneCall,
  Handshake,
} from "lucide-react";

import { motion } from "framer-motion";
import RightSlideWrapper from "./RightSlideWrapper";

const sttProviders = [
  {
    title: "Google Gemini",
    desc:
      "High-accuracy transcription and natural voice synthesis.",
  },

  {
    title: "Azure AI Speech",
    desc:
      "Enterprise-grade speech and language services.",
  },

  {
    title: "AWS Lex & Polly",
    desc:
      "Conversational AI and lifelike speech applications.",
  },
];

const telephonyProviders = [
  {
    title: "AWS Chime SDK",
    desc:
      "Real-time voice and video communication APIs.",
  },

  {
    title: "Azure Communication",
    desc:
      "Cross-platform communication experiences.",
  },

  {
    title: "SIPREC",
    desc:
      "Call recording and compliance integrations.",
  },
];

const telecomLogos = [
  {
    color: "bg-amber-500",
  },

  {
    color: "bg-orange-500",
  },

  {
    color: "bg-sky-500",
  },

  {
    color: "bg-red-500",
  },

  {
    color: "bg-cyan-500",
  },
];

export default function TranscriptionTTS() {

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
              <AudioWaveform className="h-5 w-5 text-white/80" />
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
                Voice Technology Choice
              </h3>

              <p
                className="
                mt-1
                text-[8px]
                text-white/40

                sm:text-[9px]
                "
              >
                Flexible integrations for speech and telephony.
              </p>

            </div>

          </div>

          {/* GRID */}
          <div
            className="
            mt-3
            grid
            grid-cols-1
            gap-2
            lg:grid-cols-2
            "
          >

            {/* STT / TTS */}
            <motion.div
              whileHover={{
                y: -2,
              }}
              className="
              rounded-lg
              border
              border-white/10
              bg-white/95
              p-3
              shadow-[0_4px_14px_rgba(0,0,0,0.04)]
              "
            >

              {/* TITLE */}
              <div className="flex items-center gap-2">

                <div
                  className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-lg
                  bg-black/[0.04]
                  "
                >
                  <BrainCircuit className="h-4 w-4 text-black/80" />
                </div>

                <div>

                  <h4
                    className="
                    text-[11px]
                    font-semibold
                    text-black/90

                    sm:text-[12px]
                    "
                  >
                    STT / TTS Providers
                  </h4>

                  <p
                    className="
                    mt-0.5
                    text-[7px]
                    text-black/45
                    sm:text-[8px]
                    "
                  >
                    AI-powered voice technologies.
                  </p>

                </div>

              </div>

              {/* CARDS */}
              <div className="mt-3 space-y-2">

                {sttProviders.map((item, index) => {

                  return (

                    <motion.div
                      key={index}
                      whileHover={{
                        y: -1,
                      }}
                      className="
                      rounded-lg
                      border
                      border-black/10
                      bg-black/[0.03]
                      p-2.5
                      "
                    >

                      <h5
                        className="
                        text-[9px]
                        font-semibold
                        text-black/85
                        sm:text-[10px]
                        "
                      >
                        {item.title}
                      </h5>

                      <p
                        className="
                        mt-1
                        text-[7px]
                        leading-3
                        text-black/45
                        sm:text-[8px]
                        "
                      >
                        {item.desc}
                      </p>

                    </motion.div>
                  );
                })}

              </div>

            </motion.div>

            {/* TELEPHONY */}
            <motion.div
              whileHover={{
                y: -2,
              }}
              className="
              rounded-lg
              border
              border-white/10
              bg-white/95
              p-3
              shadow-[0_4px_14px_rgba(0,0,0,0.04)]
              "
            >

              {/* TITLE */}
              <div className="flex items-center gap-2">

                <div
                  className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-lg
                  bg-black/[0.04]
                  "
                >
                  <PhoneCall className="h-4 w-4 text-black/80" />
                </div>

                <div>

                  <h4
                    className="
                    text-[11px]
                    font-semibold
                    text-black/90
                    sm:text-[12px]
                    "
                  >
                    Telephony / CPaaS
                  </h4>

                  <p
                    className="
                    mt-0.5
                    text-[7px]
                    text-black/45
                    sm:text-[8px]
                    "
                  >
                    Communication and voice infrastructure.
                  </p>

                </div>

              </div>

              {/* CARDS */}
              <div className="mt-3 space-y-2">

                {telephonyProviders.map((item, index) => {

                  return (

                    <motion.div
                      key={index}
                      whileHover={{
                        y: -1,
                      }}
                      className="
                      rounded-lg
                      border
                      border-black/10
                      bg-black/[0.03]
                      p-2.5
                      "
                    >

                      <h5
                        className="
                        text-[9px]
                        font-semibold
                        text-black/85
                        sm:text-[10px]
                        "
                      >
                        {item.title}
                      </h5>

                      <p
                        className="
                        mt-1
                        text-[7px]
                        leading-3
                        text-black/45
                        sm:text-[8px]
                        "
                      >
                        {item.desc}
                      </p>

                    </motion.div>
                  );
                })}

              </div>

            </motion.div>

          </div>

          {/* FOOTER */}
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
            p-2
            shadow-[0_4px_14px_rgba(0,0,0,0.04)]
            "
          >

            {/* TITLE */}
            <div className="flex items-center gap-2">

              <Handshake className="h-4 w-4 text-black/75" />

              <h4
                className="
                text-[10px]
                font-semibold
                text-black/90

                sm:text-[11px]
                "
              >
                Telecom Integrations
              </h4>

            </div>

            {/* LOGOS */}
            <div
              className="
              mt-4
              flex
              flex-wrap
              items-center
              justify-center
              gap-5
              "
            >

              {telecomLogos.map((item, index) => {

                return (

                  <motion.div
                    key={index}
                    animate={{
                      y: [0, -4, 0],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                    className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white
                    bg-white
                    shadow-[0_6px_18px_rgba(0,0,0,0.08)]
                    "
                  >

                    <div
                      className={`
                      h-4
                      w-4
                      rounded-full
                      ${item.color}
                      `}
                    />

                  </motion.div>
                );
              })}

            </div>

          </motion.div>

      </motion.div>

    </RightSlideWrapper>
  );
}