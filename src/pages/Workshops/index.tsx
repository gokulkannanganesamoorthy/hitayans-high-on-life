import { useState } from 'react';
import { content } from '../../data/content';
import MicroElement from '../../components/MicroElement';
import './Workshops.scss';

export default function WorkshopsPage() {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const categories = ['ALL', 'MOVEMENT', 'STRENGTH', 'PLAY', 'CRAFT', 'SOUND', 'COMMUNITY'];

  const filtered = activeCategory === 'ALL'
    ? content.workshops
    : content.workshops.filter(w => w.tag.toUpperCase() === activeCategory);

  return (
    <div className="page-workshops">
      <header className="workshops-hero-organic" style={{ position: 'relative', overflow: 'hidden' }}>
        <MicroElement asset="Asset 6ldpi.svg" top="20%" right="5%" width="200px" rotation="-15deg" delay="0s" />
        <MicroElement asset="butterfly.svg" bottom="20%" left="10%" width="120px" rotation="25deg" delay="1s" />
        <div className="marquee-elegant">
          <div className="marquee-track">
            <span>25+ CONSCIOUS WORKSHOPS</span>
            <span className="dot">•</span>
            <span>OCTOBER 23 — 25, 2026</span>
            <span className="dot">•</span>
            <span>25+ CONSCIOUS WORKSHOPS</span>
            <span className="dot">•</span>
            <span>OCTOBER 23 — 25, 2026</span>
            <span className="dot">•</span>
          </div>
        </div>
        <div className="container">
          <p className="page-desc">
            Led by master movement artists, traditional martial artists, somatic therapists, and botanical craftsmen.
            Zero prior experience required. Come as you are.
          </p>

          <div className="category-filter-bar">
            {categories.map(cat => (
              <button
                key={cat}
                className={`cat-pill ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
                data-cursor-view="FILTER"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="workshops-body-organic">
        <div className="container">
          <div className="workshops-masonry-grid">
            {filtered.map((item, idx) => (
              <article key={idx} className="workshop-elegant-card">
                <div className="card-media">
                  <img src={item.image} alt={item.name} loading="lazy" />
                  <div className="overlay-badge">
                    <span className="badge">{item.tag}</span>
                  </div>
                </div>

                <div className="card-content">
                  <div className="content-header">
                    <span className="num">0{idx + 1}</span>
                    <h2 className="title">{item.name}</h2>
                  </div>
                  <p className="description">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
