import React from 'react';

/**
 * Main App component to render the RoomsAndSuites section.
 * This file is self-contained.
 */
export default function App() {

  // --- SVG Icons for RoomCard ---
  const BedIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 19v-2a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2" />
      <path d="M2 11h20" />
      <path d="M14 11v-5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v5" />
    </svg>
  );

  const UserIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 20a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4" />
      <circle cx="12" cy="10" r="4" />
      <path d="M12 14a7 7 0 0 0-7 7h14a7 7 0 0 0-7-7" />
    </svg>
  );

  const SizeIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 3H3v18h18V3zM21 15h-6m-6 0H3m12-6H9m6 0h6M9 9H3" />
    </svg>
  );


  // --- Data for the rooms ---
  // Updated with new fields: price, occupancy, size
  const roomsData = [
      {
          image: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201411201702004987-71f1bed6241111eebe9e0a58a9feac02.jpg",
          alt: "Premium Delux",
          title: "Premium 3-Bed AC",
          occupancy: 3,
          size: "280 sq ft",
          price: "4,500"
      },
      {
          image: "https://content3.jdmagicbox.com/comp/nathdwara/m6/9999p2953.2953.110523124340.e5m6/catalogue/hotel-bhakti-palace-nathdwara-ho-nathdwara-hotels-rs-1001-to-rs-2000--bernbsemug.jpg",
          alt: "Delux 4-Bed",
          title: "Premium 4-Bed",
          occupancy: 4,
          size: "350 sq ft",
          price: "5,800"
      },
      {
          image: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/room-imgs/201411201702004987-372-2c658fb622e311eea4db0a58a9feac02.jpg",
          alt: "Delux 3-Bed",
          title: "Deluxe 3-Bed",
          occupancy: 3,
          size: "250 sq ft",
          price: "3,900"
      }
  ];

  // --- Reusable Room Card Component ---
  // Modified to include price, occupancy, and size
  const RoomCard = ({ image, alt, title, price, occupancy, size }) => {
      return (
          // The `group` class allows us to trigger hover effects on child elements
          <a href="#" className="group relative block overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              {/* Image container with zoom-on-hover effect */}
              <div className="relative overflow-hidden h-64">
                  <img  
                      src={image}  
                      alt={alt}  
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
                      onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/faf9f6/c49a6c?text=Elegant+Room"; }}
                  />
              </div>
              
              {/* Card Content */}
              <div className="p-6">
                  <h3 className="font-serif text-2xl font-semibold text-[#1a1a1a]">
                      {title}
                  </h3>
                  
                  {/* Stats Section */}
                  <div className="mt-4 flex justify-between items-center text-[#6c6c6c] border-t pt-4">
                    <div className="flex items-center gap-2">
                      <UserIcon className="w-5 h-5 text-[#c49a6c]" />
                      <span className="text-sm">{occupancy} Guests</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BedIcon className="w-5 h-5 text-[#c49a6c]" />
                      <span className="text-sm">{occupancy}-Bed</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <SizeIcon className="w-5 h-5 text-[#c49a6c]" />
                      <span className="text-sm">{size}</span>
                    </div>
                  </div>

                  {/* Price and CTA Button */}
                  <div className="mt-6 flex justify-between items-center">
                    <div>
                      <span className="text-2xl font-semibold font-serif text-[#c49a6c]">
                        ₹{price}
                      </span>
                      <span className="text-sm text-[#6c6c6c]">/night</span>
                    </div>
                    <span className="inline-block rounded-full bg-gradient-to-t from-[#c49a6c] to-[#e0c1a2] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:shadow-lg hover:scale-105 shadow-md">
                      View Room
                    </span>
                  </div>
              </div>
          </a>
      );
  };


  // --- Main Rooms & Suites Section Component ---
  const RoomsAndSuites = () => {
      return (
          <section className="font-sans antialiased bg-[#faf9f6]">
              {/* Container for centering and padding */}
              <div className="container mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
                  
                  {/* Section Heading */}
                  <div className="max-w-3xl mx-auto text-center mb-16">
                      
                      <h2 className="font-serif text-4xl font-semibold text-[#1a1a1a] md:text-5xl">
                          Explore Our Rooms  
                      </h2>
                      {/* Accent line */}
                      <div className="mt-4 w-24 h-1 bg-[#c49a6c] mx-auto rounded-full" />
                      
                      <p className="mt-6 text-base text-[#6c6c6c] md:text-lg" style={{ lineHeight: '1.8' }}>
                          Discover rooms designed for tranquility, style, and comfort — blending timeless architecture with modern amenities.
                      </p>
                  </div>

                  {/* Responsive Rooms Grid */}
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                      
                      {/* We map over the data array to render a card for each room */}
                      {roomsData.map((room, index) => (
                          <RoomCard
                              key={index} // In a real app, use a unique ID, e.g., room.id
                              image={room.image}
                              alt={room.alt}
                              title={room.title}
                              price={room.price}
                              occupancy={room.occupancy}
                              size={room.size}
                          />
                      ))}

                  </div>  
                  {/* End of Grid */}

                  {/* --- View All Rooms Button --- */}
                  <div className="mt-16 text-center">
                      <a
                          href="/rooms"
                          className="inline-block rounded-full bg-gradient-to-t from-[#c49a6c] to-[#e0c1a2] px-8 py-4 text-base font-medium text-white transition-all duration-300 hover:shadow-xl hover:scale-105 shadow-md"
                      >
                          Discover All Accommodations
                      </a>
                  </div>

              </div>  
              {/* End of Container */}
          </section>
      );
  };

  /**
  * App component's return value.
  */
  return (
    <>
      {/* Global Styles, Font Imports */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@600;700&display=swap');
          
          body {
            font-family: 'Inter', sans-serif;
            background-color: #faf9f6; /* Match section bg */
          }

          /* Removed CSS variables and helper classes */

          .font-sans { font-family: 'Inter', sans-serif; }
          .font-serif { font-family: 'Playfair+Display', serif; }
        `}
      </style>
      
      {/* Render the RoomsAndSuites component */}
      <RoomsAndSuites />
    </>
  );
}