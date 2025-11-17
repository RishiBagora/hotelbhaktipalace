import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const theme = {
  background: "#faf9f6",
  textPrimary: "#1a1a1a",
  textSecondary: "#6c6c6c",
  accent: "#c49a6c",
};

const stats = [
  { number: 10, suffix: "+", label: "Years of Service" },
  { number: 12000, suffix: "+", label: "Happy Guests" },
  { number: 95, suffix: "%", label: "Average Occupancy Rate" },
];

/* ------------------ COUNTER TRIGGER ON VIEW ------------------ */
const Counter = ({ value, suffix, start }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startValue = 0;
    const end = value;
    const duration = 1400;
    const step = end / 50;

    const timer = setInterval(() => {
      startValue += step;
      if (startValue >= end) {
        startValue = end;
        clearInterval(timer);
      }
      setCount(Math.floor(startValue));
    }, duration / 50);

    return () => clearInterval(timer);
  }, [start, value]);

  return (
    <>
      {count.toLocaleString()}
      {suffix}
    </>
  );
};

/* ------------------ ANIMATIONS ------------------ */
const fadeUp = {
  hidden: { opacity: 0, y: 26, filter: "blur(6px)" },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      delay: i * 0.18,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

/* ------------------ MAIN COMPONENT ------------------ */
export default function StatsStrip() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-150px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-28 overflow-hidden"
      style={{
        background: theme.background,
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Gold top line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-[2px] rounded-full"
        style={{ background: theme.accent }}
      />

      <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-16 text-center">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col items-center"
          >
            {/* Number */}
            <h2
              className="text-5xl md:text-6xl font-serif font-semibold text-[var(--accent)]"
              style={{
                fontFamily: "Playfair Display, serif",
                color: theme.accent,
              }}
            >
              <Counter
                value={stat.number}
                suffix={stat.suffix}
                start={isInView}
              />
            </h2>

            {/* Underline animation */}
            <motion.div
              className="mt-3 h-[2px] bg-[var(--accent)] rounded-full"
              style={{ background: theme.accent }}
              initial={{ width: 0 }}
              animate={isInView ? { width: 40 } : { width: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2 + i * 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
            />

            {/* Label */}
            <p
              className="mt-4 text-base md:text-lg tracking-wide"
              style={{
                color: theme.textSecondary,
                letterSpacing: "0.5px",
              }}
            >
              {stat.label}
            </p>

            {/* Vertical divider */}
            {i < stats.length - 1 && (
              <div
                className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 h-12 border-r opacity-30"
                style={{ borderColor: theme.accent }}
              ></div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
