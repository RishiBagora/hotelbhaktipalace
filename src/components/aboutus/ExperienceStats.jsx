import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const ExperienceStats = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const controls = useAnimation();
  const sectionRef = useRef(null);

  // Trigger animations when the section enters viewport
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

  // Count-up animation hook
  const useCountUp = (end, duration = 1500) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      if (hasAnimated) {
        let start = 0;
        const increment = end / (duration / 16);
        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            clearInterval(timer);
            setCount(end);
          } else {
            setCount(Math.ceil(start));
          }
        }, 16);
      }
    }, [hasAnimated, end, duration]);
    return count;
  };

  // Stats data
  const stats = [
    { number: 10, suffix: "+", label: "Years of Exceptional Service" },
    { number: 12000, suffix: "+", label: "Happy Guests Served" },
    { number: 95, suffix: "%", label: "Average Occupancy Rate" },
    { number: 4.9, suffix: "★", label: "Guest Satisfaction Rating" },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-[#1a1a1a] text-center text-white py-24 md:py-28 overflow-hidden"
    >
      {/* --- Container --- */}
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading Section */}
        <motion.p
          className="uppercase tracking-[0.25em] text-[#c49a6c] text-sm font-semibold mb-3"
          style={{ fontFamily: "Inter, sans-serif" }}
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.8 }}
        >
          Our Experience
        </motion.p>

        <motion.h2
          className="text-3xl md:text-5xl font-semibold mb-6 text-white"
          style={{ fontFamily: "Playfair Display, serif" }}
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Luxury Refined Through Experience
        </motion.h2>

        <motion.p
          className="text-[#dcdcdc] text-base md:text-lg max-w-3xl mx-auto mb-12 leading-relaxed"
          style={{ fontFamily: "Inter, sans-serif", lineHeight: "1.8" }}
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Over the years, Hotel Bhakyi Palace has served thousands of guests with
          devotion, elegance, and unmatched hospitality. Our journey continues to
          set new benchmarks in Nathdwara’s hospitality landscape.
        </motion.p>

        {/* --- Stats Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {stats.map((stat, index) => {
            // Optional count-up for numbers
            const count = useCountUp(stat.number);
            return (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center space-y-2 opacity-0"
                initial={{ opacity: 0, y: 40 }}
                animate={controls}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
              >
                {/* Number */}
                <h3
                  className="text-4xl md:text-5xl font-semibold text-[#c49a6c]"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {hasAnimated ? `${count}${stat.suffix}` : `0${stat.suffix}`}
                </h3>

                {/* Label */}
                <p
                  className="text-[#dcdcdc] text-sm md:text-base tracking-wide"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceStats;
