import React from 'react';

const HotelName = () => {
  return (
    <div className="absolute w-full h-[30vh] md:h-[40vh] flex flex-col justify-center items-center text-center px-4">
      {/* Logo Container: Scaled for better visibility */}
      <div className="z-20 mb-6">
        <img 
          className="w-40 md:w-64 lg:w-80 object-contain transition-transform duration-700 hover:scale-105" 
          src="/images/hotellogo.png" 
          alt="Hotel Logo" 
        />
      </div>

      {/* Tagline: Refined typography and spacing */}
      <div className="z-20">
        <p className="
          text-xl md:text-3xl lg:text-3xl 
          
          text-white 
            font-sans tracking-widest
        "
        >
          Stay Close To ShriNath Ji
        </p>
        
        {/* Subtle decorative divider (Optional but adds "Perfection") */}
        <div className="mt-4 w-24 h-[1px] bg-[#c49a6c] mx-auto opacity-50"></div>
      </div>
    </div>
  );
};

export default HotelName;