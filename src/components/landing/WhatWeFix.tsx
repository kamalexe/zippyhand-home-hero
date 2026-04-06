import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import applianceAc from "@/assets/appliance-ac.png";
import applianceWashing from "@/assets/appliance-washing.png";
import applianceRo from "@/assets/appliance-ro.png";
import applianceFridge from "@/assets/appliance-fridge.png";
import applianceMicrowave from "@/assets/appliance-microwave.png";
import applianceGeyser from "@/assets/appliance-geyser.png";

const appliances = [
  { image: applianceAc, name: "Air Conditioner", tag: "Repair & Service" },
  { image: applianceWashing, name: "Washing Machine", tag: "All Brands" },
  { image: applianceRo, name: "RO Purifier", tag: "Filter & Service" },
  { image: applianceFridge, name: "Refrigerator", tag: "Expert Care" },
  { image: applianceMicrowave, name: "Microwave", tag: "Quick Fix" },
  { image: applianceGeyser, name: "Geyser", tag: "Install & Repair" },
];

const WhatWeFix = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <motion.span
            className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Appliances
          </motion.span>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            WHAT WE <span className="text-primary">FIX</span> FOR YOU
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto font-medium">
            We repair all major home appliances with genuine parts and expert technicians
          </p>
        </motion.div>

        {/* Animated Marquee */}
        <div className="relative w-full max-w-7xl mx-auto overflow-hidden px-4 md:px-0 py-4">
          {/* Edge Gradient Fades */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-muted/30 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-muted/30 to-transparent z-20 pointer-events-none" />

          {/* Scrolling Container */}
          <motion.div
            className="flex gap-4 md:gap-6 w-max"
            animate={{ x: [0, "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 35, // Smooth scrolling speed
            }}
          >
            {[...appliances, ...appliances].map((appliance, idx) => (
              <div
                key={`${appliance.name}-${idx}`}
                className="w-[160px] md:w-[240px] shrink-0 flex items-center justify-center cursor-pointer px-4 md:px-6"
              >
                <img
                  src={appliance.image}
                  alt={appliance.name}
                  className="w-full h-auto max-h-[160px] md:max-h-[240px] object-contain drop-shadow-xl hover:scale-110 hover:drop-shadow-2xl transition-all duration-500 ease-out"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeFix;
