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

  // 2. Safely alias the package root using official exposed bundle configurations
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      // The trailing "$" forces Webpack to match only the exact package entry point,
      // avoiding validation exceptions and bypassing the useMessageFormatter error completely!
      '@react-aria/i18n$': require.resolve('@react-aria/i18n')
    };
    return config;
  }
};

module.exports = nextConfig;
