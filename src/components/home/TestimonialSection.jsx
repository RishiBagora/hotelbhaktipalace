import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

const theme = {
  background: "#faf9f6",
  textPrimary: "#1a1a1a",
  textSecondary: "#6b6b6b",
  accent: "#c49a6c",
};

const testimonials = [
  {
    quote:
      "My stay at Hotel Bhakti Palace was truly divine — the warmth, cleanliness and hospitality made my visit unforgettable.",
    author: "Priya Sharma",
    location: "Ahmedabad, Gujarat",
  },
  {
    quote:
      "Pangat delivers an exceptional dining experience — rich flavours, elegant ambiance, and true Rajasthani heritage.",
    author: "Vikas Mehta",
    location: "Jaipur, Rajasthan",
  },
  
];

export default function TestimonialSection() {
  return (
    <section
      className="relative py-28 md:py-36 overflow-hidden"
      style={{ background: theme.background }}
    >
      {/* ===== HEADER ===== */}
      <div className="text-center mb-20 px-6">
        <p
          className="uppercase tracking-[0.35em] text-xs font-medium mb-3"
          style={{ color: theme.accent }}
        >
          Guest Reviews
        </p>

        <h2
          className="text-4xl md:text-6xl font-serif mb-5"
          style={{
            color: theme.textPrimary,
            fontFamily: "Playfair Display, serif",
          }}
        >
          Words From Our Guests
        </h2>

        <div
          className="h-[2px] w-20 mx-auto rounded-full"
          style={{ background: theme.accent }}
        />
      </div>

      {/* ===== SWIPER ===== */}
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 6500, disableOnInteraction: false }}
          loop
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet !bg-[#c49a6c]/40",
            bulletActiveClass: "!bg-[#c49a6c]",
          }}
          slidesPerView={1}
          speed={900}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <motion.div
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true }}
                className="relative flex flex-col items-center text-center min-h-[280px] px-4 md:px-14"
              >
                {/* Google Badge */}
                <div className="absolute bottom-0 right-0 flex items-center gap-1 text-xs text-[#6b6b6b]">
                  <img
                    src="https://s3-alpha.figma.com/hub/file/2729744958/2a5758d6-4edb-4047-87bb-e6b94dbbbab0-cover.png"
                    alt="Google Reviews"
                    className="w-7"
                  />
                  <span className="tracking-tight">Google Review</span>
                </div>

                {/* Quote */}
                <p
                  className="text-xl md:text-3xl italic font-serif mb-10 leading-relaxed max-w-3xl"
                  style={{
                    color: theme.textPrimary,
                    fontFamily: "Playfair Display, serif",
                    lineHeight: 1.75,
                  }}
                >
                  “{t.quote}”
                </p>

                {/* Author */}
                <h3
                  className="text-base md:text-lg font-medium tracking-wide"
                  style={{ color: theme.textPrimary }}
                >
                  {t.author}
                </h3>

                <p
                  className="text-sm mt-1 tracking-wide"
                  style={{ color: theme.accent }}
                >
                  {t.location}
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ===== SUBTLE MARBLE TEXTURE ===== */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1323712/pexels-photo-1323712.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')",
        }}
      />
    </section>
  );
}



// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, EffectFade } from "swiper/modules";
// import { motion } from "framer-motion";

// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/effect-fade";

// /* ---------------------------
//    Theme & Data
// --------------------------- */
// const theme = {
//   background: "#FAF9F6",
//   textPrimary: "#1a1a1a",
//   textSecondary: "#888888",
//   accent: "#c49a6c",
// };

// const testimonials = [
//   {
//     quote: "My stay at Hotel Bhakti Palace was truly divine. The warmth, quiet elegance, and meticulous hospitality made my visit unforgettable.",
//     author: "Priya Sharma",
//     location: "Ahmedabad, Gujarat",
//   },
//   {
//     quote: "Pangat delivers an exceptional dining experience. Rich, honest flavours presented in an ambiance of pure Rajasthani heritage.",
//     author: "Vikas Mehta",
//     location: "Jaipur, Rajasthan",
//   },
//   {
//     quote: "An oasis of calm in Nathdwara. Every detail, from the linens to the courteous staff, speaks of a deep respect for the guest.",
//     author: "Elena Rossi",
//     location: "Milan, Italy",
//   }
// ];

// /* ---------------------------
//    Motion Variants
// --------------------------- */
// const fadeUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { 
//     opacity: 1, 
//     y: 0, 
//     transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] } 
//   },
// };

// /* ---------------------------
//    Component
// --------------------------- */
// export default function TestimonialSection() {
//   return (
//     <section
//       className="relative py-32 md:py-48 overflow-hidden selection:bg-[#c49a6c] selection:text-white"
//       style={{ backgroundColor: theme.background }}
//     >
//       {/* 1. Microscopic Paper Noise (Luxury Texture) */}
//       <div 
//         className="absolute inset-0 opacity-[0.4] pointer-events-none mix-blend-multiply"
//         style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
//         }}
//       />

//       {/* ===== HEADER ===== */}
//       <motion.div 
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-100px" }}
//         className="relative z-10 text-center mb-24 px-6 flex flex-col items-center"
//       >
//         <motion.p
//           variants={fadeUp}
//           className="uppercase tracking-[0.4em] text-[10px] md:text-xs font-semibold mb-6"
//           style={{ color: theme.accent }}
//         >
//           Guest Journals
//         </motion.p>

//         <motion.h2
//           variants={fadeUp}
//           className="text-4xl md:text-5xl lg:text-6xl font-serif font-light leading-tight mb-8"
//           style={{ color: theme.textPrimary }}
//         >
//           Words From <br className="hidden md:block" /> Our Patrons
//         </motion.h2>

//         <motion.div
//           variants={fadeUp}
//           className="h-px w-16 mx-auto"
//           style={{ background: `${theme.accent}60` }} // 60 is hex opacity
//         />
//       </motion.div>

//       {/* ===== SWIPER ===== */}
//       <div className="max-w-5xl mx-auto px-6 relative z-10">
//         <Swiper
//           modules={[Autoplay, Pagination, EffectFade]}
//           effect="fade"
//           fadeEffect={{ crossFade: true }}
//           autoplay={{ delay: 7000, disableOnInteraction: false }} // Very slow, confident pacing
//           loop
//           speed={1500} // Buttery smooth, long crossfade
//           pagination={{
//             clickable: true,
//             renderBullet: function (index, className) {
//               // Custom minimal line bullets
//               return `<span class="${className} custom-bullet"></span>`;
//             },
//           }}
//           className="pb-20" // Space for custom pagination
//         >
//           {testimonials.map((t, i) => (
//             <SwiperSlide key={i}>
//               <div className="relative flex flex-col items-center text-center px-4 md:px-20 py-10">
                
//                 {/* Giant Decorative Watermark Quote */}
//                 <div 
//                   className="absolute top-0 left-1/2 -translate-x-1/2 text-[180px] md:text-[240px] font-serif leading-none pointer-events-none select-none opacity-[0.03]"
//                   style={{ color: theme.textPrimary }}
//                 >
//                   “
//                 </div>

//                 {/* Stars / Trust Marker */}
//                 <div className="flex gap-1 mb-10">
//                   {[...Array(5)].map((_, starIdx) => (
//                     <svg key={starIdx} className="w-3 h-3 md:w-4 md:h-4" viewBox="0 0 24 24" fill={theme.accent}>
//                       <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//                     </svg>
//                   ))}
//                 </div>

//                 {/* Quote */}
//                 <p
//                   className="text-2xl md:text-4xl italic font-serif mb-12 leading-[1.6] max-w-4xl tracking-tight text-[#1a1a1a]"
//                 >
//                   “{t.quote}”
//                 </p>

//                 {/* Author Info */}
//                 <div className="flex flex-col items-center gap-2">
//                   <h3
//                     className="text-[11px] md:text-xs uppercase tracking-[0.25em] font-semibold"
//                     style={{ color: theme.textPrimary }}
//                   >
//                     {t.author}
//                   </h3>
//                   <div className="flex items-center gap-3">
//                     <div className="w-4 h-[1px]" style={{ background: theme.accent }} />
//                     <p
//                       className="text-[10px] md:text-[11px] uppercase tracking-[0.2em]"
//                       style={{ color: theme.textSecondary }}
//                     >
//                       {t.location}
//                     </p>
//                     <div className="w-4 h-[1px]" style={{ background: theme.accent }} />
//                   </div>
//                 </div>

//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       {/* ===== CUSTOM SWIPER STYLES ===== */}
//       <style dangerouslySetInnerHTML={{__html: `
//         .swiper-pagination {
//           bottom: 0 !important;
//           display: flex;
//           justify-content: center;
//           gap: 16px;
//         }
//         .custom-bullet {
//           width: 32px;
//           height: 1px;
//           background-color: #c49a6c;
//           opacity: 0.3;
//           transition: all 0.5s ease;
//           cursor: pointer;
//           display: block;
//         }
//         .swiper-pagination-bullet-active.custom-bullet {
//           opacity: 1;
//           width: 48px;
//           height: 2px;
//           transform: translateY(-0.5px);
//         }
//       `}} />
//     </section>
//   );
// }







// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, EffectFade } from "swiper/modules";
// import { motion } from "framer-motion";

// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/effect-fade";

// /* ---------------------------
//    Theme & Data
// --------------------------- */
// const theme = {
//   background: "#FAF9F6",
//   textPrimary: "#1a1a1a",
//   textSecondary: "#888888",
//   accent: "#c49a6c",
// };

// const testimonials = [
//   {
//     quote: "My stay at Hotel Bhakti Palace was truly divine. The warmth, quiet elegance, and meticulous hospitality made my visit unforgettable.",
//     author: "Priya Sharma",
//     location: "Ahmedabad, Gujarat",
//   },
//   {
//     quote: "Pangat delivers an exceptional dining experience. Rich, honest flavours presented in an ambiance of pure Rajasthani heritage.",
//     author: "Vikas Mehta",
//     location: "Jaipur, Rajasthan",
//   },
//   {
//     quote: "An oasis of calm in Nathdwara. Every detail, from the linens to the courteous staff, speaks of a deep respect for the guest.",
//     author: "Elena Rossi",
//     location: "Milan, Italy",
//   }
// ];

// /* ---------------------------
//    Motion Variants
// --------------------------- */
// const fadeUp = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { 
//     opacity: 1, 
//     y: 0, 
//     transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
//   },
// };

// /* ---------------------------
//    Component
// --------------------------- */
// export default function TestimonialSection() {
//   return (
//     <section
//       className="relative py-24 md:py-36 overflow-hidden selection:bg-[#c49a6c] selection:text-white"
//       style={{ backgroundColor: theme.background }}
//     >
//       {/* Microscopic Paper Noise */}
//       <div 
//         className="absolute inset-0 opacity-[0.3] pointer-events-none mix-blend-multiply"
//         style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
//         }}
//       />

//       {/* ===== HEADER ===== */}
//       <motion.div 
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-100px" }}
//         className="relative z-10 text-center mb-20 px-6 flex flex-col items-center"
//       >
//         <motion.p
//           variants={fadeUp}
//           // Smaller, normal weight, wider tracking
//           className="uppercase tracking-[0.4em] text-[9px] md:text-[10px] font-normal mb-5"
//           style={{ color: theme.accent }}
//         >
//           Guest Journals
//         </motion.p>

//         <motion.h2
//           variants={fadeUp}
//           // Scaled down from 6xl to 4xl, strictly font-light
//           className="text-3xl md:text-4xl font-serif font-light leading-tight mb-6"
//           style={{ color: theme.textPrimary }}
//         >
//           Words From <br className="hidden md:block" /> Our Patrons
//         </motion.h2>

//         <motion.div
//           variants={fadeUp}
//           className="h-[1px] w-12 mx-auto"
//           style={{ background: `${theme.accent}50` }} 
//         />
//       </motion.div>

//       {/* ===== SWIPER ===== */}
//       <div className="max-w-4xl mx-auto px-4 relative z-10">
//         <Swiper
//           modules={[Autoplay, Pagination, EffectFade]}
//           effect="fade"
//           fadeEffect={{ crossFade: true }}
//           autoplay={{ delay: 7000, disableOnInteraction: false }} 
//           loop
//           speed={1500} 
//           pagination={{
//             clickable: true,
//             renderBullet: function (index, className) {
//               return `<span class="${className} custom-bullet"></span>`;
//             },
//           }}
//           className="pb-16" 
//         >
//           {testimonials.map((t, i) => (
//             <SwiperSlide key={i}>
//               <div className="relative flex flex-col items-center text-center px-4 md:px-12 py-8">
                
//                 {/* Scaled down watermark */}
//                 <div 
//                   className="absolute top-0 left-1/2 -translate-x-1/2 text-[120px] md:text-[160px] font-serif leading-none pointer-events-none select-none opacity-[0.02]"
//                   style={{ color: theme.textPrimary }}
//                 >
//                   “
//                 </div>

//                 {/* Stars / Trust Marker - slightly smaller */}
//                 <div className="flex gap-[3px] mb-8">
//                   {[...Array(5)].map((_, starIdx) => (
//                     <svg key={starIdx} className="w-[10px] h-[10px] md:w-3 md:h-3" viewBox="0 0 24 24" fill={theme.accent}>
//                       <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//                     </svg>
//                   ))}
//                 </div>

//                 {/* Quote - Much smaller, thinner, wider line-height */}
//                 <p
//                   className="text-lg md:text-2xl font-serif font-light italic mb-10 leading-[1.8] md:leading-[2] max-w-3xl tracking-wide text-[#1a1a1a]"
//                 >
//                   “{t.quote}”
//                 </p>

//                 {/* Author Info - Normal weight, tiny text */}
//                 <div className="flex flex-col items-center gap-2">
//                   <h3
//                     className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-normal"
//                     style={{ color: theme.textPrimary }}
//                   >
//                     {t.author}
//                   </h3>
//                   <div className="flex items-center gap-3">
//                     <div className="w-3 h-[1px]" style={{ background: theme.accent }} />
//                     <p
//                       className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] font-light"
//                       style={{ color: theme.textSecondary }}
//                     >
//                       {t.location}
//                     </p>
//                     <div className="w-3 h-[1px]" style={{ background: theme.accent }} />
//                   </div>
//                 </div>

//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       {/* ===== CUSTOM SWIPER STYLES ===== */}
//       <style dangerouslySetInnerHTML={{__html: `
//         .swiper-pagination {
//           bottom: 0 !important;
//           display: flex;
//           justify-content: center;
//           gap: 12px;
//         }
//         .custom-bullet {
//           width: 24px;
//           height: 1px;
//           background-color: #c49a6c;
//           opacity: 0.2;
//           transition: all 0.5s ease;
//           cursor: pointer;
//           display: block;
//         }
//         .swiper-pagination-bullet-active.custom-bullet {
//           opacity: 0.8;
//           width: 36px;
//           height: 1px;
//         }
//       `}} />
//     </section>
//   );
// }