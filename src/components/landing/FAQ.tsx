import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How do I book a service with FixKro?",
    answer:
      "Booking is super easy! Just click the 'Book Service' button, select your appliance and issue, choose a convenient time slot, and provide your address. Our team will confirm your booking within minutes.",
  },
  {
    question: "What areas do you currently cover?",
    answer:
      "We are currently exclusively serving all major sectors and areas in Noida. We are rapidly expanding and plan to launch in more cities soon!",
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
      "We have an average response time of 45 minutes for most sectors in Noida. For urgent repairs, we try to dispatch a technician immediately. You can also schedule a visit at your preferred time.",
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
  const [openItem, setOpenItem] = useState<string | undefined>(undefined);

  return (
    <section id="faq" className="py-24 md:py-32 bg-secondary/20 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -right-[5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute -bottom-[10%] -left-[5%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03]" 
             style={{ backgroundImage: "radial-gradient(circle at 2px 2px, var(--primary) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={containerRef}>
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6 shadow-sm"
          >
            <HelpCircle className="w-4 h-4" />
            <span className="text-sm font-semibold uppercase tracking-wider">Common Queries</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight"
          >
            Frequently Asked <span className="text-primary relative">
              Questions
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="2" strokeOpacity="0.3" />
              </svg>
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Have a question? We've got you covered. If you don't find what you're looking for, feel free to reach out to our team.
          </motion.p>
        </div>

        {/* FAQ Accordion Grid */}
        <div className="max-w-4xl mx-auto">
          <Accordion 
            type="single" 
            collapsible 
            className="space-y-4 w-full"
            onValueChange={setOpenItem}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * index + 0.3, duration: 0.5 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className={`
                    group border-none rounded-2xl transition-all duration-300
                    ${openItem === `item-${index}` 
                      ? "bg-card shadow-xl ring-1 ring-primary/20 scale-[1.02]" 
                      : "bg-card/50 hover:bg-card hover:shadow-md glass-effect"}
                  `}
                >
                  <AccordionTrigger className="px-6 md:px-8 py-6 hover:no-underline flex gap-4 text-left [&>svg]:hidden">
                    <span className={`
                      flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold transition-colors
                      ${openItem === `item-${index}` ? "bg-primary text-white" : "bg-primary/10 text-primary"}
                    `}>
                      {index + 1}
                    </span>
                    <span className="text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors pr-4">
                      {faq.question}
                    </span>
                    <div className="ml-auto flex-shrink-0">
                      <div className={`
                        w-6 h-6 rounded-full border-2 border-primary/30 flex items-center justify-center transition-all duration-300
                        ${openItem === `item-${index}` ? "bg-primary border-primary rotate-180" : ""}
                      `}>
                        {openItem === `item-${index}` ? (
                          <Minus className="w-3 h-3 text-white" />
                        ) : (
                          <Plus className="w-3 h-3 text-primary group-hover:text-primary" />
                        )}
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 md:px-8 pb-8 pt-0">
                    <div className="pl-12 text-muted-foreground text-lg leading-relaxed border-l-2 border-primary/10 ml-4">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>

      </div>
    </section>
  );
};

export default FAQ;

