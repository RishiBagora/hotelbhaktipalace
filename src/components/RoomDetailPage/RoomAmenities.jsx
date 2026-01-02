// // RoomAmenities.jsx
// import React from "react";
// import { motion } from "framer-motion";
// import { useParams } from "react-router-dom";
// import roomsData from "../../data/roomsData";

// /* ---------------- ANIMATION ---------------- */
// const fadeUp = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
//   },
// };

// const RoomAmenities = () => {
//   const { slug } = useParams();

//   // 🔥 DIRECT ROOM FIND
//   const room = roomsData.find((r) => r.slug === slug);

//   // 🛑 SAFETY
//   if (!room || !Array.isArray(room.amenities) || room.amenities.length === 0) {
//     return null;
//   }

//   const { amenities, amenitiesNote } = room;

//   return (
//     <section className="bg-[#faf5ef]">
//       <motion.div
//         variants={fadeUp}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.25 }}
//         className="max-w-6xl mx-auto px-6 py-10 md:py-18"
//       >
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
//           {/* ================= LEFT : LIST ================= */}
//           <div>
//             <span className="text-xs tracking-[0.3em] uppercase text-[#c49a6c]">
//               Comfort & Convenience
//             </span>

            

//             <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-10 text-[#6d6d6d] text-base md:text-lg">
//               {amenities.map((item, index) => (
//                 <li key={index} className="leading-relaxed">
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* ================= RIGHT : DESCRIPTION ================= */}
//           <div>
//             <p
//               className="text-base md:text-lg text-[#6d6d6d] max-w-xl"
//               style={{ lineHeight: 1.9 }}
//             >
//               Each room at Hotel Bhakti Palace is thoughtfully designed to
//               provide a peaceful, comfortable, and reliable stay — ensuring
//               that every essential need is taken care of with quiet attention
//               to detail.
//             </p>

//             {amenitiesNote && (
//               <p
//                 className="mt-6 text-base md:text-lg text-[#6d6d6d] max-w-xl"
//                 style={{ lineHeight: 1.9 }}
//               >
//                 {amenitiesNote}
//               </p>
//             )}
//           </div>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default RoomAmenities;
