export const CATEGORIES = [
  'react',
  'nextjs',
  'javascript',
  'css',
  'typescript',
  '회고',
] as const;

export type Categories = (typeof CATEGORIES)[number];
