import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Home from './pages/Home';
import SpaceDetail from './pages/SpaceDetail';
import Cursor from './components/Cursor';
import Navigation from './components/Navigation';
import Soundscape from './components/Soundscape';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
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
      <div className="grain-overlay" aria-hidden="true" />
      <Cursor />
      <Navigation />
      <Soundscape />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/space/:id" element={<SpaceDetail />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
