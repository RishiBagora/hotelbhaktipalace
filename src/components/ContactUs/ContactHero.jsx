// ContactHero.jsx
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * ContactHero
 * - Option A: Soft luxury texture background with subtle parallax
 * - Staggered Framer Motion reveal (subtitle -> line -> title -> paragraph)
 * - Uses CSS variables for theme consistency
 *
 * Usage:
 * <ContactHero />
 *
 * Notes:
 * - Place a texture image at /public/images/luxury-texture.jpg
 * - Install framer-motion: npm install framer-motion
 * - This component uses Tailwind classes; ensure Tailwind is configured in your project.
 */

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
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

const ContactHero = () => {
  // Parallax: map scroll progress to a small translateY for background
  const { scrollYProgress } = useScroll();
  // Map progress [0, 1] -> [-20, 20] px (subtle)
  const bgY = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  return (
    <section
      aria-label="Contact hero for Hotel Bhakyi Palace"
      className="relative overflow-hidden flex items-center justify-center text-center"
      style={{
        // Theme variables (can also be pulled from Tailwind config)
        "--background": "#faf5ef",
        "--text-primary": "#1a1a1a",
        "--text-secondary": "#6d6d6d",
        "--accent": "#c49a6c",
        minHeight: "60vh",
        padding: "80px 20px",
        backgroundColor: "var(--background)",
      }}
    >
      {/* Decorative parallax background layer (image + subtle gradient fallback)
          aria-hidden because it's decorative */}
      <motion.div
        aria-hidden="true"
        style={{
          y: bgY,
          backgroundImage:
            "url('/images/luxury-texture.jpg'), linear-gradient(180deg, #fbf6f0 0%, #f6efe8 100%)",
          backgroundSize: "cover, cover",
          backgroundPosition: "center center, center center",
          backgroundRepeat: "no-repeat",
        }}
        className="absolute inset-0 transform-gpu will-change-transform"
      >
        {/* Optional soft overlay to ensure text contrast */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(250,245,239,0.5)" }}
        />
      </motion.div>

      {/* Content wrapper */}
      <motion.div
        // keep content above background
        className="relative z-10 max-w-3xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.45 }}
      >
        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-[var(--accent)] uppercase tracking-[0.25em] text-sm font-semibold mb-3"
          style={{ letterSpacing: "0.25em" }}
        >
          Get In Touch
        </motion.p>

        {/* Accent gold line */}
        <motion.div
          variants={itemVariants}
          className="w-12 h-[2px] bg-[var(--accent)] mx-auto mb-6 rounded-full relative"
          aria-hidden="true"
        >
          {/* Optional shimmer (commented): a subtle gradient moving across the line.
              Uncomment & tweak if you want shimmer (requires extra CSS or animation). */}
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={itemVariants}
          className="text-3xl md:text-6xl font-serif font-semibold text-[var(--text-primary)] mb-4 leading-tight"
          style={{ fontFamily: "Playfair Display, serif", lineHeight: 1.02 }}
        >
          We’re Here to Assist You
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          variants={itemVariants}
          className="text-[var(--text-secondary)] text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
          style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.8 }}
        >
          Whether you have a booking query, need assistance, or want to know more
          about Hotel Bhakyi Palace, feel free to connect with us — our team is always
          ready to help.
        </motion.p>
      </motion.div>

      {/* Decorative soft vignette to add focus (aria-hidden) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 40% at 50% 20%, rgba(255,255,255,0.3), rgba(250,245,239,0) 40%), linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0.02))",
        }}
      />
    </section>
  );
};

export default ContactHero;
