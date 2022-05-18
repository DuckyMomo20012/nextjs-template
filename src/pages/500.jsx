import { Box, Button, Container, Group, Text, Title } from '@mantine/core';

function ServerError() {
  return (
    <Box className="pt-80px pb-120px bg-primary-600 h-screen ">
      <Container>
        <Box className="text-200px mb-36px <sm:text-120px text-primary-300 text-center font-black">
          500
        </Box>
        <Title className="text-38px text-light-900 <sm:text-32px text-center font-black">
          Something bad just happened...
        </Title>
        <Text
          align="center"
          className="max-w-540px mt-24px mb-36px text-primary-100 m-auto"
          size="lg"
        >
          Our servers could not handle your request. Don&apos;t worry, our
          development team was already notified. Try refreshing the page.
        </Text>
        <Group position="center">
          <Button size="md" variant="white">
            Refresh the page
          </Button>
        </Group>
      </Container>
    </Box>
  );
}

export default ServerError;
