import React from "react";
import { motion } from "framer-motion";

/**
 * AttractionDetailContent
 * Editorial reading section for attraction detail pages
 *
 * IMPORTANT:
 * - Accepts ONLY one prop: `data`
 * - Safely ignores missing fields
 */

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

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const AttractionDetailContent = ({ data }) => {
  const details = data?.details || {};

  const {
    description,
    history,
    bestTime,
    tips,
  } = details;

  return (
    <section
      className="bg-[#faf5ef] py-20 md:py-28"
      aria-label="Attraction details"
    >
      <motion.div
        className="max-w-3xl mx-auto px-6 flex flex-col gap-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >

        {/* Main Editorial Description */}
        {description && (
          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg text-[#1a1a1a] leading-relaxed"
            style={{ lineHeight: 1.9 }}
          >
            {description}
          </motion.p>
        )}

        {/* History Block */}
        {history && (
          <motion.div variants={fadeUp} className="flex flex-col gap-4">
            <h3 className="font-serif text-2xl md:text-3xl text-[#1a1a1a]">
              History & Significance
            </h3>
            <p
              className="text-base md:text-lg text-[#6d6d6d] leading-relaxed"
              style={{ lineHeight: 1.9 }}
            >
              {history}
            </p>
          </motion.div>
        )}

        {/* Best Time to Visit */}
        {bestTime && (
          <motion.div variants={fadeUp} className="flex flex-col gap-4">
            <h3 className="font-serif text-2xl md:text-3xl text-[#1a1a1a]">
              Best Time to Visit
            </h3>
            <p
              className="text-base md:text-lg text-[#6d6d6d] leading-relaxed"
              style={{ lineHeight: 1.9 }}
            >
              {bestTime}
            </p>
          </motion.div>
        )}

        {/* Visitor Tips */}
        {Array.isArray(tips) && tips.length > 0 && (
          <motion.div variants={fadeUp} className="flex flex-col gap-6">
            <h3 className="font-serif text-2xl md:text-3xl text-[#1a1a1a]">
              Visitor Tips
            </h3>

            <ul className="flex flex-col gap-3 list-disc list-inside text-[#6d6d6d]">
              {tips.map((tip, index) => (
                <li
                  key={index}
                  className="text-base md:text-lg leading-relaxed"
                  style={{ lineHeight: 1.8 }}
                >
                  {tip}
                </li>
              ))}
            </ul>
          </motion.div>
        )}

      </motion.div>
    </section>
  );
};

export default AttractionDetailContent;
