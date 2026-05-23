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

  // 2. Clear out all old alias/experimental hacks and use this clean replacement rule
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.plugins.push(
        new webpack.NormalModuleReplacementPlugin(
          /@react-aria\/i18n\/dist\/import\.mjs$/,
          require.resolve('@react-aria/i18n')
        )
      );
    }
    return config;
  }
};

module.exports = nextConfig;
