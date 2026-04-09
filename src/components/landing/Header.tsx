import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ["services", "why-us", "testimonials", "faq"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-us" },
    { name: "Reviews", href: "#testimonials" },
    { name: "FAQs", href: "#faq" },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-2 lg:top-4 w-full flex justify-center z-50 pointer-events-none">
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`pointer-events-auto relative w-[95%] max-w-[1000px] transition-all duration-500 bg-gradient-to-b from-white via-slate-50 to-slate-200 border border-white shadow-[0_20px_40px_rgba(0,0,0,0.15),_inset_0_4px_15px_rgba(255,255,255,1),_inset_0_-8px_15px_rgba(0,0,0,0.05)] ${
          !isMobileMenuOpen ? "rounded-[2rem] rounded-b-xl" : "rounded-[2rem]"
        }`}
      >
        {/* AC internal styling / shell */}
        <div className={`absolute inset-0 pointer-events-none overflow-hidden ${!isMobileMenuOpen ? "rounded-[2rem] rounded-b-xl" : "rounded-[2rem]"}`}>
          {/* Top gloss */}
          <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-white to-transparent opacity-90 rounded-t-[2rem]"></div>
          
          {/* Bottom curve line */}
          <div className="absolute bottom-6 left-4 right-4 h-6 border-b border-white/60 rounded-[100%]"></div>
          
          {/* Main Vent Cavity (Cutout) - Deep and Realistic */}
          <div className="absolute bottom-1.5 left-4 right-4 h-[26px] bg-gradient-to-b from-slate-600 via-slate-700 to-slate-800 rounded-b-xl rounded-t-sm shadow-[inset_0_6px_10px_rgba(0,0,0,0.6),_inset_0_-2px_4px_rgba(255,255,255,0.1),_0_1px_2px_rgba(0,0,0,0.2)] flex flex-col justify-start items-center overflow-hidden border-t border-slate-500">
             
             {/* Vertical directional fins (deep inside) */}
             <div className="absolute inset-0 flex justify-evenly items-center px-10 opacity-60 z-0 pt-1">
                {[...Array(16)].map((_, i) => (
                  <motion.div 
                    key={`fin-${i}`} 
                    className="w-[3px] h-[18px] bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 shadow-[2px_0_4px_rgba(0,0,0,0.6)] rounded-sm"
                    animate={{ rotateY: [-20, 20, -20] }}
                    transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: i * 0.1 }}
                  />
                ))}
             </div>

             {/* The Primary Swinging Louver (Door Flap) */}
             <motion.div 
                animate={{ rotateX: [0, -85, 0] }}
                transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                className="relative w-[98%] mt-0.5 z-10 flex flex-col items-center" 
                style={{ transformStyle: "preserve-3d", transformOrigin: "top" }}
             >
                {/* The main blade of the louver */}
                <div className="w-full h-[14px] bg-gradient-to-b from-[#ffffff] via-[#f0f0f0] to-[#cccccc] rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.7),_inset_0_-1px_2px_rgba(255,255,255,1)] border-[0.5px] border-gray-300 flex flex-col justify-center gap-[2px] overflow-hidden">
                   {/* Realistic ridges on the louver */}
                   <div className="w-full h-[0.5px] bg-white/50 shadow-[0_1px_1px_rgba(0,0,0,0.1)] mt-1"></div>
                   <div className="w-full h-[0.5px] bg-white/50 shadow-[0_1px_1px_rgba(0,0,0,0.1)]"></div>
                   <div className="w-full h-[0.5px] bg-white/50 shadow-[0_1px_1px_rgba(0,0,0,0.1)]"></div>
                </div>

                {/* Side hinges connecting the louver */}
                <div className="absolute -left-1 -top-0.5 w-[6px] h-[8px] bg-gradient-to-b from-gray-400 to-gray-600 rounded-sm shadow-md"></div>
                <div className="absolute -right-1 -top-0.5 w-[6px] h-[8px] bg-gradient-to-b from-gray-400 to-gray-600 rounded-sm shadow-md"></div>
                {/* Middle support hinge */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[12px] h-[6px] bg-gradient-to-b from-gray-400 to-gray-500 rounded-b-md shadow-md"></div>
             </motion.div>
             
             {/* Bottom inner lip to give the cavity a thick base */}
             <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-t from-black to-transparent opacity-80 z-20"></div>
          </div>
        </div>

        {/* Cold Air Animation (blows DOWN from the bottom vent) */}
        {!isMobileMenuOpen && (
          <div className="absolute top-[95%] left-[5%] right-[5%] h-[250px] -z-10 pointer-events-none flex justify-around opacity-90 overflow-visible mt-2">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={`air-${i}`}
                className={`w-[8%] bg-gradient-to-b from-cyan-400/40 via-cyan-300/10 to-transparent blur-xl origin-top rounded-b-full ${i % 2 === 0 ? 'h-[180px]' : 'h-[220px]'}`}
                animate={{
                  y: [-20, 160],
                  scaleY: [0.8, 1.3],
                  scaleX: [0.5, 1.5],
                  x: [0, (i % 2 === 0 ? 25 : -25)],
                  opacity: [0, 0.9, 0],
                }}
                transition={{
                  duration: 2 + (i * 0.2),
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: i * 0.15,
                }}
              />
            ))}
            {/* Soft overall cool breeze glow */}
            <div className="absolute inset-x-0 top-0 h-[120px] bg-gradient-to-b from-cyan-300/20 via-cyan-100/5 to-transparent blur-2xl rounded-b-full"></div>
          </div>
        )}

        <div className="relative z-10 px-4 md:px-6 pb-9 pt-3">
          <div className="flex items-center justify-between h-[56px] md:h-[64px]">
            
            {/* Left: Logo (AC Brand) */}
            <motion.a
              href="#"
              className="flex items-center gap-2 group relative z-20 flex-1"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <img src={logo} alt="FixKro logo" className="h-8 w-8 md:h-10 md:w-10 rounded-lg object-cover shadow-sm grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
              <div className="hidden sm:flex flex-col">
                 <span className="text-xl md:text-2xl font-black text-slate-400 tracking-widest uppercase leading-none drop-shadow-sm group-hover:text-amber-500 transition-colors">
                   FixKro
                 </span>
                 <span className="text-[8px] text-slate-400 tracking-[0.2em] uppercase mt-0.5 ml-0.5 font-semibold">Dual Inverter</span>
              </div>
            </motion.a>

            {/* Center: AC Control Panel Display */}
            <div className="flex flex-col items-center justify-center relative z-20 shrink-0">
               <div className="bg-gradient-to-br from-gray-900 to-black border-[3px] border-gray-600/80 px-4 py-1.5 rounded-xl shadow-[inset_0_3px_15px_rgba(0,0,0,0.9),_0_2px_5px_rgba(255,255,255,0.8)] flex items-center gap-4 justify-center">
                  <div className="flex flex-col items-center gap-1">
                     <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399] animate-[pulse_2.5s_ease-in-out_infinite]"></div>
                     <div className="text-[7px] text-emerald-400 uppercase tracking-wider hidden md:block">Power</div>
                  </div>
                  
                  <div className="flex items-start">
                     <span className="text-[#22d3ee] font-mono text-xl md:text-2xl font-bold tracking-widest leading-none drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">18</span>
                     <span className="text-[#22d3ee] font-mono text-sm md:text-md leading-none ml-0.5 mt-0.5 shadow-cyan-300">°C</span>
                  </div>
                  
                  <div className="flex flex-col items-center gap-0.5">
                     <span className="text-[#22d3ee] text-[14px] md:text-[16px] leading-none drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] animate-pulse">❄️</span>
                     <div className="text-[7px] text-[#22d3ee] uppercase tracking-wider hidden md:block mt-0.5">Cool</div>
                  </div>
               </div>
            </div>

            {/* Right: Desktop Navigation - Tactical Buttons */}
            <nav className="hidden lg:flex items-center gap-1.5 relative z-20 flex-1 justify-end">
              {navLinks.map((link, index) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId || (link.href === "#hero" && !activeSection);
                
                return (
                  <motion.button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className={`px-3 py-1.5 text-[12px] font-bold rounded-lg transition-all border shadow-sm ${
                      isActive 
                        ? "bg-slate-200 border-slate-300 text-slate-800 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]" 
                        : "bg-white border-white text-slate-500 hover:bg-slate-50 hover:text-slate-700 shadow-[0_2px_4px_rgba(0,0,0,0.05),_inset_0_-2px_4px_rgba(0,0,0,0.05)]"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.name}
                  </motion.button>
                );
              })}
            </nav>

            {/* Mobile Menu Button - AC remote style */}
            <div className="flex-1 flex justify-end lg:hidden relative z-20">
              <motion.button
                className="p-2 text-slate-700 bg-white border border-gray-200 shadow-sm rounded-lg hover:bg-slate-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileTap={{ scale: 0.9 }}
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-5 h-5 stroke-[2.5]" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-5 h-5 stroke-[2.5]" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>

          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="lg:hidden overflow-hidden relative z-20"
              >
                <motion.nav 
                  className="flex flex-col gap-2 pt-4 px-2 border-t-[1.5px] border-slate-200/60 mt-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  {navLinks.map((link, index) => {
                    const sectionId = link.href.replace("#", "");
                    const isActive = activeSection === sectionId || (link.href === "#hero" && !activeSection);

                    return (
                      <motion.button
                        key={link.name}
                        onClick={() => handleNavClick(link.href)}
                        className={`text-center transition-all font-bold py-3 px-4 rounded-xl active:scale-95 border ${
                          isActive 
                          ? "bg-slate-200 border-slate-300 text-slate-800 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]" 
                          : "bg-white text-slate-600 border-white shadow-sm hover:bg-slate-50 hover:text-slate-800"
                        }`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * index }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {link.name}
                      </motion.button>
                    );
                  })}
                </motion.nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
    </div>
  );
};

export default Header;

