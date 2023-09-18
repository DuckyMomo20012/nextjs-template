import { DEFAULT_THEME as mantineDefaultTheme } from '@mantine/core';
import type { Config } from 'tailwindcss';
import twDefaultColors from 'tailwindcss/colors';

// Don't override WindiCSS colors
const convertColor = (mantineColors, windiColors) => {
  const newColorPalette = {};
  Object.keys(mantineColors).forEach((colorName) => {
    if (windiColors[colorName] instanceof Object === false) {
      const newColor = {};
      mantineColors[colorName].forEach((_colorHex, index) => {
        newColor[`${index * 100}`] = mantineColors[colorName][index];
      });
      newColor['50'] = newColor['0'];
      delete newColor['0'];

      newColorPalette[colorName] = newColor;
    }
  });

  return newColorPalette;
};

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ...convertColor(mantineDefaultTheme.colors, twDefaultColors),
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
} satisfies Config;
