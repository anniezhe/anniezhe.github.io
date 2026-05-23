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
}

module.exports = nextConfig
