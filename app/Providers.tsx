'use client';
import { MantineProvider } from '@mantine/core';
import { SessionProvider } from 'next-auth/react';
import '@mantine/core/styles.css';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <MantineProvider>
        {children}
      </MantineProvider>
    </SessionProvider>
  );
}