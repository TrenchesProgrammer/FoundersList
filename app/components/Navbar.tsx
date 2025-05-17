
'use client';

import { Box, Flex, Title, Text } from '@mantine/core';
import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <Box px="md" py="xs" bg="blue.5">
      <header>
        <Flex justify="space-between" align="center">
          <Link href="/" style={{ textDecoration: 'none' }}>
            <Title order={1} c="white">
              Founders<span style={{ color: 'blue' }}>List</span>
            </Title>
          </Link>

          <Flex justify="center" align="center" gap="md">
            {session?.user ? (
              <>
                <Link href="/startup/create">
                  <Text c="white">Create</Text>
                </Link>
                <Link href={`/user/${session.user.id}`}>
                  <Text c="white">{session.user.name}</Text>
                </Link>
                <button onClick={() => signOut({ callbackUrl: '/' })}>
                  <Text c="white">Logout</Text>
                </button>
                
              </>
            ) : (
              <button onClick={() => signIn('github')}>
                <Text c="white">Login</Text>
              </button>
            )}
          </Flex>
        </Flex>
      </header>
    </Box>
  );
};

export default Navbar;