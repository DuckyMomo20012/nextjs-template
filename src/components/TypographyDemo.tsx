import { Icon } from '@iconify/react';
import { Blockquote, Code, Highlight, Stack } from '@mantine/core';
import { Feature } from '@/components/ui/Feature';
import { type ControlledDemoProps } from '@/pages';

const TypographyDemo = ({
  color,
  description,
  label,
  radius,
}: ControlledDemoProps) => {
  return (
    <>
      <Feature title="ActionIcon">
        <Blockquote
          cite={description}
          color={color}
          icon={
            <Icon
              height={24}
              icon="material-symbols:info-outline-rounded"
              width={24}
            />
          }
          iconSize={32}
          radius={radius}
        >
          {label}
        </Blockquote>
      </Feature>

      <Feature title="Code">
        <Stack className="w-min">
          <Code c="white" color={color}>
            {label}
          </Code>
        </Stack>
      </Feature>

      <Feature title="Highlight">
        <Highlight color={color} highlight="this">
          Highlight This, definitely THIS and also this!
        </Highlight>
      </Feature>
    </>
  );
};

export { TypographyDemo };
