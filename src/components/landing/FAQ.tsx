import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I book a service with FixKro?",
    answer:
      "Booking is super easy! Just click the 'Book Service' button, select your appliance and issue, choose a convenient time slot, and provide your address. Our team will confirm your booking within minutes.",
  },
  {
    question: "What areas in Gaya do you cover?",
    answer:
      "We currently serve all major areas in Gaya including Bodhgaya, Wazirganj, Belganj, Imamganj, Tankuppa, and many more. Enter your pincode during booking to check availability.",
  },
  {
    question: "What is your pricing? Are there any hidden charges?",
    answer:
      "We believe in transparent pricing with no hidden charges. You'll see the estimated cost before booking. Our technician will provide a final quote after inspection. If additional parts are needed, we'll get your approval first.",
  },
  {
    question: "Do you provide warranty on repairs?",
    answer:
      "Yes! We offer a 90-day warranty on all our repair services. If the same issue recurs within this period, we'll fix it for free. This warranty covers both labor and replaced parts.",
  },
  {
    question: "How quickly can a technician arrive?",
    answer:
      "We have an average response time of 45 minutes for most areas in Gaya. For urgent repairs, we try to dispatch a technician immediately. You can also schedule a visit at your preferred time.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept multiple payment options for your convenience - Cash, UPI (GPay, PhonePe, Paytm), Credit/Debit Cards, and Net Banking. You pay only after the service is completed to your satisfaction.",
  },
  {
    question: "Are your technicians verified and trained?",
    answer:
      "Absolutely! All our technicians undergo thorough background verification and extensive training. They are skilled professionals with years of experience in appliance repair.",
  },
];

const FAQ = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="py-20 md:py-28 bg-secondary/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-primary/5 to-transparent" />
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
            Got Questions?
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about our services. Can't find what you're looking for? Contact us!
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6 shadow-sm hover:shadow-md transition-shadow data-[state=open]:shadow-lg"
                >
                  <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-foreground hover:text-primary py-5 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            Still have questions?{" "}
            <a href="#" className="text-primary font-semibold hover:underline">
              Contact our support team
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
