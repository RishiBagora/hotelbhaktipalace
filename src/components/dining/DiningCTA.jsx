import React from "react";
import { motion } from "framer-motion";
import { Calendar, Phone } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
  },
};

const DiningCTA = () => {
  return (
    <section className="bg-[#FAF9F6] py-24 md:py-36 selection:bg-[#c49a6c] selection:text-white relative overflow-hidden">
      
      {/* 1. TOP ORNAMENTAL LINE */}
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: "120px" }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="h-px bg-[#c49a6c]/40 mx-auto mb-16"
      />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center"
      >
        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px w-6 bg-[#c49a6c]/60" />
          <span className="text-[10px] tracking-[0.4em] uppercase text-[#c49a6c] font-bold">
            An Invitation
          </span>
          <div className="h-px w-6 bg-[#c49a6c]/60" />
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-serif font-light text-[#1a1a1a] leading-tight tracking-tight">
          Reserve Your <br />
          <span className="italic text-[#c49a6c]">Royal Seat</span>
        </h2>

        {/* Subtext */}
        <p className="mt-10 text-[#666] text-sm md:text-lg font-light leading-[1.9] max-w-2xl tracking-wide italic">
          "Join us for a Pangat experience where every spice tells a story and every meal is served with the soul of Mewar."
        </p>

        {/* --- INTERACTIVE ACTION BUTTONS --- */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-10 md:gap-16 w-full sm:w-auto">
          
          {/* PRIMARY: CALL */}
          <a
            href="tel:+919772578699"
            className="group relative flex items-center gap-4 px-12 py-5 bg-[#1a1a1a] text-white text-[10px] uppercase tracking-[0.3em] font-light transition-all duration-500 hover:bg-[#c49a6c] shadow-2xl"
          >
            <Phone size={14} className="group-hover:rotate-12 transition-transform" />
            Call for Reservation
          </a>

          {/* SECONDARY: WHATSAPP (Sleek Underline Style) */}
          <a
            href="https://wa.me/919772578699?text=Hi, I would like to reserve a table for dining at Hotel Bhakti."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-4 text-[#888] hover:text-[#1a1a1a] text-[10px] uppercase tracking-[0.3em] font-bold transition-colors duration-500"
          >
            <Calendar size={14} />
            WhatsApp Booking
            {/* The Royal Border Bottom */}
            <span className="absolute left-0 -bottom-2 w-full h-[0.5px] bg-[#c49a6c]/30 group-hover:bg-[#1a1a1a] transition-all" />
          </a>
        </div>

        {/* --- DECORATIVE MOTIF --- */}
        <div className="mt-24 relative">
           <div className="w-16 h-16 border border-[#c49a6c]/10 rotate-45 flex items-center justify-center">
              <div className="w-8 h-8 border border-[#c49a6c]/20 flex items-center justify-center">
                 <div className="w-2 h-2 bg-[#c49a6c]/40 rounded-full" />
              </div>
           </div>
           <p className="mt-12 text-[9px] uppercase tracking-[0.6em] text-[#bbb]">Hotel Bhakti • Nathdwara</p>
        </div>

      </motion.div>
    </section>
  );
};

export default DiningCTA;