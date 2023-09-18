/** @type {import('next').NextConfig} */

export default {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'http.cat',
        port: '',
        pathname: '/**',
      },
    ],
  },
};
