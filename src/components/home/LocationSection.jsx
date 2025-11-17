import React from "react";
import { motion } from "framer-motion";

const LocationSection = () => {
  return (
    <section className="relative bg-[#faf9f6]  py-24 px-4 sm:px-8 lg:px-16 overflow-hidden">
      {/* Background decorative vector */}
      <div className="absolute inset-0 flex justify-center items-center opacity-10 pointer-events-none">
        <img
          src="/images/cowimg.png" // replace with your uploaded file path
          alt="Pichwai Cow Art"
          className="max-w-[500px] md:max-w-[650px] object-contain"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Heading Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-sm tracking-[0.3em] uppercase text-[#c49a6c] mb-3"
          style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
        >
          Our Location
        </motion.p>

        {/* Decorative underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="h-[1px] w-20 bg-[#c49a6c] mx-auto mb-6 opacity-40 origin-center"
        ></motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-5xl font-semibold text-[#1a1a1a] leading-snug mb-10"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          At the Heart of Nathdwara’s Divine Charm
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-base md:text-lg text-[#6c6c6c] leading-relaxed mb-12"
          style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.85 }}
        >
          Located in the holy town of Nathdwara,{" "}
          <span className="text-[#c49a6c] font-medium">Hotel Bhakti Palace</span>{" "}
          stands just a short walk from the sacred Shree Nath Ji Temple. Embraced
          by the spiritual aura of this divine city, our hotel offers the perfect
          blend of peace, devotion, and comfort. Wake up to the sound of temple
          bells, stroll through vibrant local streets rich with art and faith,
          and immerse yourself in the soulful rhythm of Nathdwara.
        </motion.p>

        {/* Highlight Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-[#800000] text-2xl md:text-3xl font-semibold italic"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          2 minutes from the Shree Nath Ji Temple
        </motion.div>
      </div>
    </section>
  );
};

export default LocationSection;
