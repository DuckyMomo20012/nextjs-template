'use client';

import '@/styles/globals.css';

import { Notifications } from '@mantine/notifications';
import { type GetServerSidePropsContext } from 'next';
import { type Session } from 'next-auth';
import NextNProgress from 'nextjs-progressbar';
import {
  MantineProvider,
  QueryProvider,
  ReduxProvider,
  SessionProvider,
} from '@/context/index';
import { auth } from '@/lib/auth';

const Providers = ({
  children,
  session,
}: {
  children?: React.ReactNode;
  session?: Session;
}) => {
  return (
    <ReduxProvider>
      <SessionProvider session={session}>
        <QueryProvider>
          <MantineProvider>
            <NextNProgress />
            <Notifications />
            {children}
          </MantineProvider>
        </QueryProvider>
      </SessionProvider>
    </ReduxProvider>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await auth(context.req, context.res);

  return {
    props: { session },
  };
}

export default Providers;
