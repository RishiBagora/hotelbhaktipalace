import React from "react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="relative bg-[#faf9f6] py-24 px-4 sm:px-8 lg:px-16 overflow-hidden">
      {/* ---- Top Center Section Heading ---- */}
      <div className="text-center mb-16">
        <p
          className="text-sm tracking-[0.35em] uppercase text-[#c49a6c] mb-3"
          style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
        >
          About Us
        </p>
        <div className="h-[1px] w-20 bg-[#c49a6c] mx-auto opacity-40"></div>
      </div>

      {/* ---- Two Column Layout ---- */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12 relative">
        {/* Left: Image Wrapper (outer allows overflow) */}
        <div className="relative w-full h-72 sm:h-96 rounded-2xl shadow-md overflow-visible">
          {/* Inner Image (handles the rounded corners) */}
          <div className="w-full h-full rounded-2xl overflow-hidden">
            <img
              src="https://lh3.googleusercontent.com/p/AF1QipM4ZFHDP5AJsf8-TdUlZATYfgKwMHsEPlZzNhIh=s1360-w1360-h1020-rw"
              alt="About Hotel Bhakti Palace"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            {/* Soft overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
          </div>

          {/* ---- Revolving Text Circle ---- */}
          <div className="absolute -bottom-15 -left-15 w-40 h-40 sm:w-48 sm:h-48">
            <svg
              viewBox="0 0 200 200"
              className="animate-spin-slow"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0"
                />
              </defs>

              <text
                fontSize="11"
                fill="#c49a6c"
                letterSpacing="3"
                style={{
                  fontFamily: "Inter, sans-serif",
                  textTransform: "uppercase",
                }}
              >
                <textPath href="#circlePath" startOffset="0%">
                  ● Hotel Bhakti Palace ● Nathdwara ● Hotel Bhakti Palace ●
                  Nathdwara ● Hotel Bhakti Palace ● Nathdwara ●
                </textPath>
              </text>
            </svg>
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="text-center md:text-left">
          {/* Moved main heading here */}
          <h2
            className="text-3xl sm:text-4xl font-semibold text-[#1a1a1a] mb-6"
            style={{
              fontFamily: "Playfair Display, serif",
              letterSpacing: "0.02em",
            }}
          >
            The Best Holidays Start Here
          </h2>

          <p
            className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8"
            style={{
              fontFamily: "Inter, sans-serif",
              lineHeight: 1.8,
              maxWidth: "95%",
            }}
          >
            Experience divine comfort and serenity at{" "}
            <span className="text-[#c49a6c] font-medium">
              Hotel Bhakti Palace
            </span>
            , where hospitality meets devotion in the holy town of Nathdwara.
            Just steps away from the revered Shree Nath Ji Temple, our hotel
            offers elegant rooms, warm service, and tranquil spaces — the
            perfect destination for spiritual travelers seeking luxury and
            peace.
          </p>

          <Link to="/aboutus">
            <button className="inline-flex items-center justify-center px-8 py-3 border border-[#c49a6c] text-sm md:text-base font-medium rounded-full text-[#1a1a1a] hover:bg-[#c49a6c] hover:text-white transition-all duration-300 ease-in-out">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
