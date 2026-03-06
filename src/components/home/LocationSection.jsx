import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Navigation, Landmark, Footprints } from "lucide-react";

const LocationSection = () => {
  return (
    <section className="relative bg-[#faf9f6] py-16 sm:py-20 lg:py-28 px-5 sm:px-10 lg:px-20 overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(196,154,108,0.15),transparent_60%)]"></div>

      {/* decorative cow */}
      <div className="absolute inset-0 flex justify-center items-center opacity-10 pointer-events-none">
        <img
          src="/images/cowimg.png"
          alt="Pichwai Cow Art"
          className="max-w-[320px] sm:max-w-[450px] md:max-w-[600px] object-contain"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-14 lg:gap-16 items-center">

        {/* LEFT SIDE */}
        <div className="text-center md:text-left">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-[11px] sm:text-xs tracking-[0.35em] uppercase text-[#c49a6c] mb-3"
          >
            Our Location
          </motion.p>

          <div className="h-[1px] w-16 sm:w-20 bg-gradient-to-r from-transparent via-[#c49a6c] to-transparent mb-6 md:mb-8 mx-auto md:mx-0"></div>

          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1a1a1a] mb-6 md:mb-8 leading-tight"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            At the Heart of Nathdwara’s Divine Charm
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-[#6c6c6c] leading-relaxed mb-8 md:mb-10 max-w-xl mx-auto md:mx-0">
            Nestled in the spiritual town of Nathdwara,{" "}
            <span className="text-[#c49a6c] font-semibold">
              Hotel Bhakti
            </span>{" "}
            offers a peaceful retreat just steps away from the revered
            Shree Nath Ji Temple. Surrounded by vibrant markets and
            devotional energy, guests can experience the true soul of
            Nathdwara.
          </p>

          {/* highlight badge */}
          <div className="inline-flex flex-wrap items-center justify-center md:justify-start gap-3 px-5 sm:px-7 py-3 sm:py-4 rounded-full bg-white border border-[#c49a6c]/40 shadow-md">

            <Footprints className="text-[#c49a6c]" size={18} />

            <span className="text-sm sm:text-base font-medium text-[#800000]">
             50 Steps from Shree Nath Ji Temple
            </span>

          </div>

        </div>

        {/* RIGHT SIDE CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-[#c49a6c]/20"
        >

          {/* heading */}
          <div className="flex items-center gap-3 mb-5">

            <MapPin className="text-[#c49a6c]" size={20} />

            <h3 className="text-lg sm:text-xl font-semibold text-[#1a1a1a]">
              Prime Location
            </h3>

          </div>

          <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
            Our hotel provides quick access to Nathdwara’s major spiritual
            landmarks, cultural attractions, and vibrant markets —
            perfect for pilgrims and travelers alike.
          </p>

          {/* details grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-sm">

            <div className="flex items-center gap-3">
              <Landmark size={18} className="text-[#c49a6c]" />
              <span>Shree Nath Ji Temple</span>
            </div>

            <div className="flex items-center gap-3">
              <Clock size={18} className="text-[#c49a6c]" />
              <span>2 Min Walk</span>
            </div>

            <div className="flex items-center gap-3">
              <Navigation size={18} className="text-[#c49a6c]" />
              <span>Nathdwara Market</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-[#c49a6c]" />
              <span>Central Location</span>
            </div>

          </div>

          <div className="h-[1px] bg-gray-200 my-6 sm:my-8"></div>

          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
            Hotel Bhakti <br />
            Near Shree Nath Ji Temple <br />
            Nathdwara, Rajasthan – India
          </p>

        </motion.div>

      </div>
    </section>
  );
};

export default LocationSection;