import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rockandpour.co.uk"),
  title: "Rock & Pour | Premium Mobile Cocktail Bar for Weddings, Parties and Events",
  description:
    "Rock & Pour delivers premium mobile cocktail bar experiences for weddings, private parties and corporate events across the UK.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Rock & Pour | Premium Mobile Cocktail Bar",
    description:
      "Premium mobile cocktail bar experiences for weddings, private parties and corporate events across the UK.",
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
    title: "Rock & Pour | Premium Mobile Cocktail Bar",
    description:
      "Premium mobile cocktail bar experiences for weddings, private parties and corporate events across the UK.",
    images: ["/POSTER.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Rock & Pour — Live Band Night at The Bowdon Rooms",
  "description": "One ticket, all inclusive. Live rock band and unlimited drinks at The Bowdon Rooms, Altrincham. £55 per ticket.",
  "startDate": "2026-04-10T19:30:00",
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "location": {
    "@type": "Place",
    "name": "The Bowdon Rooms",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Altrincham",
      "addressRegion": "Greater Manchester",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@300;400;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
