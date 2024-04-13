import type { Config } from "tailwindcss";

import typography from "@tailwindcss/typography";
import xionPlugin from "@xionhub/tailwind-plugin";
import { XION_STYLE } from "@xionhub/token";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    ...XION_STYLE,
    extend: {}
  },
  plugins: [xionPlugin, typography],
  variants: {
    typography: ["dark"]
  },
  darkMode: ["class"]
};
export default config;
