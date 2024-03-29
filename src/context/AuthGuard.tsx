'use client';

import { notifications } from '@mantine/notifications';
import { usePathname, useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

const AuthGuard = ({ children }: { children?: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { status } = useSession();

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (status === 'loading') {
      const id = setTimeout(() => {
        notifications.show({
          title: 'Loading user...',
          message: 'Please wait while we are loading your user data',
          color: 'cyan',
          loading: true,
        });
      }, 0);

      return () => {
        clearTimeout(id);
      };
    }

    if (status === 'unauthenticated') {
      // NOTE: A little trick to make to notification show up after the page is
      // loaded, because if we don't do this, the notification will not show up
      const id = setTimeout(() => {
        notifications.show({
          title: 'Not authenticated',
          message: 'You are not authenticated, redirecting to sign in page...',
          color: 'red',
          autoClose: 5000,
        });
      }, 0);

      const newURL = new URL('/auth/sign-in', window.location.origin);
      newURL.searchParams.set('from', pathname);

      router.push(newURL.toString());

      return () => {
        clearTimeout(id);
      };
    }
  }, [status, router, pathname]);

  if (status === 'loading') {
    return null;
  }

  if (status === 'unauthenticated') {
    return null;
  }

  if (status === 'authenticated') {
    return <>{children}</>;
  }

  return <>{children}</>;
};

export { AuthGuard };
