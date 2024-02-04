import localFont from 'next/font/local';

export const XION_NEXT_FONT = localFont({
  src: [
    {
      path: './SUIT-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './SUIT-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './SUIT-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './SUIT-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './SUIT-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
});
