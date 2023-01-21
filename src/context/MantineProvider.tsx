import {
  MantineProvider as BaseMantineProvider,
  ColorSchemeProvider,
  Global,
  MantineTheme,
  DEFAULT_THEME as mantineDefaultTheme,
} from '@mantine/core';
import type { ColorScheme, MantineThemeColors } from '@mantine/core';
import { useEffect, useState } from 'react';
import windiDefaultColors from 'windicss/colors';
import windiDefaultTheme from 'windicss/defaultTheme';
import type { DefaultColors } from 'windicss/types/config/colors';

const convertBreakpoint = (breakpoint) => {
  const convertedBreakpoint = {};
  Object.keys(breakpoint).forEach((size) => {
    // NOTE: Have to remove 'px' from breakpoint and convert to number
    convertedBreakpoint[size] = breakpoint[size].replace('px', '') * 1;
  });
  return convertedBreakpoint;
};

type ConvertedMantineColors = Omit<
  {
    [k in keyof DefaultColors]: MantineThemeColors[keyof MantineThemeColors];
  },
  | 'lightBlue'
  | 'warmGray'
  | 'trueGray'
  | 'coolGray'
  | 'blueGray'
  | 'zink'
  | 'inherit'
  | 'transparent'
  | 'current'
  | 'black'
  | 'white'
>;

// Override Mantine colors
const convertColor = (windiColors: DefaultColors) => {
  const convertedColor = {} as ConvertedMantineColors;
  Object.keys(windiColors).forEach((color) => {
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

    if (windiColors[color] instanceof Object) {
      convertedColor[color] = Object.values(windiColors[color]);
    }
  });
  // NOTE: WindiCSS dark color is too dark
  convertedColor.dark = convertedColor.zinc;

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
    ...convertBreakpoint(windiDefaultTheme.screens), // WindiCSS
  },
  colors: {
    ...mantineDefaultTheme.colors,
    ...convertColor(windiDefaultColors),
  },
  defaultRadius: 'md',
  black: windiDefaultColors.black as string,
  white: windiDefaultColors.white as string,
  primaryColor: 'blue',
  fontSizes: {
    ...mantineDefaultTheme.fontSizes,
    ...convertFontSize(windiDefaultTheme.fontSize),
  },
  radius: {
    ...mantineDefaultTheme.radius,
    // NOTE: WindiCSS border radius messed up with Mantine
    // ...windiDefaultTheme.borderRadius,
  },
  fontFamily: `Inter,${mantineDefaultTheme.fontFamily}`,
  fontFamilyMonospace: `"Space Mono",${mantineDefaultTheme.fontFamilyMonospace}`,
  headings: {
    ...mantineDefaultTheme.headings,
    fontFamily: `Quicksand,${mantineDefaultTheme.headings.fontFamily}`,
  },
  lineHeight: mantineDefaultTheme.lineHeight,
  loader: 'oval',
  shadows: {
    ...mantineDefaultTheme.shadows,
    ...windiDefaultTheme.boxShadow,
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
