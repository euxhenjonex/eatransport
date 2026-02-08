import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
  images: {},
  experimental: {
    optimizePackageImports: ['next-intl', 'clsx', 'zod'],
  },
};

export default withNextIntl(nextConfig);
