/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  transpilePackages: ["geist"],

  // Image optimization configuration
  images: {
    domains: ['res.cloudinary.com']
  },

  // Disable eslint during build
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Optional: Configure trailingSlash if needed
  trailingSlash: false,

  // Optional: Add headers for security and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },
};

export default config;
