import React from "react";

const Background = () => {
  return (
    <section className="relative  w-full h-screen overflow-hidden bg-black flex items-center justify-center">

      {/* 1. Cinematic Background Image */}
      <div className="absolute inset-0 overflow-hidden">
       <img
  src="https://res.cloudinary.com/dukiisacw/image/upload/f_auto,q_auto:eco,w_1200,h_700,c_fill,g_auto/heroimg_q0cfsa.png"
  fetchpriority="high"
  decoding="async"
  alt="Hotel Bhakti Luxury Suite"
  className="absolute inset-0 w-full h-full object-cover"
/>
        {/* Layered Overlays for Depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30"></div>
      </div>



      {/* 3. Bottom Glass Floating Element (Optional - for Temple Distance)
      <div className="absolute bottom-12 right-0 md:right-12 z-20 animate-fadeInRight">
        <div className="backdrop-blur-md bg-white/5 border-l border-white/20 px-8 py-4">
          <p className="text-white/50 text-[10px] uppercase tracking-widest mb-1">Location</p>
          <p className="text-white font-light italic">50 Steps from Shreenath Ji Temple</p>
        </div>
      </div> */}

      {/* 4. Smooth Animations */}
      <style jsx>{`
        @keyframes luxuryZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .animate-luxuryZoom {
          animation: luxuryZoom 30s ease-out infinite alternate;
        }

        .animate-fadeInUp {
          animation: fadeInUp 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .animate-fadeInRight {
            animation: fadeInRight 1.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .delay-100 { animation-delay: 0.2s; opacity: 0; }
        .delay-200 { animation-delay: 0.4s; opacity: 0; }
        .delay-300 { animation-delay: 0.6s; opacity: 0; }
      `}</style>

    </section>
  );
};

export default Background;