// RoomsPageCTA.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/**
 * RoomsPageCTA
 * Quiet luxury editorial closing CTA for Rooms & Accommodation page
 * Calm, reassuring, non-salesy conclusion
 */

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
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

const RoomsPageCTA = () => {
  return (
    <section className="bg-[#faf5ef] py-20 md:py-28">
      <motion.div
        className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        {/* Eyebrow */}
        <span
          className="uppercase text-xs tracking-[0.3em] mb-4"
          style={{ color: "#c49a6c" }}
        >
          Plan Your Stay
        </span>

        {/* Main Heading */}
        <h2
          className="text-2xl md:text-3xl font-serif text-[#1a1a1a] max-w-2xl"
          style={{ fontFamily: "Playfair Display, serif", lineHeight: 1.4 }}
        >
          A comfortable stay, close to the spiritual heart of Nathdwara
        </h2>

        {/* Supporting Paragraph */}
        <p
          className="mt-6 text-base md:text-lg text-[#6d6d6d] max-w-2xl"
          style={{ lineHeight: 1.8 }}
        >
          Whether you are visiting for pilgrimage or a peaceful retreat, our
          accommodations offer comfort, convenience, and a calm environment for
          a truly restful stay at Hotel Bhakti Palace.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-6">
          

          {/* Secondary */}
          <Link
            to="/contact"
            className="text-sm text-[#6d6d6d] hover:text-[#c49a6c] underline underline-offset-4 transition-colors duration-300"
            aria-label="Contact reservation team"
          >
            Contact our reservation team
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default RoomsPageCTA;
