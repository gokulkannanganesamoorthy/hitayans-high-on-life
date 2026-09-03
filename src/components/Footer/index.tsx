import { Link } from 'react-router-dom';
import './Footer.scss';

export function Footer() {
  return (
    <footer className="global-footer">
      <div className="container">
        {/* Contact Strip */}
        <div className="footer-contact-strip">
          <div className="footer-contact-item">
            <span className="label">Call / WhatsApp</span>
            <a href="tel:+917338821898" className="value">+91 733-8821898</a>
          </div>
          <div className="footer-contact-item">
            <span className="label">Instagram</span>
            <a href="https://www.instagram.com/highonlifefest/" target="_blank" rel="noreferrer" className="value">
              @highonlifefest
            </a>
          </div>
        </div>

        {/* Navigation Grid */}
        <div className="footer-nav-grid">
          {/* Row 1: Main Pages */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">EXPLORE</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/workshops">Events</Link></li>
              <li><Link to="/tickets">Current Event</Link></li>
              <li><Link to="/spaces">Past Event</Link></li>
              <li><Link to="/">Contact</Link></li>
            </ul>
          </div>

          {/* Row 2: Legal */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">LEGAL</h4>
            <ul className="footer-links">
              <li><Link to="/">Privacy Policy</Link></li>
              <li><Link to="/">Terms & Conditions</Link></li>
              <li><Link to="/">Cookie Policy</Link></li>
              <li><Link to="/">Refund Policy</Link></li>
            </ul>
          </div>

          {/* Row 3: Office & Map */}
          <div className="footer-nav-col office-col">
            <h4 className="footer-col-title">OFFICE</h4>
            <address className="footer-address">
              AANMAA Movement Collective<br />
              CocoNest Eco Village,<br />
              Pollachi, Tamil Nadu
            </address>
            <p className="office-hours">Mon - Fri: 10AM - 6PM</p>
            <a href="mailto:hello@highonlife.com" className="footer-email">hello@highonlife.com</a>
            
            <div className="map-thumbnail">
              <div className="map-placeholder">
                GOOGLE MAP THUMBNAIL
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} HIGH ON LIFE & AANMAA Movement Collective. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
