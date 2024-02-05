import './globals.css';
import Layout from '@/src/widget/layout/ui/layout';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { XION_NEXT_FONT } from '@/src/app/style/font';
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';
import { ENV } from '@/src/shared/constant/environment';
import { Providers } from '@/src/app/provider/providers';
export const metadata: Metadata = {
  title: 'xion blog',
  description: 'xion blog',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${XION_NEXT_FONT.className}`}>
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
