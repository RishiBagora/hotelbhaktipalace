import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/**
 * BackToAttractionsCTA
 * Calm editorial closing CTA for attraction detail pages
 */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 22,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const BackToAttractionsCTA = () => {
  return (
    <section
      className="bg-[#faf5ef] py-20 md:py-28"
      aria-label="Return to attractions list"
    >
      <motion.div
        className="max-w-4xl mx-auto px-6 text-center flex flex-col gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Eyebrow */}
        <motion.p
          variants={fadeUp}
          className="uppercase tracking-[0.25em] text-xs"
          style={{ color: "#c49a6c" }}
        >
          Continue Exploring
        </motion.p>

        {/* Main Text */}
        <motion.h3
          variants={fadeUp}
          className="font-serif text-2xl md:text-3xl text-[#1a1a1a]"
        >
          Discover more places around Nathdwara
        </motion.h3>

        {/* Supporting Text */}
        <motion.p
          variants={fadeUp}
          className="text-base md:text-lg text-[#6d6d6d] leading-relaxed max-w-2xl mx-auto"
          style={{ lineHeight: 1.8 }}
        >
          Return to the attractions guide and explore more spiritual, cultural,
          and historic experiences near Hotel Bhakti Palace.
        </motion.p>

        {/* Soft CTA */}
        <motion.div variants={fadeUp} className="mt-4">
          <Link
            to="/attractions"
            className="inline-block text-sm md:text-base text-[#1a1a1a] underline underline-offset-4
                       decoration-[#c49a6c] decoration-[1px]
                       hover:text-[#c49a6c] transition-colors duration-300
                       focus:outline-none focus-visible:ring-1 focus-visible:ring-[#c49a6c]"
            aria-label="View all attractions"
          >
            View all attractions
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BackToAttractionsCTA;
