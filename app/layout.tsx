import './globals.css';
import Layout from '@/src/shared/common-ui/layout';

import type { Metadata } from 'next';
import { XION_NEXT_FONT } from '@/src/app/style/font';
import { DarkModeProvider } from '@/src/app/provider/dark-mode-provider';
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';
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
        <DarkModeProvider>
          <Layout>{children}</Layout>
        </DarkModeProvider>
      </body>
    </html>
  );
}
