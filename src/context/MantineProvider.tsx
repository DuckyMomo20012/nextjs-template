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
    dark: [
      '#f8fafc',
      '#f1f5f9',
      '#e2e8f0',
      '#cbd5e1',
      '#94a3b8',
      '#64748b',
      '#475569',
      '#334155',
      '#1e293b',
      '#0f172a',
      '#020617',
    ],
    grape: [
      '#fdf4ff',
      '#fae8ff',
      '#f5d0fe',
      '#f0abfc',
      '#e879f9',
      '#d946ef',
      '#c026d3',
      '#a21caf',
      '#86198f',
      '#701a75',
      '#4a044e',
    ],
  },
});

const MantineProvider = ({ children }: { children?: React.ReactNode }) => {
  return <BaseMantineProvider theme={theme}>{children}</BaseMantineProvider>;
};

export { MantineProvider };
