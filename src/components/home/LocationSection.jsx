import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Navigation, Landmark, Footprints, Map } from "lucide-react";

const LocationSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const landmarks = [
    { name: "ShriNath Ji Temple", dist: "50 Steps", icon: Landmark },
    { name: "Nathdwara Market", dist: "1 Min Walk", icon: Navigation },
    { name: "Chaupati / Food Stalls", dist: "3 Min Walk", icon: MapPin },
    { name: "ShriNathji Gaushala", dist: "10 Min Drive", icon: Clock },
  ];

  return (
    <section className="relative bg-[#faf9f6] py-24 md:py-32 px-5 sm:px-10 lg:px-20 overflow-hidden">

      {/* Aesthetic Background Grain / Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(196,154,108,0.08),transparent_50%)] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#c49a6c]/20 to-transparent"></div>

      {/* Decorative Art with Premium Blending */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 0.04, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute inset-0 flex justify-center lg:justify-end items-center pointer-events-none z-0"
      >
        <img
          src="/images/cowimg.png"
          alt="Pichwai Art Detail"
          className="max-w-[400px] md:max-w-[700px] lg:max-w-[800px] object-contain opacity-50 mr-0 lg:-mr-32"
          onError={(e) => e.target.style.display = 'none'}
        />
      </motion.div>

      <div className="relative z-10 max-w-[80rem] mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 items-center">

        {/* --- LEFT SIDE: Typography & Story --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-start text-left"
        >
          {/* Section Subtitle */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6 md:mb-8">
            <div className="h-[1px] w-12 bg-[#c49a6c]"></div>
            <p className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-[#c49a6c] font-medium" style={{ fontFamily: "Inter, sans-serif" }}>
              Our Location
            </p>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-[3.8rem] font-medium text-[#1a1a1a] mb-8 leading-[1.15]"
            style={{ fontFamily: "Playfair Display, serif", letterSpacing: "-0.01em" }}
          >
            The Heart of <br className="hidden md:block" />
            <span className="italic text-[#c49a6c] font-light">Divine Charm</span>
          </motion.h2>

          <motion.p 
            variants={itemVariants} 
            className="text-gray-600/90 text-[15px] md:text-[17px] leading-[1.9] mb-12 max-w-lg font-light"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Nestled in the spiritual town of Nathdwara, <span className="text-[#c49a6c] font-normal">Hotel Bhakti</span> offers a peaceful retreat just moments away from sacred sites. 
            Surrounded by vibrant alleys and devotional energy, our guests can experience the true soul of Nathdwara without the hassle of commuting.
          </motion.p>

          {/* Premium Highlight Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-5 px-0 py-2">
            <div className="relative flex items-center justify-center w-14 h-14 rounded-full border border-[#c49a6c]/30 bg-[#faf9f6] shadow-sm">
              <div className="absolute inset-0 border border-[#c49a6c] rounded-full animate-ping opacity-20 duration-1000"></div>
              <Footprints className="text-[#c49a6c]" size={22} strokeWidth={1.5} />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-semibold mb-1">
                Unbeatable Proximity
              </span>
              <span className="text-xl md:text-2xl font-serif text-[#1a1a1a] italic">
                Only <span className="text-[#c49a6c] font-medium not-italic">50 Steps</span> Away
              </span>
            </div>
          </motion.div>

        </motion.div>

        {/* --- RIGHT SIDE: Premium Concierge Card --- */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          viewport={{ once: true }}
          className="relative w-full self-center"
        >
          {/* Decorative back-plate offset */}
          <div className="absolute top-4 -right-4 w-full h-full border border-[#c49a6c]/20 bg-transparent rounded-sm -z-10 hidden sm:block"></div>
          
          <div className="bg-white/90 backdrop-blur-xl rounded-sm p-8 sm:p-10 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.04)] border border-white">
            
            {/* Card Heading */}
            <div className="flex items-center gap-4 mb-8 sm:mb-10">
              <Map className="text-[#c49a6c]" size={24} strokeWidth={1.2} />
              <h3 className="text-2xl md:text-3xl font-serif text-[#1a1a1a]">
                Points of Interest
              </h3>
            </div>

            {/* List of Landmarks */}
            <div className="flex flex-col">
              {landmarks.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + (idx * 0.1), duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between py-4 sm:py-5 border-b border-[#c49a6c]/10 group last:border-0"
                  >
                    <div className="flex items-center gap-4 sm:gap-6">
                      <div className="w-10 h-10 rounded-full bg-[#faf9f6] flex items-center justify-center border border-[#c49a6c]/20 group-hover:bg-[#c49a6c] transition-colors duration-500">
                        <Icon size={16} className="text-[#c49a6c] group-hover:text-white transition-colors duration-500" />
                      </div>
                      <span className="text-[#1a1a1a] font-medium text-[13px] sm:text-[15px] group-hover:text-[#c49a6c] transition-colors duration-300">
                        {item.name}
                      </span>
                    </div>
                    <span className="text-gray-400 text-[10px] sm:text-xs tracking-wide font-light uppercase">
                      {item.dist}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* Address Footer inside Card */}
            <div className="mt-8 sm:mt-10 pt-6 border-t border-black/5">
              <p className="text-[10px] sm:text-[11px] text-gray-500 uppercase tracking-[0.15em] leading-relaxed">
                Hotel Bhakti <br />
                <span className="text-gray-400">Near ShriNath Ji Temple, Nathdwara, Raj.</span>
              </p>
            </div>
            
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default LocationSection;