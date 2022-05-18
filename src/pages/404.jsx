import { Box, Button, Container, Group, Text, Title } from '@mantine/core';

import Link from 'next/link';

const NotFound = () => {
  return (
    <Box className="h-screen">
      <Container className="py-80px">
        <Box className="font-900 text-220px mb-36px dark:text-bg-dark-200 <sm:text-120px text-center text-gray-100">
          404
        </Box>
        <Title className="text-38px <sm:text-32px text-center font-black">
          You have found a secret place.
        </Title>
        <Text
          align="center"
          className={`max-w-500px mt-24px mb-36px m-auto`}
          color="dimmed"
          size="lg"
        >
          Unfortunately, this is only a 404 page. You may have mistyped the
          address, or the page has been moved to another URL.
        </Text>
        <Group position="center">
          <Link href="/">
            <Button size="md" variant="subtle">
              Take me back to home page
            </Button>
          </Link>
        </Group>
      </Container>
    </Box>
  );
};

export default NotFound;
