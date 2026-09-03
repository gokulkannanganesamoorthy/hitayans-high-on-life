import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Home.scss';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  
  useEffect(() => {
    // Parallax or reveal animations can be added here
  }, []);

  const galleryImages = [
    '/assets/extracted/page000_01_621e4905.jpg',
    '/assets/extracted/page001_02_c3d3982b.jpg',
    '/assets/extracted/page002_01_8a72eb07.jpg',
    '/assets/extracted/page002_03_3a12adfa.jpg',
    '/assets/extracted/page000_02_1ab2115f.jpg',
    '/assets/extracted/page001_03_36191630.jpg'
  ];

  return (
    <div className="page-home-new">
      
      {/* 01 HERO SECTION */}
      <section className="home-hero-new">
        <div className="hero-bg-media">
          <img src="/assets/audience-hero-DaZlGUU3.jpg" alt="Hero background" />
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content">
          <h1 className="main-title">HIGH ON LIFE</h1>
          <h2 className="sub-title">NIL ON SUBSTANCE!</h2>
          <p className="hero-desc">
            A Substance-Free Conscious Celebration of Life With a ton of Music, Movement, Art & Play!!
          </p>
        </div>
      </section>

      {/* 02 CURRENT EVENTS */}
      <section className="home-current-event">
        <div className="container">
          <span className="section-badge">CURRENT EVENTS</span>
          <h2 className="event-title">THE NEXT HIGH ON LIFE IS COMING…</h2>
          
          <div className="event-details-card">
            <div className="event-meta">
              <span className="meta-item">AT ON WITH CocoNest Eco Village, Pollachi.</span>
              <span className="meta-divider">|</span>
              <span className="meta-item">23 - 25 October 2026.</span>
              <span className="meta-divider">|</span>
              <span className="meta-item accent">More Aliveness, Zero Substance!</span>
            </div>
            <p className="event-highlight">Get HIGH with 25+ Life-altering events in 3 days!</p>
            <Link to="/tickets" className="brutal-btn-primary" data-cursor-view="BOOK">
              EXPLORE CURRENT EVENT →
            </Link>
          </div>
        </div>
      </section>

      {/* 03 GALLERY */}
      <section className="home-gallery">
        <div className="container">
          <div className="section-header-centered">
            <span className="section-badge">MEMORIES</span>
            <h2 className="section-title">A GLIMPSE OF OUR LAST HIGH</h2>
          </div>
          
          <div className="gallery-masonry">
            {galleryImages.map((src, i) => (
              <div key={i} className="gallery-item" data-cursor-view="VIEW">
                <img src={src} alt={`Gallery ${i}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 TESTIMONIALS (IG MOCKUPS) */}
      <section className="home-testimonials">
        <div className="container">
          <div className="section-header-centered">
            <span className="section-badge">TESTIMONIALS</span>
            <h2 className="section-title">TALES FROM OUR LAST HIGH</h2>
          </div>

          <div className="ig-grid">
            {/* IG Mockup 1 */}
            <a href="https://www.instagram.com/p/DaSmK59hE8i/" target="_blank" rel="noreferrer" className="ig-card" data-cursor-view="WATCH">
              <div className="ig-media">
                <img src="/assets/extracted/page001_04_e297f12d.jpg" alt="IG 1" />
                <div className="ig-play-icon">▶</div>
              </div>
              <div className="ig-footer">
                <span className="ig-username">@highonlifefest</span>
                <p>Listen to what our community says about their experience... #HighOnLife</p>
              </div>
            </a>

            {/* IG Mockup 2 */}
            <a href="https://www.instagram.com/p/Da2thh8MoTm/" target="_blank" rel="noreferrer" className="ig-card" data-cursor-view="WATCH">
              <div className="ig-media">
                <img src="/assets/extracted/page002_02_519cbbfa.jpg" alt="IG 2" />
                <div className="ig-play-icon">▶</div>
              </div>
              <div className="ig-footer">
                <span className="ig-username">@highonlifefest</span>
                <p>Total aliveness without substances. #HighOnLife</p>
              </div>
            </a>

            {/* IG Mockup 3 */}
            <a href="https://www.instagram.com/p/Da735MPJp5F/" target="_blank" rel="noreferrer" className="ig-card" data-cursor-view="WATCH">
              <div className="ig-media">
                <img src="/assets/extracted/page000_03_27a30763.jpg" alt="IG 3" />
                <div className="ig-play-icon">▶</div>
              </div>
              <div className="ig-footer">
                <span className="ig-username">@highonlifefest</span>
                <p>Moments of pure joy and somatic release... #HighOnLife</p>
              </div>
            </a>

            {/* IG Mockup 4 */}
            <a href="https://www.instagram.com/p/DbgExE3t4cJ/" target="_blank" rel="noreferrer" className="ig-card" data-cursor-view="WATCH">
              <div className="ig-media">
                <img src="/assets/extracted/page001_01_4675ae4d.jpg" alt="IG 4" />
                <div className="ig-play-icon">▶</div>
              </div>
              <div className="ig-footer">
                <span className="ig-username">@highonlifefest</span>
                <p>The magic of connecting in nature. #HighOnLife</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* 05 EXIT INTENT TRIGGER (Invisible) */}
      <div 
        className="exit-intent-trigger" 
        onMouseLeave={() => console.log('Exit intent triggered (to be implemented)')}
      />
    </div>
  );
}
