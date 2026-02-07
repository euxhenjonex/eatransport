import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
  images: {},
  experimental: {
    // Optimize barrel imports for faster builds and smaller bundles
    optimizePackageImports: ['next-intl', '@react-google-maps/api', 'clsx', 'zod'],
  },
};

export default withNextIntl(nextConfig);
