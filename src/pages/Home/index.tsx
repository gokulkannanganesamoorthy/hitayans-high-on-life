import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { content } from '../../data/content';
import { HeroVariant4 } from '../../components/HeroVariants';
import { SpacesVariant3 } from '../../components/SpacesVariants';
import TicketModal from '../../components/TicketModal';
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

      {/* 02 CURRENT EVENTS (Brutalist) */}
      <section className="section-current-event" id="current-event">
        <div className="container">
          <div className="event-marquee-wrap">
            <div className="event-marquee-inner">
              <span>THE NEXT HIGH ON LIFE IS COMING...</span>
              <span>THE NEXT HIGH ON LIFE IS COMING...</span>
              <span>THE NEXT HIGH ON LIFE IS COMING...</span>
            </div>
          </div>

          <div className="event-brutal-card">
            <div className="event-brutal-meta">
              <div className="meta-block">
                <span className="brutal-badge">LOCATION</span>
                <p>CocoNest Eco Village, Pollachi</p>
              </div>
              <div className="meta-block">
                <span className="brutal-badge">DATES</span>
                <p>23 — 25 October 2026</p>
              </div>
              <div className="meta-block">
                <span className="brutal-badge">VIBE</span>
                <p>More Aliveness, Zero Substance!</p>
              </div>
            </div>
            
            <div className="event-brutal-footer">
              <h3 className="event-brutal-tagline">Get HIGH with 25+ Life-altering events in 3 days!</h3>
              <button className="brutal-btn-primary" onClick={() => openTickets()} data-cursor-view="BOOK">
                EXPLORE CURRENT EVENT →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 03 09 EXPERIENCE SPACES PREVIEW */}
      <section className="section-spaces" id="spaces">
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
              <img src="/assets/extracted/page000_01_621e4905.jpg" alt="Gallery" loading="lazy" />
            </div>
            <div className="b-gallery-item" data-cursor-view="VIEW">
              <img src="/assets/extracted/page001_02_c3d3982b.jpg" alt="Gallery" loading="lazy" />
            </div>
            <div className="b-gallery-item" data-cursor-view="VIEW">
              <img src="/assets/extracted/page002_01_8a72eb07.jpg" alt="Gallery" loading="lazy" />
            </div>
            <div className="b-gallery-item" data-cursor-view="VIEW">
              <img src="/assets/extracted/page002_03_3a12adfa.jpg" alt="Gallery" loading="lazy" />
            </div>
            <div className="b-gallery-item wide" data-cursor-view="VIEW">
              <img src="/assets/extracted/page000_02_1ab2115f.jpg" alt="Gallery" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* 06 TESTIMONIALS (Brutalist) */}
      <section className="section-testimonials" id="testimonials">
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
                <img src="/assets/extracted/page001_04_e297f12d.jpg" alt="Testimonial" />
                <div className="play-overlay"><span>PLAY</span></div>
              </div>
              <div className="t-content">
                <h4>@highonlifefest</h4>
                <p>Listen to what our community says about their experience...</p>
              </div>
            </a>
            
            <a href="https://www.instagram.com/p/Da2thh8MoTm/" target="_blank" rel="noreferrer" className="t-brutal-card" data-cursor-view="WATCH">
              <div className="t-media">
                <img src="/assets/extracted/page002_02_519cbbfa.jpg" alt="Testimonial" />
                <div className="play-overlay"><span>PLAY</span></div>
              </div>
              <div className="t-content">
                <h4>@highonlifefest</h4>
                <p>Total aliveness without substances.</p>
              </div>
            </a>

            <a href="https://www.instagram.com/p/Da735MPJp5F/" target="_blank" rel="noreferrer" className="t-brutal-card" data-cursor-view="WATCH">
              <div className="t-media">
                <img src="/assets/extracted/page000_03_27a30763.jpg" alt="Testimonial" />
                <div className="play-overlay"><span>PLAY</span></div>
              </div>
              <div className="t-content">
                <h4>@highonlifefest</h4>
                <p>Moments of pure joy and somatic release...</p>
              </div>
            </a>

            <a href="https://www.instagram.com/p/DaSmK59hE8i/" target="_blank" rel="noreferrer" className="t-brutal-card" data-cursor-view="WATCH">
              <div className="t-media">
                <img src="/assets/extracted/page000_01_621e4905.jpg" alt="Testimonial" />
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



      {/* TICKET RESERVATION MODAL */}
      <TicketModal 
        isOpen={isTicketModalOpen} 
        onClose={() => setIsTicketModalOpen(false)}
        selectedTierId={selectedTierId}
      />
    </div>
  );
}
