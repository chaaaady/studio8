import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable ESLint errors from failing the production build (keeps warnings)
  eslint: {
    ignoreDuringBuilds: true,
  },
  /* config options here */
};

export default nextConfig;
