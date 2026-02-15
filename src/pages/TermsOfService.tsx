import { motion } from "framer-motion";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

const sections = [
  {
    title: "1. Services",
    content: `ZippyHand provides home appliance repair and maintenance services in Bangalore. Services include but are not limited to AC repair, washing machine repair, refrigerator repair, and water purifier servicing. All services are subject to availability and may vary by location.`,
  },
  {
    title: "2. Booking & Cancellation",
    content: `Services can be booked through our website or by phone. Cancellations made at least 2 hours before the scheduled appointment are free of charge. Late cancellations or no-shows may incur a convenience fee. We reserve the right to reschedule appointments due to unforeseen circumstances.`,
  },
  {
    title: "3. Pricing & Payment",
    content: `All prices are displayed upfront before service confirmation. Payment is due upon completion of service. We accept cash, UPI, and major digital payment methods. Additional charges may apply for spare parts, which will be communicated and approved before installation.`,
  },
  {
    title: "4. Warranty",
    content: `All repairs come with a 90-day service warranty covering the specific issue repaired. The warranty does not cover new issues, physical damage, or problems caused by misuse. Warranty claims must be reported within the warranty period by contacting our support team.`,
  },
  {
    title: "5. Liability",
    content: `ZippyHand is not liable for pre-existing damage to appliances, issues arising from misuse or neglect, damage caused by power surges or natural events, or consequential damages beyond the repair cost. Our maximum liability is limited to the service fee paid.`,
  },
  {
    title: "6. User Responsibilities",
    content: `Users must provide accurate information when booking services, ensure safe access for technicians, be present or arrange for an authorized adult during the service visit, and report any dissatisfaction within 48 hours of service completion.`,
  },
  {
    title: "7. Intellectual Property",
    content: `All content on the ZippyHand website, including text, graphics, logos, and software, is the property of ZippyHand and protected by intellectual property laws. Unauthorized use or reproduction is prohibited.`,
  },
  {
    title: "8. Governing Law",
    content: `These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Bangalore, Karnataka.`,
  },
];

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-28 pb-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Terms of <span className="text-primary">Service</span>
          </motion.h1>
          <motion.p
            className="text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            Last updated: February 15, 2026
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl space-y-8">
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <h2 className="text-xl font-semibold text-foreground mb-3">{section.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{section.content}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfService;
