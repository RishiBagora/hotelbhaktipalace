// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// const AboutSection = () => {
//   return (
//     <section className="relative bg-[#faf9f6] py-24 md:py-32 px-5 sm:px-10 lg:px-20 overflow-hidden">
      
//       {/* Decorative vertical grain/line */}
//       <div className="absolute top-0 right-[10%] w-[1px] h-full bg-[#c49a6c]/10 hidden lg:block pointer-events-none"></div>
//       <div className="absolute w-[500px] h-[500px] bg-[#c49a6c]/5 rounded-full blur-[100px] -top-20 -left-20 pointer-events-none"></div>

//       <div className="max-w-[80rem] mx-auto">
//         <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center relative z-10">
          
//           {/* ---- Left: Premium Image Layout (Size Constrained) ---- */}
//           <motion.div 
//             initial={{ opacity: 0, x: -40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.9, ease: "easeOut" }}
//             className="flex flex-col w-full relative"
//           >
//             {/* The main image wrapper with custom luxury aspect ratio & MAX constraints */}
//             <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-[420px] aspect-[4/5] overflow-visible mx-auto lg:mr-4 lg:ml-auto z-10">
              
//                <div className="relative w-full h-full rounded-[2px] overflow-hidden shadow-2xl z-10">
//                  <motion.img
//                    initial={{ scale: 1.15 }}
//                    whileInView={{ scale: 1 }}
//                    viewport={{ once: true }}
//                    transition={{ duration: 1.5, ease: "easeOut" }}
//                    src="https://lh3.googleusercontent.com/p/AF1QipM4ZFHDP5AJsf8-TdUlZATYfgKwMHsEPlZzNhIh=s1360-w1360-h1020-rw"
//                    alt="Hotel Bhakti Exterior"
//                    className="w-full h-full object-cover"
//                  />
//                  {/* Inner shadow overlay for depth */}
//                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent mix-blend-multiply"></div>
//                  {/* Golden Subtle Tint overlay */}
//                  <div className="absolute inset-0 bg-[#c49a6c]/5 mix-blend-overlay"></div>
//                </div>

//                {/* Subtle decorative gold frame offset behind the image */}
//                <div className="absolute top-4 -right-4 md:top-6 md:-right-6 w-full h-full border border-[#c49a6c]/30 rounded-[2px] z-0 pointer-events-none"></div>
               
//                {/* ---- Revolving Text Badge (Premium Alignment Bridge) ---- */}
//                <motion.div 
//                  initial={{ opacity: 0, scale: 0.8, rotate: -45 }}
//                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
//                  viewport={{ once: true }}
//                  transition={{ delay: 0.4, duration: 0.8 }}
//                  className="absolute -bottom-15 -left-4 sm:-bottom-10 sm:-left-10 lg:-bottom-18 lg:-left-18 w-32 h-32 sm:w-40 sm:h-40 lg:w-44 lg:h-44 flex items-center justify-center z-30 drop-shadow-sm pointer-events-none"
//                >
//                   {/* Rotating Text SVG */}
//                   <svg viewBox="0 0 200 200" className="animate-[spin_25s_linear_infinite] w-full h-full" xmlns="http://www.w3.org/2000/svg">
//                     <defs>
//                       <path id="circlePath" d="M 100, 100 m -85, 0 a 85,85 0 1,1 170,0 a 85,85 0 1,1 -170,0" />
//                     </defs>
//                     <text fontSize="14" fill="#c49a6c" style={{ fontFamily: "Inter, sans-serif", textTransform: "uppercase", letterSpacing: "2.5px", fontWeight: "600" }}>
//                       <textPath href="#circlePath" startOffset="0%" textLength="534" lengthAdjust="spacing">
//                         • Hotel Bhakti • Nathdwara • Hotel Bhakti • Nathdwara 
//                       </textPath>
//                     </text>
//                   </svg>
//                </motion.div>
//             </div>

//           </motion.div>

//           {/* ---- Right: Typography & Content ---- */}
//           <div className="flex flex-col items-start pt-14 lg:pt-0 lg:pl-6 xl:pl-8">
            
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="flex items-center gap-4 mb-6 md:mb-8"
//             >
//               <div className="h-[1px] w-12 bg-[#c49a6c]"></div>
//               <p className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-[#c49a6c] font-medium" style={{ fontFamily: "Inter, sans-serif" }}>
//                 Welcome to our Hotel
//               </p>
//             </motion.div>

//             <motion.h2
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.2, duration: 0.6 }}
//               className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-medium text-[#1a1a1a] mb-8 leading-[1.15]"
//               style={{ fontFamily: "Playfair Display, serif", letterSpacing: "-0.01em" }}
//             >
//               The Best Holidays <br className="hidden xl:block" />
//               <span className="italic text-[#c49a6c] font-light">Start Here</span>
//             </motion.h2>

//             <motion.p
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.3, duration: 0.6 }}
//               className="text-gray-600/90 text-[15px] md:text-[17px] leading-[1.9] mb-12 max-w-xl font-light"
//               style={{ fontFamily: "Inter, sans-serif" }}
//             >
//               Experience divine comfort and serenity at{" "}
//               <span className="text-[#c49a6c] font-normal">Hotel Bhakti</span>, 
//               where hospitality meets devotion in the holy town of Nathdwara. 
//               Just <strong className="text-gray-800 font-medium">50 steps</strong> away from the revered Shree Nath Ji Temple, our hotel 
//               offers elegant rooms, warm service, and tranquil spaces—the perfect destination 
//               for spiritual travelers seeking luxury and peace.
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.4, duration: 0.6 }}
//             >
//               <Link to="/aboutus" className="group relative inline-flex items-center justify-center px-10 py-4 text-[#1a1a1a] text-xs uppercase tracking-[0.25em] font-medium overflow-hidden transition-all duration-500 bg-transparent border border-[#1a1a1a] hover:border-transparent">
//                 {/* Background sweep effect */}
//                 <div className="absolute inset-0 w-full h-full bg-[#1a1a1a] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] z-0"></div>
//                 <span className="relative z-10 group-hover:text-white transition-colors duration-500">Discover More</span>
//               </Link>
//             </motion.div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;



// import React, { useRef, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// /* ─── Ambient floating dust particle ─── */
// const Particle = ({ style }) => (
//   <motion.div
//     className="absolute rounded-full pointer-events-none"
//     style={{
//       width: style.size,
//       height: style.size,
//       left: style.x,
//       top: style.y,
//       background: "radial-gradient(circle, rgba(196,154,108,0.6) 0%, transparent 70%)",
//       ...style,
//     }}
//     animate={{
//       y: [0, -30, 0],
//       opacity: [0, style.opacity, 0],
//     }}
//     transition={{
//       duration: style.duration,
//       repeat: Infinity,
//       delay: style.delay,
//       ease: "easeInOut",
//     }}
//   />
// );

// const PARTICLES = Array.from({ length: 12 }, (_, i) => ({
//   size: Math.random() * 6 + 2,
//   x: `${Math.random() * 100}%`,
//   y: `${Math.random() * 100}%`,
//   opacity: Math.random() * 0.4 + 0.1,
//   duration: Math.random() * 6 + 5,
//   delay: Math.random() * 4,
// }));

// /* ─── Animated Counter ─── */
// const Counter = ({ target, suffix = "" }) => {
//   const [count, setCount] = useState(0);
//   const ref = useRef(null);
//   const [started, setStarted] = useState(false);
//   useEffect(() => {
//     const obs = new IntersectionObserver(
//       ([e]) => { if (e.isIntersecting && !started) setStarted(true); },
//       { threshold: 0.5 }
//     );
//     if (ref.current) obs.observe(ref.current);
//     return () => obs.disconnect();
//   }, [started]);
//   useEffect(() => {
//     if (!started) return;
//     let start = 0;
//     const step = target / 60;
//     const id = setInterval(() => {
//       start += step;
//       if (start >= target) { setCount(target); clearInterval(id); }
//       else setCount(Math.floor(start));
//     }, 20);
//     return () => clearInterval(id);
//   }, [started, target]);
//   return <span ref={ref}>{count}{suffix}</span>;
// };

// /* ─── Main Section ─── */
// const AboutSection = () => {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
//   const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
//   const smoothImgY = useSpring(imgY, { stiffness: 60, damping: 20 });

//   const stats = [
//     { value: 50, suffix: "", label: "Steps from Temple" },
//     { value: 15, suffix: "+", label: "Years of Devotion" },
//     { value: 98, suffix: "%", label: "Guest Satisfaction" },
//   ];

//   return (
//     <section
//       ref={containerRef}
//       className="relative overflow-hidden"
//       style={{
//         background: "linear-gradient(160deg, #faf9f6 0%, #f5f0e8 40%, #faf9f6 100%)",
//         fontFamily: "'Cormorant Garamond', serif",
//       }}
//     >
//       {/* ── Ambient particles ── */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         {PARTICLES.map((p, i) => <Particle key={i} style={p} />)}
//       </div>

//       {/* ── Background noise texture overlay ── */}
//       <div
//         className="absolute inset-0 pointer-events-none opacity-[0.025]"
//         style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
//           backgroundRepeat: "repeat",
//           backgroundSize: "200px",
//         }}
//       />

//       {/* ── Decorative arcs (large background elements) ── */}
//       <svg
//         className="absolute right-0 top-0 opacity-[0.04] pointer-events-none"
//         width="600" height="600" viewBox="0 0 600 600"
//       >
//         <circle cx="600" cy="0" r="350" fill="none" stroke="#c49a6c" strokeWidth="1" />
//         <circle cx="600" cy="0" r="500" fill="none" stroke="#c49a6c" strokeWidth="0.5" />
//       </svg>
//       <svg
//         className="absolute left-0 bottom-0 opacity-[0.04] pointer-events-none"
//         width="400" height="400" viewBox="0 0 400 400"
//       >
//         <circle cx="0" cy="400" r="250" fill="none" stroke="#c49a6c" strokeWidth="1" />
//       </svg>

//       {/* ── Thin vertical rule ── */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full pointer-events-none hidden lg:block"
//         style={{ background: "linear-gradient(to bottom, transparent, rgba(196,154,108,0.12) 30%, rgba(196,154,108,0.12) 70%, transparent)" }}
//       />

//       {/* ═══════════════════════════════════════
//           MAIN GRID
//       ═══════════════════════════════════════ */}
//       <div className="relative z-10 max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 py-28 md:py-36 lg:py-44">
//         <div className="grid lg:grid-cols-[1fr_1fr] gap-0 items-center">

//           {/* ────────────────────────────────
//               LEFT — IMAGE STACK
//           ──────────────────────────────── */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true, margin: "-80px" }}
//             transition={{ duration: 1 }}
//             className="relative flex items-center justify-center lg:justify-end lg:pr-16 xl:pr-24 pb-20 lg:pb-0"
//           >
//             {/* LARGE PRIMARY IMAGE — PORTRAIT */}
//             <div className="relative w-full max-w-[360px] sm:max-w-[400px] lg:max-w-[420px]">

//               {/* Subtle golden shadow backdrop */}
//               <div
//                 className="absolute inset-0 translate-x-5 translate-y-5"
//                 style={{
//                   background: "linear-gradient(135deg, rgba(196,154,108,0.25), rgba(196,154,108,0.05))",
//                   borderRadius: "1px",
//                   filter: "blur(20px)",
//                 }}
//               />

//               {/* Main image frame */}
//               <motion.div
//                 initial={{ y: 40, opacity: 0 }}
//                 whileInView={{ y: 0, opacity: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
//                 className="relative z-10 overflow-hidden"
//                 style={{ aspectRatio: "3/4", borderRadius: "1px" }}
//               >
//                 <motion.div className="absolute inset-0" style={{ y: smoothImgY }}>
//                   <img
//                     src="https://lh3.googleusercontent.com/p/AF1QipM4ZFHDP5AJsf8-TdUlZATYfgKwMHsEPlZzNhIh=s1360-w1360-h1020-rw"
//                     alt="Hotel Bhakti"
//                     className="w-full object-cover"
//                     style={{ height: "115%", objectPosition: "center" }}
//                   />
//                 </motion.div>

//                 {/* Multi-layer overlay for luxury depth */}
//                 <div className="absolute inset-0"
//                   style={{ background: "linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(10,8,5,0.55) 100%)" }}
//                 />
//                 <div className="absolute inset-0 mix-blend-overlay"
//                   style={{ background: "linear-gradient(135deg, rgba(196,154,108,0.08) 0%, transparent 60%)" }}
//                 />

//                 {/* Image caption at bottom */}
//                 <div className="absolute bottom-0 left-0 right-0 px-6 pb-6">
//                   <div className="flex items-center gap-3">
//                     <div className="h-[1px] flex-1" style={{ background: "rgba(196,154,108,0.5)" }} />
//                     <p style={{
//                       fontFamily: "'Cormorant Garamond', serif",
//                       fontSize: "11px",
//                       letterSpacing: "0.3em",
//                       color: "rgba(250,249,246,0.8)",
//                       textTransform: "uppercase",
//                       fontWeight: 400,
//                     }}>
//                       Est. 2009
//                     </p>
//                     <div className="h-[1px] flex-1" style={{ background: "rgba(196,154,108,0.5)" }} />
//                   </div>
//                 </div>
//               </motion.div>

//               {/* Decorative offset border frame */}
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.5, duration: 0.8 }}
//                 className="absolute pointer-events-none"
//                 style={{
//                   inset: 0,
//                   transform: "translate(14px, 14px)",
//                   border: "1px solid rgba(196,154,108,0.3)",
//                   borderRadius: "1px",
//                   zIndex: 0,
//                 }}
//               />

//               {/* ── Small floating accent image (bottom-left) ── */}
//               <motion.div
//                 initial={{ opacity: 0, x: -30, y: 30 }}
//                 whileInView={{ opacity: 1, x: 0, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.6, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
//                 className="absolute -bottom-12 -left-12 sm:-bottom-16 sm:-left-14 z-20"
//                 style={{ width: "140px", height: "140px" }}
//               >
//                 <div className="w-full h-full overflow-hidden" style={{ borderRadius: "1px" }}>
//                   <img
//                     src="https://lh3.googleusercontent.com/p/AF1QipM4ZFHDP5AJsf8-TdUlZATYfgKwMHsEPlZzNhIh=s1360-w1360-h1020-rw"
//                     alt="Hotel Detail"
//                     className="w-full h-full object-cover"
//                     style={{ filter: "sepia(15%) saturate(110%)" }}
//                   />
//                 </div>
//                 {/* Gold border around small image */}
//                 <div className="absolute inset-0 pointer-events-none"
//                   style={{ border: "1px solid rgba(196,154,108,0.5)", borderRadius: "1px" }}
//                 />
//                 {/* Corner ornament */}
//                 <div className="absolute -top-2 -left-2 w-4 h-4 pointer-events-none">
//                   <div className="w-full h-[1px]" style={{ background: "#c49a6c" }} />
//                   <div className="w-[1px] h-full" style={{ background: "#c49a6c" }} />
//                 </div>
//               </motion.div>

//               {/* ── Rotating circular badge ── */}
//               <motion.div
//                 initial={{ opacity: 0, rotate: -30, scale: 0.7 }}
//                 whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.7, duration: 0.9 }}
//                 className="absolute -top-8 -right-8 sm:-top-10 sm:-right-10 z-20"
//                 style={{ width: "110px", height: "110px" }}
//               >
//                 {/* Outer gold ring */}
//                 <div className="absolute inset-0 rounded-full"
//                   style={{ border: "1px solid rgba(196,154,108,0.35)" }}
//                 />
//                 {/* Spinning text */}
//                 <motion.svg
//                   animate={{ rotate: 360 }}
//                   transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
//                   viewBox="0 0 120 120"
//                   className="w-full h-full absolute inset-0"
//                 >
//                   <defs>
//                     <path id="bp" d="M 60 60 m -45 0 a 45 45 0 1 1 90 0 a 45 45 0 1 1 -90 0" />
//                   </defs>
//                   <text style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "10.5px", letterSpacing: "3px", fill: "#c49a6c", fontWeight: 500 }}>
//                     <textPath href="#bp" startOffset="0%">✦ NATHDWARA ✦ RAJASTHAN ✦</textPath>
//                   </text>
//                 </motion.svg>
//                 {/* Center ornament */}
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <svg width="20" height="20" viewBox="0 0 20 20">
//                     <line x1="10" y1="0" x2="10" y2="20" stroke="#c49a6c" strokeWidth="0.5" opacity="0.6" />
//                     <line x1="0" y1="10" x2="20" y2="10" stroke="#c49a6c" strokeWidth="0.5" opacity="0.6" />
//                     <circle cx="10" cy="10" r="2" fill="#c49a6c" opacity="0.8" />
//                     <circle cx="10" cy="10" r="5" fill="none" stroke="#c49a6c" strokeWidth="0.4" opacity="0.5" />
//                   </svg>
//                 </div>
//               </motion.div>
//             </div>
//           </motion.div>

//           {/* ────────────────────────────────
//               RIGHT — CONTENT
//           ──────────────────────────────── */}
//           <div className="lg:pl-16 xl:pl-20 flex flex-col items-start">

//             {/* Eyebrow */}
//             <motion.div
//               initial={{ opacity: 0, y: 16 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7 }}
//               className="flex items-center gap-4 mb-8"
//             >
//               <svg width="32" height="12" viewBox="0 0 32 12" fill="none">
//                 <line x1="0" y1="6" x2="24" y2="6" stroke="#c49a6c" strokeWidth="0.75" />
//                 <circle cx="28" cy="6" r="2.5" fill="none" stroke="#c49a6c" strokeWidth="0.75" />
//               </svg>
//               <p style={{
//                 fontFamily: "'Cormorant Garamond', serif",
//                 fontSize: "11px",
//                 letterSpacing: "0.45em",
//                 color: "#c49a6c",
//                 textTransform: "uppercase",
//                 fontWeight: 500,
//               }}>
//                 Our Story
//               </p>
//             </motion.div>

//             {/* Headline */}
//             <motion.h2
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
//               className="mb-10"
//               style={{
//                 fontFamily: "'Cormorant Garamond', serif",
//                 fontSize: "clamp(2.6rem, 4.5vw, 4.4rem)",
//                 fontWeight: 300,
//                 lineHeight: 1.12,
//                 color: "#1a1610",
//                 letterSpacing: "-0.01em",
//               }}
//             >
//               Where Devotion
//               <br />
//               <em style={{ fontStyle: "italic", fontWeight: 400, color: "#c49a6c" }}>Meets Luxury</em>
//             </motion.h2>

//             {/* Ornamental divider */}
//             <motion.div
//               initial={{ scaleX: 0, opacity: 0 }}
//               whileInView={{ scaleX: 1, opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.3, duration: 0.9 }}
//               className="mb-10 origin-left"
//               style={{ display: "flex", alignItems: "center", gap: "12px", width: "220px" }}
//             >
//               <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, #c49a6c, transparent)" }} />
//               <svg width="12" height="12" viewBox="0 0 12 12">
//                 <path d="M6 0 L7.2 4.8 L12 6 L7.2 7.2 L6 12 L4.8 7.2 L0 6 L4.8 4.8 Z" fill="#c49a6c" opacity="0.7" />
//               </svg>
//               <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, #c49a6c, transparent)" }} />
//             </motion.div>

//             {/* Body copy */}
//             <motion.p
//               initial={{ opacity: 0, y: 24 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.35, duration: 0.7 }}
//               className="mb-14 max-w-lg"
//               style={{
//                 fontFamily: "'Cormorant Garamond', serif",
//                 fontSize: "clamp(1rem, 1.2vw, 1.2rem)",
//                 fontWeight: 300,
//                 lineHeight: 2,
//                 color: "rgba(26,22,16,0.65)",
//                 letterSpacing: "0.02em",
//               }}
//             >
//               At{" "}
//               <span style={{ color: "#c49a6c", fontWeight: 500 }}>Hotel Bhakti</span>, hospitality is
//               a sacred act. Nestled in the heart of holy Nathdwara, a mere{" "}
//               <span style={{ color: "#1a1610", fontWeight: 500 }}>50 steps</span> from the revered
//               Shree Nath Ji Temple, we offer an experience where the soul finds rest as
//               readily as the body. Our rooms breathe in harmony with the town's
//               devotional spirit—each space curated for those who seek both inner peace
//               and worldly refinement.
//             </motion.p>

//             {/* Stats row */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.45, duration: 0.8 }}
//               className="flex gap-10 mb-14"
//             >
//               {stats.map(({ value, suffix, label }, i) => (
//                 <div key={i} className="flex flex-col items-start">
//                   <p style={{
//                     fontFamily: "'Cormorant Garamond', serif",
//                     fontSize: "clamp(2rem, 3vw, 3rem)",
//                     fontWeight: 300,
//                     color: "#c49a6c",
//                     lineHeight: 1,
//                     letterSpacing: "-0.02em",
//                   }}>
//                     <Counter target={value} suffix={suffix} />
//                   </p>
//                   <p style={{
//                     fontFamily: "'Cormorant Garamond', serif",
//                     fontSize: "10px",
//                     letterSpacing: "0.3em",
//                     textTransform: "uppercase",
//                     color: "rgba(26,22,16,0.45)",
//                     marginTop: "6px",
//                     fontWeight: 400,
//                   }}>
//                     {label}
//                   </p>
//                 </div>
//               ))}
//             </motion.div>

//             {/* CTA */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.55, duration: 0.7 }}
//               className="flex items-center gap-6"
//             >
//               <Link
//                 to="/aboutus"
//                 className="group relative overflow-hidden"
//                 style={{
//                   display: "inline-flex",
//                   alignItems: "center",
//                   gap: "16px",
//                   padding: "16px 40px",
//                   background: "#1a1610",
//                   color: "#faf9f6",
//                   fontFamily: "'Cormorant Garamond', serif",
//                   fontSize: "11px",
//                   letterSpacing: "0.35em",
//                   textTransform: "uppercase",
//                   fontWeight: 500,
//                   textDecoration: "none",
//                   transition: "color 0.5s",
//                 }}
//               >
//                 {/* Shimmer sweep */}
//                 <motion.div
//                   className="absolute inset-0 -translate-x-full pointer-events-none"
//                   whileHover={{ translateX: "100%" }}
//                   transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
//                   style={{
//                     background: "linear-gradient(120deg, transparent 0%, rgba(196,154,108,0.15) 50%, transparent 100%)",
//                   }}
//                 />
//                 {/* Gold background fill on hover */}
//                 <motion.div
//                   className="absolute inset-0 -z-10"
//                   initial={{ scaleX: 0, originX: 0 }}
//                   whileHover={{ scaleX: 1 }}
//                   transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
//                   style={{ background: "#c49a6c" }}
//                 />
//                 <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
//                   Discover More
//                 </span>
//                 <svg className="relative z-10" width="16" height="8" viewBox="0 0 16 8" fill="none">
//                   <line x1="0" y1="4" x2="12" y2="4" stroke="currentColor" strokeWidth="0.75" />
//                   <polyline points="9,1 13,4 9,7" fill="none" stroke="currentColor" strokeWidth="0.75" />
//                 </svg>
//               </Link>

//               {/* Secondary text link */}
//               <Link
//                 to="/rooms"
//                 style={{
//                   fontFamily: "'Cormorant Garamond', serif",
//                   fontSize: "12px",
//                   letterSpacing: "0.2em",
//                   textTransform: "uppercase",
//                   color: "rgba(26,22,16,0.45)",
//                   textDecoration: "none",
//                   borderBottom: "1px solid rgba(196,154,108,0.3)",
//                   paddingBottom: "1px",
//                   transition: "color 0.3s, border-color 0.3s",
//                   fontWeight: 400,
//                 }}
//                 onMouseEnter={e => {
//                   e.target.style.color = "#c49a6c";
//                   e.target.style.borderColor = "#c49a6c";
//                 }}
//                 onMouseLeave={e => {
//                   e.target.style.color = "rgba(26,22,16,0.45)";
//                   e.target.style.borderColor = "rgba(196,154,108,0.3)";
//                 }}
//               >
//                 View Rooms
//               </Link>
//             </motion.div>

//             {/* Signature flourish at bottom */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.7, duration: 0.8 }}
//               className="mt-16 pt-10 border-t flex items-center gap-5"
//               style={{ borderColor: "rgba(196,154,108,0.2)", width: "100%" }}
//             >
//               <svg width="36" height="36" viewBox="0 0 36 36" fill="none" opacity="0.5">
//                 <circle cx="18" cy="18" r="17" stroke="#c49a6c" strokeWidth="0.5" />
//                 <circle cx="18" cy="18" r="10" stroke="#c49a6c" strokeWidth="0.5" />
//                 <line x1="18" y1="1" x2="18" y2="35" stroke="#c49a6c" strokeWidth="0.4" />
//                 <line x1="1" y1="18" x2="35" y2="18" stroke="#c49a6c" strokeWidth="0.4" />
//                 <circle cx="18" cy="18" r="2" fill="#c49a6c" />
//               </svg>
//               <p style={{
//                 fontFamily: "'Cormorant Garamond', serif",
//                 fontSize: "12px",
//                 letterSpacing: "0.2em",
//                 color: "rgba(26,22,16,0.35)",
//                 textTransform: "uppercase",
//                 fontWeight: 400,
//               }}>
//                 Hotel Bhakti · Nathdwara, Rajasthan
//               </p>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;
















import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AboutSection = () => {
  // Stats Data
  const stats = [
    { num: "50", label: "Steps From Temple" }
  ];

  return (
    <section className="relative bg-[#FAF9F6] py-24 md:py-36 px-5 sm:px-10 lg:px-20 overflow-hidden selection:bg-[#c49a6c] selection:text-white">
      
      {/* Decorative vertical grain/line */}
      <div className="absolute top-0 right-[15%] w-[1px] h-full bg-[#c49a6c]/10 hidden lg:block pointer-events-none" />
      <div className="absolute w-[600px] h-[600px] bg-[#c49a6c]/[0.03] rounded-full blur-[120px] -top-20 -left-20 pointer-events-none" />

      <div className="max-w-[80rem] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
          
          {/* =======================================
              LEFT: PREMIUM IMAGE LAYOUT
          ======================================== */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full flex justify-center lg:justify-end"
          >
            {/* Image Container */}
            <div className="relative w-full max-w-[380px] lg:max-w-[420px] aspect-[4/5] mx-auto lg:mr-8 z-10">
              
              <div className="relative w-full h-full overflow-hidden z-10 bg-[#e9e5e0]">
                <motion.img
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  src="https://lh3.googleusercontent.com/p/AF1QipM4ZFHDP5AJsf8-TdUlZATYfgKwMHsEPlZzNhIh=s1360-w1360-h1020-rw" 
                  alt="Hotel Bhakti Exterior"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/5 mix-blend-multiply" />
                <div className="absolute inset-0 bg-[#c49a6c]/5 mix-blend-overlay" />
              </div>

              {/* Offset Gold Frame */}
              <div className="absolute top-5 -right-5 md:top-8 md:-right-8 w-full h-full border-[0.5px] border-[#c49a6c]/40 z-0 pointer-events-none" />
               
              {/* Revolving Text Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, rotate: -45 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -bottom-12 -left-8 md:-bottom-16 md:-left-12 w-36 h-36 md:w-44 md:h-44 flex items-center justify-center z-30 pointer-events-none"
              >
                <svg viewBox="0 0 200 200" className="animate-[spin_20s_linear_infinite] w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <path id="circlePath" d="M 100, 100 m -85, 0 a 85,85 0 1,1 170,0 a 85,85 0 1,1 -170,0" />
                  </defs>
                  <text fontSize="13" fill="#c49a6c" style={{ fontFamily: "Inter, sans-serif", textTransform: "uppercase", letterSpacing: "3px", fontWeight: "500" }}>
                    <textPath href="#circlePath" startOffset="0%" textLength="534" lengthAdjust="spacing">
                      • Hotel Bhakti • Nathdwara • Hotel Bhakti • Nathdwara 
                    </textPath>
                  </text>
                </svg>
              </motion.div>
            </div>
          </motion.div>

          {/* =======================================
              RIGHT: TYPOGRAPHY, STATS & CTA
          ======================================== */}
          <div className="flex flex-col items-start lg:pl-4 xl:pl-8 mt-10 lg:mt-0">
            
            {/* Subtitle */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-4 mb-6 md:mb-8"
            >
              <div className="h-[1px] w-8 md:w-12 bg-[#c49a6c]" />
              <p className="text-[9px] md:text-[10px] tracking-[0.35em] uppercase text-[#c49a6c] font-medium font-sans">
                Welcome to our Hotel
              </p>
            </motion.div>

            {/* Title */}
             
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mb-10"
              style={{
                fontFamily: "'Cormorant Garamond Regular', serif",
                fontSize: "clamp(2.6rem, 4.5vw, 4.4rem)",
                fontWeight: 300,
                lineHeight: 1.12,
                color: "#1a1610",
                letterSpacing: "-0.01em",
              }}
            >
              Where Devotion
              <br />
              <em style={{ fontStyle: "italic", fontWeight: 400, color: "#c49a6c" }}>Meets Luxury</em>
            </motion.h2>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#666] text-[14px] md:text-[15px] leading-[1.9] mb-12 max-w-xl font-light tracking-wide"
            >
              Experience divine comfort and serenity at <span className="text-[#c49a6c] font-normal">Hotel Bhakti</span>, 
              where hospitality meets devotion in the holy town of Nathdwara. 
              Our hotel offers elegant rooms, warm service, and tranquil spaces—the perfect destination 
              for spiritual travelers seeking luxury and peace.
            </motion.p>

            {/* ----- STATS ROW (Fixed Animation Issue) ----- */}
            <div className="flex flex-wrap items-center gap-x-12 md:gap-x-16 gap-y-8 mb-14">
              {stats.map((stat, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (i * 0.15), duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col"
                >
                  <span className="font-serif text-4xl md:text-[42px] font-light text-[#c49a6c] mb-2 tracking-tight">
                    {stat.num}
                  </span>
                  <span className="text-[9px] md:text-[12px] uppercase tracking-[0.25em] text-[#888] font-medium">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* ----- BUTTONS ROW ----- */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-8 md:gap-10"
            >
              {/* Solid Discover More Button */}
              <Link 
                to="/aboutus" 
                className="group inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#1a1a1a] text-white text-[10px] md:text-xs uppercase tracking-[0.25em] font-light hover:bg-[#c49a6c] transition-colors duration-500"
              >
                <span>Discover More</span>
                <span className="font-sans text-sm font-light leading-none group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>

              {/* Minimal View Rooms Link */}
              <Link 
                to="/rooms" 
                className="group relative text-[#888] hover:text-[#1a1a1a] text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-medium transition-colors duration-500"
              >
                View Rooms
                {/* Thin underline that grows on hover */}
                <span className="absolute left-0 -bottom-2 w-full h-[0.5px] bg-[#d5c5b5] transition-all duration-500 group-hover:bg-[#1a1a1a]" />
              </Link>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;