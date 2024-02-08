import { Stack } from '@mantine/core';

const AuthLayout = ({ children }: { children?: React.ReactNode }) => {
  return <Stack className="h-screen">{children}</Stack>;
};

export default AuthLayout;
