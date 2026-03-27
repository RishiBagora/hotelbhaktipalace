// import React from "react";
// import { motion } from "framer-motion";

// const CoreValues = () => {
//   const values = [
//     {
//       title: "Authentic Hospitality",
//       description:
//         "Rooted in the warmth of Rajasthani tradition, our hospitality is sincere, personal, and guided by timeless values of care and respect.",
//     },
//     {
//       title: "Spiritual Serenity",
//       description:
//         "Located close to the sacred Shree Nath Ji Temple, Bhakti Palace offers an atmosphere of calm, reflection, and inner peace.",
//     },
//     {
//       title: "Cultural Heritage",
//       description:
//         "Our spaces are inspired by Nathdwara’s rich artistic legacy, blending traditional aesthetics with refined architectural elegance.",
//     },
//     {
//       title: "Modern Comfort",
//       description:
//         "Thoughtfully designed rooms and amenities ensure a stay that is comfortable, effortless, and quietly luxurious.",
//     },
//   ];

//   const fadeUp = {
//     hidden: { opacity: 0, y: 30 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         delay: i * 0.15,
//         ease: [0.16, 1, 0.3, 1],
//       },
//     }),
//   };

//   return (
//     <section className="bg-[#faf9f6] py-24 md:py-32">
//       <div className="max-w-6xl mx-auto px-6">

//         {/* ===== Section Header ===== */}
//         <div className="text-center max-w-3xl mx-auto mb-20">
//           <motion.span
//             className="block text-xs tracking-[0.35em] uppercase text-[#c49a6c] mb-4"
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             Our Philosophy
//           </motion.span>

//           <motion.h2
//             className="text-3xl md:text-5xl font-serif text-[#1a1a1a] mb-6"
//             style={{ fontFamily: "Playfair Display, serif" }}
//             initial={{ opacity: 0, y: 12 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.15 }}
//             viewport={{ once: true }}
//           >
//             The Heart of Bhakti Palace
//           </motion.h2>

//           <motion.p
//             className="text-[#6d6d6d] text-base md:text-lg leading-tight"
//             initial={{ opacity: 0, y: 12 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             viewport={{ once: true }}
//           >
//             Guided by devotion, culture, and thoughtful comfort, our values shape
//             every experience — offering guests a stay that feels calm, meaningful,
//             and deeply personal.
//           </motion.p>
//         </div>

//         {/* ===== Values Grid ===== */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-14 gap-y-16">
//           {values.map((value, index) => (
//             <motion.div
//               key={index}
//               custom={index}
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               className="relative"
//             >
//               {/* Subtle top accent */}
//               <div className="w-10 h-[1px] bg-[#c49a6c] mb-6" />

//               <h3
//                 className="text-xl font-serif text-[#1a1a1a] mb-4"
//                 style={{ fontFamily: "Playfair Display, serif" }}
//               >
//                 {value.title}
//               </h3>

//               <p className="text-sm md:text-base text-[#6d6d6d] leading-tight">
//                 {value.description}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CoreValues;



import React from "react";
import { motion } from "framer-motion";

const CoreValues = () => {
  const values = [
    {
      num: "01",
      title: "Authentic Hospitality",
      description:
        "Rooted in the warmth of Rajasthani tradition, our hospitality is sincere, personal, and guided by timeless values of care and respect.",
    },
    {
      num: "02",
      title: "Spiritual Serenity",
      description:
        "Located close to the sacred Shree Nath Ji Temple, Hotel Bhakti offers an atmosphere of calm, reflection, and inner peace.",
    },
    {
      num: "03",
      title: "Cultural Heritage",
      description:
        "Our spaces are inspired by Nathdwara’s rich artistic legacy, blending traditional aesthetics with refined architectural elegance.",
    },
    {
      num: "04",
      title: "Modern Comfort",
      description:
        "Thoughtfully designed rooms and amenities ensure a stay that is comfortable, effortless, and quietly luxurious.",
    },
  ];

  /* ---------------------------
     Motion Variants
  --------------------------- */
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative bg-[#FAF9F6] py-24 md:py-36 overflow-hidden selection:bg-[#c49a6c] selection:text-white">
      
      {/* Texture removed for a purely solid, clean background */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

        {/* ===== Section Header ===== */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="text-center max-w-3xl mx-auto mb-20 md:mb-28 flex flex-col items-center"
        >
          {/* Subtitle with thin lines */}
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-6 md:w-10 bg-[#c49a6c]" />
            <span className="block text-[9px] md:text-[10px] tracking-[0.35em] uppercase text-[#c49a6c] font-medium font-sans">
              Our Philosophy
            </span>
            <div className="h-[1px] w-6 md:w-10 bg-[#c49a6c]" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-[#1a1a1a] mb-8 leading-tight tracking-tight"
          >
            The Heart of <br className="hidden md:block" />
            <span className="italic text-[#c49a6c]">Hotel Bhakti</span>
          </motion.h2>

          <motion.div variants={fadeUp} className="w-px h-12 bg-[#c49a6c]/30 mx-auto mb-8" />

          <motion.p
            variants={fadeUp}
            className="text-[#666] text-[14px] md:text-[15px] font-light leading-[1.9] max-w-2xl"
          >
            Guided by devotion, culture, and thoughtful comfort, our values shape
            every experience — offering guests a stay that feels calm, meaningful,
            and deeply personal.
          </motion.p>
        </motion.div>

        {/* ===== Values Grid (Editorial Layout) ===== */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="group relative flex flex-col"
            >
              {/* Ultra-thin top border */}
              <div className="w-full h-[1px] bg-[#d5c5b5] mb-6 transition-colors duration-500 group-hover:bg-[#c49a6c]" />

              {/* Editorial Numbering */}
              <span className="text-[#c49a6c] text-[10px] uppercase tracking-[0.2em] font-medium mb-6 block">
                {value.num}
              </span>

              <h3 className="text-xl md:text-2xl font-serif font-light text-[#1a1a1a] mb-4 tracking-wide group-hover:text-[#c49a6c] transition-colors duration-500">
                {value.title}
              </h3>

              <p className="text-[13px] md:text-sm text-[#888] font-light leading-[1.8] tracking-wide">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
};

export default CoreValues;