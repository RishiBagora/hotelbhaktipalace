import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Maximize, Users, Wind, ArrowRight } from "lucide-react";
import roomsData from "../../data/roomsData";

const ContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const ItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const RoomCard = ({ room }) => {
  return (
    <motion.div
      variants={ItemVariants}
      className="group relative bg-white flex flex-col items-start border border-[#e7e1d7] hover:border-[#c49a6c] transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]"
    >
      {/* 1. Shorter Image Wrapper (16/10 aspect ratio for shorter height) */}
      <div className="w-full relative overflow-hidden aspect-[16/10]">
        <img
          src={room.image || room.gallery?.[0]}
          alt={room.name}
          className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105"
        />
        {/* Softer overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-700"></div>
        
        {/* Badges */}
        {room.badges && room.badges.map((badge, idx) => (
          <div key={idx} className="absolute top-4 left-4 z-10 bg-[#c49a6c]/90 backdrop-blur-sm text-white text-[9px] uppercase tracking-widest px-3 py-1 font-medium">
            {badge}
          </div>
        ))}
      </div>

      {/* 2. Card Content Structure */}
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

        {/* Essential Highlights */}
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
        
        {/* Fill empty space */}
        <div className="flex-grow"></div>

        {/* CTA */}
        <Link
          to={`/rooms/${room.slug}`}
          className="mt-auto flex items-center justify-between w-full pt-4 border-t border-[#f0ebe3] group/link cursor-pointer"
        >
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-medium text-[#1a1a1a] group-hover/link:text-[#c49a6c] transition-colors duration-500">
            Discover Features
          </span>
          <div className="w-7 h-7 rounded-full border border-[#e7e1d7] flex items-center justify-center group-hover/link:bg-[#c49a6c] group-hover/link:border-[#c49a6c] transition-all duration-500 flex-shrink-0">
            <ArrowRight size={12} strokeWidth={1.5} className="text-[#1a1a1a] group-hover/link:text-white transition-colors duration-500" />
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

const RoomsAndSuites = () => {
  const roomsToDisplay = roomsData.slice(0, 3);

  return (
    <section className="relative bg-[#FAF9F6] py-20 md:py-24 px-5 sm:px-10 lg:px-16 selection:bg-[#c49a6c] selection:text-white">
      <div className="max-w-7xl mx-auto relative z-10">
        
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
              Our Abodes
            </p>
            <div className="h-[1px] w-8 md:w-12 bg-gradient-to-l from-transparent to-[#c49a6c]"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] leading-tight font-serif mb-5">
            Sanctuaries of <span className="italic text-[#888]">Serenity</span>
          </h2>
          <p className="max-w-xl text-[#666] font-light leading-relaxed text-[13px] md:text-sm tracking-wide">
            Each room is thoughtfully designed to harmonise luxurious comfort with complete devotion. Experience spaces that inspire peace.
          </p>
        </motion.div>

        {/* Card Grid */}
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

// import React from "react";
// import roomsData from "../../data/roomsData"; 
// // (Make sure your data has image, name, price, occupancy, size, slug)

// export default function App() {
//   /* ---------------- ICONS ---------------- */
//   // Made icons slightly thinner and more delicate for a premium feel
//   const BedIcon = ({ className }) => (
//     <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//       <path d="M2 19v-2a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2" />
//       <path d="M2 11h20" />
//       <path d="M14 11v-5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v5" />
//     </svg>
//   );

//   const SizeIcon = ({ className }) => (
//     <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//       <rect x="3" y="3" width="18" height="18" />
//     </svg>
//   );

//   /* ---------------- LUXURY ROOM CARD ---------------- */
//   const RoomCard = ({ image, name, price, occupancy, size, slug }) => {
//     return (
//       <a
//         href={`/rooms/${slug || name?.toLowerCase()?.replace(/\s+/g, "-")}`}
//         className="group block w-full cursor-pointer"
//       >
//         {/* IMAGE CONTAINER - Aspect ratio 4/5 for an elegant, tall portrait look */}
//         <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#e9e5e0]">
//           <img
//             src={image}
//             alt={name}
//             className="
//               h-full w-full object-cover
//               transition-transform duration-[2000ms] ease-out
//               group-hover:scale-110
//             "
//           />
//           {/* Subtle gradient overlay that appears very slowly */}
//           <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-1000 group-hover:opacity-100" />
          
//           {/* Floating "Discover" tag that slides up on hover */}
//           <div className="absolute bottom-0 left-0 w-full p-6 translate-y-8 opacity-0 transition-all duration-700 ease-out group-hover:translate-y-0 group-hover:opacity-100 flex justify-center">
//             <span className="bg-white/90 backdrop-blur-sm text-[#1a1a1a] text-xs uppercase tracking-[0.2em] py-3 px-6">
//               Discover Suite
//             </span>
//           </div>
//         </div>

//         {/* CONTENT - Placed below the image with generous spacing */}
//         <div className="pt-8 pb-4 flex flex-col items-center text-center">
//           {/* TITLE */}
//           <h3 className="font-serif text-3xl text-[#1a1a1a] tracking-wide transition-colors duration-500 group-hover:text-[#c49a6c]">
//             {name}
//           </h3>

//           {/* META DATA (Icons + Text) */}
//           <div className="flex items-center gap-6 mt-4 text-[11px] uppercase tracking-[0.15em] text-[#888]">
//             <span className="flex items-center gap-2">
//               <BedIcon className="w-4 h-4 text-[#c49a6c]" />
//               {occupancy} Guests
//             </span>
//             <div className="w-px h-3 bg-[#d5c5b5]" />
//             <span className="flex items-center gap-2">
//               <SizeIcon className="w-4 h-4 text-[#c49a6c]" />
//               {size} sq. ft.
//             </span>
//           </div>

//           {/* PRICE */}
//           {/* <div className="mt-5 text-[#1a1a1a]">
//             <span className="text-xl font-serif">₹{price}</span>
//             <span className="text-xs text-[#888] uppercase tracking-widest ml-1">/ Night</span>
//           </div> */}
//         </div>
//       </a>
//     );
//   };

//   /* ---------------- MAIN SECTION ---------------- */
//   const RoomsAndSuites = () => (
//     // Using a very subtle warm off-white background
//     <section className="bg-[#FAF9F6] py-32 selection:bg-[#c49a6c] selection:text-white">
//       <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
//         {/* HEADER */}
//         <div className="max-w-2xl mx-auto text-center mb-24 flex flex-col items-center">
//           <span className="text-[#c49a6c] text-xs uppercase tracking-[0.3em] font-semibold mb-6 block">
//             The Collection
//           </span>
//           <h2 className="font-serif text-5xl md:text-6xl text-[#1a1a1a] leading-tight font-light">
//             Refined Living Spaces
//           </h2>
//           <div className="mt-8 w-px h-16 bg-[#d5c5b5] mx-auto" />
//         </div>

//         {/* GRID - Generous gap for an airy feel */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
//           {/* Mock data map - replace with your roomsData */}
//           {roomsData.slice(0, 3).map((room, index) => (
//             <RoomCard
//               key={room.slug || index}
//               image={room.image}
//               name={room.name}
//               price={room.price}
//               occupancy={room.occupancy}
//               size={room.size}
//             />
//           ))}
//         </div>

//         {/* PREMIUM CTA */}
//         <div className="mt-32 text-center">
//           <a
//             href="/rooms"
//             className="
//               inline-block
//               border border-[#c49a6c] text-[#1a1a1a]
//               text-xs uppercase tracking-[0.2em]
//               py-5 px-10
//               transition-all duration-500
//               hover:bg-[#c49a6c] hover:text-white
//             "
//           >
//             View All Accommodations
//           </a>
//         </div>
        
//       </div>
//     </section>
//   );

//   return <RoomsAndSuites />;
// }

