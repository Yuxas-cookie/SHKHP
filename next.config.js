/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  basePath: process.env.NODE_ENV === 'production' ? '/SHKHP' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/SHKHP/' : '',
};

module.exports = nextConfig;