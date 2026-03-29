import React from "react";
import { motion } from "framer-motion";

export default function App() {

  const AboutStory = () => {
    // High-quality placeholder (using your provided image structure)
    const storyImage = "https://api.theindia.co.in/storage/image/places/image/statue-of-belief-vishwas-swaroopam-938009.jpg";

    // Framer Motion Variants
    const fadeUp = {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
    };

    const containerVariants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
    };

    return (
      <section className="relative bg-[#FAF9F6] py-24 md:py-36 overflow-hidden selection:bg-[#c49a6c] selection:text-white">
        
        {/* Subtle background texture */}
        <div className="absolute inset-0 bg-[#c49a6c]/[0.02] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
            
            {/* --- Left Column: Text Content --- */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={containerVariants}
              className="lg:col-span-6 lg:pr-12 flex flex-col items-start"
            >
              {/* Subtitle */}
              <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
                <div className="h-[1px] w-8 bg-[#c49a6c]" />
                <p className="uppercase text-[#c49a6c] tracking-[0.35em] text-[9px] md:text-[10px] font-medium font-sans">
                  The Genesis
                </p>
              </motion.div>
              
              {/* Title */}
              <motion.h2 
                variants={fadeUp}
                className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-[#1a1a1a] mb-8 leading-[1.15] tracking-tight"
              >
                Where Devotion <br className="hidden md:block" />
                <span className="italic text-[#c49a6c]">Meets Luxury.</span>
              </motion.h2>
              
              {/* Paragraphs */}
              <motion.div 
                variants={fadeUp}
                className="space-y-6 text-[#666] text-[14px] md:text-[15px] font-light leading-[1.9]"
              >
                <p>
                  Nestled in the divine city of Nathdwara, Hotel Bhakti is more than just a destination — it’s a sanctuary for the soul. Our story began with a vision to create a space where the serenity of devotion harmonizes with the elegance of modern comfort.
                </p>
                <p>
                  Inspired by the timeless charm of Shree Nath Ji Temple and the cultural richness of Rajasthan, Bhakti Palace stands as a symbol of heritage and heartfelt hospitality.
                </p>
                <p>
                  Here, tradition and tranquility meet contemporary elegance — offering guests not just a stay, but a soulful experience to remember.
                </p>
              </motion.div>
              
              {/* Minimalist CTA */}
              <motion.div variants={fadeUp} className="mt-12">
                <a 
                  href="/about"
                  className="group relative inline-flex items-center gap-3 text-[#1a1a1a] text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-medium transition-colors duration-500"
                >
                  Discover Our Heritage
                  <span className="font-sans text-sm font-light leading-none group-hover:translate-x-1 transition-transform duration-300">→</span>
                  {/* Expanding underline */}
                  <span className="absolute left-0 -bottom-2 w-full h-[1px] bg-[#d5c5b5] transition-all duration-500 group-hover:bg-[#c49a6c]" />
                </a>
              </motion.div>
            </motion.div>

            {/* --- Right Column: Image with Offset Frame --- */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 lg:col-start-8 relative mt-10 lg:mt-0"
            >
              {/* Offset Gold Border Frame */}
              <div className="absolute top-6 -right-6 md:top-8 md:-right-8 w-full h-full border-[0.5px] border-[#c49a6c]/40 z-0 pointer-events-none" />

              {/* Main Image Container */}
              <div className="relative w-full aspect-[4/5] bg-[#e9e5e0] overflow-hidden z-10">
                <motion.img 
                  initial={{ scale: 1.15 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  src={storyImage} 
                  alt="Elegant interior of Hotel Bhakti Palace, Nathdwara"
                  className="object-cover w-full h-full"
                />
                
                {/* Subtle Overlays for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent mix-blend-multiply opacity-60" />
                <div className="absolute inset-0 bg-[#c49a6c]/5 mix-blend-overlay" />
              </div>

            </motion.div>
            
          </div>
        </div>
      </section>
    );
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=Playfair+Display:ital,wght@0,300;0,400;1,300&display=swap');
          
          body {
            font-family: 'Inter', sans-serif;
            background-color: #FAF9F6; 
          }

          .font-sans { font-family: 'Inter', sans-serif; }
          .font-serif { font-family: 'Playfair Display', serif; }
        `}
      </style>
      
      <AboutStory />
    </>
  );
}

// import React from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// const AboutStory = () => {
//   return (
//     <section className="bg-white py-20 md:py-28">
//       {/* Container */}
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">
//         {/* --- Left Column: Text Content --- */}
//         <motion.div
//           className="text-left"
//           initial={{ opacity: 0, x: -40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//           viewport={{ once: true }}
//         >
//           {/* Subtitle */}
//           <p
//             className="uppercase text-[#c49a6c] tracking-[0.25em] text-sm font-semibold mb-3"
//             style={{ fontFamily: "Inter, sans-serif" }}
//           >
//             Our Story
//           </p>

//           {/* Title */}
//           <h2
//             className="text-3xl md:text-5xl font-semibold mb-6 text-[#1a1a1a]"
//             style={{ fontFamily: "Playfair Display, serif" }}
//           >
//             Where Devotion Meets Luxury
//           </h2>

//           {/* Paragraphs */}
//           <p
//             className="text-[#6d6d6d] text-base md:text-lg leading-relaxed mb-4"
//             style={{ fontFamily: "Inter, sans-serif", lineHeight: "1.2" }}
//           >
//             Nestled in the divine city of Nathdwara, Hotel Bhakti Palace is more
//             than just a destination — it’s a sanctuary for the soul. Our story
//             began with a vision to create a space where the serenity of devotion
//             harmonizes with the elegance of modern comfort.
//           </p>

//           <p
//             className="text-[#6d6d6d] text-base md:text-lg leading-relaxed mb-4"
//             style={{ fontFamily: "Inter, sans-serif", lineHeight: "1.2" }}
//           >
//             Inspired by the timeless charm of Shree Nath Ji Temple and the
//             cultural richness of Rajasthan, Bhakti Palace stands as a symbol of
//             heritage and heartfelt hospitality. Every detail — from the
//             handcrafted interiors to the warm service — reflects our devotion to
//             perfection and guest satisfaction.
//           </p>

//           <p
//             className="text-[#6d6d6d] text-base md:text-lg leading-relaxed"
//             style={{ fontFamily: "Inter, sans-serif", lineHeight: "1.2" }}
//           >
//             Here, tradition and tranquility meet contemporary elegance — offering
//             guests not just a stay, but a soulful experience to remember.
//           </p>

          
//         </motion.div>

//         {/* --- Right Column: Image --- */}
//         <motion.div
//           className="flex justify-center md:justify-end"
//           initial={{ opacity: 0, x: 40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//           viewport={{ once: true }}
//         >
//           <img
//             src="https://imgs.search.brave.com/BTtaFukr5YlGikv39pICd9x7h6F60Y9y9v9dsl8kbQE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmpkbWFnaWNi/b3guY29tL3YyL2Nv/bXAvbmF0aGR3YXJh/L3E4Lzk5OTlwMjk1/My4yOTUzLjI1MDMw/NDIwMTEyMS5qOHE4/L2NhdGFsb2d1ZS9t/b3RpLW1haGFsLWxh/bC1iYXphci1uYXRo/ZHdhcmEtdG91cmlz/dC1hdHRyYWN0aW9u/LThvMDdiMjJybWkt/MjUwLmpwZz93PTY0/MCZxPTc1"
//             alt="Luxury hotel in Nathdwara - Hotel Bhakti Palace"
//             loading="lazy"
//             className="rounded-2xl shadow-lg object-cover w-full h-[400px] md:h-[500px] max-h-[550px]"
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default AboutStory;
