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

  // Injects Webpack overrides conditionally to prevent local Next.js schema validation warnings
  ...(process.env.NODE_ENV === 'production' && {
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
  })
};

module.exports = nextConfig;
