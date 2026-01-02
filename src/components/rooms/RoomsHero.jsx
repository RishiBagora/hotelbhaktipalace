import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const RoomsHero = () => {
  return (
    <section
      className="
        relative flex items-center justify-center
        bg-[#faf5ef]
        min-h-[60vh] md:min-h-[65vh] lg:min-h-[40vh]
        px-6 pt-5
      "
      aria-label="Rooms and Accommodation introduction"
    >
      <motion.div
        className="max-w-6xl mx-auto text-center"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Eyebrow */}
        <motion.p
          variants={fadeUp}
          className="
            uppercase tracking-[0.28em]
            text-xs md:text-sm
            text-[#c49a6c]
            mb-5
          "
        >
          Rooms & Accommodation
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          variants={fadeUp}
          className="
            font-serif
            text-[#1a1a1a]
            text-3xl md:text-4xl lg:text-5xl
            leading-[1.25]
            max-w-4xl
            mx-auto
          "
        >
          Comfortable stays designed for peace and convenience
        </motion.h1>

        {/* Supporting Paragraph */}
        <motion.p
          variants={fadeUp}
          className="
            mt-8
            max-w-2xl
            mx-auto
            text-[#6d6d6d]
            text-base md:text-lg
            leading-[1.3]
          "
        >
          At Hotel Bhakti Palace, our rooms are thoughtfully designed to offer
          comfort, calm, and ease — making your stay in Nathdwara restful and
          memorable.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default RoomsHero;