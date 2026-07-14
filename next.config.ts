import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
    ],
  },
  allowedDevOrigins: ["*.replit.dev", "*.repl.co", "*.sisko.replit.dev", "localhost", "127.0.0.1"],
};

export default nextConfig;
