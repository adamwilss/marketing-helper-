import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rockandpour.co.uk"),
  title: "Rock & Pour | Live Music & Premium Drinks Night at The Bowdon Rooms",
  description:
    "Rock & Pour is a night of live rock music and free premium drinks at The Bowdon Rooms. Enjoy incredible bands and a unique drinks experience.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Rock & Pour | Live Music & Premium Drinks Night at The Bowdon Rooms",
    description:
      "Rock & Pour is a night of live rock music and free premium drinks at The Bowdon Rooms. Enjoy incredible bands and a unique drinks experience.",
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
    title: "Rock & Pour | Live Music & Premium Drinks Night at The Bowdon Rooms",
    description:
      "Rock & Pour is a night of live rock music and free premium drinks at The Bowdon Rooms. Enjoy incredible bands and a unique drinks experience.",
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
        {children}
      </body>
    </html>
  );
}
