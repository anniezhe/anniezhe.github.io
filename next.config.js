/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  
  // 1. Force Next.js to compile your site into pure browser-ready assets
  output: 'export',

   // 2. Fixes Netlify CDN sub-page routing for static HTML exports
  trailingSlash: true,
  publicRuntimeConfig: {
    GA_ID: 'G-LLWQ3HNLG9',
  },
  
  // 3. Maintain standard transpile configurations
  transpilePackages: [
    '@nextui-org/react',
    '@react-aria/i18n',
    'react-aria'
  ]
};

module.exports = nextConfig;
