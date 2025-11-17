import React from "react";
import { motion } from "framer-motion";

const AboutGallery = () => {
  const images = [
    { src: "/images/IMG-20251117-WA0029.jpg", alt: "Images" },
    { src: "/images/IMG-20251117-WA0031.jpg", alt: "Images" },
    { src: "/images/IMG-20251117-WA0030.jpg", alt: "Images" },
    { src: "/images/IMG-20251117-WA0016.jpg", alt: "Images" },
    { src: "/images/IMG-20251117-WA0017.jpg", alt: "Images" },
    { src: "/images/IMG-20251117-WA0018.jpg", alt: "Images" },
  ];

  return (
    <section className="bg-white py-20 md:py-28">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* --- Heading Section --- */}
        <motion.p
          className="uppercase tracking-[0.25em] text-[#c49a6c] text-sm font-semibold mb-3"
          style={{ fontFamily: "Inter, sans-serif" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Visual Experience
        </motion.p>

        <motion.h2
          className="text-3xl md:text-5xl font-semibold text-[#1a1a1a] mb-6"
          style={{ fontFamily: "Playfair Display, serif" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Discover the Beauty of Bhakti Palace
        </motion.h2>

        <motion.p
          className="text-[#6b6b6b] text-base md:text-lg max-w-3xl mx-auto mb-12 leading-relaxed"
          style={{ fontFamily: "Inter, sans-serif", lineHeight: "1.8" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Every corner of our hotel is crafted to inspire peace, devotion, and
          luxury — from the rooms to the restaurant, every detail reflects our
          dedication to creating timeless comfort.
        </motion.p>

        {/* --- Gallery Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="object-cover w-full h-[280px] md:h-[360px] transform hover:scale-105 transition-transform duration-700 ease-in-out"
              />

              {/* Optional overlay on hover */}
              <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-500 rounded-2xl"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutGallery;
