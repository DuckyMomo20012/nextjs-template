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
  useMantineTheme,
} from '@mantine/core';
import Head from 'next/head';
import { useState } from 'react';
import { ButtonDemo } from '@/components/ButtonDemo';
import { ComboboxDemo } from '@/components/ComboboxDemo';
import { DataDisplayDemo } from '@/components/DataDisplayDemo';
import { FeedbackDemo } from '@/components/FeedbackDemo';
import { InputDemo } from '@/components/InputDemo';
import { NavigationDemo } from '@/components/NavigationDemo';
import { OverlayDemo } from '@/components/OverlayDemo';
import { TypographyDemo } from '@/components/TypographyDemo';

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

  const defaultProps: ControlledDemoProps = {
    color,
    description,
    disabled,
    error,
    label,
    placeholder,
    radius,
    size,
    withAsterisk,
    loading,
  };

  return (
    <>
      <Head>
        <title>NextJS + TS</title>
        <meta
          content="A simple starter template for NextJS + Typescript projects, with many useful features and tools pre-installed."
          name="description"
        ></meta>
      </Head>
      <Stack>
        <SimpleGrid
          className="relative inset-0 z-50 bg-white p-8 shadow-sm lg:sticky"
          cols={{ base: 1, md: 2 }}
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
                className="max-w-max"
                cols={{ base: 6, xs: 8, sm: 12 }}
                spacing="md"
                verticalSpacing="xs"
              >
                {Object.keys(themes.colors).map((colorKey, index) => {
                  return (
                    <ColorSwatch
                      color={themes.colors[colorKey][6]}
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
