import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { content } from '../../data/content';
import { HeroVariant4 } from '../../components/HeroVariants';
import { SpacesVariant1, SpacesVariant2, SpacesVariant3, SpacesVariant4 } from '../../components/SpacesVariants';
import TicketModal from '../../components/TicketModal';
import './Home.scss';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);
  const [selectedTierId, setSelectedTierId] = useState<string | null>(null);
  const [activeWorkshopFilter, setActiveWorkshopFilter] = useState<string>('ALL');
  const [spacesVariant, setSpacesVariant] = useState<number>(1);

  const openTickets = (tierId?: string) => {
    setSelectedTierId(tierId || null);
    setIsTicketModalOpen(true);
  };

  const workshopFilters = ['ALL', 'MOVEMENT', 'STRENGTH', 'PLAY', 'CRAFT', 'SOUND', 'COMMUNITY'];

  const filteredWorkshops = activeWorkshopFilter === 'ALL'
    ? content.workshops
    : content.workshops.filter((w) => w.tag.toUpperCase() === activeWorkshopFilter);

  useEffect(() => {
    // Other setup logic could go here if needed in the future
  }, []);

  return (
    <div className="page-home">
      {/* 01 HERO SECTION */}
      <HeroVariant4 onOpenTickets={openTickets} />

      {/* 02 PHILOSOPHY MANIFESTO */}
      <section className="section-philosophy" id="philosophy">
        <div className="container">
          <div className="philosophy-header">
            <span className="brutal-badge">THE MANIFESTO</span>
            <h2 className="manifesto-statement">
              "{content.philosophy.statement}"
            </h2>
          </div>

          <div className="philosophy-pillars-grid">
            {content.philosophy.points.map((pt, i) => (
              <div key={i} className="pillar-card">
                <div className="pillar-num">PILLAR // {pt.number}</div>
                <h3 className="pillar-title">{pt.title}</h3>
                <p className="pillar-desc">{pt.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 09 EXPERIENCE SPACES PREVIEW */}
      <section className="section-spaces" id="spaces">
        <div className="container">
          <div className="section-title-row">
            <div>
              <span className="brutal-badge">SANCTUARIES</span>
              <h2 className="section-main-title">09 EXPERIENCE SPACES</h2>
            </div>
            <Link to="/spaces" className="brutal-btn-secondary" data-cursor-view="ALL">
              VIEW ALL 09 SPACES →
            </Link>
          </div>

          {spacesVariant === 1 && <SpacesVariant1 spaces={content.spaces} />}
          {spacesVariant === 2 && <SpacesVariant2 spaces={content.spaces} />}
          {spacesVariant === 3 && <SpacesVariant3 spaces={content.spaces} />}
          {spacesVariant === 4 && <SpacesVariant4 spaces={content.spaces} />}
          
          {/* SPACES VARIANT SWITCHER */}
          <div className="spaces-variant-switcher-home" style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <span className="switcher-label" style={{ fontWeight: 'bold', alignSelf: 'center', color: 'var(--color-dark)' }}>SANCTUARY CONCEPT:</span>
            <div className="switcher-buttons" style={{ display: 'flex', gap: '0.5rem' }}>
              {[1, 2, 3, 4].map(v => (
                <button 
                  key={v}
                  style={{
                    padding: '0.5rem 1rem',
                    background: spacesVariant === v ? 'var(--color-lime)' : 'transparent',
                    border: '2px solid var(--color-dark)',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    color: 'var(--color-dark)'
                  }}
                  onClick={() => setSpacesVariant(v)}
                >
                  0{v}
                </button>
              ))}
            </div>
          </div>

          <div className="section-bottom-action">
            <Link to="/spaces" className="brutal-btn-primary" data-cursor-view="ALL">
              VIEW ALL 09 EXPERIENCE SPACES →
            </Link>
          </div>
        </div>
      </section>

      {/* 04 WORKSHOPS HIGHLIGHT */}
      <section className="section-workshops" id="workshops">
        <div className="container">
          <div className="section-title-row">
            <div>
              <span className="brutal-badge">ACTIVATIONS</span>
              <h2 className="section-main-title">25+ CONSCIOUS WORKSHOPS</h2>
            </div>
            <div className="workshop-filter-pills">
              {workshopFilters.map(filter => (
                <button
                  key={filter}
                  className={`filter-btn ${activeWorkshopFilter === filter ? 'active' : ''}`}
                  onClick={() => setActiveWorkshopFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="workshops-grid">
            {filteredWorkshops.slice(0, 6).map((workshop, idx: number) => (
              <div key={idx} className="workshop-card" data-cursor-view="WORKSHOP">
                <div className="workshop-image-box">
                  <img src={workshop.image} alt={workshop.name} loading="lazy" />
                  <span className="workshop-badge">{workshop.tag}</span>
                </div>
                <div className="workshop-info">
                  <h4 className="workshop-title">{workshop.name}</h4>
                  <p className="workshop-desc">{workshop.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="section-bottom-action">
            <Link to="/workshops" className="brutal-btn-primary" data-cursor-view="CATALOG">
              VIEW FULL WORKSHOPS CATALOG →
            </Link>
          </div>
        </div>
      </section>

      {/* 05 ABOUT SUMMARY */}
      <section className="section-about" id="about">
        <div className="container">
          <div className="about-editorial-wrap">
            <div className="about-narrative-col">
              <span className="brutal-badge">GENESIS</span>
              <h2 className="about-heading">
                HOW HIGH ON LIFE WAS BORN
              </h2>
              
              <div className="quote-box">
                <p className="founder-quote-text">
                  "{content.about.founder.story}"
                </p>
                <div className="founder-signature">
                  <strong>{content.about.founder.name}</strong>
                  <span>{content.about.founder.role} • {content.about.founder.collective}</span>
                </div>
              </div>

              <Link to="/about" className="brutal-btn-secondary" data-cursor-view="ORIGIN">
                READ FULL STORY & DRAGONFLY MYTHOLOGY →
              </Link>
            </div>

            <div className="about-portrait-col">
              <div className="portrait-frame">
                <img src={content.about.founder.image} alt={content.about.founder.name} />
                <div className="portrait-caption">
                  <span>JIJO // MOVEMENT ARTIST & CO-CREATOR</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06 TICKETS BREAKDOWN */}
      <section className="section-tickets" id="tickets">
        <div className="container">
          <div className="tickets-intro-row">
            <div>
              <span className="brutal-badge">SANCTUARY PASSES</span>
              <h2 className="section-main-title light">PASSES & ACCOMMODATION</h2>
              <p className="tickets-subtitle">
                3 Full Days in Pollachi • All 25+ Workshops • Organic Village Meals • Sacred Spaces Access
              </p>
            </div>
            <Link to="/tickets" className="brutal-btn-primary" data-cursor-view="PASSES">
              FULL TIER GUIDE →
            </Link>
          </div>

          <div className="phases-columns-grid">
            {content.tickets.phases.map(phase => (
              <div key={phase.id} className="phase-column-card">
                <div className="phase-card-header">
                  <div className="phase-badge">{phase.badge}</div>
                  <h3 className="phase-title">{phase.name}</h3>
                  <p className="phase-note">{phase.note}</p>
                </div>

                <div className="phase-items-list">
                  {phase.items.map(tier => (
                    <div 
                      key={tier.id} 
                      className="tier-ticket-row"
                      onClick={() => openTickets(tier.id)}
                      data-cursor-view="BOOK"
                    >
                      <div className="tier-info">
                        <span className="tier-name">{tier.type}</span>
                        <span className="tier-limit">{tier.limit}</span>
                      </div>
                      <div className="tier-price-box">
                        <span className="tier-price">{tier.price}</span>
                        <span className="tier-select-action">RESERVE →</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="festival-guarantee-strip">
            <div className="guarantee-item">
              <span className="g-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
                </svg>
              </span>
              <p><strong>100% Substance Free</strong> — Zero alcohol, drugs, or smoking allowed.</p>
            </div>
            <div className="guarantee-item">
              <span className="g-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </span>
              <p><strong>CocoNest Eco-Village</strong> — Organic farm sanctuary in Pollachi.</p>
            </div>
            <div className="guarantee-item">
              <span className="g-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/>
                  <path d="M13 5v2"/>
                  <path d="M13 17v2"/>
                  <path d="M13 11v2"/>
                </svg>
              </span>
              <p><strong>Transferable Passes</strong> — Transferable up to 48 hours prior.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 07 FOOTER */}
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
                <Link to="/spaces">Spaces</Link>
                <Link to="/workshops">Workshops</Link>
                <Link to="/about">About</Link>
                <Link to="/tickets">Tickets</Link>
              </div>
            </div>

            <div className="footer-details-grid">
              <div className="footer-detail-col">
                <span className="detail-label">LOCATION</span>
                <p>CocoNest Eco Village<br />Pollachi, Tamil Nadu, India</p>
              </div>
              <div className="footer-detail-col">
                <span className="detail-label">DATES</span>
                <p>23 — 25 October 2026<br />Friday Dawn — Sunday Twilight</p>
              </div>
              <div className="footer-detail-col">
                <span className="detail-label">CONTACT</span>
                <p><a href="tel:+917338821898">+91 733-8821898</a></p>
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

      {/* TICKET RESERVATION MODAL */}
      <TicketModal 
        isOpen={isTicketModalOpen} 
        onClose={() => setIsTicketModalOpen(false)}
        selectedTierId={selectedTierId}
      />
    </div>
  );
}
