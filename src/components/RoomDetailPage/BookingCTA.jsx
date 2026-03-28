import React from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import useRooms from "../../hooks/useRooms";

/* ---------------- ANIMATION ---------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
  },
};

const BookingCTA = () => {
  const { slug } = useParams();
  const { rooms, loading, error } = useRooms();

  const room = rooms?.find((r) => r.slug === slug);
  const roomName = room?.name;

  // ✅ STABLE LOADING STATE (Prevents Layout Shift)
  if (loading) {
    return (
      <section className="bg-[#FAF9F6] border-t border-[#f0ebe3] min-h-[400px] flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-4 w-32 bg-[#c49a6c]/10 mb-4 rounded" />
          <div className="h-8 w-64 bg-[#c49a6c]/10 rounded" />
        </div>
      </section>
    );
  }

  // Error handle (Keep it minimal)
  if (error) return null;

  return (
    <section className="bg-[#FAF9F6] border-t border-[#f0ebe3] selection:bg-[#c49a6c] selection:text-white overflow-hidden min-h-[500px]">
      
      {/* TOP DECORATIVE LINE */}
      <motion.div 
        initial={{ height: 0 }}
        whileInView={{ height: "80px" }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-px bg-[#c49a6c]/30 mx-auto"
      />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl mx-auto px-6 py-24 md:py-32 text-center flex flex-col items-center"
      >
        {/* EYEBROW */}
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px w-6 bg-[#c49a6c]/60" />
          <span className="text-[10px] tracking-[0.4em] uppercase text-[#c49a6c] font-medium font-sans">
            Reservations
          </span>
          <div className="h-px w-6 bg-[#c49a6c]/60" />
        </div>

        {/* HEADING */}
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-light text-[#1a1a1a] leading-tight tracking-tight mb-8">
          Plan Your Stay at <br className="hidden md:block" />
          <span className="italic text-[#c49a6c]">Hotel Bhakti</span>
        </h2>

        {/* TEXT */}
        <p className="text-[#666] text-sm md:text-base lg:text-lg font-light leading-[1.9] max-w-2xl mx-auto tracking-wide mb-12">
          Our team is dedicated to assisting you with availability, bespoke pricing, 
          and any special requests for a peaceful retreat in Nathdwara.
        </p>

        {/* DYNAMIC ROOM TAG */}
        {roomName && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-14 px-6 py-2 bg-[#c49a6c]/5 border border-[#c49a6c]/10 inline-block"
          >
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#c49a6c]">
              Enquiring about the <span className="font-semibold">{roomName}</span>
            </p>
          </motion.div>
        )}

        {/* BUTTONS (Sharp & Consistent) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-10 md:gap-14 w-full sm:w-auto">
          {/* PRIMARY: CALL */}
          <a
            href="tel:+919772578699"
            className="group relative w-full sm:w-auto px-12 py-5 bg-[#c49a6c] text-white text-[10px] md:text-xs uppercase tracking-[0.25em] font-light transition-all duration-500 hover:bg-[#1a1a1a] shadow-xl"
          >
            Call Reservations
          </a>

          {/* SECONDARY: WHATSAPP */}
          <a
            href={`https://wa.me/919772578699?text=${encodeURIComponent(`Hi, I'm interested in the ${roomName || 'Room'} at Hotel Bhakti.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full sm:w-auto text-[#888] hover:text-[#1a1a1a] text-[10px] md:text-xs uppercase tracking-[0.25em] font-normal transition-colors duration-500"
          >
            WhatsApp Enquiry
            <span className="absolute left-0 -bottom-2 w-full h-[0.5px] bg-[#d5c5b5] transition-all duration-500 group-hover:bg-[#1a1a1a]" />
          </a>
        </div>

        {/* FOOTER LINK */}
        <div className="mt-20">
          <Link
            to="/contact"
            className="text-[10px] uppercase tracking-[0.2em] text-[#aaa] hover:text-[#c49a6c] transition-colors duration-300"
          >
            View Full Contact Details
          </Link>
        </div>

      </motion.div>
    </section>
  );
};

export default BookingCTA;