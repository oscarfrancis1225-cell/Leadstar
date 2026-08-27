import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["host.docker.internal", "172.17.208.1"],
  turbopack: {
    root: process.cwd(),
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/guides",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/life-insurance-at-every-stage",
        destination: "/blog/how-much-life-insurance-do-i-need",
        permanent: true,
      },
      {
        source: "/blog/understanding-medicare",
        destination: "/blog/turning-65-medicare-timeline",
        permanent: true,
      },
      {
        source: "/blog/retirement-planning-starting-point",
        destination: "/blog/retirement-income-transition",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
