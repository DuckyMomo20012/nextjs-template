import { Title, Text, Button, Container, Group } from '@mantine/core';

function ServerError() {
  return (
    <div className="pt-80px pb-120px bg-blue-600">
      <Container>
        <div className="text-200px mb-36px <sm:text-120px text-center font-black text-blue-300">
          500
        </div>
        <Title className="text-38px text-light-900 <sm:text-32px text-center font-black">
          Something bad just happened...
        </Title>
        <Text
          align="center"
          className="max-w-540px mt-24px mb-36px m-auto text-blue-100"
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
    </div>
  );
}

export default ServerError;
