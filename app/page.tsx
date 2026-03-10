"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FlowGradientHeroSection } from "@/components/ui/flow-gradient-hero-section";

// Data Configuration
const eventsData = [
  {
    id: 1, date: "2026-04-10T19:30:00", displayDate: "April 10th", month: "April", day: "10", year: "2026", time: "7:30 PM", bandName: "The Midnight Howl", description: "An explosive night of classic rock covers and high-energy anthems from returning favorites.", ticketLink: "https://www.skiddle.com", soldOut: false
  },
  {
    id: 2, date: "2026-05-15T19:30:00", displayDate: "May 15th", month: "May", day: "15", year: "2026", time: "7:30 PM", bandName: "Velvet Thunder", description: "Bringing the best of 80s and 90s rock stadium hits straight to The Bowdon Rooms.", ticketLink: "https://www.skiddle.com", soldOut: false
  },
  {
    id: 3, date: "2026-06-20T19:30:00", displayDate: "June 20th", month: "June", day: "20", year: "2026", time: "7:30 PM", bandName: "Electric Rebels", description: "A tribute to the legends of indie rock. Expect a night of pure nostalgia and world-class drinks.", ticketLink: "https://www.skiddle.com", soldOut: true
  }
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: "00", hours: "00", minutes: "00", seconds: "00" });

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
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="nav-container">
          <a href="#" className="nav-logo">ROCK <span className="gold-text">&amp;</span> POUR</a>
          <div className={`nav-links ${menuActive ? 'active' : ''}`}>
            <a href="#experience" onClick={() => setMenuActive(false)}>The Experience</a>
            <a href="#drinks" onClick={() => setMenuActive(false)}>Premium Drinks</a>
            <a href="#events" onClick={() => setMenuActive(false)}>Upcoming</a>
            <a href="https://www.thebowdonrooms.co.uk" target="_blank" rel="noreferrer" className="nav-link-external">The Bowdon Rooms</a>
            <a href="https://www.skiddle.com" target="_blank" rel="noreferrer" className="btn btn-outline-gold nav-cta">Buy Tickets</a>
          </div>
          <div className="mobile-menu-btn" onClick={() => setMenuActive(!menuActive)}>
            <span></span><span></span><span></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero" id="hero">
        {/* 3D Next.js React Gradient Component Background */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <FlowGradientHeroSection />
        </div>

        <div className="hero-overlay"></div>
        <div id="hero-particles" className="hero-particles"></div>
        <div className="hero-content">
          <h3 className="hero-subtitle fade-up">THE BOWDON ROOMS PRESENTS</h3>
          <h1 className="hero-title fade-up delay-1">ROCK <span className="gold-text">&amp;</span> POUR</h1>

          <div className="hero-highlights fade-up delay-2">
            <div className="highlight-item">ONE TICKET. ALL INCLUSIVE.</div>
            <div className="highlight-item highlight-price">£55 per ticket</div>
            <div className="highlight-item">LIVE BAND | ALL INCLUSIVE DRINKS</div>
          </div>

          <div className="hero-date fade-up delay-3">
            <span>{targetEvent.month.toUpperCase()} {targetEvent.day}TH • {targetEvent.year}</span> • <span>{targetEvent.time}</span>
          </div>

          <div className="countdown-container fade-up delay-4">
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

          <div className="hero-actions fade-up delay-5">
            <a href="https://www.skiddle.com" target="_blank" rel="noreferrer" className="btn btn-gold btn-large">GET YOUR TICKETS</a>
          </div>
        </div>
      </header>

      {/* Experience Section */}
      <section className="experience section" id="experience">
        <div className="container">
          <div className="experience-grid">
            <div className="experience-text scroll-reveal">
              <h2 className="section-title">An Evening of <span className="gold-text">Elegance</span> and Energy</h2>
              <p className="section-desc">
                Rock &amp; Pour is not your average night out. It&apos;s a curated, high-energy experience hosted at the prestigious Bowdon Rooms in Cheshire.
              </p>
              <p className="section-desc">
                For a single entry fee of £55, leave your wallet behind and fully immerse yourself in the night. Enjoy unlimited, completely inclusive access to our premium bar selections while exceptional live bands bring the venue to life. We don&apos;t compromise on quality—expect exactly the premium poured pints, fine wines, and crafted spirits typically served at our luxury venue.
              </p>
              <ul className="feature-list">
                <li><span className="icon">✦</span> Exclusive atmosphere with a 300-person capacity</li>
                <li><span className="icon">✦</span> World-class live entertainment</li>
                <li><span className="icon">✦</span> Zero compromise on drink quality</li>
              </ul>
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
                  <h4>&quot;The ultimate luxury night out in Cheshire.&quot;</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Drinks Offerings */}
      <section className="drinks section dark-bg" id="drinks">
        <div className="container text-center scroll-reveal">
          <h2 className="section-title">The <span className="gold-text">Premium</span> Selection</h2>
          <p className="section-subtitle">A curated all-inclusive menu featuring the finest selections.</p>
          <div className="drinks-grid">
            <div className="drink-card scroll-reveal delay-1">
              <div className="drink-icon">🍺</div>
              <h3>Crafted Beers</h3>
              <p>Selection of premium draught and bottled beers, poured to perfection.</p>
            </div>
            <div className="drink-card scroll-reveal delay-2">
              <div className="drink-icon">🍷</div>
              <h3>Fine Wines</h3>
              <p>Hand-picked red, white, and rosé selections from acclaimed vineyards.</p>
            </div>
            <div className="drink-card scroll-reveal delay-3">
              <div className="drink-icon">🥂</div>
              <h3>Champagnes</h3>
              <p>Exquisite sparkling options to celebrate the evening in true luxury.</p>
            </div>
            <div className="drink-card scroll-reveal delay-4">
              <div className="drink-icon">🍸</div>
              <h3>Premium Spirits</h3>
              <p>Top-shelf spirits and mixers, accompanied by elegant non-alcoholic alternatives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="events section" id="events">
        <div className="container">
          <div className="section-header text-center scroll-reveal">
            <h2 className="section-title">Upcoming <span className="gold-text">Nights</span></h2>
            <p className="section-subtitle">Secure your place at our next exclusive events. Capacity is strictly limited.</p>
          </div>

          <div className="events-layout">
            <div className="events-poster-col scroll-reveal delay-1">
              <div className="poster-container">
                <div className="poster-glow"></div>
                <Image
                  src="/POSTER.png"
                  alt="Rock & Pour Event Poster"
                  className="event-poster"
                  width={600}
                  height={850}
                  style={{ width: '100%', height: 'auto' }}
                />
                <div className="poster-overlay">
                  <span className="poster-tag">FEATURED EVENT</span>
                </div>
              </div>
            </div>
            <div className="events-list-col">
              <div className="events-list">
                {eventsData.map((event, index) => (
                  <div key={event.id} className="event-row scroll-reveal" style={{ transitionDelay: `${(index + 1) * 0.2}s` }}>
                    <div className="event-date-col">
                      <span className="event-month">{event.month}</span>
                      <span className="event-day">{event.day}</span>
                      <span className="event-time">{event.time}</span>
                    </div>
                    <div className="event-info-col">
                      <h3>{event.bandName}</h3>
                      <p>{event.description}</p>
                    </div>
                    <div className="event-action-col">
                      {event.soldOut ? (
                        <button className="btn btn-outline-gold" disabled style={{ opacity: 0.5, cursor: 'not-allowed' }}>SOLD OUT</button>
                      ) : (
                        <a href={event.ticketLink} target="_blank" rel="noreferrer" className="btn btn-gold">Get Tickets</a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Footer */}
      < footer className="footer" >
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <h2>ROCK <span className="gold-text">&amp;</span> POUR</h2>
              <p>An exclusive live music and premium drink experience.</p>
            </div>
            <div className="footer-links">
              <h4>Quick Links</h4>
              <a href="#experience">The Experience</a>
              <a href="#drinks">Drinks Menu</a>
              <a href="https://www.skiddle.com" target="_blank" rel="noreferrer">Tickets</a>
            </div>
            <div className="footer-contact">
              <h4>Contact &amp; Venue</h4>
              <p>The Bowdon Rooms<br />The Firs, Bowdon, Altrincham WA14 2TQ</p>
              <p>Box Office: <a href="tel:01619268992" className="gold-text hover-light">0161 926 8992</a></p>
              <a href="https://www.thebowdonrooms.co.uk" target="_blank" rel="noreferrer" className="venue-link">Visit The Bowdon Rooms Website &rarr;</a>
            </div>
            <div className="footer-social">
              <h4>Follow Us</h4>
              <div className="social-icons">
                <a href="#" aria-label="Instagram">IG</a>
                <a href="#" aria-label="Facebook">FB</a>
                <a href="#" aria-label="TikTok">TK</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Rock &amp; Pour at The Bowdon Rooms. All rights reserved.</p>
          </div>
        </div>
      </footer >
    </>
  );
}
