// // MapSection.jsx
// import React from "react";
// import { motion } from "framer-motion";

// /**
//  * ULTRA-LUXURY MAP SECTION
//  * - Double-line editorial frame
//  * - Gold micro-corner notches
//  * - Minimal spa-like vibes
//  * - Smooth framer-motion fade-up
//  * - Perfect for premium hotel sites
//  */

// const fadeUp = {
//   hidden: { opacity: 0, y: 26, filter: "blur(6px)" },
//   visible: {
//     opacity: 1,
//     y: 0,
//     filter: "blur(0)",
//     transition: {
//       duration: 1,
//       ease: [0.16, 1, 0.3, 1],
//     },
//   },
// };

// export default function MapSection() {
//   return (
//     <section
//       className="py-32 md:py-40 bg-[var(--background)]"
//       style={{
//         "--background": "#faf5ef",
//         "--text_primary": "#1a1a1a",
//         "--text_secondary": "#6d6d6d",
//         "--accent": "#c49a6c",
//         "--line": "rgba(0,0,0,0.12)",
//         "--map_border": "rgba(0,0,0,0.15)",
//       }}
//     >
//       <div className="max-w-6xl mx-auto px-6 flex flex-col gap-20">

//         {/* HEADER */}
//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.4 }}
//           className="text-center max-w-3xl mx-auto"
//         >
//           <h2
//             className="text-4xl md:text-6xl font-serif text-[var(--text_primary)] mb-6"
//             style={{ fontFamily: "Playfair Display, serif" }}
//           >
//             Find Us in Nathdwara
//           </h2>

//           <p
//             className="text-lg md:text-2xl text-[var(--text_secondary)] leading-relaxed"
//             style={{ fontFamily: "Inter, sans-serif" }}
//           >
//             Just few steps away from the sacred Shree Nath Ji Temple —
//             Hotel Bhakti Palace places you at the heart of spiritual devotion
//             and timeless hospitality.
//           </p>
//         </motion.div>

//         {/* MAP WRAPPER — DOUBLE FRAME + GOLD CORNERS */}
//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           className="relative w-full"
//         >
//           {/* OUTER FRAME */}
//           <div
//             className="rounded-3xl border relative"
//             style={{ borderColor: "var(--map_border)", padding: "14px" }}
//           >
//             {/* INNER FRAME */}
//             <div
//               className="rounded-2xl border overflow-hidden relative"
//               style={{ borderColor: "var(--map_border)" }}
//             >
//               {/* GOLD MICRO CORNERS — luxury */}
//               <span className="absolute top-0 left-0 w-6 h-[2px] bg-[var(--accent)] rounded-full"></span>
//               <span className="absolute top-0 right-0 w-6 h-[2px] bg-[var(--accent)] rounded-full"></span>
//               <span className="absolute bottom-0 left-0 w-6 h-[2px] bg-[var(--accent)] rounded-full"></span>
//               <span className="absolute bottom-0 right-0 w-6 h-[2px] bg-[var(--accent)] rounded-full"></span>

//               {/* MAP */}
//               <iframe
//                 title="Hotel Bhakti Palace Location Map"
//                 loading="lazy"
//                 className="w-full block"
//                 style={{
//                   height: "clamp(360px, 45vh, 680px)",
//                   border: "0",
//                 }}
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d538.2940795823679!2d73.81645413503497!3d24.929281825144567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39680d007e80eb93%3A0xc9ec800f5ba7c048!2sShrinathji%20Temple%20Gate%202!5e1!3m2!1sen!2sin!4v1767439272976!5m2!1sen!2sin"
//               ></iframe>
//             </div>
//           </div>
//         </motion.div>

//         {/* ADDRESS */}
//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           className="flex flex-col items-center text-center gap-4 mt-10"
//         >
//           <p
//             className="uppercase tracking-[0.25em] text-[var(--accent)] text-xs"
//             style={{ fontFamily: "Inter, sans-serif" }}
//           >
//             Our Location
//           </p>

//           <h3
//             className="text-xl md:text-2xl font-light text-[var(--text_primary)] leading-relaxed"
//             style={{ fontFamily: "Inter, sans-serif" }}
//           >
//             Hotel Bhakti Palace, Near Shree Nath Ji Temple, Nathdwara, Rajasthan - 313301
//           </h3>

//           <p
//             className="text-[var(--text_secondary)] text-base md:text-lg"
//             style={{ fontFamily: "Inter, sans-serif" }}
//           >
//             A peaceful town rooted in devotion, heritage, art and spiritual energy.
//           </p>

//           <a
//             href="https://maps.app.goo.gl/Vf3BUrDe5iuiYDPQA"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="mt-4 inline-block text-[var(--accent)] underline underline-offset-4 hover:opacity-75 transition-all duration-300"
//           >
//             Open in Google Maps
//           </a>
//         </motion.div>

//       </div>
//     </section>
//   );
// }

import React from "react";
import { motion } from "framer-motion";

/**
 * ULTRA-LUXURY MAP SECTION - HOTEL BHAKTI
 * Fixed React DOM Property Errors & Style Prop Error
 */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function MapSection() {
  return (
    <section className="bg-[#FAF9F6] py-24 md:py-40 selection:bg-[#c49a6c] selection:text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center">

        {/* --- HEADER --- */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-4xl mb-20 md:mb-28"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-8 md:w-12 bg-[#c49a6c]/60" />
            <p className="uppercase tracking-[0.4em] text-[10px] md:text-xs text-[#c49a6c] font-medium font-sans">
              Locate Our Sanctuary
            </p>
            <div className="h-px w-8 md:w-12 bg-[#c49a6c]/60" />
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light text-[#1a1a1a] mb-10 leading-tight tracking-tight">
            Find Us in <span className="italic text-[#c49a6c]">Nathdwara</span>
          </h2>

          <p className="text-[#666] text-sm md:text-base lg:text-lg leading-[1.9] font-light max-w-2xl mx-auto tracking-wide">
            Just 50 steps away from the sacred Shree Nath Ji Temple —
            Hotel Bhakti places you at the heart of spiritual devotion
            and timeless hospitality.
          </p>
        </motion.div>

        {/* --- MAP WRAPPER --- */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative w-full max-w-5xl group"
        >
          <div className="absolute -top-6 -right-6 w-full h-full border-[0.5px] border-[#c49a6c]/40 z-0 pointer-events-none" />

          <div className="relative z-10 bg-[#e9e5e0] overflow-hidden rounded-[2px] shadow-2xl">
            <span className="absolute top-0 left-0 w-8 h-px bg-[#c49a6c] z-20" />
            <span className="absolute top-0 left-0 w-px h-8 bg-[#c49a6c] z-20" />
            <span className="absolute bottom-0 right-0 w-8 h-px bg-[#c49a6c] z-20" />
            <span className="absolute bottom-0 right-0 w-px h-8 bg-[#c49a6c] z-20" />

            <iframe
              title="Hotel Bhakti Location Map"
              className="w-full grayscale contrast-125 filter transition-all duration-1000 group-hover:grayscale-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.0693283033793!2d73.8139492753932!3d24.929708042483085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39680ddc4b83a16d%3A0x2d3dc8cc0ef50ac9!2sHotel%20Bhakti!5e0!3m2!1sen!2sin!4v1774638687510!5m2!1sen!2sin"
              style={{
                height: "clamp(400px, 55vh, 700px)",
                border: 0,
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>

        {/* --- ADDRESS DETAILS --- */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mt-20 md:mt-24"
        >
          <div className="w-px h-12 bg-[#c49a6c]/30 mb-8" />
          
          <h3 className="text-lg md:text-xl lg:text-2xl font-light text-[#1a1a1a] leading-relaxed tracking-wide mb-4 max-w-3xl">
            Hotel Bhakti, Near Shree Nath Ji Temple, <br className="hidden md:block" />
            Nathdwara, Rajasthan - 313301
          </h3>

          <p className="text-[#888] text-[10px] md:text-xs uppercase tracking-[0.3em] font-medium mb-10">
            A sanctuary rooted in heritage and art
          </p>

          <a
            href="https://maps.app.goo.gl/VDRJmRZEUz2wTKEE8" 
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 text-[#1a1a1a] text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-medium transition-colors duration-500"
          >
            <span>Navigate on Google Maps</span>
            <span className="font-sans text-sm font-light leading-none group-hover:translate-x-1 transition-transform duration-300">→</span>
            <span className="absolute left-0 -bottom-2 w-full h-[0.5px] bg-[#d5c5b5] transition-all duration-500 group-hover:bg-[#1a1a1a]" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}