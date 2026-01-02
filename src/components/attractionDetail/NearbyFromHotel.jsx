import React from "react";
import { motion } from "framer-motion";

/**
 * NearbyFromHotel
 * Calm informational section for attraction detail pages
 *
 * IMPORTANT:
 * - Accepts ONLY one prop: `data`
 * - Safely ignores missing optional fields
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

const NearbyFromHotel = ({ data }) => {
  if (!data) return null;

  const {
    name,
    distance,
    travelTime,
    locationHint,
  } = data;

  return (
    <section
      className="bg-[#faf5ef] py-20 md:py-24"
      aria-label={`Distance from Hotel Bhakti Palace to ${name}`}
    >
      {/* Soft divider */}
      <div className="max-w-5xl mx-auto px-6 mb-16">
        <div className="w-full h-px bg-[rgba(0,0,0,0.08)]" />
      </div>

      <motion.div
        className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Heading */}
        <motion.h3
          variants={fadeUp}
          className="font-serif text-2xl md:text-3xl text-[#1a1a1a]"
        >
          Nearby from Hotel Bhakti Palace
        </motion.h3>

        {/* Content */}
        <motion.div variants={fadeUp} className="flex flex-col gap-6">
          {/* Description */}
          {distance && (
            <p
              className="text-base md:text-lg text-[#6d6d6d] leading-relaxed"
              style={{ lineHeight: 1.9 }}
            >
              {name
                ? `${name} is conveniently located ${distance} from Hotel Bhakti Palace, allowing guests to reach the site with ease while enjoying a relaxed stay nearby.`
                : `This attraction is conveniently located ${distance} from Hotel Bhakti Palace, making it easily accessible for guests staying with us.`}
            </p>
          )}

          {/* Meta info */}
          {travelTime && (
            <p className="text-sm md:text-base text-[#6d6d6d]">
              <span className="text-[#c49a6c] uppercase tracking-widest text-xs mr-2">
                Approx. Travel Time
              </span>
              {travelTime}
            </p>
          )}

          {/* Location hint */}
          {locationHint && (
            <p
              className="text-sm md:text-base text-[#6d6d6d] leading-relaxed"
              style={{ lineHeight: 1.8 }}
            >
              {locationHint}
            </p>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default NearbyFromHotel;
