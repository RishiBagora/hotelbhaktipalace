// ContactForm.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

/**
 * ContactForm
 * Ultra-luxury editorial enquiry form styled with Tailwind and animated with Framer Motion.
 *
 * Notes:
 * - Ensure Playfair Display and Inter are loaded globally (e.g., in index.html or via @import).
 * - Tailwind must be configured in the project.
 * - Framer Motion: npm install framer-motion
 */

const fadeUp = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.06,
    },
  },
};

export default function ContactForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ loading: false, success: null, error: null });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const validate = () => {
    // Minimal, non-intrusive validation for luxury UX
    if (!form.fullName.trim()) return "Please enter your full name.";
    if (!form.email.trim()) return "Please provide an email address.";
    // phone optional but if entered ensure some digits
    if (form.phone && form.phone.replace(/\D/g, "").length < 6) return "Please enter a valid phone number.";
    if (!form.message.trim()) return "Please write a brief message.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    const err = validate();
    if (err) {
      setStatus({ loading: false, success: null, error: err });
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    try {
      // Fake submit for demo — replace with real API integration
      await new Promise((res) => setTimeout(res, 900));
      setStatus({ loading: false, success: "Thank you — we will contact you shortly.", error: null });
      setForm({ fullName: "", email: "", phone: "", subject: "", message: "" });
    } catch (submitError) {
      setStatus({ loading: false, success: null, error: "Something went wrong. Please try again later." });
    }
  };

  return (
    <section
      aria-labelledby="contact-form-heading"
      className="bg-white py-[120px] px-5"
      style={{
        // theme variables — keep consistent with site
        "--accent": "#c49a6c",
        "--text-primary": "#1a1a1a",
        "--text-secondary": "#6d6d6d",
        "--line": "rgba(0,0,0,0.08)",
        "--input-border": "rgba(0,0,0,0.15)",
      }}
    >
      <div className="max-w-3xl mx-auto">
        {/* Header (staggered) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="text-center mb-12"
        >
          <h2
            id="contact-form-heading"
            className="text-4xl md:text-6xl font-serif text-[var(--text-primary)] mb-4"
            style={{ fontFamily: "Playfair Display, serif", lineHeight: 1.02 }}
          >
            Send Us an Enquiry
          </h2>

          <p
            className="text-base md:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.9 }}
          >
            For reservations, room availability, group bookings, or personalised assistance — our team
            at Hotel Bhakti Palace will reach out with all the details.
          </p>
        </motion.div>

        {/* Status messages */}
        {status.error && (
          <div className="mb-6 text-sm text-red-700" role="status" aria-live="polite">
            {status.error}
          </div>
        )}
        {status.success && (
          <div className="mb-6 text-sm text-green-700" role="status" aria-live="polite">
            {status.success}
          </div>
        )}

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={stagger}
          className="flex flex-col gap-12"
          autoComplete="off"
        >
          {/* Full name */}
          <motion.div variants={fadeUp} className="flex flex-col gap-2">
            <label htmlFor="fullName" className="uppercase text-xs tracking-[0.25em] text-[var(--accent)] font-medium">
              Full Name
            </label>

            <input
              id="fullName"
              name="fullName"
              type="text"
              value={form.fullName}
              onChange={handleChange}
              placeholder="e.g., Rajesh Kumar"
              autoComplete="off"
              aria-label="Full name"
              className="bg-transparent py-3 text-lg text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] outline-none border-b border-[var(--input-border)] focus:border-[var(--accent)] transition-all duration-300"
              style={{ fontFamily: "Inter, sans-serif" }}
            />
          </motion.div>

          {/* Email + Phone horizontally on wide screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={fadeUp} className="flex flex-col gap-2">
              <label htmlFor="email" className="uppercase text-xs tracking-[0.25em] text-[var(--accent)] font-medium">
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="hello@youremail.com"
                autoComplete="off"
                aria-label="Email address"
                className="bg-transparent py-3 text-lg text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] outline-none border-b border-[var(--input-border)] focus:border-[var(--accent)] transition-all duration-300"
                style={{ fontFamily: "Inter, sans-serif" }}
              />
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-2">
              <label htmlFor="phone" className="uppercase text-xs tracking-[0.25em] text-[var(--accent)] font-medium">
                Phone Number
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                autoComplete="off"
                aria-label="Phone number"
                className="bg-transparent py-3 text-lg text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] outline-none border-b border-[var(--input-border)] focus:border-[var(--accent)] transition-all duration-300"
                style={{ fontFamily: "Inter, sans-serif" }}
              />
            </motion.div>
          </div>

          {/* Subject */}
          <motion.div variants={fadeUp} className="flex flex-col gap-2">
            <label htmlFor="subject" className="uppercase text-xs tracking-[0.25em] text-[var(--accent)] font-medium">
              Subject
            </label>

            <input
              id="subject"
              name="subject"
              type="text"
              value={form.subject}
              onChange={handleChange}
              placeholder="e.g., Room availability for festival dates"
              autoComplete="off"
              aria-label="Subject"
              className="bg-transparent py-3 text-lg text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] outline-none border-b border-[var(--input-border)] focus:border-[var(--accent)] transition-all duration-300"
              style={{ fontFamily: "Inter, sans-serif" }}
            />
          </motion.div>

          {/* Message */}
          <motion.div variants={fadeUp} className="flex flex-col gap-2">
            <label htmlFor="message" className="uppercase text-xs tracking-[0.25em] text-[var(--accent)] font-medium">
              Your Message
            </label>

            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write any specifics — dates, number of guests, special requests..."
              aria-label="Your message"
              autoComplete="off"
              className="bg-transparent py-3 text-lg text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] outline-none border-b border-[var(--input-border)] focus:border-[var(--accent)] transition-all duration-300 min-h-[140px] resize-none"
              style={{ fontFamily: "Inter, sans-serif" }}
            />
          </motion.div>

          {/* Button */}
          <motion.div variants={fadeUp} className="flex items-center">
            <button
              type="submit"
              aria-label="Submit enquiry"
              disabled={status.loading}
              className="mt-4 px-10 py-4 border border-[var(--accent)] text-[var(--accent)] rounded-full tracking-wide text-sm font-medium hover:bg-[var(--accent)] hover:text-white transition-all duration-500 disabled:opacity-60 disabled:cursor-not-allowed"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {status.loading ? "Sending…" : "Submit Enquiry"}
            </button>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
}
