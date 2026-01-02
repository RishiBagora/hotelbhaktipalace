// BookingCTA.jsx
import React from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import roomsData from "../../data/roomsData";

/* ---------------- ANIMATION ---------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

const BookingCTA = () => {
  const { slug } = useParams();

  // 🔥 DIRECT ROOM FETCH
  const room = roomsData.find((r) => r.slug === slug);

  const roomName = room?.name;

  return (
    <section className="bg-[#fdfaf6]">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-5xl mx-auto px-6 py-20 md:py-28 text-center"
      >
        {/* HEADING */}
        <h2
          className="text-3xl md:text-4xl font-serif text-[#1a1a1a]"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Plan Your Stay at Hotel Bhakti Palace
        </h2>

        {/* SUPPORTING TEXT */}
        <p
          className="mt-6 text-base md:text-lg text-[#6d6d6d] max-w-3xl mx-auto"
          style={{ lineHeight: 1.9 }}
        >
          Our team will be happy to assist you with room availability, pricing,
          and any special requirements to ensure a comfortable and peaceful stay
          in Nathdwara.
        </p>

        {/* CONTEXTUAL LINE */}
        {roomName && (
          <p className="mt-4 text-sm text-[#6d6d6d]">
            Enquire about the{" "}
            <span className="text-[#1a1a1a] font-medium">{roomName}</span> for
            your preferred dates.
          </p>
        )}

        {/* ACTIONS */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          {/* CALL */}
          <a
            href="tel:+919772578699"
            className="w-full sm:w-auto px-8 py-3 rounded-full border border-[#c49a6c] text-[#1a1a1a] text-sm tracking-wide transition-colors hover:bg-[#c49a6c] hover:text-white"
          >
            Call for Reservation
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/919772578699"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3 rounded-full border border-[#c49a6c] text-[#1a1a1a] text-sm tracking-wide transition-colors hover:bg-[#c49a6c] hover:text-white"
          >
            WhatsApp Enquiry
          </a>
        </div>

        {/* SECONDARY LINK */}
        <div className="mt-6">
          <Link
            to="/contact"
            className="text-sm text-[#6d6d6d] underline underline-offset-4 hover:text-[#1a1a1a]"
          >
            Contact us for detailed assistance
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default BookingCTA;
