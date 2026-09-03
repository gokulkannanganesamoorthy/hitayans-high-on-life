import { useState } from 'react';
import { content } from '../../data/content';
import { SpacesVariant3 } from '../../components/SpacesVariants';
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
          <SpacesVariant3 spaces={filteredSpaces} />
        </div>
      </main>
    </div>
  );
}
