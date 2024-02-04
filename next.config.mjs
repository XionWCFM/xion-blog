import { withSentryConfig } from '@sentry/nextjs';
import { withContentlayer } from 'next-contentlayer';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  webpack: (config) => {
    config.cache = false;
    return config;
  },
};

export default withSentryConfig(
  withContentlayer(nextConfig),
  {
    silent: true,
    org: 'devxion',
    project: 'xionblog',
  },
  {
    widenClientFileUpload: true,

    transpileClientSDK: true,

    tunnelRoute: '/monitoring',

    hideSourceMaps: true,

    disableLogger: true,

    automaticVercelMonitors: true,
    authToken: process.env.SENTRY_AUTH_TOKEN,
  },
);
