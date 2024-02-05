import { SunIcon, MoonIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import React from 'react';

export const DarkModeButton = () => {
  const { setTheme, theme, systemTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);
  return (
    <button
      className=" flex justify-center items-center text-foreground/50"
      onClick={() => {
        if (theme === 'dark') {
          setTheme('light');
        } else {
          setTheme('dark');
        }
      }}
    >
      {mounted && theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};
