import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

/* ---------------------------
   Data
--------------------------- */
const slideshowMedia = [
  { type: "video", src: "/images/pangatvideo.mp4", alt: "Pangat ambience" },
  { type: "image", src: "/images/pangat1.jpg", alt: "Pangat dining hall" },
  { type: "video", src: "/images/pangatvideo2.mp4", alt: "Pangat kitchen ritual" },
];

const diningHighlights = [
  {
    title: "Authentic Indian Flavours",
    description:
      "Royal vegetarian recipes prepared with seasonal produce and traditional techniques.",
  },
  {
    title: "Pure Vegetarian Cuisine",
    description:
      "Thoughtfully composed dishes that respect tradition, purity, and balance.",
  },
  {
    title: "Calm Regal Ambiance",
    description:
      "A dining space designed for unhurried meals and quiet moments of indulgence.",
  },
];

/* ---------------------------
   Motion
--------------------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const slideFade = {
  initial: { opacity: 0, scale: 1.02 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1.02 },
};

export default function DiningSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const mediaRefs = useRef([]);
  const timerRef = useRef(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((s) => (s === slideshowMedia.length - 1 ? 0 : s + 1));
  }, []);

  const prevSlide = () => {
    setCurrentIndex((s) => (s === 0 ? slideshowMedia.length - 1 : s - 1));
  };

  useEffect(() => {
    mediaRefs.current.forEach((el, idx) => {
      if (!el || el.tagName !== "VIDEO") return;
      idx === currentIndex ? el.play().catch(() => {}) : el.pause();
    });

    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(nextSlide, 6000);
    return () => clearTimeout(timerRef.current);
  }, [currentIndex, nextSlide]);

  const { scrollYProgress } = useScroll();
  const bgShift = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section className="relative bg-[#faf9f6] overflow-hidden">
      {/* Soft background wash */}
      <motion.div
        style={{ y: bgShift }}
        className="absolute inset-0 bg-gradient-to-b from-[#faf5ef] via-[#faf9f6] to-transparent opacity-60"
      />

      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">

        {/* ================= HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className="block text-xs tracking-[0.35em] uppercase text-[#c49a6c] mb-4"
          >
            Our Dining
          </motion.span>

          <motion.h2
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            className="text-3xl md:text-5xl font-serif text-[#1a1a1a]"
          >
            Pangat — A Thoughtful Vegetarian Table
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="visible"
            className="mt-6 text-[#6c6c6c] text-base md:text-lg leading-relaxed"
          >
            Rooted in Indian culinary traditions, Pangat offers a refined
            vegetarian dining experience shaped by calm rituals and honest
            flavours.
          </motion.p>
        </div>

        {/* ================= HIGHLIGHTS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto mb-24">
          {diningHighlights.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
            >
              <div className="w-10 h-[1px] bg-[#c49a6c] mb-5" />
              <h3 className="font-serif text-xl text-[#1a1a1a] mb-3">
                {item.title}
              </h3>
              <p className="text-[#6c6c6c] leading-relaxed text-sm md:text-base">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ================= SLIDER ================= */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl bg-black">

            <AnimatePresence>
              {slideshowMedia.map((media, i) =>
                i === currentIndex ? (
                  <motion.div
                    key={i}
                    variants={slideFade}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 1.1, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    {media.type === "image" ? (
                      <img
                        ref={(el) => (mediaRefs.current[i] = el)}
                        src={media.src}
                        alt={media.alt}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <video
                        ref={(el) => (mediaRefs.current[i] = el)}
                        src={media.src}
                        className="w-full h-full object-cover"
                        muted
                        playsInline
                        loop
                      />
                    )}
                  </motion.div>
                ) : null
              )}
            </AnimatePresence>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/10 to-transparent pointer-events-none" />

            {/* Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/80 backdrop-blur flex items-center justify-center"
            >
              ‹
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/80 backdrop-blur flex items-center justify-center"
            >
              ›
            </button>
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <a
              href="/pangat"
              className="inline-block px-10 py-4 rounded-full text-white text-sm tracking-wide"
              style={{
                background: "linear-gradient(180deg,#c49a6c,#e0c1a2)",
                boxShadow: "0 8px 30px rgba(196,154,108,.12)",
              }}
            >
              Discover Pangat
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
