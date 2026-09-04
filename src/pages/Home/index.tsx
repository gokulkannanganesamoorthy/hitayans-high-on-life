import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { content } from '../../data/content';
import { HeroVariant4 } from '../../components/HeroVariants';
import { SpacesVariant3 } from '../../components/SpacesVariants';
import TicketModal from '../../components/TicketModal';
import MicroElement from '../../components/MicroElement';
import './Home.scss';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);
  const [selectedTierId, setSelectedTierId] = useState<string | null>(null);
  const [activeWorkshopFilter, setActiveWorkshopFilter] = useState<string>('ALL');
  
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scrollSlider = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const amount = direction === 'left' ? -400 : 400;
      sliderRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

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

      {/* NEW: INTRO SECTION */}
      <section className="section-intro" id="intro" style={{ position: 'relative' }}>
        <MicroElement asset="butterfly.svg" top="10%" left="5%" width="120px" rotation="-15deg" delay="0s" />
        <MicroElement asset="Asset 1ldpi.svg" bottom="15%" right="8%" width="150px" rotation="20deg" delay="2s" />
        <div className="container">
          <div className="intro-content">
            <h2>MORE ALIVENESS. ZERO SUBSTANCE.</h2>
            <p>
              HIGH on Life is a 3-day conscious gathering in the heart of Pollachi. 
              We bring together movement artists, somatic practitioners, and beautiful souls 
              to celebrate life in its purest form. No alcohol, no substances—just deep connection, 
              wild play, and unapologetic joy.
            </p>
          </div>
        </div>
      </section>

      {/* 03 WHAT TO EXPECT */}
      <section className="brutalist-expect-marquee" id="experience">
        <div className="marquee-wrapper">
          <div className="marquee-track">
            <span>PLAY <span className="dot">•</span> CREATE <span className="dot">•</span> CONNECT <span className="dot">•</span> LET GO <span className="dot">•</span></span>
            <span>PLAY <span className="dot">•</span> CREATE <span className="dot">•</span> CONNECT <span className="dot">•</span> LET GO <span className="dot">•</span></span>
            <span>PLAY <span className="dot">•</span> CREATE <span className="dot">•</span> CONNECT <span className="dot">•</span> LET GO <span className="dot">•</span></span>
            <span>PLAY <span className="dot">•</span> CREATE <span className="dot">•</span> CONNECT <span className="dot">•</span> LET GO <span className="dot">•</span></span>
          </div>
        </div>
      </section>

      {/* 04 EXPERIENCE SPACES */}
      <section className="section-spaces" id="spaces" style={{ position: 'relative' }}>
        <MicroElement asset="Asset 2ldpi.svg" top="20%" right="10%" width="200px" rotation="-5deg" className="blend-screen" />
        <MicroElement asset="Asset 4ldpi.svg" bottom="10%" left="5%" width="180px" rotation="15deg" delay="1s" className="blend-screen" />
        <div className="container">
          <div className="section-title-row">
            <div>
              <span className="brutal-badge">SANCTUARIES</span>
              <h2 className="section-main-title light">09 EXPERIENCE SPACES</h2>
            </div>
            <Link to="/spaces" className="brutal-btn-secondary" data-cursor-view="ALL">
              VIEW ALL 09 SPACES →
            </Link>
          </div>

          <SpacesVariant3 spaces={content.spaces} />

          <div className="section-bottom-action">
            <Link to="/spaces" className="brutal-btn-primary" data-cursor-view="ALL">
              VIEW ALL 09 EXPERIENCE SPACES →
            </Link>
          </div>
        </div>
      </section>

      {/* 05 WORKSHOPS HIGHLIGHT */}
      <section className="section-workshops" id="workshops" style={{ position: 'relative' }}>
        <MicroElement asset="Asset 5ldpi.svg" top="5%" right="5%" width="140px" rotation="45deg" />
        <MicroElement asset="Asset 6ldpi.svg" bottom="20%" left="3%" width="160px" rotation="-20deg" delay="3s" />
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

          <div className="workshops-grid" style={{ marginTop: '3rem' }}>
            {filteredWorkshops.slice(0, 6).map((item, idx: number) => (
              <article key={idx} className="workshop-card" data-cursor-view="WORKSHOP">
                <div className="workshop-image-box">
                  <img src={item.image} alt={item.name} loading="lazy" />
                  <span className="workshop-badge">{item.tag}</span>
                </div>

                <div className="workshop-info">
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                </div>
              </article>
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
      {/* 05 GALLERY (Brutalist) */}
      <section className="section-gallery" id="gallery">
        <div className="container">
          <div className="section-title-row">
            <div>
              <span className="brutal-badge">MEMORIES</span>
              <h2 className="section-main-title">A GLIMPSE OF OUR LAST HIGH</h2>
            </div>
          </div>
          
          <div className="brutal-gallery-grid">
            <div className="b-gallery-item large" data-cursor-view="VIEW">
              <img src="/assets/img99.jpg" alt="Gallery" loading="lazy" />
            </div>
            <div className="b-gallery-item" data-cursor-view="VIEW">
              <img src="/assets/img134.jpg" alt="Gallery" loading="lazy" />
            </div>
            <div className="b-gallery-item" data-cursor-view="VIEW">
              <img src="/assets/img97.jpg" alt="Gallery" loading="lazy" />
            </div>
            <div className="b-gallery-item" data-cursor-view="VIEW">
              <img src="/assets/img156.jpg" alt="Gallery" loading="lazy" />
            </div>
            <div className="b-gallery-item wide" data-cursor-view="VIEW">
              <img src="/assets/img140.jpg" alt="Gallery" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* 06 TESTIMONIALS (Brutalist) */}
      <section className="section-testimonials" id="testimonials" style={{ position: 'relative' }}>
        <MicroElement asset="Asset 7ldpi.svg" top="15%" left="5%" width="220px" className="blend-screen" />
        <MicroElement asset="Asset 8ldpi.svg" bottom="5%" right="2%" width="190px" rotation="10deg" delay="2s" className="blend-screen" />
        <div className="container">
          <div className="section-title-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
            <div>
              <span className="brutal-badge">TESTIMONIALS</span>
              <h2 className="section-main-title light">TALES FROM OUR LAST HIGH</h2>
            </div>
            <div className="slider-nav-btns" style={{ display: 'flex', gap: '1rem' }}>
              <button 
                className="brutal-btn-icon" 
                onClick={() => scrollSlider('left')}
                aria-label="Previous testimonial"
                disabled={!canScrollLeft}
                style={{ opacity: canScrollLeft ? 1 : 0.3, cursor: canScrollLeft ? 'pointer' : 'not-allowed' }}
              >
                ←
              </button>
              <button 
                className="brutal-btn-icon" 
                onClick={() => scrollSlider('right')}
                aria-label="Next testimonial"
                disabled={!canScrollRight}
                style={{ opacity: canScrollRight ? 1 : 0.3, cursor: canScrollRight ? 'pointer' : 'not-allowed' }}
              >
                →
              </button>
            </div>
          </div>

          <div className="brutal-testimonials-grid" ref={sliderRef} onScroll={checkScroll}>
            <a href="https://www.instagram.com/p/DaSmK59hE8i/" target="_blank" rel="noreferrer" className="t-brutal-card" data-cursor-view="WATCH">
              <div className="t-media">
                <img src="/assets/img187.jpg" alt="Testimonial" />
                <div className="play-overlay"><span>PLAY</span></div>
              </div>
              <div className="t-content">
                <h4>@highonlifefest</h4>
                <p>Listen to what our community says about their experience...</p>
              </div>
            </a>
            
            <a href="https://www.instagram.com/p/Da2thh8MoTm/" target="_blank" rel="noreferrer" className="t-brutal-card" data-cursor-view="WATCH">
              <div className="t-media">
                <img src="/assets/img191.jpg" alt="Testimonial" />
                <div className="play-overlay"><span>PLAY</span></div>
              </div>
              <div className="t-content">
                <h4>@highonlifefest</h4>
                <p>Total aliveness without substances.</p>
              </div>
            </a>

            <a href="https://www.instagram.com/p/Da735MPJp5F/" target="_blank" rel="noreferrer" className="t-brutal-card" data-cursor-view="WATCH">
              <div className="t-media">
                <img src="/assets/img26.jpg" alt="Testimonial" />
                <div className="play-overlay"><span>PLAY</span></div>
              </div>
              <div className="t-content">
                <h4>@highonlifefest</h4>
                <p>Moments of pure joy and somatic release...</p>
              </div>
            </a>

            <a href="https://www.instagram.com/p/DaSmK59hE8i/" target="_blank" rel="noreferrer" className="t-brutal-card" data-cursor-view="WATCH">
              <div className="t-media">
                <img src="/assets/img163.jpg" alt="Testimonial" />
                <div className="play-overlay"><span>PLAY</span></div>
              </div>
              <div className="t-content">
                <h4>@highonlifefest</h4>
                <p>An unforgettable conscious gathering.</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* 02 PASSES (Tickets) MOVED TO BOTTOM */}
      <section className="tickets-main-body" id="passes" style={{ position: 'relative', paddingTop: '8vh', paddingBottom: '12vh' }}>
        <MicroElement asset="butterfly.svg" top="5%" right="15%" width="100px" rotation="30deg" delay="1s" />
        <MicroElement asset="Asset 1ldpi.svg" bottom="5%" left="5%" width="150px" rotation="-10deg" />
        <div className="container">
          <div className="passes-hero-section">
            <h1 className="title">PASSES & ACCOMMODATION</h1>
            <div className="subtitle-row">
              <p>3 Full Days in Pollachi • All 25+ Workshops • Organic Village Meals • Sacred Spaces Access</p>
              <Link to="/tickets" className="full-tier-guide-btn" style={{ textDecoration: 'none' }}>
                FULL TIER GUIDE →
              </Link>
            </div>
          </div>

          <div className="phases-columns-container">
            {content.tickets.phases.map(phase => (
              <div key={phase.id} className="phase-column-card">
                <div className="phase-badge">{phase.badge}</div>
                <h2 className="phase-name">{phase.name}</h2>
                <p className="phase-desc">{phase.note}</p>
                <div className="dashed-divider"></div>

                <div className="tiers-vertical-list">
                  {phase.items.map(tier => (
                    <div key={tier.id} className="tier-row-card">
                      <div className="tier-info">
                        <h4 className="tier-name">{tier.type}</h4>
                        <p className="tier-limit">{tier.limit}</p>
                      </div>

                      <div className="tier-price-action">
                        <div className="tier-price">₹{tier.price}</div>
                        <button 
                          className="reserve-btn"
                          onClick={() => openTickets(tier.id)}
                          data-cursor-view="RESERVE"
                        >
                          RESERVE →
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TICKET RESERVATION MODAL */}
      <TicketModal 
        isOpen={isTicketModalOpen} 
        onClose={() => setIsTicketModalOpen(false)}
        selectedTierId={selectedTierId}
      />
    </div>
  );
}
