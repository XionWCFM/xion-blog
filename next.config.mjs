import remarkGfm from "remark-gfm";

import createMdx from "@next/mdx";
import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const baseNextConfig = {
  reactStrictMode: true
};

const withMdx = createMdx({
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: []
  }
});

const sentryWebpackPluginOptions = {
  silent: true,
  org: "devxion",
  project: "xionblog",
  authToken: process.env.SENTRY_AUTH_TOKEN
};

const sentryOptions = {
  widenClientFileUpload: true,
  transpileClientSDK: true,
  tunnelRoute: "/monitoring",
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
  authToken: process.env.SENTRY_AUTH_TOKEN
};

const nextConfigWithSentry = withSentryConfig(
  baseNextConfig,
  sentryWebpackPluginOptions,
  sentryOptions
);

const nextConfig = withMdx(nextConfigWithSentry);

export default nextConfig;
