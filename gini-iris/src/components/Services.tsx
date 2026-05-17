import { motion } from "framer-motion";
import {
  Bot,
  LayoutDashboard,
  Palette,
  MonitorSmartphone,
  Workflow,
  Globe,
} from "lucide-react";

const services = [
  {
    title: "AI Product Design",
    icon: Bot,
    description:
      "Advanced AI-first product experiences designed for modern scalable businesses.",
  },
  {
    title: "Enterprise Dashboards",
    icon: LayoutDashboard,
    description:
      "High-performance enterprise systems with powerful analytics and workflows.",
  },
  {
    title: "UI/UX Strategy",
    icon: Palette,
    description:
      "Human-centered interfaces crafted for usability, engagement, and conversion.",
  },
  {
    title: "SaaS Platforms",
    icon: MonitorSmartphone,
    description:
      "Modern SaaS ecosystems with seamless scalability and premium user flows.",
  },
  {
    title: "Automation Systems",
    icon: Workflow,
    description:
      "Intelligent automation systems that optimize operations and productivity.",
  },
  {
    title: "Modern Web Apps",
    icon: Globe,
    description:
      "Fast, immersive web applications engineered for performance and growth.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden px-6 py-28 lg:px-8"
    >
      
      {/* BACKGROUND GLOW */}
      <div className="absolute left-0 top-0 h-[300px] w-[300px] rounded-full bg-[#EC1C24]/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-[1400px]">
        
        {/* SECTION HEADER */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          
          <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-medium uppercase tracking-[3px] text-gray-300 backdrop-blur-xl">
            Our Expertise
          </span>

          <h2 className="text-4xl font-black leading-tight tracking-[-2px] text-white sm:text-5xl lg:text-6xl">
            Premium Digital Services
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-400 sm:text-lg">
            We build intelligent digital ecosystems, AI-powered platforms,
            and futuristic experiences designed for ambitious brands.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#EC1C24]/40 hover:bg-white/[0.05] hover:shadow-[0_20px_60px_rgba(236,28,36,0.12)]"
              >
                
                {/* CARD GLOW */}
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#EC1C24]/10 blur-3xl transition-all duration-500 group-hover:bg-[#EC1C24]/20" />

                {/* ICON */}
                <div className="relative mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-[#EC1C24]/10 text-[#EC1C24]">
                  <Icon size={28} strokeWidth={1.8} />
                </div>

                {/* TITLE */}
                <h3 className="relative mb-4 text-2xl font-bold tracking-tight text-white">
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="relative text-base leading-7 text-gray-400">
                  {service.description}
                </p>

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

export default Services;