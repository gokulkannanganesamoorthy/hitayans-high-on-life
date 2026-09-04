import { Link } from 'react-router-dom';
import './Footer.scss';

export function Footer() {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-brutal-grid">
          <div className="f-brand-col">
            <h2>HIGH ON LIFE</h2>
            <p>
              A conscious 3-day festival celebrating movement, vocal release, creative craft, and human connection without substances.
            </p>
          </div>
          
          <div className="f-nav-col">
            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/workshops">EVENTS</Link>
            <Link to="/tickets">CURRENT EVENT</Link>
            <Link to="/spaces">PAST EVENT</Link>
            <Link to="/contact">CONTACT</Link>
          </div>

          <div className="f-info-col">
            <div className="info-block">
              <span>LOCATION</span>
              <p>AANMAA Movement Collective<br />CocoNest Eco Village<br />Pollachi, Tamil Nadu, India</p>
            </div>
          </div>

          <div className="f-contact-col">
            <div className="info-block">
              <span>CONTACT</span>
              <a href="tel:+917338821898">+91 733-8821898</a>
              <a href="mailto:hello@highonlife.com">hello@highonlife.com</a>
              <a href="https://instagram.com/highonlifefest" target="_blank" rel="noopener noreferrer">@highonlifefest</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 HIGH ON LIFE.</span>
          <span>ALIVENESS IS THE ULTIMATE HIGH</span>
        </div>
      </div>
    </footer>
  );
}
