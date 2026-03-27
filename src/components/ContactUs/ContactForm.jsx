import React, { useState } from "react";
import { motion } from "framer-motion";

const maskReveal = {
  hidden: { y: "100%", opacity: 0 },
  visible: { 
    y: "0%", 
    opacity: 1, 
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function ContactForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    checkInDate: "",
    checkOutDate: "",
    guests: "",
    subject: "Hotel Booking Enquiry",
    message: "",
  });

  const [status, setStatus] = useState({ loading: false, error: null });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const validate = () => {
    if (!form.fullName.trim()) return "Please enter your full name.";
    if (!form.phone.trim()) return "Please provide a valid phone number.";
    if (!form.checkInDate) return "Check-in date is required.";
    return null;
  };

  const formatDate = (dateString) => {
    if (!dateString) return "Not specified";
    return new Date(dateString).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: null });

    const err = validate();
    if (err) {
      setStatus({ loading: false, error: err });
      return;
    }

    // Professional WhatsApp Template
    const whatsappMessage = `*NEW BOOKING ENQUIRY - HOTEL BHAKTI*
---------------------------------------
*Guest Details:*
• Name: ${form.fullName}
• Phone: ${form.phone}
• Email: ${form.email || "N/A"}

*Stay Information:*
• Check-in: ${formatDate(form.checkInDate)}
• Check-out: ${formatDate(form.checkOutDate)}
• Guests: ${form.guests || "Not specified"}

*Subject:* ${form.subject}

*Message:*
${form.message || "No additional message."}
---------------------------------------
_Sent via Hotel Bhakti Website_`.trim();

    const whatsappURL = `https://wa.me/+919772578699?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Smooth delay before opening WhatsApp
    setTimeout(() => {
      window.open(whatsappURL, "_blank");
      setStatus({ loading: false, error: null });
    }, 800);
  };

  return (
    <section className="bg-[#FAF9F6] py-24 md:py-36 px-6 selection:bg-[#c49a6c] selection:text-white">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20 flex flex-col items-center">
          <div className="overflow-hidden mb-4">
            <motion.p variants={maskReveal} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-[#c49a6c] text-[10px] md:text-xs uppercase tracking-[0.4em] font-medium">
              Reservation Desk
            </motion.p>
          </div>
          <div className="overflow-hidden mb-6">
            <motion.h2 variants={maskReveal} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-[#1a1a1a]">
              Send an <span className="italic text-[#c49a6c]">Enquiry</span>
            </motion.h2>
          </div>
          <motion.div initial={{ width: 0 }} whileInView={{ width: "40px" }} transition={{ duration: 1 }} className="h-px bg-[#c49a6c]/40" />
        </div>

        {status.error && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-10 p-4 border border-red-200 bg-red-50 text-red-700 text-sm text-center">
            {status.error}
          </motion.div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          
          {/* Full Name */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:col-span-2">
            <label className="block text-[10px] uppercase tracking-[0.2em] text-[#888] mb-2">Full Name *</label>
            <input
              name="fullName"
              placeholder="Your divine name"
              value={form.fullName}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-[#d5c5b5] py-3 text-[#1a1a1a] focus:border-[#c49a6c] outline-none transition-colors duration-500 placeholder:text-[#ccc] font-light"
            />
          </motion.div>

          {/* Phone */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <label className="block text-[10px] uppercase tracking-[0.2em] text-[#888] mb-2">Phone Number *</label>
            <input
              name="phone"
              placeholder="+91"
              value={form.phone}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-[#d5c5b5] py-3 text-[#1a1a1a] focus:border-[#c49a6c] outline-none transition-colors duration-500 font-light"
            />
          </motion.div>

          {/* Email */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <label className="block text-[10px] uppercase tracking-[0.2em] text-[#888] mb-2">Email Address</label>
            <input
              name="email"
              placeholder="For confirmation"
              value={form.email}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-[#d5c5b5] py-3 text-[#1a1a1a] focus:border-[#c49a6c] outline-none transition-colors duration-500 font-light"
            />
          </motion.div>

          {/* Check-in */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <label className="block text-[10px] uppercase tracking-[0.2em] text-[#888] mb-2">Check-in Date *</label>
            <input
              type="date"
              name="checkInDate"
              value={form.checkInDate}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-[#d5c5b5] py-3 text-[#1a1a1a] focus:border-[#c49a6c] outline-none transition-colors duration-500 font-light appearance-none"
            />
          </motion.div>

          {/* Check-out */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <label className="block text-[10px] uppercase tracking-[0.2em] text-[#888] mb-2">Check-out Date</label>
            <input
              type="date"
              name="checkOutDate"
              value={form.checkOutDate}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-[#d5c5b5] py-3 text-[#1a1a1a] focus:border-[#c49a6c] outline-none transition-colors duration-500 font-light appearance-none"
            />
          </motion.div>

          {/* Guests */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:col-span-2">
            <label className="block text-[10px] uppercase tracking-[0.2em] text-[#888] mb-2">Number of Guests</label>
            <input
              type="number"
              name="guests"
              placeholder="0"
              value={form.guests}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-[#d5c5b5] py-3 text-[#1a1a1a] focus:border-[#c49a6c] outline-none transition-colors duration-500 font-light"
            />
          </motion.div>

          {/* Message */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:col-span-2">
            <label className="block text-[10px] uppercase tracking-[0.2em] text-[#888] mb-2">Special Requests / Message</label>
            <textarea
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-[#d5c5b5] py-3 text-[#1a1a1a] focus:border-[#c49a6c] outline-none transition-colors duration-500 font-light resize-none"
            />
          </motion.div>

          {/* Submit */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:col-span-2 mt-8 text-center">
            <button
              type="submit"
              disabled={status.loading}
              className="inline-flex items-center justify-center px-12 py-5 bg-[#1a1a1a] text-white text-[10px] md:text-xs uppercase tracking-[0.25em] font-light transition-all duration-500 hover:bg-[#c49a6c] disabled:bg-gray-400"
            >
              {status.loading ? "Processing..." : "Enquire via WhatsApp"}
            </button>
            <p className="mt-4 text-[10px] text-[#888] uppercase tracking-widest font-light italic">
              * Response typically within 2 hours
            </p>
          </motion.div>

        </form>
      </div>
    </section>
  );
}