// import React from "react";

// const FooterSection = () => {
//   return (
//     <footer
//       className="py-16 text-center md:text-left relative"
//       style={{
//         backgroundColor: "#1a1a1a",
//         color: "#ffffff",
//         fontFamily: "Inter, sans-serif",
//       }}
//     >
//       {/* Main container */}
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6">
//         {/* About Section */}
//         <div>
//           <h3
//             className="text-xl mb-4 font-serif"
//             style={{
//               color: "#c49a6c",
//               fontFamily: "Playfair Display, serif",
//               fontWeight: 600,
//             }}
//           >
//             Hotel Bhakti Palace
//           </h3>
//           <p
//             className="text-sm leading-relaxed"
//             style={{
//               color: "#c9c9c9",
//               lineHeight: 1.8,
//             }}
//           >
//             A luxury stay in the divine city of Nathdwara — where comfort meets
//             devotion near Shree Nath Ji Temple.
//           </p>
//         </div>

//         {/* Reservations Section */}
//         <div>
//           <h3
//             className="text-xl mb-4 font-serif"
//             style={{
//               color: "#c49a6c",
//               fontFamily: "Playfair Display, serif",
//               fontWeight: 600,
//             }}
//           >
//             Reservations & Enquiries
//           </h3>
//           <ul className="space-y-2 text-sm">
//             <li>
//               <a
//                 href="tel:+919876543210"
//                 className="block transition-colors duration-300"
//                 style={{
//                   color: "#c9c9c9",
//                 }}
//                 onMouseEnter={(e) => (e.target.style.color = "#c49a6c")}
//                 onMouseLeave={(e) => (e.target.style.color = "#c9c9c9")}
//               >
//                 📞 +91 9772578699
//               </a>
//             </li>
//             <li>
//               <a
//                 href="mailto:reservations@hotelbhaktypalace.com"
//                 className="block transition-colors duration-300"
//                 style={{
//                   color: "#c9c9c9",
//                 }}
//                 onMouseEnter={(e) => (e.target.style.color = "#c49a6c")}
//                 onMouseLeave={(e) => (e.target.style.color = "#c9c9c9")}
//               >
//                 ✉️ reservations@hotelbhaktipalace.com
//               </a>
//             </li>
//             <li
//               className="text-sm leading-relaxed"
//               style={{ color: "#c9c9c9" }}
//             >
//               📍 Near Shree Nath Ji Temple, Nathdwara, Rajasthan - 313301
//             </li>
//           </ul>
//         </div>

//         {/* Social Links Section */}
//         <div>
//           <h3
//             className="text-xl mb-4 font-serif"
//             style={{
//               color: "#c49a6c",
//               fontFamily: "Playfair Display, serif",
//               fontWeight: 600,
//             }}
//           >
//             Follow Us
//           </h3>
//           <div className="flex justify-center md:justify-start gap-4 text-2xl">
//             <a
//               href="https://www.instagram.com/hotelbhaktypalace"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="transition-all duration-300 hover:scale-110"
//               style={{ color: "#c49a6c" }}
//             >
//               <img src="" alt="" />
//             </a>
//             <a
//               href="https://www.facebook.com/hotelbhaktypalace"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="transition-all duration-300 hover:scale-110"
//               style={{ color: "#c49a6c" }}
//             >
//               <img src="" alt="" />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Divider */}
//       <div
//         className="border-t opacity-30 mt-12 pt-6 text-center text-sm"
//         style={{
//           borderColor: "#c49a6c",
//           color: "#c9c9c9",
//         }}
//       >
//         © {new Date().getFullYear()} Hotel Bhakti Palace. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default FooterSection;


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
//         className="font-sans" // Use Inter as the base font
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
//                   href="tel:+919876543210" 
//                   className="flex items-center justify-center md:justify-start gap-3 text-sm transition-colors duration-300"
//                   style={{ color: 'var(--text-secondary)' }}
//                   onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-gold)'}
//                   onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
//                 >
//                   <PhoneIcon className="w-4 h-4" />
//                   <span>+91 98765 43210</span>
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
//                   href="https://www.instagram.com/hotelbhakti" 
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
//             --accent-gold: #c49a6c;
//           }
//         `}
//       </style>
      
//       {/* Main render area for the component.
//         The outer div provides a light background to contrast the dark footer.
//       */}
//       <div className="min-h-screen bg-gray-100 flex flex-col justify-end">
//         <FooterSection />
//       </div>
//     </>
//   );
// }

import React from 'react';

/**
 * Main App component to render the FooterSection.
 * This file is self-contained.
 */
export default function App() {

  /**
   * Icon Components
   * Simple inline SVGs for use in the footer.
   */
  const PhoneIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  );

  const MailIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </svg>
  );

  const MapPinIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle>
    </svg>
  );

  const InstagramIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
    </svg>
  );

  const FacebookIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  );


  /**
   * FooterSection Component
   * This component displays the website footer with contact details,
   * about text, and social links.
   */
  const FooterSection = () => {

    return (
      <footer 
        className="font-sans" // Use Inter as the base font
        style={{ 
          backgroundColor: 'var(--bg-dark)', 
          fontFamily: "'Inter', sans-serif" 
        }}
      >
        <div className="max-w-6xl mx-auto px-5 py-20 md:py-24">
          
          {/* Footer Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            
            {/* Column 1: About */}
            <div>
              <h3 
                className="text-xl mb-4"
                style={{ 
                  fontFamily: "'Playfair Display', serif",
                  color: 'var(--accent-gold)'
                }}
              >
                Hotel Bhakti Palace
              </h3>
              <p 
                className="text-sm leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                A luxury stay in the divine city of Nathdwara — where comfort meets devotion near Shree Nath Ji Temple.
              </p>
            </div>

            {/* Column 2: Reservations & Enquiries */}
            <div>
              <h3 
                className="text-xl mb-4"
                style={{ 
                  fontFamily: "'Playfair Display', serif",
                  color: 'var(--accent-gold)'
                }}
              >
                Reservations & Enquiries
              </h3>
              <div className="space-y-3">
                <a 
                  href="tel:+919876543210" 
                  className="flex items-center justify-center md:justify-start gap-3 text-sm transition-colors duration-300"
                  style={{ color: 'var(--text-secondary)' }}
                  onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-gold)'}
                  onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  <PhoneIcon className="w-4 h-4" />
                  <span>+91 98765 43210</span>
                </a>
                <a 
                  href="mailto:reservations@hotelbhaktypalace.com" 
                  className="flex items-center justify-center md:justify-start gap-3 text-sm transition-colors duration-300"
                  style={{ color: 'var(--text-secondary)' }}
                  onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-gold)'}
                  onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  <MailIcon className="w-4 h-4" />
                  <span>reservations@hotelbhaktipalace.com</span>
                </a>
                <div 
                  className="flex items-start justify-center md:justify-start gap-3 text-sm"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <MapPinIcon className="w-4 h-4 flex-shrink-0 mt-1" />
                  <span>Near Shree Nath Ji Temple, Nathdwara, Rajasthan - 313301</span>
                </div>
              </div>
            </div>

            {/* Column 3: Follow Us */}
            <div>
              <h3 
                className="text-xl mb-4"
                style={{ 
                  fontFamily: "'Playfair Display', serif",
                  color: 'var(--accent-gold)'
                }}
              >
                Follow Us
              </h3>
              <div className="flex justify-center md:justify-start gap-4">
                <a 
                  href="https://www.instagram.com/hotelbhaktypalace" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Instagram"
                  className="transition-colors duration-300"
                  style={{ color: 'var(--text-secondary)' }}
                  onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-gold)'}
                  onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  <InstagramIcon className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.facebook.com/hotelbhaktypalace" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Facebook"
                  className="transition-colors duration-300"
                  style={{ color: 'var(--text-secondary)' }}
                  onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-gold)'}
                  onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  <FacebookIcon className="w-6 h-6" />
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Divider & Copyright */}
          <div 
            className="mt-12 pt-8 text-center text-sm"
            style={{ 
              borderTop: '1px solid var(--accent-gold)',
              borderTopColor: 'rgba(196, 154, 108, 0.3)',
              color: 'var(--text-secondary)'
            }}
          >
            © {new Date().getFullYear()} Hotel Bhakti Palace. All Rights Reserved.
          </div>

        </div>
      </footer>
    );
  };

  /**
   * App component's return value.
   * It includes the <style> block for fonts and colors,
   * and renders the FooterSection component.
   */
  return (
    <>
      {/* Global Styles:
        - Imports Google Fonts (Inter & Playfair Display).
        - Defines the CSS custom properties (variables) for the dark footer palette.
      */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Playfair+Display:wght@600;700&display=swap');
          
          :root {
            /* Dark color palette for footer */
            --bg-dark: #1a1a1a;
            --text-primary-dark: #ffffff; /* Renamed to avoid confusion */
            --text-secondary: #c9c9c9;
            --accent-gold: #c49c6c;
          }
        `}
      </style>
      
      {/* Main render area for the component.
        The outer div provides a light background to contrast the dark footer.
        Removed min-h-screen and flex classes to remove the large gap.
      */}
      <div className="bg-gray-100">
        <FooterSection />
      </div>
    </>
  );
}

