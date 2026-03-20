import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Navbar } from "@/components/ui/navbar";
import { SmokeBackground } from "@/components/ui/spooky-smoke-animation";
import { ScrollRevealInit } from "@/components/ui/scroll-reveal-init";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rockandpour.co.uk"),
  title: "Rock & Pour | Live Rock Music & Premium Drinks Night at The Bowdon Rooms",
  description:
    "Rock & Pour is a premium live music and drinks experience at The Bowdon Rooms in Manchester. Enjoy live rock bands with included premium drinks.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Rock & Pour | Live Rock Music & Premium Drinks Night at The Bowdon Rooms",
    description:
      "Rock & Pour is a premium live music and drinks experience at The Bowdon Rooms in Manchester. Enjoy live rock bands with included premium drinks.",
    url: "https://www.rockandpour.co.uk",
    siteName: "Rock & Pour",
    type: "website",
    images: [
      {
        url: "/POSTER.png",
        width: 520,
        height: 737,
        alt: "Rock & Pour — Live Music & All-Inclusive Drinks at The Bowdon Rooms",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rock & Pour | Live Rock Music & Premium Drinks Night at The Bowdon Rooms",
    description:
      "Rock & Pour is a premium live music and drinks experience at The Bowdon Rooms in Manchester. Enjoy live rock bands with included premium drinks.",
    images: ["/POSTER.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MusicEvent",
  "name": "Rock & Pour",
  "description": "A night of live rock music with free premium drinks included throughout the evening at The Bowdon Rooms, Altrincham.",
  "startDate": "2026-04-10T19:30:00",
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "location": {
    "@type": "Place",
    "name": "The Bowdon Rooms",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "The Firs",
      "addressLocality": "Bowdon, Altrincham",
      "postalCode": "WA14 2TQ",
      "addressCountry": "GB"
    }
  },
  "offers": {
    "@type": "Offer",
    "url": "https://www.rockandpour.co.uk",
    "price": "55",
    "priceCurrency": "GBP",
    "availability": "https://schema.org/InStock",
    "validFrom": "2026-01-01"
  },
  "performer": {
    "@type": "PerformingGroup",
    "name": "Live Rock Bands"
  },
  "organizer": {
    "@type": "Organization",
    "name": "Rock & Pour",
    "url": "https://www.rockandpour.co.uk"
  },
  "image": "https://www.rockandpour.co.uk/POSTER.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="qgMgazHhO3cFsLm_X6377LjIGZBp45KAXqD6pE_VGvM" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@300;400;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <div className="site-smoke">
          <SmokeBackground smokeColor="#9A5000" />
        </div>
        <Navbar />
        <ScrollRevealInit />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
