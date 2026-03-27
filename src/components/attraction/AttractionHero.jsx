// import React from "react";
// import { motion } from "framer-motion";

// /**
//  * AttractionsHero
//  * Luxury editorial hero for Attractions page
//  * Calm, spiritual, minimal — no images, no cards
//  */

// const fadeUp = {
//   hidden: {
//     opacity: 0,
//     y: 24,
//     filter: "blur(6px)",
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     filter: "blur(0px)",
//     transition: {
//       duration: 1,
//       ease: [0.16, 1, 0.3, 1],
//     },
//   },
// };

// const AttractionsHero = () => {
//   return (
//     <section
//       className="bg-[#faf5ef] py-32 md:pt-20 pb-10"
//       aria-label="Attractions Hero Section"
//     >
//       <div className="max-w-4xl mx-auto px-6 text-center flex flex-col gap-10">
        
//         {/* Subtitle */}
//         <motion.p
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.4 }}
//           className="uppercase tracking-[0.3em] text-sm font-medium"
//           style={{
//             color: "#c49a6c",
//             fontFamily: "Inter, sans-serif",
//           }}
//         >
//           Explore the Sacred City
//         </motion.p>

//         {/* Main Heading */}
//         <motion.h1
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.4 }}
//           className="font-serif text-3xl md:text-6xl leading-tight"
//           style={{
//             color: "#1a1a1a",
//             fontFamily: "Playfair Display, serif",
//             fontWeight: 600,
//           }}
//         >
//           Attractions Around Nathdwara
//         </motion.h1>

//         {/* Description */}
//         <motion.p
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.4 }}
//           className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
//           style={{
//             color: "#6d6d6d",
//             fontFamily: "Inter, sans-serif",
//             lineHeight: 1.3,
//             fontWeight: 300,
//           }}
//         >
//           Surrounded by centuries of devotion, culture and history, Nathdwara
//           offers a deeply enriching experience. From sacred temples to heritage
//           landmarks, discover the places that make this spiritual city truly
//           timeless.
//         </motion.p>

//       </div>
//     </section>
//   );
// };

// export default AttractionsHero;


import React from "react";
import { motion } from "framer-motion";

/**
 * AttractionsHero
 * Luxury editorial hero for Attractions page
 * Minimal, spiritual, and authoritative.
 */

/* ---------------------------
   Motion Variants (Cinematic Mask)
--------------------------- */
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
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 } 
  },
};

const AttractionsHero = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-center bg-[#FAF9F6] pt-32 pb-20 md:pt-44 md:pb-24 px-6 overflow-hidden selection:bg-[#c49a6c] selection:text-white"
      aria-label="Attractions Hero Section"
    >
      {/* Subtle background ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-[#c49a6c]/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        
        {/* --- Subtitle (Eyebrow) --- */}
        <div className="overflow-hidden mb-8">
          <motion.div 
            variants={maskReveal}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-4"
          >
            <div className="h-[0.5px] w-8 md:w-12 bg-[#c49a6c]/60" />
            <p className="uppercase tracking-[0.4em] text-[10px] md:text-xs text-[#c49a6c] font-medium font-sans">
              Explore the Sacred City
            </p>
            <div className="h-[0.5px] w-8 md:w-12 bg-[#c49a6c]/60" />
          </motion.div>
        </div>

        {/* --- Main Heading --- */}
        <div className="overflow-hidden mb-10 pb-2">
          <motion.h1
            variants={maskReveal}
            initial="hidden"
            animate="visible"
            className="font-serif text-[#1a1a1a] text-4xl md:text-6xl lg:text-7xl font-light leading-[1.15] tracking-tight"
          >
            Attractions Around <br className="hidden md:block" />
            <span className="italic text-[#c49a6c]">Nathdwara</span>
          </motion.h1>
        </div>


        {/* --- Description --- */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-[#666] text-sm md:text-base lg:text-lg max-w-3xl mx-auto leading-[1.9] font-light tracking-wide"
        >
          Surrounded by centuries of devotion, culture, and history, Nathdwara
          offers a deeply enriching experience. From sacred temples to heritage
          landmarks, discover the places that make this spiritual city truly
          timeless.
        </motion.p>

      </div>
    </section>
  );
};

export default AttractionsHero;