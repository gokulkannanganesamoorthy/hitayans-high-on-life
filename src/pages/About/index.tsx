import { content } from '../../data/content';
import MicroElement from '../../components/MicroElement';
import './About.scss';

export default function AboutPage() {
  return (
    <div className="page-about">
      <header className="about-hero-header dark-hero" style={{ position: 'relative', overflow: 'hidden' }}>
        <MicroElement asset="butterfly.svg" top="20%" right="10%" width="120px" rotation="-20deg" delay="0s" className="blend-screen" />
        <MicroElement asset="Asset 8ldpi.svg" bottom="15%" left="5%" width="180px" rotation="10deg" delay="1s" className="blend-screen" />
        <div className="container">
          <div className="badge-row">
            <span className="premium-label">FOUNDATION</span>
            <span className="meta">A CONSCIOUS MOVEMENT COLLECTIVE</span>
          </div>
          <h1 className="hero-title">HIGH ON LIFE</h1>
          <p className="hero-lead">
            Imagine a raging music festival without the hangovers, a profound healing circle that doesn't take itself too seriously,
            and a serious meditation retreat finally found its wild side!
            That's us! A conscious, zero-substance celebration of life where you are awake, alive, and euphoric.
          </p>
        </div>
      </header>

      <main className="about-content-body">
        <div className="container">
          
          <section className="founder-story-organic">
            <div className="story-content">
              <span className="chapter-marker">THE SPARK</span>
              <h2 className="elegant-heading">A LETTER FROM JIJO</h2>
              <div className="letter-body">
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
                
                <div className="signature-elegant">
                  <div className="sign-line"></div>
                  <div className="sign-details">
                    <strong>— Jijo</strong>
                    <span className="role">Founder, HIGH on Life & AANMAA Movement Collective</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="story-visuals">
              <div className="image-stack">
                <img src={content.about.founder.image} alt="Jijo Founder" className="main-portrait" />
                <div className="floating-card">
                  <h3>THE AANMAA COLLECTIVE</h3>
                  <p>
                    A close-knit circle of friends, artists, and somatic practitioners who share an unwavering belief
                    that human aliveness is meant to be felt, explored, and radically celebrated.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="spirit-animal-elegant">
            <div className="spirit-content">
              <div className="spirit-header">
                <span className="premium-label">OFFICIAL SPIRIT ANIMAL</span>
                <h2 className="elegant-heading">THE MAGICAL DRAGONFLY</h2>
              </div>
              <div className="spirit-text">
                <p>
                  A dragonfly begins its life underwater, as a nymph, spending months growing in a world completely different
                  from the one it is destined to enter. Then, one day, it slowly crawls out of the water and encounters the sun
                  for the very first time.
                </p>
                <p>
                  Exposed to its warmth and intensity, it endures hours of transformation as its body slowly changes and its wings
                  begin to emerge. And then, magically, it takes flight.
                </p>
                <p className="highlight-para">
                  Just like the dragonfly’s four wings work together in an infinite rhythm to create its magical flight without ever
                  needing to learn how—when Movement, Nature, Art, and Playfulness come together, they create the ALIVENESS we need
                  to live life at its highest.
                </p>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
