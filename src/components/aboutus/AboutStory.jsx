// import React, { useState, useEffect } from 'react';

// /**
//  * Main App component to render the AboutStory section.
//  * This file is self-contained.
//  */
// export default function App() {

//   /**
//    * AboutStory Component
//    * A two-column section detailing the hotel's story.
//    */
//   const AboutStory = () => {
//     // State to trigger animations
//     const [animate, setAnimate] = useState(false);

//     // Simple effect to trigger animation on load
//     // For a real app, you'd use Intersection Observer to trigger on scroll
//     useEffect(() => {
//       setAnimate(true);
//     }, []);

//     const storyImage = "https://imgs.search.brave.com/bcuVwBUmNDZeL3704oVGDS438qE6wtxZCVnVDvEowPk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuYXJjaGl0ZWN0/dXJhbGRpZ2VzdC5p/bi9waG90b3MvNjNh/ZWVlNWQ4ZGY2Yjlm/ZGI5MjRkNmVkL21h/c3Rlci93XzE2MDAs/Y19saW1pdC9EU0Nf/Njg1MS5qcGc";

//     return (
//       // Section wrapper
//       <section className="font-sans antialiased bg-[#ffffff] py-20 md:py-28">
//         {/* Main container */}
//         <div className="container mx-auto max-w-6xl px-6">
//           {/* Responsive grid: 1 col on mobile, 2 cols on desktop */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
//             {/* --- Left Column: Text Content --- */}
//             <div 
//               className={`transition-all duration-700 ease-out ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
//               style={{ transitionDelay: '200ms' }}
//             >
//               {/* Subtitle */}
//               <p className="uppercase text-[#c49a6c] tracking-[0.25em] text-sm font-semibold mb-2">
//                 Our Story
//               </p>
              
//               {/* Title */}
//               <h2 className="text-3xl md:text-5xl font-serif font-semibold text-[#1a1a1a] mb-6">
//                 Where Devotion Meets Luxury
//               </h2>
              
//               {/* Paragraphs */}
//               <div className="space-y-4 text-[#6d6d6d] text-base md:text-lg leading-relaxed" style={{ lineHeight: '1.9' }}>
//                 <p>
//                   Nestled in the divine city of Nathdwara, Hotel Bhakyi Palace is more than just a destination — it’s a sanctuary for the soul. Our story began with a vision to create a space where the serenity of devotion harmonizes with the elegance of modern comfort.
//                 </p>
//                 <p>
//                   Inspired by the timeless charm of Shree Nath Ji Temple and the cultural richness of Rajasthan, Bhakyi Palace stands as a symbol of heritage and heartfelt hospitality.
//                 </p>
//                 <p>
//                   Here, tradition and tranquility meet contemporary elegance — offering guests not just a stay, but a soulful experience to remember.
//                 </p>
//               </div>
              
//               {/* Button */}
//               <a 
//                 href="/about"
//                 className="inline-block border border-[#c49a6c] text-[#c49a6c] hover:bg-[#c49a6c] hover:text-white transition-all duration-300 rounded-full px-6 py-3 font-medium mt-6"
//               >
//                 Know More
//               </a>
//             </div>

//             {/* --- Right Column: Image --- */}
//             <div 
//               className={`flex justify-center md:justify-end transition-all duration-700 ease-out ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
//               style={{ transitionDelay: '400ms' }}
//             >
//               <img 
//                 src={storyImage} 
//                 alt="Elegant interior of Hotel Bhakti Palace, Nathdwara"
//                 className="rounded-2xl shadow-lg object-cover w-full h-[400px] md:h-[500px]"
//                 loading="lazy"
//                 onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x700/faf9f6/c49a6c?text=Our+Heritage"; }}
//               />
//             </div>
            
//           </div>
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
//             background-color: #ffffff; /* Match section bg */
//           }

//           .font-sans { font-family: 'Inter', sans-serif; }
//           .font-serif { font-family: 'Playfair Display', serif; }
//         `}
//       </style>
      
//       {/* Render the AboutStory component */}
//       <AboutStory />
//     </>
//   );
// }


import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AboutStory = () => {
  return (
    <section className="bg-white py-20 md:py-28">
      {/* Container */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">
        {/* --- Left Column: Text Content --- */}
        <motion.div
          className="text-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Subtitle */}
          <p
            className="uppercase text-[#c49a6c] tracking-[0.25em] text-sm font-semibold mb-3"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Our Story
          </p>

          {/* Title */}
          <h2
            className="text-3xl md:text-5xl font-semibold mb-6 text-[#1a1a1a]"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Where Devotion Meets Luxury
          </h2>

          {/* Paragraphs */}
          <p
            className="text-[#6d6d6d] text-base md:text-lg leading-relaxed mb-4"
            style={{ fontFamily: "Inter, sans-serif", lineHeight: "1.2" }}
          >
            Nestled in the divine city of Nathdwara, Hotel Bhakti Palace is more
            than just a destination — it’s a sanctuary for the soul. Our story
            began with a vision to create a space where the serenity of devotion
            harmonizes with the elegance of modern comfort.
          </p>

          <p
            className="text-[#6d6d6d] text-base md:text-lg leading-relaxed mb-4"
            style={{ fontFamily: "Inter, sans-serif", lineHeight: "1.2" }}
          >
            Inspired by the timeless charm of Shree Nath Ji Temple and the
            cultural richness of Rajasthan, Bhakti Palace stands as a symbol of
            heritage and heartfelt hospitality. Every detail — from the
            handcrafted interiors to the warm service — reflects our devotion to
            perfection and guest satisfaction.
          </p>

          <p
            className="text-[#6d6d6d] text-base md:text-lg leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif", lineHeight: "1.2" }}
          >
            Here, tradition and tranquility meet contemporary elegance — offering
            guests not just a stay, but a soulful experience to remember.
          </p>

          
        </motion.div>

        {/* --- Right Column: Image --- */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src="https://imgs.search.brave.com/BTtaFukr5YlGikv39pICd9x7h6F60Y9y9v9dsl8kbQE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmpkbWFnaWNi/b3guY29tL3YyL2Nv/bXAvbmF0aGR3YXJh/L3E4Lzk5OTlwMjk1/My4yOTUzLjI1MDMw/NDIwMTEyMS5qOHE4/L2NhdGFsb2d1ZS9t/b3RpLW1haGFsLWxh/bC1iYXphci1uYXRo/ZHdhcmEtdG91cmlz/dC1hdHRyYWN0aW9u/LThvMDdiMjJybWkt/MjUwLmpwZz93PTY0/MCZxPTc1"
            alt="Luxury hotel in Nathdwara - Hotel Bhakti Palace"
            loading="lazy"
            className="rounded-2xl shadow-lg object-cover w-full h-[400px] md:h-[500px] max-h-[550px]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutStory;
