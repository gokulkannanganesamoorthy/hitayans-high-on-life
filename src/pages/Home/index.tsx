import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { content } from '../../data/content';
import './Home.scss';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Load Animation
      const tl = gsap.timeline();
      
      tl.from('.hero-meta', {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.2
      })
      .from('.title-line span', {
        y: '100%',
        duration: 1.2,
        stagger: 0.1,
        ease: 'power4.out'
      }, '-=0.8')
      .from(imageRef.current, {
        scale: 1.1,
        opacity: 0,
        duration: 1.5,
        ease: 'power2.out'
      }, '-=1');

      // Parallax Image
      gsap.to(imageRef.current, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
      
      // Text Fade on Scroll
      gsap.to(titleRef.current, {
        opacity: 0,
        y: -50,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'center top',
          scrub: true
        }
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="page-home">
      <section className="section-hero" ref={heroRef}>
        <div className="hero-content">
          <div className="hero-meta">
            <span>{content.hero.est}</span>
            <span>{content.hero.dates}</span>
          </div>
          
          <h1 className="hero-title" ref={titleRef}>
            <div className="title-line">
              <span>ALIVENESS</span>
            </div>
            <div className="title-line indent">
              <span>IS THE</span>
            </div>
            <div className="title-line">
              <span>ULTIMATE</span>
            </div>
            <div className="title-line right">
              <span>HIGH</span>
            </div>
          </h1>
        </div>
        
        <div className="hero-image-wrapper">
          <div 
            className="hero-image" 
            ref={imageRef}
            style={{ backgroundImage: `url(${content.hero.imageBg})` }}
          />
        </div>
      </section>
      
      <section className="section-philosophy">
        <div className="container">
          <h2 className="statement">{content.philosophy.statement}</h2>
          
          <div className="philosophy-grid">
            {content.philosophy.points.map((point, idx) => (
              <div key={idx} className="philosophy-item">
                <span className="item-num">0{idx + 1}</span>
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spaces" id="spaces">
        <div className="container">
          <h2 className="section-heading">EXPERIENCE SPACES</h2>
          <div className="spaces-list">
            {content.spaces.map((space, idx) => (
              <div key={space.id} className="space-item" data-cursor-view="EXPLORE">
                <div className="space-meta">
                  <span>0{idx + 1}</span>
                </div>
                <div className="space-title">
                  <h2>{space.name}</h2>
                </div>
                <div className="space-preview">
                  <img src={space.image} alt={space.name} loading="lazy" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-workshops" id="workshops">
        <div className="container">
          <h2 className="section-heading">{content.workshops.title}</h2>
          
          <div className="workshops-masonry">
             {content.workshops.categories.flatMap(cat => cat.items).map((workshop, idx) => (
                <div key={idx} className={`workshop-card layout-${idx % 3}`}>
                  <div className="image-wrap">
                    <img src={workshop.image} alt={workshop.name} loading="lazy" />
                  </div>
                  <h3>{workshop.name}</h3>
                </div>
             ))}
          </div>
        </div>
      </section>

      <section className="section-tickets" id="tickets">
         <div className="container">
            <h2 className="section-heading">TICKETS & ACCOMMODATION</h2>
            <div className="phases-grid">
              {content.tickets.phases.map((phase, idx) => (
                <div key={idx} className="phase-card">
                  <div className="phase-header">
                    <h3>{phase.name}</h3>
                    <p>{phase.note}</p>
                  </div>
                  <ul className="phase-pricing">
                    {phase.items.map((item, i) => (
                       <li key={i}>
                         <span className="type">{item.type}</span>
                         <span className="price">{item.price}</span>
                       </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
         </div>
      </section>
      
      <footer className="main-footer">
        <div className="container">
          <div className="footer-content">
             <h2>HIGH ON LIFE</h2>
             <p>CocoNest Eco Village, Pollachi</p>
             <p>23 - 25 Oct 2026</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
