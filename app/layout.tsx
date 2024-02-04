import type { Metadata } from 'next';
import { XION_NEXT_FONT } from '@/src/app/style/font';
import './globals.css';

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
    <html lang="en">
      <body className={XION_NEXT_FONT.className}>{children}</body>
    </html>
  );
}
