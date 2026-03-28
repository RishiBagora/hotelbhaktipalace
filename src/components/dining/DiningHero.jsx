import React from "react";
import { motion } from "framer-motion";
import JharokhaFrame from "../general/JharokhaFrame"; 

/* ---------------- ANIMATIONS ---------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
  },
};

const rotateMandala = {
  animate: {
    rotate: 360,
    transition: { duration: 60, repeat: Infinity, ease: "linear" },
  },
};

const DiningHero = () => {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen bg-[#FAF9F6] flex items-center justify-center overflow-hidden pt-20">
      
      {/* 1. BACKGROUND DECOR (Traditional Mandala) */}
      <motion.div 
        variants={rotateMandala}
        animate="animate"
        className="absolute -top-20 -right-20 md:-top-40 md:-right-40 w-[400px] h-[400px] md:w-[800px] md:h-[800px] opacity-[0.04] pointer-events-none"
      >
        <img src="https://cdn-icons-png.flaticon.com/512/5024/5024500.png" alt="Mandala Decor" className="w-full h-full" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        
        {/* --- LEFT: TEXT CONTENT --- */}
        <motion.div 
          initial="hidden" animate="visible" variants={fadeUp}
          className="flex flex-col items-start order-2 lg:order-1"
        >
          {/* ANNOUNCEMENT BADGE */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mb-6 flex items-center gap-3 bg-[#c49a6c]/10 px-4 py-2 rounded-full border border-[#c49a6c]/20"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c49a6c] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c49a6c]"></span>
            </span>
            <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#c49a6c] font-bold">
              Opening Soon at Bhakti
            </p>
          </motion.div>

          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-6 h-6 border border-[#c49a6c] rotate-45 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-[#c49a6c]" />
            </div>
            <p className="uppercase tracking-[0.5em] text-[10px] md:text-xs text-[#c49a6c] font-bold">
              Pangat
            </p>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light text-[#1a1a1a] leading-[1.1] tracking-tight">
            A Feast for <br />
            <span className="italic text-[#888] font-light">the Soul</span>
          </h1>

          {/* FOCUSED HIGHLIGHT TEXT */}
          <div className="mt-8 relative">
            <p className="text-lg md:text-2xl font-serif italic text-[#c49a6c] leading-relaxed">
              A new era of Satvik dining is arriving.
            </p>
            <div className="absolute -bottom-2 left-0 w-20 h-[1px] bg-[#c49a6c]/40" />
          </div>

          <div className="mt-10 mb-12 max-w-lg">
            <p className="text-[#666] text-base md:text-xl font-light leading-[1.8] tracking-wide italic">
              "Experience the authentic Satvik flavors of Mewar, served with the warmth of traditional Rajasthani hospitality in the heart of Nathdwara."
            </p>
          </div>
        </motion.div>

        {/* --- RIGHT: THE JHAROKHA IMAGE --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <JharokhaFrame 
            src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=1000" 
            alt="Rajasthani Dining Experience"
            className="w-full max-w-[420px] md:max-w-[480px]"
          />
        </motion.div>

      </div>

      {/* 3. SCROLL INDICATOR */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
        <p className="text-[9px] uppercase tracking-[0.6em] text-[#1a1a1a] rotate-90 mb-10 origin-left">Scroll</p>
        <div className="w-px h-16 bg-gradient-to-b from-[#c49a6c] to-transparent" />
      </div>

    </section>
  );
};

export default DiningHero;