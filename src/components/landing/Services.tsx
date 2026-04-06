import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Snowflake, Wrench, Droplets, Wind, WashingMachine, GlassWater, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";

interface ServicesProps {
  onBookService: (service?: string) => void;
}

const iconMap: Record<string, any> = {
  Wrench,
  Snowflake,
  Droplets,
  Wind,
  WashingMachine,
  GlassWater,
};

const defaultServices = [
  { id: 1, title: 'AC Repair & Service', description: 'Expert AC repair, installation, and maintenance for all brands.', price: 'Starts at ₹299', icon: 'Snowflake', popular: true },
  { id: 2, title: 'Washing Machine Repair', description: 'Quick fixes for front-load, top-load, and semi-automatic machines.', price: 'Starts at ₹199', icon: 'WashingMachine', popular: false },
  { id: 3, title: 'RO Water Purifier', description: 'Filter replacement, deep cleaning, and overall RO service.', price: 'Starts at ₹149', icon: 'Droplets', popular: true },
  { id: 4, title: 'Refrigerator Repair', description: 'Cooling issues, gas refilling, and compressor repairs.', price: 'Starts at ₹249', icon: 'Wind', popular: false },
  { id: 5, title: 'Microwave Oven Repair', description: 'Heating problems and panel PCB repairs fixed safely.', price: 'Starts at ₹199', icon: 'Wrench', popular: false },
  { id: 6, title: 'Geyser Repair', description: 'Thermostat replacement, water leakage, and installation experts.', price: 'Starts at ₹249', icon: 'Wrench', popular: false },
];

const Services = ({ onBookService }: ServicesProps) => {
  const { data: services = [], isLoading } = useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      console.log('Fetching services from Supabase...');
      try {
        const { data, error } = await supabase
          .from('services')
          .select('*')
          .order('id');

        if (error) throw error;
        if (!data || data.length === 0) return defaultServices;
        
        console.log('Services fetched successfully:', data);
        return data;
      } catch (err) {
        console.error('Supabase error fetching services, using fallback data:', err);
        return defaultServices;
      }
    },
  });

  return (
    <section id="services" className="py-20 md:py-28 bg-secondary/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-20 right-20 w-40 h-40 border border-primary/10 rounded-full" />
        <div className="absolute bottom-20 left-20 w-60 h-60 border border-primary/10 rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Our Services
          </motion.span>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            WHAT WE <span className="text-primary">FIX</span> FOR YOU
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From cooling to cleaning appliances, we've got all your home repair needs covered with expert care.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {isLoading ? (
            <div className="col-span-full text-center py-10">Loading services...</div>
          ) : (
            services.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Wrench;
              return (
                <motion.div
                  key={service.id || service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
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
                      <IconComponent className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
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
              );
            })
          )}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.6, duration: 0.5 }}
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
