import type { Metadata } from 'next';
import { XION_NEXT_FONT } from '@/src/app/style/font';
import './globals.css';
import Layout from '@/src/shared/common-ui/layout';
import { DarkModeProvider } from '@/src/shared/common-ui/darkmode/dark-mode-provider';

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
      <body className={XION_NEXT_FONT.className}>
        <DarkModeProvider>
          <Layout>{children}</Layout>
        </DarkModeProvider>
      </body>
    </html>
  );
}
