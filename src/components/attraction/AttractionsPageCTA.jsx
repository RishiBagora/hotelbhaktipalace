import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/**
 * AttractionsPageCTA
 * Calm editorial closing CTA for the Attractions page
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

const AttractionsPageCTA = () => {
  return (
    <section
      className="bg-[#faf5ef] py-20 md:py-28"
      aria-label="Plan your stay at Hotel Bhakti Palace"
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
          Plan Your Visit
        </motion.p>

        {/* Main Heading */}
        <motion.h3
          variants={fadeUp}
          className="font-serif text-2xl md:text-3xl text-[#1a1a1a]"
        >
          Experience Nathdwara with comfort and ease
        </motion.h3>

        {/* Supporting Paragraph */}
        <motion.p
          variants={fadeUp}
          className="text-base md:text-lg text-[#6d6d6d] leading-relaxed max-w-2xl mx-auto"
          style={{ lineHeight: 1.8 }}
        >
          After exploring the spiritual and cultural landmarks around Nathdwara,
          enjoy a peaceful and comfortable stay close to it all at Hotel Bhakti
          Palace.
        </motion.p>

        {/* CTA Actions */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-6"
        >
          {/* Primary CTA */}
          <Link
            to="/rooms"
            className="inline-block px-8 py-3 text-sm uppercase tracking-wide
                       border border-[#c49a6c] text-[#c49a6c] rounded-full
                       hover:bg-[#c49a6c] hover:text-white
                       transition-all duration-300
                       focus:outline-none focus-visible:ring-1 focus-visible:ring-[#c49a6c]"
            aria-label="Plan your stay at Hotel Bhakti Palace"
          >
            Plan your stay
          </Link>

          {/* Secondary CTA */}
          <Link
            to="/contact"
            className="text-sm md:text-base text-[#1a1a1a]
                       underline underline-offset-4
                       decoration-[#c49a6c] decoration-[1px]
                       hover:text-[#c49a6c]
                       transition-colors duration-300
                       focus:outline-none focus-visible:ring-1 focus-visible:ring-[#c49a6c]"
            aria-label="Contact Hotel Bhakti Palace for enquiries"
          >
            Contact us for enquiries
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AttractionsPageCTA;
