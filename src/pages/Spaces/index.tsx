import { useState } from 'react';
import { Link } from 'react-router-dom';
import { content } from '../../data/content';
import './Spaces.scss';

export default function SpacesPage() {
  const [filter, setFilter] = useState('ALL');

  const filteredSpaces = filter === 'ALL'
    ? content.spaces
    : content.spaces.filter(s => s.energyLevel.toUpperCase().includes(filter));

  return (
    <div className="page-spaces">
      <header className="spaces-hero-banner">
        <div className="container">
          <div className="header-meta">
            <span className="brutal-badge">POLLACHI 2026</span>
            <span className="meta-text">09 ARCHITECTURAL SANCTUARIES</span>
          </div>
          <h1 className="page-title">09 EXPERIENCE SPACES</h1>
          <p className="page-desc">
            Physical, acoustic, and somatic zones distributed throughout CocoNest Eco Village.
            Designed to unlock aliveness, release tension, and connect deeply without chemical catalysts.
          </p>

          <div className="filter-bar">
            {['ALL', 'RESTORATIVE', 'CATHARTIC', 'PLAY', 'DYNAMIC', 'CREATIVE'].map(f => (
              <button 
                key={f}
                className={`filter-tab ${filter === f ? 'active' : ''}`}
                onClick={() => setFilter(f)}
                data-cursor-view="FILTER"
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="spaces-catalog-section">
        <div className="container">
          <div className="spaces-brutalist-grid">
            {filteredSpaces.map((space, idx) => (
              <article key={space.id} className="space-brutal-card">
                <div className="card-top-bar">
                  <span className="space-idx">SPACE // 0{idx + 1}</span>
                  <span className="energy-pill">{space.energyLevel}</span>
                </div>

                <div className="card-media">
                  <img src={space.image} alt={space.name} loading="lazy" />
                  <div className="card-media-overlay" />
                </div>

                <div className="card-body">
                  <h2 className="space-title">{space.name}</h2>
                  <p className="space-subhead">{space.subtitle}</p>
                  <p className="space-summary">{space.description}</p>

                  <div className="space-metrics">
                    <div className="metric">
                      <span className="lbl">CAPACITY</span>
                      <span className="val">{space.capacity}</span>
                    </div>
                    <div className="metric">
                      <span className="lbl">ATMOSPHERE</span>
                      <span className="val">{space.atmosphere}</span>
                    </div>
                  </div>

                  <Link to={`/space/${space.id}`} className="brutal-btn-primary enter-btn" data-cursor-view="ENTER">
                    EXPLORE ARCHITECTURE & SENSORY LAB →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
