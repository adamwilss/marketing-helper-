"use client";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { Typewriter } from "@/components/ui/typewriter";
import { GlowingEffect } from "@/components/ui/glowing-effect";


// Data Configuration
const eventsData = [
  {
    id: 1, date: "2026-04-10T19:30:00", displayDate: "April 10th", month: "April", day: "10", year: "2026", time: "7:30 PM", bandName: "Steven and the Holy Heathens", description: "Playing the best of Oasis, Arctic Monkeys, Blur, Pulp, Stone Roses, The Strokes, The Smiths, Green Day and more.", ticketLink: "https://www.skiddle.com/whats-on/Warrington/The-Bowdon-Rooms/Rock--Pour/42147525/", soldOut: false
  }
];

const Countdown = React.memo(function Countdown({ targetDate }: { targetDate: string }) {
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
});

export default function Home() {
  const [inspectedPoster, setInspectedPoster] = useState<string | null>(null);

  const targetEvent = eventsData.find(e => !e.soldOut && new Date(e.date).getTime() > new Date().getTime()) || eventsData[0];

  const handleEscKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') setInspectedPoster(null);
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleEscKey);
    return () => window.removeEventListener('keydown', handleEscKey);
  }, [handleEscKey]);

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
          <h1 className="hero-h1 fade-up">Rock &amp; Pour — All-Inclusive Live Music &amp; Premium Drinks Night in Manchester</h1>
          <h3 className="hero-subtitle fade-up">
            <span className="subtitle-line" />
            AT THE BOWDON ROOMS
            <span className="subtitle-line" />
          </h3>
          <div className="hero-title-img fade-up delay-1">
            <div className="title-img-wrap">
              <Image src="/title-logo-transparent.webp" alt="ROCK & POUR" className="title-logo-img" width={600} height={200} priority />
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
            <p className="box-office-note">Or call the box office and save money — <a href="tel:01619268992" className="phone-link">0161 926 8992</a></p>
          </div>
        </div>
        <div className="hero-crowd">
          <Image src="/crowd.webp" alt="" aria-hidden={true} width={1920} height={400} priority />
        </div>
      </header>

      {/* Comparison Section */}
      <section className="comparison section dark-bg" id="value">
        <div className="container">
          <div className="text-center scroll-reveal">
            <h2 className="section-title">Where Does Your <span className="gold-text">Money</span> Go?</h2>
            <p className="comparison-subtitle">Most nights end like this</p>
            <div className="comparison-header-divider"></div>
            <p className="comparison-intro">A typical night out in Manchester starts with good intentions — but ends with £60–£120+ spent without realizing it. Entry fees stack. Drinks cost more than expected. Time is wasted queuing. Your group gets split up. By the end of the night, you're confused about where all your money went and wondering if it was actually worth it.</p>
            <p className="comparison-intro">Rock &amp; Pour eliminates every single one of these pain points. One venue. One band. One fixed price. Everything included. No surprises. No regrets.</p>
            <div className="comparison-header-divider"></div>
          </div>
          <div className="comparison-table-wrapper scroll-reveal">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th></th>
                  <th className="col-normal">A Normal Night Out</th>
                  <th className="col-rp"><Image src="/title-logo-transparent.webp" alt="Rock & Pour" className="table-logo" width={120} height={40} loading="lazy" /></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="row-label">Entry</td>
                  <td>£5–£15 per venue</td>
                  <td className="included">Included</td>
                </tr>
                <tr>
                  <td className="row-label">Drinks Spend</td>
                  <td>£40–£80+ (adds up fast)</td>
                  <td className="included">Included</td>
                </tr>
                <tr className="total-cost-row highlight-row">
                  <td className="row-label">Total Cost</td>
                  <td className="cost-highlight">
                    <div className="cost-warning-label">MOST PEOPLE END UP HERE →</div>
                    <span className="cost-amount">£60–£120+</span>
                  </td>
                  <td className="cost-highlight gold cost-highlight-dominant">
                    <div className="cost-tag-fixed">FIXED PRICE</div>
                    <span className="cost-amount">£49–£55</span>
                    <div className="cost-tag-no-surprise">NO SURPRISE SPEND</div>
                  </td>
                </tr>
                <tr>
                  <td className="row-label">Price Certainty</td>
                  <td className="problem">✗ No idea what you'll spend</td>
                  <td className="included">✓ One fixed price</td>
                </tr>
                <tr>
                  <td className="row-label">Venue Hopping</td>
                  <td className="problem">✗ Multiple venues</td>
                  <td className="included">✓ One place all night</td>
                </tr>
                <tr>
                  <td className="row-label">Time Wasted</td>
                  <td className="problem">✗ 1–2 hours in queues/walking</td>
                  <td className="included">✓ Straight in, stay put</td>
                </tr>
                <tr>
                  <td className="row-label">Group Coordination</td>
                  <td className="problem">✗ People split up / lost</td>
                  <td className="included">✓ Everyone together</td>
                </tr>
                <tr>
                  <td className="row-label">Atmosphere</td>
                  <td className="problem">✗ Hit or miss</td>
                  <td className="included">✓ Live band all night</td>
                </tr>
                <tr>
                  <td className="row-label">Stress Level</td>
                  <td className="problem">✗ Constant decisions</td>
                  <td className="included">✓ Fully handled</td>
                </tr>
                <tr>
                  <td className="row-label">End-of-Night Feeling</td>
                  <td className="problem">✗ "How did I spend that?"</td>
                  <td className="included">✓ No surprises, no regret</td>
                </tr>
                <tr>
                  <td className="row-label">Planning Required</td>
                  <td className="problem">✗ Yes</td>
                  <td className="included">✓ None</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="comparison-micro-proof scroll-reveal">
            Most guests spend £80+ on a normal night out without realising it.
          </p>

          <div className="comparison-conclusion scroll-reveal">
            <p><strong>Most people don't plan to spend £100 on a night out. They just end up there.</strong></p>
            <p>The same night for less, with none of the hassle.</p>
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
                Rock &amp; Pour is a premium all-inclusive live music and drinks experience at The Bowdon Rooms in Manchester. Your £55 ticket covers everything: entry, unlimited premium beers (including Murphy's Irish Stout and Moretti), wines, and spirits. Enjoy outstanding live bands playing indie rock, Britpop, 90s rock anthems and classic sing-alongs in an immersive, high-energy party atmosphere. No hidden costs. No last calls. No awkward payment drama.
              </p>
              <p className="section-desc">
                Unlike a normal night out where you're venue hopping, spending £60–£120+ on entry fees and drinks with zero certainty, Rock &amp; Pour gives you complete peace of mind. Everything's included in one fixed price. Sing, dance, and drink with friends for an unforgettable night from start to finish.
              </p>
              <p className="section-desc">
                Explore our <a href="/premium-selection" className="gold-link">complete selection of premium drinks</a>, learn more about <a href="/house-rules" className="gold-link">house rules and what's included</a>, or <a href="#value" className="gold-link">see how Rock &amp; Pour compares to a normal night out</a>.
              </p>
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '4px' }}>
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
                  priority
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
                  loading="lazy"
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
                  loading="lazy"
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
              <Image src="/title-logo-transparent.webp" alt="ROCK & POUR" className="footer-logo-img" width={200} height={67} loading="lazy" />
              <p>Live music. All-inclusive drinks. A room full of people there for a proper night out.</p>
            </div>
            <div className="footer-links">
              <details className="footer-dropdown">
                <summary><h4>Explore Rock &amp; Pour ▾</h4></summary>
                <div className="footer-dropdown-grid">
                  <div className="footer-dropdown-col">
                    <span className="footer-dropdown-heading">The Basics</span>
                    <a href="/the-experience">The Experience</a>
                    <a href="/events">Events</a>
                    <a href="/about">About</a>
                    <a href="/pricing">Pricing</a>
                    <a href="/faq">FAQ</a>
                    <a href="/first-time-guide">First Time?</a>
                    <a href="/house-rules">House Rules</a>
                  </div>
                  <div className="footer-dropdown-col">
                    <span className="footer-dropdown-heading">Music &amp; Drinks</span>
                    <a href="/premium-selection">Premium Selection</a>
                    <a href="/drinks-guide">Drinks Guide</a>
                    <a href="/bands">Bands</a>
                    <a href="/bowdon-rooms">The Venue</a>
                    <a href="/live-music-guide">Live Music Guide</a>
                    <a href="/why-live-music-matters">Why Live Music</a>
                    <a href="/indie-rock-night">Indie Rock Night</a>
                  </div>
                  <div className="footer-dropdown-col">
                    <span className="footer-dropdown-heading">Plan Your Night</span>
                    <a href="/group-events">Group Events</a>
                    <a href="/corporate-events">Corporate</a>
                    <a href="/party-planning">Party Planning</a>
                    <a href="/date-night">Date Night</a>
                    <a href="/stag-do-ideas">Stag Dos</a>
                    <a href="/hen-party-ideas">Hen Parties</a>
                    <a href="/birthday-celebration-ideas">Birthdays</a>
                    <a href="/team-building-events">Team Building</a>
                  </div>
                  <div className="footer-dropdown-col">
                    <span className="footer-dropdown-heading">Who It&rsquo;s For</span>
                    <a href="/girls-night-out">Girls Night</a>
                    <a href="/lads-night-out">Lads Night</a>
                    <a href="/office-night-out">Office Night</a>
                    <a href="/reunion-night-out">Reunions</a>
                    <a href="/rock-music-fans">Rock Fans</a>
                    <a href="/britpop-lovers">Britpop Lovers</a>
                    <a href="/90s-nostalgia">90s Nostalgia</a>
                    <a href="/indie-music-fans">Indie Fans</a>
                  </div>
                  <div className="footer-dropdown-col">
                    <span className="footer-dropdown-heading">Local</span>
                    <a href="/altrincham-nights-out">Altrincham</a>
                    <a href="/manchester-nights-out">Manchester</a>
                    <a href="/manchester-live-music-events">Manchester Music</a>
                    <a href="/cheshire-events">Cheshire</a>
                    <a href="/warrington-nights-out">Warrington</a>
                    <a href="/best-manchester-venues">Best Venues</a>
                    <a href="/date-night-manchester">Date Night MCR</a>
                  </div>
                  <div className="footer-dropdown-col">
                    <span className="footer-dropdown-heading">Compare &amp; Tips</span>
                    <a href="/vs-nightclub">vs Nightclubs</a>
                    <a href="/vs-pub-crawl">vs Pub Crawls</a>
                    <a href="/vs-normal-night-out">vs Normal Night</a>
                    <a href="/alternative-to-nightclubs">Club Alternative</a>
                    <a href="/night-out-tips">Night Out Tips</a>
                    <a href="/what-to-wear-night-out">What to Wear</a>
                    <a href="/how-to-budget-night-out">Budgeting</a>
                    <a href="/all-inclusive-drinks-events">All-Inclusive</a>
                  </div>
                </div>
              </details>
            </div>
            <div className="footer-contact">
              <h4>Contact &amp; Venue</h4>
              <p>The Bowdon Rooms<br />The Firs, Bowdon, Altrincham WA14 2TQ</p>
              <p>Box Office: <a href="tel:01619268992" className="phone-link">0161 926 8992</a></p>
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
