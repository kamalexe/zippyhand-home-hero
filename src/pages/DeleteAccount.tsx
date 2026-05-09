import { motion } from "framer-motion";
import { Mail, AlertTriangle, ArrowRight } from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

const DeleteAccount = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <section className="pt-28 pb-16 bg-slate-50 relative overflow-hidden flex-grow">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#015168]/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 max-w-3xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-500 mb-6">
              <AlertTriangle className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
              Delete Your Account
            </h1>
            <p className="text-lg text-slate-600">
              We're sorry to see you go. If you would like to permanently delete your FixKro account and all associated data, please follow the instructions below.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-slate-100"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6">How to request account deletion</h2>
            
            <ol className="space-y-6 mb-8">
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#015168] text-white flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-lg mb-1">Send an email to support</h3>
                  <p className="text-slate-600">Send an email from the address associated with your FixKro account to our support team.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#015168] text-white flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-lg mb-1">Subject Line</h3>
                  <p className="text-slate-600">Please use <strong className="text-slate-800">"Account Deletion Request"</strong> as the subject line.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#015168] text-white flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-lg mb-1">Include your details</h3>
                  <p className="text-slate-600">Include your full name and phone number so we can verify your identity before processing the deletion.</p>
                </div>
              </li>
            </ol>

            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Send your request to:</p>
              <a 
                href="mailto:support@fixkro.in" 
                className="inline-flex items-center gap-3 text-xl md:text-2xl font-bold text-[#015168] hover:text-cyan-600 transition-colors"
              >
                <Mail className="w-6 h-6" />
                support@fixkro.in
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-100">
              <h4 className="font-semibold text-slate-900 mb-2">What happens next?</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Once we receive your request, our team will process it within 7-14 business days. All your personal data, service history, and account details will be permanently removed from our active systems in accordance with our Privacy Policy. Please note that this action cannot be undone.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DeleteAccount;
