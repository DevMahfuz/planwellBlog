/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "demo.ghost.io",
      },
    ],
  },
};

export default nextConfig;
