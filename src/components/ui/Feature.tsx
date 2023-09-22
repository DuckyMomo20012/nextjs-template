import { Card, Space, Stack, Text } from '@mantine/core';

const Feature = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <Card radius="md" shadow="sm" withBorder>
      <Text className="text-xl font-bold">{title}</Text>
      <Space h="lg" />
      <Stack className="">{children}</Stack>
    </Card>
  );
};

export { Feature };
