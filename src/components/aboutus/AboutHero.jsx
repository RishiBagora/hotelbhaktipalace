

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
  <button
    onClick={() => {
      window.scrollBy({
        top: window.innerHeight * 1,
        behavior: "smooth",
      });
    }}
    className="
      border border-[#c49a6c]
      text-[#c49a6c]
      hover:bg-[#c49a6c]
      hover:text-white
      transition-all duration-500
      rounded-full
      px-8 py-3
      mt-8
      inline-block
      font-medium
      tracking-wide
    "
  >
    Discover Our Story
  </button>
</motion.div>

      </motion.div>
    </section>
  );
};

export default AboutHero;
