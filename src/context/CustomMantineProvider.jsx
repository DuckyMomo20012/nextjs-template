import windiColors from 'windicss/colors';
import windiDefaultTheme from 'windicss/defaultTheme';
import {
  MantineProvider,
  DEFAULT_THEME as mantineDefaultTheme,
} from '@mantine/core';
import { CustomColorSchemeProvider } from './CustomColorSchemeProvider.jsx';

const convertBreakpoint = (breakpoint) => {
  const convertedBreakpoint = {};
  Object.keys(breakpoint).forEach((size) => {
    // NOTE: Have to remove 'px' from breakpoint and convert to number
    convertedBreakpoint[size] = breakpoint[size].replace('px', '') * 1;
  });
  return convertedBreakpoint;
};

const convertColor = (colors) => {
  const convertedColor = {};
  Object.keys(colors).forEach((color) => {
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

    if (colors[color] instanceof Object) {
      convertedColor[color] = Object.values(colors[color]);
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

const theme = {
  breakpoints: {
    ...mantineDefaultTheme.breakpoints,
    ...convertBreakpoint(windiDefaultTheme.screens), // WindiCSS
  },
  colors: convertColor(windiColors),
  defaultRadius: 'md',
  black: windiColors.black,
  white: windiColors.white,
  primaryColor: 'blue',
  fontSizes: {
    ...mantineDefaultTheme.fontSizes,
    ...convertFontSize(windiDefaultTheme.fontSize),
  },
  radius: {
    ...mantineDefaultTheme.radius,
    // ...windiDefaultTheme.borderRadius,
  },
  fontFamily:
    'Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
  fontFamilyMonospace:
    '"Space Mono", ui-monospace,SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;',
  headings: {
    fontFamily:
      'Barlow, ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
  },
  lineHeight: mantineDefaultTheme.lineHeight,
  loader: 'oval',
  shadows: {
    ...mantineDefaultTheme.shadows,
    ...windiDefaultTheme.boxShadow,
  },
};

const CustomMantineProvider = ({ children }) => {
  return (
    <CustomColorSchemeProvider>
      <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
        {children}
      </MantineProvider>
    </CustomColorSchemeProvider>
  );
};

export { CustomMantineProvider };
