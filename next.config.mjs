import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

initOpenNextCloudflareForDev();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Cloudflare Pages does not run the Next.js image optimisation server;
    // serve images as-is and let Cloudflare's Polish handle optimisation.
    unoptimized: true,
  },
};

export default nextConfig;
