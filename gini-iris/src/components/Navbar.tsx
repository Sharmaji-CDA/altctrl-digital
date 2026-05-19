import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#services" },
  { name: "Features", href: "#features" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* SCROLL EFFECT */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* PREVENT BODY SCROLL */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className={`relative mx-auto flex max-w-[1400px] items-center justify-between overflow-hidden rounded-[30px] border border-white/10 px-6 transition-all duration-500 ease-out sm:px-8 lg:px-10 ${
            scrolled
              ? "h-[78px] bg-black/75 shadow-[0_15px_50px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
              : "h-[88px] bg-black/40 backdrop-blur-xl"
          }`}
        >
          
          {/* CINEMATIC GRADIENT */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(236,28,36,0.08),transparent,rgba(6,182,212,0.06))]" />

          {/* GLOW */}
          <div className="absolute left-0 top-0 h-32 w-32 rounded-full bg-[#EC1C24]/10 blur-[80px]" />

          <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-cyan-500/10 blur-[80px]" />

          {/* LOGO */}
          <a
            href="#"
            className="relative z-20 flex items-center"
          >
            <img
              src="/logo.png"
              alt="Gini Iris"
              className={`
                w-auto object-contain transition-all duration-500

                ${scrolled
                  ? "h-[42px] sm:h-[48px]"
                  : "h-[50px] sm:h-[58px]"
                }
              `}
            />
          </a>

          {/* DESKTOP NAV */}
          <nav className="relative z-20 hidden items-center gap-12 lg:flex xl:gap-14">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative text-[12px] font-sm uppercase tracking-[3px] text-gray-300 transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_12px_rgba(236,28,36,0.5)]"
              >
                {link.name}

                <span className="absolute -bottom-2 left-0 h-[2px] w-0 rounded-full bg-[#EC1C24] transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* RIGHT SIDE */}
          <div className="relative z-20 flex items-center gap-4">

            {/* LOGIN BUTTON */}
            <button className="hidden rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-[11px] font-medium uppercase tracking-[2px] text-gray-300 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white lg:block">
              Login
            </button>
            
            {/* DESKTOP CTA */}
            <button className="group relative hidden overflow-hidden rounded-full border border-white/10 bg-[#EC1C24] px-7 py-3 text-sm font-semibold uppercase tracking-[2px] text-white transition-all duration-500 hover:scale-105 hover:shadow-[0_0_45px_rgba(236,28,36,0.45)] lg:block">
              
              {/* MULTI COLOR GRADIENT */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#EC1C24] via-[#ff4d55] to-cyan-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* LIGHT EFFECT */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.35),transparent_60%)] opacity-70" />

              {/* BUTTON TEXT */}
              <span className="relative z-10">
                Book a Demo
              </span>
            </button>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/10 lg:hidden"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </motion.div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -80 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40 bg-black/85 backdrop-blur-[30px] lg:hidden"
          >
            
            {/* BACKGROUND GLOW */}
            <div className="absolute left-[-100px] top-[120px] h-[300px] w-[300px] rounded-full bg-[#EC1C24]/20 blur-[120px]" />

            <div className="absolute bottom-[-100px] right-[-100px] h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[120px]" />

            <div className="flex min-h-screen flex-col px-8 pt-36">
              
              {/* LINKS */}
              <div className="flex flex-col gap-8">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.08,
                    }}
                    className="group relative border-b border-white/10 pb-5 text-3xl font-semibold text-white transition-all duration-300 hover:text-[#EC1C24]"
                  >
                    {link.name}

                    <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#EC1C24] transition-all duration-500 group-hover:w-full" />
                  </motion.a>
                ))}
              </div>

              {/* MOBILE CTA */}
              <motion.button
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="mt-12 rounded-full bg-gradient-to-r from-[#EC1C24] via-[#ff4d55] to-[#8B5CF6] px-8 py-4 text-base font-semibold uppercase tracking-[2px] text-white shadow-[0_0_40px_rgba(236,28,36,0.45)] transition-all duration-500 hover:scale-[1.02]"
              >
                Start Your Project
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;