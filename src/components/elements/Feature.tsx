import { Card, Space, Stack, Text } from '@mantine/core';

const Feature = ({
  title,
  group,
  children,
  className,
}: {
  title: string;
  group?: string;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <Card className={`${className}`} radius="md" shadow="sm" withBorder>
      <Text className="text-xl font-bold">{title}</Text>
      {group && (
        <Text c="dimmed" className="text-sm">
          {group}
        </Text>
      )}
      <Space h="lg" />
      <Stack className="">{children}</Stack>
    </Card>
  );
};

export { Feature };
