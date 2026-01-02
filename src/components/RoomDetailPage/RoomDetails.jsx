import React from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import roomsData from "../../data/roomsData";

const fadeUp = {
  hidden: { opacity: 0, y: 22, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const RoomDetails = () => {
  const { slug } = useParams();
  const room = roomsData.find((r) => r.slug === slug);

  if (!room) return null;

  const {
    description,
    longDescription,
    size,
    occupancy,
    view,
    amenities = [],
    services = [],
    policies = [],
    checkIn,
    checkOut,
  } = room;

  // 🔥 merge everything into ONE flow list
  const allDetails = [
    size && `Room Size: ${size}`,
    occupancy && `Guests: ${occupancy}`,
    view && `View: ${view}`,
    checkIn && `Check-in: ${checkIn}`,
    checkOut && `Check-out: ${checkOut}`,
    ...amenities,
    ...services,
    ...policies,
  ].filter(Boolean);

  return (
    <section className="bg-[#faf5ef] py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6">
<span className="text-xs tracking-[0.3em] uppercase text-[#c49a6c]">
              Comfort & Convenience
            </span>
          <h2
              className="mt-3 text-3xl md:text-4xl font-serif text-[#1a1a1a]"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Room Amenities
            </h2>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="flex flex-col gap-10 pt-5"
        >
          
          {/* DESCRIPTION */}
          {description && (
            <p
              className="text-base md:text-lg text-[#6d6d6d]"
              style={{ lineHeight: 1.9 }}
            >
              {description}
            </p>
          )}

          {longDescription && (
            <p
              className="text-base md:text-lg text-[#6d6d6d]"
              style={{ lineHeight: 1.9 }}
            >
              {longDescription}
            </p>
          )}

          {/* ALL DETAILS IN ONE FLOW */}
          {allDetails.length > 0 && (
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-12 text-xs md:text-base text-[#6d6d6d]">
              {allDetails.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-[#c49a6c]">✔</span>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </motion.div>

      </div>
    </section>
  );
};

export default RoomDetails;
