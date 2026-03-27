
// import React from 'react';

// /**
//  * Main App component to render the FooterSection.
//  * This file is self-contained.
//  */
// export default function App() {

//   /**
//    * Icon Components
//    * Simple inline SVGs for use in the footer.
//    */
//   const PhoneIcon = ({ className }) => (
//     <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
//     </svg>
//   );

//   const MailIcon = ({ className }) => (
//     <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
//     </svg>
//   );

//   const MapPinIcon = ({ className }) => (
//     <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle>
//     </svg>
//   );

//   const InstagramIcon = ({ className }) => (
//     <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
//     </svg>
//   );

//   const FacebookIcon = ({ className }) => (
//     <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
//     </svg>
//   );


//   /**
//    * FooterSection Component
//    * This component displays the website footer with contact details,
//    * about text, and social links.
//    */
//   const FooterSection = () => {

//     return (
//       <footer 
//         className="font-sans w-full relative overscroll-none" // Use Inter as the base font
//         style={{ 
//           backgroundColor: 'var(--bg-dark)', 
//           fontFamily: "'Inter', sans-serif" 
//         }}
//       >
//         <div className="max-w-6xl mx-auto px-5 py-20 md:py-24">
          
//           {/* Footer Content Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            
//             {/* Column 1: About */}
//             <div>
//               <h3 
//                 className="text-xl mb-4"
//                 style={{ 
//                   fontFamily: "'Playfair Display', serif",
//                   color: 'var(--accent-gold)'
//                 }}
//               >
//                 Hotel Bhakti Palace
//               </h3>
//               <p 
//                 className="text-sm leading-relaxed"
//                 style={{ color: 'var(--text-secondary)' }}
//               >
//                 A luxury stay in the divine city of Nathdwara — where comfort meets devotion near Shree Nath Ji Temple.
//               </p>
//             </div>

//             {/* Column 2: Reservations & Enquiries */}
//             <div>
//               <h3 
//                 className="text-xl mb-4"
//                 style={{ 
//                   fontFamily: "'Playfair Display', serif",
//                   color: 'var(--accent-gold)'
//                 }}
//               >
//                 Reservations & Enquiries
//               </h3>
//               <div className="space-y-3">
//                 <a 
//                   href="tel:+919772578699" 
//                   className="flex items-center justify-center md:justify-start gap-3 text-sm transition-colors duration-300"
//                   style={{ color: 'var(--text-secondary)' }}
//                   onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-gold)'}
//                   onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
//                 >
//                   <PhoneIcon className="w-4 h-4" />
//                   <span>+91 97725 78699</span>
//                 </a>
//                 <a 
//                   href="mailto:reservations@hotelbhaktypalace.com" 
//                   className="flex items-center justify-center md:justify-start gap-3 text-sm transition-colors duration-300"
//                   style={{ color: 'var(--text-secondary)' }}
//                   onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-gold)'}
//                   onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
//                 >
//                   <MailIcon className="w-4 h-4" />
//                   <span>reservations@hotelbhaktipalace.com</span>
//                 </a>
//                 <div 
//                   className="flex items-start justify-center md:justify-start gap-3 text-sm"
//                   style={{ color: 'var(--text-secondary)' }}
//                 >
//                   <MapPinIcon className="w-4 h-4 flex-shrink-0 mt-1" />
//                   <span>Near Shree Nath Ji Temple, Nathdwara, Rajasthan - 313301</span>
//                 </div>
//               </div>
//             </div>

//             {/* Column 3: Follow Us */}
//             <div>
//               <h3 
//                 className="text-xl mb-4"
//                 style={{ 
//                   fontFamily: "'Playfair Display', serif",
//                   color: 'var(--accent-gold)'
//                 }}
//               >
//                 Follow Us
//               </h3>
//               <div className="flex justify-center md:justify-start gap-4">
//                 <a 
//                   href="https://www.instagram.com/hotelbhaktypalace" 
//                   target="_blank" 
//                   rel="noopener noreferrer" 
//                   aria-label="Instagram"
//                   className="transition-colors duration-300"
//                   style={{ color: 'var(--text-secondary)' }}
//                   onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-gold)'}
//                   onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
//                 >
//                   <InstagramIcon className="w-6 h-6" />
//                 </a>
//                 <a 
//                   href="https://www.facebook.com/hotelbhaktypalace" 
//                   target="_blank" 
//                   rel="noopener noreferrer" 
//                   aria-label="Facebook"
//                   className="transition-colors duration-300"
//                   style={{ color: 'var(--text-secondary)' }}
//                   onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-gold)'}
//                   onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
//                 >
//                   <FacebookIcon className="w-6 h-6" />
//                 </a>
//               </div>
//             </div>

//           </div>

//           {/* Bottom Divider & Copyright */}
//           <div 
//             className="mt-12 pt-8 text-center text-sm"
//             style={{ 
//               borderTop: '1px solid var(--accent-gold)',
//               borderTopColor: 'rgba(196, 154, 108, 0.3)',
//               color: 'var(--text-secondary)'
//             }}
//           >
//             © {new Date().getFullYear()} Hotel Bhakti Palace. All Rights Reserved.
//           </div>

//         </div>
//       </footer>
//     );
//   };

//   /**
//    * App component's return value.
//    * It includes the <style> block for fonts and colors,
//    * and renders the FooterSection component.
//    */
//   return (
//     <>
//       {/* Global Styles:
//         - Imports Google Fonts (Inter & Playfair Display).
//         - Defines the CSS custom properties (variables) for the dark footer palette.
//       */}
//       <style>
//         {`
//           @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Playfair+Display:wght@600;700&display=swap');
          
//           :root {
//             /* Dark color palette for footer */
//             --bg-dark: #1a1a1a;
//             --text-primary-dark: #ffffff; /* Renamed to avoid confusion */
//             --text-secondary: #c9c9c9;
//             --accent-gold: #c49c6c;
//           }
//         `}
//       </style>
      
//       {/* Main render area for the component.
//         The outer div provides a light background to contrast the dark footer.
//         Removed min-h-screen and flex classes to remove the large gap.
//       */}
//       <div className="bg-gray-100">
//         <FooterSection />
//       </div>
//     </>
//   );
// }




// import React from "react";
// import { motion } from "framer-motion";

// /* ---------------------------
//    Framer Motion Variants
// --------------------------- */
// const fadeUp = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { 
//     opacity: 1, 
//     y: 0, 
//     transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
//   },
// };

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.1, delayChildren: 0.1 },
//   },
// };

// /* ---------------------------
//    Sub-components
// --------------------------- */
// const FooterLink = ({ href, children }) => (
//   <a 
//     href={href} 
//     className="group relative inline-flex items-center text-[#7A7A7A] hover:text-[#BFA281] transition-colors duration-500 text-sm font-light tracking-wide"
//   >
//     <span className="relative z-10">{children}</span>
//     {/* Elegant hover underline */}
//     <span className="absolute left-0 bottom-0 w-0 h-px bg-[#BFA281] transition-all duration-500 group-hover:w-full" />
//   </a>
// );

// const FooterHeading = ({ children }) => (
//   <h4 className="text-[#E8E3D9] text-[9px] uppercase tracking-[0.3em] font-medium mb-6">
//     {children}
//   </h4>
// );

// /* ---------------------------
//    Main Footer Component
// --------------------------- */
// export default function LuxuryFooter() {
//   return (
//     <footer className="relative bg-[#050505] pt-24 md:pt-32 pb-8 overflow-hidden selection:bg-[#BFA281] selection:text-[#050505]">
      
//       {/* 1. Cinematic Film Grain Texture */}
//       <div 
//         className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-screen"
//         style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
//         }}
//       />

//       {/* 2. Subtle ambient glow */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#BFA281]/[0.02] rounded-full blur-[120px] pointer-events-none" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        
//         <motion.div 
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-50px" }}
//           variants={containerVariants}
//           className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-32"
//         >
//           {/* ----- Column 1: Brand & Newsletter (Takes up more space) ----- */}
//           <motion.div variants={fadeUp} className="md:col-span-5 flex flex-col justify-between">
//             <div>
//               <div className="w-12 h-px bg-[#BFA281]/50 mb-8" />
//               <h3 className="font-serif text-3xl md:text-4xl text-[#E8E3D9] font-light leading-tight mb-4">
//                 Sanctuary in the <br />
//                 <span className="italic text-[#BFA281]">heart of Nathdwara.</span>
//               </h3>
//             </div>

//             <div className="mt-12 md:mt-0">
//               <FooterHeading>Privileges & Updates</FooterHeading>
//               <form className="relative max-w-sm" onSubmit={(e) => e.preventDefault()}>
//                 <input 
//                   type="email" 
//                   placeholder="Enter your email address" 
//                   className="w-full bg-transparent border-b border-[#333] text-[#E8E3D9] text-xs font-light tracking-wide py-3 focus:outline-none focus:border-[#BFA281] transition-colors duration-500 placeholder:text-[#555]"
//                 />
//                 <button 
//                   type="submit"
//                   aria-label="Submit"
//                   className="absolute right-0 top-1/2 -translate-y-1/2 text-[#7A7A7A] hover:text-[#BFA281] transition-colors duration-500"
//                 >
//                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//                     <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
//                   </svg>
//                 </button>
//               </form>
//             </div>
//           </motion.div>

//           {/* ----- Column 2: Contact ----- */}
//           <motion.div variants={fadeUp} className="md:col-span-3 md:col-start-7">
//             <FooterHeading>Enquiries</FooterHeading>
//             <div className="flex flex-col gap-4">
//               <FooterLink href="tel:+919772578699">+91 97725 78699</FooterLink>
//               <FooterLink href="mailto:reservations@hotelbhaktipalace.com">reservations@hotelbhaktipalace.com</FooterLink>
              
//               <div className="mt-4 pt-4 border-t border-[#BFA281]/10">
//                 <p className="text-[#7A7A7A] text-sm font-light leading-relaxed">
//                   Near Shree Nath Ji Temple,<br />
//                   Nathdwara, Rajasthan<br />
//                   313301, India
//                 </p>
//                 <a 
//                   href="#" 
//                   className="inline-block mt-3 text-[10px] uppercase tracking-[0.2em] text-[#BFA281] hover:text-[#E8E3D9] transition-colors duration-500"
//                 >
//                   Get Directions →
//                 </a>
//               </div>
//             </div>
//           </motion.div>

//           {/* ----- Column 3: Explore & Socials ----- */}
//           <motion.div variants={fadeUp} className="md:col-span-2">
//             <FooterHeading>Discover</FooterHeading>
//             <div className="flex flex-col gap-3">
//               <FooterLink href="/accommodations">Accommodations</FooterLink>
//               <FooterLink href="/pangat">Dining at Pangat</FooterLink>
//               <FooterLink href="/experiences">Experiences</FooterLink>
//               <FooterLink href="/gallery">Gallery</FooterLink>
//               <FooterLink href="/contact">Contact</FooterLink>
//             </div>

//             <div className="mt-12">
//               <FooterHeading>Connect</FooterHeading>
//               <div className="flex flex-col gap-3">
//                 <FooterLink href="https://instagram.com">Instagram</FooterLink>
//                 <FooterLink href="https://facebook.com">Facebook</FooterLink>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* ----- Bottom Area ----- */}
//         <motion.div 
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1.5, delay: 0.5 }}
//           className="relative border-t border-[#BFA281]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
//         >
//           <div className="flex items-center gap-6 text-[#555] text-[9px] uppercase tracking-[0.2em]">
//             <span>© {new Date().getFullYear()} Bhakti Palace</span>
//             <a href="/privacy" className="hover:text-[#BFA281] transition-colors">Privacy</a>
//             <a href="/terms" className="hover:text-[#BFA281] transition-colors">Terms</a>
//           </div>

//           <div className="text-[#555] text-[9px] uppercase tracking-[0.2em]">
//             Site by YourAgency
//           </div>
//         </motion.div>

//       </div>

//       {/* ----- Massive Background Watermark Text ----- */}
//       {/* This bleeds off the edges and creates a stunning visual anchor */}
//       <motion.div 
//         initial={{ y: 50, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 0.03 }}
//         viewport={{ once: true }}
//         transition={{ duration: 1.5, ease: "easeOut" }}
//         className="absolute -bottom-8 md:-bottom-16 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none overflow-hidden"
//       >
//         <h1 className="text-[15vw] md:text-[12vw] font-serif leading-none text-[#E8E3D9] whitespace-nowrap tracking-tighter">
//           BHAKTI PALACE
//         </h1>
//       </motion.div>

//     </footer>
//   );
// }


import React from "react";
import { motion } from "framer-motion";

/* ---------------------------
   Motion Variants
--------------------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

/* ---------------------------
   Main Footer Component
--------------------------- */
export default function CleanLuxuryFooter() {
  return (
    <footer className="relative bg-[#0A0A0A] pt-24 pb-10 overflow-hidden selection:bg-[#C49A6C] selection:text-white">
      
      {/* 1. Subtle Paper Grain (Premium Texture, very faint) */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-screen"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Top Gold Divider */}
        <div className="w-full h-[1px] bg-[#C49A6C]/30 mb-20" />

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-24"
        >
          {/* ----- Column 1: Brand & Address (Lots of breathing room) ----- */}
          <motion.div variants={fadeUp} className="md:col-span-6 flex flex-col justify-between pr-0 md:pr-12">
            <div>
              <h2 className="font-serif text-3xl md:text-5xl text-[#C49A6C] mb-6 tracking-wide">
                Hotel Bhakti
              </h2>
              <p className="text-[#A3A3A3] text-sm md:text-base leading-relaxed max-w-sm">
                A sanctuary of quiet elegance and devotion in the heart of Nathdwara.
              </p>
            </div>

            <div className="mt-12">
              <p className="text-[#F9F9F9] text-sm mb-1">Near Shree Nath Ji Temple</p>
              <p className="text-[#A3A3A3] text-sm">Nathdwara, Rajasthan 313301, India</p>
              
              <a 
                href="#" 
                className="inline-block mt-4 text-[#C49A6C] text-xs uppercase tracking-[0.15em] hover:text-[#F9F9F9] transition-colors duration-300"
              >
                Get Directions →
              </a>
            </div>
          </motion.div>

          {/* ----- Column 2: Quick Links ----- */}
          <motion.div variants={fadeUp} className="md:col-span-3">
            <h4 className="text-[#C49A6C] text-xs uppercase tracking-[0.2em] font-medium mb-8">
              Discover
            </h4>
            <ul className="flex flex-col gap-4">
              {['Accommodations', 'Dining at Pangat', 'Experiences', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`/${item.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="text-[#A3A3A3] text-sm hover:text-[#C49A6C] transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ----- Column 3: Contact & Socials ----- */}
          <motion.div variants={fadeUp} className="md:col-span-3">
            <h4 className="text-[#C49A6C] text-xs uppercase tracking-[0.2em] font-medium mb-8">
              Connect
            </h4>
            <ul className="flex flex-col gap-4 mb-10">
              <li>
                <a href="tel:+919772578699" className="text-[#A3A3A3] text-sm hover:text-[#C49A6C] transition-colors duration-300">
                  +91 97725 78699
                </a>
              </li>
              <li>
                <a href="mailto:reservations@hotelbhaktipalace.com" className="text-[#A3A3A3] text-sm hover:text-[#C49A6C] transition-colors duration-300 break-all">
                  hotelbhakti11@gmail.com
                </a>
              </li>
            </ul>

            <h4 className="text-[#C49A6C] text-xs uppercase tracking-[0.2em] font-medium mb-6">
              Social
            </h4>
            <div className="flex gap-6">
              <a href="#" className="text-[#A3A3A3] text-sm hover:text-[#F9F9F9] transition-colors duration-300">
                Instagram
              </a>
              <a href="#" className="text-[#A3A3A3] text-sm hover:text-[#F9F9F9] transition-colors duration-300">
                Facebook
              </a>
            </div>
          </motion.div>

        </motion.div>

        {/* ----- Bottom Copyright Area ----- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="border-t border-[#333333] pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="text-[#777777] text-xs">
            © {new Date().getFullYear()} Hotel Bhakti. All rights reserved.
          </div>

          <div className="flex gap-6 text-[#777777] text-xs">
            <a href="/privacy" className="hover:text-[#F9F9F9] transition-colors duration-300">Privacy Policy</a>
            <a href="/terms" className="hover:text-[#F9F9F9] transition-colors duration-300">Terms of Service</a>
          </div>
        </motion.div>

      </div>
    </footer>
  );
}