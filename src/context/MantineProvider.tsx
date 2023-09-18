import { MantineProvider as BaseMantineProvider } from '@mantine/core';

const MantineProvider = ({ children }: { children?: React.ReactNode }) => {
  return <BaseMantineProvider>{children}</BaseMantineProvider>;
};

export { MantineProvider };
