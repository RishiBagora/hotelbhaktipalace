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
      "My stay at Hotel Bhakti Palace was truly divine — the warmth, cleanliness and hospitality made my visit unforgettable.",
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
      className="relative py-28 md:py-36 overflow-hidden"
      style={{ background: theme.background }}
    >
      {/* ===== HEADER ===== */}
      <div className="text-center mb-20 px-6">
        <p
          className="uppercase tracking-[0.35em] text-xs font-medium mb-3"
          style={{ color: theme.accent }}
        >
          Guest Reviews
        </p>

        <h2
          className="text-4xl md:text-6xl font-serif mb-5"
          style={{
            color: theme.textPrimary,
            fontFamily: "Playfair Display, serif",
          }}
        >
          Words From Our Guests
        </h2>

        <div
          className="h-[2px] w-20 mx-auto rounded-full"
          style={{ background: theme.accent }}
        />
      </div>

      {/* ===== SWIPER ===== */}
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 6500, disableOnInteraction: false }}
          loop
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet !bg-[#c49a6c]/40",
            bulletActiveClass: "!bg-[#c49a6c]",
          }}
          slidesPerView={1}
          speed={900}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <motion.div
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true }}
                className="relative flex flex-col items-center text-center min-h-[280px] px-4 md:px-14"
              >
                {/* Google Badge */}
                <div className="absolute bottom-0 right-0 flex items-center gap-1 text-xs text-[#6b6b6b]">
                  <img
                    src="https://s3-alpha.figma.com/hub/file/2729744958/2a5758d6-4edb-4047-87bb-e6b94dbbbab0-cover.png"
                    alt="Google Reviews"
                    className="w-7"
                  />
                  <span className="tracking-tight">Google Review</span>
                </div>

                {/* Quote */}
                <p
                  className="text-xl md:text-3xl italic font-serif mb-10 leading-relaxed max-w-3xl"
                  style={{
                    color: theme.textPrimary,
                    fontFamily: "Playfair Display, serif",
                    lineHeight: 1.75,
                  }}
                >
                  “{t.quote}”
                </p>

                {/* Author */}
                <h3
                  className="text-base md:text-lg font-medium tracking-wide"
                  style={{ color: theme.textPrimary }}
                >
                  {t.author}
                </h3>

                <p
                  className="text-sm mt-1 tracking-wide"
                  style={{ color: theme.accent }}
                >
                  {t.location}
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ===== SUBTLE MARBLE TEXTURE ===== */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1323712/pexels-photo-1323712.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')",
        }}
      />
    </section>
  );
}
