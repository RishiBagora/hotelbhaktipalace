import React from "react";
import { motion } from "framer-motion";

const AboutGallery = () => {
  const images = [
    "/images/IMG-20251117-WA0029.jpg",
    "/images/IMG-20251117-WA0031.jpg",
    "/images/IMG-20251117-WA0030.jpg",
    "/images/IMG-20251117-WA0016.jpg",
    "/images/IMG-20251117-WA0017.jpg",
    "/images/IMG-20251117-WA0018.jpg",
  ];

  return (
    <section className="bg-white py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-14">
        {/* Heading */}
        <p className="uppercase tracking-[0.35em] text-[#c49a6c] text-xs mb-4">
          A Visual Experience
        </p>

        <h2
          className="text-4xl md:text-5xl font-semibold text-[#1a1a1a]"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Moments Inside Bhakti Palace
        </h2>

        <p className="mt-6 max-w-2xl text-[#6b6b6b] leading-relaxed">
          A calm, uninterrupted visual journey through our thoughtfully
          designed spaces.
        </p>
      </div>

      {/* Continuous Loop */}
     {/* Continuous Loop */}
<div className="relative overflow-hidden">
  <motion.div
    className="flex gap-5 md:gap-8 w-max"
    animate={{ x: ["0%", "-50%"] }}
    transition={{
      duration: 80, // slower on mobile
      ease: "linear",
      repeat: Infinity,
    }}
  >
    {[...images, ...images].map((src, index) => (
      <div
        key={index}
        className="
          min-w-[85vw]
          sm:min-w-[70vw]
          md:min-w-[45vw]
          lg:min-w-[35vw]
          h-[300px]
          sm:h-[340px]
          md:h-[380px]
          lg:h-[420px]
          rounded-3xl
          overflow-hidden
          group
        "
      >
        <img
          src={src}
          alt=""
          className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out md:group-hover:scale-[1.06]"
        />
      </div>
    ))}
  </motion.div>
</div>

    </section>
  );
};

export default AboutGallery;
