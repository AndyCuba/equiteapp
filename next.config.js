/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  // i18n: {
  //   locales: ['ru', 'en'],
  //   defaultLocale: 'en',
  // },
  images: {
    domains: ['localhost'],
    // next line is not required
    path: 'http://localhost:3000/images',
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
  env: {
    PUBLIC_URL: 'https://andycuba.github.io/equiteapp',
    assetPrefix: './',
  },
};
