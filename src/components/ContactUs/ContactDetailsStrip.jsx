// ContactDetailsStrip.jsx
import React from "react";
import { motion } from "framer-motion";
import { PiPhoneLight } from "react-icons/pi";
import { VscMail } from "react-icons/vsc";
import { CiLocationOn } from "react-icons/ci";
import { PiWhatsappLogoLight } from "react-icons/pi";
/**
 * ContactDetailsStrip
 * - Ultra-luxury reservation / contact section (editorial, no cards)
 * - Accepts `items` prop so caller can pass React Icon components (react-icons or custom)
 *
 * Usage:
 * <ContactDetailsStrip items={[ { icon: <FiPhone />, label: 'Reservation Phone', ... }, ... ]} />
 *
 * If an item does not provide `icon`, a visually-hidden placeholder is rendered (keeps layout consistent).
 */

/* Animation variants */
const fadeUp = {
    hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    },
};

const staggerContainer = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.12, delayChildren: 0.08 },
    },
};

const ContactDetailsStrip = ({ items }) => {
    // Fallback items if none passed (keeps component usable)
    const fallbackItems = [
        {
            icon: <PiPhoneLight className="w-7 h-7" />,
            label: "Reservation Phone",
            value: "+91 98765 43210",
            subtext: "Available 7:00 AM – 11:00 PM IST",
            link: "tel:+919876543210",
        },
        {
            icon: <PiWhatsappLogoLight className="w-7 h-7" />,
            label: "WhatsApp Support",
            value: "+91 98765 43210",
            subtext: "Instant replies for quick queries",
            link: "https://wa.me/919876543210",
        },
        {
            icon: <VscMail className="w-7 h-7" />,
            label: "Reservation Email",
            value: "reservations@hotelbhaktipalace.com",
            subtext: "For bookings, special requests & confirmations",
            link: "mailto:reservations@hotelbhaktipalace.com",
        },
        {
            icon: <CiLocationOn className="w-7 h-7" />,
            label: "Hotel Address",
            value: "Near Shree Nath Ji Temple, Nathdwara, Rajasthan",
            subtext: "Located in the spiritual heart of the city",
            link: "https://maps.app.goo.gl/EeNaB5H4dFQ3nJbB6",
        },
    ];

    const content = items && items.length ? items : fallbackItems;

    return (
        <section
            className="bg-[var(--background)] py-24 md:py-32"
            style={{
                "--background": "#faf5ef",
                "--text_primary": "#1a1a1a",
                "--text_secondary": "#6d6d6d",
                "--accent": "#c49a6c",
                "--soft_line": "rgba(0,0,0,0.12)",
            }}
        >
            <div className="max-w-6xl mx-auto px-6 flex flex-col gap-16">
                {/* Header */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <h1
                        className="text-3xl md:text-6xl font-serif text-[var(--text_primary)] mb-4"
                        style={{ fontFamily: "Playfair Display, serif" }}
                    >
                        Reservations & Enquiries
                    </h1>

                    <p
                        className="text-lg md:text-xl text-[var(--text_secondary)] leading-relaxed"
                        style={{ fontFamily: "Inter, sans-serif" }}
                    >
                        Our reservation team is here to assist you with bookings, availability, room details,
                        group stays, pilgrimage planning and special requests. Reach out to us anytime for a
                        seamless and personal experience at Hotel Bhakti Palace.
                    </p>
                </motion.div>

                {/* Separator */}
                <div className="w-full h-px bg-[var(--soft_line)] my-10 md:my-14" />

                {/* Contact Blocks */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-16"
                >
                    {content.map((item, i) => (
                        <motion.div key={i} variants={fadeUp} className="flex flex-col gap-3 group">

                            {/* Icon slot — render provided icon component if present.
                  Keep a fixed-size container to align text even when icon missing. */}
                            <div className="flex items-center">
                                <div
                                    className="w-7 h-7 flex items-center justify-center text-[var(--accent)]"
                                    aria-hidden={item.icon ? "false" : "true"}
                                >
                                    {item.icon ? (
                                        // If icon is a component, render it. Caller should style icon color via currentColor or className.
                                        <span className="icon-placeholder" aria-hidden="true">
                                            {item.icon}
                                        </span>
                                    ) : (
                                        // Invisible placeholder to preserve layout (screen-reader hidden)
                                        <span className="sr-only">icon</span>
                                    )}
                                </div>
                            </div>

                            {/* Label */}
                            <p
                                className="uppercase tracking-[0.25em] text-[var(--accent)] text-xs font-medium"
                                style={{ fontFamily: "Inter, sans-serif" }}
                            >
                                {item.label}
                            </p>

                            {/* Value */}
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl md:text-3xl font-light text-[var(--text_primary)] group-hover:text-[var(--accent)] transition-all duration-300 cursor-pointer"
                                style={{ fontFamily: "Inter, sans-serif" }}
                                aria-label={item.label}
                            >
                                {item.value}
                            </a>

                            {/* Subtext */}
                            {item.subtext && (
                                <p
                                    className="text-[var(--text_secondary)] text-sm md:text-base leading-relaxed"
                                    style={{ fontFamily: "Inter, sans-serif" }}
                                >
                                    {item.subtext}
                                </p>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ContactDetailsStrip;
