import { Icon } from '@iconify/react';
import { Blockquote, Code, Highlight, Stack } from '@mantine/core';
import { memo } from 'react';
import { Feature } from '@/components/ui/Feature';
import { type ControlledDemoProps } from '@/pages';

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
    </>
  );
});

export { TypographyDemo };
