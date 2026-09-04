import './Contact.scss';

export default function ContactPage() {
  return (
    <div className="page-contact">
      <header className="contact-hero-organic dark-hero">
        <div className="container">
          <div className="meta-pill-strip">
            <span className="premium-label">GET IN TOUCH</span>
          </div>
          <h1 className="title">CONNECT WITH US</h1>
          <p className="lead">
            Whether you have a question about the festival, want to collaborate, 
            or just want to say hi, we’d love to hear from you.
          </p>
        </div>
      </header>

      <main className="contact-body-organic">
        <div className="container">
          <div className="contact-split">
            
            <div className="contact-info-col">
              <div className="info-block">
                <span className="block-label">GENERAL INQUIRIES</span>
                <h3>hello@highonlife.com</h3>
                <p>For questions about passes, accommodations, or general festival info.</p>
              </div>

              <div className="info-block">
                <span className="block-label">COLLABORATIONS</span>
                <h3>collab@highonlife.com</h3>
                <p>For artists, facilitators, musicians, and brand partners.</p>
              </div>

              <div className="info-block">
                <span className="block-label">LOCATION</span>
                <h3>CocoNest Eco Village</h3>
                <p>Pollachi, Tamil Nadu, India<br />(Detailed map will be sent with your ticket)</p>
              </div>

              <div className="social-links">
                <span className="block-label">FOLLOW THE ALIVENESS</span>
                <div className="links-row">
                  <a href="https://instagram.com/highonlifefest" target="_blank" rel="noreferrer">INSTAGRAM</a>
                  <a href="#" target="_blank" rel="noreferrer">FACEBOOK</a>
                  <a href="#" target="_blank" rel="noreferrer">YOUTUBE</a>
                </div>
              </div>
            </div>

            <div className="contact-form-col">
              <div className="form-card">
                <h2 className="form-title">SEND A MESSAGE</h2>
                <form className="organic-form" onSubmit={(e) => e.preventDefault()}>
                  <div className="form-group">
                    <label>YOUR NAME</label>
                    <input type="text" placeholder="Jane Doe" required />
                  </div>
                  
                  <div className="form-group">
                    <label>EMAIL ADDRESS</label>
                    <input type="email" placeholder="jane@example.com" required />
                  </div>
                  
                  <div className="form-group">
                    <label>SUBJECT</label>
                    <select required>
                      <option value="">Select a topic...</option>
                      <option value="general">General Question</option>
                      <option value="ticket">Ticket Support</option>
                      <option value="collab">Collaboration</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>MESSAGE</label>
                    <textarea rows={5} placeholder="Tell us what's on your mind..." required></textarea>
                  </div>

                  <button type="submit" className="btn-organic">SEND MESSAGE →</button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
