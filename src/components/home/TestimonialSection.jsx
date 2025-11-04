import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Theme colors
const theme = {
  background: "#ffffff",
  mutedBackground: "#faf9f6",
  textPrimary: "#1a1a1a",
  textSecondary: "#6b6b6b",
  accent: "#c49a6c",
};

const testimonials = [
  {
    quote:
      "My stay at Hotel Bhakyi Palace was truly divine. The hospitality, cleanliness, and proximity to the Shree Nath Ji Temple made it unforgettable.",
    author: "Priya Sharma",
    location: "Ahmedabad, Gujarat",
    image: "/images/guest1.jpg",
  },
  {
    quote:
      "Pangat’s dining experience was phenomenal — authentic Rajasthani taste with five-star presentation. A must-visit in Nathdwara.",
    author: "Vikas Mehta",
    location: "Jaipur, Rajasthan",
    image: "/images/guest2.jpg",
  },
  {
    quote:
      "Peaceful, spiritual, and premium. The perfect place for anyone visiting Shree Nath Ji Temple.",
    author: "Ruchi Patel",
    location: "Surat, Gujarat",
    image: "/images/guest3.jpg",
  },
];

const TestimonialSection = () => {
  return (
    <section
      className="py-20 text-center relative overflow-hidden"
      style={{
        backgroundColor: theme.mutedBackground,
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Section Label */}
      <div className="mb-3 uppercase tracking-[0.2em] text-sm font-semibold"
        style={{ color: theme.accent }}
      >
        GUEST REVIEWS
      </div>

      {/* Section Title */}
      <h2
        className="text-3xl md:text-5xl font-serif mb-6"
        style={{
          color: theme.textPrimary,
          fontFamily: "Playfair Display, serif",
          fontWeight: 600,
        }}
      >
        What Our Guests Say
      </h2>

      {/* Gold Accent Line */}
      <div
        className="w-16 h-[2px] mx-auto mb-12 rounded-full"
        style={{ backgroundColor: theme.accent }}
      ></div>

      {/* Swiper Carousel */}
      <div className="relative max-w-3xl mx-auto px-6">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          effect="fade"
          loop={true}
          pagination={{ clickable: true }}
          className="select-text"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div
                className="p-8 bg-white rounded-2xl shadow-md flex flex-col items-center text-center transition-all duration-700 ease-in-out"
                style={{
                  color: theme.textPrimary,
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {/* Guest Image */}
                {t.image && (
                  <img
                    src={t.image}
                    alt={t.author}
                    className="w-16 h-16 rounded-full object-cover border-2 mb-4"
                    style={{ borderColor: theme.accent }}
                  />
                )}

                {/* Quote */}
                <p
                  className="text-lg italic leading-relaxed mb-6"
                  style={{
                    color: theme.textSecondary,
                    lineHeight: 1.8,
                  }}
                >
                  “{t.quote}”
                </p>

                {/* Author */}
                <h3
                  className="text-lg font-semibold"
                  style={{ color: theme.textPrimary }}
                >
                  {t.author}
                </h3>

                {/* Location */}
                {t.location && (
                  <p
                    className="text-sm mt-1"
                    style={{ color: theme.accent }}
                  >
                    {t.location}
                  </p>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Subtle Background Overlay (for depth) */}
      <div
        className="absolute inset-0 opacity-[0.07] bg-[url('https://www.transparenttextures.com/patterns/marble.png')] bg-repeat"
        aria-hidden="true"
      ></div>
    </section>
  );
};

export default TestimonialSection;
