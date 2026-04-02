// import React from "react";
// import { motion } from "framer-motion";

// /**
//  * WhyVisitNathdwara
//  * Luxury editorial storytelling with a single visual anchor
//  * Calm, spiritual, timeless — no cards, no clutter
//  */

// const container = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.12 } },
// };

// const fadeUp = {
//   hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
//   visible: {
//     opacity: 1,
//     y: 0,
//     filter: "blur(0px)",
//     transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
//   },
// };

// const WhyVisitNathdwara = () => {
//   return (
//     <section
//       className="bg-[#faf5ef] py-20 md:py-28 lg:py-36"
//       aria-label="Why Visit Nathdwara"
//     >
//       <motion.div
//         className="max-w-6xl mx-auto px-6"
//         variants={container}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.3 }}
//       >
//         {/* GRID: Text (left) + Visual (right) */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          
//           {/* TEXT COLUMN */}
//           <div className="flex flex-col gap-8">
//             {/* Eyebrow */}
//             <motion.p
//               variants={fadeUp}
//               className="uppercase tracking-[0.3em] text-sm font-medium"
//               style={{ color: "#c49a6c", fontFamily: "Inter, sans-serif" }}
//             >
//               A City of Devotion & Culture
//             </motion.p>

//             {/* Heading */}
//             <motion.h2
//               variants={fadeUp}
//               className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight"
//               style={{
//                 color: "#1a1a1a",
//                 fontFamily: "Playfair Display, serif",
//                 fontWeight: 600,
//               }}
//             >
//               Why Visit Nathdwara
//             </motion.h2>

//             {/* Editorial paragraphs */}
//             <motion.div
//               variants={fadeUp}
//               className="flex flex-col gap-6 max-w-3xl leading-tight"
//               style={{
//                 color: "#6d6d6d",
//                 fontFamily: "Inter, sans-serif",
//                 fontWeight: 300,
//               }}
//             >
//               <p className="text-base md:text-lg lg:text-xl">
//                 Nathdwara is a town shaped by devotion and time. For centuries,
//                 pilgrims, artists, and seekers have arrived here drawn by the
//                 presence of Shrinath Ji — not as a spectacle, but as a living
//                 rhythm of faith and reflection.
//               </p>

//               <p className="text-base md:text-lg lg:text-xl">
//                 Beyond its spiritual core lies a quiet cultural depth. Temple
//                 architecture, traditional art, and age-old rituals coexist with
//                 everyday life, preserving a heritage that continues without
//                 interruption or excess.
//               </p>

//               <p className="text-base md:text-lg lg:text-xl">
//                 To visit Nathdwara is to slow down. Walkable streets, sacred
//                 landmarks, and a gentle pace allow visitors to feel grounded.
//                 Staying close to the heart of the town offers comfort without
//                 distance — letting each moment unfold naturally.
//               </p>
//             </motion.div>
//           </div>

//           {/* VISUAL COLUMN */}
//           <motion.div
//             variants={fadeUp}
//             transition={{ delay: 0.2 }}
//             className="relative w-full"
//           >
//             {/* Visual frame */}
//             <div className="relative overflow-hidden rounded-3xl">
//               {/* Optional subtle gold outline */}
//               <div className="absolute inset-0 rounded-3xl ring-1 ring-[#c49a6c]/30 pointer-events-none" />

//               {/* Image */}
//               <img
//                 src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Vishwas_Swaroopam_after_completion_of_work.jpg"
//                 alt="Spiritual surroundings of Nathdwara"
//                 loading="lazy"
//                 className="
//                   w-full
//                   object-cover
//                   aspect-[16/9]
//                   md:aspect-[3/4]
//                   lg:aspect-[1/1]
//                 "
//               />
//             </div>

//             {/* Soft breathing space below image on mobile */}
//             <div className="block lg:hidden h-2" />
//           </motion.div>

//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default WhyVisitNathdwara;



import React from "react";
import { motion } from "framer-motion";

/**
 * WhyVisitNathdwara
 * High-end editorial storytelling layout.
 */

const maskReveal = {
  hidden: { y: "100%", opacity: 0 },
  visible: { 
    y: "0%", 
    opacity: 1, 
    transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] } 
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 } 
  },
};

const WhyVisitNathdwara = () => {
  return (
    <section className="bg-[#FAF9F6] py-24 md:py-36 lg:py-48 overflow-hidden selection:bg-[#c49a6c] selection:text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* ----- TEXT COLUMN (LHS) ----- */}
          <div className="lg:col-span-6 flex flex-col items-start order-2 lg:order-1">
            
            {/* Eyebrow */}
            <div className="overflow-hidden mb-8">
              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={maskReveal}
                className="flex items-center gap-4"
              >
                <div className="h-[1px] w-8 bg-[#c49a6c]" />
                <p className="uppercase tracking-[0.4em] text-[10px] md:text-xs text-[#c49a6c] font-medium font-sans">
                  The Spiritual Rhythm
                </p>
              </motion.div>
            </div>

            {/* Heading */}
            <div className="overflow-hidden mb-12">
              <motion.h2
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={maskReveal}
                className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-[#1a1a1a] leading-tight tracking-tight"
              >
                Why Visit <br />
                <span className="italic text-[#c49a6c]">Nathdwara</span>
              </motion.h2>
            </div>

            {/* Editorial Content */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="flex flex-col gap-8 text-[#666] font-light text-sm md:text-base lg:text-[17px] leading-[1.9] tracking-wide"
            >
              <p>
                Nathdwara is a town shaped by devotion and time. For centuries,
                pilgrims, artists, and seekers have arrived here drawn by the
                presence of Shrinath Ji — not as a spectacle, but as a living
                rhythm of faith and reflection.
              </p>

              <p>
                Beyond its spiritual core lies a quiet cultural depth. Temple
                architecture, traditional art, and age-old rituals coexist with
                everyday life, preserving a heritage that continues without
                interruption or excess.
              </p>

              <p>
                To visit Nathdwara is to slow down. Walkable streets, sacred
                landmarks, and a gentle pace allow visitors to feel grounded. 
                Staying at <span className="text-[#c49a6c] font-normal">Hotel Bhakti</span> lets each moment unfold naturally.
              </p>
            </motion.div>
          </div>

          {/* ----- VISUAL COLUMN (RHS) ----- */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 lg:col-start-8 order-1 lg:order-2"
          >
            <div className="relative group">
              {/* Offset Decorative Frame */}
              <div className="absolute -top-6 -right-6 w-full h-full border-[0.5px] border-[#c49a6c]/40 z-0" />
              
              {/* Image Container with Sharp Edges */}
              <div className="relative z-10 overflow-hidden aspect-[4/5] bg-[#e9e5e0]">
                <motion.img
                  initial={{ scale: 1.15 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2.5, ease: "easeOut" }}
                  src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Vishwas_Swaroopam_after_completion_of_work.jpg"
                  alt="Spiritual surroundings of Nathdwara"
                  className="w-full h-full object-cover"
                />
                {/* Subtle Cinematic Overlay */}
                <div className="absolute inset-0 bg-black/5 mix-blend-multiply" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyVisitNathdwara;