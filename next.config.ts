import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/3d-objects/:path*",
        destination: "https://space.coinyou.io/3d-objects/:path*",
      },
    ];
  },
};

export default nextConfig;
