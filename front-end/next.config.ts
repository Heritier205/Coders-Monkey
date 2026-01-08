import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
  output: "export", // par hériter
  images: {
    unoptimized: true
  }
};

export default nextConfig;
