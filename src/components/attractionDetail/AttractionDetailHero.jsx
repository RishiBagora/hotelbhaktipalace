import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

const AttractionDetailHero = ({ data }) => {
  if (!data) return null;

  return (
    <section className="bg-[#faf5ef] min-h-[70vh] flex items-center">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT – TEXT */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6"
        >
          {/* CATEGORY */}
          {data.category && (
            <motion.span
              variants={fadeUp}
              className="uppercase tracking-[0.3em] text-xs text-[#c49a6c]"
            >
              {data.category}
            </motion.span>
          )}

          {/* TITLE */}
          <motion.h1
            variants={fadeUp}
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a]"
          >
            {data.name}
          </motion.h1>

          {/* META */}
          {(data.distance || data.travelTime) && (
            <motion.div
              variants={fadeUp}
              className="flex gap-6 text-sm md:text-base text-[#6d6d6d]"
            >
              {data.distance && <span>{data.distance}</span>}
              {data.travelTime && <span className="text-[#c49a6c]">{data.travelTime}</span>}
            </motion.div>
          )}

          {/* DESCRIPTION */}
          {data.shortDescription && (
            <motion.p
              variants={fadeUp}
              className="text-base md:text-lg lg:text-xl text-[#6d6d6d] max-w-xl leading-relaxed"
            >
              {data.shortDescription}
            </motion.p>
          )}
        </motion.div>

        {/* RIGHT – IMAGE */}
        {data.image && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src={data.image}
                alt={data.name}
                className="w-full h-[300px] sm:h-[380px] md:h-[460px] lg:h-[520px] object-cover"
              />
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
};

export default AttractionDetailHero;
