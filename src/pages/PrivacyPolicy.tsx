import { motion } from "framer-motion";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

const sections = [
  {
    title: "Information We Collect",
    content: `We collect information you provide directly, including your name, email address, phone number, and service address when you book a service. We also collect device and usage data such as IP address, browser type, and pages visited to improve our services.`,
  },
  {
    title: "How We Use Your Information",
    content: `Your information is used to process service bookings, communicate with you about appointments, send service reminders and updates, improve our services and customer experience, and comply with legal obligations. We never sell your personal data to third parties.`,
  },
  {
    title: "Data Security",
    content: `We implement industry-standard security measures to protect your personal information. This includes encrypted data transmission (SSL/TLS), secure data storage with access controls, and regular security audits. However, no method of transmission over the Internet is 100% secure.`,
  },
  {
    title: "Cookies & Tracking",
    content: `We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookie preferences through your browser settings. Essential cookies are required for the site to function properly.`,
  },
  {
    title: "Third-Party Services",
    content: `We may share your information with trusted third-party service providers who assist us in operating our business, such as payment processors and communication platforms. These partners are contractually obligated to protect your data.`,
  },
  {
    title: "Your Rights",
    content: `You have the right to access, update, or delete your personal information at any time. You may also opt out of marketing communications. To exercise these rights, contact us at privacy@zippyhand.com or call +91 98765 43210.`,
  },
  {
    title: "Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last Updated" date. Continued use of our services constitutes acceptance of the updated policy.`,
  },
];

const PrivacyPolicy = () => {
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
            Privacy <span className="text-primary">Policy</span>
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

export default PrivacyPolicy;
