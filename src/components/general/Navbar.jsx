import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

/**
 * Main App component to render the Navbar.
 * This file is self-contained.
 */
export default function App() {

  // --- SVG Icons ---
  const MenuIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  );

  const CloseIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );

  /**
   * Navbar Component
   * A responsive, fixed navbar with a perfectly centered logo.
   */
  const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Detect scroll for subtle shadow
    useEffect(() => {
      const handleScroll = () => setIsScrolled(window.scrollY > 10);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = ["Home", "About Us", "Attractions"];
    const rightLinks = ["Blogs", "Contact"];

    return (
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "shadow-md bg-white" : "bg-white/95"
        }`}
        style={{
          fontFamily: "Inter, sans-serif",
        }}
      >
        {/*
          - Uses `flex justify-between` for mobile (Logo on left, Hamburger on right)
          - Uses `md:grid md:grid-cols-3` for desktop to ensure perfect logo centering
        */}
        <div className="max-w-7xl mx-auto flex justify-between md:grid md:grid-cols-3 items-center px-6 md:px-12 py-3">
          
          {/* Left Links (Desktop) */}
          <div className="hidden md:flex items-center gap-8 justify-start">
            {navLinks.map((link) => (
              <div
                key={link}
                className="text-sm uppercase tracking-wide text-[#1a1a1a] hover:text-[#c49a6c] transition-colors duration-300"
              >
                <Link to={link === "Home" ? "/" : `/${link.toLowerCase().replace(" ", "")}`}>
                {link}
                </Link>
                
              </div>
            ))}
          </div>

          {/* Center Logo */}
          <div className="flex md:justify-center">
            {/* Replaced React Router <Link> with <a> for preview compatibility */}
            <Link to="/">
            <div>
              <img 
                className="h-14 w-auto" 
                src="./images/bhaktilogo.png" 
                alt="Hotel Bhakti Palace"
                onError={(e) => { e.target.src = 'https://placehold.co/160x50/00000000/1a1a1a?text=Bhakti+Palace&font=playfair+display'; e.target.onerror = null; }}
              />
            </div>
            </Link>
          </div>

          {/* Right Links & Hamburger Menu */}
          <div className="flex justify-end items-center">
            {/* Desktop Right Links */}
            <div className="hidden md:flex items-center gap-8">
              {rightLinks.map((link) => (
                <div
                  key={link}
                  className="text-sm uppercase tracking-wide text-[#1a1a1a] hover:text-[#c49a6c] transition-colors duration-300"
                >
                  <Link to={link === "Home" ? "/" : `/${link.toLowerCase().replace(" ", "")}`}>
                {link}
                </Link>
                </div>
              ))}
              <a
                href="#inquire-now"
                className="text-sm uppercase tracking-wide border border-[#c49a6c] text-[#c49a6c] rounded-full px-4 py-1 hover:bg-[#c49a6c] hover:text-white transition-all duration-300"
              >
                Inquire Now
              </a>
            </div>

            {/* Hamburger Menu (Mobile) */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="focus:outline-none text-[#1a1a1a]"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <CloseIcon className="h-6 w-6" />
                ) : (
                  <MenuIcon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden bg-white shadow-lg flex flex-col items-center gap-6 py-8 overflow-hidden"
              /*
                - Animates `opacity` and `y` (transform) for a smooth slide-down effect
                - Avoids animating `height` which can be laggy
              */
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {[
                ...navLinks,
                ...rightLinks,
              ].map((link) => (
                <div
                  key={link}
                 
                  className="text-sm uppercase tracking-wide text-[#1a1a1a] hover:text-[#c49a6c] transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link to={link === "Home" ? "/" : `/${link.toLowerCase().replace(" ", "")}`}>
                {link}
                </Link>
                </div>
              ))}
              <a
                href="#inquire-now"
                className="text-sm uppercase tracking-wide border border-[#c49a6c] text-[#c49a6c] rounded-full px-5 py-2 hover:bg-[#c49a6c] hover:text-white transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Inquire Now
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    );
  };

  /**
   * App component's return value.
   */
  return (
    <>
      {/* Global Styles and Font Imports */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Playfair+Display:wght@600;700&display=swap');
          
          body {
            font-family: 'Inter', sans-serif;
          }
        `}
      </style>
      
      {/* Framer Motion Dependency */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/framer-motion/10.16.4/framer-motion.umd.min.js"></script>
      
      {/* Render the Navbar */}
      <Navbar />

    
    </>
  );
}