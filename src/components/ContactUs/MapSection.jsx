// MapSection.jsx
import React from "react";
import { motion } from "framer-motion";

/**
 * ULTRA-LUXURY MAP SECTION
 * - Double-line editorial frame
 * - Gold micro-corner notches
 * - Minimal spa-like vibes
 * - Smooth framer-motion fade-up
 * - Perfect for premium hotel sites
 */

const fadeUp = {
  hidden: { opacity: 0, y: 26, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0)",
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function MapSection() {
  return (
    <section
      className="py-32 md:py-40 bg-[var(--background)]"
      style={{
        "--background": "#faf5ef",
        "--text_primary": "#1a1a1a",
        "--text_secondary": "#6d6d6d",
        "--accent": "#c49a6c",
        "--line": "rgba(0,0,0,0.12)",
        "--map_border": "rgba(0,0,0,0.15)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-20">

        {/* HEADER */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2
            className="text-4xl md:text-6xl font-serif text-[var(--text_primary)] mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Find Us in Nathdwara
          </h2>

          <p
            className="text-lg md:text-2xl text-[var(--text_secondary)] leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Just few steps away from the sacred Shree Nath Ji Temple —
            Hotel Bhakti Palace places you at the heart of spiritual devotion
            and timeless hospitality.
          </p>
        </motion.div>

        {/* MAP WRAPPER — DOUBLE FRAME + GOLD CORNERS */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative w-full"
        >
          {/* OUTER FRAME */}
          <div
            className="rounded-3xl border relative"
            style={{ borderColor: "var(--map_border)", padding: "14px" }}
          >
            {/* INNER FRAME */}
            <div
              className="rounded-2xl border overflow-hidden relative"
              style={{ borderColor: "var(--map_border)" }}
            >
              {/* GOLD MICRO CORNERS — luxury */}
              <span className="absolute top-0 left-0 w-6 h-[2px] bg-[var(--accent)] rounded-full"></span>
              <span className="absolute top-0 right-0 w-6 h-[2px] bg-[var(--accent)] rounded-full"></span>
              <span className="absolute bottom-0 left-0 w-6 h-[2px] bg-[var(--accent)] rounded-full"></span>
              <span className="absolute bottom-0 right-0 w-6 h-[2px] bg-[var(--accent)] rounded-full"></span>

              {/* MAP */}
              <iframe
                title="Hotel Bhakti Palace Location Map"
                loading="lazy"
                className="w-full block"
                style={{
                  height: "clamp(360px, 45vh, 680px)",
                  border: "0",
                }}
                src="https://www.google.com/maps?q=Shree+Nath+Ji+Temple+Nathdwara&output=embed"
              ></iframe>
            </div>
          </div>
        </motion.div>

        {/* ADDRESS */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center text-center gap-4 mt-10"
        >
          <p
            className="uppercase tracking-[0.25em] text-[var(--accent)] text-xs"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Our Location
          </p>

          <h3
            className="text-xl md:text-2xl font-light text-[var(--text_primary)] leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Hotel Bhakti Palace, Near Shree Nath Ji Temple, Nathdwara, Rajasthan - 313301
          </h3>

          <p
            className="text-[var(--text_secondary)] text-base md:text-lg"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            A peaceful town rooted in devotion, heritage, art and spiritual energy.
          </p>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Shree+Nath+Ji+Temple+Nathdwara"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-[var(--accent)] underline underline-offset-4 hover:opacity-75 transition-all duration-300"
          >
            Open in Google Maps
          </a>
        </motion.div>

      </div>
    </section>
  );
}
