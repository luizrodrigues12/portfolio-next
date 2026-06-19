import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
};

module.exports = {
  allowedDevOrigins: ["100.86.55.76"],
};

export default nextConfig;
