'use client';

import { Button, Group, Stack, Text } from '@mantine/core';
import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';

const DashboardPage = () => {
  const router = useRouter();

  return (
    <Stack align="center">
      <Text>This is a protected page</Text>

      <Group>
        <Button onClick={() => router.push('/')} variant="outline">
          Back to home
        </Button>
        <Button onClick={() => signOut()}>Sign out</Button>
      </Group>
    </Stack>
  );
};

export default DashboardPage;
