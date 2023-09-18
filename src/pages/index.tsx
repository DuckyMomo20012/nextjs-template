import { Icon } from '@iconify/react';
import {
  ActionIcon,
  Badge,
  Box,
  Button,
  Group,
  SimpleGrid,
  Stack,
  Title,
  Tooltip,
  useMantineColorScheme,
} from '@mantine/core';
import Head from 'next/head';
import Image from 'next/image';

const techStack = [
  {
    name: 'Redux Toolkit',
    color: 'violet',
    docLink: 'https://redux-toolkit.js.org/',
    description: 'State management',
    logoSrc: '/img/redux.svg',
  },
  {
    name: 'React Router',
    color: 'red',
    docLink: 'https://reactrouter.com/en/main',
    description: 'Routing',
    logoSrc: '/img/react-router.svg',
  },
  {
    name: 'React Hook Form',
    color: 'pink',
    docLink: 'https://react-hook-form.com/',
    description: 'Forms',
    logoSrc: '/img/react-hook-form.svg',
  },
  {
    name: 'TanStack Query',
    color: 'orange',
    docLink: 'https://tanstack.com/query/v4',
    description: 'Data fetching',
    logoSrc: '/img/react-query.svg',
  },
  {
    name: 'Mantine',
    color: 'blue',
    docLink: 'https://mantine.dev/',
    description: 'UI library',
    logoSrc: '/img/mantine.svg',
  },
  {
    name: 'TailwindCSS',
    color: 'cyan',
    docLink: 'https://tailwindcss.com/',
    description: 'CSS framework',
    logoSrc: '/img/tailwindcss.svg',
  },
];

const HomePage = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <>
      <Head>
        <title>NextJS + TS</title>
        <meta
          content="A simple starter template for NextJS + Typescript projects, with many useful features and tools pre-installed."
          name="description"
        ></meta>
      </Head>
      <Stack align="center" className="h-screen justify-center" gap="xl">
        <Group className="w-full" gap="xl" justify="center">
          <Stack align="center">
            <Image
              alt="nextjs logo"
              className="object-content aspect-square"
              height={80}
              src="/img/nextjs.svg"
              width={80}
            />
            <Title className="text-center text-4xl">NextJS</Title>
          </Stack>
          <Stack align="center">
            <Image
              alt="typescript logo"
              className="object-content aspect-square"
              height={80}
              src="/img/typescript.svg"
              width={80}
            />
            <Title className="text-center text-4xl">Typescript</Title>
          </Stack>
        </Group>

        <SimpleGrid
          className="w-2/3"
          cols={{ base: 1, md: 2, lg: 3 }}
          spacing="xl"
          verticalSpacing="xl"
        >
          <Box className="col-span-1 rounded-lg border-4 border-solid border-indigo-300 p-5 md:col-span-2 lg:col-span-3">
            <Stack align="center">
              <Title className="text-center" order={3}>
                <Icon
                  className="inline aspect-square"
                  height={22}
                  icon="fluent-emoji-flat:high-voltage"
                  inline
                  width={22}
                />{' '}
                Batteries included
              </Title>
              <Group className="w-full" gap="xl" justify="center">
                {techStack.map(
                  ({ name, color, docLink, description, logoSrc }) => {
                    return (
                      <Stack align="center" key={name}>
                        <Tooltip.Floating color={color} label={description}>
                          <ActionIcon
                            color={color}
                            component="a"
                            href={docLink || '#'}
                            size={64}
                            target="_blank"
                            variant="outline"
                          >
                            <Image
                              alt={`${name.toLowerCase()} logo`}
                              className="object-content aspect-square"
                              height={36}
                              src={logoSrc}
                              width={36}
                            />
                          </ActionIcon>
                        </Tooltip.Floating>
                        <Badge color={color}>{name}</Badge>
                      </Stack>
                    );
                  },
                )}
              </Group>
            </Stack>
          </Box>

          <Box className="rounded-lg border-4 border-solid border-rose-300 p-5">
            <Stack align="center">
              <Title className="text-center" order={3}>
                <Icon
                  className="inline aspect-square"
                  height={22}
                  icon="fluent-emoji-flat:sponge"
                  inline
                  width={22}
                />{' '}
                Better code style with
              </Title>
              <Group justify="center">
                <Badge color="orange">ESlint</Badge>
                <Badge color="red">Prettier</Badge>
                <Badge color="gray">Husky</Badge>
                <Badge color="indigo">Commitlint</Badge>
                <Badge color="teal">Lint-staged</Badge>
                <Badge color="zinc">Editorconfig</Badge>
              </Group>
            </Stack>
          </Box>

          <Box className="rounded-lg border-4 border-solid border-pink-300 p-5">
            <Stack align="center">
              <Title className="text-center" order={3}>
                <Icon
                  className="inline aspect-square"
                  height={22}
                  icon="fluent-emoji-flat:dizzy"
                  inline
                  width={22}
                />{' '}
                Move faster with these awesome libraries
              </Title>
              <Group justify="center">
                <Badge color="yellow">Axios</Badge>
                <Badge color="lime">Clsx</Badge>
                <Badge color="red">Type-fest</Badge>
                <Badge color="cyan">Zod</Badge>
              </Group>
            </Stack>
          </Box>

          <Box className="rounded-lg border-4 border-solid border-amber-300 p-5">
            <Stack align="center">
              <Title className="text-center" order={3}>
                <Icon
                  className="inline aspect-square"
                  height={22}
                  icon={`fluent-emoji-flat:${
                    dark ? 'full-moon-face' : 'sun-with-face'
                  }`}
                  inline
                  width={22}
                />{' '}
                Dark mode ready
              </Title>
              <Button
                data-test-id="demo-color-scheme-toggle"
                onClick={() => toggleColorScheme()}
                variant="light"
              >
                Toggle dark mode
              </Button>
            </Stack>
          </Box>
        </SimpleGrid>
      </Stack>
    </>
  );
};

export default HomePage;
