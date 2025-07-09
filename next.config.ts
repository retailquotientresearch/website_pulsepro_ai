import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Essential for deployment outside Vercel
  output: 'standalone',
  
  // Performance optimizations (Next.js 15 defaults)
  compress: true,
  
  // Image optimization (enhanced in Next.js 15)
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60, // Cache images for 60 seconds minimum
    dangerouslyAllowSVG: false, // Security best practice
  },
  
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
        ],
      },
    ]
  },
  
  // Next.js 15 specific optimizations
  cacheMaxMemorySize: 0, // Disable memory caching in production
};

export default nextConfig;