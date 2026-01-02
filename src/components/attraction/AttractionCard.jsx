import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

const AttractionCard = ({ item, index }) => {
  const isReverse = index % 2 !== 0;

  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <Link to={`/attractions/${item.slug}`} className="block group">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* IMAGE */}
          <div
            className={`relative overflow-hidden rounded-3xl ${
              isReverse ? "md:order-2" : ""
            }`}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[260px] sm:h-[340px] md:h-[420px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

            <div className="absolute bottom-5 left-5 right-5">
              <div className="flex flex-wrap gap-6 px-5 py-4 rounded-2xl bg-black/30 backdrop-blur-sm">
                {item.distance && (
                  <div>
                    <p className="text-[11px] uppercase tracking-widest text-white/70">
                      Distance
                    </p>
                    <p className="text-white font-medium">{item.distance}</p>
                  </div>
                )}

                {item.travelTime && (
                  <div>
                    <p className="text-[11px] uppercase tracking-widest text-white/70">
                      Travel Time
                    </p>
                    <p className="text-white font-medium">{item.travelTime}</p>
                  </div>
                )}

                {item.category && (
                  <div className="ml-auto text-right">
                    <p className="text-[11px] uppercase tracking-widest text-white/70">
                      Category
                    </p>
                    <p className="text-[#c49a6c] font-semibold">
                      {item.category}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* TEXT */}
          <div className="flex flex-col gap-6 max-w-xl">
            <p className="text-xs uppercase tracking-[0.25em] text-[#c49a6c]">
              {item.category}
            </p>

            <h3 className="text-2xl md:text-3xl font-serif text-[#1a1a1a] group-hover:underline decoration-[#c49a6c]/60 underline-offset-4">
              {item.name}
            </h3>

            <p className="text-base md:text-lg text-[#6d6d6d]" style={{ lineHeight: 1.9 }}>
              {item.shortDescription}
            </p>

            <span className="inline-block text-sm tracking-wide text-[#c49a6c]">
              View attraction details →
            </span>
          </div>
        </div>

        <div className="mt-24 h-px bg-black/10" />
      </Link>
    </motion.article>
  );
};

export default AttractionCard;
