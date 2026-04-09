import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import banner1 from "@/assets/banner1.png";
import banner2 from "@/assets/banner2.png";
import banner3 from "@/assets/banner3.png";

const WhyChooseUs = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  const banners = [
    { id: 1, src: banner1, alt: "Why Choose Us Banner 1" },
    { id: 2, src: banner2, alt: "Why Choose Us Banner 2" },
    { id: 3, src: banner3, alt: "Why Choose Us Banner 3" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring" as const, stiffness: 80, damping: 12 },
    },
  };

  return (
    <section id="why-us" className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10" ref={containerRef}>
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={itemVariants}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.span
            className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3"
            variants={itemVariants}
          >
            Why Trust Us
          </motion.span>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            WHY CHOOSE <span className="text-primary">FIXKRO</span>
          </h2>
        </motion.div>

        {/* Banners Horizontal Row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-center"
        >
          {banners.map((banner) => (
            <motion.div
              key={banner.id}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative overflow-hidden rounded-[2rem] border-[6px] border-white shadow-[0_0_25px_rgba(255,255,255,0.8),0_10px_30px_rgba(0,0,0,0.08)] bg-white group cursor-pointer w-full"
            >
              <img
                src={banner.src}
                alt={banner.alt}
                className="w-full h-auto block transform transition-transform duration-700 group-hover:scale-105"
              />
              {/* Subtle hover overlay */}
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
