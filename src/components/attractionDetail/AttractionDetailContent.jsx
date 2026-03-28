import React from "react";
import { motion } from "framer-motion";
import { Clock, Info, Lightbulb, MapPin } from "lucide-react";

/**
 * AttractionDetailContent - PRO VERSION
 * High visibility, Clean Card Layout, Accent Icons
 */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const AttractionDetailContent = ({ data }) => {
  const details = data?.details || {};
  const { description, history, bestTime, tips, openingHours } = details;

  return (
    <section className="bg-white py-20 md:py-32 selection:bg-[#c49a6c] selection:text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        
        {/* --- 1. MAIN STORY (Centered & Bold) --- */}
        {description && (
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="max-w-4xl mx-auto text-center mb-24"
          >
            <div className="inline-block p-3 rounded-full bg-[#FAF9F6] text-[#c49a6c] mb-6">
              <Info size={24} strokeWidth={1.5} />
            </div>
            <p className="text-2xl md:text-4xl font-serif font-light text-[#1a1a1a] leading-tight">
              {description}
            </p>
          </motion.div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* --- 2. LEFT SIDE: HISTORY & TIMINGS --- */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="lg:col-span-7 flex flex-col gap-12"
          >
            {/* History Card */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-8 h-px bg-[#c49a6c]" />
                <h3 className="text-[10px] uppercase tracking-[0.4em] text-[#c49a6c] font-bold">The Heritage</h3>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-[#1a1a1a]">History & <span className="italic text-[#888]">Significance</span></h2>
              <p className="text-[#666] text-base md:text-lg leading-[1.9] font-light tracking-wide">
                {history}
              </p>
            </div>

            {/* Practical Meta (Location Hint) */}
            {data.locationHint && (
              <div className="flex gap-4 p-8 bg-[#FAF9F6] border-l-4 border-[#c49a6c]">
                 <MapPin className="text-[#c49a6c] shrink-0" size={24} />
                 <p className="text-sm md:text-base text-[#1a1a1a] italic font-light leading-relaxed">
                   {data.locationHint}
                 </p>
              </div>
            )}
          </motion.div>

          {/* --- 3. RIGHT SIDE: QUICK INFO & TIPS --- */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="lg:col-span-5 flex flex-col gap-10"
          >
            {/* Planning Card */}
            <div className="bg-[#1a1a1a] p-8 md:p-10 text-white rounded-[2px] shadow-2xl">
              <div className="flex items-center gap-3 mb-8 text-[#c49a6c]">
                <Clock size={20} />
                <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold">Plan Your Visit</h4>
              </div>
              
              <div className="space-y-8">
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-gray-400 mb-2">Best Time</p>
                  <p className="text-base md:text-lg font-serif font-light leading-relaxed">{bestTime}</p>
                </div>
                {openingHours && (
                  <div>
                    <p className="text-[9px] uppercase tracking-widest text-gray-400 mb-2">Opening Hours</p>
                    <p className="text-base md:text-lg font-serif font-light">{openingHours}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Tips Section */}
            <div className="space-y-8 pt-4">
              <div className="flex items-center gap-3">
                <Lightbulb className="text-[#c49a6c]" size={20} />
                <h4 className="text-[10px] uppercase tracking-[0.3em] text-[#888] font-bold">Visitor Tips</h4>
              </div>
              
              <ul className="flex flex-col gap-6">
                {Array.isArray(tips) && tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-4 group">
                    <span className="text-[#c49a6c] font-serif text-lg leading-none opacity-40 group-hover:opacity-100 transition-opacity">0{index + 1}</span>
                    <p className="text-sm md:text-base text-[#666] font-light leading-relaxed">
                      {tip}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>

        {/* --- BOTTOM LOGO ACCENT --- */}
        <div className="mt-24 pt-12 border-t border-gray-100 flex justify-center opacity-20">
           <p className="text-[10px] uppercase tracking-[0.8em] text-[#1a1a1a]">Hotel Bhakti Exclusive Guide</p>
        </div>

      </div>
    </section>
  );
};

export default AttractionDetailContent;