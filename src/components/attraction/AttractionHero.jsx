import React from "react";
import { motion } from "framer-motion";

/**
 * AttractionsHero
 * Luxury editorial hero for Attractions page
 * Calm, spiritual, minimal — no images, no cards
 */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const AttractionsHero = () => {
  return (
    <section
      className="bg-[#faf5ef] py-32 md:pt-20 pb-10"
      aria-label="Attractions Hero Section"
    >
      <div className="max-w-4xl mx-auto px-6 text-center flex flex-col gap-10">
        
        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="uppercase tracking-[0.3em] text-sm font-medium"
          style={{
            color: "#c49a6c",
            fontFamily: "Inter, sans-serif",
          }}
        >
          Explore the Sacred City
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="font-serif text-3xl md:text-6xl leading-tight"
          style={{
            color: "#1a1a1a",
            fontFamily: "Playfair Display, serif",
            fontWeight: 600,
          }}
        >
          Attractions Around Nathdwara
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          style={{
            color: "#6d6d6d",
            fontFamily: "Inter, sans-serif",
            lineHeight: 1.3,
            fontWeight: 300,
          }}
        >
          Surrounded by centuries of devotion, culture and history, Nathdwara
          offers a deeply enriching experience. From sacred temples to heritage
          landmarks, discover the places that make this spiritual city truly
          timeless.
        </motion.p>

      </div>
    </section>
  );
};

export default AttractionsHero;
