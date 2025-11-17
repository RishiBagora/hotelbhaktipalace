import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

const theme = {
  background: "#faf9f6",
  textPrimary: "#1a1a1a",
  textSecondary: "#6b6b6b",
  accent: "#c49a6c",
};

const testimonials = [
  {
    quote:
      "My stay at Hotel Bhakyi Palace was truly divine — the warmth, cleanliness and hospitality made my visit unforgettable.",
    author: "Priya Sharma",
    location: "Ahmedabad, Gujarat",
  },
  {
    quote:
      "Pangat delivers an exceptional dining experience — rich flavours, elegant ambiance, and true Rajasthani heritage.",
    author: "Vikas Mehta",
    location: "Jaipur, Rajasthan",
  },
  {
    quote:
      "A peaceful and spiritually uplifting stay. Perfect for anyone visiting Shree Nath Ji Temple.",
    author: "Ruchi Patel",
    location: "Surat, Gujarat",
  },
];

export default function TestimonialSection() {
  return (
    <section
      className="relative py-32 overflow-hidden"
      style={{ background: theme.background }}
    >
      {/* Header */}
      <div className="text-center">
        <p
          className="uppercase tracking-[0.25em] text-sm font-semibold"
          style={{ color: theme.accent }}
        >
          Guest Reviews
        </p>

        <h2
          className="text-4xl md:text-6xl font-serif mt-2 mb-4"
          style={{
            color: theme.textPrimary,
            fontFamily: "Playfair Display, serif",
          }}
        >
          What Our Guests Say
        </h2>

        <div
          className="h-[2px] w-20 mx-auto mb-20 rounded-full"
          style={{ background: theme.accent }}
        />
      </div>

      {/* Swiper */}
      <div className="max-w-4xl mx-auto px-6">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          loop
          pagination={{ clickable: true }}
          slidesPerView={1}
          speed={700}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex flex-col items-center text-center min-h-[260px] md:min-h-[300px] px-4 md:px-16"
              >
                <p
                  className="text-2xl md:text-3xl italic font-serif mb-8 max-w-3xl leading-relaxed"
                  style={{
                    color: theme.textPrimary,
                    fontFamily: "Playfair Display, serif",
                    lineHeight: 1.7,
                  }}
                >
                  “{t.quote}”
                </p>

                <h3
                  className="text-lg font-semibold tracking-wide"
                  style={{ color: theme.textPrimary }}
                >
                  {t.author}
                </h3>

                <p className="text-sm mt-1" style={{ color: theme.accent }}>
                  {t.location}
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Marble Texture */}
      <div
        className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/marble.png')] pointer-events-none"
      />
    </section>
  );
}
