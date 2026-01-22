import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Snowflake, Wrench, Droplets, Wind, WashingMachine, GlassWater, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServicesProps {
  onBookService: (service?: string) => void;
}

const services = [
  {
    icon: Wrench,
    title: "AC Repair & Maintenance",
    description: "Complete cooling solutions - noise issues, cooling problems, and regular maintenance",
    price: "Starting ₹299",
    popular: true,
  },
  {
    icon: Snowflake,
    title: "AC Installation / Uninstallation",
    description: "Safe and professional AC setup or removal with proper handling",
    price: "Starting ₹499",
    popular: false,
  },
  {
    icon: Droplets,
    title: "Fix AC Water Leaking",
    description: "Stop annoying drips and water damage with expert leak repairs",
    price: "Starting ₹249",
    popular: false,
  },
  {
    icon: Wind,
    title: "AC Gas Charging",
    description: "Restore your AC's cooling efficiency with proper refrigerant refill",
    price: "Starting ₹1,499",
    popular: true,
  },
  {
    icon: WashingMachine,
    title: "Washing Machine Repair",
    description: "All brands serviced - drum issues, motor problems, and more",
    price: "Starting ₹349",
    popular: false,
  },
  {
    icon: GlassWater,
    title: "RO Repair & Service",
    description: "Ensure pure drinking water with filter replacement and repairs",
    price: "Starting ₹199",
    popular: false,
  },
];

const Services = ({ onBookService }: ServicesProps) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-20 md:py-28 bg-secondary/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-20 right-20 w-40 h-40 border border-primary/10 rounded-full" />
        <div className="absolute bottom-20 left-20 w-60 h-60 border border-primary/10 rounded-full" />
      </div>

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
            Our Services
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What We <span className="text-primary">Fix</span> for You
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From cooling to cleaning appliances, we've got all your home repair needs covered with expert care.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8 h-full shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      Popular
                    </span>
                  </div>
                )}

                {/* Icon */}
                <motion.div
                  className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Price & CTA */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                  <span className="text-lg font-semibold text-primary">{service.price}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary hover:bg-primary hover:text-primary-foreground group/btn"
                    onClick={() => onBookService(service.title)}
                  >
                    Book Now
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8 border-2"
            onClick={() => onBookService()}
          >
            View All Services
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
