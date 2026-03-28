import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useRooms from "../../hooks/useRooms";

const fade = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
  exit: { opacity: 0, transition: { duration: 0.6 } },
};

const RoomGallery = () => {
  const { slug } = useParams();
  const { rooms, loading, error } = useRooms();

  // ✅ ALL HOOKS TOP PE
  const scrollRef = useRef(null);
  const thumbnailRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // ✅ FIND ROOM
  const room = rooms.find((r) => r.slug === slug);
  const images = room?.gallery || [];

  // ✅ AUTO ROTATE (SAFE)
  useEffect(() => {
    if (images.length < 2) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  // ✅ AUTO CENTER THUMBNAILS
  useEffect(() => {
    if (!images.length) return;

    const activeThumb = thumbnailRefs.current[activeIndex];
    const container = scrollRef.current;

    if (activeThumb && container) {
      const containerWidth = container.offsetWidth;
      const thumbOffset = activeThumb.offsetLeft;
      const thumbWidth = activeThumb.offsetWidth;

      container.scrollTo({
        left: thumbOffset - containerWidth / 2 + thumbWidth / 2,
        behavior: "smooth",
      });
    }
  }, [activeIndex, images.length]);

  // ✅ HORIZONTAL SCROLL
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e) => {
      if (e.deltaY === 0) return;

      const isAtEnd =
        el.scrollLeft + el.offsetWidth >= el.scrollWidth && e.deltaY > 0;
      const isAtStart = el.scrollLeft <= 0 && e.deltaY < 0;

      if (!isAtEnd && !isAtStart) {
        e.preventDefault();
        el.scrollLeft += e.deltaY * 2.5;
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  const handleNext = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // ✅ CONDITIONAL RETURNS (AFTER HOOKS)

  if (loading) {
    return (
      <div className="py-20 text-center text-[#666]">
        Loading gallery...
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-20 text-center text-red-500">
        {error}
      </div>
    );
  }

  if (!room || images.length < 2) return null;

  return (
    <section className="bg-[#FAF9F6] py-20 md:py-32 border-t border-[#f0ebe3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-10">
        
        {/* HEADER */}
        <div className="flex justify-between items-end border-b border-[#c49a6c]/10 pb-6">
          <div>
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#c49a6c]">
              Visual Sanctuary
            </span>
            <h2 className="mt-2 text-3xl md:text-5xl font-serif text-[#1a1a1a]">
              Inside the <span className="italic text-[#888]">Suite</span>
            </h2>
          </div>

          <p className="text-lg font-serif">
            {activeIndex + 1}{" "}
            <span className="text-sm text-[#888]">/ {images.length}</span>
          </p>
        </div>

        {/* MAIN IMAGE */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeIndex}
              src={images[activeIndex]}
              alt="Room"
              variants={fade}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* ARROWS */}
          <div className="absolute inset-0 flex justify-between items-center px-4">
            <button onClick={handlePrev}>
              <ChevronLeft size={32} />
            </button>
            <button onClick={handleNext}>
              <ChevronRight size={32} />
            </button>
          </div>
        </div>

        {/* THUMBNAILS */}
        <div ref={scrollRef} className="flex gap-4 overflow-x-auto">
          {images.map((img, index) => (
            <button
              key={index}
              ref={(el) => (thumbnailRefs.current[index] = el)}
              onClick={() => setActiveIndex(index)}
              className={`w-28 h-20 flex-shrink-0 ${
                activeIndex === index
                  ? "border-2 border-[#c49a6c]"
                  : "opacity-40"
              }`}
            >
              <img src={img} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RoomGallery;