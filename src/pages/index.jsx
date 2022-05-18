import {
  Box,
  Button,
  Container,
  Group,
  Text,
  Title,
  UnstyledButton,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';

import { Icon } from '@iconify/react';
import Link from 'next/link';

const HeroTitle = () => {
  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <Box className="dark:bg-dark-800 relative border">
      <Container className="pt-200px pb-120px <md:py-80px relative" size={700}>
        <Title
          className="text-62px leading-1.1 <md:(text-42px leading-1.2) dark:color-light-50 m-0 bg-transparent p-0 font-black"
          order={1}
        >
          A{' '}
          <Text
            component="span"
            gradient={{ from: 'rose', to: 'fuchsia' }}
            inherit
            variant="gradient"
          >
            fully featured
          </Text>{' '}
          React components and hooks library
        </Title>

        <Text className="text-24px <md:text-18px mt-24px" color="dimmed">
          Build fully functional accessible web applications with ease - Mantine
          includes more than 100 customizable components and hooks to cover you
          in any situation
        </Text>

        <Group className="mt-48px <md:mt-24px">
          <Link href="/auth/login">
            <Button
              className="h-54px px-38px <md:(h-54px px-18px flex-1)"
              gradient={{ from: 'rose', to: 'fuchsia' }}
              size="xl"
              variant="gradient"
            >
              Get started
            </Button>
          </Link>

          <Button
            className="h-54px px-38px <md:(h-54px px-18px flex-1) border-dark-900 dark:(border-transparent bg-dark-600 hover:!bg-dark-600) border-2 bg-transparent hover:!bg-gray-100"
            color={theme.colorScheme === 'dark' ? 'gray' : 'dark'}
            component="a"
            href="https://github.com/DuckyMomo20012/student-dashboard-nextjs"
            size="xl"
            variant="outline"
          >
            GitHub
          </Button>
          <UnstyledButton
            className={
              'w-44px h-44px dark:(text-dark-50 hover:bg-dark-500) hover:(bg-primary-100) text-primary-700 flex items-center justify-center rounded-md'
            }
            onClick={() => toggleColorScheme()}
          >
            <Icon
              height={24}
              icon={dark ? 'ic:outline-dark-mode' : 'ic:outline-light-mode'}
              width={24}
            />
          </UnstyledButton>
        </Group>
      </Container>
    </Box>
  );
};

export default HeroTitle;
