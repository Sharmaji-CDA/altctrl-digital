import { motion } from "framer-motion";

const industries = [
  "Healthcare",
  "Insurance",
  "Banking",
  "Telecom",
  "Utilities",
  "Media & Entertainment",
  "Automotive",
  "Retail & E-commerce",
  "Education",
  "Real Estate",
  "Government",
  "Travel & Hospitality",
];

export default function IndustryKernels() {
  return (
    <section className="relative overflow-hidden bg-black px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-24">

      {/* BG */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(236,28,36,0.08),transparent_45%)]" />

      {/* LEFT GLOW */}
      <motion.div
        animate={{
          opacity: [0.08, 0.16, 0.08],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute left-[-120px] top-[100px] h-[260px] w-[260px] rounded-full bg-[#EC1C24]/20 blur-[120px]"
      />

      {/* RIGHT GLOW */}
      <motion.div
        animate={{
          opacity: [0.08, 0.18, 0.08],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute right-[-120px] bottom-[100px] h-[260px] w-[260px] rounded-full bg-cyan-500/10 blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-[1200px]">

        {/* TOP */}
        <div className="mx-auto max-w-[820px] text-center">

          {/* BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 backdrop-blur-xl"
          >
            <div className="h-2 w-2 rounded-full bg-orange-400" />

            <span className="text-[10px] uppercase tracking-[3px] text-orange-300">
              Domain-Specific Intelligence
            </span>
          </motion.div>

          {/* HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="text-[34px] font-black leading-[1] tracking-[-2px] sm:text-[48px] lg:text-[64px]"
          >
            Tailored for your Industry
          </motion.h2>

          {/* DESC */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mx-auto mt-7 max-w-[760px] text-[14px] leading-8 text-slate-400 sm:text-[15px]"
          >
            We provide pre-trained{" "}
            <span className="text-white">
              Persona Kernels
            </span>{" "}
            that understand the specific terminology, compliance risks,
            and customer expectations of your sector.
          </motion.p>
        </div>

        {/* INDUSTRY PILLS */}
        <div className="relative mt-16 flex flex-wrap items-center justify-center gap-5">

          {industries.map((industry, index) => (
            <motion.button
              key={industry}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -4,
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] px-7 py-5 text-[14px] font-semibold text-slate-300 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:border-[#EC1C24]/50 hover:bg-[#fa3d64] hover:text-white hover:shadow-[0_0_40px_rgba(236,28,36,0.22)]"
            >

              {/* BG GLOW */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#EC1C24]/10 via-transparent to-cyan-500/10 opacity-0 transition-all duration-500 group-hover:opacity-100" />

              {/* INNER BORDER LIGHT */}
              <div className="absolute inset-0 rounded-2xl border border-white/[0.03] transition-all duration-500 group-hover:border-white/[0.08]" />

              {/* RUNNING LIGHT */}
              <motion.div
                animate={{
                  x: ["-120%", "220%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                  delay: index * 0.3,
                }}
                className="absolute top-0 h-full w-[80px] rotate-[20deg] bg-white/[0.04] blur-xl"
              />

              {/* TEXT */}
              <span className="relative z-10">
                {industry}
              </span>
            </motion.button>
          ))}
        </div>

        {/* BOTTOM LINE */}
        <motion.div
          initial={{
            opacity: 0,
            scaleX: 0,
          }}
          whileInView={{
            opacity: 1,
            scaleX: 1,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true }}
          className="mx-auto mt-20 h-px w-full max-w-[900px] bg-gradient-to-r from-transparent via-white/10 to-transparent"
        />
      </div>
    </section>
  );
}