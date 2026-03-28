import React from "react";
import { motion } from "framer-motion";
import JharokhaFrame from "../general/JharokhaFrame";
import { Utensils } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

const signatureDishes = [
  {
    name: "Paneer Rajwada",
    description: "Cottage cheese cubes simmered in a rich, golden cashew and saffron gravy.",
    price: "Signature"
  },
  {
    name: "Ker Sangri Heritage",
    description: "Classic desert beans and berries tempered with dried red chillies and Mewari spices.",
    price: "Traditional"
  },
  {
    name: "Dal Baati (Individual Portions)",
    description: "Traditional roasted wheat balls served with a spicy lentil curry and ghee.",
    price: "Authentic"
  },
  {
    name: "Gatte ki Subzi",
    description: "Gram flour dumplings in a tangy yogurt-based gravy, a Mewar household staple.",
    price: "Classic"
  }
];

const MenuHighlights = () => {
  return (
    <section className="bg-white py-24 md:py-32 selection:bg-[#c49a6c] selection:text-white relative overflow-hidden">
      
      {/* Decorative Top Arch Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-[url('https://www.transparenttextures.com/patterns/az-subtle.png')] opacity-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* --- SECTION HEADER --- */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="text-center mb-20"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#c49a6c] font-bold">Curated Flavors</span>
          <h2 className="mt-4 text-4xl md:text-6xl font-serif font-light text-[#1a1a1a]">
            Signature <span className="italic text-[#888]">Delicacies</span>
          </h2>
          <div className="mt-8 w-12 h-px bg-[#c49a6c] mx-auto" />
        </motion.div>

        {/* --- CONTENT GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* LEFT: THE DISH SHOWCASE (Jharokha) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="lg:col-span-5 order-2 lg:order-1 flex justify-center"
          >
            <JharokhaFrame 
              src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=1000" 
              alt="Signature Rajasthani Dish"
              className="w-full max-w-[400px]"
            />
          </motion.div>

          {/* RIGHT: THE SELECTIVE MENU --- */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="lg:col-span-7 order-1 lg:order-2"
          >
            <div className="flex items-center gap-4 mb-10">
               <Utensils size={18} className="text-[#c49a6c]" />
               <h3 className="font-serif text-2xl md:text-3xl text-[#1a1a1a] italic">From the Chef's Pot</h3>
            </div>

            {/* Menu List */}
            <div className="space-y-12">
              {signatureDishes.map((dish, index) => (
                <div key={index} className="group flex justify-between items-start border-b border-[#f0ebe3] pb-6 hover:border-[#c49a6c] transition-colors duration-500">
                  <div className="max-w-md">
                    <h4 className="font-serif text-xl text-[#1a1a1a] group-hover:text-[#c49a6c] transition-colors">
                      {dish.name}
                    </h4>
                    <p className="mt-2 text-sm text-[#888] font-light leading-relaxed">
                      {dish.description}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase tracking-widest text-[#c49a6c] font-bold border border-[#c49a6c]/20 px-3 py-1">
                      {dish.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Button to Full Menu */}
            <div className="mt-16 flex items-center gap-8">
               <button className="px-10 py-4 bg-[#1a1a1a] text-white text-[10px] uppercase tracking-[0.3em] hover:bg-[#c49a6c] transition-all">
                  Explore Full Menu
               </button>
               <p className="text-[10px] text-[#888] uppercase tracking-widest italic font-medium">
                  Available for Dine-in & Room Service
               </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;