/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Khorasan-Sunrise',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'pexels.com',
      },
    ],
  },
}

module.exports = nextConfig
