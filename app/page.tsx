"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { SmokeBackground } from "@/components/ui/spooky-smoke-animation";
import { Typewriter } from "@/components/ui/typewriter";
import { Beer, Wine, Sparkles, Flame } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";


// Data Configuration
const eventsData = [
  {
    id: 1, date: "2026-04-10T19:30:00", displayDate: "April 10th", month: "April", day: "10", year: "2026", time: "7:30 PM", bandName: "Steven and the Holy Heathens", description: "Playing the best of Oasis, Arctic Monkeys, Blur, Pulp, Stone Roses, The Strokes, The Smiths, Green Day and more.", ticketLink: "https://www.skiddle.com/whats-on/Warrington/The-Bowdon-Rooms/Rock--Pour/42147525/", soldOut: false
  },
  {
    id: 2, date: "2026-05-15T19:30:00", displayDate: "May 15th", month: "May", day: "15", year: "2026", time: "7:30 PM", bandName: "Velvet Thunder", description: "Bringing the best of 80s and 90s rock stadium hits straight to The Bowdon Rooms.", ticketLink: "https://www.skiddle.com/whats-on/Warrington/The-Bowdon-Rooms/Rock--Pour/42147525/", soldOut: false
  },
  {
    id: 3, date: "2026-06-20T19:30:00", displayDate: "June 20th", month: "June", day: "20", year: "2026", time: "7:30 PM", bandName: "Electric Rebels", description: "A tribute to the legends of indie rock. Expect a night of pure nostalgia and great drinks all included.", ticketLink: "https://www.skiddle.com/whats-on/Warrington/The-Bowdon-Rooms/Rock--Pour/42147525/", soldOut: true
  }
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: "00", hours: "00", minutes: "00", seconds: "00" });
  const [inspectedPoster, setInspectedPoster] = useState<string | null>(null);

  const targetEvent = eventsData.find(e => !e.soldOut && new Date(e.date).getTime() > new Date().getTime()) || eventsData[0];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const reveals = document.querySelectorAll('.scroll-reveal');
      reveals.forEach(reveal => {
        const revealTop = reveal.getBoundingClientRect().top;
        if (revealTop < window.innerHeight - 100) reveal.classList.add('active');
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    const countDownDate = new Date(targetEvent.date).getTime();
    const interval = setInterval(() => {
      const distance = countDownDate - new Date().getTime();
      if (distance < 0) {
        clearInterval(interval);
        return;
      }
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, '0'),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0'),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0'),
        seconds: Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0'),
      });
    }, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, [targetEvent.date]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setInspectedPoster(null); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  useEffect(() => {
    const pc = document.getElementById('hero-particles');
    if (!pc) return;
    pc.innerHTML = '';
    for (let i = 0; i < 25; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      const size = Math.random() * 9 + 3;
      p.style.width = `${size}px`;
      p.style.height = `${size}px`;
      p.style.left = `${Math.random() * 100}%`;
      p.style.animationDuration = `${Math.random() * 12 + 8}s`;
      p.style.animationDelay = `${Math.random() * 5}s`;
      pc.appendChild(p);
    }
  }, []);

  return (
    <>
      {/* Site-wide atmospheric smoke — fixed behind all sections */}
      <div className="site-smoke">
        <SmokeBackground smokeColor="#9A5000" />
      </div>

      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="nav-container">
          <a href="#" className="nav-logo">
            <img src="/title-logo-transparent.png" alt="ROCK & POUR" className="nav-logo-img" />
          </a>
          <div className={`nav-links ${menuActive ? 'active' : ''}`}>
            <a href="#experience" onClick={() => setMenuActive(false)}>The Experience</a>
            <a href="#drinks" onClick={() => setMenuActive(false)}>Premium Drinks</a>
            <a href="#events" onClick={() => setMenuActive(false)}>Upcoming</a>
            <a href="https://www.thebowdonrooms.co.uk" target="_blank" rel="noreferrer" className="nav-link-external">The Bowdon Rooms</a>
            <a href="https://www.skiddle.com/whats-on/Warrington/The-Bowdon-Rooms/Rock--Pour/42147525/" target="_blank" rel="noreferrer" className="btn btn-outline-gold nav-cta">Buy Tickets</a>
          </div>
          <div className={`mobile-menu-btn ${menuActive ? 'active' : ''}`} onClick={() => setMenuActive(!menuActive)}>
            <span></span><span></span><span></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero" id="hero">
        <div className="hero-overlay"></div>
        <div className="hero-spotlights">
          <div className="spotlight spotlight-1" />
          <div className="spotlight spotlight-2" />
          <div className="spotlight spotlight-3" />
        </div>
        <div className="hero-haze" />
        <div id="hero-particles" className="hero-particles"></div>
        <div className="hero-content">
          <h1 className="sr-only">Rock &amp; Pour — Live Rock Music &amp; Premium Drinks Night at The Bowdon Rooms</h1>
          <h3 className="hero-subtitle fade-up">
            <span className="subtitle-line" />
            AT THE BOWDON ROOMS
            <span className="subtitle-line" />
          </h3>
          <div className="hero-title-img fade-up delay-1">
            <div className="title-img-wrap">
              <img src="/title-logo-transparent.png" alt="ROCK & POUR" className="title-logo-img" />
              <div className="title-sheen" />
            </div>
          </div>

          <div className="hero-date fade-up delay-2">
            <span>{targetEvent.month.toUpperCase()} {targetEvent.day}TH • {targetEvent.year}</span> • <span>{targetEvent.time}</span>
          </div>

          <div className="countdown-container fade-up delay-3">
            <GlowingEffect spread={60} glow={true} disabled={false} proximity={80} inactiveZone={0.01} borderWidth={2} />
            <p className="countdown-label">TICKETS SELLING FAST</p>
            <div className="countdown">
              <div className="time-box">
                <span className="time-val">{timeLeft.days}</span>
                <span className="time-text">Days</span>
              </div>
              <div className="time-box">
                <span className="time-val">{timeLeft.hours}</span>
                <span className="time-text">Hours</span>
              </div>
              <div className="time-box">
                <span className="time-val">{timeLeft.minutes}</span>
                <span className="time-text">Mins</span>
              </div>
              <div className="time-box">
                <span className="time-val">{timeLeft.seconds}</span>
                <span className="time-text">Secs</span>
              </div>
            </div>
          </div>

          <div className="hero-actions fade-up delay-4">
            <a href="https://www.skiddle.com/whats-on/Warrington/The-Bowdon-Rooms/Rock--Pour/42147525/" target="_blank" rel="noreferrer" className="btn btn-gold btn-large">GET YOUR TICKETS</a>
          </div>
        </div>
        <div className="hero-crowd">
          <img src="/crowd.png" alt="" aria-hidden="true" />
        </div>
      </header>

      {/* Experience Section */}
      <section className="experience section" id="experience">
        <div className="container">
          <div className="experience-grid">
            <div className="experience-text scroll-reveal">
              <p className="section-overline">One Ticket. Everything Included.</p>
              <h2 className="section-title">
                An Evening of
                <span className="typewriter-line"><span className="gold-text"><Typewriter text={["Anthems","Energy","Revelry","Nostalgia","Indie","Dance"]} speed={160} deleteSpeed={90} waitTime={4000} /></span></span>
              </h2>
              <div className="gold-rule-left" />
              <p className="section-desc">
                Rock &amp; Pour is a high-energy live music night where your £55 ticket includes all your drinks. Enjoy outstanding bands playing indie rock, Britpop and 90s anthems in an immersive party atmosphere.
              </p>
              <p className="section-desc">
                Sing, dance and drink with friends for an unforgettable night.
              </p>
              <div style={{ position: 'relative' }}>
                <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                <div className="stats-strip">
                  <div className="stat-item">
                    <div className="stat-value">300</div>
                    <div className="stat-label">Capacity</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-value">£55</div>
                    <div className="stat-label">All Inclusive</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-value">Live</div>
                    <div className="stat-label">Music All Night</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="experience-image scroll-reveal delay-2">
              <div className="image-wrapper" id="drinks-image-wrapper" style={{ position: 'relative' }}>
                <Image
                  src="/drinks-img.png"
                  alt="Premium drinks at Rock & Pour"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="glass-card overlay-card">
                  <div className="glass-card-rule" />
                  <h4>&quot;Your round&apos;s on us. All night.&quot;</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Drinks Offerings */}
      <section className="drinks section dark-bg" id="drinks">
        <div className="container text-center scroll-reveal">
          <p className="section-overline">All Included</p>
          <h2 className="section-title">The <span className="gold-text">Premium</span> Selection</h2>
          <div className="gold-divider"><span className="gold-diamond" /></div>
          <p className="section-subtitle">Everything in your glass, all night. One price. No bar tab. No compromise.</p>
          <div className="drinks-grid">
            <div className="drink-card scroll-reveal delay-1">
              <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
              <div className="drink-card-accent" />
              <div className="drink-icon"><Beer size={36} strokeWidth={1.25} /></div>
              <h3>Premium Draught</h3>
              <p>Moretti, Cruz Campo &amp; Murphy&apos;s — poured properly, all night long.</p>
            </div>
            <div className="drink-card scroll-reveal delay-2">
              <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
              <div className="drink-card-accent" />
              <div className="drink-icon"><Wine size={36} strokeWidth={1.25} /></div>
              <h3>Fine Wines</h3>
              <p>Sauvignon Blanc, quality reds &amp; rosés — proper wines served with care.</p>
            </div>
            <div className="drink-card scroll-reveal delay-3">
              <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
              <div className="drink-card-accent" />
              <div className="drink-icon"><Sparkles size={36} strokeWidth={1.25} /></div>
              <h3>Prosecco</h3>
              <p>Premium prosecco flowing all evening — because every great night deserves a toast.</p>
            </div>
            <div className="drink-card scroll-reveal delay-4">
              <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
              <div className="drink-card-accent" />
              <div className="drink-icon"><Flame size={36} strokeWidth={1.25} /></div>
              <h3>Premium Spirits</h3>
              <p>Branded whiskeys, vodkas, brandies &amp; gins — the full top-shelf experience.</p>
            </div>
          </div>
          <p className="drinks-inclusive-note">All of the above — unlimited — included in your single £55 entry ticket.</p>
        </div>
      </section>

      {/* Poster Section */}
      <section className="poster-section section" id="events">
        <div className="container text-center">
          <div className="poster-pair scroll-reveal">
            <div className="poster-wrapper">
              <GlowingEffect spread={60} glow={true} disabled={false} proximity={80} inactiveZone={0.01} borderWidth={2} />
              <div className="poster-container" onClick={() => setInspectedPoster('/POSTER.png')}>
                <Image
                  src="/POSTER.png"
                  alt="Rock & Pour — April 10th 2026 at The Bowdon Rooms"
                  className="event-poster"
                  width={520}
                  height={737}
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            </div>
            <div className="poster-wrapper">
              <GlowingEffect spread={60} glow={true} disabled={false} proximity={80} inactiveZone={0.01} borderWidth={2} />
              <div className="poster-container" onClick={() => setInspectedPoster('/band-poster.png')}>
                <Image
                  src="/band-poster.png"
                  alt="Steven and the Holy Heathens — live at Rock & Pour"
                  className="event-poster"
                  width={520}
                  height={737}
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            </div>
          </div>
          <div className="poster-cta scroll-reveal delay-2">
            <a href="https://www.skiddle.com/whats-on/Warrington/The-Bowdon-Rooms/Rock--Pour/42147525/" target="_blank" rel="noreferrer" className="btn btn-gold btn-large">GET YOUR TICKETS</a>
            <p className="discount-note">Use code <span className="gold-text">ROCK10</span> at checkout for 10% off</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      < footer className="footer" >
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <img src="/title-logo-transparent.png" alt="ROCK & POUR" className="footer-logo-img" />
              <p>Live music. All-inclusive drinks. A room full of people there for a proper night out.</p>
            </div>
            <div className="footer-links">
              <h4>Quick Links</h4>
              <a href="#experience">The Experience</a>
              <a href="#drinks">Drinks Menu</a>
              <a href="https://www.skiddle.com/whats-on/Warrington/The-Bowdon-Rooms/Rock--Pour/42147525/" target="_blank" rel="noreferrer">Tickets</a>
            </div>
            <div className="footer-contact">
              <h4>Contact &amp; Venue</h4>
              <p>The Bowdon Rooms<br />The Firs, Bowdon, Altrincham WA14 2TQ</p>
              <p>Box Office: <a href="tel:01619268992" className="gold-text hover-light">0161 926 8992</a></p>
              <a href="https://www.thebowdonrooms.co.uk" target="_blank" rel="noreferrer" className="venue-link">Visit The Bowdon Rooms Website &rarr;</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Rock &amp; Pour at The Bowdon Rooms. All rights reserved.</p>
          </div>
        </div>
      </footer >

      {inspectedPoster && (
        <div className="lightbox-overlay" onClick={() => setInspectedPoster(null)}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setInspectedPoster(null)}>✕</button>
            <img src={inspectedPoster} alt="Poster" className="lightbox-img" />
          </div>
        </div>
      )}
    </>
  );
}
