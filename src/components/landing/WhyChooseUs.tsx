import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Shield, Clock, Award, Users } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Verified Professionals",
    description: "Background-checked and trained experts you can trust",
    value: "100%",
    suffix: "Verified",
    color: "primary",
  },
  {
    icon: Award,
    title: "90 Days Warranty",
    description: "Free re-service guarantee on all repairs",
    value: "90",
    suffix: "Days",
    color: "success",
  },
  {
    icon: Clock,
    title: "45 Min Response",
    description: "Quick arrival time for urgent repairs",
    value: "45",
    suffix: "Min",
    color: "warning",
  },
  {
    icon: Users,
    title: "Trusted by Many",
    description: "Join our growing family of happy customers",
    value: "500",
    suffix: "+",
    color: "primary",
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
    <span ref={ref} className="text-4xl md:text-5xl font-bold">
      {value === "100%" ? value : count}
      {value !== "100%" && suffix}
    </span>
  );
};

const WhyChooseUs = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="py-20 md:py-28 bg-background relative overflow-hidden">
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

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
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
                
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className={`w-14 h-14 rounded-xl bg-${feature.color}/10 flex items-center justify-center mb-5`}
                    style={{
                      backgroundColor: `hsl(var(--${feature.color}) / 0.1)`,
                    }}
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <feature.icon
                      className="w-7 h-7"
                      style={{ color: `hsl(var(--${feature.color}))` }}
                    />
                  </motion.div>

                  {/* Counter */}
                  <div className="text-primary mb-2">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
