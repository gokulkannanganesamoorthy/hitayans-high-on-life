import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Navigation.scss';

const navLinks = [
  { name: 'HOME', href: '/' },
  { name: '09 SPACES', href: '/spaces' },
  { name: '25+ WORKSHOPS', href: '/workshops' },
  { name: 'ORIGIN STORY', href: '/about' },
  { name: 'PASSES & STAY', href: '/tickets' }
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Soundscape logic
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('/audio/432hz-drone.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4;
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleSound = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => console.log('Audio blocked'));
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    closed: {
      y: '-100%',
      transition: {
        duration: 0.7,
        ease: [0.76, 0, 0.24, 1] as const
      }
    },
    open: {
      y: '0%',
      transition: {
        duration: 0.7,
        ease: [0.76, 0, 0.24, 1] as const
      }
    }
  };

  const linkVariants = {
    closed: { y: '100%', opacity: 0 },
    open: (i: number) => ({
      y: '0%',
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1] as const,
        delay: 0.07 * i + 0.15
      }
    })
  };

  return (
    <>
      <header className={`main-header ${isScrolled ? 'scrolled' : ''} ${isOpen ? 'menu-open' : ''}`}>
        <div className="header-inner">
          <div className="header-left">
            <Link to="/tickets" className="nav-text-link" data-cursor-view="PASS">
              RESERVE PASS
            </Link>
            <button className={`nav-sound-btn ${isPlaying ? 'playing' : ''}`} onClick={toggleSound} aria-label="Toggle Sound" data-cursor-view="SOUND">
              {isPlaying ? (
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                </svg>
              )}
            </button>
          </div>

          <Link to="/" className="logo-link center-logo" data-cursor-view="HOL" aria-label="Home">
            <svg className="dragonfly-svg" viewBox="0 0 40 40" fill="currentColor">
              <ellipse cx="20" cy="18" rx="1.2" ry="12" />
              <path d="M20 12 C10 4, 3 8, 1 12 C6 14, 14 14, 19 13.5 Z" />
              <path d="M20 12 C30 4, 37 8, 39 12 C34 14, 26 14, 21 13.5 Z" />
              <path d="M20 16 C12 12, 5 15, 3 19 C8 20, 15 18.5, 19 17 Z" />
              <path d="M20 16 C28 12, 35 15, 37 19 C32 20, 25 18.5, 21 17 Z" />
              <circle cx="20" cy="5" r="1.5" />
            </svg>
          </Link>

          <div className="header-right">
            <button className="menu-toggle nav-text-link" onClick={toggleMenu} aria-label="Toggle Menu" data-cursor-view="MENU">
              <span className="menu-text">{isOpen ? 'CLOSE' : 'INDEX'}</span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fullscreen-menu"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="menu-background-graphic" aria-hidden="true">
              <svg viewBox="0 0 40 40" fill="currentColor" width="100%" height="100%">
                <ellipse cx="20" cy="18" rx="1.2" ry="12" />
                <path d="M20 12 C10 4, 3 8, 1 12 C6 14, 14 14, 19 13.5 Z" />
                <path d="M20 12 C30 4, 37 8, 39 12 C34 14, 26 14, 21 13.5 Z" />
                <path d="M20 16 C12 12, 5 15, 3 19 C8 20, 15 18.5, 19 17 Z" />
                <path d="M20 16 C28 12, 35 15, 37 19 C32 20, 25 18.5, 21 17 Z" />
                <circle cx="20" cy="5" r="1.5" />
              </svg>
            </div>

            <nav className="nav-container">
              <span className="menu-label">FESTIVAL DIRECTORY</span>
              <ul className="nav-links">
                {navLinks.map((link, i) => (
                  <li key={link.name} className="nav-item">
                    <motion.div custom={i} variants={linkVariants}>
                      <Link to={link.href} onClick={toggleMenu} data-cursor-view="OPEN">
                        <span className="link-num">0{i + 1}</span>
                        <span className="link-name">{link.name}</span>
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="menu-footer">
              <div className="footer-col">
                <span className="col-label">SANCTUARY</span>
                <p>COCONEST ECO VILLAGE, POLLACHI</p>
              </div>
              <div className="footer-col">
                <span className="col-label">TIMING</span>
                <p>23 — 25 OCTOBER 2026</p>
              </div>
              <div className="footer-col">
                <span className="col-label">ETHOS</span>
                <p>ZERO SUBSTANCES • PURE ALIVENESS</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
