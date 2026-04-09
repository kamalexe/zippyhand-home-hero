import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "AC Repair", href: "#services" },
      { name: "AC Installation", href: "#services" },
      { name: "Washing Machine Repair", href: "#services" },
      { name: "RO Service", href: "#services" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "How It Works", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
    ],
    support: [
      { name: "Help Center", href: "#" },
      { name: "Contact Us", href: "/contact" },
      { name: "Terms of Service", href: "/terms-of-service" },
      { name: "Privacy Policy", href: "/privacy-policy" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="relative bg-white text-slate-800 pt-16 overflow-hidden">
      
      {/* Massive Watermark at Bottom Center */}
      <div className="absolute inset-x-0 bottom-[-2%] w-full flex justify-center items-center pointer-events-none select-none z-0 overflow-hidden">
         <span className="text-[32vw] md:text-[26vw] font-black text-slate-50/80 uppercase tracking-tighter leading-none whitespace-nowrap text-center w-full">
           FixKro
         </span>
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
              <img src={logo} alt="FixKro logo" className="h-10 w-10 md:h-12 md:w-12 rounded-xl object-cover shadow-sm" />
              <span className="text-2xl md:text-3xl font-extrabold text-slate-800 tracking-tight">
                Fix<span className="text-[#E8D44D]">Kro</span>
              </span>
            </motion.a>
            <p className="text-slate-500 mb-6 max-w-sm leading-relaxed">
              Your trusted partner for home appliance repairs in Agra. 
              Fast, reliable, and backed by our 90-day warranty.
            </p>
            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:+918787040661"
                className="flex items-center gap-3 text-slate-500 hover:text-amber-500 transition-colors font-medium"
              >
                <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 shadow-sm">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+91 87870 40661</span>
              </a>
              <a
                href="mailto:iota.build@gmail.com"
                className="flex items-center gap-3 text-slate-500 hover:text-amber-500 transition-colors font-medium"
              >
                <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 shadow-sm">
                  <Mail className="w-4 h-4" />
                </div>
                <span>iota.build@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-slate-500 font-medium">
                <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 flex-shrink-0 shadow-sm">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="mt-1">Agra, Uttar Pradesh, India</span>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-bold mb-5 text-slate-800">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-500 font-medium hover:text-amber-500 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-bold mb-5 text-slate-800">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-500 font-medium hover:text-amber-500 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-lg font-bold mb-5 text-slate-800">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-500 font-medium hover:text-amber-500 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-100 backdrop-blur-sm bg-white/50">
          <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm font-medium">
              © {currentYear} FixKro. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 hover:bg-white hover:text-amber-500 hover:border-amber-200 hover:shadow-md transition-all"
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
