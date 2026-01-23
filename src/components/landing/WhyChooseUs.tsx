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

        {/* Features Grid - 2x2 */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8 h-full shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
                  {/* Image */}
                  <motion.div
                    className="w-32 h-32 md:w-36 md:h-36 rounded-2xl overflow-hidden bg-muted flex-shrink-0 shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Content */}
                  <div className="text-center md:text-left flex-1">
                    {/* Counter */}
                    <div className="mb-2">
                      <Counter value={feature.value} suffix={feature.suffix} />
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
