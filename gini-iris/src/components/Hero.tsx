import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      
      {/* BACKGROUND GRID */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      {/* GLOW */}
      <div className="absolute left-[-200px] top-[100px] h-[400px] w-[400px] rounded-full bg-red-600/20 blur-[140px]" />

      <div className="absolute right-[-200px] top-[200px] h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[140px]" />

      {/* CONTAINER */}
      <div className="relative mx-auto max-w-7xl px-5 pt-36 pb-20 sm:px-6 lg:px-8">
        
        <div className="grid items-center gap-16 lg:grid-cols-2">
          
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            
            {/* TAG */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
              <div className="h-2 w-2 rounded-full bg-red-500" />

              <span className="text-[11px] uppercase tracking-[3px] text-gray-300">
                AI • Innovation • Enterprise
              </span>
            </div>

            {/* HEADING */}
            <h1 className="font-black leading-none tracking-[-3px]">
              
              <span className="block text-[52px] sm:text-[64px] lg:text-[78px]">
                Intelligent
              </span>

              <span className="block text-[52px] text-red-500 sm:text-[64px] lg:text-[78px]">
                Digital
              </span>

              <span className="block text-[52px] text-red-500 sm:text-[64px] lg:text-[78px]">
                Experiences
              </span>

              <span className="mt-3 block text-[44px] text-white/90 sm:text-[56px] lg:text-[68px]">
                For Modern
              </span>

              <span className="block text-[44px] text-white/90 sm:text-[56px] lg:text-[68px]">
                Brands
              </span>
            </h1>

            {/* TEXT */}
            <p className="mt-8 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
              We craft futuristic enterprise platforms, AI-driven
              products, immersive digital systems, and next-generation
              experiences for innovation-focused businesses.
            </p>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              
              <button className="group flex items-center justify-center gap-3 rounded-full bg-red-600 px-8 py-4 text-sm font-semibold uppercase tracking-[2px] transition-all duration-300 hover:scale-105">
                Start Project

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <button className="rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold uppercase tracking-[2px] backdrop-blur-xl transition-all duration-300 hover:border-red-500/40 hover:bg-white/10">
                View Work
              </button>
            </div>

            {/* STATS */}
            <div className="mt-14 grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
              {[
                { number: "120+", label: "Projects Delivered" },
                { number: "50+", label: "AI Solutions" },
                { number: "10+", label: "Global Clients" },
              ].map((item) => (
                <div key={item.label}>
                  <h3 className="text-3xl font-black sm:text-4xl">
                    {item.number}
                  </h3>

                  <p className="mt-2 text-xs uppercase tracking-[2px] text-gray-500 sm:text-sm">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto w-full max-w-[560px]"
          >
            
            {/* IMAGE WRAPPER */}
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-3 backdrop-blur-xl">
              
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
                alt="Technology"
                className="h-[420px] w-full rounded-[24px] object-cover sm:h-[520px] lg:h-[650px]"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* FLOAT CARD */}
              <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/10 bg-black/60 p-5 backdrop-blur-2xl">
                
                <div className="flex items-center justify-between gap-4">
                  
                  <div>
                    <p className="text-xs uppercase tracking-[4px] text-gray-400">
                      AI SYSTEM
                    </p>

                    <h3 className="mt-2 text-xl font-bold sm:text-3xl">
                      Future Ready Platform
                    </h3>
                  </div>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600 text-xl font-bold">
                    AI
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;