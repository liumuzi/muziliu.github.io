/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
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
