import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { content } from '../../data/content';
import './HeroVariants.scss';

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  onOpenTickets: () => void;
}

export function HeroVariant1({ onOpenTickets }: HeroProps) {
  // Split-Screen
  return (
    <section className="hero-v1">
      <div className="hero-v1-left">
        <div className="v1-content">
          <div className="v1-badges">
            <span className="brutal-badge">01</span>
            <span className="brutal-badge">{content.hero.dates}</span>
          </div>
          <h1 className="v1-title">
            ALIVENESS<br/>IS THE<br/>ULTIMATE HIGH
          </h1>
          <p className="v1-tagline">{content.hero.tagline}</p>
          <div className="v1-actions">
            <button className="brutal-btn-primary" onClick={onOpenTickets} data-cursor-view="BOOK">RESERVE PASS</button>
            <Link to="/spaces" className="brutal-btn-secondary" data-cursor-view="SPACES">09 SPACES</Link>
          </div>
        </div>
      </div>
      <div className="hero-v1-right">
        <img src={content.hero.imageBg} alt="High on life" />
        <div className="v1-overlay">
          <div className="v1-location">{content.hero.location}</div>
        </div>
      </div>
    </section>
  );
}

export function HeroVariant2({ onOpenTickets }: HeroProps) {
  // Bauhaus Grid Matrix
  return (
    <section className="hero-v2">
      <div className="v2-grid">
        <div className="v2-cell v2-cell-title">
          <h1>HIGH ON<br/>LIFE</h1>
        </div>
        <div className="v2-cell v2-cell-img">
          <img src={content.hero.imageBg} alt="Festival" />
        </div>
        <div className="v2-cell v2-cell-dates">
          <h2>{content.hero.dates}</h2>
          <p>{content.hero.location}</p>
        </div>
        <div className="v2-cell v2-cell-marquee">
          <div className="marquee-inner">
            <span>{content.hero.tagline} • ZERO SUBSTANCES • PURE ALIVENESS • </span>
            <span>{content.hero.tagline} • ZERO SUBSTANCES • PURE ALIVENESS • </span>
          </div>
        </div>
        <div className="v2-cell v2-cell-action">
          <button className="v2-btn" onClick={onOpenTickets} data-cursor-view="PASS">
            RESERVE YOUR PASS
          </button>
        </div>
      </div>
    </section>
  );
}

export function HeroVariant3({ onOpenTickets }: HeroProps) {
  // Floating Parallax
  const containerRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const xPos = (clientX / innerWidth - 0.5) * 2;
      const yPos = (clientY / innerHeight - 0.5) * 2;

      elementsRef.current.forEach((el, index) => {
        if (!el) return;
        const depth = (index + 1) * 20;
        gsap.to(el, {
          x: xPos * depth,
          y: yPos * depth,
          duration: 1,
          ease: 'power2.out'
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="hero-v3" ref={containerRef}>
      <div className="v3-floating-layer">
        <div className="v3-float-item f1" ref={el => { elementsRef.current[0] = el; }}>
          <img src={content.spaces[0].image} alt="Float 1" />
        </div>
        <div className="v3-float-item f2" ref={el => { elementsRef.current[1] = el; }}>
          <img src={content.spaces[1].image} alt="Float 2" />
        </div>
        <div className="v3-float-item f3" ref={el => { elementsRef.current[2] = el; }}>
          <div className="v3-dragonfly">
            <svg viewBox="0 0 40 40" fill="currentColor">
              <ellipse cx="20" cy="18" rx="1.2" ry="12" />
              <path d="M20 12 C10 4, 3 8, 1 12 C6 14, 14 14, 19 13.5 Z" />
              <path d="M20 12 C30 4, 37 8, 39 12 C34 14, 26 14, 21 13.5 Z" />
              <path d="M20 16 C12 12, 5 15, 3 19 C8 20, 15 18.5, 19 17 Z" />
              <path d="M20 16 C28 12, 35 15, 37 19 C32 20, 25 18.5, 21 17 Z" />
            </svg>
          </div>
        </div>
      </div>
      
      <div className="v3-center-content">
        <h1>THE ULTIMATE HIGH</h1>
        <p>{content.hero.dates} • {content.hero.location}</p>
        <button className="brutal-btn-primary" onClick={onOpenTickets} data-cursor-view="ENTER">ENTER SANCTUARY</button>
      </div>
    </section>
  );
}

export function HeroVariant4({ onOpenTickets }: HeroProps) {
  // Typographic Mask that scales to full screen
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '+=100%',
          scrub: 1,
          pin: true
        }
      });
      
      tl.to('.v4-svg-text', {
        scale: 15,
        opacity: 0,
        transformOrigin: '50% 50%',
        ease: 'power2.inOut',
        duration: 0.8
      }, 0)
      .to('.v4-svg-overlay', {
        opacity: 0,
        duration: 0.4
      }, 0.4)
      .to('.v4-footer', {
        opacity: 0,
        duration: 0.2
      }, 0);
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="hero-v4" ref={heroRef}>
      <div className="v4-bg-reveal" style={{ backgroundImage: `url(${content.hero.imageBg})` }} />
      
      {/* Performant SVG Mask Layer */}
      <svg className="v4-svg-overlay" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1000 1000">
        <defs>
          <mask id="hero-text-mask">
            <rect width="100%" height="100%" fill="white" />
            <text 
              x="500" 
              y="500" 
              className="v4-svg-text" 
              textAnchor="middle" 
              dominantBaseline="middle" 
              fill="black"
            >
              HIGH ON LIFE
            </text>
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="#F4F0E6" mask="url(#hero-text-mask)" />
      </svg>

      <div className="v4-content-wrap">
        <div className="v4-header">
          <span className="brutal-badge">NIL ON SUBSTANCE!</span>
        </div>
        <div className="v4-footer">
          <p>A Substance-Free Conscious Celebration of Life With a ton of Music, Movement, Art & Play!!</p>
          <button className="brutal-btn-primary" onClick={onOpenTickets} data-cursor-view="JOIN">JOIN THE MOVEMENT</button>
        </div>
      </div>
    </section>
  );
}
