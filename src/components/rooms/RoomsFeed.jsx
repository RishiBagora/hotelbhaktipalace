// RoomsFeed.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import roomsData from "../../data/roomsData";

const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

const RoomsFeed = () => {
  return (
    <section className="bg-[#faf5ef] py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-28">

        {roomsData.map((room, index) => {
          const reverse = index % 2 !== 0;

          return (
            <motion.article
              key={`${room.slug}-${index}`}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Link
                to={`/rooms/${room.slug}`}
                className="group grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center"
                aria-label={`View details for ${room.name}`}
              >

    {/* IMAGE BLOCK */}
<div
  className={`relative overflow-hidden rounded-3xl ${
    reverse ? "md:order-2" : ""
  }`}
>
  {/* IMAGE */}
  <img
    src={room.image}
    alt={room.name}
    className="w-full h-[260px] sm:h-[340px] md:h-[420px] object-cover 
               transition-all duration-700 group-hover:scale-[1.02]"
    loading="lazy"
  />

  {/* SOFT GRADIENT */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

  {/* OVERLAY INFO */}
  <div className="absolute bottom-3 left-3 right-3 md:bottom-6 md:left-6 md:right-6">
    <div
      className="
        flex items-end gap-4
        px-4 py-3
        md:px-5 md:py-4
        rounded-xl md:rounded-2xl
        bg-black/20 md:bg-black/30
        backdrop-blur-sm
      "
    >
      {/* GUESTS */}
      {room.occupancy && (
        <div>
          <p className="text-[10px] md:text-[11px] uppercase tracking-widest text-white/70">
            Guests
          </p>
          <p className="text-sm md:text-lg text-white font-medium">
            {room.occupancy}
          </p>
        </div>
      )}

      {/* SIZE */}
      {room.size && (
        <div>
          <p className="text-[10px] md:text-[11px] uppercase tracking-widest text-white/70">
            Size
          </p>
          <p className="text-sm md:text-lg text-white font-medium">
            {room.size}
            <span className=" md:inline text-sm"> sq ft</span>
          </p>
        </div>
      )}

      {/* PRICE */}
      {room.price && (
        <div className="ml-auto">
          <p className="text-[10px] md:text-[11px] uppercase tracking-widest text-white/70 text-right">
            From
          </p>
          <p className="text-base md:text-xl font-semibold text-[#c49a6c]">
            ₹{room.price}
            <span className=" md:inline text-sm font-normal text-white/70">
              {" "}
              / night
            </span>
          </p>
        </div>
      )}
    </div>
  </div>
</div>



                {/* TEXT BLOCK */}
              {/* TEXT */}
<div className="flex flex-col gap-6 max-w-xl">

  {/* ROOM NAME */}
  <h3
    className="text-3xl md:text-4xl font-serif text-[#1a1a1a] group-hover:text-[#c49a6c] transition-colors duration-300"
    style={{ fontFamily: "Playfair Display, serif" }}
  >
    {room.name}
  </h3>

  {/* DESCRIPTION */}
  <p
    className="text-base md:text-lg text-[#6d6d6d]"
    style={{ lineHeight: 1 }}
  >
    {room.shortDescription || room.description}
  </p>

  {/* EDITORIAL META STRIP */}
  {/* HIGHLIGHTED META STRIP */}
<div className="flex flex-wrap items-center gap-x-8 gap-y-3 mt-4">

  {room.occupancy && (
    <div className="flex flex-col">
      <span className="text-xs uppercase tracking-widest text-[#6d6d6d]">
        Guests
      </span>
      <span className="text-lg font-medium text-[#1a1a1a]">
        {room.occupancy}
      </span>
    </div>
  )}

  {room.size && (
    <div className="flex flex-col">
      <span className="text-xs uppercase tracking-widest text-[#6d6d6d]">
        Room Size
      </span>
      <span className="text-lg font-medium text-[#1a1a1a]">
        {room.size} <span className="text-sm text-[#6d6d6d]">sq ft</span>
      </span>
    </div>
  )}

  {room.price && (
    <div className="flex flex-col">
      <span className="text-xs uppercase tracking-widest text-[#6d6d6d]">
        Starting From
      </span>
      <span className="text-xl font-semibold text-[#c49a6c]">
        ₹{room.price}
        <span className="text-sm font-normal text-[#6d6d6d]"> / night</span>
      </span>
    </div>
  )}

</div>


  {/* SUBTLE DIVIDER */}
  <div className="w-16 h-px bg-[#c49a6c]/40 mt-2" />

  {/* CTA */}
  <span className="inline-block mt-2 text-sm tracking-wide text-[#c49a6c]">
    View room details →
  </span>
</div>

              </Link>
            </motion.article>
          );
        })}

      </div>
    </section>
  );
};

export default RoomsFeed;
