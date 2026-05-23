const webpack = require('webpack');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  
  // 1. Maintain your core NextUI transpile configurations
  transpilePackages: [
    '@nextui-org/react',
    '@react-aria/i18n',
    'react-aria'
  ],

  // 2. FOR NEXT.JS 14: This property must sit inside the experimental object block!
  // This loose flag intercepts broken modules and auto-wraps them for the server runtime!
  experimental: {
    esmExternals: 'loose'
  }
};

module.exports = nextConfig;
