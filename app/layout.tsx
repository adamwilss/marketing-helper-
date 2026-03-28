import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Navbar } from "@/components/ui/navbar";
import { ScrollRevealInit } from "@/components/ui/scroll-reveal-init";
import { Bebas_Neue, Montserrat, Playfair_Display } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bebas",
});

const montserrat = Montserrat({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const playfairDisplay = Playfair_Display({
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

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
        url: "/POSTER.webp",
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
    images: ["/POSTER.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MusicEvent",
  "name": "Rock & Pour — Live Music & All-Inclusive Drinks Night",
  "alternateName": "Rock and Pour Manchester",
  "description": "Rock & Pour is a premium all-inclusive live music and drinks experience at The Bowdon Rooms in Manchester. Enjoy live rock bands, unlimited premium beers, wines, and spirits for one fixed price of £55.",
  "startDate": "2026-04-10T19:30:00",
  "endDate": "2026-04-10T23:30:00",
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
    <html lang="en" className={`${bebasNeue.variable} ${montserrat.variable} ${playfairDisplay.variable}`}>
      <head>
        <meta name="google-site-verification" content="qgMgazHhO3cFsLm_X6377LjIGZBp45KAXqD6pE_VGvM" />
        <link rel="preload" href="/title-logo-transparent.webp" as="image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <ScrollRevealInit />
        {children}
        <Analytics />
        <SpeedInsights />
        <Script
          id="clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","w1aatpn5n9");` }}
        />
      </body>
    </html>
  );
}
