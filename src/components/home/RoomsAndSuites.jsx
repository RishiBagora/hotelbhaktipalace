import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Maximize, Users, Wind, ArrowRight } from "lucide-react";
import useRooms from "../../hooks/useRooms"; // ✅ HOOK IMPORT

const ContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const ItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const RoomCard = ({ room }) => {
  return (
    <motion.div variants={ItemVariants} className="h-full flex">
      <Link
        to={`/rooms/${room.slug}`}
        className="group relative w-full h-full bg-white flex flex-col items-start border border-[#e7e1d7] hover:border-[#c49a6c] transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] block cursor-pointer overflow-hidden"
      >
        {/* IMAGE */}
        <div className="w-full relative overflow-hidden aspect-[16/10]">
        <img
          src={room.image || room.gallery?.[0]}
          alt={room.name}
          className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-700"></div>

        {/* BADGES */}
        {room.badges?.map((badge, idx) => (
          <div
            key={idx}
            className="absolute top-4 left-4 z-10 bg-[#c49a6c]/90 backdrop-blur-sm text-white text-[9px] uppercase tracking-widest px-3 py-1 font-medium"
          >
            {badge}
          </div>
        ))}
      </div>

      {/* CONTENT */}
      <div className="w-full p-5 md:p-6 flex flex-col flex-grow bg-white">
        <h3 className="font-serif text-2xl text-[#1a1a1a] mb-1 group-hover:text-[#c49a6c] transition-colors duration-500">
          {room.name}
        </h3>

        {room.tagline && (
          <p className="font-serif italic text-[#888888] text-[13px] mb-4">
            {room.tagline}
          </p>
        )}

        <div className="w-10 h-[1px] bg-[#c49a6c]/30 mb-5"></div>

        {/* HIGHLIGHTS */}
        <div className="grid grid-cols-2 gap-y-3 gap-x-2 mb-6">
          <div className="flex items-center gap-2.5">
            <Users size={16} strokeWidth={1} className="text-[#c49a6c]" />
            <span className="text-[11px] md:text-xs text-[#666] font-light tracking-wider uppercase">
              {room.occupancy} Guests
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <Maximize size={16} strokeWidth={1} className="text-[#c49a6c]" />
            <span className="text-[11px] md:text-xs text-[#666] font-light tracking-wider uppercase">
              {room.size} sq.ft
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <Wind size={16} strokeWidth={1} className="text-[#c49a6c]" />
            <span className="text-[11px] md:text-xs text-[#666] font-light tracking-wider uppercase">
              A/C Room
            </span>
          </div>
        </div>

        <div className="flex-grow"></div>

        {/* CTA */}
        <div className="mt-auto flex items-center justify-between w-full pt-4 border-t border-[#f0ebe3] group/link">
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-medium text-[#1a1a1a] group-hover/link:text-[#c49a6c] transition-colors duration-500">
            Discover Features
          </span>

          <div className="w-7 h-7 rounded-full border border-[#e7e1d7] flex items-center justify-center group-hover/link:bg-[#c49a6c] group-hover/link:border-[#c49a6c] transition-all duration-500 flex-shrink-0">
            <ArrowRight
              size={12}
              strokeWidth={1.5}
              className="text-[#1a1a1a] group-hover/link:text-white transition-colors duration-500"
            />
          </div>
        </div>
      </div>
      </Link>
    </motion.div>
  );
};

const RoomsAndSuites = () => {
  const { rooms, loading, error } = useRooms(); // ✅ HOOK USE

  const roomsToDisplay = rooms.slice(0, 3);

  // ✅ LOADING
  if (loading) {
    return (
      <section className="py-20 text-center text-[#666]">
        Loading rooms...
      </section>
    );
  }

  // ✅ ERROR
  if (error) {
    return (
      <section className="py-20 text-center text-red-500">
        {error}
      </section>
    );
  }

  return (
    <section className="relative bg-[#FAF9F6] py-20 md:py-24 px-5 sm:px-10 lg:px-16 selection:bg-[#c49a6c] selection:text-white">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-14 md:mb-16"
        >
          <div className="flex items-center gap-4 mb-5">
            <div className="h-[1px] w-8 md:w-12 bg-gradient-to-r from-transparent to-[#c49a6c]"></div>
            <p className="text-[9px] md:text-[10px] tracking-[0.35em] uppercase text-[#c49a6c] font-medium font-sans">
              Our Rooms
            </p>
            <div className="h-[1px] w-8 md:w-12 bg-gradient-to-l from-transparent to-[#c49a6c]"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] leading-tight font-serif mb-5">
            Sanctuaries of <span className="italic text-[#c49a6c]">Serenity</span>
          </h2>

          <p className="max-w-xl text-[#666] font-light leading-relaxed text-[13px] md:text-sm tracking-wide">
            Each room is thoughtfully designed to harmonise luxurious comfort with complete devotion. Experience spaces that inspire peace.
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={ContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid lg:grid-cols-3 gap-6 md:gap-8"
        >
          {roomsToDisplay.map((room, index) => (
            <RoomCard key={room.slug || index} room={room} />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-14 flex justify-center"
        >
          <Link
            to="/rooms"
            className="group relative inline-flex items-center justify-center px-10 py-4 text-[#1a1a1a] text-[10px] md:text-xs uppercase tracking-[0.25em] font-normal overflow-hidden transition-all duration-500 border border-[#d5c5b5]"
          >
            <div className="absolute inset-0 w-full h-full bg-[#c49a6c] -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] z-0"></div>
            <span className="relative z-10 group-hover:text-white transition-colors duration-500">
              View All Accommodations
            </span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default RoomsAndSuites;