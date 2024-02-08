import { Card, Center, Stack, Text } from '@mantine/core';
import Link from 'next/link';
import { Suspense } from 'react';
import { SignInForm } from '@/components/forms/SignInForm';

const SignIn = () => {
  return (
    <>
      <Center className="h-full w-full flex-1">
        <Card className="w-full max-w-md" withBorder>
          <Stack gap="lg">
            <Text fw="700" fz="xl">
              Sign in
            </Text>

            <Suspense>
              <SignInForm />
            </Suspense>

            <Text>
              Do not have an account?{' '}
              <Link
                className="text-inherit no-underline hover:underline"
                href="/auth/sign-up"
              >
                Sign up
              </Link>
            </Text>
          </Stack>
        </Card>
      </Center>
    </>
  );
};

export default SignIn;
