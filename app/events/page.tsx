'use client';
import React from 'react';

const events = [
  {
    id: 1,
    bandName: 'Steven and the Holy Heathens',
    date: 'April 10',
    soldOut: false
  },
  {
    id: 2,
    bandName: 'Velvet Thunder',
    date: 'May 15',
    soldOut: false
  },
  {
    id: 3,
    bandName: 'Electric Rebels',
    date: 'June 20',
    soldOut: true
  }
];

export default function Events() {
  return (
    <main className="events-page section">
      <div className="container">
        <h1 className="page-h1">Upcoming Rock &amp; Pour Events 2026 &mdash; Live Music &amp; All-Inclusive Drinks</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
          Every Rock &amp; Pour event is a carefully curated evening of live music, unlimited premium drinks, and an electric atmosphere at <a href="/bowdon-rooms" className="gold-link">The Bowdon Rooms</a>. For just &pound;55 per ticket, you get entry, unlimited beers, wines, spirits and soft drinks, plus a full night of incredible live bands. No hidden costs. No surprises. Just one unforgettable night.
        </p>

        <section className="scroll-reveal" style={{ marginBottom: '3rem' }}>
          <h2>What Every Rock &amp; Pour Event Includes</h2>
          <p>
            When you book a Rock &amp; Pour event, your &pound;55 ticket covers absolutely everything for the entire evening. That means unlimited <a href="/premium-selection" className="gold-link">premium drinks</a> from the moment you walk in &mdash; including Murphy&rsquo;s Irish Stout, Moretti, Gordon&rsquo;s Gin, premium vodkas, rums, whiskeys, wines, and soft drinks. It also includes a full live band performance from start to finish, entry to <a href="/bowdon-rooms" className="gold-link">The Bowdon Rooms</a>, and an atmosphere that puts every <a href="/vs-nightclub" className="gold-link">nightclub</a> and <a href="/vs-pub-crawl" className="gold-link">pub crawl</a> to shame.
          </p>
          <p>
            Unlike a <a href="/vs-normal-night-out" className="gold-link">normal night out</a> where you might spend &pound;60&ndash;&pound;120+ across multiple venues, Rock &amp; Pour keeps your entire group together in one place, all night. No venue-hopping. No losing friends. No money stress. Check our <a href="/pricing" className="gold-link">pricing breakdown</a> to see how much you save compared to a typical night.
          </p>
        </section>

        <section className="scroll-reveal" style={{ marginBottom: '3rem' }}>
          <h2>Upcoming Events &mdash; Book Your Spot</h2>
          <p>Events sell out fast. Secure your tickets early to avoid disappointment. You can also save money by calling the box office directly on 0161 926 8992.</p>

          {events.map((event) => (
            <div key={event.id} className="event-card" style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '8px', marginBottom: '1rem', borderLeft: '4px solid #c8a951' }}>
              <h3>{event.bandName}</h3>
              <p style={{ marginBottom: '0.5rem' }}><strong>Date:</strong> {event.date}</p>
              {event.soldOut ? (
                <p style={{ color: '#ff6b6b', fontWeight: 'bold' }}>SOLD OUT &mdash; Join our mailing list for future events</p>
              ) : (
                <p style={{ color: '#c8a951', fontWeight: 'bold' }}>Tickets Available &mdash; Book Now Before They Sell Out</p>
              )}
            </div>
          ))}
        </section>

        <section className="scroll-reveal" style={{ marginBottom: '3rem' }}>
          <h2>Why Rock &amp; Pour Events Sell Out</h2>
          <p>
            Rock &amp; Pour has quickly become one of the most talked-about <a href="/manchester-live-music-events" className="gold-link">live music events in the Manchester area</a>. With a capacity of just 300 at The Bowdon Rooms, every event creates an intimate, high-energy atmosphere that larger venues simply cannot match. Our <a href="/bands" className="gold-link">handpicked bands</a> play everything from indie rock and Britpop classics to 90s anthems and modern crowd-pleasers.
          </p>
          <p>
            The all-inclusive format means there are no queues at the bar worrying about prices, no rounds to organise, and no end-of-night bill shock. It&rsquo;s the reason our events regularly sell out weeks in advance and why attendees come back event after event. Whether you&rsquo;re planning a <a href="/birthday-celebration-ideas" className="gold-link">birthday celebration</a>, a <a href="/stag-do-ideas" className="gold-link">stag do</a>, a <a href="/hen-party-ideas" className="gold-link">hen party</a>, or simply a brilliant <a href="/group-night-out-ideas" className="gold-link">group night out</a>, Rock &amp; Pour events deliver every single time.
          </p>
        </section>

        <section className="scroll-reveal" style={{ marginBottom: '3rem' }}>
          <h2>Who Are Rock &amp; Pour Events For?</h2>
          <ul style={{ lineHeight: '2', paddingLeft: '1.5rem' }}>
            <li><strong>Groups of friends</strong> looking for a <a href="/group-events" className="gold-link">hassle-free group night out</a></li>
            <li><strong>Birthday parties</strong> &mdash; the perfect <a href="/birthday-celebration-ideas" className="gold-link">birthday celebration</a> with zero planning stress</li>
            <li><strong>Couples</strong> seeking a unique <a href="/date-night" className="gold-link">date night</a> with live music and premium drinks</li>
            <li><strong>Corporate teams</strong> looking for <a href="/corporate-events" className="gold-link">team building events</a> that people actually enjoy</li>
            <li><strong>Music lovers</strong> &mdash; <a href="/rock-music-fans" className="gold-link">rock fans</a>, <a href="/indie-music-fans" className="gold-link">indie fans</a>, <a href="/britpop-lovers" className="gold-link">Britpop lovers</a>, and <a href="/90s-nostalgia" className="gold-link">90s nostalgia</a> seekers</li>
            <li><strong>Stag and hen groups</strong> wanting something better than a <a href="/vs-pub-crawl" className="gold-link">pub crawl</a></li>
            <li><strong>Anyone tired</strong> of expensive, forgettable <a href="/manchester-nights-out" className="gold-link">Manchester nights out</a></li>
          </ul>
        </section>

        <section className="scroll-reveal" style={{ marginBottom: '3rem' }}>
          <h2>How to Book Rock &amp; Pour Event Tickets</h2>
          <p>
            Booking is simple. Click the button below to purchase tickets through Skiddle, or call our box office on <strong>0161 926 8992</strong> to save money on your order. Group bookings of 10+ can also enquire about reserved areas.
          </p>
          <p>
            New to Rock &amp; Pour? Check out our <a href="/first-time-guide" className="gold-link">first-time guide</a> to know exactly what to expect, or browse the <a href="/faq" className="gold-link">FAQ</a> for quick answers. You can also read about <a href="/the-experience" className="gold-link">the full Rock &amp; Pour experience</a> to understand why this is unlike any other night out.
          </p>
          <p>
            Based near <a href="/altrincham-nights-out" className="gold-link">Altrincham</a>, <a href="/warrington-nights-out" className="gold-link">Warrington</a>, or <a href="/cheshire-events" className="gold-link">Cheshire</a>? Rock &amp; Pour at The Bowdon Rooms is right on your doorstep.
          </p>
        </section>

        <section className="scroll-reveal text-center" style={{ marginTop: '2rem' }}>
          <h2>Don&rsquo;t Miss Out &mdash; Secure Your Tickets Today</h2>
          <p>Events sell out fast. Book now and lock in your night.</p>
          <a href="https://www.skiddle.com/whats-on/Warrington/The-Bowdon-Rooms/Rock--Pour/42147525/" target="_blank" rel="noreferrer" className="btn btn-gold btn-large">
            GET YOUR TICKETS &mdash; &pound;55 ALL-INCLUSIVE
          </a>
        </section>
      </div>
    </main>
  );
}
