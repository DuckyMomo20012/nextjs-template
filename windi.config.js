import { DEFAULT_THEME as mantineDefaultTheme } from '@mantine/core';
import windiDefaultColors from 'windicss/colors';

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
    }
  });

  return newColorPalette;
};

export default {
  alias: {
    // ...
  },
  attributify: true,
  darkMode: 'class',
  extract: {
    exclude: ['node_modules', '.git', '.next/**/*'],
    include: ['**/*.{jsx,css}'],
  },
  plugins: [],
  shortcuts: {
    // ...
  },
  safelist: [
    // ...
  ],
  theme: {
    extend: {
      colors: {
        primary: windiDefaultColors.blue,
        ...convertColor(mantineDefaultTheme.colors, windiDefaultColors),
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        serif: ['Merriweather', 'ui-serif', 'Georgia'],
        mono: ['Space Mono', 'ui-monospace', 'SFMono-Regular'],
        heading: ['Quicksand'],
      },
    },
  },
};
