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
      <header className="workshops-hero-organic dark-hero" style={{ position: 'relative', overflow: 'hidden' }}>
        <MicroElement asset="Asset 6ldpi.svg" top="20%" right="5%" width="200px" rotation="-15deg" delay="0s" className="blend-screen" />
        
        <div className="container">
          <div className="hero-grid">
            <div className="hero-title-box">
              <span className="premium-label">OCT 23—25, 2026</span>
              <h1 className="giant-title">WORKSHOPS</h1>
            </div>
            <div className="hero-info-box">
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
          </div>
        </div>
      </header>

      <main className="workshops-body-organic" style={{ position: 'relative' }}>
        <MicroElement asset="Asset 1ldpi.svg" top="5%" right="3%" width="150px" rotation="45deg" className="blend-multiply" zIndex={0} />
        <MicroElement asset="Asset 5ldpi.svg" top="50%" left="2%" width="130px" rotation="-20deg" className="blend-multiply" zIndex={0} />
        <MicroElement asset="Asset 7ldpi.svg" bottom="10%" right="5%" width="100px" rotation="10deg" className="blend-multiply" zIndex={0} />
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="workshops-brutal-grid">
            {filtered.map((item, idx) => (
              <article key={idx} className="workshop-brutal-card">
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
