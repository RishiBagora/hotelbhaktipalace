import React from "react";
import { motion } from "framer-motion";

/**
 * HOTEL BHAKTI - PREMIERE GALLERY
 * Pinterest-style Masonry Grid
 */

/* ------------------ GALLERY DATA ------------------ */
// Yahan aap apne images ke links add kar sakte hain
const galleryData = [
  { id: 1, src: "https://images.unsplash.com/photo-1566073771259-6a8506099945", title: "Luxury Suite View" },
  { id: 2, src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b", title: "Presidential Bedding" },
  { id: 3, src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4", title: "Evening Ambiance" },
  { id: 4, src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb", title: "Reception Lobby" },
  { id: 5, src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb", title: "Spiritual Corner" },
  { id: 6, src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39", title: "Deluxe Comfort" },
  { id: 7, src: "https://images.unsplash.com/photo-1590490360182-c33d57733427", title: "Bathroom Essentials" },
  { id: 8, src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32", title: "Window to Devotion" },
  { id: 9, src: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0", title: "Heritage Texture" },
  { id: 10, src: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6", title: "Evening Glow" },
];

/* ------------------ ANIMATIONS ------------------ */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Gallery() {
  return (
    <section className="bg-[#FAF9F6] py-24 md:py-36 px-6 lg:px-12 selection:bg-[#c49a6c] selection:text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER --- */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="text-center mb-20 flex flex-col items-center"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-8 bg-[#c49a6c]" />
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#c49a6c] font-medium font-sans">
              Visual Journey
            </p>
            <div className="h-px w-8 bg-[#c49a6c]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-light text-[#1a1a1a] leading-tight">
            Moments of <span className="italic text-[#c49a6c]">Bhakti</span>
          </h1>
          <p className="mt-6 text-[#666] text-sm md:text-base font-light tracking-wide max-w-xl mx-auto italic">
            "A glimpse into our sanctuary of peace, heritage, and timeless hospitality."
          </p>
        </motion.div>

        {/* --- PINTEREST MASONRY GRID --- */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryData.map((item, index) => (
            <motion.div
              key={item.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="relative group break-inside-avoid overflow-hidden rounded-[2px] bg-[#e9e5e0] shadow-sm"
            >
              {/* Image with Parallax Hover */}
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-auto object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                loading="lazy"
              />

              {/* Sophisticated Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-100 transition-opacity duration-700 flex flex-col justify-end p-8 text-white pointer-events-none">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-[#c49a6c] mb-2 font-medium">Hotel Bhakti</p>
                  <h3 className="text-xl font-serif font-light italic">{item.title}</h3>
                </div>
              </div>

              {/* Micro-border highlight on hover */}
              <div className="absolute inset-0 border-[0.5px] border-white/20 opacity-100 transition-opacity duration-700 pointer-events-none m-4" />
            </motion.div>
          ))}
        </div>

        {/* --- FOOTER DECOR --- */}
        <div className="mt-32 flex flex-col items-center opacity-40">
           <div className="w-px h-16 bg-[#c49a6c]/30 mb-8" />
           <p className="text-[10px] uppercase tracking-[0.6em] text-[#1a1a1a]">End of Gallery</p>
        </div>

      </div>
    </section>
  );
}