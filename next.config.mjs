/** @type {import('next').NextConfig} */

import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {
  output: 'export',
  distDir: 'build',
  experimental: {
    typedRoutes: true,
  },
};

export default withVanillaExtract(nextConfig);
