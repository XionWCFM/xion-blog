export const CATEGORIES = [
  'react',
  'nextjs',
  'javascript',
  'css',
  'typescript',
] as const;

export type Categories = (typeof CATEGORIES)[number];
