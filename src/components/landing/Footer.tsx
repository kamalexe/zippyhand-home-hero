import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/icon.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "AC Repair", href: "/#services" },
      { name: "AC Installation", href: "/#services" },
      { name: "Washing Machine Repair", href: "/#services" },
      { name: "RO Service", href: "/#services" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "How It Works", href: "/#how-it-works" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
    ],
    support: [
      { name: "Help Center", href: "/#faq" },
      { name: "Contact Us", href: "/contact" },
      { name: "Terms of Service", href: "/terms-of-service" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Delete Account", href: "/delete-account" },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/thefixkro?utm_source=qr&igsh=MTl4bHY5NTBidmx5ZQ==", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/fixkro-home-appliance-expert/", label: "LinkedIn" },
  ];

  return (
    <footer className="relative bg-[#015168] text-white pt-16 overflow-hidden">
      
      {/* Massive Watermark at Bottom Center */}
      <div className="absolute inset-x-0 bottom-[-2%] w-full flex justify-center items-center pointer-events-none select-none z-0 overflow-hidden">
          <img 
            src={logo} 
            alt="" 
            className="w-full h-auto opacity-[0.03] grayscale brightness-200" 
          />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.a
              href="#"
              className="flex items-center gap-2 mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={logo}
                alt="FixKro logo"
                loading="lazy"
                className="h-auto w-32 md:w-40 object-contain mb-4"
              />
            </motion.a>
            <p className="text-white/70 mb-6 max-w-sm leading-relaxed">
              Your trusted partner for home appliance repairs in Noida. 
              Fast, reliable, and backed by our 90-day warranty.
            </p>
            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:+918787040661"
                className="flex items-center gap-3 text-white/70 hover:text-amber-400 transition-colors font-medium"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white/80 shadow-sm">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+91 87870 40661</span>
              </a>
              <a
                href="mailto:iota.build@gmail.com"
                className="flex items-center gap-3 text-white/70 hover:text-amber-400 transition-colors font-medium"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white/80 shadow-sm">
                  <Mail className="w-4 h-4" />
                </div>
                <span>iota.build@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-white/70 font-medium">
                <div className="w-8 h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white/80 flex-shrink-0 shadow-sm">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="mt-1">Noida, Uttar Pradesh, India</span>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-bold mb-5 text-white">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 font-medium hover:text-amber-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-bold mb-5 text-white">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 font-medium hover:text-amber-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-lg font-bold mb-5 text-white">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 font-medium hover:text-amber-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 bg-black/10">
          <div className="py-6 container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm font-medium">
              © {currentYear} FixKro. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white/70 hover:bg-white hover:text-[#015168] hover:shadow-lg transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
