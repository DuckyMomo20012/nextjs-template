import {
  Button,
  Center,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from '@mantine/core';

import Link from 'next/link';

const NotFound = () => {
  return (
    <Center align="center" className="h-screen">
      <Stack className="w-1/2">
        <Image alt="404" src="/img/404.svg" />
        <Title order={1}>You have found a secret place.</Title>
        <Text color="dimmed" size="lg">
          Unfortunately, this is only a 404 page. You may have mistyped the
          address, or the page has been moved to another URL.
        </Text>
        <Group position="center">
          <Link href="/">
            <Button size="md" variant="light">
              Take me back to home page
            </Button>
          </Link>
        </Group>
      </Stack>
    </Center>
  );
};

export default NotFound;
