// // RoomsPageCTA.jsx
// import React from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// /**
//  * RoomsPageCTA
//  * Quiet luxury editorial closing CTA for Rooms & Accommodation page
//  * Calm, reassuring, non-salesy conclusion
//  */

// const fadeUp = {
//   hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
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

// const RoomsPageCTA = () => {
//   return (
//     <section className="bg-[#faf5ef] py-20 md:py-28">
//       <motion.div
//         className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.2 }}
//         variants={fadeUp}
//       >
//         {/* Eyebrow */}
//         <span
//           className="uppercase text-xs tracking-[0.3em] mb-4"
//           style={{ color: "#c49a6c" }}
//         >
//           Plan Your Stay
//         </span>

//         {/* Main Heading */}
//         <h2
//           className="text-2xl md:text-3xl font-serif text-[#1a1a1a] max-w-2xl"
//           style={{ fontFamily: "Playfair Display, serif", lineHeight: 1.4 }}
//         >
//           A comfortable stay, close to the spiritual heart of Nathdwara
//         </h2>

//         {/* Supporting Paragraph */}
//         <p
//           className="mt-6 text-base md:text-lg text-[#6d6d6d] max-w-2xl"
//           style={{ lineHeight: 1.8 }}
//         >
//           Whether you are visiting for pilgrimage or a peaceful retreat, our
//           accommodations offer comfort, convenience, and a calm environment for
//           a truly restful stay at Hotel Bhakti Palace.
//         </p>

//         {/* CTAs */}
//         <div className="mt-10 flex flex-col sm:flex-row items-center gap-6">
          

//           {/* Secondary */}
//           <Link
//             to="/contact"
//             className="text-sm text-[#6d6d6d] hover:text-[#c49a6c] underline underline-offset-4 transition-colors duration-300"
//             aria-label="Contact reservation team"
//           >
//             Contact our reservation team
//           </Link>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default RoomsPageCTA;


import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/* ---------------------------
   Motion Variants (Subtle & Smooth)
--------------------------- */
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
    // Removed blur for a cleaner, high-end reveal
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
  },
};

const RoomsPageCTA = () => {
  return (
    <section className="relative bg-[#FAF9F6] py-32 md:py-48 overflow-hidden selection:bg-[#c49a6c] selection:text-white">
      
      {/* Decorative ultra-thin vertical line descending from top */}
      

      {/* Subtle ambient glow to remove flatness */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#c49a6c]/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        {/* --- Eyebrow / Subtitle --- */}
        <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8 mt-12">
          <div className="h-[1px] w-6 md:w-10 bg-[#c49a6c]" />
          <span className="block text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-[#c49a6c] font-medium font-sans">
            Plan Your Stay
          </span>
          <div className="h-[1px] w-6 md:w-10 bg-[#c49a6c]" />
        </motion.div>

        {/* --- Main Heading --- */}
        <motion.h2
          variants={fadeUp}
          className="text-4xl md:text-5xl lg:text-6xl font-light text-[#1a1a1a] mb-8 leading-[1.15] tracking-tight"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          A comfortable stay, close to the <br className="hidden md:block" />
          <span className="italic text-[#c49a6c]">spiritual heart of Nathdwara.</span>
        </motion.h2>

        {/* --- Microscopic Divider --- */}
        <motion.div variants={fadeUp} className="w-px h-12 bg-[#c49a6c]/30 mx-auto mb-8" />

        {/* --- Supporting Paragraph --- */}
        <motion.p
          variants={fadeUp}
          className="text-[#666] text-[14px] md:text-[15px] font-light leading-[1.9] max-w-xl tracking-wide mb-14"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Whether you are visiting for pilgrimage or a peaceful retreat, our
          accommodations offer comfort, convenience, and a calm environment for
          a truly restful stay at Hotel Bhakti.
        </motion.p>

        {/* --- CTAs (Editorial Style) --- */}
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-12">
          
          {/* Primary Action: Solid sharp button */}
          <Link
            to="/rooms"
            className="group relative inline-flex items-center justify-center px-12 py-5 bg-[#c49a6c] text-[#1a1a1a] text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-regular transition-colors duration-500 hover:bg-[#1a1a1a] hover:text-white"
            aria-label="Book your stay"
          >
            <span>Book Your Stay</span>
          </Link>

          {/* Secondary Action: Minimalist Underline Link */}
          <Link
            to="/contact"
            className="group relative text-[#1a1a1a] hover:text-[#c49a6c] text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-regular transition-colors duration-500"
            aria-label="Contact reservation team"
          >
            Contact Reservations
            {/* Elegant hover underline */}
            <span className="absolute left-0 -bottom-2 w-full h-[0.5px] bg-[#d5c5b5] transition-all duration-500 group-hover:bg-[#1a1a1a]" />
          </Link>
          
        </motion.div>
      </motion.div>
    </section>
  );
};

export default RoomsPageCTA;