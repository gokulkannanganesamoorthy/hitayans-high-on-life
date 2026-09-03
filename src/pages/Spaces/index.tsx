import { useState } from 'react';
import { content } from '../../data/content';
import { SpacesVariant1, SpacesVariant2, SpacesVariant3, SpacesVariant4 } from '../../components/SpacesVariants';
import './Spaces.scss';

export default function SpacesPage() {
  const [filter, setFilter] = useState('ALL');
  const [spacesVariant, setSpacesVariant] = useState<number>(1);

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
        {spacesVariant === 1 && (
          <div className="container">
            <SpacesVariant1 spaces={filteredSpaces} />
          </div>
        )}
        {spacesVariant === 2 && <SpacesVariant2 spaces={filteredSpaces} />}
        {spacesVariant === 3 && (
          <div className="container">
            <SpacesVariant3 spaces={filteredSpaces} />
          </div>
        )}
        {spacesVariant === 4 && (
          <div className="container">
            <SpacesVariant4 spaces={filteredSpaces} />
          </div>
        )}
      </main>

      {/* SPACES VARIANT SWITCHER */}
      <div className="spaces-variant-switcher">
        <span className="switcher-label">SPACES CONCEPT</span>
        <div className="switcher-buttons">
          {[1, 2, 3, 4].map(v => (
            <button 
              key={v}
              className={`variant-btn ${spacesVariant === v ? 'active' : ''}`}
              onClick={() => setSpacesVariant(v)}
            >
              0{v}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
