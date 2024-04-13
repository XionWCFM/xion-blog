import type { Metadata } from "next";

import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";

import { Providers } from "~/app/provider/providers";
import { XION_NEXT_FONT } from "~/app/style/font";

import { Layout } from "~/widgets/layout";

import { ENV } from "~/shared/constant/environment/env";

import "../src/app/style/globals.css";

export const metadata: Metadata = {
  title: {
    default: "xionhub",
    template: "%s - xionhub"
  },
  description: "xion blog",
  verification: {
    google: "DRsMbGmtMLi04daO_7HJa3kCHtYnVaFl4dUXNzyGm1c"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${XION_NEXT_FONT.className} `}>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
        <Analytics />
        <GoogleTagManager gtmId={ENV.gtmId} />
        <GoogleAnalytics gaId={ENV.gaId} />
      </body>
    </html>
  );
}
