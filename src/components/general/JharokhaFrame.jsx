import React from "react";
import { motion } from "framer-motion";

/**
 * JharokhaFrame Component
 * Usage: <JharokhaFrame src="image_url" alt="image_description" />
 */

const JharokhaFrame = ({ src, alt, width = "max-w-[480px]", aspect = "aspect-[4/5]" }) => {
  return (
    <div className={`relative ${width} group jharokha-hover`}>
      {/* Background Decorative Gold Frame */}
      <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-full h-full border border-[#c49a6c]/20 z-0 pointer-events-none clip-jharokha-full opacity-60 rounded-t-[200px]" />
      
      {/* Main Arched Container */}
      <div 
        className={`relative z-10 overflow-hidden ${aspect} bg-[#e9e5e0] shadow-2xl transition-transform duration-700 hover:-translate-y-2`}
        style={{ 
          clipPath: "ellipse(100% 100% at 50% 100%)", // The "Mehraab" Effect
          borderRadius: "300px 300px 0 0" // For full circle curve
        }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-[2.5s] ease-out group-hover:scale-105"
          loading="lazy"
        />
        {/* Subtle Gold Dust Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-80" />
      </div>

      {/* Floating Motif Detail */}
      <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white shadow-xl p-4 border border-[#f0ebe3] flex items-center justify-center z-20">
         <div className="w-full h-full border border-[#c49a6c]/20 flex items-center justify-center">
           <span className="text-[10px] text-[#c49a6c] font-serif italic text-center leading-none">Hotel <br/> Bhakti</span>
         </div>
      </div>
    </div>
  );
};

export default JharokhaFrame;