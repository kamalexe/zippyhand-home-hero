import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Star, Clock, MapPin, Wrench, Snowflake, Droplets } from "lucide-react";

interface HeroProps {
  onBookService: () => void;
}

const Hero = ({ onBookService }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-secondary via-background to-accent pt-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Location Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <MapPin className="w-4 h-4" />
              Now Serving in Bangalore
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Expert Home Appliance{" "}
              <span className="text-primary relative">
                Repairs
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                >
                  <motion.path
                    d="M2 10C50 2 150 2 198 10"
                    stroke="hsl(var(--primary))"
                    strokeWidth="4"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                  />
                </svg>
              </span>{" "}
              at Your Doorstep
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              From AC repairs to washing machine fixes, our verified professionals 
              deliver fast, reliable service with a 90-day warranty. 
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <Button
                size="lg"
                onClick={onBookService}
                className="text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Book Service Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 rounded-full border-2 hover:bg-primary/5"
                asChild
              >
                <a href="#services">Explore Services</a>
              </Button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <div className="flex items-center gap-2 text-sm">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                  ))}
                </div>
                <span className="font-semibold">4.8</span>
                <span className="text-muted-foreground">Rating</span>
              </div>
              <div className="h-4 w-px bg-border hidden sm:block" />
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-primary" />
                <span className="font-semibold">45 min</span>
                <span className="text-muted-foreground">Avg. Response</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            {/* Main illustration container */}
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Central Circle with Technician */}
              <motion.div
                className="absolute inset-0 m-auto w-72 h-72 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-2xl"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-center text-primary-foreground">
                  <Wrench className="w-20 h-20 mx-auto mb-3" />
                  <p className="text-xl font-bold">Expert Care</p>
                  <p className="text-sm opacity-90">For Your Home</p>
                </div>
              </motion.div>

              {/* Floating Appliance Icons */}
              <motion.div
                className="absolute top-0 left-1/4 w-20 h-20 bg-background rounded-2xl shadow-xl flex items-center justify-center border border-border"
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Snowflake className="w-10 h-10 text-primary" />
              </motion.div>

              <motion.div
                className="absolute top-1/4 right-0 w-16 h-16 bg-background rounded-xl shadow-lg flex items-center justify-center border border-border"
                animate={{ y: [0, -20, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <Droplets className="w-8 h-8 text-primary" />
              </motion.div>

              <motion.div
                className="absolute bottom-1/4 left-0 w-18 h-18 bg-background rounded-xl shadow-lg flex items-center justify-center border border-border p-4"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <svg className="w-10 h-10 text-primary" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="4" y="2" width="16" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <circle cx="12" cy="16" r="2" fill="currentColor"/>
                  <rect x="7" y="5" width="10" height="6" rx="1" fill="currentColor" opacity="0.3"/>
                </svg>
              </motion.div>

              <motion.div
                className="absolute bottom-0 right-1/4 w-24 h-24 bg-success/10 rounded-full flex items-center justify-center"
                animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-center">
                  <p className="text-2xl font-bold text-success">500+</p>
                  <p className="text-xs text-muted-foreground">Happy Users</p>
                </div>
              </motion.div>

              {/* Decorative dots */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-primary/30 rounded-full"
                  style={{
                    top: `${20 + i * 15}%`,
                    left: `${10 + (i % 2) * 80}%`,
                  }}
                  animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full">
          <path
            d="M0 120L48 108C96 96 192 72 288 66C384 60 480 72 576 78C672 84 768 84 864 78C960 72 1056 60 1152 60C1248 60 1344 72 1392 78L1440 84V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
