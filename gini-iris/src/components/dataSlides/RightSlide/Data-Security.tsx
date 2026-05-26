"use client";

import {
  Lock,
  ShieldCheck,
  Fingerprint,
  DatabaseBackup,
  Search,
} from "lucide-react";

import { motion } from "framer-motion";
import RightSlideWrapper from "./RightSlideWrapper";

const securityFeatures = [
  {
    icon: ShieldCheck,
    title: "End-to-End Encryption",
    desc:
      "All data is encrypted in-transit (TLS 1.2+) and at-rest (AES-256), ensuring your information is secure at every stage.",
  },

  {
    icon: Fingerprint,
    title: "PII Redaction",
    desc:
      "Automatically identify and redact sensitive PII from transcripts and logs. Enforce compliance with script adherence checks.",
  },

  {
    icon: DatabaseBackup,
    title: "Data Retention",
    desc:
      "Define custom data retention policies. Automatically archive old interactions and purge data permanently to meet compliance requirements.",
  },

  {
    icon: Search,
    title: "Audit Trails",
    desc:
      "Maintain a complete, immutable log of all user actions, data access, and system changes for comprehensive security and compliance audits.",
  },
];

const complianceStandards = [
  "GDPR",
  "HIPAA",
  "SOC 2",
  "PCI-DSS",
];

export default function DataSecurity() {

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
              <Lock className="h-5 w-5 text-white/80" />
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
                Data Security & Compliance
              </h3>

              <p
                className="
                mt-1
                text-[8px]
                text-white/40

                sm:text-[9px]
                "
              >
                Enterprise-grade security and governance.
              </p>

            </div>

          </div>

          {/* FEATURES */}
          <div
            className="
            mt-3
            grid
            grid-cols-2
            gap-2
            "
          >

            {securityFeatures.map((item, index) => {

              const Icon = item.icon;

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
                    duration: 0.35,
                    delay: index * 0.05,
                  }}
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

                  {/* TOP */}
                  <div className="flex items-start gap-2">

                    {/* ICON */}
                    <div
                      className="
                      flex
                      h-7
                      w-7
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      bg-black/[0.04]
                      "
                    >
                      <Icon className="h-3.5 w-3.5 text-black/75" />
                    </div>

                    {/* CONTENT */}
                    <div>

                      <h4
                        className="
                        text-[9px]
                        font-semibold
                        leading-none
                        text-black/90

                        sm:text-[10px]
                        "
                      >
                        {item.title}
                      </h4>

                      <p
                        className="
                        mt-1
                        text-[7px]
                        leading-4
                        text-black/30
                        sm:text-[8px]
                        "
                      >
                        {item.desc}
                      </p>

                    </div>

                  </div>

                </motion.div>
              );
            })}

          </div>

          {/* COMPLIANCE */}
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
            p-3
            shadow-[0_4px_14px_rgba(0,0,0,0.04)]
            "
          >

            {/* TITLE */}
            <h4
              className="
              text-[10px]
              font-semibold
              text-black/90

              sm:text-[11px]
              "
            >
              Compliance Standards
            </h4>

            {/* BADGES */}
            <div
              className="
              mt-3
              flex
              flex-wrap
              gap-2
              "
            >

              {complianceStandards.map((item, index) => {

                return (

                  <motion.div
                    key={index}
                    whileHover={{
                      scale: 1.03,
                    }}
                    className="
                    rounded-full
                    border
                    border-black/10
                    bg-black/[0.03]
                    px-3
                    py-1.5
                    text-[8px]
                    font-semibold
                    text-black/75

                    sm:text-[9px]
                    "
                  >
                    {item}
                  </motion.div>
                );
              })}

            </div>

            {/* FOOTER */}
            <div
              className="
              mt-3
              rounded-lg
              bg-black/[0.03]
              p-2.5
              "
            >

              <p
                className="
                text-[7px]
                leading-4
                text-black/50

                sm:text-[8px]
                "
              >
                Built with enterprise compliance frameworks
                to support highly regulated industries and
                secure customer operations.
              </p>

            </div>

          </motion.div>

      </motion.div>

    </RightSlideWrapper>
  );
}