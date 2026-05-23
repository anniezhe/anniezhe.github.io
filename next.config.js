/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true},
  // Fixes the ESM / CommonJS 'useMessageFormatter' crash on Netlify
  transpilePackages: [
    '@nextui-org/react',
    '@react-aria/i18n',
    'react-aria'
  ],
  // 2. Add the Webpack override block to fix the useMessageFormatter error
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = [
        ...(config.externals || []),
        '@react-aria/i18n',
        'react-aria'
      ];
    }
    return config;
  }
}

module.exports = nextConfig
