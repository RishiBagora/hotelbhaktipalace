// // RoomsFeed.jsx
// import React from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import roomsData from "../../data/roomsData";

// const fadeUp = {
//   hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
//   visible: {
//     opacity: 1,
//     y: 0,
//     filter: "blur(0px)",
//     transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
//   },
// };

// const RoomsFeed = () => {
//   return (
//     <section className="bg-[#faf5ef] py-28 md:py-36">
//       <div className="max-w-6xl mx-auto px-6 flex flex-col gap-28">

//         {roomsData.map((room, index) => {
//           const reverse = index % 2 !== 0;

//           return (
//             <motion.article
//               key={`${room.slug}-${index}`}
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.3 }}
//             >
//               <Link
//                 to={`/rooms/${room.slug}`}
//                 className="group grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center"
//                 aria-label={`View details for ${room.name}`}
//               >

//     {/* IMAGE BLOCK */}
// <div
//   className={`relative overflow-hidden rounded-3xl ${
//     reverse ? "md:order-2" : ""
//   }`}
// >
//   {/* IMAGE */}
//   <img
//     src={room.image}
//     alt={room.name}
//     className="w-full h-[260px] sm:h-[340px] md:h-[420px] object-cover 
//                transition-all duration-700 group-hover:scale-[1.02]"
//     loading="lazy"
//   />

//   {/* SOFT GRADIENT */}
//   <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

//   {/* OVERLAY INFO */}
//   <div className="absolute bottom-3 left-3 right-3 md:bottom-6 md:left-6 md:right-6">
//     <div
//       className="
//         flex items-end gap-4
//         px-4 py-3
//         md:px-5 md:py-4
//         rounded-xl md:rounded-2xl
//         bg-black/20 md:bg-black/30
//         backdrop-blur-sm
//       "
//     >
//       {/* GUESTS */}
//       {room.occupancy && (
//         <div>
//           <p className="text-[10px] md:text-[11px] uppercase tracking-widest text-white/70">
//             Guests
//           </p>
//           <p className="text-sm md:text-lg text-white font-medium">
//             {room.occupancy}
//           </p>
//         </div>
//       )}

//       {/* SIZE */}
//       {room.size && (
//         <div>
//           <p className="text-[10px] md:text-[11px] uppercase tracking-widest text-white/70">
//             Size
//           </p>
//           <p className="text-sm md:text-lg text-white font-medium">
//             {room.size}
//             <span className=" md:inline text-sm"> sq ft</span>
//           </p>
//         </div>
//       )}

//       {/* PRICE */}
//       {room.price && (
//         <div className="ml-auto">
//           <p className="text-[10px] md:text-[11px] uppercase tracking-widest text-white/70 text-right">
//             From
//           </p>
//           <p className="text-base md:text-xl font-semibold text-[#c49a6c]">
//             ₹{room.price}
//             <span className=" md:inline text-sm font-normal text-white/70">
//               {" "}
//               / night
//             </span>
//           </p>
//         </div>
//       )}
//     </div>
//   </div>
// </div>



//                 {/* TEXT BLOCK */}
//               {/* TEXT */}
// <div className="flex flex-col gap-6 max-w-xl">

//   {/* ROOM NAME */}
//   <h3
//     className="text-3xl md:text-4xl font-serif text-[#1a1a1a] group-hover:text-[#c49a6c] transition-colors duration-300"
//     style={{ fontFamily: "Playfair Display, serif" }}
//   >
//     {room.name}
//   </h3>

//   {/* DESCRIPTION */}
//   <p
//     className="text-base md:text-lg text-[#6d6d6d]"
//     style={{ lineHeight: 1 }}
//   >
//     {room.shortDescription || room.description}
//   </p>

//   {/* EDITORIAL META STRIP */}
//   {/* HIGHLIGHTED META STRIP */}
// <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mt-4">

//   {room.occupancy && (
//     <div className="flex flex-col">
//       <span className="text-xs uppercase tracking-widest text-[#6d6d6d]">
//         Guests
//       </span>
//       <span className="text-lg font-medium text-[#1a1a1a]">
//         {room.occupancy}
//       </span>
//     </div>
//   )}

//   {room.size && (
//     <div className="flex flex-col">
//       <span className="text-xs uppercase tracking-widest text-[#6d6d6d]">
//         Room Size
//       </span>
//       <span className="text-lg font-medium text-[#1a1a1a]">
//         {room.size} <span className="text-sm text-[#6d6d6d]">sq ft</span>
//       </span>
//     </div>
//   )}

//   {room.price && (
//     <div className="flex flex-col">
//       <span className="text-xs uppercase tracking-widest text-[#6d6d6d]">
//         Starting From
//       </span>
//       <span className="text-xl font-semibold text-[#c49a6c]">
//         ₹{room.price}
//         <span className="text-sm font-normal text-[#6d6d6d]"> / night</span>
//       </span>
//     </div>
//   )}

// </div>


//   {/* SUBTLE DIVIDER */}
//   <div className="w-16 h-px bg-[#c49a6c]/40 mt-2" />

//   {/* CTA */}
//   <span className="inline-block mt-2 text-sm tracking-wide text-[#c49a6c]">
//     View room details →
//   </span>
// </div>

//               </Link>
//             </motion.article>
//           );
//         })}

//       </div>
//     </section>
//   );
// };

// export default RoomsFeed;



// import React from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// // import roomsData from "../../data/roomsData"; // Ensure this path is correct

// const fadeUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     // Removed blur for a much cleaner, more expensive feel
//     transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
//   },
// };

// const RoomsFeed = () => {
//   // Temporary mock data fallback in case roomsData is empty/missing
//   const displayRooms = [
//     { name: "The Royal Suite", occupancy: "2", size: "1200", price: "45,000", slug: "royal-suite", description: "Experience unmatched grandeur in our signature suite, featuring panoramic views, a private lounge, and bespoke heritage interiors designed for ultimate luxury.", image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop" },
//     { name: "Heritage Pavilion", occupancy: "4", size: "850", price: "28,000", slug: "heritage-pavilion", description: "A spacious sanctuary perfect for families, blending traditional Rajasthani aesthetics with modern comfort, just steps away from the temple.", image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop" },
//     { name: "Classic Room", occupancy: "2", size: "400", price: "15,000", slug: "classic-room", description: "A serene and intimate space offering quiet comfort, thoughtful amenities, and an atmosphere of pure devotion for your spiritual retreat.", image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop" }
//   ]; 
//   // const displayRooms = roomsData; // Use this in your actual code

//   return (
//     <section className="bg-[#FAF9F6] py-24 md:py-36 selection:bg-[#c49a6c] selection:text-white">
//       <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-28 md:gap-40">
        
//         {displayRooms.map((room, index) => {
//           // Alternating logic for desktop
//           const isEven = index % 2 === 0;

//           return (
//             <motion.article
//               key={`${room.slug}-${index}`}
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, margin: "-50px" }}
//               className="group"
//             >
//               <Link
//                 to={`/rooms/${room.slug}`}
//                 className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 lg:gap-24 items-center"
//                 aria-label={`View details for ${room.name}`}
//               >
                
//                 {/* ===== IMAGE BLOCK ===== */}
//                 {/* On mobile, order-1 (always top). On desktop, alternate based on isEven */}
//                 <div 
//                   className={`
//                     w-full relative overflow-hidden bg-[#e9e5e0] 
//                     order-1 ${isEven ? 'md:order-1' : 'md:order-2'} 
//                     md:col-span-7 aspect-[4/3]
//                   `}
//                 >
//                   <img
//                     src={room.image}
//                     alt={room.name}
//                     className="w-full h-full object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105"
//                     loading="lazy"
//                   />
//                   {/* Subtle darkening on hover to focus on text */}
//                   <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-700" />
//                 </div>

//                 {/* ===== TEXT BLOCK ===== */}
//                 {/* On mobile, order-2 (always bottom). On desktop, alternate based on isEven */}
//                 <div 
//                   className={`
//                     flex flex-col items-start
//                     order-2 ${isEven ? 'md:order-2' : 'md:order-1'} 
//                     md:col-span-5
//                   `}
//                 >
//                   {/* Room Name */}
//                   <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-[#1a1a1a] mb-5 tracking-tight group-hover:text-[#c49a6c] transition-colors duration-500 leading-tight">
//                     {room.name}
//                   </h3>

//                   {/* Description */}
//                   <p className="text-[#888] text-[14px] md:text-[15px] font-light leading-[1.8] tracking-wide mb-10 max-w-lg">
//                     {room.shortDescription || room.description}
//                   </p>

//                   {/* Editorial Meta Strip (Replaced the duplicate image text) */}
//                   <div className="flex flex-wrap items-center justify-between w-full border-t border-b border-[#c49a6c]/20 py-5 mb-10 gap-4">
                    
//                     {room.occupancy && (
//                       <div className="flex flex-col gap-1">
//                         <span className="text-[9px] uppercase tracking-[0.2em] text-[#888]">
//                           Capacity
//                         </span>
//                         <span className="text-[13px] md:text-sm font-medium text-[#1a1a1a]">
//                           {room.occupancy} Guests
//                         </span>
//                       </div>
//                     )}

//                     {room.size && (
//                       <div className="flex flex-col gap-1">
//                         <span className="text-[9px] uppercase tracking-[0.2em] text-[#888]">
//                           Space
//                         </span>
//                         <span className="text-[13px] md:text-sm font-medium text-[#1a1a1a]">
//                           {room.size} <span className="text-[10px] text-[#888] font-normal">sq ft</span>
//                         </span>
//                       </div>
//                     )}

//                     {room.price && (
//                       <div className="flex flex-col gap-1 text-right ml-auto">
//                         <span className="text-[9px] uppercase tracking-[0.2em] text-[#888]">
//                           Starting From
//                         </span>
//                         <span className="text-lg md:text-xl font-serif text-[#c49a6c]">
//                           ₹{room.price}
//                           <span className="text-[10px] font-sans font-normal text-[#888] tracking-wide"> / night</span>
//                         </span>
//                       </div>
//                     )}

//                   </div>

//                   {/* Minimalist CTA */}
//                   <div className="relative inline-flex items-center gap-3 text-[#1a1a1a] text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-medium transition-colors duration-500 group-hover:text-[#c49a6c]">
//                     Explore Suite
//                     <span className="font-sans text-sm font-light leading-none group-hover:translate-x-1 transition-transform duration-300">→</span>
//                     <span className="absolute left-0 -bottom-2 w-full h-[1px] bg-transparent transition-all duration-500 group-hover:bg-[#c49a6c]/50" />
//                   </div>
                  
//                 </div>

//               </Link>
//             </motion.article>
//           );
//         })}

//       </div>
//     </section>
//   );
// };

// export default RoomsFeed;

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import roomsData from "../../data/roomsData";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
  },
};

const RoomsFeed = () => {
  return (
    <section className="bg-[#FAF9F6] py-24 md:py-36 selection:bg-[#c49a6c] selection:text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-24 md:gap-40">
        
        {roomsData.map((room, index) => {
          // Alternating logic for desktop
          const isEven = index % 2 === 0;

          return (
            <React.Fragment key={`${room.slug || room.name}-${index}`}>
              <motion.article
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="group"
              >
                <Link
                  to={`/rooms/${room.slug || room.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 lg:gap-24 items-center"
                  aria-label={`View details for ${room.name}`}
                >
                  
                  {/* ===== IMAGE BLOCK ===== */}
                  <div 
                    className={`
                      w-full relative overflow-hidden bg-[#e9e5e0] 
                      order-1 ${isEven ? 'md:order-1' : 'md:order-2'} 
                      md:col-span-7 aspect-[4/3]
                    `}
                  >
                    <img
                      src={room.image || room.gallery?.[0]}
                      alt={room.name}
                      className="w-full h-full object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-700" />
                  </div>

                  {/* ===== TEXT BLOCK ===== */}
                  <div 
                    className={`
                      flex flex-col items-start
                      order-2 ${isEven ? 'md:order-2' : 'md:order-1'} 
                      md:col-span-5
                    `}
                  >
                    {/* Room Name */}
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-[#1a1a1a] mb-5 tracking-tight group-hover:text-[#c49a6c] transition-colors duration-500 leading-tight">
                      {room.name}
                    </h3>

                    {/* Description */}
                    <p className="text-[#888] text-[14px] md:text-[15px] font-light leading-[1.8] tracking-wide mb-10 max-w-lg">
                      {room.shortDescription || room.description}
                    </p>

                    {/* Editorial Meta Strip (Price removed, Highlights added) */}
                    <div className="flex flex-wrap items-start justify-between w-full border-t border-b border-[#c49a6c]/20 py-5 mb-10 gap-x-4 gap-y-6">
                      
                      {/* Capacity */}
                      {room.occupancy && (
                        <div className="flex flex-col gap-1">
                          <span className="text-[9px] uppercase tracking-[0.2em] text-[#888]">
                            Capacity
                          </span>
                          <span className="text-[13px] md:text-sm font-medium text-[#1a1a1a]">
                            {room.occupancy} Guests
                          </span>
                        </div>
                      )}

                      {/* Space */}
                      {room.size && (
                        <div className="flex flex-col gap-1">
                          <span className="text-[9px] uppercase tracking-[0.2em] text-[#888]">
                            Space
                          </span>
                          <span className="text-[13px] md:text-sm font-medium text-[#1a1a1a]">
                            {room.size} <span className="text-[10px] text-[#888] font-normal">sq ft</span>
                          </span>
                        </div>
                      )}

                      {/* Signature Highlights (Replaces Price) */}
                      {room.highlights && room.highlights.length > 0 && (
                        <div className="flex flex-col gap-1 md:ml-auto md:text-right w-full md:w-auto">
                          <span className="text-[9px] uppercase tracking-[0.2em] text-[#888]">
                            Signature Features
                          </span>
                          <span className="text-[12px] md:text-[13px] font-medium text-[#c49a6c] leading-snug">
                            {/* Combines the array items with a dot • */}
                            {room.highlights.join(" • ")}
                          </span>
                        </div>
                      )}

                    </div>

                    {/* Minimalist CTA */}
                    <div className="relative inline-flex items-center gap-3 text-[#1a1a1a] text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-medium transition-colors duration-500 group-hover:text-[#c49a6c]">
                      Explore Suite
                      <span className="font-sans text-sm font-light leading-none group-hover:translate-x-1 transition-transform duration-300">→</span>
                      <span className="absolute left-0 -bottom-2 w-full h-[1px] bg-transparent transition-all duration-500 group-hover:bg-[#c49a6c]/50" />
                    </div>
                    
                  </div>

                </Link>
              </motion.article>

              {/* ===== MOBILE SEPARATION (Aesthetic Diamond Divider) ===== */}
              {index !== roomsData.length - 1 && (
                <div className="md:hidden flex items-center justify-center gap-4 w-full opacity-60">
                  <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#c49a6c]/50" />
                  <div className="w-1.5 h-1.5 rotate-45 bg-[#c49a6c]/50" />
                  <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#c49a6c]/50" />
                </div>
              )}

            </React.Fragment>
          );
        })}

      </div>
    </section>
  );
};

export default RoomsFeed;