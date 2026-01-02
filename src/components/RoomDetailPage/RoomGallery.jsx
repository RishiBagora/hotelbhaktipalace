import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams } from "react-router-dom";
import roomsData from "../../data/roomsData";

const fade = {
  hidden: { opacity: 0, scale: 1.015 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.6 },
  },
};

const RoomGallery = () => {
  const { slug } = useParams();
  const room = roomsData.find((r) => r.slug === slug);

  if (!room || !room.gallery || room.gallery.length < 2) return null;

  const images = room.gallery;
  const [activeIndex, setActiveIndex] = useState(0);

  // auto rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [images.length]);

  const heroImage = images[activeIndex];
  const thumbnails = images.filter((_, i) => i !== activeIndex);

  return (
    <section className="bg-[#faf5ef] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-8">

        {/* HERO IMAGE */}
        <div
          className="
            relative overflow-hidden rounded-3xl
            aspect-[16/9]
            max-h-[520px]
            w-full
          "
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={heroImage}
              src={heroImage}
              alt={room.name}
              variants={fade}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
            />
          </AnimatePresence>

          {/* soft overlay for contrast */}
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        </div>

        {/* THUMBNAILS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-5">
          {thumbnails.slice(0, 4).map((img, index) => (
            <div
              key={index}
              className="
                relative overflow-hidden rounded-2xl
                aspect-[4/3]
              "
            >
              <img
                src={img}
                alt={`${room.name} view ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/5" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RoomGallery;
