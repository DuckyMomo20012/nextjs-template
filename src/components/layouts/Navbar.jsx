import { Icon } from '@iconify/react';
import {
  ActionIcon,
  Anchor,
  Box,
  Button,
  CloseButton,
  Divider,
  Group,
  Image,
  NavLink as MantineNavLink,
  Navbar as MantineNavbar,
  ScrollArea,
  Text,
  Tooltip,
  Transition,
  useMantineColorScheme,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const paths = [
  {
    path: '/',
    label: 'Home',
    icon: 'ic:outline-home',
  },
];

const Navbar = ({ navBarOpened, setNavBarOpened }) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';
  const matches = useMediaQuery('(min-width: 640px)');
  const router = useRouter();

  useEffect(() => {
    if (navBarOpened) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [navBarOpened]);

  useEffect(() => {
    if (matches) {
      setNavBarOpened(false);
    }
  }, [matches, setNavBarOpened]);

  return (
    <Transition
      duration={200}
      mounted={navBarOpened}
      timingFunction="ease-in-out"
      transition={{
        in: { opacity: 1, transform: 'translateX(0)' },
        out: { opacity: 0, transform: 'translateX(-100%)' },
      }}
    >
      {(styles) => {
        return (
          <MantineNavbar
            // hiddenBreakpoint="sm"
            // NOTE: Don't set this because we want animation to work
            // Hidden={!navBarOpened}
            className="!sm:hidden !w-9/10 !z-200 !top-0 shadow-md"
            style={styles}
          >
            <MantineNavbar.Section
              className="flex items-center justify-between gap-2"
              p="sm"
            >
              <Group className="min-w-0" noWrap>
                <Link href="/" passHref>
                  <Anchor
                    className="flex min-w-0 items-center gap-2"
                    spacing="xs"
                    underline={false}
                  >
                    <Box component="span">
                      <Image height={32} src="/favicon.ico" width={32} />
                    </Box>
                    <Text align="center" className="w-full truncate" fw={700}>
                      NextJS Template
                    </Text>
                  </Anchor>
                </Link>
                <Tooltip label={dark ? 'Light mode' : 'Dark mode'}>
                  <ActionIcon
                    color="blue"
                    onClick={() => toggleColorScheme()}
                    size="lg"
                    variant="outline"
                  >
                    <Icon
                      icon={
                        dark ? 'ic:outline-dark-mode' : 'ic:outline-light-mode'
                      }
                      width={24}
                    />
                  </ActionIcon>
                </Tooltip>
              </Group>
              <CloseButton onClick={() => setNavBarOpened(false)} />
            </MantineNavbar.Section>
            <MantineNavbar.Section component={ScrollArea} grow>
              {paths.map((path) => {
                return (
                  <Link href={path.path} key={path.path} passHref>
                    <Anchor underline={false}>
                      <MantineNavLink
                        active={router.pathname === path.path}
                        fw={500}
                        icon={<Icon height={24} icon={path.icon} />}
                        label={path.label}
                        onClick={() => setNavBarOpened(false)}
                      />
                    </Anchor>
                  </Link>
                );
              })}
            </MantineNavbar.Section>
            <Divider />
            <MantineNavbar.Section p="sm">
              <Group position="center">
                <Button
                  component="a"
                  href="https://github.com/DuckyMomo20012/nextjs-template"
                  leftIcon={<Icon icon="ant-design:github-filled" width={24} />}
                  target="_blank"
                  variant="light"
                >
                  Github
                </Button>
              </Group>
            </MantineNavbar.Section>
          </MantineNavbar>
        );
      }}
    </Transition>
  );
};

export { Navbar };