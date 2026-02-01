import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Bodhgaya, Gaya",
    service: "AC Repair",
    rating: 5,
    image: "https://st2.depositphotos.com/5765702/9403/i/950/depositphotos_94037688-stock-photo-young-traditional-indian-woman-with.jpg",
    review: "The technician arrived within 30 minutes and fixed my AC in no time. Very professional service! My family was suffering in the heat, and ZippyHand saved us.",
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
    review: "Quick response and affordable pricing. The technician replaced my RO filters and explained everything clearly. Highly recommend ZippyHand!",
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

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
            Customer Love
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our <span className="text-primary">Customers</span> Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from real Gaya families who trust ZippyHand for their home repairs.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-lg relative"
          >
            {/* Quote Icon */}
            <Quote className="absolute top-8 right-8 w-12 h-12 text-primary/10" />

            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-20 h-20 md:w-24 md:h-24 rounded-2xl object-cover"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-lg">
                    {testimonials[currentIndex].service}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonials[currentIndex].rating
                          ? "fill-warning text-warning"
                          : "text-muted"
                      }`}
                    />
                  ))}
                </div>

                {/* Review */}
                <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                  "{testimonials[currentIndex].review}"
                </p>

                {/* Author */}
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {testimonials[currentIndex].location}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-2"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-muted hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-2"
              onClick={nextTestimonial}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
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
