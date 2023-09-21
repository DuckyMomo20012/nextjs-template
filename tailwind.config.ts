import type { Config } from 'tailwindcss';
import twDefaultColors from 'tailwindcss/colors';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: twDefaultColors.slate,
        grape: twDefaultColors.fuchsia,
      },
    },
    screens: {
      xs: '30em',
      sm: '40em',
      md: '48em',
      lg: '64em',
      xl: '80em',
      '2xl': '96em',
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
} satisfies Config;
