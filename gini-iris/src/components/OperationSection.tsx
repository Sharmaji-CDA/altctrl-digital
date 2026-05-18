import {
  Bot,
  Database,
  Workflow,
  ShieldCheck,
  Languages,
  PlugZap,
  Activity,
} from "lucide-react";

import { motion } from "framer-motion";

const workflowNodes = [
  {
    icon: Bot,
    title: "CX Resolution Agent",
    desc: "Customer problem solving",
  },
  {
    icon: Database,
    title: "Data Architect",
    desc: "CRM schema management",
  },
  {
    icon: Workflow,
    title: "Ops Automator",
    desc: "Workflow execution",
  },
  {
    icon: ShieldCheck,
    title: "Quality Supervisor",
    desc: "Audit & reporting",
  },
  {
    icon: Languages,
    title: "Multilingual Expert",
    desc: "Localized CX",
  },
  {
    icon: PlugZap,
    title: "Integration Engineer",
    desc: "APIs & Data Silos",
  },
];

const metrics = [
  {
    title: "CX Resolution Agent",
    eff: "98.2%",
    drift: "0.02%",
    latency: "420ms",
    interactions: "12.4k",
  },
  {
    title: "Ops Automator",
    eff: "96.5%",
    drift: "0.08%",
    latency: "1.1s",
    interactions: "35.8k",
  },
  {
    title: "Quality Supervisor",
    eff: "100%",
    drift: "0.00%",
    latency: "2.4s",
    interactions: "8.9k",
  },
];

export default function OperationsSection() {
  return (
    <section className="relative overflow-hidden bg-black px-4 py-14 text-white sm:px-6 lg:px-8">

      {/* BG */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_40%)]" />

      {/* GLOWS */}
      <motion.div
        animate={{
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute left-[-180px] top-[100px] h-[320px] w-[320px] rounded-full bg-[#EC1C24]/20 blur-[120px]"
      />

      <motion.div
        animate={{
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute right-[-180px] top-[180px] h-[320px] w-[320px] rounded-full bg-[#8B5CF6]/20 blur-[120px]"
      />

      <div className="relative z-10 mx-auto grid max-w-[1350px] grid-cols-1 gap-10 lg:grid-cols-[0.75fr_1.25fr]">

        {/* LEFT */}
        <div>

          {/* LABEL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 backdrop-blur-xl"
          >
            <div className="h-2 w-2 rounded-full bg-[#EC1C24]" />

            <span className="text-[9px] uppercase tracking-[3px] text-gray-300">
              Operational Workflow Layer
            </span>
          </motion.div>

          {/* HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="max-w-[420px] text-[28px] font-black leading-[0.92] tracking-[-1px] sm:text-[32px] lg:text-[36px]"
          >
            Build Autonomous Operations Infrastructure.
          </motion.h2>

          {/* DESC */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mt-4 max-w-[420px] text-[12px] leading-6 text-gray-400 sm:text-[13px] lg:text-[14px]"
          >
            Deploy AI-powered operational agents trained on your business
            logic to automate support, analytics, auditing, routing,
            integrations, and workforce execution.
          </motion.p>

          {/* WORKFLOW */}
          <div className="relative mt-10">

            {/* LINE */}
            <div className="absolute left-3 top-0 h-full w-[2px] bg-gradient-to-b from-[#2563EB] via-[#8B5CF6] to-transparent" />

            {/* NODE */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="absolute left-0 top-0 z-20 h-6 w-6 rounded-full border-2 border-black bg-[#2563EB]"
            />

            {/* TOP BAR */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="ml-10 rounded-[18px] border border-blue-500/30 bg-gradient-to-r from-[#2563EB] to-[#3B82F6] px-4 py-4"
            >
              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#2563EB]">
                  <Activity size={18} />
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[2px] text-white/70">
                    Core AI Infrastructure
                  </p>

                  <h3 className="mt-1 text-sm font-bold sm:text-base">
                    Business Logic Layer
                  </h3>
                </div>
              </div>
            </motion.div>

            {/* CARDS */}
            <div className="mt-6 space-y-4">

              {workflowNodes.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.08,
                    }}
                    viewport={{ once: true }}
                    className="relative ml-10"
                  >

                    {/* CONNECTOR */}
                    <div className="absolute left-[-26px] top-1/2 h-[2px] w-5 bg-gradient-to-r from-[#2563EB] to-white/20" />

                    {/* CARD */}
                    <motion.div
                      whileHover={{
                        y: -2,
                      }}
                      className="flex flex-col gap-3 rounded-[18px] border border-white/10 bg-white/[0.03] p-3 backdrop-blur-2xl transition-all duration-500 hover:border-[#8B5CF6]/30 sm:flex-row sm:items-center sm:justify-between"
                    >

                      <div className="flex items-center gap-3">

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-[#8B5CF6]">
                          <Icon size={18} />
                        </div>

                        <div>
                          <h4 className="text-sm font-bold">
                            {item.title}
                          </h4>

                          <p className="mt-1 text-[11px] text-gray-400">
                            {item.desc}
                          </p>
                        </div>
                      </div>

                      <div className="w-fit rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-1 text-[8px] font-bold uppercase tracking-[2px] text-emerald-400">
                        Ready
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >

          <div className="overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] p-4 backdrop-blur-2xl sm:p-5 lg:p-6">

            {/* HEADER */}
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#EC1C24] to-[#8B5CF6]">
                  <Bot size={20} />
                </div>

                <div>
                  <h3 className="text-xl font-bold sm:text-2xl">
                    Deployment Console
                  </h3>

                  <p className="mt-1 text-[11px] text-gray-500">
                    fleet_v2.4.stable • us-east-1
                  </p>
                </div>
              </div>

              <div className="sm:text-right">
                <div className="flex items-center gap-2 sm:justify-end">
                  <div className="h-2 w-2 rounded-full bg-emerald-400" />

                  <span className="text-xs font-semibold">
                    Optimal
                  </span>
                </div>

                <p className="mt-2 text-[9px] uppercase tracking-[3px] text-gray-500">
                  Neural Load: 12%
                </p>
              </div>
            </div>

            {/* METRICS */}
            <div className="mt-6 space-y-4">

              {metrics.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.08,
                  }}
                  viewport={{ once: true }}
                  className="rounded-[20px] border border-white/10 bg-black/20 p-4"
                >

                  <div className="flex flex-col gap-4">

                    <div>
                      <h4 className="text-base font-bold sm:text-lg">
                        {item.title}
                      </h4>

                      <p className="mt-1 text-[11px] text-gray-500">
                        Active •{" "}
                        <span className="text-emerald-400">
                          {item.eff} Eff.
                        </span>
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-4">

                      <div>
                        <p className="text-[9px] uppercase tracking-[2px] text-gray-500">
                          Drift
                        </p>

                        <p className="mt-1 text-xs font-bold sm:text-sm">
                          {item.drift}
                        </p>
                      </div>

                      <div>
                        <p className="text-[9px] uppercase tracking-[2px] text-gray-500">
                          Latency
                        </p>

                        <p className="mt-1 text-xs font-bold sm:text-sm">
                          {item.latency}
                        </p>
                      </div>

                      <div>
                        <p className="text-[9px] uppercase tracking-[2px] text-gray-500">
                          Interactions
                        </p>

                        <p className="mt-1 text-xs font-bold sm:text-sm">
                          {item.interactions}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 h-[2px] overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "80%" }}
                      transition={{
                        duration: 1.2,
                      }}
                      viewport={{ once: true }}
                      className="h-full rounded-full bg-gradient-to-r from-[#EC1C24] to-[#8B5CF6]"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}