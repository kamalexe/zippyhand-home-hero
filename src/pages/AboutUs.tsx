import { motion } from "framer-motion";
import { Shield, Users, Clock, Award, Heart, Target } from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

const values = [
  { icon: Shield, title: "Trust & Transparency", description: "No hidden charges, upfront pricing, and honest diagnostics every time." },
  { icon: Clock, title: "Punctuality", description: "We respect your time. Our technicians arrive within the promised window." },
  { icon: Heart, title: "Customer First", description: "Your satisfaction is our top priority. We go above and beyond to deliver." },
  { icon: Award, title: "Quality Assurance", description: "90-day warranty on all repairs with genuine spare parts guaranteed." },
  { icon: Users, title: "Expert Technicians", description: "Trained, verified, and experienced professionals you can trust." },
  { icon: Target, title: "Precision Repairs", description: "We diagnose accurately and fix it right the first time, every time." },
];

const team = [
  { name: "Rajesh Kumar", role: "Founder & CEO", description: "15+ years in home services industry" },
  { name: "Priya Sharma", role: "Operations Head", description: "Ensures seamless service delivery" },
  { name: "Amit Patel", role: "Lead Technician", description: "Expert in AC & refrigeration systems" },
  { name: "Sneha Reddy", role: "Customer Success", description: "Dedicated to your satisfaction" },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            About <span className="text-primary">ZippyHand</span>
          </motion.h1>
          <motion.p
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Bangalore's most trusted home appliance repair service. We're on a mission to make home repairs hassle-free, affordable, and reliable.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                ZippyHand was born from a simple frustration — finding a trustworthy technician for home appliance repairs in Bangalore shouldn't be so hard. Founded in 2020, we set out to bridge the gap between quality service and convenience.
              </p>
              <p>
                Today, we've served over 15,000+ happy customers across Bangalore, with a team of 50+ certified technicians specializing in AC repair, washing machine service, refrigerator repair, and water purifier maintenance.
              </p>
              <p>
                Our commitment to transparent pricing, genuine spare parts, and a 90-day service warranty has made us Bangalore's preferred choice for home appliance repairs.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Our Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-card rounded-xl p-6 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Meet Our Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-card rounded-xl p-6 text-center shadow-sm border border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">{member.name[0]}</span>
                </div>
                <h3 className="font-semibold text-foreground">{member.name}</h3>
                <p className="text-primary text-sm font-medium">{member.role}</p>
                <p className="text-muted-foreground text-xs mt-2">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
