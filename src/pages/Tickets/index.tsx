import { useState } from 'react';
import { content } from '../../data/content';
import TicketModal from '../../components/TicketModal';
import MicroElement from '../../components/MicroElement';
import { Tent, Salad, Activity, Leaf, ChevronDown } from 'lucide-react';
import './Tickets.scss';

export default function TicketsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTierId, setSelectedTierId] = useState<string | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const openReserve = (tierId?: string) => {
    setSelectedTierId(tierId || null);
    setIsModalOpen(true);
  };

  return (
    <div className="page-tickets">
      <header className="tickets-hero-header dark-hero">
        <div className="container">
          <div className="passes-hero-section">
            <h1 className="title">PASSES & ACCOMMODATION</h1>
            <div className="subtitle-row">
              <p>
                3 Full Days in Pollachi • All 25+ Workshops • Organic Village
                Meals • Sacred Spaces Access
              </p>
            </div>
          </div>
        </div>
      </header>

      <main
        className="tickets-main-body"
        style={{ position: 'relative', overflow: 'hidden' }}
      >
        <MicroElement
          asset="Asset 4ldpi.svg"
          top="2%"
          right="5%"
          width="120px"
          rotation="-15deg"
          delay="0s"
          className="blend-screen"
        />
        <MicroElement
          asset="Asset 5ldpi.svg"
          bottom="15%"
          left="5%"
          width="150px"
          rotation="20deg"
          delay="2s"
        />
        <MicroElement
          asset="butterfly.svg"
          top="40%"
          right="10%"
          width="80px"
          rotation="45deg"
          delay="1s"
        />
        <div className="container">
          {/* Phase breakdown in Columns */}
          <div className="phases-columns-container">
            {content.tickets.phases.map((phase) => (
              <div key={phase.id} className="phase-column-card">
                <div className="phase-badge">{phase.badge}</div>
                <h2 className="phase-name">{phase.name}</h2>
                <p className="phase-desc">{phase.note}</p>
                <div className="dashed-divider"></div>

                <div className="tiers-vertical-list">
                  {phase.items.map((tier) => (
                    <div key={tier.id} className="tier-row-card">
                      <div className="tier-info">
                        <h4 className="tier-name">{tier.type}</h4>
                        <p className="tier-limit">{tier.limit}</p>
                      </div>

                      <div className="tier-price-action">
                        <div className="tier-price">₹{tier.price}</div>
                        <button
                          className="reserve-btn"
                          onClick={() => openReserve(tier.id)}
                          data-cursor-view="RESERVE"
                        >
                          RESERVE →
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Included perks & logistics */}
          <section className="included-perks-section">
            <h2 className="section-heading">WHAT EVERY PASS INCLUDES</h2>
            <div className="perks-grid">
              <div className="perk-card">
                <div className="icon">
                  <Tent size={36} color="var(--color-lime)" />
                </div>
                <h3>ACCOMMODATIONS</h3>
                <p>
                  3 nights accommodation in CocoNest Eco Village (tent setups
                  with bedding, shared villas, or private suites based on tier).
                </p>
              </div>
              <div className="perk-card">
                <div className="icon">
                  <Salad size={36} color="var(--color-accent)" />
                </div>
                <h3>ORGANIC NOURISHMENT</h3>
                <p>
                  Nutritious South Indian farm-to-table breakfast, lunch, and
                  dinner prepared freshly by local village cooks.
                </p>
              </div>
              <div className="perk-card">
                <div className="icon">
                  <Activity size={36} color="var(--color-accent)" />
                </div>
                <h3>25+ MASTERCLASSES</h3>
                <p>
                  Zero extra workshop fees. Unlimited participation in dance
                  labs, martial arts, craft weaving, pottery, and breathwork.
                </p>
              </div>
              <div className="perk-card">
                <div className="icon">
                  <Leaf size={36} color="var(--color-accent)" />
                </div>
                <h3>09 SENSORY SPACES</h3>
                <p>
                  Unrestricted access to the Breathing Grove, Rage Circle,
                  Acoustic Screaming Clearing, and Slacklines.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <section className="faq-section-wrapper">
        <div className="container">
          <section className="faq-section">
            <h2 className="section-heading">FREQUENTLY ASKED QUESTIONS</h2>
            <div className="faq-list">
              {[
                {
                  q: 'WHERE IS COCONEST ECO VILLAGE LOCATED?',
                  a: 'CocoNest is nestled in the coconut farming belt of Pollachi, Tamil Nadu—roughly 45km from Coimbatore International Airport and 40km from Coimbatore Railway Station.',
                },
                {
                  q: 'WHAT IS THE ZERO-SUBSTANCE POLICY?',
                  a: 'HIGH on Life is strictly substance-free. No alcohol, cigarettes, vapes, or recreational drugs are allowed on festival premises. Anyone found violating this will be kindly asked to leave without refund.',
                },
                {
                  q: 'CAN I TRANSFER MY PASS?',
                  a: 'While passes are non-refundable, you can freely transfer your pass to a friend or family member up to 48 hours before the festival begins.',
                },
              ].map((faq, idx) => (
                <div
                  key={idx}
                  className={`faq-accordion-item ${activeFaq === idx ? 'active' : ''}`}
                >
                  <button
                    className="faq-header"
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  >
                    <h3>{faq.q}</h3>
                    <ChevronDown className="faq-icon" size={24} />
                  </button>
                  <div className="faq-body">
                    <p>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>

      <TicketModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedTierId={selectedTierId}
      />
    </div>
  );
}
