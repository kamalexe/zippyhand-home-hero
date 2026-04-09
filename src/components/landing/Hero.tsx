import { motion, useScroll, useTransform } from "framer-motion";
import { Download } from "lucide-react";
import ScreenCenter from "@/assets/1-screen.png";
import ScreenLeft from "@/assets/side-left.png";
import ScreenRight from "@/assets/side-right.png";
import playIcon from "@/assets/play-icon.avif";

interface HeroProps {
  onBookService: () => void;
}

const Hero = ({ onBookService }: HeroProps) => {
  const { scrollY } = useScroll();
  
  // Tie expansion to the first 400 pixels of scroll
  const leftX = useTransform(scrollY, [0, 400], ["0%", "-60%"]);
  const rightX = useTransform(scrollY, [0, 400], ["0%", "60%"]);
  
  const leftRotate = useTransform(scrollY, [0, 400], [0, -12]);
  const rightRotate = useTransform(scrollY, [0, 400], [0, 12]);
  
  const sideScale = useTransform(scrollY, [0, 400], [0.8, 0.9]);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-gradient-to-b from-white to-[#E8FCF5] pt-48 font-sans">
      
      {/* Background soft glow - inspired by Pronto light green bottom gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 rounded-full blur-[120px]"
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-20 flex-1 flex flex-col items-center mt-12">
        {/* Center Content */}
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 
            style={{ fontFamily: "'Poppins', sans-serif" }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1A1F2C] leading-[1.1] mb-6 tracking-tight"
          >
            Trusted appliance repair<br />in minutes!
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 font-medium mb-8">
            Download the app now
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-12 mb-10">
            <div className="flex flex-col items-center group">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.15em] mb-2 group-hover:text-cyan-600 transition-colors">For Customers</p>
              <a
                href="https://play.google.com/store/apps/details?id=com.iotabuild.zippyhand"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:-translate-y-1 hover:scale-105 transition-all duration-300 inline-block"
              >
                <img src={playIcon} alt="Download Customer App" className="h-14 md:h-16 w-auto object-contain drop-shadow-md" />
              </a>
            </div>

            <div className="hidden sm:block w-px h-12 bg-gray-300 rounded-full opacity-60"></div>
            
            {/* Mobile divider */}
            <div className="sm:hidden w-12 h-px bg-gray-200 rounded-full my-2"></div>

            <div className="flex flex-col items-center group">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.15em] mb-2 group-hover:text-amber-500 transition-colors">For Partners</p>
              <a
                href="/partner-app.apk"
                download
                className="h-14 md:h-16 px-6 sm:px-8 flex items-center justify-center gap-3 bg-gradient-to-tr from-zinc-900 to-black text-white rounded-[0.8rem] shadow-[0_8px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_25px_rgba(232,212,77,0.2)] hover:-translate-y-1 hover:scale-105 transition-all duration-300 border border-zinc-800/80"
              >
                <Download className="w-5 md:w-6 h-5 md:h-6 text-[#E8D44D] drop-shadow-sm group-hover:scale-110 group-hover:-translate-y-0.5 transition-transform" />
                <div className="flex flex-col items-start leading-tight">
                   <span className="text-[9px] md:text-[10px] text-zinc-400 font-medium uppercase tracking-widest">Download</span>
                   <span className="text-[14px] md:text-[16px] font-bold tracking-wider text-zinc-100">Android APK</span>
                </div>
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative w-full flex-grow flex items-end justify-center mt-8 md:mt-16 pointer-events-none">
        
        {/* Center UI Phones Group - Flower Animation */}
        <div className="relative z-10 w-[70%] md:w-[50%] max-w-[800px] flex justify-center items-end aspect-[14/10] pb-10">
          
          {/* Back left phone (Service Details) */}
          <motion.div
            className="absolute bottom-6 w-[37%] z-10"
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ x: leftX, rotate: leftRotate, scale: sideScale, transformOrigin: "bottom center" }}
            transition={{ duration: 1.2, delay: 0.5, type: "spring", stiffness: 60, damping: 14 }}
          >
            <img
              src={ScreenLeft}
              alt="Service Details"
              width={450}
              height={900}
              className="w-full h-auto object-contain"
            />
          </motion.div>
          
          {/* Back right phone (Booking Sheet) */}
          <motion.div
            className="absolute bottom-6 w-[37%] z-10"
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ x: rightX, rotate: rightRotate, scale: sideScale, transformOrigin: "bottom center" }}
            transition={{ duration: 1.2, delay: 0.5, type: "spring", stiffness: 60, damping: 14 }}
          >
            <img
              src={ScreenRight}
              alt="Booking Summary"
              width={450}
              height={900}
              className="w-full h-auto object-contain"
            />
          </motion.div>

          {/* Center main phone (Home) */}
          <motion.div
            className="relative z-20 w-[42%] pb-2"
            initial={{ opacity: 0, y: 300, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, type: "spring", stiffness: 70, damping: 14 }}
          >
            <img
              src={ScreenCenter}
              alt="Home Screen"
              width={500}
              height={1000}
              className="w-full h-auto object-contain relative translate-y-6"
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Hero;

