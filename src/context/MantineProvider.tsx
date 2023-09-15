import type { ColorScheme } from '@mantine/core';
import {
  MantineProvider as BaseMantineProvider,
  ColorSchemeProvider,
  Global,
  MantineTheme,
  DEFAULT_THEME as mantineDefaultTheme,
  rem,
} from '@mantine/core';
import { useEffect, useState } from 'react';
import twDefaultColors from 'tailwindcss/colors';
import twDefaultTheme from 'tailwindcss/defaultTheme';

const convertBreakpoint = (breakpoint) => {
  const convertedBreakpoint = {};
  Object.keys(breakpoint).forEach((size) => {
    // NOTE: Have to convert 'px' to 'rem'
    convertedBreakpoint[size] = rem(breakpoint[size]);
  });
  return convertedBreakpoint;
};

// Override Mantine colors
const convertColor = (twColors) => {
  const convertedColor = {};
  Object.keys(twColors).forEach((color) => {
    if (color === 'lightBlue') {
      color = 'sky';
    } else if (color === 'warmGray') {
      color = 'stone';
    } else if (color === 'trueGray') {
      color = 'neutral';
    } else if (color === 'coolGray') {
      color = 'gray';
    } else if (color === 'blueGray') {
      color = 'slate';
    } else if (color === 'zink') {
      color = 'zinc';
    }

    if (twColors[color] instanceof Object) {
      convertedColor[color] = Object.values(twColors[color]);
    }
  });

  return convertedColor;
};

const convertFontSize = (fontSize) => {
  const convertedFontSize = {};
  Object.keys(fontSize).forEach((size) => {
    // NOTE: Don't have to convert 'rem' to 'px'
    convertedFontSize[size] = fontSize[size][0];
  });
  return convertedFontSize;
};

const theme: MantineTheme = {
  ...mantineDefaultTheme,
  breakpoints: {
    ...mantineDefaultTheme.breakpoints,
    ...convertBreakpoint(twDefaultTheme.screens), // TailwindCSS
  },
  colors: {
    ...mantineDefaultTheme.colors,
    ...convertColor(twDefaultColors),
  },
  defaultRadius: 'md',
  black: twDefaultColors.black as string,
  white: twDefaultColors.white as string,
  primaryColor: 'blue',
  primaryShade: 7,
  fontSizes: {
    ...mantineDefaultTheme.fontSizes,
    ...convertFontSize(twDefaultTheme.fontSize),
  },
  radius: {
    ...mantineDefaultTheme.radius,
    // NOTE: TailwindCSS border radius messed up with Mantine
    // ...twDefaultTheme.borderRadius,
  },
  lineHeight: mantineDefaultTheme.lineHeight,
  loader: 'oval',
  shadows: {
    ...mantineDefaultTheme.shadows,
    ...twDefaultTheme.boxShadow,
  },
};

const MyGlobalStyles = () => {
  return (
    <Global
      styles={{
        'body.dark': {
          img: {
            filter: 'brightness(.8) contrast(1.2)',
          },
        },
      }}
    />
  );
};

const MantineProvider = ({ children }: { children?: React.ReactNode }) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useEffect(() => {
    if (colorScheme === 'dark') document.body.classList.add('dark');
    else document.body.classList.remove('dark');
  }, [colorScheme]);
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <BaseMantineProvider
        theme={{ ...theme, colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <MyGlobalStyles />
        {children}
      </BaseMantineProvider>
    </ColorSchemeProvider>
  );
};

export { MantineProvider };
