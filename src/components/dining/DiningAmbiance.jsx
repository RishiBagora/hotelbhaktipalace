import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

const ambianceImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1590490360182-c33d57733427", title: "Royal Seating" },
  { id: 2, src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b", title: "Golden Lanterns" },
  { id: 3, src: "https://images.unsplash.com/photo-1544124499-58912cbddaad", title: "Haveli Textures" },
  { id: 4, src: "https://images.unsplash.com/photo-1559339352-11d035aa65de", title: "Morning Light" },
  { id: 5, src: "https://images.unsplash.com/photo-1574936145840-28808d77a0b6", title: "Table Details" },
];

const DiningAmbiance = () => {
  return (
    <section className="bg-[#FAF9F6] py-24 md:py-32 selection:bg-[#c49a6c] border-t border-[#f0ebe3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* --- HEADER --- */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="max-w-2xl mb-20"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#c49a6c] font-bold">The Setting</span>
          <h2 className="mt-4 text-4xl md:text-6xl font-serif font-light text-[#1a1a1a]">
            Where Tradition <br />
            <span className="italic text-[#888]">Meets Elegance</span>
          </h2>
          <p className="mt-8 text-[#666] text-sm md:text-base font-light tracking-wide leading-relaxed">
            Dine amidst hand-carved stone Jharokhas and warm amber lighting that recreates the grandeur of Mewari palaces.
          </p>
        </motion.div>

        {/* --- MEHRAAB STYLE MASONRY GRID --- */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {ambianceImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="relative group overflow-hidden break-inside-avoid shadow-lg"
              style={{ 
                // Asli Rajasthani Mehraab Curve
                borderRadius: "160px 160px 4px 4px", 
              }}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-auto object-cover transition-transform duration-[2.5s] group-hover:scale-110"
              />
              
              {/* Luxury Overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-8 text-white">
                 <p className="text-[9px] uppercase tracking-widest text-[#c49a6c] mb-1">Ambiance</p>
                 <h4 className="font-serif italic text-lg">{img.title}</h4>
              </div>

              {/* Decorative Border on Hover */}
              <div className="absolute inset-4 border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-t-[140px]" />
            </motion.div>
          ))}
        </div>

        {/* --- DESIGN ACCENT --- */}
        <div className="mt-24 flex items-center justify-between opacity-30">
           <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#c49a6c]" />
           <div className="mx-8 w-2 h-2 rotate-45 border border-[#c49a6c]" />
           <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#c49a6c]" />
        </div>

      </div>
    </section>
  );
};

export default DiningAmbiance;