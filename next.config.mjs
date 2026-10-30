/** @type {import('next').NextConfig} */
const basePath = '/muziliu.github.io';

const nextConfig = {
  output: 'export',
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  webpack: (config, { dev, isServer }) => {
    // Disable filesystem cache in development to avoid OneDrive sync conflicts
    if (dev) {
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;
