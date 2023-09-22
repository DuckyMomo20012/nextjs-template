import {
  Checkbox,
  Chip,
  ColorInput,
  FileInput,
  JsonInput,
  NumberInput,
  PasswordInput,
  PinInput,
  Radio,
  RangeSlider,
  Rating,
  SegmentedControl,
  Slider,
  Space,
  Switch,
  TextInput,
  Textarea,
} from '@mantine/core';
import { Feature } from '@/components/ui/Feature';
import { type ControlledDemoProps } from '@/pages';

const InputDemo = ({
  color,
  description,
  disabled,
  error,
  label,
  placeholder,
  radius,
  size,
  withAsterisk,
}: ControlledDemoProps) => {
  return (
    <>
      <Feature title="Checkbox">
        <Checkbox
          color={color}
          defaultChecked
          description={description}
          disabled={disabled}
          error={error}
          label={label}
          radius={radius}
          size={size}
        />
        <Checkbox
          color={color}
          defaultChecked
          description={description}
          disabled={disabled}
          error={error}
          indeterminate
          label={label}
          radius={radius}
          size={size}
        />
        <Checkbox
          color={color}
          defaultChecked
          description={description}
          disabled={disabled}
          error={error}
          label={label}
          labelPosition="left"
          radius={radius}
          size={size}
        />
      </Feature>

      <Feature title="Chip">
        <Chip
          color={color}
          defaultChecked
          disabled={disabled}
          radius={radius}
          size={size}
          variant="filled"
        >
          {label}
        </Chip>
        <Chip
          color={color}
          defaultChecked
          disabled={disabled}
          radius={radius}
          size={size}
          variant="light"
        >
          {label}
        </Chip>
        <Chip
          color={color}
          defaultChecked
          disabled={disabled}
          radius={radius}
          size={size}
          variant="outline"
        >
          {label}
        </Chip>
      </Feature>

      <Feature title="ColorInput">
        <ColorInput
          description={description}
          disabled={disabled}
          error={error}
          label={label}
          placeholder={placeholder}
          radius={radius}
          size={size}
          withAsterisk={withAsterisk}
        />
        <ColorInput
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
        <ColorInput
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

      <Feature title="FileInput">
        <FileInput
          description={description}
          disabled={disabled}
          error={error}
          label={label}
          placeholder={placeholder}
          radius={radius}
          size={size}
          withAsterisk={withAsterisk}
        />
        <FileInput
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
        <FileInput
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

      <Feature title="JsonInput">
        <JsonInput
          description={description}
          disabled={disabled}
          error={error}
          label={label}
          placeholder={placeholder}
          radius={radius}
          size={size}
          withAsterisk={withAsterisk}
        />
        <JsonInput
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
        <JsonInput
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

      <Feature title="NumberInput">
        <NumberInput
          description={description}
          disabled={disabled}
          error={error}
          label={label}
          placeholder={placeholder}
          radius={radius}
          size={size}
          withAsterisk={withAsterisk}
        />
        <NumberInput
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
        <NumberInput
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

      <Feature title="PasswordInput">
        <PasswordInput
          description={description}
          disabled={disabled}
          error={error}
          label={label}
          placeholder={placeholder}
          radius={radius}
          size={size}
          withAsterisk={withAsterisk}
        />
        <PasswordInput
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
        <PasswordInput
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

      <Feature title="PinInput">
        <PinInput
          disabled={disabled}
          error={!!error}
          placeholder={placeholder || '○'}
          radius={radius}
          size={size}
        />
        <PinInput
          disabled={disabled}
          error={!!error}
          placeholder={placeholder || '○'}
          radius={radius}
          size={size}
          variant="filled"
        />
        <PinInput
          disabled={disabled}
          error={!!error}
          placeholder={placeholder || '○'}
          radius={radius}
          size={size}
          variant="unstyled"
        />
      </Feature>

      <Feature title="Radio">
        <Radio
          color={color}
          disabled={disabled}
          error={!!error}
          label={label}
          radius={radius}
          size={size}
        />
        <Radio
          color={color}
          disabled={disabled}
          error={!!error}
          label={label}
          labelPosition="left"
          radius={radius}
          size={size}
        />
      </Feature>

      <Feature title="Rating">
        <Rating color={color} size={size} />
        <Rating color={color} highlightSelectedOnly size={size} value={2} />
        <Rating color={color} readOnly size={size} value={3} />
      </Feature>

      <Feature title="SegmentedControl">
        <SegmentedControl
          color={color}
          data={['React', 'Vue', 'Angular']}
          disabled={disabled}
          radius={radius}
          size={size}
        />
        <SegmentedControl
          color={color}
          data={['React', 'Vue', 'Angular']}
          disabled={disabled}
          orientation="vertical"
          radius={radius}
          size={size}
        />
        <SegmentedControl
          color={color}
          data={['React', 'Vue', 'Angular']}
          disabled={disabled}
          fullWidth
          radius={radius}
          size={size}
        />
        <SegmentedControl
          color={color}
          data={['React', 'Vue', 'Angular']}
          disabled={disabled}
          radius={radius}
          readOnly
          size={size}
        />
      </Feature>

      <Feature title="Slider">
        <Slider
          color={color}
          defaultValue={20}
          disabled={disabled}
          labelAlwaysOn
          marks={[
            { value: 20, label: '20%' },
            { value: 50, label: '50%' },
            { value: 80, label: '80%' },
          ]}
          radius={radius}
          size={size}
        />
        <Space h="xs" />
        <Slider
          color={color}
          defaultValue={80}
          disabled={disabled}
          inverted
          marks={[
            { value: 20, label: '20%' },
            { value: 50, label: '50%' },
            { value: 80, label: '80%' },
          ]}
          radius={radius}
          size={size}
        />
        <Space h="xs" />
        <RangeSlider
          color={color}
          defaultValue={[20, 80]}
          disabled={disabled}
          inverted
          marks={[
            { value: 20, label: '20%' },
            { value: 50, label: '50%' },
            { value: 80, label: '80%' },
          ]}
          radius={radius}
          size={size}
        />
        <Space h="xs" />
      </Feature>

      <Feature title="Switch">
        <Switch
          color={color}
          description={description}
          disabled={disabled}
          error={!!error}
          label={label}
          radius={radius}
          size={size}
        />
        <Switch
          color={color}
          description={description}
          disabled={disabled}
          error={!!error}
          label={label}
          labelPosition="left"
          radius={radius}
          size={size}
        />
      </Feature>

      <Feature title="Textarea">
        <Textarea
          description={description}
          disabled={disabled}
          error={error}
          label={label}
          placeholder={placeholder}
          radius={radius}
          size={size}
          withAsterisk={withAsterisk}
        />
        <Textarea
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
        <Textarea
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

      <Feature title="TextInput">
        <TextInput
          description={description}
          disabled={disabled}
          error={error}
          label={label}
          placeholder={placeholder}
          radius={radius}
          size={size}
          withAsterisk={withAsterisk}
        />
        <TextInput
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
        <TextInput
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
};

export { InputDemo };