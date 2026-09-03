import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.scss';

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  
  useEffect(() => {
    // Parallax or reveal animations can go here
  }, []);

  return (
    <div className="page-about-new">
      
      {/* 01 HERO SECTION */}
      <section className="about-hero-new">
        <div className="container">
          <h1 className="hero-statement">
            Imagine if mainstream party culture got a deeply healthy makeover, 
            and a serious meditation retreat finally found its wild side!
          </h1>
          <h2 className="hero-substatement">
            That's us! A conscious, zero-substance celebration of life where you are awake, alive, and euphoric.
          </h2>
        </div>
      </section>

      {/* 02 SPIRIT ANIMAL */}
      <section className="about-spirit-animal">
        <div className="container">
          <div className="spirit-header">
            <h2 className="spirit-title">Meet our Official High-Flyer / Wild Spark</h2>
            <h3 className="spirit-subtitle">The Magical Dragonfly.</h3>
          </div>
          <div className="spirit-video-wrapper">
            {/* Video Placeholder */}
            <div className="video-placeholder">
              <img src="/assets/extracted/page002_05_e8bce8a0.jpg" alt="Dragonfly" />
              <div className="play-button">▶</div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 FOUNDER STORY */}
      <section className="about-founder-story">
        <div className="container">
          <div className="story-split">
            <div className="story-visual">
              <img src="/assets/founder-jijo-Bwk7A7Rz.png" alt="Jijo - Founder" className="founder-img" />
            </div>
            <div className="story-content">
              <h2 className="story-title">How We Found the High: A Note from Our Founder</h2>
              
              <div className="letter-body">
                <p>Hello, beautiful people!</p>
                <p>I’m Jijo, the founder of HIGH on Life & the AANMAA Movement Collective.</p>
                <p>I’ve been to a lot of festivals in my life. People dance, laugh, and celebrate all night, but often need alcohol or a substance to really feel it.</p>
                <p>Then there are retreats, where everything becomes quiet, structured, and deeply spiritual.</p>
                <p>I always felt like something was missing in between.</p>
                <p>I wanted a space where you can dance like nobody is watching, play like a child, and connect with incredible people. A conscious space where we drop the substances and realize that simply being together, fully awake and alive, is the ultimate high.</p>
                <p>That’s why we created HIGH on Life. It is an open invitation to step out of the noise, let go of the pressure, and experience the pure rush of celebrating life exactly as it is.</p>
                <p className="highlight">Aliveness is the ultimate high!</p>
                <p>And I can’t wait to share it with you.</p>
              </div>

              <div className="signature">
                <strong>Jijo</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 FESTIVAL EXP */}
      <section className="about-festival-exp">
        <div className="container">
          <div className="festival-header">
            <h2 className="festival-title">WHAT TO EXPECT AT HIGH ON LIFE</h2>
            <p className="festival-desc">
              We’ve designed a playground for the human spirit. 
              Dive into immersive experiences and moments curated to make you 
              feel free, awake, and fiercely alive.
            </p>
          </div>

          <div className="exp-cards-grid">
            <div className="exp-card">
              <h3>PLAY</h3>
              <p>Step into moments that surprise you and wake you up.</p>
            </div>
            <div className="exp-card">
              <h3>CREATE</h3>
              <p>Move, build, and learn alongside artists and makers.</p>
            </div>
            <div className="exp-card">
              <h3>CONNECT</h3>
              <p>Meet strangers who instantly feel like old friends.</p>
            </div>
            <div className="exp-card">
              <h3>LET GO</h3>
              <p>Drop the mask and be exactly who you are.</p>
            </div>
          </div>

          <div className="festival-footer">
            <p>No rigid schedules, no rules to follow. Wander through three days of pure play and step into whatever catches your spirit.</p>
            <Link to="/tickets" className="brutal-btn-primary" data-cursor-view="JOIN">
              CURRENT EVENT →
            </Link>
          </div>
        </div>
      </section>

      {/* 05 CORE TEAM */}
      <section className="about-team">
        <div className="container">
          <h2 className="team-section-title">MEET THE CORE TEAM</h2>
          
          <div className="team-grid">
            {/* Placeholders since exact team is pending from Jijo */}
            {[1, 2, 3].map((num) => (
              <div key={num} className="team-card">
                <div className="team-photo">
                  <div className="placeholder-photo">PHOTO PENDING</div>
                </div>
                <h4 className="team-name">Name Pending</h4>
                <p className="team-role">Role Pending</p>
                <p className="team-bio">Short bio placeholder text. Waiting for official details from Jijo.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
}
