/** @type {import('next').NextConfig} */
import withPWA from "next-pwa";

const nextConfig = {
  reactStrictMode: false,
  // Remove swcMinify (invalid in this Next.js version config)
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },
  // Provide an empty turbopack config to avoid the "webpack vs turbopack" error
  turbopack: {},
};

// next-pwa wrapper config
const pwaConfig = withPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
});

export default pwaConfig(nextConfig);
