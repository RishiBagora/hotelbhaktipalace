// import React from 'react';

// // --- Data for the rooms ---
// // In a real app, you might fetch this data from an API.
// const roomsData = [
//     {
//         image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop",
//         alt: "lorem ipsum dolor sit amet",
//         title: "Category 1",
//         description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//     },
//     {
//         image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop",
//         alt: "lorem ipsum dolor sit amet",
//         title: "Category 2",
//         description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//     },
//     {
//         image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop",
//         alt: "lorem ipsum dolor sit amet",
//         title: "Category 3",
//         description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//     }
// ];

// // --- Reusable Room Card Component ---
// // This component displays a single room card.
// const RoomCard = ({ image, alt, title, description }) => {
//     return (
//         // The `group` class allows us to trigger hover effects on child elements
//         <a href="#" className="group block overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
//             {/* Image container with zoom-on-hover effect */}
//             <div className="relative overflow-hidden">
//                 <img 
//                     src={image} 
//                     alt={alt} 
//                     className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110" 
//                 />
//             </div>
            
//             {/* Card Content */}
//             <div className="p-6">
//                 <h3 className="font-serif text-2xl font-semibold text-brand-primary">
//                     {title}
//                 </h3>
//                 <p className="mt-2 text-base text-brand-secondary" style={{ lineHeight: '1.8' }}>
//                     {description}
//                 </p>
//                 {/* CTA Button */}
//                 <div className="mt-6">
//                     <span className="inline-block rounded-full bg-brand-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-opacity-90">
//                         View Details
//                     </span>
//                 </div>
//             </div>
//         </a>
//     );
// };


// // --- Main Rooms & Suites Section Component ---
// const RoomsAndSuites = () => {
//     return (
//         // Use 'font-sans' as the default for the section
//         <section className="font-sans antialiased bg-white">
//             {/* Container for centering and padding */}
//             {/* Responsive Padding: px-6 for mobile, lg:px-8 for desktop */}
//             {/* Responsive Padding: py-20 for mobile, lg:py-24 for desktop */}
//             <div className="container mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
                
//                 {/* Section Heading */}
//                 <div className="max-w-3xl mx-auto text-center mb-16">
//                     <p className="text-sm font-semibold text-brand-accent uppercase tracking-widest mb-2">
//                         OUR ROOMS & SUITES
//                     </p>
//                     <h2 className="font-serif text-4xl font-semibold text-brand-primary md:text-5xl">
//                         Elegance in Every Stay
//                     </h2>
//                     <p className="mt-4 text-base text-brand-secondary md:text-lg" style={{ lineHeight: '1.8' }}>
//                         Discover rooms designed for tranquility, style, and comfort — blending timeless architecture with modern amenities.
//                     </p>
//                 </div>

//                 {/* Responsive Rooms Grid:
//                   - Mobile: 1 column (grid-cols-1)
//                   - Tablet: 2 columns (md:grid-cols-2)
//                   - Desktop: 3 columns (lg:grid-cols-3)
//                   - gap-8 provides consistent spacing at all breakpoints
//                 */}
//                 <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    
//                     {/* We map over the data array to render a card for each room */}
//                     {roomsData.map((room, index) => (
//                         <RoomCard
//                             key={index} // In a real app, use a unique ID, e.g., room.id
//                             image={room.image}
//                             alt={room.alt}
//                             title={room.title}
//                             description={room.description}
//                         />
//                     ))}

//                 </div> 
//                 {/* End of Grid */}

//             </div> 
//             {/* End of Container */}
//         </section>
//     );
// };

// export default RoomsAndSuites;


import React from 'react';

// --- Data for the rooms ---
// In a real app, you might fetch this data from an API.
const roomsData = [
    {
        image: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201411201702004987-71f1bed6241111eebe9e0a58a9feac02.jpg",
        alt: "Premium Delux",
        title: "Premium Delux 3-Bed AC",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        image: "https://content3.jdmagicbox.com/comp/nathdwara/m6/9999p2953.2953.110523124340.e5m6/catalogue/hotel-bhakti-palace-nathdwara-ho-nathdwara-hotels-rs-1001-to-rs-2000--bernbsemug.jpg",
        alt: "Delux 3-Bed",
        title: "Premium Delux 4-Bed",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        image: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/room-imgs/201411201702004987-372-2c658fb622e311eea4db0a58a9feac02.jpg",
        alt: "lorem ipsum dolor sit amet",
        title: "Delux 3-Bed",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
];

// --- Reusable Room Card Component ---
// This component displays a single room card.
const RoomCard = ({ image, alt, title, description }) => {
    return (
        // The `group` class allows us to trigger hover effects on child elements
        <a href="#" className="group block overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            {/* Image container with zoom-on-hover effect */}
            <div className="relative overflow-hidden">
                <img 
                    src={image} 
                    alt={alt} 
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
            </div>
            
            {/* Card Content */}
            <div className="p-6">
                <h3 className="font-sans text-2xl font-semibold text-brand-primary">
                    {title}
                </h3>
                <p className="mt-2 text-base text-brand-secondary" style={{ lineHeight: '1.8' }}>
                    {description}
                </p>
                {/* CTA Button */}
                <div className="mt-6">
                    <span className="inline-block rounded-full bg-brand-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-opacity-90">
                        View Details
                    </span>
                </div>
            </div>
        </a>
    );
};


// --- Main Rooms & Suites Section Component ---
const RoomsAndSuites = () => {
    return (
        // Use 'font-sans' as the default for the section
        <section className="font-sans antialiased bg-white">
            {/* Container for centering and padding */}
            {/* Responsive Padding: px-6 for mobile, lg:px-8 for desktop */}
            {/* Responsive Padding: py-20 for mobile, lg:py-24 for desktop */}
            <div className="container mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
                
                {/* Section Heading */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <p className="text-sm font-semibold text-brand-accent uppercase tracking-widest mb-2">
                        Explore our Rooms
                    </p>
                    <h2 className="font-serif text-4xl font-semibold text-brand-primary md:text-5xl">
                        Accommodation
                    </h2>
                    <p className="mt-4 text-base text-brand-secondary md:text-lg" style={{ lineHeight: '1.8' }}>
                        Discover rooms designed for tranquility, style, and comfort — blending timeless architecture with modern amenities.
                    </p>
                </div>

                {/* Responsive Rooms Grid:
                  - Mobile: 1 column (grid-cols-1)
                  - Tablet: 2 columns (md:grid-cols-2)
                  - Desktop: 3 columns (lg:grid-cols-3)
                  - gap-8 provides consistent spacing at all breakpoints
                */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    
                    {/* We map over the data array to render a card for each room */}
                    {roomsData.map((room, index) => (
                        <RoomCard
                            key={index} // In a real app, use a unique ID, e.g., room.id
                            image={room.image}
                            alt={room.alt}
                            title={room.title}
                            description={room.description}
                        />
                    ))}

                </div> 
                {/* End of Grid */}

                {/* --- View All Rooms Button (NEW) --- */}
                {/* This button is centered and spaced below the grid */}
                <div className="mt-16 text-center">
                    <a
                        href="/all-rooms" // Update this link to your main rooms page
                        className="inline-block rounded-full bg-brand-accent px-8 py-4 text-base font-medium text-white bg-[var(--grn)] transition-all duration-300 hover:bg-opacity-40 hover:shadow-lg"
                    >
                        Discover All Accommodations
                    </a>
                </div>

            </div> 
            {/* End of Container */}
        </section>
    );
};

export default RoomsAndSuites;
