import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { 
  Leaf, 
  Sparkles, 
  Users, 
  ConciergeBell, 
  Utensils, 
  ShoppingBag, 
  Phone, 
  MapPin, 
  Clock, 
  Wifi, 
  Car, 
  Bed, 
  Heart,
  ChevronRight,
  Flame
} from "lucide-react";

// Entry animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

// PDF Page renderer component
const PDFPage = ({ pdf, pageNumber }) => {
  const canvasRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    let renderTask = null;

    const renderPage = () => {
      if (!pdf || !canvasRef.current) return;
      
      pdf.getPage(pageNumber).then((page) => {
        if (!active) return;
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        // Initial rendering viewport scale
        const viewport = page.getViewport({ scale: 1.0 });
        
        // Calculate container width
        const parentWidth = canvas.parentElement.clientWidth || 800;
        
        // Adjust for high density displays (Retina)
        const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
        const scale = (parentWidth / viewport.width) * pixelRatio;
        
        const scaledViewport = page.getViewport({ scale });

        canvas.width = scaledViewport.width;
        canvas.height = scaledViewport.height;

        // Apply display dimensions to stretch canvas responsively
        canvas.style.width = '100%';
        canvas.style.height = 'auto';

        const renderContext = {
          canvasContext: context,
          viewport: scaledViewport,
        };

        if (renderTask) {
          renderTask.cancel();
        }

        renderTask = page.render(renderContext);
        renderTask.promise.then(() => {
          if (active) setLoading(false);
        }).catch(err => {
          if (err.name !== 'RenderingCancelledException') {
            console.error('Render error:', err);
          }
        });
      });
    };

    renderPage();

    // Rerender on resize with debounce
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (active) {
          setLoading(true);
          renderPage();
        }
      }, 400);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      active = false;
      if (renderTask) renderTask.cancel();
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, [pdf, pageNumber]);

  return (
    <div className="w-full relative bg-white shadow-xl rounded-2xl overflow-hidden border border-[#F0EBE3]/50 mb-12 max-w-4xl mx-auto transition-transform hover:scale-[1.01] duration-500">
      {loading && (
        <div className="w-full aspect-[1/1.414] max-h-[85vh] flex flex-col items-center justify-center bg-[#FAF9F6] border-b border-[#F0EBE3]/30">
          <div className="flex flex-col items-center gap-4">
            <div className="w-10 h-10 border-4 border-[#C49A6C] border-t-transparent rounded-full animate-spin"></div>
            <p className="text-[10px] uppercase tracking-widest text-[#C49A6C] font-semibold">Preparing Menu Page {pageNumber}...</p>
          </div>
        </div>
      )}
      <canvas ref={canvasRef} className={`w-full ${loading ? "hidden" : "block"}`} />
    </div>
  );
};

const Menu = () => {
  const [pdfDoc, setPdfDoc] = useState(null);
  const [numPages, setNumPages] = useState(0);
  const [pdfLoading, setPdfLoading] = useState(true);
  const [pdfError, setPdfError] = useState(null);

  // Set document title and meta description for SEO
  useEffect(() => {
    document.title = "Fisco at Pangat Menu | Hotel Bhakti Nathdwara";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Browse the authentic Satvik and Mewari menu of Fisco at Pangat inside Hotel Bhakti Palace, Nathdwara. Experience pure vegetarian royal dining.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Browse the authentic Satvik and Mewari menu of Fisco at Pangat inside Hotel Bhakti Palace, Nathdwara. Experience pure vegetarian royal dining.";
      document.head.appendChild(meta);
    }
  }, []);

  // Dynamically load PDF.js script and worker
  useEffect(() => {
    let active = true;
    const loadPdfjs = async () => {
      try {
        if (!window.pdfjsLib) {
          await new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.min.js';
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
          });
        }
        
        const pdfjsLib = window['pdfjs-dist/build/pdf'];
        pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js';

        const loadingTask = pdfjsLib.getDocument('/menu.pdf');
        const pdf = await loadingTask.promise;
        
        if (active) {
          setPdfDoc(pdf);
          setNumPages(pdf.numPages);
          setPdfLoading(false);
        }
      } catch (err) {
        console.error('Error loading PDF:', err);
        if (active) {
          setPdfError(err);
          setPdfLoading(false);
        }
      }
    };

    loadPdfjs();

    return () => {
      active = false;
    };
  }, []);

  const handleScrollToMenu = (e) => {
    e.preventDefault();
    const target = document.getElementById("digital-menu");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full bg-[#FAF9F6] text-[#1A1A1A] selection:bg-[#C49A6C] selection:text-white overflow-x-hidden font-sans">
      

      {/* ================= DIGITAL MENU SECTION ================= */}
      <section id="digital-menu" className="relative py-8 md:py-32 bg-white scroll-mt-24">
        <div className="max-w-5xl mx-auto px-6">
          
          
          {/* Dynamic PDF-to-Canvas rendering stack */}
          <div className="w-full min-h-[400px] px-2 flex flex-col items-center">
            {pdfLoading && (
              <div className="flex flex-col items-center gap-4 py-20">
                <div className="w-12 h-12 border-4 border-[#C49A6C] border-t-transparent rounded-full animate-spin"></div>
                <p className="text-xs uppercase tracking-widest text-[#C49A6C] font-semibold">Loading digital menu...</p>
              </div>
            )}

            {pdfError && (
              <div className="text-center py-16 px-6 bg-red-50 border border-red-200 rounded-xl max-w-md">
                <h4 className="text-red-800 font-serif text-lg mb-2">Menu Temporarily Unavailable</h4>
                <p className="text-sm text-red-600 font-light mb-6">We encountered an issue reading the digital menu file. You can still reach us directly for menu details.</p>
                <a href="tel:+919772578699" className="inline-flex items-center gap-2 px-6 py-3 bg-[#5C1D24] text-white text-xs uppercase tracking-widest font-semibold rounded">
                  <Phone size={14} /> Call Restaurant
                </a>
              </div>
            )}

            {!pdfLoading && !pdfError && numPages > 0 && (
              <div className="w-full">
                {Array.from({ length: numPages }, (_, i) => (
                  <PDFPage key={i + 1} pdf={pdfDoc} pageNumber={i + 1} />
                ))}
              </div>
            )}
          </div>

        </div>
      </section>

  

      {/* ================= ABOUT THE RESTAURANT ================= */}
      <section className="relative py-24 md:py-32 bg-[#FAF9F6] overflow-hidden border-b border-[#F0EBE3]">
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
          
          {/* Section Eyebrow */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-px w-6 bg-[#C49A6C]/40" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#C49A6C] font-semibold">Our Philosophy</span>
            <div className="h-px w-6 bg-[#C49A6C]/40" />
          </motion.div>

          {/* Heading */}
          <motion.h2 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-4xl md:text-5xl font-serif font-light text-[#1A1A1A] leading-tight mb-8"
          >
            Satvik Purity, Served <span className="italic text-[#5C1D24]">With Heart</span>
          </motion.h2>

          {/* Main Description */}
          <motion.p 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-[#555] text-base md:text-lg font-light leading-[1.8] tracking-wide max-w-2xl mb-12"
          >
            Nestled inside Hotel Bhakti, <strong className="font-semibold text-[#1A1A1A]">Fisco at Pangat</strong> is a premium vegetarian dining destination dedicated to pure, freshly prepared food. We honour local culinary traditions by using hand-ground Mewari spices and farm-fresh ingredients to cook nourishing meals that comfort the body and soul.
          </motion.p>

          {/* Quote Block */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="relative p-8 border-l border-[#C49A6C]/30 bg-[#F4EFE6]/50 rounded-r-2xl max-w-xl text-left"
          >
            <p className="font-serif italic text-base md:text-lg text-[#5C1D24] leading-relaxed">
              "Every recipe inside our kitchen is prepared following sacred Satvik guidelines. We believe that food cooked with complete mindfulness and devotion acts as a source of divine energy."
            </p>
            <p className="mt-4 text-[10px] uppercase tracking-widest text-[#C49A6C] font-semibold">— The Culinary Team</p>
          </motion.div>
        </div>

        {/* Decorative Mandala */}
        <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[400px] h-[400px] opacity-[0.02] pointer-events-none">
          <img src="https://cdn-icons-png.flaticon.com/512/5024/5024500.png" alt="Mandala watermark" className="w-full h-full" />
        </div>
      </section>

      
      {/* ================= QUICK INFORMATION ================= */}
      <section className="py-24 md:py-32 bg-[#FAF9F6] border-t border-b border-[#F0EBE3]">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#C49A6C] font-bold">Key Highlights</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-serif font-light text-[#1A1A1A]">
              Why Guests <span className="italic text-[#5C1D24]">Love Dining Here</span>
            </h2>
            <div className="mt-6 w-12 h-px bg-[#C49A6C] mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1. Pure Vegetarian */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
              className="bg-white p-8 border border-[#F0EBE3] rounded-xl hover:shadow-md transition-shadow duration-300 flex flex-col items-start"
            >
              <div className="p-3 bg-[#FAF9F6] text-[#C49A6C] rounded-lg mb-6">
                <Leaf size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl text-[#1A1A1A] mb-3">Pure Vegetarian</h3>
              <p className="text-sm text-[#666] font-light leading-relaxed">
                Prepared with the highest standards of Satvik culinary purity, with strict no-onion and no-garlic options available on request.
              </p>
            </motion.div>

           

            {/* 3. Family Friendly */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={3}
              className="bg-white p-8 border border-[#F0EBE3] rounded-xl hover:shadow-md transition-shadow duration-300 flex flex-col items-start"
            >
              <div className="p-3 bg-[#FAF9F6] text-[#C49A6C] rounded-lg mb-6">
                <Users size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl text-[#1A1A1A] mb-3">Family Friendly</h3>
              <p className="text-sm text-[#666] font-light leading-relaxed">
                A spacious, warm, and highly comfortable environment styled to suit traditional family gatherings and holy pilgrim dining.
              </p>
            </motion.div>

            {/* 4. Room Service Available */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={4}
              className="bg-white p-8 border border-[#F0EBE3] rounded-xl hover:shadow-md transition-shadow duration-300 flex flex-col items-start"
            >
              <div className="p-3 bg-[#FAF9F6] text-[#C49A6C] rounded-lg mb-6">
                <ConciergeBell size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl text-[#1A1A1A] mb-3">Room Service Available</h3>
              <p className="text-sm text-[#666] font-light leading-relaxed">
                Hotel guests can enjoy their meals inside the comfort of their rooms. Just call the front desk to place your order.
              </p>
            </motion.div>

            {/* 5. Dine-In */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={5}
              className="bg-white p-8 border border-[#F0EBE3] rounded-xl hover:shadow-md transition-shadow duration-300 flex flex-col items-start"
            >
              <div className="p-3 bg-[#FAF9F6] text-[#C49A6C] rounded-lg mb-6">
                <Utensils size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl text-[#1A1A1A] mb-3">Dine-In</h3>
              <p className="text-sm text-[#666] font-light leading-relaxed">
                Enjoy a peaceful dining experience inside the beautiful dining hall featuring authentic stone Jharokhas and warm amber lighting.
              </p>
            </motion.div>

           
          </div>

        </div>
      </section>

      {/* ================= HOTEL BHAKTI PROMOTION ================= */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column: Promotion Info */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInLeft}
              className="lg:col-span-7 space-y-8"
            >
              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-[0.4em] text-[#C49A6C] font-bold block font-sans">Extend Your Stay</span>
                <h2 className="text-4xl md:text-5xl font-serif font-light text-[#1A1A1A] leading-tight">
                  Your Sacred Sanctuary: <br />
                  <span className="italic text-[#5C1D24]">Hotel Bhakti</span>
                </h2>
                <div className="w-16 h-[1.5px] bg-[#C49A6C]" />
              </div>

              <p className="text-[#555] text-base font-light leading-relaxed">
                Make your pilgrimage to Nathdwara truly memorable. Located just a short walking distance from the sacred Shrinathji Temple, Hotel Bhakti offers highly comfortable rooms, modern amenities, and a peaceful atmosphere designed for families and devotees.
              </p>

              {/* Bullet Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#FAF9F6] text-[#C49A6C] rounded">
                    <Bed size={16} />
                  </div>
                  <span className="text-sm font-medium text-[#1A1A1A]">Comfortable Rooms</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#FAF9F6] text-[#C49A6C] rounded">
                    <Heart size={16} />
                  </div>
                  <span className="text-sm font-medium text-[#1A1A1A]">Family Stay Packages</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#FAF9F6] text-[#C49A6C] rounded">
                    <MapPin size={16} />
                  </div>
                  <span className="text-sm font-medium text-[#1A1A1A]">Walking Distance to Temple</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#FAF9F6] text-[#C49A6C] rounded">
                    <Utensils size={16} />
                  </div>
                  <span className="text-sm font-medium text-[#1A1A1A]">In-House Restaurant</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#FAF9F6] text-[#C49A6C] rounded">
                    <Wifi size={16} />
                  </div>
                  <span className="text-sm font-medium text-[#1A1A1A]">Complimentary High-speed Wi-Fi</span>
                </div>
              </div>

              {/* Homepage CTA */}
              <div className="pt-6">
                <a
                  href="/"
                  className="inline-flex items-center gap-3 px-10 py-4.5 bg-transparent border border-[#C49A6C] text-[#C49A6C] text-xs uppercase tracking-[0.25em] font-medium transition-all duration-500 hover:bg-[#C49A6C] hover:text-white"
                >
                  Visit Hotel Homepage
                  <ChevronRight size={14} />
                </a>
              </div>
            </motion.div>

            {/* Right Column: Hotel Mockup Graphic */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInRight}
              className="lg:col-span-5 flex justify-center"
            >
              <div className="relative w-full max-w-[360px] aspect-[4/5] bg-[#FAF9F6] border border-[#F0EBE3] p-4 shadow-xl rounded-2xl flex flex-col justify-between">
                <div className="relative h-[80%] w-full overflow-hidden rounded-xl bg-black">
                  <img
                    src="https://res.cloudinary.com/dukiisacw/image/upload/f_auto,q_auto,w_800/heroimg_q0cfsa.png"
                    alt="Hotel Bhakti Luxury Rooms"
                    className="w-full h-full object-cover opacity-90 transition-transform duration-[3s] hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="h-[20%] flex items-center justify-between px-2 pt-2">
                  <div>
                    <h4 className="font-serif text-lg text-[#1A1A1A]">Premium Rooms</h4>
                    <p className="text-[10px] text-[#888] uppercase tracking-widest">Nathdwara</p>
                  </div>
                  <span className="text-xs uppercase tracking-widest text-[#C49A6C] font-semibold">Explore →</span>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="py-24 bg-[#FAF9F6] border-t border-[#F0EBE3]">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="bg-white border border-[#F0EBE3] shadow-xl p-8 md:p-16 rounded-2xl relative overflow-hidden">
            {/* Top maroon aesthetic strip */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-[#5C1D24]" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start relative z-10">
              
              {/* Info Column */}
              <div className="space-y-8">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#C49A6C] font-bold block mb-2">Connect With Us</span>
                  <h3 className="font-serif text-3xl text-[#1A1A1A] mb-1">Fisco at Pangat</h3>
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-medium">Located inside Hotel Bhakti</p>
                </div>

                <div className="space-y-4">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <Phone size={18} className="text-[#C49A6C] mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold mb-1">Inquiries & Orders</h5>
                      <a href="tel:+917400160326" className="text-base font-sans text-[#1A1A1A] hover:text-[#C49A6C] transition-colors">
                        +91 7400160326
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <Clock size={18} className="text-[#C49A6C] mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold mb-1">Operating Hours</h5>
                      <p className="text-sm text-[#1A1A1A] font-light">7:30 AM – 10:30 PM (Daily)</p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <MapPin size={18} className="text-[#C49A6C] mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold mb-1">Address</h5>
                      <p className="text-sm text-[#1A1A1A] font-light leading-relaxed">
                        Near Shrinath Ji Temple, Nathdwara,<br />Rajasthan - 313301
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call CTA Column */}
              <div className="flex flex-col items-center justify-center h-full bg-[#FAF9F6]/50 border border-[#F0EBE3]/60 p-8 rounded-xl text-center md:mt-8">
                <div className="w-12 h-12 rounded-full bg-[#5C1D24]/10 text-[#5C1D24] flex items-center justify-center mb-6">
                  <Phone size={20} />
                </div>
                <h4 className="font-serif italic text-xl text-[#1A1A1A] mb-2">Need a Table or Room Delivery?</h4>
                <p className="text-xs text-[#666] font-light leading-relaxed max-w-[240px] mb-8">
                  Call our team directly to book a table, check dish availability, or order room service.
                </p>

                <a
                  href="tel:+917400160326"
                  className="w-full px-6 py-4 bg-[#5C1D24] text-white text-xs uppercase tracking-[0.25em] font-medium transition-all duration-500 hover:bg-[#C49A6C] shadow-lg text-center"
                >
                  Call Restaurant Now
                </a>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ================= FLOATING CALL BUTTON ================= */}
      <motion.a
        href="tel:+919772578699"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-[99] flex items-center gap-3 bg-[#5C1D24] text-white px-5 py-3.5 rounded-full shadow-2xl border border-[#C49A6C]/40 hover:bg-[#C49A6C] hover:text-white transition-colors duration-300 font-sans"
      >
        <div className="relative flex h-3.5 w-3.5 items-center justify-center">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <Phone size={14} className="relative text-white" />
        </div>
        <span className="text-[10px] md:text-xs uppercase tracking-wider font-semibold">Call Restaurant</span>
      </motion.a>

    </div>
  );
};

export default Menu;
