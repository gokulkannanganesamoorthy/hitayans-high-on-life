import { content } from '../../data/content';
import './About.scss';

export default function AboutPage() {
  return (
    <div className="page-about">
      <header className="about-hero-header">
        <div className="container">
          <div className="badge-row">
            <span className="brutal-badge">FOUNDATION</span>
            <span className="meta">A CONSCIOUS MOVEMENT COLLECTIVE</span>
          </div>
          <h1 className="hero-title">HOW HIGH ON LIFE WAS BORN</h1>
          <p className="hero-lead">
            Bridging the gap between reckless festival hedonism and solemn spiritual retreats.
            Creating a space where celebration is pure, somatic, and completely substance-free.
          </p>
        </div>
      </header>

      <main className="about-content-body">
        <div className="container">
          {/* Split founder narrative */}
          <section className="founder-story-split">
            <div className="story-col">
              <span className="chapter">01 // THE SPARK</span>
              <h2 className="subhead">A LETTER FROM JIJO</h2>
              <div className="letter-card">
                <p>Hello, beautiful people!</p>
                <p>
                  I’m Jijo, a movement artist and the founder of HIGH on Life and the AANMAA Movement Collective.
                  Through movement, I’ve been creating experiences with people that help us reconnect with our bodies,
                  express ourselves freely, and discover the joy of simply being alive.
                </p>
                <p>
                  I’ve been to many festivals, teaching movement and watching people dance, laugh, and celebrate through the night.
                  But I often noticed that people needed alcohol or substances to truly let go.
                </p>
                <p>
                  Then there were retreats. Everything was quiet, structured, and deeply spiritual. I always felt there was something
                  beautiful missing in between. I wanted to create a space where you could dance like nobody is watching, play like a child,
                  create freely, connect deeply and feel completely alive. A space where you don’t need anything outside of yourself to experience joy.
                </p>
                <p className="closing">
                  That’s how the idea of HIGH on Life was born. And it is brought to life through the AANMAA Movement Collective.
                </p>
                <div className="signature-block">
                  <strong>— Jijo</strong>
                  <span>Founder, HIGH on Life & AANMAA Movement Collective</span>
                  <span className="social-tag">@movementwithjijo | @theaanmaacollective</span>
                </div>
              </div>
            </div>

            <div className="visual-col">
              <div className="founder-portrait-box">
                <img src={content.about.founder.image} alt="Jijo Founder" />
                <div className="frame-tag">JIJO // FOUNDER & MOVEMENT FACILITATOR</div>
              </div>

              <div className="aanmaa-box">
                <h3>THE AANMAA COLLECTIVE</h3>
                <p>
                  A close-knit circle of friends, artists, and somatic practitioners who share an unwavering belief
                  that human aliveness is meant to be felt, explored, and radically celebrated.
                </p>
              </div>
            </div>
          </section>

          {/* Spirit animal section */}
          <section className="spirit-animal-section">
            <div className="spirit-container-box">
              <div className="spirit-badge">OFFICIAL SPIRIT ANIMAL</div>
              <h2 className="spirit-title">THE MAGICAL DRAGONFLY</h2>
              <div className="spirit-text-grid">
                <p>
                  A dragonfly begins its life underwater, as a nymph, spending months growing in a world completely different
                  from the one it is destined to enter. Then, one day, it slowly crawls out of the water and encounters the sun
                  for the very first time.
                </p>
                <p>
                  Exposed to its warmth and intensity, it endures hours of transformation as its body slowly changes and its wings
                  begin to emerge. And then, magically, it takes flight.
                </p>
                <p>
                  Just like the dragonfly’s four wings work together in an infinite rhythm to create its magical flight without ever
                  needing to learn how—when Movement, Nature, Art, and Playfulness come together, they create the ALIVENESS we need
                  to live life at its highest.
                </p>
              </div>
            </div>
          </section>

          {/* Code of conduct */}
          <section className="conduct-section">
            <span className="chapter">02 // THE COVENANT</span>
            <h2 className="subhead">ZERO-SUBSTANCE CODE OF CONDUCT</h2>
            <div className="rules-grid">
              <div className="rule-card">
                <div className="num">01</div>
                <h3>100% SOBER ZONE</h3>
                <p>Alcohol, recreational drugs, and tobacco are strictly prohibited across all festival grounds.</p>
              </div>
              <div className="rule-card">
                <div className="num">02</div>
                <h3>TOTAL CONSENT</h3>
                <p>Every activity, touch, and conversation is entirely voluntary. Honor personal boundaries at all times.</p>
              </div>
              <div className="rule-card">
                <div className="num">03</div>
                <h3>RADICAL INCLUSIVITY</h3>
                <p>No dance experience or artistic background required. Come alone or bring family; all ages belong.</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
