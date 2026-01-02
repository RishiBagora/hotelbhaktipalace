import React from "react";
import { motion } from "framer-motion";

/**
 * WhyVisitNathdwara
 * Luxury editorial storytelling with a single visual anchor
 * Calm, spiritual, timeless — no cards, no clutter
 */

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

const WhyVisitNathdwara = () => {
  return (
    <section
      className="bg-[#faf5ef] py-20 md:py-28 lg:py-36"
      aria-label="Why Visit Nathdwara"
    >
      <motion.div
        className="max-w-6xl mx-auto px-6"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* GRID: Text (left) + Visual (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          
          {/* TEXT COLUMN */}
          <div className="flex flex-col gap-8">
            {/* Eyebrow */}
            <motion.p
              variants={fadeUp}
              className="uppercase tracking-[0.3em] text-sm font-medium"
              style={{ color: "#c49a6c", fontFamily: "Inter, sans-serif" }}
            >
              A City of Devotion & Culture
            </motion.p>

            {/* Heading */}
            <motion.h2
              variants={fadeUp}
              className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight"
              style={{
                color: "#1a1a1a",
                fontFamily: "Playfair Display, serif",
                fontWeight: 600,
              }}
            >
              Why Visit Nathdwara
            </motion.h2>

            {/* Editorial paragraphs */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col gap-6 max-w-3xl leading-tight"
              style={{
                color: "#6d6d6d",
                fontFamily: "Inter, sans-serif",
                fontWeight: 300,
              }}
            >
              <p className="text-base md:text-lg lg:text-xl">
                Nathdwara is a town shaped by devotion and time. For centuries,
                pilgrims, artists, and seekers have arrived here drawn by the
                presence of Shree Nath Ji — not as a spectacle, but as a living
                rhythm of faith and reflection.
              </p>

              <p className="text-base md:text-lg lg:text-xl">
                Beyond its spiritual core lies a quiet cultural depth. Temple
                architecture, traditional art, and age-old rituals coexist with
                everyday life, preserving a heritage that continues without
                interruption or excess.
              </p>

              <p className="text-base md:text-lg lg:text-xl">
                To visit Nathdwara is to slow down. Walkable streets, sacred
                landmarks, and a gentle pace allow visitors to feel grounded.
                Staying close to the heart of the town offers comfort without
                distance — letting each moment unfold naturally.
              </p>
            </motion.div>
          </div>

          {/* VISUAL COLUMN */}
          <motion.div
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="relative w-full"
          >
            {/* Visual frame */}
            <div className="relative overflow-hidden rounded-3xl">
              {/* Optional subtle gold outline */}
              <div className="absolute inset-0 rounded-3xl ring-1 ring-[#c49a6c]/30 pointer-events-none" />

              {/* Image */}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Vishwas_Swaroopam_after_completion_of_work.jpg"
                alt="Spiritual surroundings of Nathdwara"
                loading="lazy"
                className="
                  w-full
                  object-cover
                  aspect-[16/9]
                  md:aspect-[3/4]
                  lg:aspect-[1/1]
                "
              />
            </div>

            {/* Soft breathing space below image on mobile */}
            <div className="block lg:hidden h-2" />
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default WhyVisitNathdwara;
