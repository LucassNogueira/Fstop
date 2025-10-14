import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sportmonks.com',
      },
      {
        protocol: 'https',
        hostname: '**.sportmonks.com',
      },
      {
        protocol: 'https',
        hostname: 'media.api-sports.io',
      },
    ],
  },
};

export default nextConfig;
