import type { ColorScheme } from '@mantine/core';
import {
  MantineProvider as BaseMantineProvider,
  ColorSchemeProvider,
  Global,
  MantineTheme,
  DEFAULT_THEME as mantineDefaultTheme,
} from '@mantine/core';
import { useEffect, useState } from 'react';

// const convertBreakpoint = (breakpoint: ThemeType): MantineSizes => {
//   const convertedBreakpoint = {} as MantineSizes;
//   Object.keys(breakpoint).forEach((size) => {
//     // NOTE: Have to convert 'px' to 'rem'
//     convertedBreakpoint[size] = rem(breakpoint[size]);
//   });
//   return convertedBreakpoint;
// };

// Override Mantine colors
// const convertColor = (windiColors) => {
//   const convertedColor = {} as MantineThemeColors;
//   Object.keys(windiColors).forEach((color) => {
//     if (color === 'lightBlue') {
//       color = 'sky';
//     } else if (color === 'warmGray') {
//       color = 'stone';
//     } else if (color === 'trueGray') {
//       color = 'neutral';
//     } else if (color === 'coolGray') {
//       color = 'gray';
//     } else if (color === 'blueGray') {
//       color = 'slate';
//     } else if (color === 'zink') {
//       color = 'zinc';
//     }

//     if (windiColors[color] instanceof Object) {
//       convertedColor[color] = Object.values(windiColors[color]);
//     }
//   });
//   // NOTE: WindiCSS dark color is too dark
//   convertedColor.dark = mantineDefaultTheme.colors.dark;

//   return convertedColor;
// };

// const convertFontSize = (fontSize): MantineSizes => {
//   const convertedFontSize = {} as MantineSizes;
//   Object.keys(fontSize).forEach((size) => {
//     // NOTE: Don't have to convert 'rem' to 'px'
//     convertedFontSize[size] = fontSize[size][0];
//   });
//   return convertedFontSize;
// };

const theme: MantineTheme = {
  ...mantineDefaultTheme,
  breakpoints: {
    ...mantineDefaultTheme.breakpoints,
  },
  colors: {
    ...mantineDefaultTheme.colors,
  },
  defaultRadius: 'md',
  primaryColor: 'blue',
  primaryShade: 7,
  fontSizes: {
    ...mantineDefaultTheme.fontSizes,
  },
  radius: {
    ...mantineDefaultTheme.radius,
    // NOTE: WindiCSS border radius messed up with Mantine
    // ...windiDefaultTheme.borderRadius,
  },
  lineHeight: mantineDefaultTheme.lineHeight,
  loader: 'oval',
  shadows: {
    ...mantineDefaultTheme.shadows,
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
