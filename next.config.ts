import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Static HTML export: deploy the `out/` folder to any host (Vercel, Netlify, Cloudflare Pages, S3...).
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
};

export default nextConfig;
