// import React, { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import { motion, useAnimation } from "framer-motion";

// const AboutCTA = () => {
//   const controls = useAnimation();
//   const [hasAnimated, setHasAnimated] = useState(false);
//   const sectionRef = useRef(null);

//   // Intersection Observer for fade-in animation on scroll
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting && !hasAnimated) {
//           controls.start({ opacity: 1, y: 0 });
//           setHasAnimated(true);
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, [controls, hasAnimated]);

//   return (
//     <section
//       ref={sectionRef}
//       className="bg-[#faf5ef] text-center py-24 md:py-28 overflow-hidden"
//     >
//       {/* --- Container --- */}
//       <motion.div
//         className="max-w-4xl mx-auto px-6"
//         initial={{ opacity: 0, y: 40 }}
//         animate={controls}
//         transition={{ duration: 1, ease: "easeOut" }}
//       >
//         {/* --- Heading --- */}
//         <h2
//           className="text-3xl md:text-5xl font-semibold mb-6 leading-tight text-[#1a1a1a]"
//           style={{ fontFamily: "Playfair Display, serif" }}
//         >
//           Experience the Essence of Bhakti Palace
//         </h2>

//         {/* --- Paragraph --- */}
//         <p
//           className="text-[#6d6d6d] text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
//           style={{ fontFamily: "Inter, sans-serif" }}
//         >
//           A luxurious stay immersed in devotion, elegance, and comfort —
//           perfectly located near the sacred ShreeNath Ji Temple. Begin your
//           journey with us today.
//         </p>

//         {/* --- Buttons --- */}
//         <div className="flex justify-center items-center gap-6 flex-wrap">
//           <Link
//             to="/rooms"
//             aria-label="Book your stay at Hotel Bhakyi Palace"
//             className="bg-[#c49a6c] text-white hover:bg-opacity-90 transition-all duration-500 rounded-full px-8 py-3 font-medium text-sm uppercase tracking-wider"
//             style={{ fontFamily: "Inter, sans-serif" }}
//           >
//             Book Your Stay
//           </Link>

//           <Link
//             to="/contact"
//             aria-label="Contact Hotel Bhakyi Palace"
//             className="border border-[#c49a6c] text-[#c49a6c] hover:bg-[#c49a6c] hover:text-white transition-all duration-500 rounded-full px-8 py-3 font-medium text-sm uppercase tracking-wider"
//             style={{ fontFamily: "Inter, sans-serif" }}
//           >
//             Contact Us
//           </Link>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default AboutCTA;
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AboutCTA = () => {
  /* ---------------------------
     Motion Variants
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
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative bg-[#FAF9F6] py-32 md:py-48 overflow-hidden selection:bg-[#c49a6c] selection:text-white">
      
      {/* Decorative ultra-thin vertical line descending from top
      // <motion.div 
      //   initial={{ height: 0 }}
      //   whileInView={{ height: "120px" }}
      //   viewport={{ once: true }}
      //   transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      //   className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] bg-[#c49a6c]/30"
      // /> */}

      {/* Subtle ambient glow in the background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c49a6c]/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col items-center"
        >
          {/* --- Eyebrow / Subtitle --- */}
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
            <div className="h-[1px] w-6 md:w-10 bg-[#c49a6c]" />
            <span className="block text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-[#c49a6c] font-medium font-sans">
              Your Sanctuary Awaits
            </span>
            <div className="h-[1px] w-6 md:w-10 bg-[#c49a6c]" />
          </motion.div>

          {/* --- Heading --- */}
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-6xl lg:text-7xl font-light mb-8 leading-[1.1] text-[#1a1a1a] tracking-tight"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Experience the Essence <br className="hidden md:block" />
            <span className="italic text-[#c49a6c]">of Hotel Bhakti</span>
          </motion.h2>

          {/* --- Paragraph --- */}
          <motion.p
            variants={fadeUp}
            className="text-[#666] text-sm md:text-base max-w-2xl mx-auto mb-14 leading-[1.9] font-light tracking-wide"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            A luxurious stay immersed in devotion, elegance, and comfort —
            perfectly located near the sacred Shree Nath Ji Temple. Begin your
            journey with us today.
          </motion.p>

          {/* --- Buttons (Editorial Style) --- */}
          <motion.div 
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-12"
          >
            {/* Primary Action: Solid sharp button */}
            <Link
              to="/rooms"
              className="group relative inline-flex items-center justify-center px-12 py-5 bg-[#c49a6c] text-[#1a1a1a] text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-light transition-colors duration-500 hover:bg-[#1a1a1a] hover:text-white"
            >
              <span>Book Your Stay</span>
            </Link>

            {/* Secondary Action: Minimalist Underline Link */}
            <Link
              to="/contact"
              className="group relative text-[#1a1a1a] hover:text-[#c49a6c] text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-normal transition-colors duration-500"
            >
              Contact Us
              <span className="absolute left-0 -bottom-2 w-full h-[0.5px] bg-[#d5c5b5] transition-all duration-500 group-hover:bg-[#1a1a1a]" />
            </Link>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default AboutCTA;