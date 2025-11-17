import React from "react";
import { motion } from "framer-motion";

const CoreValues = () => {
  // Core values data
  const values = [
    {
      icon: "🌿",
      title: "Authentic Hospitality",
      description:
        "Experience the warmth of Rajasthani tradition blended with personalized, world-class service.",
    },
    {
      icon: "🕉️",
      title: "Spiritual Serenity",
      description:
        "Located near the revered Shree Nath Ji Temple, we offer a tranquil space for reflection and devotion.",
    },
    {
      icon: "🏛️",
      title: "Cultural Heritage",
      description:
        "Our architecture and interiors celebrate Nathdwara’s art, culture, and timeless elegance.",
    },
    {
      icon: "✨",
      title: "Modern Comfort",
      description:
        "Every room and experience at Bhakti Palace is crafted to combine modern amenities with soulful charm.",
    },
  ];

  return (
    <section className="bg-[#faf9f6] py-20 md:py-28">
      {/* Container */}
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* --- Section Heading --- */}
        <motion.p
          className="uppercase tracking-[0.25em] text-[#c49a6c] text-sm font-semibold mb-3"
          style={{ fontFamily: "Inter, sans-serif" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Philosophy
        </motion.p>

        <motion.h2
          className="text-3xl md:text-5xl font-semibold text-[#1a1a1a] mb-6"
          style={{ fontFamily: "Playfair Display, serif" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          The Heart of Bhakti Palace
        </motion.h2>

        <motion.p
          className="text-[#6d6d6d] text-base md:text-lg max-w-3xl mx-auto mb-12 leading-relaxed"
          style={{ fontFamily: "Inter, sans-serif", lineHeight: "1.8" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Rooted in the sacred aura of Nathdwara, our values define the soul of
          our hospitality — blending devotion, warmth, and sophistication to
          offer guests a stay that feels divine and personal.
        </motion.p>

        {/* --- Value Cards Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center hover:-translate-y-1"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Icon */}
              <div className="text-4xl mb-4 text-[#c49a6c]">{value.icon}</div>

              {/* Title */}
              <h3
                className="text-xl font-semibold text-[#1a1a1a] mb-3"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {value.title}
              </h3>

              {/* Description */}
              <p
                className="text-[#6d6d6d] text-sm leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
