'use client';
import { Text } from '@mantine/core';
import { signOut } from 'next-auth/react';

export default function SignOutButton() {
  return (
    <button onClick={() => signOut({ callbackUrl: '/' })}>
      <Text>Logout</Text>
    </button>
  );
}