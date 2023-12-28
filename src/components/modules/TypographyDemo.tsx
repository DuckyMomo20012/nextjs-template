'use client';

import { Icon } from '@iconify/react';
import { Blockquote, Code, Highlight, Stack, Title } from '@mantine/core';
import { memo } from 'react';
import { type ControlledDemoProps } from '@/app/page';
import { Feature } from '@/components/elements/Feature';

const TypographyDemo = memo(function TypographyDemo({
  color,
  description,
  label,
  radius,
}: ControlledDemoProps) {
  return (
    <>
      <Feature group="Typography" title="Blockquote">
        <Blockquote
          cite={description}
          color={color}
          icon={
            <Icon
              height="70%"
              icon="material-symbols:info-outline-rounded"
              width="70%"
            />
          }
          iconSize={32}
          radius={radius}
        >
          {label}
        </Blockquote>
      </Feature>

      <Feature group="Typography" title="Code">
        <Stack className="w-min">
          <Code>{label}</Code>
          <Code c="white" color={color}>
            {label}
          </Code>
        </Stack>
      </Feature>

      <Feature group="Typography" title="Highlight">
        <Highlight highlight="this">
          Highlight This, definitely THIS and also this!
        </Highlight>
        <Highlight color={color} highlight="this">
          Highlight This, definitely THIS and also this!
        </Highlight>
      </Feature>

      <Feature
        className="col-span-1 md:col-span-2"
        group="Typography"
        title="Title"
      >
        <Title order={1}>{label}</Title>
        <Title order={2}>{label}</Title>
        <Title order={3}>{label}</Title>
        <Title order={4}>{label}</Title>
        <Title order={5}>{label}</Title>
        <Title order={6}>{label}</Title>
      </Feature>
    </>
  );
});

export { TypographyDemo };
