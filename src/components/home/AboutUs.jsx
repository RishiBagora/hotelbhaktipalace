import React from 'react';

// --- Data for Highlight Cards ---
const highlightData = [
    {
        title: "Architectural Beauty",
        description: "Designed with classical influences and modern elegance, every corner tells a story of timeless design."
    },
    {
        title: "Personalized Service",
        description: "From bespoke dining experiences to private concierge attention, every stay is tailored to perfection."
    },
    {
        title: "Serene Ambiance",
        description: "A haven of tranquility amidst the bustle — perfect for rejuvenation and refined comfort."
    }
];

/**
 * HighlightCard Component
 * A reusable card for the "About" section's key features.
 * @param {object} props
 * @param {string} props.title - The title of the highlight.
 * @param {string} props.description - The description of the highlight.
 */
const HighlightCard = ({ title, description }) => {
    return (
        // Card container with specified background, padding, and hover effects
        <div className="bg-brand-highlight-bg rounded-2xl p-6 shadow-sm 
                        transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <h3 className="font-serif text-lg font-semibold text-brand-primary mb-2">
                {title}
            </h3>
            <p className="text-sm text-brand-secondary leading-relaxed" style={{ lineHeight: '1.8' }}>
                {description}
            </p>
        </div>
    );
};

/**
 * AboutUs Component
 * The main component for the "About Our Hotel" section.
 */
const AboutUs = () => {
    return (
        // Main section with white background and responsive padding
        <section className="font-sans bg-white antialiased">
            {/* Container for centering content and managing max-width */}
            <div className="container mx-auto max-w-6xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
                
                {/* --- Two-Column Responsive Layout ---
                  - Stacks on mobile (grid-cols-1)
                  - Becomes 2 columns on desktop (lg:grid-cols-2)
                  - 'lg:items-start' ensures columns align at the top
                */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    
                    {/* --- Left Column (Text Content) --- */}
                    <div className="text-center lg:text-left">
                        {/* Heading Label */}
                        <p className="text-sm font-semibold text-brand-accent uppercase tracking-widest mb-3">
                            ABOUT OUR HOTEL
                        </p>
                        
                        {/* Main Title */}
                        <h2 className="font-serif text-3xl font-semibold text-brand-primary md:text-4xl mb-6">
                            A Legacy of Elegance & Comfort
                        </h2>
                        
                        {/* Subtitle / Intro Paragraph */}
                        <p className="text-base text-brand-secondary leading-relaxed md:text-lg lg:max-w-md" style={{ lineHeight: '1.85' }}>
                            Nestled in the heart of the city, our hotel blends timeless architecture, contemporary luxury, and impeccable service — creating an experience that feels both indulgent and intimate.
                        </p>

                        {/* Additional Descriptive Paragraph */}
                        <p className="text-base text-brand-secondary leading-relaxed md:text-lg lg:max-w-md mt-6" style={{ lineHeight: '1.85' }}>
                            We are a sanctuary of refined comfort, where personalized service and a tranquil ambiance provide a perfect escape. Every detail is thoughtfully curated to ensure your stay is not just a visit, but a cherished memory.
                        </p>
                        
                        {/* Image (Visible on Desktop only as requested by "image_hidden_on_mobile" logic) */}
                        <div className="hidden lg:block mt-12">
                            <img 
                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop" 
                                alt="Elegant hotel exterior or lobby" 
                                className="w-full h-96 object-cover rounded-2xl shadow-md"
                            />
                        </div>
                    </div>

                    {/* --- Right Column (Highlight Cards) --- */}
                    {/* 'lg:mt-12' adds a top margin on desktop to align it nicely with the text */}
                    <div className="flex flex-col gap-8 lg:mt-12">
                        {highlightData.map((item, index) => (
                            <HighlightCard
                                key={index}
                                title={item.title}
                                description={item.description}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutUs;
