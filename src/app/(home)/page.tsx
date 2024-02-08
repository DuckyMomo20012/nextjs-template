'use client';

import { Icon } from '@iconify/react';
import {
  ColorSwatch,
  Group,
  type MantineSize,
  SimpleGrid,
  Slider,
  Stack,
  Switch,
  Text,
  TextInput,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import Head from 'next/head';
import { useDeferredValue, useState } from 'react';
import { ButtonDemo } from '@/components/modules/ButtonDemo';
import { ComboboxDemo } from '@/components/modules/ComboboxDemo';
import { DataDisplayDemo } from '@/components/modules/DataDisplayDemo';
import { FeedbackDemo } from '@/components/modules/FeedbackDemo';
import { InputDemo } from '@/components/modules/InputDemo';
import { NavigationDemo } from '@/components/modules/NavigationDemo';
import { OverlayDemo } from '@/components/modules/OverlayDemo';
import { TypographyDemo } from '@/components/modules/TypographyDemo';

export type ControlledDemoProps = {
  color: string;
  size: MantineSize;
  radius: MantineSize;
  label: string;
  description: string;
  error: string;
  placeholder: string;
  withAsterisk: boolean;
  disabled: boolean;
  loading: boolean;
};

const HomePage = () => {
  const themes = useMantineTheme();
  const { setColorScheme } = useMantineColorScheme();

  const [color, setColor] = useState(themes.primaryColor);
  const [size, setSize] = useState<MantineSize>('sm');
  const [radius, setRadius] = useState<MantineSize>('md');
  const [label, setLabel] = useState('Label');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [placeholder, setPlaceholder] = useState('');
  const [withAsterisk, setWithAsterisk] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const deferredLabel = useDeferredValue(label);
  const deferredDescription = useDeferredValue(description);
  const deferredError = useDeferredValue(error);
  const deferredPlaceholder = useDeferredValue(placeholder);

  const defaultProps = {
    color,
    description: deferredDescription,
    disabled,
    error: deferredError,
    label: deferredLabel,
    placeholder: deferredPlaceholder,
    radius,
    size,
    withAsterisk,
    loading,
  } satisfies ControlledDemoProps;

  return (
    <>
      <Head>
        <title>NextJS + TS</title>
        <meta
          content="A simple starter template for NextJS + Typescript projects, with many useful features and tools pre-installed."
          name="description"
        />
      </Head>

      <Stack className="relative">
        <Stack
          align="center"
          className="top-[calc(var(--app-shell-header-offset,_0px)_+_var(--app-shell-padding))] z-50 w-full bg-white p-6 shadow-sm dark:bg-dark-800 lg:sticky"
        >
          <SimpleGrid
            className="max-w-4xl"
            cols={{ base: 1, md: 2 }}
            spacing="xl"
          >
            <Stack>
              <TextInput
                defaultValue={label}
                label="Label"
                onChange={(e) => setLabel(e.target.value)}
              />
              <TextInput
                defaultValue={description}
                label="Description"
                onChange={(e) => setDescription(e.target.value)}
              />
              <TextInput
                defaultValue={error}
                label="Error"
                onChange={(e) => setError(e.target.value)}
              />
              <TextInput
                defaultValue={placeholder}
                label="Placeholder"
                onChange={(e) => setPlaceholder(e.target.value)}
              />
            </Stack>
            <Stack>
              <Group>
                <Switch
                  label="With asterisk"
                  onChange={(e) => setWithAsterisk(e.currentTarget.checked)}
                />
                <Switch
                  label="Disabled"
                  onChange={(e) => setDisabled(e.currentTarget.checked)}
                />
                <Switch
                  label="Loading"
                  onChange={(e) => setLoading(e.currentTarget.checked)}
                />
                <Switch
                  label="Dark mode"
                  onChange={(e) =>
                    setColorScheme(e.currentTarget.checked ? 'dark' : 'light')
                  }
                />
              </Group>
              <Stack gap="xs">
                <Text component="label" htmlFor="size-slider">
                  Size: {size}
                </Text>
                <Slider
                  defaultValue={25}
                  id="size-slider"
                  label={size}
                  marks={[
                    { value: 0 },
                    { value: 25 },
                    { value: 50 },
                    { value: 75 },
                    { value: 100 },
                  ]}
                  onChange={(e) =>
                    setSize(
                      {
                        0: 'xs',
                        25: 'sm',
                        50: 'md',
                        75: 'lg',
                        100: 'xl',
                      }[e] as MantineSize,
                    )
                  }
                  step={25}
                />
              </Stack>
              <Stack gap="xs">
                <Text component="label" htmlFor="radius-slider">
                  Radius: {radius}
                </Text>
                <Slider
                  defaultValue={50}
                  id="radius-slider"
                  label={radius}
                  marks={[
                    { value: 0 },
                    { value: 25 },
                    { value: 50 },
                    { value: 75 },
                    { value: 100 },
                  ]}
                  onChange={(e) =>
                    setRadius(
                      {
                        0: 'xs',
                        25: 'sm',
                        50: 'md',
                        75: 'lg',
                        100: 'xl',
                      }[e] as MantineSize,
                    )
                  }
                  step={25}
                />
              </Stack>
              <Stack gap="xs">
                <Text>Color: {color}</Text>
                <SimpleGrid
                  className="w-full justify-items-center"
                  cols={{ base: 6, xs: 8, sm: 12 }}
                  spacing="md"
                  verticalSpacing="xs"
                >
                  {Object.keys(themes.colors).map((colorKey, index) => {
                    return (
                      <ColorSwatch
                        color={themes.colors[colorKey]?.at(6) as string}
                        key={`${colorKey}-${index}`}
                        onClick={() => setColor(colorKey)}
                        radius="md"
                        withShadow={false}
                      >
                        {color === colorKey && (
                          <Icon
                            className="text-white"
                            height="100%"
                            icon="material-symbols:check-small-rounded"
                            width="100%"
                          />
                        )}
                      </ColorSwatch>
                    );
                  })}
                </SimpleGrid>
              </Stack>
            </Stack>
          </SimpleGrid>
        </Stack>

        <SimpleGrid
          className="p-8"
          cols={{ base: 1, md: 2, lg: 4, xl: 6, '2xl': 6 }}
        >
          <InputDemo {...defaultProps} />

          <ComboboxDemo {...defaultProps} />

          <ButtonDemo {...defaultProps} />

          <NavigationDemo {...defaultProps} />

          <FeedbackDemo {...defaultProps} />

          <OverlayDemo {...defaultProps} />

          <DataDisplayDemo {...defaultProps} />

          <TypographyDemo {...defaultProps} />
        </SimpleGrid>
      </Stack>
    </>
  );
};

export default HomePage;
