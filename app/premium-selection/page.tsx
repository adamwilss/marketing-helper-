import type { Metadata } from "next";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Beer, Wine, Sparkles, Flame } from "lucide-react";

export const metadata: Metadata = {
  title: "Premium Selection | Rock & Pour",
  description: "Explore our full range of premium draught beers, wines, spirits and soft drinks — all included in your ticket.",
  alternates: { canonical: "/premium-selection" },
};

export default function PremiumSelection() {
  return (
    <main className="premium-selection-page">
      {/* Premium Drinks Offerings */}
      <section className="drinks section dark-bg">
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

      {/* All Drinks Showcase — Categorized */}
      <section className="drinks-showcase section">
        <div className="container">
          <div className="scroll-reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p className="section-overline">The Full Bar</p>
            <h2 className="section-title">Every <span className="gold-text">Brand</span> Included</h2>
            <p className="section-subtitle">40+ premium brands. Unlimited pours. One night. No limits.</p>
          </div>

          {/* Premium Draught */}
          <details className="drinks-category scroll-reveal">
            <summary className="category-header">
              <h3 className="category-title">
                <span className="collapse-arrow">▶</span> 🍺 Premium Draught
              </h3>
              <p className="category-desc">Fresh, cold, poured properly</p>
            </summary>
            {/* Lagers */}
            <div className="drinks-subcategory">
              <h4 className="subcategory-title">Lagers</h4>
              <div className="drinks-grid-category">
                <div className="drink-item">Beavertown Neck Oil</div>
                <div className="drink-item">Budweiser</div>
                <div className="drink-item">Corona</div>
                <div className="drink-item">Cruz Campo</div>
                <div className="drink-item">Damn Lemon</div>
                <div className="drink-item drink-item--featured">Moretti</div>
                <div className="drink-item drink-item--featured">Murphy&apos;s Neck Oil</div>
                <div className="drink-item">Peroni Zero</div>
                <div className="drink-item">Stella</div>
              </div>
            </div>

            {/* Stouts */}
            <div className="drinks-subcategory">
              <h4 className="subcategory-title">Stouts</h4>
              <div className="drinks-grid-category">
                <div className="drink-item">Guinness</div>
                <div className="drink-item">Guinness Zero</div>
              </div>
            </div>
          </details>

          {/* Premium Spirits */}
          <details className="drinks-category scroll-reveal">
            <summary className="category-header">
              <h3 className="category-title">
                <span className="collapse-arrow">▶</span> 🥃 Premium Spirits
              </h3>
              <p className="category-desc">Top-shelf selection across all spirit categories</p>
            </summary>

            {/* Gin */}
            <div className="drinks-subcategory">
              <h4 className="subcategory-title">Gin</h4>
              <div className="drinks-grid-category">
                <div className="drink-item">Beefeater</div>
                <div className="drink-item">Gordon&apos;s Dry</div>
                <div className="drink-item">Gordon&apos;s 0%</div>
                <div className="drink-item">Whitley Gin</div>
              </div>
            </div>

            {/* Vodka */}
            <div className="drinks-subcategory">
              <h4 className="subcategory-title">Vodka</h4>
              <div className="drinks-grid-category">
                <div className="drink-item">Absolut Citrus</div>
                <div className="drink-item">Absolut Vanilla</div>
              </div>
            </div>

            {/* Rum */}
            <div className="drinks-subcategory">
              <h4 className="subcategory-title">Rum</h4>
              <div className="drinks-grid-category">
                <div className="drink-item">Bacardi</div>
                <div className="drink-item">Captain Morgan</div>
                <div className="drink-item">Havana Club</div>
                <div className="drink-item">Kraken</div>
              </div>
            </div>

            {/* Whiskey */}
            <div className="drinks-subcategory">
              <h4 className="subcategory-title">Whiskey</h4>
              <div className="drinks-grid-category">
                <div className="drink-item">Jack Daniels</div>
                <div className="drink-item">Jameson</div>
                <div className="drink-item">Southern Comfort</div>
              </div>
            </div>

            {/* Liqueurs &amp; Other */}
            <div className="drinks-subcategory">
              <h4 className="subcategory-title">Liqueurs &amp; Other</h4>
              <div className="drinks-grid-category">
                <div className="drink-item">Aperol</div>
                <div className="drink-item">Disaronno</div>
                <div className="drink-item">Malibu</div>
                <div className="drink-item">Velvet</div>
              </div>
            </div>
          </details>

          {/* Wines */}
          <details className="drinks-category scroll-reveal">
            <summary className="category-header">
              <h3 className="category-title">
                <span className="collapse-arrow">▶</span> 🍷 Wines
              </h3>
              <p className="category-desc">Reds, whites, rosés &amp; sparkling</p>
            </summary>
            {/* Red Wines */}
            <div className="drinks-subcategory">
              <h4 className="subcategory-title">Red</h4>
              <div className="drinks-grid-category">
                <div className="drink-item">Malbec</div>
                <div className="drink-item">Rioja</div>
                <div className="drink-item">Shiraz</div>
              </div>
            </div>

            {/* White Wines */}
            <div className="drinks-subcategory">
              <h4 className="subcategory-title">White</h4>
              <div className="drinks-grid-category">
                <div className="drink-item">Chardonnay</div>
                <div className="drink-item">Pinot Grigio</div>
              </div>
            </div>

            {/* Rosé */}
            <div className="drinks-subcategory">
              <h4 className="subcategory-title">Rosé</h4>
              <div className="drinks-grid-category">
                <div className="drink-item">Rosé</div>
              </div>
            </div>

            {/* Sparkling */}
            <div className="drinks-subcategory">
              <h4 className="subcategory-title">Sparkling</h4>
              <div className="drinks-grid-category">
                <div className="drink-item">Prosecco</div>
              </div>
            </div>
          </details>

          {/* Soft Drinks */}
          <details className="drinks-category scroll-reveal">
            <summary className="category-header">
              <h3 className="category-title">
                <span className="collapse-arrow">▶</span> 🥤 Soft Drinks &amp; Mixers
              </h3>
              <p className="category-desc">Premium mixers &amp; alcohol-free options</p>
            </summary>
            <div className="drinks-grid-category">
              <div className="drink-item">Kopparberg</div>
              <div className="drink-item">J2O</div>
              <div className="drink-item">Fanta</div>
              <div className="drink-item">Pink Ting</div>
            </div>
          </details>
        </div>
      </section>

      {/* Random Drinks Carousel */}
      <section className="drinks-carousel section dark-bg">
        <div className="container">
          <div className="scroll-reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="section-overline">Grab A Round</p>
            <h2 className="section-title">Random <span className="gold-text">Selection</span></h2>
          </div>
          <div className="carousel-wrapper scroll-reveal">
            <div className="carousel-track">
              <div className="carousel-item">Murphy's Neck Oil</div>
              <div className="carousel-item">Rosé</div>
              <div className="carousel-item">Jameson</div>
              <div className="carousel-item">Moretti</div>
              <div className="carousel-item">Chardonnay</div>
              <div className="carousel-item">Aperol</div>
              <div className="carousel-item">Guinness</div>
              <div className="carousel-item">Prosecco</div>
              <div className="carousel-item">Captain Morgan</div>
              <div className="carousel-item">Stella</div>
              <div className="carousel-item">Beefeater</div>
              <div className="carousel-item">Shiraz</div>
              {/* Duplicate for seamless loop */}
              <div className="carousel-item">Murphy's Neck Oil</div>
              <div className="carousel-item">Rosé</div>
              <div className="carousel-item">Jameson</div>
              <div className="carousel-item">Moretti</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Back */}
      <section className="premium-cta section dark-bg">
        <div className="container text-center">
          <h2 className="section-title">Ready to Experience <span className="gold-text">It All?</span></h2>
          <a href="https://www.skiddle.com/whats-on/Warrington/The-Bowdon-Rooms/Rock--Pour/42147525/" target="_blank" rel="noreferrer" className="btn btn-gold btn-large">
            GET YOUR TICKETS — £55
          </a>
          <p className="box-office-note">Or call the box office and save £10 — <a href="tel:01619268992">0161 926 8992</a></p>
          <p style={{ marginTop: '2rem' }}>
            <a href="/" className="gold-text">← Back to Rock &amp; Pour</a>
          </p>
        </div>
      </section>
    </main>
  );
}
