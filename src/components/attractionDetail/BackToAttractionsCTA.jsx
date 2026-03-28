import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

/**
 * BackToAttractionsCTA - REFINED VERSION
 * A sophisticated closing for the attraction detail page.
 */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

const BackToAttractionsCTA = () => {
  return (
    <section className="bg-[#FAF9F6] py-24 md:py-36 border-t border-[#f0ebe3] selection:bg-[#c49a6c] selection:text-white overflow-hidden">
      
      {/* Decorative Vertical Line */}
      <motion.div 
        initial={{ height: 0 }}
        whileInView={{ height: "60px" }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-px bg-[#c49a6c]/30 mx-auto mb-16"
      />

      <motion.div
        className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Eyebrow Accent */}
        <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
          <div className="h-px w-6 bg-[#c49a6c]/60" />
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#c49a6c] font-medium font-sans">
            Journey Ahead
          </span>
          <div className="h-px w-6 bg-[#c49a6c]/60" />
        </motion.div>

        {/* Heading */}
        <motion.h3
          variants={fadeUp}
          className="text-4xl md:text-5xl font-serif font-light text-[#1a1a1a] leading-tight tracking-tight mb-8"
        >
          Discover More <br />
          <span className="italic text-[#c49a6c]">of Nathdwara</span>
        </motion.h3>

        {/* Supporting Text */}
        <motion.p
          variants={fadeUp}
          className="text-[#666] text-sm md:text-base lg:text-lg font-light leading-[1.9] max-w-2xl mx-auto tracking-wide mb-14"
        >
          Return to our curated guide and immerse yourself in the spiritual, 
          cultural, and historic wonders near <span className="text-[#c49a6c]">Hotel Bhakti</span>.
        </motion.p>

        {/* SHARP CTA BUTTON */}
        <motion.div variants={fadeUp} className="w-full sm:w-auto">
          <Link
            to="/attractions"
            className="group relative inline-flex items-center justify-center gap-3 px-12 py-5 bg-[#1a1a1a] text-white text-[10px] md:text-xs uppercase tracking-[0.25em] font-light transition-all duration-500 hover:bg-[#c49a6c]"
            aria-label="View all attractions"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-300" />
            <span>All Attractions</span>
          </Link>
        </motion.div>

        {/* Subtle Brand Tag */}
        <motion.div variants={fadeUp} className="mt-20 opacity-20">
           <p className="text-[10px] uppercase tracking-[0.6em] text-[#1a1a1a]">Nathdwara Chronicles</p>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default BackToAttractionsCTA;