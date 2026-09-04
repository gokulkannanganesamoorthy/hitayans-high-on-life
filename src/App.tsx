import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Home from './pages/Home';
import SpacesPage from './pages/Spaces';
import SpaceDetail from './pages/SpaceDetail';
import WorkshopsPage from './pages/Workshops';
import AboutPage from './pages/About';
import TicketsPage from './pages/Tickets';
import ContactPage from './pages/Contact';

import Cursor from './components/Cursor';
import Navigation from './components/Navigation';
import ScrollToTop from './components/ScrollToTop';

import { Footer } from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(tickerCallback);
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="grain-overlay" aria-hidden="true" />
      <Cursor />
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/spaces" element={<SpacesPage />} />
          <Route path="/space/:id" element={<SpaceDetail />} />
          <Route path="/workshops" element={<WorkshopsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/tickets" element={<TicketsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
