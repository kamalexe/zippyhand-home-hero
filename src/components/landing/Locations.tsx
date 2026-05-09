import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const locations = [
  { name: "Noida", status: "Now Live", isNew: true },
];

const Locations = () => {
  return (
    <section id="locations" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#015168]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#015168]/10 text-[#015168] text-sm font-semibold mb-6"
          >
            <MapPin className="w-4 h-4" />
            Service Areas
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight"
          >
            Where We Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#015168] to-cyan-600">Live</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            We are rapidly expanding our trusted appliance repair services. See if we are active in your city.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {locations.map((loc, index) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`relative px-8 py-6 rounded-2xl border bg-white flex flex-col items-center gap-3 w-48 shadow-sm hover:shadow-xl transition-all duration-300 ${
                loc.isNew ? "border-[#015168]/30 ring-2 ring-[#015168]/10" : "border-slate-100"
              }`}
            >
              {loc.isNew && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-emerald-400 to-emerald-500 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-lg border border-emerald-300 animate-bounce">
                  New
                </div>
              )}
              
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${loc.isNew ? 'bg-[#015168]/10 text-[#015168]' : 'bg-slate-100 text-slate-500'}`}>
                <MapPin className="w-6 h-6" />
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-bold text-slate-900">{loc.name}</h3>
                <div className="flex items-center justify-center gap-1.5 mt-1">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs font-semibold text-emerald-600 uppercase tracking-widest">{loc.status}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
