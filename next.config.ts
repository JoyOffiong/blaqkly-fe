import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  images: {
    remotePatterns: [new URL('https://www.nakeddresses.com/**')],

}};

export default nextConfig;
