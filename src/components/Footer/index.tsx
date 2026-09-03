import { Link } from 'react-router-dom';
import './Footer.scss';

export function Footer() {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2 className="footer-logo-text">HIGH ON LIFE</h2>
            <p className="footer-manifesto-text">
              A conscious 3-day festival celebrating movement, vocal release, creative craft, and human connection without substances.
            </p>
            <div className="footer-nav-links">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/workshops">Events</Link>
              <Link to="/tickets">Current Event</Link>
              <Link to="/spaces">Past Event</Link>
            </div>
          </div>

          <div className="footer-details-grid">
            <div className="footer-detail-col">
              <span className="detail-label">OFFICE / LOCATION</span>
              <p>AANMAA Movement Collective<br />CocoNest Eco Village<br />Pollachi, Tamil Nadu, India</p>
            </div>
            <div className="footer-detail-col">
              <span className="detail-label">LEGAL</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.5rem' }}>
                <Link style={{ color: 'var(--color-bg)', textDecoration: 'none', fontSize: '0.95rem' }} to="/">Privacy Policy</Link>
                <Link style={{ color: 'var(--color-bg)', textDecoration: 'none', fontSize: '0.95rem' }} to="/">Terms & Conditions</Link>
                <Link style={{ color: 'var(--color-bg)', textDecoration: 'none', fontSize: '0.95rem' }} to="/">Refund Policy</Link>
              </div>
            </div>
            <div className="footer-detail-col">
              <span className="detail-label">CONTACT</span>
              <p><a href="tel:+917338821898">+91 733-8821898</a></p>
              <p><a href="mailto:hello@highonlife.com">hello@highonlife.com</a></p>
              <p><a href="https://instagram.com/highonlifefest" target="_blank" rel="noopener noreferrer">@highonlifefest</a></p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 HIGH ON LIFE FESTIVAL. ALL RIGHTS RESERVED.</span>
          <span>ALIVENESS IS THE ULTIMATE HIGH</span>
        </div>
      </div>
    </footer>
  );
}
