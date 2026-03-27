// import React from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// /**
//  * AttractionsPageCTA
//  * Calm editorial closing CTA for the Attractions page
//  */

// const fadeUp = {
//   hidden: {
//     opacity: 0,
//     y: 22,
//     filter: "blur(4px)",
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     filter: "blur(0px)",
//     transition: {
//       duration: 0.8,
//       ease: [0.16, 1, 0.3, 1],
//     },
//   },
// };

// const AttractionsPageCTA = () => {
//   return (
//     <section
//       className="bg-[#faf5ef] py-20 md:py-28"
//       aria-label="Plan your stay at Hotel Bhakti Palace"
//     >
//       <motion.div
//         className="max-w-4xl mx-auto px-6 text-center flex flex-col gap-8"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.2 }}
//       >
//         {/* Eyebrow */}
//         <motion.p
//           variants={fadeUp}
//           className="uppercase tracking-[0.25em] text-xs"
//           style={{ color: "#c49a6c" }}
//         >
//           Plan Your Visit
//         </motion.p>

//         {/* Main Heading */}
//         <motion.h3
//           variants={fadeUp}
//           className="font-serif text-2xl md:text-3xl text-[#1a1a1a]"
//         >
//           Experience Nathdwara with comfort and ease
//         </motion.h3>

//         {/* Supporting Paragraph */}
//         <motion.p
//           variants={fadeUp}
//           className="text-base md:text-lg text-[#6d6d6d] leading-relaxed max-w-2xl mx-auto"
//           style={{ lineHeight: 1.8 }}
//         >
//           After exploring the spiritual and cultural landmarks around Nathdwara,
//           enjoy a peaceful and comfortable stay close to it all at Hotel Bhakti
//           Palace.
//         </motion.p>

//         {/* CTA Actions */}
//         <motion.div
//           variants={fadeUp}
//           className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-6"
//         >
//           {/* Primary CTA */}
//           <Link
//             to="/rooms"
//             className="inline-block px-8 py-3 text-sm uppercase tracking-wide
//                        border border-[#c49a6c] text-[#c49a6c] rounded-full
//                        hover:bg-[#c49a6c] hover:text-white
//                        transition-all duration-300
//                        focus:outline-none focus-visible:ring-1 focus-visible:ring-[#c49a6c]"
//             aria-label="Plan your stay at Hotel Bhakti Palace"
//           >
//             Plan your stay
//           </Link>

//           {/* Secondary CTA */}
//           <Link
//             to="/contact"
//             className="text-sm md:text-base text-[#1a1a1a]
//                        underline underline-offset-4
//                        decoration-[#c49a6c] decoration-[1px]
//                        hover:text-[#c49a6c]
//                        transition-colors duration-300
//                        focus:outline-none focus-visible:ring-1 focus-visible:ring-[#c49a6c]"
//             aria-label="Contact Hotel Bhakti Palace for enquiries"
//           >
//             Contact us for enquiries
//           </Link>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default AttractionsPageCTA;



import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/**
 * AttractionsPageCTA
 * Editorial closing for the Attractions page.
 */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
  },
};

const AttractionsPageCTA = () => {
  return (
    <section className="relative bg-[#FAF9F6] pb-32 overflow-hidden selection:bg-[#c49a6c] selection:text-white">
      

      {/* 2. Soft Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#c49a6c]/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        {/* --- Eyebrow --- */}
        <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8 mt-12">
          <div className="h-[0.5px] w-6 md:w-10 bg-[#c49a6c]/60" />
          <span className="block text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-[#c49a6c] font-medium font-sans">
            Plan Your Visit
          </span>
          <div className="h-[0.5px] w-6 md:w-10 bg-[#c49a6c]/60" />
        </motion.div>

        {/* --- Main Heading --- */}
        <motion.h2
          variants={fadeUp}
          className="text-4xl md:text-5xl lg:text-6xl font-light text-[#1a1a1a] mb-8 leading-[1.15] tracking-tight"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Experience Nathdwara with <br className="hidden md:block" />
          <span className="italic text-[#c49a6c]">comfort and ease.</span>
        </motion.h2>

        {/* --- Editorial Vertical Divider --- */}
        <motion.div variants={fadeUp} className="w-px h-12 bg-[#c49a6c]/30 mx-auto mb-8" />

        {/* --- Supporting Paragraph --- */}
        <motion.p
          variants={fadeUp}
          className="text-[#666] text-sm md:text-base lg:text-lg max-w-2xl mx-auto leading-[1.9] font-light tracking-wide mb-14"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          After exploring the spiritual and cultural landmarks around Nathdwara,
          enjoy a peaceful and comfortable stay close to it all at Hotel Bhakti.
        </motion.p>

        {/* --- CTA Actions (Sharp & Minimal) --- */}
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-12">
          
          {/* Primary Action */}
          <Link
            to="/rooms"
            className="group relative inline-flex items-center justify-center px-12 py-5 bg-[#1a1a1a] text-white text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-light transition-colors duration-500 hover:bg-[#c49a6c]"
          >
            <span>Plan your stay</span>
          </Link>

          {/* Secondary Action */}
          <Link
            to="/contact"
            className="group relative text-[#888] hover:text-[#1a1a1a] text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-normal transition-colors duration-500"
          >
            Enquire Now
            {/* Elegant thin underline */}
            <span className="absolute left-0 -bottom-2 w-full h-[0.5px] bg-[#d5c5b5] transition-all duration-500 group-hover:bg-[#1a1a1a]" />
          </Link>
          
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AttractionsPageCTA;