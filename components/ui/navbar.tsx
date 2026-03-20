"use client";
import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="nav-container">
        <a href="/" className="nav-logo">
          <img src="/title-logo-transparent.webp" alt="ROCK & POUR" className="nav-logo-img" />
        </a>
        <div className={`nav-links ${menuActive ? 'active' : ''}`}>
          <a href="/" onClick={() => setMenuActive(false)}>Home</a>
          <a href="/our-story" onClick={() => setMenuActive(false)}>Our Story</a>
          <a href="/premium-selection" onClick={() => setMenuActive(false)}>Drinks</a>
          <a href="/house-rules" onClick={() => setMenuActive(false)}>House Rules</a>
          <a href="https://www.skiddle.com/whats-on/Warrington/The-Bowdon-Rooms/Rock--Pour/42147525/" target="_blank" rel="noreferrer" className="btn btn-outline-gold nav-cta">Buy Tickets</a>
        </div>
        <div className={`mobile-menu-btn ${menuActive ? 'active' : ''}`} onClick={() => setMenuActive(!menuActive)}>
          <span></span><span></span><span></span>
        </div>
      </div>
    </nav>
  );
}
