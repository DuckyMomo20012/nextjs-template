// eslint-disable-next-line import/no-unresolved
import 'windi.css';

import { SessionProvider } from 'next-auth/react';
import NextNProgress from 'nextjs-progressbar';
import { AppShell } from '@/components/layouts/AppShell';
import {
  AuthGuard,
  MantineProvider,
  QueryProvider,
  ReduxProvider,
} from '@/context/index.js';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <ReduxProvider>
      <SessionProvider session={session}>
        <QueryProvider>
          <MantineProvider>
            <NextNProgress />
            {/* Guarding pages */}
            <AppShell>
              {Component.auth ? (
                <AuthGuard>{getLayout(<Component {...pageProps} />)}</AuthGuard>
              ) : (
                getLayout(<Component {...pageProps} />)
              )}
            </AppShell>
          </MantineProvider>
        </QueryProvider>
      </SessionProvider>
    </ReduxProvider>
  );
}

export default MyApp;
