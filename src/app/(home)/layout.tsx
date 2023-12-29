import { Stack } from '@mantine/core';
import { AppShell } from '@/components/layouts/AppShell';

const HomePageLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <AppShell>
      <Stack className="relative h-[calc(100dvh_-_var(--app-shell-header-offset)_-_var(--app-shell-footer-offset)_-_var(--app-shell-padding)_*_2)]">
        {children}
      </Stack>
    </AppShell>
  );
};

export default HomePageLayout;
