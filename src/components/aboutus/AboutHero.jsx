// import React, { useState, useEffect } from 'react';

// /**
//  * Main App component to render the AboutHero section.
//  * This file is self-contained.
//  */
// export default function App() {

//   /**
//    * AboutHero Component
//    * The top hero section for the "About Us" page.
//    */
//   const AboutHero = () => {
//     const [animate, setAnimate] = useState(false);

//     // Trigger animation on component mount
//     useEffect(() => {
//       setAnimate(true);
//     }, []);

//     const heroStyle = {
//       backgroundImage: `url('https://images.unsplash.com/photo-1562790351-3e39482e8156?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')`,
//       // Fallback in case the local image "/images/about-hero.jpg" doesn't load
//       onError: (e) => { e.target.style.backgroundImage = `url('https://placehold.co/1920x1080/2c2c2c/faf9f6?text=Our+Legacy')`; }
//     };

//     return (
//       <section className="font-sans antialiased relative h-[90vh] w-full overflow-hidden">
//         {/* Background Image */}
//         <div 
//           className="absolute inset-0 bg-cover bg-center z-0" 
//           style={heroStyle}
//           role="img"
//           aria-label="Elegant lounge area of Hotel Bhakyi Palace"
//         ></div>
        
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/40 z-10"></div>
        
//         {/* Content */}
//         <div className="relative z-20 h-full flex flex-col justify-center items-center text-center text-white p-4 max-w-3xl mx-auto">
          
//           {/* Subtitle */}
//           <h2 
//             className={`uppercase tracking-[0.25em] text-sm mb-4 text-[#c49a6c] transition-all duration-700 ease-out ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
//             style={{ transitionDelay: '200ms' }}
//           >
//             Welcome to Hotel Bhakti Palace
//           </h2>
          
//           {/* Title */}
//           <h1 
//             className={`text-4xl md:text-6xl font-serif font-semibold mb-4 transition-all duration-700 ease-out ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
//             style={{ transitionDelay: '400ms' }}
//           >
//             A Legacy of Elegance & Spiritual Comfort
//           </h1>
          
//           {/* Paragraph */}
//           <p 
//             className={`text-base md:text-lg text-gray-200 max-w-2xl leading-relaxed mb-6 transition-all duration-700 ease-out ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
//             style={{ transitionDelay: '600ms' }}
//           >
//             Nestled in the divine town of Nathdwara near the sacred Shree Nath Ji Temple, our story is one of devotion, hospitality, and timeless luxury.
//           </p>
          
//           {/* Button */}
//           <a 
//             href="/about" 
//             className={`border border-[#c49a6c] text-[#c49a6c] hover:bg-[#c49a6c] hover:text-white transition-all duration-500 rounded-full px-6 py-3 font-medium tracking-wide ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
//             style={{ transitionDelay: '800ms' }}
//           >
//             Discover Our Story
//           </a>
//         </div>
//       </section>
//     );
//   };

//   /**
//   * App component's return value.
//   */
//   return (
//     <>
//       {/* Global Styles, Font Imports */}
//       <style>
//         {`
//           @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@600;700&display=swap');
          
//           body {
//             font-family: 'Inter', sans-serif;
//             background-color: #faf9f6; /* Base background */
//           }

//           .font-sans { font-family: 'Inter', sans-serif; }
//           .font-serif { font-family: 'Playfair Display', serif; }
//         `}
//       </style>
      
//       {/* Render the AboutHero component */}
//       <AboutHero />
//     </>
//   );
// }

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AboutHero = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden font-[Inter]">
      {/* --- Background Image --- */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('https://assets.zeezest.com/blogs/PROD_Nathdwara%20cover_1714031994270.jpg')",
        }}
        aria-label="Hotel Bhakti Palace in Nathdwara"
      ></div>

      {/* --- Overlay --- */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* --- Content --- */}
      <motion.div
        className="relative z-20 flex flex-col justify-center items-center text-center text-white px-6 max-w-3xl mx-auto h-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Subtitle */}
        <motion.p
          className="uppercase tracking-[0.25em] text-sm mb-4 text-[#c49a6c]"
          style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Welcome to Hotel Bhakti Palace
        </motion.p>

        {/* Title */}
        <motion.h1
          className="text-4xl md:text-6xl font-semibold font-serif mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          A Legacy of Elegance & Spiritual Comfort
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          className="text-base md:text-lg text-gray-200 leading-relaxed max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          Nestled in the divine town of Nathdwara near the sacred Shree Nath Ji
          Temple, our story is one of devotion, hospitality, and timeless luxury.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <Link
            to="/about"
            className="border border-[#c49a6c] text-[#c49a6c] hover:bg-[#c49a6c] hover:text-white transition-all duration-500 rounded-full px-8 py-3 mt-8 inline-block font-medium tracking-wide"
          >
            Discover Our Story
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutHero;
