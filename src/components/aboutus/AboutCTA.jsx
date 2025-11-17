import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";

const AboutCTA = () => {
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer for fade-in animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          controls.start({ opacity: 1, y: 0 });
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [controls, hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="bg-[#faf5ef] text-center py-24 md:py-28 overflow-hidden"
    >
      {/* --- Container --- */}
      <motion.div
        className="max-w-4xl mx-auto px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={controls}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* --- Heading --- */}
        <h2
          className="text-3xl md:text-5xl font-semibold mb-6 leading-tight text-[#1a1a1a]"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Experience the Essence of Bhakti Palace
        </h2>

        {/* --- Paragraph --- */}
        <p
          className="text-[#6d6d6d] text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          A luxurious stay immersed in devotion, elegance, and comfort —
          perfectly located near the sacred ShreeNath Ji Temple. Begin your
          journey with us today.
        </p>

        {/* --- Buttons --- */}
        <div className="flex justify-center items-center gap-6 flex-wrap">
          <Link
            to="/rooms"
            aria-label="Book your stay at Hotel Bhakyi Palace"
            className="bg-[#c49a6c] text-white hover:bg-opacity-90 transition-all duration-500 rounded-full px-8 py-3 font-medium text-sm uppercase tracking-wider"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Book Your Stay
          </Link>

          <Link
            to="/contact"
            aria-label="Contact Hotel Bhakyi Palace"
            className="border border-[#c49a6c] text-[#c49a6c] hover:bg-[#c49a6c] hover:text-white transition-all duration-500 rounded-full px-8 py-3 font-medium text-sm uppercase tracking-wider"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Contact Us
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutCTA;
