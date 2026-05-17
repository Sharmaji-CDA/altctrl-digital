import { motion } from "framer-motion";
import {
  MonitorSmartphone,
  Layers3,
  Zap,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    title: "Responsive On All Devices",
    description:
      "Optimized experiences across desktop, tablet, and mobile devices.",
    icon: MonitorSmartphone,
  },
  {
    title: "Modern UI Architecture",
    description:
      "Scalable interface systems designed with future-ready components.",
    icon: Layers3,
  },
  {
    title: "Lightning Fast Performance",
    description:
      "Built with modern technologies for speed, efficiency, and reliability.",
    icon: Zap,
  },
  {
    title: "Scalable TypeScript Setup",
    description:
      "Structured architecture engineered for large-scale enterprise growth.",
    icon: ShieldCheck,
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="relative overflow-hidden px-6 py-28 lg:px-8"
    >
      
      {/* BACKGROUND GLOW */}
      <div className="absolute left-[-120px] top-[100px] h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute bottom-[-100px] right-[-100px] h-[300px] w-[300px] rounded-full bg-[#EC1C24]/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-[1400px] items-start gap-20 lg:grid-cols-[0.9fr_1.1fr]">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="sticky top-32"
        >
          
          {/* LABEL */}
          <span className="mb-5 inline-block rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-medium uppercase tracking-[3px] text-gray-300 backdrop-blur-xl">
            Why Choose Us
          </span>

          {/* HEADING */}
          <h2 className="text-4xl font-black leading-tight tracking-[-2px] text-white sm:text-5xl lg:text-6xl">
            Design Systems Built For Future Technology
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-8 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
            We create scalable digital ecosystems focused on performance,
            usability, innovation, and next-generation user experiences.
          </p>
        </motion.div>

        {/* RIGHT FEATURES */}
        <div className="space-y-7">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#EC1C24]/40 hover:bg-white/[0.05] hover:shadow-[0_20px_60px_rgba(236,28,36,0.12)]"
              >
                
                {/* GLOW */}
                <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-[#EC1C24]/10 blur-3xl transition-all duration-500 group-hover:bg-[#EC1C24]/20" />

                <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start">
                  
                  {/* ICON */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-[#EC1C24]/10 text-[#EC1C24]">
                    <Icon size={28} strokeWidth={1.8} />
                  </div>

                  {/* CONTENT */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold tracking-tight text-white">
                      {feature.title}
                    </h3>

                    <p className="mt-4 text-base leading-7 text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* HOVER LINE */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#EC1C24] transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;