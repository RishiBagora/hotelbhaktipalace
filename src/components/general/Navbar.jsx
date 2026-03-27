import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import ContactRibbon from '../home/ContactRibbon';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open for smooth aesthetic experience
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const allLinks = ["Home", "About Us", "Rooms", "Attractions", "Contact"];

  return (
    <>
      {/* --- Main Minimalist Header Wrapper --- */}
      <header className="fixed top-0 w-full z-[80] flex flex-col">
          
        <nav
          className={`w-full transition-all duration-500 border-b border-black/5 ${
            isScrolled 
              ? "bg-white/95 backdrop-blur-xl shadow-sm py-2" 
              : "bg-[#faf9f6]/95 backdrop-blur-md py-4"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-3 items-center">
            
            {/* 1. Left: Minimal Aesthetic Hamburger Menu Button */}
            <div className="flex justify-start">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="group flex flex-col gap-[5px] focus:outline-none p-2 -ml-2 hover:opacity-70 transition-opacity"
                aria-label="Toggle Menu"
              >
                <span className="w-7 h-[1.5px] bg-[#1a1a1a] block rounded-full transition-all duration-300 group-hover:w-9"></span>
                <span className="w-5 h-[1.5px] bg-[#1a1a1a] block rounded-full transition-all duration-300 group-hover:w-7"></span>
                <span className="w-8 h-[1.5px] bg-[#1a1a1a] block rounded-full transition-all duration-300"></span>
              </button>
            </div>

            {/* 2. Center: Logo (Keep it centered) */}
            <div className="flex justify-center">
              <Link to="/" className="relative outline-none">
                <img 
                  className={`w-auto transition-all duration-500 ${isScrolled ? "h-10" : "h-14 md:h-16"}`} 
                  src="/images/bhaktilogo.png" 
                  alt="Hotel Bhakti Palace"
                  onError={(e) => { 
                      e.target.onerror = null; 
                      e.target.src = 'https://placehold.co/160x50/00000000/1a1a1a?text=Bhakti+Palace&font=playfair+display'; 
                  }}
                />
              </Link>
            </div>

            {/* 3. Right: Reserve Now Button */}
            <div className="flex justify-end">
               <Link
                  to="/contact"
                  className="text-[9px] md:text-xs uppercase tracking-[0.1em] md:tracking-[0.15em] font-medium border border-[#c49a6c] text-[#c49a6c] md:bg-[#c49a6c] md:text-white rounded-sm px-3 py-1.5 md:px-6 md:py-[10px] hover:bg-[#1a1a1a] hover:border-[#1a1a1a] hover:text-white transition-all duration-400 whitespace-nowrap"
                >
                  Reserve Now
                </Link>
            </div>
          </div>
        </nav>

        {/* Global Contact Ribbon right beneath Navbar */}
        <div className="w-full overflow-hidden shadow-md bg-black">
           <ContactRibbon />
        </div>
      </header>

      {/* --- Aesthetic Sliding Side Panel Menu --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <div className="fixed inset-0 z-[100] flex">
            
            {/* Dark Blur Overlay Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Off-canvas menu panel sliding from Left to Right */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 220, duration: 0.6 }}
              className="relative w-[85vw] max-w-[420px] h-full bg-[#faf9f6] shadow-2xl flex flex-col pt-24"
            >
              {/* Close Button Icon */}
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-8 right-8 p-2 rounded-full hover:bg-black/5 transition-colors focus:outline-none group"
                aria-label="Close Menu"
              >
                <svg className="transform transition-transform duration-300 group-hover:rotate-90" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              <div className="flex flex-col flex-1 px-10 md:px-14 pb-8 overflow-y-auto hide-scrollbar">
                
                <span className="text-[10px] uppercase font-semibold tracking-[0.3em] text-[#c49a6c] mb-10 block">
                  Menu
                </span>

                {/* Staggered Navigation Links */}
                <div className="flex flex-col gap-6">
                  {allLinks.map((link, i) => (
                    <motion.div
                      key={link}
                      initial={{ opacity: 0, x: -30, rotateY: 30 }}
                      animate={{ opacity: 1, x: 0, rotateY: 0 }}
                      transition={{ delay: 0.2 + (i * 0.1), duration: 0.5, ease: "easeOut" }}
                    >
                      <Link
                        to={link === "Home" ? "/" : `/${link.toLowerCase().replace(" ", "")}`}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-4xl md:text-[2rem] font-serif text-[#1a1a1a] hover:text-[#c49a6c] transition-colors duration-300 block w-max"
                      >
                        {link}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Contact Sub-info fading in at the bottom */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="mt-auto pt-16"
                >
                  <div className="w-12 h-[1px] bg-[#c49a6c] mb-8"></div>
                  <div className="flex flex-col gap-6">
                    <div>
                      <p className="text-[9px] uppercase tracking-widest text-gray-500 mb-2">Bookings & Inquiries</p>
                      <a href="tel:+919772578699" className="text-lg font-serif text-[#1a1a1a] hover:text-[#c49a6c] transition-colors">
                        +91 97725 78699
                      </a>
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-widest text-gray-500 mb-2">Location Strategy</p>
                      <p className="text-sm text-gray-700 font-light leading-relaxed max-w-[250px]">
                        Near Shreenath Ji Temple,<br />Nathdwara, Rajasthan
                      </p>
                    </div>
                  </div>
                </motion.div>

              </div>
              <style jsx>{`
                .hide-scrollbar::-webkit-scrollbar {
                  display: none;
                }
                .hide-scrollbar {
                  -ms-overflow-style: none;
                  scrollbar-width: none;
                }
              `}</style>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}