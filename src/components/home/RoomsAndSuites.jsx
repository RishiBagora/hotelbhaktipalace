import React from "react";
import roomsData from "../../data/roomsData";

/**
 * Main App component to render the RoomsAndSuites section.
 */
export default function App() {

  /* ---------------- ICONS ---------------- */
  const BedIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M2 19v-2a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2" />
      <path d="M2 11h20" />
      <path d="M14 11v-5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v5" />
    </svg>
  );

  const UserIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="8" r="4" />
      <path d="M6 20a6 6 0 0 1 12 0" />
    </svg>
  );

  const SizeIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" />
    </svg>
  );

  /* ---------------- ROOM CARD ---------------- */
const RoomCard = ({ image, name, price, occupancy, size }) => {
  return (
    <a
      href={`/rooms/${name?.toLowerCase()?.replace(/\s+/g, "-")}`}
      className="
        group relative block overflow-hidden rounded-3xl
        bg-white
        border border-[#e7dfd6]
        transition-all duration-500
        hover:border-[#c49a6c]
      "
    >
      {/* IMAGE */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="
            h-full w-full object-cover
            transition-transform duration-700
            group-hover:scale-[1.03]
          "
        />

        {/* SOFT IMAGE OVERLAY */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* CONTENT */}
      <div className="px-7 py-6 flex flex-col gap-5">
        {/* TITLE */}
        <h3 className="font-serif text-2xl text-[#1a1a1a] leading-tight">
          {name}
        </h3>

        {/* META */}
        <div className="flex justify-between text-sm text-[#6d6d6d]">
          <span>{occupancy} Guests</span>
          <span>{size} sq. ft.</span>
        </div>

        {/* DIVIDER */}
        <div className="w-full h-px bg-[#eee4d8]" />

        {/* PRICE + CTA */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xl font-serif text-[#c49a6c]">
              ₹{price}
            </span>
            <span className="text-sm text-[#6d6d6d]"> / night</span>
          </div>

          {/* PREMIUM CTA */}
          <span
            className="
              text-sm tracking-wide
              text-[#1a1a1a]
              border-b border-transparent
              group-hover:border-[#c49a6c]
              transition-all duration-300
            "
          >
            View Details
          </span>
        </div>
      </div>
    </a>
  );
};

  /* ---------------- ROOMS SECTION ---------------- */
  const RoomsAndSuites = () => (
    <section className="bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a1a]">
            Explore Our Rooms
          </h2>
          <div className="mt-4 w-24 h-1 bg-[#c49a6c] mx-auto rounded-full" />
          <p className="mt-6 text-[#6c6c6c] leading-relaxed">
            Discover rooms designed for tranquility, comfort, and thoughtful hospitality.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roomsData.slice(0, 3).map((room, index) => (
            <RoomCard
              key={room.slug || index}
              image={room.image}
              name={room.name}
              price={room.price}
              occupancy={room.occupancy}
              size={room.size}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="/rooms"
            className="inline-block rounded-full bg-gradient-to-t from-[#c49a6c] to-[#e0c1a2] px-8 py-4 text-white shadow-md transition hover:scale-105"
          >
            Discover All Accommodations
          </a>
        </div>
      </div>
    </section>
  );

  return <RoomsAndSuites />;
}
