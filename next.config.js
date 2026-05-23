/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  
  // Transpile NextUI configuration settings safely
  transpilePackages: [
    '@nextui-org/react',
    '@react-aria/i18n',
    'react-aria'
  ],

  ...(process.env.NETLIFY === 'true' && {
    webpack: (config, { isServer }) => {
      if (isServer) {
        config.externals = [
          ...(config.externals || []),
          '@react-aria/i18n',
          '@react-aria/ssr',
          '@react-aria/util',
          'react-aria'
        ];
      }
      return config;
    }
  })
};

module.exports = nextConfig;
