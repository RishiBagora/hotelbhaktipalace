import React from 'react';

// --- Data for Location Advantages ---



/**
 * LocationSection Component
 * Displays the hotel's location and its spiritual/cultural advantages.
 */
const LocationSection = () => {
    return (
        // Main section with white background and responsive padding
        <section className="font-sans bg-white antialiased relative">
            <div className="bgimages absolute w-[100%] h-[100%] hidden lg:block">
                <img className='absolute left-0 bottom-50 w-60 p-10' src="https://png.pngtree.com/png-clipart/20230124/ourmid/pngtree-pichwai-cow-with-calf-png-image_6569002.png" alt="" />
                <img className='absolute right-0 bottom-40 w-80 p-10' src="https://www.memeraki.com/cdn/shop/files/Shrinath-Ji-In-Pichwai-by-Dinesh-Soni-2_1024x.png?v=1725264499" alt="" />
            </div>
            {/* Main container: centered, max-width, responsive padding */}
            <div className="container mx-auto max-w-6xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
                
                {/* --- Heading Block --- */}
                <div className="max-w-3xl mx-auto text-center mb-12">
                    {/* Label with accent color and tracking */}
                    <p className="text-sm font-semibold text-brand-accent uppercase tracking-widest mb-3">
                        OUR LOCATION
                    </p>
                    {/* Main title with serif font and responsive sizing */}
                    <h2 className="font-serif text-3xl font-semibold text-brand-primary md:text-5xl">
                        At the Heart of Nathdwara’s Divine Charm
                    </h2>
                </div>

                {/* --- Descriptive Paragraph --- */}
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <p className="text-base text-brand-secondary leading-relaxed md:text-lg" style={{ lineHeight: '1.85' }}>
                        Located in the holy town of Nathdwara, Hotel Bhakti Palace stands just a short walk from the sacred Shree Nath Ji Temple. Embraced by the spiritual aura of this city, our hotel offers guests the perfect blend of peace, devotion, and comfort. Wake up to the sound of temple bells, stroll through vibrant local streets filled with devotion and art, and experience the spiritual essence that makes Nathdwara so unique.
                    </p>
                </div>

                {/* --- Highlight Points --- */}
                {/* - Uses flex-wrap to create a responsive grid
                  - 'justify-center' keeps items centered
                  - 'gap-8' provides spacing between items
                */}
                
                <div className='text-center text-3xl font-semibold italic text-[#800000]'>
                    <p>2-mins from the Shreenath Ji Temple</p>
                </div>

            </div>
        </section>
    );
};

export default LocationSection;
