import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { content } from '../../data/content';
import './TicketModal.scss';

interface TicketModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTierId?: string | null;
}

export default function TicketModal({ isOpen, onClose, selectedTierId }: TicketModalProps) {
  const allTiers = content.tickets.phases.flatMap(p => 
    p.items.map(item => ({ ...item, phase: p.name }))
  );

  const defaultTier = allTiers.find(t => t.id === selectedTierId) || allTiers[0];
  const [selectedTier, setSelectedTier] = useState(defaultTier);
  const [attendeeCount, setAttendeeCount] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [passCode, setPassCode] = useState('');

  const totalPrice = (selectedTier.rawPrice || 13333) * attendeeCount;

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) return;

    const code = 'HOL-' + Math.random().toString(36).substring(2, 8).toUpperCase();
    setPassCode(code);
    setIsSuccess(true);
  };

  const resetAndClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="ticket-modal-overlay">
          <motion.div 
            className="modal-backdrop" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetAndClose}
          />

          <motion.div 
            className="ticket-modal-drawer"
            initial={{ x: '100%' }}
            animate={{ x: '0%' }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="drawer-header">
              <span className="drawer-meta">23–25 OCT 2026 / POLLACHI</span>
              <button className="close-btn" onClick={resetAndClose} aria-label="Close booking modal">
                ✕
              </button>
            </div>

            {!isSuccess ? (
              <form onSubmit={handleBooking} className="booking-form">
                <div className="form-intro">
                  <h2>RESERVE PASS</h2>
                  <p>A conscious substance-free festival experience.</p>
                </div>

                <div className="form-group">
                  <label>ACCOMMODATION TIER</label>
                  <div className="tier-options">
                    {allTiers.slice(0, 4).map(tier => (
                      <button
                        type="button"
                        key={tier.id}
                        className={`tier-btn ${selectedTier.id === tier.id ? 'selected' : ''}`}
                        onClick={() => setSelectedTier(tier)}
                      >
                        <span className="tier-title">{tier.type}</span>
                        <span className="tier-price">{tier.price}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>NUMBER OF SEEKERS</label>
                    <div className="counter">
                      <button 
                        type="button" 
                        onClick={() => setAttendeeCount(Math.max(1, attendeeCount - 1))}
                      >
                        −
                      </button>
                      <span>{attendeeCount}</span>
                      <button 
                        type="button" 
                        onClick={() => setAttendeeCount(Math.min(6, attendeeCount + 1))}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="form-group total-box">
                    <label>TOTAL AMOUNT</label>
                    <span className="total-amount">₹{totalPrice.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <div className="form-group">
                  <label>PRIMARY ATTENDEE NAME</label>
                  <input 
                    type="text" 
                    required 
                    value={name} 
                    onChange={e => setName(e.target.value)} 
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label>EMAIL ADDRESS</label>
                  <input 
                    type="email" 
                    required 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    placeholder="name@domain.com"
                  />
                </div>

                <div className="conduct-pledge">
                  <label className="checkbox-label">
                    <input 
                      type="checkbox" 
                      required 
                      checked={agreed} 
                      onChange={e => setAgreed(e.target.checked)} 
                    />
                    <span>
                      I pledge to honor this festival as a 100% substance-free sacred space, free of alcohol, recreational drugs, and smoking.
                    </span>
                  </label>
                </div>

                <button 
                  type="submit" 
                  className="confirm-booking-btn"
                  disabled={!agreed}
                  data-cursor-view="RESERVE"
                >
                  CONFIRM PASS ALLOCATION →
                </button>
              </form>
            ) : (
              <div className="success-screen">
                <div className="success-icon">✓</div>
                <h2>PASS CONFIRMED</h2>
                <div className="pass-card">
                  <span className="pass-tag">PASS ID</span>
                  <span className="pass-code">{passCode}</span>
                  <div className="pass-details">
                    <p><strong>Attendee:</strong> {name}</p>
                    <p><strong>Tier:</strong> {selectedTier.type}</p>
                    <p><strong>Seekers:</strong> {attendeeCount}</p>
                    <p><strong>Venue:</strong> CocoNest Eco Village, Pollachi</p>
                    <p><strong>Dates:</strong> 23–25 October 2026</p>
                  </div>
                </div>
                <p className="success-note">
                  A verification confirmation has been dispatched to <em>{email}</em>. We await you in Pollachi.
                </p>
                <button className="done-btn" onClick={resetAndClose}>
                  RETURN TO FESTIVAL
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
