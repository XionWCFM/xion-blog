'use client';
import { ThemeProvider } from 'next-themes';

export const DarkModeProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
};
