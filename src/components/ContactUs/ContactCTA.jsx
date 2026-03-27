// // ContactCTA.jsx
// import React from "react";
// import { motion } from "framer-motion";

// /**
//  * ULTRA-LUXURY CTA with:
//  * - Spiritual mandala watermark (subtle, centered)
//  * - Gold radiant halo behind the title
//  * - Soft parallax on headline
//  * - Gold underline accent
//  * - Calm luxury spacing
//  */

// const fadeUp = {
//   hidden: { opacity: 0, y: 26, filter: "blur(6px)" },
//   visible: (i = 0) => ({
//     opacity: 1,
//     y: 0,
//     filter: "blur(0px)",
//     transition: {
//       delay: i * 0.12,
//       duration: 1,
//       ease: [0.16, 1, 0.3, 1],
//     },
//   }),
// };

// export default function ContactCTA() {
//   return (
//     <section
//       className="relative py-40 overflow-hidden bg-[var(--background)]"
//       style={{
//         "--background": "#faf5ef",
//         "--text_primary": "#1a1a1a",
//         "--text_secondary": "#6d6d6d",
//         "--accent": "#c49a6c",
//         "--soft_line": "rgba(0,0,0,0.1)",
//       }}
//     >
//       {/* SOFT SPIRITUAL MANDALA WATERMARK */}
//       <div
//         className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.07]"
//       >
//         <img
//           src="/mandala.svg"
//           alt=""
//           className="w-[420px] md:w-[600px] object-contain"
//         />
//       </div>

//       {/* GOLD HALO BEHIND TITLE */}
//       <div className="absolute top-[24%] left-1/2 -translate-x-1/2 w-[260px] h-[260px] blur-3xl rounded-full opacity-30 pointer-events-none"
//         style={{ background: "radial-gradient(circle, #c49a6c40, transparent)" }}
//       />

//       <div className="relative max-w-3xl mx-auto px-6 text-center flex flex-col items-center">

//         {/* HEADING WITH PARALLAX */}
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//             transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
//           }}
//           viewport={{ once: true, amount: 0.4 }}
//           whileHover={{ y: -2 }} // tiny parallax drift
//           className="text-4xl md:text-6xl font-serif text-[var(--text_primary)] mb-4"
//           style={{ fontFamily: "Playfair Display, serif" }}
//         >
//           How Can We Assist You?
//         </motion.h2>

//         {/* GOLD UNDERLINE */}
//         <motion.div
//           initial={{ width: 0, opacity: 0 }}
//           whileInView={{
//             width: "80px",
//             opacity: 1,
//             transition: { duration: 1, ease: "easeOut" }
//           }}
//           viewport={{ once: true }}
//           className="h-[2px] bg-[var(--accent)] mx-auto mb-10 rounded-full"
//         />

//         {/* DESCRIPTION */}
//         <motion.p
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           custom={1}
//           viewport={{ once: true, amount: 0.4 }}
//           className="text-lg md:text-2xl text-[var(--text_secondary)] max-w-2xl mx-auto leading-relaxed mb-14"
//           style={{ fontFamily: "Inter, sans-serif" }}
//         >
//           Whether you're planning a spiritual visit, a luxury stay,
//           or need personalised assistance — our team at Hotel Bhakti Palace
//           is always here to help you.
//         </motion.p>

//         {/* DIVIDER */}
//         <motion.div
//           variants={fadeUp}
//           custom={2}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="w-full h-px bg-[var(--soft_line)] my-14"
//         />

//         {/* CTA BUTTONS */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="flex flex-wrap gap-6 justify-center"
//         >
//           {/* PRIMARY */}
//           <motion.a
//             variants={fadeUp}
//             custom={3}
//             href="tel:+919772578699"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="px-10 py-4 rounded-full bg-[var(--accent)] text-white uppercase tracking-wide text-sm hover:bg-opacity-90 transition-all duration-500"
//             style={{ fontFamily: "Inter, sans-serif" }}
//           >
//             Call Reservations
//           </motion.a>

//           {/* SECONDARY */}
//           <motion.a
//             variants={fadeUp}
//             custom={4}
//             href="https://wa.me/919772578699"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="px-10 py-4 rounded-full border border-[var(--accent)] text-[var(--accent)] uppercase tracking-wide text-sm hover:bg-[var(--accent)] hover:text-white transition-all duration-500"
//             style={{ fontFamily: "Inter, sans-serif" }}
//           >
//             WhatsApp Us
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//   );
// }



import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function ContactCTA() {
  return (
    <section className="relative bg-[#FAF9F6] py-32 md:py-48 overflow-hidden selection:bg-[#c49a6c] selection:text-white border-t border-[#f0ebe3]">
      
      {/* 1. BACKGROUND MANDALA (Opacity low so it never distracts) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] z-0">
        <motion.img
          animate={{ rotate: 360 }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          src="/mandala.svg" 
          alt=""
          className="w-[500px] md:w-[800px] object-contain"
        />
      </div>

      {/* 2. BACKGROUND GLOW (Z-0 and very low opacity) */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] blur-[100px] rounded-full opacity-10 pointer-events-none z-0"
        style={{ background: "#c49a6c" }}
      />

      {/* 3. MAIN CONTENT (Z-10 to stay above everything) */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        
        {/* Eyebrow */}
        <motion.div 
          custom={0} 
          variants={fadeUp} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="h-px w-8 bg-[#c49a6c]/60" />
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#c49a6c] font-medium font-sans">
            Personal Assistance
          </span>
          <div className="h-px w-8 bg-[#c49a6c]/60" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          custom={1} 
          variants={fadeUp} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif font-light text-[#1a1a1a] mb-8 leading-tight tracking-tight"
        >
          How Can We <br />
          <span className="italic text-[#c49a6c]">Assist You?</span>
        </motion.h2>


        {/* Description */}
        <motion.p
          custom={2} 
          variants={fadeUp} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
          className="text-[#666] text-sm md:text-base lg:text-lg leading-[1.9] max-w-2xl mx-auto font-light tracking-wide mb-14"
        >
          Whether you're planning a spiritual visit or a luxury stay,
          our team at <span className="text-[#c49a6c] font-normal">Hotel Bhakti</span> is always here to help you.
        </motion.p>

        {/* CTA ACTIONS (Z-20 for extra safety) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-12 relative z-20">
          {/* Call Button */}
          <motion.a
            custom={3} 
            variants={fadeUp}
            initial="hidden" 
            whileInView="visible"
            viewport={{ once: true }}
            href="tel:+919772578699"
            className="inline-flex items-center justify-center px-12 py-5 bg-[#1a1a1a] text-white text-[10px] md:text-xs uppercase tracking-[0.25em] font-light transition-all duration-500 hover:bg-[#c49a6c] cursor-pointer shadow-sm"
          >
            Call Reservations
          </motion.a>

          {/* WhatsApp Link */}
          <motion.a
            custom={4} 
            variants={fadeUp}
            initial="hidden" 
            whileInView="visible"
            viewport={{ once: true }}
            href="https://wa.me/919772578699"
            target="_blank"
            rel="noopener noreferrer"
            className="relative text-[#888] hover:text-[#1a1a1a] text-[10px] md:text-xs uppercase tracking-[0.25em] font-normal transition-colors duration-500 group cursor-pointer"
          >
            WhatsApp Us
            {/* Elegant thin underline */}
            <span className="absolute left-0 -bottom-2 w-full h-[0.5px] bg-[#d5c5b5] transition-all duration-500 group-hover:bg-[#1a1a1a]" />
          </motion.a>
        </div>

      </div>
    </section>
  );
}