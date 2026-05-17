import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-white/10 px-6 py-20 lg:px-8"
    >
      
      {/* BACKGROUND GLOW */}
      <div className="absolute left-0 top-0 h-[250px] w-[250px] rounded-full bg-[#EC1C24]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-[1400px]">
        
        {/* TOP */}
        <div className="grid gap-14 border-b border-white/10 pb-14 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          
          {/* BRAND */}
          <div>
            <h2 className="text-[36px] font-black leading-none tracking-[-2px]">
              
              <span className="text-white">
                gini
              </span>

              <span className="text-[#EC1C24]">
                iris
              </span>
            </h2>

            <p className="mt-6 max-w-md text-base leading-8 text-gray-400">
              Building intelligent digital ecosystems, AI-driven products,
              and premium modern experiences for ambitious brands.
            </p>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[3px] text-white">
              Company
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li>
                <a
                  href="#"
                  className="transition hover:text-white"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="transition hover:text-white"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#features"
                  className="transition hover:text-white"
                >
                  Features
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="transition hover:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[3px] text-white">
              Services
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li>AI Solutions</li>
              <li>UI/UX Design</li>
              <li>SaaS Platforms</li>
              <li>Enterprise Apps</li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[3px] text-white">
              Connect
            </h3>

            <div className="flex items-center gap-4">
              
              {[
                FaInstagram,
                FaTwitter,
                FaLinkedin,
                FaGithub,
              ].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-gray-400 transition-all duration-300 hover:border-[#EC1C24]/40 hover:bg-[#EC1C24]/10 hover:text-white"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col items-center justify-between gap-6 pt-8 text-center md:flex-row md:text-left">
          
          <p className="text-sm text-gray-500">
            © 2026 Giniiris. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a
              href="#"
              className="transition hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="transition hover:text-white"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;