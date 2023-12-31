/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "a0.muscache.com",
      },
      // {
      //   protocol: "https",
      //   hostname: "lh3.googleusercontent.com",
      // },
    ],
    domains: ["lh3.googleusercontent.com"],
  },
};

module.exports = nextConfig;
