'use client';

import { Icon } from '@iconify/react/dist/iconify.js';
import {
  ActionIcon,
  Anchor,
  Group,
  AppShell as MantineAppShell,
  Text,
  useMantineColorScheme,
} from '@mantine/core';
import Link from 'next/link';

const AppShell = ({ children }: { children?: React.ReactNode }) => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <MantineAppShell footer={{ height: 20 }} header={{ height: 60 }}>
      <MantineAppShell.Header>
        <Group className="h-full w-full items-center px-4" justify="flex-end">
          <Link href="/dashboard">Protected page</Link>

          <Anchor
            data-test-id="github-link"
            href="https://github.com/DuckyMomo20012/nextjs-template"
            target="_blank"
          >
            <ActionIcon
              aria-label="GitHub link"
              role="link"
              size="lg"
              variant="outline"
            >
              <Icon icon="ant-design:github-filled" width={24} />
            </ActionIcon>
          </Anchor>
        </Group>
      </MantineAppShell.Header>

      <MantineAppShell.Main className="flex flex-col">
        {children}
      </MantineAppShell.Main>

      <MantineAppShell.Footer>
        <Group className="h-full w-full items-center" justify="center">
          <Text className="w-full text-center" size="sm">
            Made with{' '}
            <Icon
              icon={`fluent-emoji-flat:${
                dark ? 'teacup-without-handle' : 'sparkling-heart'
              }`}
              inline={true}
            />{' '}
            by{' '}
            <Anchor href="https://github.com/DuckyMomo20012">Tien Vinh</Anchor>
          </Text>
        </Group>
      </MantineAppShell.Footer>
    </MantineAppShell>
  );
};

export { AppShell };
