'use client';

import {
  Autocomplete,
  Group,
  MultiSelect,
  Pill,
  TagsInput,
} from '@mantine/core';
import { memo } from 'react';
import { type ControlledDemoProps } from '@/app/(home)/page';
import { Feature } from '@/components/elements/Feature';

const ComboboxDemo = memo(function ComboboxDemo({
  description,
  disabled,
  error,
  label,
  placeholder,
  radius,
  size,
  withAsterisk,
}: ControlledDemoProps) {
  return (
    <>
      <Feature
        group="Combobox"
        title="Autocomplete"
        url="https://mantine.dev/core/autocomplete/"
      >
        <Autocomplete
          data={[
            { group: 'Frontend', items: ['React', 'Angular'] },
            { group: 'Backend', items: ['Express', 'Django'] },
          ]}
          description={description}
          disabled={disabled}
          error={error}
          label={label}
          placeholder={placeholder}
          radius={radius}
          size={size}
          variant="default"
          withAsterisk={withAsterisk}
        />
        <Autocomplete
          data={[
            { value: 'React' },
            { value: 'Angular' },
            { value: 'Vue', disabled: true },
            { value: 'Svelte', disabled: true },
          ]}
          description={description}
          disabled={disabled}
          error={error}
          label={label}
          placeholder={placeholder}
          radius={radius}
          size={size}
          variant="filled"
          withAsterisk={withAsterisk}
        />
        <Autocomplete
          data={['React', 'Angular', 'Vue', 'Svelte']}
          description={description}
          disabled={disabled}
          error={error}
          label={label}
          placeholder={placeholder}
          radius={radius}
          size={size}
          variant="unstyled"
          withAsterisk={withAsterisk}
        />
      </Feature>

      <Feature
        group="Combobox"
        title="MultiSelect"
        url="https://mantine.dev/core/multi-select/"
      >
        <MultiSelect
          data={['React', 'Angular', 'Svelte', 'Vue']}
          description={description}
          disabled={disabled}
          error={error}
          label={label}
          placeholder={placeholder}
          radius={radius}
          searchable
          size={size}
          variant="default"
          withAsterisk={withAsterisk}
          withCheckIcon
        />
        <MultiSelect
          data={['React', 'Angular', 'Svelte', 'Vue']}
          description={description}
          disabled={disabled}
          error={error}
          label={label}
          placeholder={placeholder}
          radius={radius}
          searchable
          size={size}
          variant="filled"
          withAsterisk={withAsterisk}
          withCheckIcon
        />
        <MultiSelect
          data={['React', 'Angular', 'Svelte', 'Vue']}
          description={description}
          disabled={disabled}
          error={error}
          label={label}
          placeholder={placeholder}
          radius={radius}
          searchable
          size={size}
          variant="unstyled"
          withAsterisk={withAsterisk}
          withCheckIcon
        />
        <MultiSelect
          data={['React', 'Angular', 'Svelte', 'Vue']}
          description={description}
          disabled={disabled}
          error={error}
          label={label}
          placeholder={placeholder}
          radius={radius}
          readOnly
          searchable
          size={size}
          value={['React', 'Angular']}
          variant="unstyled"
          withAsterisk={withAsterisk}
          withCheckIcon
        />
      </Feature>

      <Feature
        group="Combobox"
        title="Pill"
        url="https://mantine.dev/core/pill/"
      >
        <Group>
          <Pill disabled={disabled} radius={radius} size={size}>
            {label}
          </Pill>
          <Pill
            disabled={disabled}
            radius={radius}
            size={size}
            withRemoveButton
          >
            {label}
          </Pill>
        </Group>
      </Feature>

      <Feature
        group="Combobox"
        title="TagsInput"
        url="https://mantine.dev/core/tags-input/"
      >
        <TagsInput
          description={description}
          disabled={disabled}
          error={error}
          label={label}
          placeholder={placeholder}
          radius={radius}
          size={size}
          variant="default"
          withAsterisk={withAsterisk}
        />
        <TagsInput
          description={description}
          disabled={disabled}
          error={error}
          label={label}
          placeholder={placeholder}
          radius={radius}
          size={size}
          variant="filled"
          withAsterisk={withAsterisk}
        />
        <TagsInput
          description={description}
          disabled={disabled}
          error={error}
          label={label}
          placeholder={placeholder}
          radius={radius}
          size={size}
          variant="unstyled"
          withAsterisk={withAsterisk}
        />
      </Feature>
    </>
  );
});

export { ComboboxDemo };
