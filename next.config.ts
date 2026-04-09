import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    deviceSizes: [390, 640, 768, 1080, 1200, 1920],
    imageSizes: [64, 128, 256, 384, 520],
  },
  poweredByHeader: false,
  async redirects() {
    return [
      { source: '/the-experience', destination: '/first-time-guide', permanent: true },
      { source: '/faq', destination: '/first-time-guide', permanent: true },
      { source: '/night-out-tips', destination: '/first-time-guide', permanent: true },
      { source: '/drinks-guide', destination: '/premium-selection', permanent: true },
      { source: '/pricing', destination: '/how-to-budget-night-out', permanent: true },
      { source: '/vs-normal-night-out', destination: '/how-to-budget-night-out', permanent: true },
      { source: '/about', destination: '/our-story', permanent: true },
      { source: '/events', destination: '/', permanent: true },
      { source: '/bowdon-rooms', destination: '/', permanent: true },
      { source: '/bands', destination: '/indie-rock-night', permanent: true },
      { source: '/live-music-guide', destination: '/indie-rock-night', permanent: true },
      { source: '/why-live-music-matters', destination: '/indie-rock-night', permanent: true },
      { source: '/rock-music-fans', destination: '/indie-rock-night', permanent: true },
      { source: '/indie-music-fans', destination: '/indie-rock-night', permanent: true },
      { source: '/90s-nostalgia', destination: '/britpop-lovers', permanent: true },
      { source: '/altrincham-nights-out', destination: '/cheshire-events', permanent: true },
      { source: '/manchester-nights-out', destination: '/best-manchester-venues', permanent: true },
      { source: '/manchester-live-music-events', destination: '/best-manchester-venues', permanent: true },
      { source: '/date-night-manchester', destination: '/best-manchester-venues', permanent: true },
      { source: '/best-live-band-venues-uk', destination: '/best-manchester-venues', permanent: true },
      { source: '/date-night', destination: '/birthday-celebration-ideas', permanent: true },
      { source: '/girls-night-out', destination: '/birthday-celebration-ideas', permanent: true },
      { source: '/lads-night-out', destination: '/birthday-celebration-ideas', permanent: true },
      { source: '/stag-do-ideas', destination: '/birthday-celebration-ideas', permanent: true },
      { source: '/hen-party-ideas', destination: '/birthday-celebration-ideas', permanent: true },
      { source: '/reunion-night-out', destination: '/birthday-celebration-ideas', permanent: true },
      { source: '/group-night-out-ideas', destination: '/birthday-celebration-ideas', permanent: true },
      { source: '/party-planning', destination: '/birthday-celebration-ideas', permanent: true },
      { source: '/group-events', destination: '/team-building-events', permanent: true },
      { source: '/office-night-out', destination: '/corporate-events', permanent: true },
      { source: '/vs-nightclub', destination: '/all-inclusive-drinks-events', permanent: true },
      { source: '/vs-pub-crawl', destination: '/all-inclusive-drinks-events', permanent: true },
      { source: '/alternative-to-nightclubs', destination: '/all-inclusive-drinks-events', permanent: true },
      { source: '/best-cocktail-venues-uk', destination: '/best-wine-venues-uk', permanent: true },
    ];
  },
};

export default nextConfig;
