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
    description: "Join our growing family of happy customers across Gaya",
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
    <section id="why-us" className="py-12 md:py-20 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10" ref={containerRef}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            WHY CHOOSE <span className="text-primary">FIXKRO</span>
          </h2>
        </motion.div>

        {/* Features Grid - 2x2 on all screen sizes */}
        <motion.div 
          className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
              },
            },
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                  },
                },
              }}
              whileHover={{ 
                y: -5, 
                transition: { type: "spring", stiffness: 300 }
              }}
              className="group"
            >
              <div className="bg-card rounded-xl sm:rounded-2xl p-3 sm:p-5 md:p-6 h-full shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
                {/* Image container */}
                <motion.div
                  className="w-full aspect-[4/3] rounded-lg sm:rounded-xl overflow-hidden bg-muted mb-3 sm:mb-4"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Counter badge */}
                <div className="mb-2">
                  <Counter value={feature.value} suffix={feature.suffix} />
                </div>

                {/* Title */}
                <h3 className="text-xs sm:text-sm md:text-base font-semibold text-foreground leading-tight">
                  {feature.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
