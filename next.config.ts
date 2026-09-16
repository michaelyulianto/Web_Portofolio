import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Web_Portofolio",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;