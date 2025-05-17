'use client';
import { Text } from '@mantine/core';
import { signIn } from 'next-auth/react';

export default function SignInButton({ provider }: { provider: string }) {
  return (
    <button onClick={() => signIn(provider)}>
      <Text>Login</Text>
    </button>
  );
}