import { Icon } from '@iconify/react';
import {
  ActionIcon,
  Badge,
  Box,
  Button,
  Code,
  ColorSwatch,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
  Tooltip,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';

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
    name: 'WindiCSS',
    color: 'sky',
    docLink: 'https://windicss.org/',
    description: 'CSS framework',
    logoSrc: '/img/windicss.svg',
  },
];

const HomePage = () => {
  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <Stack align="center" py="xl">
      <Group grow position="center" spacing="xl">
        <Image
          className="hover:filter"
          fit="contain"
          height={80}
          src="/img/next.svg"
          style={{ '--tw-drop-shadow': 'drop-shadow(0 0 2em #646cffaa)' }}
        />
      </Group>
      <Title align="center" className="text-4xl">
        NextJS
      </Title>

      <Title
        align="center"
        gradient={{
          from: dark ? 'white' : 'purple',
          to: dark ? 'pink' : 'cyan',
          deg: 45,
        }}
        order={2}
        variant="gradient"
      >
        Features
      </Title>

      <SimpleGrid className="w-2/3 lg:auto-cols-min xl:auto-rows-fr grid-cols-1 md:grid-cols-2 lg:grid-cols-3 children:(backdrop-filter backdrop-blur-md)">
        <Box className="col-span-1 md:col-span-2 lg:col-span-3 relative before:(absolute inset-0 content-DEFAULT border-dashed rounded-lg border-3 border-indigo-300)">
          <Stack
            align="center"
            className="border-3 rounded-lg transform hover:(-translate-x-3 -translate-y-3) duration-150 bg-white dark:bg-dark-50 border-indigo-400 h-full p-5"
          >
            <Title align="center" order={3}>
              <Icon icon="fluent-emoji-flat:high-voltage" inline /> Batteries
              included
            </Title>
            <Group className="w-full" position="center" spacing="xl">
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
                            fit="contain"
                            height={36}
                            src={logoSrc}
                            width={36}
                            withPlaceholder
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

        <Box className="relative before:(absolute inset-0 content-DEFAULT border-dashed rounded-lg border-3 border-rose-300)">
          <Stack
            align="center"
            className="border-3 rounded-lg transform hover:(-translate-x-3 -translate-y-3) duration-150 bg-white dark:bg-dark-50 border-rose-400 h-full p-5"
          >
            <Title align="center" order={3}>
              <Icon icon="fluent-emoji-flat:sponge" inline /> Better code style
              with
            </Title>
            <Group position="center">
              <Badge color="purple">ESlint</Badge>
              <Badge color="fuchsia">Prettier</Badge>
              <Badge color="slate">Husky</Badge>
              <Badge color="indigo">Commitlint</Badge>
              <Badge color="teal">Lint-staged</Badge>
              <Badge color="zinc">Editorconfig</Badge>
            </Group>
          </Stack>
        </Box>

        <Box className="relative before:(absolute inset-0 content-DEFAULT border-dashed rounded-lg border-3 border-teal-300)">
          <Stack
            align="center"
            className="border-3 rounded-lg transform hover:(-translate-x-3 -translate-y-3) duration-150 bg-white dark:bg-dark-50 border-teal-400 h-full p-5"
          >
            <Title align="center" order={3}>
              <Icon icon="fluent-emoji-flat:artist-palette" inline /> Extended
              WindiCSS color palette
            </Title>
            <Group position="center">
              {Object.keys(theme.colors).map((color) => {
                return (
                  <Tooltip.Floating
                    className="capitalize"
                    color={color}
                    key={color}
                    label={color}
                  >
                    <ColorSwatch color={theme.colors[color][4]} radius="md" />
                  </Tooltip.Floating>
                );
              })}
            </Group>
          </Stack>
        </Box>

        <Box className="relative before:(absolute inset-0 content-DEFAULT border-dashed rounded-lg border-3 border-amber-300)">
          <Stack
            align="center"
            className="border-3 rounded-lg transform hover:(-translate-x-3 -translate-y-3) duration-150 bg-white dark:bg-dark-50 border-amber-400 h-full p-5"
          >
            <Title align="center" order={3}>
              <Icon
                icon={`fluent-emoji-flat:${
                  dark ? 'full-moon-face' : 'sun-with-face'
                }`}
                inline
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

        <Box className="relative before:(absolute inset-0 content-DEFAULT border-dashed rounded-lg border-3 border-sky-300)">
          <Stack
            align="center"
            className="border-3 rounded-lg transform hover:(-translate-x-3 -translate-y-3) duration-150 bg-white dark:bg-dark-50 border-sky-400 h-full p-5"
          >
            <Title align="center" order={3}>
              <Icon icon="fluent-emoji-flat:input-latin-lowercase" inline />{' '}
              Pre-configured font pairing
            </Title>
            <Group position="center">
              <Text>Text: Inter</Text>
              <Title order={4}>Heading: Quicksand</Title>
              <Code color="violet">Mono: Space Mono</Code>
              <Text className="!font-serif">Serif: Merriweather</Text>
            </Group>
          </Stack>
        </Box>

        <Box className="relative before:(absolute inset-0 content-DEFAULT border-dashed rounded-lg border-3 border-pink-300)">
          <Stack
            align="center"
            className="border-3 rounded-lg transform hover:(-translate-x-3 -translate-y-3) duration-150 bg-white dark:bg-dark-50 border-pink-400 h-full p-5"
          >
            <Title align="center" order={3}>
              <Icon icon="fluent-emoji-flat:dizzy" inline /> Animation is easy
              with plugins
            </Title>
            <Group
              className="children:(animate-infinite animate-duration-3000)"
              position="center"
            >
              <Badge className="animate-tada" color="yellow">
                Tada
              </Badge>
              <Badge className="animate-wobble" color="lime">
                Wobble
              </Badge>
              <Badge className="animate-swing" color="rose">
                Swing
              </Badge>
              <Badge className="animate-jello" color="cyan">
                Jello
              </Badge>
            </Group>
          </Stack>
        </Box>

        <Box className="relative before:(absolute inset-0 content-DEFAULT border-dashed rounded-lg border-3 border-gray-300)">
          <Stack
            align="center"
            className="border-3 rounded-lg transform hover:(-translate-x-3 -translate-y-3) duration-150 bg-white dark:bg-dark-50 border-gray-400 h-full p-5"
          >
            <Title align="center" order={3}>
              <Icon icon="fluent-emoji-flat:locked" inline /> Type-safe all the
              way with TypeScript
            </Title>
            <Text align="center" color="yellow" transform="uppercase">
              <Icon icon="fluent-emoji-flat:construction" inline /> Coming Soon{' '}
              <Icon icon="fluent-emoji-flat:construction" inline />
            </Text>
          </Stack>
        </Box>
      </SimpleGrid>
    </Stack>
  );
};

export default HomePage;
