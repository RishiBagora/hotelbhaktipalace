import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center">

      {/* ✅ Background Image (LCP optimized) */}
      <img
        src="https://res.cloudinary.com/dukiisacw/image/upload/f_auto,q_auto:eco,w_1200,h_700,c_fill,g_auto/heroimg_q0cfsa.png"
        srcSet="
          https://res.cloudinary.com/dukiisacw/image/upload/f_auto,q_auto:eco,w_500/heroimg_q0cfsa.png 500w,
          https://res.cloudinary.com/dukiisacw/image/upload/f_auto,q_auto:eco,w_900/heroimg_q0cfsa.png 900w,
          https://res.cloudinary.com/dukiisacw/image/upload/f_auto,q_auto:eco,w_1200/heroimg_q0cfsa.png 1200w
        "
        sizes="100vw"
        fetchpriority="high"
        decoding="async"
        alt="Hotel Bhakti Luxury Suite"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* ✅ Overlay (keep it simple) */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* ✅ Content */}
      <div className="relative -top-50  z-10 flex flex-col items-center px-4">

        {/* Logo */}
        <img
          src="https://res.cloudinary.com/dukiisacw/image/upload/f_auto,q_auto,w_400/hotellogo_lbvsre.png"
          alt="Hotel Bhakti Palace"
          className="w-40 md:w-64 lg:w-72 object-contain mb-4"
        />

        {/* Tagline */}
        <p className="text-white text-lg md:text-2xl tracking-[2px] font-light">
          Stay Close To Shrinath Ji
        </p>

        {/* Divider */}
        <div className="w-20 h-[1px] bg-[#c49a6c] mt-4 opacity-60"></div>
      </div>

    </section>
  );
};

export default Hero;