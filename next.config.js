/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    // camelCase style names from css modules
    config.module.rules
      .find(({oneOf}) => !!oneOf).oneOf
      .filter(({use}) => JSON.stringify(use)?.includes('css-loader'))
      .reduce((acc, {use}) => acc.concat(use), [])
      .forEach(({options}) => {
        if (options.modules) {
          options.modules.exportLocalsConvention = 'camelCase';
        }
      });

    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's.gravatar.com',
      }
    ]
  }
}

module.exports = nextConfig
