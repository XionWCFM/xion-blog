"use client";

import React from "react";

import { DarkModeProvider } from "~/features/darkmode";

export const Providers = ({ children }: React.PropsWithChildren) => {
  return <DarkModeProvider>{children}</DarkModeProvider>;
};
