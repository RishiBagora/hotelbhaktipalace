import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[90vh] md:h-screen overflow-hidden bg-black flex items-start justify-center pt-[120px] md:pt-[160px]">

      {/* 🔥 HERO IMAGE (LCP OPTIMIZED) */}
      <img
        src="https://res.cloudinary.com/dukiisacw/image/upload/f_auto,q_auto:low,dpr_auto,w_1200,c_fill,g_auto/heroimg_q0cfsa.png"
        srcSet="
          https://res.cloudinary.com/dukiisacw/image/upload/f_auto,q_auto:low,dpr_auto,w_400/heroimg_q0cfsa.png 400w,
          https://res.cloudinary.com/dukiisacw/image/upload/f_auto,q_auto:low,dpr_auto,w_800/heroimg_q0cfsa.png 800w,
          https://res.cloudinary.com/dukiisacw/image/upload/f_auto,q_auto:low,dpr_auto,w_1200/heroimg_q0cfsa.png 1200w
        "
        sizes="100vw"
        fetchpriority="high"
        loading="eager"
        decoding="async"
        alt="Hotel Bhakti Luxury Suite"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-4 text-center">

        {/* Logo (lazy so it doesn’t block LCP) */}
        <img
          src="https://res.cloudinary.com/dukiisacw/image/upload/f_auto,q_auto,w_400/hotellogo_lbvsre.png"
          alt="Hotel Bhakti Palace"
          loading="lazy"
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