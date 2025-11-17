// ContactCTA.jsx
import React from "react";
import { motion } from "framer-motion";

/**
 * ULTRA-LUXURY CTA with:
 * - Spiritual mandala watermark (subtle, centered)
 * - Gold radiant halo behind the title
 * - Soft parallax on headline
 * - Gold underline accent
 * - Calm luxury spacing
 */

const fadeUp = {
  hidden: { opacity: 0, y: 26, filter: "blur(6px)" },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.12,
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function ContactCTA() {
  return (
    <section
      className="relative py-40 overflow-hidden bg-[var(--background)]"
      style={{
        "--background": "#faf5ef",
        "--text_primary": "#1a1a1a",
        "--text_secondary": "#6d6d6d",
        "--accent": "#c49a6c",
        "--soft_line": "rgba(0,0,0,0.1)",
      }}
    >
      {/* SOFT SPIRITUAL MANDALA WATERMARK */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.07]"
      >
        <img
          src="/mandala.svg"
          alt=""
          className="w-[420px] md:w-[600px] object-contain"
        />
      </div>

      {/* GOLD HALO BEHIND TITLE */}
      <div className="absolute top-[24%] left-1/2 -translate-x-1/2 w-[260px] h-[260px] blur-3xl rounded-full opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(circle, #c49a6c40, transparent)" }}
      />

      <div className="relative max-w-3xl mx-auto px-6 text-center flex flex-col items-center">

        {/* HEADING WITH PARALLAX */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
          }}
          viewport={{ once: true, amount: 0.4 }}
          whileHover={{ y: -2 }} // tiny parallax drift
          className="text-4xl md:text-6xl font-serif text-[var(--text_primary)] mb-4"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          How Can We Assist You?
        </motion.h2>

        {/* GOLD UNDERLINE */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{
            width: "80px",
            opacity: 1,
            transition: { duration: 1, ease: "easeOut" }
          }}
          viewport={{ once: true }}
          className="h-[2px] bg-[var(--accent)] mx-auto mb-10 rounded-full"
        />

        {/* DESCRIPTION */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={1}
          viewport={{ once: true, amount: 0.4 }}
          className="text-lg md:text-2xl text-[var(--text_secondary)] max-w-2xl mx-auto leading-relaxed mb-14"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Whether you're planning a spiritual visit, a luxury stay,
          or need personalised assistance — our team at Hotel Bhakti Palace
          is always here to help you.
        </motion.p>

        {/* DIVIDER */}
        <motion.div
          variants={fadeUp}
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full h-px bg-[var(--soft_line)] my-14"
        />

        {/* CTA BUTTONS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap gap-6 justify-center"
        >
          {/* PRIMARY */}
          <motion.a
            variants={fadeUp}
            custom={3}
            href="tel:+919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 rounded-full bg-[var(--accent)] text-white uppercase tracking-wide text-sm hover:bg-opacity-90 transition-all duration-500"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Call Reservations
          </motion.a>

          {/* SECONDARY */}
          <motion.a
            variants={fadeUp}
            custom={4}
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 rounded-full border border-[var(--accent)] text-[var(--accent)] uppercase tracking-wide text-sm hover:bg-[var(--accent)] hover:text-white transition-all duration-500"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            WhatsApp Us
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
