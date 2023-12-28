'use client';

import '@/styles/globals.css';

import { Notifications } from '@mantine/notifications';
import NextNProgress from 'nextjs-progressbar';
import { MantineProvider, QueryProvider, ReduxProvider } from '@/context/index';

const Providers = async ({ children }: { children?: React.ReactNode }) => {
  return (
    <ReduxProvider>
      <QueryProvider>
        <MantineProvider>
          <NextNProgress />
          <Notifications />
          {children}
        </MantineProvider>
      </QueryProvider>
    </ReduxProvider>
  );
};

export default Providers;
