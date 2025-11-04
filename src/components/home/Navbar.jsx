import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="relative top-0 left-0 w-full bg-white shadow-md z-50"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-8 h-16">
        
        {/* ---- Left: Logo ---- */}
        <div className="flex items-center gap-2">
          <img
            src="./images/bhaktilogo.png"
            alt="Hotel Bhakyi Palace"
            className="h-16 w-auto object-contain"
          />
          {/* <span
            className="text-lg font-serif tracking-wide"
            style={{
              fontFamily: "Playfair Display, serif",
              color: "#1a1a1a",
              fontWeight: 600,
            }}
          >
            Bhakyi Palace
          </span> */}
        </div>

        {/* ---- Center: Desktop Nav Links ---- */}
        <div className="hidden md:flex gap-8 text-sm text-gray-700">
          {["Home", "Rooms", "Dining", "Gallery", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-[#c49a6c] transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        {/* ---- Right: Buttons ---- */}
        <div className="hidden md:flex items-center gap-3">
          <button className="border border-gray-300 rounded-full px-4 py-1 text-sm hover:bg-gray-100 transition-colors">
            Contact us
          </button>
          <button className="border border-black bg-black text-white rounded-full px-4 py-1 text-sm font-bold hover:bg-gray-800 transition-colors">
            Book now
          </button>
        </div>

        {/* ---- Mobile Hamburger ---- */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            <img
              src={menuOpen ? "/close.svg" : "/menu.svg"}
              alt="Menu Icon"
              className="h-6 w-6 cursor-pointer"
            />
          </button>
        </div>
      </nav>

      {/* ---- Mobile Menu (Drawer) ---- */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden bg-white shadow-lg absolute top-16 left-0 w-full py-6 px-6 flex flex-col items-center gap-6 text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {["Home", "Rooms", "Dining", "Gallery", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-base hover:text-[#c49a6c] transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}

            <div className="flex flex-col gap-3 w-full mt-4">
              <button className="border border-gray-300 rounded-full py-2 text-sm hover:bg-gray-100 transition-colors">
                Contact us
              </button>
              <button className="border border-black bg-black text-white rounded-full py-2 text-sm font-bold hover:bg-gray-800 transition-colors">
                Book now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
