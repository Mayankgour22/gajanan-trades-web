import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tiimg.tistatic.com',
      },
      {
        protocol: 'https',
        hostname: 'cpimg.tistatic.com',
      },
    ],
  },
};

export default nextConfig;
