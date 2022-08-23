/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  devIndicators: {
    buildActivity: false,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "_vars.scss";`,
  },
  experimental: {
    images: {
      unoptimized: true,
    },
  },
};

module.exports = nextConfig;
