"use client";

import {
  Sparkles,
} from "lucide-react";

import { motion } from "framer-motion";

import RightSlideWrapper from "./RightSlideWrapper";

const modules = [
  {
    icon: "https://cdn.lordicon.com/fikcyfpp.json", // chat/messages
    title: "Interactions",
    desc: "Unify all customer conversations.",
  },

  {
    icon: "https://cdn.lordicon.com/abfverha.json", // quality/check
    title: "Quality",
    desc: "Automate QA across interactions.",
  },

  {
    icon: "https://cdn.lordicon.com/hjeefwhm.json", // emotions/sentiment
    title: "Sentiments",
    desc: "Understand customer emotions.",
  },

  {
    icon: "https://cdn.lordicon.com/qhviklyi.json", // supervisor/monitoring
    title: "Supervisor",
    desc: "Monitor teams in real time.",
  },

  {
    icon: "https://cdn.lordicon.com/yyecauzv.json", // workflow/backoffice
    title: "Backoffice",
    desc: "Automate backend workflows.",
  },

  {
    icon: "https://cdn.lordicon.com/wxnxiano.json", // knowledge/book/docs
    title: "Knowledge",
    desc: "Centralized knowledge hub.",
  },

  {
    icon: "https://cdn.lordicon.com/iltqorsz.json", // training/learning
    title: "Training",
    desc: "Improve targeted agent skills.",
  },

  {
    icon: "https://cdn.lordicon.com/kbtmbyzy.json", // workforce/team
    title: "WFM",
    desc: "Optimize workforce planning.",
  },

  {
    icon: "https://cdn.lordicon.com/ljvjsnvh.json", // surveys/forms
    title: "Surveys",
    desc: "Capture customer feedback.",
  },

  {
    icon: "https://cdn.lordicon.com/dafdkyyt.json", // analytics/chart
    title: "Analytics",
    desc: "Generate actionable insights.",
  },

  {
    icon: "https://cdn.lordicon.com/slkvcfos.json", // AI/tools
    title: "AI Tools",
    desc: "Use enterprise AI workflows.",
  },

  {
    icon: "https://cdn.lordicon.com/osuxyevn.json", // integrations/connect
    title: "Integrations",
    desc: "Connect existing ecosystems.",
  },

  {
    icon: "https://cdn.lordicon.com/surcxhka.json", // database/data
    title: "Data",
    desc: "Access raw data & logs.",
  },

  {
    icon: "https://cdn.lordicon.com/kdduutaw.json", // security/access
    title: "Access",
    desc: "Manage users, roles and permissions.",
  },

  {
    icon: "https://cdn.lordicon.com/rsvfayfn.json", // tenants/cloud
    title: "Tenants",
    desc: "Oversee multi-tenants deployments.",
  },

  {
    icon: "https://cdn.lordicon.com/nkmsrxys.json", // developer/code/api
    title: "Developer",
    desc: "Access developer tools and APIs.",
  },
];

export default function ModuleGrid() {

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
        className="flex flex-col items-centre justify-centre h-full min-h-[400px] overflow-hidden 
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
        <div className="flex items-centre justify-centre gap-4">

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
              Platform Modules
            </h3>
            <p
              className="
              mt-1
              text-[8px]
              text-white/40

              sm:text-[9px]
              "
            >
              Unified enterprise CX ecosystem.
            </p>
          </div>

        </div>

        {/* GRID */}
        <div  
          className="
          mt-3
          grid
          grid-cols-2
          gap-2
          sm:grid-cols-4
          "
        >

          {modules.map((item, index) => {

            return (

              <motion.button
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
                  delay: index * 0.02,
                }}
                whileHover={{
                  y: -2,
                }}
                className="
                flex 
                flex-col
                items-center
                justify-center
                rounded-2xl
                border
                border-white/40
                bg-gradient-to-r
                from-[#D46A8A]/[0.2]
                to-[#7C4A87]/40
                p-1.5
                transition-all
                duration-300
                hover:bg-white/[0.08]
                "
              >

                  {/* ICON */}
                  <div
                    className="
                    flex
                    h-6
                    w-6
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-cyan-400/20
                    bg-white
                    "
                  >

                    <lord-icon
                      src={item.icon}
                      trigger="loop"
                      delay="2000"
                      colors="primary:black,secondary:black"
                      style={{
                        width: "16px",
                        height: "16px",
                      }}
                    >
                    </lord-icon>

                  </div>

                  {/* TITLE */}
                  <h4
                    className="
                    mt-2
                    text-[9px]
                    font-medium
                    leading-tight
                    text-white/90
                    sm:text-[10px]
                    "
                  >
                    {item.title}
                  </h4>

                  {/* DESC */}
                  <p
                    className="
                    mt-1
                    text-[7px]
                    leading-3
                    text-white/65
                    sm:text-[8px]
                    "
                  >
                    {item.desc}
                  </p>

              </motion.button>
            );
          })}

        </div>

      </motion.div>

    </RightSlideWrapper>
  );
}