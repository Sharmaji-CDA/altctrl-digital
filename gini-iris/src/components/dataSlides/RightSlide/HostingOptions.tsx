"use client";

import {
  Cloud,
  Gem,
  Building2,
  CircleCheck,
  CircleAlert,
  DollarSign,
} from "lucide-react";

import { motion } from "framer-motion";
import RightSlideWrapper from "./RightSlideWrapper";

const saasAdvantages = [
  "Lower upfront cost",
  "Rapid deployment",
  "Automatic updates",
  "Managed infrastructure",
];

const saasConsiderations = [
  "Less control over residency",
  "Shared infrastructure",
];

const saasCosts = [
  "Monthly subscription",
  "Usage-based AI billing",
];

const selfHostedAdvantages = [
  "Full data control",
  "Custom security policies",
  "Custom integrations",
  "Private deployment",
];

const selfHostedConsiderations = [
  "Higher setup cost",
  "Internal IT required",
];

const selfHostedCosts = [
  "Cloud infrastructure",
  "Maintenance & staffing",
];

export default function HostingOptions() {

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
              <Cloud className="h-2.5 w-2.5 text-white/80" />
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
                Hosting & Deployment
              </h3>

              <p
                className="
                mt-1
                text-[8px]
                text-white/40

                sm:text-[9px]
                "
              >
                Flexible deployment for every enterprise.
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

            {/* SAAS */}
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

              {/* TOP */}
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
                  <Gem className="h-4 w-4 text-black/80" />
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
                    SaaS Cloud
                  </h4>

                  <p
                    className="
                    mt-0.5
                    text-[7px]
                    text-black/45

                    sm:text-[8px]
                    "
                  >
                    Fully managed cloud deployment.
                  </p>

                </div>

              </div>

              {/* SECTIONS */}
              <div className="mt-3 space-y-3">

                {/* ADVANTAGES */}
                <div>

                  <div className="flex items-center gap-1.5">

                    <CircleCheck className="h-3 w-3 text-emerald-500" />

                    <h5
                      className="
                      text-[8px]
                      font-semibold
                      text-emerald-600

                      sm:text-[9px]
                      "
                    >
                      Advantages
                    </h5>

                  </div>

                  <div className="mt-1.5 space-y-1.5">

                    {saasAdvantages.map((item, index) => {

                      return (

                        <div
                          key={index}
                          className="
                          flex
                          items-start
                          gap-1.5
                          "
                        >

                          <CircleCheck className="mt-0.5 h-2.5 w-2.5 shrink-0 text-emerald-500" />

                          <p
                            className="
                            text-[7px]
                            text-black/50

                            sm:text-[8px]
                            "
                          >
                            {item}
                          </p>

                        </div>
                      );
                    })}

                  </div>

                </div>

                {/* CONSIDERATIONS */}
                <div>

                  <div className="flex items-center gap-1.5">

                    <CircleAlert className="h-3 w-3 text-amber-500" />

                    <h5
                      className="
                      text-[8px]
                      font-semibold
                      text-amber-600

                      sm:text-[9px]
                      "
                    >
                      Considerations
                    </h5>

                  </div>

                  <div className="mt-1.5 space-y-1.5">

                    {saasConsiderations.map((item, index) => {

                      return (

                        <div
                          key={index}
                          className="
                          flex
                          items-start
                          gap-1.5
                          "
                        >

                          <CircleAlert className="mt-0.5 h-2.5 w-2.5 shrink-0 text-amber-500" />

                          <p
                            className="
                            text-[7px]
                            text-black/50

                            sm:text-[8px]
                            "
                          >
                            {item}
                          </p>

                        </div>
                      );
                    })}

                  </div>

                </div>

                {/* COST */}
                <div>

                  <div className="flex items-center gap-1.5">

                    <DollarSign className="h-3 w-3 text-black/75" />

                    <h5
                      className="
                      text-[8px]
                      font-semibold
                      text-black/80

                      sm:text-[9px]
                      "
                    >
                      Cost Factors
                    </h5>

                  </div>

                  <div className="mt-1.5 space-y-1.5">

                    {saasCosts.map((item, index) => {

                      return (

                        <div
                          key={index}
                          className="
                          flex
                          items-start
                          gap-1.5
                          "
                        >

                          <CircleCheck className="mt-0.5 h-2.5 w-2.5 shrink-0 text-emerald-500" />

                          <p
                            className="
                            text-[7px]
                            text-black/50

                            sm:text-[8px]
                            "
                          >
                            {item}
                          </p>

                        </div>
                      );
                    })}

                  </div>

                </div>

              </div>

            </motion.div>

            {/* SELF HOSTED */}
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

              {/* TOP */}
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
                  <Building2 className="h-4 w-4 text-black/80" />
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
                    Self-Hosted
                  </h4>

                  <p
                    className="
                    mt-0.5
                    text-[7px]
                    text-black/45

                    sm:text-[8px]
                    "
                  >
                    Full control over infrastructure.
                  </p>

                </div>

              </div>

              {/* SECTIONS */}
              <div className="mt-3 space-y-3">

                {/* ADVANTAGES */}
                <div>

                  <div className="flex items-center gap-1.5">

                    <CircleCheck className="h-3 w-3 text-emerald-500" />

                    <h5
                      className="
                      text-[8px]
                      font-semibold
                      text-emerald-600

                      sm:text-[9px]
                      "
                    >
                      Advantages
                    </h5>

                  </div>

                  <div className="mt-1.5 space-y-1.5">

                    {selfHostedAdvantages.map((item, index) => {

                      return (

                        <div
                          key={index}
                          className="
                          flex
                          items-start
                          gap-1.5
                          "
                        >

                          <CircleCheck className="mt-0.5 h-2.5 w-2.5 shrink-0 text-emerald-500" />

                          <p
                            className="
                            text-[7px]
                            text-black/50

                            sm:text-[8px]
                            "
                          >
                            {item}
                          </p>

                        </div>
                      );
                    })}

                  </div>

                </div>

                {/* CONSIDERATIONS */}
                <div>

                  <div className="flex items-center gap-1.5">

                    <CircleAlert className="h-3 w-3 text-amber-500" />

                    <h5
                      className="
                      text-[8px]
                      font-semibold
                      text-amber-600

                      sm:text-[9px]
                      "
                    >
                      Considerations
                    </h5>

                  </div>

                  <div className="mt-1.5 space-y-1.5">

                    {selfHostedConsiderations.map((item, index) => {

                      return (

                        <div
                          key={index}
                          className="
                          flex
                          items-start
                          gap-1.5
                          "
                        >

                          <CircleAlert className="mt-0.5 h-2.5 w-2.5 shrink-0 text-amber-500" />

                          <p
                            className="
                            text-[7px]
                            text-black/50

                            sm:text-[8px]
                            "
                          >
                            {item}
                          </p>

                        </div>
                      );
                    })}

                  </div>

                </div>

                {/* COST */}
                <div>

                  <div className="flex items-center gap-1.5">

                    <DollarSign className="h-3 w-3 text-black/75" />

                    <h5
                      className="
                      text-[8px]
                      font-semibold
                      text-black/80

                      sm:text-[9px]
                      "
                    >
                      Cost Factors
                    </h5>

                  </div>

                  <div className="mt-1.5 space-y-1.5">

                    {selfHostedCosts.map((item, index) => {

                      return (

                        <div
                          key={index}
                          className="
                          flex
                          items-start
                          gap-1.5
                          "
                        >

                          <CircleCheck className="mt-0.5 h-2.5 w-2.5 shrink-0 text-emerald-500" />

                          <p
                            className="
                            text-[7px]
                            text-black/50

                            sm:text-[8px]
                            "
                          >
                            {item}
                          </p>

                        </div>
                      );
                    })}

                  </div>

                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </motion.div>

    </RightSlideWrapper>
  );
}