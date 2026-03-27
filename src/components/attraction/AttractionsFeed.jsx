import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import attractionsData from "../../data/attractionsData";

/* ---------------------------
   Motion Variants
--------------------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

/* ---------------------------
   Single Attraction Card
--------------------------- */
const AttractionCard = ({ item, index }) => {
  const isReverse = index % 2 !== 0;

  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="group"
    >
      <Link 
        to={`/attractions/${item.slug}`} 
        className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 lg:gap-24 items-center"
      >
        {/* IMAGE BLOCK */}
        <div
          className={`
            relative overflow-hidden bg-[#e9e5e0] 
            order-1 ${isReverse ? "md:order-2" : "md:order-1"} 
            md:col-span-7 aspect-[16/10] md:aspect-[4/3]
          `}
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105"
            loading="lazy"
          />
          {/* Subtle elegant overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-700" />
          
          {/* Category Tag on Image (Minimalist) */}
          <div className="absolute top-6 left-6 z-10">
            <span className="bg-white/90 backdrop-blur-sm text-[#1a1a1a] text-[9px] uppercase tracking-[0.2em] px-4 py-2">
              {item.category}
            </span>
          </div>
        </div>

        {/* TEXT CONTENT BLOCK */}
        <div 
          className={`
            flex flex-col items-start
            order-2 ${isReverse ? "md:order-1" : "md:order-2"} 
            md:col-span-5
          `}
        >
          {/* Eyebrow Meta */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#c49a6c] font-medium">
              {item.category || "Landmark"}
            </span>
            <div className="h-px w-8 bg-[#c49a6c]/40" />
          </div>

          <h3 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] mb-6 leading-tight group-hover:text-[#c49a6c] transition-colors duration-500">
            {item.name}
          </h3>

          <p className="text-[#666] text-[14px] md:text-[15px] font-light leading-[1.8] tracking-wide mb-10 max-w-lg">
            {item.shortDescription}
          </p>

          {/* Travel Specs (Subtle Metadata) */}
          <div className="flex items-center gap-10 w-full border-t border-[#c49a6c]/20 pt-6 mb-10">
            {item.distance && (
              <div className="flex flex-col gap-1">
                <span className="text-[9px] uppercase tracking-[0.2em] text-[#888]">Distance</span>
                <span className="text-[13px] md:text-sm font-medium text-[#1a1a1a]">{item.distance}</span>
              </div>
            )}
            {item.travelTime && (
              <div className="flex flex-col gap-1">
                <span className="text-[9px] uppercase tracking-[0.2em] text-[#888]">Approx. Time</span>
                <span className="text-[13px] md:text-sm font-medium text-[#1a1a1a]">{item.travelTime}</span>
              </div>
            )}
          </div>

          {/* CTA Link */}
          <div className="relative inline-flex items-center gap-3 text-[#1a1a1a] text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-medium transition-colors duration-500 group-hover:text-[#c49a6c]">
            Explore Landmark
            <span className="font-sans text-sm font-light leading-none group-hover:translate-x-1 transition-transform duration-300">→</span>
            <span className="absolute left-0 -bottom-2 w-full h-[1px] bg-transparent transition-all duration-500 group-hover:bg-[#c49a6c]/50" />
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

/* ---------------------------
   Main Feed Component
--------------------------- */
const AttractionsFeed = () => {
  return (
    <section className="bg-[#FAF9F6] md:selection:bg-[#c49a6c] selection:text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-24 md:gap-40">
        
        {/* Header line for the feed start */}
        <div className="w-full h-px bg-[#c49a6c]/20 mb-8" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-24 md:gap-40"
        >
          {attractionsData.map((item, index) => (
            <React.Fragment key={item.slug || index}>
              <AttractionCard item={item} index={index} />
              
              {/* Mobile Separator (Diamond) */}
              {index !== attractionsData.length - 1 && (
                <div className="md:hidden flex items-center justify-center gap-4 w-full opacity-40">
                  <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#c49a6c]" />
                  <div className="w-1 h-1 rotate-45 bg-[#c49a6c]" />
                  <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#c49a6c]" />
                </div>
              )}
            </React.Fragment>
          ))}
        </motion.div>

        {/* Closing line */}
        <div className="w-full h-px bg-[#c49a6c]/20 mt-8" />
      </div>
    </section>
  );
};

export default AttractionsFeed;