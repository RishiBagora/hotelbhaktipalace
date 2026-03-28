import React from "react";
import { motion } from "framer-motion";
import { Leaf, Sparkles, Wind } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

const DiningPhilosophy = () => {
  return (
    <section className="bg-[#FAF9F6] py-24 md:py-36 border-t border-[#f0ebe3] relative overflow-hidden">
      
      {/* 1. BACKGROUND DECOR (Mandala Watermark) */}
      <div className="absolute left-[-10%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.03] pointer-events-none">
        <img src="https://cdn-icons-png.flaticon.com/512/5024/5024500.png" alt="Mandala" className="w-full h-full animate-spin-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* --- LEFT: TRADITIONAL TEXT --- */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#c49a6c] font-bold font-sans">
                Our Culinary Values
              </span>
              <div className="h-px w-12 bg-[#c49a6c]/30" />
            </div>

            <h2 className="text-4xl md:text-6xl font-serif font-light text-[#1a1a1a] leading-tight mb-10">
              Rooted in <span className="italic text-[#888]">Purity</span>, <br />
              Served with <span className="italic text-[#c49a6c]">Bhakti</span>
            </h2>

            <p className="text-[#666] text-lg md:text-xl font-light leading-[1.9] tracking-wide mb-12 max-w-2xl">
              At Hotel Bhakti, every meal is prepared following the sacred traditions. We believe that food cooked with devotion and pure ingredients nourishes both the body and the soul.
            </p>

            {/* 3 PILLARS GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-10 border-t border-[#c49a6c]/10">
              <div className="space-y-4">
                <Leaf size={24} strokeWidth={1} className="text-[#c49a6c]" />
                <h4 className="font-serif text-lg text-[#1a1a1a]">Satvik Food</h4>
                <p className="text-[11px] text-[#888] leading-relaxed uppercase tracking-widest">No Onion • No Garlic <br/> (On Request)</p>
              </div>
              <div className="space-y-4">
                <Sparkles size={24} strokeWidth={1} className="text-[#c49a6c]" />
                <h4 className="font-serif text-lg text-[#1a1a1a]">Pure Veg</h4>
                <p className="text-[11px] text-[#888] leading-relaxed uppercase tracking-widest">Farm Fresh Produce</p>
              </div>
              <div className="space-y-4">
                <Wind size={24} strokeWidth={1} className="text-[#c49a6c]" />
                <h4 className="font-serif text-lg text-[#1a1a1a]">Mewari Spices</h4>
                <p className="text-[11px] text-[#888] leading-relaxed uppercase tracking-widest">Hand-Ground Masalas</p>
              </div>
            </div>
          </motion.div>

          {/* --- RIGHT: DECORATIVE BADGE --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            {/* The "Seal of Purity" Badge */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
              {/* Outer Decorative Rings */}
              <div className="absolute inset-0 border border-[#c49a6c]/10 rounded-full animate-pulse" />
              <div className="absolute inset-4 border border-[#c49a6c]/20 rounded-full border-dashed" />
              
              {/* Inner Circle Content */}
              <div className="bg-white w-48 h-48 md:w-64 md:h-64 rounded-full shadow-2xl flex items-center justify-center p-10 text-center border border-[#f0ebe3]">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.4em] text-[#c49a6c] mb-4">Established</p>
                  <p className="font-serif text-2xl md:text-3xl text-[#1a1a1a] leading-tight">Tradition over <br /> Trends</p>
                </div>
              </div>

              {/* Small Floating Motifs */}
              <div className="absolute top-0 right-10 w-12 h-12 bg-[#FAF9F6] border border-[#c49a6c]/20 rotate-45 flex items-center justify-center">
                <div className="w-2 h-2 bg-[#c49a6c] -rotate-45" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <style jsx>{`
        .animate-spin-slow {
          animation: spin 80s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default DiningPhilosophy;