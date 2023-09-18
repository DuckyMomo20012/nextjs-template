import {
  MantineProvider as BaseMantineProvider,
  type MantineBreakpointsValues,
  createTheme,
} from '@mantine/core';

const theme = createTheme({
  breakpoints: {
    xs: '30em',
    sm: '40em',
    md: '48em',
    lg: '64em',
    xl: '80em',
    '2xl': '96em',
  } as MantineBreakpointsValues,
});

const MantineProvider = ({ children }: { children?: React.ReactNode }) => {
  return <BaseMantineProvider theme={theme}>{children}</BaseMantineProvider>;
};

export { MantineProvider };
