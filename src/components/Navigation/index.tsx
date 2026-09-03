import { useState, useEffect } from 'react';
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
        <Link to="/" className="logo-link" data-cursor-view="HOL">
          <div className="brand-mark">
            <svg className="dragonfly-svg" viewBox="0 0 40 40" fill="currentColor">
              <ellipse cx="20" cy="18" rx="1.2" ry="12" />
              <path d="M20 12 C10 4, 3 8, 1 12 C6 14, 14 14, 19 13.5 Z" opacity="0.85" />
              <path d="M20 12 C30 4, 37 8, 39 12 C34 14, 26 14, 21 13.5 Z" opacity="0.85" />
              <path d="M20 16 C12 12, 5 15, 3 19 C8 20, 15 18.5, 19 17 Z" opacity="0.65" />
              <path d="M20 16 C28 12, 35 15, 37 19 C32 20, 25 18.5, 21 17 Z" opacity="0.65" />
              <circle cx="20" cy="5" r="1.5" />
            </svg>
            <div className="brand-text">
              <span className="brand-title">HIGH ON LIFE</span>
              <span className="brand-subtitle">POLLACHI 2026</span>
            </div>
          </div>
        </Link>

        <div className="header-right">
          <Link to="/tickets" className="header-pass-btn" data-cursor-view="PASS">
            RESERVE PASS →
          </Link>
          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu" data-cursor-view="MENU">
            <span className="menu-burger" />
            <span className="menu-text">{isOpen ? 'CLOSE' : 'INDEX'}</span>
          </button>
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
              HOL
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
