import React from "react";
import { Phone, Wifi, Car, Bed } from "lucide-react";

const ContactRibbon = () => {
  return (
    <div className="w-full bg-[#1a1a1a] text-white overflow-hidden py-2 border-b border-black/10">

      <div className="flex w-max animate-marquee font-medium text-[11px] md:text-[13px] tracking-wide">

        <div className="flex items-center whitespace-nowrap">
          <span className="mx-8 flex items-center gap-2">
            <Phone size={14} className="text-[#c49a6c]" />
            <span className="opacity-80">Bookings & Inquiries:</span>
            <a href="tel:+919772578699" className="hover:text-[#c49a6c] transition-colors underline decoration-white/20 underline-offset-4">
              +91 97725 78699
            </a>
          </span>
          <span className="mx-8 text-white/90">
            Hotel Bhakti – <span className="text-[#c49a6c] italic">50 Steps from ShreeNath Ji</span> | Your Spiritual Stay Awaits!
          </span>
        </div>

        <div className="flex items-center whitespace-nowrap">
          <span className="mx-8 flex items-center gap-2">
            <Phone size={14} className="text-[#c49a6c]" />
            <span className="opacity-80">Bookings & Inquiries:</span>
            <a href="tel:+919772578699" className="hover:text-[#c49a6c] transition-colors underline decoration-white/20 underline-offset-4">
              +91 97725 78699
            </a>
          </span>
          <span className="mx-8 text-white/90">
            Hotel Bhakti – <span className="text-[#c49a6c] italic">50 Steps from ShreeNath Ji Temple</span> | Your Spiritual Stay Awaits!
          </span>
        </div>
        
        <div className="flex items-center whitespace-nowrap">
          <span className="mx-8 flex items-center gap-2">
            <Phone size={14} className="text-[#c49a6c]" />
            <span className="opacity-80">Bookings & Inquiries:</span>
            <a href="tel:+919772578699" className="hover:text-[#c49a6c] transition-colors underline decoration-white/20 underline-offset-4">
              +91 97725 78699
            </a>
          </span>
          <span className="mx-8 text-white/90">
            Hotel Bhakti – <span className="text-[#c49a6c] italic">50 Steps from ShreeNath Ji Temple</span> | Your Spiritual Stay Awaits!
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
            animation: marquee 30s linear infinite;
          }
        `}
      </style>

    </div>
  );
};

export default ContactRibbon;