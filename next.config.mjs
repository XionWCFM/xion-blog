import { withContentlayer } from 'next-contentlayer';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  webpack: (config) => {
    config.cache = false;
    return config;
  },
};

export default withContentlayer(nextConfig);
