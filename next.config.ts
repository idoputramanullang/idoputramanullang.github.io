import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",          // agar build statik
  images: { unoptimized: true }, // next/image bisa pakai tanpa server
  assetPrefix: "./",          // penting agar CSS/JS jalan di GitHub Pages
};

export default nextConfig;