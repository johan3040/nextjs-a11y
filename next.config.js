module.exports = {
  output: 'standalone',
  reactStrictMode: true,
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/u/**',
      }
    ]
  }
}