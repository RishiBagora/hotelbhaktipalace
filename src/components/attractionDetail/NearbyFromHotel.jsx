// import React from "react";
// import { motion } from "framer-motion";

// /**
//  * NearbyFromHotel
//  * Calm informational section for attraction detail pages
//  *
//  * IMPORTANT:
//  * - Accepts ONLY one prop: `data`
//  * - Safely ignores missing optional fields
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

// const NearbyFromHotel = ({ data }) => {
//   if (!data) return null;

//   const {
//     name,
//     distance,
//     travelTime,
//     locationHint,
//   } = data;

//   return (
//     <section
//       className="bg-[#faf5ef] py-20 md:py-24"
//       aria-label={`Distance from Hotel Bhakti Palace to ${name}`}
//     >
//       {/* Soft divider */}
//       <div className="max-w-5xl mx-auto px-6 mb-16">
//         <div className="w-full h-px bg-[rgba(0,0,0,0.08)]" />
//       </div>

//       <motion.div
//         className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.2 }}
//       >
//         {/* Heading */}
//         <motion.h3
//           variants={fadeUp}
//           className="font-serif text-2xl md:text-3xl text-[#1a1a1a]"
//         >
//           Nearby from Hotel Bhakti Palace
//         </motion.h3>

//         {/* Content */}
//         <motion.div variants={fadeUp} className="flex flex-col gap-6">
//           {/* Description */}
//           {distance && (
//             <p
//               className="text-base md:text-lg text-[#6d6d6d] leading-relaxed"
//               style={{ lineHeight: 1.9 }}
//             >
//               {name
//                 ? `${name} is conveniently located ${distance} from Hotel Bhakti Palace, allowing guests to reach the site with ease while enjoying a relaxed stay nearby.`
//                 : `This attraction is conveniently located ${distance} from Hotel Bhakti Palace, making it easily accessible for guests staying with us.`}
//             </p>
//           )}

//           {/* Meta info */}
//           {travelTime && (
//             <p className="text-sm md:text-base text-[#6d6d6d]">
//               <span className="text-[#c49a6c] uppercase tracking-widest text-xs mr-2">
//                 Approx. Travel Time
//               </span>
//               {travelTime}
//             </p>
//           )}

//           {/* Location hint */}
//           {locationHint && (
//             <p
//               className="text-sm md:text-base text-[#6d6d6d] leading-relaxed"
//               style={{ lineHeight: 1.8 }}
//             >
//               {locationHint}
//             </p>
//           )}
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default NearbyFromHotel;


import React from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

/**
 * NearbyFromHotel - LUXURY CONCIERGE STYLE
 * Editorial layout for travel logistics
 */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

const NearbyFromHotel = ({ data }) => {
  if (!data) return null;

  const { name, distance, travelTime, locationHint } = data;

  return (
    <section className="bg-[#FAF9F6] py-24 md:py-32 selection:bg-[#c49a6c] selection:text-white border-t border-[#f0ebe3]">
      
      {/* Editorial Decorative Line */}
      <div className="max-w-6xl mx-auto px-6 mb-20 flex justify-center">
        <div className="w-px h-16 bg-[#c49a6c]/30" />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* --- LEFT: HEADING & VISUAL INDICATOR --- */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="lg:col-span-5 flex flex-col gap-8"
        >
          <div className="flex items-center gap-4">
            <MapPin size={18} className="text-[#c49a6c]" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#c49a6c] font-medium font-sans">
              Accessibility
            </span>
          </div>
          
          <h3 className="font-serif text-3xl md:text-5xl font-light text-[#1a1a1a] leading-tight tracking-tight">
            Nearby from <br />
            <span className="italic text-[#888]">Hotel Bhakti</span>
          </h3>

          {/* Stylized Distance Path (Architectural Detail) */}
          <div className="hidden lg:flex items-center gap-4 mt-4">
             <div className="w-2 h-2 rounded-full border border-[#c49a6c]" />
             <div className="flex-1 h-px border-t border-dashed border-[#c49a6c]/40" />
             <div className="w-2 h-2 rounded-full bg-[#c49a6c]" />
          </div>
        </motion.div>

        {/* --- RIGHT: CONTENT & META --- */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="lg:col-span-7 flex flex-col gap-10"
        >
          {/* Main Context */}
          <p className="text-[#666] text-base md:text-xl font-light leading-[1.9] tracking-wide">
            {name 
              ? `${name} is conveniently located ${distance} from our gates, allowing our guests to embrace the spiritual aura with ease while enjoying a refined stay.`
              : `This attraction is located just ${distance} from Hotel Bhakti, making it an effortless addition to your itinerary.`}
          </p>

          {/* Meta Info Row */}
          <div className="flex flex-wrap gap-8 items-center py-8 border-t border-b border-[#f0ebe3]">
             <div className="flex flex-col gap-2">
                <span className="text-[9px] uppercase tracking-[0.2em] text-[#888]">Proximity</span>
                <span className="text-sm md:text-lg font-medium text-[#1a1a1a]">{distance}</span>
             </div>
             <div className="flex flex-col gap-2">
                <span className="text-[9px] uppercase tracking-[0.2em] text-[#888]">Travel Time</span>
                <span className="text-sm md:text-lg font-medium text-[#c49a6c]">{travelTime}</span>
             </div>
             <div className="flex items-center gap-2 text-[#c49a6c] group cursor-default">
                <Navigation size={16} className="group-hover:translate-x-1 transition-transform" />
                <span className="text-[10px] uppercase tracking-widest font-bold">Convenient Access</span>
             </div>
          </div>

          {/* Location Hint (The 'Secret' Tip) */}
          {locationHint && (
            <div className="bg-white p-6 border border-[#f0ebe3] rounded-[2px] shadow-sm">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#c49a6c] mb-3 font-semibold">Local Insight</p>
              <p className="text-sm md:text-base text-[#1a1a1a] font-light italic leading-relaxed">
                "{locationHint}"
              </p>
            </div>
          )}
        </motion.div>

      </div>
    </section>
  );
};

export default NearbyFromHotel;