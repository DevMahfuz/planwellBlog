/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "planwell.ghost.io",
      },
    ],
  },
};

export default nextConfig;
