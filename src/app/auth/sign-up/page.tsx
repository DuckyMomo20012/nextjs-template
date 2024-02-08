import { Alert, Card, Center, Stack, Text } from '@mantine/core';
import Link from 'next/link';
import { SignUpForm } from '@/components/forms/SignUpForm';

const SignUp = () => {
  return (
    <>
      <Center className="h-full w-full flex-1">
        <Card className="w-full max-w-md" withBorder>
          <Stack gap="lg">
            <Text fw="700" fz="xl">
              Sign up
            </Text>

            <Alert title="Note">
              This is just a demo page, please go to sign in page and sign in
              with mock account
            </Alert>

            <SignUpForm />

            <Text>
              Already have an account?{' '}
              <Link
                className="text-inherit no-underline hover:underline"
                href="/auth/sign-in"
              >
                Sign in
              </Link>
            </Text>
          </Stack>
        </Card>
      </Center>
    </>
  );
};

export default SignUp;
