import { Container, Text, Button, Group, useMantineTheme } from '@mantine/core';
import Link from 'next/link';

const HeroTitle = () => {
  const theme = useMantineTheme();

  return (
    <div className="dark:bg-dark-800 relative border bg-white">
      <Container className="pt-200px pb-120px <md:py-80px relative" size={700}>
        <h1 className="text-62px leading-1.1 <md:(text-42px leading-1.2) dark:color-light-50 m-0 bg-transparent p-0 font-black">
          A{' '}
          <Text
            component="span"
            gradient={{ from: 'blue', to: 'cyan' }}
            inherit
            variant="gradient"
          >
            fully featured
          </Text>{' '}
          React components and hooks library
        </h1>

        <Text className="text-24px <md:text-18px mt-24px" color="dimmed">
          Build fully functional accessible web applications with ease - Mantine
          includes more than 100 customizable components and hooks to cover you
          in any situation
        </Text>

        <Group className="mt-48px <md:mt-24px">
          <Link href="/">
            <Button
              className="h-54px px-38px <md:(h-54px px-18px flex-1)"
              gradient={{ from: 'blue', to: 'cyan' }}
              size="xl"
              variant="gradient"
            >
              Get started
            </Button>
          </Link>

          <Button
            className="h-54px px-38px <md:(h-54px px-18px flex-1) border-dark-900 dark:(border-transparent bg-dark-600 hover:!bg-dark-600) border-2 bg-transparent hover:!bg-gray-50"
            color={theme.colorScheme === 'dark' ? 'gray' : 'dark'}
            component="a"
            href="https://github.com/mantinedev/mantine"
            size="xl"
            variant="outline"
          >
            GitHub
          </Button>
        </Group>
      </Container>
    </div>
  );
};

export default HeroTitle;
