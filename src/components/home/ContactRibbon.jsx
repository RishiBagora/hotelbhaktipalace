import React from "react";
import { Phone, Wifi, Car, Bed } from "lucide-react";

const ContactRibbon = () => {
  return (
    <div className="w-full bg-black/30 overflow-hidden fixed z-40 top-20  text-white">

      <div className="flex w-max animate-marquee font-medium">

        <div className="flex items-center whitespace-nowrap">

          <span className="mx-8 flex items-center gap-2">
            <Phone size={16} />
            Contact Us:
            <a href="tel:+919772578699" className="underline">
              +91 9772578699
            </a>
          </span>

          <span className="mx-8">
            Hotel Bhakti – 50 Steps from ShreeNath Ji | Your Spiritual Stay Awaits!
          </span>


        </div>

        <div className="flex items-center whitespace-nowrap">

          <span className="mx-8 flex items-center gap-2">
            <Phone size={16} />
            Contact Us:
            <a href="tel:+919772578699" className="underline">
              +91 9772578699
            </a>
          </span>

          <span className="mx-8">
            Hotel Bhakti – 50 Steps from ShreeNath Ji Temple| Your Spiritual Stay Awaits!
          </span>

        </div>
        <div className="flex items-center whitespace-nowrap">

          <span className="mx-8 flex items-center gap-2">
            <Phone size={16} />
            Contact Us:
            <a href="tel:+919772578699" className="underline">
              +91 9772578699
            </a>
          </span>

          <span className="mx-8">
            Hotel Bhakti – 50 Steps from ShreeNath Ji Temple| Your Spiritual Stay Awaits!
          </span>

        </div>

      </div>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-marquee {
            animation: marquee 25s linear infinite;
          }
        `}
      </style>

    </div>
  );
};

export default ContactRibbon;