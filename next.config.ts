import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",            // untuk generate static HTML
  images: {
    unoptimized: true,         // matikan Image Optimization API
  },
};

export default nextConfig;