"use client";

import {
  PlugZap,
  MessageSquare,
  ThumbsUp,
  Ticket,
  Mail,
  Phone,
  Cloud,
  BriefcaseBusiness,
  LifeBuoy,
  Users,
  Gem,
} from "lucide-react";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import RightSlideWrapper from "./RightSlideWrapper";

const integrations = [
  {
    icon: MessageSquare,
    title: "Live Chat",
    desc: "Web Chatbots",
  },

  {
    icon: ThumbsUp,
    title: "Social Media",
    desc: "Public Feeds",
  },

  {
    icon: Ticket,
    title: "Ticketing",
    desc: "ITSM Platforms",
  },

  {
    icon: Mail,
    title: "Email",
    desc: "Mail Servers",
  },

  {
    icon: Users,
    title: "Salesforce",
    desc: "CRM",
  },

  {
    icon: Phone,
    title: "Telephony",
    desc: "Voice Systems",
  },

  {
    icon: LifeBuoy,
    title: "Zendesk",
    desc: "Support Suite",
  },

  {
    icon: Cloud,
    title: "Azure",
    desc: "Cloud Services",
  },

  {
    icon: BriefcaseBusiness,
    title: "MS Dynamics",
    desc: "Business Apps",
  },
];

export default function Integrations() {

  const [rotation, setRotation] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setRotation((prev) => prev + 40);

    }, 2200);

    return () => clearInterval(interval);

  }, []);

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
            <PlugZap className="h-5 w-5 text-white/80" />
          </div>

          <div>

            <h3
              className="
              text-[14px]
              font-semibold
              tracking-[-0.2px]
              text-white
              "
            >
              Seamless Integrations
            </h3>

            <p
              className="
              mt-1
              text-[8px]
              text-white/40
              "
            >
              Connect your ecosystem effortlessly.
            </p>

          </div>

        </div>

        {/* ORBIT */}
        <div
          className="
          relative
          mx-auto
          mt-6
          h-[330px]
          w-[260px]
          sm:w-[280px]
          lg:w-[320px]
          "
        >

          {/* RINGS */}
          <div
            className="
            absolute
            inset-0
            rounded-full
            border
            border-dashed
            border-white/10
            "
          />

          <div
            className="
            absolute
            left-1/2
            top-1/2
            h-[150px]
            w-[150px]
            sm:w-[160px]
            lg:w-[170px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-white/5
            "
          />

          {/* CENTER */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="
            absolute
            left-1/2
            top-1/2
            z-20
            flex
            h-[70px]
            w-[70px]
            -translate-x-1/2
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            bg-[#111116]
            shadow-[0_20px_60px_rgba(0,0,0,0.25)]
            "
          >

            <Gem className="h-8 w-8 text-white" />

          </motion.div>

          {/* ITEMS */}
          {integrations.map((item, index) => {

            const Icon = item.icon;

            const angle =
              ((360 / integrations.length) * index + rotation) *
              (Math.PI / 180);

            const radius = 145;

            const x = Math.cos(angle) * radius;

            const y = Math.sin(angle) * radius;

            const isFront =
              Math.sin(angle) > 0.9;

            return (

              <motion.div
                key={index}
                animate={{
                  x,
                  y,
                  scale: isFront ? 1.12 : 0.88,
                  opacity: isFront ? 1 : 0.55,
                }}
                transition={{
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                absolute
                left-1/2
                top-1/2
                z-10
                flex
                -translate-x-1/2
                -translate-y-1/2
                flex-col
                items-center
                "
              >

                {/* CARD */}
                <div
                  className={`
                  flex
                  h-[30px]
                  w-[30px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  backdrop-blur-xl
                  transition-all
                  duration-500

                  ${
                    isFront
                      ? `
                      border-white/20
                      bg-white
                      shadow-[0_12px_30px_rgba(255,255,255,0.18)]
                      `
                      : `
                      border-white/10
                      bg-white/[0.08]
                      `
                  }
                  `}
                >

                  <Icon
                    className={`
                    h-5
                    w-5

                    ${
                      isFront
                        ? "text-black"
                        : "text-white/70"
                    }
                    `}
                  />

                </div>

                {/* TEXT */}
                <div className="mt-2 text-center">

                  <h4
                    className={`
                    text-[10px]
                    font-medium
                    transition-all

                    ${
                      isFront
                        ? "text-white"
                        : "text-white/80"
                    }
                    `}
                  >
                    {item.title}
                  </h4>

                  <p
                    className={`
                    mt-0.5
                    text-[7px]

                    ${
                      isFront
                        ? "text-white/70"
                        : "text-white/60"
                    }
                    `}
                  >
                    {item.desc}
                  </p>

                </div>

              </motion.div>
            );
          })}

        </div>

      </motion.div>
    </RightSlideWrapper>

  );
}