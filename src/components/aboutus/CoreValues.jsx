import React from "react";
import { motion } from "framer-motion";

const CoreValues = () => {
  const values = [
    {
      title: "Authentic Hospitality",
      description:
        "Rooted in the warmth of Rajasthani tradition, our hospitality is sincere, personal, and guided by timeless values of care and respect.",
    },
    {
      title: "Spiritual Serenity",
      description:
        "Located close to the sacred Shree Nath Ji Temple, Bhakti Palace offers an atmosphere of calm, reflection, and inner peace.",
    },
    {
      title: "Cultural Heritage",
      description:
        "Our spaces are inspired by Nathdwara’s rich artistic legacy, blending traditional aesthetics with refined architectural elegance.",
    },
    {
      title: "Modern Comfort",
      description:
        "Thoughtfully designed rooms and amenities ensure a stay that is comfortable, effortless, and quietly luxurious.",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.15,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <section className="bg-[#faf9f6] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* ===== Section Header ===== */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            className="block text-xs tracking-[0.35em] uppercase text-[#c49a6c] mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Philosophy
          </motion.span>

          <motion.h2
            className="text-3xl md:text-5xl font-serif text-[#1a1a1a] mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            viewport={{ once: true }}
          >
            The Heart of Bhakti Palace
          </motion.h2>

          <motion.p
            className="text-[#6d6d6d] text-base md:text-lg leading-tight"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Guided by devotion, culture, and thoughtful comfort, our values shape
            every experience — offering guests a stay that feels calm, meaningful,
            and deeply personal.
          </motion.p>
        </div>

        {/* ===== Values Grid ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-14 gap-y-16">
          {values.map((value, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              {/* Subtle top accent */}
              <div className="w-10 h-[1px] bg-[#c49a6c] mb-6" />

              <h3
                className="text-xl font-serif text-[#1a1a1a] mb-4"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {value.title}
              </h3>

              <p className="text-sm md:text-base text-[#6d6d6d] leading-tight">
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
