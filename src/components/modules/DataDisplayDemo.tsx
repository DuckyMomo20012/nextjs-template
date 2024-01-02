'use client';

import { Icon } from '@iconify/react';
import {
  Accordion,
  Avatar,
  Badge,
  Indicator,
  Stack,
  ThemeIcon,
} from '@mantine/core';
import { memo } from 'react';
import { type ControlledDemoProps } from '@/app/(home)/page';
import { Feature } from '@/components/elements/Feature';

const DataDisplayDemo = memo(function DataDisplayDemo({
  color,
  radius,
  disabled,
  size,
  label,
}: ControlledDemoProps) {
  return (
    <>
      <Feature
        group="Data Display"
        title="Accordion"
        url="https://mantine.dev/core/accordion/"
      >
        <Accordion chevronPosition="left" radius={radius} variant="default">
          <Accordion.Item value="photos">
            <Accordion.Control disabled={disabled}>
              Recent photos
            </Accordion.Control>
            <Accordion.Panel>Content</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="print">
            <Accordion.Control disabled={disabled}>
              Print photos
            </Accordion.Control>
            <Accordion.Panel>Content</Accordion.Panel>
          </Accordion.Item>
        </Accordion>
        <Accordion radius={radius} variant="contained">
          <Accordion.Item value="photos">
            <Accordion.Control disabled={disabled}>
              Recent photos
            </Accordion.Control>
            <Accordion.Panel>Content</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="print">
            <Accordion.Control disabled={disabled}>
              Print photos
            </Accordion.Control>
            <Accordion.Panel>Content</Accordion.Panel>
          </Accordion.Item>
        </Accordion>
        <Accordion radius={radius} variant="filled">
          <Accordion.Item value="photos">
            <Accordion.Control disabled={disabled}>
              Recent photos
            </Accordion.Control>
            <Accordion.Panel>Content</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="print">
            <Accordion.Control disabled={disabled}>
              Print photos
            </Accordion.Control>
            <Accordion.Panel>Content</Accordion.Panel>
          </Accordion.Item>
        </Accordion>
        <Accordion radius={radius} variant="separated">
          <Accordion.Item value="photos">
            <Accordion.Control disabled={disabled}>
              Recent photos
            </Accordion.Control>
            <Accordion.Panel>Content</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="print">
            <Accordion.Control disabled={disabled}>
              Print photos
            </Accordion.Control>
            <Accordion.Panel>Content</Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Feature>

      <Feature
        group="Data Display"
        title="Avatar"
        url="https://mantine.dev/core/avatar/"
      >
        <Avatar color={color} radius={radius} size={size} variant="default" />

        <Avatar color={color} radius={radius} size={size} variant="filled">
          MK
        </Avatar>

        <Avatar color={color} radius={radius} size={size} variant="light">
          <Icon
            height="70%"
            icon="material-symbols:cookie-outline-rounded"
            width="70%"
          />
        </Avatar>
        <Avatar color={color} radius={radius} size={size} variant="outline" />
        <Avatar
          color={color}
          radius={radius}
          size={size}
          variant="transparent"
        />
        <Avatar color={color} radius={radius} size={size} variant="white" />
      </Feature>

      <Feature
        group="Data Display"
        title="Badge"
        url="https://mantine.dev/core/badge/"
      >
        <Badge color={color} radius={radius} size={size} variant="default">
          {label}
        </Badge>
        <Badge color={color} radius={radius} size={size} variant="filled">
          {label}
        </Badge>
        <Badge color={color} radius={radius} size={size} variant="light">
          {label}
        </Badge>
        <Badge color={color} radius={radius} size={size} variant="outline">
          {label}
        </Badge>
        <Badge color={color} radius={radius} size={size} variant="dot">
          {label}
        </Badge>
        <Badge color={color} radius={radius} size={size} variant="transparent">
          {label}
        </Badge>
        <Badge color={color} radius={radius} size={size} variant="white">
          {label}
        </Badge>
      </Feature>

      <Feature
        group="Data Display"
        title="Indicator"
        url="https://mantine.dev/core/indicator/"
      >
        <Stack className="w-min">
          <Indicator
            color={color}
            disabled={disabled}
            position="top-end"
            radius={radius}
            size={12}
          >
            <Avatar
              color={color}
              radius={radius}
              size={size}
              variant="outline"
            />
          </Indicator>
          <Indicator
            color={color}
            disabled={disabled}
            position="top-end"
            processing
            radius={radius}
            size={12}
            withBorder
          >
            <Avatar
              color={color}
              radius={radius}
              size={size}
              variant="outline"
            />
          </Indicator>
          <Indicator
            color={color}
            disabled={disabled}
            position="top-end"
            processing
            radius={radius}
            size={12}
          >
            <Avatar
              color={color}
              radius={radius}
              size={size}
              variant="outline"
            />
          </Indicator>
          <Indicator
            color={color}
            disabled={disabled}
            label={label}
            position="top-end"
            processing
            radius={radius}
            size={12}
          >
            <Avatar
              color={color}
              radius={radius}
              size={size}
              variant="outline"
            />
          </Indicator>
        </Stack>
      </Feature>

      <Feature
        group="Data Display"
        title="ThemeIcon"
        url="https://mantine.dev/core/theme-icon/"
      >
        <ThemeIcon color={color} radius={radius} size={size} variant="default">
          <Icon
            height="70%"
            icon="material-symbols:settings-outline-rounded"
            width="70%"
          />
        </ThemeIcon>
        <ThemeIcon color={color} radius={radius} size={size} variant="filled">
          <Icon
            height="70%"
            icon="material-symbols:settings-outline-rounded"
            width="70%"
          />
        </ThemeIcon>
        <ThemeIcon color={color} radius={radius} size={size} variant="light">
          <Icon
            height="70%"
            icon="material-symbols:settings-outline-rounded"
            width="70%"
          />
        </ThemeIcon>
        <ThemeIcon color={color} radius={radius} size={size} variant="outline">
          <Icon
            height="70%"
            icon="material-symbols:settings-outline-rounded"
            width="70%"
          />
        </ThemeIcon>
        <ThemeIcon color={color} radius={radius} size={size} variant="white">
          <Icon
            height="70%"
            icon="material-symbols:settings-outline-rounded"
            width="70%"
          />
        </ThemeIcon>
      </Feature>
    </>
  );
});

export { DataDisplayDemo };
