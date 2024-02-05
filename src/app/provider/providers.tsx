'use client';
import { DarkModeProvider } from '@/src/features/darkmode/dark-mode-provider';
import React from 'react';

export const Providers = ({ children }: React.PropsWithChildren) => {
  return <DarkModeProvider>{children}</DarkModeProvider>;
};
