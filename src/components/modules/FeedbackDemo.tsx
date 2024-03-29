'use client';

import { Alert, Notification, Progress, Skeleton } from '@mantine/core';
import { memo } from 'react';
import { type ControlledDemoProps } from '@/app/(home)/page';
import { Feature } from '@/components/elements/Feature';

const FeedbackDemo = memo(function FeedbackDemo({
  color,
  description,
  label,
  radius,
  loading,
}: ControlledDemoProps) {
  return (
    <>
      <Feature
        group="Feedback"
        title="Alert"
        url="https://mantine.dev/core/alert/"
      >
        <Alert
          color={color}
          radius={radius}
          title={label}
          variant="default"
          withCloseButton
        >
          {description}
        </Alert>
        <Alert
          color={color}
          radius={radius}
          title={label}
          variant="filled"
          withCloseButton
        >
          {description}
        </Alert>
        <Alert
          color={color}
          radius={radius}
          title={label}
          variant="light"
          withCloseButton
        >
          {description}
        </Alert>
        <Alert
          color={color}
          radius={radius}
          title={label}
          variant="outline"
          withCloseButton
        >
          {description}
        </Alert>
        <Alert
          color={color}
          radius={radius}
          title={label}
          variant="transparent"
          withCloseButton
        >
          {description}
        </Alert>
        <Alert
          color={color}
          radius={radius}
          title={label}
          variant="white"
          withCloseButton
        >
          {description}
        </Alert>
      </Feature>

      <Feature
        group="Feedback"
        title="Notification"
        url="https://mantine.dev/core/notification/"
      >
        <Notification
          color={color}
          loading={loading}
          radius={radius}
          title={label}
          withCloseButton
        >
          {description}
        </Notification>
        <Notification
          color={color}
          loading={loading}
          radius={radius}
          title={label}
          withBorder
          withCloseButton
        >
          {description}
        </Notification>
      </Feature>

      <Feature
        group="Feedback"
        title="Progress"
        url="https://mantine.dev/core/progress/"
      >
        <Progress color={color} radius={radius} value={50}>
          {description}
        </Progress>
        <Progress color={color} radius={radius} striped value={75}>
          {description}
        </Progress>
        <Progress animated color={color} radius={radius} value={100}>
          {description}
        </Progress>
      </Feature>

      <Feature
        group="Feedback"
        title="Skeleton"
        url="https://mantine.dev/core/skeleton/"
      >
        <Skeleton circle height={50} mb="xl" />
        <Skeleton height={8} radius={radius} />
        <Skeleton height={8} mt={6} radius={radius} />
        <Skeleton height={8} mt={6} radius={radius} width="70%" />
        <Skeleton animate={false} circle height={50} mb="xl" />
        <Skeleton animate={false} height={8} radius={radius} />
        <Skeleton animate={false} height={8} mt={6} radius={radius} />
        <Skeleton
          animate={false}
          height={8}
          mt={6}
          radius={radius}
          width="70%"
        />
      </Feature>
    </>
  );
});

export { FeedbackDemo };
