import { useState } from 'react';
import { content } from '../../data/content';
import TicketModal from '../../components/TicketModal';
import './Tickets.scss';

export default function TicketsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTierId, setSelectedTierId] = useState<string | null>(null);

  const openReserve = (tierId?: string) => {
    setSelectedTierId(tierId || null);
    setIsModalOpen(true);
  };

  return (
    <div className="page-tickets">
      <header className="tickets-hero-header">
        <div className="container">
          <div className="meta-pill-strip">
            <span className="brutal-badge">RESERVATIONS</span>
            <span className="dates">23 — 25 OCTOBER 2026 // POLLACHI</span>
          </div>
          <h1 className="title">PASSES & ACCOMMODATION</h1>
          <p className="lead">
            Every pass grants full unrestricted access to all 3 festival days, all 25+ workshops, 
            9 sensory spaces, organic communal feasts, and eco-village accommodations.
          </p>
        </div>
      </header>

      <main className="tickets-main-body">
        <div className="container">
          {/* Phase breakdown */}
          <div className="phases-container">
            {content.tickets.phases.map(phase => (
              <section key={phase.id} className="phase-master-card">
                <div className="phase-header-bar">
                  <div className="left">
                    <span className="badge">{phase.badge}</span>
                    <h2 className="name">{phase.name}</h2>
                  </div>
                  <p className="note">{phase.note}</p>
                </div>

                <div className="tiers-grid">
                  {phase.items.map(tier => (
                    <div key={tier.id} className="tier-box">
                      <div className="tier-head">
                        <span className="stay-type">{tier.type}</span>
                        <span className="limit-tag">{tier.limit}</span>
                      </div>

                      <div className="tier-price-row">
                        <span className="currency">INR</span>
                        <span className="amount">{tier.price}</span>
                      </div>

                      <ul className="perks-list">
                        {tier.features?.map((f, i) => (
                          <li key={i}>✓ {f}</li>
                        ))}
                      </ul>

                      <button 
                        className="brutal-btn-primary reserve-action"
                        onClick={() => openReserve(tier.id)}
                        data-cursor-view="RESERVE"
                      >
                        RESERVE PASS →
                      </button>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Included perks & logistics */}
          <section className="included-perks-section">
            <h2 className="section-heading">WHAT EVERY PASS INCLUDES</h2>
            <div className="perks-grid">
              <div className="perk-card">
                <div className="icon">⛺</div>
                <h3>ACCOMMODATIONS</h3>
                <p>3 nights accommodation in CocoNest Eco Village (tent setups with bedding, shared villas, or private suites based on tier).</p>
              </div>
              <div className="perk-card">
                <div className="icon">🥗</div>
                <h3>ORGANIC NOURISHMENT</h3>
                <p>Nutritious South Indian farm-to-table breakfast, lunch, and dinner prepared freshly by local village cooks.</p>
              </div>
              <div className="perk-card">
                <div className="icon">🌀</div>
                <h3>25+ MASTERCLASSES</h3>
                <p>Zero extra workshop fees. Unlimited participation in dance labs, martial arts, craft weaving, pottery, and breathwork.</p>
              </div>
              <div className="perk-card">
                <div className="icon">🌿</div>
                <h3>09 SENSORY SPACES</h3>
                <p>Unrestricted access to the Breathing Grove, Rage Circle, Acoustic Screaming Clearing, and Slacklines.</p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="faq-section">
            <h2 className="section-heading">FREQUENTLY ASKED QUESTIONS</h2>
            <div className="faq-list">
              <div className="faq-item">
                <h3>WHERE IS COCONEST ECO VILLAGE LOCATED?</h3>
                <p>CocoNest is nestled in the coconut farming belt of Pollachi, Tamil Nadu—roughly 45km from Coimbatore International Airport and 40km from Coimbatore Railway Station.</p>
              </div>
              <div className="faq-item">
                <h3>WHAT IS THE ZERO-SUBSTANCE POLICY?</h3>
                <p>HIGH on Life is strictly substance-free. No alcohol, cigarettes, vapes, or recreational drugs are allowed on festival premises. Anyone found violating this will be kindly asked to leave without refund.</p>
              </div>
              <div className="faq-item">
                <h3>CAN I TRANSFER MY PASS?</h3>
                <p>While passes are non-refundable, you can freely transfer your pass to a friend or family member up to 48 hours before the festival begins.</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <TicketModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedTierId={selectedTierId}
      />
    </div>
  );
}
