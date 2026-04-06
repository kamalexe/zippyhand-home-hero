import { motion } from "framer-motion";
import ScreenCenter from "@/assets/1 SCREEN.png";
import ScreenLeft from "@/assets/side left.png";
import ScreenRight from "@/assets/side right.png";
import playIcon from "@/assets/play icon.avif";

interface HeroProps {
  onBookService: () => void;
}

const Hero = ({ onBookService }: HeroProps) => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-gradient-to-b from-white to-[#E8FCF5] pt-24 font-sans">
      
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

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href="https://play.google.com/store/apps/details?id=com.iotabuild.zippyhand"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105 transition-transform inline-block"
            >
              <img src={playIcon} alt="Get it on Google Play" className="h-14 md:h-16 w-auto object-contain drop-shadow-md" />
            </a>
          </div>

          <p className="text-lg md:text-xl text-gray-500 font-medium">
            Your home appliances, professionally repaired <br className="hidden md:block"/>
            <span className="text-gray-400">— exactly when you need it</span>
          </p>
        </motion.div>
      </div>

      <div className="relative w-full flex-grow flex items-end justify-center mt-8 md:mt-16 pointer-events-none">
        
        {/* Center UI Phones Group - Flower Animation */}
        <div className="relative z-10 w-[70%] md:w-[50%] max-w-[800px] flex justify-center items-end aspect-[14/10] pb-10">
          
          {/* Back left phone (Service Details) */}
          <motion.div
            className="absolute bottom-6 w-[37%] z-10"
            initial={{ opacity: 0, scale: 0.5, x: "30%", y: 200, rotate: 0, transformOrigin: "bottom center" }}
            animate={{ opacity: 1, scale: 0.9, x: "-60%", y: 0, rotate: -12 }}
            transition={{ duration: 1.2, delay: 0.6, type: "spring", stiffness: 60, damping: 14 }}
          >
             <img src={ScreenLeft} alt="Service Details" className="w-full h-auto object-contain rounded-[32px]" />          </motion.div>
          
          {/* Back right phone (Booking Sheet) */}
          <motion.div
            className="absolute bottom-6 w-[37%] z-10"
            initial={{ opacity: 0, scale: 0.5, x: "-30%", y: 200, rotate: 0, transformOrigin: "bottom center" }}
            animate={{ opacity: 1, scale: 0.9, x: "60%", y: 0, rotate: 12 }}
            transition={{ duration: 1.2, delay: 0.7, type: "spring", stiffness: 60, damping: 14 }}
          >
             <img src={ScreenRight} alt="Booking Summary" className="w-full h-auto object-contain rounded-[32px]" />          </motion.div>

          {/* Center main phone (Home) */}
          <motion.div
            className="relative z-20 w-[42%] pb-2"
            initial={{ opacity: 0, y: 300, scale: 0.7 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, type: "spring", stiffness: 70, damping: 14 }}
          >
             <img src={ScreenCenter} alt="Home Screen" className="w-full h-auto object-contain rounded-[36px] relative translate-y-6" />          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Hero;

