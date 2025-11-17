// AmenitiesSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { PiWifiHighLight } from "react-icons/pi";
import { PiFireExtinguisherLight } from "react-icons/pi";
import { GiVacuumCleaner } from "react-icons/gi";
import { MdOutlineRoomService } from "react-icons/md";
import { PiSecurityCameraLight } from "react-icons/pi";
import { PiForkKnifeLight } from "react-icons/pi";
import { RiRestaurantLine } from "react-icons/ri";

/**
 * AmenitiesSection
 * Ultra-luxury amenities block — editorial, minimal, gold-ring icons, mandala watermark,
 * subtle framer-motion reveals and hover micro-interactions.
 *
 * Requirements:
 * - TailwindCSS configured in project
 * - framer-motion installed: npm i framer-motion
 * - react-icons installed: npm i react-icons
 *
 * Usage:
 * import AmenitiesSection from './AmenitiesSection';
 * <AmenitiesSection />
 */

/* ------------------ Simple Inline Mandala (decorative watermark) ------------------ */
const MandalaDecor = ({ className = "", style = {} }) => (
  <svg
    aria-hidden="true"
    focusable="false"
    className={className}
    style={style}
    width="900"
    height="900"
    viewBox="0 0 900 900"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity="0.95" stroke="#c49a6c" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="450" cy="450" r="400" />
      <circle cx="450" cy="450" r="320" />
      <circle cx="450" cy="450" r="220" />
      <circle cx="450" cy="450" r="120" />
      <g transform="translate(450,450)">
        {[...Array(12)].map((_, i) => {
          const angle = (i / 12) * Math.PI * 2;
          const x = Math.cos(angle) * 320;
          const y = Math.sin(angle) * 320;
          return (
            <path
              key={i}
              d={`M ${Math.cos(angle) * 80} ${Math.sin(angle) * 80}
                  C ${Math.cos(angle) * 140} ${Math.sin(angle) * 140} ${x} ${y} ${x} ${y}`}
              transform={`rotate(${(i * 360) / 12})`}
              opacity="0.95"
            />
          );
        })}
      </g>
    </g>
  </svg>
);

/* ------------------ Data (amenities) ------------------ */
const amenitiesData = [
  { Icon: PiWifiHighLight, title: "Free Wifi" },
  { Icon: PiForkKnifeLight, title: "Restaurant" },
  { Icon: RiRestaurantLine, title: "Multi-Cuisine Dining" },
  { Icon: GiVacuumCleaner, title: "Daily Housekeeping" },
  { Icon: MdOutlineRoomService, title: "Room Service" },
  { Icon: PiSecurityCameraLight, title: "24/7 Security" },
  { Icon: PiFireExtinguisherLight, title: "Fire Safety" },
  { Icon: PiFireExtinguisherLight, title: "Fire Safety" },
  { Icon: PiFireExtinguisherLight, title: "Fire Safety" },
  { Icon: PiFireExtinguisherLight, title: "Fire Safety" },
  { Icon: PiFireExtinguisherLight, title: "Fire Safety" },
  { Icon: PiFireExtinguisherLight, title: "Fire Safety" },
];

/* ------------------ Motion variants ------------------ */
const fadeUp = {
  hidden: { opacity: 0, y: 22, filter: "blur(6px)" },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: i * 0.06, duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  }),
};

/* ------------------ Amenity Item (no boxes — editorial) ------------------ */
const AmenityItem = ({ Icon, title, index }) => {
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col items-center md:items-start text-center md:text-left"
    >
      {/* Gold ring icon */}
      <div
        className="flex items-center justify-center rounded-full"
        style={{
          width: 64,
          height: 64,
          border: "1.6px solid rgba(196,154,108,0.85)",
          color: "var(--accent)",
          transition: "transform .32s ease, box-shadow .32s ease",
        }}
      >
        <Icon
          className="w-7 h-7"
          style={{ color: "var(--accent)" }}
          aria-hidden="true"
        />
      </div>

      {/* Title */}
      <h3
        className="mt-3 text-base md:text-lg font-serif text-[var(--text-primary)]"
        style={{ fontFamily: "Playfair Display, serif", lineHeight: 1.05 }}
      >
        {title}
      </h3>

      {/* Thin gold underline */}
      <div className="mt-2 w-12 h-[2px] bg-[var(--accent)] rounded-sm" />

      {/* Micro-hover interaction on entire item */}
      <style>
        {`
          .amenity-hover-${index}:hover { transform: translateY(-4px); }
          .amenity-hover-${index}:hover svg { transform: translateY(-1px) scale(1.02); }
        `}
      </style>
      <div className={`mt-0 amenity-hover-${index} transition-transform duration-300`} />
    </motion.div>
  );
};

/* ------------------ Main Section ------------------ */
export default function AmenitiesSection() {
  return (
    <section
      className="relative overflow-hidden py-15 md:py-32"
      style={{
        background: "var(--bg)",
        fontFamily: "'Inter', sans-serif",
        // CSS variables used in component
        "--bg": "#faf9f6",
        "--text-primary": "#1a1a1a",
        "--text-secondary": "#6d6d6d",
        "--accent": "#c49a6c",
      }}
    >
      {/* Decorative Mandala Watermark (parallax + subtle rotation using CSS animation) */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div
          className="opacity-[0.08] mix-blend-multiply select-none"
          style={{ transform: "translateZ(0)" }}
          aria-hidden="true"
        >
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, 2, 0] }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            className="w-[420px] md:w-[760px]"
          >
            <MandalaDecor />
          </motion.div>
        </div>
      </div>

      {/* Small halo behind heading */}
      <div
        aria-hidden="true"
        className="absolute top-[22%] left-1/2 -translate-x-1/2 w-[220px] h-[220px] rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(196,154,108,0.22), rgba(196,154,108,0.02))" }}
      />

      {/* Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.p variants={fadeUp} custom={0} className="text-sm font-semibold text-[var(--accent)] uppercase tracking-widest mb-3">
            Facilities & Amenities
          </motion.p>

          <motion.h2
            variants={fadeUp}
            custom={1}
            className="font-serif text-3xl md:text-5xl text-[var(--text-primary)] mb-4"
            style={{ fontFamily: "Playfair Display, serif", letterSpacing: "0.01em" }}
          >
            Comfort meets calm — thoughtful services
          </motion.h2>

          <motion.div variants={fadeUp} custom={2} className="mx-auto w-20 h-1 bg-[var(--accent)] rounded-full mb-6" />

          <motion.p variants={fadeUp} custom={3} className="text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
            Every moment of your stay is elevated with quietly attentive services — from seamless connectivity to around-the-clock care.
          </motion.p>
        </motion.div>

        {/* Grid of amenities: editorial */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-10 gap-x-8 items-start"
        >
          {amenitiesData.map((a, idx) => (
            <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center md:items-start"
              >
                {/* Icon ring + icon */}
                <div
                  className="flex items-center justify-center rounded-full"
                  style={{
                    width: 64,
                    height: 64,
                    border: "1.6px solid rgba(196,154,108,0.9)",
                    color: "var(--accent)",
                    marginBottom: 12,
                  }}
                >
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    aria-label={a.title}
                    className="inline-flex items-center justify-center w-8 h-8 text-[var(--accent)]"
                    style={{ color: "var(--accent)" }}
                  >
                    <a.Icon className="w-6 h-6" aria-hidden="true" />
                  </a>
                </div>

                {/* Title */}
                <h3 className="font-serif text-base md:text-lg text-[var(--text-primary)]" style={{ fontFamily: "Playfair Display, serif" }}>
                  {a.title}
                </h3>

                {/* Underline */}
                <div className="mt-2 w-10 h-[2px] bg-[var(--accent)] rounded-sm" />
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Small footer divider */}
      <div className="mt-16 border-t border-[rgba(0,0,0,0.04)] pt-10" />
    </section>
  );
}
