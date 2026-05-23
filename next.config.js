/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  
  // 1. Core NextUI transpile configurations
  transpilePackages: [
    '@nextui-org/react',
    '@react-aria/i18n',
    'react-aria'
  ],

  // 2. CORRECT ROOT LEVEL: Place this exactly here, completely outside of experimental!
  serverExternalPackages: ['@react-aria/i18n', 'react-aria']
};

module.exports = nextConfig;
