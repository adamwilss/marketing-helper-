import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    deviceSizes: [390, 640, 768, 1080, 1200, 1920],
    imageSizes: [64, 128, 256, 384, 520],
  },
  poweredByHeader: false,
};

export default nextConfig;
