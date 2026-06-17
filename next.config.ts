import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d27735ao2xxhhe.cloudfront.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.adecco.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.intracen.org",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
