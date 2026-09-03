import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { content } from '../../data/content';
import './SpacesVariants.scss';

gsap.registerPlugin(ScrollTrigger);

interface SpaceProps {
  spaces: typeof content.spaces;
}

export function SpacesVariant1({ spaces }: SpaceProps) {
  // Brutalist List Matrix
  return (
    <div className="spaces-v1-matrix">
      <div className="matrix-header">
        <div className="col-idx">IDX</div>
        <div className="col-name">SANCTUARY</div>
        <div className="col-energy">ENERGY</div>
        <div className="col-action"></div>
      </div>
      {spaces.map((space, i) => (
        <Link to={`/space/${space.id}`} key={space.id} className="matrix-row" data-cursor-view="EXPLORE">
          <div className="col-idx">0{i + 1}</div>
          <div className="col-name">
            <h3>{space.name}</h3>
            <span>{space.subtitle}</span>
          </div>
          <div className="col-energy">
            <span className="brutal-badge">{space.energyLevel}</span>
          </div>
          <div className="col-action">
            <span className="action-arrow">→</span>
          </div>
          <div className="hover-reveal-img">
            <img src={space.image} alt={space.name} />
          </div>
        </Link>
      ))}
    </div>
  );
}

export function SpacesVariant2({ spaces }: SpaceProps) {
  // Horizontal Scroll Gallery
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const scrollWidth = scrollWrapperRef.current ? scrollWrapperRef.current.scrollWidth - window.innerWidth : 0;
      
      gsap.to(scrollWrapperRef.current, {
        x: -scrollWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: `+=${scrollWidth}`,
          scrub: 1,
          pin: true
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="spaces-v2-horizontal" ref={containerRef}>
      <div className="v2-scroll-wrapper" ref={scrollWrapperRef}>
        {spaces.map((space, i) => (
          <div key={space.id} className="v2-poster-card">
            <div className="poster-img">
              <img src={space.image} alt={space.name} />
              <div className="poster-num">0{i + 1}</div>
            </div>
            <div className="poster-info">
              <h3>{space.name}</h3>
              <p>{space.subtitle}</p>
              <Link to={`/space/${space.id}`} className="brutal-btn-primary" data-cursor-view="ENTER">EXPLORE</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SpacesVariant3({ spaces }: SpaceProps) {
  // Hover-Expand Accordion
  return (
    <div className="spaces-v3-accordion">
      {spaces.map((space, i) => (
        <Link to={`/space/${space.id}`} key={space.id} className="accordion-slice" data-cursor-view="EXPLORE">
          <img src={space.image} alt={space.name} className="slice-bg" />
          <div className="slice-overlay" />
          <div className="slice-content">
            <div className="slice-num">0{i + 1}</div>
            <h3 className="slice-title">{space.name}</h3>
            <div className="slice-hidden-details">
              <p>{space.subtitle}</p>
              <span className="brutal-badge">{space.energyLevel}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function SpacesVariant4({ spaces }: SpaceProps) {
  // Masonry Mosaic
  return (
    <div className="spaces-v4-masonry">
      {spaces.map((space, i) => {
        // Create an asymmetrical layout based on index
        let spanClass = 'span-normal';
        if (i === 0 || i === 4) spanClass = 'span-large';
        if (i === 2 || i === 7) spanClass = 'span-tall';
        if (i === 3 || i === 8) spanClass = 'span-wide';

        return (
          <Link to={`/space/${space.id}`} key={space.id} className={`masonry-item ${spanClass}`} data-cursor-view="EXPLORE">
            <img src={space.image} alt={space.name} />
            <div className="masonry-overlay">
              <div className="m-top">
                <span className="m-num">0{i + 1}</span>
                <span className="brutal-badge">{space.energyLevel}</span>
              </div>
              <div className="m-bottom">
                <h3>{space.name}</h3>
                <p>{space.subtitle}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
