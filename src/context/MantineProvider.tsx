import {
  MantineProvider as BaseMantineProvider,
  type MantineBreakpointsValues,
  createTheme,
} from '@mantine/core';
import twDefaultColors from 'tailwindcss/colors';

const convertColor = (twColors) => {
  const convertedColor = {};
  Object.keys(twColors)
    .filter(
      (keyColor) =>
        [
          'lightBlue',
          'warmGray',
          'trueGray',
          'coolGray',
          'blueGray',
          'zink',
        ].includes(keyColor) === false,
    )
    .forEach((color) => {
      if (twColors[color] instanceof Object) {
        convertedColor[color] = Object.values(twColors[color]);
      }
    });

  return convertedColor;
};

const theme = createTheme({
  breakpoints: {
    xs: '30em',
    sm: '40em',
    md: '48em',
    lg: '64em',
    xl: '80em',
    '2xl': '96em',
  } as MantineBreakpointsValues,
  colors: {
    ...convertColor(twDefaultColors),
  },
});

const MantineProvider = ({ children }: { children?: React.ReactNode }) => {
  return <BaseMantineProvider theme={theme}>{children}</BaseMantineProvider>;
};

export { MantineProvider };
