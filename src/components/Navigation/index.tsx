import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navigation.scss';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Spaces', href: '#spaces' },
  { name: 'Workshops', href: '#workshops' },
  { name: 'About', href: '#about' },
  { name: 'Tickets', href: '#tickets' }
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    closed: {
      y: '-100%',
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1] as const
      }
    },
    open: {
      y: '0%',
      transition: {
        duration: 0.8,
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
        duration: 0.6,
        ease: [0.76, 0, 0.24, 1] as const,
        delay: 0.1 * i + 0.2
      }
    })
  };

  return (
    <>
      <header className={`main-header ${isOpen ? 'menu-open' : ''}`}>
        <div className="logo-container">
          <a href="/">
            <img src="/logo.svg" alt="High on Life" className="logo" />
          </a>
        </div>
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
          <span className="menu-text">{isOpen ? 'CLOSE' : 'MENU'}</span>
        </button>
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
            <nav className="nav-container">
              <ul className="nav-links">
                {navLinks.map((link, i) => (
                  <li key={link.name} className="nav-item">
                    <motion.div custom={i} variants={linkVariants}>
                      <a href={link.href} onClick={toggleMenu} data-cursor-view="GO">
                        {link.name}
                      </a>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="menu-footer">
              <p>23 - 25 OCT 2026</p>
              <p>POLLACHI</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
