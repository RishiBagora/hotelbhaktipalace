import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Lenis from "@studio-freight/lenis";

import Home from './Pages/Home'
import Rooms from './Pages/Rooms'
import RoomsDetailPage from './Pages/RoomsDetailPage'
import Aboutus from './Pages/Aboutus'
import Pangat from './Pages/Pangat'
import Attractions from './Pages/Attractions'
import AttractionDetailPage from './Pages/AttractionDetailPage'
import Blogs from './Pages/Blogs'
import Contacts from './Pages/Contacts'
import { useEffect } from 'react'
import Navbar from './components/general/Navbar'
import FooterSection from './components/general/FooterSection'
import ScrollToTop from './components/general/ScrollToTop'

const App = () => {
 const location = useLocation();

  // useEffect(() => {
  //   // 🔴 kill old instance (VERY IMPORTANT)
  //   if (window.lenis) {
  //     window.lenis.destroy();
  //     window.lenis = null;
  //   }

  //   const lenis = new Lenis({
  //     lerp: 0.12,          // 👈 KEY: stable & smooth
  //     smoothWheel: true,
  //     smoothTouch: false, // mobile pe native better
  //     infinite: false,
  //   });

  //   window.lenis = lenis;

  //   let rafId;
  //   const raf = (time) => {
  //     lenis.raf(time);
  //     rafId = requestAnimationFrame(raf);
  //   };
  //   rafId = requestAnimationFrame(raf);

  //   return () => {
  //     cancelAnimationFrame(rafId);
  //     lenis.destroy();
  //     window.lenis = null;
  //   };
  // }, []);

  // // 🔝 route change → instant top (NO animation)
  // useEffect(() => {
  //   window.lenis?.scrollTo(0, { immediate: true });
  // }, [location.pathname]);

  return (
    <>
  <ScrollToTop />


  <div id="lenis-root"
> 

<Navbar />

  {/* ❌ w-screen hata */}
  <div className="w-full overflow-x-hidden">
    <main className="pt-16 md:pt-24">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/:slug" element={<RoomsDetailPage />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/pangat" element={<Pangat />} />
        <Route path="/attractions" element={<Attractions />} />
        <Route path="/attractions/:slug" element={<AttractionDetailPage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>
    </main>
  </div>

  <FooterSection />
  </div> 
</>

  )
}

export default App
