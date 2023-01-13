import { Icon } from '@iconify/react';
import {
  ActionIcon,
  Anchor,
  Box,
  Group,
  Image,
  Header as MantineHeader,
  Text,
  Tooltip,
  useMantineColorScheme,
} from '@mantine/core';
import Link from 'next/link';

const Header = ({ setNavBarOpened }) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <MantineHeader height={48} px={24}>
      <Group className="h-full" noWrap position="apart">
        <Icon
          className="block sm:hidden"
          height={24}
          icon="ic:baseline-menu"
          onClick={() => {
            setNavBarOpened((prevNavBarOpened) => !prevNavBarOpened);
          }}
        />
        <Group className="!sm:flex !hidden !flex-grow" position="left">
          <Link href="/" passHref>
            <Anchor
              className="flex items-center gap-2"
              spacing="xs"
              underline={false}
            >
              <Box component="span">
                <Image height={32} src="/favicon.ico" width={32} />
              </Box>
              <Text align="center" fw={700}>
                NextJS Template
              </Text>
            </Anchor>
          </Link>
          <Link href="/" passHref>
            <Anchor fw={500} underline={false}>
              Home
            </Anchor>
          </Link>
        </Group>
        <Group>
          <Tooltip label={dark ? 'Light mode' : 'Dark mode'}>
            <ActionIcon
              className="!sm:flex !hidden"
              color="blue"
              data-test-id="color-scheme-toggle"
              onClick={() => toggleColorScheme()}
              size="lg"
              variant="outline"
            >
              <Icon
                icon={dark ? 'ic:outline-dark-mode' : 'ic:outline-light-mode'}
                width={24}
              />
            </ActionIcon>
          </Tooltip>
          <Tooltip label="Source code">
            <Anchor
              data-test-id="github-link"
              href="https://github.com/DuckyMomo20012/nextjs-template"
              target="_blank"
            >
              <ActionIcon size="lg" variant="outline">
                <Icon icon="ant-design:github-filled" width={24} />
              </ActionIcon>
            </Anchor>
          </Tooltip>
        </Group>
      </Group>
    </MantineHeader>
  );
};

export { Header };
