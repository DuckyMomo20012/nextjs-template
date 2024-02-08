'use client';

import { Anchor, Card, Space, Stack, Text } from '@mantine/core';

const Feature = ({
  title,
  group,
  url,
  children,
  className,
}: {
  title: string;
  group?: string;
  url?: string;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <Card className={`${className}`} radius="md" shadow="sm" withBorder>
      {url ? (
        <Anchor
          className="text-xl font-bold text-inherit"
          href={url}
          target="_blank"
        >
          {title}
        </Anchor>
      ) : (
        <Text className="text-xl font-bold">{title}</Text>
      )}
      {group && (
        <Text c="dimmed" className="text-sm">
          {group}
        </Text>
      )}
      <Space h="lg" />
      <Stack>{children}</Stack>
    </Card>
  );
};

export { Feature };
