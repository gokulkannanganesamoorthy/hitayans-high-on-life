import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { content } from '../../data/content';
import './SpaceDetail.scss';

export default function SpaceDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const spaceIndex = content.spaces.findIndex(s => s.id === id);
  const space = content.spaces[spaceIndex] || content.spaces[0];

  const nextIndex = (spaceIndex + 1) % content.spaces.length;
  const nextSpace = content.spaces[nextIndex];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="page-space-detail">
      {/* Top Header bar */}
      <nav className="detail-top-bar">
        <button className="back-link" onClick={() => navigate('/#spaces')} data-cursor-view="BACK">
          ← ALL SPACES
        </button>
        <div className="space-indexer">
          SPACE 0{spaceIndex + 1} / 0{content.spaces.length}
        </div>
      </nav>

      {/* Hero Header */}
      <header className="space-hero-section dark-hero">
        <div className="space-meta-strip">
          <span>COCONEST ECO VILLAGE</span>
          <span>EST. OCT 2026</span>
          <span>{space.energyLevel.toUpperCase()}</span>
        </div>

        <motion.h1 
          className="space-headline"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {space.name}
        </motion.h1>

        <p className="space-subhead">{space.subtitle}</p>

        <div className="space-hero-image-wrap">
          <motion.img 
            src={space.image} 
            alt={space.name}
            initial={{ scale: 1.15, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
      </header>

      {/* Editorial Content Blocks */}
      <section className="detail-narrative">
        <div className="narrative-grid">
          {/* 01 Concept */}
          <div className="narrative-column">
            <span className="chapter-marker">01 — PHILOSOPHY & INTENTION</span>
            <h2>THE CONCEPT</h2>
            <p className="lead-paragraph">{space.description}</p>
            <p className="body-text">{space.concept}</p>
          </div>

          {/* 02 Experience */}
          <div className="narrative-column">
            <span className="chapter-marker">02 — THE ACTIVATIONS</span>
            <h2>WHAT TAKES PLACE</h2>
            <ul className="experience-list">
              {space.experience.map((item, i) => (
                <li key={i}>
                  <span className="item-bullet">/ 0{i + 1}</span>
                  <span className="item-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Space Data Table */}
        <div className="space-spec-sheet">
          <h3 className="spec-heading">SPACE ARCHITECTURE & SPECIFICATIONS</h3>
          <div className="spec-grid">
            <div className="spec-item">
              <span className="spec-label">SENSORY</span>
              <span className="spec-val">{space.atmosphere}</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">ENERGY PROFILE</span>
              <span className="spec-val">{space.energyLevel}</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">MAX CAPACITY</span>
              <span className="spec-val">{space.capacity}</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">RECOMMENDED ATTIRE</span>
              <span className="spec-val">{space.whatToBring}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Next Space Loop */}
      <section className="next-space-link-block">
        <Link to={`/space/${nextSpace.id}`} className="next-space-card" data-cursor-view="NEXT">
          <div className="next-meta">
            <span>UP NEXT — SPACE 0{nextIndex + 1}</span>
            <span className="arrow-icon">→</span>
          </div>
          <h2 className="next-title">{nextSpace.name}</h2>
          <div className="next-image-thumbnail">
            <img src={nextSpace.image} alt={nextSpace.name} />
          </div>
        </Link>
      </section>
    </div>
  );
}
