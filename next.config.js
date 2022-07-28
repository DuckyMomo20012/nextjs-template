const WindiCSSWebpackPlugin = require('windicss-webpack-plugin');

/** @type {import('next').NextConfig} */

module.exports = {
  webpack: (config) => {
    config.plugins.push(new WindiCSSWebpackPlugin());
    return config;
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
};
