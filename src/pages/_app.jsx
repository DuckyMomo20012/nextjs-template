import 'windi.css';

import {
  AuthGuard,
  CustomMantineProvider,
  CustomQueryClientProvider,
  CustomReduxProvider,
} from '@provider/index.js';

import NextNProgress from 'nextjs-progressbar';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <CustomReduxProvider>
      <SessionProvider session={session}>
        <CustomQueryClientProvider>
          <CustomMantineProvider>
            <NextNProgress />
            {/* Guarding pages */}
            {Component.auth ? (
              <AuthGuard>{getLayout(<Component {...pageProps} />)}</AuthGuard>
            ) : (
              getLayout(<Component {...pageProps} />)
            )}
          </CustomMantineProvider>
        </CustomQueryClientProvider>
      </SessionProvider>
    </CustomReduxProvider>
  );
}

export default MyApp;
