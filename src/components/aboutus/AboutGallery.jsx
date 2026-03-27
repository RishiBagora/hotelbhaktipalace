// import React from "react";
// import { motion } from "framer-motion";

// const AboutGallery = () => {
//   const images = [
//     "/images/IMG-20251117-WA0029.jpg",
//     "/images/IMG-20251117-WA0031.jpg",
//     "/images/IMG-20251117-WA0030.jpg",
//     "/images/IMG-20251117-WA0016.jpg",
//     "/images/IMG-20251117-WA0017.jpg",
//     "/images/IMG-20251117-WA0018.jpg",
//   ];

//   return (
//     <section className="bg-white py-28 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6 mb-14">
//         {/* Heading */}
//         <p className="uppercase tracking-[0.35em] text-[#c49a6c] text-xs mb-4">
//           A Visual Experience
//         </p>

//         <h2
//           className="text-4xl md:text-5xl font-semibold text-[#1a1a1a]"
//           style={{ fontFamily: "Playfair Display, serif" }}
//         >
//           Moments Inside Bhakti Palace
//         </h2>

//         <p className="mt-6 max-w-2xl text-[#6b6b6b] leading-relaxed">
//           A calm, uninterrupted visual journey through our thoughtfully
//           designed spaces.
//         </p>
//       </div>

//       {/* Continuous Loop */}
//      {/* Continuous Loop */}
// <div className="relative overflow-hidden">
//   <motion.div
//     className="flex gap-5 md:gap-8 w-max"
//     animate={{ x: ["0%", "-50%"] }}
//     transition={{
//       duration: 80, // slower on mobile
//       ease: "linear",
//       repeat: Infinity,
//     }}
//   >
//     {[...images, ...images].map((src, index) => (
//       <div
//         key={index}
//         className="
//           min-w-[85vw]
//           sm:min-w-[70vw]
//           md:min-w-[45vw]
//           lg:min-w-[35vw]
//           h-[300px]
//           sm:h-[340px]
//           md:h-[380px]
//           lg:h-[420px]
//           rounded-3xl
//           overflow-hidden
//           group
//         "
//       >
//         <img
//           src={src}
//           alt=""
//           className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out md:group-hover:scale-[1.06]"
//         />
//       </div>
//     ))}
//   </motion.div>
// </div>

//     </section>
//   );
// };

// export default AboutGallery;


// import React from "react";
// import { motion } from "framer-motion";

// const AboutGallery = () => {
//   // Split images into two arrays for the dual-row effect
//   const row1Images = [
//     { src: "/images/IMG-20251117-WA0029.jpg", aspect: "aspect-[4/5]" },
//     { src: "/images/IMG-20251117-WA0031.jpg", aspect: "aspect-[16/9]" },
//     { src: "/images/IMG-20251117-WA0030.jpg", aspect: "aspect-[square]" },
//     { src: "/images/IMG-20251117-WA0016.jpg", aspect: "aspect-[4/5]" },
//   ];

//   const row2Images = [
//     { src: "/images/IMG-20251117-WA0017.jpg", aspect: "aspect-[16/9]" },
//     { src: "/images/IMG-20251117-WA0018.jpg", aspect: "aspect-[4/5]" },
//     { src: "/images/IMG-20251117-WA0029.jpg", aspect: "aspect-[square]" }, // Reusing for length
//     { src: "/images/IMG-20251117-WA0031.jpg", aspect: "aspect-[16/9]" },
//   ];

//   // Motion variants for smooth text reveal
//   const fadeUp = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
//   };

//   return (
//     <section className="relative bg-[#050505] py-28 md:py-36 overflow-hidden selection:bg-[#c49a6c] selection:text-[#050505]">
      
//       {/* 1. Subtle Paper Grain/Noise for Cinematic Vibe */}
//       <div 
//         className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-screen"
//         style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
//         }}
//       />

//       <div className="max-w-7xl mx-auto px-6 mb-20 md:mb-28 relative z-10">
        
//         {/* ===== Header Area ===== */}
//         <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
//           <div className="max-w-2xl">
//             <motion.div 
//               initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
//               className="flex items-center gap-4 mb-6"
//             >
//               <div className="h-[1px] w-8 md:w-12 bg-[#c49a6c]" />
//               <p className="uppercase tracking-[0.4em] text-[#c49a6c] text-[9px] md:text-[10px] font-medium">
//                 A Visual Experience
//               </p>
//             </motion.div>

//             <motion.h2
//               initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
//               className="text-4xl md:text-5xl lg:text-6xl font-light text-[#E8E3D9] tracking-tight leading-[1.1]"
//               style={{ fontFamily: "Playfair Display, serif" }}
//             >
//               Moments Inside <br className="hidden md:block" />
//               <span className="italic text-[#888]">Hotel Bhakti</span>
//             </motion.h2>
//           </div>

//           <motion.p 
//             initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
//             className="text-[#7A7A7A] leading-[1.9] font-light text-[13px] md:text-sm max-w-sm"
//           >
//             A calm, uninterrupted visual journey through our thoughtfully
//             designed spaces. Every corner tells a story of devotion and comfort.
//           </motion.p>
//         </div>
//       </div>

//       {/* ===== The Dual Scrolling Gallery ===== */}
//       {/* Using 'group/gallery' to dim other images when hovering over one */}
//       <div className="relative w-full flex flex-col gap-6 md:gap-8 group/gallery z-10">
        
//         {/* ROW 1: Moves Left */}
//         <div className="w-full flex overflow-hidden">
//           <motion.div
//             className="flex gap-6 md:gap-8 w-max"
//             animate={{ x: ["0%", "-50%"] }}
//             transition={{ duration: 60, ease: "linear", repeat: Infinity }}
//           >
//             {[...row1Images, ...row1Images, ...row1Images].map((img, index) => (
//               <div
//                 key={index}
//                 className={`
//                   relative flex-shrink-0 bg-[#1a1a1a] rounded-[2px] overflow-hidden group/item
//                   h-[250px] sm:h-[300px] md:h-[400px] ${img.aspect}
//                   transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]
//                   hover:!opacity-100 group-hover/gallery:opacity-40 hover:z-20
//                 `}
//               >
//                 <img
//                   src={img.src}
//                   alt="Gallery"
//                   className="w-full h-full object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover/item:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-black/20 group-hover/item:bg-transparent transition-colors duration-700" />
//               </div>
//             ))}
//           </motion.div>
//         </div>

//         {/* ROW 2: Moves Right */}
//         <div className="w-full flex overflow-hidden">
//           <motion.div
//             className="flex gap-6 md:gap-8 w-max"
//             animate={{ x: ["-50%", "0%"] }} // Opposite direction
//             transition={{ duration: 75, ease: "linear", repeat: Infinity }} // Slightly slower for depth
//           >
//             {[...row2Images, ...row2Images, ...row2Images].map((img, index) => (
//               <div
//                 key={index}
//                 className={`
//                   relative flex-shrink-0 bg-[#1a1a1a] rounded-[2px] overflow-hidden group/item
//                   h-[250px] sm:h-[300px] md:h-[400px] ${img.aspect}
//                   transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]
//                   hover:!opacity-100 group-hover/gallery:opacity-40 hover:z-20
//                 `}
//               >
//                 <img
//                   src={img.src}
//                   alt="Gallery"
//                   className="w-full h-full object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover/item:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-black/20 group-hover/item:bg-transparent transition-colors duration-700" />
//               </div>
//             ))}
//           </motion.div>
//         </div>

//       </div>
      
//     </section>
//   );
// };

// export default AboutGallery;



import React from "react";
import { motion } from "framer-motion";

const AboutGallery = () => {
  // Split images into two arrays for the dual-row effect
  const row1Images = [
    { src: "/images/IMG-20251117-WA0029.jpg", aspect: "aspect-[4/5]" },
    { src: "/images/IMG-20251117-WA0031.jpg", aspect: "aspect-[16/9]" },
    { src: "/images/IMG-20251117-WA0030.jpg", aspect: "aspect-[square]" },
    { src: "/images/IMG-20251117-WA0016.jpg", aspect: "aspect-[4/5]" },
  ];

  const row2Images = [
    { src: "/images/IMG-20251117-WA0017.jpg", aspect: "aspect-[16/9]" },
    { src: "/images/IMG-20251117-WA0018.jpg", aspect: "aspect-[4/5]" },
    { src: "/images/IMG-20251117-WA0029.jpg", aspect: "aspect-[square]" }, // Reusing for length
    { src: "/images/IMG-20251117-WA0031.jpg", aspect: "aspect-[16/9]" },
  ];

  // Motion variants for smooth text reveal
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="relative bg-[#1A1A1A] py-28 md:py-36 overflow-hidden selection:bg-[#c49a6c] selection:text-white">
      
      {/* Texture removed completely for a plain, solid #1A1A1A background */}

      <div className="max-w-7xl mx-auto px-6 mb-20 md:mb-28 relative z-10">
        
        {/* ===== Header Area ===== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div className="max-w-2xl">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="flex items-center gap-4 mb-6"
            >
              <div className="h-[1px] w-8 md:w-12 bg-[#c49a6c]" />
              <p className="uppercase tracking-[0.4em] text-[#c49a6c] text-[9px] md:text-[10px] font-medium">
                A Visual Experience
              </p>
            </motion.div>

            <motion.h2
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-6xl font-light text-[#E8E3D9] tracking-tight leading-[1.1]"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Moments Inside <br className="hidden md:block" />
              <span className="italic text-[#c49a6c]">Hotel Bhakti</span>
            </motion.h2>
          </div>

          <motion.p 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-[#999999] leading-[1.9] font-light text-[13px] md:text-sm max-w-sm"
          >
            A calm, uninterrupted visual journey through our thoughtfully
            designed spaces. Every corner tells a story of devotion and comfort.
          </motion.p>
        </div>
      </div>

      {/* ===== The Dual Scrolling Gallery ===== */}
      <div className="relative w-full flex flex-col gap-6 md:gap-8 group/gallery z-10">
        
        {/* ROW 1: Moves Left */}
        <div className="w-full flex overflow-hidden">
          <motion.div
            className="flex gap-6 md:gap-8 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 60, ease: "linear", repeat: Infinity }}
          >
            {[...row1Images, ...row1Images, ...row1Images].map((img, index) => (
              <div
                key={index}
                className={`
                  relative flex-shrink-0 bg-[#222222] rounded-[2px] overflow-hidden group/item
                  h-[250px] sm:h-[300px] md:h-[400px] ${img.aspect}
                  transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]
                  hover:!opacity-100 group-hover/gallery:opacity-30 hover:z-20
                `}
              >
                <img
                  src={img.src}
                  alt="Gallery"
                  className="w-full h-full object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover/item:scale-110"
                />
                {/* Focus Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover/item:bg-transparent transition-colors duration-700" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* ROW 2: Moves Right */}
        <div className="w-full flex overflow-hidden">
          <motion.div
            className="flex gap-6 md:gap-8 w-max"
            animate={{ x: ["-50%", "0%"] }} // Opposite direction
            transition={{ duration: 75, ease: "linear", repeat: Infinity }}
          >
            {[...row2Images, ...row2Images, ...row2Images].map((img, index) => (
              <div
                key={index}
                className={`
                  relative flex-shrink-0 bg-[#222222] rounded-[2px] overflow-hidden group/item
                  h-[250px] sm:h-[300px] md:h-[400px] ${img.aspect}
                  transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]
                  hover:!opacity-100 group-hover/gallery:opacity-30 hover:z-20
                `}
              >
                <img
                  src={img.src}
                  alt="Gallery"
                  className="w-full h-full object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover/item:scale-110"
                />
                {/* Focus Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover/item:bg-transparent transition-colors duration-700" />
              </div>
            ))}
          </motion.div>
        </div>

      </div>
      
    </section>
  );
};

export default AboutGallery;