import { Button, Center, Group, Stack, Text, Title } from '@mantine/core';
import Head from 'next/head';
import Image from 'next/image';

function ServerError() {
  return (
    <Center className="h-screen">
      <Head>
        <title>Server Error</title>
        <meta
          content="Server Error - Something bad just happened..."
          name="description"
        ></meta>
      </Head>
      <Stack className="w-3/4 md:w-1/2 lg:w-1/3">
        <Image
          alt="500"
          className="aspect-[5/4]"
          height={800}
          src="https://http.cat/500"
          width={1000}
        />
        <Title align="center" order={1}>
          Something bad just happened...
        </Title>
        <Text align="center" color="dimmed" size="lg">
          Our servers could not handle your request. Don&apos;t worry, our
          development team was already notified. Try refreshing the page.
        </Text>
        <Group position="center">
          <Button
            onClick={() => {
              window.location.reload();
            }}
            size="md"
            variant="light"
          >
            Refresh the page
          </Button>
        </Group>
      </Stack>
    </Center>
  );
}

export default ServerError;
