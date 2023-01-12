import 'windicss';

import NextNProgress from 'nextjs-progressbar';
import { SessionProvider } from 'next-auth/react';
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
            {Component.auth ? (
              <AuthGuard>{getLayout(<Component {...pageProps} />)}</AuthGuard>
            ) : (
              getLayout(<Component {...pageProps} />)
            )}
          </MantineProvider>
        </QueryProvider>
      </SessionProvider>
    </ReduxProvider>
  );
}

export default MyApp;
