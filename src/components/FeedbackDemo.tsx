import { Alert, Notification, Progress } from '@mantine/core';
import { Feature } from '@/components/ui/Feature';
import { type ControlledDemoProps } from '@/pages';

const FeedbackDemo = ({
  color,
  description,
  label,
  radius,
}: ControlledDemoProps) => {
  return (
    <>
      <Feature group="Feedback" title="Alert">
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

      <Feature group="Feedback" title="Notification">
        <Notification
          color={color}
          radius={radius}
          title={label}
          withCloseButton
        >
          {description}
        </Notification>
      </Feature>

      <Feature group="Feedback" title="Progress">
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
    </>
  );
};

export { FeedbackDemo };
