import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';

// --- Data for Dining Highlights ---
const diningHighlights = [
    {
        icon: '🍛',
        title: 'Authentic Rajasthani Flavours',
        description: 'Enjoy the taste of Rajasthan with dishes inspired by royal kitchens and local traditions.'
    },
    {
        icon: '🥗',
        title: 'Pure Vegetarian Cuisine',
        description: 'Serving all-veg multi-cuisine meals made with the finest local and seasonal ingredients.'
    },
    {
        icon: '🏰',
        title: 'Royal Ambiance',
        description: 'Experience dining in a regal yet serene setting that reflects Rajasthan’s heritage and luxury.'
    }
];

// --- Data for Slideshow Media (supports images and videos) ---
const slideshowMedia = [
    {
        type: 'video', // Added video type
        src: "/images/pangatvideo.mp4",
        alt: "Vibrant video of restaurant ambiance"
    },
    {
        type: 'image',
        src: "/images/pangat1.jpg",
        alt: "Luxurious dining hall of Pangat restaurant at Hotel Bhakyi Palace"
    },
    {
        type: 'video', // Added video type
        src: "/images/pangatvideo2.mp4",
        alt: "Vibrant video of restaurant ambiance"
    },
];

/**
 * DiningSection Component
 * Features the 'Pangat' restaurant with text, highlights, and an image/video carousel.
 */
const DiningSection = () => {
    // --- State and Logic for Image Carousel ---
    const [currentIndex, setCurrentIndex] = useState(0);
    // Create a ref to hold an array of media elements (for video control)
    const mediaRefs = useRef([]);

    // Memoized 'next' function to prevent re-creation on every render
    const nextSlide = useCallback(() => {
        setCurrentIndex(prev => (prev === slideshowMedia.length - 1 ? 0 : prev + 1));
    }, [slideshowMedia.length]); // Added slideshowMedia.length to dependency array

    const prevSlide = () => {
        setCurrentIndex(prev => (prev === 0 ? slideshowMedia.length - 1 : prev - 1));
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    // Autoplay effect and video control
    useEffect(() => {
        // Set a timer to call nextSlide every 5 seconds
        const autoPlayTimer = setTimeout(nextSlide, 5000);
        
        // --- Video Playback Logic ---
        // Loop through all media refs
        mediaRefs.current.forEach((ref, index) => {
            if (ref && ref.tagName === 'VIDEO') { // Check if the ref is a video
                if (index === currentIndex) {
                    // If it's the current slide, play it
                    ref.play().catch(error => {
                        // Handle potential autoplay block
                        console.warn("Video autoplay was prevented:", error);
                    });
                } else {
                    // If not the current slide, pause it and reset time
                    ref.pause();
                    ref.currentTime = 0;
                }
            }
        });

        // Clear the timer when the component unmounts or currentIndex changes
        return () => clearTimeout(autoPlayTimer);
    }, [currentIndex, nextSlide]); // Dependencies

    // --- End of Carousel Logic ---

    return (
        // Main section with warm cream background ('brand-warm-bg')
        <section className="font-sans bg-brand-warm-bg antialiased">
            {/* Main container */}
            <div className="container mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">

                {/* --- Heading Block --- */}
                <div className="max-w-3xl mx-auto text-center mb-8">
                    <p className="text-sm font-semibold text-brand-accent uppercase tracking-widest mb-3">
                        OUR DINING
                    </p>
                    <h2 className="font-serif text-3xl font-bold text-brand-primary md:text-5xl">
                        Pangat – The Royal Vegetarian Experience
                    </h2>
                </div>

                {/* --- Descriptive Paragraph --- */}
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <p className="text-base text-brand-secondary leading-relaxed md:text-lg" style={{ lineHeight: '1.85' }}>
                        Step into 'Pangat' — our signature restaurant at Hotel Bhakyi Palace, where tradition meets taste. Inspired by the royal dining halls of Rajasthan, Pangat brings you an exquisite vegetarian experience in a regal setting. From authentic Rajasthani thalis to global gourmet dishes, each meal is crafted with devotion and served with grace.
                    </p>
                </div>

                {/* --- Highlight Points Grid ---
                  - Mobile: 1 column (grid-cols-1)
                  - Tablet: 2 columns (sm:grid-cols-2)
                  - Desktop: 3 columns (lg:grid-cols-3)
                */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
                    {diningHighlights.map((item, index) => (
                        <div 
                            key={index} 
                            className="bg-white shadow-md rounded-2xl p-8 text-center
                                       border border-brand-highlight 
                                       transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                        >
                            <span className="text-3xl text-brand-accent mb-4 inline-block">{item.icon}</span>
                            <h3 className="font-serif text-xl font-semibold text-brand-primary mb-2">
                                {item.title}
                            </h3>
                            <p className="text-brand-secondary text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* --- Slideshow Section --- */}
                <div className="relative mt-16 w-full max-w-5xl mx-auto">
                    {/* Image Wrapper: h-[400px] on mobile, md:h-[500px] on desktop */}
                    <div className="relative h-64 md:h-[500px] overflow-hidden rounded-2xl shadow-lg">
                        {/* Map all media for fade transition */}
                        {slideshowMedia.map((media, index) => {
                            const mediaClasses = `absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                                index === currentIndex ? 'opacity-100' : 'opacity-0'
                            }`;

                            if (media.type === 'image') {
                                return (
                                    <img
                                        key={media.src}
                                        ref={el => mediaRefs.current[index] = el} // Add to ref array
                                        src={media.src}
                                        alt={media.alt}
                                        className={mediaClasses}
                                        loading="lazy"
                                    />
                                );
                            }

                            if (media.type === 'video') {
                                return (
                                    <video
                                        key={media.src}
                                        ref={el => mediaRefs.current[index] = el} // Add to ref array
                                        src={media.src}
                                        className={mediaClasses}
                                        muted // Muted is required for autoplay
                                        loop
                                        playsInline // Important for iOS
                                        alt={media.alt} // Alt text for accessibility (though not standard)
                                    >
                                        Your browser does not support the video tag.
                                    </video>
                                );
                            }
                            return null;
                        })}
                    </div>

                    {/* Prev Button */}
                    <button
                        onClick={prevSlide}
                        className="absolute top-1/2 left-3 sm:left-4 -translate-y-1/2 bg-brand-accent text-white p-3 rounded-full 
                                   hover:bg-opacity-80 transition z-10 shadow-md"
                        aria-label="Previous image"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Next Button */}
                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 right-3 sm:right-4 -translate-y-1/2 bg-brand-accent text-white p-3 rounded-full 
                                   hover:bg-opacity-80 transition z-10 shadow-md"
                        aria-label="Next image"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Pagination Dots */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex justify-center gap-2">
                        {slideshowMedia.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                                    index === currentIndex ? 'bg-brand-accent scale-110' : 'bg-white bg-opacity-50 hover:bg-white'
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* --- View Restaurant Button --- */}
                <div className="text-center mt-16">
                    <a 
                        
                        className="inline-block bg-[var(--grn)] text-white font-semibold 
                                   px-10 py-4 rounded-full text-lg 
                                   hover:bg-opacity-80 transition-all duration-300 
                                   shadow-md hover:shadow-lg"
                    >
                       <Link to="/pangat">Explore Pangat</Link>
                    </a>
                </div>

            </div>
        </section>
    );
};

export default DiningSection;

