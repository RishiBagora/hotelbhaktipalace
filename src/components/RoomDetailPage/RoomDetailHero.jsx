// RoomDetailHero.jsx
import React from "react";
import { motion } from "framer-motion";

/* ---------------- ANIMATIONS ---------------- */
const fadeUpMobile = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const fadeUpDesktop = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

const fadeInImage = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.2 } },
};

/* ---------------- COMPONENT ---------------- */
const RoomDetailHero = ({ data }) => {
  if (!data) return null;

  const {
    name,
    image,
    price,
    shortDescription,
    occupancy,
    size,
    extraBed,
    totalRooms,
    note,
  } = data;

  return (
    <section className="bg-[#faf5ef]">
      {/* ================= MOBILE ================= */}
      <div className="md:hidden px-4 pt-6">
        {image && (
          <img
            src={image}
            alt={name}
            className="w-full h-[240px] object-cover rounded-2xl"
          />
        )}
      </div>

      <motion.div
        variants={fadeUpMobile}
        initial="hidden"
        animate="visible"
        className="md:hidden px-4 mt-6"
      >
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <span className="text-[11px] tracking-[0.25em] uppercase text-[#c49a6c]">
            Room Category
          </span>

          <h1 className="mt-2 text-2xl font-serif text-[#1a1a1a]">
            {name}
          </h1>

          {shortDescription && (
            <p className="mt-3 text-[15px] text-[#6d6d6d] leading-relaxed">
              {shortDescription}
            </p>
          )}

          <div className="mt-5 space-y-2 text-sm text-[#6d6d6d]">
            {occupancy && <div>
              <span className="text-[#c49a6c]"><b>Guests:</b></span> {occupancy} Guests</div>}
            {size && <div><span className="text-[#c49a6c]"><b>Room Size:</b></span> {size} sq. ft.</div>}
            {extraBed && <div><span className="text-[#c49a6c]"><b>Extra Bed:</b></span> {extraBed} (Chargeable)</div>}
          </div>

          {price && (
            <div className="mt-6 pt-4 border-t text-sm text-[#6d6d6d]">
              Starting from{"  "}
              <span className="text-[#c49a6c] text-xl">
                ₹{price} 
              </span>
              <span>/ night</span>
            </div>
          )}
        </div>
      </motion.div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block">
        <div className="max-w-6xl mx-auto px-6 pt-10 grid grid-cols-2 gap-24 items-center">
          <motion.div
            variants={fadeUpDesktop}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-[#c49a6c]">
              Room Category
            </span>

            <h1 className="text-4xl lg:text-5xl font-serif text-[#1a1a1a]">
              {name}
            </h1>

            {shortDescription && (
              <p className="text-lg text-[#6d6d6d] max-w-xl leading-tight">
                {shortDescription}
              </p>
            )}

            <div className="flex gap-14 mt-4 text-sm">
              {occupancy && <Info label="Guests" value={occupancy} />}
              {size && <Info label="Room Size" value={size} />}
              {extraBed && <Info label="Extra Bed" value={extraBed} />}
           
            </div>

            {price && (
              <p className="text-base text-[#6d6d6d] mt-5">
                Starting from{" "}
                <span className="text-[#c49a6c] text-2xl font-medium">
                  ₹{price}
                </span>{" "}
                / night
              </p>
            )}

            {note && (
              <p className="text-sm text-[#6d6d6d] mt-3 max-w-xl">
                {note}
              </p>
            )}
          </motion.div>

          {image && (
            <motion.div
              variants={fadeInImage}
              initial="hidden"
              animate="visible"
              className="overflow-hidden rounded-3xl"
            >
              <img
                src={image}
                alt={name}
                className="w-full h-[460px] object-cover"
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

const Info = ({ label, value }) => (
  <div>
    <span className="block text-[11px] uppercase tracking-tight text-[#c49a6c]">
      {label}
    </span>
    <span className="text-[#1a1a1a]">{value}</span>
  </div>
);

export default RoomDetailHero;
