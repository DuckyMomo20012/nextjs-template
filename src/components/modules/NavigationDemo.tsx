'use client';

import { NavLink, Pagination, Stepper, Tabs } from '@mantine/core';
import { memo } from 'react';
import { type ControlledDemoProps } from '@/app/(home)/page';
import { Feature } from '@/components/elements/Feature';

const NavigationDemo = memo(function NavigationDemo({
  color,
  description,
  disabled,
  label,
  radius,
  size,
  loading,
}: ControlledDemoProps) {
  return (
    <>
      <Feature group="Navigation" title="NavLink">
        <NavLink
          color={color}
          description={description}
          disabled={disabled}
          label={label}
          variant="default"
        />
        <NavLink
          active
          color={color}
          description={description}
          disabled={disabled}
          label={label}
          variant="subtle"
        />
        <NavLink
          active
          color={color}
          description={description}
          disabled={disabled}
          label={label}
          variant="light"
        />
        <NavLink
          active
          color={color}
          description={description}
          disabled={disabled}
          label={label}
          variant="filled"
        />
      </Feature>

      <Feature
        className="col-span-1 md:col-span-2"
        group="Navigation"
        title="Pagination"
      >
        <Pagination
          color={color}
          disabled={disabled}
          radius={radius}
          size={size}
          total={8}
        />
        <Pagination
          color={color}
          disabled={disabled}
          radius={radius}
          size={size}
          total={8}
          withControls
        />
        <Pagination
          color={color}
          disabled={disabled}
          radius={radius}
          size={size}
          total={8}
          withControls
          withEdges
        />
      </Feature>

      <Feature
        className="col-span-1 md:col-span-2"
        group="Navigation"
        title="Stepper"
      >
        <Stepper active={1} color={color} radius={radius} size={size}>
          <Stepper.Step
            description="Create an account"
            label="First step"
            loading={loading}
          >
            Step 1 content: Create an account
          </Stepper.Step>
          <Stepper.Step
            description="Verify email"
            label="Second step"
            loading={loading}
          >
            Step 2 content: Verify email
          </Stepper.Step>
          <Stepper.Step
            description="Get full access"
            label="Final step"
            loading={loading}
          >
            Step 3 content: Get full access
          </Stepper.Step>
          <Stepper.Completed>
            Completed, click back button to get to previous step
          </Stepper.Completed>
        </Stepper>
        <Stepper
          active={1}
          color={color}
          orientation="vertical"
          radius={radius}
          size={size}
        >
          <Stepper.Step
            description="Create an account"
            label="First step"
            loading={loading}
          >
            Step 1 content: Create an account
          </Stepper.Step>
          <Stepper.Step
            description="Verify email"
            label="Second step"
            loading={loading}
          >
            Step 2 content: Verify email
          </Stepper.Step>
          <Stepper.Step
            description="Get full access"
            label="Final step"
            loading={loading}
          >
            Step 3 content: Get full access
          </Stepper.Step>
          <Stepper.Completed>
            Completed, click back button to get to previous step
          </Stepper.Completed>
        </Stepper>
      </Feature>

      <Feature group="Navigation" title="Tabs">
        <Tabs color={color} defaultValue="gallery" radius={radius}>
          <Tabs.List>
            <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
            <Tabs.Tab value="messages">Messages</Tabs.Tab>
            <Tabs.Tab value="settings">Settings</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="gallery">Gallery tab content</Tabs.Panel>

          <Tabs.Panel value="messages">Messages tab content</Tabs.Panel>

          <Tabs.Panel value="settings">Settings tab content</Tabs.Panel>
        </Tabs>
        <Tabs
          color={color}
          defaultValue="gallery"
          radius={radius}
          variant="outline"
        >
          <Tabs.List>
            <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
            <Tabs.Tab value="messages">Messages</Tabs.Tab>
            <Tabs.Tab value="settings">Settings</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="gallery">Gallery tab content</Tabs.Panel>

          <Tabs.Panel value="messages">Messages tab content</Tabs.Panel>

          <Tabs.Panel value="settings">Settings tab content</Tabs.Panel>
        </Tabs>
        <Tabs
          color={color}
          defaultValue="gallery"
          radius={radius}
          variant="pills"
        >
          <Tabs.List>
            <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
            <Tabs.Tab value="messages">Messages</Tabs.Tab>
            <Tabs.Tab value="settings">Settings</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="gallery">Gallery tab content</Tabs.Panel>

          <Tabs.Panel value="messages">Messages tab content</Tabs.Panel>

          <Tabs.Panel value="settings">Settings tab content</Tabs.Panel>
        </Tabs>
        <Tabs
          color={color}
          defaultValue="gallery"
          orientation="vertical"
          radius={radius}
        >
          <Tabs.List>
            <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
            <Tabs.Tab value="messages">Messages</Tabs.Tab>
            <Tabs.Tab value="settings">Settings</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="gallery">Gallery tab content</Tabs.Panel>

          <Tabs.Panel value="messages">Messages tab content</Tabs.Panel>

          <Tabs.Panel value="settings">Settings tab content</Tabs.Panel>
        </Tabs>
      </Feature>
    </>
  );
});

export { NavigationDemo };
