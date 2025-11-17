// DiningSection.jsx
import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * DiningSection
 * Ultra-luxury Dining section: editorial, premium, cinematic slideshow, mandala watermark.
 *
 * Requirements:
 * - TailwindCSS configured
 * - framer-motion installed: npm i framer-motion
 * - Place your media files at the given paths or change slideshowMedia accordingly.
 *
 * Notes:
 * - Icons are purposely commented out where you can plug react-icons.
 * - All external links open in new tab (secure).
 */

/* ---------------------------
   Inline Mandala SVG components
   --------------------------- */
const MandalaLarge = ({ className = "", style }) => (
  <svg
    className={className}
    style={style}
    width="1200"
    height="1200"
    viewBox="0 0 1200 1200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <g opacity="0.9" stroke="#c49a6c" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="600" cy="600" r="540" />
      <circle cx="600" cy="600" r="420" />
      <circle cx="600" cy="600" r="300" />
      <circle cx="600" cy="600" r="180" />
      <g transform="translate(600,600)">
        {[...Array(12)].map((_, i) => {
          const angle = (i / 12) * Math.PI * 2;
          const x = Math.cos(angle) * 420;
          const y = Math.sin(angle) * 420;
          return (
            <path
              key={i}
              d={`M ${Math.cos(angle) * 180} ${Math.sin(angle) * 180} 
                  C ${Math.cos(angle) * 260} ${Math.sin(angle) * 260} ${x} ${y} ${x} ${y}`}
              transform={`rotate(${(i * 360) / 12})`}
              opacity="0.9"
            />
          );
        })}
      </g>
      <circle cx="600" cy="600" r="12" />
    </g>
  </svg>
);

const MandalaSmall = ({ className = "", style }) => (
  <svg
    className={className}
    style={style}
    width="700"
    height="700"
    viewBox="0 0 700 700"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <g opacity="0.95" stroke="#c49a6c" strokeWidth="0.55" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="350" cy="350" r="320" />
      <circle cx="350" cy="350" r="220" />
      <circle cx="350" cy="350" r="140" />
      <g transform="translate(350,350)">
        {[...Array(8)].map((_, i) => {
          return (
            <path
              key={i}
              d={`M ${Math.cos((i / 8) * Math.PI * 2) * 120} ${Math.sin((i / 8) * Math.PI * 2) * 120} 
                  L ${Math.cos(((i + 0.5) / 8) * Math.PI * 2) * 200} ${Math.sin(((i + 0.5) / 8) * Math.PI * 2) * 200}`}
              opacity="0.95"
            />
          );
        })}
      </g>
    </g>
  </svg>
);

/* ---------------------------
   Data (media + highlights)
   --------------------------- */
const slideshowMedia = [
  { type: "video", src: "/images/pangatvideo.mp4", alt: "Pangat restaurant ambience video" },
  { type: "image", src: "/images/pangat1.jpg", alt: "Pangat dining hall" },
  { type: "video", src: "/images/pangatvideo2.mp4", alt: "Pangat energetic video" },
];

const diningHighlights = [
  { title: "Authentic Indian Flavours", description: "Royal recipes reimagined with local seasonal produce." },
  { title: "Pure Vegetarian Cuisine", description: "Thoughtful compositions, pristine ingredients, soulful plating." },
  { title: "Regal, Serene Ambiance", description: "A dining experience that feels like a quiet royal ritual." },
];

/* ---------------------------
   Framer Motion variants
   --------------------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 26, filter: "blur(6px)" },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: i * 0.08, duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  }),
};

const crossfade = {
  enter: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, scale: 1.03, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

/* ---------------------------
   Component
   --------------------------- */
export default function DiningSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const mediaRefs = useRef([]);
  const mountedRef = useRef(false);

  // autoplay timer ref
  const timerRef = useRef(null);

  // slideshow controls
  const nextSlide = useCallback(() => {
    setCurrentIndex((s) => (s === slideshowMedia.length - 1 ? 0 : s + 1));
  }, []);

  const prevSlide = () => {
    setCurrentIndex((s) => (s === 0 ? slideshowMedia.length - 1 : s - 1));
  };

  const goToSlide = (i) => {
    setCurrentIndex(i);
  };

  // autoplay + video play/pause handling
  useEffect(() => {
    mountedRef.current = true;

    const playPauseVideos = () => {
      mediaRefs.current.forEach((el, idx) => {
        if (!el) return;
        if (el.tagName === "VIDEO") {
          if (idx === currentIndex) {
            el.play().catch(() => {
              // autoplay might be blocked, ignore
            });
          } else {
            el.pause();
            try { el.currentTime = 0; } catch(e) {}
          }
        }
      });
    };

    playPauseVideos();

    // auto-advance
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(nextSlide, 5000);

    return () => clearTimeout(timerRef.current);
  }, [currentIndex, nextSlide]);

  // keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [nextSlide]);

  /* ---------------------------
     Parallax: mandala translates on scroll
     --------------------------- */
  const { scrollYProgress } = useScroll();
  // map scroll [0..1] to small translate values
  const mandalaY = useTransform(scrollYProgress, [0, 1], [0, -30]); // big layer moves -30px across page
  const mandalaSmallY = useTransform(scrollYProgress, [0, 1], [0, -18]); // small moves less

  /* ---------------------------
     Local utilities & classes
     --------------------------- */
  const mediaClass = "absolute inset-0 w-full h-full object-cover";

  return (
    <section className="relative overflow-hidden bg-[#faf9f6] font-sans antialiased">
      {/* --- global style tweaks for editorial feel --- */}
      <style>{`
        /* fluid typography for headings */
        .clamp-heading { font-family: 'Playfair Display', serif; font-weight:600; font-feature-settings: "kern"; }
        .clamp-sub { font-family: 'Inter', sans-serif; font-weight:300; }
        /* subtle focus ring for keyboard nav */
        .focus-ring:focus { outline: none; box-shadow: 0 0 0 4px rgba(196,154,108,0.12); border-radius: 9999px; }
      `}</style>

      {/* --- MANDALA LAYERS (absolute, parallax, subtle rotation) --- */}
      <motion.div
        style={{ y: mandalaY }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.08] mix-blend-multiply"
        aria-hidden="true"
      >
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 3 }} // tiny initial rotate to give life
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 40, ease: "linear" }}
          className="w-[520px] md:w-[760px]"
        >
          <MandalaLarge />
        </motion.div>
      </motion.div>

      <motion.div
        style={{ y: mandalaSmallY }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.06] mix-blend-screen"
        aria-hidden="true"
      >
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: -2 }} // counter-rotate small mandala
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 58, ease: "linear" }}
          className="w-[320px] md:w-[460px]"
        >
          <MandalaSmall />
        </motion.div>
      </motion.div>

      {/* GOLD HALO behind heading */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[220px] h-[220px] rounded-full blur-3xl opacity-30 pointer-events-none"
           style={{ background: "radial-gradient(circle, rgba(196,154,108,0.22), rgba(196,154,108,0.02))" }} />

      {/* Main container */}
      <div className="container mx-auto max-w-7xl px-5 pb-20 sm:px-6 lg:px-8 lg:pb-28 relative z-10">
        {/* Heading */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
          <motion.p
            variants={fadeUp}
            custom={0}
            className="text-sm font-semibold text-[#c49a6c] uppercase tracking-widest text-center mb-3"
          >
            OUR DINING
          </motion.p>

          <motion.h2
            variants={fadeUp}
            custom={1}
            className="clamp-heading text-center text-3xl md:text-5xl lg:text-[56px] leading-tight text-[#1a1a1a] mb-3"
            style={{ letterSpacing: "0.01em" }}
          >
            Pangat — The Royal Vegetarian Experience
          </motion.h2>

          <motion.div variants={fadeUp} custom={2} className="mx-auto w-24 h-1 bg-[#c49a6c] rounded-full mb-6" />

          <motion.p
            variants={fadeUp}
            custom={3}
            className="clamp-sub max-w-3xl mx-auto text-center text-base md:text-lg text-[#6c6c6c] leading-relaxed"
            style={{ lineHeight: 1.85 }}
          >
            Step into Pangat — where royal kitchens meet mindful hospitality. Seasonal, vegetarian, and deeply rooted in Rajasthani flavors served with editorial calm.
          </motion.p>
        </motion.div>

        {/* Highlights — Editorial style, no boxes */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {diningHighlights.map((h, idx) => (
            <motion.article key={idx} variants={fadeUp} custom={4 + idx} className="text-center md:text-left">
              {/* Uncomment and pass icons if using react-icons */}
              {/* <div className="text-[#c49a6c] mb-2"><YourIcon className="w-6 h-6" /></div> */}
              <h3 className="font-serif text-xl md:text-2xl text-[#1a1a1a] mb-2" style={{ fontFamily: "Playfair Display, serif" }}>
                {h.title}
              </h3>
              {/* thin gold underline style */}
              <div className="w-10 h-[2px] bg-[#c49a6c] mx-auto md:mx-0 rounded-sm mb-3" />
              <p className="text-[#6c6c6c] text-sm md:text-base leading-relaxed">{h.description}</p>
            </motion.article>
          ))}
        </motion.div>

        {/* Slideshow (cinematic) */}
        <div className="relative mt-16 max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl" style={{ paddingTop: "42%", /* aspect ratio approx */ }}>
            {/* slides container positioned absolute */}
            <div className="absolute inset-0">
              {slideshowMedia.map((media, i) => {
                const isActive = i === currentIndex;
                // animation wrapper using Framer Motion for crossfade + subtle scale
                return (
                  <motion.div
                    key={i}
                    initial="exit"
                    animate={isActive ? "enter" : "exit"}
                    variants={crossfade}
                    className={`absolute inset-0`}
                    style={{ willChange: "opacity, transform" }}
                  >
                    {media.type === "image" ? (
                      <img
                        ref={(el) => (mediaRefs.current[i] = el)}
                        src={media.src}
                        alt={media.alt}
                        className={`${mediaClass} object-cover`}
                        loading="lazy"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "https://placehold.co/1000x600/faf9f6/c49a6c?text=Pangat";
                        }}
                      />
                    ) : (
                      <video
                        ref={(el) => (mediaRefs.current[i] = el)}
                        src={media.src}
                        className={`${mediaClass} object-cover`}
                        muted
                        loop
                        playsInline
                        // video tag fallback handled earlier
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Cinematic soft overlay (subtle gradient for readability) */}
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0) 40%), linear-gradient(to right, rgba(250,245,239,0.7), rgba(250,245,239,0.05))",
              }}
            />

            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              aria-label="Previous"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 focus-ring"
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/80 backdrop-blur-sm border border-[#c49a6c]/20">
                <svg className="w-5 h-5 text-[#6c4f31]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15 19l-7-7 7-7" />
                </svg>
              </div>
            </button>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              aria-label="Next"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 focus-ring"
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/80 backdrop-blur-sm border border-[#c49a6c]/20">
                <svg className="w-5 h-5 text-[#6c4f31]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>

            {/* Pagination (gold ring style) */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-3">
              {slideshowMedia.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`w-3.5 h-3.5 rounded-full flex items-center justify-center focus-ring ${
                    i === currentIndex ? "bg-[#c49a6c] scale-110 ring-2 ring-[#c49a6c]/25" : "bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Explore Button */}
          <div className="text-center mt-8">
            <a
              href="/pangat"
              className="inline-block px-10 py-4 rounded-full text-white font-semibold text-lg"
              style={{
                background: "linear-gradient(180deg,#c49a6c,#e0c1a2)",
                boxShadow: "0 6px 30px rgba(196,154,108,0.08)",
                transition: "transform .28s ease, box-shadow .28s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-3px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              Explore Pangat
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
