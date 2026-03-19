"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
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

function Countdown({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState({ days: "00", hours: "00", minutes: "00", seconds: "00" });
  useEffect(() => {
    const countDownDate = new Date(targetDate).getTime();
    const tick = () => {
      const distance = countDownDate - new Date().getTime();
      if (distance < 0) { clearInterval(interval); return; }
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, '0'),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0'),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0'),
        seconds: Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0'),
      });
    };
    const interval = setInterval(tick, 1000);
    tick();
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="countdown">
      <div className="time-box"><span className="time-val">{timeLeft.days}</span><span className="time-text">Days</span></div>
      <div className="time-box"><span className="time-val">{timeLeft.hours}</span><span className="time-text">Hours</span></div>
      <div className="time-box"><span className="time-val">{timeLeft.minutes}</span><span className="time-text">Mins</span></div>
      <div className="time-box"><span className="time-val">{timeLeft.seconds}</span><span className="time-text">Secs</span></div>
    </div>
  );
}

export default function Home() {
  const [inspectedPoster, setInspectedPoster] = useState<string | null>(null);

  const targetEvent = eventsData.find(e => !e.soldOut && new Date(e.date).getTime() > new Date().getTime()) || eventsData[0];

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setInspectedPoster(null); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  useEffect(() => {
    const pc = document.getElementById('hero-particles');
    if (!pc) return;
    pc.innerHTML = '';
    for (let i = 0; i < 8; i++) {
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
          <h1 className="sr-only">Rock &amp; Pour — Your Entire Night Out. One Ticket. Live Band, Unlimited Beer, Wine &amp; Spirits at The Bowdon Rooms</h1>
          <h3 className="hero-subtitle fade-up">
            <span className="subtitle-line" />
            AT THE BOWDON ROOMS
            <span className="subtitle-line" />
          </h3>
          <div className="hero-title-img fade-up delay-1">
            <div className="title-img-wrap">
              <img src="/title-logo-transparent.webp" alt="ROCK & POUR" className="title-logo-img" />
              <div className="title-sheen" />
            </div>
          </div>

          <div className="hero-date fade-up delay-2">
            <span>{targetEvent.month.toUpperCase()} {targetEvent.day}TH • {targetEvent.year}</span> • <span>{targetEvent.time}</span>
          </div>

          <div className="hero-tagline fade-up delay-2b">
            Live Band &bull; Unlimited Beer, Wine &amp; Spirits &bull; All Inclusive
          </div>

          <div className="countdown-container fade-up delay-3">
            <GlowingEffect spread={60} glow={true} disabled={false} proximity={80} inactiveZone={0.01} borderWidth={2} />
            <p className="countdown-label">TICKETS SELLING FAST</p>
            <Countdown targetDate={targetEvent.date} />
          </div>

          <div className="hero-actions fade-up delay-4">
            <a href="https://www.skiddle.com/whats-on/Warrington/The-Bowdon-Rooms/Rock--Pour/42147525/" target="_blank" rel="noreferrer" className="btn btn-gold btn-large">GET YOUR TICKETS — £55</a>
            <p className="box-office-note">Or call the box office and save £10 — <a href="tel:01619268992">0161 926 8992</a></p>
          </div>
        </div>
        <div className="hero-crowd">
          <img src="/crowd.webp" alt="" aria-hidden="true" />
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
                  src="/drinks-img.webp"
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

      {/* Terry's Story Section */}
      <section className="terrys-story section" id="terrys-story">
        <div className="container">
          <div className="story-inner scroll-reveal">
            <p className="section-overline">How It Started</p>
            <h2 className="section-title">The Night That <span className="gold-text">Changed Everything</span></h2>
            <div className="gold-rule-left" />
            <div className="story-body">
              <p className="story-paragraph">One Saturday night in Manchester, Terry found himself bouncing between venues. An hour&apos;s queue here. A £14 cocktail there. A cover charge that went up at the door. By midnight he&apos;d spent £60 and was still looking for somewhere decent to settle.</p>
              <p className="story-paragraph">It was the kind of night that should have been brilliant — mates, music, city centre — but it was being chipped away at from every direction. No single venue was giving him what he actually wanted: a proper atmosphere, a great live band, and drinks without the drama.</p>
              <blockquote className="story-quote">
                <span className="gold-text">&quot;I wanted a night where you could just arrive, enjoy yourself, and never have to think about money again until you got home.&quot;</span>
                <cite>— Terry, Founder</cite>
              </blockquote>
              <p className="story-paragraph">Rock &amp; Pour was built on that frustration. One room. One band. One ticket that covers everything. You know exactly what you&apos;re spending before you arrive, so the only thing left to do is enjoy it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="comparison section dark-bg" id="value">
        <div className="container">
          <div className="text-center scroll-reveal">
            <p className="section-overline">Do The Maths</p>
            <h2 className="section-title">A <span className="gold-text">Normal Night Out</span> vs Rock &amp; Pour</h2>
            <div className="gold-divider"><span className="gold-diamond" /></div>
          </div>
          <div className="comparison-grid scroll-reveal">
            {/* Left column — Normal Night Out */}
            <div className="comparison-card comparison-card--normal">
              <div className="comparison-card-header">
                <h3>A Normal Night Out</h3>
              </div>
              <ul className="comparison-list">
                <li className="comparison-item comparison-item--cost">
                  <span>Entry across venues</span><span>£5–£15 each</span>
                </li>
                <li className="comparison-item comparison-item--cost">
                  <span>2–4 drinks per venue</span><span>£20–£80</span>
                </li>
                <li className="comparison-item comparison-item--cost">
                  <span>Venue hopping &amp; queues</span><span>1–2 hours lost</span>
                </li>
                <li className="comparison-item comparison-item--cost">
                  <span>Group coordination chaos</span><span>People get lost</span>
                </li>
                <li className="comparison-item comparison-item--cost">
                  <span>End-of-night regret</span><span>How much?!</span>
                </li>
              </ul>
              <div className="comparison-total comparison-total--normal">
                Total: £60–£120+
              </div>
            </div>

            {/* Right column — Rock & Pour */}
            <div className="comparison-card comparison-card--rp">
              <GlowingEffect spread={50} glow={true} disabled={false} proximity={72} inactiveZone={0.01} borderWidth={2} />
              <div className="comparison-card-header">
                <h3>Rock &amp; Pour — One Ticket</h3>
              </div>
              <ul className="comparison-list">
                <li className="comparison-item comparison-item--included">
                  <span>Live band all night</span><span>✓</span>
                </li>
                <li className="comparison-item comparison-item--included">
                  <span>Unlimited premium draught</span><span>✓</span>
                </li>
                <li className="comparison-item comparison-item--included">
                  <span>Unlimited wines</span><span>✓</span>
                </li>
                <li className="comparison-item comparison-item--included">
                  <span>Unlimited spirits</span><span>✓</span>
                </li>
                <li className="comparison-item comparison-item--included">
                  <span>Soft drinks</span><span>✓</span>
                </li>
                <li className="comparison-item comparison-item--included">
                  <span>Full night access, no queues</span><span>✓</span>
                </li>
              </ul>
              <div className="comparison-total comparison-total--rp">
                £55 online · £45 via box office
              </div>
            </div>
          </div>

          <p className="comparison-footnote scroll-reveal">
            Planning a night out with mates? Sort it upfront. No awkward splits, no surprise bar tabs — just know what you&apos;re spending before you leave the house. Even the taxi is easier to plan.
          </p>
          <div className="comparison-cta text-center scroll-reveal">
            <a href="https://www.skiddle.com/whats-on/Warrington/The-Bowdon-Rooms/Rock--Pour/42147525/" target="_blank" rel="noreferrer" className="btn btn-gold btn-large">
              GET YOUR TICKETS — £55
            </a>
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

      {/* On Tap All Night — Hero Section */}
      <section className="on-tap-hero section dark-bg">
        <div className="container">
          <div className="on-tap-grid scroll-reveal">
            <div className="on-tap-card on-tap-primary">
              <div className="on-tap-badge">ON TAP ALL NIGHT</div>
              <h3>Murphy&apos;s<br />Neck Oil</h3>
              <p>Fresh, hoppy, all night long</p>
            </div>
            <div className="on-tap-card on-tap-primary">
              <div className="on-tap-badge">ON TAP ALL NIGHT</div>
              <h3>Moretti</h3>
              <p>Classic Italian lager, poured cold</p>
            </div>
          </div>
          <p className="on-tap-note scroll-reveal">Plus Damn Lemon, Cruz Campo, Guinness &amp; more on draft</p>
        </div>
      </section>

      {/* All Drinks Showcase — Scrolling */}
      <section className="drinks-showcase section">
        <div className="container">
          <div className="scroll-reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="section-overline">The Full Bar</p>
            <h2 className="section-title">Every <span className="gold-text">Brand</span> Included</h2>
          </div>
          <div className="drinks-scroll-wrapper">
            <div className="drinks-scroll">
              <div className="drink-badge drink-badge--featured">Murphy&apos;s Neck Oil</div>
              <div className="drink-badge drink-badge--featured">Moretti</div>
              <div className="drink-badge">Damn Lemon</div>
              <div className="drink-badge">Cruz Campo</div>
              <div className="drink-badge">Guinness</div>
              <div className="drink-badge">Guinness Zero</div>
              <div className="drink-badge">Budweiser</div>
              <div className="drink-badge">Corona</div>
              <div className="drink-badge">Stella</div>
              <div className="drink-badge">Peroni Zero</div>
              <div className="drink-badge">Gordon&apos;s 0%</div>
              <div className="drink-badge">Gordon&apos;s Dry</div>
              <div className="drink-badge">White Peach</div>
              <div className="drink-badge">Beefeater</div>
              <div className="drink-badge">Whitley Gin</div>
              <div className="drink-badge">Aperol</div>
              <div className="drink-badge">Disaronno</div>
              <div className="drink-badge">Velvet</div>
              <div className="drink-badge">Malibu</div>
              <div className="drink-badge">Bacardi</div>
              <div className="drink-badge">Havana Club</div>
              <div className="drink-badge">Absolut Citrus</div>
              <div className="drink-badge">Absolut Vanilla</div>
              <div className="drink-badge">Captain Morgan</div>
              <div className="drink-badge">Kraken</div>
              <div className="drink-badge">Jameson</div>
              <div className="drink-badge">Jack Daniels</div>
              <div className="drink-badge">Southern Comfort</div>
              <div className="drink-badge">Kopparberg</div>
              <div className="drink-badge">J2O</div>
              <div className="drink-badge">Fanta</div>
              <div className="drink-badge">Pink Ting</div>
              <div className="drink-badge">Rioja</div>
              <div className="drink-badge">Shiraz</div>
              <div className="drink-badge">Malbec</div>
              <div className="drink-badge">Prosecco</div>
              <div className="drink-badge">Pinot Grigio</div>
              <div className="drink-badge">Chardonnay</div>
              <div className="drink-badge">Rosé</div>
              {/* Duplicate for seamless scroll */}
              <div className="drink-badge drink-badge--featured">Murphy&apos;s Neck Oil</div>
              <div className="drink-badge drink-badge--featured">Moretti</div>
              <div className="drink-badge">Damn Lemon</div>
              <div className="drink-badge">Cruz Campo</div>
              <div className="drink-badge">Guinness</div>
            </div>
          </div>
        </div>
      </section>

      {/* Poster Section */}
      <section className="poster-section section" id="events">
        <div className="container text-center">
          <div className="poster-pair scroll-reveal">
            <div className="poster-wrapper">
              <GlowingEffect spread={60} glow={true} disabled={false} proximity={80} inactiveZone={0.01} borderWidth={2} />
              <div className="poster-container" onClick={() => setInspectedPoster('/POSTER.webp')}>
                <Image
                  src="/POSTER.webp"
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
              <div className="poster-container" onClick={() => setInspectedPoster('/band-poster.webp')}>
                <Image
                  src="/band-poster.webp"
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
              <img src="/title-logo-transparent.webp" alt="ROCK & POUR" className="footer-logo-img" />
              <p>Live music. All-inclusive drinks. A room full of people there for a proper night out.</p>
            </div>
            <div className="footer-links">
              <h4>Quick Links</h4>
              <a href="#experience">The Experience</a>
              <a href="#drinks">Drinks Menu</a>
              <a href="/house-rules">House Rules</a>
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
