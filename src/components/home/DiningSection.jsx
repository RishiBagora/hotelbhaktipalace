// import React, { useState, useRef, useEffect, useCallback } from "react";
// import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

// /* ---------------------------
//    Data
// --------------------------- */
// const slideshowMedia = [
//   { type: "video", src: "/images/pangatvideo.mp4", alt: "Pangat ambience" },
//   { type: "image", src: "/images/pangat1.jpg", alt: "Pangat dining hall" },
//   { type: "video", src: "/images/pangatvideo2.mp4", alt: "Pangat kitchen ritual" },
// ];

// const diningHighlights = [
//   {
//     title: "Authentic Indian Flavours",
//     description:
//       "Royal vegetarian recipes prepared with seasonal produce and traditional techniques.",
//   },
//   {
//     title: "Pure Vegetarian Cuisine",
//     description:
//       "Thoughtfully composed dishes that respect tradition, purity, and balance.",
//   },
//   {
//     title: "Calm Regal Ambiance",
//     description:
//       "A dining space designed for unhurried meals and quiet moments of indulgence.",
//   },
// ];

// /* ---------------------------
//    Motion
// --------------------------- */
// const fadeUp = {
//   hidden: { opacity: 0, y: 24 },
//   visible: (i = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.12,
//       duration: 0.9,
//       ease: [0.16, 1, 0.3, 1],
//     },
//   }),
// };

// const slideFade = {
//   initial: { opacity: 0, scale: 1.02 },
//   animate: { opacity: 1, scale: 1 },
//   exit: { opacity: 0, scale: 1.02 },
// };

// export default function DiningSection() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const mediaRefs = useRef([]);
//   const timerRef = useRef(null);

//   const nextSlide = useCallback(() => {
//     setCurrentIndex((s) => (s === slideshowMedia.length - 1 ? 0 : s + 1));
//   }, []);

//   const prevSlide = () => {
//     setCurrentIndex((s) => (s === 0 ? slideshowMedia.length - 1 : s - 1));
//   };

//   useEffect(() => {
//     mediaRefs.current.forEach((el, idx) => {
//       if (!el || el.tagName !== "VIDEO") return;
//       idx === currentIndex ? el.play().catch(() => {}) : el.pause();
//     });

//     clearTimeout(timerRef.current);
//     timerRef.current = setTimeout(nextSlide, 6000);
//     return () => clearTimeout(timerRef.current);
//   }, [currentIndex, nextSlide]);

//   const { scrollYProgress } = useScroll();
//   const bgShift = useTransform(scrollYProgress, [0, 1], [0, -40]);

//   return (
//     <section className="relative bg-[#faf9f6] overflow-hidden">
//       {/* Soft background wash */}
//       <motion.div
//         style={{ y: bgShift }}
//         className="absolute inset-0 bg-gradient-to-b from-[#faf5ef] via-[#faf9f6] to-transparent opacity-60"
//       />

//       <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">

//         {/* ================= HEADER ================= */}
//         <div className="text-center max-w-3xl mx-auto mb-20">
//           <motion.span
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             className="block text-xs tracking-[0.35em] uppercase text-[#c49a6c] mb-4"
//           >
//             Our Dining
//           </motion.span>

//           <motion.h2
//             variants={fadeUp}
//             custom={1}
//             initial="hidden"
//             whileInView="visible"
//             className="text-3xl md:text-5xl font-serif text-[#1a1a1a]"
//           >
//             Pangat — A Thoughtful Vegetarian Table
//           </motion.h2>

//           <motion.p
//             variants={fadeUp}
//             custom={2}
//             initial="hidden"
//             whileInView="visible"
//             className="mt-6 text-[#6c6c6c] text-base md:text-lg leading-relaxed"
//           >
//             Rooted in Indian culinary traditions, Pangat offers a refined
//             vegetarian dining experience shaped by calm rituals and honest
//             flavours.
//           </motion.p>
//         </div>

//         {/* ================= HIGHLIGHTS ================= */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto mb-24">
//           {diningHighlights.map((item, i) => (
//             <motion.div
//               key={i}
//               custom={i}
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="visible"
//             >
//               <div className="w-10 h-[1px] bg-[#c49a6c] mb-5" />
//               <h3 className="font-serif text-xl text-[#1a1a1a] mb-3">
//                 {item.title}
//               </h3>
//               <p className="text-[#6c6c6c] leading-relaxed text-sm md:text-base">
//                 {item.description}
//               </p>
//             </motion.div>
//           ))}
//         </div>

//         {/* ================= SLIDER ================= */}
//         <div className="relative max-w-5xl mx-auto">
//           <div className="relative aspect-[16/9] overflow-hidden rounded-3xl bg-black">

//             <AnimatePresence>
//               {slideshowMedia.map((media, i) =>
//                 i === currentIndex ? (
//                   <motion.div
//                     key={i}
//                     variants={slideFade}
//                     initial="initial"
//                     animate="animate"
//                     exit="exit"
//                     transition={{ duration: 1.1, ease: "easeInOut" }}
//                     className="absolute inset-0"
//                   >
//                     {media.type === "image" ? (
//                       <img
//                         ref={(el) => (mediaRefs.current[i] = el)}
//                         src={media.src}
//                         alt={media.alt}
//                         className="w-full h-full object-cover"
//                       />
//                     ) : (
//                       <video
//                         ref={(el) => (mediaRefs.current[i] = el)}
//                         src={media.src}
//                         className="w-full h-full object-cover"
//                         muted
//                         playsInline
//                         loop
//                       />
//                     )}
//                   </motion.div>
//                 ) : null
//               )}
//             </AnimatePresence>

//             {/* Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/10 to-transparent pointer-events-none" />

//             {/* Controls */}
//             <button
//               onClick={prevSlide}
//               className="absolute left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/80 backdrop-blur flex items-center justify-center"
//             >
//               ‹
//             </button>

//             <button
//               onClick={nextSlide}
//               className="absolute right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/80 backdrop-blur flex items-center justify-center"
//             >
//               ›
//             </button>
//           </div>

//           {/* CTA */}
//           <div className="text-center mt-10">
//             <a
//               href="/pangat"
//               className="inline-block px-10 py-4 rounded-full text-white text-sm tracking-wide"
//               style={{
//                 background: "linear-gradient(180deg,#c49a6c,#e0c1a2)",
//                 boxShadow: "0 8px 30px rgba(196,154,108,.12)",
//               }}
//             >
//               Discover Pangat
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

/* ---------------------------
   Data
--------------------------- */
const slideshowMedia = [
  { type: "video", src: "/images/pangatvideo.mp4", alt: "Pangat ambience" },
  { type: "image", src: "/images/pangat1.jpg", alt: "Pangat dining hall" },
  { type: "video", src: "/images/pangatvideo2.mp4", alt: "Pangat kitchen ritual" },
];

const diningHighlights = [
  {
    title: "Authentic Indian Flavours",
    description: "Royal recipes prepared with seasonal produce and traditional techniques.",
  },
  {
    title: "Pure Vegetarian Cuisine",
    description: "Thoughtfully composed dishes that respect tradition, purity, and balance.",
  },
  {
    title: "Calm Regal Ambiance",
    description: "A dining space designed for unhurried meals and quiet moments.",
  },
];

/* ---------------------------
   Icons
--------------------------- */
const ArrowLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
  </svg>
);

const ArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

/* ---------------------------
   Motion Variants
--------------------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

// Ultra-slow cinematic crossfade
const slideFade = {
  initial: { opacity: 0, scale: 1.05 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 1.8, ease: [0.16, 1, 0.3, 1] }
  },
  exit: { 
    opacity: 0, 
    transition: { duration: 1.2, ease: "easeInOut" }
  },
};

/* ---------------------------
   Component
--------------------------- */
export default function DiningSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const mediaRefs = useRef([]);
  const timerRef = useRef(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((s) => (s === slideshowMedia.length - 1 ? 0 : s + 1));
  }, []);

  const prevSlide = () => {
    setCurrentIndex((s) => (s === 0 ? slideshowMedia.length - 1 : s - 1));
  };

  useEffect(() => {
    mediaRefs.current.forEach((el, idx) => {
      if (!el || el.tagName !== "VIDEO") return;
      idx === currentIndex ? el.play().catch(() => {}) : el.pause();
    });

    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(nextSlide, 7000); // Extended duration for luxury pacing
    return () => clearTimeout(timerRef.current);
  }, [currentIndex, nextSlide]);

  const { scrollYProgress } = useScroll();
  const bgShift = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section className="relative bg-[#FAF9F6] overflow-hidden py-32 md:py-40 selection:bg-[#c49a6c] selection:text-white">
      {/* Subtle parallax background texture */}
      <motion.div
        style={{ y: bgShift }}
        className="absolute inset-0 bg-gradient-to-b from-[#f2ece4] to-transparent opacity-30"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">

        {/* ================= HEADER ================= */}
        <div className="text-center max-w-4xl mx-auto mb-24 flex flex-col items-center">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className="block text-[10px] md:text-xs tracking-[0.35em] uppercase text-[#c49a6c] font-semibold mb-6"
          >
            Culinary Journey
          </motion.span>

          <motion.h2
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            className="text-4xl md:text-6xl font-serif text-[#1a1a1a] font-light leading-tight"
          >
            Pangat — A Thoughtful <br className="hidden md:block" /> Vegetarian Table
          </motion.h2>

          <motion.div 
          />
        </div>

        {/* ================= CINEMATIC SLIDER ================= */}
        <motion.div 
          variants={fadeUp} custom={3} initial="hidden" whileInView="visible"
          className="relative max-w-6xl mx-auto mb-32"
        >
          {/* Slide Counter - Editorial Style */}
          <div className="absolute -top-10 left-0 text-[#888] text-[10px] tracking-[0.2em]">
            0{currentIndex + 1} / 0{slideshowMedia.length}
          </div>

          {/* Media Container - Sharp edges, widescreen ratio */}
          <div className="relative aspect-[4/3] md:aspect-[21/9] overflow-hidden bg-[#e9e5e0]">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={currentIndex}
                variants={slideFade}
                initial="initial"
                animate="animate"
                exit="exit"
                className="absolute inset-0"
              >
                {slideshowMedia[currentIndex].type === "image" ? (
                  <img
                    ref={(el) => (mediaRefs.current[currentIndex] = el)}
                    src={slideshowMedia[currentIndex].src}
                    alt={slideshowMedia[currentIndex].alt}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <video
                    ref={(el) => (mediaRefs.current[currentIndex] = el)}
                    src={slideshowMedia[currentIndex].src}
                    className="w-full h-full object-cover"
                    muted
                    playsInline
                    loop
                  />
                )}
              </motion.div>
            </AnimatePresence>

            {/* Subtle overlay for contrast */}
            <div className="absolute inset-0 bg-black/10 pointer-events-none" />
          </div>

          {/* Navigation Controls - Minimalist lines and arrows below the image */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex-1 h-[1px] bg-[#d5c5b5]/50 relative">
              {/* Progress Line */}
              <motion.div 
                key={currentIndex}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 7, ease: "linear" }}
                className="absolute top-0 left-0 h-full bg-[#c49a6c]"
              />
            </div>
            
            <div className="flex items-center gap-6 pl-8">
              <button
                onClick={prevSlide}
                className="text-[#1a1a1a] hover:text-[#c49a6c] transition-colors duration-500"
                aria-label="Previous slide"
              >
                <ArrowLeft />
              </button>
              <button
                onClick={nextSlide}
                className="text-[#1a1a1a] hover:text-[#c49a6c] transition-colors duration-500"
                aria-label="Next slide"
              >
                <ArrowRight />
              </button>
            </div>
          </div>
        </motion.div>

        {/* ================= HIGHLIGHTS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 max-w-5xl mx-auto mb-24 text-center">
          {diningHighlights.map((item, i) => (
            <motion.div
              key={i}
              custom={i + 2}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-col items-center"
            >
              <div className="w-6 h-[1px] bg-[#c49a6c] mb-6" />
              <h3 className="font-serif text-2xl text-[#1a1a1a] mb-4 tracking-wide">
                {item.title}
              </h3>
              <p className="text-[#888] text-[13px] md:text-sm leading-relaxed max-w-[260px] uppercase tracking-[0.05em]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ================= CTA ================= */}
        <motion.div 
          variants={fadeUp} custom={5} initial="hidden" whileInView="visible"
          className="text-center mt-20"
        >
          <a
            href="/pangat"
            className="
              inline-block
              border border-[#c49a6c] text-[#1a1a1a]
              text-[10px] md:text-xs uppercase tracking-[0.25em]
              py-5 px-12
              transition-all duration-700 ease-out
              hover:bg-[#c49a6c] hover:text-white
            "
          >
            Discover Pangat
          </a>
        </motion.div>

      </div>
    </section>
  );
}