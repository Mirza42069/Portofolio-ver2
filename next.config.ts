import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React Compiler for automatic optimizations
  reactStrictMode: true,

  // Optimize package imports for faster builds
  experimental: {
    optimizePackageImports: [
      "@phosphor-icons/react",
      "radix-ui",
      "@base-ui/react",
    ],
  },

  // Image optimization settings
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },

  // Reduce powered by header
  poweredByHeader: false,

  // Enable compression
  compress: true,
};

export default nextConfig;
