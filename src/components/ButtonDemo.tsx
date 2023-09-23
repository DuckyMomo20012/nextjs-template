import { Icon } from '@iconify/react';
import { ActionIcon, Button } from '@mantine/core';
import { Feature } from '@/components/ui/Feature';
import { type ControlledDemoProps } from '@/pages';

const ButtonDemo = ({
  color,
  disabled,
  label,
  radius,
  size,
  loading,
}: ControlledDemoProps) => {
  return (
    <>
      <Feature group="Buttons" title="ActionIcon">
        <ActionIcon
          color={color}
          disabled={disabled}
          loading={loading}
          radius={radius}
          size={size}
          variant="default"
        >
          <Icon
            height="70%"
            icon="material-symbols:settings-outline-rounded"
            width="70%"
          />
        </ActionIcon>
        <ActionIcon
          color={color}
          disabled={disabled}
          loading={loading}
          radius={radius}
          size={size}
          variant="filled"
        >
          <Icon
            height="70%"
            icon="material-symbols:settings-outline-rounded"
            width="70%"
          />
        </ActionIcon>
        <ActionIcon
          color={color}
          disabled={disabled}
          loading={loading}
          radius={radius}
          size={size}
          variant="light"
        >
          <Icon
            height="70%"
            icon="material-symbols:settings-outline-rounded"
            width="70%"
          />
        </ActionIcon>
        <ActionIcon
          color={color}
          disabled={disabled}
          loading={loading}
          radius={radius}
          size={size}
          variant="outline"
        >
          <Icon
            height="70%"
            icon="material-symbols:settings-outline-rounded"
            width="70%"
          />
        </ActionIcon>
        <ActionIcon
          color={color}
          disabled={disabled}
          loading={loading}
          radius={radius}
          size={size}
          variant="subtle"
        >
          <Icon
            height="70%"
            icon="material-symbols:settings-outline-rounded"
            width="70%"
          />
        </ActionIcon>
        <ActionIcon
          color={color}
          disabled={disabled}
          loading={loading}
          radius={radius}
          size={size}
          variant="transparent"
        >
          <Icon
            height="70%"
            icon="material-symbols:settings-outline-rounded"
            width="70%"
          />
        </ActionIcon>
        <ActionIcon
          color={color}
          disabled={disabled}
          loading={loading}
          radius={radius}
          size={size}
          variant="white"
        >
          <Icon
            height="70%"
            icon="material-symbols:settings-outline-rounded"
            width="70%"
          />
        </ActionIcon>
      </Feature>

      <Feature group="Buttons" title="Button">
        <Button
          color={color}
          disabled={disabled}
          loading={loading}
          radius={radius}
          size={size}
          variant="default"
        >
          {label}
        </Button>
        <Button
          color={color}
          disabled={disabled}
          loading={loading}
          radius={radius}
          size={size}
          variant="filled"
        >
          {label}
        </Button>
        <Button
          color={color}
          disabled={disabled}
          loading={loading}
          radius={radius}
          size={size}
          variant="light"
        >
          {label}
        </Button>
        <Button
          color={color}
          disabled={disabled}
          loading={loading}
          radius={radius}
          size={size}
          variant="outline"
        >
          {label}
        </Button>
        <Button
          color={color}
          disabled={disabled}
          loading={loading}
          radius={radius}
          size={size}
          variant="subtle"
        >
          {label}
        </Button>
        <Button
          color={color}
          disabled={disabled}
          loading={loading}
          radius={radius}
          size={size}
          variant="transparent"
        >
          {label}
        </Button>
        <Button
          color={color}
          disabled={disabled}
          loading={loading}
          radius={radius}
          size={size}
          variant="white"
        >
          {label}
        </Button>
      </Feature>
    </>
  );
};

export { ButtonDemo };
