import React, { Suspense, lazy, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Lenis from "@studio-freight/lenis";
import Navbar from './components/general/Navbar'
import FooterSection from './components/general/FooterSection'
import ScrollToTop from './components/general/ScrollToTop'

// Lazy loaded pages
const Home = lazy(() => import('./Pages/Home'));
const Rooms = lazy(() => import('./Pages/Rooms'));
const RoomsDetailPage = lazy(() => import('./Pages/RoomsDetailPage'));
const Aboutus = lazy(() => import('./Pages/Aboutus'));
// const Pangat = lazy(() => import('./Pages/Pangat'));
const Attractions = lazy(() => import('./Pages/Attractions'));
const AttractionDetailPage = lazy(() => import('./Pages/AttractionDetailPage'));
const Blogs = lazy(() => import('./Pages/Blogs'));
// const Gallery = lazy(() => import('./Pages/Gallery'));
const Contacts = lazy(() => import('./Pages/Contacts'));

// A smooth fallback loader using the brand color (#C19B76)
const PageLoader = () => (
  <div className="h-screen w-full flex items-center justify-center bg-[#F9F6F0]">
    <div className="w-12 h-12 border-4 border-[#C19B76] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const App = () => {
 const location = useLocation();

  useEffect(() => {
    // Optimized buttery smooth Lenis config
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      lerp: 0.1, // Gives that smooth damping effect
      smoothWheel: true,
      wheelMultiplier: 1.1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    window.lenis = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  useEffect(() => {
    window.lenis?.scrollTo(0, { immediate: true });
  }, [location.pathname]);

  return (
    <>
      <ScrollToTop />
      <div id="lenis-root"> 
        <Navbar />
        <div className="w-full overflow-x-hidden">
          <main className="pt-[110px] md:pt-[130px]">
            <Suspense fallback={<PageLoader />}>
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/rooms" element={<Rooms />} />
                <Route path="/rooms/:slug" element={<RoomsDetailPage />} />
                <Route path="/aboutus" element={<Aboutus />} />
                {/* <Route path="/pangat" element={<Pangat />} /> */}
                <Route path="/attractions" element={<Attractions />} />
                <Route path="/attractions/:slug" element={<AttractionDetailPage />} />
                <Route path="/blogs" element={<Blogs />} />
                {/* <Route path="/gallery" element={<Gallery />} /> */}
                <Route path="/contact" element={<Contacts />} />
              </Routes>
            </Suspense>
          </main>
        </div>
        <FooterSection />
      </div> 
    </>
  )
}

export default App
