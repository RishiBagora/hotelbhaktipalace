// import React from "react";
// import { motion } from "framer-motion";

// const container = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.12,
//     },
//   },
// };

// const fadeUp = {
//   hidden: {
//     opacity: 0,
//     y: 24,
//     filter: "blur(4px)",
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     filter: "blur(0px)",
//     transition: {
//       duration: 0.9,
//       ease: [0.16, 1, 0.3, 1],
//     },
//   },
// };

// const RoomsHero = () => {
//   return (
//     <section
//       className="
//         relative flex items-center justify-center
//         bg-[#faf5ef]
//         min-h-[60vh] md:min-h-[65vh] lg:min-h-[40vh]
//         px-6 pt-5
//       "
//       aria-label="Rooms and Accommodation introduction"
//     >
//       <motion.div
//         className="max-w-6xl mx-auto text-center"
//         variants={container}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.3 }}
//       >
//         {/* Eyebrow */}
//         <motion.p
//           variants={fadeUp}
//           className="
//             uppercase tracking-[0.28em]
//             text-xs md:text-sm
//             text-[#c49a6c]
//             mb-5
//           "
//         >
//           Rooms & Accommodation
//         </motion.p>

//         {/* Main Heading */}
//         <motion.h1
//           variants={fadeUp}
//           className="
//             font-serif
//             text-[#1a1a1a]
//             text-3xl md:text-4xl lg:text-5xl
//             leading-[1.25]
//             max-w-4xl
//             mx-auto
//           "
//         >
//           Comfortable stays designed for peace and convenience
//         </motion.h1>

//         {/* Supporting Paragraph */}
//         <motion.p
//           variants={fadeUp}
//           className="
//             mt-8
//             max-w-2xl
//             mx-auto
//             text-[#6d6d6d]
//             text-base md:text-lg
//             leading-[1.3]
//           "
//         >
//           At Hotel Bhakti Palace, our rooms are thoughtfully designed to offer
//           comfort, calm, and ease — making your stay in Nathdwara restful and
//           memorable.
//         </motion.p>
//       </motion.div>
//     </section>
//   );
// };

// export default RoomsHero;

import React from "react";
import { motion } from "framer-motion";

/* ---------------------------
   Motion Variants (Buttery Smooth)
--------------------------- */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    // Removed blur for a much cleaner, more elegant reveal
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
  },
};

const RoomsHero = () => {
  return (
    <section
      className="relative flex items-center justify-center bg-[#FAF9F6] min-h-[50vh] md:min-h-[60vh] px-6 py-24 md:py-32 overflow-hidden selection:bg-[#c49a6c] selection:text-white"
      aria-label="Rooms and Accommodation introduction"
    >
      {/* Subtle ambient glow in the background (barely visible, adds depth) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#c49a6c]/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Eyebrow / Subtitle */}
        <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
          <div className="h-[1px] w-8 md:w-12 bg-[#c49a6c]/50" />
          <p className="uppercase tracking-[0.4em] text-[9px] md:text-[10px] text-[#c49a6c] font-medium font-sans">
            Our Accommodations
          </p>
          <div className="h-[1px] w-8 md:w-12 bg-[#c49a6c]/50" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={fadeUp}
          className="font-serif text-[#1a1a1a] text-4xl md:text-5xl lg:text-6xl font-light leading-[1.15] tracking-tight mb-8"
        >
          Comfortable stays designed for <br className="hidden md:block" />
          <span className="italic text-[#c49a6c]">peace & convenience.</span>
        </motion.h1>

        {/* Microscopic Golden Accent Line */}
        <motion.div variants={fadeUp} className="w-px h-10 md:h-12 bg-[#c49a6c]/30 mb-8" />

        {/* Supporting Paragraph */}
        <motion.p
          variants={fadeUp}
          className="max-w-2xl text-[#666] font-light text-[14px] md:text-[15px] leading-[1.9] tracking-wide"
        >
          At Hotel Bhakti, our rooms are thoughtfully designed to offer
          comfort, calm, and ease — making your stay in Nathdwara restful and
          memorable.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default RoomsHero;