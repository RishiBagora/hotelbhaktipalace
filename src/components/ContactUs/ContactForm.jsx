// ContactForm.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

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
    checkInDate: "",
    checkOutDate: "",
    guests: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({ loading: false, error: null });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const validate = () => {
    if (!form.fullName.trim()) return "Please enter your full name.";
    if (!form.phone.trim()) return "Please provide a phone number.";
    if (!form.checkInDate) return "Please select check-in date.";
    if (!form.checkOutDate) return "Please select check-out date.";
    if (!form.guests) return "Please enter number of guests.";
    return null;
  };

  const formatDate = (dateString) => {
  if (!dateString) return "—";
  return new Date(dateString).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
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

    const whatsappMessage = `
Hello Hotel Bhakti Palace 👋

I would like to enquire about a booking.

🧑 Name: ${form.fullName}
📞 Phone: ${form.phone}
📧 Email: ${form.email || "Not provided"}

📅 Check-in Date: ${formatDate(form.checkInDate)}
📅 Check-out Date: ${formatDate(form.checkOutDate)}
👥 Number of Guests: ${form.guests}

📝 Subject: ${form.subject || "Hotel Booking Enquiry"}

💬 Message:
${form.message || "—"}

Please contact me with availability and pricing.
Thank you.
    `.trim();

    const whatsappURL = `https://wa.me/+918302501774?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");

    setStatus({ loading: false, error: null });
  };

  return (
    <section
      className="bg-white py-[120px] px-5"
      style={{
        "--accent": "#c49a6c",
        "--text-primary": "#1a1a1a",
        "--text-secondary": "#6d6d6d",
        "--input-border": "rgba(0,0,0,0.15)",
      }}
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-serif mb-4">
            Send Us an Enquiry
          </h2>
          <p className="text-lg text-[var(--text-secondary)]">
            Room availability, bookings or special requests — we’ll assist you personally.
          </p>
        </motion.div>

        {status.error && (
          <div className="mb-6 text-sm text-red-700">{status.error}</div>
        )}

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="flex flex-col gap-12"
        >
          {/* Name */}
          <motion.div variants={fadeUp}>
            <label className="uppercase text-xs tracking-[0.25em] text-[var(--accent)]">
              Full Name
            </label>
            <input
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              className="w-full bg-transparent border-b py-3 text-lg outline-none"
            />
          </motion.div>

          {/* Phone + Email */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeUp}>
              <label className="uppercase text-xs tracking-[0.25em] text-[var(--accent)]">
                Phone Number
              </label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full bg-transparent border-b py-3 text-lg outline-none"
              />
            </motion.div>

            <motion.div variants={fadeUp}>
              <label className="uppercase text-xs tracking-[0.25em] text-[var(--accent)]">
                Email (optional)
              </label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b py-3 text-lg outline-none"
              />
            </motion.div>
          </div>

          {/* Date + Guests */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeUp}>
              <label className="uppercase text-xs tracking-[0.25em] text-[var(--accent)]">
                Check-in Date
              </label>
              <input
                type="date"
                name="checkInDate"
                value={form.checkInDate}
                onChange={handleChange}
                className="w-full bg-transparent border-b py-3 text-lg outline-none"
              />
            </motion.div>
          
            <motion.div variants={fadeUp}>
              <label className="uppercase text-xs tracking-[0.25em] text-[var(--accent)]">
                Check-out Date
              </label>
              <input
                type="date"
                name="checkOutDate"
                value={form.checkOutDate}
                onChange={handleChange}
                className="w-full bg-transparent border-b py-3 text-lg outline-none"
              />
            </motion.div>

            <motion.div variants={fadeUp}>
              <label className="uppercase text-xs tracking-[0.25em] text-[var(--accent)]">
                Number of Guests
              </label>
              <input
                type="number"
                min="1"
                name="guests"
                value={form.guests}
                onChange={handleChange}
                className="w-full bg-transparent border-b py-3 text-lg outline-none"
              />
            </motion.div>
          </div>

          {/* Subject */}
          <motion.div variants={fadeUp}>
            <label className="uppercase text-xs tracking-[0.25em] text-[var(--accent)]">
              Subject
            </label>
            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className="w-full bg-transparent border-b py-3 text-lg outline-none"
            />
          </motion.div>

          {/* Message */}
          <motion.div variants={fadeUp}>
            <label className="uppercase text-xs tracking-[0.25em] text-[var(--accent)]">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full bg-transparent border-b py-3 text-lg outline-none min-h-[120px]"
            />
          </motion.div>

          {/* Submit */}
          <motion.div variants={fadeUp}>
            <button
              type="submit"
              disabled={status.loading}
              className="mt-6 px-10 py-4 border border-[var(--accent)] rounded-full text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white transition-all"
            >
              {status.loading ? "Opening WhatsApp…" : "Submit Enquiry"}
            </button>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
}
