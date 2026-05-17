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
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* PREVENT BODY SCROLL */
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
        <div className={`mx-auto flex h-[78px] max-w-[1400px] items-center justify-between rounded-2xl border border-white/10 px-6 sm:px-8 lg:px-10 transition-all duration-300 ${
          scrolled
            ? "bg-black/75 shadow-[0_10px_40px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
            : "bg-black/40 backdrop-blur-xl"
        }`}>
          
          {/* LOGO */}
          <a href="#" className="relative z-50 flex items-center">
            <h1 className="text-2xl font-black tracking-tight sm:text-3xl">
              
              <span className="text-white">gini</span>

              <span className="relative text-[#EC1C24]">
                iris

                <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-[#EC1C24]" />
              </span>
            </h1>
          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-12 xl:gap-14 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative text-sm font-medium uppercase tracking-[2px] text-gray-300 transition duration-300 hover:text-white"
              >
                {link.name}

                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#EC1C24] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* DESKTOP BUTTON */}
          <div className="hidden lg:block">
            <button className="group relative overflow-hidden rounded-full bg-[#EC1C24] px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(236,28,36,0.45)]">
              
              <span className="relative z-10">
                Get Started
              </span>

              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-xl transition hover:bg-white/10 lg:hidden"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 flex min-h-screen flex-col bg-black/95 px-6 pt-32 backdrop-blur-3xl lg:hidden"
          >
            
            <div className="flex flex-col gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className="border-b border-white/10 pb-4 text-3xl font-semibold text-white transition hover:text-[#EC1C24]"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* MOBILE CTA */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-10 rounded-full bg-[#EC1C24] px-7 py-4 text-base font-semibold text-white shadow-[0_0_30px_rgba(236,28,36,0.45)] transition hover:scale-[1.02]"
            >
              Start Your Project
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;