import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import technicianImg from "@/assets/technician-1.png";
import warrantyImg from "@/assets/warranty-badge.png";
import fastResponseImg from "@/assets/fast-response.png";
import happyCustomersImg from "@/assets/happy-customers.png";

const features = [
  {
    image: technicianImg,
    title: "Verified Professionals",
    description: "Background-checked and trained experts you can trust with your home appliances",
    value: "100%",
    suffix: "Verified",
  },
  {
    image: warrantyImg,
    title: "90 Days Warranty",
    description: "Free re-service guarantee on all repairs. Your satisfaction is our priority",
    value: "90",
    suffix: "Days",
  },
  {
    image: fastResponseImg,
    title: "45 Min Response",
    description: "Quick arrival time for urgent repairs. We value your time",
    value: "45",
    suffix: "Min",
  },
  {
    image: happyCustomersImg,
    title: "Trusted by Many",
    description: "Join our growing family of happy customers across Bangalore",
    value: "500",
    suffix: "+",
  },
];

const Counter = ({ value, suffix }: { value: string; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const numericValue = parseInt(value) || 0;

  useEffect(() => {
    if (isInView && numericValue > 0) {
      const duration = 2000;
      const steps = 60;
      const increment = numericValue / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          setCount(numericValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, numericValue]);

  return (
    <span ref={ref} className="text-3xl md:text-4xl font-bold text-primary">
      {value === "100%" ? value : count}
      {value !== "100%" && suffix}
    </span>
  );
};

const WhyChooseUs = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="py-20 md:py-28 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10" ref={containerRef}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Why ZippyHand?
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            The <span className="text-primary">Smart Choice</span> for Home Repairs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're not just another repair service. We're your trusted partner for keeping your home running smoothly.
          </p>
        </motion.div>

        {/* Features Grid - 1 col on mobile, 2x2 on tablet+ */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
              },
            },
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={{
                hidden: { 
                  opacity: 0, 
                  scale: 0.8,
                  rotateX: 45,
                  y: 60,
                },
                visible: { 
                  opacity: 1, 
                  scale: 1,
                  rotateX: 0,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    duration: 0.6,
                  },
                },
              }}
              whileHover={{ 
                y: -10, 
                scale: 1.03,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="group perspective-1000"
            >
              <motion.div 
                className="bg-card border border-border rounded-2xl p-6 md:p-8 h-full shadow-sm hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
                initial={{ boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
                whileHover={{ 
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
              >
                {/* Animated background gradient */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                />
                
                {/* Shimmer effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "200%" }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
                
                <div className="relative z-10 flex flex-col items-center text-center gap-4">
                  {/* Image with pop-in animation */}
                  <motion.div
                    className="w-28 h-28 md:w-32 md:h-32 rounded-2xl overflow-hidden bg-muted flex-shrink-0 shadow-lg"
                    initial={{ scale: 0, rotate: -10 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : {}}
                    transition={{ 
                      delay: 0.3 + index * 0.15, 
                      type: "spring", 
                      stiffness: 200,
                      damping: 15 
                    }}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 3,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                  >
                    <motion.img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.4 }}
                    />
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    {/* Counter with bounce */}
                    <motion.div 
                      className="mb-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.4 + index * 0.15, duration: 0.5 }}
                    >
                      <Counter value={feature.value} suffix={feature.suffix} />
                    </motion.div>

                    {/* Title with slide-up */}
                    <motion.h3 
                      className="text-lg md:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300"
                      initial={{ opacity: 0, y: 15 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.15, duration: 0.4 }}
                    >
                      {feature.title}
                    </motion.h3>
                    
                    {/* Description with fade-in */}
                    <motion.p 
                      className="text-muted-foreground text-sm leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.6 + index * 0.15, duration: 0.5 }}
                    >
                      {feature.description}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
