import React from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import useRooms from "../../hooks/useRooms";

/* ---------------- ANIMATIONS ---------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

const imageReveal = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const RoomDetailHero = () => {
  const { slug } = useParams();
  const { rooms, loading, error } = useRooms();

  // ✅ LOADING STATE (Elegant Center)
  if (loading) {
    return (
      <section className="min-h-[70vh] flex items-center justify-center bg-[#FAF9F6]">
        <div className="text-center">
          <div className="w-10 h-10 border-2 border-[#c49a6c]/20 border-t-[#c49a6c] rounded-full animate-spin mx-auto mb-4" />
          <p className="text-[10px] uppercase tracking-widest text-[#888]">Preparing Sanctuary...</p>
        </div>
      </section>
    );
  }

  const room = rooms.find((r) => r.slug === slug);

  if (error || !room) {
    return (
      <section className="min-h-[70vh] flex items-center justify-center bg-[#FAF9F6]">
        <p className="text-[#888] font-serif italic text-xl">Room details could not be found.</p>
      </section>
    );
  }

  const { name, image, gallery, shortDescription, occupancy, size, extraBed, note } = room;

  return (
    <section className="bg-[#FAF9F6] pt-32 pb-16 md:pt-44 md:pb-24 selection:bg-[#c49a6c] selection:text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* --- LEFT: CONTENT --- */}
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start order-2 lg:order-1"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-8 bg-[#c49a6c]" />
              <p className="uppercase tracking-[0.4em] text-[10px] md:text-xs text-[#c49a6c] font-medium font-sans">
                Room Category
              </p>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-light text-[#1a1a1a] mb-8 leading-tight tracking-tight">
              {name}
            </h1>

            {shortDescription && (
              <p className="text-[#666] text-sm md:text-base lg:text-lg font-light leading-[1.8] tracking-wide mb-10 max-w-xl">
                {shortDescription}
              </p>
            )}

            {/* Meta Info Grid */}
            <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-8 py-8 border-t border-b border-[#c49a6c]/20 mb-10">
              {occupancy && (
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#888]">Occupancy</span>
                  <span className="text-sm md:text-base font-medium text-[#1a1a1a]">{occupancy} Guests</span>
                </div>
              )}
              {size && (
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#888]">Room Size</span>
                  <span className="text-sm md:text-base font-medium text-[#1a1a1a]">{size} sq ft</span>
                </div>
              )}
              {extraBed && (
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#888]">Extra Bed</span>
                  <span className="text-sm md:text-base font-medium text-[#c49a6c]">{extraBed}</span>
                </div>
              )}
            </div>

            {note && (
              <p className="text-[11px] text-[#999] italic font-light">
                * {note}
              </p>
            )}
          </motion.div>

          {/* --- RIGHT: IMAGE WITH OFFSET FRAME --- */}
          <motion.div 
            variants={imageReveal}
            initial="hidden"
            animate="visible"
            className="relative flex justify-center lg:justify-end order-1 lg:order-2"
          >
            {/* Decorative Offset Border */}
            <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-full h-full max-w-[420px] border-[0.5px] border-[#c49a6c]/40 z-0 pointer-events-none" />
            
            {/* Image Container */}
            <div className="relative z-10 overflow-hidden w-full max-w-[420px] aspect-[4/5] bg-[#e9e5e0] rounded-[1px] shadow-2xl">
              <img
                src={image || gallery?.[0]}
                alt={name}
                className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/5 mix-blend-multiply" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default RoomDetailHero;