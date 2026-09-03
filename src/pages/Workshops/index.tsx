import { useState } from 'react';
import { content } from '../../data/content';
import './Workshops.scss';

export default function WorkshopsPage() {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const categories = ['ALL', 'MOVEMENT', 'STRENGTH', 'PLAY', 'CRAFT', 'SOUND', 'COMMUNITY'];

  const filtered = activeCategory === 'ALL'
    ? content.workshops
    : content.workshops.filter(w => w.tag.toUpperCase() === activeCategory);

  return (
    <div className="page-workshops">
      <header className="workshops-hero-banner">
        <div className="container">
          <div className="header-meta">
            <span className="brutal-badge">CURRICULUM</span>
            <span className="meta-text">OCTOBER 23 — 25, 2026</span>
          </div>
          <h1 className="page-title">25+ CONSCIOUS WORKSHOPS</h1>
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

      <main className="workshops-body-section">
        <div className="container">
          <div className="workshops-editorial-grid">
            {filtered.map((item, idx) => (
              <article key={idx} className="workshop-editorial-tile">
                <div className="tile-thumb">
                  <img src={item.image} alt={item.name} loading="lazy" />
                  <div className="hover-overlay"></div>
                </div>

                <div className="tile-content">
                  <div className="tile-meta">
                    <span className="num">0{idx + 1}</span>
                    <span className="badge">{item.tag}</span>
                  </div>
                  <h2 className="title">{item.name}</h2>
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
