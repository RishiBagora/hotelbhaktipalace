import React from "react";
import { motion } from "framer-motion";

// Theme colors
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

// Fade-in animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Counter animation hook
const Counter = ({ value, suffix }) => {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1500;
    const stepTime = Math.abs(Math.floor(duration / end));
    const timer = setInterval(() => {
      start += Math.ceil(end / 60);
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, stepTime);
    return () => clearInterval(timer);
  }, [value]);
  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const StatsStrip = () => {
  return (
    <section
      className="relative py-20 text-center overflow-hidden"
      style={{
        backgroundColor: theme.background,
        color: theme.textPrimary,
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Subtle marble texture background */}
      <div
        className="absolute inset-0 opacity-[0.15] bg-[url('https://www.transparenttextures.com/patterns/marble.png')] bg-repeat"
        aria-hidden="true"
      ></div>

      {/* Soft gold top border accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[2px] rounded-full"
        style={{ backgroundColor: theme.accent }}
      ></div>

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 px-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            variants={fadeInUp}
          >
            {/* Animated Gold Number with shimmer */}
            <motion.h2
              className="text-4xl md:text-5xl font-semibold mb-2 relative inline-block"
              style={{
                fontFamily: "Playfair Display, serif",
                color: theme.accent,
                textTransform: "capitalize",
              }}
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: "linear",
                delay: index * 1.2,
              }}
            >
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #c49a6c, #f5deb3, #c49a6c)",
                  backgroundSize: "200%",
                  WebkitBackgroundClip: "text",
                }}
              >
                <Counter value={stat.number} suffix={stat.suffix} />
              </span>
            </motion.h2>

            {/* Label */}
            <p
              className="text-base tracking-wide"
              style={{
                color: theme.textSecondary,
                fontWeight: 400,
                lineHeight: 1.8,
                textTransform: "capitalize",
              }}
            >
              {stat.label}
            </p>

            {/* Optional vertical divider (visible on desktop) */}
            {index < stats.length - 1 && (
              <div
                className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 h-10 border-l opacity-20"
                style={{ borderColor: theme.accent }}
              ></div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsStrip;
