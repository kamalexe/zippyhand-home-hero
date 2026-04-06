import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Bodhgaya, Gaya",
    service: "AC Repair",
    rating: 5,
    image: "https://st2.depositphotos.com/5765702/9403/i/950/depositphotos_94037688-stock-photo-young-traditional-indian-woman-with.jpg",
    review: "The technician arrived within 30 minutes and fixed my AC in no time. Very professional service! My family was suffering in the heat, and FixKro saved us.",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Tankuppa, Gaya",
    service: "Washing Machine Repair",
    rating: 5,
    image: "https://thumbs.dreamstime.com/b/portrait-happy-indian-man-smiling-home-mid-adult-sitting-sofa-handsome-latin-casual-relaxing-couch-cheerful-guy-195194501.jpg",
    review: "Excellent service! The technician was knowledgeable and fixed my washing machine's motor issue. The 90-day warranty gives me peace of mind.",
  },
  {
    id: 3,
    name: "Ananya Reddy",
    location: "Belganj, Gaya",
    service: "RO Service",
    rating: 5,
    image: "https://st2.depositphotos.com/4761309/7145/i/950/depositphotos_71451275-stock-photo-traditional-indian-woman.jpg",
    review: "Quick response and affordable pricing. The technician replaced my RO filters and explained everything clearly. Highly recommend FixKro!",
  },
  {
    id: 4,
    name: "Vikram Patel",
    location: "Wazirganj Gaya",
    service: "AC Gas Charging",
    rating: 4,
    image: "https://thumbs.dreamstime.com/b/handsome-indian-man-21061193.jpg",
    review: "My AC wasn't cooling properly. The technician diagnosed the issue quickly and did the gas charging. Now it's working perfectly. Great service!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

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
            Customer Love
          </motion.span>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            WHAT OUR <span className="text-primary">CUSTOMERS</span> SAY
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from real Gaya families who trust FixKro for their home repairs.
          </p>
        </motion.div>

        {/* Animated Marquee */}
        <div className="relative w-full overflow-hidden py-4">
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />

          <motion.div
            className="flex gap-4 md:gap-6 w-max"
            animate={{ x: [0, "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 40, 
            }}
          >
            {[...testimonials, ...testimonials].map((testimonial, idx) => (
              <div
                key={`${testimonial.id}-${idx}`}
                className="w-[300px] md:w-[420px] shrink-0"
              >
                <div className="bg-card border border-border rounded-3xl p-6 md:p-8 h-full shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:border-primary/20 transition-all duration-300 relative bg-white flex flex-col">
                  {/* Quote Icon */}
                  <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10" />

                  {/* Header Row */}
                  <div className="flex items-center gap-4 mb-5">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 md:w-16 md:h-16 rounded-2xl object-cover ring-2 ring-primary/10"
                    />
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-foreground">
                        {testimonial.name}
                      </h3>
                      <p className="text-muted-foreground text-xs md:text-sm">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 md:w-5 md:h-5 ${
                          i < testimonial.rating
                            ? "fill-warning text-warning"
                            : "text-muted"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-sm md:text-base text-foreground leading-relaxed flex-grow">
                    "{testimonial.review}"
                  </p>

                  <div className="mt-6 pt-4 border-t border-border/50 text-right">
                    <span className="text-[10px] md:text-xs font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-lg inline-block">
                      {testimonial.service}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border"
        >
          {[
            { value: "4.8", label: "Average Rating" },
            { value: "500+", label: "Happy Customers" },
            { value: "1000+", label: "Services Completed" },
            { value: "98%", label: "Satisfaction Rate" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
