// // AmenitiesSection.jsx
// import React from "react";
// import { motion } from "framer-motion";
// import { PiWifiHighLight } from "react-icons/pi";
// import { PiFireExtinguisherLight } from "react-icons/pi";
// import { GiVacuumCleaner } from "react-icons/gi";
// import { MdOutlineRoomService } from "react-icons/md";
// import { PiSecurityCameraLight } from "react-icons/pi";
// import { PiForkKnifeLight } from "react-icons/pi";
// import { RiRestaurantLine } from "react-icons/ri";

// /**
//  * AmenitiesSection
//  * Ultra-luxury amenities block — editorial, minimal, gold-ring icons, mandala watermark,
//  * subtle framer-motion reveals and hover micro-interactions.
//  *
//  * Requirements:
//  * - TailwindCSS configured in project
//  * - framer-motion installed: npm i framer-motion
//  * - react-icons installed: npm i react-icons
//  *
//  * Usage:
//  * import AmenitiesSection from './AmenitiesSection';
//  * <AmenitiesSection />
//  */

// /* ------------------ Simple Inline Mandala (decorative watermark) ------------------ */
// const MandalaDecor = ({ className = "", style = {} }) => (
//   <svg
//     aria-hidden="true"
//     focusable="false"
//     className={className}
//     style={style}
//     width="900"
//     height="900"
//     viewBox="0 0 900 900"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <g opacity="0.95" stroke="#c49a6c" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round">
//       <circle cx="450" cy="450" r="400" />
//       <circle cx="450" cy="450" r="320" />
//       <circle cx="450" cy="450" r="220" />
//       <circle cx="450" cy="450" r="120" />
//       <g transform="translate(450,450)">
//         {[...Array(12)].map((_, i) => {
//           const angle = (i / 12) * Math.PI * 2;
//           const x = Math.cos(angle) * 320;
//           const y = Math.sin(angle) * 320;
//           return (
//             <path
//               key={i}
//               d={`M ${Math.cos(angle) * 80} ${Math.sin(angle) * 80}
//                   C ${Math.cos(angle) * 140} ${Math.sin(angle) * 140} ${x} ${y} ${x} ${y}`}
//               transform={`rotate(${(i * 360) / 12})`}
//               opacity="0.95"
//             />
//           );
//         })}
//       </g>
//     </g>
//   </svg>
// );

// /* ------------------ Data (amenities) ------------------ */
// const amenitiesData = [
//   { Icon: PiWifiHighLight, title: "Free Wifi" },
//   { Icon: PiForkKnifeLight, title: "Restaurant" },
//   { Icon: RiRestaurantLine, title: "Multi-Cuisine Dining" },
//   { Icon: GiVacuumCleaner, title: "Daily Housekeeping" },
//   { Icon: MdOutlineRoomService, title: "Room Service" },
//   { Icon: PiSecurityCameraLight, title: "24/7 Security" },
//   { Icon: PiFireExtinguisherLight, title: "Fire Safety" },
//   { Icon: PiFireExtinguisherLight, title: "Fire Safety" },
//   { Icon: PiFireExtinguisherLight, title: "Fire Safety" },
//   { Icon: PiFireExtinguisherLight, title: "Fire Safety" },
//   { Icon: PiFireExtinguisherLight, title: "Fire Safety" },
//   { Icon: PiFireExtinguisherLight, title: "Fire Safety" },
// ];

// /* ------------------ Motion variants ------------------ */
// const fadeUp = {
//   hidden: { opacity: 0, y: 22, filter: "blur(6px)" },
//   visible: (i = 0) => ({
//     opacity: 1,
//     y: 0,
//     filter: "blur(0px)",
//     transition: { delay: i * 0.06, duration: 0.85, ease: [0.16, 1, 0.3, 1] },
//   }),
// };

// /* ------------------ Amenity Item (no boxes — editorial) ------------------ */
// const AmenityItem = ({ Icon, title, index }) => {
//   return (
//     <motion.div
//       variants={fadeUp}
//       custom={index}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.3 }}
//       className="flex flex-col items-center md:items-start text-center md:text-left"
//     >
//       {/* Gold ring icon */}
//       <div
//         className="flex items-center justify-center rounded-full"
//         style={{
//           width: 64,
//           height: 64,
//           border: "1.6px solid rgba(196,154,108,0.85)",
//           color: "var(--accent)",
//           transition: "transform .32s ease, box-shadow .32s ease",
//         }}
//       >
//         <Icon
//           className="w-7 h-7"
//           style={{ color: "var(--accent)" }}
//           aria-hidden="true"
//         />
//       </div>

//       {/* Title */}
//       <h3
//         className="mt-3 text-base md:text-lg font-serif text-[var(--text-primary)]"
//         style={{ fontFamily: "Playfair Display, serif", lineHeight: 1.05 }}
//       >
//         {title}
//       </h3>

//       {/* Thin gold underline */}
//       <div className="mt-2 w-12 h-[2px] bg-[var(--accent)] rounded-sm" />

//       {/* Micro-hover interaction on entire item */}
//       <style>
//         {`
//           .amenity-hover-${index}:hover { transform: translateY(-4px); }
//           .amenity-hover-${index}:hover svg { transform: translateY(-1px) scale(1.02); }
//         `}
//       </style>
//       <div className={`mt-0 amenity-hover-${index} transition-transform duration-300`} />
//     </motion.div>
//   );
// };

// /* ------------------ Main Section ------------------ */
// export default function AmenitiesSection() {
//   return (
//     <section
//       className="relative overflow-hidden py-15 md:pt-32"
//       style={{
//         background: "var(--bg)",
//         fontFamily: "'Inter', sans-serif",
//         // CSS variables used in component
//         "--bg": "#faf9f6",
//         "--text-primary": "#1a1a1a",
//         "--text-secondary": "#6d6d6d",
//         "--accent": "#c49a6c",
//       }}
//     >
//       {/* Decorative Mandala Watermark (parallax + subtle rotation using CSS animation) */}
//       <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
//         <div
//           className="opacity-[0.08] mix-blend-multiply select-none"
//           style={{ transform: "translateZ(0)" }}
//           aria-hidden="true"
//         >
//           <motion.div
//             initial={{ rotate: 0 }}
//             animate={{ rotate: [0, 2, 0] }}
//             transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
//             className="w-[420px] md:w-[760px]"
//           >
//             <MandalaDecor />
//           </motion.div>
//         </div>
//       </div>

//       {/* Small halo behind heading */}
//       <div
//         aria-hidden="true"
//         className="absolute top-[22%] left-1/2 -translate-x-1/2 w-[220px] h-[220px] rounded-full blur-3xl opacity-30 pointer-events-none"
//         style={{ background: "radial-gradient(circle, rgba(196,154,108,0.22), rgba(196,154,108,0.02))" }}
//       />

//       {/* Container */}
//       <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
//         {/* Header */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.4 }}
//           className="max-w-3xl mx-auto text-center"
//         >
//           <motion.p variants={fadeUp} custom={0} className="text-sm font-semibold text-[var(--accent)] uppercase tracking-widest mb-3">
//             Facilities & Amenities
//           </motion.p>

//           <motion.h2
//             variants={fadeUp}
//             custom={1}
//             className="font-serif text-3xl md:text-5xl text-[var(--text-primary)] mb-4"
//             style={{ fontFamily: "Playfair Display, serif", letterSpacing: "0.01em" }}
//           >
//             Comfort meets calm — thoughtful services
//           </motion.h2>

//           <motion.div variants={fadeUp} custom={2} className="mx-auto w-20 h-1 bg-[var(--accent)] rounded-full mb-6" />

//           <motion.p variants={fadeUp} custom={3} className="text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
//             Every moment of your stay is elevated with quietly attentive services — from seamless connectivity to around-the-clock care.
//           </motion.p>
//         </motion.div>

//         {/* Grid of amenities: editorial */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-10 gap-x-8 items-start"
//         >
//           {amenitiesData.map((a, idx) => (
//             <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left">
//               <motion.div
//                 whileHover={{ y: -4 }}
//                 transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
//                 className="flex flex-col items-center md:items-start"
//               >
//                 {/* Icon ring + icon */}
//                 <div
//                   className="flex items-center justify-center rounded-full"
//                   style={{
//                     width: 64,
//                     height: 64,
//                     border: "1.6px solid rgba(196,154,108,0.9)",
//                     color: "var(--accent)",
//                     marginBottom: 12,
//                   }}
//                 >
//                   <a
//                     href="#"
//                     onClick={(e) => e.preventDefault()}
//                     aria-label={a.title}
//                     className="inline-flex items-center justify-center w-8 h-8 text-[var(--accent)]"
//                     style={{ color: "var(--accent)" }}
//                   >
//                     <a.Icon className="w-6 h-6" aria-hidden="true" />
//                   </a>
//                 </div>

//                 {/* Title */}
//                 <h3 className="font-serif text-base md:text-lg text-[var(--text-primary)]" style={{ fontFamily: "Playfair Display, serif" }}>
//                   {a.title}
//                 </h3>

//                 {/* Underline */}
//                 <div className="mt-2 w-10 h-[2px] bg-[var(--accent)] rounded-sm" />
//               </motion.div>
//             </div>
//           ))}
//         </motion.div>
//       </div>

//       {/* Small footer divider */}
//       <div className="mt-16 border-t border-[rgba(0,0,0,0.04)] pt-10" />
//     </section>
//   );
// }


import React from "react";
import { motion } from "framer-motion";
import { PiWifiHighLight } from "react-icons/pi";
import { PiFireExtinguisherLight } from "react-icons/pi";
import { GiVacuumCleaner } from "react-icons/gi";
import { MdOutlineRoomService } from "react-icons/md";
import { PiSecurityCameraLight } from "react-icons/pi";
import { PiForkKnifeLight } from "react-icons/pi";
import { RiRestaurantLine } from "react-icons/ri";

/* ------------------ Decorative Watermark ------------------ */
// Made extremely faint and elegant for background texture
const MandalaDecor = ({ className = "" }) => (
  <svg
    aria-hidden="true"
    className={className}
    width="900"
    height="900"
    viewBox="0 0 900 900"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g stroke="#c49a6c" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="450" cy="450" r="400" />
      <circle cx="450" cy="450" r="320" />
      <circle cx="450" cy="450" r="220" />
      <circle cx="450" cy="450" r="120" />
      <g transform="translate(450,450)">
        {[...Array(12)].map((_, i) => {
          const angle = (i / 12) * Math.PI * 2;
          const x = Math.cos(angle) * 320;
          const y = Math.sin(angle) * 320;
          return (
            <path
              key={i}
              d={`M ${Math.cos(angle) * 80} ${Math.sin(angle) * 80}
                  C ${Math.cos(angle) * 140} ${Math.sin(angle) * 140} ${x} ${y} ${x} ${y}`}
              transform={`rotate(${(i * 360) / 12})`}
            />
          );
        })}
      </g>
    </g>
  </svg>
);

/* ------------------ Data ------------------ */
const amenitiesData = [
  { Icon: PiWifiHighLight, title: "Free Wifi" },
  { Icon: PiForkKnifeLight, title: "Restaurant" },
  { Icon: RiRestaurantLine, title: "Fine Dining" },
  { Icon: GiVacuumCleaner, title: "Housekeeping" },
  { Icon: MdOutlineRoomService, title: "Room Service" },
  { Icon: PiSecurityCameraLight, title: "24/7 Security" },
];

/* ------------------ Framer Motion Variants ------------------ */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Slow, elegant stagger
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }, // Buttery smooth ease-out
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
  },
};

/* ------------------ Main Component ------------------ */
export default function AmenitiesSection() {
  return (
    <section className="relative overflow-hidden bg-[#FAF9F6] py-24 md:py-36 selection:bg-[#c49a6c] selection:text-white">
      
      {/* BACKGROUND MANDALA - Offset to the right, very faint */}
      <div className="pointer-events-none absolute top-[-10%] right-[-20%] md:right-[-10%] opacity-[0.03] mix-blend-multiply">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
        >
          <MandalaDecor className="w-[600px] h-[600px] md:w-[900px] md:h-[900px]" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* HEADER SECTION */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center text-center mb-20 md:mb-28"
        >
          <motion.span variants={headerVariants} className="text-[#c49a6c] text-[10px] md:text-xs uppercase tracking-[0.3em] font-semibold mb-6 block">
            The Essentials
          </motion.span>
          
          <motion.h2 
            variants={headerVariants} 
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a] leading-tight font-light mb-8"
          >
            Thoughtful Services
          </motion.h2>

          <motion.div variants={headerVariants} className="w-px h-12 md:h-16 bg-[#d5c5b5] mx-auto" />
        </motion.div>

        {/* AMENITIES GRID */}
        {/* Mobile: 3 columns, Tablet: 3 columns, Desktop: 6 columns */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-12 md:gap-y-16 max-w-5xl mx-auto"
        >
          {amenitiesData.map((amenity, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group flex flex-col items-center cursor-pointer"
            >
              {/* ICON RING - Smaller on mobile (w-12), elegant thin border */}
              <div className="
                relative flex items-center justify-center rounded-full
                w-12 h-12 md:w-16 md:h-16 
                border-[0.5px] border-[#c49a6c]/40
                transition-all duration-700 ease-out
                group-hover:border-[#c49a6c] group-hover:scale-110
              ">
                <amenity.Icon 
                  className="
                    w-5 h-5 md:w-6 md:h-6 text-[#c49a6c]
                    transition-transform duration-700 ease-out
                    group-hover:-translate-y-[2px]
                  " 
                  aria-hidden="true" 
                />
              </div>

              {/* TITLE - Ultra thin tracking, smaller on mobile */}
              <h3 className="
                mt-5 text-center text-[#1a1a1a]
                text-[9px] md:text-[11px] uppercase tracking-[0.2em] md:tracking-[0.25em]
                transition-colors duration-500
                group-hover:text-[#c49a6c]
              ">
                {amenity.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}