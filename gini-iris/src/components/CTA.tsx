import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative overflow-hidden px-6 py-12 lg:px-8">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute left-1/2 top-1/2 h-[250px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#EC1C24]/20 blur-[140px]" />

      <div className="relative mx-auto max-w-[1400px]">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-[#EC1C24] via-[#d3151d] to-[#8b0c11] px-8 py-20 text-center shadow-[0_30px_100px_rgba(236,28,36,0.25)] sm:px-12 lg:px-20"
        >
          
          {/* OVERLAY */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_55%)]" />

          {/* FLOATING LIGHT */}
          <div className="absolute right-[-80px] top-[-80px] h-[220px] w-[220px] rounded-full bg-white/10 blur-[100px]" />

          <div className="absolute bottom-[-80px] left-[-80px] h-[220px] w-[220px] rounded-full bg-black/20 blur-[100px]" />

          {/* CONTENT */}
          <div className="relative mx-auto max-w-4xl">
            
            {/* LABEL */}
            <span className="mb-6 inline-block rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-medium uppercase tracking-[3px] text-white backdrop-blur-xl">
              Start Your Journey
            </span>

            {/* HEADING */}
            <h2 className="text-4xl font-black leading-tight tracking-[-2px] text-white sm:text-5xl lg:text-6xl">
              Let’s Build Something Incredible
            </h2>

            {/* DESCRIPTION */}
            <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
              Modern digital products engineered for performance,
              scalability, and next-generation user experiences.
            </p>

            {/* BUTTONS */}
            <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
              
              {/* PRIMARY BUTTON */}
              <button className="group flex items-center justify-center gap-3 rounded-full bg-black px-8 py-4 text-sm font-semibold uppercase tracking-[2px] text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black">
                
                Start Project

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              {/* SECONDARY BUTTON */}
              <button className="rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-semibold uppercase tracking-[2px] text-white backdrop-blur-xl transition-all duration-300 hover:bg-white hover:text-black">
                Contact Us
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;