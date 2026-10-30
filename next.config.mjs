/** @type {import('next').NextConfig} */
// GitHub Pages hosts this project under a path; Vercel hosts it at the domain root.
const basePath = process.env.GITHUB_ACTIONS === 'true' ? '/muziliu.github.io' : undefined;

const nextConfig = {
  output: 'export',
  ...(basePath ? { basePath } : {}),
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath ?? '',
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
