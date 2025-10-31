import React from 'react';

// --- Data for amenities ---
// In a real app, this would likely come from a CMS or API.
const amenitiesData = [
  {
    icon: 'https://www.freeiconspng.com/thumbs/wifi-icon/3d-black-wifi-icon-9.png',
    title: 'Wifi',
    
  },
  {
    icon: 'https://static.thenounproject.com/png/26-200.png',
    title: 'Fire Safety',
    
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/15/15417.png',
    title: 'Restaurant',
  
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/291/291383.png',
    title: 'Daily HouseKeeping',
    
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/1569/1569695.png',
    title: '24 x 7 Room Service',
    
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/102/102649.png',
    title: 'Security',
  
  },
  
];

/**
 * AmenityCard Component
 * A reusable card to display a single amenity.
 * @param {object} props
 * @param {string} props.icon - The emoji or icon character.
 * @param {string} props.title - The title of the amenity.
 * @param {string} props.description - The description of the amenity.
 */
const AmenityCard = ({ icon, title, description }) => {
  return (
    // REDUCED padding from p-8 to p-4 to make the card smaller
    // REMOVED hover transform effects for a cleaner look in a dense grid
    <div className="flex flex-col items-center text-center p-4 bg-white rounded-2xl shadow-sm 
                    transition-all duration-300 hover:shadow-lg">
      {/* Icon wrapper:
        - REDUCED icon size from text-5xl to text-3xl
        - REDUCED padding from p-4 to p-3
        - REDUCED margin-bottom from mb-6 to mb-4
      */}
      <span className="inline-block text-3xl text-brand-accent bg-white p-3 rounded-full shadow-sm mb-4">
        <img src={icon} alt="" />
      </span>
      
      {/* Text Content */}
      {/* REDUCED title size from text-lg to text-base */}
      {/* REDUCED margin-bottom from mb-2 to mb-1 */}
      <h3 className="font-serif text-base font-semibold text-brand-primary mb-1">
        {title}
      </h3>
      {/* TIGHTENED line-height from leading-relaxed to leading-snug */}
      
    </div>
  );
};

/**
 * AmenitiesSection Component
 * The main section wrapper for the amenities grid.
 */
const AmenitiesSection = () => {
  return (
    // Section wrapper with the light beige background
    <section className="font-sans bg-brand-background antialiased">
      {/* Main container:
        - Sets max-width to 1200px (max-w-6xl)
        - Centers content (mx-auto)
        - Provides responsive padding (px-5, py-20, etc.)
      */}
      <div className="container mx-auto max-w-6xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        
        {/* --- Heading Block --- */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-brand-accent uppercase tracking-[0.2em] mb-2">
            AMENITIES & SERVICES
          </p>
          <h2 className="font-serif text-3xl font-semibold text-brand-primary md:text-4xl mb-4">
            Luxury Beyond Expectations
          </h2>
          <p className="text-base text-brand-secondary leading-relaxed md:text-lg">
            Every moment of your stay is elevated with world-class services designed for relaxation, indulgence, and style.
          </p>
        </div>

        {/* --- Responsive Amenities Grid --- 
          - UPDATED Mobile: 3 columns (grid-cols-3)
          - UPDATED Tablet: 4 columns (sm:grid-cols-4)
          - UPDATED Desktop: 6 columns (lg:grid-cols-6)
          - REDUCED gap from gap-10 to gap-4 for a tighter grid
        */}
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
          {amenitiesData.map((amenity, index) => (
            <AmenityCard
              key={index}
              icon={amenity.icon}
              title={amenity.title}
              description={amenity.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;