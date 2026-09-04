import { useState } from 'react';
import { content } from '../../data/content';
import MicroElement from '../../components/MicroElement';
import './Spaces.scss';

export default function SpacesPage() {
  const [filter, setFilter] = useState('ALL');

  const filteredSpaces = filter === 'ALL'
    ? content.spaces
    : content.spaces.filter(s => s.energyLevel.toUpperCase().includes(filter));

  return (
    <div className="page-spaces">
      <header className="spaces-hero-elegant dark-hero" style={{ position: 'relative', overflow: 'hidden' }}>
        <MicroElement asset="Asset 2ldpi.svg" top="10%" right="10%" width="180px" rotation="10deg" className="blend-screen" />
        <MicroElement asset="Asset 7ldpi.svg" bottom="10%" left="5%" width="220px" rotation="-5deg" className="blend-screen" />
        <div className="container">
          <div className="header-meta">
            <span className="premium-label">POLLACHI 2026</span>
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
                className={`filter-pill ${filter === f ? 'active' : ''}`}
                onClick={() => setFilter(f)}
                data-cursor-view="FILTER"
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="spaces-catalog-elegant" style={{ position: 'relative' }}>
        <MicroElement asset="Asset 4ldpi.svg" top="10%" left="2%" width="120px" rotation="-15deg" className="blend-multiply" zIndex={0} />
        <MicroElement asset="Asset 8ldpi.svg" top="40%" right="1%" width="180px" rotation="20deg" className="blend-multiply" zIndex={0} />
        <MicroElement asset="butterfly.svg" bottom="15%" left="5%" width="80px" rotation="45deg" className="blend-multiply" zIndex={0} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="spaces-organic-grid">
            {filteredSpaces.map((space, i) => (
              <div key={space.id} className="space-organic-card">
                <div className="card-media">
                  <img src={space.image} alt={space.name} loading="lazy" />
                  <div className="media-overlay">
                    <span className="energy-pill">{space.energyLevel}</span>
                  </div>
                </div>

                <div className="card-body">
                  <div className="card-header">
                    <span className="space-idx">0{i + 1}</span>
                    <h2 className="space-title">{space.name}</h2>
                  </div>
                  <span className="space-subhead">{space.subtitle}</span>
                  <p className="space-summary">{space.description.slice(0, 150)}...</p>

                  <div className="space-metrics">
                    <div className="metric">
                      <span className="lbl">CAPACITY</span>
                      <span className="val">{space.capacity}</span>
                    </div>
                  </div>

                  <a href={`/space/${space.id}`} className="btn-organic" data-cursor-view="ENTER">
                    EXPLORE SANCTUARY →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
